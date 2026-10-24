// AI Construct Lexis - Home / explorer page script.
// Data layer: graph.bundle.json holds every visible entity (name, aliases,
// type, paper count, summary definition) and loads up front. The full
// per-entity record (definitions, relationships, characterization) lives in
// nomological_network_data/<type>/<slug>.json and is fetched when an entity
// page opens. paper_urls.json loads once, the first time a page needs it.

let networkData = null;
let selectedNode = null;
let currentFilter = 'home';
let currentSearch = '';
let uiConfig = {
    min_papers: {
        construct: 10,
        measurement: 10,
        behavior: 10
    },
    min_papers_floor: {
        construct: 0,
        measurement: 0,
        behavior: 0
    }
};

// Search index over entity names and aliases
let searchIndex = {
    nodes: [], // Array of {node, searchableText}
    indexMap: new Map() // word -> Set of node indices
};

let searchDebounceTimer = null;

let paginationState = {
    page: 0,
    pageSize: 50,
    totalItems: 0
};

// Cache DOM elements to avoid repeated queries
const domCache = {
    resultsList: null,
    resultsHeader: null,
    searchInput: null,
    clearSearchBtn: null,
    init: function () {
        this.resultsList = document.getElementById('resultsList');
        this.resultsHeader = document.getElementById('resultsHeader');
        this.searchInput = document.getElementById('searchInput');
        this.clearSearchBtn = document.getElementById('clearSearchBtn');
    }
};

const fetchCache = new Map();

// Fetch a text file (path relative to the site root), deduplicating
// concurrent requests. A failed fetch is retried once and never cached, so a
// transient error does not poison the rest of the session.
async function fetchText(path) {
    if (fetchCache.has(path)) return fetchCache.get(path);
    const promise = (async () => {
        let lastError = null;
        for (let attempt = 0; attempt < 2; attempt++) {
            try {
                const resp = await fetch(path);
                if (resp.ok) return await resp.text();
                lastError = new Error(`HTTP ${resp.status} for ${path}`);
            } catch (e) {
                lastError = e;
            }
            await new Promise(r => setTimeout(r, 200));
        }
        throw lastError || new Error(`Could not load ${path}`);
    })();
    fetchCache.set(path, promise);
    promise.catch(() => fetchCache.delete(path));
    return promise;
}

const TYPE_DIR = { construct: 'constructs', measurement: 'measurements', behavior: 'behaviors_tasks' };
const TYPE_SHORT = {
    constructs: 'construct', measurements: 'measurement', behaviors_tasks: 'behavior',
    construct: 'construct', measurement: 'measurement', behavior: 'behavior'
};

// Same slug as the export pipeline and network_graph.js: "+" is spelled out so
// "HumanEval+" and "HumanEval" get different files.
function slugify(name) {
    let s = String(name || '').trim().toLowerCase().replace(/\+/g, '_plus_');
    s = s.replace(/[^a-z0-9]+/g, '_').replace(/_+/g, '_').replace(/^_+|_+$/g, '');
    return s || 'unknown';
}

// Full per-entity record, fetched on demand and cached.
const entityCache = new Map();
async function loadEntity(name, type) {
    const key = `${type}_${name}`;
    if (entityCache.has(key)) return entityCache.get(key);
    const dir = TYPE_DIR[type] || 'constructs';
    const cfg = JSON.parse(await fetchText(`nomological_network_data/${dir}/${slugify(name)}.json`));
    entityCache.set(key, cfg);
    return cfg;
}

// Paper-title -> URL map (built at export time), loaded on first use.
let paperUrlsPromise = null;
function loadPaperUrls() {
    if (!paperUrlsPromise) {
        paperUrlsPromise = fetchText('nomological_network_data/paper_urls.json')
            .then(text => {
                const data = JSON.parse(text);
                if (data && typeof data === 'object' && !Array.isArray(data)) {
                    networkData.paperUrlByTitle = data;
                }
            })
            .catch(e => console.warn('paper_urls.json not available; paper chips fall back to search:', e));
    }
    return paperUrlsPromise;
}

// Clamp a min-papers value to the configured floor for the given type
function clampMinPapers(value, type) {
    const floors = uiConfig.min_papers_floor;
    const floor = typeof floors === 'object' && floors != null && floors[type] !== undefined
        ? Math.max(0, Number(floors[type]))
        : (typeof floors === 'number' ? Math.max(0, floors) : 0);
    const n = parseInt(value, 10);
    if (isNaN(n)) return floor;
    return Math.max(floor, n);
}

// Load UI config (min papers, floor, etc.) from JSON file
async function loadUiConfig() {
    try {
        const resp = await fetch('view_network_config.json');
        if (resp.ok) {
            const data = await resp.json();
            if (data && data.min_papers) {
                uiConfig.min_papers.construct = Number(data.min_papers.construct ?? uiConfig.min_papers.construct);
                uiConfig.min_papers.measurement = Number(data.min_papers.measurement ?? uiConfig.min_papers.measurement);
                uiConfig.min_papers.behavior = Number(data.min_papers.behavior ?? uiConfig.min_papers.behavior);
            }
            if (data && data.min_papers_floor !== undefined) {
                const f = data.min_papers_floor;
                if (typeof f === 'object' && f != null) {
                    uiConfig.min_papers_floor.construct = Math.max(0, Number(f.construct ?? uiConfig.min_papers_floor.construct));
                    uiConfig.min_papers_floor.measurement = Math.max(0, Number(f.measurement ?? uiConfig.min_papers_floor.measurement));
                    uiConfig.min_papers_floor.behavior = Math.max(0, Number(f.behavior ?? uiConfig.min_papers_floor.behavior));
                } else {
                    const v = Math.max(0, Number(f));
                    uiConfig.min_papers_floor.construct = v;
                    uiConfig.min_papers_floor.measurement = v;
                    uiConfig.min_papers_floor.behavior = v;
                }
            }
        }
    } catch (e) {
        console.warn('Failed to load UI config, using defaults:', e);
    }
}

// Build the explorer's index from graph.bundle.json. Its nodes are exactly the
// entities the site shows (the export already leaves out expert-removed ones).
async function loadGraphIndex() {
    const bundle = JSON.parse(await fetchText('nomological_network_data/graph.bundle.json'));

    networkData = {
        nodesMap: {},
        nameToNode: {},           // canonical name -> [nodes] (a name can exist in two types)
        nameToCanonical: {},      // any known name or alias -> canonical name
        nameToCanonicalLower: {}, // lowercased name or alias -> canonical name
        paperUrlByTitle: {}
    };

    (bundle.nodes || []).forEach(n => {
        const type = TYPE_SHORT[n.type];
        if (!type || !n.name) return;
        const node = {
            name: n.name,
            type: type,
            paperCount: Number(n.paper_count) || 0,
            aliases: n.names || [],
            canonicalDefinition: n.definition || 'N/A'
        };
        networkData.nodesMap[`${type}_${n.name}`] = node;
        if (!networkData.nameToNode[n.name]) networkData.nameToNode[n.name] = [];
        networkData.nameToNode[n.name].push(node);

        // Map every known name/alias back to the canonical name. An alias never
        // overrides another entity's own name (some aliases equal one).
        networkData.nameToCanonical[n.name] = n.name;
        networkData.nameToCanonicalLower[n.name.toLowerCase()] = n.name;
        (n.names || []).forEach(alias => {
            if (!alias || alias === n.name || networkData.nameToCanonical[alias] === alias) return;
            networkData.nameToCanonical[alias] = n.name;
            const lower = alias.toLowerCase();
            if (!(lower in networkData.nameToCanonicalLower)) networkData.nameToCanonicalLower[lower] = n.name;
        });
    });

    buildSearchIndex();
}

