# Knowledge graph question answering
**Type:** Behavior  
**Referenced in:** 14 papers  
**Also known as:** Knowledge base question answering  

## State of the Field

**Space of definitions.** Across definitions, the prevailing usage treats it as answering natural language questions with structured facts from a knowledge graph, usually by retrieving and reasoning over those facts. Most papers formulate it around a question q and a graph G, with the goal of producing the correct answer or predicted answers from the graph. A smaller line of work uses the name knowledge base question answering and specifies converting the question into a logical form and then an executable graph query whose execution returns the answer entities.

**Variants.** Papers use both knowledge graph question answering and, less often, knowledge base question answering. The most common settings are multi-hop and complex reasoning over knowledge graphs, often alongside benchmark descriptions of WebQSP, CWQ, and GrailQA, and one benchmark description also places it in single-hop and open-domain QA settings. Smaller variants span different backbone KGs, including MedQA, with questions extracted from USMLE exams, and Text2Cypher, described as emulating text2cypher queries in enterprise KGs.

**Space of elicitation and scores.** Papers link it to 6 measurement instruments. The most frequently linked are WebQSP, CWQ, GrailQA, MedQA, and Text2Cypher, plus 1 other instrument. These are described as KGQA datasets or benchmarks: several papers use WebQSP, CWQ, and GrailQA as multi-hop KGQA benchmarks, while other work evaluates the task across different backbone KGs with MedQA and Text2Cypher.

**What it is taken as evidence of.** There is little explicit agreement on what construct this behavior reflects. Only 1 linked construct appears, natural language understanding, and it is linked as related rather than as something the behavior directly measures: one paper says KGQA requires a deep understanding of natural language questions alongside complex reasoning over KGs.

## Sources

**[Reasoning of Large Language Models over Knowledge Graphs with Super-Relations](https://proceedings.iclr.cc/paper_files/paper/2025/file/0c6799a1a5db47be8864fed46ba77697-Paper-Conference.pdf)**
> The observable task of answering a natural language question by retrieving and reasoning over structured facts from a knowledge graph.

**[KBQA-o1: Agentic Knowledge Base Question Answering with Monte Carlo Tree Search](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25d/luo25d.pdf) (as "Knowledge base question answering")**
> Answering natural-language questions by querying a structured knowledge base and returning the answer entities.

## Relationships

### Knowledge graph question answering →
- **WebQSP** (measurements) — *measured_by*
  > To demonstrate the effectiveness of PoG on complex reasoning over knowledge graphs, we adopt three representative multi-hop KGQA datasets: CWQ, WebQSP, and GrailQA. (Section 4.1.1)
  - [Plan-on-Graph: Self-Correcting Adaptive Planning of Large Language Model on Knowledge Graphs](https://proceedings.neurips.cc/paper_files/paper/2024/file/4254e856d01a5e7b7ea050477c3ef9b9-Paper-Conference.pdf)
- **CWQ** (measurements) — *measured_by*
  > To demonstrate the effectiveness of PoG on complex reasoning over knowledge graphs, we adopt three representative multi-hop KGQA datasets: CWQ, WebQSP, and GrailQA. (Section 4.1.1)
  - [Plan-on-Graph: Self-Correcting Adaptive Planning of Large Language Model on Knowledge Graphs](https://proceedings.neurips.cc/paper_files/paper/2024/file/4254e856d01a5e7b7ea050477c3ef9b9-Paper-Conference.pdf)
- **GrailQA** (measurements) — *measured_by*
  > To demonstrate the effectiveness of PoG on complex reasoning over knowledge graphs, we adopt three representative multi-hop KGQA datasets: CWQ, WebQSP, and GrailQA. (Section 4.1.1)
  - [Plan-on-Graph: Self-Correcting Adaptive Planning of Large Language Model on Knowledge Graphs](https://proceedings.neurips.cc/paper_files/paper/2024/file/4254e856d01a5e7b7ea050477c3ef9b9-Paper-Conference.pdf)
- **WebQuestions** (measurements) — *measured_by*
  > We evaluate LMP on five KGQA datasets: WebQSP (Yih et al., 2016), CWQ (Talmor and Berant, 2018), and GrailQA (Gu et al., 2021) for multi-hop QA; Simple Questions (Bordes et al., 2015) for single-hop QA; WebQuestions (Berant et al., 2013) for open-domain QA. (Section 4.1.1)
  - [Digest the Knowledge: Large Language Models empowered Message Passing for Knowledge Graph Question Answering](https://aclanthology.org/2025.acl-long.750.pdf)
- **MedQA** (measurements) — *measured_by*
  > We evaluate KGQA benchmarks spanning different backbone KGs. ... MedQA (Jin et al., 2021) consists of questions extracted from USMLE exams. (Section 4.1)
  - [BYOKG-RAG: Multi-Strategy Graph Retrieval for Knowledge Graph Question Answering](https://aclanthology.org/2025.emnlp-main.1417.pdf)
- **Text2Cypher** (measurements) — *measured_by*
  > We evaluate KGQA benchmarks spanning different backbone KGs. ... The Text2cypher dataset (Ozsoy et al., 2024) emulates text2cypher queries encountered in enterprise KGs... (Section 4.1)
  - [BYOKG-RAG: Multi-Strategy Graph Retrieval for Knowledge Graph Question Answering](https://aclanthology.org/2025.emnlp-main.1417.pdf)

### Associated with
- **Natural language understanding** (constructs)
  > KGQA poses challenges to existing approaches, as it requires a deep understanding of natural language questions and the ability to perform complex reasoning over KGs. (Section 1)
  - [D-RAG: Differentiable Retrieval-Augmented Generation for Knowledge Graph Question Answering](https://aclanthology.org/2025.emnlp-main.1793.pdf)
