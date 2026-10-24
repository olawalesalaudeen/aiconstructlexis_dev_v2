# CrowS-Pairs
**Type:** Measurement  
**Referenced in:** 27 papers  
**Also known as:** Crows-Pairs, CrowsPairs  

## State of the Field

**What it is.** Across papers, the prevailing description is of a crowdsourced benchmark or dataset of minimal or contrastive sentence pairs, with one sentence more stereotypical and the other anti-stereotypical or less stereotypical, used by checking which sentence a model prefers or assigns higher probability to. Definitions variously frame the judgment as which sentence is more likely, more natural or reasonable, and some specify pairs that differ by a single word or by social group references; several papers also describe coverage of historically disadvantaged groups and nine social bias categories, with 1,508 English examples. A smaller line of work refers to multilingual or language-specific versions, including French, Dutch, German, Spanish, and Catalan, and one paper mentions English CrowS-Pairs, Multilingual CrowS-Pairs, and a Spanish subset.

**What it is claimed to measure.** Papers use it to measure 4 constructs, with the most common claims linking it to Social bias and then Stereotyping. Smaller lines of work report it as measuring Aesthetic bias and Toxicity, and no behavioral indicators are linked to it. Across these claims, papers describe it as evaluating social bias, stereotypes, or a model's propensity to generate biased outputs through preferences between paired sentences.

**Space of uses.** Papers commonly position it as one benchmark within broader evaluation suites, alongside StereoSet, TruthfulQA, BBQ or BBQ Lite, WinoGender, and DecodingTrust. Some treat it as an intrinsic or closed-ended stereotyping benchmark, while others use it as an auxiliary validation set, compare new benchmarks against it, or extract stereotype prompts from it for multimodal evaluation.

**Concerns raised.** A few papers note coverage or annotation details. One says that, being crowd-sourced, CrowS-Pairs does not explicitly identify concept or identity terms, and another reports that only 13% of its constructed cases are contained within CrowS-Pairs.

## Sources

**[Beyond Imitation: Leveraging Fine-grained Quality Signals for Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5c8236f62e33b5224634069e64cb271a-Paper-Conference.pdf)**
> Dataset for measuring the presence of stereotypical biases in language models by comparing model preferences between stereotypical and anti-stereotypical sentence pairs.

**[ELICIT: LLM Augmentation Via External In-context Capability](https://proceedings.iclr.cc/paper_files/paper/2025/file/3ffd6024f02b92a52abe8e79a78e9064-Paper-Conference.pdf) (as "Crows-Pairs")**
> A dataset for measuring stereotypical biases in U.S. English language models by comparing sentences with stereotypical and anti-stereotypical associations.

**[Surprising Effectiveness of pretraining Ternary  Language Model at Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/6499f26637f74f7c0fbfb46668434973-Paper-Conference.pdf) (as "CrowsPairs")**
> A benchmark for measuring stereotypical biases in language models by presenting pairs of sentences, one more stereotypical than the other, and testing which the model prefers.

## Relationships

### → CrowS-Pairs
- **Social bias** (constructs) — *measured_by*
  > Probability-based bias evaluations such as CrowS-Pairs [22] and tasks in the BIG-bench benchmarking suite [48] compare the probabilities of stereotype-related tokens conditional on the presence of identity-related tokens. (Section 2.2)
  - [Cross-Care: Assessing the Healthcare Implications of Pre-training Data on Language Model Bias](https://proceedings.neurips.cc/paper_files/paper/2024/file/2a617efee5815f12b405d40569dea0a5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Stereotyping** (constructs) — *measured_by*
  > CrowS-Pairs (Nangia et al., 2020) assesses stereotypes associated with historically disadvantaged groups.
  - [CEB: Compositional Evaluation Benchmark for Fairness in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/38e491559eb9e4cf31b8cd3a4e222436-Paper-Conference.pdf)
- **Toxicity** (constructs) — *measured_by*
  > We evaluate the Spectra suite across various safety and toxicity benchmarks of TruthfulQA (Lin et al., 2021), Big Bench BBQ Lite (Parrish et al., 2022) and CrowsPairs (Nangia et al., 2020). (Section 5)
  - [Surprising Effectiveness of pretraining Ternary  Language Model at Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/6499f26637f74f7c0fbfb46668434973-Paper-Conference.pdf)
