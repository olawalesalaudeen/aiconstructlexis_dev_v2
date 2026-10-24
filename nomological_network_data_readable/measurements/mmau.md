# MMAU
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Papers most commonly describe MMAU as a benchmark for expert-level audio reasoning, with sound and music subsets rather than a basic classification setup. The available definitions portray it as the Massive Multi-Task Audio Understanding and Reasoning Benchmark, aimed at complex understanding beyond basic classification, and they note that it includes information extraction and reasoning questions. One survey also places it among benchmarks for auditory expertise and musical understanding, including melodic structure, harmony, instrument identification, and contextual music interpretation.

**What it is claimed to measure.** Across papers, the measurement claims are spread across six constructs and three behavioral indicators rather than converging on a single target. MMAU is reported as measuring audio perception, audio reasoning, domain knowledge, knowledge retrieval, and tool use, with four other linked targets also recorded. The recorded descriptions frame these uses in terms such as evaluating "expert-level multimodal reasoning and knowledge-retrieval capabilities" and emphasizing "advanced perception and reasoning with domain-specific knowledge."

**Space of uses.** No other measurement instrument is linked to it, though one paper uses it alongside AIR-Bench Chat to evaluate understanding and reasoning in complex audio QA tasks. Another paper uses MMAU for tool use evaluation and reports performance on Tool Execution and Tool Planning. The available examples also report results separately for MMAU Sound and MMAU Music.

## Sources

**[Audio Flamingo 2: An Audio-Language Model with Long-Audio Understanding and Expert Reasoning Abilities](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ghosh25b/ghosh25b.pdf)**
> A benchmark for evaluating expert-level audio reasoning, with sound and music subsets that assess complex understanding beyond basic classification.

## Relationships

### → MMAU
- **Audio understanding** (constructs) — *measured_by*
  > To further evaluate our model’s understanding and reasoning capabilities in complex audio QA tasks, we conducted experiments on AIR-Bench Chat (Yang et al., 2024) and MMAU (Sakshi et al., 2024) benchmarks. (Section 4.2.2)
  - [MATS: An Audio Language Model under Text-only Supervision](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ai/wang25ai.pdf)
- **Audio perception** (constructs) — *measured_by*
  > MMAU emphasizes advanced perception and reasoning with domain-specific knowledge, challenging models to tackle tasks akin to those faced by experts. (ABSTRACT)
  - [MMAU: A Massive Multi-Task Audio Understanding and Reasoning Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/d36f208919582785db965fe648b9fe59-Paper-Conference.pdf)
- **Domain knowledge** (constructs) — *measured_by*
  > MMAU emphasizes advanced perception and reasoning with domain-specific knowledge, challenging models to tackle tasks akin to those faced by experts. (ABSTRACT)
  - [MMAU: A Massive Multi-Task Audio Understanding and Reasoning Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/d36f208919582785db965fe648b9fe59-Paper-Conference.pdf)
- **Knowledge retrieval** (behaviors tasks) — *measured_by*
  > We introduce the Massive Multi-Task Audio Understanding and Reasoning Benchmark (MMAU), a novel benchmark designed to evaluate the expert-level multimodal reasoning and knowledge-retrieval capabilities of large audio-language models (LALMs). (Section 3.1)
  - [MMAU: A Massive Multi-Task Audio Understanding and Reasoning Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/d36f208919582785db965fe648b9fe59-Paper-Conference.pdf)
- **Information extraction** (behaviors tasks) — *measured_by*
  > “It includes information extraction1 and reasoning 2 questions”
  - [MMAU: A Massive Multi-Task Audio Understanding and Reasoning Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/d36f208919582785db965fe648b9fe59-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > “It includes information extraction1 and reasoning 2 questions”
  - [MMAU: A Massive Multi-Task Audio Understanding and Reasoning Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/d36f208919582785db965fe648b9fe59-Paper-Conference.pdf)
- **Tool use** (behaviors tasks) — *measured_by*
  > We evaluate the tool use performance on MMAU (Yin et al., 2024) and report the performance on Tool Execution and Tool Planning.
  - [Instruction-Following Pruning for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hou25b/hou25b.pdf)
- **Audio reasoning** (constructs) — *measured_by*
  > To further evaluate our model’s understanding and reasoning capabilities in complex audio QA tasks, we conducted experiments on AIR-Bench Chat (Yang et al., 2024) and MMAU (Sakshi et al., 2024) benchmarks. (Section 4.2.2)
  - [MATS: An Audio Language Model under Text-only Supervision](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ai/wang25ai.pdf)
