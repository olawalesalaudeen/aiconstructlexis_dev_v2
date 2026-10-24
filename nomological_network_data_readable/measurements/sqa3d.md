# SQA3D
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Papers most commonly describe SQA3D as a situated 3D dataset or benchmark for situated question answering in 3D scenes. Some descriptions add that it is human-annotated and emphasizes the role of the "situation" in scene context; others specify that questions are posed from an embodied agent's perspective, that it contains over 33,000 question-answer pairs, and that it supports situated understanding in real-world scenes through situated question-answer pairs collected under imaginative situations.

**What it is claimed to measure.** Papers link SQA3D to two constructs, 3D understanding and vision-language reasoning, and to one behavioral indicator, situated question answering. These measurement claims are spread across multiple targets rather than centered on one: papers report 3D understanding as measured by SQA3D, explicitly evaluate vision-language reasoning on SQA3D, and present the task as "<Situation> <Question>" with phrase or single-word answers for situated question answering; the 3D understanding link is cited in language about using ScanQA and SQA3D "for visual question answering."

**Space of uses.** Across the papers, SQA3D is positioned as an evaluation dataset or benchmark. It is often used alongside ScanQA in visual question answering or vision-language reasoning evaluations, and one study pairs it with Spartun3D as two situated understanding datasets; one paper also states that SQA3D is evaluated with exact match accuracy (EM) and EM-R.

## Sources

**[SPARTUN3D: Situated Spatial Understanding of 3D World in Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/b633e7052970b8f5aa1a69164d99e9e8-Paper-Conference.pdf)**
> A human-annotated situated 3D dataset used for evaluating situated question answering capabilities.

## Relationships

### → SQA3D
- **Vision-language reasoning** (constructs) — *measured_by*
  > Evaluation of vision-language reasoning on ScanQA [5] and SQA3D [55] datasets.
  - [Lexicon3D: Probing Visual Foundation Models for Complex 3D Scene Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/8c67fc501a50977947c5bebbc39ca8f6-Paper-Conference.pdf)
- **Situated question answering** (behaviors tasks) — *measured_by*
  > Situated Question Answering (SQA3D): User: <Situation> <Question> The answer should be a phrase or a single word. (Table 12)
  - [Chat-Scene: Bridging 3D Scene and Large Language Models with Object Identifiers](https://proceedings.neurips.cc/paper_files/paper/2024/file/cebbd24f1e50bcb63d015611fe0fe767-Paper-Conference.pdf)
- **3D understanding** (constructs) — *measured_by*
  > on ScanQA and SQA3D, which do not require object referencing and grounding, we still achieve consistent performance enhancement, demonstrating improved overall 3D scene understanding and reasoning
  - [Chat-Scene: Bridging 3D Scene and Large Language Models with Object Identifiers](https://proceedings.neurips.cc/paper_files/paper/2024/file/cebbd24f1e50bcb63d015611fe0fe767-Paper-Conference.pdf)
- **3D question answering** (behaviors tasks) — *measured_by*
  > We evaluate the proposed cdViews on two widely used benchmarks of 3D-QA: ScanQA (Azuma et al., 2022) and SQA (Ma et al., 2022). (Section 1)
  - [3D Question Answering via only 2D Vision-Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ef/wang25ef.pdf)

### Associated with
- **Spatial reasoning** (constructs)
  > It encompasses a diverse range of question types, including object identification, spatial relationships, scene-level understanding, and general reasoning. (Section 5)
  - [3D Question Answering via only 2D Vision-Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ef/wang25ef.pdf)
