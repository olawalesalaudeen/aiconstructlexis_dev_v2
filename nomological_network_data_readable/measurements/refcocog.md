# RefCOCOg
**Type:** Measurement  
**Referenced in:** 30 papers  
**Also known as:** refCOCOg  

## State of the Field

**What it is.** Across the papers, RefCOCOg is most commonly treated as a well-established benchmark or dataset built around referring expressions on natural images, commonly described as requiring a model to localize an object from a natural language description. Definitions repeatedly highlight longer, more descriptive expressions and spatial relations than other RefCOCO variants, and some papers specify grounding to a single bounding box. A smaller line of work instead describes refCOCOg as a version of the refCOCO dataset for referring expression segmentation, with natural language queries paired with object masks, while some papers also frame it as a dataset for region-level captioning or referring expression generation.

**What it is claimed to measure.** Papers link RefCOCOg to 5 behavioral indicators and 1 construct. The prevailing claims use it to measure referring expression understanding, and papers also report it as measuring referring expression segmentation, while several papers use it to measure the construct visual grounding. Smaller lines of work use it to measure region captioning and referring expression generation, and one paper uses it for object localization. These measured targets span multiple tasks rather than only one recurring claim.

**Space of uses.** No measurement instrument is linked to it directly. In use, papers most commonly place it alongside RefCOCO and RefCOCO+ as one of three standard benchmarks for referring expression comprehension, visual grounding, or related referring tasks. Some papers extend that suite with Visual Genome for region captioning, or with refCLEF and Reaseg in referring segmentation setups. One study also reports evaluating on RefCOCOg in zero-shot and few-shot settings (Grounding Multimodal Large Language Models to the World).

## Sources

**[CoVLM: Composing Visual Entities and Relationships in Large Language Models Via Communicative Decoding](https://proceedings.iclr.cc/paper_files/paper/2024/file/47561f5e1dc53c7d119185e217b523d0-Paper-Conference.pdf)**
> Referring expression comprehension benchmark requiring models to localize an object in an image based on a natural language description, with longer expressions and spatial relations.

**[OMG-LLaVA: Bridging Image-level, Object-level, Pixel-level Reasoning and Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/83eb86be3e2f9fd66c44d9073c51ba4d-Paper-Conference.pdf) (as "refCOCOg")**
> A version of the refCOCO dataset for referring expression segmentation that contains longer, more descriptive phrases.

## Relationships

### → RefCOCOg
- **Referring expression understanding** (behaviors tasks) — *measured_by*
  > RefCOCOg [67] Refer grounding on natural images. (Table A2)
  - [Accelerating Pre-training of Multimodal LLMs via Chain-of-Sight](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a54a80ffc2834689ffdd0920202018e-Paper-Conference.pdf)
- **Referring expression segmentation** (behaviors tasks) — *measured_by*
  > Table 2 presents the results of referring image segmentation on three datasets: RefCOCO [40], RefCOCO+ [123] and RefCOCOg [68].
  - [Vitron: A Unified Pixel-level Vision LLM for Understanding, Generating, Segmenting, Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/68bad5506f0f9eea7ae75f01ae00d5e2-Paper-Conference.pdf)
- **Region captioning** (behaviors tasks) — *measured_by*
  > To assess the region-level caption ability, we also evaluate ASM on the Visual Genome (Krishna et al., 2017) and RefCOCOg (Mao et al., 2016).
  - [The All-Seeing Project: Towards Panoptic Visual Recognition and Understanding of the Open World](https://proceedings.iclr.cc/paper_files/paper/2024/file/68a3919db3858f548dea769f2dbba611-Paper-Conference.pdf)
- **Visual grounding** (constructs) — *measured_by*
  > For visual grounding, we use RefCOCO, RefCCO+ and RefCOCOg [62]. (Section 4.1)
  - [Lumen: Unleashing Versatile Vision-Centric Capabilities of Large Multimodal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/946ecab300b0695fe24b53a92e632935-Paper-Conference.pdf)
- **Referring expression generation** (behaviors tasks) — *measured_by*
  > The RefCOCOg [33] dataset is a classical benchmark for referring expression generation, which contains 85,474 expressions for 54,822 objects in 26,711 images. (Section 4.1)
  - [Unleashing Region Understanding in Intermediate Layers for MLLM-based Referring Expression Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/da76884a4e003ad0de97804ec4578e5b-Paper-Conference.pdf)