// Search matches entity names and aliases only, not definition text, so a
// query does not surface entities whose summary merely mentions the word.
function buildSearchIndex() {
    searchIndex.nodes = [];
    searchIndex.indexMap = new Map();

    Object.values(networkData.nodesMap).forEach((node, idx) => {
        const searchableText = [node.name, ...(node.aliases || [])].join(' ').toLowerCase();
        searchIndex.nodes.push({ node, searchableText });

        const words = searchableText.split(/\s+/).filter(w => w.length > 0);
        words.forEach(word => {
            if (!searchIndex.indexMap.has(word)) {
                searchIndex.indexMap.set(word, new Set());
            }
            searchIndex.indexMap.get(word).add(idx);
        });
    });
}

// If URL has ?node=...&type=..., jump directly to that node's page
async function maybeSelectFromUrl() {
    try {
        const params = new URLSearchParams(window.location.search);
        const nodeName = params.get('node');
        const nodeType = params.get('type') || 'construct';
        // ?view=constructs|behaviors|measurements opens that tab (used by the tools pages' header).
        const view = params.get('view');
        if (!nodeName && networkData && ['constructs', 'behaviors', 'measurements'].includes(view)) {
            const btn = document.querySelector('.filter-btn[data-type="' + view + '"]');
            if (btn) btn.click();
            return;
        }
        if (!nodeName || !networkData) return;

        // Set filter/tab based on type
        let desiredFilter = 'constructs';
        if (nodeType === 'measurement') desiredFilter = 'measurements';
        else if (nodeType === 'behavior') desiredFilter = 'behaviors';

        currentFilter = desiredFilter;
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.type === desiredFilter);
        });
        if (typeof applyHomeOnlyVisibility === 'function') applyHomeOnlyVisibility();

        // Update header label to match current filter
        const header = document.getElementById('resultsHeader');
        if (header) {
            if (currentFilter === 'constructs') header.textContent = 'Constructs';
            else if (currentFilter === 'measurements') header.textContent = 'Measurement Instruments';
            else if (currentFilter === 'behaviors') header.textContent = 'Behavioral Indicators';
        }

        // Render the list under this filter, then open the entity page.
        renderResults();
        selectNodeByName(nodeName, nodeType);
    } catch (e) {
        console.warn('Failed to select node from URL params:', e);
    }
}

// Initialize on page load: UI config, then the graph index, then the view.
(async function init() {
    domCache.init();
    try {
        await loadUiConfig();
        await loadGraphIndex();
        renderResults();
        await maybeSelectFromUrl();
    } catch (e) {
        console.error('Failed to initialize the explorer:', e);
        const list = domCache.resultsList || document.getElementById('resultsList');
        if (list) {
            list.innerHTML = '<div class="empty-state"><h3>Could not load the Lexis data</h3>'
                + '<p>Please reload the page. If the problem persists, the data files may be temporarily unavailable.</p></div>';
        }
    }
})();

// Filter buttons
// OPTIMIZATION: Cache filter buttons and use cached header
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.type;

        // Reset pagination on filter change
        paginationState.page = 0;

        // Update header based on current page
        const header = domCache.resultsHeader || document.getElementById('resultsHeader');
        if (header) {
            if (currentFilter === 'home') {
                header.textContent = 'Home';
            } else if (currentFilter === 'constructs') {
                header.textContent = 'Constructs';
            } else if (currentFilter === 'measurements') {
                header.textContent = 'Measurement Instruments';
            } else if (currentFilter === 'behaviors') {
                header.textContent = 'Behavioral Indicators';
            }
        }

        applyHomeOnlyVisibility();
        renderResults();
    });
});

// Show the editorial byline + disclaimer block ONLY on the Home tab.
// On other tabs we want to maximize vertical space for the actual list.
function applyHomeOnlyVisibility() {
    const isHome = (currentFilter === 'home');
    const team = document.querySelector('.team-byline');
    const disc = document.getElementById('disclaimers');
    const hint = document.querySelector('.disclaimer-hint');
    const searchBar = document.getElementById('searchSection');
    if (team) team.style.display = isHome ? '' : 'none';
    if (disc) disc.style.display = isHome ? '' : 'none';
    // Hint points to #disclaimers; if that section is hidden, hide the
    // hint too so users aren't sent to a missing anchor.
    if (hint) hint.style.display = isHome ? '' : 'none';
    // Search only useful on entity-type tabs, not the home intro.
    if (searchBar) searchBar.style.display = isHome ? 'none' : '';
}

// Apply once on initial load so deep-links to non-home tabs start clean.
applyHomeOnlyVisibility();


// Min papers threshold for a node type (config-driven, never below the floor)
function getMinPapersForType(nodeType) {
    const type = (nodeType === 'measurement' || nodeType === 'behavior') ? nodeType : 'construct';
    return clampMinPapers(uiConfig.min_papers[type], type);
}

// OPTIMIZATION: Fast search using index
function searchNodes(searchQuery, nodeTypeFilter = null) {
    if (!searchQuery || searchQuery.length < 2) {
        // Return all nodes if no search query
        return Object.values(networkData.nodesMap);
    }

    const query = searchQuery.toLowerCase().trim();
    const queryWords = query.split(/\s+/).filter(w => w.length > 0);

    // Use index for fast lookup
    const matchingIndices = new Set();

    if (queryWords.length === 1) {
        // Single word - use index directly
        const word = queryWords[0];
        if (searchIndex.indexMap.has(word)) {
            searchIndex.indexMap.get(word).forEach(idx => matchingIndices.add(idx));
        }
    } else {
        // Multiple words - find intersection
        const wordSets = queryWords.map(word => {
            if (searchIndex.indexMap.has(word)) {
                return searchIndex.indexMap.get(word);
            }
            return new Set();
        });

        if (wordSets.length > 0) {
            // Start with first set, then intersect
            let intersection = wordSets[0];
            for (let i = 1; i < wordSets.length; i++) {
                intersection = new Set([...intersection].filter(x => wordSets[i].has(x)));
            }
            intersection.forEach(idx => matchingIndices.add(idx));
        }
    }

    // Fallback: if the word index has no hits (e.g. partial words in a
    // multi-word query), match items whose text contains every word.
    if (matchingIndices.size === 0) {
        return searchIndex.nodes
            .filter(item => queryWords.every(w => item.searchableText.includes(w)))
            .map(item => item.node);
    }

    // Convert indices to nodes
    const results = Array.from(matchingIndices)
        .map(idx => searchIndex.nodes[idx].node);

    return results;
}

