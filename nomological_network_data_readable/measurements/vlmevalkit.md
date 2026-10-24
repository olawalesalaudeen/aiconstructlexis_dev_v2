# VLMEvalKit
**Type:** Measurement  
**Referenced in:** 18 papers  
**Also known as:** VLMEvalkit, OpenCompass VLMEvalKit  

## State of the Field

**What it is.** Across the surveyed work, the prevailing framing is of an evaluation toolkit, platform, or codebase for assessing vision-language and large vision-language models on benchmarks. Most descriptions call it open-source, standardized, or universal, and emphasize fair comparison, consistent configuration settings, or unified reproduction of results. One paper also treats it as a source of diverse benchmark results and performance data from more than 100 MLLMs, and one definition specifically names OpenCompass VLMEvalKit as the platform used to reproduce multimodal benchmark results.

**What it is claimed to measure.** Papers link VLMEvalKit to no constructs and no behavioral indicators. Explicit measurement claims instead attach it to two measurement instruments, MME-RealWorld and MMStar, which are reported as being measured by VLMEvalKit; papers link it to three measurement instruments overall, with MMBench-Video connected by a related link rather than by a measurement claim. In the recorded relationships, the measurement claims center on other instruments rather than on any named construct.

**Space of uses.** The dominant usage is as a shared evaluation framework: papers say they use it for evaluation, report compared methods with it, or run experiments within the same codebase modified from it. Some place it in OpenCompass to keep configuration settings consistent across methods and to ensure fair comparison, while others use it for unified reproduction of multimodal benchmark results or as the framework for reasoning-benchmark evaluation. It appears alongside three measurement instruments overall: MME-RealWorld and MMStar are evaluated with it, and MMBench-Video is related to it because its evaluation code is to be integrated into VLMEvalKit.

## Sources

**[Revealing and Reducing Gender Biases in Vision and Language Assistants (VLAs)](https://proceedings.iclr.cc/paper_files/paper/2025/file/189b0101331a7a87bf7686d8bb20e12d-Paper-Conference.pdf)**
> An evaluation toolkit used to assess the performance of Vision-Language Models on various benchmarks.

**[Dynamic Multimodal Evaluation with Flexible Complexity by Vision-Language Bootstrapping](https://proceedings.iclr.cc/paper_files/paper/2025/file/36d9468ebdb76b9b229fbd343fff84d5-Paper-Conference.pdf) (as "VLMEvalkit")**
> A standardized evaluation platform used for assessing Large Vision-Language Models to ensure fair comparisons.

**[InternLM-XComposer2-4KHD: A Pioneering Large Vision-Language Model Handling Resolutions from 336 Pixels to 4K HD](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b06cdddb1cde6624c0be1465c7b800f-Paper-Conference.pdf) (as "OpenCompass VLMEvalKit")**
> A universal evaluation platform used to reproduce multimodal benchmark results.

## Relationships

### Associated with
- **MMBench-Video** (measurements)
  > The evalutation code of MMBench-Video will be integrated into VLMEvalKit (Abstract)
  - [MMBench-Video: A Long-Form Multi-Shot Benchmark for Holistic Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a2326c9715a516c91174132e0170073a-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MME-RealWorld** (measurements)
  > "The evaluation framework employed for these benchmarks was VLMEvalKit (Duan et al., 2024)."
  - [Retrieval Enhanced Feedback via In-context Neural Error-book](https://aclanthology.org/2025.emnlp-main.711.pdf)
- **MMStar** (measurements)
  > "The evaluation framework employed for these benchmarks was VLMEvalKit (Duan et al., 2024)."
  - [Retrieval Enhanced Feedback via In-context Neural Error-book](https://aclanthology.org/2025.emnlp-main.711.pdf)
