# HADES
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** In the available definitions, HADES is described as a multimodal jailbreak benchmark designed to probe multimodal safety under adversarial conditions. Papers characterize it as using crafted images and accompanying typography, with malicious intent embedded and amplified in those materials, and as targeting harmful scenarios.

**What it is claimed to measure.** Papers link HADES to one construct and two behavioral indicators: it is used to measure Safety alignment, and is also reported as measuring Jailbreak resistance and Harmful content detection. The linked uses span a small range of outcomes rather than only one framing, with papers describing it as a typographical jailbreak dataset for Safety alignment, as one of several jailbreak attack methods or datasets for evaluating defense capabilities against jailbreak attacks, and as an instrument involving images and text queries where the text itself is harmful.

**Space of uses.** In the cited uses, HADES is presented as part of broader jailbreak evaluation setups rather than only on its own. It appears alongside MM-SafetyBench, SafeBench, MML, and HIMRD in one defense evaluation, and another paper groups it with MM-SafetyBench as a typographical jailbreak dataset.

## Sources

**[VisCRA: A Visual Chain Reasoning Attack for Jailbreaking Multimodal Large Language Models](https://aclanthology.org/2025.emnlp-main.312.pdf)**
> HADES is a multimodal jailbreak benchmark with crafted images and accompanying typography designed to probe safety under adversarial conditions across harmful scenarios.

## Relationships

### → HADES
- **Jailbreak resistance** (behaviors tasks) — *measured_by*
  > We adopt five jailbreak attack methods or datasets to comprehensively evaluate the defense capabilities of MLLMs against jailbreak attacks, including SafeBench (Gong et al., 2023), MM-SafetyBench (Liu et al., 2024b), Hades (Li et al., 2024), MML (Wang et al., 2024c), and HIMRD (Teng et al., 2024).
  - [SURE: Safety Understanding and Reasoning Enhancement for Multimodal Large Language Models](https://aclanthology.org/2025.emnlp-main.384.pdf)