// Render results for current page
// OPTIMIZATION: Uses cached DOM elements and requestAnimationFrame
function renderResults() {
    if (!networkData) return;

    const resultsList = domCache.resultsList || document.getElementById('resultsList');
    if (!resultsList) return;

    const search = currentSearch.trim().toLowerCase();
    // Layout mode: Home (no search) should not force an internal scroll panel
    try {
        const homeMode = (currentFilter === 'home') && !search;
        document.body.classList.toggle('home-mode', homeMode);
    } catch (e) { }

    // Home page rendering (only when not searching)
    if (currentFilter === 'home' && !search) {
        const countFor = (type) => {
            return Object.values(networkData.nodesMap).filter(n =>
                n.type === type && n.paperCount >= getMinPapersForType(n.type)).length;
        };
        const counts = {
            constructs: countFor('construct'),
            measurements: countFor('measurement'),
            behaviors: countFor('behavior'),
            // Totals over everything loaded (no paper minimum), for the card captions.
            total: Object.fromEntries(['construct', 'behavior', 'measurement'].map(t =>
                [t, Object.values(networkData.nodesMap).filter(n => n.type === t).length])),
            // Cards list entities reported in at least the configured paper minimum.
            minShown: Object.fromEntries(['construct', 'behavior', 'measurement'].map(t => [t, getMinPapersForType(t)])),
        };
        resultsList.innerHTML = `
            <div class="empty-state home-intro">
                <h3 class="home-intro-title">Welcome</h3>
                <p style="margin-bottom: 12px;">
                    AI evaluation routinely uses benchmarks and other measurement instruments to make claims about
                    capabilities and risk-related properties, such as reasoning, robustness, and safety. Yet the assumed relationships
                    between these constructs, the behaviors used as evidence of them, and the instruments used to
                    measure them often remain implicit.
                </p>
                <p style="margin-bottom: 12px;">
                    <strong>AI Construct Lexis makes these assumptions explicit.</strong> We extract constructs,
                    behavioral indicators, measurement instruments, and the relationships claimed among them from
                    published papers on large language models (LLMs).
                </p>
                <p style="margin-bottom: 16px;">
                    The Lexis documents what the field claims, rather than establishing whether those claims are
                    valid. Its purpose is to make these assumptions available for systematic inspection, empirical
                    testing, and refinement.
                </p>
                <div class="home-intro-grid">
                    <div class="home-intro-section home-intro-section-construct">
                        <button type="button" class="home-intro-section-title home-intro-link" onclick="document.querySelector('.filter-btn[data-type=constructs]').click()">${networkData ? '<span class="home-intro-count">' + counts.constructs.toLocaleString() + '</span> ' : ''}Constructs</button>
                        ${networkData ? `<div class="home-intro-count-note">Reported in ${counts.minShown.construct} or more papers, of ${counts.total.construct.toLocaleString()} in total</div>` : ''}
                        <p>
                            Abstract properties of AI systems that are inferred from observable evidence rather than
                            observed directly, including capabilities (e.g., reasoning ability) and risk-related properties (e.g., safety).
                        </p>
                    </div>
                    <div class="home-intro-section home-intro-section-behavior">
                        <button type="button" class="home-intro-section-title home-intro-link" onclick="document.querySelector('.filter-btn[data-type=behaviors]').click()">${networkData ? '<span class="home-intro-count">' + counts.behaviors.toLocaleString() + '</span> ' : ''}Behavioral Indicators</button>
                        ${networkData ? `<div class="home-intro-count-note">Reported in ${counts.minShown.behavior} or more papers, of ${counts.total.behavior.toLocaleString()} in total</div>` : ''}
                        <p>
                            Observable phenomena through which constructs are assumed to be expressed (e.g., refusal of
                            harmful requests), including tasks (e.g., code generation and question answering).
                        </p>
                    </div>
                    <div class="home-intro-section home-intro-section-measurement">
                        <button type="button" class="home-intro-section-title home-intro-link" onclick="document.querySelector('.filter-btn[data-type=measurements]').click()">${networkData ? '<span class="home-intro-count">' + counts.measurements.toLocaleString() + '</span> ' : ''}Measurement Instruments</button>
                        ${networkData ? `<div class="home-intro-count-note">Reported in ${counts.minShown.measurement} or more papers, of ${counts.total.measurement.toLocaleString()} in total</div>` : ''}
                        <p>
                            Any tool or procedure used to elicit and score evidence about a construct, including
                            benchmarks (e.g., GSM8K), user studies, human evaluations, and LLM-as-a-judge pipelines.
                        </p>
                    </div>
                </div>
                <div class="home-graph-cta">
                    <svg class="home-net-motif" viewBox="0 0 160 64" aria-hidden="true" focusable="false"><g stroke="currentColor" stroke-width="0.8" opacity="0.45"><line x1="30" y1="10" x2="18" y2="32"/><line x1="30" y1="10" x2="62" y2="32"/><line x1="96" y1="10" x2="62" y2="32"/><line x1="96" y1="10" x2="112" y2="32"/><line x1="140" y1="12" x2="112" y2="32"/><line x1="30" y1="10" x2="96" y2="10"/><line x1="18" y1="32" x2="34" y2="54"/><line x1="62" y1="32" x2="34" y2="54"/><line x1="62" y1="32" x2="84" y2="54"/><line x1="112" y1="32" x2="84" y2="54"/><line x1="112" y1="32" x2="132" y2="54"/><line x1="140" y1="12" x2="150" y2="34"/><line x1="150" y1="34" x2="132" y2="54"/></g><g class="c"><circle cx="30" cy="10" r="4.5"/><circle cx="96" cy="10" r="4.5"/><circle cx="140" cy="12" r="3.5"/></g><g class="b"><circle cx="18" cy="32" r="3.5"/><circle cx="62" cy="32" r="4"/><circle cx="112" cy="32" r="4"/><circle cx="150" cy="34" r="3"/></g><g class="m"><circle cx="34" cy="54" r="3.5"/><circle cx="84" cy="54" r="3.5"/><circle cx="132" cy="54" r="3.5"/></g></svg>
                    <a href="network_graph.html" class="nav-tab home-graph-btn home-graph-btn-wide">
                        View Interactive Network
                    </a>
                    <svg class="home-net-motif home-net-motif--flip" viewBox="0 0 160 64" aria-hidden="true" focusable="false"><g stroke="currentColor" stroke-width="0.8" opacity="0.45"><line x1="30" y1="10" x2="18" y2="32"/><line x1="30" y1="10" x2="62" y2="32"/><line x1="96" y1="10" x2="62" y2="32"/><line x1="96" y1="10" x2="112" y2="32"/><line x1="140" y1="12" x2="112" y2="32"/><line x1="30" y1="10" x2="96" y2="10"/><line x1="18" y1="32" x2="34" y2="54"/><line x1="62" y1="32" x2="34" y2="54"/><line x1="62" y1="32" x2="84" y2="54"/><line x1="112" y1="32" x2="84" y2="54"/><line x1="112" y1="32" x2="132" y2="54"/><line x1="140" y1="12" x2="150" y2="34"/><line x1="150" y1="34" x2="132" y2="54"/></g><g class="c"><circle cx="30" cy="10" r="4.5"/><circle cx="96" cy="10" r="4.5"/><circle cx="140" cy="12" r="3.5"/></g><g class="b"><circle cx="18" cy="32" r="3.5"/><circle cx="62" cy="32" r="4"/><circle cx="112" cy="32" r="4"/><circle cx="150" cy="34" r="3"/></g><g class="m"><circle cx="34" cy="54" r="3.5"/><circle cx="84" cy="54" r="3.5"/><circle cx="132" cy="54" r="3.5"/></g></svg>
                </div>

            </div>
        `;
        return;
    }
    const results = [];
    const seenKeys = new Set();

    const inSearchMode = !!search;

    const candidateNodes = search ? searchNodes(search) : Object.values(networkData.nodesMap);

    candidateNodes.forEach(node => {
        const paperCount = node.paperCount;
        const minPapers = getMinPapersForType(node.type);

        // Only show nodes reported in at least the threshold for their type
        if (paperCount < minPapers) {
            return;
        }

        // When searching, include all types; otherwise respect the current filter tab
        const matchesType = inSearchMode
            ? currentFilter !== 'home' // any non-home tab shows all types when searching
            : (currentFilter !== 'home') && (node.type === currentFilter.slice(0, -1)); // Remove 's'

        if (matchesType) {
            const key = `${node.type}_${node.name}`;
            if (!seenKeys.has(key)) {
                results.push(node);
                seenKeys.add(key);
            }
        }
    });

    // Note: We don't include relationship-only nodes here since we filter by paper count
    // Only nodes from semantic sets with 5+ papers are shown

    // Prefer shortest name for display EXCEPT constructs (constructs always show canonical_name)
    // OPTIMIZATION: Memoized
    function getDisplayName(node) {
        if (!node) return '';
        // Always use the canonical name — no more shortest-surface-form
        // substitution, which caused tile names ≠ detail names.
        return node.name;
    }

    // Deduplicate by name and aggregate
    const deduplicated = new Map();
    results.forEach(node => {
        const name = node.name;
        if (!deduplicated.has(name)) {
            deduplicated.set(name, {
                name: getDisplayName(node),
                type: node.type,
                paperCount: 0,
                firstNode: node // Keep reference to first node for selection
            });
        }
        const agg = deduplicated.get(name);
        agg.paperCount = Math.max(agg.paperCount, node.paperCount);
    });

    // Sort: when there's a search query, rank by best match
    // (exact > whole-word > word-prefix > substring), then by paper
    // count desc, then alphabetical. When no search, alphabetical.
    const _q = (search || '').trim().toLowerCase();
    function _matchScore(name) {
        const nm = (name || '').toLowerCase();
        if (!_q || !nm) return 0;
        if (nm === _q) return 4;
        const words = nm.split(/[\s\-/]+/).filter(Boolean);
        if (words.some(w => w === _q)) return 3;
        if (nm.startsWith(_q)) return 2;
        if (words.some(w => w.startsWith(_q))) return 2;
        if (nm.includes(_q)) return 1;
        return 0;
    }
    const deduplicatedResults = Array.from(deduplicated.values())
        .sort((a, b) => {
            if (_q) {
                const sa = _matchScore(a.name);
                const sb = _matchScore(b.name);
                if (sa !== sb) return sb - sa;
                const pa = a.paperCount || 0;
                const pb = b.paperCount || 0;
                if (pa !== pb) return pb - pa;
            }
            return a.name.localeCompare(b.name);
        });

    // OPTIMIZATION: Pagination
    paginationState.totalItems = deduplicatedResults.length;
    const startIdx = paginationState.page * paginationState.pageSize;
    const endIdx = Math.min(startIdx + paginationState.pageSize, deduplicatedResults.length);
    const paginatedResults = deduplicatedResults.slice(startIdx, endIdx);

    // Render
    if (deduplicatedResults.length === 0) {
        resultsList.innerHTML = '<div class="empty-state"><h3>No items found</h3><p>Try a different search term.</p></div>';
        return;
    }

    // Batch DOM updates through a document fragment
    const fragment = document.createDocumentFragment();
        const container = document.createElement('div');

        container.innerHTML = paginatedResults.map(agg => {
            const nodeKey = `${agg.firstNode.type}_${agg.firstNode.name}`;
            const isSelected = selectedNode && networkData.nodesMap[nodeKey] === selectedNode;
            const paperCount = agg.paperCount;
            const description = `${paperCount} paper${paperCount !== 1 ? 's' : ''}`;
            return `
        <div class="result-item ${isSelected ? 'selected' : ''}"
             data-select-key="${escAttr(nodeKey)}"
             role="button" tabindex="0"
             style="cursor: pointer;">
            <div class="result-name">
                ${escapeHtml(agg.name)}
            </div>
            <span class="result-type ${agg.type}">${({construct:'Construct',measurement:'Measurement Instrument',behavior:'Behavioral Indicator'})[agg.type] || agg.type}</span>
            <div class="result-definition">${escapeHtml(description)}</div>
        </div>
    `;
        }).join('');

        // Add pagination controls
        const totalPages = Math.ceil(deduplicatedResults.length / paginationState.pageSize);
        if (totalPages > 1) {
            let paginationHtml = '<div class="pagination-controls">';
            paginationHtml += `<div class="pagination-info">Showing ${startIdx + 1}-${endIdx} of ${deduplicatedResults.length}</div>`;
            paginationHtml += '<div class="pagination-buttons">';

            if (paginationState.page > 0) {
                paginationHtml += `<button class="pagination-btn" onclick="changePage(${paginationState.page - 1})">Previous</button>`;
            }

            // Page numbers
            const maxVisiblePages = 5;
            let startPage = Math.max(0, paginationState.page - Math.floor(maxVisiblePages / 2));
            let endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1);
            if (endPage - startPage < maxVisiblePages - 1) {
                startPage = Math.max(0, endPage - maxVisiblePages + 1);
            }

            if (startPage > 0) {
                paginationHtml += `<button class="pagination-btn" onclick="changePage(0)">1</button>`;
                if (startPage > 1) paginationHtml += '<span class="pagination-ellipsis">...</span>';
            }

            for (let i = startPage; i <= endPage; i++) {
                const isActive = i === paginationState.page;
                paginationHtml += `<button class="pagination-btn ${isActive ? 'active' : ''}" onclick="changePage(${i})">${i + 1}</button>`;
            }

            if (endPage < totalPages - 1) {
                if (endPage < totalPages - 2) paginationHtml += '<span class="pagination-ellipsis">...</span>';
                paginationHtml += `<button class="pagination-btn" onclick="changePage(${totalPages - 1})">${totalPages}</button>`;
            }

            if (paginationState.page < totalPages - 1) {
                paginationHtml += `<button class="pagination-btn" onclick="changePage(${paginationState.page + 1})">Next</button>`;
            }

            paginationHtml += '</div></div>';
            container.innerHTML += paginationHtml;
        }

    fragment.appendChild(container);
    resultsList.innerHTML = '';
    resultsList.appendChild(fragment);
}

