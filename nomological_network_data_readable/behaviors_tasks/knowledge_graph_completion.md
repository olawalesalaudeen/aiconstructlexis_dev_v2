# Knowledge graph completion
**Type:** Behavior  
**Referenced in:** 4 papers  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats knowledge graph completion as filling a missing part of a triple. Some definitions describe the missing item as the relation between a given head entity and tail entity pair, and one urban formulation narrows this to geospatial relations, even prompting models to "please complete the geospatial relationship between them"; other definitions describe the task as inferring the missing head or tail entity from an incomplete factual triple. In both framings, success is described as recovering the missing relation or entity from the provided entities or triple.

**Variants.** Papers study several variants of the task. One line focuses on urban knowledge graph completion, specifically predicting geospatial relationships between entities in two metropolises, New York City and Chicago. Another line presents knowledge graph completion through two related tasks, triple classification, assessing the correctness of a given triple (h, r, t), and link prediction, identifying the most plausible tail entity for a query of the form (h, r, ?).

**Space of elicitation and scores.** Papers link knowledge graph completion to four measurement instruments. The most frequently linked are the conventional datasets WN18RR and FB15k-237; other work evaluates urban knowledge graph completion with Human evaluation and LLM-as-a-judge, described in the papers as GPT-4-based self-evaluation. The measurement mix therefore includes both benchmark datasets and judge-based evaluation.

**What it is taken as evidence of.** Papers do not present a common construct that this behavior is taken to indicate. Only one construct is linked, Hallucination resistance, and the recorded relationship is related rather than measured_by, causes, or correlates; the relevant paper connects knowledge graphs with "minimal hallucinations." No other construct link is recorded.

## Sources

**[UrbanKGent: A Unified Large Language Model Agent Framework for Urban Knowledge Graph Construction](https://proceedings.neurips.cc/paper_files/paper/2024/file/decd42d78c42cea59c95c7c3d40d5e0f-Paper-Conference.pdf)**
> Predicting the missing relation between a given head entity and tail entity pair.

## Relationships

### Knowledge graph completion →
- **WN18RR** (measurements) — *measured_by*
  > We evaluate MKGL on the FB15k-237 and WN18RR datasets, which are widely used by most KG completion methods (Section 4.1)
  - [MKGL: Mastery of a Three-Word Language](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe03053bd2cf5b5c56de1e463bc53e1a-Paper-Conference.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > We conduct comprehensive experiments on two UrbanKGC tasks in two metropolises (New York City and Chicago) using both human evaluation and GPT-4-based self-evaluation. (Section 1)
  - [UrbanKGent: A Unified Large Language Model Agent Framework for Urban Knowledge Graph Construction](https://proceedings.neurips.cc/paper_files/paper/2024/file/decd42d78c42cea59c95c7c3d40d5e0f-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > We conduct comprehensive experiments on two UrbanKGC tasks in two metropolises (New York City and Chicago) using both human evaluation and GPT-4-based self-evaluation. (Section 1)
  - [UrbanKGent: A Unified Large Language Model Agent Framework for Urban Knowledge Graph Construction](https://proceedings.neurips.cc/paper_files/paper/2024/file/decd42d78c42cea59c95c7c3d40d5e0f-Paper-Conference.pdf)
- **FB15k-237** (measurements) — *measured_by*
  > We evaluate MKGL on the FB15k-237 and WN18RR datasets, which are widely used by most KG completion methods (Section 4.1)
  - [MKGL: Mastery of a Three-Word Language](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe03053bd2cf5b5c56de1e463bc53e1a-Paper-Conference.pdf)

### Associated with
- **Triple classification** (behaviors tasks)
  > our work focuses on KGC, specifically addressing two tasks: (i) triple classification, assessing the correctness of a given triple (h, r, t), and (ii) link prediction, identifying the most plausible tail entity t for a given query (h, r, ?). (Section 3)
  - [Enhancing Large Language Model for Knowledge Graph Completion via Structure-Aware Alignment-Tuning](https://aclanthology.org/2025.emnlp-main.1061.pdf)
- **Link prediction** (behaviors tasks)
  > our work focuses on KGC, specifically addressing two tasks: (i) triple classification, assessing the correctness of a given triple (h, r, t), and (ii) link prediction, identifying the most plausible tail entity t for a given query (h, r, ?). (Section 3)
  - [Enhancing Large Language Model for Knowledge Graph Completion via Structure-Aware Alignment-Tuning](https://aclanthology.org/2025.emnlp-main.1061.pdf)
