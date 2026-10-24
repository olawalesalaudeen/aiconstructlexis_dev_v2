# WebQSP
**Type:** Measurement  
**Referenced in:** 23 papers  
**Also known as:** WebQuestionsSP  

## State of the Field

**What it is.** Papers most commonly describe WebQSP as a benchmark dataset for knowledge base or knowledge graph question answering over Freebase or structured knowledge bases. Several definitions add that it is derived from WebQuestions and pairs natural language questions with SPARQL queries; some describe it as containing both single-hop and multi-hop questions, while others frame it more specifically as a multi-hop dataset or as a benchmark used to test I.I.D. generalization. A smaller number of descriptions mention questions from the Google Suggest API, answers from Freebase, or reasoning over a subset of Freebase.

**What it is claimed to measure.** Papers use WebQSP to measure two behavioral indicators and two constructs. The prevailing claim is that it measures Knowledge graph question answering, while a smaller line of work uses it for Multi-hop question answering. On the construct side, papers report it as measuring Multi-hop reasoning most often and Reasoning more generally less often, so the linked claims cluster around KGQA and reasoning-oriented targets.

**Space of uses.** In use, papers usually treat WebQSP as one of several benchmark KGQA datasets, most often alongside CWQ and often with GrailQA. Some also pair it with other QA benchmarks, and one paper includes it as part of the GraphQA benchmark. The surrounding descriptions position it as an in-domain, real-world, or additional dataset for comparative evaluation of reasoning performance.

## Sources

**[Reasoning on Graphs: Faithful and Interpretable Large Language Model Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/3e2aeb66481dd63a32421bf032b70384-Paper-Conference.pdf)**
> WebQuestionsSP, a KBQA benchmark used to evaluate question answering over structured knowledge bases.

**[iQUEST: An Iterative Question-Guided Framework for Knowledge Base Question Answering](https://aclanthology.org/2025.acl-long.760.pdf) (as "WebQuestionsSP")**
> WebQuestionsSP (WebQSP) is a benchmark dataset for knowledge base question answering derived from WebQuestions, with questions annotated with their corresponding SPARQL queries.

## Relationships

### → WebQSP
- **Knowledge graph question answering** (behaviors tasks) — *measured_by*
  > To demonstrate the effectiveness of PoG on complex reasoning over knowledge graphs, we adopt three representative multi-hop KGQA datasets: CWQ, WebQSP, and GrailQA. (Section 4.1.1)
  - [Plan-on-Graph: Self-Correcting Adaptive Planning of Large Language Model on Knowledge Graphs](https://proceedings.neurips.cc/paper_files/paper/2024/file/4254e856d01a5e7b7ea050477c3ef9b9-Paper-Conference.pdf)
- **Multi-hop reasoning** (constructs) — *measured_by*
  > We adopt two prominent and challenging KGQA benchmarks that necessitate multi-hop reasoning – WebQSP (Yih et al., 2016) and CWQ (Talmor & Berant, 2018).
  - [Simple is Effective: The Roles of Graphs and Large Language Models in Knowledge-Graph-Based Retrieval-Augmented Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/11e1900e680f5fe1893a8e27362dbe2c-Paper-Conference.pdf)
- **Multi-hop question answering** (behaviors tasks) — *measured_by*
  > We evaluated our method on different knowledge-intensive reasoning benchmark datasets, including two multi-hop KBQA datasets WebQSP (Yih et al., 2016) and QALD10-en (Usbeck et al., 2023) (Section 4.1)
  - [Think-on-Graph 2.0: Deep and Faithful Large Language Model Reasoning with Knowledge-guided Retrieval Augmented Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/830b1abc6d2da85f23d41169fa44d185-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We evaluate the reasoning ability of RoG on two benchmark KGQA datasets: WebQuestionSP (WebQSP) (Yih et al., 2016) and Complex WebQuestions (CWQ) (Talmor & Berant, 2018) (Section 5.1)
  - [Reasoning on Graphs: Faithful and Interpretable Large Language Model Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/3e2aeb66481dd63a32421bf032b70384-Paper-Conference.pdf)
