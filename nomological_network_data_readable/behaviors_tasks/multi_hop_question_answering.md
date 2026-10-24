# Multi-hop question answering
**Type:** Behavior  
**Referenced in:** 92 papers  
**Also known as:** Multi-hop QA, Multihop question answering, Two-hop relational question answering, Multi-hop factual recall, Multi-hop tracing, Compositional question answering, Multi-hop reasoning  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is answering complex questions by retrieving, finding, and combining multiple pieces of information spread across multiple documents, passages, articles, or other sources. Most definitions treat success as producing a final answer after logically connecting those pieces through multi-step or relational reasoning. Some formulations make the intermediate process explicit, requiring sub-questions or intermediate questions and answers before arriving at the final answer.

**Variants.** Variants mainly differ in where the supporting evidence is located and how the hops are organized. Papers study open-domain settings across different documents, long-context settings that combine information from distant parts of one input, and settings over webpages or multiple pages in multimodal documents. A smaller line of work uses narrower labels such as multi-hop KGQA, multi-hop tracing, two-hop relational question answering, multi-hop factual recall after knowledge edits, and compositional question answering.

**Space of elicitation and scores.** Papers link it to 11 measurement instruments, and it is most often measured by HotpotQA, 2WikiMultiHopQA, MuSiQue, RULER, and Bamboogle. These instruments are usually presented as multi-hop QA datasets or benchmarks, while RULER is described as a synthetic long-context benchmark with multi-hop tracing and question answering subtasks.

**What it is taken as evidence of.** Papers link it to 5 constructs, but they do not converge on a single one. Some use multi-hop question answering to measure context faithfulness, portability, and reasoning, while others describe it as related to knowledge integration and to multi-hop reasoning.

## Sources

