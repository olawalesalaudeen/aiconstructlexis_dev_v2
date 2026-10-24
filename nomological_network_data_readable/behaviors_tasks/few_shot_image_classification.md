# Few-shot image classification
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

**Space of definitions.** Most commonly, papers describe it as classifying images into categories when only a small number of examples, or support samples, are available for each category. A more specific formulation casts it as N-way K-shot classification, with N classes, K support samples, and Q query samples per class, where the goal is to classify query samples based on the support samples. Success is described through classification performance, including Top-1 accuracy.

**Variants.** The main setting that papers spell out is N-way K-shot, organized around support and query samples per class. Papers also refer to the task as few-shot recognition and, in one case, describe doing it with a fixed number of prompts. Evaluations are reported across downstream datasets.

**Space of elicitation and scores.** No measurement instrument is linked to it. When papers report results, they do so as classification performance, including Top-1 accuracy across downstream datasets and tabulated few-shot image classification results.

**What it is taken as evidence of.** No construct is linked to it as evidence of. One paper reports a positive correlation between few-shot classification performance and the capability of the LLM models, while papers otherwise do not tie it to a named construct.

## Sources

**[Weighted Multi-Prompt Learning with Description-free Large Language Model Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/284e7ef68bf3d8fa42abf45a39f29f5e-Paper-Conference.pdf)**
> The task of classifying images into categories after being trained on only a small number of examples (shots) for each category.

## Relationships

### Few-shot image classification →
- **Linear probing** (measurements) — *measured_by*
  > In this study, we explore the effectiveness of PathGen-CLIP in a few-shot setting, where the model undergoes fine-tuning through linear probing on its pre-extracted feature representations.
  - [PathGen-1.6M: 1.6 Million Pathology Image-text Pairs Generation through Multi-agent Collaboration](https://proceedings.iclr.cc/paper_files/paper/2025/file/ebf8764ecf0688cdd9fe1e5a9c525d0d-Paper-Conference.pdf)
