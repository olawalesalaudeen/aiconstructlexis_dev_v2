# Language identification
**Type:** Behavior  
**Referenced in:** 6 papers  

## State of the Field

**Space of definitions.** Across the surveyed papers, the dominant framing is a classification-style task that asks a model to determine the language of text. Most descriptions speak of predicting the language of a sentence or text input, and one study notes that "each demonstration is a pair of a sentence and its associated language" (Rapid Selection and Ordering of In-Context Demonstrations via Prompt Embedding Clustering). A smaller framing extends this to identifying the language(s) present in a piece of text, often at the word or sentence level, rather than only assigning one language to a sentence. Success is described as producing the associated language label, and one probing setup restricts that output to a single token.

**Variants.** Papers study several variants of the same behavior. One line uses in-context demonstrations for sentence-level identification, another implements it as a probing classification task with single-token outputs and the abbreviation LTI, and a code-mixing line treats it as language identification, or LID, over mixed text at the word or sentence level (CodeMixBench: Evaluating Code-Mixing Capabilities of LLMs Across 18 Languages). The naming is mostly stable, with "language identification" as the main term and LTI or LID appearing as task abbreviations.

**Space of elicitation and scores.** No measurement instrument is linked to it in these papers. Instead, the available descriptions operationalize it directly as a classification task, either through in-context demonstrations that pair sentences with language labels or through probe-style setups that require single-token outputs.

**What it is taken as evidence of.** No construct is linked to it in these papers.

## Sources

**[Rapid Selection and Ordering of In-Context Demonstrations via Prompt Embedding Clustering](https://proceedings.iclr.cc/paper_files/paper/2025/file/6c2745a8e20271c2e8c7067a2c3c7710-Paper-Conference.pdf)**
> Predicting the language of a sentence from in-context demonstrations.
