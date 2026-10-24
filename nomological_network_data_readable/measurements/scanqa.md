# ScanQA
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Across the cited definitions, the prevailing usage treats ScanQA as a benchmark dataset for question answering in 3D scenes, usually with questions grounded in objects within scans from ScanNet. Some papers describe it more specifically as an indoor 3D visual question answering dataset focused on spatial relationships, object properties, and complex indoor scenes, while another frames it more broadly as a multi-modal 3D scene dataset for spatial scene understanding with question-answer pairs produced through automated methods and human annotation. Papers also describe it as centered on ScanNet and associated with human annotations and template-based generation.

**What it is claimed to measure.** Papers use ScanQA to measure four constructs and two behavioral indicators. The most frequently linked constructs are 3D perception, 3D reasoning, 3D understanding, and vision-language reasoning, and the linked behavioral indicators are 3D question answering and visual question answering. The claims do not converge on one construct: papers report it as measuring several 3D and reasoning-oriented targets, including vision-language reasoning and visual question answering.

**Space of uses.** Papers usually place ScanQA in broader 3D evaluation suites rather than using it alone. SQA3D appears repeatedly alongside it, and other reported pairings include Scan2Cap, tasks from 3D-LLM, nuScenes VQA, and ALFRED. Within those setups, papers describe ScanQA as a general scene understanding task, a classic validation set for 3D spatial understanding, and one of the selected benchmarks for 3D evaluation.

## Sources

**[SPARTUN3D: Situated Spatial Understanding of 3D World in Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/b633e7052970b8f5aa1a69164d99e9e8-Paper-Conference.pdf)**
> A benchmark dataset for question answering in 3D scenes, where questions are grounded in objects within scans from the ScanNet dataset.

## Relationships

### → ScanQA
- **3D understanding** (constructs) — *measured_by*
  > on ScanQA and SQA3D, which do not require object referencing and grounding, we still achieve consistent performance enhancement, demonstrating improved overall 3D scene understanding and reasoning
  - [Chat-Scene: Bridging 3D Scene and Large Language Models with Object Identifiers](https://proceedings.neurips.cc/paper_files/paper/2024/file/cebbd24f1e50bcb63d015611fe0fe767-Paper-Conference.pdf)
- **Vision-language reasoning** (constructs) — *measured_by*
  > Evaluation of vision-language reasoning on ScanQA [5] and SQA3D [55] datasets.
  - [Lexicon3D: Probing Visual Foundation Models for Complex 3D Scene Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/8c67fc501a50977947c5bebbc39ca8f6-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > ...and both ScanQA [2] and SQA3D [38] for visual question answering.
  - [Chat-Scene: Bridging 3D Scene and Large Language Models with Object Identifiers](https://proceedings.neurips.cc/paper_files/paper/2024/file/cebbd24f1e50bcb63d015611fe0fe767-Paper-Conference.pdf)
- **3D perception** (constructs) — *measured_by*
  > For 3D evaluation, we select ScanQA (3), two tasks from 3D-LLM (16), i.e., 3D-assisted Dialogue and Task Decomposition, and also curate two new test set from nuScenes VQA (6) and ALFRED (48).
  - [LLaVA-Interleave: Tackling Multi-image, Video, and 3D in Large Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c9f95e9ec39fa5ad3d0a562b993b92aa-Paper-Conference.pdf)
- **3D question answering** (behaviors tasks) — *measured_by*
  > We evaluate the proposed cdViews on two widely used benchmarks of 3D-QA: ScanQA (Azuma et al., 2022) and SQA (Ma et al., 2022). (Section 1)
  - [3D Question Answering via only 2D Vision-Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ef/wang25ef.pdf)