// OPTIMIZATION: Pagination helper
function changePage(newPage) {
    paginationState.page = newPage;
    renderResults();
    // Scroll to top of results
    const resultsList = document.getElementById('resultsList');
    if (resultsList) {
        resultsList.scrollTop = 0;
    }
}

// Open a paper in a new tab (from definitions). Does NOT change filters/search.
function searchForPaper(paperTitle) {
    try {
        const idx = (networkData && networkData.paperUrlByTitle) ? networkData.paperUrlByTitle : {};
        const url = idx && idx[paperTitle] ? idx[paperTitle] : null;
        if (url) {
            window.open(url, '_blank', 'noopener');
            return;
        }
    } catch (e) { /* ignore */ }
    const q = encodeURIComponent(paperTitle);
    window.open(`https://www.google.com/search?q=${q}`, '_blank', 'noopener');
}

// Select a node by name and type (used for clicking relationships)
function selectNodeByName(nodeName, nodeType) {
    // Resolve to canonical name if needed
    const canonicalName = networkData.nameToCanonical && networkData.nameToCanonical[nodeName]
        ? networkData.nameToCanonical[nodeName]
        : nodeName;
    const nodeKey = `${nodeType}_${canonicalName}`;
    selectNode(nodeKey);
}

// Select a node, fetch its full record, and show its page.
let selectToken = 0;
async function selectNode(nodeKey) {
    let node = networkData.nodesMap[nodeKey];

    // If not found by key, try by bare name (either form may arrive here)
    if (!node && networkData.nameToNode) {
        const nameMatch = nodeKey.includes('_') ? nodeKey.split('_').slice(1).join('_') : nodeKey;
        const nodes = networkData.nameToNode[nameMatch] || networkData.nameToNode[nodeKey];
        if (nodes && nodes.length > 0) {
            node = nodes[0];
        }
    }

    if (!node) return;

    selectedNode = node;
    const token = ++selectToken;
    const resultsList = domCache.resultsList || document.getElementById('resultsList');

    // Show a spinner only if the fetch is actually slow.
    const spinnerTimer = setTimeout(() => {
        if (token === selectToken && resultsList) {
            resultsList.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
        }
    }, 150);

    try {
        const [cfg] = await Promise.all([loadEntity(node.name, node.type), loadPaperUrls()]);
        clearTimeout(spinnerTimer);
        if (token !== selectToken) return; // a newer selection superseded this one
        renderDetails(node, cfg, true); // Pass true to indicate full panel replacement
    } catch (e) {
        clearTimeout(spinnerTimer);
        console.error('Failed to load entity record:', node.name, e);
        if (token !== selectToken) return;
        const resultsHeader = domCache.resultsHeader || document.getElementById('resultsHeader');
        if (resultsHeader) {
            resultsHeader.innerHTML = `<span style="cursor: pointer;" onclick="goBackToList()">← Back</span> | <span>${escapeHtml(node.name)}</span>`;
        }
        if (resultsList) {
            resultsList.innerHTML = '<div class="empty-state"><h3>Could not load this entity</h3><p>Please check your connection and try again.</p></div>';
        }
    }
}

