# InfiniteBench
**Type:** Measurement  
**Referenced in:** 31 papers  
**Also known as:** ∞-Bench, ∞Bench, ∞BENCH, ∞-bench  

## State of the Field

**What it is.** Across the papers, the prevailing usage is a long-context benchmark or benchmark suite for evaluating LLMs on ultra-long inputs, usually described as exceeding 100K tokens. Most descriptions treat it as a diverse collection of synthetic and real-world tasks, sometimes stated as 10 tasks, while narrower descriptions focus on particular subsets such as En.QA, En.MC, En.Sum, Inf.QA, Inf.MC, or specific retrieval tasks. Papers differ in emphasis: some describe long-book or long-novel QA and multiple-choice tasks, while others include multilingual QA, code debugging, dialogue, math, and retrieval, and reported average lengths vary across descriptions, including 100K, 145.1K, 190k, 214k, and 184K tokens for particular setups.

**What it is claimed to measure.** Papers use InfiniteBench to measure 4 constructs and 9 behavioral indicators. The prevailing claim is that it measures Long-context understanding, while smaller lines of work also report it as measuring Length generalization, Long-context reasoning, and Dialogue understanding. At the behavioral level, the named links are spread across several targets rather than one, most often Text summarization, Code debugging, Document question answering, Multiple-choice question answering, and Question answering, plus 4 other indicators including retrieval- and math-oriented tasks.

**Space of uses.** No measurement instrument is linked to it, but papers commonly use it alongside LongBench and RULER, and sometimes with Loong or L-Eval. A recurring pattern is to evaluate only selected tasks or subsets, especially En.QA, En.MC, En.Sum, Inf.QA, and Inf.MC, rather than the full suite. One paper also treats it as a comparison point and critique target for RAG versus long-context evaluation, and another notes that it requires supervised finetuning models to follow instructions.

## Sources

**[LongPO: Long Context Self-Evolution of Large Language Models through Short-to-Long Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/1332893b662f655660c9abdf793230cf-Paper-Conference.pdf) (as "∞Bench")**
> A long-context benchmark evaluating summarization, long-book question answering, and multiple-choice question answering over contexts beyond 100K tokens.

**[Jamba: Hybrid Transformer-Mamba Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a9ed43fa31dc8b4a7d7a673d713dcb5f-Paper-Conference.pdf) (as "∞BENCH")**
> Long-context benchmark with average length of 100K tokens, including English question answering and multiple-choice question answering tasks on long novels.

**[Human-inspired Episodic Memory for Infinite Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/c05144b635df16ac9bbf8246bbbd55ca-Paper-Conference.pdf) (as "∞-Bench")**
> A benchmark specifically designed to evaluate LLMs on very long context tasks, including various forms of retrieval like passkey, key-value, and number retrieval.

**[FlexPrefill: A Context-Aware Sparse Attention Mechanism for Efficient Long-Sequence Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/03645743ea35690f30d795d6bac149a5-Paper-Conference.pdf)**
> A benchmark dataset designed to test LLMs’ understanding of long dependencies within extensive contexts, including 10 synthetic and real-world tasks across various domains.

**[LaRA: Benchmarking Retrieval-Augmented Generation and Long-Context LLMs – No Silver Bullet for LC or RAG Routing](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25dv/li25dv.pdf) (as "∞-bench")**
> ∞-bench, a long-context benchmark with En.QA and En.MC tasks used in the paper as a comparison point and critique target.

## Relationships

### → InfiniteBench
- **Long-context understanding** (constructs) — *measured_by*
  > InfiniteBench (Zhang et al., 2024b) is proposed to evaluate the ultra-long context capability of LLMs over 100K sequence length. (Section 4.1)
  - [ChatQA 2: Bridging the Gap to Proprietary LLMs in Long Context and RAG Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7b562dac391e9c7af691e8ef886ad10-Paper-Conference.pdf)
