# MUSE
**Type:** Measurement  
**Referenced in:** 11 papers  

## State of the Field

**What it is.** Papers most commonly describe MUSE as a comprehensive machine unlearning evaluation benchmark, expanded in one definition as Machine Unlearning Six-Way Evaluation for language models. The prevailing description says it evaluates unlearned models across six desiderata or facets, using news and book corpora with verbatim-text and question-answer knowledge sets. Some authors frame it more specifically as a benchmark for erasing copyrighted information, with two unlearning scenarios, Books from the Harry Potter series and News from BBC News, while another description focuses on the News setup in which passages are split into Forget and Retain sets for question-answering based evaluation of knowledge removal and utility preservation.

**What it is claimed to measure.** Across papers, the measurement claims are spread across several targets rather than centered on one. Papers link MUSE to four constructs and one behavioral indicator, namely knowledge memorization, robustness, utility preservation, verbatim memorization, and privacy leakage. One definition also presents it as evaluating six desirable properties of unlearning: no verbatim memorization, no knowledge memorization, no privacy leakage, utility preservation on data not intended for removal, scalability with respect to the size of removal requests, and sustainability over sequential unlearning requests.

**Space of uses.** Papers generally use MUSE as an evaluation benchmark for unlearning methods, and one paper refers to evaluating a method on the MUSE dataset. It is explicitly related to TOFU, with one paper contrasting TOFU's synthetic Q&A evaluation with MUSE's real-world unlearning challenges. Another paper reports experiments conducted in MUSE and WMDP, which positions it as one of several testbeds used for assessing unlearning performance.

**Concerns raised.** One paper says the benchmark highlights a drawback in current methods: applying unlearning to larger corpora leads to a decline in general language usefulness. Another paper notes that many MUSE queries require multiple models to interact compatibly, and that tested systems sometimes fail on either the justification or the output parts.

## Sources

**[MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)**
> Machine Unlearning Six-Way Evaluation, a benchmark that evaluates unlearned language models across six desiderata using news and book corpora with verbatim-text and question-answer knowledge sets.

## Relationships

### → MUSE
- **Unlearning** (constructs) — *measured_by*
  > We now evaluate our method on the MUSE dataset (Shi et al., 2024). (Section 5)
  - [UNDIAL: Self-Distillation with Adjusted Logits for Robust Unlearning in Large Language Models](https://aclanthology.org/2025.naacl-long.444.pdf)
- **Verbatim memorization** (constructs) — *measured_by*
  > We address this issue by proposing MUSE, a comprehensive machine unlearning evaluation benchmark that enumerates six diverse desirable properties for unlearned models: (1) no verbatim memorization, (2) no knowledge memorization, (3) no privacy leakage, (4) utility preservation on data not intended for removal, (5) scalability with respect to the size of removal requests, and (6) sustainability over sequential unlearning requests. (Section 1)
  - [MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)
- **Knowledge memorization** (constructs) — *measured_by*
  > We address this issue by proposing MUSE, a comprehensive machine unlearning evaluation benchmark that enumerates six diverse desirable properties for unlearned models: (1) no verbatim memorization, (2) no knowledge memorization, (3) no privacy leakage, (4) utility preservation on data not intended for removal, (5) scalability with respect to the size of removal requests, and (6) sustainability over sequential unlearning requests. (Section 1)
  - [MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)
- **Privacy leakage** (behaviors tasks) — *measured_by*
  > We address this issue by proposing MUSE, a comprehensive machine unlearning evaluation benchmark that enumerates six diverse desirable properties for unlearned models: (1) no verbatim memorization, (2) no knowledge memorization, (3) no privacy leakage, (4) utility preservation on data not intended for removal, (5) scalability with respect to the size of removal requests, and (6) sustainability over sequential unlearning requests. (Section 1)
  - [MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)
- **Utility preservation** (constructs) — *measured_by*
  > We address this issue by proposing MUSE, a comprehensive machine unlearning evaluation benchmark that enumerates six diverse desirable properties for unlearned models: (1) no verbatim memorization, (2) no knowledge memorization, (3) no privacy leakage, (4) utility preservation on data not intended for removal, (5) scalability with respect to the size of removal requests, and (6) sustainability over sequential unlearning requests. (Section 1)
  - [MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)
- **Scalability** (constructs) — *measured_by*
  > We address this issue by proposing MUSE, a comprehensive machine unlearning evaluation benchmark that enumerates six diverse desirable properties for unlearned models: (1) no verbatim memorization, (2) no knowledge memorization, (3) no privacy leakage, (4) utility preservation on data not intended for removal, (5) scalability with respect to the size of removal requests, and (6) sustainability over sequential unlearning requests. (Section 1)
  - [MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)

### Associated with
- **TOFU** (measurements)
  > Unlike the previous benchmark TOFU (Maini et al., 2024), which evaluates unlearning on synthetic Q&A datasets, MUSE tackles real-world unlearning challenges (Table 1)
  - [MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)
