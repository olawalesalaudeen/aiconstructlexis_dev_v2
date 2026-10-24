# Verbatim regurgitation
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Verbatim quote generation  

## State of the Field

**Space of definitions.** Across the available definitions, the behavior is treated as generating exact or near-exact text that matches copyrighted source material, with particular emphasis on long excerpts. The definition in "Certified Mitigation of Worst-Case LLM Copyright Infringement" specifies exact or near-exact sequences, particularly long spans exceeding a defined threshold, and its snippets describe this as "generating content that is substantially similar to copyrighted material" and as producing "long verbatim quotes from copyrighted sources."

**Variants.** The available work uses the label "verbatim quote generation" for this behavior. In that usage, the focus stays on copyrighted sources and especially long verbatim excerpts.

**Space of elicitation and scores.** No measurement instrument is linked to this behavior. The only operational detail given in the definitions is that the matching text can be exact or near-exact and is particularly noted when it involves long spans exceeding a defined threshold.

**What it is taken as evidence of.** The only linked construct is Memorization. In "Mitigating Memorization in Language Models," one paper claims a causal relationship from Memorization to Verbatim regurgitation, stating that inference-time queries can lead to verbatim regurgitation of training data that the model has memorized; no other construct link is recorded.

## Sources

**[Certified Mitigation of Worst-Case LLM Copyright Infringement](https://aclanthology.org/2025.emnlp-main.1784.pdf) (as "Verbatim quote generation")**
> The model produces exact or near-exact sequences of text matching copyrighted source material, particularly long spans exceeding a defined threshold.

## Relationships

### → Verbatim regurgitation
- **Memorization** (constructs) — *causes*
  > Language models (LMs) can “memorize” information, i.e., encode training data in their weights in such a way that inference-time queries can lead to verbatim regurgitation of that data. (Section 1)
  - [Mitigating Memorization in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e50ff94d174465348f15c45760f58f9f-Paper-Conference.pdf)
