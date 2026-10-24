# SafeBench
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Across the papers, the prevailing description is a safety benchmark for VLMs or MLLMs built from 500 malicious questions in 10 categories based on AI usage policies. Some papers also frame it as a benchmark for perceiving multimodal risks and for evaluating defense against jailbreak attacks. One paper further refers to sampling 200 examples from "SafeBench11", described there as constructed with FigStep, and another characterizes SafeBench as images and text queries where the text itself is harmful.

**What it is claimed to measure.** Papers link SafeBench to no constructs and three behavioral indicators. The measurement claims are spread across harmful content detection, jailbreak resistance, and jailbreaking rather than concentrated on a single target: one paper uses it to report attack success rates for jailbreaking, another to evaluate defense capabilities against jailbreak attacks, and another to assess harmful content detection.

**Space of uses.** No measurement instrument is linked to it. In practice, papers use SafeBench alongside other safety resources, including MM-SafeBench, HADES-Dataset, Hades, MML, and HIMRD, either as one of several established safety benchmarks or as one of several jailbreak attack methods or datasets. One paper also uses a 200-sample selection from "SafeBench11" for evaluation.

## Sources

**[Jailbreak Large Vision-Language Models Through Multi-Modal Linkage](https://aclanthology.org/2025.acl-long.74.pdf)**
> A benchmark for evaluating VLM safety, comprising 500 malicious questions organized into 10 categories based on AI usage policies.

## Relationships

### → SafeBench
- **Jailbreaking** (behaviors tasks) — *measured_by*
  > Our approach achieves higher attack success rates compared to existing multimodal attacks on SafeBench (Gong et al., 2023) and AdvBench (Zou et al., 2023). (Abstract)
  - [Con Instruction: Universal Jailbreaking of Multimodal Large Language Models via Non-Textual Modalities](https://aclanthology.org/2025.acl-long.146.pdf)
- **Jailbreak resistance** (behaviors tasks) — *measured_by*
  > We adopt five jailbreak attack methods or datasets to comprehensively evaluate the defense capabilities of MLLMs against jailbreak attacks, including SafeBench (Gong et al., 2023), MM-SafetyBench (Liu et al., 2024b), Hades (Li et al., 2024), MML (Wang et al., 2024c), and HIMRD (Teng et al., 2024).
  - [SURE: Safety Understanding and Reasoning Enhancement for Multimodal Large Language Models](https://aclanthology.org/2025.emnlp-main.384.pdf)
