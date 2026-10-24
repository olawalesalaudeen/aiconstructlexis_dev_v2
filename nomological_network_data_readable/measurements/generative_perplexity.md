# Generative perplexity
**Type:** Measurement  
**Referenced in:** 2 papers  

## State of the Field

Evaluation metric for unconditional text generation that approximates the Kullback-Leibler divergence between model and data distributions using a large language model as a proxy for the true data distribution.

## Sources

**[Latent Thought Models with Variational Bayes Inference-Time Computation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kong25c/kong25c.pdf)**
> Evaluation metric for unconditional text generation that approximates the Kullback-Leibler divergence between model and data distributions using a large language model as a proxy for the true data distribution.

## Relationships

### → Generative perplexity
- **Text generation quality** (constructs) — *measured_by*
  > In order to quantify sample quality, we use “generative perplexity”, a metric that computes the likelihood of generated samples under a more capable model... (Sec. 5.3)
  - [Generalized Interpolating Discrete Diffusion](https://raw.githubusercontent.com/mlresearch/v267/main/assets/von-rutte25a/von-rutte25a.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > “One principled metric to evaluate unconditional generation is DKL(pβ(x)||pdata(x)) = Epβ(x)[−log pdata(x)]−H(pβ). As both terms are intractable, alternative metrics have been proposed: Dieleman et al. (2022) introduce generative perplexity (Gen PPL)”
  - [Latent Thought Models with Variational Bayes Inference-Time Computation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kong25c/kong25c.pdf)
