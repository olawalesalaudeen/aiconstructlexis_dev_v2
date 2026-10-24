# Watermark detection
**Type:** Behavior  
**Referenced in:** 12 papers  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is a binary decision task over text sequences or generated content: determine whether a candidate text contains a watermark. Most formulations describe success as outputting 1 or 0, classifying text as watermarked or not, or deciding whether a suspect text is more likely from a marked versus unmarked distribution. A smaller set of descriptions makes the criterion more specific, such as detecting when the average token-level watermark logit is greater than zero, when a z-value exceeds a threshold, or when a calibrated detector concludes the text came from a watermarked model.

**Variants.** Papers consistently pose the behavior on text, but study it in several watermarking settings, including semantic-invariant, publicly verifiable, provably robust, unbiased, order-agnostic, structural, and low-entropy watermarking. Some authors explicitly call it the watermark detection task and describe it as the inverse of watermark embedding, while others emphasize detector variants such as neural network classification, statistical hypothesis testing, recovering a key sequence from generated content, or testing a candidate text under a watermarking key and model.

**Space of elicitation and scores.** No measurement instrument is linked to it. Even so, papers operationalize the behavior with detectors or discriminators that use thresholded statistics, for example average watermark logits, z-scores or z-values, counts of green-list tokens, green or red list token membership, and statistical tests over a watermarking key, model, and candidate text. The output is usually a binary classification, such as watermarked versus not watermarked, or watermarked versus human-generated.

**What it is taken as evidence of.** Only one construct is linked to this behavior: Watermark detectability. One paper treats Watermark detectability as measured by watermark detection, citing empirical evaluations of detectability alongside other watermarking properties. No other construct link is recorded.

## Sources

**[A Semantic Invariant Robust Watermark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a2131ebe25bd55e4fc734126ea583ed-Paper-Conference.pdf)**
> Determining whether a text contains a watermark signal from its token-level watermark logits.
