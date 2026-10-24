# RAID
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across the cited papers, RAID is treated as a dataset or benchmark for machine-generated text detection, most commonly described as spanning multiple domains and supporting cross-domain evaluation. Definitions mention domains such as Abstracts and Wiki, and one paper states that it uses those two domains as out-of-domain evaluation data. A smaller framing presents RAID as covering multiple domains and models and including adversarial examples, while another uses it to evaluate detector performance on more advanced models with human-written and model-generated text.

**What it is claimed to measure.** In the available descriptions, papers use RAID to evaluate machine-generated or LLM text detection and detector performance. The papers do not explicitly link it to any named construct or behavioral indicator.

**Space of uses.** Papers use RAID alongside other detection datasets rather than as a standalone protocol. It appears with RealDet, M4, and MAGE as a representative evaluation dataset, and with Yelp as an out-of-domain dataset. Another paper positions RAID as a way to test performance on more advanced models.

## Sources

**[PaLD: Detection of Text Partially Written by Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d799b1d6a5e43546e67e7afdeffc067d-Paper-Conference.pdf)**
> A dataset with multiple domains, including Abstracts and Wiki, used for cross-domain evaluation of LLM text detection.
