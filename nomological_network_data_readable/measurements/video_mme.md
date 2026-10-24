# Video-MME
**Type:** Measurement  
**Referenced in:** 46 papers  
**Also known as:** VideoMME  

## State of the Field

**What it is.** Across papers, Video-MME is most commonly treated as a multimodal benchmark for video understanding or video analysis, often described as comprehensive and frequently used for long-video evaluation. Many definitions frame it as a video question answering or multiple-choice benchmark for video-language models, while some describe broader coverage, including captioning, question answering, and retrieval with subtitles. Papers also describe its scope in different ways: videos are said to range from 11 seconds to 1 hour or from 1 minute to 1 hour, some analyses split them into short, medium, and long durations, one definition reports 900 videos and 2,700 QA pairs, and another describes 6 visual domains and 30 subfields.

**What it is claimed to measure.** Papers link Video-MME to 4 constructs and 3 behavioral indicators. The prevailing use is to measure video understanding, and papers also report it as measuring long video understanding; a smaller line of work treats it as measuring spatiotemporal reasoning and temporal reasoning. Among behavioral indicators, it is most often used for video question answering, while counting and optical character recognition appear as narrower uses tied to the benchmark's question-type categories.

**Space of uses.** No measurement instrument is linked to it, but papers commonly evaluate Video-MME alongside MLVU, EgoSchema, MVBench, LongVideoBench, and TempCompass, as well as several other video benchmarks. Across those comparisons, papers position it as a recurring benchmark for general video understanding, long-form or long-context evaluation, and sometimes mainly for ablation study; one paper also says it uses top models from the benchmark for further evaluation. Some reports additionally separate short, medium, and long splits, the long category, or results with and without subtitles.

## Sources

**[Video Action Differencing](https://proceedings.iclr.cc/paper_files/paper/2025/file/26f62bf3b74cda621831f550c6ee2dce-Paper-Conference.pdf)**
> A video understanding benchmark used to identify and select top-performing large multimodal models for evaluation.

**[MMInference: Accelerating Pre-filling for Long-Context Visual Language Models via Modality-Aware Permutation Sparse Attention](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25aq/li25aq.pdf) (as "VideoMME")**
> Multimodal evaluation benchmark for video models covering captioning, question answering, and retrieval tasks with subtitles.

## Relationships

### → Video-MME
- **Long video understanding** (constructs) — *measured_by*
  > Table 4 shows long video evaluations on the Video-MME (Fu et al., 2024) benchmark, demonstrating our model as the best performing model among its size class. (Section 4.3.1)
  - [World Model on Million-Length Video And Language With Blockwise RingAttention](https://proceedings.iclr.cc/paper_files/paper/2025/file/71859ac75d53879d9bbd2f4b77b59929-Paper-Conference.pdf)
- **Video understanding** (constructs) — *measured_by*
  > For video understanding, we focused on three general benchmarks: MVBench (Li et al., 2024c), TempCompass (Liu et al., 2024c), and VideoMME (Fu et al., 2024)... (Section 4.2)
  - [Unhackable Temporal Reward for Scalable Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1e5b9a51dcd78528795584860797fdb-Paper-Conference.pdf)
- **Video question answering** (behaviors tasks) — *measured_by*
  > To evaluate FRAME-VOYAGER, we plug it into two versions of the state-of-the-art Video-LLM named VILA (VILA-8B and VILA-40B, Lin et al. (2024b)) and conduct experiments on four widely-used Video Question Answering benchmarks, Video-MME (Fu et al., 2024a), MLVU (Zhou et al., 2024), NextQA (Xiao et al., 2021) and ActivityNet-QA (Yu et al., 2019). (Section 1)
  - [Frame-Voyager: Learning to Query Frames for Video Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d18d208fa9c333483e5724ade7beff0f-Paper-Conference.pdf)
- **Temporal reasoning** (constructs) — *measured_by*
  > "For a comprehensive assessment of long-form video understanding capabilities, we choose two challenging benchmarks: MLVU (Zhou et al., 2024) and Video-MME (Fu et al., 2024). These benchmarks are specifically designed to test temporal reasoning across diverse domains."
  - [Temporal Reasoning Transfer from Text to Video](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7eecb72574b043ad0c69ea296212450-Paper-Conference.pdf)
