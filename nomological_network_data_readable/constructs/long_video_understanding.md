# Long video understanding
**Type:** Construct  
**Referenced in:** 17 papers  
**Also known as:** Long video comprehension, Long-video understanding, Long-range video understanding  

## State of the Field

**Definition agreement:** Consensus. Most papers define long video understanding as a model's ability to comprehend and reason over extended video sequences, especially by integrating content, context, and temporal dynamics across long time spans. A single paper frames it more as a task involving segmentation and summarization of long videos, but it still targets understanding the same kind of long-duration video content rather than a different phenomenon.

**Space of definitions.** Across the papers, the prevailing usage treats long video understanding as a model ability or capacity to comprehend and reason over extended video sequences, especially their content, temporal dynamics, and information spread across long durations. Several definitions add plot, relationships, context, or retrieval and synthesis across long time spans, but stay within that same framing. A smaller line of work describes it instead as the task of processing videos much longer than short clips, often by segmenting them into shorter clips and summarizing them, so the main disagreement is between an ability framing and a task framing.

**Space of facets.** Papers usually place the construct as a facet of broader multi-modal or video understanding, and one paper explicitly relates it to long-context understanding. The naming varies more than the content: authors also use long video comprehension, long-video understanding, and long-range video understanding for broadly the same phenomenon. Some snippets also describe whole-video settings where models first find the relevant scenes using a hint, and one paper foregrounds target-centric understanding of long videos.

**Space of measurement.** Operationalization is benchmark-based: papers link the construct to 12 measurement instruments, while only one behavioral indicator is linked elsewhere. The most frequent instruments are Video-MME, EgoSchema, MLVU, MVBench, and NExT-QA, with several additional instruments appearing less often. These benchmarks make the construct concrete through long or minute-scale video comprehension settings: Video-MME and MLVU are described as long video benchmarks for assessing long video understanding ability, EgoSchema uses three-minute videos with questions requiring more than 100 seconds within a video, and NExT-QA is grouped with minute-long videos containing thousands of frames, which largely matches definitions centered on extended sequences and long-span reasoning.

**Links.** Beyond measurement, one paper reports that long video understanding is related to long-context understanding, stating that long-context capability is especially relevant for it. One paper also claims a causal relationship from temporal grounding to long video understanding, arguing that explicitly performing temporal grounding could assist it by establishing detailed correspondence between visual segments and fine-grained semantics.

## Sources

**[LongVILA: Scaling Long-Context Visual Language Models for Long Videos](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e163450c1ae3167832971e6da29f38d-Paper-Conference.pdf)**
> A specific facet of multi-modal understanding focused on the model's ability to comprehend and reason about the content and temporal dynamics of extended video sequences.

**[Teaching Human Behavior Improves Content Understanding Abilities Of VLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/f0d8e47e50fa0ef219c61d6fb9f2a4b3-Paper-Conference.pdf) (as "Long video comprehension")**
> The capacity to understand and reason over extended video sequences, including plot, relationships, and temporal dynamics.

**[$∞$-Video: A Training-Free Approach to Long Video Understanding via Continuous-Time Memory Consolidation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/santos25a/santos25a.pdf) (as "Long-video understanding")**
> The ability of a model to process, comprehend, and reason about video content that extends beyond a short time frame, often requiring the integration of information over long durations.

**[Unhackable Temporal Reward for Scalable Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1e5b9a51dcd78528795584860797fdb-Paper-Conference.pdf) (as "Long-range video understanding")**
> Comprehending and reasoning over extended video sequences.

## Relationships

### Long video understanding →
- **Video-MME** (measurements) — *measured_by*
  > Table 4 shows long video evaluations on the Video-MME (Fu et al., 2024) benchmark, demonstrating our model as the best performing model among its size class. (Section 4.3.1)
  - [World Model on Million-Length Video And Language With Blockwise RingAttention](https://proceedings.iclr.cc/paper_files/paper/2025/file/71859ac75d53879d9bbd2f4b77b59929-Paper-Conference.pdf)
- **MLVU** (measurements) — *measured_by*
  > VideoMME (Fu et al., 2024) (1 min ∼1 hour) and MLVU (Zhou et al., 2024) (3 mins ∼2 hours) are long video benchmarks for assessing long video understanding ability. (Section 4.2)
  - [LongVU: Spatiotemporal Adaptive Compression for Long Video-Language Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25j/shen25j.pdf)
- **LongVideoBench** (measurements) — *measured_by*
  > For long video understanding, we use LongVideoBench (Wu et al., 2024a) (8 seconds to 1 hour), MLVU (Zhou et al., 2024) (3 minutes to 2 hours), and Video-MME (Fu et al., 2024) (11 seconds to 60 minutes). (Section 5.1)
  - [VideoRoPE: What Makes for Good Video Rotary Position Embedding?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25h/wei25h.pdf)
- **EgoSchema** (measurements) — *measured_by*
  > EgoSchema [51] contains over 5K three-minute videos with multiple-choice questions. Each question has a long temporal certificate, requiring more than 100 seconds within a video to produce a correct answer. (Section 4.1)
  - [Streaming Long Video Understanding with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d7ce06e9293c3d8e6cb3f80b4157f875-Paper-Conference.pdf)
- **NExT-QA** (measurements) — *measured_by*
  > We evaluate our model on long video QA datasets... Among them, Next-QA [79], Next-GQA [80] and VideoChatGPT [50] encompass minute-long videos with thousands of frames. (Section 4.1)
  - [Streaming Long Video Understanding with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d7ce06e9293c3d8e6cb3f80b4157f875-Paper-Conference.pdf)
- **MMBench-Video** (measurements) — *measured_by*
  > In addition, we rigorously assess the performance of our Video-UTR on the recently introduced and exceptionally demanding long-range video understanding benchmark, MVBench-Video. (Section 4.4)
  - [Unhackable Temporal Reward for Scalable Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1e5b9a51dcd78528795584860797fdb-Paper-Conference.pdf)
- **InfiniBench** (measurements) — *measured_by*
  > we introduce InfiniBench, a comprehensive benchmark designed to evaluate the capabilities of models in long video understanding rigorously.
  - [InfiniBench: A Benchmark for Large Multi-Modal Models in Long-Form Movies and TV Shows](https://aclanthology.org/2025.emnlp-main.984.pdf)

### → Long video understanding
- **Temporal grounding** (behaviors tasks) — *causes*
  > We argue long video understanding could be assisted by explicitly performing temporal grounding, as grounding supervision enables MLLM to establish the detailed correspondance between the visual segments and fine-grained semantics.
  - [TimeSuite: Improving MLLMs for Long Video Understanding via Grounded Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e8309c9ca683e11672e3dbcd4b87776-Paper-Conference.pdf)

### Associated with
- **Long-context understanding** (constructs)
  > Long-context capability is critical for multi-modal foundation models, especially for long video understanding. (ABSTRACT)
  - [LongVILA: Scaling Long-Context Visual Language Models for Long Videos](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e163450c1ae3167832971e6da29f38d-Paper-Conference.pdf)
