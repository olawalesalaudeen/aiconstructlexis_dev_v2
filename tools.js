// Analysis tools for the AI Construct Lexis: tools.html (list) and tools_<name>.html (one tool each).
// The page's <body data-tool="..."> picks the tool; no data-tool means the list page.
(function () {
    'use strict';

    const DATA_DIR = 'nomological_network_data/';
    const VENUES = ['iclr24', 'neurips24', 'iclr25', 'naacl25', 'acl25', 'icml25', 'emnlp25'];
    const VENUE_LABEL = { iclr24: "ICLR'24", neurips24: "NeurIPS'24", iclr25: "ICLR'25", naacl25: "NAACL'25", acl25: "ACL'25", icml25: "ICML'25", emnlp25: "EMNLP'25" };
    const VIEWER_TYPE = { c: 'construct', m: 'measurement', b: 'behavior' };

    const TOOLS = {
        confirmatory: {
            page: 'tools_confirmatory.html', title: 'Confirmatory analysis',
            question: 'Which instruments should load on which construct, and which constructs should correlate?',
            bullets: ['A path diagram of the model drafted from claims; click instruments in or out', 'Checks that each construct has enough instruments to be estimated', 'Expected correlations between the constructs', 'A Python script (semopy) that fits it'],
            example: 'Mathematical reasoning',
            entity: 'c', label: 'Constructs (add two or more)',
            defaultSel: ['Mathematical reasoning', 'Commonsense reasoning', 'Long-context understanding'],
            intro: 'Design a confirmatory factor analysis before you look at any scores: which instruments load on which construct, ' +
                'and which constructs should correlate. The draft comes from claims in papers; adjust it in the diagram, then fit and test it on your own data.',
        },
        overlap: {
            page: 'tools_overlap.html', title: 'Instrument overlap and separation',
            question: 'Which constructs are measured the same way, and which are measured in ways that do not hang together?',
            bullets: ['Instrument overlap: pairs of constructs ranked by how many instruments they share', 'Instrument separation: constructs whose instruments come from unrelated areas'],
            example: 'Reasoning',
            entity: 'c', label: 'Focus on constructs (optional)', optional: true, defaultSel: [],
            intro: 'Two checks on how constructs are measured. Overlap finds different constructs measured with the same instruments; separation finds one construct measured with instruments that belong to unrelated areas. ' +
                'Both are leads to read, not verdicts.',
        },
        instrument: {
            page: 'tools_instrument.html', title: 'Instrument profile',
            question: 'What is this benchmark claimed to measure, how specific is it, and how does it compare with others?',
            bullets: ['Every construct it is claimed to measure, with its share of the claims', 'A concentration score for specificity', 'Add several instruments to compare them: shared and unique constructs, and papers that report more than one'],
            example: 'MMLU',
            entity: 'm', label: 'Instruments (add one or more)',
            intro: 'Everything papers claim an instrument measures, and how concentrated those claims are. ' +
                'Add more than one to compare them side by side.',
        },
        claim: {
            page: 'tools_claim.html', title: 'Claim checker',
            question: 'Does the literature also use your instrument to measure your construct?',
            bullets: ['How many papers make the same claim, and where your construct ranks among everything the instrument is said to measure', 'What else papers say the instrument measures', 'Other instruments papers use for your construct, with how often they appear next to yours'],
            example: 'GSM8K for Mathematical reasoning',
            entity: 'c', label: 'Construct you measure', single: true,
            defaultSel: ['Mathematical reasoning'], defaultMs: ['GSM8K', 'MMLU'],
            intro: 'Enter the construct you claim to measure and the instruments you use for it, as you would write them in a paper. ' +
                'The page shows whether other papers make the same claim and what they use instead.',
        },
    };


    // ------------------------------------------------------------------ state
    const TOOL = document.body.dataset.tool || null;
    const DEFAULTS = { tool: TOOL, cs: (TOOLS[TOOL] && TOOLS[TOOL].defaultSel) || ['Mathematical reasoning'], ms: (TOOLS[TOOL] && TOOLS[TOOL].defaultMs) || ['MMLU'], min: 2, v: VENUES.slice(), meth: true, with: [],
        excl: [], incl: [], topK: 5, cross: false, minShared: 3, jMinP: 5, jMinI: 3, tab: 'jangle' };
    const NUM_PARAMS = [['topK', 'k', 2, 30], ['minShared', 'shared', 1, 50], ['jMinP', 'jp', 2, 500], ['jMinI', 'ji', 2, 100]];
    let S = Object.assign({}, DEFAULTS);

    function readUrl() {
        const p = new URLSearchParams(location.search);
        const s = Object.assign({}, DEFAULTS, { cs: DEFAULTS.cs.slice(), ms: DEFAULTS.ms.slice(), v: VENUES.slice() });
        // A present-but-empty c= or m= is an explicitly emptied selection; an absent param means the default.
        if (p.has('c')) s.cs = [...new Set(p.get('c').split('|').filter(Boolean))];
        if (p.has('m')) s.ms = [...new Set(p.get('m').split('|').filter(Boolean))];
        if (p.get('min')) s.min = Math.max(1, parseInt(p.get('min'), 10) || 1);
        if (p.get('v')) s.v = p.get('v').split(',').filter(x => VENUES.includes(x));
        if (!s.v.length) s.v = VENUES.slice();
        if (p.has('meth')) s.meth = p.get('meth') !== '0';
        NUM_PARAMS.forEach(([k, q, lo, hi]) => { if (p.get(q)) s[k] = Math.min(hi, Math.max(lo, parseInt(p.get(q), 10) || DEFAULTS[k])); });
        if (p.has('x')) s.cross = p.get('x') !== '0';
        s.excl = p.get('ex') ? p.get('ex').split('|').filter(Boolean) : [];
        s.incl = p.get('in') ? p.get('in').split('|').filter(Boolean) : [];
        if (['jangle', 'jingle'].includes(p.get('tab'))) s.tab = p.get('tab');
        return s;
    }

    function writeUrl() {
        const p = new URLSearchParams();
        if (S.tool === 'overlap') p.set('tab', S.tab);
        // The param is written even when the selection is empty (as c= / m=) whenever the default
        // is non-empty, so an explicitly emptied selection survives reload and sharing.
        if (TOOLS[S.tool].entity === 'c') { if (S.cs.length || DEFAULTS.cs.length) p.set('c', S.cs.join('|')); } else p.set('m', S.ms.join('|'));
        if (S.tool === 'claim') p.set('m', S.ms.join('|'));
        NUM_PARAMS.forEach(([k, q]) => { if (S[k] !== DEFAULTS[k]) p.set(q, S[k]); });
        if (S.cross !== DEFAULTS.cross) p.set('x', S.cross ? '1' : '0');
        if (S.excl.length) p.set('ex', S.excl.join('|'));
        if (S.incl.length) p.set('in', S.incl.join('|'));
        if (S.min !== DEFAULTS.min) p.set('min', S.min);
        if (S.v.length !== VENUES.length) p.set('v', S.v.join(','));
        if (S.meth !== DEFAULTS.meth) p.set('meth', S.meth ? '1' : '0');
        history.replaceState(null, '', location.pathname + '?' + p.toString());
    }

    // ------------------------------------------------------------------ data
    let D = null;          // analysis bundle
    let byName = {};       // "type:name" -> node idx
    let adj = [];          // node idx -> edge idxs
    let methodSet = new Set();
    let evidence = null, paperUrls = null;

    const key = (t, n) => t + ':' + n;
    function findIdx(t, n) {
        if (byName[key(t, n)] !== undefined) return byName[key(t, n)];
        const lo = n.toLowerCase();
        const i = D.nodes.findIndex(x => x[1] === t && x[0].toLowerCase() === lo);
        return i < 0 ? undefined : i;
    }
    const nName = i => D.nodes[i][0];
    const nType = i => D.nodes[i][1];

    async function load() {
        const [bundle, cfg] = await Promise.all([
            fetch(DATA_DIR + 'analysis.bundle.json').then(r => { if (!r.ok) throw new Error('analysis.bundle.json: ' + r.status); return r.json(); }),
            fetch('analysis_config.json').then(r => r.ok ? r.json() : {}).catch(() => ({})),
        ]);
        D = bundle;
        D.nodes.forEach((n, i) => { byName[key(n[1], n[0])] = i; adj.push([]); });
        D.edges.forEach((e, i) => { adj[e[0]].push(i); if (e[1] !== e[0]) adj[e[1]].push(i); });
        // The config lists method-like instruments by display name. Resolve each against the
        // canonical names; the rest may be aliases, looked up in graph.bundle.json below.
        methodSet = new Set();
        const unresolved = [];
        for (const n of (cfg.method_like_instruments || [])) {
            const i = findIdx('m', n);
            if (i === undefined) unresolved.push(n.toLowerCase()); else methodSet.add(nName(i));
        }
        if (unresolved.length) resolveMethodAliases(new Set(unresolved));
    }

    // A configured name that matches no canonical instrument may be an alias of one
    // (graph.bundle.json carries each entity's aliases); a name that matches nothing is inert.
    // Resolution runs in the background and re-renders once when it adds an instrument.
    function resolveMethodAliases(wanted) {
        fetch(DATA_DIR + 'graph.bundle.json').then(r => r.ok ? r.json() : null).then(g => {
            if (!g || !g.nodes) return;
            let hit = false;
            for (const n of g.nodes) {
                if (n.type !== 'measurement' || !(n.names || []).some(a => wanted.has(String(a).toLowerCase()))) continue;
                const i = findIdx('m', n.name);
                if (i !== undefined && !methodSet.has(nName(i))) { methodSet.add(nName(i)); hit = true; }
            }
            if (hit) render();
        }).catch(() => { /* the exclusion then covers only exact-name matches */ });
    }

    async function loadEvidence() {
        if (!evidence) {
            const [ev, urls] = await Promise.all([
                fetch(DATA_DIR + 'analysis_evidence.json').then(r => { if (!r.ok) throw new Error('analysis_evidence.json: ' + r.status); return r.json(); }),
                fetch(DATA_DIR + 'paper_urls.json').then(r => r.ok ? r.json() : {}).catch(() => ({})),
            ]);
            evidence = ev.evidence.map(rows => new Map(rows));
            paperUrls = urls;
        }
    }

    // Papers on an edge that pass the venue filter.
    function edgePapers(ei) {
        const e = D.edges[ei];
        if (S.v.length === VENUES.length) return e[5];
        const vs = new Set(S.v);
        return e[5].filter(p => vs.has(D.papers[p][1]));
    }
    const edgeCount = ei => edgePapers(ei).length;
    const edgeOn = ei => edgeCount(ei) >= S.min;
    const isMethod = i => methodSet.has(nName(i));

    // Construct -> Map(instrument idx -> edge idx), active direct measured_by claims only.
    let instrOf = null, claimants = null, removedMethods = null;
    function buildIndex() {
        instrOf = new Map(); claimants = new Map(); removedMethods = new Map();
        D.edges.forEach((e, ei) => {
            if (e[2] !== 'measured_by' || nType(e[0]) !== 'c' || nType(e[1]) !== 'm' || !edgeOn(ei)) return;
            if (S.meth && isMethod(e[1])) {
                if (!removedMethods.has(e[0])) removedMethods.set(e[0], []);
                removedMethods.get(e[0]).push(e[1]);
                return;
            }
            if (!instrOf.has(e[0])) instrOf.set(e[0], new Map());
            instrOf.get(e[0]).set(e[1], ei);
            if (!claimants.has(e[1])) claimants.set(e[1], new Map());
            claimants.get(e[1]).set(e[0], ei);
        });
    }

    function jaccard(a, b) {
        if (!a || !b || !a.size || !b.size) return { j: 0, shared: [] };
        const shared = [];
        for (const k of a.keys()) if (b.has(k)) shared.push(k);
        return { j: shared.length / (a.size + b.size - shared.length), shared };
    }

    // Neighbours of node i through active edges, as Map(other idx -> [edge idxs]).
    function neighbours(i, filter) {
        const out = new Map();
        for (const ei of adj[i]) {
            if (!edgeOn(ei)) continue;
            const e = D.edges[ei];
            const o = e[0] === i ? e[1] : e[0];
            if (o === i || (filter && !filter(o, e))) continue;
            if (!out.has(o)) out.set(o, []);
            out.get(o).push(ei);
        }
        return out;
    }

    function venueCounts(eis) {
        const c = {}, seen = new Set();
        for (const ei of eis) for (const p of edgePapers(ei)) { if (seen.has(p)) continue; seen.add(p); const v = D.papers[p][1]; c[v] = (c[v] || 0) + 1; }
        return c;
    }
    function unionPapers(eis) { const s = new Set(); for (const ei of eis) for (const p of edgePapers(ei)) s.add(p); return s; }

    // ------------------------------------------------------------------ tools
    // Each tool returns { summary, groups: [{ id, title, desc, columns, rows, empty, more }], flat: [...] }
    // A row carries `cells` (for display), `data` (for export) and `edges` (for evidence and the paper list).

    // Both construct tools take a set of constructs (cis) and treat it as one target:
    // an instrument claimed for any of them is "theirs".
    function namesLabel(cis) {
        const n = cis.map(i => '<strong>' + esc(nName(i)) + '</strong>');
        return n.length < 3 ? n.join(' and ') : n.slice(0, -1).join(', ') + ', and ' + n[n.length - 1];
    }
    function directOf(cis) {
        const direct = new Map(); // instrument -> Map(construct -> edge)
        for (const ci of cis) for (const [m, ei] of (instrOf.get(ci) || [])) {
            if (!direct.has(m)) direct.set(m, new Map());
            direct.get(m).set(ci, ei);
        }
        return direct;
    }
    function removedOf(cis) { return [...new Set(cis.flatMap(ci => removedMethods.get(ci) || []))]; }

    // Claim checker: "we use instrument M to measure construct C". For each instrument it shows how many
    // papers make the same claim, what else papers say M measures, and what else papers use for C.
    // Counts follow the venue filter but not the minimum-papers setting: a claim made by one paper is
    // still worth seeing here.
    function claimsOf(m) { // construct -> edge, for "construct measured_by m"
        const out = new Map();
        for (const ei of adj[m]) {
            const e = D.edges[ei];
            if (e[2] === 'measured_by' && e[1] === m && nType(e[0]) === 'c' && edgeCount(ei) > 0) out.set(e[0], ei);
        }
        return out;
    }
    function instrumentsFor(c) { // instrument -> edge, for "c measured_by instrument"
        const out = new Map();
        for (const ei of adj[c]) {
            const e = D.edges[ei];
            if (e[2] === 'measured_by' && e[0] === c && nType(e[1]) === 'm' && edgeCount(ei) > 0) out.set(e[1], ei);
        }
        return out;
    }
    const ordinal = k => k + (k % 100 >= 11 && k % 100 <= 13 ? 'th' : ['th', 'st', 'nd', 'rd'][k % 10] || 'th');

    function claimChecker(c, mis) {
        const groups = [];
        const flat = [];
        const forC = instrumentsFor(c);
        const cName = esc(nName(c));
        const linked = new Set(adj[c].filter(ei => edgeCount(ei) > 0).map(ei => D.edges[ei][0] === c ? D.edges[ei][1] : D.edges[ei][0]));

        const verdicts = [];
        const claimRows = mis.map(m => {
            const cl = [...claimsOf(m)].map(([d, ei]) => ({ d, ei, n: edgeCount(ei) })).sort((a, b) => b.n - a.n || nName(a.d).localeCompare(nName(b.d)));
            const total = cl.reduce((s, x) => s + x.n, 0);
            const k = cl.findIndex(x => x.d === c);
            const mine = k >= 0 ? cl[k] : null;
            const n = mine ? mine.n : 0;
            const share = mine && total ? mine.n / total : 0;
            // "Common" needs both enough papers and enough of the instrument's claims: an instrument claimed
            // for dozens of constructs (e.g. human evaluation) is common for many of them and specific to none.
            let tag, cls;
            const common = n >= 5 && share >= 0.2;
            if (!mine) { tag = 'No paper makes this claim'; cls = 'warn'; }
            else if (common) { tag = 'A common claim'; cls = ''; }
            else if (n >= 5) { tag = 'Common, but ' + nName(m) + ' is claimed for many constructs (' + cl.length + ')'; cls = 'warn'; }
            else { tag = 'Made by few papers'; cls = 'warn'; }
            const generic = isMethod(m) ? '<div class="via" style="margin-top:4px">' + esc(nName(m)) + ' is a general evaluation procedure, not a benchmark for one construct; say what was rated and how.</div>' : '';
            // When nobody makes the claim, the closest claims are constructs M is used for that papers link to C
            // or that share instruments with C.
            let closest = [];
            if (!mine) {
                closest = cl.map(x => {
                    const shared = [...instrumentsFor(x.d).keys()].filter(i => forC.has(i)).length;
                    return { ...x, link: linked.has(x.d), shared };
                }).filter(x => x.link || x.shared).sort((a, b) => (b.link - a.link) || b.shared - a.shared || b.n - a.n).slice(0, 3);
            }
            verdicts.push({ m, n, k, cl, tag, common });
            const data = { instrument: nName(m), construct: nName(c), papers_making_this_claim: n, rank_among_its_constructs: mine ? k + 1 : '', constructs_it_is_claimed_for: cl.length, share_of_its_claims: +share.toFixed(3), status: tag };
            flat.push(data);
            return {
                cells: {
                    name: entLink(m), papers: n,
                    rank: mine ? ordinal(k + 1) + ' of ' + cl.length : '<span class="hint">not among its ' + cl.length + '</span>',
                    share,
                    status: '<span class="tag' + (cls ? ' warn' : '') + '">' + esc(tag) + '</span>' + generic +
                        (closest.length ? '<div class="via" style="margin-top:4px">Closest claims: ' + closest.map(x => entLink(x.d) + ' (' + x.n + (x.link ? ', linked to ' + cName : ', shares ' + x.shared + ' instrument' + (x.shared === 1 ? '' : 's') + ' with ' + cName) + ')').join('; ') + '</div>' : ''),
                },
                data, edges: mine ? [mine.ei] : closest.map(x => x.ei),
                title: mine ? nName(c) + ' measured by ' + nName(m) : 'Closest claims for ' + nName(m),
            };
        });
        groups.push({
            id: 'claims', title: 'Your claims', rows: claimRows, sortBy: null,
            desc: 'One row per instrument: how many papers also claim it measures ' + cName + ', where ' + cName + ' ranks among everything the instrument is claimed to measure, and its share of those claims.',
            columns: [col('name', 'Instrument'), col('papers', 'Papers making this claim', 'num'), col('rank', 'Rank among its constructs', null, true), col('share', 'Share of its claims', 'share'), col('status', 'What the literature says', null, true)],
            empty: '',
        });

        // What else each instrument is claimed to measure.
        for (const v of verdicts) {
            const total = v.cl.reduce((s, x) => s + x.n, 0);
            groups.push({
                id: 'else-' + v.m, title: 'What else papers say ' + nName(v.m) + ' measures', limit: 10, sortBy: 'papers',
                desc: v.cl.length > 1 ? esc(nName(v.m)) + ' is claimed for ' + v.cl.length + ' constructs. The more spread out these are, the weaker it is as evidence for any one of them; your construct is marked.' : '',
                columns: [col('name', 'Construct'), col('papers', 'Papers', 'num'), col('share', 'Share of its claims', 'share')],
                rows: v.cl.map(x => ({
                    cells: { name: (x.d === c ? '<strong>' + entLink(x.d) + '</strong> <span class="tag">yours</span>' : entLink(x.d)), papers: x.n, share: total ? x.n / total : 0 },
                    data: null, edges: [x.ei], title: nName(x.d) + ' measured by ' + nName(v.m),
                })),
                empty: 'No paper in the current venue filter claims ' + nName(v.m) + ' measures a construct.',
            });
        }

        // Other instruments papers use for C.
        const userSet = new Set(mis);
        const userPapers = unionPapers(mis.map(m => forC.get(m)).filter(ei => ei !== undefined));
        const alts = [...forC].filter(([m]) => !userSet.has(m) && !(S.meth && isMethod(m))).map(([m, ei]) => {
            const ps = edgePapers(ei);
            let co = 0; for (const p of ps) if (userPapers.has(p)) co++;
            return { m, ei, n: ps.length, spread: claimsOf(m).size - 1, co };
        }).sort((a, b) => b.n - a.n);
        groups.push({
            id: 'alts', title: 'Other instruments papers use for ' + nName(c), limit: 15, sortBy: 'papers',
            desc: 'Candidates to report alongside yours. Prefer ones many papers use and few other constructs claim ("Also claimed for"). "Used with yours" counts papers that report one of them together with your instrument for this construct.',
            columns: [col('name', 'Instrument'), col('papers', 'Papers', 'bar'), col('spread', 'Also claimed for', 'num'), col('co', 'Used with yours', 'num')],
            rows: alts.map(x => ({ cells: { name: entLink(x.m), papers: x.n, spread: x.spread, co: x.co }, data: null, edges: [x.ei], title: nName(c) + ' measured by ' + nName(x.m) })),
            empty: 'No other instrument is claimed for ' + nName(c) + ' in the current filter.',
        });

        const common = verdicts.filter(v => v.common).length;
        const none = verdicts.filter(v => v.k < 0).length;
        const summary = 'For <strong>' + cName + '</strong>: ' + verdicts.map(v => '<strong>' + esc(nName(v.m)) + '</strong> ' + (v.k < 0 ? 'is not claimed for it by any paper' : 'is claimed for it by ' + v.n + ' paper' + (v.n === 1 ? '' : 's'))).join('; ') + '. ' +
            (none ? 'An instrument nobody else uses for this construct needs an argument in your paper for why it measures it. ' : '') +
            (common === verdicts.length ? 'Your claims match common practice; the tables below show how specific each instrument is.' : '') +
            ' The Lexis records claims, not validity: a common claim can still be a weak one.';
        return { summary, groups, flat, removed: [] };
    }

    function instrument(mi) {
        const groups = [];
        const flat = [];
        const cl = [...(claimants.get(mi) || new Map())].map(([c, ei]) => ({ c, ei, n: edgeCount(ei) })).sort((a, b) => b.n - a.n);
        const total = cl.reduce((s, x) => s + x.n, 0);
        let H = 0; for (const x of cl) { const p = x.n / total; H -= p * Math.log(p); }
        const conc = cl.length > 1 ? 1 - H / Math.log(cl.length) : 1;
        const topShare = cl.length ? cl[0].n / total : 0;

        groups.push({
            id: 'constructs', title: 'Constructs it is claimed to measure', sortBy: 'papers',
            desc: '"Share" is this construct\'s fraction of all construct claims for the instrument, counted in paper links.',
            columns: [col('name', 'Construct'), col('papers', 'Papers', 'num'), col('share', 'Share', 'share'), col('venues', 'Venues', 'venues', true)],
            rows: cl.map(x => { const d = { relation: 'measures construct', entity: nName(x.c), papers: x.n, share: +(x.n / total).toFixed(3) }; flat.push(d); return { cells: { name: entLink(x.c), papers: x.n, share: x.n / total, venues: venueCounts([x.ei]) }, data: d, edges: [x.ei], title: nName(x.c) + ' measured by ' + nName(mi) }; }),
            empty: S.meth && isMethod(mi) ? 'This instrument is on the method-like list. Untick "Leave out method-like instruments" to see its claims.' : 'No construct is linked to this instrument in the current filter.',
        });

        const beh = [], other = [];
        for (const ei of adj[mi]) {
            if (!edgeOn(ei)) continue;
            const e = D.edges[ei];
            const o = e[0] === mi ? e[1] : e[0];
            if (e[2] === 'measured_by' && e[1] === mi && nType(o) === 'b') beh.push({ o, ei });
            else if (!(e[2] === 'measured_by' && e[1] === mi && nType(o) === 'c')) other.push({ o, ei, rel: e[2], dir: e[0] === mi ? 'out' : 'in' });
        }
        groups.push({
            id: 'behaviors', title: 'Behaviors it is claimed to measure', sortBy: 'papers',
            columns: [col('name', 'Behavior'), col('papers', 'Papers', 'bar'), col('venues', 'Venues', 'venues', true)],
            rows: beh.map(x => { const n = edgeCount(x.ei); const d = { relation: 'measures behavior', entity: nName(x.o), papers: n, share: '' }; flat.push(d); return { cells: { name: entLink(x.o), papers: n, venues: venueCounts([x.ei]) }, data: d, edges: [x.ei], title: nName(x.o) + ' measured by ' + nName(mi) }; }),
            empty: 'No behavior is linked to this instrument.',
        });
        groups.push({
            id: 'other', title: 'Other claimed relationships', sortBy: 'papers',
            desc: 'Relationships other than "measured by" that papers state for this instrument, in the direction the papers give.',
            columns: [col('rel', 'Claim as papers state it', null, true), col('papers', 'Papers', 'bar')],
            rows: other.map(x => {
                const n = edgeCount(x.ei);
                const rel = ' <span class="via">' + esc(x.rel.replace('_', ' ')) + '</span> ';
                const self = '<strong>' + esc(nName(mi)) + '</strong>';
                const d = { relation: x.dir === 'out' ? x.rel + ' (from instrument)' : x.rel + ' (to instrument)', entity: nName(x.o), papers: n, share: '' };
                flat.push(d);
                const title = x.dir === 'out' ? nName(mi) + ' ' + x.rel.replace('_', ' ') + ' ' + nName(x.o) : nName(x.o) + ' ' + x.rel.replace('_', ' ') + ' ' + nName(mi);
                return { cells: { rel: x.dir === 'out' ? self + rel + entLink(x.o) : entLink(x.o) + rel + self, papers: n }, data: d, edges: [x.ei], title };
            }),
            empty: 'None.',
        });

        let summary;
        if (!cl.length) summary = '<strong>' + esc(nName(mi)) + '</strong> has no construct claims in the current filter.';
        else summary = 'Papers claim <strong>' + esc(nName(mi)) + '</strong> measures <strong>' + cl.length + '</strong> construct' + (cl.length === 1 ? '' : 's') + '. The top one, ' + esc(nName(cl[0].c)) + ', takes <strong>' + Math.round(topShare * 100) + '%</strong> of the claims' +
            (cl.length > 1 ? '; concentration (1 minus normalized entropy) is <strong>' + conc.toFixed(2) + '</strong>, where 1 means all claims go to one construct and 0 means they are spread evenly.' : '.') +
            (cl.length >= 10 ? ' This is a low-specificity instrument: using it alone to stand for one construct is risky.' : '');
        return { summary, groups, flat, removed: [] };
    }

    // Several instruments side by side: which constructs each is claimed for, which are shared,
    // and which papers report more than one of them.
    function instrumentCompare(mis) {
        const groups = [];
        const names = mis.map(nName);
        const cols = mis.map((m, k) => 'i' + k);

        // Construct -> Map(instrument -> edge), from active direct claims.
        const byC = new Map();
        const perM = mis.map(m => [...(claimants.get(m) || new Map())]);
        perM.forEach((list, k) => list.forEach(([c, ei]) => {
            if (!byC.has(c)) byC.set(c, new Map());
            byC.get(c).set(mis[k], ei);
        }));

        // Papers that report each instrument: every active link that touches it.
        const papersOf = mis.map(m => unionPapers(adj[m].filter(edgeOn)));

        const sharedTag = n => n === mis.length ? '<span class="tag warn">all ' + n + '</span>' : n > 1 ? '<span class="tag">' + n + ' of ' + mis.length + '</span>' : '<span class="tag">unique</span>';
        const flat = [];
        const cRows = [...byC].map(([c, mm]) => {
            const cells = { name: entLink(c), n: mm.size, shared: sharedTag(mm.size), total: 0 };
            const data = { construct: nName(c), claimed_by_n_instruments: mm.size };
            mis.forEach((m, k) => {
                const ei = mm.get(m);
                const n = ei === undefined ? 0 : edgeCount(ei);
                cells[cols[k]] = n; cells.total += n; data[nName(m) + ' papers'] = n;
            });
            data.unique_to = mm.size === 1 ? nName([...mm.keys()][0]) : '';
            flat.push(data);
            return { cells, data, edges: [...mm.values()], title: nName(c) + ' measured by ' + [...mm.keys()].map(nName).join(', ') };
        }).sort((a, b) => b.cells.n - a.cells.n || b.cells.total - a.cells.total);
        groups.push({
            id: 'side', title: 'Constructs, side by side', rows: cRows, sortBy: null,
            desc: 'Every construct at least one of these instruments is claimed to measure, with the number of papers making each claim. Constructs claimed for all of them come first; "unique" ones are claimed for only one.',
            columns: [col('name', 'Construct'), col('shared', 'Claimed for', null, true)].concat(mis.map((m, k) => col(cols[k], trim(nName(m), 22), 'numz')), [col('total', 'All', 'num')]),
            empty: 'None of these instruments has a construct claim in the current filter.',
        });

        // Paper overlap: papers reporting two or more of the instruments.
        const counts = new Map();
        papersOf.forEach((s, k) => s.forEach(p => { if (!counts.has(p)) counts.set(p, []); counts.get(p).push(k); }));
        const pRows = [...counts].filter(([, ks]) => ks.length > 1).map(([p, ks]) => {
            const [title, conf] = D.papers[p];
            const edges = ks.flatMap(k => adj[mis[k]].filter(ei => edgeOn(ei) && edgePapers(ei).includes(p)));
            return {
                cells: { name: '<span class="ev-paper-title" style="font-weight:500">' + esc(title) + '</span>', venue: VENUE_LABEL[conf], uses: ks.map(k => esc(names[k])).join(', '), n: ks.length },
                data: null, edges, only: p, title,
            };
        }).sort((a, b) => b.cells.n - a.cells.n);
        groups.push({
            id: 'papers', title: 'Shared papers', rows: pRows, sortBy: 'n',
            desc: 'Papers that report two or more of these instruments (on any link the Lexis records for them). These are the papers where results on the instruments sit next to each other. Open a row\'s evidence to read what that paper says.',
            columns: [col('name', 'Paper', null, true), col('venue', 'Venue'), col('uses', 'Reports', null, true), col('n', 'How many', 'num')],
            empty: 'No paper reports more than one of these instruments.',
        });

        // Pairwise overview.
        const pairRows = [];
        for (let a = 0; a < mis.length; a++) for (let b = a + 1; b < mis.length; b++) {
            const ca = new Set(perM[a].map(x => x[0])), cb = new Set(perM[b].map(x => x[0]));
            const sharedC = [...ca].filter(c => cb.has(c));
            const union = new Set([...ca, ...cb]).size;
            let sharedP = 0; for (const p of papersOf[a]) if (papersOf[b].has(p)) sharedP++;
            pairRows.push({
                cells: { name: esc(names[a]) + ' &amp; ' + esc(names[b]), sc: sharedC.length, j: union ? (sharedC.length / union).toFixed(2) : '0.00', sp: sharedP },
                data: null, edges: sharedC.flatMap(c => [byC.get(c).get(mis[a]), byC.get(c).get(mis[b])]),
                title: 'Constructs claimed for both ' + names[a] + ' and ' + names[b],
            });
        }
        groups.unshift({
            id: 'pairs', title: 'Pairs', rows: pairRows, sortBy: 'sc',
            desc: 'For each pair: constructs claimed for both, their overlap as a share of all constructs claimed for either (Jaccard), and papers that report both.',
            columns: [col('name', 'Pair', null, true), col('sc', 'Shared constructs', 'num'), col('j', 'Jaccard', 'num'), col('sp', 'Shared papers', 'num')],
            empty: '',
        });

        const nAll = cRows.filter(r => r.cells.n === mis.length).length;
        const nUnique = cRows.filter(r => r.cells.n === 1).length;
        const label = namesLabel(mis);
        const summary = 'Papers claim ' + label + ' measure <strong>' + byC.size + '</strong> constructs between them. <strong>' + nAll + '</strong> ' + (nAll === 1 ? 'is' : 'are') + ' claimed for ' + (mis.length === 2 ? 'both' : 'all ' + mis.length) +
            ', <strong>' + nUnique + '</strong> for only one. <strong>' + pRows.length + '</strong> paper' + (pRows.length === 1 ? ' reports' : 's report') + ' more than one of them.' +
            (mis.some(isMethod) && S.meth ? ' Some of these are on the method-like list, so their construct claims are hidden; untick "Leave out method-like instruments" to include them.' : '');
        return { summary, groups, flat, removed: [] };
    }

    // Confirmatory analysis: a measurement model drafted from claims. Each instrument loads on the
    // selected construct(s) papers claim it measures; the user adjusts it and fits it on their own scores.
    function plainName(s, used) {
        let v = s.replace(/[^A-Za-z0-9]+/g, '_').replace(/^_+|_+$/g, '') || 'x';
        if (/^[0-9]/.test(v)) v = 'v_' + v;
        let u = v, k = 2;
        while (used.has(u)) u = v + '_' + k++;
        used.add(u);
        return u;
    }

    // Path diagram of the drafted model: constructs as ovals, instruments as boxes, arrows for
    // loadings (thicker = more papers), arcs for construct pairs styled by what papers claim.
    // Clicking a box takes that instrument out of the model.
    function modelDiagram(cis, inModel, direct, pairInfo, addOptions) {
        // Vertical layout: constructs down the left, each construct's instruments stacked to its right,
        // correlation arcs curving out to the far left (the usual way factor models are drawn).
        const BOX_W = 210, BOX_H = 34, GAP = 10, BLOCK_GAP = 26, OVAL_RX = 100, OVAL_RY = 30;
        const X_OVAL = 270, X_BOX = 470, X_EDGE = X_OVAL - OVAL_RX, TOP = 18;
        const W = X_BOX + BOX_W + 20;
        const placed = new Map(); // instrument -> y center
        const cy = new Map();
        let y = TOP;
        for (const c of cis) {
            const mine = inModel.get(c).map(i => i.m).filter(m => !placed.has(m));
            const start = y;
            for (const m of mine) { placed.set(m, y + BOX_H / 2); y += BOX_H + GAP; }
            if (!mine.length) y += Math.max(BOX_H, 2 * OVAL_RY) + GAP;
            const end = y - GAP;
            cy.set(c, Math.max((start + end) / 2, start + OVAL_RY));
            y = Math.max(y, start + 2 * OVAL_RY + GAP) + BLOCK_GAP;
        }
        const H = y - BLOCK_GAP + TOP;

        const svg = [];
        svg.push('<defs><marker id="cfaArrow" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--ink-muted)"/></marker>' +
            '<marker id="cfaArrowX" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--accent)"/></marker></defs>');

        // Arcs between constructs, curving left; farther pairs curve wider.
        pairInfo.forEach(p => {
            const y1 = cy.get(p.a), y2 = cy.get(p.b);
            const span = Math.abs(cis.indexOf(p.b) - cis.indexOf(p.a));
            const reach = Math.min(X_EDGE - 50, 50 + 34 * (span - 1));
            const midY = (y1 + y2) / 2, apexX = X_EDGE - reach;
            const style = p.links ? 'stroke="var(--ink)" stroke-width="1.6"'
                : p.shared ? 'stroke="var(--accent)" stroke-width="1.4" stroke-dasharray="5 4"'
                : 'stroke="var(--ink-faint)" stroke-width="1.2" stroke-dasharray="3 4"';
            svg.push('<path d="M' + X_EDGE + ',' + y1 + ' Q' + (X_EDGE - 2 * reach) + ',' + midY + ' ' + X_EDGE + ',' + y2 + '" fill="none" ' + style + ' marker-start="url(#cfaArrow)" marker-end="url(#cfaArrow)"><title>' + esc(p.title) + '</title></path>');
            svg.push('<text x="' + apexX + '" y="' + (midY + 4) + '" text-anchor="middle" class="cfa-arc-label">' + esc(p.label) + '<title>' + esc(p.title) + '</title></text>');
        });

        // Loadings.
        for (const c of cis) for (const it of inModel.get(c)) {
            const cross = direct.get(it.m).size > 1;
            const w = (1 + Math.min(3, Math.log2(it.n + 1) / 2)).toFixed(2);
            svg.push('<line x1="' + (X_OVAL + OVAL_RX) + '" y1="' + cy.get(c) + '" x2="' + (X_BOX - 2) + '" y2="' + placed.get(it.m) + '" stroke="' + (cross ? 'var(--accent)' : 'var(--ink-muted)') + '" stroke-width="' + w + '" marker-end="url(#' + (cross ? 'cfaArrowX' : 'cfaArrow') + ')"><title>' +
                esc(nName(c) + ' measured by ' + nName(it.m) + ': ' + it.n + ' paper' + (it.n === 1 ? '' : 's')) + '</title></line>');
        }

        // Constructs.
        for (const c of cis) {
            const k = inModel.get(c).length;
            const weak = k < 3;
            svg.push('<g><ellipse cx="' + X_OVAL + '" cy="' + cy.get(c) + '" rx="' + OVAL_RX + '" ry="' + OVAL_RY + '" fill="var(--surface)" stroke="' + (weak ? 'var(--accent)' : 'var(--cat-construct)') + '" stroke-width="2"' + (weak ? ' stroke-dasharray="6 4"' : '') + '/>' +
                '<text x="' + X_OVAL + '" y="' + (cy.get(c) - 2) + '" text-anchor="middle" class="cfa-c-label">' + esc(trim(nName(c), 26)) + '</text>' +
                '<text x="' + X_OVAL + '" y="' + (cy.get(c) + 14) + '" text-anchor="middle" class="cfa-c-sub' + (weak ? ' warn' : '') + '">' + (k >= 3 ? k + ' instruments' : k === 2 ? '2: needs a correlated construct' : k === 1 ? '1: cannot be estimated' : 'no instruments') + '</text>' +
                '<title>' + esc(nName(c)) + '</title></g>');
            const nOpt = (addOptions.get(c) || []).filter(o => o.enabled).length;
            const bx = X_OVAL + OVAL_RX - 14, by = cy.get(c) - OVAL_RY + 4;
            svg.push('<g class="cfa-btn cfa-add' + (nOpt ? '' : ' off') + '" data-add-c="' + c + '" tabindex="0" role="button" aria-label="' + esc('Add an instrument to ' + nName(c)) + '">' +
                '<circle cx="' + bx + '" cy="' + by + '" r="11"/><path d="M' + (bx - 5) + ',' + by + 'h10M' + bx + ',' + (by - 5) + 'v10"/>' +
                '<title>' + esc(nOpt ? 'Add an instrument to ' + nName(c) + ' (' + nOpt + ' available)' : 'No other instruments are claimed for ' + nName(c)) + '</title></g>');
        }

        // Instruments, each with a minus button to take it out.
        for (const [m, y0] of placed) {
            const cm = direct.get(m);
            const n = Math.max(...[...cm.values()].map(edgeCount));
            const cross = cm.size > 1, single = [...cm.values()].every(ei => edgeCount(ei) === 1);
            const mx = X_BOX + BOX_W - 16;
            svg.push('<g class="cfa-box">' +
                '<rect x="' + X_BOX + '" y="' + (y0 - BOX_H / 2) + '" width="' + BOX_W + '" height="' + BOX_H + '" rx="3" fill="var(--surface)" stroke="' + (cross ? 'var(--accent)' : 'var(--cat-measurement)') + '" stroke-width="1.5"' + (single ? ' stroke-dasharray="4 3"' : '') + '/>' +
                '<text x="' + (X_BOX + 12) + '" y="' + (y0 + 4) + '" class="cfa-m-label">' + esc(trim(nName(m), 18)) + '</text>' +
                '<text x="' + (mx - 16) + '" y="' + (y0 + 4) + '" text-anchor="end" class="cfa-m-sub">' + n + (cross ? ' · cross' : '') + '</text>' +
                '<title>' + esc(nName(m) + ': ' + [...cm].map(([c, ei]) => nName(c) + ' ' + edgeCount(ei)).join(', ') + ' papers') + '</title></g>' +
                '<g class="cfa-btn cfa-drop" data-drop-m="' + m + '" tabindex="0" role="button" aria-label="' + esc('Take ' + nName(m) + ' out of the model') + '">' +
                '<circle cx="' + mx + '" cy="' + y0 + '" r="9"/><path d="M' + (mx - 4.5) + ',' + y0 + 'h9"/><title>' + esc('Take ' + nName(m) + ' out of the model') + '</title></g>');
        }

        const legend = '<div class="cfa-legend">' +
            '<span><svg width="26" height="14"><ellipse cx="13" cy="7" rx="12" ry="6" fill="none" stroke="var(--cat-construct)" stroke-width="2"/></svg> construct</span>' +
            '<span><svg width="26" height="14"><rect x="1" y="2" width="24" height="10" fill="none" stroke="var(--cat-measurement)" stroke-width="1.5"/></svg> instrument</span>' +
            '<span><svg width="30" height="10"><line x1="0" y1="5" x2="30" y2="5" stroke="var(--ink-muted)" stroke-width="2"/></svg> papers claim it measures the construct (thicker = more papers; number = papers)</span>' +
            '<span><svg width="26" height="14"><rect x="1" y="2" width="24" height="10" fill="none" stroke="var(--accent)" stroke-width="1.5"/></svg> cross-loading</span>' +
            '<span><svg width="26" height="14"><rect x="1" y="2" width="24" height="10" fill="none" stroke="var(--cat-measurement)" stroke-width="1.5" stroke-dasharray="4 3"/></svg> one paper</span>' +
            '<span><svg width="30" height="10"><line x1="0" y1="5" x2="30" y2="5" stroke="var(--ink)" stroke-width="1.6"/></svg> papers link the constructs</span>' +
            '<span><svg width="30" height="10"><line x1="0" y1="5" x2="30" y2="5" stroke="var(--accent)" stroke-width="1.4" stroke-dasharray="5 4"/></svg> no link, shared instruments</span>' +
            '<span><svg width="30" height="10"><line x1="0" y1="5" x2="30" y2="5" stroke="var(--ink-faint)" stroke-width="1.2" stroke-dasharray="3 4"/></svg> no claimed link</span>' +
            '</div>';
        return '<div class="cfa-wrap"><svg class="cfa-diagram" viewBox="0 0 ' + W + ' ' + Math.ceil(H) + '" style="max-width:' + W + 'px" role="img" aria-label="Path diagram of the drafted model">' + svg.join('') + '</svg></div>' + legend +
            '<div class="actions" style="margin-top:10px"><span class="hint">Use + on a construct to add an instrument and − on a box to take one out. The loading table below has the same choices as checkboxes.</span>' +
            ((S.excl.length || S.incl.length) ? ' <button class="btn small" data-reset-model>Reset to the top ' + S.topK + '</button>' : '') + '</div>';
    }

    function confirmatory(cis) {
        const label = namesLabel(cis);
        const direct = directOf(cis); // instrument -> Map(construct -> edge)
        const cols = cis.map((c, k) => 'c' + k);

        // Which construct(s) each instrument loads on: all claimed ones when cross-loadings are allowed,
        // otherwise the one with the most papers (ties go to the construct listed first).
        const loads = new Map();
        for (const [m, cm] of direct) {
            const claimed = cis.filter(c => cm.has(c));
            if (S.cross || claimed.length === 1) { loads.set(m, claimed); continue; }
            let best = claimed[0];
            for (const c of claimed) if (edgeCount(cm.get(c)) > edgeCount(cm.get(best))) best = c;
            loads.set(m, [best]);
        }
        // Keep the top K instruments per construct by papers, minus ones the user took out, plus ones they added.
        const excl = new Set(S.excl), incl = new Set(S.incl);
        const inModel = new Map(cis.map(c => [c, []]));
        const available = new Map(cis.map(c => [c, 0]));
        for (const c of cis) {
            const ranked = [...(instrOf.get(c) || new Map())]
                .filter(([m]) => loads.get(m).includes(c))
                .map(([m, ei]) => ({ m, ei, n: edgeCount(ei) }))
                .sort((a, b) => b.n - a.n || nName(a.m).localeCompare(nName(b.m)));
            available.set(c, ranked.length);
            // Removing an instrument does not pull the next one in; added ones join after the top K.
            inModel.set(c, ranked.slice(0, S.topK).concat(ranked.slice(S.topK).filter(x => incl.has(nName(x.m))))
                .filter(x => !excl.has(nName(x.m))));
        }
        // Instruments that could be added to each construct: claimed for it but not in the model.
        // An instrument assigned to another construct can only be added once cross-loadings are allowed.
        const addOptions = new Map(cis.map(c => {
            const inSet = new Set(inModel.get(c).map(x => x.m));
            const opts = [...(instrOf.get(c) || new Map())].filter(([m]) => !inSet.has(m)).map(([m, ei]) => {
                const enabled = loads.get(m).includes(c);
                return { name: nName(m), n: edgeCount(ei), enabled, note: enabled ? (excl.has(nName(m)) ? 'taken out' : '') : 'loads on ' + loads.get(m).map(nName).join(', ') + '; allow cross-loading above' };
            }).sort((a, b) => b.enabled - a.enabled || b.n - a.n || a.name.localeCompare(b.name));
            return [c, opts];
        }));
        const modelOf = new Map(); // instrument -> constructs it loads on in the model
        for (const [c, xs] of inModel) for (const x of xs) {
            if (!modelOf.has(x.m)) modelOf.set(x.m, []);
            modelOf.get(x.m).push(c);
        }

        const statusOf = k => k >= 3 ? ['ok', 'Identified on its own']
            : k === 2 ? ['warn', 'Two instruments: identified only alongside a correlated construct']
            : k === 1 ? ['warn', 'One instrument: cannot be estimated as a construct']
            : ['warn', 'No instruments'];
        const checkRows = cis.map(c => {
            const xs = inModel.get(c);
            const single = xs.filter(x => x.n === 1).length;
            const cross = xs.filter(x => direct.get(x.m).size > 1).length;
            const [cls, text] = statusOf(xs.length);
            return {
                cells: { name: entLink(c), k: xs.length, avail: available.get(c), claimed: (instrOf.get(c) || new Map()).size, single, cross, status: '<span class="tag' + (cls === 'warn' ? ' warn' : '') + '">' + esc(text) + '</span>' },
                data: null, edges: xs.map(x => x.ei), title: 'Instruments in the model for ' + nName(c),
            };
        });

        const flat = [];
        const loadRows = [...direct].map(([m, cm]) => {
            const cells = { name: entLink(m), total: 0, pick: '<input type="checkbox" data-toggle-m="' + esc(nName(m)) + '"' + (modelOf.has(m) ? ' checked' : '') + ' aria-label="' + esc('Include ' + nName(m) + ' in the model') + '">' };
            const data = { instrument: nName(m) };
            cis.forEach((c, k) => {
                const n = cm.has(c) ? edgeCount(cm.get(c)) : 0;
                cells[cols[k]] = n; cells.total += n; data[nName(c) + ' papers'] = n;
            });
            const inM = modelOf.get(m) || [];
            const assigned = loads.get(m);
            cells.inmodel = inM.length ? inM.map(entLink).join(', ') : '<span class="hint">' + (excl.has(nName(m)) ? 'taken out' : assigned.length ? 'not in the top ' + S.topK + ' for ' + assigned.map(c => esc(nName(c))).join(', ') : '') + '</span>';
            cells.rank = inM.length ? 1 : 0;
            const flags = [];
            if (cm.size > 1) flags.push('<span class="tag warn">cross-loading</span>');
            if ([...cm.values()].every(ei => edgeCount(ei) === 1)) flags.push('<span class="tag">single paper</span>');
            cells.flags = flags.join(' ');
            Object.assign(data, { loads_on_in_model: inM.map(nName).join('; '), cross_loading: cm.size > 1, single_paper: [...cm.values()].every(ei => edgeCount(ei) === 1) });
            flat.push(data);
            return { cells, data, edges: [...cm.values()], title: nName(m) + ' claimed for ' + [...cm.keys()].map(nName).join(', ') };
        }).sort((a, b) => b.cells.rank - a.cells.rank || b.cells.total - a.cells.total);

        // Expected correlations between the selected constructs.
        const pairRows = [];
        const hyps = [];
        const pairInfo = [];
        for (let a = 0; a < cis.length; a++) for (let b = a + 1; b < cis.length; b++) {
            const ca = cis[a], cb = cis[b];
            const links = adj[ca].filter(ei => edgeOn(ei) && (D.edges[ei][0] === cb || D.edges[ei][1] === cb));
            const byType = {};
            for (const ei of links) byType[D.edges[ei][2]] = (byType[D.edges[ei][2]] || 0) + edgeCount(ei);
            const linkText = Object.entries(byType).map(([t, n]) => t.replace('_', ' ') + ' (' + n + ' paper' + (n === 1 ? '' : 's') + ')').join(', ');
            const shared = [...direct].filter(([, cm]) => cm.has(ca) && cm.has(cb)).map(([m]) => m);
            // Shared instruments that the model loads on both constructs force some correlation.
            const both = shared.filter(m => (modelOf.get(m) || []).includes(ca) && (modelOf.get(m) || []).includes(cb)).length;
            let exp, cls;
            if (links.length) { exp = 'Expected to correlate: papers link them'; cls = 'ok'; }
            else if (shared.length) { exp = 'No claimed link, but papers use ' + shared.length + ' of the same instruments for both' + (both ? '; ' + both + ' load on both in the model, so they will correlate partly by construction' : ''); cls = 'warn'; }
            else { exp = 'No claimed link: expect weak or near zero (absence of a link is not evidence they are distinct)'; cls = ''; }
            pairInfo.push({ a: ca, b: cb, links: links.length, shared: shared.length,
                label: links.length ? Object.keys(byType).map(t => t.replace('_', ' ')).join(', ') : shared.length ? 'no link · ' + shared.length + ' shared' : 'no claimed link',
                title: nName(ca) + ' and ' + nName(cb) + ': ' + (linkText || 'no claimed link') + (shared.length ? '; ' + shared.length + ' shared instrument(s)' : '') });
            hyps.push({ a: ca, b: cb, text: links.length ? 'expected to correlate (' + linkText + ')' : shared.length ? 'no claimed link; papers use ' + shared.length + ' of the same instruments for both' + (both ? ' (' + both + ' load on both, so partly correlated by construction)' : '') : 'no claimed link; expected weak' });
            pairRows.push({
                cells: { name: entLink(ca) + ' &amp; ' + entLink(cb), links: linkText || '<span class="hint">none</span>', shared: shared.length, exp: '<span class="tag' + (cls === 'warn' ? ' warn' : '') + '">' + esc(exp) + '</span>' },
                data: null, edges: links.concat(shared.flatMap(m => [direct.get(m).get(ca), direct.get(m).get(cb)])),
                title: nName(ca) + ' and ' + nName(cb),
            });
        }

        // Python script (semopy) that fits the drafted model.
        const used = new Set();
        const cVar = new Map(cis.map(c => [c, plainName(nName(c), used)]));
        const mVar = new Map();
        for (const m of modelOf.keys()) mVar.set(m, plainName(nName(m), used));
        const fitted = cis.filter(c => inModel.get(c).length >= 2);
        const py = s => JSON.stringify(s); // a JSON string is also a valid Python string literal
        const lines = [
            '# Confirmatory factor analysis drafted from the AI Construct Lexis.',
            '# Each loading below is a claim made in papers, not a validated result. Fit it on your own scores.',
            '# View: ' + location.href,
            '#',
            '# Needs: pip install semopy pandas',
            '# Data: one row per model you evaluated, one column per instrument score.',
            '# A factor analysis needs many rows; with only a few models the estimates will be unstable.',
            '',
            'import pandas as pd',
            'import semopy',
            '',
            'data = pd.read_csv("scores.csv")  # replace with your file',
        ];
        const renamed = [...mVar].filter(([i, v]) => v !== nName(i));
        if (renamed.length) {
            lines.push('', '# semopy needs plain variable names; this maps your column names to them.', 'data = data.rename(columns={');
            renamed.forEach(([i, v]) => lines.push('    ' + py(nName(i)) + ': ' + py(v) + ','));
            lines.push('})');
        }
        lines.push('', 'model_desc = """', '# Measurement model: each construct is measured by the instruments papers claim for it.');
        for (const c of cis) {
            const xs = inModel.get(c);
            if (xs.length >= 2) lines.push(cVar.get(c) + ' =~ ' + xs.map(x => mVar.get(x.m)).join(' + '));
            else if (xs.length === 1) lines.push('# ' + cVar.get(c) + ' =~ ' + mVar.get(xs[0].m) + '    (one instrument: cannot be estimated as a construct)');
            else lines.push('# ' + cVar.get(c) + ': no instruments in the current filter');
        }
        const fitPairs = hyps.filter(h => fitted.includes(h.a) && fitted.includes(h.b));
        if (fitPairs.length) {
            lines.push('', '# Construct correlations, estimated freely. What papers lead you to expect:');
            fitPairs.forEach(h => lines.push(cVar.get(h.a) + ' ~~ ' + cVar.get(h.b) + '    # ' + h.text));
        }
        lines.push('"""', '',
            'model = semopy.Model(model_desc)',
            'model.fit(data)',
            '',
            '# Standardized loadings and construct correlations.',
            'constructs = [' + fitted.map(c => py(cVar.get(c))).join(', ') + ']',
            'estimates = model.inspect(std_est=True)',
            'cols = ["lval", "op", "rval", "Est. Std", "p-value"]',
            'loadings = estimates[(estimates["op"] == "~") & estimates["rval"].isin(constructs)]',
            'correlations = estimates[(estimates["op"] == "~~") & estimates["lval"].isin(constructs)',
            '                         & estimates["rval"].isin(constructs) & (estimates["lval"] != estimates["rval"])]',
            'print("Loadings:")',
            'print(loadings[cols].to_string(index=False))',
            'print("\\nConstruct correlations:")',
            'print(correlations[cols].to_string(index=False))',
            '',
            '# Fit indices (CFI, TLI, RMSEA, ...).',
            'print("\\nFit:")',
            'print(semopy.calc_stats(model).T)');
        const syntax = lines.join('\n') + '\n';

        const groups = [
            { id: 'diagram', title: 'Model diagram', rows: [], html: modelDiagram(cis, inModel, direct, pairInfo, addOptions),
              desc: 'The drafted model. Each construct points to the instruments papers claim measure it; arcs between constructs show what papers say about how they relate.' },
            { id: 'checks', title: 'Model checks', rows: checkRows, sortBy: null,
              desc: 'A construct needs at least 3 instruments to be estimated on its own; 2 works only alongside a correlated construct. "Claimed" counts instruments papers claim for the construct; "Assigned" counts those left after cross-loading instruments go to one construct; "In model" counts what is in the diagram. "Single paper" counts instruments backed by one paper; "Cross-loading" counts instruments papers also claim for another selected construct.',
              columns: [col('name', 'Construct'), col('k', 'In model', 'num'), col('avail', 'Assigned', 'num'), col('claimed', 'Claimed', 'num'), col('single', 'Single paper', 'num'), col('cross', 'Cross-loading', 'num'), col('status', 'Status', null, true)],
              empty: '' },
            { id: 'syntax', title: 'Python script', rows: [], html: '<pre class="syntax" id="syntaxBox">' + esc(syntax) + '</pre><div class="actions" style="margin-top:8px"><button class="btn small" data-syntax="copy">Copy script</button><button class="btn small" data-syntax="download">Download .py</button></div>',
              desc: 'Fits the model above with <a href="https://semopy.com" target="_blank" rel="noopener">semopy</a>. Point it at a CSV with one row per model and one column per instrument score; it renames your columns to the plain names semopy needs, fits the model, and prints the loadings, construct correlations, and fit indices.' },
            { id: 'loadings', title: 'Loading table', rows: loadRows, sortBy: null,
              desc: 'Every instrument papers claim for any selected construct, with the papers behind each claim. ' + (S.cross ? 'Cross-loading instruments load on every construct they are claimed for.' : 'Cross-loading instruments load on the construct with the most papers; tick the option above to let them load on every construct they are claimed for.') + ' The top ' + S.topK + ' per construct go into the model by default; tick or untick a row to change that.',
              columns: [col('pick', 'In', null, true), col('name', 'Instrument')].concat(cis.map((c, k) => col(cols[k], trim(nName(c), 22), 'numz')), [col('inmodel', 'In model for', null, true), col('flags', 'Flags', null, true)]),
              empty: 'None of the selected constructs has instruments in the current filter.' },
        ];
        if (pairRows.length) groups.push({ id: 'corr', title: 'Expected correlations', rows: pairRows, sortBy: null,
            desc: 'For each pair of selected constructs: relationships papers state between them, instruments they share, and what that implies for the correlation between them in the fitted model.',
            columns: [col('name', 'Pair', null, true), col('links', 'Claimed links', null, true), col('shared', 'Shared instruments', 'num'), col('exp', 'Expectation', null, true)],
            empty: '' });

        const nOk = cis.filter(c => inModel.get(c).length >= 3).length;
        const nCross = [...direct.values()].filter(cm => cm.size > 1).length;
        const nIn = modelOf.size;
        const summary = 'Drafted a model for ' + label + ' with <strong>' + nIn + '</strong> instrument' + (nIn === 1 ? '' : 's') + '. <strong>' + nOk + '</strong> of ' + cis.length + ' construct' + (cis.length === 1 ? ' has' : 's have') + ' at least 3 instruments' +
            (nCross ? '; <strong>' + nCross + '</strong> instrument' + (nCross === 1 ? ' is' : 's are') + ' claimed for more than one of them' : '') + '. The Lexis has no scores, so the model is yours to fit.';
        return { summary, groups, flat, removed: removedOf(cis), syntax, addOptions };
    }

    // Instrument overlap and separation. Overlap ("jangle"): different constructs measured with the same
    // instruments. Separation ("jingle"): one construct whose instruments come from unrelated areas.
    function jangle(filter) {
        const pairs = new Map();
        for (const [m, cl] of claimants) {
            const cs = [...cl.keys()].sort((a, b) => a - b);
            for (let i = 0; i < cs.length; i++) for (let j = i + 1; j < cs.length; j++) {
                const k = cs[i] + ',' + cs[j];
                if (!pairs.has(k)) pairs.set(k, []);
                pairs.get(k).push(m);
            }
        }
        const fset = new Set(filter);
        const flat = [];
        const rows = [];
        for (const [k, shared] of pairs) {
            if (shared.length < S.minShared) continue;
            const [a, b] = k.split(',').map(Number);
            if (fset.size && !fset.has(a) && !fset.has(b)) continue;
            const na = instrOf.get(a).size, nb = instrOf.get(b).size;
            const j = shared.length / (na + nb - shared.length), oc = shared.length / Math.min(na, nb);
            const names = shared.map(nName).sort((x, y) => x.localeCompare(y));
            const cellOf = i => entLink(i) + '<div class="def">' + esc(trim(defText(i), 140)) + '</div>';
            const data = { construct_a: nName(a), construct_b: nName(b), shared_instruments: shared.length, jaccard: +j.toFixed(3), overlap_coefficient: +oc.toFixed(3), instruments_a: na, instruments_b: nb, shared: names.join('; ') };
            flat.push(data);
            rows.push({
                cells: { a: cellOf(a), b: cellOf(b), shared: shared.length, j: j.toFixed(2), oc: oc.toFixed(2), sizes: na + ' / ' + nb,
                         list: '<span class="via">' + esc(names.slice(0, 8).join(', ')) + (names.length > 8 ? ' and ' + (names.length - 8) + ' more' : '') + '</span>' },
                data, edges: shared.flatMap(m => [claimants.get(m).get(a), claimants.get(m).get(b)]),
                title: 'Instruments shared by ' + nName(a) + ' and ' + nName(b),
            });
        }
        // Highest Jaccard first, ties broken by more shared instruments; exports follow the same order.
        rows.sort((x, y) => y.data.jaccard - x.data.jaccard || y.cells.shared - x.cells.shared);
        flat.splice(0, flat.length, ...rows.map(r => r.data));
        const groups = [{
            id: 'jangle', title: 'Construct pairs ranked by shared instruments', rows, sortBy: 'j', limit: 50,
            desc: 'Pairs of differently named constructs that papers measure with the same instruments, at least ' + S.minShared + ' shared. Jaccard is shared instruments over all instruments either uses; the overlap coefficient divides by the smaller set, so a small construct nested inside a large one still scores high. A high-ranking pair may be one construct under two names, or two constructs measured with the same broad benchmarks: read the two definitions.',
            columns: [col('a', 'Construct A', null, true), col('b', 'Construct B', null, true), col('j', 'Jaccard', 'num'), col('oc', 'Overlap coef.', 'num'), col('shared', 'Shared', 'num'), col('sizes', 'Instruments (A / B)', null, true), col('list', 'Shared instruments', null, true)],
            empty: 'No pair shares at least ' + S.minShared + ' instruments in the current filter.',
        }];
        const top = rows.slice().sort((x, y) => parseFloat(y.cells.j) - parseFloat(x.cells.j))[0];
        const summary = '<strong>' + rows.length + '</strong> construct pair' + (rows.length === 1 ? '' : 's') + ' share at least ' + S.minShared + ' instruments' + (fset.size ? ' (pairs involving ' + namesLabel(filter) + ')' : '') + '.' +
            (top ? ' The highest overlap is ' + esc(top.data.construct_a) + ' and ' + esc(top.data.construct_b) + ' (Jaccard ' + top.cells.j + ').' : '');
        return { summary, groups, flat, removed: [] };
    }

    // Jingle: a construct's instruments are grouped by what else papers use them for. Two instruments
    // join a group when papers also claim both for some other construct, or when one paper reports
    // both for this construct. Instruments used only for this construct say nothing about meaning,
    // so they are set aside. A construct whose papers fall into several groups is measured with
    // instruments from different neighborhoods: one name, possibly several things.
    function jingle(filter) {
        const fset = new Set(filter);
        const flat = [];
        const rows = [];
        let tooLittle = 0;
        for (const [c, im] of instrOf) {
            if (fset.size && !fset.has(c)) continue;
            const prof = new Map(); // instrument -> other constructs it is claimed for
            for (const m of im.keys()) {
                const others = [...claimants.get(m).keys()].filter(d => d !== c);
                if (others.length) prof.set(m, others);
            }
            const ms = [...prof.keys()];
            const papersOfM = new Map(ms.map(m => [m, edgePapers(im.get(m))]));
            const allPapers = new Set(ms.flatMap(m => papersOfM.get(m)));
            if (allPapers.size < S.jMinP || ms.length < S.jMinI) { tooLittle++; continue; }
            const parent = new Map(ms.map(m => [m, m]));
            const find = m => { while (parent.get(m) !== m) { parent.set(m, parent.get(parent.get(m))); m = parent.get(m); } return m; };
            const join = list => { for (const m of list.slice(1)) parent.set(find(m), find(list[0])); };
            const byOther = new Map(), byPaper = new Map();
            for (const m of ms) {
                for (const d of prof.get(m)) { if (!byOther.has(d)) byOther.set(d, []); byOther.get(d).push(m); }
                for (const p of papersOfM.get(m)) { if (!byPaper.has(p)) byPaper.set(p, []); byPaper.get(p).push(m); }
            }
            byOther.forEach(join); byPaper.forEach(join);
            const groupsOf = new Map();
            for (const m of ms) {
                const r = find(m);
                if (!groupsOf.has(r)) groupsOf.set(r, { instr: [], papers: new Set(), others: new Map() });
                const g = groupsOf.get(r);
                g.instr.push(m);
                papersOfM.get(m).forEach(p => g.papers.add(p));
                for (const d of prof.get(m)) g.others.set(d, (g.others.get(d) || 0) + 1);
            }
            const gs = [...groupsOf.values()].sort((x, y) => y.papers.size - x.papers.size);
            const split = 1 - gs[0].papers.size / allPapers.size;
            const describe = (g, k) => {
                const instr = g.instr.slice().sort((x, y) => papersOfM.get(y).length - papersOfM.get(x).length).map(nName);
                const others = [...g.others].sort((x, y) => y[1] - x[1]).slice(0, 2).map(([d]) => nName(d));
                return 'Group ' + (k + 1) + ' (' + g.papers.size + ' paper' + (g.papers.size === 1 ? '' : 's') + '): ' + instr.slice(0, 3).join(', ') + (instr.length > 3 ? ' +' + (instr.length - 3) : '') + '; also used for ' + others.join(', ');
            };
            const detail = gs.slice(0, 3).map(describe);
            const data = { construct: nName(c), papers: allPapers.size, instruments_compared: ms.length, instruments_only_for_this_construct: im.size - ms.length, groups: gs.length, largest_group_share: +(gs[0].papers.size / allPapers.size).toFixed(3), split_score: +split.toFixed(3), groups_detail: detail.join(' | ') };
            flat.push(data);
            rows.push({
                cells: { name: entLink(c), papers: allPapers.size, instr: ms.length, only: im.size - ms.length, groups: gs.length, split,
                         detail: '<div class="via">' + detail.map(esc).join('<br>') + (gs.length > 3 ? '<br>and ' + (gs.length - 3) + ' more group' + (gs.length - 3 === 1 ? '' : 's') : '') + '</div>' },
                data, edges: ms.map(m => im.get(m)), title: 'Instrument claims for ' + nName(c),
            });
        }
        rows.sort((x, y) => y.cells.split - x.cells.split || y.cells.papers - x.cells.papers);
        flat.splice(0, flat.length, ...rows.map(r => r.data));
        const groups = [{
            id: 'jingle', title: 'Constructs ranked by how their instruments split', rows, sortBy: 'split', limit: 50,
            desc: 'Each construct\'s instruments are grouped by what else papers use them for: two instruments join a group when papers also claim both for some other construct, or when one paper reports both. Instruments used for no other construct are set aside ("Only here"), since they show nothing about meaning. "Split" is the share of papers outside the largest group. A split may mean two ideas under one name, or one idea tested in several settings, such as text and vision; the papers\' definitions tell which.',
            columns: [col('name', 'Construct', null, true), col('split', 'Split', 'share'), col('groups', 'Groups', 'num'), col('papers', 'Papers', 'num'), col('instr', 'Instruments compared', 'num'), col('only', 'Only here', 'num'), col('detail', 'Largest groups: instruments, and what else they measure', null, true)],
            empty: fset.size ? 'The selected constructs have too little data for this check (at least ' + S.jMinP + ' papers and ' + S.jMinI + ' instruments also used for other constructs).' : 'No construct has enough data in the current filter.',
        }];
        const nSplit = rows.filter(r => r.cells.groups > 1).length;
        const summary = 'Of <strong>' + rows.length + '</strong> construct' + (rows.length === 1 ? '' : 's') + ' with enough data (at least ' + S.jMinP + ' papers and ' + S.jMinI + ' instruments also used for other constructs), <strong>' + nSplit + '</strong> split into more than one group.' +
            (tooLittle ? ' ' + tooLittle + ' construct' + (tooLittle === 1 ? ' has' : 's have') + ' too little data and ' + (tooLittle === 1 ? 'is' : 'are') + ' left out.' : '');
        return { summary, groups, flat, removed: [] };
    }

    // ------------------------------------------------------------------ in-page help
    // What each tool is for and how to use it, shown under the page title.
    const GUIDE = {
        claim: {
            what: 'Papers often write "we measure X with benchmark Y". This page checks that sentence against the literature: whether other papers use Y for X, what else Y is said to measure, and what else is used for X.',
            steps: ['Pick the construct you claim to measure in the first box.',
                'Add the instruments you use for it in the second box.',
                'Read <em>Your claims</em>: few or no papers making the same claim means your paper should argue for it; a common claim is still only as good as the instrument\'s specificity.',
                'Check what else each instrument is claimed to measure, and the other instruments papers use for your construct. Click Evidence to read the papers.'],
        },
        confirmatory: {
            what: 'A confirmatory factor analysis tests a measurement model you state in advance: which instruments measure which construct. If the model fits your scores, the instruments behave the way the claims say they should.',
            steps: ['Add two or more constructs in the box below. The page drafts a model from the instruments papers claim for each one.',
                'Check the diagram. Use <strong>+</strong> on a construct to add an instrument and <strong>−</strong> on a box to take one out. Each construct needs at least 3 instruments.',
                'Read the dashed arcs: they mark construct pairs where papers state no link, or share instruments, so you know what correlations to expect.',
                'Copy the Python script, point it at a CSV of your models\' scores, and run it to fit the model.'],
        },
        overlap: {
            what: 'Instrument overlap can mean one thing under two names (two constructs measured with the same benchmarks; in psychometrics, a "jangle"). Instrument separation can mean two things under one name (one construct measured with benchmarks from unrelated areas; a "jingle").',
            steps: ['Pick a tab: Instrument overlap ranks pairs of constructs by shared instruments; Instrument separation ranks constructs by how their instruments split.',
                'Optionally add constructs in the box below to see only results that involve them.',
                'Read the definitions next to each result, then click Evidence to see the papers behind it. A high rank is a lead to check, not a verdict.'],
        },
        instrument: {
            what: 'An instrument (a benchmark, metric, or evaluation) is only useful as evidence for a construct if it is specific to it. This page shows how spread out the claims about an instrument are.',
            steps: ['Add an instrument in the box below, e.g. MMLU.',
                'Read the share column: if one construct takes most of the claims, the instrument is specific; if the claims are spread over many, it is not.',
                'Add more instruments to compare them side by side: which constructs they share, and which papers report more than one of them.'],
        },
    };

    // What each setting does, shown under the settings for the tool that uses it.
    const SETTING_HELP = [
        ['all', 'Venues', 'Only count papers from the ticked conferences.'],
        ['all', 'Min papers per link', 'Hide claims made by fewer papers than this. Raise it to keep only well-supported links.'],
        ['confirmatory', 'Instruments per construct', 'How many instruments per construct go into the draft, picked by number of papers. You can still add or remove them in the diagram.'],
        ['confirmatory', 'Cross-loading', 'Some instruments are claimed for two of your constructs. By default each goes to the construct with more papers; tick this to let it load on both.'],
        ['overlap', 'Min shared instruments', 'Instrument overlap tab: only list pairs that share at least this many instruments.'],
        ['overlap', 'Min papers / instruments per construct', 'Instrument separation tab: skip constructs with too little data to judge.'],
        ['all', 'Leave out method-like instruments', 'Ignore generic procedures such as "Human evaluation" or "LLM-as-a-judge", which papers list for almost anything.'],
    ];

    // Column explanations, by column key, with overrides for "group.key" where one key means
    // different things in different tables.
    const COLUMN_HELP = {
        papers: 'Number of papers that make this claim.',
        venues: 'Papers per conference.',
        venue: 'The conference the paper appeared at.',
        shared: 'Instruments claimed for both.',
        list: 'The shared instruments.',
        share: 'This construct\'s share of all the claims about the instrument.',
        rel: 'The relationship as the papers state it.',
        sc: 'Constructs claimed for both instruments.',
        j: 'Constructs claimed for both, as a share of all constructs claimed for either (Jaccard).',
        sp: 'Papers that report both instruments.',
        total: 'Papers across all the selected instruments.',
        uses: 'Which of the selected instruments the paper reports.',
        n: 'How many of the selected instruments the paper reports.',
        k: 'Instruments in the drafted model for this construct.',
        avail: 'Instruments left for this construct after each cross-loading instrument goes to one construct.',
        claimed: 'All instruments papers claim for this construct.',
        single: 'Instruments in the model backed by only one paper.',
        cross: 'Instruments in the model that papers also claim for another selected construct.',
        status: 'Whether this construct can be estimated: it needs at least 3 instruments, or 2 if it correlates with another construct.',
        inmodel: 'The construct this instrument loads on in the drafted model.',
        flags: 'Cross-loading: claimed for more than one selected construct. Single paper: only one paper makes the claim.',
        links: 'Relationships papers state between the two constructs.',
        exp: 'What the claims suggest the correlation between the two constructs should look like.',
        a: 'First construct of the pair, with its definition.',
        b: 'Second construct of the pair.',
        oc: 'Shared instruments divided by the smaller set. High when one construct\'s instruments sit inside the other\'s.',
        sizes: 'Instruments papers claim for each construct.',
        split: 'Share of the construct\'s papers outside its largest group. High means its instruments come from unrelated areas.',
        groups: 'Groups of instruments that are never claimed together for anything else.',
        instr: 'Instruments that papers also claim for some other construct (only these can be compared).',
        only: 'Instruments claimed for this construct alone; they are set aside.',
        detail: 'The largest groups: their instruments, and the other constructs those instruments are claimed for.',
        'claims.papers': 'Papers that also claim this instrument measures your construct.',
        'claims.rank': 'Where your construct ranks among all the constructs papers say this instrument measures, by number of papers.',
        'claims.share': 'Your construct\'s share of all the claims made about this instrument.',
        'claims.status': 'A plain reading of the counts. When no paper makes the claim, the closest claims papers do make are listed.',
        spread: 'How many other constructs papers say this instrument measures. Lower means more specific.',
        co: 'Papers that report this instrument together with yours for this construct.',
        'loadings.pick': 'Ticked instruments are in the model. Untick to take one out; tick to add one.',
        'checks.name': 'A construct in the model.',
        'jangle.shared': 'Instruments claimed for both constructs.',
        'jingle.papers': 'Papers that link the construct to the instruments compared.',
        'side.shared': 'How many of the selected instruments are claimed for this construct.',
        'papers.name': 'A paper that reports two or more of the selected instruments.',
        'constructs.papers': 'Papers that claim the instrument measures this construct.',
    };

    function renderGuide() {
        const g = GUIDE[TOOL];
        const after = document.getElementById('toolIntro');
        if (!g || !after || document.getElementById('toolGuide')) return;
        const box = document.createElement('div');
        box.id = 'toolGuide'; box.className = 'tool-guide';
        box.innerHTML = '<p><strong>What this is for.</strong> ' + g.what + '</p>' +
            '<p class="tool-guide-head">How to use this page</p><ol>' + g.steps.map(s => '<li>' + s + '</li>').join('') + '</ol>';
        after.insertAdjacentElement('afterend', box);
        const controls = document.getElementById('controls');
        const items = SETTING_HELP.filter(([t]) => t === 'all' || t === TOOL);
        if (controls && items.length) {
            const d = document.createElement('details');
            d.className = 'col-guide settings-guide';
            d.innerHTML = '<summary>What the settings do</summary><dl>' + items.map(([, k, v]) => '<dt>' + esc(k) + '</dt><dd>' + esc(v) + '</dd>').join('') + '</dl>';
            controls.insertAdjacentElement('afterend', d);
        }
    }

    function columnHelp(g, c) {
        if (/^c\d+$/.test(c.k)) return 'Papers that claim the instrument measures ' + c.label + ' ("–" means none).';
        if (/^i\d+$/.test(c.k)) return 'Papers that claim ' + c.label + ' measures this construct ("–" means none).';
        return COLUMN_HELP[g.id + '.' + c.k] || COLUMN_HELP[c.k] || '';
    }

    // ------------------------------------------------------------------ rendering
    function col(k, label, kind, nosort) { return { k, label, kind: kind || null, nosort: !!nosort }; }
    function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
    function trim(s, n) { s = s || ''; return s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s; }
    // Characterizations open with a stock phrase; drop it so a short excerpt says something.
    function defText(i) { const s = (D.nodes[i][3] || '').replace(/^(Space of definitions|How it is defined)\.\s*/i, '').replace(/^Across (the )?(surveyed )?(literature|papers|work),\s*/i, ''); return s.charAt(0).toUpperCase() + s.slice(1); }
    function entLink(i) {
        return '<a class="ent" href="view_network.html?node=' + encodeURIComponent(nName(i)) + '&type=' + VIEWER_TYPE[nType(i)] + '" title="' + esc(trim(defText(i), 300)) + '">' + esc(nName(i)) + '</a>';
    }
    function venueHtml(c) {
        return '<span class="venue-dots">' + VENUES.filter(v => c[v]).map(v => '<b>' + c[v] + '</b> ' + VENUE_LABEL[v]).join(' · ') + '</span>';
    }

    let current = null;
    const sortState = {};
    const expanded = {};

    function cellHtml(c, row, max) {
        const v = row.cells[c.k];
        if (c.kind === 'bar') {
            const w = max ? Math.max(4, Math.round(70 * v / max)) : 0;
            return '<td class="num"><div class="bar-cell"><span>' + v + '</span><span class="bar" title="' + v + ' papers"><span style="width:' + w + 'px"></span></span></div></td>';
        }
        if (c.kind === 'share') return '<td class="num"><div class="bar-cell"><span>' + Math.round(v * 100) + '%</span><span class="bar" title="' + Math.round(v * 100) + '%"><span style="width:' + Math.max(3, Math.round(70 * v)) + 'px"></span></span></div></td>';
        if (c.kind === 'venues') return '<td>' + venueHtml(v) + '</td>';
        if (c.kind === 'num') return '<td class="num">' + v + '</td>';
        if (c.kind === 'numz') return '<td class="num">' + (v ? v : '<span class="hint">–</span>') + '</td>';
        return '<td>' + v + '</td>';
    }

    function sortedRows(g) {
        const st = sortState[g.id] || (g.sortBy ? { k: g.sortBy, dir: -1 } : null);
        if (!st) return g.rows;
        const val = r => { const v = r.cells[st.k]; return typeof v === 'number' ? v : (parseFloat(v) || String(v).replace(/<[^>]+>/g, '').toLowerCase()); };
        return g.rows.slice().sort((a, b) => { const x = val(a), y = val(b); return (x > y ? 1 : x < y ? -1 : 0) * st.dir; });
    }

    function renderGroup(g, gi) {
        const st = sortState[g.id] || (g.sortBy ? { k: g.sortBy, dir: -1 } : null);
        const rows = sortedRows(g);
        const limit = g.limit && !expanded[g.id] ? g.limit : Infinity;
        const max = Math.max(1, ...g.rows.map(r => typeof r.cells.papers === 'number' ? r.cells.papers : 0));
        let h = '<section class="group"><div class="group-head"><h2>' + esc(g.title) + '</h2>' + (g.html ? '' : '<span class="count">' + g.rows.length + (g.rows.length === 1 ? ' row' : ' rows') + '</span>') + '</div>';
        if (g.desc) h += '<p class="group-desc">' + g.desc + '</p>';
        if (g.html) return h + g.html + '</section>';
        if (!g.rows.length) return h + '<div class="group-empty">' + esc(g.empty) + '</div></section>';
        h += '<div class="table-wrap"><table><thead><tr>';
        for (const c of g.columns) {
            const arrow = st && st.k === c.k ? ' <span class="arrow">' + (st.dir < 0 ? '↓' : '↑') + '</span>' : '';
            const help = columnHelp(g, c);
            h += '<th class="' + (c.nosort ? 'nosort ' : '') + (['num', 'numz', 'bar', 'share'].includes(c.kind) ? 'num' : '') + (help ? ' has-help' : '') + '"' + (help ? ' title="' + esc(help) + '"' : '') + (c.nosort ? '' : ' data-sort="' + gi + ':' + c.k + '"') + '>' + esc(c.label) + arrow + '</th>';
        }
        h += '<th class="nosort"></th></tr></thead><tbody>';
        rows.slice(0, limit).forEach(r => {
            const ri = g.rows.indexOf(r);
            h += '<tr>' + g.columns.map(c => cellHtml(c, r, max)).join('') + '<td><button class="btn small" data-ev="' + gi + ':' + ri + '">Evidence</button></td></tr>';
        });
        h += '</tbody></table></div>';
        const helpCols = g.columns.filter(c => columnHelp(g, c));
        if (helpCols.length) h += '<details class="col-guide"><summary>What the columns mean</summary><dl>' + helpCols.map(c => '<dt>' + esc(c.label) + '</dt><dd>' + esc(columnHelp(g, c)) + '</dd>').join('') + '<dt>Evidence</dt><dd>Opens the papers behind the row, with the passage each one states the claim in.</dd></dl></details>';
        if (g.limit && g.rows.length > g.limit) h += '<div class="more"><button class="btn small" data-expand="' + g.id + '">' + (expanded[g.id] ? 'Show fewer' : 'Show all ' + g.rows.length) + '</button></div>';
        return h + '</section>';
    }

    function render() {
        const t = TOOLS[S.tool];
        const names = selList();
        const idxs = names.map(n => byName[key(t.entity, n)]).filter(i => i !== undefined);
        const missing = names.filter(n => byName[key(t.entity, n)] === undefined);
        const out = document.getElementById('results');
        const mIdxs = S.tool === 'claim' ? S.ms.map(n => byName[key('m', n)]).filter(i => i !== undefined) : [];
        if (S.tool === 'claim') missing.push(...S.ms.filter(n => byName[key('m', n)] === undefined));
        let missNote = missing.length ? '<p class="removed-note">Not in the Lexis: ' + missing.map(esc).join(', ') + '.</p>' : '';
        if (S.tool === 'claim' && idxs.length > 1) missNote += '<p class="removed-note">The claim checker checks one construct at a time; using ' + esc(nName(idxs[0])) + ' and ignoring: ' + idxs.slice(1).map(i => esc(nName(i))).join(', ') + '.</p>';
        if (S.tool === 'claim' && (!idxs.length || !mIdxs.length)) {
            current = null;
            out.innerHTML = '<p class="summary">' + (!idxs.length ? 'Add the construct you claim to measure above.' : 'Add the instruments you use for it above.') + '</p>' + missNote;
            return;
        }
        if (!idxs.length && !t.optional) {
            current = null;
            out.innerHTML = '<p class="summary">' + 'Add one or more ' + (t.entity === 'c' ? 'constructs' : 'instruments') + ' above.' + '</p>' + missNote;
            return;
        }
        buildIndex();
        current = S.tool === 'claim' ? claimChecker(idxs[0], mIdxs)
            : S.tool === 'confirmatory' ? confirmatory(idxs)
            : S.tool === 'overlap' ? (S.tab === 'jingle' ? jingle(idxs) : jangle(idxs))
            : idxs.length > 1 ? instrumentCompare(idxs) : instrument(idxs[0]);
        let h = '<p class="summary">' + current.summary + '</p>' + missNote;
        if (current.removed.length) h += '<p class="removed-note">Left out as method-like: ' + current.removed.map(i => esc(nName(i))).join(', ') + '.</p>';
        h += current.groups.map(renderGroup).join('');
        out.innerHTML = h;
    }

    function syncControls() {
        const t = TOOLS[S.tool];
        document.getElementById('entityLabel').textContent = t.label;
        const inp = document.getElementById('entityInput');
        const noun = t.entity === 'c' ? 'construct' : 'instrument';
        inp.value = '';
        inp.placeholder = t.single ? (selList().length ? 'Change the ' + noun : 'Add a ' + noun) : selList().length ? 'Add another ' + noun : (noun === 'construct' ? 'Add a ' : 'Add an ') + noun;
        const ichips = document.getElementById('instrChips');
        if (ichips) {
            ichips.innerHTML = S.ms.map(n => '<span class="sel-chip">' + esc(n) + '<button type="button" data-unsel="' + esc(n) + '" aria-label="Remove ' + esc(n) + '">×</button></span>').join('');
            document.getElementById('instrInput').placeholder = S.ms.length ? 'Add another instrument' : 'Add an instrument';
        }
        const minCtl = document.getElementById('minPapers').closest('.control');
        if (minCtl) minCtl.style.display = S.tool === 'claim' ? 'none' : '';
        const chips = document.getElementById('selChips');
        chips.innerHTML = selList().map(n => '<span class="sel-chip">' + esc(n) + '<button type="button" data-unsel="' + esc(n) + '" aria-label="Remove ' + esc(n) + '">×</button></span>').join('');
        const show = (id, on) => { const el = document.getElementById(id); if (el) el.style.display = on ? '' : 'none'; };
        show('ctlTopK', S.tool === 'confirmatory');
        show('ctlCross', S.tool === 'confirmatory');
        show('jjTabs', S.tool === 'overlap');
        show('ctlShared', S.tool === 'overlap' && S.tab === 'jangle');
        show('ctlJingle', S.tool === 'overlap' && S.tab === 'jingle');
        document.querySelectorAll('#jjTabs [data-tab]').forEach(b => { const on = b.dataset.tab === S.tab; b.classList.toggle('active', on); b.setAttribute('aria-selected', on); });
        [['topK', 'topK'], ['minShared', 'minShared'], ['jMinPapers', 'jMinP'], ['jMinInstr', 'jMinI']].forEach(([id, k]) => { const el = document.getElementById(id); if (el) el.value = S[k]; });
        const cr = document.getElementById('optCross'); if (cr) cr.checked = S.cross;
        document.getElementById('minPapers').value = S.min;
        document.getElementById('optMeth').checked = S.meth;
        document.querySelectorAll('#venues input').forEach(c => { c.checked = S.v.includes(c.value); });
    }

    // The selected constructs or instruments for this page's tool (the array itself, so callers can edit it).
    function selList() { return TOOLS[S.tool].entity === 'c' ? S.cs : S.ms; }

    // Match names ignoring case, so links keep working when a rebuild changes capitalization
    // (GSM8k became GSM8K), and keep the canonical spelling.
    function normalizeSel() {
        const t = TOOLS[S.tool];
        const fix = (list, type) => {
            const fixed = [...new Set(list.map(n => { const j = findIdx(type, n); return j === undefined ? n : nName(j); }))];
            list.splice(0, list.length, ...fixed);
        };
        fix(selList(), t.entity);
        if (S.tool === 'claim') fix(S.ms, 'm');
    }

    function update() { normalizeSel(); syncControls(); writeUrl(); render(); }

    // Confirmatory analysis: the "+" picker on a construct, listing instruments claimed for it.
    function closeAddMenu() { const p = document.getElementById('cfaPop'); if (p) p.remove(); }
    function openAddMenu(c, anchor) {
        closeAddMenu();
        const opts = (current && current.addOptions && current.addOptions.get(c)) || [];
        const pop = document.createElement('div');
        pop.id = 'cfaPop'; pop.className = 'cfa-pop'; pop.setAttribute('role', 'dialog'); pop.setAttribute('aria-label', 'Add an instrument to ' + nName(c));
        const list = () => {
            const q = (pop.querySelector('input').value || '').toLowerCase();
            const shown = opts.filter(o => o.name.toLowerCase().includes(q));
            pop.querySelector('ul').innerHTML = shown.length ? shown.map(o =>
                '<li><button type="button"' + (o.enabled ? ' data-pick="' + esc(o.name) + '"' : ' disabled') + '><span class="nm">' + esc(o.name) + '</span><span class="n">' + o.n + ' paper' + (o.n === 1 ? '' : 's') + '</span>' +
                (o.note ? '<span class="note">' + esc(o.note) + '</span>' : '') + '</button></li>').join('') : '<li class="empty">' + (opts.length ? 'No match.' : 'No other instruments are claimed for this construct.') + '</li>';
        };
        pop.innerHTML = '<div class="cfa-pop-head">Add to ' + esc(nName(c)) + '</div><input type="text" placeholder="Filter instruments" aria-label="Filter instruments"><ul></ul>';
        document.body.appendChild(pop);
        list();
        const r = anchor.getBoundingClientRect();
        const w = Math.min(320, window.innerWidth - 16);
        pop.style.width = w + 'px';
        pop.style.left = Math.max(8, Math.min(r.left, window.innerWidth - w - 8)) + 'px';
        const below = r.bottom + 6;
        pop.style.top = (below + 320 > window.innerHeight ? Math.max(8, r.top - 326) : below) + 'px';
        const inp = pop.querySelector('input');
        inp.addEventListener('input', list);
        inp.focus();
        pop.addEventListener('click', e => { const b = e.target.closest('[data-pick]'); if (b) { closeAddMenu(); toggleInModel(b.dataset.pick, true); } });
        pop.addEventListener('keydown', e => { if (e.key === 'Escape') { closeAddMenu(); anchor.focus(); } });
        setTimeout(() => document.addEventListener('mousedown', function off(ev) { if (!pop.contains(ev.target)) { closeAddMenu(); document.removeEventListener('mousedown', off); } }), 0);
        window.addEventListener('scroll', closeAddMenu, { once: true });
    }

    // Confirmatory analysis: put an instrument into the model or take it out.
    function toggleInModel(name, on) {
        S.excl = S.excl.filter(n => n !== name);
        S.incl = S.incl.filter(n => n !== name);
        (on ? S.incl : S.excl).push(name);
        update();
    }

    // ------------------------------------------------------------------ evidence drawer
    let drawerEdges = [];
    // `only`, when given, limits the panel to one paper (rows that stand for a paper, not a link).
    let drawerOnly = null;
    async function openDrawer(title, eis, only) {
        drawerEdges = eis;
        drawerOnly = only === undefined ? null : only;
        const drawer = document.getElementById('drawer');
        document.getElementById('drawerTitle').textContent = title;
        const body = document.getElementById('drawerBody');
        body.innerHTML = '<div class="loading">Loading evidence…</div>';
        drawer.classList.add('open'); drawer.setAttribute('aria-hidden', 'false');
        document.getElementById('drawerBackdrop').classList.add('open');
        try { await loadEvidence(); } catch (e) { body.innerHTML = '<p class="ev-noquote">Could not load the evidence file.</p>'; return; }
        let h = '';
        for (const ei of eis) {
            const e = D.edges[ei];
            const ps = edgePapers(ei).filter(p => drawerOnly === null || p === drawerOnly);
            h += '<div class="ev-edge"><div class="ev-edge-title">' + esc(nName(e[0])) + ' · ' + esc(e[2].replace('_', ' ')) + ' · ' + esc(nName(e[1])) + ' · ' + ps.length + ' paper' + (ps.length === 1 ? '' : 's') + '</div>';
            for (const p of ps) {
                const [titleP, conf] = D.papers[p];
                const url = paperUrls[titleP];
                const share = e[6][e[5].indexOf(p)];
                const quote = evidence[ei].get(p);
                h += '<div class="ev-paper"><div class="ev-paper-title">' + (url ? '<a href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(titleP) + '</a>' : esc(titleP)) + '</div>' +
                    '<div class="ev-meta">' + VENUE_LABEL[conf] + (share < 1 ? ' · the linking models split this paper\'s vote; ' + Math.round(share * 100) + '% went to "' + esc(e[2].replace('_', ' ')) + '"' : '') + '</div>' +
                    (quote ? '<div class="ev-quote">' + esc(quote) + '</div>' : '<div class="ev-noquote">No quote recorded for this paper.</div>') + '</div>';
            }
            h += '</div>';
        }
        body.innerHTML = h || '<p class="ev-noquote">No papers in the current venue filter.</p>';
    }
    function closeDrawer() {
        const drawer = document.getElementById('drawer');
        drawer.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true');
        document.getElementById('drawerBackdrop').classList.remove('open');
    }

    // ------------------------------------------------------------------ export
    function headerLines() {
        return ['AI Construct Lexis analysis support', 'Data: AI Construct Lexis data, built ' + D.meta.built_on, 'View: ' + location.href,
            'Rows record claims made in papers, not validity evidence.'];
    }
    function download(name, text, type) {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([text], { type }));
        a.download = name; document.body.appendChild(a); a.click();
        setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 0);
    }
    function csvOf(rows) {
        if (!rows.length) return '';
        const cols = Object.keys(rows[0]);
        const q = v => { const s = String(v == null ? '' : v); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
        return cols.join(',') + '\n' + rows.map(r => cols.map(c => q(r[c])).join(',')).join('\n') + '\n';
    }
    // Supporting papers as a plain list: title, venue, and link (blank when the Lexis has no link).
    function paperListCsv(paperIdxs) {
        const rows = [...paperIdxs]
            .sort((a, b) => VENUES.indexOf(D.papers[a][1]) - VENUES.indexOf(D.papers[b][1]) || D.papers[a][0].localeCompare(D.papers[b][0]))
            .map(p => ({ title: D.papers[p][0], venue: VENUE_LABEL[D.papers[p][1]].replace("'", ' 20'), link: (paperUrls && paperUrls[D.papers[p][0]]) || '' }));
        return headerLines().map(l => '# ' + l).join('\n') + '\n# ' + rows.length + ' papers\n' + csvOf(rows);
    }
    function papersOfEdges(eis) { const s = new Set(); for (const ei of eis) for (const p of edgePapers(ei)) s.add(p); return s; }
    function fileStem() {
        const parts = ['lexis', S.tool].concat(S.tool === 'overlap' ? [S.tab] : [], selList().length ? [selList().join('+').toLowerCase().slice(0, 80)] : []);
        return parts.join('_').replace(/[^a-z0-9_]+/gi, '_').replace(/_+/g, '_').replace(/_$/, '').toLowerCase();
    }

    async function exportAs(kind) {
        if (!current) return;
        const stem = fileStem();
        if (kind === 'csv') download(stem + '.csv', headerLines().map(l => '# ' + l).join('\n') + '\n' + csvOf(current.flat), 'text/csv');
        else if (kind === 'json') download(stem + '.json', JSON.stringify({ about: headerLines(), state: S, rows: current.flat }, null, 2), 'application/json');
        else {
            try { await loadEvidence(); }
            catch (_) { flash('The evidence data failed to load; reload the page and try again.'); return; }
            const eis = current.groups.flatMap(g => g.rows.flatMap(r => r.edges));
            download(stem + '_papers.csv', paperListCsv(papersOfEdges(eis)), 'text/csv');
        }
        flash('Downloaded ' + stem + (kind === 'papers' ? '_papers.csv' : '.' + kind) + '.');
    }
    function flash(msg) { const el = document.getElementById('statusMsg'); el.textContent = msg; clearTimeout(flash.t); flash.t = setTimeout(() => { el.textContent = ''; }, 3500); }


    // ------------------------------------------------------------------ landing
    function renderLanding() {
        // Old links were tools.html?tool=<name>&...; send them to the tool's own page.
        const p = new URLSearchParams(location.search);
        const old = TOOLS[p.get('tool')];
        if (old) { p.delete('tool'); location.replace(old.page + (p.toString() ? '?' + p.toString() : '')); return; }
        document.getElementById('toolList').innerHTML = Object.entries(TOOLS).map(([k, t]) =>
            '<a class="tool-card" href="' + t.page + '">' +
            '<h2>' + esc(t.title) + '</h2>' +
            '<p class="tool-q">' + esc(t.question) + '</p>' +
            '<p class="hint">' + esc(t.intro) + '</p>' +
            '<ul>' + t.bullets.map(b => '<li>' + esc(b) + '</li>').join('') + '</ul>' +
            '<span class="tool-go">Open ' + esc(t.title.toLowerCase()) + ' →</span></a>').join('');
    }

    // ------------------------------------------------------------------ wiring
    function fillLists() {
        document.querySelectorAll('datalist').forEach(d => d.remove()); // replaced by attachTypeahead
        document.getElementById('venues').innerHTML = VENUES.map(v => '<label class="venue-chip"><input type="checkbox" value="' + v + '"> ' + VENUE_LABEL[v] + '</label>').join('');
        document.getElementById('footer').innerHTML = 'Data: AI Construct Lexis data, built ' + esc(D.meta.built_on) + ' · ' + D.meta.n_nodes + ' entities, ' + D.meta.n_edges + ' relationships, ' + D.meta.n_papers + ' papers linked. ' +
            'Method-like instruments are set in <a href="analysis_config.json">analysis_config.json</a>.';
    }

    // Type-ahead for the name boxes: matching names (starts-with first, then most papers) in a list
    // under the box; click one, or use the arrow keys and Enter. The browser's own datalist was
    // unreliable (it often showed nothing, and a partial name plus Enter matched nothing).
    function attachTypeahead(input, typeOf, onPick) {
        input.removeAttribute('list');
        input.setAttribute('autocomplete', 'off');
        input.setAttribute('role', 'combobox');
        input.setAttribute('aria-autocomplete', 'list');
        const box = document.createElement('ul');
        box.className = 'typeahead'; box.setAttribute('role', 'listbox'); box.hidden = true;
        input.parentElement.style.position = 'relative';
        input.insertAdjacentElement('afterend', box);
        let items = [], active = -1;
        const matches = q => {
            const t = typeOf(), lo = q.toLowerCase(), taken = new Set(t === 'c' ? (TOOLS[S.tool].single ? [] : S.cs) : S.ms);
            const hits = [];
            D.nodes.forEach((n, i) => {
                if (n[1] !== t || taken.has(n[0])) return;
                const nm = n[0].toLowerCase(), at = nm.indexOf(lo);
                if (at < 0) return;
                hits.push({ name: n[0], papers: n[2], rank: at === 0 ? 0 : (nm.includes(' ' + lo) ? 1 : 2) });
            });
            return hits.sort((a, b) => a.rank - b.rank || b.papers - a.papers || a.name.localeCompare(b.name)).slice(0, 12);
        };
        const draw = () => {
            box.innerHTML = items.length ? items.map((it, k) => '<li role="option" data-k="' + k + '"' + (k === active ? ' class="active" aria-selected="true"' : '') + '><span>' + esc(it.name) + '</span><span class="n">' + it.papers + ' papers</span></li>').join('')
                : '<li class="none">No ' + (typeOf() === 'c' ? 'construct' : 'instrument') + ' matches "' + esc(input.value.trim()) + '".</li>';
            box.hidden = !input.value.trim();
        };
        const pick = it => { input.value = ''; box.hidden = true; items = []; onPick(it.name); };
        input.addEventListener('input', () => { const q = input.value.trim(); items = q ? matches(q) : []; active = items.length ? 0 : -1; draw(); });
        input.addEventListener('keydown', e => {
            if (e.key === 'ArrowDown' && items.length) { e.preventDefault(); active = (active + 1) % items.length; draw(); }
            else if (e.key === 'ArrowUp' && items.length) { e.preventDefault(); active = (active - 1 + items.length) % items.length; draw(); }
            else if (e.key === 'Enter') { e.preventDefault(); if (items[active]) pick(items[active]); }
            else if (e.key === 'Escape') { box.hidden = true; }
        });
        box.addEventListener('mousedown', e => { const li = e.target.closest('[data-k]'); if (li) { e.preventDefault(); pick(items[+li.dataset.k]); } });
        input.addEventListener('blur', () => setTimeout(() => { box.hidden = true; }, 120));
        input.addEventListener('focus', () => { if (input.value.trim()) { items = matches(input.value.trim()); draw(); } });
    }

    function wire() {
        const inp = document.getElementById('entityInput');
        const addSel = name => {
            const list = selList();
            if (TOOLS[S.tool].single) list.splice(0, list.length);
            if (!list.includes(name)) list.push(name);
            update();
        };
        const instrInput = document.getElementById('instrInput');
        if (instrInput) {
            attachTypeahead(instrInput, () => 'm', name => { if (!S.ms.includes(name)) S.ms.push(name); update(); });
            document.getElementById('instrChips').addEventListener('click', e => {
                const b = e.target.closest('[data-unsel]'); if (!b) return;
                S.ms.splice(S.ms.indexOf(b.dataset.unsel), 1); update();
            });
        }
        attachTypeahead(inp, () => TOOLS[S.tool].entity, addSel);
        document.getElementById('selChips').addEventListener('click', e => {
            const b = e.target.closest('[data-unsel]'); if (!b) return;
            const list = selList(); list.splice(list.indexOf(b.dataset.unsel), 1); update();
        });
        document.getElementById('venues').addEventListener('change', () => {
            S.v = [...document.querySelectorAll('#venues input:checked')].map(c => c.value);
            if (!S.v.length) { S.v = VENUES.slice(); flash('At least one venue is needed; showing all.'); }
            update();
        });
        document.getElementById('minPapers').addEventListener('change', e => { S.min = Math.max(1, parseInt(e.target.value, 10) || 1); update(); });
        [['optMeth', 'meth'], ['optCross', 'cross']].forEach(([id, k]) => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', e => { S[k] = e.target.checked; update(); });
        });
        [['topK', 'topK'], ['minShared', 'minShared'], ['jMinPapers', 'jMinP'], ['jMinInstr', 'jMinI']].forEach(([id, k]) => {
            const el = document.getElementById(id); if (!el) return;
            const [, , lo, hi] = NUM_PARAMS.find(x => x[0] === k);
            el.addEventListener('change', e => { S[k] = Math.min(hi, Math.max(lo, parseInt(e.target.value, 10) || DEFAULTS[k])); update(); });
        });
        const tabs = document.getElementById('jjTabs');
        if (tabs) tabs.addEventListener('click', e => { const b = e.target.closest('[data-tab]'); if (b) { S.tab = b.dataset.tab; update(); } });

        document.getElementById('results').addEventListener('click', async e => {
            const sb = e.target.closest('[data-syntax]');
            if (sb && current && current.syntax) {
                if (sb.dataset.syntax === 'copy') {
                    try { await navigator.clipboard.writeText(current.syntax); flash('Script copied.'); } catch (_) { flash('Copy failed; select the text in the box.'); }
                } else { download(fileStem() + '.py', current.syntax, 'text/x-python'); flash('Downloaded ' + fileStem() + '.py.'); }
                return;
            }
            const drop = e.target.closest('[data-drop-m]');
            if (drop) { toggleInModel(nName(+drop.dataset.dropM), false); return; }
            const add = e.target.closest('[data-add-c]');
            if (add) { openAddMenu(+add.dataset.addC, add); return; }
            if (e.target.closest('[data-reset-model]')) { S.excl = []; S.incl = []; update(); return; }
            const xp = e.target.closest('[data-expand]');
            if (xp) { expanded[xp.dataset.expand] = !expanded[xp.dataset.expand]; render(); return; }
            const th = e.target.closest('[data-sort]');
            if (th) {
                const [gi, k] = th.dataset.sort.split(':'); const g = current.groups[+gi];
                const st = sortState[g.id] || (g.sortBy ? { k: g.sortBy, dir: -1 } : {});
                sortState[g.id] = { k, dir: st.k === k ? -st.dir : -1 };
                render(); return;
            }
            const ev = e.target.closest('[data-ev]');
            if (ev) { const [gi, ri] = ev.dataset.ev.split(':').map(Number); const r = current.groups[gi].rows[ri]; openDrawer(r.title, r.edges, r.only); return; }
        });
        document.getElementById('results').addEventListener('change', e => {
            const cb = e.target.closest('[data-toggle-m]');
            if (cb) { toggleInModel(cb.dataset.toggleM, cb.checked); return; }

        });
        document.getElementById('results').addEventListener('keydown', e => {
            if (e.key !== 'Enter' && e.key !== ' ') return;
            const g = e.target.closest('[data-drop-m]');
            if (g) { e.preventDefault(); toggleInModel(nName(+g.dataset.dropM), false); return; }
            const a = e.target.closest('[data-add-c]');
            if (a) { e.preventDefault(); openAddMenu(+a.dataset.addC, a); }
        });
        document.querySelectorAll('[data-export]').forEach(b => b.addEventListener('click', () => exportAs(b.dataset.export)));
        document.getElementById('copyLink').addEventListener('click', async () => {
            try { await navigator.clipboard.writeText(location.href); flash('Link copied.'); }
            catch (_) { flash('Copy failed; the link is in the address bar.'); }
        });
        document.getElementById('drawerClose').addEventListener('click', closeDrawer);
        document.getElementById('drawerBackdrop').addEventListener('click', closeDrawer);
        document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
        document.getElementById('drawerCsv').addEventListener('click', () => {
            if (!evidence) { alert('The evidence data failed to load; reload the page and try again.'); return; }
            const rows = [];
            for (const ei of drawerEdges) { const e = D.edges[ei]; for (const p of edgePapers(ei)) if (drawerOnly === null || p === drawerOnly) rows.push({ source: nName(e[0]), relationship: e[2], target: nName(e[1]), paper: D.papers[p][0], venue: VENUE_LABEL[D.papers[p][1]], type_share: e[6][e[5].indexOf(p)], url: paperUrls[D.papers[p][0]] || '', quote: evidence[ei].get(p) || '' }); }
            download(fileStem() + '_evidence.csv', headerLines().map(l => '# ' + l).join('\n') + '\n' + csvOf(rows), 'text/csv');
        });
        document.getElementById('drawerPapers').addEventListener('click', () => {
            if (!evidence) { alert('The evidence data failed to load; reload the page and try again.'); return; }
            download(fileStem() + '_evidence_papers.csv', paperListCsv(drawerOnly === null ? papersOfEdges(drawerEdges) : new Set([drawerOnly])), 'text/csv');
        });
    }

    (async function init() {
        if (!TOOL) { renderLanding(); return; }
        const t = TOOLS[TOOL];
        document.title = t.title + ' · AI Construct Lexis';
        document.getElementById('pageTitle').textContent = t.title;
        document.getElementById('pageQuestion').textContent = t.question;
        document.getElementById('toolIntro').textContent = t.intro;
        renderGuide();
        try { await load(); }
        catch (e) { document.getElementById('results').innerHTML = '<p class="summary">Could not load the analysis data (' + esc(e.message) + ').</p>'; return; }
        S = readUrl();
        fillLists();
        wire();
        update();
    })();
})();
