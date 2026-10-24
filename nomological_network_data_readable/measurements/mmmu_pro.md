# MMMU-Pro
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Across definitions, papers treat MMMU-Pro as a challenging multimodal benchmark for advanced, professional-level vision language model capability. The prevailing description emphasizes complex knowledge and reasoning tasks across disciplines, with a vision component that requires deep understanding of images. Some authors further frame it as an advanced version of MMMU, with more challenging questions and stricter evaluation settings, including a 10-option multiple-choice format, and one reported setting is MMMU-Pro-std with 10 options.

**What it is claimed to measure.** Papers link it to 4 constructs and no behavioral indicators. It is used to measure calibration, general ability, multimodal reasoning, and multimodal understanding: one paper adopts it to measure calibration on complex, multidisciplinary image understanding and reasoning problems, another says it is designed to assess true multimodal understanding and reasoning across a wide range of academic disciplines, and another uses it among comprehensive benchmarks and VQA datasets to evaluate the general capabilities of VLMs. Across these claims, papers position it against several broad capabilities rather than a single named construct.

**Space of uses.** In use, papers report it both as a named challenging task and as part of broader evaluation suites. One study evaluates models on multimodal reasoning benchmarks including MMMU, MathVista, MMVet, MathVerse, and Dyna-math, while another places MMMU-Pro among common comprehensive benchmarks and VQA datasets for assessing general capabilities. Reported results also appear in a specific setting, MMMU-Pro-std with 10 options.

## Sources

**[ETA: Evaluating Then Aligning Safety of Vision Language Models at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/06f9fe2915857be2b1e369419a531ad3-Paper-Conference.pdf)**
> A challenging benchmark used to evaluate the advanced, professional-level capabilities of Vision Language Models.

## Relationships

### → MMMU-Pro
- **General ability** (constructs) — *measured_by*
  > we selected several common comprehensive benchmarks and VQA datasets, such as ... MMMU-Pro to evaluate the general capabilities of VLMs (Section 5.1).
  - [ETA: Evaluating Then Aligning Safety of Vision Language Models at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/06f9fe2915857be2b1e369419a531ad3-Paper-Conference.pdf)
- **Multimodal understanding** (constructs) — *measured_by*
  > MMMU-Pro is designed to more accurately and rigorously assess a model’s true multimodal understanding and reasoning capabilities across a wide range of academic disciplines. (Section 1)
  - [MMMU-Pro: A More Robust Multi-discipline Multimodal Understanding Benchmark](https://aclanthology.org/2025.acl-long.736.pdf)
- **Multimodal reasoning** (constructs) — *measured_by*
  > MMMU-Pro is designed to more accurately and rigorously assess a model’s true multimodal understanding and reasoning capabilities across a wide range of academic disciplines. (Section 1)
  - [MMMU-Pro: A More Robust Multi-discipline Multimodal Understanding Benchmark](https://aclanthology.org/2025.acl-long.736.pdf)
- **Calibration** (constructs) — *measured_by*
  > We adopt the MMMU-Pro benchmark (Yue et al., 2024) to measure calibration on complex, multidisciplinary image understanding and reasoning problems. (Section 3.1.1)
  - [Seeing is Believing, but How Much? A Comprehensive Analysis of Verbalized Calibration in Vision-Language Models](https://aclanthology.org/2025.emnlp-main.74.pdf)
