# Temporal question answering
**Type:** Behavior  
**Referenced in:** 6 papers  
**Also known as:** Context-based date resolution  

## State of the Field

**Space of definitions.** Across the definitions, temporal question answering is most commonly described as answering questions that require understanding and reasoning about temporal knowledge, time-related information, events, and temporal relationships, including questions about when an event occurred or whether one event preceded another. A narrower formulation treats it as context-based date resolution, where the answer depends on resolving a date mentioned in a passage, for example identifying which team a player was associated with on a specific date. Another usage frames it as answering questions about recent events that occurred after a model's primary training cutoff.

**Variants.** Papers study several settings under this label. One is a context-based split built from question-context pairs that each require resolution of a date mentioned in the passage. Another is temporal question answering generation, abbreviated TQA-G, used through a separate LoRA layer and also in joint fine-tuning with MCMS to inject up-to-date knowledge from recent local news articles; a further variant is MIDTERMQA, a QA benchmark centered on the 2022 U.S. midterm elections for evaluating temporal knowledge update.

**Space of elicitation and scores.** Only one measurement instrument is linked to it: ComplexTempQA, which is used to measure temporal question answering. Papers describe ComplexTempQA as a large-scale dataset with over 100 million question-answer pairs designed to tackle challenges in temporal question answering, and no other linked instrument is named.

**What it is taken as evidence of.** No construct is linked to it, and the papers do not specify another construct that this behavior is taken to indicate.

## Sources

**[ComplexTempQA: A 100m Dataset for Complex Temporal Question Answering](https://aclanthology.org/2025.emnlp-main.463.pdf)**
> Generating answers to questions that require understanding and reasoning about time, events, and temporal relationships, such as when an event occurred or whether one event preceded another.

**[Date Fragments: A Hidden Bottleneck of Tokenization for Temporal Reasoning](https://aclanthology.org/2025.emnlp-main.159.pdf) (as "Context-based date resolution")**
> Extracting and interpreting a date mentioned in a textual context to answer a question, such as identifying a team associated with a player on a specific date.

## Relationships

### Temporal question answering →
- **ComplexTempQA** (measurements) — *measured_by*
  > We introduce COMPLEXTEMPQA, a large-scale dataset consisting of over 100 million question-answer pairs designed to tackle the challenges in temporal question answering.
  - [ComplexTempQA: A 100m Dataset for Complex Temporal Question Answering](https://aclanthology.org/2025.emnlp-main.463.pdf)
