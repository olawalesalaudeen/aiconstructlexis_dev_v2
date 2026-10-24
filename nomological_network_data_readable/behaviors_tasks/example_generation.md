# Example generation
**Type:** Behavior  
**Referenced in:** 4 papers  

## State of the Field

**Space of definitions.** Across the available work, the dominant framing is a word-sense task: generating synthetic sentences from a dictionary definition that demonstrate a specified target sense. The task is described as having an LLM produce distinct example sentences, and success is framed in the papers as whether those sentences demonstrate the target sense. One study states that "LLMs generate diverse example sentences for dictionary senses" and describes producing "t distinct example sentences that demonstrate the target sense."

**Variants.** The described setting is example generation for dictionary senses from dictionary definitions. Within that setting, the main variation emphasized is diversity: papers refer to both diverse and distinct example sentences, and describe applying a diversity strategy when generating them.

**Space of elicitation and scores.** No measurement instrument is linked to this behavior. The papers describe elicitation procedurally, by applying a diversity strategy and using an LLM generator to produce distinct example sentences; no separate scoring instrument is linked to it.

**What it is taken as evidence of.** No construct is linked to this behavior as something it measures or indicates. One paper instead reports that example generation is related to Hallucination, noting that when prompting the model to generate new examples, the authors still find "gross hallucinations."

## Sources

**[Towards General-Domain Word Sense Disambiguation: Distilling Large Language Model into Compact Disambiguator](https://aclanthology.org/2025.emnlp-main.45.pdf)**
> Producing synthetic sentences that demonstrate a specified word sense from a dictionary definition.

## Relationships

### Associated with
- **Hallucination** (behaviors tasks)
  > When prompting the model to generate new examples, we still find gross hallucinations (Section 4.2).
  - [Do Large Language Models Understand Word Senses?](https://aclanthology.org/2025.emnlp-main.1720.pdf)
