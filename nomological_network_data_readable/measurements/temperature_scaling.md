# Temperature scaling
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** Temperature Scaling  

## State of the Field

Across the provided literature, temperature scaling is consistently characterized as a post-hoc or post-processing calibration procedure designed to improve a model's predictive or confidence calibration. The most common description of its mechanism is that it rescales a model's output logits with a scalar temperature parameter before the softmax function, which, as one paper notes, can "either be smoothed (T > 1) or sharpened (T < 1)." Several sources state that implementing this technique requires tuning the temperature hyperparameter on a separate validation set. While its prevailing use is for calibration, a less common framing describes it as a self-evaluation technique to adjust softmax probabilities to better reflect confidence. One paper also specifies that this method does not reorder candidate generations. In terms of application, temperature scaling is reported to be particularly beneficial for the task of response classification.

## Sources

**[Bayesian Low-rank Adaptation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/07c256a163a7559186ec1c71e95b9ec9-Paper-Conference.pdf)**
> A post-hoc calibration procedure that tunes a temperature hyperparameter on a validation set to improve predictive calibration.

**[Latent Space Chain-of-Embedding Enables Output-free LLM Self-Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b0b1cfc8ede53f452cabf8b9cf4eef76-Paper-Conference.pdf) (as "Temperature Scaling")**
> A post-hoc calibration method used as a self-evaluation technique to adjust softmax probabilities to better reflect confidence.

## Relationships

### → Temperature scaling
- **Calibration** (constructs) — *measured_by*
  > We use Temperature Scaling (TS) (Guo et al., 2017): Introduces a temperature parameter T to scale the logits, minimizing ECE on a validation set to achieve better calibration.
  - [Restoring Calibration for Aligned Large Language Models: A Calibration-Aware Fine-Tuning Approach](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiao25b/xiao25b.pdf)
