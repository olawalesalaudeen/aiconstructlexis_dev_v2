# Charades-STA
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Across the papers, the prevailing usage treats Charades-STA as a benchmark dataset for temporal grounding: localizing a video segment, or identifying the start and end timestamps of video content, from a natural language sentence. A smaller framing describes it as a temporal activity localization dataset, and one definition says it is used as a source for event-caption alignment and temporal video grounding. One paper summarizes it as "temporal activity localization via language query" (E.T. Bench: Towards Open-Ended Event-Level Video-Language Understanding).

**What it is claimed to measure.** Papers use Charades-STA to measure temporal grounding, the only linked behavioral indicator; no constructs are linked to it. The relationship evidence describes this as evaluating the ability to locate specific activities described in text, including moment retrieval with recall at IoU thresholds and tasks that identify start and end timestamps from a query sentence. In these links, claims converge on this single behavioral indicator rather than spreading across multiple constructs.

**Space of uses.** Papers position Charades-STA mainly as an evaluation benchmark or test set for temporal grounding and moment retrieval. One snippet also places it alongside QVHighlights when reporting zero-shot temporal localization capabilities, but no measurement instrument is linked to it. The described use is therefore as a direct benchmark for language-guided video localization.

## Sources

**[TimeSuite: Improving MLLMs for Long Video Understanding via Grounded Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e8309c9ca683e11672e3dbcd4b87776-Paper-Conference.pdf)**
> A benchmark dataset for the task of temporal grounding, which involves localizing a video segment described by a natural language sentence.

## Relationships

### → Charades-STA
- **Temporal grounding** (behaviors tasks) — *measured_by*
  > We utilize test set of Charades-STA (Gao et al., 2017) for the moment retrieval task and report the recall at IOU thresholds of 0.5 and 0.7.
  - [TRACE: Temporal Grounding Video LLM  via Causal Event Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/df027cf11469e746ef94d583f9f5537f-Paper-Conference.pdf)
