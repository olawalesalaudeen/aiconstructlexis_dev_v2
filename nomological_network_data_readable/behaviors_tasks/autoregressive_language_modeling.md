# Autoregressive language modeling
**Type:** Behavior  
**Referenced in:** 72 papers  
**Also known as:** Next-token prediction, Next token prediction, Next-word prediction, Word prediction, Token prediction  

## State of the Field

Across the provided literature, autoregressive language modeling is overwhelmingly defined as the task of predicting the next token in a sequence given the preceding tokens, a behavior frequently referred to as 'next-token prediction.' This is consistently described as a fundamental task and a common pretraining objective for language models. The process is operationalized by having a model generate a probability distribution over its vocabulary for the subsequent token, with training aimed at optimizing the autoregressive log-likelihood, often via a cross-entropy loss function. Performance on this task is measured using datasets such as C4, WikiText-103, and RedPajama, and one paper mentions perplexity as an evaluation metric. While the core definition is consistent, a few papers introduce variations, such as extending the task to multimodal contexts involving visual information or framing it as predicting a word that requires a broader discourse context. This behavior is also noted as being related to text generation.

## Sources

**[Context is Environment](https://proceedings.iclr.cc/paper_files/paper/2024/file/03645743ea35690f30d795d6bac149a5-Paper-Conference.pdf) (as "Next-token prediction")**
> The fundamental task of predicting the next token in a sequence given all of the preceding tokens.

**[SLTrain: a sparse plus low rank approach for parameter and memory efficient pretraining](https://proceedings.neurips.cc/paper_files/paper/2024/file/d63cf0622eed012a17fe88fced64dcb8-Paper-Conference.pdf) (as "Next token prediction")**
> The task of generating the most probable next token in a sequence given the preceding tokens, a common objective for pretraining language models.

**[fMRI predictors based on language models of increasing complexity recover brain left lateralization](https://proceedings.neurips.cc/paper_files/paper/2024/file/e28e19d00b23fe0265f433fa05a96b06-Paper-Conference.pdf) (as "Next-word prediction")**
> Predicting the next token or word in a sequence as an autoregressive language-model objective.

**[Transformers to SSMs: Distilling Quadratic Knowledge to Subquadratic Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3848fef259495bfd04d60cdc5c1b4db7-Paper-Conference.pdf) (as "Word prediction")**
> The task of predicting a specific missing or final word in a sentence or passage, often requiring understanding of a broader context.

**[A Concept-Based Explainability Framework for Large Multimodal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/f4fba41b554f9aaa013c4062a1c40518-Paper-Conference.pdf) (as "Token prediction")**
> Predicting the next text token in an autoregressive multimodal language model given prior visual and textual context.

**[Confounding Factors in Relating Model Performance to Morphology](https://aclanthology.org/2025.emnlp-main.369.pdf) (as "Causal language modeling")**
> The observable task of sequentially predicting the next token in a text given the preceding tokens.

**[TokenFormer: Rethinking Transformer Scaling with Tokenized Model Parameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/4da4dd613cc9e63932d643b9c6e8f86f-Paper-Conference.pdf)**
> The task of predicting the next token in a sequence given the preceding tokens, optimized by maximizing the autoregressive log-likelihood.

## Relationships

### Autoregressive language modeling →
- **C4** (measurements) — *measured_by*
  > The focus of this work is to investigate the efficiency of Tokens on autoregressive language modeling. To measure model quality, we pretrain models for a fixed number of tokens and compare final perplexity... In all experiments, the models are trained on the C4 dataset (Section 4)
  - [Mixture of Tokens: Continuous MoE through Cross-Example Aggregation](https://proceedings.neurips.cc/paper_files/paper/2024/file/bc427eb348789b190e3ea050cceff8a3-Paper-Conference.pdf)
- **WikiText-103** (measurements) — *measured_by*
  > We evaluate our model DIFFEQFORMER, in comparison to baselines on both OPENWEBTEXT (Gokaslan et al., 2019) and WIKITEXT103 (Merity et al., 2016) for the autoregressive modeling task. (Section 6.1)
  - [Neural ODE Transformers: Analyzing Internal Dynamics and Adaptive Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/82e3509393670d9d478c359b4ce6f950-Paper-Conference.pdf)
- **RedPajama** (measurements) — *measured_by*
  > We train all models using the Llama2 recipe (Touvron et al., 2023) (with ALiBi instead of RoPE) and the RedPajama (Computer, 2023) dataset in JAX... (Sec. 5.5)
  - [Theory, Analysis, and Best Practices for Sigmoid Self-Attention](https://proceedings.iclr.cc/paper_files/paper/2025/file/a43b459e9fab3a703148ba0c83b8a442-Paper-Conference.pdf)
- **OpenWebText** (measurements) — *measured_by*
  > We evaluate our model DIFFEQFORMER, in comparison to baselines on both OPENWEBTEXT (Gokaslan et al., 2019) and WIKITEXT103 (Merity et al., 2016) for the autoregressive modeling task. (Section 6.1)
  - [Neural ODE Transformers: Analyzing Internal Dynamics and Adaptive Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/82e3509393670d9d478c359b4ce6f950-Paper-Conference.pdf)
- **LAMBADA** (measurements) — *measured_by*
  > Table 2: LLM English evaluation. (Table 2)
  - [Theory, Analysis, and Best Practices for Sigmoid Self-Attention](https://proceedings.iclr.cc/paper_files/paper/2025/file/a43b459e9fab3a703148ba0c83b8a442-Paper-Conference.pdf)

### Associated with
- **Factual recall** (behaviors tasks)
  > In the context of LLMs, fact or memory retrieval, can be modeled as a next token prediction problem. (Section 4)
  - [Do LLMs dream of elephants (when told not to)? Latent concept association and associative memory in transformers](https://proceedings.neurips.cc/paper_files/paper/2024/file/7d3626b603cac298c9f7573b1df00cac-Paper-Conference.pdf)
- **Text generation** (behaviors tasks)
  > We investigate the RL-centric perspective to imitation for LLMs, extracting rewards and directly optimizing actions for sequence generation instead of individual token likelihood. (Section 1).
  - [Imitating Language via Scalable Inverse Reinforcement Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/a5036c166e44b731f214f41813364d01-Paper-Conference.pdf)
