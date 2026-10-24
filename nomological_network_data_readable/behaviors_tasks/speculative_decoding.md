# Speculative decoding
**Type:** Behavior  
**Referenced in:** 9 papers  
**Also known as:** Speculative token generation  

## State of the Field

Across the provided literature, speculative decoding is consistently defined as a behavior intended to accelerate large language model inference. The most common operationalization involves a two-model architecture: a smaller, faster 'draft' model generates multiple candidate tokens, which are then verified in parallel by the larger, original 'target' model. This process is frequently framed as a technique to enhance the efficiency of autoregressive decoding, with studies reporting significant speedups. The verification step, which is studied alongside the concept of 'Token verification', is often implemented using token-level rejection sampling, where, as one paper notes, “the target model accepts a candidate token if it assigns the same or higher probability given the context” (PEARL: Parallel Speculative Decoding with Adaptive Draft Length). A necessary condition for this method's effectiveness, as stated in one source, is that “the drafter is sufficiently fast and accurate in approximating the target distribution” (Accelerating LLM Inference...). While one paper uses the term 'speculative token generation', the underlying mechanism of producing and validating draft tokens remains the same. The outcome of this process is the generation of multiple new tokens within a single forward pass of the target model.

## Sources

**[Kangaroo: Lossless Self-Speculative Decoding for Accelerating LLMs via Double Early Exiting](https://proceedings.neurips.cc/paper_files/paper/2024/file/16336d94a5ffca8de019087ab7fe403f-Paper-Conference.pdf)**
> Generating multiple draft tokens with a small model and then verifying them with a larger model to accelerate decoding.

**[RAPID: Long-Context Inference with Retrieval-Augmented Speculative Decoding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25s/chen25s.pdf) (as "Speculative token generation")**
> Producing draft candidate tokens that are later validated by a target model during decoding.

## Relationships

### Speculative decoding →
- **Computational efficiency** (constructs) — *causes*
  > Speculative decoding (SD)... has shown great power for LLM inference acceleration.
  - [PEARL: Parallel Speculative Decoding with Adaptive Draft Length](https://proceedings.iclr.cc/paper_files/paper/2025/file/03b1043052700b1a471996b0baf309d4-Paper-Conference.pdf)

### Associated with
- **Token verification** (behaviors tasks)
  > “and then the target model verifies these draft tokens in parallel within a single forward”
  - [PEARL: Parallel Speculative Decoding with Adaptive Draft Length](https://proceedings.iclr.cc/paper_files/paper/2025/file/03b1043052700b1a471996b0baf309d4-Paper-Conference.pdf)
