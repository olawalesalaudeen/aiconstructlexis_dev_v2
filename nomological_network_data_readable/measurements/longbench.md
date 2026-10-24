# LongBench
**Type:** Measurement  
**Referenced in:** 112 papers  
**Also known as:** Longbench  

## State of the Field

**What it is.** Most papers treat LongBench as a multi-task benchmark or benchmark suite for long-context understanding in LLMs, though some describe it more loosely as a dataset or collection. The prevailing description emphasizes diverse tasks, especially question answering, summarization, and code completion or generation, while some papers also add few-shot learning and retrieval, and one study calls it a 'collection of long context benchmark datasets.' Papers also describe its scope differently: some definitions give evaluation lengths of 5k to 15k tokens, while others refer to 32K maximum length, average context around 18K, bilingual or multilingual coverage, or a medium-context framing around 10K tokens.

**What it is claimed to measure.** Across papers, the dominant measurement claim is that LongBench measures long-context understanding. It is linked to 7 constructs and 14 behavioral indicators: beyond that main construct, papers sometimes use it for general ability and length generalization, while task-level use most often targets text summarization and few-shot task performance. The claims therefore concentrate on one main construct but are spread across many specific task behaviors.

**Space of uses.** Papers mostly position LongBench as a common long-context evaluation, often paired with other benchmarks and often used through selected task groups or datasets rather than the full suite. Several studies evaluate only subsets, such as English QA or summarization tasks, and some reuse its contexts by sampling sentences or mixing extended conversations into new datasets. It is also related to 5 measurement instruments, most often 2WikiMultiHopQA, HotpotQA, MuSiQue, MultiNews, and SAMSum.

**Concerns raised.** Explicit concerns are limited. One paper notes that benchmarks such as LongBench 'scale only up to 40,000 tokens'.

## Sources

**[CLEX: Continuous  Length Extrapolation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/3df38ca67befaed9c03b95ffee07d9f8-Paper-Conference.pdf)**
> Benchmark for evaluating long-context understanding in LLMs across diverse tasks including question answering, summarization, and code completion, with input lengths ranging from 5k to 15k tokens.

**[LongGenBench: Benchmarking Long-Form Generation in Long Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/141304a37d59ec7f116f3535f1b74bde-Paper-Conference.pdf) (as "Longbench")**
> A benchmark consisting of various tasks, such as long-document question answering and query-based summarization, to evaluate long-context understanding.

## Relationships

### → LongBench
- **Long-context understanding** (constructs) — *measured_by*
  > The evaluation is performed on the LongBench benchmark (Bai et al., 2023), where we compare our model with GPT-3.5-turbo and other LLaMA-2-based open-source models designed for handling long context. (Section 4)
  - [CLEX: Continuous  Length Extrapolation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/3df38ca67befaed9c03b95ffee07d9f8-Paper-Conference.pdf)
- **Text summarization** (behaviors tasks) — *measured_by*
  > This benchmark encompasses a broad range of tasks, such as question-answering, summarization, and code completion, where the evaluation length ranges from 5k to 15k. (Section 4.3)
  - [CLEX: Continuous  Length Extrapolation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/3df38ca67befaed9c03b95ffee07d9f8-Paper-Conference.pdf)
- **Code completion** (behaviors tasks) — *measured_by*
  > Table 2: Results (%) on LongBench. ∗ indicates results reported by Bai et al. [2023]. CREAM-7B-32k is instruction-tuned for 100 steps using 4K length data on LLaMa2-7B-Chat. Model Single- Doc QA Multi- Doc QA Summari- zation Few-shot Learning Code Completion
  - [An Efficient Recipe for Long Context Extension via Middle-Focused Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/66944d3a3e77ebe366793f6a6126f3a4-Paper-Conference.pdf)
