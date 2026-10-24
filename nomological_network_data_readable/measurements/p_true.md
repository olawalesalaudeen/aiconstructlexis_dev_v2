# P(True)
**Type:** Measurement  
**Referenced in:** 10 papers  
**Also known as:** P(True) baseline  

## State of the Field

**What it is.** Across the papers, the prevailing usage is a prompt-based self-assessment method: a model is queried directly, often with a simple template, to judge whether its own generated answer is correct, and the probability of outputting "True" is taken as the score. Definitions variously present it as hallucination detection, error detection, or uncertainty quantification, but they converge on self-critique of a generated response. A smaller framing names a "P(True) baseline" protocol that first generates a completion for an input, concatenates the input and completion, and then asks the model to answer with "true" or "false" only.

**What it is claimed to measure.** Papers use it to score the model's own assessment of answer correctness, and they also describe that score as a confidence or uncertainty measure. No constructs are linked to it and no behavioral indicators are linked to it, so the papers do not connect it to a named construct; instead they describe it at the level of correctness, confidence, uncertainty, hallucination detection, or error detection.

**Space of uses.** When papers position it relative to other methods, the prevailing role is as a baseline or representative comparison method. Papers place it alongside semantic entropy, discrete semantic entropy, token predictive entropy, embedding regression, and semantic density in comparative evaluations, and one paper describes it as "a representative of this class of methods." No measurement instrument is linked to it.

## Sources

**[HD-NDEs: Neural Differential Equations for Hallucination Detection in LLMs](https://aclanthology.org/2025.acl-long.309.pdf)**
> A prompt-based hallucination detection method that uses a simple template to elicit model self-assessment of response correctness.

**[I Don't Know: Explicit Modeling of Uncertainty with an [IDK] Token](https://proceedings.neurips.cc/paper_files/paper/2024/file/14c018d2e72c521605b0567029ef0efb-Paper-Conference.pdf) (as "P(True) baseline")**
> An evaluation protocol where a model's uncertainty is probed by asking it to verify its own generated completion with a 'true' or 'false' answer.
