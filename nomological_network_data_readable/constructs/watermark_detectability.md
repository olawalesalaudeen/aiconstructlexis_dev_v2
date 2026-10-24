# Watermark detectability
**Type:** Construct  
**Referenced in:** 14 papers  
**Also known as:** Detectability, Machine-generated text detectability  

## State of the Field

**Definition agreement:** Consensus. Most papers define watermark detectability as the ability to reliably detect an embedded watermark or statistical signal in model-generated text, usually via a detection system or statistical test and sometimes stressing robustness or false positive control. A few papers instead describe general detection of machine-generated versus human-written text, which is a different phenomenon, but that appears as a minority outlier rather than the main pattern.

**Space of definitions.** Across the papers, the prevailing usage treats detectability as the degree or ability to identify an embedded watermark in model-generated text, usually through a detection system or statistical test. Most definitions stay within this watermark-focused framing, whether they emphasize a statistical signal in the text, correct identification of watermarked outputs under tokenization inconsistency or adversarial attack, or reliable detection with low false positive rates. A smaller line of work uses detectability more broadly for whether machine-generated text, including personalized disinformation, can be distinguished from human-written text, so the main disagreement is over the target of detection, watermark presence versus AI authorship, and secondarily over whether the property is assigned to the watermarking scheme, the detector, or the text.

**Space of facets.** Papers do not present a stable subtype scheme. The recurring split is between watermarked versus non-watermarked detection and human-authored versus machine-generated detection, and within the watermarking usage authors alternately describe detectability as a property of the embedded signal or watermarking scheme, of the detector, and of the resulting text. It is repeatedly discussed together with robustness, and in some papers alongside stealthiness, resilience, and generation quality, rather than broken into named subdimensions.

**Space of measurement.** Among explicit links, papers attach no measurement instrument to this construct and link it to one behavioral indicator, Watermark detection. Operationalization is nevertheless made concrete through analyses of detection performance: one paper says AUROC is employed to simulate detectability in real-world scenarios, another evaluates statistical test power at a chosen level, and others report detection efficiency or detectability across diverse tasks such as machine translation and protein generation. These operationalizations mostly follow the dominant watermark-focused definitions, while the broader detectability definitions concern AI-generated versus human-authored text.

**Links.** The only explicit relationship claim is that Watermark detectability is measured by Watermark detection, reported in one paper. No papers report a causal, correlational, or other related link involving this construct.

## Sources

**[A Watermark for Order-Agnostic Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0ce8e3434c7b486bbddff9745b2a1722-Paper-Conference.pdf)**
> The degree to which a statistical signal embedded in model-generated text can be successfully identified by a detection algorithm.

**[Addressing Tokenization Inconsistency in Steganography and Watermarking Based on Large Language Models](https://aclanthology.org/2025.emnlp-main.361.pdf) (as "Detectability")**
> The ability of a watermark detection system to correctly identify LLM-generated text as watermarked, even in the presence of tokenization inconsistencies or adversarial attacks.

**[OpenTuringBench: An Open-Model-based Benchmark and Framework for Machine-Generated Text Detection and Attribution](https://aclanthology.org/2025.emnlp-main.1354.pdf) (as "Machine-generated text detectability")**
> The latent ability of a model or system to distinguish between human-authored and machine-generated text based on underlying linguistic or statistical patterns.

## Relationships

### Associated with
- **Watermark robustness** (constructs)
  > watermarks should remain detectable after common token- and sequence-level corruptions are applied.
  - [GaussMark: A Practical Approach for Structural Watermarking of Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/block25a/block25a.pdf)
