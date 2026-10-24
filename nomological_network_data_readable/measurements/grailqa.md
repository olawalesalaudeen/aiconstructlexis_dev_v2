# GrailQA
**Type:** Measurement  
**Referenced in:** 8 papers  

## State of the Field

**What it is.** Across the definitions, the prevailing description is a Freebase KBQA or KGQA benchmark aimed at complex, compositional, and zero-shot reasoning. Papers also describe it as a dataset for evaluating KBQA generalizability, with I.I.D., compositional, and zero-shot splits; one definition adds that it contains 64,331 questions with target S-expressions and includes complex questions requiring up to 4-hop reasoning. A smaller framing presents it as used to evaluate semantic parsing systems.

**What it is claimed to measure.** Papers link it to five constructs and one behavioral indicator. Most commonly, papers use it to measure generalization and knowledge graph question answering; other reported uses are multi-hop reasoning, compositional generalization, robustness, and zero-shot generalization. Overall, the reported measurement claims are spread across several related targets, though generalization is the most recurrent framing.

**Space of uses.** In practice, papers usually place it inside multi-dataset evaluations, most often alongside CWQ and WebQSP, and some also pair it with Simple Questions, WebQuestions, or SimpleQA. They position it as one of the representative or widely used multi-hop KGQA benchmarks, and some explicitly use it to compare performance across different generalization levels or to report performance under attack settings on randomly sampled questions.

## Sources

**[TARGA: Targeted Synthetic Data Generation for Practical Reasoning over Structured Data](https://aclanthology.org/2025.acl-long.137.pdf)**
> Knowledge base question answering benchmark focusing on complex, compositional, and zero-shot reasoning over Freebase, used to evaluate semantic parsing systems.

## Relationships

### → GrailQA
- **Knowledge graph question answering** (behaviors tasks) — *measured_by*
  > To demonstrate the effectiveness of PoG on complex reasoning over knowledge graphs, we adopt three representative multi-hop KGQA datasets: CWQ, WebQSP, and GrailQA. (Section 4.1.1)
  - [Plan-on-Graph: Self-Correcting Adaptive Planning of Large Language Model on Knowledge Graphs](https://proceedings.neurips.cc/paper_files/paper/2024/file/4254e856d01a5e7b7ea050477c3ef9b9-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > We experiment on GrailQA to compare the performance on different generalization levels (preliminary in Appendix D). (Section 4.3.3)
  - [TARGA: Targeted Synthetic Data Generation for Practical Reasoning over Structured Data](https://aclanthology.org/2025.acl-long.137.pdf)
- **Multi-hop reasoning** (constructs) — *measured_by*
  > To evaluate the performance of our framework on multi-hop knowledge-intensive reasoning tasks, we conduct tests using four KBQA datasets: CWQ (Talmor & Berant, 2018), WebQSP (Yih et al., 2016), GrailQA (Gu et al., 2021), and SimpleQA (Bordes et al., 2015). (Section 5).
  - [Reasoning of Large Language Models over Knowledge Graphs with Super-Relations](https://proceedings.iclr.cc/paper_files/paper/2025/file/0c6799a1a5db47be8864fed46ba77697-Paper-Conference.pdf)
- **Data efficiency** (constructs) — *measured_by*
  > In this section, we analyze how the number of demonstrations impacts the performance. We experiment on GrailQA, with the number of demonstrations ranging from 1 to 20. (Section 4.3.1)
  - [TARGA: Targeted Synthetic Data Generation for Practical Reasoning over Structured Data](https://aclanthology.org/2025.acl-long.137.pdf)
- **Robustness** (constructs) — *measured_by*
  > Figure 4: Performance under attack setting on 1,000 randomly sampled GrailQA questions. (Figure 4)
  - [TARGA: Targeted Synthetic Data Generation for Practical Reasoning over Structured Data](https://aclanthology.org/2025.acl-long.137.pdf)
- **Zero-shot generalization** (constructs) — *measured_by*
  > In the validation and the test sets, 50% of the questions include KB elements that are unseen in the training set (zero-shot generalization tests), 25% consist of unseen compositions of KB elements seen in the training set (compositional generalization tests), and the remaining 25% are randomly sampled from the training set (I.I.D. tests). (Section 5.1)
  - [Beyond Seen Data: Improving KBQA Generalization Through Schema-Guided Logical Form Generation](https://aclanthology.org/2025.emnlp-main.442.pdf)
