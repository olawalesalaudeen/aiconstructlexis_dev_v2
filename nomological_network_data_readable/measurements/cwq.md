# CWQ
**Type:** Measurement  
**Referenced in:** 21 papers  
**Also known as:** ComplexWebQuestions  

## State of the Field

**What it is.** Across the papers, CWQ is most commonly treated as ComplexWebQuestions, a benchmark dataset for multi-hop knowledge base or knowledge graph question answering. The prevailing description places it on Freebase and frames it as testing complex, compositional, or knowledge-intensive reasoning over a knowledge graph, with some definitions noting conjunction, composition, comparison, or superlative reasoning and natural language questions paired with SPARQL queries. A smaller line of work describes it instead as multi-hop, web-based questions for reasoning over web content.

**What it is claimed to measure.** Papers use CWQ to measure three constructs and two behavioral indicators. The most common use is to measure Knowledge graph question answering, and papers also report it as measuring Multi-hop reasoning; less common links use it to measure Reasoning, World knowledge, and Question answering. Overall, the reported measurement claims cluster around KGQA and multi-hop reasoning, while the other uses appear as smaller framings.

**Space of uses.** In use, papers usually include CWQ in a small suite of KGQA benchmarks, most often alongside WebQSP and often GrailQA; some also pair it with WebQuestions and Simple Questions. It is typically positioned as a representative, widely used, or challenging multi-hop dataset for demonstrating effectiveness on complex reasoning over knowledge graphs, and one paper also describes it as an in-domain dataset.

## Sources

**[Reasoning on Graphs: Faithful and Interpretable Large Language Model Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/3e2aeb66481dd63a32421bf032b70384-Paper-Conference.pdf)**
> ComplexWebQuestions, a multi-hop KBQA benchmark used to test knowledge-intensive question answering over a knowledge graph.

**[Augmenting Multi-Agent Communication with State Delta Trajectory](https://aclanthology.org/2025.emnlp-main.518.pdf) (as "ComplexWebQuestions")**
> A benchmark dataset, also known as CWQ, that contains multi-hop, web-based questions designed to test reasoning ability over web content.

## Relationships

### → CWQ
- **Knowledge graph question answering** (behaviors tasks) — *measured_by*
  > To demonstrate the effectiveness of PoG on complex reasoning over knowledge graphs, we adopt three representative multi-hop KGQA datasets: CWQ, WebQSP, and GrailQA. (Section 4.1.1)
  - [Plan-on-Graph: Self-Correcting Adaptive Planning of Large Language Model on Knowledge Graphs](https://proceedings.neurips.cc/paper_files/paper/2024/file/4254e856d01a5e7b7ea050477c3ef9b9-Paper-Conference.pdf)
- **Multi-hop reasoning** (constructs) — *measured_by*
  > We adopt two prominent and challenging KGQA benchmarks that necessitate multi-hop reasoning – WebQSP (Yih et al., 2016) and CWQ (Talmor & Berant, 2018).
  - [Simple is Effective: The Roles of Graphs and Large Language Models in Knowledge-Graph-Based Retrieval-Augmented Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/11e1900e680f5fe1893a8e27362dbe2c-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We evaluate the reasoning ability of RoG on two benchmark KGQA datasets: WebQuestionSP (WebQSP) (Yih et al., 2016) and Complex WebQuestions (CWQ) (Talmor & Berant, 2018) (Section 5.1)
  - [Reasoning on Graphs: Faithful and Interpretable Large Language Model Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/3e2aeb66481dd63a32421bf032b70384-Paper-Conference.pdf)
- **World knowledge** (constructs) — *measured_by*
  > World-knowledge tasks: TriviaQA (Joshi et al., 2017), Natural Questions (Kwiatkowski et al., 2019), HotpotQA (Yang et al., 2018), WebQuestions (Berant et al., 2013), ComplexWebQuestions (Talmor & Berant, 2018). (Section 5.1)
  - [Mixture of Parrots: Experts improve memorization more than reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5bc3356e0fa1753fff7e8d6628e71b22-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > “PathwiseRAG is evaluated on five challenging question-answering benchmarks spanning different reasoning complexities. ... ComplexWebQuestions ...”
  - [PathwiseRAG: Multi-Dimensional Exploration and Integration Framework](https://aclanthology.org/2025.emnlp-main.1167.pdf)