// Helper function to get node type from name
function getNodeType(nodeName) {
    if (networkData.nameToNode && networkData.nameToNode[nodeName]) {
        const nodes = networkData.nameToNode[nodeName];
        if (nodes.length > 0) {
            return nodes[0].type;
        }
    }
    // Default to construct if we can't determine
    return 'construct';
}

// Helper function to check if a node appears in min papers for its type
function hasMinPapers(nodeName, nodeType = null) {
    const nodes = (networkData.nameToNode && networkData.nameToNode[nodeName]) || [];
    let node = nodeType ? nodes.find(n => n.type === nodeType) : null;
    if (!node && nodes.length > 0) node = nodes[0];
    const type = node ? node.type : (nodeType || 'construct');
    const paperCount = node ? node.paperCount : 0;
    return paperCount >= getMinPapersForType(type);
}

// OPTIMIZATION: Cache for relationship data
const relationshipCache = new Map();

// Papers with empirical validity evidence (empirical_evidence.json), shown on entity pages.
let empiricalEvidence = [];
fetch('empirical_evidence.json').then(r => r.ok ? r.json() : { rows: [] }).then(d => {
    empiricalEvidence = d.rows || [];
    relationshipCache.clear();
}).catch(() => {});
const EVIDENCE_FIELD = { construct: 'constructs', measurement: 'instruments', behavior: 'behaviors' };

function evidenceSectionHtml(node) {
    const field = EVIDENCE_FIELD[node.type];
    const key = String(node.name || '').toLowerCase();
    // Match canonical names, recorded aliases, and case variants.
    const hits = empiricalEvidence.filter(r => (r[field] || []).some(n => {
        const s = String(n).toLowerCase();
        return s === key || networkData.nameToCanonicalLower[s] === node.name;
    }));
    if (!hits.length) return '';
    return `<div class="category-section">
        <h3 class="category-title">Empirical Evidence (${hits.length})</h3>
        <div class="relationship-list">
            ${hits.map(r => `
                <div class="relationship-item evidence-item">
                    <div class="relationship-nodes">
                        <a href="${escapeHtml(r.url)}" target="_blank" rel="noopener" class="contact-link"><strong>${escapeHtml(r.title)}</strong></a>
                        ${r.venue ? `<span class="rel-rare-tag">${escapeHtml(r.venue)}</span>` : ''}
                    </div>
                    ${(r.analysis_types || []).length ? `<div class="relationship-evidence">${escapeHtml(r.analysis_types.join(' · '))}</div>` : ''}
                    ${r.conclusion ? `<div class="relationship-evidence">${escapeHtml(r.conclusion)}</div>` : ''}
                    <div class="relationship-evidence"><a href="empirical_evidence.html?q=${encodeURIComponent(r.title)}" class="contact-link">See the full entry on the Empirical Evidence page</a></div>
                </div>`).join('')}
        </div>
    </div>`;
}

