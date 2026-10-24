# 3D question answering
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** 3D scene VQA, 3D visual question answering  

## State of the Field

**Space of definitions.** Across the papers, it is most commonly described as answering natural language questions about 3D objects or scenes. Definitions agree on the question-answering core, but differ on the scene representation: some specify point clouds or 3D models, while others allow images or other modalities as the basis for the answer. A smaller framing broadens the task to 3D scene VQA, where the work explicitly includes captioning and grounding from multi-view images rather than answer generation alone.

**Variants.** Papers use several nearby names and settings for the same behavior. Some call it 3D scene VQA and study multi-view image inputs, with captioning and grounding treated as part of the task, while others use 3D visual question answering for questions grounded in a 3D scene represented by point clouds, images, or other modalities. One variant follows the same VQA format but is described as one that "cannot be solved using the given scene alone," marking a hypothetical-reasoning setting within 3D scenes.

**Space of elicitation and scores.** Papers link it to 4 measurement instruments: Human evaluation, LLM-as-a-judge, SQA, and ScanQA. The linked instruments mix answer scoring and benchmark evaluation: one paper says it uses "both human evaluators and GPT-4 to ascertain answer accuracy," and another evaluates 3D-QA on ScanQA and SQA.

**What it is taken as evidence of.** Papers connect it to 3 constructs, but not in a single way. One paper treats it as something by which 3D perception is measured, while other papers only report it as related to 3D understanding and to spatial reasoning, including use of 3D question answering as "a representative example" for 3D scene understanding tasks.

## Sources

**[LLMs Can Evolve Continually on Modality for $\mathbb{X}$-Modal Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/5942d10ae51b6bd07648e54df07ef9cd-Paper-Conference.pdf)**
> Answering questions about 3D objects or scenes from point-cloud or 3D model inputs.

**[LLaVA-Interleave: Tackling Multi-image, Video, and 3D in Large Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c9f95e9ec39fa5ad3d0a562b993b92aa-Paper-Conference.pdf) (as "3D scene VQA")**
> Answering questions about 3D scenes, including captioning and grounding from multi-view images.

**[Hypo3D: Exploring Hypothetical Reasoning in 3D](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mao25b/mao25b.pdf) (as "3D visual question answering")**
> The task of answering a natural language question based on the content of a 3D scene, which may be represented by point clouds, images, or other modalities.

## Relationships

### 3D question answering →
- **Human evaluation** (measurements) — *measured_by*
  > "we employ both human evaluators and GPT-4 to ascertain answer accuracy"
  - [MMScan: A Multi-Modal 3D Scene Dataset with Hierarchical Grounded Language Annotations](https://proceedings.neurips.cc/paper_files/paper/2024/file/5aed0d900297bd5593afc14ff452d4a8-Paper-Datasets_and_Benchmarks_Track.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > "we employ both human evaluators and GPT-4 to ascertain answer accuracy"
  - [MMScan: A Multi-Modal 3D Scene Dataset with Hierarchical Grounded Language Annotations](https://proceedings.neurips.cc/paper_files/paper/2024/file/5aed0d900297bd5593afc14ff452d4a8-Paper-Datasets_and_Benchmarks_Track.pdf)
- **ScanQA** (measurements) — *measured_by*
  > We evaluate the proposed cdViews on two widely used benchmarks of 3D-QA: ScanQA (Azuma et al., 2022) and SQA (Ma et al., 2022). (Section 1)
  - [3D Question Answering via only 2D Vision-Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ef/wang25ef.pdf)
- **SQA3D** (measurements) — *measured_by*
  > We evaluate the proposed cdViews on two widely used benchmarks of 3D-QA: ScanQA (Azuma et al., 2022) and SQA (Ma et al., 2022). (Section 1)
  - [3D Question Answering via only 2D Vision-Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ef/wang25ef.pdf)

### Associated with
- **3D understanding** (constructs)
  > In this work, we explore how to harness their potential to address 3D scene understanding tasks, using 3D question answering (3D-QA) as a representative example. (Abstract)
  - [3D Question Answering via only 2D Vision-Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ef/wang25ef.pdf)
- **Spatial reasoning** (constructs)
  > "all of these methods require computationally intensive 3D-language alignment using point cloud data for spatial reasoning"
  - [3D Question Answering via only 2D Vision-Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ef/wang25ef.pdf)
- **3D perception** (constructs)
  > “For 3D perception, we include 2 tasks: embodied VQA (dialogue and planning), and 3D scene VQA (captioning and grounding).”
  - [LLaVA-Interleave: Tackling Multi-image, Video, and 3D in Large Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c9f95e9ec39fa5ad3d0a562b993b92aa-Paper-Conference.pdf)
