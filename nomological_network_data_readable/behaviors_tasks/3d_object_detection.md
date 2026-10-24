# 3D object detection
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** 3D detection  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats this as a task of identifying and localizing objects in 3D space. Success is described in terms of detecting objects and localizing them in 3D, with one definition explicitly requiring bounding boxes, while another narrows the formulation to detection from visual information across multiple images and presents it as a 3D perception task.

**Variants.** Papers use both the names "3D object detection" and "3D detection". The main variation is in setting: some descriptions are generic, while another focuses on multi-image understanding and says questions should include detailed camera pose information and specify the coordinate system for detected objects; another description places the task in ARKitScenes and treats it as a downstream transfer task.

**Space of elicitation and scores.** No measurement instrument is linked to this behavior in the papers.

**What it is taken as evidence of.** No construct is linked to this behavior in the papers.

## Sources

**[4M-21: An Any-to-Any Vision Model for Tens of Tasks and Modalities](https://proceedings.neurips.cc/paper_files/paper/2024/file/71883294314045d60c900113a359934b-Paper-Conference.pdf)**
> The task of identifying and localizing objects in 3D space with bounding boxes, evaluated as a downstream transfer task.

**[MMIU: Multimodal Multi-image Understanding for Evaluating Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5f92032278b1c70946e0b753068de51e-Paper-Conference.pdf) (as "3D detection")**
> The task of identifying and localizing objects within a 3D space based on visual information from multiple images.
