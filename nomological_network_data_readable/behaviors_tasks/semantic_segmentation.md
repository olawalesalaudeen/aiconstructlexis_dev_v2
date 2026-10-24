# Semantic segmentation
**Type:** Behavior  
**Referenced in:** 11 papers  
**Also known as:** Object segmentation  

## State of the Field

**Space of definitions.** Most commonly, papers describe this behavior as classifying each pixel in an image into a predefined set of semantic categories, or assigning pixel-level labels to image regions corresponding to semantic categories. A smaller line of work uses an object-centric formulation, where the task is to generate pixel-level masks for specific objects within a visual input. Across these formulations, the observable output is either per-pixel semantic labels or pixel-level masks for target objects.

**Variants.** Papers use both semantic segmentation and object segmentation labels. Beyond the prevailing per-pixel labeling setup, one paper studies an object-centric variant that segments objects by matching them to logically inferred image regions and then performing object segmentation on extracted cropped image regions of the target objects. Other mentions place the task in cross-view adaptation across data distributions, in open-vocabulary settings, and one paper relates image restoration to it by using segmentation as a downstream task on COCO 2017 and ADE20K.

**Space of elicitation and scores.** Across papers, semantic segmentation is measured by four linked instruments, all used as dataset-based evaluations. ADE20K is the most frequently linked instrument, and papers also use Hypersim, MS-COCO, and ScanNet; the snippets describe ADE20K and Hypersim as semantic segmentation evaluations, COCO as semantic and instance segmentation, and ScanNet as a segmentation dataset with semantic classes for evaluation. Dataset evaluation is the prevailing operationalization in the linked work.

**What it is taken as evidence of.** Papers do not present multiple construct links here. The only linked construct is Semantic understanding, and one paper relates semantic segmentation to it by stating that segmentation evaluates a model's ability to assign semantic labels to each pixel, thereby assessing semantic understanding. No other construct framing is linked in the papers.

## Sources

**[EAGLE: Efficient Adaptive Geometry-based Learning in Cross-view Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/f84ceafb242f0de36f8c49452fbae6de-Paper-Conference.pdf)**
> The task of classifying each pixel in an image into a predefined set of semantic categories.

**[DeiSAM: Segment Anything with Deictic Prompting](https://proceedings.neurips.cc/paper_files/paper/2024/file/5ddcfaad1cb72ce6f1a365e8f1ecf791-Paper-Conference.pdf) (as "Object segmentation")**
> The action of generating pixel-level masks for specific objects within a visual input.

## Relationships

### Semantic segmentation →
- **ADE20K** (measurements) — *measured_by*
  > Evaluation on COCO val2017 (object detection & instance segmentation) and ADE20K (semantic segmentation). (Table 2)
  - [DreamClear: High-Capacity Real-World Image Restoration with Privacy-Safe Dataset Curation](https://proceedings.neurips.cc/paper_files/paper/2024/file/6452474601429509f3035dc81c233226-Paper-Conference.pdf)
- **MS-COCO** (measurements) — *measured_by*
  > In table 1, we evaluate the performance on DIODE [90] surface normal and depth estimation, COCO [57] semantic and instance segmentation, 3DPW [91] 3D human pose estimation, and do ImageNet-1K [79] kNN retrieval using predicted DINOv2 global tokens. (Section 3.3)
  - [4M-21: An Any-to-Any Vision Model for Tens of Tasks and Modalities](https://proceedings.neurips.cc/paper_files/paper/2024/file/71883294314045d60c900113a359934b-Paper-Conference.pdf)
- **Hypersim** (measurements) — *measured_by*
  > We perform multimodal transfers on NYUv2, Hypersim [75] semantic segmentation, and 3D object detection on ARKitScenes. (Section 4)
  - [4M-21: An Any-to-Any Vision Model for Tens of Tasks and Modalities](https://proceedings.neurips.cc/paper_files/paper/2024/file/71883294314045d60c900113a359934b-Paper-Conference.pdf)
- **ScanNet** (measurements) — *measured_by*
  > We conduct the experiments on the ScanNet [20] segmentation dataset which has 1,201 and 312 scenes for training and validation, respectively, with a total of 20 semantic classes for evaluation.
  - [Lexicon3D: Probing Visual Foundation Models for Complex 3D Scene Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/8c67fc501a50977947c5bebbc39ca8f6-Paper-Conference.pdf)

### Associated with
- **Semantic understanding** (constructs)
  > Segmentation evaluates the model’s ability to assign semantic labels to each pixel, assessing semantic understanding
  - [Lexicon3D: Probing Visual Foundation Models for Complex 3D Scene Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/8c67fc501a50977947c5bebbc39ca8f6-Paper-Conference.pdf)
- **Image restoration** (behaviors tasks)
  > “we assess the benefits of image restoration for downstream high-level vision tasks by conducting detection and segmentation experiments on the COCO 2017 [45] and ADE20K [94] datasets”
  - [DreamClear: High-Capacity Real-World Image Restoration with Privacy-Safe Dataset Curation](https://proceedings.neurips.cc/paper_files/paper/2024/file/6452474601429509f3035dc81c233226-Paper-Conference.pdf)
