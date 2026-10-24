# Min-K% Prob
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

A grey-box baseline membership inference attack designed for LLMs that uses the token-level probabilities of the generated answer to compute a membership score.

## Sources

**[DocMIA: Document-Level Membership Inference Attacks against DocVQA Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/231a8daf4f64935d0c7c6586f290b24f-Paper-Conference.pdf)**
> A grey-box baseline membership inference attack designed for LLMs that uses the token-level probabilities of the generated answer to compute a membership score.

## Relationships

### → Min-K% Prob
- **Pre-training data detection** (behaviors tasks) — *measured_by*
  > MIN-K% PROB can also detect potential copyright infringement in training data, as we show in this section. (Section 5)
  - [Detecting Pretraining Data from Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/e32ad85fa27be4a9868d55703f01323e-Paper-Conference.pdf)
- **Privacy leakage** (behaviors tasks) — *measured_by*
  > "To accurately measure the privacy leakage, we employ Min-K% Prob (Shi et al., 2024a) , a state-of-the-art MIA method for LMs based on the loss"
  - [MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)
- **Fidelity** (constructs) — *measured_by*
  > “To address this issue, we deliberately select uncontaminated LLM-benchmark pairs and then manually contaminate the LLMs. ... To achieve this, we apply three BDC detection methods from distinct categories—Min-K% Prob (Shi et al., 2023), Sharded Rank Comparison Test (Oren et al., 2023), and TS-Guessing (Deng et al., 2023)”
  - [The Emperor’s New Clothes in Benchmarking? A Rigorous Examination of Mitigation Strategies for LLM Benchmark Data Contamination](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25t/sun25t.pdf)

### Associated with
- **Membership inference attack** (measurements)
  > To accurately measure the privacy leakage, we employ Min-K% Prob (Shi et al., 2024a) , a state-of-the-art MIA method for LMs based on the loss (Section 3.1)
  - [MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)
