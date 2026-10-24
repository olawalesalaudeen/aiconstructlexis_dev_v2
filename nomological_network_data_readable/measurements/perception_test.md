# Perception Test
**Type:** Measurement  
**Referenced in:** 11 papers  
**Also known as:** PerceptionTest  

## State of the Field

**What it is.** Most definitions frame it as a benchmark or diagnostic for multimodal or video models, centered on visual perception over video sequences and often paired with reasoning. The prevailing description is a video perception or video understanding benchmark, while some papers describe it more specifically as a multiple-choice question answering dataset for perception-based reasoning, including object tracking and spatial awareness, or as an open-set benchmark from which action-related questions can be selected. Another strand presents it as a diagnostic spanning video, audio, and text, targeting skills such as memory, abstraction, physics, and semantics and reasoning types such as descriptive, explanatory, predictive, and counterfactual.

**What it is claimed to measure.** Papers link it to three constructs and no behavioral indicators. Its direct measurement links are to Long video understanding and Video understanding, so the measurement claims do not center on a single construct label. A separate related link connects it to Reasoning, which matches definitions that describe the benchmark as focusing on perception and reasoning skills.

**Space of uses.** Papers usually use it as part of broader evaluation suites, commonly alongside ActivityNet-QA, EgoSchema, NExT-QA, MVBench, and VideoMME, as well as several other video benchmarks. In those settings it is positioned as a comparison benchmark within multi-benchmark experiments. Some authors further restrict it to tagged subsets, for example by selecting action-related questions, and another usage repurposes it as a source dataset for action localization and other task repurposing.

## Sources

**[LongVILA: Scaling Long-Context Visual Language Models for Long Videos](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e163450c1ae3167832971e6da29f38d-Paper-Conference.pdf) (as "PerceptionTest")**
> A video perception benchmark used to assess visual understanding over video sequences.

**[Oryx MLLM: On-Demand Spatial-Temporal Understanding at Arbitrary Resolution](https://proceedings.iclr.cc/paper_files/paper/2025/file/d480a9c2164e76e40ae03076e9d5b6d8-Paper-Conference.pdf)**
> Perception Test (Patraucean et al., 2024) is a benchmark that focuses on the perception and reasoning skills of MLLMs.

## Relationships

### → Perception Test
- **Video understanding** (constructs) — *measured_by*
  > We evaluate our model on a comprehensive suite of video understanding benchmarks... as well as the multiple-choice benchmarks NExT-QA (Xiao et al., 2021), VLEP (Lei et al., 2020), TVQA (Lei et al., 2018), and Perception Test (P˘atr˘aucean et al., 2023).
  - [Unifying Specialized Visual Encoders for Video Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chung25a/chung25a.pdf)

### Associated with
- **Reasoning** (constructs)
  > The Perception test [45] focused on skills (memory, abstraction, physics, semantics) and types of reasoning (descriptive, explanatory, predictive, counterfactual) across video, audio, and text modalities. (Section 2)
  - [Animal-Bench: Benchmarking Multimodal Video Models for Animal-centric Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/8fa604a81e5a236e2f38e917109571a3-Paper-Conference.pdf)
