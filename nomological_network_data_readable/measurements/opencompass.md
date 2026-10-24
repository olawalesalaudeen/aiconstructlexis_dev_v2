# OpenCompass
**Type:** Measurement  
**Referenced in:** 24 papers  
**Also known as:** Opencompass  

## State of the Field

**What it is.** Across papers, the prevailing usage is as an open-source evaluation framework or toolkit for large language models, used for standardized assessment across a wide range of benchmarks. Some authors describe it more specifically as a suite for several widely used zero-shot benchmarks, while another describes a framework spanning reasoning, language, knowledge, examination, and understanding, using zero-shot or few-shot prompting with official scoring scripts. A smaller description treats it as a platform that includes VQA datasets such as MMBench v1.1, MMStar, MMMU val, MathVista, and OCRBench, plus three other VQA datasets.

**What it is claimed to measure.** It is linked to two constructs and one behavioral indicator. Most commonly among constructs, papers use it to measure General ability, with Commonsense reasoning also linked, and a paper uses it to measure Open-domain question answering; the recorded claims therefore spread across multiple targets rather than centering on a single construct. Beyond those targets, it is also linked to eight instruments, most often PIQA, followed by ARC-Challenge, ARC-Easy, CommonsenseQA, and GTA, plus three other linked instruments.

**Space of uses.** Papers position it mainly as the framework through which benchmark evaluations are run, for example to report average scores, carry out regression tests on mainstream tasks, or test several widely used zero-shot benchmarks. In use, it appears with PIQA, ARC-Challenge, ARC-Easy, CommonsenseQA, and GTA, plus three other linked instruments; one paper also notes that Needle-in-a-Haystack is implemented in OpenCompass, and another states that evaluations use official scripts in zero-shot or few-shot settings, with scores computed by OpenCompass.

## Sources

**[Alignment at Pre-training! Towards Native Alignment for Arabic LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/195c4e2910bedabd813f9fe4e70c642c-Paper-Conference.pdf) (as "Opencompass")**
> An open-source evaluation framework used to systematically assess large language models on various benchmarks.

**[Post-hoc Reward Calibration: A Case Study on Length Bias](https://proceedings.iclr.cc/paper_files/paper/2025/file/5d50c76fdf75c24ece568fc84a7125fb-Paper-Conference.pdf)**
> An open-source evaluation toolkit for large language models, providing standardized assessment across a wide range of benchmarks.

## Relationships

### → OpenCompass
- **General ability** (constructs) — *measured_by*
  > We evaluate seven distinctive capabilities of LLMs in a total of 17 representative NLP datasets based on the OpenCompass platform (Contributors, 2023). (Section 3.1).
  - [Mix-CPT: A Domain Adaptation Framework via Decoupling Knowledge Learning and Format Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc721384c26c0bdff3ec31a7de31d8d5-Paper-Conference.pdf)

### Associated with
- **PIQA** (measurements)
  > For the evaluation of Piqa, ARC-c, ARC-e, Hellaswag, MMLU and Winogrande, we use Opencompass (Contributors, 2023) to assess final results, details of prompt templates and evaluation metrics can be found in Appendix A.10. (Section 5.3)
  - [TODO: Enhancing LLM Alignment with Ternary Preferences](https://proceedings.iclr.cc/paper_files/paper/2025/file/fef5607a9b826f1845533f923e308435-Paper-Conference.pdf)
- **Needle-in-a-Haystack** (measurements)
  > Needle-In-A-Haystack (Contributors, 2023a) implemented in OpenCompass (Contributors, 2023b). (Figure 2)
  - [ReAttention: Training-Free Infinite Context with Finite Attention Scope](https://proceedings.iclr.cc/paper_files/paper/2025/file/ee1f0da706829d7f198eac0edaacc338-Paper-Conference.pdf)
- **GTA** (measurements)
  > "Experiments are conducted using NVIDIA A100 GPU within OpenCompass [7] evaluation platform."
  - [GTA: A Benchmark for General Tool Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a75ee6d4b2eb0b777f549a32a5a5c28-Paper-Datasets_and_Benchmarks_Track.pdf)
- **ARC-Challenge** (measurements)
  > "We use Opencompass (Contributors, 2023) to test performance on several widely-used zero-shot benchmarks: PIQA ..., ARC-challenge (ARC-C) ..., ARC-easy (ARC-E) ..., WinoGrande (WG) ..."
  - [MatryoshkaKV: Adaptive KV Compression via Trainable Orthogonal Projection](https://proceedings.iclr.cc/paper_files/paper/2025/file/d7b351608d824a4680344a02b180a947-Paper-Conference.pdf)
- **ARC-Easy** (measurements)
  > "We use Opencompass (Contributors, 2023) to test performance on several widely-used zero-shot benchmarks: PIQA ..., ARC-challenge (ARC-C) ..., ARC-easy (ARC-E) ..., WinoGrande (WG) ..."
  - [MatryoshkaKV: Adaptive KV Compression via Trainable Orthogonal Projection](https://proceedings.iclr.cc/paper_files/paper/2025/file/d7b351608d824a4680344a02b180a947-Paper-Conference.pdf)
- **WinoGrande** (measurements)
  > "We use Opencompass (Contributors, 2023) to test performance on several widely-used zero-shot benchmarks: PIQA ..., ARC-challenge (ARC-C) ..., ARC-easy (ARC-E) ..., WinoGrande (WG) ..."
  - [MatryoshkaKV: Adaptive KV Compression via Trainable Orthogonal Projection](https://proceedings.iclr.cc/paper_files/paper/2025/file/d7b351608d824a4680344a02b180a947-Paper-Conference.pdf)
- **HellaSwag** (measurements)
  > "We use Opencompass (Contributors, 2023) to test performance on several widely-used zero-shot benchmarks: PIQA ..., ARC-challenge (ARC-C) ..., ARC-easy (ARC-E) ..., WinoGrande (WG) ..., HellaSwag (HLSG) ..., and CommonSenseQA (CSQA) ..."
  - [MatryoshkaKV: Adaptive KV Compression via Trainable Orthogonal Projection](https://proceedings.iclr.cc/paper_files/paper/2025/file/d7b351608d824a4680344a02b180a947-Paper-Conference.pdf)
- **CommonsenseQA** (measurements)
  > "We use Opencompass (Contributors, 2023) to test performance on several widely-used zero-shot benchmarks: PIQA ..., ARC-challenge (ARC-C) ..., ARC-easy (ARC-E) ..., WinoGrande (WG) ..., HellaSwag (HLSG) ..., and CommonSenseQA (CSQA) ..."
  - [MatryoshkaKV: Adaptive KV Compression via Trainable Orthogonal Projection](https://proceedings.iclr.cc/paper_files/paper/2025/file/d7b351608d824a4680344a02b180a947-Paper-Conference.pdf)
