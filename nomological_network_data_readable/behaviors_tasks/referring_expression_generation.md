# Referring expression generation
**Type:** Behavior  
**Referenced in:** 6 papers  
**Also known as:** Multimodal referring  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage is a region-conditioned text generation task: the model is given a specific image region, usually a bounding box or its location tokens, and must produce a descriptive expression that refers to that object or region. Papers agree that the description should accurately characterize the selected content, and some make the success criterion stricter by calling for an unambiguous description. A smaller formulation casts this not just as a task but as a latent ability to understand a visual reference and generate the associated text; as one description puts it, "each bounding box in the image is annotated with a descriptive textual expression that accurately characterizes and refers to the content within the specific region" (CogVLM: Visual Expert for Pretrained Language Models).

**Variants.** Some papers use the label multimodal referring, with referring expression generation treated as one example of that broader framing. Across these formulations, the target may be an image region or an object, and the reference is typically supplied through a bounding box, location tokens, or a user-provided box. The descriptions provided all concern image-oriented datasets and image regions or objects.

**Space of elicitation and scores.** Papers link this behavior to one measurement instrument, RefCOCOg. It is described as a widely used dataset and a classical benchmark for referring expression generation, and papers use it to evaluate performance in zero-shot and few-shot settings. No other measurement instrument is linked to it.

**What it is taken as evidence of.** The linked papers connect it to two constructs, Region-level understanding and Visual grounding, and both links are framed as related rather than as direct measurement claims. One paper says region-involved multimodal corpora empower "the ability of region-level understanding," and another includes referring expression generation among data used for visual grounding capabilities. Beyond construct links, one paper reports that it is related to Referring expression segmentation as a dual task, and another claims a causal relationship from Referring expression generation to Entity grounding by "providing descriptive textual clues."

## Sources

**[CogVLM: Visual Expert for Pretrained Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/dc06d4d2792265fb5454a6092bfd5c6a-Paper-Conference.pdf)**
> The task of generating a descriptive textual expression that accurately refers to a specific, bounded region within an image.

**[Grounding Multimodal Large Language Models to the World](https://proceedings.iclr.cc/paper_files/paper/2024/file/e112a4671e8779aa9f640a0e3f81bd26-Paper-Conference.pdf) (as "Multimodal referring")**
> The latent ability of a model to understand a visual reference, such as a bounding box, and generate an appropriate textual description for the specified object or region.

## Relationships

### Referring expression generation →
- **RefCOCOg** (measurements) — *measured_by*
  > The RefCOCOg [33] dataset is a classical benchmark for referring expression generation, which contains 85,474 expressions for 54,822 objects in 26,711 images. (Section 4.1)
  - [Unleashing Region Understanding in Intermediate Layers for MLLM-based Referring Expression Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/da76884a4e003ad0de97804ec4578e5b-Paper-Conference.pdf)
- **Entity grounding** (behaviors tasks) — *causes*
  > we are the first to incorporate referring expression generation into the entity grounding task, enhancing its process by providing descriptive textual clues. (Section 1)
  - [ISR: Self-Refining Referring Expressions for Entity Grounding](https://aclanthology.org/2025.acl-long.1483.pdf)

### → Referring expression generation
- **Grounding** (constructs) — *causes*
  > “Particularly, when adding grounding data into training, the referring performance gets improved, and vice versa.”
  - [Ferret: Refer and Ground Anything Anywhere at Any Granularity](https://proceedings.iclr.cc/paper_files/paper/2024/file/fd6613131889a4b656206c50a8bd7790-Paper-Conference.pdf)

### Associated with
- **Referring expression segmentation** (behaviors tasks)
  > To eliminate unsuitable candidate outputs, we leverage the dual task of REG: Referring expression segmentation (RES) [37, 48], which aims to segment a target object mask from the entire image given a sentence describing the object. (Section 1)
  - [Unleashing Region Understanding in Intermediate Layers for MLLM-based Referring Expression Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/da76884a4e003ad0de97804ec4578e5b-Paper-Conference.pdf)
- **Visual grounding** (constructs)
  > In order to endow our model with consistent, interactive visual grounding capabilities, we collect a high-quality dataset covering 4 types of grounding data: ... (2) Referring Expression Generation (REG)... (Section 2.3)
  - [CogVLM: Visual Expert for Pretrained Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/dc06d4d2792265fb5454a6092bfd5c6a-Paper-Conference.pdf)
