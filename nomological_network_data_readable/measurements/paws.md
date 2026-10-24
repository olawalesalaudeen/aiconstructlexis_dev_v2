# PAWS
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Papers most commonly describe PAWS as a benchmark or dataset for paraphrase detection or paraphrase identification. Definitions add that it evaluates whether two sentences are semantically equivalent and distinguishes paraphrases from non-paraphrases; one paper also describes it as Paraphrase Adversaries from Word Scrambling and notes sentence pairs with high lexical overlap that may still have different meanings.

**What it is claimed to measure.** Across the surveyed work, PAWS is linked to one behavioral indicator and one construct. The prevailing use is to measure Paraphrase detection, with several papers explicitly using PAWS for paraphrase detection or paraphrase identification; a smaller usage treats it as measuring Robustness, where one paper says the evaluation data reflect adversarial distribution shifts and are therefore suitable for evaluating OOD robustness of in-context learning.

**Space of uses.** No other measurement instrument is linked to PAWS. Papers instead position it as one task within broader evaluation suites: one study includes it among "seven diverse tasks" for fine-tuning, another reports notable performance gains on PAWS within wider downstream evaluations, and robustness work uses it as an adversarial distribution-shift benchmark.

## Sources

**[SR-LLM: Rethinking the Structured Representation in Large Language Model](https://aclanthology.org/2025.acl-long.172.pdf)**
> Paraphrase detection benchmark that evaluates whether two sentences are semantically equivalent, used to assess model performance in distinguishing paraphrases from non-paraphrases.

## Relationships

### → PAWS
- **Paraphrase detection** (behaviors tasks) — *measured_by*
  > PAWS ... Paraphrase Identification (Table 1: Dataset Statistics.)
  - [Dynamic Fisher-weighted Model Merging via Bayesian Optimization](https://aclanthology.org/2025.naacl-long.254.pdf)
- **Out-of-distribution generalization** (constructs) — *measured_by*
  > We used OOD evaluation datasets for NLI and paraphrase identification... for paraphrase identification, we used PAWS (Zhang et al., 1919)... making them suitable benchmarks for evaluating the OOD robustness of ICL. (Section 4.1)
  - [Exploring Explanations Improves the Robustness of In-Context Learning](https://aclanthology.org/2025.acl-long.1155.pdf)
