# SLAKE
**Type:** Measurement  
**Referenced in:** 13 papers  

## State of the Field

**What it is.** Across the surveyed work, the prevailing usage treats SLAKE as a medical visual question answering benchmark or dataset built from image and question-answer pairs. Several definitions further describe it as semantically labeled and knowledge-enhanced, and some add radiology images, physician annotation, region-level annotations of organs and diseases, or multiple imaging modalities such as CT and MRI across different pathologies and modalities. A smaller set of descriptions specifies versions and question formats: some papers describe English and Chinese versions, one evaluation keeps only the English portion with 641 images and 7,033 question-answer pairs, and others note open and closed questions or Yes/No and single-word answers.

**What it is claimed to measure.** In these papers, SLAKE is linked to 2 behavioral indicators and no constructs. The prevailing claim is that it measures Medical visual question answering, and a smaller but closely aligned usage treats it as measuring Visual question answering; overall, the reported links stay within VQA rather than spreading across other outcomes.

**Space of uses.** Papers most often position SLAKE as one benchmark within a bundle of medical VQA evaluations rather than as a standalone protocol. It is frequently used alongside VQA-RAD, and often with PathVQA, PMC-VQA, IU-Xray, or OmniMedVQA; some papers benchmark models on SLAKE to assess efficacy or report zero-shot performance on it. No measurement instrument is linked to it.

## Sources

**[MedTrinity-25M: A Large-scale Multimodal Dataset with Multigranular Annotations for Medicine](https://proceedings.iclr.cc/paper_files/paper/2025/file/11c483499c285f30daf832c17dc752bd-Paper-Conference.pdf)**
> A benchmark dataset for Visual Question Answering (VQA) in the medical domain, containing questions and answers for images across various pathologies and modalities.

## Relationships

### → SLAKE
- **Medical visual question answering** (behaviors tasks) — *measured_by*
  > This experiment is conducted on popular medical VQA benchmarks VQA-RAD and SLAKE. (Section 4.5)
  - [MoVA: Adapting Mixture of Vision Experts to Multimodal Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/bb0fea29f7aa6ede17e906ac6a225f34-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > We adopt three widely used VQA datasets for evaluation: ... (ii) SLAKE (Liu et al., 2021): A bilingual (English and Chinese) medical VQA dataset. (Section 4.2)
  - [VividMed: Vision Language Model with Versatile Visual Grounding for Medicine](https://aclanthology.org/2025.naacl-long.89.pdf)