- **Few-shot task performance** (behaviors tasks) — *measured_by*
  > “we further investigate the benefits of long context models for few-shot tasks using two additional datasets (Trec and SAMSum) from LongBench.”
  - [Retrieval meets Long Context Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d75f29006df67df084e6586f1cb8458c-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > This benchmark encompasses a broad range of tasks, such as question-answering, summarization, and code completion, where the evaluation length ranges from 5k to 15k. (Section 4.3)
  - [CLEX: Continuous  Length Extrapolation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/3df38ca67befaed9c03b95ffee07d9f8-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > LongBench (Bai et al., 2024): Focused on medium-context tasks (10K tokens), it assesses summarization, QA, and fact-checking across multiple domains, offering a measure of general capabilities.
  - [Scaling Instruction-tuned LLMs to Million-token Contexts via Hierarchical Synthetic Data Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/bb36593e5e438aac5dd07907e757e087-Paper-Conference.pdf)
- **Document question answering** (behaviors tasks) — *measured_by*
  > In this section, we comprehensively evaluate how structurization boosts QA ability on seven datasets from the LongBench benchmark [3] with a variety of LLMs to examine. (Section 4.1)
  - [Enhancing LLM’s Cognition via Structurization](https://proceedings.neurips.cc/paper_files/paper/2024/file/f169ec4d47933ea4896b994af8ff4f17-Paper-Conference.pdf)
- **Long-context generation** (behaviors tasks) — *measured_by*
  > Accuracy comparison between offline searched layer-wise KV cache precision using KVTuner in Table 5 and 6 and uniform KV precision settings of the sensitive Qwen2.5-7B-Instruct on 20 LongBench long context generation benchmarks. (Table 7)
  - [KVTuner: Sensitivity-Aware Layer-Wise Mixed-Precision KV Cache Quantization for Efficient and Nearly Lossless LLM Inference](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25dd/li25dd.pdf)
- **Code generation** (behaviors tasks) — *measured_by*
  > LongBench This benchmark contains a variety of zero-shot long context tasks, such as: Single/Multi Document QA, Summarization, Coding, etc. (Section 5)
  - [DeciMamba: Exploring the Length Extrapolation Potential of Mamba](https://proceedings.iclr.cc/paper_files/paper/2025/file/fae0a4535196bf7715c1aef2ccfe283f-Paper-Conference.pdf)
- **Single-document question answering** (behaviors tasks) — *measured_by*
  > LongBench includes nearly 5000 test samples and covers six main task categories, such as single-document question answering (SQA)... (Section 2)
  - [MiniLongBench: The Low-cost Long Context Understanding Benchmark for Large Language Models](https://aclanthology.org/2025.acl-long.560.pdf)
- **Length generalization** (constructs) — *measured_by*
  > We compare our method with existing length extrapolation approaches... on LongBench (Bai et al., 2023) and InfiniteBench (Zhang et al., 2024)... (Section 5.1)
  - [ParallelComp: Parallel Long-Context Compressor for Length Extrapolation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiong25b/xiong25b.pdf)
- **Information retrieval** (behaviors tasks) — *measured_by*
  > EM-LLMS (surprise only) vs. RAG (NV-Embed-v2 retriever) vs. full-context, with LLaMA- 3.1-8B as the base LLM, evaluated on LongBench (Figure 1).
  - [Human-inspired Episodic Memory for Infinite Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/c05144b635df16ac9bbf8246bbbd55ca-Paper-Conference.pdf)
- **Contextual reasoning** (constructs) — *measured_by*
  > For LongBench, we use datasets from the Single-Doc QA and Multi-Doc QA categories to assess contextual reasoning.
  - [Not All Heads Matter: A Head-Level KV Cache Compression Method with Integrated Retrieval and Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f649556471416b35e60ae0de7c1e3619-Paper-Conference.pdf)
- **Fact checking** (behaviors tasks) — *measured_by*
  > LongBench (Bai et al., 2024): Focused on medium-context tasks (10K tokens), it assesses summarization, QA, and fact-checking across multiple domains...
  - [Scaling Instruction-tuned LLMs to Million-token Contexts via Hierarchical Synthetic Data Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/bb36593e5e438aac5dd07907e757e087-Paper-Conference.pdf)
- **Multi-document question answering** (behaviors tasks) — *measured_by*
  > "These tasks belong to 6 categories in total: single-doc QA, multi-doc QA, summarization, few-shot learning, synthetic, and code."
  - [Radar: Fast Long-Context Decoding for Any Transformer](https://proceedings.iclr.cc/paper_files/paper/2025/file/3c44405d619a6920384a45bce876b41e-Paper-Conference.pdf)
- **Knowledge retrieval** (behaviors tasks) — *measured_by*
  > "This benchmark is the most important because it shows both long context generation performance and knowledge retrieval performance"
  - [A Training-Free Sub-quadratic Cost Transformer Model Serving Framework with Hierarchically Pruned Attention](https://proceedings.iclr.cc/paper_files/paper/2025/file/043f0503c4f652c737add3690aa5d12c-Paper-Conference.pdf)
- **In-context learning** (constructs) — *measured_by*
  > “LongBench (in-context learning and code completion)”
  - [LongRoPE2: Near-Lossless LLM Context Window Scaling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shang25a/shang25a.pdf)
- **Synthetic recall** (behaviors tasks) — *measured_by*
  > On LongBench, we evaluate our method with a range of realistic scenarios, including single-/multi-document QA, document summarization, code completion, information retrieval, etc. (Section 5.1)
  - [ShadowKV: KV Cache in Shadows for High-Throughput Long-Context LLM Inference](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25b/sun25b.pdf)
- **Long-context reasoning** (constructs) — *measured_by*
  > Long document reasoning performance (%) on Longbench and InfiniteBench (Table 1)
  - [ToM: Leveraging Tree-oriented MapReduce for Long-Context Reasoning in Large Language Models](https://aclanthology.org/2025.emnlp-main.899.pdf)

### Associated with
- **2WikiMultiHopQA** (measurements)
  > Following CacheBlend, we evaluate on four LongBench datasets (Bai et al., 2024): 2WikiMQA... (Section 5.1).
  - [EPIC: Efficient Position-Independent Caching for Serving Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25j/hu25j.pdf)
- **MuSiQue** (measurements)
  > Following CacheBlend, we evaluate on four LongBench datasets (Bai et al., 2024): 2WikiMQA (multi-document question answering), MuSiQue (multi-document question answering)... (Section 5.1).
  - [EPIC: Efficient Position-Independent Caching for Serving Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25j/hu25j.pdf)
- **HotpotQA** (measurements)
  > We also include HotpotQA (multi-document question answering) from LongBench... (Section 5.1).
  - [EPIC: Efficient Position-Independent Caching for Serving Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25j/hu25j.pdf)
- **SAMSum** (measurements)
  > Following CacheBlend, we evaluate on four LongBench datasets (Bai et al., 2024): ...SAMSum (few-shot instruction following)... (Section 5.1).
  - [EPIC: Efficient Position-Independent Caching for Serving Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25j/hu25j.pdf)
- **MultiNews** (measurements)
  > Following CacheBlend, we evaluate on four LongBench datasets (Bai et al., 2024): ...and MultiNews (multi-document summarization) (Section 5.1).
  - [EPIC: Efficient Position-Independent Caching for Serving Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25j/hu25j.pdf)
