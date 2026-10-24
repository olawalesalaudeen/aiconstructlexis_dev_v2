# QVHighlights
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across papers, the prevailing usage treats QVHighlights as an evaluation benchmark for highlight detection, or more broadly for detecting moments and highlights in videos from natural language queries. Definitions describe it as requiring a model to identify all highlight moments and their saliency scores for a given query, and one relationship quote characterizes it as featuring over 10,000 YouTube videos across various themes. A smaller line of work treats it as a video dataset used for QA data creation, drawing on sparsely annotated captions and event pairs.

**What it is claimed to measure.** Papers link this instrument to 2 behavioral indicators and no constructs. The prevailing measurement claim is that QVHighlights measures Temporal grounding, with papers using it for temporal video grounding and describing it as aiding systems in identifying relevant moments and highlights in response to user queries. A smaller use links it to Referring expression understanding through experiments on the video grounding task.

**Space of uses.** Papers most often position QVHighlights as the evaluation benchmark itself, with one study stating that it uses QVHighlights "as the evaluation benchmark" and another reporting experiments on the widely used QVHighlights benchmark for video grounding. Other papers use it as a source benchmark or dataset, for grounding, highlight detection, temporal event matching, or QA data creation. No other measurement instrument is linked to it.

## Sources

**[TimeSuite: Improving MLLMs for Long Video Understanding via Grounded Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e8309c9ca683e11672e3dbcd4b87776-Paper-Conference.pdf)**
> An evaluation benchmark for the highlight detection task, requiring a model to identify all highlight moments and their saliency scores for a given query.

## Relationships

### → QVHighlights
- **Temporal grounding** (behaviors tasks) — *measured_by*
  > Task [TVG] Temporal Video Grounding Source QVHighlights [44] (Table 4)
  - [E.T. Bench: Towards Open-Ended Event-Level Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/38ace89a980ead30c6be2b46afc1a5bd-Paper-Datasets_and_Benchmarks_Track.pdf)
