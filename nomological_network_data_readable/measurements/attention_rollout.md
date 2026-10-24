# Attention rollout
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

An explainability technique that aggregates attention weights across multiple layers of a model to create a comprehensive map of information flow from input to output tokens.

## Sources

**[Explaining Modern Gated-Linear RNNs via a Unified Implicit Attention Formulation](https://proceedings.iclr.cc/paper_files/paper/2025/file/4db16435e3a5a2ef3fc39b8f0d12498d-Paper-Conference.pdf)**
> An explainability technique that aggregates attention weights across multiple layers of a model to create a comprehensive map of information flow from input to output tokens.

## Relationships

### → Attention rollout
- **Interpretability and explainability** (constructs) — *measured_by*
  > To develop a better understanding of how the sparse and low rank components individually contribute to the flow of information through the model, we compute and visualize the attention rollout (Abnar & Zuidema, 2020) (Section 5).
  - [OATS: Outlier-Aware Pruning Through Sparse and Low Rank Decomposition](https://proceedings.iclr.cc/paper_files/paper/2025/file/7f2fc4053a66edfa430bcdf9a6ff3b17-Paper-Conference.pdf)
- **Positional bias** (constructs) — *measured_by*
  > The quantity analyzed in our framework, P(t)(zi = j | X(0)), coincides with the attention rollout metric proposed by Abnar & Zuidema (2020).
  - [On the Emergence of Position Bias in Transformers](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25ad/wu25ad.pdf)
