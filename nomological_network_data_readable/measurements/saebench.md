# SAEBench
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** SAE Bench  

## State of the Field

**What it is.** Across the cited work, SAEBench is most commonly treated as a benchmark or evaluation suite for sparse autoencoders. Definitions differ in the metrics they foreground: one describes feature absorption, splitting, composition, probing, and concept isolation across multiple tasks and models, while another emphasizes downstream SAE-specific metrics such as spurious correlation removal, targeted probe perturbation, sparse probing, automated interpretability, and feature absorption. One paper also characterizes it as a benchmark of SAE metrics "faithful to possible real world use cases."

**What it is claimed to measure.** It is linked to 1 construct, interpretability and explainability, and to no behavioral indicators. Papers use it to measure that construct through "interpretability benchmark results from SAEBench" and through a "detection score ... implemented in SAE Bench" that is used to validate interpretability, so the reported use centers on a single construct rather than a broader set.

**Space of uses.** No other measurement instrument is linked to it. Papers use its evaluations to compare SAE variants across a wide variety of tasks, to calculate specific metrics such as absorption rate following SAEBench, and to evaluate both an SAE and an SAE+LoRA on the benchmark. In interpretability-focused work, authors also report SAEBench benchmark results directly.

## Sources

**[Learning Multi-Level Features with Matryoshka Sparse Autoencoders](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bussmann25a/bussmann25a.pdf) (as "SAE Bench")**
> Evaluation suite for sparse autoencoders that includes metrics for feature absorption, splitting, composition, probing, and concept isolation across multiple tasks and models.

**[Low-Rank Adapting Models for Sparse Autoencoders](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25r/chen25r.pdf)**
> SAEBench, a benchmark suite for evaluating sparse autoencoders on downstream SAE-specific metrics such as spurious correlation removal, targeted probe perturbation, sparse probing, automated interpretability, and feature absorption.

## Relationships

### → SAEBench
- **Interpretability and explainability** (constructs) — *measured_by*
  > We include interpretability benchmark results from SAEBench in Appendix A.3.4. (Section 4.1)
  - [Inference-Time Decomposition of Activations (ITDA): A Scalable Approach to Interpreting Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/leask25a/leask25a.pdf)
