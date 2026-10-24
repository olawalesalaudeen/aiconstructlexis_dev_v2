# Lambada-OpenAI
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** The available definitions treat Lambada-OpenAI as a benchmark for language understanding, specifically for evaluating the ability to model long-range dependencies in text through a text completion task. The only direct format detail reported is a 0-shot setup, noted as "Lambada-OpenAI (0-shot)" in Parameters vs FLOPs: Scaling Laws for Optimal Sparsity for Mixture-of-Experts Language Models.

**What it is claimed to measure.** Across the linked uses, papers use Lambada-OpenAI to measure Language understanding task performance. Its reported measurement role is narrow rather than spread across many targets: it is linked to a single behavioral indicator, Language understanding task performance, and no constructs are linked to it; papers place it under "Language Understanding (LU)" when reporting this role.

**Space of uses.** In use, papers place Lambada-OpenAI alongside Hellaswag-0-shot, Winograd-3-shots, and WinoGrande-5-shots as part of a broader language understanding evaluation bundle. The observed configuration is 0-shot, and one paper labels the relevant result panel "(a) Language Understanding Lambada-OpenAI (0-shot)".

## Sources

**[Parameters vs FLOPs: Scaling Laws for Optimal Sparsity for Mixture-of-Experts Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/abnar25a/abnar25a.pdf)**
> A benchmark for evaluating language understanding, specifically the ability to model long-range dependencies in text through a text completion task.

## Relationships

### → Lambada-OpenAI
- **Natural language understanding** (constructs) — *measured_by*
  > Language Understanding (LU): Lambada-OpenAI [44], Hellaswag-0-shot [65], Winograd-3-shots [30], and WinoGrande-5-shots [54].
  - [Dataset Decomposition: Faster LLM Training with Variable Sequence Length Curriculum](https://proceedings.neurips.cc/paper_files/paper/2024/file/3f9bf45ea04c98ad7cb857f951f499e2-Paper-Conference.pdf)
