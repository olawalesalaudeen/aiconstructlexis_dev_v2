# Induction copying
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Induction pattern matching, Zero-shot copying  

## State of the Field

**Space of definitions.** Across the surveyed work, it is usually framed as a synthetic copying or pattern-matching behavior in which the model must use a pattern established within the current sequence to predict the missing continuation. The recurring formulations require identifying a repeated subsequence or abstract pattern and then outputting either the next item after that subsequence or the associated token, as in a prompt of the form "...x, ℓ...x, ?" where predicting ℓ is the target behavior. One paper states this explicitly as presenting a sequence of words, then a randomly selected subsequence from within it, and asking for the next word.

**Variants.** Papers use several closely related names for this behavior, including induction copying, induction pattern matching, and zero-shot copying. The variants differ mainly in presentation: one uses word sequences and an in-sequence subsequence, another describes a more general abstract pattern-matching task that includes copying previous tokens, and another focuses on current-context token associations where x and ℓ need not have appeared together during training.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers elicit the behavior directly with synthetic prompts, for example by showing a longer sequence plus a subsequence from within it and asking for the following word, or by using a pattern like "...x, ℓ...x, ?" and examining whether ℓ is predicted.

**What it is taken as evidence of.** No construct is linked to this behavior, so the papers do not record a shared interpretation of what it is evidence of.

## Sources

**[On the Inductive Bias of Stacking Towards Improving Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/837bc5db12f3d394d220815a7687340c-Paper-Conference.pdf)**
> A synthetic task that requires identifying a subsequence of items within a longer sequence and predicting the item that immediately follows the subsequence.

**[Look Before You Leap: Universal Emergent Mechanism for Retrieval in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ad36c2cfc423e75c6d68d751a955b22e-Paper-Conference.pdf) (as "Induction pattern matching")**
> The task of identifying and applying an abstract pattern from examples, such as copying previous tokens.

**[The mechanistic basis of data dependence and abrupt learning in an in-context classification task](https://proceedings.iclr.cc/paper_files/paper/2024/file/540a3bf4863672cdaebfed69fa2ce335-Paper-Conference.pdf) (as "Zero-shot copying")**
> The observable behavior of predicting a token based on a pattern like "...x, ℓ...x, ?" where the association between x and ℓ is established only within the current context.
