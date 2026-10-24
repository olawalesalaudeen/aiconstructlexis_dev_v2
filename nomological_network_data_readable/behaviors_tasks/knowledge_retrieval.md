# Knowledge retrieval
**Type:** Behavior  
**Referenced in:** 15 papers  
**Also known as:** External knowledge retrieval  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats knowledge retrieval as querying or accessing external sources and incorporating the resulting information into reasoning and answer generation. Definitions repeatedly mention documents, knowledge bases, search engines, databases, and other external resources, with the goal of obtaining information relevant to a question; one paper describes the process as consisting of "two steps: query generation and execution." A smaller line of work narrows the behavior to structured knowledge graphs, where retrieval targets medical facts, entities, and even "reasoning chains" from user queries and generated hypotheses, and some papers further describe iterative-step retrieval that uses previous outputs and sub-step questions.

**Variants.** Papers study this behavior in several settings. Recurring variants include general external retrieval and retrieve-then-read use, domain-conditioned retrieval over sources such as Wikidata, Wikipedia, tables, and domain-specific resources, and iterative retrieval across sub-steps. Smaller variants focus on structured knowledge-graph retrieval in medical settings, including retrieving paths between anchor entities and searching through hypothesis outputs, and papers also place the behavior in multi-hop question answering, multi-hop reasoning, and audio-language evaluation settings.

**Space of elicitation and scores.** Papers link knowledge retrieval to seven measurement instruments. Most recorded links say it is measured by benchmarks or datasets, including BoolQ, LongBench, MKQA, MMAU, and MMLU, plus two other instruments; one of the remaining links is recorded only as related rather than measured_by. These instruments are described as representative knowledge retrieval tasks, as benchmarks for multimodal reasoning and knowledge-retrieval capabilities or for long-context generation alongside knowledge retrieval, and, in one case, through covariance patterns corresponding to "LLM ability in retrieving knowledge."

**What it is taken as evidence of.** Papers do not use knowledge retrieval as evidence of a single recurring construct. Instead, they connect it to four constructs with mixed relation types: one paper claims a causal relationship from knowledge retrieval to Cross-programming-language generalization, reporting that the requirement for knowledge retrieval hinders the model's cross-lingual transferability in reasoning tasks, and another claims a causal relationship from it to Multi-hop reasoning by retrieving external knowledge as supplementary clues for reasoning. Single papers also report it as related to In-context learning and to Knowledge manipulation.

## Sources

