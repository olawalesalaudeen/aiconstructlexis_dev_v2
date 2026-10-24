# LogRank
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** Log Rank, Log-Rank  

## State of the Field

Across the provided literature, LogRank is consistently characterized as a zero-shot and training-free technique for the detection of machine-generated text. The prevailing operationalization defines it as a method that uses the average log of token ranks, where ranks are ordered by descending probability. Other definitions describe it similarly as using the "average per-token rank" or as a variant of rank-based detection using "log-transformed token ranks." The method is based on the intuition that text sampled from a language model will have a lower average per-token rank within the model's conditional distribution. It is studied alongside other detection methods like GLTR and Rank, which also "leverage the probability or rank of the next token for detection" ("Your Language Model Can Secretly Write Like Humans: Contrastive Paraphrase Attacks on LLM-Generated Text Detectors"). One paper notes that the detector can be based on metrics derived from GPT2-xl likelihood predictions.

## Sources

**[Fast-DetectGPT: Efficient Zero-Shot Detection of Machine-Generated Text via Conditional Probability Curvature](https://proceedings.iclr.cc/paper_files/paper/2024/file/6b8c6f846c3575e1d1ad496abea28826-Paper-Conference.pdf)**
> A zero-shot detection technique that uses the average log of token ranks, where ranks are ordered by descending probability.

**[Language Model Detectors Are Easily Optimized Against](https://proceedings.iclr.cc/paper_files/paper/2024/file/1f9f07df0992ce21698d800eaa891bd8-Paper-Conference.pdf) (as "Log Rank")**
> Zero-shot detector that uses the average per-token rank in the conditional distribution to detect machine-generated text.

**[Detecting Machine-Generated Texts by Multi-Population Aware Optimization for Maximum Mean Discrepancy](https://proceedings.iclr.cc/paper_files/paper/2024/file/e537e071277a2e5fefaa78f87500c7b4-Paper-Conference.pdf) (as "Log-Rank")**
> A variant of the rank-based detection method that uses log-transformed token ranks to detect machine-generated text.

## Relationships

### → LogRank
- **AI-generated text detection** (behaviors tasks) — *measured_by*
  > LogRank(Solaiman et al., 2019) leverage the probability or rank of the next token for detection. (Section 2.1)
  - [Your Language Model Can Secretly Write Like Humans: Contrastive Paraphrase Attacks on LLM-Generated Text Detectors](https://aclanthology.org/2025.emnlp-main.433.pdf)
