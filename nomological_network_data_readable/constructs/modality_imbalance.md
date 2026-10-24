# Modality imbalance
**Type:** Construct  
**Referenced in:** 2 papers  

## State of the Field

A phenomenon in multimodal learning where the relative importance of and reliance on different modalities (e.g., text vs. vision) varies by task, potentially causing one modality to dominate the learning process and lead to unbalanced updates.

## Sources

**[Dynamic Mixture of Curriculum LoRA Experts for Continual Multimodal Instruction Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ge25d/ge25d.pdf)**
> A phenomenon in multimodal learning where the relative importance of and reliance on different modalities (e.g., text vs. vision) varies by task, potentially causing one modality to dominate the learning process and lead to unbalanced updates.

## Relationships

### Associated with
- **Easy-to-hard generalization** (constructs)
  > We observe that current models can S2H generalize on text – when trained to read short sequences from small LaTeX-formatted tables, the models can read longer paths from larger tables, also provided in LaTeX code. However, they fail to length-generalize on images. To address the generalization gap and imbalanced learning of different modalities, our goal is to transfer the generalization behavior from text to image modality. (Figure 1)
  - [Generalizing from SIMPLE to HARD Visual Reasoning: Can We Mitigate Modality Imbalance in VLMs?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/park25j/park25j.pdf)
