# MVBench
**Type:** Measurement  
**Referenced in:** 32 papers  

## State of the Field

**What it is.** Across papers, the prevailing usage is a video or video-language understanding benchmark centered on temporal-sensitive tasks. Definitions most commonly describe nine core temporal tasks with 20 subtasks that cannot be solved using a single frame, while other papers describe it as a reorganized benchmark covering 20 challenging video understanding tasks, or as a multiple-choice QA benchmark with 4,000 question-answer pairs drawn from 11 public video benchmarks. A smaller line of work narrows attention to action-related subsets, including Action Antonym, Action Count, Action Sequence, Action Prediction, Action Localization, Fine-grained Action, and Unexpected Action, and one paper characterizes the benchmark as predominantly human-centric.

**What it is claimed to measure.** Papers link MVBench to four constructs and one behavioral indicator. The prevailing measurement claim is that it measures video understanding, while other papers use it to measure long video understanding and temporal reasoning, and a smaller line treats it as measuring multi-image reasoning. One paper also uses it to measure action localization through an Action Localization subtask, so the recorded measurement claims cover several targets, with video understanding appearing most often.

**Space of uses.** Papers usually position MVBench as one benchmark within broader evaluation suites for video models, commonly alongside VideoMME, EgoSchema, TempCompass, MLVU, and ActivityNet-QA. Some papers use the full benchmark for model comparison or transfer evaluation, while others use selected portions, such as five tasks or only the subtasks whose names contain Action. No measurement instrument is linked to it.

**Concerns raised.** The concerns that appear are about scope. One paper describes MVBench as predominantly human-centric, with humans and objects as the main agents and animal data accounting for only 1%, and another contrasts it with text-dominant multimodal document understanding by describing it as a vision-dominant video question answering benchmark.

## Sources

**[TOMATO: Assessing Visual Temporal Reasoning Capabilities in Multimodal Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/16ba99f25a235f1100a4014d71d34ad8-Paper-Conference.pdf)**
> A benchmark for visual temporal reasoning that defines nine core temporal tasks with 20 subtasks, designed to be unsolvable using a single frame.

## Relationships

### → MVBench
- **Video understanding** (constructs) — *measured_by*
  > MVBench [36] is designed to challenge LVLMs with video tasks that cannot be effectively resolved by single-frame reliance, featuring 4,000 QA pairs derived from 11 public video benchmarks. (Section 5.1)
  - [ShareGPT4Video: Improving Video Understanding and Generation with Better Captions](https://proceedings.neurips.cc/paper_files/paper/2024/file/22a7476e4fd36818777c47e666f61a41-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Temporal reasoning** (constructs) — *measured_by*
  > Results across tasks, including general video understanding (Video-MME), video temporal reasoning (MVBench, TempCompass), and long video understanding (MLVU, LongVideoBench, EgoSchema). (Table 2)
  - [VRoPE: Rotary Position Embedding for Video Large Language Models](https://aclanthology.org/2025.emnlp-main.731.pdf)
- **Action localization** (behaviors tasks) — *measured_by*
  > MVBench [29] is a recent video-language understanding benchmark that covers 20 challenging video tasks... TOPA Surprisingly excels in the Action Localization (AL) task
  - [TOPA: Extending Large Language Models for Video Understanding via Text-Only Pre-Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/0ae94013da7cd459402fd77874e09ee3-Paper-Conference.pdf)
- **Multi-image reasoning** (constructs) — *measured_by*
  > First, we select five multi-image benchmarks: MMMU (Yue et al., 2024), BLINK (Fu et al., 2024), Mantis (Jiang et al., 2024), NLVR2 (Suhr et al., 2018), and MVBench (Li et al., 2024c). (Section 4.1)
  - [MIA-DPO: Multi-Image Augmented Direct Preference Optimization For Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/557a20663907ed637c2807f608d5bec2-Paper-Conference.pdf)
