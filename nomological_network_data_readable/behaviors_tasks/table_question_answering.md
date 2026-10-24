# Table question answering
**Type:** Behavior  
**Referenced in:** 23 papers  
**Also known as:** Table-based question answering, Multi-table question answering, Tabular question answering, Free-form table QA, Short-form table QA  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is answering a natural-language question from table content and returning a natural-language answer. Most definitions emphasize concise, precise, correct, or accurate answers grounded in a given table, though some extend the task to one or more provided tables, mixed tabular-text inputs, or questions requiring arithmetic, span extraction, comparison, or synthesis across table sections. A smaller line of work separates short-form answers from free-form, paragraph-length answers, and one multi-table formulation emphasizes retrieving and synthesizing information from multiple tables for complex, multi-hop questions.

**Variants.** Papers use several names for closely related variants, most often table-based, table, or tabular question answering. The studied settings include multi-table and multi-hop questions, mixed tabular-text financial data, complex or multi-structured tables, table images, and cases where tables are updated with extra natural-language context or comparisons. Another recurring split is between short-form table QA, focused on brief precise answers and extraction or aggregation, and free-form table QA, focused on open-ended answers grounded in tabular information. One paper also relates the task to question decomposition and self-verification by describing TableQA methods as proceeding through question decomposition, sub-question reasoning, and answer verification.

**Space of elicitation and scores.** Papers link this behavior to 9 measurement instruments. The most frequently linked are WikiTQ and FeTaQA, followed by TabFact, BIG-bench, and FinQA, with several other instruments also linked. These instruments are usually described as TableQA datasets or benchmarks, and the linked examples cover standard question answering, free-form table question answering, fact-verification style evaluation over tables, and tasks that combine a table with additional natural-language information.

**What it is taken as evidence of.** Papers link this behavior to 2 constructs. They most often relate it to Table reasoning, describing table-based question answering as one of several table understanding or tabular reasoning tasks, while a smaller line of work relates it to Semantic reasoning in Table QA tasks involving complex semantic reasoning and free-form responses. Both construct links are phrased as related links, so the literature here connects the behavior to these constructs rather than presenting a single shared evidence-of claim.

## Sources

