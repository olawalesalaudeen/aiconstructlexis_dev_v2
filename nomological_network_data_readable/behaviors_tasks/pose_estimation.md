# Pose estimation
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Keypoint detection  

## State of the Field

**Space of definitions.** Across the surveyed papers, the prevailing usage treats pose estimation as detecting or localizing specific points on an object in an image. The definitions agree on point localization as the core task, with one paper describing it as finding points on objects such as human or animal bodies to determine posture, and another using the broader label "Keypoint detection" for identifying and localizing specific points of objects; success is therefore framed as correct point localization, and in one definition also as determining posture.

**Variants.** Papers use both "Pose estimation" and "Keypoint detection" for this behavior. One paper places pose estimation among open-ended, cross-domain vision tasks, while another includes keypoint detection as one of the tasks in the LAMM dataset.

**Space of elicitation and scores.** Papers link pose estimation to one measurement instrument, MS-COCO, and one paper evaluates pose estimation on COCO. The same paper also states that it adopts UniPose as the decoder for this task.

**What it is taken as evidence of.** Only one construct is linked, and papers phrase that link as a related relationship rather than a measurement claim: pose estimation is related to Visual perception. The recorded wording treats Visual perception as covering a wide range of visual tasks, such as object detection, instance segmentation, and pose estimation, and no alternative construct framing is linked.

## Sources

**[VisionLLM v2: An End-to-End Generalist Multimodal Large Language Model for Hundreds of Vision-Language Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/81a60d18e010b27b36cd465c6604b915-Paper-Conference.pdf)**
> The task of detecting the keypoints of an object, such as a human or animal body, to determine its posture.

**[Adapt-$\infty$: Scalable Continual Multimodal Instruction Tuning via Dynamic Data Selection](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6610efd6c767f63343a4ab28505212e-Paper-Conference.pdf) (as "Keypoint detection")**
> The task of identifying and localizing specific key points of objects within an image.

## Relationships

### Pose estimation →
- **MS-COCO** (measurements) — *measured_by*
  > We evaluate the results on the four crucial visual perception tasks: instance segmentation (COCO), visual grounding (RefCOCO), pose estimation (COCO), and interactive segmentation (COCO using scribble). (Table 5)
  - [VisionLLM v2: An End-to-End Generalist Multimodal Large Language Model for Hundreds of Vision-Language Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/81a60d18e010b27b36cd465c6604b915-Paper-Conference.pdf)

### Associated with
- **Visual perception** (constructs)
  > "Visual Perception covers a wide range of visual tasks, such as open-ended/closed-set object detection, instance segmentation, pose estimation, etc."
  - [VisionLLM v2: An End-to-End Generalist Multimodal Large Language Model for Hundreds of Vision-Language Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/81a60d18e010b27b36cd465c6604b915-Paper-Conference.pdf)
