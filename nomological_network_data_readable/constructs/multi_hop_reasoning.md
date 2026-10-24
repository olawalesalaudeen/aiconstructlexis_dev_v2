# Multi-hop reasoning
**Type:** Construct  
**Referenced in:** 119 papers  
**Also known as:** Multihop reasoning, Two-hop reasoning, Associative reasoning  

## State of the Field

**Definition agreement:** Consensus. Most papers define multi-hop reasoning as the ability to connect multiple pieces of information through a chain of intermediate inferences or sequential logical steps to reach an answer or conclusion. The remaining papers mainly vary the setting or substrate, such as documents, tables, charts, knowledge graphs, claim verification, or actions, and sometimes mention decomposition or retrieval, but they still describe the same core phenomenon rather than a different one.

**Space of definitions.** Across the surveyed work, the prevailing usage treats multi-hop reasoning as a latent ability to connect, integrate, or synthesize multiple pieces of evidence through sequential inferential steps to reach an answer, conclusion, or verification decision. Most definitions keep this broad framing across documents, passages, tables, charts, and other sources; for example, "Hybrid Graphs for Table-and-Text based Question Answering using LLMs" describes a case where a system must extract a marathon finisher from raw text and then link that result to a database to determine placement. Most papers cast it as an ability, though some describe it more behaviorally as generating inference chains, decompositions into intermediate questions and answers, or iterative retrieval steps, and a smaller line narrows it to verification-oriented relation tracing, explicit two-hop fact composition, or associative reasoning through shared entities or concepts.

**Space of facets.** Papers systematize the construct mainly by hop structure and evidence form. One narrower subtype is two-hop reasoning, defined as composing two factual associations into a distant relation, while other papers use labels such as associative reasoning for connections through shared entities or concepts, or sequential reasoning for chart-based stepwise reasoning; some also describe reasoning complexity as the number of templates along a reasoning path. Across these uses, the same label is applied to reasoning over multiple documents, tables plus text, chart collections, knowledge-graph relations, and culturally linked concepts, and several papers contrast it with single-hop questions.

**Space of measurement.** Operationalization is broad but dominated by benchmark or dataset-based evaluation: papers link the construct to 20 measurement instruments and 6 behavioral indicators, with HotpotQA, MuSiQue, 2WikiMultiHopQA, MQuAKE, and StrategyQA appearing most often. The recurring design is question answering that requires combining evidence across multiple passages or documents, sometimes reported with EM or accuracy, but the linked instruments also cover knowledge-base QA, long-context synthetic tasks, family-relation deduction, table and text reasoning, multimodal cultural questions, and information extraction settings. These measures usually match the dominant definition of multi-step evidence integration, though some operationalize narrower variants such as edited-knowledge reasoning, implicit strategy inference, or specific cross-row, cross-chart, or cross-document compositions.

**Links.** In non-measurement links, papers connect multi-hop reasoning to 6 constructs and 6 behavioral indicators. Papers most often report a related link from implicit reasoning to multi-hop reasoning, and they also report related links from critique ability to multi-hop reasoning and from multi-hop reasoning to portability; among behavioral indicators, the most frequent related linkage is from information retrieval to multi-hop reasoning, with other links covering additional task settings and reasoning variants. One paper reports that multi-hop reasoning correlates with portability, and separate papers claim causal relationships from knowledge retrieval to multi-hop reasoning and from information retrieval to multi-hop reasoning.

## Sources