- **Text summarization** (behaviors tasks) — *measured_by*
  > "The datasets in ∞-Bench cover diverse tasks including question answering, summarization, context retrieval, and mathematic computing."
  - [InfLLM: Training-Free Long-Context Extrapolation for LLMs with an Efficient Context Memory](https://proceedings.neurips.cc/paper_files/paper/2024/file/d842425e4bf79ba039352da0f658a906-Paper-Conference.pdf)
- **Document question answering** (behaviors tasks) — *measured_by*
  > En.QA is annotated by a pipeline that ensures the questions’ necessitating of long-range dependencies and reasoning, beyond simple short passage retrieval. (Section 4.1)
  - [ChatQA 2: Bridging the Gap to Proprietary LLMs in Long Context and RAG Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7b562dac391e9c7af691e8ef886ad10-Paper-Conference.pdf)
- **Code debugging** (behaviors tasks) — *measured_by*
  > Table 2: Performance of single-step reasoning on InfiniteBench (Zhang et al., 2024a). ... Code.Debug
  - [OmniKV: Dynamic Context Selection for Efficient Long-Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/da1131a86ac3c70e0b7cae89c3d4df22-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > "The datasets in ∞-Bench cover diverse tasks including question answering, summarization, context retrieval, and mathematic computing."
  - [InfLLM: Training-Free Long-Context Extrapolation for LLMs with an Efficient Context Memory](https://proceedings.neurips.cc/paper_files/paper/2024/file/d842425e4bf79ba039352da0f658a906-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > We evaluate all models on three tasks in this benchmark: summarization (En.Sum), long-book question answering (En.QA), and multi-choice question-answering (En.MC).
  - [LongPO: Long Context Self-Evolution of Large Language Models through Short-to-Long Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/1332893b662f655660c9abdf793230cf-Paper-Conference.pdf)
- **Context retrieval** (behaviors tasks) — *measured_by*
  > "The datasets in ∞-Bench cover diverse tasks including question answering, summarization, context retrieval, and mathematic computing."
  - [InfLLM: Training-Free Long-Context Extrapolation for LLMs with an Efficient Context Memory](https://proceedings.neurips.cc/paper_files/paper/2024/file/d842425e4bf79ba039352da0f658a906-Paper-Conference.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > Table 3: NAMMs evaluation on InfiniteBench. Model/Task name ... Math
  - [An Evolved Universal Transformer Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/da85790fb1cb4f11f431648455c561b5-Paper-Conference.pdf)
- **Length generalization** (constructs) — *measured_by*
  > We compare our method with existing length extrapolation approaches... on LongBench (Bai et al., 2023) and InfiniteBench (Zhang et al., 2024)... (Section 5.1)
  - [ParallelComp: Parallel Long-Context Compressor for Length Extrapolation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiong25b/xiong25b.pdf)
- **Long-context reasoning** (constructs) — *measured_by*
  > Long document reasoning performance (%) on Longbench and InfiniteBench (Table 1)
  - [ToM: Leveraging Tree-oriented MapReduce for Long-Context Reasoning in Large Language Models](https://aclanthology.org/2025.emnlp-main.899.pdf)
- **Information retrieval** (behaviors tasks) — *measured_by*
  > Table 3: NAMMs evaluation on InfiniteBench. Model/Task name Retrieval
  - [An Evolved Universal Transformer Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/da85790fb1cb4f11f431648455c561b5-Paper-Conference.pdf)
- **Dialogue understanding** (constructs) — *measured_by*
  > Table 3: NAMMs evaluation on InfiniteBench. Model/Task name ... Dialogue
  - [An Evolved Universal Transformer Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/da85790fb1cb4f11f431648455c561b5-Paper-Conference.pdf)
- **Key-value retrieval** (behaviors tasks) — *measured_by*
  > InfiniteBench (Zhang et al., 2024): Designed for LLMs on extended contexts, it includes tasks like key-value retrieval, summarization, and QA on data exceeding 100K tokens.
  - [Scaling Instruction-tuned LLMs to Million-token Contexts via Hierarchical Synthetic Data Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/bb36593e5e438aac5dd07907e757e087-Paper-Conference.pdf)
