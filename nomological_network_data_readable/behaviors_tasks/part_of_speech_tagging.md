# Part-of-speech tagging
**Type:** Behavior  
**Referenced in:** 7 papers  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats part-of-speech tagging as assigning a grammatical label to a word or token in context, often phrased as marking up a word as a particular part of speech based on its definition and context. Most descriptions focus on assigning labels to tokens, while one task setup makes the success criterion more explicit by asking for the POS tag of the central word in a context window.

**Variants.** Papers study this behavior in several settings rather than with a single formulation. Some place it among traditional NLP tasks in code-mixed text, some describe it as a linguistically motivated token-classification task, and another variant focuses on Chinese characters, where models identify the POS of a central word in a 5-word window and may rely on radicals when the word contains unfamiliar characters.

**Space of elicitation and scores.** No measurement instrument is linked to it. In the available task descriptions, papers elicit it directly by asking for part-of-speech labels, including a setup that presents a 5-word window with at most one punctuation mark and asks for the tag of the central word.

**What it is taken as evidence of.** No construct is linked to it.

## Sources

**[CodeMixBench: Evaluating Code-Mixing Capabilities of LLMs Across 18 Languages](https://aclanthology.org/2025.emnlp-main.109.pdf)**
> The task of marking up a word in a text as corresponding to a particular part of speech, based on both its definition and its context.
