# ARES
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Across the papers, ARES is described in two ways. In Probabilistic Soundness Guarantees in LLM Reasoning Chains, it is introduced as Autoregressive Reasoning Entailment Stability, a probabilistic framework that evaluates each reasoning step by its expected entailment probability, conditioned only on previously verified premises or previously occurring sound claims. RAGChecker: A Fine-grained Framework for Diagnosing Retrieval-Augmented Generation instead describes ARES as an automated evaluation framework for RAG systems that uses LLM-based classifiers to predict fine-grained scores, and says it followed the RAG Triad concept and improved score prediction approaches on different datasets.

**What it is claimed to measure.** The reported measurement claims are concentrated on one construct: papers link ARES to 1 construct, Error propagation, and to no behavioral indicators. That link is recorded as a measured_by relation, so papers use ARES to measure Error propagation, with one study reporting that it "excels at identifying propagated errors, especially in long chains."

**Space of uses.** No measurement instrument is linked to it. The available descriptions position it either as a framework for stepwise reasoning evaluation based on previously verified premises, or as a RAG evaluation framework used for fine-grained score prediction in relation to the RAG Triad concept.

## Sources

**[Probabilistic Soundness Guarantees in LLM Reasoning Chains](https://aclanthology.org/2025.emnlp-main.382.pdf)**
> Autoregressive Reasoning Entailment Stability, a probabilistic framework that evaluates each reasoning step based on its expected entailment probability conditioned only on previously-verified premises.

## Relationships

### → ARES
- **Error propagation** (constructs) — *measured_by*
  > Experiments on these controlled datasets confirm that ARES excels at identifying propagated errors, especially in long chains. (Section 4.2)
  - [Probabilistic Soundness Guarantees in LLM Reasoning Chains](https://aclanthology.org/2025.emnlp-main.382.pdf)
