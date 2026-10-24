# Referring expression segmentation
**Type:** Behavior  
**Referenced in:** 16 papers  
**Also known as:** Referring segmentation, Referring image segmentation, Referring object part segmentation  

## State of the Field

**Space of definitions.** Across definitions, the prevailing usage is an image task where a model segments the specific object or region named by a natural language expression or description. Most papers describe success as producing a segmentation mask for the referred target, and one source says the output is "a mask that can cover the described object" (Unleashing Region Understanding in Intermediate Layers for MLLM-based Referring Expression Generation). A smaller line extends this formulation to predicting a binary mask for a named component of a 3D object.

**Variants.** Papers use several nearby names, most often referring expression segmentation, and also referring segmentation and referring image segmentation. Within these formulations, some describe segmenting a specific object instance, some a specific object or region, and one description notes that in RefCOCO-g "one sentence is associated with one instance." A smaller line studies domain or modality variants, including remote sensing, where prompts ask for a mask for a referring expression and the model replies with a "<SEG>" token that is decoded into a mask (GeoPixel: Pixel Grounding Large Multimodal Model in Remote Sensing), and 3D referring object part segmentation over point clouds.

**Space of elicitation and scores.** Papers link it to 4 measurement instruments. The most common are RefCOCO, RefCOCO+, and RefCOCOg, often described together as the refCOCO series, and a smaller line also uses gRefCOCO. These instruments are described as datasets or benchmarks for evaluating referring segmentation, and one paper reports evaluating RefCOCO with cIoU.

**What it is taken as evidence of.** Papers do not converge on a single construct that this behavior evidences. Instead, they link it to 3 constructs through related-to claims: multimodal alignment is related to it in work saying RIS relies on pixel-level ground-truth masks to learn visual-linguistic alignment, visual grounding is related to it in work on switching between RES and other visual grounding tasks, and visual recognition is related to it in work that adds referring segmentation as a broader recognition ability. Separately, one paper relates referring expression generation to it as a dual task.

## Sources

**[Text4Seg: Reimagining Image Segmentation as Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/04d8c25cbf0d5e1b70d64e672ac92637-Paper-Conference.pdf)**
> The task of segmenting the specific object or region in an image that is described by a given natural language expression.

**[Visual Agents as Fast and Slow Thinkers](https://proceedings.iclr.cc/paper_files/paper/2025/file/14fb70b97c70d5cc5445cd2d5bf818db-Paper-Conference.pdf) (as "Referring segmentation")**
> The task of segmenting an object in an image based on a natural language description.

**[Visual-O1: Understanding Ambiguous Instructions via Multi-modal Multi-turn Chain-of-thoughts Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a3769fddee1b20552d2490c4ff18b136-Paper-Conference.pdf) (as "Referring image segmentation")**
> The task of segmenting a specific object or region in an image based on a natural language description.

**[3D-AffordanceLLM: Harnessing Large Language Models for Open-Vocabulary Affordance Detection in 3D Worlds](https://proceedings.iclr.cc/paper_files/paper/2025/file/b364c8cbb3f229f40d5873e877391bd2-Paper-Conference.pdf) (as "Referring object part segmentation")**
> The pre-training task of predicting a binary mask for a specific component of a 3D object, given a referring expression that names the component.

## Relationships

### Referring expression segmentation →
- **RefCOCO** (measurements) — *measured_by*
  > Table 2 presents the results of referring image segmentation on three datasets: RefCOCO [40], RefCOCO+ [123] and RefCOCOg [68].
  - [Vitron: A Unified Pixel-level Vision LLM for Understanding, Generating, Segmenting, Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/68bad5506f0f9eea7ae75f01ae00d5e2-Paper-Conference.pdf)
- **RefCOCO+** (measurements) — *measured_by*
  > Table 2 presents the results of referring image segmentation on three datasets: RefCOCO [40], RefCOCO+ [123] and RefCOCOg [68].
  - [Vitron: A Unified Pixel-level Vision LLM for Understanding, Generating, Segmenting, Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/68bad5506f0f9eea7ae75f01ae00d5e2-Paper-Conference.pdf)
- **RefCOCOg** (measurements) — *measured_by*
  > Table 2 presents the results of referring image segmentation on three datasets: RefCOCO [40], RefCOCO+ [123] and RefCOCOg [68].
  - [Vitron: A Unified Pixel-level Vision LLM for Understanding, Generating, Segmenting, Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/68bad5506f0f9eea7ae75f01ae00d5e2-Paper-Conference.pdf)

### Associated with
- **Referring expression generation** (behaviors tasks)
  > To eliminate unsuitable candidate outputs, we leverage the dual task of REG: Referring expression segmentation (RES) [37, 48], which aims to segment a target object mask from the entire image given a sentence describing the object. (Section 1)
  - [Unleashing Region Understanding in Intermediate Layers for MLLM-based Referring Expression Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/da76884a4e003ad0de97804ec4578e5b-Paper-Conference.pdf)
- **Multimodal alignment** (constructs)
  > Despite remarkable progress, most existing RIS works [7, 58, 27, 26, 21, 5] rely heavily on pixel-level ground-truth masks to learn visual-linguistic alignment. (Section 1)
  - [Boosting Weakly Supervised Referring Image Segmentation via Progressive Comprehension](https://proceedings.neurips.cc/paper_files/paper/2024/file/a97f0218b49bc17ea3f121a0e724f028-Paper-Conference.pdf)
- **Visual recognition** (constructs)
  > In addition to detection, Octopus is potential to acquire a broader range of recognition abilities, taking advantage of the versatility of the DETR mechanism. Hereby, we endow Octopus with the referring segmentation ability by modifying its object queries into “mask” queries... (Appendix B)
  - [Octopus: A Multi-modal LLM with Parallel Recognition and Sequential Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a3eadeebbc9eecd621086f6978865a85-Paper-Conference.pdf)
- **Visual grounding** (constructs)
  > flexible switching between referring expression segmentation, open-vocabulary segmentation, and other visual grounding tasks. (Section 1)
  - [Text4Seg: Reimagining Image Segmentation as Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/04d8c25cbf0d5e1b70d64e672ac92637-Paper-Conference.pdf)
- **gRefCOCO** (measurements)
  > “we construct a generalized referring expression segmentation dataset with 419k samples using the train split of grefCOCO (Liu et al., 2023a).”
  - [Text4Seg: Reimagining Image Segmentation as Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/04d8c25cbf0d5e1b70d64e672ac92637-Paper-Conference.pdf)
