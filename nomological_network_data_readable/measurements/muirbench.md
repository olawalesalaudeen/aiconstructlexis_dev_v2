# MuirBench
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** MUIRBENCH  

## State of the Field

**What it is.** Definitions treat MuirBench as a multimodal, multi-image benchmark for evaluating understanding or reasoning across multiple images. Papers describe it as a comprehensive benchmark for assessing multi-image understanding by multimodal LLMs, as testing a model's ability to integrate information from diverse visual inputs, and as assessing various image relationships; one description explicitly adds that it does not cover spatial relationships.

**What it is claimed to measure.** Papers link it to 3 constructs and 5 behavioral indicators, so the reported measurement claims are spread across several targets rather than centered on one alone. Among the named links, MuirBench measures multi-image reasoning, scene understanding, visual grounding, chronological ordering, and counting; relationship descriptions further frame these as abilities such as ordering images from text and counting specific objects across multiple images.

**Space of uses.** No other measurement instrument is linked to it. Papers use it as a benchmark for multimodal LLM evaluation and comparative performance reporting: one study reports "13.3% on MuirBench" in its abstract, and another passage says a model still shows "a performance gap" relative to another model on this benchmark.

**Concerns raised.** The concern raised about MuirBench is coverage. One paper states that it "does not consider spatial relationships between objects in multiple images," and notes this in connection with multi-image applications such as 3D navigation.

## Sources

**[MMIU: Multimodal Multi-image Understanding for Evaluating Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5f92032278b1c70946e0b753068de51e-Paper-Conference.pdf) (as "MUIRBENCH")**
> A multi-image evaluation benchmark that assesses various image relationships but does not cover spatial relationships.

**[MAmmoTH-VL: Eliciting Multimodal Reasoning with Instruction Tuning at Scale](https://aclanthology.org/2025.acl-long.680.pdf)**
> Multimodal benchmark evaluating reasoning across multiple images, testing a model's ability to integrate information from diverse visual inputs.

## Relationships

### → MuirBench
- **Multi-image reasoning** (constructs) — *measured_by*
  > we introduce MUIRBENCH (MULTI-IMAGE UNDERSTANDING BENCHMARK), a comprehensive benchmark designed to rigorously assess and evaluate multi-image understanding by multimodal LLMs. (Section 2)
  - [MuirBench: A Comprehensive Benchmark for Robust Multi-image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/9cf6139382f98623d08cc595622f3fb1-Paper-Conference.pdf)
- **Counting** (behaviors tasks) — *measured_by*
  > [COUNTING] aims to evaluate the ability of models to count the number of specific objects across multiple images. (Section 3.1)
  - [MuirBench: A Comprehensive Benchmark for Robust Multi-image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/9cf6139382f98623d08cc595622f3fb1-Paper-Conference.pdf)
- **Diagram understanding** (behaviors tasks) — *measured_by*
  > [DIAGRAM UNDERSTANDING] aims to evaluate the ability of models to understand information conveyed in diagram images. (Section 3.1)
  - [MuirBench: A Comprehensive Benchmark for Robust Multi-image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/9cf6139382f98623d08cc595622f3fb1-Paper-Conference.pdf)
- **Cross-modal retrieval** (behaviors tasks) — *measured_by*
  > [IMAGE-TEXT MATCHING] aims to evaluate the ability of models to understand the meaning of a text snippet and match it with the corresponding visual content or vice versa. (Section 3.1)
  - [MuirBench: A Comprehensive Benchmark for Robust Multi-image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/9cf6139382f98623d08cc595622f3fb1-Paper-Conference.pdf)
- **Scene understanding** (constructs) — *measured_by*
  > [SCENE UNDERSTANDING] aims to evaluate the ability of models to understand a scene comprised of multiple views from multiple surveillance images. (Section 3.1)
  - [MuirBench: A Comprehensive Benchmark for Robust Multi-image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/9cf6139382f98623d08cc595622f3fb1-Paper-Conference.pdf)
- **Information retrieval** (behaviors tasks) — *measured_by*
  > [VISUAL RETRIEVAL] aims to evaluate the ability of models to retrieval images that contain the same building. (Section 3.1)
  - [MuirBench: A Comprehensive Benchmark for Robust Multi-image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/9cf6139382f98623d08cc595622f3fb1-Paper-Conference.pdf)
