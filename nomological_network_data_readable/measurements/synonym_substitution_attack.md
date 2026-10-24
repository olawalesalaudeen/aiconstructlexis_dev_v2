# Synonym substitution attack
**Type:** Measurement  
**Referenced in:** 3 papers  
**Also known as:** Synonym substitution, Synonym replacement attack  

## State of the Field

**What it is.** Across definitions, the prevailing framing is a robustness evaluation in which words in generated or test text are replaced with synonyms. Papers variously describe it as an evaluation procedure, an observable attack, or an adversarial evaluation procedure; one definition specifies using BERT and WordNet, and another places it within semantically invariant perturbations alongside text paraphrasing.

**What it is claimed to measure.** In the papers' own descriptions, it is used to test the robustness or resilience of a watermark or detector, and one snippet says papers compare detection F1 scores under different synonymous word substitution scenarios. No constructs and no behavioral indicators are linked to it.

**Space of uses.** Papers use it as an attack condition for evaluation, not alongside any linked measurement instrument. Reported uses include evaluating resilience with BERT and WordNet, comparing detection F1 across synonym substitution scenarios, and applying synonym replacement with a replacement ratio of 0.2 alongside paraphrase attacks on test data from an unknown target domain.

## Sources

**[BiMark: Unbiased Multilayer Watermarking for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/feng25u/feng25u.pdf)**
> An evaluation procedure to test watermark resilience where words in the generated text are replaced with their synonyms using models like BERT or lexical databases like WordNet.

**[A Semantic Invariant Robust Watermark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a2131ebe25bd55e4fc734126ea583ed-Paper-Conference.pdf) (as "Synonym substitution")**
> An observable attack where words in a text are replaced with their synonyms to test the robustness of a watermark.

**[Kill two birds with one stone: generalized and robust AI-generated text detection via dynamic perturbations](https://aclanthology.org/2025.naacl-long.446.pdf) (as "Synonym replacement attack")**
> An adversarial evaluation procedure where words in a text are replaced with their synonyms to test the robustness of a detector.
