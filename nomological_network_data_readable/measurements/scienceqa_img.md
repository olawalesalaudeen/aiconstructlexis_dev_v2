# ScienceQA-IMG
**Type:** Measurement  
**Referenced in:** 10 papers  
**Also known as:** SciQA-IMG, SQA-I, SQAI  

## State of the Field

**What it is.** Across the surveyed papers, the prevailing usage is as a multimodal science question answering benchmark with image-based or visual context. Definitions vary slightly: some describe ScienceQA-IMG as including images and requiring reasoning over both visual and textual context, some call SciQA-IMG a science question answering dataset with image-based questions assessing scientific reasoning from visual content, and another paper treats SQA-I as the image-based subset of the ScienceQA benchmark. A smaller line of description refers to SQAI as a benchmark for multimodal reasoning on science-related questions, and one paper places ScienceQA-IMG among "scientific problem benchmarks".

**What it is claimed to measure.** Papers link this instrument to 2 constructs and 1 behavioral indicator. The named uses are to measure Fine-grained visual understanding and Language bias, and to measure the behavioral indicator Visual question answering. These claims do not converge on one target: one paper uses zero-shot performance on different splits of ScienceQA-IMG to report alleviating language bias, while others place it in evaluations of fine-grained visual understanding or visual question answering.

**Space of uses.** Papers commonly include it in broader vision-language evaluation suites, describing it as one of several mainstream or widely adopted VLM benchmarks and as one of the vision-language tasks used for comparative evaluation. One study reports accuracy for SciQA-IMG across different resolutions and selects it as a reference task for low-resolution needs. No measurement instrument is linked to it.

## Sources

**[SEA: Supervised Embedding Alignment for Token-Level Visual-Textual Integration in MLLMs](https://aclanthology.org/2025.emnlp-main.55.pdf)**
> A multimodal science question answering benchmark that includes questions with visual context from images.

**[Task-Aware Resolution Optimization for Visual Large Language Models](https://aclanthology.org/2025.emnlp-main.795.pdf) (as "SciQA-IMG")**
> Science Question Answering dataset with image-based questions assessing scientific reasoning from visual content.

**[Cambrian-1: A Fully Open, Vision-Centric Exploration of Multimodal LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/9ee3a664ccfeabc0da16ac6f1f1cfe59-Paper-Conference.pdf) (as "SQA-I")**
> The image-based subset of the ScienceQA benchmark, which involves multimodal reasoning for science question answering.

**[Seeing the Image: Prioritizing Visual Correlation by Contrastive Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/37294f033582ac0064bf90fa557c2573-Paper-Conference.pdf) (as "SQAI")**
> A science question answering benchmark used to evaluate multimodal reasoning on science-related questions.

## Relationships

### → ScienceQA-IMG
- **Language bias** (constructs) — *measured_by*
  > Zero-shot performance of different VLMs on ScienceQA-IMG dataset in different split. MMICL outperforms other VLMs by successfully alleviating language bias. (Table 5)
  - [MMICL: Empowering Vision-language Model with Multi-Modal In-Context Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/41128e5b3a7622da5b17588757599077-Paper-Conference.pdf)
- **Visual understanding** (constructs) — *measured_by*
  > TinyGroundingGPT-3B demonstrates superior image understanding capabilities on the VQAv2, GQA, SQA, and POPE benchmarks
  - [Advancing Fine-Grained Visual Understanding with Multi-Scale Alignment in Multi-Modal Models](https://aclanthology.org/2025.emnlp-main.721.pdf)
