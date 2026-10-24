# MM-SafetyBench
**Type:** Measurement  
**Referenced in:** 13 papers  
**Also known as:** MM-Safetybench, MM-SafeBench  

## State of the Field

**What it is.** Papers most commonly describe MM-SafetyBench as a multimodal safety benchmark for testing whether vision-language models produce unsafe responses to harmful inputs and for assessing safety in vision-language settings. More specific descriptions present it as a benchmark with 5,040 text-image pairs across 13 scenarios for multimodal jailbreak attacks, or as a dataset of typographical images, stable diffusion-generated images, Typo + SD images, and text-based attack samples. Other papers frame it as a safety-critical evaluation framework against image-based manipulations and visual prompt attacks. Papers also mention an official tiny version with 168 samples, and one paper abbreviates it as MMSafe.

**What it is claimed to measure.** Across papers, MM-SafetyBench is linked as a measurement instrument to three constructs, Safety, Safety alignment, and Safety robustness, and to three behavioral indicators, Harmful content detection, Harmful content generation, and Jailbreak resistance. Papers use it to judge resiliency when models are prompted with harm-inducing instructions, to calculate average attack success rate following MM-SafetyBench, and to evaluate defense capabilities against jailbreak attacks. Other papers report it for cases where an image and a seemingly benign query become harmful in combination, or where image-query-related inputs are used to elicit harmful responses.

**Space of uses.** No measurement instrument is linked to it, but papers use it alongside FigStep, SafeBench, SIUO, JailBreaKV, and HADES-Dataset as one component of broader safety or jailbreak evaluations. Some papers use subsets, either the official tiny version with 168 samples or a random selection of 100 harmful and safe images. It is also positioned as a source of unsafe examples and as a reference protocol, with one paper stating, "Following MM-SafetyBench, we calculate the average attack success rate (ASR)."

## Sources

**[ETA: Evaluating Then Aligning Safety of Vision Language Models at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/06f9fe2915857be2b1e369419a531ad3-Paper-Conference.pdf)**
> A multimodal safety benchmark used to test whether VLMs produce unsafe responses to harmful inputs.

**[How Does Vision-Language Adaptation Impact the Safety of Vision Language Models?](https://proceedings.iclr.cc/paper_files/paper/2025/file/84d286e32bbee8fa3a86ee9c50e00081-Paper-Conference.pdf) (as "MM-Safetybench")**
> A benchmark for assessing the safety of models in multimodal (vision-language) contexts.

**[Jailbreak Large Vision-Language Models Through Multi-Modal Linkage](https://aclanthology.org/2025.acl-long.74.pdf) (as "MM-SafeBench")**
> A benchmark featuring 5,040 text-image pairs across 13 scenarios, designed to assess the safety and robustness of vision-language models against multimodal jailbreak attacks.

## Relationships

### → MM-SafetyBench
- **Safety** (constructs) — *measured_by*
  > We evaluate the VLMs with MM-Safety-Bench [28] to judge the resiliency of VLMs when they are prompted with harm-inducing instructions. (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Jailbreak resistance** (behaviors tasks) — *measured_by*
  > We adopt five jailbreak attack methods or datasets to comprehensively evaluate the defense capabilities of MLLMs against jailbreak attacks, including SafeBench (Gong et al., 2023), MM-SafetyBench (Liu et al., 2024b), Hades (Li et al., 2024), MML (Wang et al., 2024c), and HIMRD (Teng et al., 2024).
  - [SURE: Safety Understanding and Reasoning Enhancement for Multimodal Large Language Models](https://aclanthology.org/2025.emnlp-main.384.pdf)
- **Safety robustness** (constructs) — *measured_by*
  > ...for evaluating jailbreak robustness, we employ MM-SafetyBench (Liu et al., 2024b), FigStep (Gong et al., 2025) and JailBreaKV (Luo et al., 2024) (Section 2.1).
  - [Think in Safety: Unveiling and Mitigating Safety Alignment Collapse in Multimodal Large Reasoning Model](https://aclanthology.org/2025.emnlp-main.261.pdf)
- **Harmful content generation** (behaviors tasks) — *measured_by*
  > MM-SafetyBench (Liu et al., 2024b), originally proposed as QR Attack, uses image-query-related inputs to elicit harmful responses from models. (Section 4.1)
  - [Visual Contextual Attack: Jailbreaking MLLMs with Image-Driven Context Injection](https://aclanthology.org/2025.emnlp-main.487.pdf)
