# Entropy
**Type:** Measurement  
**Referenced in:** 10 papers  

## State of the Field

Across the surveyed literature, Entropy is most frequently operationalized as a metric for the detection of machine-generated text. Several papers define it as a zero-shot detection method or baseline that relies on the "mean token entropy of the predictive distribution" to distinguish between human and machine-authored content. One paper notes that "Likelihood and Entropy have been established as foundational baselines for zero-shot machine-generated text detection" (Fast-DetectGPT: Efficient Zero-Shot Detection of Machine-Generated Text via Conditional Probability Curvature). A related but broader application frames Entropy as a general measure of model uncertainty, used for tasks like "unsupervised accuracy estimation" or as an "uncertainty estimation method." A less common usage appears in a single paper, where Entropy is applied to measure the uncertainty within an attention matrix, serving to "evaluate the concentration ability of the self-attention" (Linear Log-Normal Attention with Unbiased Concentration). In this context, lower entropy corresponds to higher concentration. Across these applications, Entropy is often grouped with other likelihood-based metrics such as Rank and LogRank.

## Sources

**[Detecting Machine-Generated Texts by Multi-Population Aware Optimization for Maximum Mean Discrepancy](https://proceedings.iclr.cc/paper_files/paper/2024/file/e537e071277a2e5fefaa78f87500c7b4-Paper-Conference.pdf)**
> Average Negative Entropy of model output probabilities, used as a baseline for unsupervised accuracy estimation.

## Relationships

### → Entropy
- **Self-evaluation** (behaviors tasks) — *measured_by*
  > Traditional methods include token probability (Jiang et al., 2021), perplexity (Si et al., 2022), and entropy (Huang et al., 2023). (Section 2)
  - [Large Language Models Have Intrinsic Meta-Cognition, but Need a Good Lens](https://aclanthology.org/2025.emnlp-main.171.pdf)
