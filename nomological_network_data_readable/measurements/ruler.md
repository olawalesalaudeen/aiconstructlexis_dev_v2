# RULER
**Type:** Measurement  
**Referenced in:** 64 papers  
**Also known as:** Ruler  

## State of the Field

**What it is.** Across papers, the prevailing usage is as a synthetic benchmark or benchmark suite for evaluating long-context language models, often with customizable or varying sequence lengths and task complexity. Most descriptions say it contains 13 tasks across 4 categories or domains, commonly including Needle-in-a-Haystack retrieval and question answering, while papers vary on the remaining categories, describing them as variable tracking, multi-hop tracing, aggregation, or common and frequent word extraction; one definition mentions five categories. Some papers further describe it as extending needle-in-a-haystack testing with multi-key and multi-value retrieval, and as challenging the effective or true context window length across increasing context lengths.

**What it is claimed to measure.** Papers most often use RULER to measure long-context understanding, describing it as assessing long-context capabilities, understanding capacity, processing capability, or long-context ability. More broadly, papers link it to 5 constructs and 9 behavioral indicators: after long-context understanding, the recurring construct-level uses are length generalization, long-context reasoning, long-range dependency modeling, and multi-hop reasoning, while the most frequent behavioral indicators are synthetic recall, multi-hop question answering, state tracking, question answering, and document question answering, plus 4 other indicators. The dominant measurement claim is broad long-context capability, but papers also use particular RULER tasks to evaluate retrieval, tracking, aggregation, and QA behavior.

**Space of uses.** Papers typically use RULER as a main long-context evaluation benchmark, either reporting results across context lengths or on selected tasks such as variable tracking, common word extraction, frequent word extraction, and question answering 1. Among linked instruments, papers most often report that RULER measures Needle-in-a-Haystack, and one paper also says Needle-in-a-Haystack is related to RULER. A smaller line of work says BABILong is related to RULER through a shared "needle-in-a-haystack" concept, and one paper reports that HELMET is measured by selecting multiple synthetic recall tasks from RULER.

**Concerns raised.** Explicit concerns are limited. One paper groups RULER with several other long-context evaluation datasets and says they primarily assess retrieval and summarization rather than complex reasoning.

## Sources

**[FlexPrefill: A Context-Aware Sparse Attention Mechanism for Efficient Long-Sequence Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/03645743ea35690f30d795d6bac149a5-Paper-Conference.pdf)**
> A synthetic benchmark dataset created to evaluate long-context LLMs with customizable sequence lengths and task complexities, including tasks like needle-in-a-haystack, multi-hop tracing, and aggregation.

**[MagicDec: Breaking the Latency-Throughput Tradeoff for Long Context Generation with Speculative Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/13f972adf12bdf886583d48cd528002f-Paper-Conference.pdf) (as "Ruler")**
> A benchmark suite designed to evaluate the long-context capabilities of language models across various tasks.

## Relationships

### → RULER
- **Long-context understanding** (constructs) — *measured_by*
  > We evaluate on the RULER benchmark (Hsieh et al., 2024), a set of 13 synthetic tasks aimed to assess long-context capabilities of language models. (Section 7.1.1)
  - [Jamba: Hybrid Transformer-Mamba Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a9ed43fa31dc8b4a7d7a673d713dcb5f-Paper-Conference.pdf)
- **Synthetic recall** (behaviors tasks) — *measured_by*
  > “RULER includes 8 variants of needle-in-a-haystack retrieval tasks”
  - [Jamba: Hybrid Transformer-Mamba Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a9ed43fa31dc8b4a7d7a673d713dcb5f-Paper-Conference.pdf)
