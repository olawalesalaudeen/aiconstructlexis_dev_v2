# Open-vocabulary object detection
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Open-ended object detection, Open-vocabulary detection  

## State of the Field

**Space of definitions.** Across definitions, the prevailing usage treats this behavior as identifying and locating objects in images beyond categories seen during training or a predefined inference-time label set, usually with category names or textual descriptions supplied at inference time. Papers describe detecting objects from an arbitrary open set of category names provided as text at inference time, or objects not seen during training using textual descriptions. A smaller line of work uses the open-ended formulation, where models discover unseen objects without any object categories as inputs and predict the object categories and locations themselves.

**Variants.** Papers use several related names for this behavior, including open-vocabulary object detection, open-vocabulary detection, and open-ended object detection. The main variation is whether category prompts are given as text at inference time or omitted entirely in the open-ended version. Across these formulations, the setting remains image object detection, and one paper places it among downstream dense vision tasks.

**Space of elicitation and scores.** Papers link this behavior to two measurement instruments, LVIS and Visual Genome, both presented as evaluation datasets. LVIS is described as a commonly used zero-shot dataset with 1,203 categories, while Visual Genome appears in an open-ended object detection evaluation.

**What it is taken as evidence of.** Only one linked construct appears, localization ability. One paper uses open-vocabulary detection to measure localization ability, reporting zero-shot evaluation on COCO Detection, ODinW, and LVIS-Det, and no other construct is linked to it.

## Sources

**[FineCLIP: Self-distilled Region-based CLIP for Better Fine-grained Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/3122aaa22b2fe83f9cead1a696f65ceb-Paper-Conference.pdf)**
> Detecting objects in an image belonging to categories not seen during training, using textual descriptions.

**[Training-Free Open-Ended Object Detection and Segmentation via Attention as Prompts](https://proceedings.neurips.cc/paper_files/paper/2024/file/80f48ffa8022773973a4a5cec7cce19c-Paper-Conference.pdf) (as "Open-ended object detection")**
> The task of identifying and locating objects in an image without being provided with a predefined set of object categories during inference.

**[Contrastive Localized Language-Image Pre-Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ah/chen25ah.pdf) (as "Open-vocabulary detection")**
> The task of detecting objects in an image from an arbitrary, open set of category names provided as text at inference time.

## Relationships

### Open-vocabulary object detection →
- **Visual Genome** (measurements) — *measured_by*
  > Open-Ended Object Detection on the Visual Genome dataset. (Figure 6)
  - [FlexCap: Describe Anything in Images in Controllable Detail](https://proceedings.neurips.cc/paper_files/paper/2024/file/c91b6f7e0152b7a95ee777e987fe811e-Paper-Conference.pdf)
- **LVIS** (measurements) — *measured_by*
  > our model is evaluated on the commonly used zero-shot LVIS (Gupta et al., 2019) dataset, which contains 1,203 categories. (Section 4)
  - [Open-Det: An Efficient Learning Framework for Open-Ended Detection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cao25h/cao25h.pdf)

### Associated with
- **Localization ability** (constructs)
  > improving the localization capability, most works specifically focus on the downstream dense vision tasks such as open-vocabulary detection (Section 2)
  - [Contrastive Localized Language-Image Pre-Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ah/chen25ah.pdf)
