# Object detection
**Type:** Behavior  
**Referenced in:** 28 papers  
**Also known as:** Tool detection, Face detection  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats object detection as identifying and localizing objects in an image by outputting bounding boxes. Some definitions add that the objects come from a predefined set of categories and that outputs include class labels, while a smaller line of work frames it as predicting object categories and boxes, including oriented boxes in remote sensing imagery, or as prioritizing proper object detection within visual input during multimodal question answering. Papers are consistent that localization is central, most commonly through returned bounding box coordinates.

**Variants.** Papers study several variants and names for this behavior. Besides general object detection, they mention 2D detection and remote-sensing settings with oriented boxes; more specific versions include tool detection, defined as identifying and localizing surgical tools in an image or video frame, and face detection, defined as detecting human faces and returning bounding boxes. One source also treats object detection as part of answering a multimodal question, where the model must prioritize proper detection within the visual input.

**Space of elicitation and scores.** Papers link object detection to 2 measurement instruments, most often MS-COCO and also PASCAL VOC. MS-COCO is used for detection performance checks and comparisons across pure vision tasks, while PASCAL VOC is used with recall and precision reported at an IoU threshold of 0.5. Both appear as evaluation benchmarks for the task.

**What it is taken as evidence of.** Papers link object detection to 4 constructs, and the most common framing is that it is related to visual perception. Other papers relate it to visual recognition and visual grounding, and one paper claims a causal relationship from object detection to task interference, stating that learning instance-level perception such as object detection alongside logical reasoning may lead to interference. Taken together, papers do not settle on a single construct that object detection reflects; they connect it to several constructs through related links, with one causal claim.

## Sources

**[Mitigating Hallucination in Large Multi-Modal Models via Robust Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/fed9263d7f1086e735904ff690527a53-Paper-Conference.pdf)**
> The task of identifying and localizing objects within an image by outputting bounding box coordinates.

**[Recognize Any Surgical Object: Unleashing the Power of Weakly-Supervised Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/53d3f45797970d323bd8a0d379c525aa-Paper-Conference.pdf) (as "Tool detection")**
> The task of identifying and localizing surgical tools within an image or video frame.

**[Multi-modal Agent Tuning: Building a VLM-Driven Agent for Efficient Tool Usage](https://proceedings.iclr.cc/paper_files/paper/2025/file/238747e153a84f50b43fd50fa8504f33-Paper-Conference.pdf) (as "Face detection")**
> Detecting human faces in images and returning their bounding boxes.

## Relationships

### Object detection →
- **MS-COCO** (measurements) — *measured_by*
  > In Table 3, we compare the results of VisionLLM v2 with state-of-the-art methods on two fundamental vision tasks, i.e., object detection, and instance segmentation. (Section 4.3, referring to Table 3 which evaluates on COCO)
  - [VisionLLM v2: An End-to-End Generalist Multimodal Large Language Model for Hundreds of Vision-Language Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/81a60d18e010b27b36cd465c6604b915-Paper-Conference.pdf)
- **Task interference** (constructs) — *causes*
  > simultaneously learning to acquire knowledge at distinct granularities, such as the instance-level perception (e.g., object detection) and logical reasoning (e.g., VQA), may lead to significant interference. (Section 1)
  - [Octavius: Mitigating Task Interference in MLLMs via LoRA-MoE](https://proceedings.iclr.cc/paper_files/paper/2024/file/6b3b238c5786536dc9f835760e2dba02-Paper-Conference.pdf)
- **PASCAL VOC** (measurements) — *measured_by*
  > We report the recall and precision at an Intersection over Union (IoU) threshold of 0.5 on PASCAL VOC (Section 3.1.1)
  - [Octavius: Mitigating Task Interference in MLLMs via LoRA-MoE](https://proceedings.iclr.cc/paper_files/paper/2024/file/6b3b238c5786536dc9f835760e2dba02-Paper-Conference.pdf)
- **Emotion analysis** (behaviors tasks) — *causes*
  > The model's ability to detect faces is crucial for subsequent emotion recognition, as it allows the system to focus on the relevant regions of interest and extract facial features effectively.
  - [Emotion-LLaMA: Multimodal Emotion Recognition and Reasoning with Instruction Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/c7f43ada17acc234f568dc66da527418-Paper-Conference.pdf)

### Associated with
- **Visual perception** (constructs)
  > SKETCHPAD can also use specialist vision models during the sketching process (e.g., draw bounding boxes with object detection models... to further enhance visual perception and reasoning.
  - [Visual Sketchpad: Sketching as a Visual Chain of Thought for Multimodal Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb82011040977c7712409fbdb5456647-Paper-Conference.pdf)
- **Visual grounding** (constructs)
  > This demonstrates that object detection and visual grounding can benefit from each other. (Section 4.3)
  - [Lumen: Unleashing Versatile Vision-Centric Capabilities of Large Multimodal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/946ecab300b0695fe24b53a92e632935-Paper-Conference.pdf)
- **Visual recognition** (constructs)
  > Prior MLLMs [1, 2, 21] solve traditional visual recognition tasks (e.g., object detection, instance segmentation) in a sequential generation paradigm. (Section 3.1)
  - [Octopus: A Multi-modal LLM with Parallel Recognition and Sequential Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a3eadeebbc9eecd621086f6978865a85-Paper-Conference.pdf)
- **Image restoration** (behaviors tasks)
  > “we assess the benefits of image restoration for downstream high-level vision tasks by conducting detection and segmentation experiments on the COCO 2017 [45] and ADE20K [94] datasets”
  - [DreamClear: High-Capacity Real-World Image Restoration with Privacy-Safe Dataset Curation](https://proceedings.neurips.cc/paper_files/paper/2024/file/6452474601429509f3035dc81c233226-Paper-Conference.pdf)
- **Referring expression understanding** (behaviors tasks)
  > It also differs from object detection (Girshick, 2015), which uses predefined categories instead of natural language expressions.
  - [LLM-wrapper: Black-Box Semantic-Aware Adaptation of Vision-Language Models for Referring Expression Comprehension](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb8f2d4e90018c0fae060dff09a91ce3-Paper-Conference.pdf)
