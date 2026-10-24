# RAGAS
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across the surveyed papers, the dominant framing is of RAGAS as an automated, LLM-based evaluator for Retrieval-Augmented Generation. Definitions variously describe it as a pointwise evaluation system, a Retrieval-Augmented Generation Assessment framework, and an automated evaluation framework, with one description adding that it uses prompted frontier models and embedding models to score responses. The outcomes it evaluates are usually described through metrics such as faithfulness and context relevance, with some definitions also naming refusal, answer relevance, and claim-level decomposition.

**What it is claimed to measure.** Papers link RAGAS to 1 construct and no behavioral indicators, so the recorded use is concentrated rather than spread across many outcomes. The only explicit measured_by relation says that RAGAS measures Faithfulness. More broadly, definitions and snippets also report it as assessing metrics such as context relevance, answer relevance, and refusal.

**Space of uses.** Papers mainly position RAGAS as a reference or comparison evaluator within broader RAG assessment setups. One study says it is run as a reference point, another cites it with RAG-Checker as showing that LLMs can provide scalable and automated assessments, and a meta-evaluation includes metrics from TruLens, RAGAS, ARES, and CRUD-RAG. It also appears alongside MiniCheck in one evaluation setup.

**Concerns raised.** One comparative paper groups RAGAS with frameworks that offer fine-grained evaluation only on certain metrics.

## Sources

**[Does Context Matter? ContextualJudgeBench for Evaluating LLM-based Judges in Contextual Settings](https://aclanthology.org/2025.acl-long.470.pdf)**
> A pointwise evaluation system for Retrieval-Augmented Generation that uses prompted frontier models and embedding models to score responses on metrics like refusal and faithfulness.

## Relationships

### → RAGAS
- **Faithfulness** (constructs) — *measured_by*
  > Frameworks such as RAGAS (Shahul et al., 2023) and RAG-Checker (Ru et al., 2024) have demonstrated that LLMs can provide scalable and automated assessments of metrics such as context relevance and faithfulness
  - [RAG-Zeval: Enhancing RAG Responses Evaluator through End-to-End Reasoning and Ranking-Based Reinforcement Learning](https://aclanthology.org/2025.emnlp-main.1267.pdf)
