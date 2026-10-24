# BRIGHT
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** In the available work, BRIGHT is treated as a text retrieval benchmark centered on reasoning in retrieval. It is described as focusing on complex queries that require deep reasoning to identify useful passages beyond simple semantic relevance, and one abstract presents it as the first text retrieval benchmark requiring intensive reasoning to retrieve relevant documents.

**What it is claimed to measure.** Its measurement claims are narrow rather than spread across many targets. Papers link BRIGHT to 1 construct, Information retrieval ability, and to no behavioral indicators; the recorded relationship is that Information retrieval ability is measured by BRIGHT. In those uses, BRIGHT is presented as benchmarking retrieval on challenging, reasoning-intensive queries.

**Space of uses.** Papers position BRIGHT as a challenging benchmark for evaluating retrieval systems. In LimRank: Less is More for Reasoning-Intensive Information Reranking, it is used alongside FOLLOWIR, with BRIGHT covering reasoning-intensive retrieval and FOLLOWIR covering instruction-following retrieval. No other measurement instrument is linked to it in the recorded relationships.

## Sources

**[Training a Utility-based Retriever Through Shared Context Attribution for Retrieval-Augmented Language Models](https://aclanthology.org/2025.emnlp-main.33.pdf)**
> A benchmark focusing on reasoning in retrieval, particularly for complex queries requiring deep reasoning to identify useful passages beyond semantic relevance.

## Relationships

### → BRIGHT
- **Information retrieval ability** (constructs) — *measured_by*
  > To better benchmark retrieval on such challenging queries, we introduce BRIGHT, the first text retrieval benchmark that requires intensive reasoning to retrieve relevant documents. (ABSTRACT)
  - [BRIGHT: A Realistic and Challenging Benchmark for Reasoning-Intensive Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/7a0f8055c838df8e62329a76c7c6403d-Paper-Conference.pdf)
- **Data contamination** (constructs) — *measured_by*
  > Moreover, our results demonstrate the robustness of BRIGHT against potential data leakage during large-scale pre-training...
  - [BRIGHT: A Realistic and Challenging Benchmark for Reasoning-Intensive Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/7a0f8055c838df8e62329a76c7c6403d-Paper-Conference.pdf)
