# Sparse probing
**Type:** Measurement  
**Referenced in:** 2 papers  
**Also known as:** k-sparse probing  

## State of the Field

An evaluation method to assess if learned latents encode meaningful concepts by training a simple classifier, such as logistic regression, on the sparse activations of an autoencoder.

## Sources

**[Learning Multi-Level Features with Matryoshka Sparse Autoencoders](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bussmann25a/bussmann25a.pdf)**
> An evaluation method to assess if learned latents encode meaningful concepts by training a simple classifier, such as logistic regression, on the sparse activations of an autoencoder.

**[SAEBench: A Comprehensive Benchmark for Sparse Autoencoders in Language Model Interpretability](https://raw.githubusercontent.com/mlresearch/v267/main/assets/karvonen25a/karvonen25a.pdf) (as "k-sparse probing")**
> A method that evaluates whether SAE latents isolate pre-specified concepts by training a linear probe on the top-k most relevant latents and measuring its accuracy.

## Relationships

### → Sparse probing
- **Concept detection** (constructs) — *measured_by*
  > Concept Detection: Measures how precisely individual latents correspond to meaningful concepts through Sparse Probing and Feature Absorption metrics
  - [SAEBench: A Comprehensive Benchmark for Sparse Autoencoders in Language Model Interpretability](https://raw.githubusercontent.com/mlresearch/v267/main/assets/karvonen25a/karvonen25a.pdf)
