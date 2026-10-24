# TopiOCQA
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Across the papers, the prevailing framing is of a conversational search benchmark or dataset built from multi-turn dialogues or queries. The most detailed definition says it contains multi-turn information-seeking dialogues with gold-standard passage retrieval and response generation labels, while other papers emphasize context-dependent questions requiring disambiguation, retrieval-oriented query reformulation, or challenging topic shifts within conversations. A smaller strand describes it as a conversational question answering dataset, but the dominant usage still places it within conversational search evaluation.

**What it is claimed to measure.** Papers link TopiOCQA to 1 construct and 1 behavioral indicator, so the recorded measurement claims center on a small set of targets. One paper uses it to measure Generalization through cross-dataset evaluation, training on the TopiOCQA training set and evaluating on QReCC, and another uses it to measure Query rewriting through multi-turn conversational queries. The named measurement targets are therefore Generalization and Query rewriting.

**Space of uses.** Most papers use it as a main evaluation dataset for conversational search, commonly alongside QReCC and, in some studies, alongside TREC-CAsT and ORConvQA. The uses shown here include training and evaluating query reformulation systems, comparing retrieval performance in multi-turn interactions, building reward-model training data, and testing cross-dataset generalization. One study also says it is used to "evaluate the reliability of the generated content via the given evidence/rationale."

## Sources

**[UniConv: Unifying Retrieval and Response Generation for Large Language Models in Conversations](https://aclanthology.org/2025.acl-long.344.pdf)**
> Conversational search benchmark containing multi-turn information-seeking dialogues with gold-standard passage retrieval and response generation labels.

## Relationships

### → TopiOCQA
- **Generalization** (constructs) — *measured_by*
  > For the evaluation of generalization ability, we trained models on the TopiOCQA training set and evaluated them on the QReCC test set, and vice versa.
  - [ConvSearch-R1: Enhancing Query Reformulation for Conversational Search with Reasoning via Reinforcement Learning](https://aclanthology.org/2025.emnlp-main.1349.pdf)

### Associated with
- **Query rewriting** (behaviors tasks)
  > We employ TopiOCQA (Adlakha et al., 2022) and QReCC (Anantha et al., 2021), both of which consist of multi-turn conversational queries. These datasets contain context-dependent questions...requiring disambiguation based on prior conversation turns. Hence, in the sub-task, LLM clarifies the original question into a standalone question. (Section 3)
  - [CIFLEX: Contextual Instruction Flow for Sub-task Execution in Multi-Turn Interactions with a Single On-Device LLM](https://aclanthology.org/2025.emnlp-main.533.pdf)
