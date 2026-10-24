# Question decomposition
**Type:** Behavior  
**Referenced in:** 49 papers  
**Also known as:** Subquestion decomposition, Sub-question generation, Query decomposition, Query graph construction, Subproblem decomposition, Intermediate question generation, Subquestion generation, Sub-query generation  

## State of the Field

**Space of definitions.** Most definitions treat question decomposition as breaking a complex question or query into simpler, answerable sub-questions or sub-queries that guide stepwise reasoning. Papers commonly describe a sequence or series of intermediate questions, sometimes paired with sub-answers until the final answer; as one paper puts it, the system “decomposes complex questions into subquestions” (Tree-of-Quote Prompting Improves Factuality and Attribution in Multi-Hop and Medical Reasoning). A smaller line of work broadens this to logically structured subproblems, and one paper instead uses the term for extracting structural tokens and replaceable entity placeholders to build a reusable template for similar questions.

**Variants.** Papers use several nearby names for this behavior, especially question decomposition, query decomposition, subquestion decomposition, sub-question generation, and query graph construction. The graph-based variant is more structured, where a query graph builder “constructs a representation of a user’s reasoning plan as a DAG” (Single LLM, Multiple Roles: A Unified Retrieval-Augmented Generation Framework Using Role-Specific Token Optimization). Other papers study it in multi-hop and medical reasoning, retrieval-augmented decomposition, data analysis, and multimodal video question answering.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers operationalize the behavior directly through generated sub-questions, sub-queries, sub-answers, or query graphs, for example by asking a model or system component to generate the next subquestion, infer an intermediate sub-query, or decompose an input query into multiple sub-queries. Some papers further use these intermediate questions to guide retrieval in step-by-step question answering.

**What it is taken as evidence of.** Papers do not converge on one construct that this behavior reflects. It is linked to 4 constructs: question decomposition is related to Chain-of-thought reasoning and to Reasoning, while some papers claim causal relationships from question decomposition to Knowledge reasoning and to Interpretability and explainability. Across papers, it is therefore used under different construct linkages rather than one shared construct.

## Sources

