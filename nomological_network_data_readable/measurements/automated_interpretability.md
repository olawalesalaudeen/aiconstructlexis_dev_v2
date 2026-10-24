# Automated interpretability
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** Automated interpretability evaluation, Automated interpretability classification, Automated interpretability with LLMs, Automated simulation evaluation with language models  

## State of the Field

**What it is.** Most definitions describe it as an LLM-based evaluation procedure for SAE latents: the judge is given activating examples, works from a proposed or generated textual feature description, and is used to predict when the latent will activate or to score the explanation's predictive success. Some papers specify GPT-4o or GPT-4o-mini, one paper frames the protocol as automated interpretability classification with validation on new activating and non-activating examples, and another describes a related automated simulation evaluation that measures the correlation between actual activations and activations predicted from the explanation. One paper also applies the same prompting pattern to explain meta-latent groupings.

**What it is claimed to measure.** Across papers, claims converge on one construct: it measures Interpretability and explainability. The linked evidence describes this as evaluating the human-understandability of learned latents with an LLM as judge, or as using GPT-4o for automated interpretability classification. It is linked to one construct and no behavioral indicators, so the reported measurement claims do not spread across multiple constructs.

**Space of uses.** Papers mostly position it as a standard LLM-based judging framework. The prevailing usage is to generate explanations from activating dataset examples and then ask an LLM judge to predict on which inputs a latent will be active; variants use a second LLM instance to validate on new activating and non-activating examples, or repeat the procedure for groups of latents associated with a meta-SAE latent. No other measurement instrument is linked to it.

## Sources

**[SAEBench: A Comprehensive Benchmark for Sparse Autoencoders in Language Model Interpretability](https://raw.githubusercontent.com/mlresearch/v267/main/assets/karvonen25a/karvonen25a.pdf)**
> An LLM-based evaluation method that assesses the interpretability of SAE latents by training an LLM judge to predict activation patterns based on proposed feature descriptions.

**[Learning Multi-Level Features with Matryoshka Sparse Autoencoders](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bussmann25a/bussmann25a.pdf) (as "Automated interpretability evaluation")**
> Procedure using an LLM judge (e.g., gpt4o-mini) to score feature explanations by predicting when a latent will activate based on input examples.

**[Compute Optimal Inference and Provable Amortisation Gap in Sparse Autoencoders](https://raw.githubusercontent.com/mlresearch/v267/main/assets/o-neill25a/o-neill25a.pdf) (as "Automated interpretability classification")**
> A GPT-4o-based protocol that generates feature explanations from activating examples and then validates them on new examples to judge whether the explanation predicts feature activations.

**[Sparse Autoencoders Do Not Find Canonical Units of Analysis](https://proceedings.iclr.cc/paper_files/paper/2025/file/84ca3f2d9d9bfca13f69b48ea63eb4a5-Paper-Conference.pdf) (as "Automated interpretability with LLMs")**
> A procedure that uses GPT-4o-mini to generate natural-language explanations of SAE latents from activating examples and then explain meta-latent groupings.

**[Evaluating Neuron Explanations: A Unified Framework with Sanity Checks](https://raw.githubusercontent.com/mlresearch/v267/main/assets/oikarinen25a/oikarinen25a.pdf) (as "Automated simulation evaluation with language models")**
> An evaluation procedure that measures the correlation between a neuron's actual activations and the activations predicted by a language model that is given the neuron's textual explanation.

## Relationships

### → Automated interpretability
- **Interpretability and explainability** (constructs) — *measured_by*
  > “Bricken et al. (2023) evaluate how interpretable sparse autoencoder features using automated interpretability”
  - [Efficient Dictionary Learning with Switch Sparse Autoencoders](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc4fbc2c77d2150c4e61e0fca6c2e95a-Paper-Conference.pdf)
