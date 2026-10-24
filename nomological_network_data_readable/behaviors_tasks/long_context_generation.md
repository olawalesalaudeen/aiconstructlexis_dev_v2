# Long-context generation
**Type:** Behavior  
**Referenced in:** 4 papers  

## State of the Field

Generating text while conditioning on very long input contexts, often beyond 100K tokens.

## Sources

**[RAPID: Long-Context Inference with Retrieval-Augmented Speculative Decoding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25s/chen25s.pdf)**
> Generating text while conditioning on very long input contexts, often beyond 100K tokens.

## Relationships

### Long-context generation →
- **LongBench** (measurements) — *measured_by*
  > Accuracy comparison between offline searched layer-wise KV cache precision using KVTuner in Table 5 and 6 and uniform KV precision settings of the sensitive Qwen2.5-7B-Instruct on 20 LongBench long context generation benchmarks. (Table 7)
  - [KVTuner: Sensitivity-Aware Layer-Wise Mixed-Precision KV Cache Quantization for Efficient and Nearly Lossless LLM Inference](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25dd/li25dd.pdf)
- **L-Eval** (measurements) — *measured_by*
  > evaluate the enhanced LLM's capability to zero-shot undertake multiple tasks in long context understanding and generation, as detailed in Section 4.2... Following the L-Eval benchmark [1]
  - [Mixture of In-Context Experts Enhance LLMs' Long Context Awareness](https://proceedings.neurips.cc/paper_files/paper/2024/file/91315fbb83ce353ae5538cba395f70d1-Paper-Conference.pdf)
- **LongGenBench** (measurements) — *measured_by*
  > In this work, we leverage LONGGENBENCH, which focuses on long-input and long-output tasks (Liu et al., 2024c), to optimize KV cache compression in scenarios where the output can be as long as 8K tokens (Section 6).
  - [SCOPE: Optimizing Key-Value Cache Compression in Long-context Generation](https://aclanthology.org/2025.acl-long.529.pdf)

### → Long-context generation
- **Contextual understanding** (constructs) — *causes*
  > These results underscore MoICE's efficacy in enhancing LLMs' ability to understand and generate long contexts, both of which require high context awareness.
  - [Mixture of In-Context Experts Enhance LLMs' Long Context Awareness](https://proceedings.neurips.cc/paper_files/paper/2024/file/91315fbb83ce353ae5538cba395f70d1-Paper-Conference.pdf)