**[DSPy: Compiling Declarative Language Model Calls into State-of-the-Art Pipelines](https://proceedings.iclr.cc/paper_files/paper/2024/file/f1cf02ce09757f57c3b93c0db83181e0-Paper-Conference.pdf)**
> The task of answering a question that requires finding and combining multiple pieces of information, often by generating and answering a series of intermediate questions.

**[From RAG to Memory: Non-Parametric Continual Learning for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gutierrez25a/gutierrez25a.pdf) (as "Multi-hop QA")**
> Producing answers that require integrating information from multiple passages or facts through relational reasoning.

**[From Complex to Atomic: Enhancing Augmented Generation via Knowledge-Aware Dual Rewriting and Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ac/wang25ac.pdf) (as "Multihop question answering")**
> Generating answers to questions that require retrieving and synthesizing information from multiple sources or documents.

**[Reason to Rote: Rethinking Memorization in Reasoning](https://aclanthology.org/2025.emnlp-main.437.pdf) (as "Two-hop relational question answering")**
> The task of answering a question that requires composing two distinct relational facts from a provided context to find the correct entity.

**[Locate-then-edit for Multi-hop Factual Recall under Knowledge Editing](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25aq/zhang25aq.pdf) (as "Multi-hop factual recall")**
> The observable task of answering a question that requires chaining together two or more pieces of factual information, particularly after one of the facts in the chain has been edited.

**[AnchorAttention: Difference-Aware Sparse Attention with Stripe Granularity](https://aclanthology.org/2025.emnlp-main.430.pdf) (as "Multi-hop tracing")**
> The task of following a chain of reasoning or references across multiple steps within a text to answer a question.

**[Self-DC: When to Reason and When to Act? Self Divide-and-Conquer for Compositional Unknown Questions](https://aclanthology.org/2025.naacl-long.331.pdf) (as "Compositional question answering")**
> The task of answering a complex question that requires breaking it down into multiple, interdependent sub-questions and synthesizing their answers.

**[KV Shifting Attention Enhances Language Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25ac/xu25ac.pdf) (as "Multi-hop reasoning")**
> Generating answers that require chaining multiple logical inferences from edited knowledge, such as answering 'Who is the first lady of the United States?' after editing the president.

## Relationships

### Multi-hop question answering →
- **HotpotQA** (measurements) — *measured_by*
  > In this case study, we explore the multi-hop question answering task with the HotPotQA (Yang et al., 2018) dataset in the open-domain “fullwiki” setting. (Section 7)
  - [DSPy: Compiling Declarative Language Model Calls into State-of-the-Art Pipelines](https://proceedings.iclr.cc/paper_files/paper/2024/file/f1cf02ce09757f57c3b93c0db83181e0-Paper-Conference.pdf)
- **2WikiMultiHopQA** (measurements) — *measured_by*
  > We evaluate our method’s retrieval capabilities primarily on two challenging multi-hop QA benchmarks, MuSiQue (answerable) [77] and 2WikiMultiHopQA [33]. (Section 3.1)
  - [HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ddc001d07ca4f319af96a3024f6dbd1-Paper-Conference.pdf)
- **MuSiQue** (measurements) — *measured_by*
  > We evaluate our method’s retrieval capabilities primarily on two challenging multi-hop QA benchmarks, MuSiQue (answerable) [77] and 2WikiMultiHopQA [33]. (Section 3.1)
  - [HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ddc001d07ca4f319af96a3024f6dbd1-Paper-Conference.pdf)
- **Bamboogle** (measurements) — *measured_by*
  > To evaluate the ability of different models to answer complex questions, we selected four complex question answering datasets: ... (4) Bamboogle (Press et al., 2023) (Section 3.1).
  - [GRAT: Guiding Retrieval-Augmented Reasoning through Process Rewards Tree Search](https://aclanthology.org/2025.acl-long.1352.pdf)
- **StrategyQA** (measurements) — *measured_by*
  > We conduct a comprehensive evaluation across multiple reasoning tasks, including multi-hop QA: StrategyQA (Geva et al., 2021) (Section 1)
  - [Correcting Negative Bias in Large Language Models through Negative Attention Score Alignment](https://aclanthology.org/2025.naacl-long.503.pdf)
- **MultiHop-RAG** (measurements) — *measured_by*
  > It includes 2,556 multi-hop questions requiring the integration of information from multiple articles to formulate comprehensive answers (Section 4.1).
  - [From Isolated Conversations to Hierarchical Schemas: Dynamic Tree Memory Representation for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/0382cb76309820f71c6eacd47b36ce71-Paper-Conference.pdf)
- **MQuAKE** (measurements) — *measured_by*
  > MQUAKE (Multi-hop Question Answering for Knowledge Editing) is a knowledge editing dataset focusing on the abovementioned multi-hop question answering tasks proposed in Zhong et al. (2023), where every case of MQUAKE is a multi-hop question made by a chain of single-hop subquestions. (Section 2.1)
  - [MQuAKE-Remastered: Multi-Hop Knowledge Editing Can Only Be Advanced with Reliable Evaluations](https://proceedings.iclr.cc/paper_files/paper/2025/file/f782860c2a5d8f675b0066522b8c2cf2-Paper-Conference.pdf)
- **WebQSP** (measurements) — *measured_by*
  > We evaluated our method on different knowledge-intensive reasoning benchmark datasets, including two multi-hop KBQA datasets WebQSP (Yih et al., 2016) and QALD10-en (Usbeck et al., 2023) (Section 4.1)
  - [Think-on-Graph 2.0: Deep and Faithful Large Language Model Reasoning with Knowledge-guided Retrieval Augmented Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/830b1abc6d2da85f23d41169fa44d185-Paper-Conference.pdf)
- **RULER** (measurements) — *measured_by*
  > RULER reports the averaged accuracy on two multi-hop question answering subtasks from RULER. (Table 4)
  - [A Little Goes a Long Way: Efficient Long Context Training and Inference with Partial Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/127a649ea9ae2df15e903a91352cfd3a-Paper-Conference.pdf)
- **WebQuestions** (measurements) — *measured_by*
  > We conduct experiments on five multi-hop QA datasets: HotPotQA (Yang et al., 2018), 2WikiMultiHopQA (2Wiki) (Ho et al., 2020), MuSiQue (Trivedi et al., 2022), Bamboogle (Press et al., 2023) and WebQuestions (WebQA) (Berant et al., 2013). (Section 4.1)
  - [KiRAG: Knowledge-Driven Iterative Retriever for Enhancing Retrieval-Augmented Generation](https://aclanthology.org/2025.acl-long.929.pdf)

### → Multi-hop question answering
- **Question decomposition** (behaviors tasks) — *causes*
  > Question decomposition has been found to help large language models’ (LLMs) performance on complex question answering (QA) by breaking these questions into simpler sub-questions for answering.
  - [Generating Complex Question Decompositions in the Face of Distribution Shifts](https://aclanthology.org/2025.naacl-long.55.pdf)
- **Knowledge retrieval** (behaviors tasks) — *causes*
  > due to the requirement for external knowledge in complex multi-hop questions (Mavi et al., 2024; Minaee et al., 2024), retrieval-augmented reasoning methods show more significant improvement compared to closed-book methods. (Section 5.1.1)
  - [BELLE: A Bi-Level Multi-Agent Reasoning Framework for Multi-Hop Question Answering](https://aclanthology.org/2025.acl-long.211.pdf)

### Associated with
- **Multi-hop reasoning** (constructs)
  > Multi-hop question answering (MHQA) involves reasoning across multiple documents to answer complex questions. (Abstract)
  - [ReSCORE: Label-free Iterative Retriever Training for Multi-hop Question Answering with Relevance-Consistency Supervision](https://aclanthology.org/2025.acl-long.16.pdf)
- **Reasoning** (constructs)
  > we can increase the complexity of a question by making it a multi-hop question [23, 24], which can be used to test whether an LLM can think in multiple steps. (Section 3.3)
  - [ERBench: An Entity-Relationship based Automatically Verifiable Hallucination Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/5ef9853a6cdea40ae3e301a6d8dc32b5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Information integration** (constructs)
  > standard multi-hop question answering (QA) also requires integrating information between passages in a retrieval corpus. (Section 1)
  - [HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ddc001d07ca4f319af96a3024f6dbd1-Paper-Conference.pdf)
- **Context faithfulness** (constructs)
  > We adopt a multi-hop editing task to measure context-faithfulness of LLMs in Section 4 by evaluating the accuracy of multi-hop question answering with fact edits. (Section 2.2)
  - [Is Factuality Enhancement a Free Lunch For LLMs? Better Factuality Can Lead to Worse Context-Faithfulness](https://proceedings.iclr.cc/paper_files/paper/2025/file/660d0ed5885662219244b6e44aba8fe3-Paper-Conference.pdf)
- **Portability** (constructs)
  > The Portability Scores intend to measure the ability of LLMs to reason about the downstream effects of edited knowledge. Thus, we design the Efficacy Evaluation Questions with N hops (N = 1 ∼6) as Portability Evaluation Questions. (Section 2.2, Facet 3)
  - [Can Knowledge Editing Really Correct Hallucinations?](https://proceedings.iclr.cc/paper_files/paper/2025/file/db93ccb6cf392f352570dd5af0a223d3-Paper-Conference.pdf)
