# CodeSearchNet
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** Code Search Net  

## State of the Field

**What it is.** Across the surveyed papers, the dominant framing is as a benchmark for function-level text-to-code retrieval, using natural language queries and code snippets. Some papers describe it more broadly as a dataset for evaluating code generation and understanding, with code snippets and natural language descriptions across multiple programming languages. One definition presents the CodeSearchNet Corpus as covering six programming languages and containing over 2 million (comment, code) pairs extracted from GitHub.

**What it is claimed to measure.** Measurement claims stay with behavioral indicators rather than constructs: papers link it to three behavioral indicators, Code generation, Code retrieval, and Ranking, and to no constructs. Papers use it to measure Code retrieval and Ranking in text-to-code retrieval evaluation, while one paper reports using the CodeSearchNet dataset for Code generation evaluation.

**Space of uses.** Where evaluation setups are described, it appears alongside AdvTest as a text-to-code retrieval benchmark. Some work also uses code search and summarization datasets from CodeBERT that are described as extensions of CodeSearchNet, while another paper selects it as an additional dataset for code generation evaluation.

## Sources

**[CoRNStack: High-Quality Contrastive Data for Better Code Retrieval and Reranking](https://proceedings.iclr.cc/paper_files/paper/2025/file/285b0e63256699c04dbf2c8d4163fba4-Paper-Conference.pdf)**
> CodeSearchNet (CSN), a benchmark for function-level text-to-code retrieval using natural language queries and code snippets.

**[Analyzing the Rapid Generalization of SFT via the Perspective of Attention Head Activation Patterns](https://aclanthology.org/2025.acl-long.831.pdf) (as "Code Search Net")**
> Dataset for evaluating code generation and understanding, containing code snippets and natural language descriptions across multiple programming languages.

## Relationships

### → CodeSearchNet
- **Code retrieval** (behaviors tasks) — *measured_by*
  > First, we consider CodeSearchNet (CSN) (Husain et al., 2019) and AdvTest (Lu et al., 2021) as benchmarks for function-level text-to-code retrieval, a semantic search task where natural language queries are used to retrieve relevant code snippets. (Section 4.1.1)
  - [CoRNStack: High-Quality Contrastive Data for Better Code Retrieval and Reranking](https://proceedings.iclr.cc/paper_files/paper/2025/file/285b0e63256699c04dbf2c8d4163fba4-Paper-Conference.pdf)
- **Ranking** (behaviors tasks) — *measured_by*
  > For evaluation, we employ the CodeSearchNet and AdvTest text-to-code retrieval benchmarks... the top 100 results from our code retriever are passed to the reranker, with evaluation conducted using MRR@100.
  - [CoRNStack: High-Quality Contrastive Data for Better Code Retrieval and Reranking](https://proceedings.iclr.cc/paper_files/paper/2025/file/285b0e63256699c04dbf2c8d4163fba4-Paper-Conference.pdf)
- **Code generation** (behaviors tasks) — *measured_by*
  > For an additional dataset on the code generation task. We choose the CodeSearchNet dataset (Husain et al., 2019) for evaluation. (Section 5.3)
  - [Selective Aggregation for Low-Rank Adaptation in Federated Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f53a37f820d5be5930415d964f4a0187-Paper-Conference.pdf)
