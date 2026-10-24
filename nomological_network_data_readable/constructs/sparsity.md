# Sparsity
**Type:** Construct  
**Referenced in:** 4 papers  

## State of the Field

The property that each predicted token depends on only a small, fixed number of previous tokens, which enables length generalization when this number does not grow with sequence length.

## Sources

**[The Role of Sparsity for Length Generalization in LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/golowich25a/golowich25a.pdf)**
> The property that each predicted token depends on only a small, fixed number of previous tokens, which enables length generalization when this number does not grow with sequence length.

## Relationships

### Sparsity →
- **Length generalization** (constructs) — *causes*
  > a key factor driving length generalization is a “sparse” dependency structure of each token on the previous ones. (Abstract)
  - [The Role of Sparsity for Length Generalization in LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/golowich25a/golowich25a.pdf)

### → Sparsity
- **Faithfulness** (constructs) — *correlates*
  > On the top row, we plot achievable faithfulness R2 as a function of sparsity. We observe that in all cases, faithfulness approaching 1 requires only a few thousand Möbius coefficients, motivating our sparsity assumption.
  - [Learning to Understand: Identifying Interactions via the Möbius Transform](https://proceedings.neurips.cc/paper_files/paper/2024/file/520b379123d16e41f85472e766846486-Paper-Conference.pdf)

### Associated with
- **Uncertainty** (constructs)
  > In this work, we explore the role of uncertainty as a potential indicator of sparsity within LLMs. (Abstract)
  - [UNComp: Can Matrix Entropy Uncover Sparsity? --- A Compressor Design from an Uncertainty-Aware Perspective](https://aclanthology.org/2025.emnlp-main.209.pdf)
