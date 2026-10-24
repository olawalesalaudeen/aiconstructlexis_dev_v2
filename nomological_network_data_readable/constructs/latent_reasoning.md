# Latent reasoning
**Type:** Construct  
**Referenced in:** 3 papers  
**Also known as:** Latent thinking  

## State of the Field

The model's capacity to perform internal, non-verbalized cognitive processing in continuous latent space, distilling additional computation into its kv-cache to improve downstream performance.

## Sources

**[Deliberation in Latent Space via Differentiable Cache Augmentation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25bc/liu25bc.pdf) (as "Latent thinking")**
> The model's capacity to perform internal, non-verbalized cognitive processing in continuous latent space, distilling additional computation into its kv-cache to improve downstream performance.

## Relationships

### Latent reasoning →
- **Attention knockout** (measurements) — *measured_by*
  > “we use the attention knockout (Geva et al., 2023) to identify critical information flow points”
  - [Unveiling Internal Reasoning Modes in LLMs: A Deep Dive into Latent Reasoning vs. Factual Shortcuts with Attribute Rate Ratio](https://aclanthology.org/2025.emnlp-main.111.pdf)
- **Logit lens** (measurements) — *measured_by*
  > “we interpret the hidden states at the subject position using the logit lens (Nostalgebraist, 2020)”
  - [Unveiling Internal Reasoning Modes in LLMs: A Deep Dive into Latent Reasoning vs. Factual Shortcuts with Attribute Rate Ratio](https://aclanthology.org/2025.emnlp-main.111.pdf)

### Associated with
- **Chain of thought** (behaviors tasks)
  > DART (Distilling Autoregressive Reasoning to Silent Thought), a novel framework that enables the LLMs to internalize the autoregressive CoT into non-autoregressive Silent Thought (ST) with an excellent efficiency-efficacy trade-off. (Section 1)
  - [DART: Distilling Autoregressive Reasoning to Silent Thought](https://aclanthology.org/2025.emnlp-main.256.pdf)