**[Decompose, Analyze and Rethink: Solving Intricate Problems with Human-like Reasoning Cycle](https://proceedings.neurips.cc/paper_files/paper/2024/file/01025a4e79355bb37a10ba39605944b5-Paper-Conference.pdf)**
> Breaking a complex question into a sequence of simpler sub-questions.

**[Tree-of-Quote Prompting Improves Factuality and Attribution in Multi-Hop and Medical Reasoning](https://aclanthology.org/2025.emnlp-main.285.pdf) (as "Subquestion decomposition")**
> Breaking down a complex question into simpler, answerable subquestions to guide stepwise reasoning.

**[Confidence-guided Refinement Reasoning for Zero-shot Question Answering](https://aclanthology.org/2025.emnlp-main.354.pdf) (as "Sub-question generation")**
> The process of decomposing a main question into multiple sub-questions as intermediate reasoning steps.

**[Single LLM, Multiple Roles: A Unified Retrieval-Augmented Generation Framework Using Role-Specific Token Optimization](https://aclanthology.org/2025.emnlp-main.243.pdf) (as "Query decomposition")**
> The process of breaking down a complex user query into a set of simpler, more manageable sub-queries.

**[Single LLM, Multiple Roles: A Unified Retrieval-Augmented Generation Framework Using Role-Specific Token Optimization](https://aclanthology.org/2025.emnlp-main.243.pdf) (as "Query graph construction")**
> The task of decomposing a query into sub-queries and organizing them into a directed acyclic graph representing dependencies and a reasoning plan.

**[PathwiseRAG: Multi-Dimensional Exploration and Integration Framework](https://aclanthology.org/2025.emnlp-main.1167.pdf) (as "Subproblem decomposition")**
> Breaking down a complex query into smaller, logically structured subproblems that can be processed independently or in sequence.

**[Making Retrieval-Augmented Language Models Robust to Irrelevant Context](https://proceedings.iclr.cc/paper_files/paper/2024/file/8011b23e1dc3f57e1b6211ccad498919-Paper-Conference.pdf) (as "Intermediate question generation")**
> Producing sub-questions as part of a decomposition strategy for answering complex, multi-hop questions.

**[Graph Neural Network Enhanced Retrieval for Question Answering of Large Language Models](https://aclanthology.org/2025.naacl-long.337.pdf) (as "Subquestion generation")**
> The behavior of decomposing a complex question into a series of simpler, intermediate questions to be answered sequentially.

**[RAG-Star: Enhancing Deliberative Reasoning with Retrieval Augmented Verification and Refinement](https://aclanthology.org/2025.naacl-long.361.pdf) (as "Sub-query generation")**
> Producing intermediate questions that decompose a complex query into smaller, answerable components during a reasoning process.

## Relationships

### Question decomposition →
- **Information retrieval** (behaviors tasks) — *causes*
  > QD provides noticeable improvements over MTR on multi-table retrieval tasks, for instance, in Top-2 retrieval, precision is improved from 65.3 to 72.3 and recall is improved from 62.3 to 64.7 in the 2-table subset. (Section 4.2)
  - [MMQA: Evaluating LLMs with Multi-Table Multi-Hop Complex Questions](https://proceedings.iclr.cc/paper_files/paper/2025/file/794a425a2e47e05d29d30f79b79a692d-Paper-Conference.pdf)
- **Knowledge reasoning** (constructs) — *causes*
  > since questions in knowledge-intensive reasoning tasks can often be a complex composite problems that are challenging to solve directly, a structured knowledge utilizer is used to perform question decomposition... for more accurate answer inference.
  - [StructRAG: Boosting Knowledge Intensive Reasoning of LLMs via Inference-time Hybrid Information Structurization](https://proceedings.iclr.cc/paper_files/paper/2025/file/5975754c7650dfee0682e06e1fec0522-Paper-Conference.pdf)
- **Multi-hop question answering** (behaviors tasks) — *causes*
  > Question decomposition has been found to help large language models’ (LLMs) performance on complex question answering (QA) by breaking these questions into simpler sub-questions for answering.
  - [Generating Complex Question Decompositions in the Face of Distribution Shifts](https://aclanthology.org/2025.naacl-long.55.pdf)
- **Knowledge retrieval** (behaviors tasks) — *causes*
  > This action FQD aims to break down the current question into multiple sub-queries to facilitate the retrieval of knowledge across various aspects (Section 3.2.2)
  - [Boosting the Potential of Large Language Models with an Intelligent Information Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/28d38c036365420f61ce03300418e44a-Paper-Conference.pdf)

### → Question decomposition
- **Prompt optimization** (behaviors tasks) — *causes*
  > “we propose to adopt an LLM-based optimizer (referred to as the Prompt Optimizer) to generate p and iteratively refine it for optimizing the downstream performance”
  - [POQD: Performance-Oriented Query Decomposer for Multi-vector retrieval](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25ag/liu25ag.pdf)

### Associated with
- **Data analysis** (behaviors tasks)
  > most existing table QA datasets focus on obtaining specific information, our data analysis queries can be complex and requires query decomposition and reasoning. (Section 6)
  - [DACO: Towards Application-Driven and Comprehensive Data Analysis via Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4cb1444fb05839d0113d2773da88a49-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Reasoning** (constructs)
  > WebPlanner first decomposes the user question into sequential or parallel search tasks via reasoning on the graph and determines the next step based on the search feedback (Sec. 2.1).
  - [MindSearch: Mimicking Human Minds Elicits Deep AI Searcher](https://proceedings.iclr.cc/paper_files/paper/2025/file/e01c431bbb83153632c0dcfaf8ccda0a-Paper-Conference.pdf)
- **Table question answering** (behaviors tasks)
  > Most LLM-based TableQA methods can be divided into three phases: question decomposition (Lewkowycz et al., 2022; Liu et al., 2022; Fu et al., 2022; Pasupat & Liang, 2015), sub-question TableQA reasoning and answer verification (Madaan et al., 2024; Ni et al., 2023).
  - [Triples as the Key: Structuring Makes Decomposition and Verification Easier in LLM-based TableQA](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e50b663324972bb8cc7b5c06a059438-Paper-Conference.pdf)
- **ReAct** (measurements)
  > These approaches like SELF-ASK, ReAct and Searchain decompose the query into sub-questions that capture the multi-aspect nature of the query and perform better than approaches without decomposition (Section 5.1).
  - [SUNAR: Semantic Uncertainty based Neighborhood Aware Retrieval for Complex QA](https://aclanthology.org/2025.naacl-long.300.pdf)
- **Chain-of-thought reasoning** (constructs)
  > multi-step reasoning methods (Uehara et al., 2022; Wang et al., 2022b; Khan et al., 2023; Yao et al., 2023; Besta et al., 2024) have been proposed that decompose the main question into several sub-question-answer pairs (sub-QAs) and subsequently utilize them to derive the final answer. (Section 1)
  - [Confidence-guided Refinement Reasoning for Zero-shot Question Answering](https://aclanthology.org/2025.emnlp-main.354.pdf)
- **Text-to-SQL** (behaviors tasks)
  > The Query Agent QAgent generates a SQL query qij and resulting tables Rij (qij(D) = Rij) to answer the subquestions using the database information and schema (Section 4.2)
  - [An LLM-Based Approach for Insight Generation in Data Analysis](https://aclanthology.org/2025.naacl-long.24.pdf)
