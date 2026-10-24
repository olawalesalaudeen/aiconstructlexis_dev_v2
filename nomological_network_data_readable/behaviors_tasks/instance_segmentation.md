# Instance segmentation
**Type:** Behavior  
**Referenced in:** 10 papers  

## State of the Field

**Space of definitions.** The available papers treat it as detecting and delineating each distinct object instance in an image with a pixel-level mask. Success is described in task terms: finding each distinct object instance and producing its mask, and one abstract adds that a method can "provide additional instance segmentation masks."

**Variants.** The named variants are mainly evaluation settings rather than distinct sub-tasks: LVIS, described as a long-tail instance segmentation dataset, and COCO, where it is reported alongside other vision tasks. One paper also discusses it in an open-world context, and another places it within broader visual-perception task suites next to object detection and pose estimation.

**Space of elicitation and scores.** Papers link it to two measurement instruments, most commonly MS-COCO and also LVIS. COCO is used in several evaluations where instance segmentation appears as a fundamental or pure vision task, and LVIS is explicitly described as a long-tail instance segmentation dataset.

**What it is taken as evidence of.** Only one construct is linked, and papers frame that connection as related rather than as direct measurement: instance segmentation is related to Visual perception. One paper states that visual perception "covers a wide range of visual tasks, such as open-ended/closed-set object detection, instance segmentation, pose estimation, etc.", and no other construct framing appears in the linked relationships.

## Sources

**[Training-Free Open-Ended Object Detection and Segmentation via Attention as Prompts](https://proceedings.neurips.cc/paper_files/paper/2024/file/80f48ffa8022773973a4a5cec7cce19c-Paper-Conference.pdf)**
> The task of detecting and delineating each distinct object instance in an image with a pixel-level mask.

## Relationships

### Instance segmentation →
- **MS-COCO** (measurements) — *measured_by*
  > In Table 3, we compare the results of VisionLLM v2 with state-of-the-art methods on two fundamental vision tasks, i.e., object detection, and instance segmentation. (Section 4.3, referring to Table 3 which evaluates on COCO)
  - [VisionLLM v2: An End-to-End Generalist Multimodal Large Language Model for Hundreds of Vision-Language Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/81a60d18e010b27b36cd465c6604b915-Paper-Conference.pdf)
- **LVIS** (measurements) — *measured_by*
  > Experimental results on the long-tail instance segmentation dataset (LVIS) show that our method surpasses the previous open-ended method on the object detection task and can provide additional instance segmentation masks. (Abstract)
  - [Training-Free Open-Ended Object Detection and Segmentation via Attention as Prompts](https://proceedings.neurips.cc/paper_files/paper/2024/file/80f48ffa8022773973a4a5cec7cce19c-Paper-Conference.pdf)

### Associated with
- **Visual perception** (constructs)
  > "Visual Perception covers a wide range of visual tasks, such as open-ended/closed-set object detection, instance segmentation, pose estimation, etc."
  - [VisionLLM v2: An End-to-End Generalist Multimodal Large Language Model for Hundreds of Vision-Language Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/81a60d18e010b27b36cd465c6604b915-Paper-Conference.pdf)
