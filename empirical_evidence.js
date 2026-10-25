// Empirical Evidence page: rows from empirical_evidence.json, plus a submission form that
// opens a prefilled GitHub issue. Names that match a Lexis entity link to its page.
(function () {
    'use strict';

    const DATA_URL = 'empirical_evidence.json';
    const NAMES_URL = 'nomological_network_data/graph.bundle.json';
    const ISSUE_URL = 'https://github.com/olawalesalaudeen/aiconstructlexis_dev.github.io/issues/new';
    const VIEWER_TYPE = { c: 'construct', m: 'measurement', b: 'behavior' };
    // Fixed vocabulary for "Type of analysis": the statistical method, not the validity claim.
    const ANALYSIS_TYPES = [
        'Correlation analysis', 'Exploratory factor analysis (incl. PCA)', 'Confirmatory factor analysis',
        'Item response theory', 'Multitrait-multimethod analysis',
        'Regression analysis', 'Reliability analysis', 'Measurement invariance testing',
        'Causal intervention', 'Other',
    ];
    const SHOW_MAX = 8;

    const $ = id => document.getElementById(id);
    const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    // lower-cased name -> { c|m|b: canonical name }
    const lexis = new Map();
    let rows = [];

    // Only an entity of the column's own kind counts ("Ethics" as a construct is not the ETHICS benchmark).
    function lookup(name, type) {
        const hit = lexis.get(String(name).trim().toLowerCase());
        return hit && hit[type] ? { name: hit[type], type: type } : null;
    }

    function entityHtml(name, type) {
        const e = lookup(name, type);
        if (!e) return '<span class="plain">' + esc(name) + '</span>';
        return '<a class="ent" href="view_network.html?node=' + encodeURIComponent(e.name) + '&type=' + VIEWER_TYPE[e.type] + '">' + esc(name) + '</a>';
    }

    function listHtml(items, type, key) {
        items = items || [];
        if (!items.length) return '<span class="hint">None listed</span>';
        const shown = items.slice(0, SHOW_MAX).map(n => entityHtml(n, type));
        let html = '<div class="ev-list">' + shown.join('<span class="sep">·</span>');
        if (items.length > SHOW_MAX) {
            html += '<span class="ev-rest" hidden><span class="sep">·</span>' + items.slice(SHOW_MAX).map(n => entityHtml(n, type)).join('<span class="sep">·</span>') + '</span>' +
                '<button type="button" class="ev-more" data-more="' + key + '">+' + (items.length - SHOW_MAX) + ' more</button>';
        }
        return html + '</div>';
    }

    function haystack(r) {
        return [r.title, r.venue, r.tldr, r.conclusion]
            .concat(r.constructs || [], r.instruments || [], r.behaviors || [], r.analysis_types || [])
            .join(' ').toLowerCase();
    }

    function render() {
        const q = $('evSearch').value.trim().toLowerCase();
        const a = $('evAnalysis').value;
        const shown = rows.filter(r => (!q || haystack(r).includes(q)) && (!a || (r.analysis_types || []).includes(a)));
        $('evSummary').innerHTML = rows.length
            ? '<strong>' + shown.length + '</strong> of ' + rows.length + ' paper' + (rows.length === 1 ? '' : 's') + ' shown.'
            : 'No papers yet. Be the first to <a href="#submit">submit one</a>.';
        $('evRows').innerHTML = shown.length ? shown.map((r, i) =>
            '<tr class="ev-main">' +
            '<td class="paper" rowspan="2"><a class="title" href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.title) + '</a>' +
            '<div class="meta">' + esc(r.venue || '') + '</div></td>' +
            '<td class="list">' + listHtml(r.constructs, 'c', i + 'c') + '</td>' +
            '<td class="list">' + listHtml(r.instruments, 'm', i + 'm') + '</td>' +
            '<td class="list">' + listHtml(r.behaviors, 'b', i + 'b') + '</td>' +
            '<td class="list"><div class="chips">' + (r.analysis_types || []).map(t => '<span class="tag">' + esc(t) + '</span>').join('') + '</div></td>' +
            '</tr><tr class="ev-text"><td colspan="4"><div class="ev-text-grid">' +
            '<div><span class="lbl">TLDR</span>' + esc(r.tldr) + '</div>' +
            '<div><span class="lbl">Conclusion</span>' + esc(r.conclusion) + '</div>' +
            '</div></td></tr>').join('')
            : (rows.length ? '<tr><td colspan="5" class="ev-empty">No papers match these filters.</td></tr>' : '');
    }

    $('evRows').addEventListener('click', e => {
        const b = e.target.closest('.ev-more');
        if (!b) return;
        b.previousElementSibling.hidden = false;
        b.remove();
    });

    // ---- Submission form ----

    function chipValues(field) {
        return Array.from(document.querySelectorAll('.chip-input[data-field="' + field + '"] .chip')).map(c => c.dataset.value);
    }

    function addChip(box, value) {
        value = value.trim();
        if (!value || chipValues(box.dataset.field).some(v => v.toLowerCase() === value.toLowerCase())) return;
        const known = lookup(value, box.dataset.type);
        const chip = document.createElement('span');
        chip.className = 'chip' + (known ? ' known' : '');
        chip.dataset.value = known ? known.name : value;
        chip.title = known ? 'In the Lexis' : 'Not in the Lexis yet; kept as typed';
        chip.innerHTML = esc(chip.dataset.value) + '<button type="button" aria-label="Remove ' + esc(chip.dataset.value) + '">×</button>';
        box.insertBefore(chip, box.querySelector('input'));
    }

    document.querySelectorAll('.chip-input').forEach(box => {
        const input = box.querySelector('input');
        const commit = () => { input.value.split(/[,;]/).forEach(v => addChip(box, v)); input.value = ''; };
        input.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); commit(); }
            else if (e.key === 'Backspace' && !input.value) { const last = box.querySelector('.chip:last-of-type'); if (last) last.remove(); }
        });
        // Picking a datalist suggestion fires input without a keypress.
        input.addEventListener('input', e => { if (e.inputType === 'insertReplacementText' || e.inputType == null) commit(); });
        input.addEventListener('blur', commit);
        box.addEventListener('click', e => {
            if (e.target.matches('.chip button')) e.target.parentElement.remove();
            else input.focus();
        });
    });

    $('fAnalysis').innerHTML = ANALYSIS_TYPES.map(t =>
        '<label class="venue-chip"><input type="checkbox" value="' + esc(t) + '">' + esc(t) + '</label>').join('');

    function readForm() {
        const analysis = Array.from($('fAnalysis').querySelectorAll('input:checked')).map(i => i.value);
        return {
            title: $('fTitle').value.trim(),
            venue: $('fVenue').value.trim(),
            url: $('fUrl').value.trim(),
            constructs: chipValues('constructs'),
            instruments: chipValues('instruments'),
            behaviors: chipValues('behaviors'),
            analysis_types: analysis,
            tldr: $('fTldr').value.trim(),
            conclusion: $('fConclusion').value.trim(),
            submitted_by: $('fName').value.trim(),
        };
    }

    function problems(r) {
        const out = [];
        if (!r.title) out.push('paper title');
        if (!/^https?:\/\/\S+\.\S+/.test(r.url)) out.push('a link starting with http');
        if (!r.constructs.length && !r.instruments.length && !r.behaviors.length) out.push('at least one construct, instrument, or behavioral indicator');
        if (!r.analysis_types.length) out.push('type of analysis');
        if (!r.tldr) out.push('TLDR');
        if (!r.conclusion) out.push('conclusion');
        return out;
    }

    function entryText(r) {
        const line = (k, v) => '**' + k + ':** ' + (Array.isArray(v) ? (v.join('; ') || 'none') : (v || 'not given'));
        return [
            line('Paper', r.title), line('Link', r.url), line('Venue', r.venue),
            line('Constructs', r.constructs), line('Instruments', r.instruments), line('Behavioral indicators', r.behaviors),
            line('Type of analysis', r.analysis_types), '', '**TLDR:** ' + r.tldr, '', '**Conclusion:** ' + r.conclusion,
            '', line('Submitted by', r.submitted_by), '',
            '<details><summary>Row for empirical_evidence.json</summary>', '', '```json',
            JSON.stringify(r, null, 2), '```', '</details>',
        ].join('\n');
    }

    function message(text, err) { $('fMsg').textContent = text; $('fMsg').className = 'form-msg' + (err ? ' err' : ''); }

    function checked() {
        const r = readForm();
        const miss = problems(r);
        if (miss.length) { message('Please add: ' + miss.join(', ') + '.', true); return null; }
        return r;
    }

    // GitHub rejects URLs much past ~8k characters with a 500, so the prefilled-issue URL is
    // kept under a safe budget by truncating the long free-text fields when an entry is big.
    const URL_MAX = 6000;
    const TRUNC = ' (truncated — please paste the rest after the issue opens)';
    function issueUrlFor(r) {
        const build = x => ISSUE_URL + '?labels=' + encodeURIComponent('empirical-evidence') +
            '&title=' + encodeURIComponent('Empirical evidence: ' + x.title) + '&body=' + encodeURIComponent(entryText(x));
        let url = build(r);
        if (url.length <= URL_MAX) return { url, truncated: false };
        const t = Object.assign({}, r);
        const cut = (s, keep) => s.length > keep ? s.slice(0, keep).trimEnd() + TRUNC : s;
        for (const keep of [0.8, 0.6, 0.4, 0.2, 0]) {
            ['tldr', 'conclusion'].forEach(k => { t[k] = cut(r[k], Math.floor(r[k].length * keep)); });
            url = build(t);
            if (url.length <= URL_MAX) return { url, truncated: true };
        }
        // Still too long (a very long title, or very many names): trim the title, then as a last
        // resort the URL itself, never cutting inside a %XX escape.
        t.title = cut(r.title, 120);
        url = build(t);
        if (url.length > URL_MAX) url = url.slice(0, URL_MAX).replace(/%[0-9A-Fa-f]?$/, '');
        return { url, truncated: true };
    }

    $('evForm').addEventListener('submit', e => {
        e.preventDefault();
        message('Currently not accepting submissions while in demo mode.');
        if (true) return; // demo mode: submissions disabled for now
        e.preventDefault();
        const r = checked();
        if (!r) return;
        const got = issueUrlFor(r);
        const note = got.truncated ? ' The entry was too long to prefill in full, so the long text fields are truncated; use "Copy entry" and paste the full text into the issue.' : '';
        const w = window.open(got.url, '_blank');
        if (w) {
            try { w.opener = null; } catch (_) { /* already navigated */ }
            message('Opened a prefilled GitHub issue in a new tab. Press "Submit new issue" there to send it.' + note);
        } else {
            // The browser blocked the new tab; hand over the link instead.
            $('fMsg').className = 'form-msg';
            $('fMsg').innerHTML = 'Your browser blocked the new tab. <a href="' + esc(got.url) + '" target="_blank" rel="noopener">Open the prefilled GitHub issue</a> and press "Submit new issue" there.' + esc(note);
        }
    });

    $('fCopy').addEventListener('click', () => {
        const r = checked();
        if (!r) return;
        navigator.clipboard.writeText(entryText(r))
            .then(() => message('Copied the entry to your clipboard.'))
            .catch(() => message('Could not copy automatically; your browser blocked clipboard access.', true));
    });

    $('evForm').addEventListener('reset', () => {
        document.querySelectorAll('.chip-input .chip').forEach(c => c.remove());
        message('');
    });

    // ---- Load ----

    const searchBox = $('evSearch');
    // ?q= prefills the search (entity pages link here with the paper title).
    try { searchBox.value = new URLSearchParams(location.search).get('q') || ''; } catch (e) { /* no query */ }
    searchBox.addEventListener('input', render);
    $('evAnalysis').addEventListener('change', render);

    // Entity names and aliases for the datalists and the "In the Lexis" chips, from the graph
    // bundle. Fetched after the table has rendered; if it fails, names simply stay unlinked and
    // submissions are kept as typed.
    function loadNames() {
        fetch(NAMES_URL).then(r => r.ok ? r.json() : null).then(bundle => {
            if (!bundle || !bundle.nodes) return;
            const TYPE_KEY = { construct: 'c', measurement: 'm', behavior: 'b' };
            const dl = { c: [], m: [], b: [] };
            const put = (name, t, canonical) => {
                const k = String(name).trim().toLowerCase();
                if (!k) return;
                if (!lexis.has(k)) lexis.set(k, {});
                const e = lexis.get(k);
                if (!(t in e)) e[t] = canonical; // canonical names win over aliases
            };
            bundle.nodes.forEach(n => { const t = TYPE_KEY[n.type]; if (!t) return; put(n.name, t, n.name); dl[t].push(n.name); });
            bundle.nodes.forEach(n => { const t = TYPE_KEY[n.type]; if (!t) return; (n.names || []).forEach(a => put(a, t, n.name)); });
            ['c', 'm', 'b'].forEach(t => {
                $('dl' + t.toUpperCase()).innerHTML = dl[t].sort((x, y) => x.localeCompare(y)).map(n => '<option value="' + esc(n) + '">').join('');
            });
            if (rows.length) render(); // names in the table now link to their entity pages
        }).catch(() => { /* names are a nicety; the page works without them */ });
    }

    fetch(DATA_URL).then(r => { if (!r.ok) throw new Error(DATA_URL + ' ' + r.status); return r.json(); }).then(data => {
        rows = (data.rows || []).slice().sort((x, y) => (y.year || 0) - (x.year || 0) || String(x.title).localeCompare(String(y.title)));
        rows.forEach(r => (r.analysis_types || []).forEach(t => {
            if (!ANALYSIS_TYPES.includes(t)) console.warn('empirical_evidence.json: unknown analysis type "' + t + '" in "' + r.title + '"');
        }));
        const used = new Set(rows.flatMap(r => r.analysis_types || []));
        $('evAnalysis').innerHTML = '<option value="">All</option>' + ANALYSIS_TYPES.filter(t => used.has(t)).map(t => '<option>' + esc(t) + '</option>').join('');
        render();
        // The table fills in after load and pushes the form down, so redo the #submit jump.
        if (location.hash === '#submit') $('submit').scrollIntoView();
    }).catch(err => {
        $('evSummary').textContent = 'The papers could not be loaded (' + err.message + '). Reload the page to try again.';
    }).finally(loadNames);
})();
