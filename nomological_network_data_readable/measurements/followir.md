# FollowIR
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** FOLLOWIR  

## State of the Field

**What it is.** Across papers, FollowIR is most commonly described as a benchmark for instruction-following document retrieval, or more broadly for instruction following in information retrieval, used to assess how well models adapt to user instructions in search queries. A narrower description adds that it is built from three TREC collections and uses a pairwise evaluation framework to measure how models respond to altered instructions. One paper also presents FOLLOWIR as more than a benchmark alone, pairing it with training data that includes diverse and realistic instructions.

**What it is claimed to measure.** The reported measurement claims converge on a single behavioral indicator: papers use FollowIR to measure Instruction following, describing it as a benchmark that explicitly measures the instruction-following ability or capabilities of retrieval models. It is linked to one behavioral indicator, Instruction following, and to no constructs.

**Space of uses.** Papers use FollowIR as an evaluation benchmark for retrieval models, including reporting performance on instruction-following retrieval tasks and evaluating models' instruction-following capabilities on the benchmark. One paper also positions it alongside training data for teaching models to follow diverse, realistic instructions. No measurement instrument is linked to it.

## Sources

**[Diffusion vs. Autoregressive Language Models: A Text Embedding Perspective](https://aclanthology.org/2025.emnlp-main.213.pdf) (as "FOLLOWIR")**
> Benchmark for instruction-following document retrieval, assessing how well models adapt to user instructions in search queries.

## Relationships

### → FollowIR
- **Instruction following** (behaviors tasks) — *measured_by*
  > State-of-the-art bi-encoder performance on instruction-following retrieval tasks (+14.3 p-MRR, +3.1 nDCG/MAP on FollowIR (Weller et al., 2024)) with comparable scores to SoTA cross-encoders. (Section 1)
  - [Promptriever: Instruction-Trained Retrievers Can Be Prompted Like Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/2cefdb2c4c3274b78cd450bac35228df-Paper-Conference.pdf)