- **State tracking** (behaviors tasks) — *measured_by*
  > The RULER benchmark ... encompasses ... tasks involving variable tracking
  - [Why Does the Effective Context Length of LLMs Fall Short?](https://proceedings.iclr.cc/paper_files/paper/2025/file/884baf65392170763b27c914087bde01-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > Figure 5 illustrates the trade-off between two representative KV sparsification algorithms, SnapKV and PQCache, and their respective theoretical speedups on three distinct Ruler tasks: needle in a haystack with passkeys 3 (niah-multikeys-3), common word extraction (cwe), and question answering 1 (qa-1). (Section 4.4)
  - [MagicDec: Breaking the Latency-Throughput Tradeoff for Long Context Generation with Speculative Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/13f972adf12bdf886583d48cd528002f-Paper-Conference.pdf)
- **Long-context reasoning** (constructs) — *measured_by*
  > The latter two [BABILong and RULER] require models to not only retireve multiple pieces of evidence from the long context, but also reason over them... (Section 4.1)
  - [A Little Goes a Long Way: Efficient Long Context Training and Inference with Partial Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/127a649ea9ae2df15e903a91352cfd3a-Paper-Conference.pdf)
- **Length generalization** (constructs) — *measured_by*
  > Benchmarks of Long Context Generalization (Section 5.2)
  - [LongRecipe: Recipe for Efficient Long Context Generalization in Large Language Models](https://aclanthology.org/2025.acl-long.581.pdf)
- **Multi-hop question answering** (behaviors tasks) — *measured_by*
  > RULER reports the averaged accuracy on two multi-hop question answering subtasks from RULER. (Table 4)
  - [A Little Goes a Long Way: Efficient Long Context Training and Inference with Partial Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/127a649ea9ae2df15e903a91352cfd3a-Paper-Conference.pdf)
- **Information synthesis** (behaviors tasks) — *measured_by*
  > “RULER (Hsieh et al., 2024): a synthetic benchmark with 13 tasks categorized into 4 domains: Needle-in-a-Haystack (Retrieval), Multi-Hop Tracing, Aggregation, and Question Answering.”
  - [Star Attention: Efficient LLM Inference over Long Sequences](https://raw.githubusercontent.com/mlresearch/v267/main/assets/acharya25a/acharya25a.pdf)
- **Document question answering** (behaviors tasks) — *measured_by*
  > "The RULER benchmark (Hsieh et al., 2024) encompasses a variety of synthetic tasks, including eight variants of Needle-in-a-Haystack (NIAH), as well as tasks involving variable tracking, counting, and long-context question answering (QA)."
  - [Why Does the Effective Context Length of LLMs Fall Short?](https://proceedings.iclr.cc/paper_files/paper/2025/file/884baf65392170763b27c914087bde01-Paper-Conference.pdf)
- **Multi-hop reasoning** (constructs) — *measured_by*
  > "RULER generates synthetic tasks across multiple categories, including multi-hop reasoning and document tracing, and measures the model’s accuracy."
  - [Scaling Instruction-tuned LLMs to Million-token Contexts via Hierarchical Synthetic Data Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/bb36593e5e438aac5dd07907e757e087-Paper-Conference.pdf)
- **Context retrieval** (behaviors tasks) — *measured_by*
  > Notably, APB significantly enhances performance in complex context retrieval tasks, such as R.KV in ∞Bench and MK3 in RULER.
  - [APB: Accelerating Distributed Long-Context Inference by Passing Compressed Context Blocks across GPUs](https://aclanthology.org/2025.acl-long.525.pdf)
- **Information retrieval** (behaviors tasks) — *measured_by*
  > RULER (Hsieh et al., 2024) is a suite of synthetically created tasks with controllable lengths, which ranges from retrieval, multi-hop tracking, real QA datasets, and context aggregation tasks. (Section 4.5)
  - [Speculative Prefill: Turbocharging TTFT with Lightweight and Training-Free Token Importance Estimation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25g/liu25g.pdf)
- **Long-range dependency modeling** (constructs) — *measured_by*
  > Extensive experiments on the HELMET(Yen et al., 2024b) and RULER(Hsieh et al., 2024) benchmarks demonstrate that NExtLong significantly improves the model’s ability to capture and utilize long-range dependencies. (Section 1. Introduction)
  - [NExtLong: Toward Effective Long-Context Training without Long Documents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gao25n/gao25n.pdf)
- **Text summarization** (behaviors tasks) — *measured_by*
  > A significant portion of long-context evaluation datasets, including RULER (Hsieh et al., 2024b), LongBench (Bai et al., 2024), LongBench v2 (Bai et al., 2025), and LOFT (Lee et al., 2024), primarily assess retrieval and summarization rather than complex reasoning. (Section 2)
  - [GSM-$∞$: How Do your LLMs Behave over Infinitely Increasing Reasoning Complexity and Context Length?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25m/zhou25m.pdf)

### Associated with
- **Needle-in-a-Haystack** (measurements)
  > Ruler evaluates models across tasks like NIAH and multi-hop tracing. (Section 5)
  - [LongGenBench: Benchmarking Long-Form Generation in Long Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/141304a37d59ec7f116f3535f1b74bde-Paper-Conference.pdf)
- **BABILong** (measurements)
  > RULER, a recently proposed long-context benchmark, shares a similar "needle-in-a-haystack" concept with BABILong.
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **HELMET** (measurements)
  > “For this category, we select multiple synthetic recall tasks from RULER (an extended version of NIAH; Hsieh et al., 2024) and also add a JSON KV retrieval task (Liu et al., 2023), which we find more challenging.”
  - [HELMET: How to Evaluate Long-context Models Effectively and Thoroughly](https://proceedings.iclr.cc/paper_files/paper/2025/file/f5332c8273d02729730a9c24dec2135e-Paper-Conference.pdf)
