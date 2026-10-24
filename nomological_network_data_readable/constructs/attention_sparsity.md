# Attention sparsity
**Type:** Construct  
**Referenced in:** 6 papers  

## State of the Field

Across the surveyed literature, attention sparsity is consistently defined as the property of a model's attention mechanism where scores are concentrated on a small subset of tokens or key-value pairs. The prevailing view is that this is an "inherent" or "natural" characteristic, with multiple sources noting that only a few tokens significantly influence the computation for a given output. However, this perspective is not universally held; one paper explicitly contradicts the belief that attention is always sparse, observing this may not hold for tasks that "leverage the full context" and that high observed sparsity can be an artifact of an "attention sink" (MagicPIG: LSH Sampling for Efficient LLM Generation). Another source adds nuance by stating that while sparse patterns are common, their distribution "varies significantly due to input content" (AnchorAttention: Difference-Aware Sparse Attention with Stripe Granularity). This construct is studied in relation to long-context processing, and some work posits a directional relationship, suggesting that attention sparsity can improve data efficiency. For instance, one study reports it as a factor in the sample efficiency improvements induced by Chain-of-Thought.

## Sources

**[MagicPIG: LSH Sampling for Efficient LLM Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/6d50d824ae819d5a961c1d8edc15e833-Paper-Conference.pdf)**
> The degree to which a model's attention scores are concentrated on a small subset of tokens within the context.

## Relationships

### Attention sparsity →
- **Data efficiency** (constructs) — *causes*
  > confirming that sparsity in attention layers is a key factor of the improvement induced by CoT.
  - [From Sparse Dependence to Sparse Attention: Unveiling How Chain-of-Thought Enhances Transformer Sample Efficiency](https://proceedings.iclr.cc/paper_files/paper/2025/file/fa6d4d2020aac4bd8f7cdb2771fc1ae2-Paper-Conference.pdf)

### Associated with
- **Long-context understanding** (constructs)
  > Therefore, there is an urgent need for a lower-granularity sparse attention mechanism with a stronger emphasis on global context, in order to mitigate the increasingly heavy computational burden during the prefill stage as context lengths continue to grow. (Section 5)
  - [AnchorAttention: Difference-Aware Sparse Attention with Stripe Granularity](https://aclanthology.org/2025.emnlp-main.430.pdf)
