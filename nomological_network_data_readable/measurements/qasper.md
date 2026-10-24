# Qasper
**Type:** Measurement  
**Referenced in:** 19 papers  
**Also known as:** QASPER  

## State of the Field

**What it is.** Across papers, Qasper is most commonly described as a question-answering benchmark or dataset over full NLP papers, research papers, or scientific articles, with information-seeking questions grounded in the paper text. Definitions differ in emphasis: some describe full-paper or long scientific-document QA, while others place it in the SCROLL benchmark and note that it includes abstractive, extractive, yes/no, and unanswerable questions, including cases unanswerable from the provided abstract or full text. One description says it includes 5,049 questions across 1,585 NLP papers, another says the papers are filtered from S2ORC, and some work refers to a Qasper subset from LongBench.

**What it is claimed to measure.** Papers link Qasper to 3 behavioral indicators and 3 constructs. The prevailing use is to measure question answering, and other papers use it to measure document question answering and synthetic recall. At the construct level, papers report it as measuring length generalization, long-context reasoning, and long-context understanding.

**Space of uses.** The only recorded instrument link is that one paper relates Qasper to SCROLLS, presenting it among long-context open-book question answering tasks. It is used alongside NarrativeQA, QuALITY, ContractNLI, and QMSum, and papers position it as an open-book or document-grounded QA benchmark for retrieval, long-sequence, long-context, and length extrapolation evaluations. Some papers also adapt it for specific setups, for example treating each paper as a knowledge base with sections as documents and passages, or filtering and augmenting QASPER to identify questions requiring reasoning over figures, tables, and textual paragraphs.

## Sources

**[RAPTOR: Recursive Abstractive Processing for Tree-Organized Retrieval](https://proceedings.iclr.cc/paper_files/paper/2024/file/8a2acd174940dbca361a6398a4f9df91-Paper-Conference.pdf) (as "QASPER")**
> QASPER is a question-answering benchmark over full NLP papers, used here to assess retrieval and answering over long scientific documents.

**[In-Context Pretraining: Language Modeling Beyond Document Boundaries](https://proceedings.iclr.cc/paper_files/paper/2024/file/a1fe2365abdb691332537990a6385909-Paper-Conference.pdf)**
> A dataset from the SCROLL benchmark for question answering about scientific papers, where questions may be unanswerable from the provided abstract or full text.

## Relationships

### → Qasper
- **Question answering** (behaviors tasks) — *measured_by*
  > Qasper (QASP) (Dasigi et al., 2021) is a question answering dataset over NLP papers filtered from the Semantic Scholar Open Research Corpus (S2ORC) (Lo et al., 2020).
  - [Retrieval meets Long Context Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d75f29006df67df084e6586f1cb8458c-Paper-Conference.pdf)
- **Long-context understanding** (constructs) — *measured_by*
  > Long-context ability evaluation. Following Xiong et al. [94], we evaluated the models on long-sequence tasks, including Qasper [18]... (Table 4, Section 4.2)
  - [Gated Slot Attention for Efficient Linear-Time Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3f39e51f5f634fb16cc3e658f8512b9-Paper-Conference.pdf)
- **Length generalization** (constructs) — *measured_by*
  > Figure 2: Length extrapolation on six long benchmarks.
  - [Gated Delta Networks: Improving Mamba2 with Delta Rule](https://proceedings.iclr.cc/paper_files/paper/2025/file/4904fad153f6434a7bcf04465d4be2cc-Paper-Conference.pdf)
- **Document question answering** (behaviors tasks) — *measured_by*
  > “To this end, we focus on three open-book QA datasets: 3. QASPER (Dasigi et al., 2021): A document-grounded, information-seeking question answering dataset”
  - [AttriBoT: A Bag of Tricks for Efficiently Approximating Leave-One-Out Context Attribution](https://proceedings.iclr.cc/paper_files/paper/2025/file/2aab664e0d1656e8b56c74f868e1ea69-Paper-Conference.pdf)
- **Synthetic recall** (behaviors tasks) — *measured_by*
  > In long-context retrieval scenario where questions are gathered from Qasper (Dasigi et al., 2021), MoDification-7B-32k yields 10.3 on Qasper, which is competitive with 10.2 from LLaMA-2-7B-32k. (Section 5)
  - [MoDification: Mixture of Depths Made Easy](https://aclanthology.org/2025.naacl-long.265.pdf)

### Associated with
- **SCROLLS** (measurements)
  > ...we evaluate MEGALODON on long-context open-book question answering (QA) tasks in the Scrolls dataset (Shaham et al., 2022), including NarrativeQA (Koˇcisk´y et al., 2018), Qasper (Dasigi et al., 2021)... (Section 4.3).
  - [Megalodon: Efficient LLM Pretraining and Inference with Unlimited Context Length](https://proceedings.neurips.cc/paper_files/paper/2024/file/840abfadd04c967feaa2a49aba94a32d-Paper-Conference.pdf)
