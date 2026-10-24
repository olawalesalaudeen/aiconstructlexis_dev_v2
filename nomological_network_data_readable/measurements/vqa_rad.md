# VQA-RAD
**Type:** Measurement  
**Referenced in:** 16 papers  
**Also known as:** Rad-VQA  

## State of the Field

**What it is.** Across the surveyed papers, VQA-RAD is most commonly described as a radiology-focused medical visual question answering benchmark: radiology images paired with clinician-authored questions and answers, used to evaluate how models answer questions about medical scans or clinical images. Most descriptions mention open-ended and closed-ended answers, though one definition refers to open-ended and multiple-choice evaluation and one paper uses the name Rad-VQA. Papers do not describe its contents identically: some report 315 images and 2,248 QA pairs, while others report 315 images and 3,515 clinician-authored QA pairs; one paper additionally says imaging reports were generated from the QA pairs.

**What it is claimed to measure.** Papers use VQA-RAD to measure 2 behavioral indicators and link it to no constructs. The prevailing usage is to measure Medical visual question answering, with a smaller line of work using it for Visual question answering. Overall, papers present it as an evaluation benchmark for model performance on medical VQA tasks rather than as a measure of any named construct.

**Space of uses.** Papers usually use VQA-RAD as one benchmark within multi-dataset medical VQA evaluations, most often alongside SLAKE and often with PathVQA; some also pair it with PMC-VQA or OmniMedVQA. They use it for benchmark comparisons, zero-shot evaluation, and reporting open and closed metrics, and one paper combines it with LLaVA-Med data for experiments.

## Sources

**[MedTrinity-25M: A Large-scale Multimodal Dataset with Multigranular Annotations for Medicine](https://proceedings.iclr.cc/paper_files/paper/2025/file/11c483499c285f30daf832c17dc752bd-Paper-Conference.pdf)**
> A benchmark dataset for Visual Question Answering (VQA) based on radiology images, used to evaluate a model's ability to answer questions about medical scans.

**[HSCR: Hierarchical Self-Contrastive Rewarding for Aligning Medical Vision Language Models](https://aclanthology.org/2025.acl-long.679.pdf) (as "Rad-VQA")**
> A benchmark dataset for medical visual question answering, used to evaluate model performance in both open-ended and closed-ended settings.

## Relationships

### → VQA-RAD
- **Medical visual question answering** (behaviors tasks) — *measured_by*
  > This experiment is conducted on popular medical VQA benchmarks VQA-RAD and SLAKE. (Section 4.5)
  - [MoVA: Adapting Mixture of Vision Experts to Multimodal Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/bb0fea29f7aa6ede17e906ac6a225f34-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > We adopt three widely used VQA datasets for evaluation: (i) VQA-RAD (Lau et al., 2018): A radiology VQA dataset comprising 315 images and 2,248 QA pairs. (Section 4.2)
  - [VividMed: Vision Language Model with Versatile Visual Grounding for Medicine](https://aclanthology.org/2025.naacl-long.89.pdf)
