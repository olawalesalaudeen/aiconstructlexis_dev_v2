# RefCOCO+
**Type:** Measurement  
**Referenced in:** 25 papers  
**Also known as:** refCOCO+  

## State of the Field

**What it is.** Most papers treat RefCOCO+ as one of the standard benchmarks in the RefCOCO series. The prevailing description presents it as a referring expression comprehension or visual grounding benchmark similar to RefCOCO, but with location or spatial words excluded so that descriptions are more appearance-based; as CogCoM: A Visual Language Model with Chain-of-Manipulations Reasoning puts it, it has "constraints to prevent annotators from using location words." A smaller line of definitions, used in segmentation work, describes it as an extension of refCOCO for referring expression segmentation, with more complex language.

**What it is claimed to measure.** Papers link RefCOCO+ to one construct, visual grounding, and four behavioral indicators: referring expression segmentation, referring expression understanding, action grounding, and object localization. The most common use is to measure referring expression segmentation and referring expression understanding, several papers also use it to measure visual grounding, and only a few papers report it as measuring action grounding or object localization. The claims therefore spread across several evaluation targets rather than converging on one single measured outcome.

**Space of uses.** No measurement instrument is linked to it. In practice, papers usually use RefCOCO+ alongside RefCOCO and RefCOCOg, often presenting the trio as standard or well-established benchmarks; CoVLM: Composing Visual Entities and Relationships in Large Language Models Via Communicative Decoding describes them as "three well-established benchmarks." Some work also includes it in broader refCOCO-series evaluation or dataset construction with refCLEF.

## Sources

**[CoVLM: Composing Visual Entities and Relationships in Large Language Models Via Communicative Decoding](https://proceedings.iclr.cc/paper_files/paper/2024/file/47561f5e1dc53c7d119185e217b523d0-Paper-Conference.pdf)**
> Referring expression comprehension benchmark similar to RefCOCO but excluding spatial relations in annotations, focusing on appearance-based descriptions.

**[OMG-LLaVA: Bridging Image-level, Object-level, Pixel-level Reasoning and Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/83eb86be3e2f9fd66c44d9073c51ba4d-Paper-Conference.pdf) (as "refCOCO+")**
> An extension of the refCOCO dataset for referring expression segmentation, featuring more complex language.

## Relationships

### → RefCOCO+
- **Referring expression segmentation** (behaviors tasks) — *measured_by*
  > Table 2 presents the results of referring image segmentation on three datasets: RefCOCO [40], RefCOCO+ [123] and RefCOCOg [68].
  - [Vitron: A Unified Pixel-level Vision LLM for Understanding, Generating, Segmenting, Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/68bad5506f0f9eea7ae75f01ae00d5e2-Paper-Conference.pdf)
- **Referring expression understanding** (behaviors tasks) — *measured_by*
  > RefCOCO+ [103] Refer grounding on natural images. (Table A2)
  - [Accelerating Pre-training of Multimodal LLMs via Chain-of-Sight](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a54a80ffc2834689ffdd0920202018e-Paper-Conference.pdf)
- **Visual grounding** (constructs) — *measured_by*
  > For visual grounding, we use RefCOCO, RefCCO+ and RefCOCOg [62]. (Section 4.1)
  - [Lumen: Unleashing Versatile Vision-Centric Capabilities of Large Multimodal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/946ecab300b0695fe24b53a92e632935-Paper-Conference.pdf)
