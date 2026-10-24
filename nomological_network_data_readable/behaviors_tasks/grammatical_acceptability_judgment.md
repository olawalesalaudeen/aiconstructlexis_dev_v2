# Grammatical acceptability judgment
**Type:** Behavior  
**Referenced in:** 30 papers  
**Also known as:** Syntactic well-formedness detection, Grammaticality judgment, Grammatical judgment, Linguistic acceptability, Linguistic acceptability judgment, Acceptability judgment  

## State of the Field

**Space of definitions.** Across definitions, the prevailing usage is a sentence-level judgment of whether a sentence is grammatically correct or acceptable, often framed as classifying it as acceptable versus unacceptable. Several papers use near-equivalent formulations around grammatical correctness, while a smaller line broadens the criterion to whether a sentence is grammatically or semantically well-formed or acceptable to a native speaker. Some authors operationalize success as choosing between a correct and a corrupted sentence or, in minimal-pair settings, selecting the more acceptable member.

**Variants.** Papers study the behavior under several near-synonymous names, including linguistic acceptability judgment, grammaticality judgment, grammatical judgment, syntactic well-formedness detection, and acceptability judgment. The main variants are single-sentence classification, minimal-pair comparison where the model rates the acceptable sentence higher than an unacceptable counterpart, and syntactic well-formedness checks such as Bigram Shift; language-specific settings also appear, including English sentences, Turkish minimal pairs, and a discriminative grammar judgment experiment for Kalamang.

**Space of elicitation and scores.** Papers link this behavior to 2 measurement instruments. CoLA is the most often linked instrument and is described as a single-sentence classification benchmark for deciding whether a sentence is grammatically acceptable or unacceptable, while GLUE-X also includes it as a linguistic acceptability or grammar task. Several papers also score the behavior with minimal-pair accuracy, counting a model correct when it assigns higher probability, likelihood, or acceptability to the grammatical sentence, sometimes using an MLM scoring function.

**What it is taken as evidence of.** Papers link it to 1 construct, Syntactic competence. The available relationships concern only that construct: one paper reports grammaticality judgment is related to syntactic competence, and another treats syntactic competence as measured by linguistic acceptability judgment tasks used to assess robustness against grammatical errors and to probe grammatical knowledge.

## Sources

**[Emergence of a High-Dimensional Abstraction Phase in Language Transformers](https://proceedings.iclr.cc/paper_files/paper/2025/file/57568e093cbe0a222de0334b36e83cf5-Paper-Conference.pdf) (as "Syntactic well-formedness detection")**
> The observable task of determining whether a given sentence adheres to the grammatical rules of a language.

**[TopoNets: High performing vision and language models with brain-like topography](https://proceedings.iclr.cc/paper_files/paper/2025/file/6191ab7080c840f67eaf5dff7d5edfcb-Paper-Conference.pdf) (as "Linguistic acceptability judgment")**
> The task of determining whether a sentence is grammatically or semantically well-formed, as evaluated by benchmarks like BLiMP.

**[Can LLMs Really Learn to Translate a Low-Resource Language from One Grammar Book?](https://proceedings.iclr.cc/paper_files/paper/2025/file/20f44da80080d76bbc35bca0027f14e6-Paper-Conference.pdf) (as "Grammaticality judgment")**
> The task of determining whether a given sentence is grammatically correct according to the rules of a language, often by choosing between a correct and a corrupted version.

**[AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf)**
> The task of classifying a sentence as either grammatically acceptable or unacceptable.

**[DisLoRA: Task-specific Low-Rank Adaptation via Orthogonal Basis from Singular Value Decomposition](https://aclanthology.org/2025.emnlp-main.694.pdf) (as "Grammatical judgment")**
> The task of determining whether a sentence is grammatically correct.

**[Tiny Budgets, Big Gains: Parameter Placement Strategy in Parameter Super-Efficient Fine-Tuning](https://aclanthology.org/2025.emnlp-main.321.pdf) (as "Linguistic acceptability")**
> The task of judging whether a sentence is grammatically correct or acceptable to a native speaker.

**[How to Make the Most of LLMs' Grammatical Knowledge for Acceptability Judgments](https://aclanthology.org/2025.naacl-long.380.pdf) (as "Acceptability judgment")**
> The observable behavior of selecting or scoring one sentence as more grammatically acceptable than another in a minimal pair.

## Relationships

### Grammatical acceptability judgment →
- **CoLA** (measurements) — *measured_by*
  > CoLA (Corpus of Linguistic Acceptability) (Warstadt et al., 2019) is a single-sentence classification task, where sentences are annotated as either grammatically acceptable or unacceptable (Section 4.3).
  - [AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf)

### Associated with
- **Syntactic competence** (constructs)
  > However, LLMs can exploit grammatical information, given an appropriate task—e.g. grammaticality judgment or IGT prediction—and more useful grammatical data in the form of our typological prompt, which achieves leading results on these linguistic tasks. (Section 6)
  - [Can LLMs Really Learn to Translate a Low-Resource Language from One Grammar Book?](https://proceedings.iclr.cc/paper_files/paper/2025/file/20f44da80080d76bbc35bca0027f14e6-Paper-Conference.pdf)
