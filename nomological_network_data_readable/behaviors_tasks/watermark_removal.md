# Watermark removal
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Watermark neutralization, Watermark evasion, Watermark scrubbing  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats watermark removal as modifying watermarked training data, model outputs, or text so the watermark signal is eliminated, neutralized, or made undetectable. Definitions agree that success means the watermark is no longer detected or retained, though they differ on scope: some place it in unauthorized knowledge distillation, while others describe reverting a watermarked language model or its output to an unwatermarked state, or making rewritten text undetectable to the corresponding detector. A smaller line of work narrows the behavior to watermark evasion or scrubbing, where a paraphrased or semantically similar text avoids verification while maintaining textual quality.

**Variants.** Papers use several names and intervention points for this behavior. The most explicit split is between pre-distillation removal, through untargeted and targeted training data paraphrasing, and post-distillation removal, through watermark neutralization that applies inverse or inverted watermark rules during the student model's decoding phase. Other variants describe text rewriting or synonym substitution, adaptive and non-adaptive paraphrasing attacks, and scrubbing attacks that turn watermarked content into a semantically similar but watermark-free form; one paper also claims a causal relationship from Paraphrasing to Watermark removal, defining evasion rate as the fraction of watermarked text that does not retain the watermark after the paraphrasing attack.

**Space of elicitation and scores.** Papers do not link it to any measurement instrument. When they describe scoring, they usually do so through watermark detection outcomes, phrased as whether the detector or verification system still finds the watermark, whether the text retains the watermark after attack, or whether paraphrased text evades detection; one paper further states that if a user can consistently remove the watermark, over 90%, using a rewriting algorithm, the watermark is considered broken.

**What it is taken as evidence of.** Papers do not link it to any construct.

## Sources

**[Can LLM Watermarks Robustly Prevent Unauthorized Knowledge Distillation?](https://aclanthology.org/2025.acl-long.648.pdf)**
> The act of eliminating or neutralizing watermark signals from training data or model outputs to prevent detection during knowledge distillation.

**[Can LLM Watermarks Robustly Prevent Unauthorized Knowledge Distillation?](https://aclanthology.org/2025.acl-long.648.pdf) (as "Watermark neutralization")**
> A post-distillation watermark removal method that counteracts an inherited watermark by applying inverted watermark rules directly to the student model's logits during its decoding phase.

**[Optimizing Adaptive Attacks against Watermarks for Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/diaa25a/diaa25a.pdf) (as "Watermark evasion")**
> The observable outcome in which a paraphrased text successfully avoids detection by the watermark verification system while maintaining high textual quality.

**[B4: A Black-Box Scrubbing Attack onLLMWatermarks](https://aclanthology.org/2025.naacl-long.460.pdf) (as "Watermark scrubbing")**
> The observable act of transforming watermarked LLM-generated text into a semantically similar version that evades watermark detection.

## Relationships

### → Watermark removal
- **Paraphrasing** (behaviors tasks) — *causes*
  > The evasion rate is calculated as the fraction of watermarked text that does not retain the watermark after applying the paraphrasing attack. (Section 6.2)
  - [Optimizing Adaptive Attacks against Watermarks for Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/diaa25a/diaa25a.pdf)

### Associated with
- **Watermark robustness** (constructs)
  > “One critical vulnerability lies in watermark stealing & removal, a method that seeks to reverse-engineer the watermarking process. With this method, adversaries can effectively strip or alter the embedded watermark, undermining its intended protection.”
  - [De-mark: Watermark Removal in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25bq/chen25bq.pdf)
