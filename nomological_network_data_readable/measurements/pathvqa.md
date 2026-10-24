# PathVQA
**Type:** Measurement  
**Referenced in:** 8 papers  
**Also known as:** PATHVQA, Path-VQA  

## State of the Field

**What it is.** Most commonly, papers describe PathVQA as a medical or biomedical visual question answering dataset or benchmark centered on pathology images. The definitions mostly converge on that framing, while differing in emphasis: one says the pathology images are drawn from textbooks and online libraries, others say it tests a model's ability to answer questions about histopathology slides, and another says it targets interpretation of complex visual medical information.

**What it is claimed to measure.** Papers link PathVQA to 2 behavioral indicators and no constructs. The prevailing usage is to treat it as measuring medical visual question answering, with papers using it as a Med-VQA benchmark and reporting performance on it for medical VQA tasks; some papers use it more broadly to measure visual question answering, including statements that PathVQA and Q-VQA assess VQA performance. In these papers, its measurement claims stay within VQA-related behavioral indicators rather than extending to other constructs.

**Space of uses.** Papers usually position PathVQA as one dataset within a broader evaluation suite, most often alongside SLAKE and VQA-RAD, and in some cases with IU-Xray, OmniMedVQA, and Q-VQA. One paper includes PATHVQA for pathology when evaluating processing of text reports and medical images, and another groups Path-VQA with other medical visual interpretation tasks that require integrating visual data with clinical knowledge.

## Sources

**[HEMM: Holistic Evaluation of Multimodal Foundation Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b6e5dae3acb4cfdfe5928a6eff174ee-Paper-Datasets_and_Benchmarks_Track.pdf) (as "PATHVQA")**
> A medical visual question answering dataset based on pathology images from textbooks and online libraries.

**[MedTrinity-25M: A Large-scale Multimodal Dataset with Multigranular Annotations for Medicine](https://proceedings.iclr.cc/paper_files/paper/2025/file/11c483499c285f30daf832c17dc752bd-Paper-Conference.pdf)**
> A benchmark dataset for Visual Question Answering (VQA) focused on pathology images, testing a model's ability to interpret histopathology slides.

**[MDAgents: An Adaptive Collaboration of LLMs for Medical Decision-Making](https://proceedings.neurips.cc/paper_files/paper/2024/file/90d1fc07f46e31387978b88e7e057a31-Paper-Conference.pdf) (as "Path-VQA")**
> A visual question answering dataset focused on pathology images, testing a model's ability to interpret complex visual medical information.

## Relationships

### → PathVQA
- **Medical visual question answering** (behaviors tasks) — *measured_by*
  > We benchmark LLaVA-Tri on three biomedical Visual Question Answering (VQA) datasets, VQA-RAD (Lau et al., 2018a), SLAKE (Liu et al., 2021), and PathVQA (He et al., 2020a), to assess the efficacy of aligning the model using MedTrinity-25M. (Section 4.1)
  - [MedTrinity-25M: A Large-scale Multimodal Dataset with Multigranular Annotations for Medicine](https://proceedings.iclr.cc/paper_files/paper/2025/file/11c483499c285f30daf832c17dc752bd-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > PathVQA and Q-VQA assess VQA performance (Section 4.2)
  - [EAGLE: Expert-Guided Self-Enhancement for Preference Alignment in Pathology Large Vision-Language Model](https://aclanthology.org/2025.acl-long.711.pdf)
