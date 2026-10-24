# MLVU
**Type:** Measurement  
**Referenced in:** 19 papers  

## State of the Field

**What it is.** Across the surveyed work, MLVU is most commonly described as a long-video understanding benchmark for evaluating performance on long-form video tasks. The prevailing descriptions frame it as multi-task or question-answering oriented, with multiple-choice accuracy used in some papers; several definitions specify videos ranging from 3 minutes to 2 hours, one adds a test set of over 500 QA pairs, and another reports an average video duration of 15.5 minutes. A smaller set of papers describes it more broadly as a multimodal long-video benchmark for extended temporal reasoning, complex scene dynamics, or long-context comprehension.

**What it is claimed to measure.** Papers use MLVU to measure five constructs and two behavioral indicators. The most common reported target is video understanding, and papers also use it to measure long video understanding, long-context understanding, multimodal understanding, and temporal reasoning; among behavioral indicators, it is linked to video question answering and, more narrowly, counting. Overall, the reported measurement claims spread across several closely related long-video and question-answering targets rather than converging on a single construct.

**Space of uses.** MLVU is typically used as one component of broader evaluation suites rather than as a standalone protocol. Papers commonly place it alongside other long-video benchmarks such as VideoMME, LongVideoBench, and EgoSchema, and some also include it in wider video benchmark mixes with instruments such as MVBench or ActivityNet-QA. In these setups, papers position it as part of long-form or long-video evaluation across different temporal scales and tasks, and they often report accuracy on it.

## Sources

**[Exploring the Design Space of Visual Context Representation in Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/24e2320097bdf179e2b2719c6df2f448-Paper-Conference.pdf)**
> A long-video understanding benchmark used to evaluate multiple-choice performance on video understanding tasks.

## Relationships

### → MLVU
- **Long video understanding** (constructs) — *measured_by*
  > VideoMME (Fu et al., 2024) (1 min ∼1 hour) and MLVU (Zhou et al., 2024) (3 mins ∼2 hours) are long video benchmarks for assessing long video understanding ability. (Section 4.2)
  - [LongVU: Spatiotemporal Adaptive Compression for Long Video-Language Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25j/shen25j.pdf)
- **Video question answering** (behaviors tasks) — *measured_by*
  > To evaluate FRAME-VOYAGER, we plug it into two versions of the state-of-the-art Video-LLM named VILA (VILA-8B and VILA-40B, Lin et al. (2024b)) and conduct experiments on four widely-used Video Question Answering benchmarks, Video-MME (Fu et al., 2024a), MLVU (Zhou et al., 2024), NextQA (Xiao et al., 2021) and ActivityNet-QA (Yu et al., 2019). (Section 1)
  - [Frame-Voyager: Learning to Query Frames for Video Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d18d208fa9c333483e5724ade7beff0f-Paper-Conference.pdf)
- **Video understanding** (constructs) — *measured_by*
  > We also evaluate the performance of mPLUG-Owl3 on video and multi-image benchmarks (including NextQA (Xiao et al., 2021), MVBench (Li et al., 2023c) VideoMME (Fu et al., 2024a), LongVideoBench (Wu et al., 2024) and MLVU (Zhou et al., 2024)), as it is capable of processing multiple images with an interleaved format.
  - [mPLUG-Owl3: Towards Long Image-Sequence Understanding in Multi-Modal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f50f282a3093d36471008b045bd478af-Paper-Conference.pdf)
- **Temporal reasoning** (constructs) — *measured_by*
  > "For a comprehensive assessment of long-form video understanding capabilities, we choose two challenging benchmarks: MLVU (Zhou et al., 2024) and Video-MME (Fu et al., 2024). These benchmarks are specifically designed to test temporal reasoning across diverse domains."
  - [Temporal Reasoning Transfer from Text to Video](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7eecb72574b043ad0c69ea296212450-Paper-Conference.pdf)
- **Counting** (behaviors tasks) — *measured_by*
  > "the results of each subtask in MLVU (Zhou et al., 2024) show significant performance improvements when using cross-modal queries, particularly for frame-retrieval tasks such as counting and needle detection."
  - [LongVU: Spatiotemporal Adaptive Compression for Long Video-Language Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25j/shen25j.pdf)
