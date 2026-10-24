# Region captioning
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Region-level captioning, Referring description, Visual referring  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats this behavior as producing a natural-language description for a specific image region that has been marked or referred to. Definitions agree on the region-targeted nature of the task, but differ on granularity: some describe concise or brief outputs, including prompts such as "Please provide a brief description of each marked region in the image," while others ask for a detailed description of a referred region. A smaller framing describes it as providing a textual description corresponding to a visual prompt.

**Variants.** Papers use several nearby names for this behavior, including region-level captioning, referring description, and visual referring. The settings vary between describing each marked region in an image and describing a single referred region, and the requested outputs range from brief to detailed descriptions. One paper places it in a benchmark that also includes point-level captioning, with region-level captioning as the region-focused variant.

**Space of elicitation and scores.** Papers measure it with 3 instruments. RefCOCOg is the most frequently linked instrument, followed by Visual Genome and Ferret-Bench; RefCOCOg and Visual Genome are described as established or prominent region captioning benchmarks, while Ferret-Bench is used through its Referring Description task, with experiments reported alongside Referring Reasoning.

**What it is taken as evidence of.** The most direct construct link is to region-level understanding: papers use visual referring or region captioning to assess a model's ability of region-level understanding. Other construct links are looser. Region captioning is related to visual understanding in one paper's evaluation language, and visual referring is presented as related to visual grounding, described as the counterpart task, rather than as a direct measurement claim.

## Sources

**[Draw-and-Understand: Leveraging Visual Prompts to Enable MLLMs to Comprehend What You Want](https://proceedings.iclr.cc/paper_files/paper/2025/file/727658ad24ba28e02dffd379bdc69448-Paper-Conference.pdf) (as "Region-level captioning")**
> Generating concise or detailed natural language descriptions for specific marked regions in an image.

**[Draw-and-Understand: Leveraging Visual Prompts to Enable MLLMs to Comprehend What You Want](https://proceedings.iclr.cc/paper_files/paper/2025/file/727658ad24ba28e02dffd379bdc69448-Paper-Conference.pdf) (as "Referring description")**
> An observable task, evaluated on Ferret-Bench, where the model provides a textual description corresponding to a visual prompt.

**[ClawMachine: Learning to Fetch Visual Tokens for Referential Comprehension](https://proceedings.iclr.cc/paper_files/paper/2025/file/b1abd42eb5aace7f0ad9ba9cfb029f54-Paper-Conference.pdf) (as "Visual referring")**
> Given an image and a referred region, the model produces a detailed natural-language description of that region.

## Relationships

### Region captioning →
- **RefCOCOg** (measurements) — *measured_by*
  > To assess the region-level caption ability, we also evaluate ASM on the Visual Genome (Krishna et al., 2017) and RefCOCOg (Mao et al., 2016).
  - [The All-Seeing Project: Towards Panoptic Visual Recognition and Understanding of the Open World](https://proceedings.iclr.cc/paper_files/paper/2024/file/68a3919db3858f548dea769f2dbba611-Paper-Conference.pdf)
- **Visual Genome** (measurements) — *measured_by*
  > To assess the region-level caption ability, we also evaluate ASM on the Visual Genome (Krishna et al., 2017) and RefCOCOg (Mao et al., 2016).
  - [The All-Seeing Project: Towards Panoptic Visual Recognition and Understanding of the Open World](https://proceedings.iclr.cc/paper_files/paper/2024/file/68a3919db3858f548dea769f2dbba611-Paper-Conference.pdf)
- **Ferret-Bench** (measurements) — *measured_by*
  > Experiments are conducted on the Referring Description and Referring Reasoning tasks within Ferret-Bench, with the results presented in Table 3.
  - [Draw-and-Understand: Leveraging Visual Prompts to Enable MLLMs to Comprehend What You Want](https://proceedings.iclr.cc/paper_files/paper/2025/file/727658ad24ba28e02dffd379bdc69448-Paper-Conference.pdf)

### Associated with
- **Region-level understanding** (constructs)
  > "Region Captioning. To access the region understanding capabilities of VisionLLM v2, we evaluate our models on two prominent benchmarks: RefCOCOg [126] and Visual Genome [86]."
  - [VisionLLM v2: An End-to-End Generalist Multimodal Large Language Model for Hundreds of Vision-Language Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/81a60d18e010b27b36cd465c6604b915-Paper-Conference.pdf)
- **Visual grounding** (constructs)
  > Next, we study visual grounding, a.k.a. referring expression comprehension (REC), the counterpart task to visual referring that requires the model to identify the location of an object with language descriptions.
  - [ClawMachine: Learning to Fetch Visual Tokens for Referential Comprehension](https://proceedings.iclr.cc/paper_files/paper/2025/file/b1abd42eb5aace7f0ad9ba9cfb029f54-Paper-Conference.pdf)
