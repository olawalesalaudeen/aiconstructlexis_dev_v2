# Definition generation
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Terminology explanation, Entity description generation, Terminology interpretation, Concept definition  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is broad: generating a short natural-language definition or explanation for a target item. The most explicit formulation asks, given a target word and an example usage, for a definition that is 'grammatical, fluent, and faithful' to the word's meaning in that context; other formulations ask for a title plus opening sentence for an entity mention from retrieved passages, or a brief accessible explanation of unfamiliar or domain-specific terminology. A smaller line treats the behavior as defining a concept in a given domain, and one paper describes failure cases as definition errors that include gross hallucinations.

**Variants.** Papers study several variants under different names: Definition generation, Entity description generation, Terminology explanation, Terminology interpretation, and Concept definition. These variants span word meaning modeling from usage examples, entity descriptions whose target output is a title plus opening sentence, explanations for non-expert users encountering specialized terms, and domain-specific term interpretation such as explaining 'backlogging' in natural language. A related setting asks whether models trained on individual languages or multiple languages transfer to unseen languages for the task.

**Space of elicitation and scores.** Only one linked measurement instrument appears, LLM-as-a-judge. In the recorded use, papers employ an LLM judge to provide qualitative insights into the quality of generated descriptions. No other instrument is linked.

**What it is taken as evidence of.** Rather than treating it as evidence of a construct, papers only link it to one construct, Cross-lingual generalization, through a related relation. In that use, authors ask whether models fine-tuned on individual or multiple languages transfer to unseen languages for the task. No other construct link is recorded.

## Sources

**[RAED: Retrieval-Augmented Entity Description Generation for Emerging Entity Linking and Disambiguation](https://aclanthology.org/2025.emnlp-main.1746.pdf) (as "Entity description generation")**
> Producing a title and definition (opening sentence) for an entity mention by generating text conditioned on retrieved contextual passages.

**[Detecting Corpus-Level Knowledge Inconsistencies in Wikipedia with Large Language Models](https://aclanthology.org/2025.emnlp-main.1765.pdf) (as "Terminology explanation")**
> Generating accessible explanations of specialized or unfamiliar terms to support non-expert users in evaluating factual consistency.

**[Definition Generation for Word Meaning Modeling: Monolingual, Multilingual, and Cross-Lingual Perspectives](https://aclanthology.org/2025.emnlp-main.1321.pdf)**
> Producing a natural language definition for a target word given its usage in context, ensuring grammaticality, fluency, and faithfulness to meaning.

**[Chain-of-Experts: When LLMs Meet Complex Operations Research Problems](https://proceedings.iclr.cc/paper_files/paper/2024/file/d45ee77826332c100a1e15f7765b99ff-Paper-Conference.pdf) (as "Terminology interpretation")**
> Explaining domain-specific terms (e.g., ‘backlogging’) in natural language to support accurate modeling and reasoning.

**[Potemkin Understanding in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mancoridis25a/mancoridis25a.pdf) (as "Concept definition")**
> Generating a textual explanation that defines a given concept.

## Relationships

### Definition generation →
- **LLM-as-a-judge** (measurements) — *measured_by*
  > we employ a Large Language Model (LLM) as a judge (LLM-as-a-Judge) (Gu et al., 2024) to provide qualitative insights into the quality of generated descriptions (Section 5.4).
  - [RAED: Retrieval-Augmented Entity Description Generation for Emerging Entity Linking and Disambiguation](https://aclanthology.org/2025.emnlp-main.1746.pdf)

### Associated with
- **Cross-lingual generalization** (constructs)
  > In this section, we investigate whether models fine-tuned on individual languages (see Section 3) or multiple languages (see Section 4) can transfer their learned knowledge to other, unseen languages for the task of Definition Generation. (Section 5)
  - [Definition Generation for Word Meaning Modeling: Monolingual, Multilingual, and Cross-Lingual Perspectives](https://aclanthology.org/2025.emnlp-main.1321.pdf)
- **Hallucination** (behaviors tasks)
  > In generating definitions, errors include gross hallucinations as in defining law as 'a system of rules created and enforced through social or governmental institutions to regulate behavior' in a context in which 'legal document setting forth rules governing a particular kind of activity' is the right sense (Section 4.2).
  - [Do Large Language Models Understand Word Senses?](https://aclanthology.org/2025.emnlp-main.1720.pdf)
