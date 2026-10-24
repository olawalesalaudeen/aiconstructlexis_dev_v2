# PubHealth
**Type:** Measurement  
**Referenced in:** 8 papers  

## State of the Field

**What it is.** Across the surveyed papers, PubHealth is most commonly described as a fact verification dataset or claim verification benchmark in the public health domain, often grouped with closed-set tasks. Definitions consistently emphasize public health or medical claims, and several descriptions frame it as evaluating closed-set factual verification or the truthfulness of health-related statements. A smaller line of work instead describes it as a closed-set generative dataset comprising medical claims on various biomedical topics.

**What it is claimed to measure.** Papers link PubHealth to one construct and one behavioral indicator. The prevailing linked use is to measure fact checking: papers describe it as requiring a system to verify a given claim based on retrieved documents. One paper also uses sampled claims from PubHealth to investigate domain-specific factual knowledge in the public health domain, so it is also reported as measuring domain knowledge; overall, the claimed measurement scope is concentrated rather than spread across many targets.

**Space of uses.** No measurement instrument is linked to it through explicit relationships. In practice, papers often use PubHealth inside broader multi-dataset evaluations, including ablation studies with PopQA and ASQA, closed-set task collections with OpenbookQA and ARC-Challenge, and domain-focused evaluations with SciFact and one other medical dataset; papers also pair it with SciFact when sampling domain-specific claims.

## Sources

**[Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection](https://proceedings.iclr.cc/paper_files/paper/2024/file/25f7be9694d7b32d5cc670927b8091e1-Paper-Conference.pdf)**
> A fact verification dataset about public health used to evaluate closed-set factual verification performance.

## Relationships

### → PubHealth
- **Fact checking** (behaviors tasks) — *measured_by*
  > PubHealth is a dataset of medical claims spanning a variety of biomedical subjects and it requires the RAG system to verify a given claim based on the retrieved documents. (Section 4)
  - [Speculative RAG: Enhancing Retrieval Augmented Generation through Drafting](https://proceedings.iclr.cc/paper_files/paper/2025/file/2ea06b52f613716e67458f5ab3fb7558-Paper-Conference.pdf)
- **Domain knowledge** (constructs) — *measured_by*
  > To investigate this further [how LLMs possess the capability to access domain-specific factual knowledge], we sample claims from PubHealth (Kotonya & Toni, 2020) in the public health domain and SciFact (Wadden et al., 2022) in the science domain. (Section 2.1)
  - [Towards Understanding Factual Knowledge of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/7b7d7985f62284060d65f532ed2ea5fa-Paper-Conference.pdf)