**[FactCG: Enhancing Fact Checkers with Graph-Based Multi-Hop Data](https://aclanthology.org/2025.naacl-long.258.pdf)**
> The latent ability of a model to connect and infer information across multiple pieces of evidence that are not directly linked, requiring sequential logical steps to arrive at an answer.

**[GraphCheck: Breaking Long-Term Text Barriers with Extracted Knowledge Graph-Powered Fact-Checking](https://aclanthology.org/2025.acl-long.729.pdf) (as "Multihop reasoning")**
> The latent ability to trace and verify logical relationships across multiple entities and facts in a text, especially when indirect connections are required to detect inconsistencies.

**[Extractive Structures Learned in Pretraining Enable Generalization on Finetuned Facts](https://raw.githubusercontent.com/mlresearch/v267/main/assets/feng25m/feng25m.pdf) (as "Two-hop reasoning")**
> The latent ability to compose two factual associations (a → b and b → c) to infer a distant relationship (a → c), where one fact is newly learned and the other is pre-existing.

**[PropRAG: Guiding Retrieval with Beam Search over Proposition Paths](https://aclanthology.org/2025.emnlp-main.317.pdf) (as "Associative reasoning")**
> The latent ability of a model to connect disparate pieces of information through shared entities or concepts to answer complex, multi-hop queries.

## Relationships

### Multi-hop reasoning →
- **HotpotQA** (measurements) — *measured_by*
  > "HotpotQA [85] is a Wikipedia-based multi-hop QA dataset. It requires reasoning across multiple passages to find the answer."
  - [Chain of Agents: Large Language Models Collaborating on Long-Context Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/ee71a4b14ec26710b39ee6be113d7750-Paper-Conference.pdf)
- **MuSiQue** (measurements) — *measured_by*
  > We experiment with MuSiQue (Trivedi et al., 2022), a hard multi-hop reasoning dataset created via composable pairs of single-hop questions... (Section 3.1)
  - [Take a Step Back: Evoking Reasoning via Abstraction in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/592da1445a51e54a3987958b5831948f-Paper-Conference.pdf)
- **2WikiMultiHopQA** (measurements) — *measured_by*
  > When evaluated on multi-hop reasoning benchmarks, our approach achieves up to 95–100% accuracy on 2WikiMultiHopQA (Abstract).
  - [Grokking in the Wild: Data Augmentation for Real-World Multi-Hop Reasoning with Transformers](https://raw.githubusercontent.com/mlresearch/v267/main/assets/abramov25a/abramov25a.pdf)
- **StrategyQA** (measurements) — *measured_by*
  > Multi-Hop Reasoning: We experiment with MuSiQue (Trivedi et al., 2022), a hard multi-hop reasoning dataset created via composable pairs of single-hop questions, and StrategyQA (Geva et al., 2021) with open-domain questions that demand some strategy to solve. (Section 3.1)
  - [Take a Step Back: Evoking Reasoning via Abstraction in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/592da1445a51e54a3987958b5831948f-Paper-Conference.pdf)
- **WebQSP** (measurements) — *measured_by*
  > We adopt two prominent and challenging KGQA benchmarks that necessitate multi-hop reasoning – WebQSP (Yih et al., 2016) and CWQ (Talmor & Berant, 2018).
  - [Simple is Effective: The Roles of Graphs and Large Language Models in Knowledge-Graph-Based Retrieval-Augmented Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/11e1900e680f5fe1893a8e27362dbe2c-Paper-Conference.pdf)
- **GrailQA** (measurements) — *measured_by*
  > To evaluate the performance of our framework on multi-hop knowledge-intensive reasoning tasks, we conduct tests using four KBQA datasets: CWQ (Talmor & Berant, 2018), WebQSP (Yih et al., 2016), GrailQA (Gu et al., 2021), and SimpleQA (Bordes et al., 2015). (Section 5).
  - [Reasoning of Large Language Models over Knowledge Graphs with Super-Relations](https://proceedings.iclr.cc/paper_files/paper/2025/file/0c6799a1a5db47be8864fed46ba77697-Paper-Conference.pdf)
- **CWQ** (measurements) — *measured_by*
  > We adopt two prominent and challenging KGQA benchmarks that necessitate multi-hop reasoning – WebQSP (Yih et al., 2016) and CWQ (Talmor & Berant, 2018).
  - [Simple is Effective: The Roles of Graphs and Large Language Models in Knowledge-Graph-Based Retrieval-Augmented Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/11e1900e680f5fe1893a8e27362dbe2c-Paper-Conference.pdf)
- **Portability** (constructs) — *correlates*
  > Portability Metrics Decline with Increasing Number of Hops... This phenomenon can be attributed to the escalating complexity of reasoning required to accurately apply the edited knowledge across multiple interconnected facts.
  - [VLKEB: A Large Vision-Language Model Knowledge Editing Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/1198b53fa686831d5f0c0860d7ec4f34-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MQuAKE** (measurements) — *measured_by*
  > experiments show that CaKE enables more accurate and consistent use of edited knowledge across related reasoning tasks, achieving an average improvement of 20% in multi-hop reasoning accuracy on the MQuAKE dataset (Abstract).
  - [CaKE: Circuit-aware Editing Enables Generalizable Knowledge Learners](https://aclanthology.org/2025.emnlp-main.572.pdf)
- **TACT** (measurements) — *measured_by*
  > Through TACT, the model is implicitly required to address information extraction (IE) challenges such as... multi-hop reasoning... (Section 1)
  - [TACT: Advancing Complex Aggregative Reasoning with Information Extraction Tools](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d7025dc9bd4c8b6fb1eef80cc618008-Paper-Datasets_and_Benchmarks_Track.pdf)
- **CLUTRR** (measurements) — *measured_by*
  > CLUTRR [41] is a deductive reasoning dataset requiring multi-hop reasoning over family relationships. (Section 4).
  - [LoFiT: Localized Fine-tuning on LLM Representations](https://proceedings.neurips.cc/paper_files/paper/2024/file/122ea6470232ee5e79a2649243348005-Paper-Conference.pdf)
- **BABILong** (measurements) — *measured_by*
  > "BABILong includes a diverse set of 20 reasoning tasks, including fact chaining, simple induction, deduction, counting, and handling lists/sets"
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **RULER** (measurements) — *measured_by*
  > "RULER generates synthetic tasks across multiple categories, including multi-hop reasoning and document tracing, and measures the model’s accuracy."
  - [Scaling Instruction-tuned LLMs to Million-token Contexts via Hierarchical Synthetic Data Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/bb36593e5e438aac5dd07907e757e087-Paper-Conference.pdf)
- **WebQuestions** (measurements) — *measured_by*
  > We evaluate our approach on four standard KBQA datasets, all of which require multi-hop reasoning: ComplexWebQuestions (CWQ), WebQuestionsSP (WebQSP), WebQuestions, and GrailQA (Section 5).
  - [iQUEST: An Iterative Question-Guided Framework for Knowledge Base Question Answering](https://aclanthology.org/2025.acl-long.760.pdf)
- **MultiHop-RAG** (measurements) — *measured_by*
  > Assessment of multi-hop reasoning performance on various benchmarks, including HotpotQA (Yang et al., 2018), MuSiQue (Trivedi et al., 2022), and MultiHopRAG (Tang and Yang, 2024), using the EM metric.
  - [Efficient OpAmp Adaptation for Zoom Attention to Golden Contexts](https://aclanthology.org/2025.acl-long.653.pdf)
- **NovelHopQA** (measurements) — *measured_by*
  > NOVELHOPQA offers a controlled diagnostic setting to test multi-hop reasoning at scale. (Abstract)
  - [NovelHopQA: Diagnosing Multi-Hop Reasoning Failures in Long Narrative Contexts](https://aclanthology.org/2025.emnlp-main.1328.pdf)
- **HybridQA** (measurements) — *measured_by*
  > HybridQA (Chen et al., 2020) A multi-hop QA dataset involving both tabular and textual information. (Section 5.1.1)
  - [TableRAG: A Retrieval Augmented Generation Framework for Heterogeneous Document Reasoning](https://aclanthology.org/2025.emnlp-main.710.pdf)
- **DRISHTIKON** (measurements) — *measured_by*
  > “These were augmented into three reasoning categories: Common Sense Cultural... Multi-hop Reasoning, combining multiple cultural aspects”
  - [DRISHTIKON: A Multimodal Multilingual Benchmark for Testing Language Models' Understanding on Indian Culture](https://aclanthology.org/2025.emnlp-main.68.pdf)
- **LongMemEval** (measurements) — *measured_by*
  > We evaluate QRRETRIEVER on two long-context, multi-hop reasoning tasks: LongMemEval (Wu et al., 2025a) and CLIPPER (Pham et al., 2025). (Section 1)
  - [Query-Focused Retrieval Heads Improve Long-Context Reasoning and Re-ranking](https://aclanthology.org/2025.emnlp-main.1214.pdf)
- **ComplexTempQA** (measurements) — *measured_by*
  > “Questions in COMPLEXTEMPQA require advanced reasoning skills, including event/entity matching, multi-hop inference, cross-time comparisons, and temporal ordering.”
  - [ComplexTempQA: A 100m Dataset for Complex Temporal Question Answering](https://aclanthology.org/2025.emnlp-main.463.pdf)

### → Multi-hop reasoning
- **Prompt engineering** (behaviors tasks) — *causes*
  > CoT proved most beneficial for reasoning-intensive categories such as multi-hop and analogy questions, yielding accuracy gains of up to 10–15%... (Section 5.6)
  - [DRISHTIKON: A Multimodal Multilingual Benchmark for Testing Language Models' Understanding on Indian Culture](https://aclanthology.org/2025.emnlp-main.68.pdf)

### Associated with
- **Implicit reasoning** (constructs)
  > This property aligns closely with our focus on multi-hop reasoning and underscores the need for implicit reasoning capability (Section 1).
  - [Grokking in the Wild: Data Augmentation for Real-World Multi-Hop Reasoning with Transformers](https://raw.githubusercontent.com/mlresearch/v267/main/assets/abramov25a/abramov25a.pdf)
- **Fact checking** (behaviors tasks)
  > ...we conduct experiments using Llama2-70B [2], GPT-3.5 [1], and GPT-4 [3] on various contextually aware multi-hop reasoning tasks, including claim verification [12], question answering [13], and reading comprehension [14] (Section 1).
  - [Information Re-Organization Improves Reasoning in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb1a323fa10d4102ff13422476a744ff-Paper-Conference.pdf)
- **Question answering** (behaviors tasks)
  > ...we conduct experiments using Llama2-70B [2], GPT-3.5 [1], and GPT-4 [3] on various contextually aware multi-hop reasoning tasks, including claim verification [12], question answering [13], and reading comprehension [14] (Section 1).
  - [Information Re-Organization Improves Reasoning in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb1a323fa10d4102ff13422476a744ff-Paper-Conference.pdf)
- **Sequential reasoning** (constructs)
  > Sequential Reasoning evaluates the model’s ability to perform multi-hop reasoning, interpreting charts in a stepwise manner. (Section 1)
  - [MultiChartQA: Benchmarking Vision-Language Models on Multi-Chart Problems](https://aclanthology.org/2025.naacl-long.566.pdf)
- **Critique ability** (constructs)
  > “To answer multi-hop reasoning questions, self-critique involves prompting the LLM to generate subquestions and answer them using retrieved passages in a step-by-step manner.”
  - [Graph Neural Network Enhanced Retrieval for Question Answering of Large Language Models](https://aclanthology.org/2025.naacl-long.337.pdf)
- **Multi-hop question answering** (behaviors tasks)
  > Multi-hop question answering (MHQA) involves reasoning across multiple documents to answer complex questions. (Abstract)
  - [ReSCORE: Label-free Iterative Retriever Training for Multi-hop Question Answering with Relevance-Consistency Supervision](https://aclanthology.org/2025.acl-long.16.pdf)
- **Long-context understanding** (constructs)
  > These results affirm that long-context capacity alone is not enough—multi-hop reasoning remains an open challenge. (Section 5)
  - [NovelHopQA: Diagnosing Multi-Hop Reasoning Failures in Long Narrative Contexts](https://aclanthology.org/2025.emnlp-main.1328.pdf)
- **Tool use** (behaviors tasks)
  > We propose SCRIBE, a framework for multi-hop tool reasoning, where models must flexibly call tools and self-reflect to generate high-quality responses. (Section 1)
  - [SCRIBE: Structured Chain Reasoning for Interactive Behaviour Explanations using Tool Calling](https://aclanthology.org/2025.emnlp-main.1490.pdf)
- **Knowledge retrieval** (behaviors tasks)
  > Since complex questions often involve external geographic knowledge, we then adaptively retrieve it as supplementary clues and conduct multi-hop reasoning based on it.
  - [Answering Complex Geographic Questions by Adaptive Reasoning with Visual Context and External Commonsense Knowledge](https://aclanthology.org/2025.acl-long.1239.pdf)