// Render the entity page from the node's full record (cfg).
function renderDetails(node, cfg, replaceList = false) {
    const resultsList = domCache.resultsList || document.getElementById('resultsList');
    const resultsHeader = domCache.resultsHeader || document.getElementById('resultsHeader');

    // If replacing the list, render in resultsList instead
    const targetContainer = replaceList ? resultsList : document.getElementById('detailsPanel');

    if (!targetContainer) return;

    // OPTIMIZATION: Check cache first
    const cacheKey = `${node.type}_${node.name}`;
    if (relationshipCache.has(cacheKey)) {
        const cachedHtml = relationshipCache.get(cacheKey);
        targetContainer.innerHTML = cachedHtml;
        if (replaceList && resultsHeader) {
            resultsHeader.innerHTML = `<span style="cursor: pointer;" onclick="goBackToList()">← Back</span> | <span>${escapeHtml(node.name)}</span>`;
        }
        // Open the entity page at its top, not at the list's old scroll offset.
        if (replaceList) targetContainer.scrollTop = 0;
        return;
    }

    // Update header if replacing
    if (replaceList && resultsHeader) {
        resultsHeader.innerHTML = `<span style="cursor: pointer;" onclick="goBackToList()">← Back</span> | <span>${escapeHtml(node.name)}</span>`;
    }

    // The entity's own record lists every one of its links (both directions).
    // A link to an entity that is not in the graph index (an expert-removed
    // one) is hidden rather than redirected.
    const rawRels = [];
    (cfg.relationships || []).forEach(rel => {
        const rawOther = rel.other_canonical_name;
        if (!rawOther) return;
        const otherCanonical = networkData.nameToCanonical[rawOther] || null;
        if (!otherCanonical) return;
        const otherNodeType = TYPE_SHORT[rel.other_type] || getNodeType(otherCanonical);
        const direction = rel.direction === 'incoming' ? 'incoming' : 'outgoing';
        const source = direction === 'incoming' ? otherCanonical : node.name;
        const target = direction === 'incoming' ? node.name : otherCanonical;
        // Every paper behind this relationship; `paper` is the one the evidence quote comes from.
        const papers = Object.values(rel.papers_by_conference || {}).flat();
        rawRels.push({
            source: source,
            target: target,
            type: rel.relationship_type || '',
            paper: rel.paper || '',
            papers: papers.length ? papers : (rel.paper ? [rel.paper] : []),
            evidence: rel.evidence || '',
            paperCount: Number(rel.paper_count) || 1,
            paperWeight: Number(rel.paper_weight ?? rel.paper_count) || 1,
            otherNode: otherCanonical,
            otherNodeType: otherNodeType,
            direction: direction
        });
    });

    // Remove duplicates (same source, target, type, paper)
    const uniqueRels = new Map();
    rawRels.forEach(rel => {
        const key = `${rel.source}|${rel.target}|${rel.type}|${rel.paper}`;
        if (!uniqueRels.has(key)) {
            uniqueRels.set(key, rel);
        }
    });

    // An entity with no relationships still gets its summary, definitions and config.
    const noRelationships = uniqueRels.size === 0;

    // The entity's own page lists all of its links. Links to entities below the
    // site's paper minimum (which the lists hide) are kept and marked as rare.
    const allRels = Array.from(uniqueRels.values());

        // Resolve any name (canonical or alias) to canonical for display
    function toCanonicalName(name) {
        if (!name || !networkData.nameToCanonical) return name;
        return networkData.nameToCanonical[name] || name;
    }

    // Short display name for a node (same logic as Measurement list: shortest of canonical + names)
    function getDisplayNameForNode(canonicalName) {
        // Always return the canonical name as the display name.
        return canonicalName;
    }

    // Helper function to deduplicate and aggregate relationships by canonical node name
    // Every related item shows the same five bars, in this order, read from the
    // current node. Causal links keep their direction: "Causes" means this entity
    // causes the related one, "Caused by" the reverse. measured_by is normalized so
    // the instrument is the target, so it is one bar whose verb follows the page.
    const REL_ROWS = [
        { key: 'measured_by', out: 'Measured by', in: 'Measures' },
        { key: 'related', out: 'Related to', in: 'Related to' },
        { key: 'causes', dir: 'out', label: 'Causes' },
        { key: 'causes', dir: 'in', label: 'Caused by' },
        { key: 'correlates', out: 'Correlated with', in: 'Correlated with' }
    ];

    // One bar per row, sized by its share of the paper weight across all rows.
    function renderRelTypes(agg) {
        const tally = {};
        REL_ROWS.forEach(r => { tally[r.key] = { out: 0, in: 0, papersOut: 0, papersIn: 0 }; });
        agg.typeCounts.forEach(({ type, direction, count, weight }) => {
            if (!tally[type]) return;
            const d = direction === 'incoming' ? 'in' : 'out';
            tally[type][d] += weight;
            tally[type][d === 'in' ? 'papersIn' : 'papersOut'] += count;
        });
        const total = Object.values(tally).reduce((sum, t) => sum + t.out + t.in, 0);
        if (!total) return '';
        const rows = REL_ROWS.map(r => {
            const t = tally[r.key];
            let weight, n, label;
            if (r.dir) {
                weight = t[r.dir];
                n = r.dir === 'in' ? t.papersIn : t.papersOut;
                label = r.label;
            } else {
                weight = t.out + t.in;
                n = t.papersOut + t.papersIn;
                label = r.out;
                if (r.out !== r.in) {
                    if (t.out && t.in) label = `${r.out} / ${r.in.toLowerCase()}`;
                    else if (t.in || (!t.out && node.type === 'measurement')) label = r.in;
                }
            }
            const pct = Math.round(100 * weight / total);
            return `<div class="rel-type${n ? '' : ' is-zero'}" title="${n} paper${n !== 1 ? 's' : ''}">
                <div class="rel-type-head"><span class="rel-type-name">${label}</span><span class="rel-type-pct">${pct}%</span></div>
                <div class="rel-type-bar"><span style="width: ${pct}%"></span></div>
            </div>`;
        });
        return `<div class="rel-types">${rows.join('')}</div>`;
    }

    function deduplicateRelationships(rels) {
        const deduplicated = new Map();

        rels.forEach(rel => {
            const canonicalName = toCanonicalName(rel.otherNode);
            if (!deduplicated.has(canonicalName)) {
                deduplicated.set(canonicalName, {
                    nodeName: canonicalName,
                    displayName: getDisplayNameForNode(canonicalName),
                    nodeType: rel.otherNodeType,
                    rare: !hasMinPapers(canonicalName, rel.otherNodeType),
                    papers: new Set(),
                    evidence: [],
                    typeCounts: new Map()
                });
            }
            const agg = deduplicated.get(canonicalName);
            // Example paper first, so the row's chips start with the source of its quote.
            if (rel.paper) agg.papers.add(rel.paper);
            (rel.papers || []).forEach(p => agg.papers.add(p));

            // The same edge can arrive from both endpoints' configs, so keep the
            // largest paper count per (source, target, type) rather than summing.
            const edgeKey = `${rel.source}|${rel.target}|${rel.type}`;
            const prev = agg.typeCounts.get(edgeKey);
            if (!prev || rel.paperCount > prev.count) {
                agg.typeCounts.set(edgeKey, {
                    type: rel.type,
                    direction: rel.direction,
                    count: rel.paperCount || 1,
                    weight: rel.paperWeight || rel.paperCount || 1
                });
            }

            if (rel.evidence && agg.evidence.length < 2) {
                let evText = rel.evidence;
                try {
                    const nodesForName = (networkData.nameToNode && networkData.nameToNode[canonicalName]) || [];
                    if (nodesForName.length > 0 && Array.isArray(nodesForName[0].aliases)) {
                        const aliases = nodesForName[0].aliases;
                        aliases.forEach(alias => {
                            if (!alias || alias === canonicalName) return;
                            evText = evText.split(alias).join(canonicalName);
                        });
                    }
                } catch (e) { }
                agg.evidence.push(evText);
            }
        });

        return Array.from(deduplicated.values());
    }

    // Categorize relationships
    const relatedConstructs = [];
    const associatedBehaviors = [];
    const measurements = [];

    allRels.forEach(rel => {
        if (rel.otherNodeType === 'construct') {
            relatedConstructs.push(rel);
        } else if (rel.otherNodeType === 'behavior') {
            associatedBehaviors.push(rel);
        } else if (rel.otherNodeType === 'measurement') {
            measurements.push(rel);
        }
    });

    // Deduplicate each category
    const deduplicatedConstructs = deduplicateRelationships(relatedConstructs);
    const deduplicatedBehaviors = deduplicateRelationships(associatedBehaviors);
    const deduplicatedMeasurements = deduplicateRelationships(measurements);

    // Collect all definitions with their specific paper mappings
    // We need to get this from semantic sets to get accurate definition-to-paper mappings
    const definitionToPapers = new Map(); // Map definition text -> Set of papers

    // Populate definition -> papers from the entity record
    (cfg.definitions || []).forEach(d => {
        if (!d.text) return;
        if (!definitionToPapers.has(d.text)) {
            definitionToPapers.set(d.text, new Set());
        }
        if (d.paper) {
            definitionToPapers.get(d.text).add(d.paper);
        }
    });

        // Canonical definition: prefer the full record, fall back to the graph
    // node's summary definition.
    let canonicalDefinition = null;
    if (cfg.canonical_definition && cfg.canonical_definition !== 'N/A') {
        canonicalDefinition = cfg.canonical_definition;
    } else if (node.canonicalDefinition && node.canonicalDefinition !== 'N/A') {
        canonicalDefinition = node.canonicalDefinition;
    }
    let canonicalDefinitionPapers = new Set();

    if (canonicalDefinition && definitionToPapers.size > 0) {
        const papers = definitionToPapers.get(canonicalDefinition);
        if (papers) {
            canonicalDefinitionPapers = papers;
        }
    }

    // Build HTML
    // One neutral chip per paper: links to the PDF when known, else searches the site.
    // Chips also sit inside clickable relationship rows, so a chip click stops at the chip.
    const attr = s => escapeHtml(s).replace(/"/g, '&quot;');
    const paperChip = p => {
        const url = networkData.paperUrlByTitle && networkData.paperUrlByTitle[p];
        const label = escapeHtml(p.length > 35 ? p.substring(0, 35) + '...' : p);
        const target = url
            ? `href="${attr(url)}" target="_blank" rel="noopener" onclick="event.stopPropagation();"`
            : `href="#" data-paper="${attr(p)}" onclick="event.stopPropagation(); searchForPaper(this.dataset.paper); return false;"`;
        return `<a class="paper-chip" ${target} title="${attr(p)}">${label}</a>`;
    };
    const paperCount = n => `<span class="paper-chip-count">(${n} paper${n !== 1 ? 's' : ''})</span>`;
    // Papers behind one related-entity row: the first few as chips, the rest behind "+N more".
    const REL_PAPERS_SHOWN = 3;
    const relPapers = agg => {
        const papers = Array.from(agg.papers);
        if (!papers.length) return '';
        const rest = papers.slice(REL_PAPERS_SHOWN);
        const more = rest.length
            ? `<span class="rel-papers-rest">${rest.map(paperChip).join('')}</span>`
              + `<button type="button" class="paper-chip paper-chip-more" onclick="event.stopPropagation(); this.parentNode.classList.add('is-open');">+${rest.length} more</button>`
            : '';
        return `<div class="rel-papers">${papers.slice(0, REL_PAPERS_SHOWN).map(paperChip).join('')}${more}</div>`;
    };
    const networkHref = `network_graph.html?node=${encodeURIComponent(node.name)}&type=${encodeURIComponent(node.type)}`;
    let html = `<div class="details-header"><span>${escapeHtml(node.name)}</span>`
        + `<a class="view-in-network" href="${networkHref}">View in network →</a></div>`;

    // Implied definition (always shown; defaults to N/A)
    const displayConsensus = canonicalDefinition ? canonicalDefinition : 'N/A';
    const canonicalPapers = canonicalDefinition
        ? Array.from(canonicalDefinitionPapers)
        : [];
    html += `<div class="definitions-dropdown" style="margin-bottom: 15px;">
            <label>State of the Field</label>
            <div class="entity-panel">
                ${sectionsHtml(cfg)
                    ? `<div class="entity-panel-text sof-sections">${sectionsHtml(cfg)}</div>`
                    : `<div class="entity-panel-text${displayConsensus === 'N/A' ? ' is-empty' : ''}">${escapeHtml(displayConsensus)}</div>`}
                ${canonicalPapers.length > 0 ? `<div>${canonicalPapers.map(paperChip).join('')}${paperCount(canonicalPapers.length)}</div>` : ''}
            </div>
        </div>`;

    // All definitions with paper links
    if (definitionToPapers.size > 0) {
        const definitionsArray = Array.from(definitionToPapers.keys())
            .filter(def => !canonicalDefinition || def !== canonicalDefinition); // Exclude canonical if it exists
        html += `<div class="definitions-dropdown">
            <label for="definitions-select">Example References</label>
            <div id="definitions-list" class="ref-list">
                ${definitionsArray.map(def => {
            const papers = Array.from(definitionToPapers.get(def));
            return `<div class="ref-item">
                        <div class="ref-item-text">${escapeHtml(def)}</div>
                        <div>${papers.map(paperChip).join('')}${paperCount(papers.length)}</div>
                    </div>`;
        }).join('')}
            </div>
        </div>`;
    } else {
        html += `<div class="definitions-dropdown">
            <label>Definitions</label>
            <div class="entity-panel entity-panel-text is-empty" style="text-align: center;">
                No definitions available
            </div>
        </div>`;
    }

    html += evidenceSectionHtml(node);

    // Tag for links to entities that the lists hide (below the paper minimum).
    const rareTag = agg => agg.rare
        ? `<span class="rel-rare-tag">reported in fewer than ${getMinPapersForType(agg.nodeType)} papers</span>` : '';

    if (noRelationships) {
        html += `<div class="category-section">
            <h3 class="category-title">Relationships</h3>
            <div class="empty-state rel-none-note"><p>No relationships with this entity were reported by two or more extraction models.</p></div>
        </div>`;
    } else {
    // Measurement Instruments (always show)
    html += `<div class="category-section">
        <h3 class="category-title">Measurement Instruments (${deduplicatedMeasurements.length})</h3>`;
    if (deduplicatedMeasurements.length > 0) {
        html += `<div class="relationship-list">
            ${deduplicatedMeasurements.map(agg => {
            const paperCount = agg.papers.size;
            const evidenceText = agg.evidence.length > 0 ? agg.evidence[0] : '';

            return `
                <div class="relationship-item measurement${agg.rare ? ' is-rare' : ''}" data-select-name="${attr(agg.nodeName)}" data-select-type="${agg.nodeType}" role="button" tabindex="0">
                    <div class="relationship-nodes">
                        <strong>${escapeHtml(agg.displayName)}</strong>${rareTag(agg)}
                    </div>
                    ${renderRelTypes(agg)}
                    ${evidenceText ? `<div class="relationship-evidence">${escapeHtml(evidenceText)}</div>` : ''}
                    ${relPapers(agg)}
                </div>
            `;
        }).join('')}
        </div>`;
    } else {
        html += '<div class="empty-state" style="padding: 20px;"><p>No related measurement instruments</p></div>';
    }
    html += `</div>`;

    // Associated Behaviors (only show if there are any)
    if (deduplicatedBehaviors.length > 0) {
        html += `<div class="category-section">
            <h3 class="category-title">Associated Behavioral Indicators (${deduplicatedBehaviors.length})</h3>
            <div class="relationship-list">
                ${deduplicatedBehaviors.map(agg => {
            const paperCount = agg.papers.size;
            const evidenceText = agg.evidence.length > 0 ? agg.evidence[0] : '';

            return `
                    <div class="relationship-item behavior${agg.rare ? ' is-rare' : ''}" data-select-name="${attr(agg.nodeName)}" data-select-type="${agg.nodeType}" role="button" tabindex="0">
                        <div class="relationship-nodes">
                            <strong>${escapeHtml(agg.displayName)}</strong>${rareTag(agg)}
                        </div>
                        ${renderRelTypes(agg)}
                        ${evidenceText ? `<div class="relationship-evidence">${escapeHtml(evidenceText)}</div>` : ''}
                    ${relPapers(agg)}
                    </div>
                `;
        }).join('')}
            </div>
        </div>`;
    }

    // Related Constructs (always show)
    html += `<div class="category-section">
        <h3 class="category-title">Related Constructs (${deduplicatedConstructs.length})</h3>`;
    if (deduplicatedConstructs.length > 0) {
        html += `<div class="relationship-list">
            ${deduplicatedConstructs.map(agg => {
            const paperCount = agg.papers.size;
            const evidenceText = agg.evidence.length > 0 ? agg.evidence[0] : '';

            return `
                <div class="relationship-item construct${agg.rare ? ' is-rare' : ''}" data-select-name="${attr(agg.nodeName)}" data-select-type="${agg.nodeType}" role="button" tabindex="0">
                    <div class="relationship-nodes">
                        <strong>${escapeHtml(agg.displayName)}</strong>${rareTag(agg)}
                    </div>
                    ${renderRelTypes(agg)}
                    ${evidenceText ? `<div class="relationship-evidence">${escapeHtml(evidenceText)}</div>` : ''}
                    ${relPapers(agg)}
        </div>
    `;
        }).join('')}
        </div>`;
    } else {
        html += '<div class="empty-state" style="padding: 20px;"><p>No related constructs</p></div>';
    }
    html += `</div>`;

    }

    // Full config viewer — shows the human-readable Markdown sibling
    // (nomological_network_data_readable/<type>/<slug>.md), lazily
    // loaded on first toggle.
    {
        const rawConfigId = `raw-config-${Math.random().toString(36).slice(2)}`;
        const subdir = TYPE_DIR[node.type] || 'constructs';
        // Same slug as the exporter ("+" spelled out), so HumanEval+ and
        // HumanEval open their own files.
        const mdPath = `nomological_network_data_readable/${subdir}/${slugify(node.name)}.md`;
        html += `<div class="category-section raw-config-section">
            <h3 class="category-title">Full Config</h3>
            <button class="raw-config-toggle" type="button"
                onclick="toggleRawConfig('${rawConfigId}', '${mdPath}')">
                Show / hide full config
            </button>
            <div id="${rawConfigId}" class="raw-config-content rendered-md" style="display:none;">Loading…</div>
        </div>`;
    }

    targetContainer.innerHTML = html;

    // Open the entity page at its top, not at the list's old scroll offset.
    if (replaceList) targetContainer.scrollTop = 0;

    // Cache the rendered HTML (limit cache size)
    if (relationshipCache.size > 50) {
        // Remove oldest entry (simple FIFO)
        const firstKey = relationshipCache.keys().next().value;
        relationshipCache.delete(firstKey);
    }
    relationshipCache.set(cacheKey, html);
}

// Go back to the list view
function goBackToList() {
    selectedNode = null;
    const resultsHeader = document.getElementById('resultsHeader');
    if (resultsHeader) {
        if (currentFilter === 'home') {
            resultsHeader.textContent = 'Home';
        } else if (currentFilter === 'constructs') {
            resultsHeader.textContent = 'Constructs';
        } else if (currentFilter === 'measurements') {
            resultsHeader.textContent = 'Measurement Instruments';
        } else if (currentFilter === 'behaviors') {
            resultsHeader.textContent = 'Behavioral Indicators';
        }
    }
    renderResults();
}

// Helper functions
function getTypeColor(type) {
    const colors = {
        construct: '#4caf50',
        measurement: '#2196f3',
        behavior: '#ea580c'
    };
    return colors[type] || '#95a5a6';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// For interpolation into HTML attribute values (escapeHtml leaves quotes alone).
function escAttr(text) {
    return escapeHtml(text).replace(/"/g, '&quot;');
}

// "State of the Field" as labeled sections when the export provides them.
function sectionsHtml(cfg) {
    const secs = cfg && Array.isArray(cfg.characterization_sections) ? cfg.characterization_sections : [];
    if (!secs.length) return '';
    return secs.map(s => `<p class="sof-section"><span class="sof-label">${escapeHtml(s.label)}</span> ${escapeHtml(s.text)}</p>`).join('');
}

// Toggle full-config visibility (details page). Lazily fetches the
// human-readable Markdown file on first open and renders it via marked.
const _mdCache = new Map();

// marked.js is only needed for this view, so it loads on first use.
let _markedPromise = null;
function ensureMarked() {
    if (window.marked && window.marked.parse) return Promise.resolve();
    if (!_markedPromise) {
        _markedPromise = new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.src = 'https://cdn.jsdelivr.net/npm/marked@12.0.2/marked.min.js';
            s.onload = resolve;
            s.onerror = () => { _markedPromise = null; reject(new Error('Could not load the Markdown renderer')); };
            document.head.appendChild(s);
        });
    }
    return _markedPromise;
}

async function toggleRawConfig(id, mdPath) {
    const el = document.getElementById(id);
    if (!el) return;
    const willShow = (el.style.display === 'none' || !el.style.display);
    el.style.display = willShow ? 'block' : 'none';
    if (willShow && mdPath && el.textContent.trim() === 'Loading…') {
        try {
            let text;
            if (_mdCache.has(mdPath)) {
                text = _mdCache.get(mdPath);
            } else {
                text = await fetchText(mdPath);
                _mdCache.set(mdPath, text);
            }
            await ensureMarked().catch(() => {});
            if (typeof marked !== 'undefined' && marked.parse) {
                // marked v12: { breaks: true, gfm: true } for nicer output
                marked.setOptions({ breaks: true, gfm: true, headerIds: false, mangle: false });
                el.innerHTML = marked.parse(text);
                // Open external links in a new tab
                el.querySelectorAll('a[href^="http"]').forEach(a => {
                    a.setAttribute('target', '_blank');
                    a.setAttribute('rel', 'noopener noreferrer');
                });
            } else {
                el.textContent = text;
            }
        } catch (e) {
            el.textContent = 'Could not load human-readable config: ' + e;
        }
    }
}

// Search input handlers
// OPTIMIZATION: Debounced search with cache clearing
(function initSearch() {
    const input = domCache.searchInput || document.getElementById('searchInput');
    const clearBtn = domCache.clearSearchBtn || document.getElementById('clearSearchBtn');
    if (!input || !clearBtn) return;

    input.addEventListener('input', () => {
        currentSearch = input.value || '';

        // Reset pagination on search
        paginationState.page = 0;

        // Debounce search to avoid excessive re-renders
        if (searchDebounceTimer) {
            clearTimeout(searchDebounceTimer);
        }

        searchDebounceTimer = setTimeout(() => {
            renderResults();
        }, 150); // 150ms debounce
    });

    clearBtn.addEventListener('click', () => {
        currentSearch = '';
        input.value = '';
        paginationState.page = 0;

        if (searchDebounceTimer) {
            clearTimeout(searchDebounceTimer);
        }
        renderResults();
    });
})();

// Clicks and keyboard activation for entity cards and relationship rows.
// Rows carry data-select-key / data-select-name instead of inline handlers,
// so names with quotes cannot break out of an attribute.
(function initListInteractions() {
    const list = document.getElementById('resultsList');
    if (!list) return;

    function activate(target) {
        const item = target.closest('[data-select-key]');
        if (item && list.contains(item)) {
            selectNode(item.dataset.selectKey);
            return true;
        }
        const row = target.closest('[data-select-name]');
        if (row && list.contains(row)) {
            selectNodeByName(row.dataset.selectName, row.dataset.selectType);
            return true;
        }
        return false;
    }

    list.addEventListener('click', e => {
        if (e.target.closest('a, button, input, textarea')) return; // chips and controls keep their own behavior
        activate(e.target);
    });

    list.addEventListener('keydown', e => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        if (e.target.closest('a, button, input, textarea')) return;
        if (activate(e.target)) e.preventDefault();
    });
})();
