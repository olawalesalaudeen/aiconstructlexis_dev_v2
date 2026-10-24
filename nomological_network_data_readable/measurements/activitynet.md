# ActivityNet
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Across the papers here, ActivityNet is most commonly treated as a large-scale video dataset or benchmark for activity or human activity understanding. Some descriptions emphasize diverse web videos, while others use it as a source of time-aligned captions and denser event pairs for temporal reasoning question creation. It also appears as the basis for an activity generation task in InterleavedBench and as a benchmark for evaluating video-based multimodal models.

**What it is claimed to measure.** Papers use ActivityNet to measure two behavioral indicators, Action recognition and Natural language planning, and it is not linked to any construct. The reported measurement claims are limited to those two indicators: one paper evaluates action recognition on ActivityNet, and another uses activity generation from ActivityNet for natural language planning.

**Space of uses.** Papers position it both as a standalone benchmark and as a source dataset inside other evaluations. It is used alongside Something-Something V2, UCF-101, YouCook2, DAVIS, and QVHighlights, and appears in action recognition evaluation, conditional video generation, video understanding, and QA data creation from captions and event pairs. No measurement instrument is linked to it.

## Sources

**[Modality-Specialized Synergizers for Interleaved Vision-Language Generalists](https://proceedings.iclr.cc/paper_files/paper/2025/file/22bf0634985f4e6dbb1fb40e247d1478-Paper-Conference.pdf)**
> A dataset for activity understanding, used as a basis for the activity generation task in the InterleavedBench evaluation benchmark.

## Relationships

### → ActivityNet
- **Natural language planning** (behaviors tasks) — *measured_by*
  > activity generation from ActivityNet (Krishna et al., 2017) (Section 6.1).
  - [Modality-Specialized Synergizers for Interleaved Vision-Language Generalists](https://proceedings.iclr.cc/paper_files/paper/2025/file/22bf0634985f4e6dbb1fb40e247d1478-Paper-Conference.pdf)
- **Action recognition** (behaviors tasks) — *measured_by*
  > For the action recognition task, we incorporate two baselines: Adaframe (Wu et al., 2019) and MGSampler (Zhi et al., 2021), and evaluate them alongside VILAMP on three benchmarks: ActivityNet (Caba Heilbron et al., 2015), Something-Something V2 (Sth-V2) (Goyal et al., 2017), and UCF-101 (Soomro et al., 2012). (Section 5.4)
  - [Scaling Video-Language Models to 10K Frames via Hierarchical Differential Distillation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25b/cheng25b.pdf)
