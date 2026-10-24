# Financial question answering
**Type:** Behavior  
**Referenced in:** 4 papers  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage is finance-domain question answering. Papers agree on the domain, but differ in formulation: the more common description is answering financial questions using retrieved evidence, while another description narrows the behavior to answering multiple-choice questions related to finance.

**Variants.** The task appears in two named settings. One is presented as "Financial QA" or "FiQA," including a formulation where answers are produced with retrieved evidence; the other is a finance-specific MMLU setting framed as multiple-choice questions related to finance.

**Space of elicitation and scores.** Papers measure this behavior with 2 instruments. The more common instrument is FiQA, described in the papers as a Financial QA task, and another instrument is MMLU, used for finance-related multiple-choice questions; both are benchmark-style instruments in the way the papers describe them.

**What it is taken as evidence of.** No construct is linked to this behavior, so the papers do not explicitly relate it to any construct.

## Sources

**[Training a Utility-based Retriever Through Shared Context Attribution for Retrieval-Augmented Language Models](https://aclanthology.org/2025.emnlp-main.33.pdf)**
> Answering questions in the financial domain using retrieved evidence.

## Relationships

### Financial question answering →
- **FiQA** (measurements) — *measured_by*
  > FIQA for financial question answering (Section 4.3).
  - [Co-Eval: Augmenting LLM-based Evaluation with Machine Metrics](https://aclanthology.org/2025.emnlp-main.1307.pdf)
- **MMLU** (measurements) — *measured_by*
  > Financial: MMLU benchmark (Hendrycks et al., 2020) (Section 4.1).
  - [Splitting with Importance-aware Updating for Heterogeneous Federated Learning with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liao25c/liao25c.pdf)
