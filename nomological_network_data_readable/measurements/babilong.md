# BABILong
**Type:** Measurement  
**Referenced in:** 8 papers  
**Also known as:** bAbILong, BABILONG  

## State of the Field

**What it is.** Across papers, BABILong is most commonly described as a long-context benchmark for reasoning and retrieval, where models must find and reason over multiple pieces of evidence or supporting facts distributed in long sequences or extremely long documents. Some authors frame it as a long-context extension of bAbI over extended narratives, while one comparison description mentions it more broadly as a benchmark for evaluating long-context language models. Descriptions also differ on its task makeup: one paper calls it a benchmark of 5 tasks, while another says it includes 20 reasoning tasks such as fact chaining, simple induction, deduction, counting, and handling lists or sets.

**What it is claimed to measure.** Its claimed measurement targets are spread across several reasoning and context-related targets rather than centered on a single construct. Papers link it to 8 constructs and 4 behavioral indicators; among constructs, the recurring links are Long-context reasoning, Commonsense reasoning, and Context utilization, and among behavioral indicators they are Counting and Factual question answering, with 5 other constructs and 2 other behavioral indicators also linked. Relationship evidence further says it is used to test models' ability to reason across facts in extremely long documents, to study how models use available context in question-answering tasks with varying numbers of supporting facts, and to test common sense understanding and the ability to capture long range dependencies in text.

**Space of uses.** Papers commonly use BABILong alongside other long-context evaluations, especially RULER and Needle-in-a-Haystack retrieval, and one study groups these as the more challenging long-context reasoning tasks. Among linked instruments, it is related to RULER as sharing a similar "needle-in-a-haystack" concept, related to bAbI as an extension of that benchmark, and reported to correlate with MMLU at shorter lengths, with the correlation diminishing as length increases.

## Sources

**[A Little Goes a Long Way: Efficient Long Context Training and Inference with Partial Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/127a649ea9ae2df15e903a91352cfd3a-Paper-Conference.pdf)**
> A benchmark designed to test long-context reasoning and retrieval by requiring models to find and reason over multiple pieces of evidence randomly placed in a long sequence.

**[Episodic Memories Generation and Evaluation Benchmark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7ff013b7e372ba5b790352ccd6908f03-Paper-Conference.pdf) (as "bAbILong")**
> A long-context extension of the bAbI dataset designed to test reasoning capabilities over extended narratives.

**[Holistic Reasoning with Long-Context LMs: A Benchmark for Database Operations on Massive Textual Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/c2f75bb334e1592a3da55589af75161a-Paper-Conference.pdf) (as "BABILONG")**
> A benchmark for evaluating long-context language models, mentioned in a comparison of existing benchmarks.

## Relationships

### BABILong →
- **MMLU** (measurements) — *correlates*
  > At shorter lengths, BABILong exhibits a high correlation with MMLU, which diminishes as the length increases.
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)

### → BABILong
- **Long-context reasoning** (constructs) — *measured_by*
  > To bridge this gap, we introduce the BABILong benchmark, designed to test language models’ ability to reason across facts distributed in extremely long documents.
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Counting** (behaviors tasks) — *measured_by*
  > "BABILong includes a diverse set of 20 reasoning tasks, including fact chaining, simple induction, deduction, counting, and handling lists/sets"
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Multi-hop reasoning** (constructs) — *measured_by*
  > "BABILong includes a diverse set of 20 reasoning tasks, including fact chaining, simple induction, deduction, counting, and handling lists/sets"
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Logical reasoning** (constructs) — *measured_by*
  > BABILong includes a diverse set of 20 reasoning tasks, including fact chaining, simple induction, deduction, counting, and handling lists/sets.
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Inductive reasoning** (constructs) — *measured_by*
  > "BABILong includes a diverse set of 20 reasoning tasks, including fact chaining, simple induction, deduction, counting, and handling lists/sets"
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Information retrieval** (behaviors tasks) — *measured_by*
  > "We experiment with two options: (1) retrieval by chunks of size 512 tokens, denoted RAG-C and (2) retrieval by sentences, called RAG-S."
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Commonsense reasoning** (constructs) — *measured_by*
  > BABILong (Kuratov et al., 2024) is a challenging benchmark which tests both the common sense understanding of a model as well as its ability to capture long range dependencies in text (Section 5.1).
  - [Understanding and Improving Length Generalization in Recurrent Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/buitrago25a/buitrago25a.pdf)
- **Long-range dependency modeling** (constructs) — *measured_by*
  > BABILong (Kuratov et al., 2024) is a challenging benchmark which tests both the common sense understanding of a model as well as its ability to capture long range dependencies in text (Section 5.1).
  - [Understanding and Improving Length Generalization in Recurrent Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/buitrago25a/buitrago25a.pdf)
- **Long-context understanding** (constructs) — *measured_by*
  > “We evaluate our method on three benchmarks, each testing unique aspects of long context understanding: (ii) BABILong (Kuratov et al., 2024)”
  - [Star Attention: Efficient LLM Inference over Long Sequences](https://raw.githubusercontent.com/mlresearch/v267/main/assets/acharya25a/acharya25a.pdf)
- **Reasoning** (constructs) — *measured_by*
  > "BABILong includes a diverse set of 20 reasoning tasks"
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Single-hop question answering** (behaviors tasks) — *measured_by*
  > "Retrieval-Augmented Generation methods achieve a modest 60% accuracy in answering single-fact questions"
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)

### Associated with
- **bAbI** (measurements)
  > In this work we extend the bAbI benchmark (Weston et al., 2016), which consists of 20 tasks designed to evaluate basic aspects of reasoning.
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **RULER** (measurements)
  > RULER, a recently proposed long-context benchmark, shares a similar "needle-in-a-haystack" concept with BABILong.
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
