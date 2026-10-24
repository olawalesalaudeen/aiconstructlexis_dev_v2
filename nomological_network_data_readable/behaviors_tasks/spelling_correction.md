# Spelling correction
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Typo correction  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats spelling correction as identifying and fixing misspellings in text while leaving other wording, style, and formatting unchanged. One benchmark prompt states, "Please output this exact text, with no changes at all except for fixing the misspellings," and also asks for preserving choices such as commas and US versus British spellings. A smaller line of work narrows the task to correcting spelling errors at the character level, while other papers use it more behaviorally, as correct answers despite inputs with typos, or as typo and sometimes grammatical correction that happens during rewriting even when not requested.

**Variants.** Papers refer to the behavior as typo correction, spelling correction, and spell-checking. The settings vary between exact-text correction tasks, character-level unsupervised spell-checking, and evaluations of "accuracy when inputs include typos." Another variant appears in rewriting settings, where models "nearly always correct typos" as an unintended side effect during attribute rewriting.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers describe elicitation through direct correction prompts, character-level unsupervised spell-checking tasks, and evaluations based on whether outputs are correct or on "accuracy when inputs include typos," but they do not tie these setups to named instruments.

**What it is taken as evidence of.** No construct is linked to it. One paper describes correct answers on inputs with typos as implying that models can "fix" typos to recover intended meaning, but the papers do not connect the behavior to a named construct.

## Sources

**[LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf) (as "Typo correction")**
> The task of identifying and fixing misspellings in a text while preserving all other stylistic and formatting elements.

**[Efficient Perplexity Bound and Ratio Matching in Discrete Diffusion Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/23e6f78bdec844a9f7b6c957de2aae91-Paper-Conference.pdf)**
> The task of identifying and correcting spelling errors in a given text at the character level.
