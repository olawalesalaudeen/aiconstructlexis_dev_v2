# Autoregressive decoding
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Auto-regressive generation, Autoregressive generation  

## State of the Field

Across the provided literature, autoregressive decoding, also referred to as autoregressive generation, is consistently defined as the process of generating a sequence of tokens one at a time, where each new token is conditioned on the previously generated ones. This behavior is described as a "core functionality of contemporary language models" ("Implicit Language Models are RNNs: Balancing Parallelization and Expressivity") and is associated with handling "streaming input" during consecutive generation passes ("Oracle-MoE: Locality-preserving Routing in the Oracle Space for Memory-constrained Large Language Model Inference"). A recurring theme in the data is the acceleration of this process. It is frequently studied in relation to `Speculative decoding`, which is framed as a technique to "enhance the efficiency of" and "accelerate" it. One paper reports that its algorithms "demonstrate significant speedups of up to 2.8× over standard autoregressive decoding" ("QuantSpec: Self-Speculative Decoding with Hierarchical Quantized KV Cache"). Autoregressive decoding is also linked to `Scalability`, though the specifics of this relationship are not elaborated upon in the provided materials.

## Sources

**[Implicit Language Models are RNNs: Balancing Parallelization and Expressivity](https://raw.githubusercontent.com/mlresearch/v267/main/assets/schone25a/schone25a.pdf) (as "Autoregressive generation")**
> The process of generating a sequence of tokens one at a time, where each new token is conditioned on the previously generated ones.

**[Oracle-MoE: Locality-preserving Routing in the Oracle Space for Memory-constrained Large Language Model Inference](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25b/zhou25b.pdf) (as "Auto-regressive generation")**
> The process of generating a sequence of tokens one at a time, where each new token is conditioned on the previously generated ones.
