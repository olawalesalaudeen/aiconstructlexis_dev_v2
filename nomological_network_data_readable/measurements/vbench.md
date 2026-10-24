# VBench
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Most commonly described as a benchmark leaderboard for evaluating and ranking text-to-video generation models, VBench is framed around multiple quality and semantic dimensions. Some papers use broader language and describe it as a comprehensive benchmark suite for video generative models used for comparison. One source snippet reports average scores over 16 metrics from quality and semantic dimensions.

**What it is claimed to measure.** Papers link it to 1 behavioral indicator and 1 construct. The prevailing use is to measure Video generation: several papers say they use VBench for video generation evaluation, including to assess visual generation capability. A smaller line of work reports it as measuring Fidelity, with VBench discussed alongside benchmark assessments of visual quality and text relevance.

**Space of uses.** Papers position it as a reporting and comparison benchmark, for example by showing performance on the VBench leaderboard and comparing models against competitors. It is also used operationally in generation workflows, including leveraging 946 GPT-augmented text prompts from VBench to generate videos. No other measurement instrument is linked to it.

## Sources

**[Data-Juicer Sandbox: A Feedback-Driven Suite for Multimodal Data-Model Co-development](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25bm/chen25bm.pdf)**
> A benchmark leaderboard used to evaluate and rank the performance of text-to-video generation models across multiple quality and semantic dimensions.

## Relationships

### → VBench
- **Video generation** (behaviors tasks) — *measured_by*
  > To evaluate the visual generation capability, we use... VBench (Huang et al., 2024) for video generation. (Section 4.1)
  - [VILA-U: a Unified Foundation Model Integrating Visual Understanding and Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/e9e140df6de01afb672cb859d203c307-Paper-Conference.pdf)