**[Chain-of-Table: Evolving Tables in the Reasoning Chain for Table Understanding](https://proceedings.iclr.cc/paper_files/paper/2024/file/f53fd88a4340063ecd258c0ae9948b40-Paper-Conference.pdf) (as "Table-based question answering")**
> The observable task of generating a concise, natural language answer to a question using information found within one or more provided tables.

**[MMQA: Evaluating LLMs with Multi-Table Multi-Hop Complex Questions](https://proceedings.iclr.cc/paper_files/paper/2025/file/794a425a2e47e05d29d30f79b79a692d-Paper-Conference.pdf) (as "Multi-table question answering")**
> The task of generating a correct answer to a question by retrieving and synthesizing information from multiple provided tables.

**[LiveXiv - A Multi-Modal live benchmark based on Arxiv papers content](https://proceedings.iclr.cc/paper_files/paper/2025/file/1eaa1373fe55b223c2dfe1fd29a277d7-Paper-Conference.pdf)**
> Answering questions that require interpreting table content and associated numerical or textual information.

**[Learning to Clarify: Multi-turn Conversations with Action-Based Contrastive Self-Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ffd05ca3cf3985f4572af015b4cfc1e-Paper-Conference.pdf) (as "Tabular question answering")**
> Answering questions grounded in tabular or mixed tabular-text data, including cases requiring arithmetic or span extraction.

**[Table-R1: Inference-Time Scaling for Table Reasoning Tasks](https://aclanthology.org/2025.emnlp-main.1040.pdf) (as "Free-form table QA")**
> Generating open-ended, paragraph-length answers grounded in tabular data, requiring synthesis and natural language generation.

**[Table-R1: Inference-Time Scaling for Table Reasoning Tasks](https://aclanthology.org/2025.emnlp-main.1040.pdf) (as "Short-form table QA")**
> Answering questions with brief, precise answers based on information in a table, often requiring extraction and aggregation of specific cell values.

## Relationships

### Table question answering →
- **WikiTQ** (measurements) — *measured_by*
  > CABINET establishes new SoTA on three challenging table QA datasets (WikiTQ, FeTaQA and WikiSQL) significantly outperforming various strong baselines (§ 4.1). (Section 1)
  - [CABINET: Content Relevance-based Noise Reduction for Table Question Answering](https://proceedings.iclr.cc/paper_files/paper/2024/file/19a42d5885e25e51852aca8144e5af0d-Paper-Conference.pdf)
- **FeTaQA** (measurements) — *measured_by*
  > CABINET establishes new SoTA on three challenging table QA datasets (WikiTQ, FeTaQA and WikiSQL) significantly outperforming various strong baselines (§ 4.1). (Section 1)
  - [CABINET: Content Relevance-based Noise Reduction for Table Question Answering](https://proceedings.iclr.cc/paper_files/paper/2024/file/19a42d5885e25e51852aca8144e5af0d-Paper-Conference.pdf)
- **TabFact** (measurements) — *measured_by*
  > Existing TableQA benchmarks such as TabFact [2] and WikiTableQA [12] feature small web tables that fall within the context limits of most LMs (Section 4.1)
  - [TableRAG: Million-Token Table Understanding with Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/88dd7aa6979e352fda7c4952ca8eac59-Paper-Conference.pdf)
- **WikiSQL** (measurements) — *measured_by*
  > CABINET establishes new SoTA on three challenging table QA datasets (WikiTQ, FeTaQA and WikiSQL) significantly outperforming various strong baselines (§ 4.1). (Section 1)
  - [CABINET: Content Relevance-based Noise Reduction for Table Question Answering](https://proceedings.iclr.cc/paper_files/paper/2024/file/19a42d5885e25e51852aca8144e5af0d-Paper-Conference.pdf)
- **BIG-bench** (measurements) — *measured_by*
  > Three reasoning tasks directly obtained from the BIG-Bench suite [50]: ... Penguins—where the task is to answer questions about penguins' attributes based on a given table
  - [Buffer of Thoughts: Thought-Augmented Reasoning with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cde328b7bf6358f5ebb91fe9c539745e-Paper-Conference.pdf)
- **TableEval** (measurements) — *measured_by*
  > To address these limitations, we introduce TableEval, a new benchmark designed to evaluate LLMs on realistic TableQA tasks. (Abstract)
  - [TableEval: A Real-World Benchmark for Complex, Multilingual, and Multi-Structured Table Question Answering](https://aclanthology.org/2025.emnlp-main.363.pdf)
- **HiTab** (measurements) — *measured_by*
  > Task Category: Table Question Answering (TQA), Task Name: Hierarchical TQA, Dataset: HiTab (2022) (Table 2)
  - [Can GRPO Boost Complex Multimodal Table Understanding?](https://aclanthology.org/2025.emnlp-main.637.pdf)
- **TabMWP** (measurements) — *measured_by*
  > "Lastly, we also test on a popular tabular question-answering dataset, TabMWP (Lu et al., 2023), that requires LLMs to use reasoning skills over tabular contexts."
  - [AdaCAD: Adaptively Decoding to Balance Conflicts between Contextual and Parametric Knowledge](https://aclanthology.org/2025.naacl-long.581.pdf)

### Associated with
- **Table reasoning** (constructs)
  > Table-based reasoning with large language models (LLMs) is a promising direction to tackle many table understanding tasks, such as table-based question answering and fact veriﬁcation. (ABSTRACT)
  - [Chain-of-Table: Evolving Tables in the Reasoning Chain for Table Understanding](https://proceedings.iclr.cc/paper_files/paper/2024/file/f53fd88a4340063ecd258c0ae9948b40-Paper-Conference.pdf)
- **Question decomposition** (behaviors tasks)
  > Most LLM-based TableQA methods can be divided into three phases: question decomposition (Lewkowycz et al., 2022; Liu et al., 2022; Fu et al., 2022; Pasupat & Liang, 2015), sub-question TableQA reasoning and answer verification (Madaan et al., 2024; Ni et al., 2023).
  - [Triples as the Key: Structuring Makes Decomposition and Verification Easier in LLM-based TableQA](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e50b663324972bb8cc7b5c06a059438-Paper-Conference.pdf)
- **Self-verification** (behaviors tasks)
  > Most LLM-based TableQA methods can be divided into three phases: question decomposition (Lewkowycz et al., 2022; Liu et al., 2022; Fu et al., 2022; Pasupat & Liang, 2015), sub-question TableQA reasoning and answer verification (Madaan et al., 2024; Ni et al., 2023).
  - [Triples as the Key: Structuring Makes Decomposition and Verification Easier in LLM-based TableQA](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e50b663324972bb8cc7b5c06a059438-Paper-Conference.pdf)
- **Semantic reasoning** (constructs)
  > We introduce Weaver , a novel methodology integrating SQL and LLM specifically designed for Table QA tasks involving complex semantic reasoning and free-form responses. (Section 2.1)
  - [Weaver: Interweaving SQL and LLM for Table Reasoning](https://aclanthology.org/2025.emnlp-main.1436.pdf)
