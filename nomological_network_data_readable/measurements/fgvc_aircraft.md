# FGVC-Aircraft
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** FGVC Aircraft, FGVCAircraft  

## State of the Field

**What it is.** Across the surveyed work, FGVC-Aircraft is most commonly described as a fine-grained aircraft image classification dataset or benchmark. Definitions converge on aircraft model recognition, with papers variously describing it as focusing on aircraft categories and as containing images of 100 or over 100 different aircraft model variants. A smaller framing specifies the evaluation setting rather than the content, describing it as used for few-shot learning performance, while another definition says it is used to assess visual classification and explanation quality.

**What it is claimed to measure.** Papers link it to two behavioral indicators and no constructs. The reported measurement claims center on fine-grained visual recognition and image classification: one paper uses FGVC-Aircraft to measure image classification, describing it as part of "12 image recognition datasets" for "aircraft model classification," and another uses it to measure fine-grained visual recognition as one of several "popular FGVR datasets."

**Space of uses.** Papers typically include it within broader benchmark suites, for example alongside CUB-200, Stanford Dogs, OxfordPets, StanfordCars, and Flowers102. It is variously placed among fine-grained classification datasets, fine-grained image recognition datasets, "diverse downstream datasets from 5 domains," and broader image recognition evaluations.

## Sources

**[Weighted Multi-Prompt Learning with Description-free Large Language Model Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/284e7ef68bf3d8fa42abf45a39f29f5e-Paper-Conference.pdf) (as "FGVC Aircraft")**
> A dataset for fine-grained classification of aircraft models, used to evaluate few-shot learning performance.

**[Enhancing Cognition and Explainability of Multimodal Foundation Models with Self-Synthesized Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/d51cd79a85833b022841f7a2383b32d3-Paper-Conference.pdf)**
> A fine-grained aircraft classification benchmark used to assess visual classification and explanation quality.

**[Exploring Learning Complexity for Efficient Downstream Dataset Pruning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7e4aab3786a1f8e39e0f9b8dd9fa105-Paper-Conference.pdf) (as "FGVCAircraft")**
> A fine-grained visual classification dataset containing images of over 100 different aircraft model variants.

## Relationships

### → FGVC-Aircraft
- **Image classification** (behaviors tasks) — *measured_by*
  > We evaluate our method on 12 image recognition datasets. We use the ... FGVCAircraft (Maji et al., 2013) (aircraft model classification)... (Section 4)
  - [Follow-Up Differential Descriptions: Language Models Resolve Ambiguities for Image Classification](https://proceedings.iclr.cc/paper_files/paper/2024/file/17eca81974d2fd34f458916e0bfd820d-Paper-Conference.pdf)
- **Fine-grained visual recognition** (behaviors tasks) — *measured_by*
  > We conduct experiments on several popular FGVR datasets that include... and FGVC-Aircraft (Maji et al., 2013). (Section 4.1).
  - [Analyzing and Boosting the Power of Fine-Grained Visual Recognition for Multi-modal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/dfa2f1555d46b553827af4e1557f3c9a-Paper-Conference.pdf)
