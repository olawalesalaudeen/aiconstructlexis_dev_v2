# Image restoration
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Blind restoration  

## State of the Field

**Space of definitions.** Papers describe it in two nearby ways: as recovering high-quality images from degraded observations by applying restoration algorithms, and as a blind-restoration task. In the blind formulation, restoration proceeds without explicit instructions about the degradation type and instead relies on automatically generated analysis of the image, so users provide the image while the instruction prompt is left empty.

**Variants.** The main named variant is blind restoration. Within that setting, papers study low-light enhancement and other degradation settings, mention combination tasks, and separate work relates image restoration to downstream object detection and semantic segmentation experiments.

**Space of elicitation and scores.** No measurement instrument is linked to it. The available papers describe restoration tasks and downstream experiments rather than a named instrument that elicits or scores the behavior.

**What it is taken as evidence of.** Rather than singling out one construct, papers relate it to three constructs: Zero-shot generalization, Robustness, and Generalization. These links are recorded as related, not as measurement or correlation claims, and the direction is mixed, with image restoration related to Zero-shot generalization and Robustness, while Generalization is related to image restoration.

## Sources

**[PromptFix: You Prompt and We Fix the Photo](https://proceedings.neurips.cc/paper_files/paper/2024/file/468c9ec4215e05b6488ac307d377662e-Paper-Conference.pdf) (as "Blind restoration")**
> The task of restoring a degraded image without explicit instructions specifying the type of degradation, instead relying on an automatically generated analysis of the image.

**[RestoreAgent: Autonomous Image Restoration Agent via Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/c78f639424b8d89ceb4f2efbb4dfe4f4-Paper-Conference.pdf)**
> The process of recovering high-quality images from degraded observations by applying restoration algorithms.

## Relationships

### Associated with
- **Zero-shot generalization** (constructs)
  > Our proposed model also achieves comparable inference efficiency with these baseline models and exhibits superior zero-shot capabilities in blind restoration and combination tasks.
  - [PromptFix: You Prompt and We Fix the Photo](https://proceedings.neurips.cc/paper_files/paper/2024/file/468c9ec4215e05b6488ac307d377662e-Paper-Conference.pdf)
- **Low-light image enhancement** (behaviors tasks)
  > We evaluate the model’s performance on such blind restoration tasks, including low-light enhancement, desnowing, and dehazing.
  - [PromptFix: You Prompt and We Fix the Photo](https://proceedings.neurips.cc/paper_files/paper/2024/file/468c9ec4215e05b6488ac307d377662e-Paper-Conference.pdf)
- **Generalization** (constructs)
  > Image Restoration (IR)... Recently, researchers have increasingly focused on enhancing the generalization ability to diverse degradations in real-world applications
  - [DreamClear: High-Capacity Real-World Image Restoration with Privacy-Safe Dataset Curation](https://proceedings.neurips.cc/paper_files/paper/2024/file/6452474601429509f3035dc81c233226-Paper-Conference.pdf)
- **Object detection** (behaviors tasks)
  > “we assess the benefits of image restoration for downstream high-level vision tasks by conducting detection and segmentation experiments on the COCO 2017 [45] and ADE20K [94] datasets”
  - [DreamClear: High-Capacity Real-World Image Restoration with Privacy-Safe Dataset Curation](https://proceedings.neurips.cc/paper_files/paper/2024/file/6452474601429509f3035dc81c233226-Paper-Conference.pdf)
- **Semantic segmentation** (behaviors tasks)
  > “we assess the benefits of image restoration for downstream high-level vision tasks by conducting detection and segmentation experiments on the COCO 2017 [45] and ADE20K [94] datasets”
  - [DreamClear: High-Capacity Real-World Image Restoration with Privacy-Safe Dataset Curation](https://proceedings.neurips.cc/paper_files/paper/2024/file/6452474601429509f3035dc81c233226-Paper-Conference.pdf)
