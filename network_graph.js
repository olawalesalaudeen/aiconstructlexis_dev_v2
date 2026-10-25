/* Interactive Network: sigma.js (WebGL) over a precomputed layout.
 *
 * Content comes from nomological_network_data/graph.bundle.json (rewritten by the
 * pipeline export); positions and regions come from graph_v2/layout.json, written by
 * tools/build_graph_v2_layout.py. Entities missing from the layout are placed next to
 * their neighbors, so a stale layout degrades gracefully.
 *
 * State is one object (`state`) mirrored in the URL (?sel=, types=, min_papers=, ...),
 * with the selection kept as an ordered list of entity keys so the planned subgraph
 * builder can extend it. window.LexisGraph exposes the graph, renderer, and selection.
 */
(function () {
    'use strict';

    const DATA_URL = 'nomological_network_data/graph.bundle.json';
    const LAYOUT_URL = 'graph_v2/layout.json';

    const ENTITY_TYPES = [
        { key: 'construct', label: 'Constructs', one: 'Construct', ring: false },
        { key: 'behavior', label: 'Behavioral Indicators', one: 'Behavioral Indicator', ring: true },
        { key: 'measurement', label: 'Measurement Instruments', one: 'Measurement Instrument', ring: false },
    ];
    const ENTITY = Object.fromEntries(ENTITY_TYPES.map(t => [t.key, t]));
    const EDGE_TYPES = [
        { key: 'measured_by', label: 'Measured by', directed: true, out: 'Measured by', in: 'Measures' },
        { key: 'causes', label: 'Causal', directed: true, out: 'Causal', in: 'Caused by' },
        { key: 'related', label: 'Related', directed: false, out: 'Related to' },
        { key: 'correlates', label: 'Correlates', directed: false, out: 'Correlates with' },
    ];
    const EDGE = Object.fromEntries(EDGE_TYPES.map(t => [t.key, t]));
    // Line style per relationship type, used by the map (WebGL programs below) and the legend.
    // Dash patterns are [on, off] in screen pixels.
    const LINE_STYLE = { measured_by: 'solid', causes: 'dotted', related: 'dashed', correlates: 'solid' };
    const DASH = { dotted: [2, 3], dashed: [7, 4] };
    const EDGE_PROGRAM = {   // sigma program names: straight (highlighted) and curved (overview, faint)
        solid: { arrow: 'arrow', line: 'line', curve: 'curve' },
        dotted: { arrow: 'arrowDotted', line: 'lineDotted', curve: 'curveDotted' },
        dashed: { arrow: 'arrowDashed', line: 'lineDashed', curve: 'curveDashed' },
    };
    // Relationships need at least MIN_MIN_PAPERS papers to be drawn; single-paper ones are never
    // shown on the map (they stay listed, grayed, in the details panel and on entity pages).
    const MIN_MIN_PAPERS = 2;
    const DEFAULT_MIN_PAPERS = 2;
    let maxMinPapers = 1;           // set from the data: the most papers behind any relationship
    let regionVisible = new Map(), smallGroupsVisible = 0;   // visible entities per region (full map)
    const OVERVIEW_RATIO = 0.6;     // camera ratio above which region labels replace node labels
    // Region labels fade out before entity labels take over at OVERVIEW_RATIO, so they never overlap.
    const REGION_FADE = [OVERVIEW_RATIO, OVERVIEW_RATIO + 0.15];

    // Size levels: the N most-cited entities (precomputed, label-aware layouts) or the full map.
    const LEVEL_NAMES = { '50': '50 most cited', '150': '150', all: 'All' };

    const state = {
        level: '50',                // '50' | '150' | 'all'
        hovered: null,
        selection: [],              // ordered entity keys; the last one is shown in the panel
        focus: null,                // { root, keys: Set } while the neighborhood view is on
        edge: null,                 // { s, t, rel } while the papers behind one relationship are shown
        induced: false,             // "Only selected entities": hide their other connections
        hoveredEdge: null,
        entityTypes: new Set(ENTITY_TYPES.map(t => t.key)),
        edgeTypes: new Set(EDGE_TYPES.map(t => t.key)),
        minPapers: DEFAULT_MIN_PAPERS,
        showUnlinked: false,
        showRegions: true,
    };

    let graph, renderer, layout, regions = [], shelves = [];
    const levelPos = {}, levelScale = {}, levelAspect = {}, levelSets = new Map();
    let levelCenterX = 0, stretch = 1;   // level views widen horizontally to fill wide screens
    const dragged = {};             // level -> Map(key -> position the reader dragged it to, before stretch)
    let drag = null, justDragged = false;
    let visibleRanked = [], overviewLabels = null;
    let P = null;                   // current palette, read from CSS tokens
    let visibleNodes = new Set(), visibleEdges = new Set(), visibleDegree = new Map();
    let active = null;              // { core, set, labels } for hover / selection highlighting
    let savedCamera = null, overview = null;
    let animation = null;           // { cancel, targets } for the running node animation
    const nameToKey = new Map();
    const listeners = {};
    const $ = id => document.getElementById(id);

    // ------------------------------------------------------------------ utils
    const fmt = n => Number(n).toLocaleString('en-US');
    const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    function hexToRgb(hex) {
        const m = hex.replace('#', '').trim();
        const h = m.length === 3 ? m.split('').map(c => c + c).join('') : m;
        return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
    }
    function parseColor(c) {
        if (c.startsWith('#')) return hexToRgb(c);
        const m = c.match(/[\d.]+/g) || [0, 0, 0];
        return m.slice(0, 3).map(Number);
    }
    function mix(a, b, t) {          // t = share of b
        const x = parseColor(a), y = parseColor(b);
        return '#' + x.map((v, i) => Math.round(v * (1 - t) + y[i] * t).toString(16).padStart(2, '0')).join('');
    }
    // Sigma blends with (ONE, ONE_MINUS_SRC_ALPHA) and does not premultiply in its shaders, so
    // translucent colors must arrive premultiplied or overlapping edges add up to white.
    function withAlpha(c, alpha) { const [r, g, b] = parseColor(c); return `rgba(${r},${g},${b},${alpha})`; }
    function rgbaPM(c, alpha) {
        const [r, g, b] = parseColor(c);
        return `rgba(${Math.round(r * alpha)},${Math.round(g * alpha)},${Math.round(b * alpha)},${alpha})`;
    }
    function emit(evt, detail) { (listeners[evt] || []).forEach(cb => { try { cb(detail); } catch (e) { console.error(e); } }); }
    // Readers who prefer reduced motion get instant camera and node moves instead of animations
    // (the CSS transitions already honor the same setting).
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    let sizeScale = 1;              // smaller marks on small screens, where the whole map is narrower
    // Radii in screen pixels; the level formulas match level_radius() in the layout script.
    function sizeFor(a) {
        const p = Math.max(a.papers, 1);
        // A level missing from layout.json uses the full-map formula: during startup this can
        // run before applyLevel's own fallback to 'all' has normalized state.level.
        const lvl = state.level === 'all' ? null : levelSets.get(state.level);
        if (!lvl) return sizeScale * Math.min(1.5 + 0.45 * Math.sqrt(p), 18);
        return sizeScale * (lvl.size <= 60 ? Math.min(4 + 0.55 * Math.sqrt(p), 18) : Math.min(3 + 0.45 * Math.sqrt(p), 15));
    }
    function updateSizeScale() {
        const el = $('sigma');
        const next = clamp(Math.min(el.offsetWidth, el.offsetHeight) / 780, 0.6, 1);
        if (Math.abs(next - sizeScale) < 0.04) return false;
        sizeScale = next;
        graph.updateEachNodeAttributes((k, a) => ({ ...a, size: sizeFor(a) }));
        widthCache.clear();
        return true;
    }
    const edgeSize = p => 0.4 + 0.42 * Math.log2(Math.max(p, 1));
    const kindOf = k => graph.getNodeAttribute(k, 'kind');

    function swatchSVG(kind, color) {
        const c = color || (P ? P.node[kind] : 'currentColor');
        return ENTITY[kind] && ENTITY[kind].ring
            ? `<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="4.4" fill="none" stroke="${c}" stroke-width="2.4"/></svg>`
            : `<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="5.4" fill="${c}"/></svg>`;
    }
    function edgeSVG(rel, w = 24) {
        const c = P ? P.edge[rel] : 'currentColor';
        const head = EDGE[rel].directed ? `<path d="M${w - 7} 4.5 L${w} 8 L${w - 7} 11.5z" fill="${c}"/>` : '';
        const dash = { dotted: ' stroke-dasharray="0.1 4"', dashed: ' stroke-dasharray="5 3.5"' }[LINE_STYLE[rel]] || '';
        return `<svg width="${w}" height="16" viewBox="0 0 ${w} 16" aria-hidden="true"><line x1="1.5" y1="8" x2="${EDGE[rel].directed ? w - 7 : w - 1.5}" y2="8" stroke="${c}" stroke-width="2.2" stroke-linecap="round"${dash}/>${head}</svg>`;
    }

    // ---------------------------------------------------------------- palette
    // Tokens may hold any CSS color (or var() of one). Resolve them through the browser and
    // normalize to rgb() with a 1x1 canvas, so a site theme can use any color syntax.
    const probe = document.createElement('span');
    const colorCtx = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
    function cssColor(token, fallback) {
        if (!probe.isConnected) { probe.hidden = true; document.body.appendChild(probe); }
        probe.style.color = `var(${token}, ${fallback})`;
        colorCtx.clearRect(0, 0, 1, 1);
        colorCtx.fillStyle = fallback;
        colorCtx.fillStyle = getComputedStyle(probe).color;
        colorCtx.fillRect(0, 0, 1, 1);
        const [r, g, b] = colorCtx.getImageData(0, 0, 1, 1).data;
        return `rgb(${r},${g},${b})`;
    }
    function readPalette() {
        const cs = getComputedStyle(document.documentElement);
        const bg = cssColor('--ng-bg', '#ffffff');
        const pal = {
            bg, surface: cssColor('--ng-surface-solid', '#ffffff'), label: cssColor('--ng-ink', '#1c1917'),
            muted: cssColor('--ng-muted', '#6b645e'), halo: withAlpha(bg, 0.9),
            edgeAlpha: parseFloat(cs.getPropertyValue('--edge-alpha')) || 0.16,
            font: cs.getPropertyValue('--font-sans').trim() || 'sans-serif',
            node: {}, edge: {},
            dark: parseColor(bg).reduce((sum, x) => sum + x, 0) < 384,
        };
        ENTITY_TYPES.forEach(t => { pal.node[t.key] = cssColor('--node-' + t.key, '#888888'); });
        EDGE_TYPES.forEach(t => { pal.edge[t.key] = cssColor('--edge-' + t.key, '#888888'); });
        return pal;
    }

    // Colors are baked into attributes so the reducers only swap precomputed values.
    function applyColors() {
        P = readPalette();
        const dimT = P.dark ? 0.8 : 0.84;
        graph.forEachNode((k, a) => {
            // Fill color always means entity type. The halo/ring borders are where a later
            // encoding (for example disagreement between papers) would go, as an outline.
            const c = P.node[a.kind] || P.muted;
            const ring = ENTITY[a.kind] && ENTITY[a.kind].ring;
            const core = ring ? mix(c, P.bg, P.dark ? 0.7 : 0.78) : c;
            graph.mergeNodeAttributes(k, {
                color: c, coreColor: core, haloColor: P.bg, ringSize: ring ? 0.36 : 0,
                cDim: mix(c, P.bg, dimT), cDimCore: mix(core, P.bg, dimT),
                cLight: mix(c, P.bg, 0.5), cLightCore: ring ? mix(core, P.bg, 0.4) : mix(c, P.bg, 0.5),
            });
        });
        graph.forEachEdge((e, a) => {
            // Neutral at overview; the relationship colors appear on hover, selection, and focus.
            const c = P.edge[a.rel];
            graph.mergeEdgeAttributes(e, {
                color: rgbaPM(P.muted, P.edgeAlpha), cLevel: rgbaPM(P.muted, Math.min(0.5, P.edgeAlpha * (0.9 + 0.55 * Math.log2(a.papers + 1)))), cMid: rgbaPM(c, 0.42), cFaint: rgbaPM(P.muted, Math.min(0.3, P.edgeAlpha * 1.4)), cStrong: rgbaPM(c, P.dark ? 0.9 : 0.85),
            });
        });
        if (renderer) renderer.setSetting('labelFont', P.font);
        renderLegend();
        renderRegionsDOM();
    }

    // ----------------------------------------------------------------- labels
    const labelFontSize = d => Math.round(11 + Math.min(4.5, d.size / 5));
    function drawLabel(ctx, d, settings) {
        if (!d.label) return;
        const fs = labelFontSize(d) + (d.focusRoot ? 3 : 0);
        ctx.font = `${d.kind === 'construct' || d.focusRoot ? 600 : 500} ${fs}px ${settings.labelFont}`;
        const left = d.labelSide === 'left';
        const x = left ? d.x - d.size - 4 : d.x + d.size + 4;
        ctx.textAlign = left ? 'right' : 'left';
        ctx.textBaseline = 'middle';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 3.5;
        ctx.strokeStyle = P.halo;
        ctx.strokeText(d.label, x, d.y);
        ctx.fillStyle = P.label;
        ctx.fillText(d.label, x, d.y);
        ctx.textAlign = 'left';
    }
    function drawHover(ctx, d, settings) {
        const label = d.label || d.name;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size + 3.5, 0, Math.PI * 2);
        ctx.lineWidth = 2;
        ctx.strokeStyle = P.label;
        ctx.stroke();
        if (!label) return;
        // Same size as drawLabel's text underneath, so the pill covers it.
        const fs = labelFontSize(d) + (d.focusRoot ? 3 : 1);
        ctx.font = `600 ${fs}px ${settings.labelFont}`;
        const w = ctx.measureText(label).width, h = fs + 10;
        const left = d.labelSide === 'left';
        const x = left ? d.x - d.size - 10 - w : d.x + d.size + 10;
        ctx.save();
        ctx.shadowColor = P.dark ? 'rgba(0,0,0,0.5)' : 'rgba(28,25,23,0.18)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetY = 2;
        ctx.fillStyle = P.surface;
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(x - 7, d.y - h / 2, w + 14, h, 6); else ctx.rect(x - 7, d.y - h / 2, w + 14, h);
        ctx.fill();
        ctx.restore();
        ctx.fillStyle = P.label;
        ctx.textBaseline = 'middle';
        ctx.fillText(label, x, d.y + 0.5);
    }

    // --------------------------------------------------------------- reducers
    function nodeReducer(k, d) {
        if (!visibleNodes.has(k)) return { ...d, hidden: true };
        if (!active) return overviewLabels && overviewLabels.has(k) ? { ...d, forceLabel: true } : d;
        const r = { ...d };
        if (active.set.has(k)) {
            r.zIndex = active.core.has(k) ? 3 : 2;
            if (active.core.has(k)) { r.highlighted = true; r.forceLabel = true; }
            else {
                // With a selection, connected entities that are not selected are drawn lighter.
                if (active.light) { r.color = d.cLight; r.coreColor = d.cLightCore; }
                if (active.labels.has(k)) r.forceLabel = true;
            }
        } else {
            r.color = d.cDim;
            r.coreColor = d.cDimCore;
            r.label = null;
            r.zIndex = 0;
        }
        return r;
    }
    function edgeReducer(e, d) {
        if (!visibleEdges.has(e)) return { ...d, hidden: true };
        // Overview edges are neutral curves; highlighted ones go straight so they can carry arrows.
        if (!active) return { ...d, type: d.curveType, color: state.level === 'all' ? d.color : d.cLevel };
        const s = graph.source(e), t = graph.target(e);
        if (active.set.has(s) && active.set.has(t)) {
            const boost = e === state.hoveredEdge ? 1.6 : 0;
            if (active.pair) {
                const e0 = state.edge;
                const same = d.rel === e0.rel && ((s === e0.s && t === e0.t) || (!EDGE[d.rel].directed && s === e0.t && t === e0.s));
                return { ...d, color: same ? d.cStrong : d.cMid, size: d.size * 1.2 + (same ? 1.6 : 0.4), zIndex: 2 };
            }
            if (active.core.has(s) || active.core.has(t)) return { ...d, color: d.cStrong, size: d.size * 1.2 + 0.6 + boost, zIndex: 2 };
            // The single-entity neighborhood view also shows lines among the neighbors; the
            // selection view shows only the selected entities' own connections.
            if (state.focus && !state.focus.multi) return { ...d, color: d.cMid, zIndex: 1 };
            if (state.focus) return { ...d, type: d.curveType, color: d.cFaint, zIndex: 0 };
        }
        return { ...d, hidden: true };
    }

    // ------------------------------------------------------------- visibility
    const edgePasses = a => state.edgeTypes.has(a.rel) && a.papers >= state.minPapers;
    function recomputeVisibility() {
        visibleEdges = new Set();
        visibleDegree = new Map();
        const selected = new Set(state.selection);
        if (state.focus) {
            visibleNodes = new Set(state.focus.keys);
            // All relationships among the shown entities; the selection view draws the ones that
            // do not touch a selected entity much lighter (edgeReducer).
            graph.forEachEdge((e, a, s, t) => {
                if (edgePasses(a) && visibleNodes.has(s) && visibleNodes.has(t)) visibleEdges.add(e);
            });
            rankVisible();
            return;
        }
        const lvl = state.level === 'all' ? null : levelSets.get(state.level);   // missing level: same fallback as sizeFor
        const inLevel = k => !lvl || lvl.has(k);
        const kindOk = k => inLevel(k) && (selected.has(k) || state.entityTypes.has(kindOf(k)));
        graph.forEachEdge((e, a, s, t) => {
            if (!edgePasses(a) || !kindOk(s) || !kindOk(t)) return;
            visibleEdges.add(e);
            visibleDegree.set(s, (visibleDegree.get(s) || 0) + 1);
            visibleDegree.set(t, (visibleDegree.get(t) || 0) + 1);
        });
        visibleNodes = new Set();
        let unlinked = 0;
        graph.forEachNode(k => {
            if (!kindOk(k)) return;
            const linked = visibleDegree.get(k) > 0;
            if (!linked) unlinked++;
            if (linked || (state.level === 'all' && state.showUnlinked) || selected.has(k)) visibleNodes.add(k);
        });
        $('unlinkedCount').textContent = `(${fmt(unlinked)})`;
        // Region labels and the small-groups caption only show where their entities are visible.
        regionVisible = new Map(); smallGroupsVisible = 0;
        const sg = layout.small_groups;
        visibleNodes.forEach(k => {
            const a = graph.getNodeAttributes(k);
            if (a.community >= 0) regionVisible.set(a.community, (regionVisible.get(a.community) || 0) + 1);
            if (sg && a.community >= 0 && a.my < sg.y) smallGroupsVisible++;
        });
        rankVisible();
    }
    function rankVisible() {
        visibleRanked = [...visibleNodes].sort((a, b) => graph.getNodeAttribute(b, 'papers') - graph.getNodeAttribute(a, 'papers'));
    }

    function computeActive() {
        // A relationship opened from a grayed (filter-hidden) row has no visible endpoints to
        // highlight: the papers panel still shows, but the map keeps its normal highlighting.
        if (state.edge && !state.hovered && visibleNodes.has(state.edge.s) && visibleNodes.has(state.edge.t)) {
            const pair = new Set([state.edge.s, state.edge.t]);
            active = { core: pair, set: pair, ranked: [], labels: new Set(), pair: true };
            return;
        }
        let core = null, light = true;
        if (state.hovered && visibleNodes.has(state.hovered) && !state.selection.includes(state.hovered)) { core = [state.hovered]; light = false; }
        else if (state.selection.length) core = state.selection.filter(k => visibleNodes.has(k));
        else if (state.focus) core = [state.focus.root];
        if (!core || !core.length) { active = null; return; }
        const set = new Set(core);
        for (const k of core) {
            graph.forEachEdge(k, (e, a, s, t) => { if (visibleEdges.has(e)) { set.add(s); set.add(t); } });
        }
        const ranked = [...set].filter(k => !core.includes(k))
            .sort((a, b) => graph.getNodeAttribute(b, 'papers') - graph.getNodeAttribute(a, 'papers'));
        active = { core: new Set(core), set, ranked, labels: new Set(), light };
    }

    // Neighbor labels are forced on, so they skip sigma's label grid; pick a non-overlapping
    // subset in screen space instead (most-cited first). Rerun when the camera or positions change.
    const measureCtx = document.createElement('canvas').getContext('2d');
    const widthCache = new Map();
    function labelBox(k, pad, cameraState) {
        const a = graph.getNodeAttributes(k);
        const v = renderer.graphToViewport({ x: a.x, y: a.y }, { cameraState });
        const size = renderer.scaleSize(a.size);
        const fs = labelFontSize({ size }) + pad / 4 + (a.focusRoot ? 3 : 0);
        const key = k + '|' + fs;
        if (!widthCache.has(key)) {
            measureCtx.font = `600 ${fs}px ${P.font}`;
            widthCache.set(key, measureCtx.measureText(a.label).width);
        }
        const w = widthCache.get(key) + pad, h = fs + 4 + pad / 2;
        const x0 = a.labelSide === 'left' ? v.x - size - 4 - w : v.x + size + 4;
        return [x0, v.y - h / 2, x0 + w, v.y + h / 2];
    }
    function greedyLabels(ranked, core, limit) {
        const f = freeArea();
        const cameraState = renderer.getCamera().getState();
        const placed = core.map(k => labelBox(k, 14, cameraState));
        if (window.innerWidth > 760 && $('controls').classList.contains('is-collapsed')) {
            const c = $('controls').getBoundingClientRect(), st = $('stage').getBoundingClientRect();
            placed.push([c.left - st.left - 6, c.top - st.top - 6, c.right - st.left + 6, c.bottom - st.top + 6]);
        }
        const labels = new Set();
        for (const k of ranked) {
            if (labels.size >= limit) break;
            const r = labelBox(k, 2, cameraState);
            // Skip labels that would sit under the floating panels or off the stage.
            if (r[0] < f.left || r[2] > f.W - f.right || r[1] < f.top || r[3] > f.H - f.bottom) continue;
            if (placed.some(q => r[0] < q[2] && r[2] > q[0] && r[1] < q[3] && r[3] > q[1])) continue;
            placed.push(r);
            labels.add(k);
        }
        return labels;
    }
    function pickLabels() {
        if (!renderer) return;
        // Level views label every entity that fits (most-cited first); the full map uses
        // sigma's label grid instead.
        overviewLabels = !active && state.level !== 'all' && !state.focus ? greedyLabels(visibleRanked, [], 400) : null;
        if (active && !active.pair) active.labels = greedyLabels(active.ranked, [...active.core], state.focus ? 90 : 60);
    }
    let labelFrame = 0;
    function schedulePickLabels() {
        if (labelFrame || !renderer || (!active && state.level === 'all')) return;
        labelFrame = requestAnimationFrame(() => {
            labelFrame = 0;
            pickLabels();
            renderer.refresh({ skipIndexation: true });
        });
    }

    function refresh(full) {
        computeActive();
        pickLabels();
        renderer.refresh(full ? undefined : { skipIndexation: true });
        renderStats();
    }

    // ---------------------------------------------------------- region labels
    function renderRegionsDOM() {
        const box = $('regions');
        box.innerHTML = regions.map((r, i) => {
            const fs = Math.round(11.5 + 4.5 * Math.sqrt(r.size / regions[0].size));
            return `<div class="ng2-region" data-i="${i}" style="font-size:${fs}px">${esc(r.label)}</div>`;
        }).join('');
        regions.forEach((r, i) => { r.el = box.children[i]; r.w = 0; });
        shelves.forEach(sh => {
            sh.el = document.createElement('div');
            sh.el.className = 'ng2-region ng2-shelf';
            sh.el.innerHTML = sh.type
                ? `${swatchSVG(sh.type)} ${esc(ENTITY[sh.type] ? ENTITY[sh.type].label : sh.type)} with no relationships <span>${fmt(sh.count)}</span>`
                : `Small groups not linked to the main map <span>${fmt(sh.count)}</span>`;
            box.appendChild(sh.el);
        });
        positionRegions();
    }
    const regionShown = r => (regionVisible.get(r.id) || 0) >= Math.max(3, 0.12 * r.size);
    function positionRegions() {
        const box = $('regions');
        if (!renderer || !regions.length) return;
        const ratio = renderer.getCamera().ratio;
        const fade = clamp((ratio - REGION_FADE[0]) / (REGION_FADE[1] - REGION_FADE[0]), 0, 1);
        const show = state.level === 'all' && state.showRegions && !state.focus && !active && fade > 0;
        box.classList.toggle('is-hidden', !show);
        box.style.opacity = show ? String(fade) : '0';
        if (!show) return;
        const placed = [];
        for (const r of regions) {
            if (!r.w) { r.w = r.el.offsetWidth; r.h = r.el.offsetHeight; }
            // With strict filters a region can be mostly hidden; drop its label rather than float it.
            if (!regionShown(r)) { r.el.style.visibility = 'hidden'; continue; }
            const p = renderer.graphToViewport({ x: r.x, y: r.y });
            const W = renderer.getDimensions().width;
            if (r.w + 16 > W) { r.el.style.visibility = 'hidden'; continue; }
            p.x = clamp(p.x, r.w / 2 + 8, W - r.w / 2 - 8);
            // Larger regions are placed first; a smaller one that collides tries a nudge up or down.
            let spot = null;
            for (const dy of [0, -1.1, 1.1, -2.2, 2.2]) {
                const y = p.y + dy * r.h;
                const rect = [p.x - r.w / 2 - 6, y - r.h / 2 - 2, p.x + r.w / 2 + 6, y + r.h / 2 + 2];
                if (!placed.some(q => rect[0] < q[2] && rect[2] > q[0] && rect[1] < q[3] && rect[3] > q[1])) { spot = { y, rect }; break; }
            }
            r.el.style.visibility = spot ? 'visible' : 'hidden';
            if (!spot) continue;
            placed.push(spot.rect);
            r.el.style.transform = `translate(${p.x}px, ${spot.y}px) translate(-50%, -50%)`;
        }
        for (const sh of shelves) {
            sh.el.style.visibility = state.level === 'all' && (sh.always ? smallGroupsVisible > 0 : state.showUnlinked) ? 'visible' : 'hidden';
            const p = renderer.graphToViewport({ x: sh.x, y: sh.y });
            sh.el.style.transform = `translate(${p.x}px, ${p.y}px) translate(${sh.always ? '-50%' : '0'}, -100%)`;
        }
    }

    // -------------------------------------------------------------- selection
    function setSelection(keys) {
        const valid = [...new Set(keys)].filter(k => graph.hasNode(k));
        state.edge = null;
        // Any selection shows just the selected entities and their connections; the rest goes away.
        if (valid.length) { enterMulti(valid); return; }
        state.induced = false;   // clearing the selection also ends "Only selected entities"
        if (state.focus) exitFocus({ keepSelection: true });   // empty selection: back to the full map
        state.selection = valid;
        recomputeVisibility();
        refresh(true);
        renderPanel();
        syncURL();
        emit('selectionchange', state.selection.slice());
    }
    function toggleInSelection(k) {
        const sel = state.selection.slice();
        const i = sel.indexOf(k);
        if (i >= 0) sel.splice(i, 1); else sel.push(k);
        setSelection(sel);
    }

    // Free part of the stage (not under the floating panels), in viewport pixels.
    function freeArea({ ignorePanel = false } = {}) {
        const { width: W, height: H } = renderer.getDimensions();
        let left = 0, right = 0, bottom = 0, top = 0;
        if (window.innerWidth > 760) {
            const c = $('controls').getBoundingClientRect(), s = $('stage').getBoundingClientRect();
            // Collapsed, the controls are a small box in the corner: the graph gets the whole stage
            // and labels steer around the box (see greedyLabels).
            if (!$('controls').classList.contains('is-collapsed')) left = c.right - s.left;
            if (!$('panel').hidden && !ignorePanel) right = s.right - $('panel').getBoundingClientRect().left;
        } else {
            top = $('controls').getBoundingClientRect().bottom - $('stage').getBoundingClientRect().top;
            if (!$('panel').hidden) bottom = $('panel').getBoundingClientRect().height + 8;
        }
        if (!$('mapHint').hidden) bottom = Math.max(bottom, $('stage').getBoundingClientRect().bottom - $('mapHint').getBoundingClientRect().top + 6);
        if (W - left - right < 280) { left = 0; right = 0; }
        if (H - top - bottom < 200) { top = 0; bottom = 0; }
        return { W, H, left, right, top, bottom };
    }

    // Animate the camera so the given graph-space points fit in the free area.
    // Room (screen pixels) the labels of these entities need to the right of their dots.
    function labelRoom(keys) {
        let w = 0;
        for (const k of keys) { const a = graph.getNodeAttributes(k); w = Math.max(w, a.size + 12 + 0.58 * (labelFontSize(a) + 1) * a.label.length); }
        return w;
    }
    function fitPoints(points, { duration = 600, padding = 48, padX = padding, padRight = padX, maxRatio = 1.2, minRatio = 0 } = {}) {
        if (!points.length) return;
        if (reducedMotion.matches) duration = 0;
        const cam = renderer.getCamera();
        const f = freeArea();
        // graphToViewport defaults to the matrix of the last render; pass the live camera state
        // so this agrees with viewportToFramedGraph after an instant camera move.
        const cameraState = cam.getState();
        let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
        for (const p of points) {
            const v = renderer.graphToViewport(p, { cameraState });
            x0 = Math.min(x0, v.x); x1 = Math.max(x1, v.x); y0 = Math.min(y0, v.y); y1 = Math.max(y1, v.y);
        }
        const availW = Math.max(120, f.W - f.left - f.right - padX - padRight);
        const availH = Math.max(120, f.H - f.top - f.bottom - 2 * padding);
        const scale = Math.max((x1 - x0) / availW, (y1 - y0) / availH, 0.06 / cam.ratio);
        const ratio = clamp(cam.ratio * scale, Math.max(minRatio, renderer.getSetting('minCameraRatio')), maxRatio);
        const k = ratio / cam.ratio;
        // Put the box center at the center of the free area rather than the stage.
        const dx = (f.left + padX - f.right - padRight) / 2, dy = (f.top - f.bottom) / 2;
        const target = renderer.viewportToFramedGraph({ x: (x0 + x1) / 2 - dx * k, y: (y0 + y1) / 2 - dy * k }, { cameraState });
        const next = { x: target.x, y: target.y, ratio };
        if (duration) cam.animate(next, { duration, easing: 'cubicInOut' }); else cam.setState(next);
    }
    // ---------------------------------------------------------------- focus
    // A radial view of one entity's neighbors, grouped by entity type and ordered by papers.
    function focusTargets(root, keys) {
        const weight = new Map();
        graph.forEachEdge(root, (e, a, s, t) => {
            const o = s === root ? t : s;
            if (keys.has(o)) weight.set(o, Math.max(weight.get(o) || 0, a.papers));
        });
        const members = [...keys].filter(k => k !== root);
        const groups = ENTITY_TYPES.map(t => members.filter(m => kindOf(m) === t.key)
            .sort((a, b) => (weight.get(b) - weight.get(a)) || graph.getNodeAttribute(b, 'papers') - graph.getNodeAttribute(a, 'papers')))
            .filter(g => g.length);
        const n = members.length;
        const rings = Math.max(1, Math.ceil(n / 34));
        const gap = groups.length > 1 ? Math.max(1.2, n * 0.035) : 0;
        const slots = n + gap * groups.length;
        const R = 150;
        const { x: cx, y: cy } = graph.getNodeAttributes(root);
        const targets = { [root]: { x: cx, y: cy } };
        const sides = { [root]: 'right' };
        let slot = gap / 2, j = 0;
        for (const g of groups) {
            for (const m of g) {
                const ang = Math.PI / 2 - (2 * Math.PI * (slot + 0.5)) / slots;
                const r = R * (1 + 0.38 * (j % rings));
                targets[m] = { x: cx + r * Math.cos(ang), y: cy + r * Math.sin(ang) };
                sides[m] = Math.cos(ang) < -0.05 ? 'left' : 'right';
                slot += 1; j += 1;
            }
            slot += gap;
        }
        return { targets, sides };
    }
    function neighborhood(root) {
        const keys = new Set([root]);
        graph.forEachEdge(root, (e, a, s, t) => {
            const o = s === root ? t : s;
            if (edgePasses(a) && state.entityTypes.has(kindOf(o))) keys.add(o);
        });
        return keys;
    }
    function enterFocus(root) {
        if (!graph.hasNode(root)) return;
        if (!state.focus) savedCamera = renderer.getCamera().getState();
        const keys = neighborhood(root);
        finishAnimation();
        const rootPos = graph.getNodeAttributes(root);
        const from = visibleNodes.has(root) ? rootPos : { x: rootPos.x0, y: rootPos.y0 };
        keys.forEach(k => { if (!visibleNodes.has(k)) graph.mergeNodeAttributes(k, { x: from.x, y: from.y }); });
        // Entities leaving the view go home instantly; the rest animate into the ring.
        if (state.focus) state.focus.keys.forEach(k => { if (!keys.has(k)) resetPosition(k); });
        graph.forEachNode(k => { graph.removeNodeAttribute(k, 'labelSide'); graph.removeNodeAttribute(k, 'focusRoot'); });
        graph.setNodeAttribute(root, 'focusRoot', true);
        const { targets, sides } = focusTargets(root, keys);
        Object.entries(sides).forEach(([k, side]) => graph.setNodeAttribute(k, 'labelSide', side));
        // The neighborhood view is a detour: remember the selection and give it back on exit.
        const prevSelection = state.focus && !state.focus.multi ? state.focus.prevSelection : state.selection.slice();
        state.focus = { root, keys, prevSelection };
        state.selection = [root];
        state.edge = null;
        state.hovered = null;
        recomputeVisibility();
        refresh(true);
        renderPanel();
        syncURL();
        fitPoints(Object.values(targets), { duration: 650, padding: 40, padX: window.innerWidth > 760 ? 170 : 70, maxRatio: 2 });
        animateTo(targets, 650, schedulePickLabels);
        $('focusLabel').innerHTML = `Neighborhood of <b>${esc(graph.getNodeAttribute(root, 'name'))}</b> · ${fmt(keys.size - 1)} entities`;
        $('exitFocus').textContent = 'Back';
        $('focusbar').hidden = false;
        emit('selectionchange', state.selection.slice());
    }
    // ----------------------------------------------------------- selection view
    // Two or more selected entities: show them and all of their connections (across the whole
    // Lexis, not only the current level) and hide everything else.
    function multiNeighborhood(roots) {
        const keys = new Set(roots);
        if (state.induced) return keys;   // only the selected entities (and the lines among them)
        for (const r of roots) {
            graph.forEachEdge(r, (e, a, s, t) => {
                const o = s === r ? t : s;
                if (edgePasses(a) && state.entityTypes.has(kindOf(o))) keys.add(o);
            });
        }
        return keys;
    }
    function seededRandom(text) {
        let h = 2166136261;
        for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
        return () => {   // mulberry32
            h = (h + 0x6D2B79F5) | 0;
            let t = Math.imul(h ^ (h >>> 15), 1 | h);
            t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }
    // Fruchterman-Reingold on the selected entities and their neighbors, seeded by the selection
    // so the same selection gives the same picture. Shared neighbors settle between the entities
    // they connect; the rest ring their own entity.
    function multiLayout(roots, keys) {
        const nodes = [...keys], n = nodes.length;
        const idx = new Map(nodes.map((k, i) => [k, i]));
        const isRoot = new Set(roots);
        const links = [], weak = [], rootsOf = nodes.map(() => []);
        graph.forEachEdge((e, a, s, t) => {
            if (!idx.has(s) || !idx.has(t) || !edgePasses(a) || s === t) return;
            const i = idx.get(s), j = idx.get(t);
            if (!isRoot.has(s) && !isRoot.has(t)) { weak.push([i, j]); return; }
            links.push([i, j]);
            if (isRoot.has(s) && !isRoot.has(t)) rootsOf[j].push(i);
            if (isRoot.has(t) && !isRoot.has(s)) rootsOf[i].push(j);
        });
        let cx = 0, cy = 0;
        roots.forEach(k => { const a = graph.getNodeAttributes(k); cx += a.x / roots.length; cy += a.y / roots.length; });
        const K = 90, R = K * (1.5 + 0.6 * roots.length);
        const X = new Float64Array(n), Y = new Float64Array(n), DX = new Float64Array(n), DY = new Float64Array(n);
        const rand = seededRandom([...roots].sort().join('|'));
        // Selected entities start on a wide ellipse (two of them side by side) to suit wide screens.
        roots.forEach((k, i) => {
            const ang = Math.PI + 2 * Math.PI * i / roots.length;
            const r = roots.length > 1 ? R : 0;
            X[idx.get(k)] = cx + 1.6 * r * Math.cos(ang);
            Y[idx.get(k)] = cy + r * Math.sin(ang);
        });
        nodes.forEach((k, i) => {
            if (isRoot.has(k)) return;
            const rs = rootsOf[i];
            const mx = rs.reduce((sum, r) => sum + X[r], 0) / (rs.length || 1);
            const my = rs.reduce((sum, r) => sum + Y[r], 0) / (rs.length || 1);
            X[i] = (rs.length ? mx : cx) + (rand() - 0.5) * 2 * K;
            Y[i] = (rs.length ? my : cy) + (rand() - 0.5) * 2 * K;
        });
        let temp = 2 * K;
        const iterations = n > 500 ? 110 : n > 300 ? 160 : 260;
        for (let it = 0; it < iterations; it++) {
            DX.fill(0); DY.fill(0);
            for (let i = 0; i < n; i++) {
                for (let j = i + 1; j < n; j++) {
                    const dx = X[i] - X[j], dy = Y[i] - Y[j];
                    const f = (K * K) / (dx * dx + dy * dy || 0.01);
                    DX[i] += dx * f; DY[i] += dy * f; DX[j] -= dx * f; DY[j] -= dy * f;
                }
            }
            for (const [i, j] of links) {
                const dx = X[i] - X[j], dy = Y[i] - Y[j];
                const f = Math.sqrt(dx * dx + dy * dy) / K;
                DX[i] -= dx * f; DY[i] -= dy * f; DX[j] += dx * f; DY[j] += dy * f;
            }
            for (const [i, j] of weak) {
                const dx = X[i] - X[j], dy = Y[i] - Y[j];
                const f = 0.25 * Math.sqrt(dx * dx + dy * dy) / K;
                DX[i] -= dx * f; DY[i] -= dy * f; DX[j] += dx * f; DY[j] += dy * f;
            }
            for (let i = 0; i < n; i++) {
                DX[i] -= (X[i] - cx) * 0.02;
                DY[i] -= (Y[i] - cy) * 0.02;
                const d = Math.sqrt(DX[i] * DX[i] + DY[i] * DY[i]) || 1;
                const step = Math.min(d, temp);
                X[i] += DX[i] / d * step;
                Y[i] += DY[i] / d * step;
            }
            temp = Math.max(K * 0.05, temp * 0.97);
        }
        if (state.induced && n > 1) {
            // Only selected entities: an even ring (wider than tall), in the angular order the force
            // layout found, so related entities sit next to each other and none pile up.
            const order = nodes.map((k, i) => i).sort((i, j) => Math.atan2(Y[i] - cy, X[i] - cx) - Math.atan2(Y[j] - cy, X[j] - cx));
            const rx = Math.max(140, 34 * n), ry = n === 2 ? 0 : rx * 0.62;
            const out = {};
            order.forEach((i, j) => {
                const ang = Math.PI + 2 * Math.PI * j / n;
                out[nodes[i]] = { x: cx + rx * Math.cos(ang), y: cy + ry * Math.sin(ang) };
            });
            return out;
        }
        return Object.fromEntries(nodes.map((k, i) => [k, { x: X[i], y: Y[i] }]));
    }
    // The user's selection. In the neighborhood view (a temporary view of one entity) it is the
    // selection that view was opened from and returns to.
    const userSelection = () => (state.focus && !state.focus.multi ? state.focus.prevSelection || [] : state.selection);
    // Show a selected entity's details in the panel (it moves to the end of the selection list).
    function showSelected(k) {
        state.selection = [...state.selection.filter(x => x !== k), k];
        refresh();
        renderPanel();
    }
    function enterMulti(roots) {
        if (!state.focus) savedCamera = renderer.getCamera().getState();
        finishAnimation();
        const keys = multiNeighborhood(roots);
        // Entities joining the view start from the selected ones' center instead of flying in.
        let cx = 0, cy = 0;
        roots.forEach(k => { const a = graph.getNodeAttributes(k); cx += a.x / roots.length; cy += a.y / roots.length; });
        keys.forEach(k => { if (!visibleNodes.has(k)) graph.mergeNodeAttributes(k, { x: cx, y: cy }); });
        if (state.focus) state.focus.keys.forEach(k => { if (!keys.has(k)) resetPosition(k); });
        graph.forEachNode(k => { graph.removeNodeAttribute(k, 'labelSide'); graph.removeNodeAttribute(k, 'focusRoot'); });
        const targets = multiLayout(roots, keys);
        state.focus = { root: roots[roots.length - 1], roots, keys, multi: true };
        state.selection = roots;
        state.edge = null;
        state.hovered = null;
        recomputeVisibility();
        refresh(true);
        renderPanel();
        syncURL();
        // Vertical padding leaves room for the top bar and the zoom buttons.
        const padX = window.innerWidth > 760 ? 80 : 40;
        fitPoints(Object.values(targets), { duration: 650, padding: window.innerWidth > 760 ? 72 : 40, padX,
            padRight: Math.max(padX, Math.min(labelRoom(roots), renderer.getDimensions().width / 3)), maxRatio: 4 });
        animateTo(targets, 650, schedulePickLabels);
        const nConn = keys.size - roots.length;
        // Connections hidden only by the minimum-papers setting (same types and entity filters).
        const hiddenByPapers = new Set();
        for (const r of roots) {
            graph.forEachEdge(r, (e, a, s, t) => {
                const o = s === r ? t : s;
                if (state.induced) { if (keys.has(o) && !edgePasses(a) && state.edgeTypes.has(a.rel)) hiddenByPapers.add(e); return; }
                if (!keys.has(o) && state.edgeTypes.has(a.rel) && state.entityTypes.has(kindOf(o))) hiddenByPapers.add(o);
            });
        }
        let nAmong = 0;
        if (state.induced) graph.forEachEdge((e, a, s, t) => { if (keys.has(s) && keys.has(t) && edgePasses(a)) nAmong++; });
        $('focusLabel').innerHTML = (state.induced
            ? (roots.length === 1
                ? `<b>${esc(graph.getNodeAttribute(roots[0], 'name'))}</b> alone (only selected entities are shown)`
                : `<b>${fmt(roots.length)}</b> selected entities, <b>${fmt(nAmong)}</b> relationship${nAmong === 1 ? '' : 's'} among them`)
            : roots.length === 1
            ? `<b>${esc(graph.getNodeAttribute(roots[0], 'name'))}</b> and its <b>${fmt(nConn)}</b> connected entit${nConn === 1 ? 'y' : 'ies'}`
            : `<b>${fmt(roots.length)}</b> selected entities and their <b>${fmt(nConn)}</b> connected entities`) +
            (!hiddenByPapers.size ? '' : state.minPapers > MIN_MIN_PAPERS
                ? `<span class="ng2-hidden-note"> · ${fmt(hiddenByPapers.size)} more hidden by the ${fmt(state.minPapers)}-paper minimum ` +
                  `<button type="button" class="ng2-linkbtn" id="showAllPapers">Show them</button></span>`
                : `<span class="ng2-hidden-note"> · ${fmt(hiddenByPapers.size)} more via single-paper relationships (not shown)</span>`);
        $('exitFocus').textContent = 'Clear all';
        const showAll = $('showAllPapers');
        if (showAll) showAll.addEventListener('click', () => { state.minPapers = MIN_MIN_PAPERS; filtersChanged(); });
        $('focusbar').hidden = false;
        emit('selectionchange', state.selection.slice());
    }

    // A cancelled animation snaps to its targets, so no node is left mid-flight.
    function finishAnimation() {
        if (!animation) return;
        animation.cancel();
        Object.entries(animation.targets).forEach(([k, p]) => graph.mergeNodeAttributes(k, p));
        animation = null;
    }
    function animateTo(targets, duration, done) {
        finishAnimation();
        if (reducedMotion.matches) {   // no flight: the nodes land at once
            Object.entries(targets).forEach(([k, p]) => graph.mergeNodeAttributes(k, p));
            if (done) done();
            return;
        }
        const a = { targets };
        a.cancel = Sigma.utils.animateNodes(graph, targets, { duration, easing: 'cubicInOut' }, () => {
            if (animation === a) animation = null;
            if (done) done();
        });
        animation = a;
    }
    function resetPosition(k) {
        const a = graph.getNodeAttributes(k);
        graph.mergeNodeAttributes(k, { x: a.x0, y: a.y0 });
    }
    function exitFocus(opts = {}) {
        if (!state.focus) return;
        const keys = state.focus.keys, wasMulti = !!state.focus.multi, prevSelection = state.focus.prevSelection;
        finishAnimation();
        const targets = {};
        keys.forEach(k => { const a = graph.getNodeAttributes(k); targets[k] = { x: a.x0, y: a.y0 }; });
        graph.forEachNode(k => { graph.removeNodeAttribute(k, 'labelSide'); graph.removeNodeAttribute(k, 'focusRoot'); });
        state.focus = null;
        $('focusbar').hidden = true;
        animateTo(targets, 500);
        if (savedCamera && !opts.keepCamera) {
            if (reducedMotion.matches) renderer.getCamera().setState(savedCamera);
            else renderer.getCamera().animate(savedCamera, { duration: 500, easing: 'cubicInOut' });
        }
        savedCamera = null;
        if (opts.keepSelection) return;   // caller refreshes
        state.edge = null;
        // Leaving the neighborhood view returns to the selection it was opened from.
        const restore = !wasMulti && prevSelection ? prevSelection.filter(k => graph.hasNode(k)) : [];
        state.selection = [];
        if (restore.length) { setSelection(restore); return; }
        state.induced = false;   // nothing selected any more, so "Only selected entities" ends
        recomputeVisibility();
        refresh(true);
        renderPanel();
        syncURL();
    }

    // ------------------------------------------------------------------ panel
    function relationGroups(k) {
        const groups = new Map();
        const add = (rel, dir, other, a, e) => {
            const def = EDGE[rel];
            if (!def) return;
            const gk = def.directed ? rel + ':' + dir : rel;
            if (!groups.has(gk)) groups.set(gk, { rel, label: def.directed && dir === 'in' ? def.in : def.out, items: new Map() });
            const g = groups.get(gk);
            const cur = g.items.get(other);
            // Symmetric relationships can be stored in both directions; show the larger count.
            if (!cur || a.papers > cur.papers) {
                g.items.set(other, {
                    key: other, papers: a.papers, s: graph.source(e), t: graph.target(e),
                    visible: visibleEdges.has(e) || !!(cur && cur.visible),
                });
            }
        };
        graph.forEachOutEdge(k, (e, a, s, t) => add(a.rel, 'out', t, a, e));
        graph.forEachInEdge(k, (e, a, s, t) => add(a.rel, 'in', s, a, e));
        const order = ['measured_by:out', 'measured_by:in', 'causes:out', 'causes:in', 'related', 'correlates'];
        return order.filter(o => groups.has(o)).map(o => {
            const g = groups.get(o);
            g.items = [...g.items.values()].sort((a, b) => b.papers - a.papers || graph.getNodeAttribute(b.key, 'papers') - graph.getNodeAttribute(a.key, 'papers'));
            return g;
        });
    }

    const entityPage = a => `view_network.html?node=${encodeURIComponent(a.name)}&type=${encodeURIComponent(a.kind)}`;

    // The export caps definitions at 1,200 characters, which can stop mid-word. Cut a capped
    // definition at the last word boundary; the panel adds an ellipsis and a read-more link.
    function summarize(text) {
        const capped = text.length >= 1190 && !/[.!?)"'”]\s*$/.test(text);
        if (!capped) return { text, capped };
        return { text: text.slice(0, text.lastIndexOf(' ')).replace(/[\s,;:(\[{-]+$/, ''), capped };
    }

    // A level view fits on screen, so when the panel opens or closes it refits into the space left.
    let panelWasOpen = false;
    function panelToggled() {
        const open = !$('panel').hidden;
        if (open !== panelWasOpen && renderer && state.level !== 'all' && !state.focus) fitAll(450);
        panelWasOpen = open;
    }
    function renderPanel() {
        const panel = $('panel');
        const k = state.selection[state.selection.length - 1];
        if (!k && !state.edge) { panel.hidden = true; panelToggled(); return; }
        panel.hidden = false;
        $('mapHint').hidden = true;
        panelToggled();
        if (state.edge) { renderEdgeView(); return; }
        $('edgeView').hidden = true;
        $('entityView').hidden = false;
        const a = graph.getNodeAttributes(k);
        const groups = relationGroups(k);
        const nRel = groups.reduce((sum, g) => sum + g.items.length, 0);
        $('panelKicker').innerHTML = swatchSVG(a.kind) + esc(ENTITY[a.kind] ? ENTITY[a.kind].one : a.kind);
        $('panelTitle').textContent = a.name;
        $('panelMeta').innerHTML = `Mentioned in <b>${fmt(a.papers)}</b> paper${a.papers === 1 ? '' : 's'} · <b>${fmt(nRel)}</b> reported relationship${nRel === 1 ? '' : 's'}`;

        const chips = $('selectionChips');
        if (state.selection.length > 1) {
            chips.hidden = false;
            chips.innerHTML = state.selection.map(sk =>
                `<span class="ng2-chip">${swatchSVG(kindOf(sk))}<span class="label" data-key="${esc(sk)}">${esc(graph.getNodeAttribute(sk, 'name'))}</span><button type="button" data-remove="${esc(sk)}" aria-label="Remove ${esc(graph.getNodeAttribute(sk, 'name'))} from selection">×</button></span>`
            ).join('') + `<button type="button" class="ng2-linkbtn" data-clear="1">Clear all</button>`;
        } else {
            chips.hidden = true;
            chips.innerHTML = '';
        }

        const focused = state.focus && !state.focus.multi && state.focus.root === k;
        // In the neighborhood view this button goes back; otherwise it switches between all
        // connections and only the selected entities.
        $('focusBtn').setAttribute('aria-pressed', String(!focused && state.induced));
        $('focusBtn').textContent = focused ? 'Back' : 'Only selected entities';
        $('focusBtn').title = focused ? 'Back to your selection' : 'Show only the selected entities and the relationships among them';
        $('entityLink').href = entityPage(a);
        $('panelClose').setAttribute('aria-label', focused ? 'Back' : `Deselect ${a.name}`);
        $('panelClose').title = focused ? 'Back' : `Deselect ${a.name}`;
        $('addHint').textContent = focused
            ? 'Neighborhood view. Back returns to your selection.'
            : state.induced
                ? 'Showing only the selected entities and the relationships among them. Turn off "Only selected entities" to see all their connections.'
            : state.selection.length > 1
                ? 'Showing the selected entities and all their connections. Click a selected entity again (or its ×) to deselect it.'
                : 'Click more entities, or tick them in search, to see their connections together. Click a selected entity again to deselect it.';

        const aliases = (a.names || []).filter(n => n !== a.name);
        const al = $('panelAliases');
        if (aliases.length) {
            al.hidden = false;
            const shown = aliases.slice(0, 8).map(esc).join(', ');
            al.innerHTML = `<span class="k">Also called</span>${shown}${aliases.length > 8 ? `, <button type="button" class="ng2-linkbtn" data-more-aliases="1">${aliases.length - 8} more</button>` : ''}`;
            al.dataset.all = JSON.stringify(aliases);
        } else al.hidden = true;

        const def = $('panelDefinition');
        if (a.definition) {
            const sum = summarize(a.definition);
            const long = sum.text.length > 380;
            def.className = 'ng2-definition' + (long ? ' is-clamped' : '');
            def.innerHTML = `<div class="k">Definition, summarized from papers</div><p>${esc(sum.text)}${sum.capped ? '…' : ''}</p>` +
                '<div class="ng2-def-links">' +
                (long ? '<button type="button" class="ng2-linkbtn" data-expand-def="1">Show more</button>' : '') +
                (sum.capped ? `<a href="${entityPage(a)}">Read the full definition on the entity page</a>` : '') +
                '</div>';
            def.hidden = false;
        } else {
            def.hidden = true;
        }

        const rel = $('panelRelations');
        if (!groups.length) {
            rel.innerHTML = '<p class="ng2-rel-empty">No relationships between this entity and others are recorded in the graph.</p>';
            return;
        }
        const belowMin = groups.reduce((sum, g) => sum + g.items.filter(it => it.papers < state.minPapers).length, 0);
        rel.innerHTML = '<p class="ng2-rel-caption">Relationships papers report. Select a paper count to see the papers.' +
            (!belowMin ? '' : state.minPapers > MIN_MIN_PAPERS
                ? ` <b>${fmt(belowMin)}</b> are hidden on the map by the ${fmt(state.minPapers)}-paper minimum (grayed). ` +
                  '<button type="button" class="ng2-linkbtn" data-show-all="1">Show them</button>'
                : ` <b>${fmt(belowMin)}</b> come from a single paper and are not drawn on the map (grayed).`) + '</p>' + groups.map((g, gi) => {
            const max = g.items[0].papers;
            const rows = g.items.map((it, i) => {
                const o = graph.getNodeAttributes(it.key);
                const w = Math.max(3, Math.round(36 * Math.sqrt(it.papers / max)));
                return `<li${i >= 8 ? ' hidden' : ''}${it.visible ? '' : ' class="is-filtered" title="Hidden by the current filters"'}>` +
                    `<button type="button" class="ng2-rel-name" data-key="${esc(it.key)}">${swatchSVG(o.kind)}<span>${esc(o.name)}</span></button>` +
                    `<button type="button" class="ng2-rel-papers" data-s="${esc(it.s)}" data-t="${esc(it.t)}" data-rel="${g.rel}" ` +
                    `aria-label="${fmt(it.papers)} paper${it.papers === 1 ? '' : 's'}: show them"><span class="bar" style="width:${w}px"></span>${fmt(it.papers)}</button></li>`;
            }).join('');
            const more = g.items.length > 8 ? `<button type="button" class="ng2-linkbtn ng2-rel-more" data-group="${gi}">Show all ${fmt(g.items.length)}</button>` : '';
            return `<div class="ng2-rel-group"><div class="ng2-rel-head">${edgeSVG(g.rel, 20)}<span>${esc(g.label)}</span><span class="n">${fmt(g.items.length)}</span></div>` +
                `<ul class="ng2-rel-list">${rows}</ul>${more}</div>`;
        }).join('');
    }

    // ------------------------------------------------------ relationship papers
    // The papers and an example quote behind one relationship come from the source entity's
    // own file (nomological_network_data/<folder>/<slug>.json), fetched when first needed;
    // paper links come from paper_urls.json, also fetched on first use.
    const FOLDER = { construct: 'constructs', measurement: 'measurements', behavior: 'behaviors_tasks' };
    const VENUES = { iclr: 'ICLR', neurips: 'NeurIPS', icml: 'ICML', acl: 'ACL', naacl: 'NAACL', emnlp: 'EMNLP' };
    const entityFiles = new Map();
    let paperURLs = null;
    const slug = n => n.toLowerCase().replace(/\+/g, '_plus_').replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, ''); // matches export slugify
    function fetchEntity(k) {
        if (!entityFiles.has(k)) {
            const a = graph.getNodeAttributes(k);
            const req = fetchJSON(`nomological_network_data/${FOLDER[a.kind]}/${slug(a.name)}.json`);
            req.catch(() => entityFiles.delete(k));
            entityFiles.set(k, req);
        }
        return entityFiles.get(k);
    }
    function loadPaperURLs() {
        if (!paperURLs) paperURLs = fetchJSON('nomological_network_data/paper_urls.json').catch(() => ({}));
        return paperURLs;
    }
    function venueLabel(v) {
        const m = /^([a-z]+)(\d{2})$/.exec(v);
        return m ? `${VENUES[m[1]] || m[1].toUpperCase()} 20${m[2]}` : v;
    }

    function openEdge(s, t, rel) {
        if (!graph.hasNode(s) || !graph.hasNode(t) || !EDGE[rel]) return;
        state.edge = { s, t, rel };
        syncURL();
        computeActive();
        renderer.refresh({ skipIndexation: true });
        renderPanel();
        // From a grayed (filter-hidden) row an endpoint may not be on the map at all: keep the
        // papers panel but do not chase an invisible node with the camera.
        if (visibleNodes.has(s) && visibleNodes.has(t)) ensureVisible([s, t]);
    }
    // Move the camera only if one of the entities is outside the free area (never zoom in).
    function ensureVisible(keys) {
        const cam = renderer.getCamera(), f = freeArea(), cameraState = cam.getState();
        const pts = keys.map(k => graph.getNodeAttributes(k));
        const off = pts.some(a => {
            const v = renderer.graphToViewport(a, { cameraState });
            return v.x < f.left + 20 || v.x > f.W - f.right - 20 || v.y < f.top + 20 || v.y > f.H - f.bottom - 20;
        });
        if (off) fitPoints(pts, { minRatio: cam.ratio, maxRatio: 4, padding: 80 });
    }
    function closeEdge() {
        state.edge = null;
        syncURL();
        refresh();
        renderPanel();
    }

    async function renderEdgeView() {
        const { s, t, rel } = state.edge;
        const A = graph.getNodeAttributes(s), B = graph.getNodeAttributes(t), def = EDGE[rel];
        const back = state.selection[state.selection.length - 1];
        $('entityView').hidden = true;
        const view = $('edgeView');
        view.hidden = false;
        $('panelKicker').innerHTML = edgeSVG(rel, 20) + 'Relationship papers report';
        const nameBtn = (k, a) => `<button type="button" class="ng2-edge-entity" data-key="${esc(k)}">${swatchSVG(a.kind)}${esc(a.name)}</button>`;
        view.innerHTML =
            (back ? `<button type="button" class="ng2-linkbtn ng2-back" data-back="1">Back to ${esc(graph.getNodeAttribute(back, 'name'))}</button>` : '') +
            `<h2 class="ng2-panel-title ng2-edge-title">${nameBtn(s, A)}<span class="ng2-edge-verb">${esc(def.out.toLowerCase())}</span>${nameBtn(t, B)}</h2>` +
            '<div class="ng2-edge-body"><p class="ng2-muted">Loading the papers…</p></div>';
        const body = view.querySelector('.ng2-edge-body');
        let record, urls;
        try {
            [record, urls] = await Promise.all([fetchEntity(s), loadPaperURLs()]);
        } catch (err) {
            if (state.edge && state.edge.s === s && state.edge.t === t && state.edge.rel === rel) {
                body.innerHTML = `<p class="ng2-muted">Could not load the papers for this relationship. They are listed on the <a href="${entityPage(A)}">entity page</a>.</p>`;
            }
            return;
        }
        if (!state.edge || state.edge.s !== s || state.edge.t !== t || state.edge.rel !== rel) return;
        // Directed: s's outgoing record. Symmetric: both directions, merged.
        const recs = (record.relationships || []).filter(r => r.other_canonical_name === B.name && r.relationship_type === rel &&
            (def.directed ? r.direction === 'outgoing' : true));
        if (!recs.length) {
            body.innerHTML = `<p class="ng2-muted">No paper details were found for this relationship. See the <a href="${entityPage(A)}">entity page</a>.</p>`;
            return;
        }
        const byVenue = new Map();
        for (const r of recs) {
            for (const [v, titles] of Object.entries(r.papers_by_conference || {})) {
                if (!byVenue.has(v)) byVenue.set(v, new Set());
                titles.forEach(ti => byVenue.get(v).add(ti));
            }
            if (r.paper && ![...byVenue.values()].some(set => set.has(r.paper))) {
                if (!byVenue.has('other')) byVenue.set('other', new Set());
                byVenue.get('other').add(r.paper);
            }
        }
        const venues = [...byVenue.keys()].sort((x, y) => {
            const yx = (x.match(/\d+$/) || ['99'])[0], yy = (y.match(/\d+$/) || ['99'])[0];
            return yy.localeCompare(yx) || x.localeCompare(y);
        });
        const total = venues.reduce((sum, v) => sum + byVenue.get(v).size, 0);
        const link = ti => urls[ti] ? `<a href="${esc(urls[ti])}" target="_blank" rel="noopener">${esc(ti)}</a>` : esc(ti);
        const quotes = recs.filter(r => r.evidence).map(r =>
            `<figure class="ng2-quote"><blockquote>${esc(r.evidence)}</blockquote><figcaption>${link(r.paper)}</figcaption></figure>`).join('');
        let shown = 0;
        const lists = venues.map(v => {
            const items = [...byVenue.get(v)].sort().map(ti => `<li${shown++ >= 25 ? ' hidden' : ''}>${link(ti)}</li>`).join('');
            return `<div class="ng2-venue">${esc(v === 'other' ? 'Other' : venueLabel(v))} <span>${fmt(byVenue.get(v).size)}</span></div><ul class="ng2-paper-list">${items}</ul>`;
        }).join('');
        body.innerHTML =
            `<p class="ng2-panel-meta"><b>${fmt(total)}</b> ${total === 1 ? 'paper reports' : 'papers report'} this relationship. It is a claim made in the literature, not a validated finding.</p>` +
            (quotes ? `<div class="ng2-rel-head">Example from a paper</div>${quotes}` : '') +
            `<div class="ng2-rel-head ng2-papers-head">Papers</div>${lists}` +
            (total > 25 ? `<button type="button" class="ng2-linkbtn" data-all-papers="1">Show all ${fmt(total)} papers</button>` : '');
    }

    function onPanelClick(ev) {
        const t = ev.target.closest('button, .label');
        if (!t) return;
        if (t.dataset.remove) return toggleInSelection(t.dataset.remove);
        if (t.dataset.clear) return setSelection([]);
        if (t.dataset.back) return closeEdge();
        if (t.dataset.showAll) { state.minPapers = MIN_MIN_PAPERS; filtersChanged(); return; }
        if (t.dataset.rel) return openEdge(t.dataset.s, t.dataset.t, t.dataset.rel);
        if (t.dataset.allPapers) {
            $('edgeView').querySelectorAll('.ng2-paper-list li[hidden]').forEach(li => { li.hidden = false; });
            t.remove();
            return;
        }
        if (t.dataset.expandDef) { $('panelDefinition').classList.remove('is-clamped'); t.remove(); return; }
        if (t.dataset.moreAliases) {
            const al = $('panelAliases');
            al.innerHTML = '<span class="k">Also called</span>' + JSON.parse(al.dataset.all).map(esc).join(', ');
            return;
        }
        if (t.dataset.group !== undefined) {
            t.previousElementSibling.querySelectorAll('li[hidden]').forEach(li => { li.hidden = false; });
            t.remove();
            return;
        }
        if (t.dataset.key) {
            const k = t.dataset.key;
            state.edge = null;
            // Neighborhood view: move to that entity. Otherwise add it (or show it, if selected).
            if (state.focus && !state.focus.multi && state.focus.keys.has(k)) { enterFocus(k); return; }
            if (state.selection.includes(k)) { showSelected(k); return; }
            setSelection([...state.selection, k]);
        }
    }

    // ----------------------------------------------------------------- search
    // The list under the search box: the checked (selected) entities on top, then every entity
    // (or the matches for the query) to scroll through and tick. Long lists render in chunks.
    let index = [], results = [], cursor = -1, addMode = false;
    let nPicked = 0, listShown = 0, listSort = 'cited', lastQuery = '';
    const LIST_CHUNK = 150;
    const sortedIndex = {};
    function setAddMode(on) {
        addMode = on;
        $('searchInput').placeholder = on ? 'Search an entity to add to the selection' : 'Search entities or aliases';
    }
    function buildIndex() {
        index = [];
        graph.forEachNode((k, a) => {
            index.push({
                key: k, name: a.name, lname: a.name.toLowerCase(), papers: a.papers, kind: a.kind,
                aliases: (a.names || []).filter(n => n !== a.name).map(n => ({ a: n, la: n.toLowerCase() })),
            });
        });
    }
    function search(q) {
        q = q.trim().toLowerCase();
        if (!q) return [];
        const out = [];
        for (const it of index) {
            let score = 0, via = null;
            if (it.lname === q) score = 100;
            else if (it.lname.startsWith(q)) score = 60;
            else if (it.lname.includes(' ' + q) || it.lname.includes('-' + q)) score = 40;
            else if (it.lname.includes(q)) score = 25;
            else {
                for (const al of it.aliases) {
                    if (al.la === q || al.la.startsWith(q)) { score = 22; via = al.a; break; }
                    if (!via && al.la.includes(q)) { score = 12; via = al.a; }
                }
            }
            if (score) out.push({ it, via, score: score + 4 * Math.log10(1 + it.papers) });
        }
        return out.sort((a, b) => b.score - a.score);
    }
    function browseList() {
        if (!sortedIndex[listSort]) {
            sortedIndex[listSort] = index.slice().sort(listSort === 'az'
                ? (a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })
                : (a, b) => b.papers - a.papers || a.name.localeCompare(b.name));
        }
        return sortedIndex[listSort].map(it => ({ it, via: null }));
    }
    function highlight(text, q) {
        const i = text.toLowerCase().indexOf(q.trim().toLowerCase());
        if (i < 0 || !q.trim()) return esc(text);
        return esc(text.slice(0, i)) + '<mark>' + esc(text.slice(i, i + q.trim().length)) + '</mark>' + esc(text.slice(i + q.trim().length));
    }
    function resultRow(r, i, q) {
        const on = userSelection().includes(r.it.key);
        return `<li role="option" id="sr-${i}" data-key="${esc(r.it.key)}" aria-selected="${i === cursor}" aria-checked="${on}" class="${on ? 'is-picked' : ''}">` +
            `<span class="ng2-pick" aria-hidden="true"></span>` + swatchSVG(r.it.kind) +
            `<span class="name">${highlight(r.it.name, q)}${r.via ? `<span class="alias">also called ${highlight(r.via, q)}</span>` : ''}</span>` +
            `<span class="papers">${fmt(r.it.papers)}</span></li>`;
    }
    // Opens (or refreshes) the list. keep: called after a tick, so keep the cursor, the number of
    // rows already loaded, and the scroll position steady even though the top section changed.
    function renderResults(q, keep) {
        const ul = $('searchResults');
        const query = q.trim();
        const hdrBefore = ul.querySelector('[data-section="list"]');
        const scrollBefore = ul.scrollTop, hdrTopBefore = hdrBefore ? hdrBefore.offsetTop : 0;
        const list = query ? search(query) : browseList();
        const matchOf = new Map(list.map(r => [r.it.key, r]));
        // Every checked entity stays listed on top (so it can be unchecked), whatever the query.
        const picked = userSelection().map(k => matchOf.get(k) || { it: index.find(it => it.key === k), via: null })
            .filter(r => r.it);
        nPicked = picked.length;
        results = picked.concat(list);
        if (!keep || query !== lastQuery) listShown = 0;
        listShown = Math.min(list.length, Math.max(listShown, LIST_CHUNK));
        if (!keep || query !== lastQuery) cursor = query && list.length ? nPicked : -1;
        else cursor = clamp(cursor, -1, results.length - 1);
        lastQuery = query;

        let html = '';
        if (picked.length) {
            html += `<li class="ng2-sec" role="presentation"><span>Selected <b>${fmt(picked.length)}</b></span><button type="button" class="ng2-linkbtn" data-clear="1">Clear all</button></li>`;
            html += picked.map((r, i) => resultRow(r, i, query)).join('');
        }
        html += `<li class="ng2-sec" role="presentation" data-section="list"><span>` +
            (query ? `<b>${fmt(list.length)}</b> match${list.length === 1 ? '' : 'es'}` : `All entities <b>${fmt(list.length)}</b>`) + `</span>` +
            (query ? '' : `<span class="ng2-sort">` +
                ['cited', 'az'].map(k => `<button type="button" data-sort="${k}" aria-pressed="${listSort === k}">${k === 'cited' ? 'Most cited' : 'A to Z'}</button>`).join('') +
                `</span>`) + `</li>`;
        html += list.length
            ? list.slice(0, listShown).map((r, i) => resultRow(r, nPicked + i, query)).join('')
            : '<li class="empty" role="presentation">No entity matches.</li>';
        ul.innerHTML = `<li class="ng2-list-top" role="presentation"><span>Tick to select, untick to deselect. Enter adds the highlighted one.</span>` +
            `<button type="button" class="ng2-btn ng2-btn-small" data-done="1">Done</button></li>` + html;
        ul.hidden = false;
        $('searchBox').setAttribute('aria-expanded', 'true');
        $('searchInput').setAttribute('aria-activedescendant', cursor >= 0 ? 'sr-' + cursor : '');
        if (keep) {
            // Rows added to or removed from the top section would shift the list under the pointer:
            // keep the row just ticked where it was, or else the list where it was.
            const copies = keep.anchor ? ul.querySelectorAll(`li[data-key="${CSS.escape(keep.anchor.key)}"]`) : [];
            const hdr = ul.querySelector('[data-section="list"]');
            if (copies.length) ul.scrollTop = copies[copies.length - 1].offsetTop - keep.anchor.offset;
            else ul.scrollTop = scrollBefore > hdrTopBefore && hdr ? scrollBefore + (hdr.offsetTop - hdrTopBefore) : scrollBefore;
        } else {
            ul.scrollTop = 0;
        }
    }
    // Load the next chunk of rows when the list is scrolled near its end (or the cursor gets there).
    function loadMoreRows() {
        const ul = $('searchResults');
        const total = results.length - nPicked;
        if (listShown >= total) return false;
        const from = listShown;
        listShown = Math.min(total, listShown + LIST_CHUNK);
        const rows = results.slice(nPicked + from, nPicked + listShown).map((r, i) => resultRow(r, nPicked + from + i, lastQuery)).join('');
        ul.insertAdjacentHTML('beforeend', rows);
        return true;
    }
    function moveCursor(d) {
        if (!results.length) return;
        cursor = cursor < 0 ? (d > 0 ? 0 : results.length - 1) : (cursor + d + results.length) % results.length;
        while (cursor >= nPicked + listShown && loadMoreRows()) { /* load until the cursor row exists */ }
        $('searchResults').querySelectorAll('li[role="option"]').forEach(li => li.setAttribute('aria-selected', String(li.id === 'sr-' + cursor)));
        const li = $('sr-' + cursor);
        if (li) li.scrollIntoView({ block: 'nearest' });
        $('searchInput').setAttribute('aria-activedescendant', 'sr-' + cursor);
    }
    // Ticking a result adds it to (or removes it from) the selection and keeps the list open, so
    // several entities can be picked in a row, starting from nothing selected.
    function toggleFromSearch(key, row) {
        const ul = $('searchResults'), hdr = ul.querySelector('[data-section="list"]');
        // A row in the lower list stays under the pointer after the tick.
        const inList = row && hdr && (hdr.compareDocumentPosition(row) & Node.DOCUMENT_POSITION_FOLLOWING);
        const anchor = inList ? { key, offset: row.offsetTop - ul.scrollTop } : null;
        const base = userSelection();
        const sel = base.includes(key) ? base.filter(k => k !== key) : [...base, key];
        if (state.focus && !state.focus.multi) exitFocus({ keepSelection: true, keepCamera: true });
        setSelection(sel);
        // Opened from "Add another entity": one pick (tick or untick) and the list closes.
        if (addMode) { closeSearchList(); return; }
        renderResults($('searchInput').value, { anchor });
        $('searchInput').focus();
    }
    function closeSearchList() {
        setAddMode(false);
        $('searchResults').hidden = true;
        $('searchBox').setAttribute('aria-expanded', 'false');
        $('searchInput').value = '';
        $('searchInput').blur();
        if (window.innerWidth <= 760) $('controls').classList.remove('is-open');
    }
    function chooseResult(key) {
        setAddMode(false);
        $('searchResults').hidden = true;
        $('searchBox').setAttribute('aria-expanded', 'false');
        $('searchInput').value = '';
        $('searchInput').blur();
        const base = userSelection();
        if (state.focus && !state.focus.multi) exitFocus({ keepSelection: true, keepCamera: true });
        setSelection([...base.filter(k => k !== key), key]);
        if (window.innerWidth <= 760) $('controls').classList.remove('is-open');
    }

    // ------------------------------------------------------------ side panel
    function renderLegend() {
        const counts = {}, ecounts = {};
        graph.forEachNode((k, a) => { counts[a.kind] = (counts[a.kind] || 0) + 1; });
        graph.forEachEdge((e, a) => { ecounts[a.rel] = (ecounts[a.rel] || 0) + 1; });
        $('entityToggles').innerHTML = ENTITY_TYPES.map(t =>
            `<button type="button" class="ng2-toggle" data-entity="${t.key}" aria-pressed="${state.entityTypes.has(t.key)}">` +
            `<span class="ng2-swatch">${swatchSVG(t.key)}</span><span>${t.label}</span><span class="ng2-count">${fmt(counts[t.key] || 0)}</span></button>`).join('');
        $('edgeToggles').innerHTML = EDGE_TYPES.map(t =>
            `<button type="button" class="ng2-toggle" data-edge="${t.key}" aria-pressed="${state.edgeTypes.has(t.key)}">` +
            `<span class="ng2-swatch">${edgeSVG(t.key)}</span><span>${t.label}<span class="ng2-sub">${t.directed ? 'directed' : 'either direction'}</span></span>` +
            `<span class="ng2-count">${fmt(ecounts[t.key] || 0)}</span></button>`).join('');
    }
    function renderStats() {
        let n = 0, e = 0;
        visibleNodes.forEach(() => n++);
        visibleEdges.forEach(() => e++);
        $('stats').innerHTML = state.level !== 'all' && !state.focus
            ? (n === levelSets.get(state.level).size ? `Showing the <b>${fmt(n)}</b>` : `Showing <b>${fmt(n)}</b> of the <b>${fmt(levelSets.get(state.level).size)}</b>`) +
              ` most-cited entities and the <b>${fmt(e)}</b> relationships among them.`
            : `Showing <b>${fmt(n)}</b> entities and <b>${fmt(e)}</b> relationships` +
              (regions.length && !state.focus ? ` across <b>${regions.filter(regionShown).length}</b> labeled regions.` : '.');
    }
    function syncControls() {
        document.querySelectorAll('[data-entity]').forEach(b => b.setAttribute('aria-pressed', String(state.entityTypes.has(b.dataset.entity))));
        document.querySelectorAll('[data-edge]').forEach(b => b.setAttribute('aria-pressed', String(state.edgeTypes.has(b.dataset.edge))));
        const mp = $('minPapers');
        if (Number(mp.value) !== state.minPapers || mp.getAttribute('aria-invalid') === 'true') mp.value = state.minPapers;
        markMinPapers(null);
        $('minPapersUnit').textContent = state.minPapers === 1 ? 'paper' : 'papers';
        $('showUnlinked').checked = state.showUnlinked;
        $('showRegions').checked = state.showRegions;
        document.querySelectorAll('[data-level]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.level === state.level)));
        $('moreOptions').hidden = state.level !== 'all';   // both options only apply to the full map
    }
    // Full page: hide the site header and fold the left panel to its search row, so the graph gets
    // the whole window. The panel goes back to how it was on exit. The canvas resize observer
    // refits the view.
    let panelWasCollapsed = false;
    function setFullPage(on) {
        document.body.classList.toggle('ng2-full', on);
        const controls = $('controls');
        if (on) {
            panelWasCollapsed = controls.classList.contains('is-collapsed');
            if (window.innerWidth > 760) controls.classList.add('is-collapsed');
            else controls.classList.remove('is-open');
        } else if (window.innerWidth > 760) {
            controls.classList.toggle('is-collapsed', panelWasCollapsed);
        }
        syncPanelToggle();
        updateFullPageButton();
    }
    function updateFullPageButton() {
        const on = document.body.classList.contains('ng2-full');
        const b = $('fullPage');
        b.setAttribute('aria-pressed', String(on));
        b.setAttribute('aria-label', on ? 'Exit full page' : 'Full page');
        b.title = on ? 'Exit full page (F or Esc)' : 'Full page (F)';
        b.querySelector('svg').innerHTML = on
            ? '<path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
            : '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    }
    function syncPanelToggle() {
        const b = $('filtersToggle'), controls = $('controls');
        const phone = window.innerWidth <= 760;
        const expanded = phone ? controls.classList.contains('is-open') : !controls.classList.contains('is-collapsed');
        const filtersIcon = '<path d="M4 6h16M7 12h10M10 18h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>';
        const hideIcon = '<path d="M14 6l-6 6 6 6M20 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
        const label = phone ? 'Filters' : expanded ? 'Hide' : 'Filters';
        b.querySelector('svg').innerHTML = !phone && expanded ? hideIcon : filtersIcon;
        b.querySelector('span').textContent = label;
        b.setAttribute('aria-expanded', String(expanded));
        b.title = phone ? 'Filters and legend' : expanded ? 'Hide the panel to give the graph the full width' : 'Show filters and legend';
    }
    function parseMinPapers(raw) {
        const t = String(raw).trim();
        if (!/^\d+$/.test(t)) return null;            // empty, decimal, negative, or not a number
        const n = Number(t);
        return n >= MIN_MIN_PAPERS && n <= maxMinPapers ? n : null;
    }
    function markMinPapers(msg) {
        const mp = $('minPapers'), m = $('minPapersMsg');
        mp.setAttribute('aria-invalid', String(!!msg));
        m.hidden = !msg;
        m.textContent = msg || '';
    }
    function filtersChanged() {
        syncControls();
        if (state.focus) { if (state.focus.multi) enterMulti(state.focus.roots); else enterFocus(state.focus.root); return; }
        recomputeVisibility();
        refresh(true);
        renderPanel();
        syncURL();
    }

    // -------------------------------------------------------------------- URL
    // A malformed percent-escape (hand-edited or truncated link) must not break startup:
    // whatever does not decode is treated as absent and the rest of the URL still applies.
    function safeDecode(s) { try { return decodeURIComponent(s); } catch (_) { return null; } }
    function readURL() {
        const params = {};
        location.search.slice(1).split('&').filter(Boolean).forEach(kv => {
            const i = kv.indexOf('=');
            const key = safeDecode(i < 0 ? kv : kv.slice(0, i));
            if (key !== null) params[key] = i < 0 ? '' : kv.slice(i + 1);
        });
        const list = v => v.split(',').map(s => safeDecode(s.replace(/\+/g, ' '))).filter(Boolean);
        const toKey = s => graph.hasNode(s) ? s : nameToKey.get(s);
        if (params.types !== undefined) state.edgeTypes = new Set(list(params.types).filter(t => EDGE[t]));
        if (params.entities !== undefined) state.entityTypes = new Set(list(params.entities).filter(t => ENTITY[t]));
        if (params.min_papers !== undefined) {
            const n = Number(safeDecode(params.min_papers) ?? NaN);
            if (Number.isFinite(n)) state.minPapers = clamp(Math.round(n), MIN_MIN_PAPERS, maxMinPapers);
        }
        if (params.unlinked === '1') state.showUnlinked = true;
        if (LEVEL_NAMES[params.show]) state.level = params.show;
        if (params.view === 'induced') state.induced = true;
        const node = params.node ? safeDecode(params.node.replace(/\+/g, ' ')) : null;
        const sel = params.sel ? list(params.sel).map(toKey).filter(Boolean)
            : node ? [toKey(node)].filter(Boolean) : [];
        const edge = params.edge ? list(params.edge) : [];
        return { sel, focus: params.focus === '1', edge: edge.length === 3 ? [toKey(edge[0]), toKey(edge[1]), edge[2]] : null };
    }
    let urlTimer = null;
    function writeURL() {
        const p = [];
        if (state.selection.length) p.push('sel=' + state.selection.map(encodeURIComponent).join(','));
        if (state.focus && !state.focus.multi) p.push('focus=1');
        if (state.induced) p.push('view=induced');
        if (state.edge) p.push('edge=' + [state.edge.s, state.edge.t, state.edge.rel].map(encodeURIComponent).join(','));
        if (state.edgeTypes.size < EDGE_TYPES.length) p.push('types=' + [...state.edgeTypes].join(','));
        if (state.entityTypes.size < ENTITY_TYPES.length) p.push('entities=' + [...state.entityTypes].join(','));
        if (state.minPapers !== DEFAULT_MIN_PAPERS) p.push('min_papers=' + state.minPapers);
        if (state.showUnlinked) p.push('unlinked=1');
        if (state.level !== '50') p.push('show=' + state.level);
        history.replaceState(null, '', location.pathname + (p.length ? '?' + p.join('&') : '') + location.hash);
    }
    function syncURL() {
        clearTimeout(urlTimer);
        urlTimer = setTimeout(writeURL, 120);
    }

    // ------------------------------------------------------------------ theme
    // Light by default; dark only when the reader picks it.
    const THEMES = ['light', 'dark'];
    function currentTheme() { return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'; }
    function setTheme(t) {
        if (t === 'dark') document.documentElement.dataset.theme = 'dark'; else delete document.documentElement.dataset.theme;
        try { if (t === 'dark') localStorage.setItem('lexis-theme', 'dark'); else localStorage.removeItem('lexis-theme'); } catch (_) { }
        updateThemeButton();
        if (graph) { applyColors(); renderPanel(); renderer.refresh(); }
    }
    function updateThemeButton() {
        const t = currentTheme();
        const b = $('themeToggle');
        const label = { light: 'Theme: light (switch to dark)', dark: 'Theme: dark (switch to light)' }[t];
        b.setAttribute('aria-label', label);
        b.title = label;
        const icon = {
            light: '<circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
            dark: '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
        }[t];
        b.querySelector('svg').innerHTML = icon;
    }

    function toast(msg) {
        const t = document.createElement('div');
        t.className = 'ng2-toast';
        t.setAttribute('role', 'status');
        t.textContent = msg;
        $('stage').appendChild(t);
        setTimeout(() => t.remove(), 1800);
    }

    // ------------------------------------------------------------------- data
    // Sigma needs a sized container; a page opened in a background tab may not have one yet.
    function waitForSize(el) {
        return new Promise(resolve => {
            if (el.offsetWidth && el.offsetHeight) return resolve();
            const ro = new ResizeObserver(() => {
                if (el.offsetWidth && el.offsetHeight) { ro.disconnect(); resolve(); }
            });
            ro.observe(el);
        });
    }

    async function fetchJSON(url) {
        const r = await fetch(url);
        if (!r.ok) throw new Error(`${url}: HTTP ${r.status}`);
        return r.json();
    }

    function buildGraph(bundle) {
        const G = new graphology.MultiDirectedGraph();
        const pos = layout.nodes || {};
        let missing = 0;
        for (const n of bundle.nodes) {
            const key = String(n.id || n.name);
            const p = pos[key];
            if (!p) missing++;
            nameToKey.set(n.name, key);
            G.addNode(key, {
                name: n.name, label: n.name, kind: n.type, papers: n.paper_count || 0,
                names: n.names || [], definition: n.definition || '',
                x: p ? p[0] : NaN, y: p ? p[1] : NaN, community: p ? p[2] : -1,
                size: 3,
            });
        }
        for (const e of bundle.edges) {
            const s = nameToKey.get(e.source), t = nameToKey.get(e.target);
            if (!s || !t || s === t || !EDGE[e.type]) continue;
            G.addEdge(s, t, {
                rel: e.type, papers: e.paper_count || 1, size: edgeSize(e.paper_count || 1),
                type: EDGE_PROGRAM[LINE_STYLE[e.type]][EDGE[e.type].directed ? 'arrow' : 'line'],
                curveType: EDGE_PROGRAM[LINE_STYLE[e.type]].curve,
            });
        }
        // Entities the layout does not know (data newer than the layout): next to their neighbors.
        if (missing) {
            let i = 0;
            G.forEachNode((k, a) => {
                if (!Number.isNaN(a.x)) return;
                let sx = 0, sy = 0, c = 0;
                G.forEachNeighbor(k, (o, oa) => { if (!Number.isNaN(oa.x)) { sx += oa.x; sy += oa.y; c++; } });
                const ang = (i++ * 2.39996) % (2 * Math.PI);
                if (c) G.mergeNodeAttributes(k, { x: sx / c + 18 * Math.cos(ang), y: sy / c + 18 * Math.sin(ang) });
                else G.mergeNodeAttributes(k, { x: 1250 * Math.cos(ang), y: 1250 * Math.sin(ang) });
            });
            const note = $('staleNote');
            note.hidden = false;
            note.textContent = `The layout file is older than the data: ${fmt(missing)} entities were placed next to their neighbors. Rerun tools/build_graph_v2_layout.py.`;
            console.warn(`[network] ${missing} entities missing from ${LAYOUT_URL}; rerun tools/build_graph_v2_layout.py`);
        }
        // mx/my: position on the full map; x0/y0: home position at the current level.
        G.forEachNode((k, a) => G.mergeNodeAttributes(k, { mx: a.x, my: a.y, x0: a.x, y0: a.y }));
        return G;
    }

    // ------------------------------------------------------- dashed line programs
    // Sigma has no dashed lines. These extend its own straight / arrow-body and curved line
    // programs: the vertex shader measures the line's length in screen pixels, and the fragment
    // shader drops the "off" part of the dash pattern. Picking (hover and click) still uses the
    // whole line, so dotted lines are as easy to hit as solid ones.
    const highpVarying = 'float v_along;';
    const fragAlong = '#ifdef GL_FRAGMENT_PRECISION_HIGH\nvarying highp float v_along;\n#else\nvarying float v_along;\n#endif\n';
    function dashStraight(Base, dash) {
        return class extends Base {
            getDefinition() {
                const d = super.getDefinition();
                return {
                    ...d,
                    UNIFORMS: [...d.UNIFORMS, 'u_dimensions', 'u_dash'],
                    VERTEX_SHADER_SOURCE: d.VERTEX_SHADER_SOURCE
                        .replace('void main() {', `uniform vec2 u_dimensions;\nvarying ${highpVarying}\nvoid main() {`)
                        .replace(/\}\s*$/, '  v_along = a_positionCoef * length(((u_matrix * vec3(a_positionEnd, 1)).xy - ' +
                            '(u_matrix * vec3(a_positionStart, 1)).xy) * u_dimensions * 0.5);\n}\n'),
                    FRAGMENT_SHADER_SOURCE: d.FRAGMENT_SHADER_SOURCE
                        .replace('void main(void) {', `uniform vec2 u_dash;\n${fragAlong}void main(void) {\n  #ifndef PICKING_MODE\n` +
                            '  if (mod(v_along, u_dash.x + u_dash.y) > u_dash.x) discard;\n  #endif'),
                };
            }
            setUniforms(params, info) {
                super.setUniforms(params, info);
                const { gl, uniformLocations: u } = info;
                gl.uniform2f(u.u_dimensions, params.width, params.height);
                gl.uniform2f(u.u_dash, dash[0], dash[1]);
            }
        };
    }
    // The curve shader already finds the closest point on the curve (parameter t) for each pixel;
    // t times the curve's approximate length gives the distance along it.
    function dashCurve(Base, dash) {
        return class extends Base {
            getDefinition() {
                const d = super.getDefinition();
                return {
                    ...d,
                    UNIFORMS: [...d.UNIFORMS, 'u_dash'],
                    FRAGMENT_SHADER_SOURCE: d.FRAGMENT_SHADER_SOURCE
                        .replace('vec2 getDistanceVector(', 'uniform vec2 u_dash;\nfloat g_t;\nvec2 getDistanceVector(')
                        .replace('return mix(mix(b0, b1, t), mix(b1, b2, t), t);', 'g_t = t;\n  return mix(mix(b0, b1, t), mix(b1, b2, t), t);')
                        .replace('float thickness = v_thickness;', 'float thickness = v_thickness;\n  #ifndef PICKING_MODE\n' +
                            '  float curveLength = (2.0 * length(v_cpC - v_cpA) + length(v_cpB - v_cpA) + length(v_cpC - v_cpB)) / 3.0;\n' +
                            '  if (mod(g_t * curveLength, u_dash.x + u_dash.y) > u_dash.x) discard;\n  #endif'),
                };
            }
            setUniforms(params, info) {
                super.setUniforms(params, info);
                // Curve coordinates are in device pixels.
                info.gl.uniform2f(info.uniformLocations.u_dash, dash[0] * params.pixelRatio, dash[1] * params.pixelRatio);
            }
        };
    }

    function createRenderer() {
        const { createNodeBorderProgram, EdgeRectangleProgram, createEdgeArrowProgram, EdgeCurveProgram,
            createEdgeClampedProgram, createEdgeArrowHeadProgram, createEdgeCompoundProgram } = Sigma.rendering;
        const NodeProgram = createNodeBorderProgram({
            borders: [
                { size: { value: 0.12 }, color: { attribute: 'haloColor' } },
                { size: { attribute: 'ringSize', defaultValue: 0 }, color: { attribute: 'color' } },
                { size: { fill: true }, color: { attribute: 'coreColor' } },
            ],
        });
        const arrowOptions = { lengthToThicknessRatio: 4.5, widenessToThicknessRatio: 3.4 };
        const ArrowProgram = createEdgeArrowProgram(arrowOptions);
        const dashedArrow = dash => createEdgeCompoundProgram([
            dashStraight(createEdgeClampedProgram(arrowOptions), dash), createEdgeArrowHeadProgram(arrowOptions)]);
        const r = new Sigma(graph, $('sigma'), {
            defaultNodeType: 'lexis',
            nodeProgramClasses: { lexis: NodeProgram },
            defaultEdgeType: 'line',
            edgeProgramClasses: {
                line: EdgeRectangleProgram, arrow: ArrowProgram, curve: EdgeCurveProgram,
                lineDotted: dashStraight(EdgeRectangleProgram, DASH.dotted), arrowDotted: dashedArrow(DASH.dotted), curveDotted: dashCurve(EdgeCurveProgram, DASH.dotted),
                lineDashed: dashStraight(EdgeRectangleProgram, DASH.dashed), arrowDashed: dashedArrow(DASH.dashed), curveDashed: dashCurve(EdgeCurveProgram, DASH.dashed),
            },
            renderEdgeLabels: false,
            enableEdgeEvents: true,
            labelFont: P.font,
            labelSize: 12,
            labelDensity: 0.55,
            labelGridCellSize: 110,
            labelRenderedSizeThreshold: 6,
            defaultDrawNodeLabel: drawLabel,
            defaultDrawNodeHover: drawHover,
            zIndex: true,
            minCameraRatio: 0.02,
            maxCameraRatio: 4,
            stagePadding: 24,
            allowInvalidContainer: true,
            nodeReducer,
            edgeReducer,
        });
        // Keep the coordinate frame fixed (the focus view moves nodes; the map should not rescale).
        let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
        graph.forEachNode((k, a) => {
            if (a.community < 0) return;
            x0 = Math.min(x0, a.mx); x1 = Math.max(x1, a.mx); y0 = Math.min(y0, a.my); y1 = Math.max(y1, a.my);
        });
        r.setCustomBBox({ x: [x0, x1], y: [y0, y1] });
        // The frame is applied on the next processing pass; run it now so camera math done during
        // startup (fit, URL selection) already uses it.
        r.refresh();
        return r;
    }

    function updateLOD() {
        const mode = state.level !== 'all' ? 'level' : renderer.getCamera().ratio > OVERVIEW_RATIO ? 'overview' : 'detail';
        if (mode === overview) return;
        overview = mode;
        // Level views draw only the labels pickLabels() chose; the full map hides node labels
        // at overview (region labels take over) and uses sigma's label grid when zoomed in.
        renderer.setSetting('labelRenderedSizeThreshold', mode === 'detail' ? 6 : Infinity);
    }

    // ----------------------------------------------------------------- levels
    // Level layouts are in screen pixels; scale each into the map's coordinate frame (which the
    // renderer keeps fixed) so the camera logic is the same at every level.
    function prepareLevels() {
        let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
        graph.forEachNode((k, a) => {
            if (a.community < 0) return;
            x0 = Math.min(x0, a.mx); x1 = Math.max(x1, a.mx); y0 = Math.min(y0, a.my); y1 = Math.max(y1, a.my);
        });
        const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
        levelCenterX = cx;
        for (const [name, pos] of Object.entries(layout.levels || {})) {
            const keys = Object.keys(pos).filter(k => graph.hasNode(k));
            if (!keys.length) continue;
            const xs = keys.map(k => pos[k][0]), ys = keys.map(k => pos[k][1]);
            const a0 = Math.min(...xs), a1 = Math.max(...xs), b0 = Math.min(...ys), b1 = Math.max(...ys);
            const sc = 0.92 * Math.min((x1 - x0) / (a1 - a0 || 1), (y1 - y0) / (b1 - b0 || 1));
            levelPos[name] = new Map(keys.map(k => [k, { x: cx + (pos[k][0] - (a0 + a1) / 2) * sc, y: cy + (pos[k][1] - (b0 + b1) / 2) * sc }]));
            levelScale[name] = sc;
            levelSets.set(name, new Set(keys));
            // Natural aspect of the level including its labels (about 7 px per character).
            const right = Math.max(...keys.map(k => pos[k][0] + 26 + 7 * graph.getNodeAttribute(k, 'name').length));
            levelAspect[name] = (right - a0) / ((b1 - b0) + 30 || 1);
        }
        document.querySelectorAll('[data-level]').forEach(b => { b.hidden = b.dataset.level !== 'all' && !levelSets.has(b.dataset.level); });
    }

    // A level view is fitted whole, so on a screen wider than the layout it spreads out
    // horizontally (up to 1.8x) instead of leaving empty margins; labels then overlap less.
    // The details panel is ignored here so opening it does not reshape the map.
    function computeStretch() {
        if (state.level === 'all' || !renderer) return 1;
        const f = freeArea({ ignorePanel: true });
        const w = f.W - f.left - f.right, h = f.H - f.top - f.bottom;
        if (w <= 0 || h <= 0) return 1;
        return clamp((w / h) / levelAspect[state.level], 1, 1.8);
    }
    function setHomes() {
        const lp = levelPos[state.level], moved = dragged[state.level];
        graph.updateEachNodeAttributes((k, a) => {
            const p = (moved && moved.get(k)) || (lp ? lp.get(k) : { x: a.mx, y: a.my });
            const x0 = !p ? a.mx : state.level === 'all' ? p.x : levelCenterX + (p.x - levelCenterX) * stretch;
            return { ...a, x0, y0: p ? p.y : a.my, size: sizeFor(a) };
        });
    }
    // Keep a dragged entity where the reader put it (until the view changes level).
    function rememberDrag(k) {
        const a = graph.getNodeAttributes(k);
        if (!dragged[state.level]) dragged[state.level] = new Map();
        dragged[state.level].set(k, { x: state.level === 'all' ? a.x : levelCenterX + (a.x - levelCenterX) / stretch, y: a.y });
        graph.mergeNodeAttributes(k, { x0: a.x, y0: a.y });
    }
    // After the free area changes (panel collapsed, window resized): re-stretch and refit.
    function layoutAreaChanged(duration) {
        if (state.level === 'all' || state.focus) return;
        const next = computeStretch();
        if (Math.abs(next - stretch) > 0.02) {
            stretch = next;
            setHomes();
            const targets = {};
            graph.forEachNode((k, a) => {
                if (duration && visibleNodes.has(k)) targets[k] = { x: a.x0, y: a.y0 };
                else graph.mergeNodeAttributes(k, { x: a.x0, y: a.y0 });
            });
            if (duration) animateTo(targets, duration, schedulePickLabels);
        }
        fitAll(duration);
    }

    function applyLevel(level, { animate = true } = {}) {
        if (level !== 'all' && !levelSets.has(level)) level = 'all';
        const keep = state.focus && !state.focus.multi ? state.focus.prevSelection || [] : state.selection.slice();
        if (keep.length) animate = false;   // the selection view is redrawn right after
        if (state.focus) { exitFocus({ keepSelection: true, keepCamera: true }); savedCamera = null; }
        finishAnimation();
        state.level = level;
        stretch = computeStretch();
        setHomes();
        state.selection = [];
        state.edge = null;
        recomputeVisibility();
        const targets = {};
        graph.forEachNode((k, a) => {
            if (animate && visibleNodes.has(k)) targets[k] = { x: a.x0, y: a.y0 };
            else graph.mergeNodeAttributes(k, { x: a.x0, y: a.y0 });
        });
        if (animate) animateTo(targets, 650, schedulePickLabels);
        overview = null;
        updateLOD();
        refresh(true);
        renderPanel();
        syncControls();
        syncURL();
        fitAll(animate ? 650 : 0);
        // The selection is independent of the level, so it survives the switch.
        if (keep.length) setSelection(keep);
    }

    function bindEvents() {
        const container = $('sigma');
        renderer.on('enterNode', ({ node }) => {
            if (drag) return;
            state.hovered = node;
            container.style.cursor = 'pointer';
            refresh();
            positionRegions();
        });
        renderer.on('leaveNode', () => {
            if (drag) return;
            state.hovered = null;
            container.style.cursor = '';
            refresh();
            positionRegions();
        });
        // Dragging: press on an entity and move to reposition it. The camera stays put, its
        // neighborhood stays highlighted, and releasing does not count as a click.
        renderer.on('downNode', ({ node }) => {
            finishAnimation();
            drag = { node, moved: false };
            state.hovered = node;
            refresh();
        });
        renderer.on('moveBody', ({ event }) => {
            if (!drag) return;
            event.preventSigmaDefault();
            if (event.original) { event.original.preventDefault(); event.original.stopPropagation(); }
            const p = renderer.viewportToGraph(event);
            graph.mergeNodeAttributes(drag.node, { x: p.x, y: p.y });
            if (!drag.moved) { drag.moved = true; container.style.cursor = 'grabbing'; }
            schedulePickLabels();
        });
        const endDrag = () => {
            if (!drag) return;
            if (drag.moved) {
                if (!state.focus) rememberDrag(drag.node);   // the neighborhood view's ring is temporary
                justDragged = true;
                setTimeout(() => { justDragged = false; }, 0);
            }
            drag = null;
            container.style.cursor = state.hovered ? 'pointer' : '';
            schedulePickLabels();
        };
        renderer.on('upNode', endDrag);
        renderer.on('upStage', endDrag);

        let lastClick = null;
        // A click selects an entity, or deselects it if it is already selected. Nothing else
        // deselects by accident: not clicking empty space, Esc, picking another entity, or
        // switching level. In the neighborhood view a click moves to the clicked neighbor.
        renderer.on('clickNode', ({ node }) => {
            if (justDragged) return;
            lastClick = { node, t: performance.now(), before: state.selection.slice() };
            if (state.focus && !state.focus.multi) { if (node !== state.focus.root && state.focus.keys.has(node)) enterFocus(node); return; }
            toggleInSelection(node);
        });
        // A selected entity's colored lines open the papers behind them. Other lines are hidden
        // while something is selected, so a click between them still reaches clickStage; at
        // overview (nothing selected) line clicks are ignored.
        renderer.on('enterEdge', ({ edge }) => {
            if (!active || active.pair) return;
            state.hoveredEdge = edge;
            container.style.cursor = 'pointer';
            renderer.refresh({ skipIndexation: true });
        });
        renderer.on('leaveEdge', () => {
            if (!state.hoveredEdge) return;
            state.hoveredEdge = null;
            container.style.cursor = '';
            renderer.refresh({ skipIndexation: true });
        });
        renderer.on('clickEdge', ({ edge }) => {
            if (!active || active.pair) return;
            state.hoveredEdge = null;
            container.style.cursor = '';
            openEdge(graph.source(edge), graph.target(edge), graph.getEdgeAttribute(edge, 'rel'));
        });
        // The first click of a double-click starts re-arranging the view, so the second can land
        // on empty space; treat it as a double-click on the entity clicked first.
        // A double-click opens the neighborhood view; undo the selection change its first click made.
        const openNeighborhood = node => {
            if (lastClick && lastClick.node === node && !(state.focus && !state.focus.multi)) state.selection = lastClick.before;
            lastClick = null;
            enterFocus(node);
        };
        renderer.on('doubleClickStage', e => {
            if (!lastClick || performance.now() - lastClick.t > 600) return;
            e.preventSigmaDefault();
            openNeighborhood(lastClick.node);
        });
        renderer.on('doubleClickNode', e => {
            e.preventSigmaDefault();
            openNeighborhood(e.node);
        });
        renderer.on('clickStage', () => {
            if (justDragged) return;
            if (state.edge) closeEdge();   // only the papers view closes; the selection stays
        });
        renderer.on('afterRender', positionRegions);
        renderer.getCamera().on('updated', () => { updateLOD(); schedulePickLabels(); });

        $('panel').addEventListener('click', onPanelClick);
        // The panel's x deselects the entity it shows (or leaves the neighborhood or papers view).
        $('panelClose').addEventListener('click', () => {
            if (state.edge) { closeEdge(); return; }
            if (state.focus && !state.focus.multi) { exitFocus(); return; }
            const k = state.selection[state.selection.length - 1];
            if (k) toggleInSelection(k);
        });
        $('addAnother').addEventListener('click', () => {
            setAddMode(true);
            if (window.innerWidth <= 760) $('controls').classList.add('is-open');
            $('searchInput').value = '';   // start a fresh search, not appended to an earlier query
            renderResults('');
            $('searchInput').focus();
        });
        $('focusBtn').addEventListener('click', () => {
            if (state.focus && !state.focus.multi) { exitFocus(); return; }
            state.induced = !state.induced;
            if (state.selection.length) enterMulti(state.selection); else renderPanel();
            syncURL();
        });
        // Top bar: "Clear all" in the selection view (a deliberate clear), "Back" in the neighborhood view.
        $('exitFocus').addEventListener('click', () => {
            if (state.focus && state.focus.multi) setSelection([]); else exitFocus();
        });
        $('copyLink').addEventListener('click', () => {
            clearTimeout(urlTimer);
            writeURL();
            const done = () => toast('Link copied');
            if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(done, () => toast(location.href));
            else toast(location.href);
        });

        $('controls').addEventListener('click', ev => {
            const b = ev.target.closest('[data-entity], [data-edge], [data-level]');
            if (!b) return;
            if (b.dataset.level) {
                if (b.dataset.level !== state.level) applyLevel(b.dataset.level);
                return;
            }
            if (b.dataset.entity) {
                const s = state.entityTypes;
                s.has(b.dataset.entity) ? s.delete(b.dataset.entity) : s.add(b.dataset.entity);
            } else {
                const s = state.edgeTypes;
                s.has(b.dataset.edge) ? s.delete(b.dataset.edge) : s.add(b.dataset.edge);
            }
            filtersChanged();
        });
        // Minimum papers: whole numbers from 2 to the data's maximum. While the text is not
        // valid the box is marked and the last valid value stays applied; leaving the box or
        // pressing Enter turns it into the nearest valid value.
        const mp = $('minPapers');
        let mpTimer = null;
        const applyMinPapers = n => { clearTimeout(mpTimer); if (n !== state.minPapers) { state.minPapers = n; filtersChanged(); } };
        mp.addEventListener('input', () => {
            const n = parseMinPapers(mp.value);
            clearTimeout(mpTimer);
            if (n === null) { markMinPapers(`Enter a whole number from ${MIN_MIN_PAPERS} to ${fmt(maxMinPapers)}.`); return; }
            markMinPapers(null);
            // Arrow keys and the spinner (steps of 1) apply at once; typed numbers wait for a pause,
            // so typing 25 does not briefly apply 2.
            if (Math.abs(n - state.minPapers) === 1) applyMinPapers(n);
            else mpTimer = setTimeout(() => applyMinPapers(n), 350);
        });
        const normalizeMinPapers = () => {
            clearTimeout(mpTimer);
            const raw = mp.value.trim(), num = Number(raw);
            const n = parseMinPapers(raw) ?? (raw !== '' && Number.isFinite(num) ? clamp(Math.round(num), MIN_MIN_PAPERS, maxMinPapers) : state.minPapers);
            mp.value = n;
            markMinPapers(null);
            if (n !== state.minPapers) { state.minPapers = n; filtersChanged(); } else syncControls();
        };
        mp.addEventListener('blur', normalizeMinPapers);
        mp.addEventListener('keydown', ev => { if (ev.key === 'Enter') { ev.preventDefault(); normalizeMinPapers(); } });
        $('showUnlinked').addEventListener('change', ev => { state.showUnlinked = ev.target.checked; filtersChanged(); });
        $('showRegions').addEventListener('change', ev => { state.showRegions = ev.target.checked; positionRegions(); });
        $('filtersToggle').addEventListener('click', () => {
            const controls = $('controls');
            if (window.innerWidth <= 760) {
                controls.classList.toggle('is-open');
            } else {
                const collapsed = controls.classList.toggle('is-collapsed');
                try { localStorage.setItem('lexis-ng2-controls', collapsed ? 'collapsed' : 'open'); } catch (_) { }
                layoutAreaChanged(450);
            }
            syncPanelToggle();
        });
        window.addEventListener('resize', syncPanelToggle);

        const input = $('searchInput');
        input.addEventListener('input', () => renderResults(input.value));
        // The list opens as soon as the search box is focused or clicked, even with no query.
        input.addEventListener('focus', () => renderResults(input.value));
        input.addEventListener('click', () => { if ($('searchResults').hidden) renderResults(input.value); });
        input.addEventListener('keydown', ev => {
            if (ev.key === 'ArrowDown') { ev.preventDefault(); moveCursor(1); }
            else if (ev.key === 'ArrowUp') { ev.preventDefault(); moveCursor(-1); }
            else if (ev.key === 'Enter') {
                // Enter adds the entity and closes the list; Shift+Enter ticks or unticks and keeps it open.
                if (cursor >= 0 && results[cursor]) { if (ev.shiftKey) toggleFromSearch(results[cursor].it.key); else chooseResult(results[cursor].it.key); }
            }
            else if (ev.key === 'Escape') { input.value = ''; renderResults(''); setAddMode(false); input.blur(); }
        });
        // Any press inside the list keeps focus in the search box (so scrolling with the scrollbar
        // does not close it). Rows tick and untick; the headers sort or clear.
        $('searchResults').addEventListener('mousedown', ev => {
            ev.preventDefault();
            if (ev.target.closest('[data-done]')) { closeSearchList(); return; }
            const sortBtn = ev.target.closest('[data-sort]');
            if (sortBtn) { listSort = sortBtn.dataset.sort; renderResults(input.value); return; }
            if (ev.target.closest('[data-clear]')) { setSelection([]); renderResults(input.value, {}); return; }
            const li = ev.target.closest('li[data-key]');
            if (li) toggleFromSearch(li.dataset.key, li);
        });
        $('searchResults').addEventListener('scroll', () => {
            const ul = $('searchResults');
            if (ul.scrollTop + ul.clientHeight > ul.scrollHeight - 240) loadMoreRows();
        });
        input.addEventListener('blur', () => setTimeout(() => {
            if (!input.value) setAddMode(false); $('searchResults').hidden = true; $('searchBox').setAttribute('aria-expanded', 'false'); }, 120));

        const cam = renderer.getCamera();
        // One zoom step (sigma's default factor is 1.5); a jump instead under reduced motion.
        const zoomStep = (dir, duration) => {
            if (!reducedMotion.matches) { dir > 0 ? cam.animatedZoom({ duration }) : cam.animatedUnzoom({ duration }); return; }
            cam.setState({ ratio: clamp(cam.ratio * (dir > 0 ? 1 / 1.5 : 1.5), renderer.getSetting('minCameraRatio'), renderer.getSetting('maxCameraRatio')) });
        };
        $('zoomIn').addEventListener('click', () => zoomStep(1, 250));
        $('zoomOut').addEventListener('click', () => zoomStep(-1, 250));
        $('zoomFit').addEventListener('click', () => fitAll());
        $('fullPage').addEventListener('click', () => setFullPage(!document.body.classList.contains('ng2-full')));
        $('themeToggle').addEventListener('click', () => setTheme(THEMES[(THEMES.indexOf(currentTheme()) + 1) % THEMES.length]));

        document.addEventListener('keydown', ev => {
            if (ev.ctrlKey || ev.metaKey || ev.altKey) return;   // leave the browser's own shortcuts alone
            const el = document.activeElement;
            const typing = el && (/^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName) || el.isContentEditable);
            if (ev.key === '/' && !typing) { ev.preventDefault(); input.focus(); return; }
            if (typing) return;
            if (ev.key === 'Escape') {
                // Esc closes the papers view, leaves the neighborhood view, or leaves full page; it never deselects.
                if (state.edge) closeEdge(); else if (state.focus && !state.focus.multi) exitFocus();
                else if (document.body.classList.contains('ng2-full')) setFullPage(false);
            } else if (ev.key === '+' || ev.key === '=') zoomStep(1, 200);
            else if (ev.key === '-' || ev.key === '_') zoomStep(-1, 200);
            else if (ev.key === '0') fitAll();
            else if (ev.key === 'f' || ev.key === 'F') setFullPage(!document.body.classList.contains('ng2-full'));
            else if (document.activeElement === container && ev.key.startsWith('Arrow')) {
                ev.preventDefault();
                const s = cam.getState(), d = 0.12 * s.ratio;
                const dx = ev.key === 'ArrowLeft' ? -d : ev.key === 'ArrowRight' ? d : 0;
                const dy = ev.key === 'ArrowUp' ? d : ev.key === 'ArrowDown' ? -d : 0;
                if (reducedMotion.matches) cam.setState({ x: s.x + dx, y: s.y + dy });
                else cam.animate({ x: s.x + dx, y: s.y + dy }, { duration: 150 });
            }
        });
    }
    function fitAll(duration = 600) {
        if (state.focus) {   // zoom to everything shown, without leaving the view
            const pts = [];
            visibleNodes.forEach(k => { const a = graph.getNodeAttributes(k); pts.push({ x: a.x, y: a.y }); });
            const padX = window.innerWidth > 760 ? 80 : 40;
            fitPoints(pts, { padding: window.innerWidth > 760 ? 72 : 40, padX,
                padRight: Math.max(padX, Math.min(labelRoom(state.selection), renderer.getDimensions().width / 3)), maxRatio: 4, duration });
            return;
        }
        const pts = [];
        // In level views also fit the end of each label (the layout reserved that room at about
        // one layout pixel per screen pixel).
        const sc = levelScale[state.level];
        visibleNodes.forEach(k => {
            const a = graph.getNodeAttributes(k);
            pts.push({ x: a.x0, y: a.y0 });
            if (sc) pts.push({ x: a.x0 + (a.size + 8 + 0.55 * labelFontSize(a) * a.label.length) * sc, y: a.y0 });
        });
        fitPoints(pts, { padding: sc ? 44 : 24, maxRatio: 4, duration });
    }

    async function init() {
        updateThemeButton();
        const t0 = performance.now();
        let bundle;
        try {
            [bundle, layout] = await Promise.all([fetchJSON(DATA_URL), fetchJSON(LAYOUT_URL)]);
        } catch (err) {
            console.error(err);
            $('loading').classList.add('is-error');
            $('loadingText').textContent = `Could not load the network data (${err.message}). If graph_v2/layout.json is missing, run tools/build_graph_v2_layout.py.`;
            return;
        }
        graph = buildGraph(bundle);
        graph.forEachEdge((e, a) => { maxMinPapers = Math.max(maxMinPapers, a.papers); });
        $('minPapers').max = maxMinPapers;
        prepareLevels();
        regions = (layout.communities || []).filter(c => c.label).map(c => ({ ...c }));
        shelves = (layout.shelves || []).map(sh => ({ ...sh }));
        if (layout.small_groups) shelves.push({ ...layout.small_groups, type: null, always: true });
        const fromURL = readURL();
        P = readPalette();
        applyColors();
        syncControls();
        recomputeVisibility();
        try { if (localStorage.getItem('lexis-ng2-controls') === 'collapsed') $('controls').classList.add('is-collapsed'); } catch (_) { }
        syncPanelToggle();
        updateFullPageButton();
        await waitForSize($('sigma'));
        updateSizeScale();
        renderer = createRenderer();
        // The stage also changes size when the header wraps or the browser chrome moves.
        // A level view refits too, since it is meant to be seen whole (late web fonts can change
        // the header height after startup).
        new ResizeObserver(() => {
            updateSizeScale();
            renderer.resize();
            renderer.refresh();
            layoutAreaChanged(0);
        }).observe($('sigma'));
        buildIndex();
        bindEvents();
        updateLOD();
        applyLevel(state.level, { animate: false });
        if (fromURL.sel.length && fromURL.focus) enterFocus(fromURL.sel[0]);
        else if (fromURL.sel.length) setSelection(fromURL.sel);
        if (fromURL.edge && fromURL.edge[0] && fromURL.edge[1]) openEdge(...fromURL.edge);
        $('loading').classList.add('is-done');
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { renderRegionsDOM(); renderer.refresh(); });
        const ms = Math.round(performance.now() - t0);
        console.info(`[network] ${graph.order} entities, ${graph.size} relationships, ready in ${ms} ms`);
        window.LexisGraph.readyMs = ms;
        emit('ready', { graph, renderer });
    }

    // Small API for the planned subgraph builder and for debugging.
    window.LexisGraph = {
        get graph() { return graph; },
        get renderer() { return renderer; },
        state,
        getSelection: () => state.selection.slice(),
        select: keys => setSelection(Array.isArray(keys) ? keys : [keys]),
        focus: k => enterFocus(k),
        exitFocus: () => exitFocus(),
        on(evt, cb) { (listeners[evt] = listeners[evt] || []).push(cb); },
    };

    init();
})();
