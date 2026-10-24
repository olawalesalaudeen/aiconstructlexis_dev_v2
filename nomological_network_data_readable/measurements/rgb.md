# RGB
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** The available definitions treat RGB as a retrieval-augmented generation benchmark, and one paper also describes it as an open-source general-domain QA dataset. Across these descriptions, it is used for questions that require grounding in retrieved documents, with emphasis on robustness, generalization, and the ability to effectively use retrieved information while withstanding imperfections in the retrieval process.

**What it is claimed to measure.** Papers link RGB to 1 behavioral indicator and no constructs. The only reported measurement claim is that it measures question answering, with papers describing it as evaluating whether language models can effectively use retrieved information under imperfect retrieval conditions.

**Space of uses.** No measurement instrument is linked to it through the recorded relations. In the available papers, RGB appears as one dataset within broader retrieval-augmented generation evaluations, placed alongside PopQA, Natural Questions, TriviaQA, and KNOT.

## Sources

**[RPO: Retrieval Preference Optimization for Robust Retrieval-Augmented Generation](https://aclanthology.org/2025.acl-long.261.pdf)**
> Retrieval-augmented generation benchmark designed to evaluate model performance on questions requiring grounding in retrieved documents, with a focus on robustness and generalization.

## Relationships

### → RGB
- **Question answering** (behaviors tasks) — *measured_by*
  > Open-source RAG datasets: RGB (Chen et al., 2024) and KNOT (Liu et al., 2024) are two general-domain QA datasets designed to evaluate LLMs’ ability to effectively utilize retrieved information while withstanding various imperfections in the retrieval process. (Section 5.1)
  - [Parenting: Optimizing Knowledge Selection of Retrieval-Augmented Language Models with Parameter Decoupling and Tailored Tuning](https://aclanthology.org/2025.acl-long.571.pdf)
