// Site header for pages other than view_network.html (which has its own copy in markup):
// the same title, tabs, and Analysis Tools dropdown, without the maintainers and paper blocks.
// Usage: <header class="site-header" id="siteHeader" data-active="network|tools|evidence" data-tool="confirmatory"></header>
(function () {
    'use strict';

    const TOOL_MENU = [
        ['confirmatory', 'tools_confirmatory.html', 'Confirmatory analysis', 'Design a confirmatory model: which instruments load on which construct.'],
        ['overlap', 'tools_overlap.html', 'Instrument overlap and separation', 'Which constructs are measured the same way, or in ways that do not hang together.'],
        ['instrument', 'tools_instrument.html', 'Instrument profile', 'What is a benchmark claimed to measure? Compare several side by side.'],
        ['claim', 'tools_claim.html', 'Claim checker', 'Do other papers use your instrument for your construct?'],
    ];

    function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

    function render(el) {
        const active = el.dataset.active || '';
        const tool = el.dataset.tool || '';
        const tab = (key, href, label) => '<a class="nav-tab' + (active === key ? ' active' : '') + '" href="' + href + '"' + (active === key ? ' aria-current="page"' : '') + '>' + label + '</a>';
        const menu = TOOL_MENU.map(([k, href, title, q]) =>
            '<a href="' + href + '" role="menuitem"' + (k === tool ? ' class="current"' : '') + '>' + esc(title) + '<span>' + esc(q) + '</span></a>').join('');
        el.innerHTML =
            '<div class="site-header-row">' +
            '<div class="title-row">' +
            '<h1><a href="view_network.html">AI Construct Lexis</a><span class="beta-pill">Beta</span></h1>' +
            '<span class="disclaimer-line">Please read <a href="view_network.html#disclaimers" class="contact-link">Scope and Interpretation</a> on the Home page.</span>' +
            '<span class="verify-note">Always check sources and verify!</span>' +
            '</div>' +
            '<nav class="filter-buttons" aria-label="Site">' +
            tab('home', 'view_network.html', 'Home') +
            tab('network', 'network_graph.html', 'Interactive Network') +
            '<div class="nav-dropdown"><a class="nav-tab' + (active === 'tools' ? ' active' : '') + '" href="tools.html" aria-haspopup="true">Analysis Support <svg class="caret" width="13" height="13" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4.2l4 4 4-4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>' +
            '<div class="nav-menu" role="menu">' + menu + '<a href="tools.html" class="nav-menu-all" role="menuitem">All analysis support</a></div></div>' +
            '<div class="nav-dropdown"><a class="nav-tab' + (active === 'evidence' ? ' active" aria-current="page' : '') + '" href="empirical_evidence.html" aria-haspopup="true">Empirical Evidence <svg class="caret" width="13" height="13" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4.2l4 4 4-4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>' +
            '<div class="nav-menu" role="menu"><a href="empirical_evidence.html#submit" role="menuitem">Submit Evidence<span>Add a paper that empirically validates a construct, instrument, or behavioral indicator.</span></a>' +
            '<a href="empirical_evidence.html" class="nav-menu-all" role="menuitem">All empirical evidence</a></div></div>' +
            tab('constructs', 'view_network.html?view=constructs', 'Constructs') +
            tab('behaviors', 'view_network.html?view=behaviors', 'Behavioral Indicators') +
            tab('measurements', 'view_network.html?view=measurements', 'Measurement Instruments') +
            '</nav></div>';
    }

    const el = document.getElementById('siteHeader');
    if (el) {
        render(el);
        // Pages that fill the viewport below the header (network_graph.html) size themselves from this.
        const setHeight = () => document.documentElement.style.setProperty('--site-header-h',
            Math.ceil(el.getBoundingClientRect().bottom + window.scrollY + (parseFloat(getComputedStyle(el).marginBottom) || 0)) + 'px');
        setHeight();
        window.addEventListener('resize', setHeight);
    }
})();
