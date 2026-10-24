# Triple classification
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Triplet classification  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats this behavior as judging whether a knowledge graph triple or triplet is correct. Papers agree on the core success criterion, a correctness judgment for a given triple, while differing in specificity: one defines it as predicting a binary label, correct or incorrect, for a triple based on a context document, and another describes it more broadly as estimating or validating the correctness of a fully formed triplet.

**Variants.** Papers use both "triple classification" and "triplet classification" for this task. The settings mentioned include classifying triples in generated graphs in a graph judgement setting, and a related knowledge graph completion setting where triple classification assesses the correctness of a given triple (h, r, t) and is discussed alongside link prediction for (h, r, ?).

**Space of elicitation and scores.** No measurement instrument is linked to it. In the task descriptions themselves, elicitation is direct: a knowledge graph triple or triplet is presented, sometimes with a context document, and the response is scored as a correctness judgment, most explicitly a binary correct versus incorrect label.

**What it is taken as evidence of.** No construct is linked to it as something it indicates. The only other reported link says it is related to knowledge graph completion, rather than to a named construct.

## Sources

**[Can LLMs be Good Graph Judge for Knowledge Graph Construction?](https://aclanthology.org/2025.emnlp-main.554.pdf)**
> The task of predicting a binary label (correct or incorrect) for a given knowledge graph triple based on a context document.

**[MKGL: Mastery of a Three-Word Language](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe03053bd2cf5b5c56de1e463bc53e1a-Paper-Conference.pdf) (as "Triplet classification")**
> Judging whether a knowledge graph triplet is valid or correct.

## Relationships

### Associated with
- **Knowledge graph completion** (behaviors tasks)
  > our work focuses on KGC, specifically addressing two tasks: (i) triple classification, assessing the correctness of a given triple (h, r, t), and (ii) link prediction, identifying the most plausible tail entity t for a given query (h, r, ?). (Section 3)
  - [Enhancing Large Language Model for Knowledge Graph Completion via Structure-Aware Alignment-Tuning](https://aclanthology.org/2025.emnlp-main.1061.pdf)
