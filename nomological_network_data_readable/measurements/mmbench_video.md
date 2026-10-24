# MMBench-Video
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Most descriptions treat MMBench-Video as a video-focused version of MMBench for evaluating multimodal understanding. A more detailed framing presents it as a quantitative benchmark built from long-form, multi-shot web videos and human-annotated, free-form questions, intended to evaluate LVLMs' video understanding capabilities across a hierarchical taxonomy. Papers also describe the videos as long-form and diverse, covering a broad spectrum of topics.

**What it is claimed to measure.** Papers use MMBench-Video to measure 6 constructs and 2 behavioral indicators, so its reported measurement role is spread across several targets rather than concentrated on one. The most frequently named construct links are Commonsense reasoning, Long video understanding, Spatial understanding, Temporal reasoning, and Temporal understanding; papers also connect it to 1 other construct and 2 behavioral indicators. In the relationship evidence, it is described as probing models through human-annotated ability taxonomies and free-form questions.

**Space of uses.** Across the available papers, MMBench-Video is positioned as a benchmark for evaluating LVLMs on longer, multi-shot video tasks, and as a VideoQA benchmark that asks for detailed, free-form responses to complex questions. Another paper refers to it simply as the video benchmark MMBench-Video. The only linked instrument is VLMEvalKit, and one paper relates them by stating that MMBench-Video's evaluation code will be integrated into it.

## Sources

**[SVBench: A Benchmark with Temporal Multi-Turn Dialogues for Streaming Video Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/693ce820ea7e0f0c70a2a833cbdf7ccc-Paper-Conference.pdf)**
> A video-focused version of the MMBench benchmark for evaluating multimodal understanding.

## Relationships

### → MMBench-Video
- **Video understanding** (constructs) — *measured_by*
  > To address these problems, we develop a new VideoQA benchmark, MMBench-Video, to evaluate the effectiveness of LVLMs in video understanding. (Section 1)
  - [MMBench-Video: A Long-Form Multi-Shot Benchmark for Holistic Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a2326c9715a516c91174132e0170073a-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Temporal reasoning** (constructs) — *measured_by*
  > The benchmark is meticulously crafted to probe the models’ temporal reasoning skills, with all questions human-annotated according to a carefully constructed ability taxonomy. (Abstract)
  - [MMBench-Video: A Long-Form Multi-Shot Benchmark for Holistic Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a2326c9715a516c91174132e0170073a-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > In response, we present MMBench-Video, a novel dataset tailored for longer videos, challenging models to generate detailed, free-form responses to complex questions. (Section 2.2)
  - [MMBench-Video: A Long-Form Multi-Shot Benchmark for Holistic Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a2326c9715a516c91174132e0170073a-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Temporal understanding** (constructs) — *measured_by*
  > inadequately assess models'temporal comprehension. To address these limitations, we introduce MMBench-Video
  - [MMBench-Video: A Long-Form Multi-Shot Benchmark for Holistic Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a2326c9715a516c91174132e0170073a-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Commonsense reasoning** (constructs) — *measured_by*
  > we further introduce three additional L-2 capabilities specific to MMBench-Video: Hallucination, Commonsense Reasoning, and Temporal Reasoning.
  - [MMBench-Video: A Long-Form Multi-Shot Benchmark for Holistic Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a2326c9715a516c91174132e0170073a-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Hallucination** (behaviors tasks) — *measured_by*
  > we further introduce three additional L-2 capabilities specific to MMBench-Video: Hallucination, Commonsense Reasoning, and Temporal Reasoning.
  - [MMBench-Video: A Long-Form Multi-Shot Benchmark for Holistic Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a2326c9715a516c91174132e0170073a-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Spatial understanding** (constructs) — *measured_by*
  > "The comprehensive assessment underscores the significant performance disparities between Video-LLMs and leading LVLMs in both spatial and temporal understanding"
  - [MMBench-Video: A Long-Form Multi-Shot Benchmark for Holistic Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a2326c9715a516c91174132e0170073a-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Long video understanding** (constructs) — *measured_by*
  > In addition, we rigorously assess the performance of our Video-UTR on the recently introduced and exceptionally demanding long-range video understanding benchmark, MVBench-Video. (Section 4.4)
  - [Unhackable Temporal Reward for Scalable Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1e5b9a51dcd78528795584860797fdb-Paper-Conference.pdf)

### Associated with
- **VLMEvalKit** (measurements)
  > The evalutation code of MMBench-Video will be integrated into VLMEvalKit (Abstract)
  - [MMBench-Video: A Long-Form Multi-Shot Benchmark for Holistic Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a2326c9715a516c91174132e0170073a-Paper-Datasets_and_Benchmarks_Track.pdf)
