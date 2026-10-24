# AI Construct Lexis — site

Static site for the AI Construct Lexis: the constructs, behavioral indicators,
and measurement instruments extracted from published LLM papers, the
relationships claimed among them, and analysis-support tools built on those
claims. Plain HTML/CSS/JS, no build step; deployable as-is on GitHub Pages.

## Pages

| Page | What it does |
| --- | --- |
| `view_network.html` | Home and entity explorer. Lists constructs / behavioral indicators / measurement instruments (`?view=constructs\|behaviors\|measurements`), full-text search over names and aliases, and per-entity pages (`?node=NAME&type=TYPE`) with definitions, relationships, and the State of the Field summary. |
| `network_graph.html` | Interactive Network (sigma.js). Tiers (50 most cited / 150 / all), search with multi-select, paper-count threshold, edge papers panel. Deep links: `?sel=Name,Name2`, `?edge=A,B,type`, `?show=all`, `?node=NAME&type=TYPE`. |
| `tools.html` | Analysis Support hub: confirmatory analysis, instrument overlap and separation, instrument profile, claim checker (`tools_*.html`, all sharing `tools.js`). |
| `empirical_evidence.html` | Papers with empirical validity evidence; submissions open a prefilled GitHub issue. |
| `index.html` | Redirect to `view_network.html`. |

## Data

Everything the site reads lives under `nomological_network_data/`, written by
the pipeline's `export_to_existing_site.py`:

- `graph.bundle.json` — every visible entity (name, aliases, type, paper
  count, summary definition) plus the vote-aggregated edges. This is the only
  payload the explorer and the graph load up front.
- `constructs/`, `measurements/`, `behaviors_tasks/` — one JSON per entity
  (definitions, relationships with evidence quotes, characterization).
  Fetched on demand when an entity page opens. Filenames are
  `slugify(canonical_name)` with `+` spelled out as `_plus_`
  (`HumanEval+` → `humaneval_plus.json`).
- `constructs/measurements/behaviors_tasks .bundle.json` — one-file
  concatenations of the per-entity records (byte-identical content). Local
  build artifacts of the export: no page reads them, so they stay out of
  the repo (gitignored).
- `paper_urls.json` — paper title → PDF link, loaded on first use.
- `index.json` — per-type filename lists.
- `analysis.bundle.json`, `analysis_evidence.json` — inputs for the analysis
  tools.
- `nomological_network_data_readable/` — human-readable Markdown mirror,
  shown by the "Full Config" toggle on entity pages.

`view_network_config.json` sets the minimum-papers thresholds and floors;
`analysis_config.json` lists method-like instruments the tools leave out
(matched against canonical names and aliases).

## Run locally

```bash
python3 -m http.server 8781 --bind 127.0.0.1 --directory .
```

Then open <http://127.0.0.1:8781/>. Any static file server works; the site
uses only relative paths.

## Conventions

- Local CSS/JS links carry a `?v=` stamp; bump it when changing those files so
  GitHub Pages caches refresh together.
- Papers exports are `title,venue,link` CSV. The site never generates BibTeX.
- External dependencies (sigma.js, graphology, marked) are version-pinned CDN
  scripts; `marked` loads lazily on first Full Config open.
