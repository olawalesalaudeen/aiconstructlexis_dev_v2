# Watermark spoofing
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Watermark forgery  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage treats it as an attack behavior in which an attacker generates new text that is falsely detected as watermarked. Both definitions center the success condition on detector acceptance, phrased as text being "detected as watermarked" or "incorrectly identified as containing a valid watermark." One definition adds that the spoofer does this "without knowing the private key ξ," while another discusses forgery when shared key exposure or enough understanding of the watermark generation rule would enable the attacker to forge watermarked text.

**Variants.** A smaller naming difference appears in whether papers call the behavior watermark spoofing or watermark forgery. The snippets also describe targeted attacks on Red-Green watermarks that allow "impersonating (spoofing) the watermark," and they note a learning-based variant in which an attacker queries the watermarked model, builds a watermarked dataset D, and then learns the watermark from that dataset.

**Space of elicitation and scores.** No measurement instrument is linked to it. In the definitions and snippets, papers operationalize success through the detector's output: the text counts when it is "detected as watermarked" or when the detection algorithm "incorrectly identifies" it as containing a valid watermark.

**What it is taken as evidence of.** Papers connect it only to robustness, and they do so with a related link rather than as a direct measure of a construct. One paper discusses "robustness against watermark spoofing attack," so the behavior is treated as something robustness is assessed against, and no other construct is linked to it.

## Sources

**[Discovering Spoofing Attempts on Language Model Watermarks](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gloaguen25a/gloaguen25a.pdf)**
> The observable act of a malicious actor generating text that is falsely detected as watermarked by a specific LLM's detector, without access to the private key.

**[An Unforgeable Publicly Verifiable Watermark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/214d2cffc381938be6f7254d5382904f-Paper-Conference.pdf) (as "Watermark forgery")**
> The observable behavior of an attacker creating new text that the detection algorithm incorrectly identifies as containing a valid watermark.

## Relationships

### Associated with
- **Robustness** (constructs)
  > Following the settings in (Jovanovi´c et al., 2024), we compare the robustness against watermark spoofing attack by setting up LMmo as LLAMA2-7B and LMatt as MISTRAL-7B (Jiang et al., 2023).
  - [StealthInk: A Multi-bit and Stealthy Watermark for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jiang25j/jiang25j.pdf)
