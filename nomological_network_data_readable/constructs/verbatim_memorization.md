# Verbatim memorization
**Type:** Construct  
**Referenced in:** 4 papers  

## State of the Field

The tendency of a language model to reproduce exact or near-exact text from data that should have been removed.

## Sources

**[MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)**
> The tendency of a language model to reproduce exact or near-exact text from data that should have been removed.

## Relationships

### Verbatim memorization →
- **MUSE** (measurements) — *measured_by*
  > We address this issue by proposing MUSE, a comprehensive machine unlearning evaluation benchmark that enumerates six diverse desirable properties for unlearned models: (1) no verbatim memorization, (2) no knowledge memorization, (3) no privacy leakage, (4) utility preservation on data not intended for removal, (5) scalability with respect to the size of removal requests, and (6) sustainability over sequential unlearning requests. (Section 1)
  - [MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)
- **TOFU** (measurements) — *measured_by*
  > The results for Verbatim memorization (Verbmem), Model utility (Utility), TruthRatio, and Knowledge memorization (Knowmem) using different unlearning methods are presented in Table 1, 2 as well as 6 in Appendix. We evaluate these metrics using TOFU and MUSE-NEWS across LLMs. (Section 5.3)
  - [Unlearning as multi-task optimization: A normalized gradient difference approach with an adaptive learning rate](https://aclanthology.org/2025.naacl-long.563.pdf)

### Associated with
- **Memorization** (constructs)
  > the existing literature on memorization (Carlini et al., 2021) suggests that many models may verbatim memorize the order of examples in a benchmark dataset. We now focus on building tests that can reliably identify this form of memorization. (Section 2)
  - [Proving Test Set Contamination in Black-Box Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/46e624c244cff669223d488defd4e835-Paper-Conference.pdf)
