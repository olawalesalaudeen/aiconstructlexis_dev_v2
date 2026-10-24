# VNBench
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** Needle in a Haystack (NIAH)  

## State of the Field

**What it is.** Across the papers, VNBench is described both as a benchmark for long video understanding and, under the Needle in a Haystack, or NIAH, label, as an evaluation protocol for retrieving specific information from long video sequences. The most detailed description says it contains retrieval, ordering, and counting tasks, with retrieval treated as a short-dependency task and ordering and counting as long-dependency tasks. Another definition specifically places it on long-video tasks that benefit from extended temporal context.

**What it is claimed to measure.** Papers link VNBench to 2 constructs and 2 behavioral indicators. It is used to measure Long video understanding and Temporal perception, and it is also reported as measuring Chronological ordering and Counting. The recorded links are concentrated on long video understanding and related temporal, ordering, and counting abilities.

**Space of uses.** Papers use VNBench both as a standalone evaluation for long-video retrieval ability and as one benchmark within broader multi-benchmark comparisons. One study includes it in a table of video benchmarks, while another reports running NIAH experiments to assess retrieval ability from long videos. No measurement instrument is linked to it.

## Sources

**[Exploring the Design Space of Visual Context Representation in Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/24e2320097bdf179e2b2719c6df2f448-Paper-Conference.pdf)**
> A benchmark for evaluating long video understanding, particularly for tasks like Needle-In-the-Haystack-Search that benefit from extended temporal context.

**[Sharper and Faster mean Better: Towards More Efficient Vision-Language Model for Hour-scale Long Video Understanding](https://aclanthology.org/2025.acl-long.222.pdf) (as "Needle in a Haystack (NIAH)")**
> Evaluation protocol testing a model's ability to retrieve specific information from long video sequences, analogous to finding a needle in a haystack.

## Relationships

### → VNBench
- **Temporal perception** (constructs) — *measured_by*
  > Utilizing VideoNIAH, we compile a video benchmark, VNBench, which includes tasks such as retrieval, ordering, and counting to evaluate three key aspects of video understanding: temporal perception, chronological ordering, and spatio-temporal coherence. (ABSTRACT)
  - [Needle In A Video Haystack: A Scalable  Synthetic Evaluator for Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7b77476d89d5fb58aeb77691d2f40f5-Paper-Conference.pdf)
- **Chronological ordering** (behaviors tasks) — *measured_by*
  > Utilizing VideoNIAH, we compile a video benchmark, VNBench, which includes tasks such as retrieval, ordering, and counting to evaluate three key aspects of video understanding: temporal perception, chronological ordering, and spatio-temporal coherence. (ABSTRACT)
  - [Needle In A Video Haystack: A Scalable  Synthetic Evaluator for Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7b77476d89d5fb58aeb77691d2f40f5-Paper-Conference.pdf)
- **Counting** (behaviors tasks) — *measured_by*
  > "VNBench contains three distinct tasks to address various aspects of video understanding, including a short-dependency task (retrieval) and two long-dependency tasks (ordering and counting)"
  - [Needle In A Video Haystack: A Scalable  Synthetic Evaluator for Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7b77476d89d5fb58aeb77691d2f40f5-Paper-Conference.pdf)
- **Video understanding** (constructs) — *measured_by*
  > Table 3: Performance comparisons on 9 video benchmarks, including ActivityNet-QA (Yu et al., 2019), EgoSchema (Mangalam et al., 2023), EventBench (Du et al., 2024), LongVideoBench (Wu et al., 2024), PerceptionTest (Patraucean et al., 2023), MVBench (Li et al., 2024b), NExT-QA (Xiao et al., 2021), VNBench (Zhao et al., 2024), and VideoMME (Fu et al., 2024a). (Table 3)
  - [LongVILA: Scaling Long-Context Visual Language Models for Long Videos](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e163450c1ae3167832971e6da29f38d-Paper-Conference.pdf)
