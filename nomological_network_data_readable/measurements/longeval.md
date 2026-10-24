# LongEval
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the papers, the prevailing description is a benchmark for long-context performance in language models. Most definitions specify topic retrieval and line retrieval tasks with varying prompt lengths, while another paper summarizes it more broadly as including various long context retrieval tasks and presents it as an early benchmark for long-context models.

**What it is claimed to measure.** Papers describe it as measuring long-context performance, and one paper frames this as evaluating tasks that require understanding of long-span context. No constructs or behavioral indicators are linked to it, so the papers' claims about what it measures stay at that broad performance level.

**Space of uses.** Papers use it as an evaluation benchmark for long-context analysis, and no measurement instrument is linked to it. One study reports additional experiments on LongEval to provide a more comprehensive analysis of scalability, and another says the StreamEval dataset was inspired by the LongEval benchmark.

## Sources

**[Efficient Streaming Language Models with Attention Sinks](https://proceedings.iclr.cc/paper_files/paper/2024/file/5e5fd18f863cbe6d8ae392a93fd271c9-Paper-Conference.pdf)**
> A benchmark designed to measure the long-context performance of language models, consisting of topic retrieval and line retrieval tasks with varying prompt lengths.

## Relationships

### → LongEval
- **Long-context understanding** (constructs) — *measured_by*
  > we conducted additional experiments on the LongEval benchmark (Li et al., 2023), which is designed to measure long-context performance (Section 5.3).
  - [IceFormer: Accelerated Inference with Long-Sequence Transformers on CPUs](https://proceedings.iclr.cc/paper_files/paper/2024/file/4059971112ab22fc7b6aed520aaca6b2-Paper-Conference.pdf)
- **Synthetic recall** (behaviors tasks) — *measured_by*
  > we conduct experiments on LongEval (Li et al., 2023a), a benchmark for long-context retrieval abilities, where we can separate the answer tokens that match the desired answers (e.g., <45129> in Figure 2(a)) from non-answer tokens. (Section 2.1)
  - [What is Wrong with Perplexity for Long-context Language Modeling?](https://proceedings.iclr.cc/paper_files/paper/2025/file/ebd6641c32ed633c2a3addc689d39896-Paper-Conference.pdf)