**[BELLE: A Bi-Level Multi-Agent Reasoning Framework for Multi-Hop Question Answering](https://aclanthology.org/2025.acl-long.211.pdf) (as "External knowledge retrieval")**
> Accessing and incorporating information from external sources (e.g., documents, knowledge bases) to support reasoning and answer generation.

**[HyKGE: A Hypothesis Knowledge Graph Enhanced RAG Framework for Accurate and Reliable Medical LLMs Responses](https://aclanthology.org/2025.acl-long.580.pdf)**
> Fetching relevant medical facts, entities, and reasoning chains from structured knowledge graphs based on user queries and generated hypotheses.

## Relationships

### Knowledge retrieval →
- **MMAU** (measurements) — *measured_by*
  > We introduce the Massive Multi-Task Audio Understanding and Reasoning Benchmark (MMAU), a novel benchmark designed to evaluate the expert-level multimodal reasoning and knowledge-retrieval capabilities of large audio-language models (LALMs). (Section 3.1)
  - [MMAU: A Massive Multi-Task Audio Understanding and Reasoning Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/d36f208919582785db965fe648b9fe59-Paper-Conference.pdf)
- **LongBench** (measurements) — *measured_by*
  > "This benchmark is the most important because it shows both long context generation performance and knowledge retrieval performance"
  - [A Training-Free Sub-quadratic Cost Transformer Model Serving Framework with Hierarchically Pruned Attention](https://proceedings.iclr.cc/paper_files/paper/2025/file/043f0503c4f652c737add3690aa5d12c-Paper-Conference.pdf)
- **MKQA** (measurements) — *measured_by*
  > We selected MKQA (Longpre et al., 2021), BoolQ (Clark et al., 2019), and AmbigQA (Min et al., 2020) as representative datasets of knowledge retrieval tasks for the interpretability analysis. (Section 5.3)
  - [Large Language Models Are Cross-Lingual Knowledge-Free Reasoners](https://aclanthology.org/2025.naacl-long.72.pdf)
- **BoolQ** (measurements) — *measured_by*
  > We selected MKQA (Longpre et al., 2021), BoolQ (Clark et al., 2019), and AmbigQA (Min et al., 2020) as representative datasets of knowledge retrieval tasks for the interpretability analysis. (Section 5.3)
  - [Large Language Models Are Cross-Lingual Knowledge-Free Reasoners](https://aclanthology.org/2025.naacl-long.72.pdf)
- **Multi-hop question answering** (behaviors tasks) — *causes*
  > due to the requirement for external knowledge in complex multi-hop questions (Mavi et al., 2024; Minaee et al., 2024), retrieval-augmented reasoning methods show more significant improvement compared to closed-book methods. (Section 5.1.1)
  - [BELLE: A Bi-Level Multi-Agent Reasoning Framework for Multi-Hop Question Answering](https://aclanthology.org/2025.acl-long.211.pdf)
- **MMLU** (measurements) — *measured_by*
  > We consider a variety of tasks that cover both idealized cases where we know the task mechanisms and open-ended ones where only partial or approximate mechanisms are identified. These tasks fall into three categories: (2) knowledge retrieval tasks, including RAVEL (Huang et al., 2024) and MMLU (Hendrycks et al., 2021), whose mechanisms are only partially understood
  - [Internal Causal Mechanisms Robustly Predict Language Model Out-of-Distribution Behaviors](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25af/huang25af.pdf)
- **Cross-lingual generalization** (constructs) — *causes*
  > the requirement for knowledge retrieval significantly hinders the model’s cross-lingual transferability when solving reasoning tasks. (Section 4.1)
  - [Large Language Models Are Cross-Lingual Knowledge-Free Reasoners](https://aclanthology.org/2025.naacl-long.72.pdf)
- **RAVEL** (measurements) — *measured_by*
  > (2) knowledge retrieval tasks, including RAVEL (Huang et al., 2024) and MMLU (Hendrycks et al., 2021)... (Section 5.1)
  - [Internal Causal Mechanisms Robustly Predict Language Model Out-of-Distribution Behaviors](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25af/huang25af.pdf)

### → Knowledge retrieval
- **Question decomposition** (behaviors tasks) — *causes*
  > This action FQD aims to break down the current question into multiple sub-queries to facilitate the retrieval of knowledge across various aspects (Section 3.2.2)
  - [Boosting the Potential of Large Language Models with an Intelligent Information Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/28d38c036365420f61ce03300418e44a-Paper-Conference.pdf)

### Associated with
- **Hallucination** (behaviors tasks)
  > Hallucinations pose a significant hurdle to the adoption of language models, especially in domains where reliable knowledge retrieval is paramount (Dahl et al., 2024). (Section 1)
  - [The Factorization Curse: Which Tokens You Predict Underlie the Reversal Curse and More](https://proceedings.neurips.cc/paper_files/paper/2024/file/cbcce87f745072c819204529be843d16-Paper-Conference.pdf)
- **Knowledge manipulation** (constructs)
  > This paper investigates four fundamental knowledge manipulation tasks: retrieval (e.g., “What is person A’s attribute X?”), classification (e.g., “Is A’s attribute X even or odd?”), comparison (e.g., “Is A greater than B in attribute X?”), and inverse search (e.g., “Which person’s attribute X equals T?”). (Section Abstract)
  - [Physics of Language Models: Part 3.2, Knowledge Manipulation](https://proceedings.iclr.cc/paper_files/paper/2025/file/d5494c8747276d3cdb2598e5617de89d-Paper-Conference.pdf)
- **In-context learning** (constructs)
  > Broadly speaking, current research identifies two main approaches to explain the ICL mechanism (Dong et al., 2024; Li et al., 2024): 1) Meta-learning, 2) Knowledge retrieval.
  - [Learning vs Retrieval: The Role of In-Context Examples in Regression with Large Language Models](https://aclanthology.org/2025.naacl-long.417.pdf)
- **TriviaQA** (measurements)
  > we use the question data from question-answering training data, such as TriviaQA [23] and Natural Questions [27, 29], to obtain the covariance matrices whose pattern corresponds to the knowledge retrieving ability of the LLM (Section 3.3).
  - [CorDA: Context-Oriented Decomposition Adaptation of Large Language Models for Task-Aware Parameter-Efficient Fine-tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/83f95bb0ac5046338ea2afe3390e9f4b-Paper-Conference.pdf)
- **Multi-hop reasoning** (constructs)
  > Since complex questions often involve external geographic knowledge, we then adaptively retrieve it as supplementary clues and conduct multi-hop reasoning based on it.
  - [Answering Complex Geographic Questions by Adaptive Reasoning with Visual Context and External Commonsense Knowledge](https://aclanthology.org/2025.acl-long.1239.pdf)
