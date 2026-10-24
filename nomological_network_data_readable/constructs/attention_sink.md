# Attention sink
**Type:** Construct  
**Referenced in:** 6 papers  
**Also known as:** Attention stabilization  

## State of the Field

The concept of an "attention sink" is consistently described across the provided literature as a phenomenon in Transformer models where attention is disproportionately focused on initial tokens. The prevailing definition states that a large portion of attention weights concentrates on "the first token," a process that begins in the early layers of the model. A related framing describes this as "initial tokens" more broadly absorbing attention, which is said to impede "subsequent tokens from attending to relevant context" ("EPIC: Efficient Position-Independent Caching for Serving Large Language Models"). This phenomenon is operationalized by observing the distribution of attention weights within the model. The attention sink is presented as a problem to be addressed, with one paper discussing the "removal" of these tokens to prevent interference in later computations. In the context of model capabilities, the attention sink is reported to negatively affect length generalization, where it is cited as a factor that "restricts their scalability and effectiveness in practice" for training-free extrapolation methods ("ParallelComp: Parallel Long-Context Compressor for Length Extrapolation").

## Sources

**[Rapid Selection and Ordering of In-Context Demonstrations via Prompt Embedding Clustering](https://proceedings.iclr.cc/paper_files/paper/2025/file/6c2745a8e20271c2e8c7067a2c3c7710-Paper-Conference.pdf)**
> A phenomenon where a large proportion of attention weights in a Transformer model consistently focuses on the first token, starting from early layers.

**[VisiPruner: Decoding Discontinuous Cross-Modal Dynamics for Efficient Multimodal LLMs](https://aclanthology.org/2025.emnlp-main.955.pdf) (as "Attention stabilization")**
> The latent functional role of visual tokens in early layers to absorb attention weights and stabilize attention distributions without contributing meaningful content to the task.

## Relationships

### Attention sink →
- **Semantic representation** (constructs) — *causes*
  > Further analysis reveals that the attention sink phenomenon (Xiao et al., 2023), where the model tends to focus on the first token, significantly affects the performance of the converted text encoder. (Section 1)
  - [Look Both Ways and No Sink: Converting LLMs into Text Encoders without Training](https://aclanthology.org/2025.acl-long.1113.pdf)

### Associated with
- **Length generalization** (constructs)
  > most training-free extrapolation methods are not only severely limited by memory bottlenecks, but also suffer from the attention sink, which restricts their scalability and effectiveness in practice. (Abstract)
  - [ParallelComp: Parallel Long-Context Compressor for Length Extrapolation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiong25b/xiong25b.pdf)
- **Recency bias** (constructs)
  > These attention distributions give rise to three corresponding biases: i) Attention sink, where focus is concentrated on the initial few tokens. ii) Recency bias, where attention is more strongly concentrated at the tail. iii) Middle bias, where attention is disproportionately focused on a few tokens in the middle of a sequence. (Section 4)
  - [ParallelComp: Parallel Long-Context Compressor for Length Extrapolation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiong25b/xiong25b.pdf)
- **Positional bias** (constructs)
  > These attention distributions give rise to three corresponding biases: i) Attention sink, where focus is concentrated on the initial few tokens. ii) Recency bias, where attention is more strongly concentrated at the tail. iii) Middle bias, where attention is disproportionately focused on a few tokens in the middle of a sequence. (Section 4)
  - [ParallelComp: Parallel Long-Context Compressor for Length Extrapolation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiong25b/xiong25b.pdf)
