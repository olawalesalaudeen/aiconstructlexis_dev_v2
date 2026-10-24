# PMC-VQA
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the surveyed papers, PMC-VQA is described as a medical or clinical visual question answering dataset. Definitions differ in emphasis: one treats it simply as a clinical VQA dataset mentioned for comparison, another calls it a multi-modal, multiple-choice VQA dataset derived from medical literature where models choose the correct answer from four options, and another describes a large-scale medical VQA dataset that evaluates deriving answers from both text and images in scientific publications.

**What it is claimed to measure.** Papers link PMC-VQA to 2 behavioral indicators and no constructs. The reported measurement use is concentrated on medical visual question answering and visual question answering: papers use it to measure those VQA-related behaviors, including as a medical VQA dataset in evaluation and under the task type Visual Question Answering. The available relationships do not extend beyond these VQA-related behavioral indicators.

**Space of uses.** In use, papers place PMC-VQA among other medical VQA evaluation datasets. One paper evaluates a method on PMC-VQA alongside SLAKE and VQA-RAD, another lists it under the task type Visual Question Answering, and another mentions it mainly to compare the scale of CLIMB-QA.

## Sources

**[CLIMB: Data Foundations for Large Scale Multimodal Clinical Foundation Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dai25b/dai25b.pdf)**
> A clinical visual question answering dataset mentioned for comparison to illustrate the scale of the CLIMB-QA dataset.

## Relationships

### → PMC-VQA
- **Medical visual question answering** (behaviors tasks) — *measured_by*
  > We evaluate our method on three medical VQA datasets: SLAKE (Liu et al., 2021), VQA-RAD (Lau et al., 2018), and PMC-VQA (Zhang et al., 2023). (Section 4.2.1)
  - [Guiding Medical Vision-Language Models with Diverse Visual Prompts: Framework Design and Comprehensive Exploration of Prompt Variations](https://aclanthology.org/2025.naacl-long.587.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > Task Type: Visual Question Answering (VQA), Dataset Name: PMC-VQA (Zhang et al., 2024a), Task Description: Medical VQA (Table 1)
  - [Dynamic Mixture of Curriculum LoRA Experts for Continual Multimodal Instruction Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ge25d/ge25d.pdf)
