# Watermarked text generation
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Watermark embedding, Watermark generation  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats this behavior as generating text that carries an embedded watermark signal, usually described as detectable under standard or specialized decoding. Definitions commonly operationalize it by altering generation itself, for example by modifying token sampling, reweighting candidate tokens with a secret key, perturbing model weights, or changing the model’s output distribution during generation. As one study puts it, models can "learn to generate watermarked text with high detectability" (On the Learnability of Watermarks for Language Models), though a smaller line of work describes probabilistic reweighting that embeds an "undetectable watermark."

**Variants.** Papers use several nearby names for the behavior, including watermark embedding and watermark generation. The settings described include weights-based watermarking that generates watermarked text directly from the model under standard decoding, structural watermarking that samples from a weight-perturbed model, and message embedding that pseudorandomly encodes a message into balanced bits for multilayer reweighting. Another recurring variant combines logits-based and sampling-based procedures, where one paper says it "first apply a logits-based watermarking... followed by... sampling-based watermarking" (From Trade-off to Synergy: A Versatile Symbiotic Watermarking Framework for Large Language Models).

**Space of elicitation and scores.** No measurement instrument is linked to it, so the papers do not tie this behavior to a named elicitation or scoring instrument.

**What it is taken as evidence of.** No construct is linked to it, so the papers do not record this behavior as evidence of a named construct.

## Sources

**[On the Learnability of Watermarks for Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/a86d17b6cd70366d56ab48d2a05a4df1-Paper-Conference.pdf)**
> Generating text that contains a detectable watermark signal under standard or specialized decoding.

**[BiMark: Unbiased Multilayer Watermarking for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/feng25u/feng25u.pdf) (as "Watermark embedding")**
> The process of modifying a language model's token sampling strategy to inject detectable signals or messages into generated text using a secret key.

**[An Unforgeable Publicly Verifiable Watermark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/214d2cffc381938be6f7254d5382904f-Paper-Conference.pdf) (as "Watermark generation")**
> The process of modifying an LLM's output distribution during text generation to embed a detectable signal.
