# SciFact
**Type:** Measurement  
**Referenced in:** 11 papers  

## State of the Field

**What it is.** Papers most commonly describe SciFact as a scientific fact-checking dataset or benchmark. The prevailing definitions say that claims are verified using evidence sentences from research papers, often with citation context, or against a corpus of research abstracts; one source states that it is "a dataset with sentences in papers as evidence." A smaller description places it among medical datasets, and one paper reports a split of 809 training and 300 test claims.

**What it is claimed to measure.** Across papers, the dominant claim is that SciFact measures Fact checking: it is linked to one behavioral indicator, Fact checking, and papers repeatedly frame it as fact checking in the scientific domain. A smaller line of work uses it to measure one construct, Domain knowledge, by sampling claims from SciFact in the science domain to investigate access to domain-specific factual knowledge. Overall, the measurement claims are concentrated on these two targets rather than spread across many constructs or indicators.

**Space of uses.** At the instrument level, SciFact is linked to one other measurement instrument, BEIR, and one paper reports that SciFact is measured by BEIR in the sense that it appears among "nine public datasets in the BEIR benchmark." Elsewhere, papers use it alongside COVID-Fact, PubHealth, Feverous, and AVeriTeC, and position it either as one of several popular fact-checking datasets or as part of a challenging subset chosen for high ratios of out-of-corpus terms.

## Sources

**[tRAG: Term-level Retrieval-Augmented Generation for Domain-Adaptive Retrieval](https://aclanthology.org/2025.naacl-long.334.pdf)**
> Scientific fact-checking dataset where claims are verified using evidence sentences from research papers, often requiring citation context.

## Relationships

### → SciFact
- **Fact checking** (behaviors tasks) — *measured_by*
  > Besides, we also take into account the SCIFACT [26] dataset, notable for its inclusion of scientific claims (Section 4.1).
  - [Information Re-Organization Improves Reasoning in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb1a323fa10d4102ff13422476a744ff-Paper-Conference.pdf)
- **Domain knowledge** (constructs) — *measured_by*
  > To investigate this further [how LLMs possess the capability to access domain-specific factual knowledge], we sample claims from PubHealth (Kotonya & Toni, 2020) in the public health domain and SciFact (Wadden et al., 2022) in the science domain. (Section 2.1)
  - [Towards Understanding Factual Knowledge of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/7b7d7985f62284060d65f532ed2ea5fa-Paper-Conference.pdf)

### Associated with
- **BEIR** (measurements)
  > “nine public datasets in the BEIR benchmark (Thakur et al., 2021), including ... SciFact (Wadden et al., 2020)”
  - [Attention in Large Language Models Yields Efficient Zero-Shot Re-Rankers](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5b1890a7c1a79fe9b32b0f442347089-Paper-Conference.pdf)
