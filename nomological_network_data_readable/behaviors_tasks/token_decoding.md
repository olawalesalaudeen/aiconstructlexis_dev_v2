# Token decoding
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Token-by-token decoding, Greedy decoding, Parallel decoding, Decoding  

## State of the Field

Across the provided literature, token decoding is most commonly described as the process of generating a sequence of tokens one at a time during model inference. This behavior is operationalized and measured by its computational cost, with papers evaluating "average per-token decoding latency" and the "average FLOPs required to decode" a sequence ("Adaptive Rank Allocation: Speeding Up Modern Transformers with RaNA Adapters"). A prevalent strategy for this process is "Greedy decoding," which involves selecting the token with the highest probability at each step and is presented as a "maximum a-posteriori-based decoding" method. Some work contrasts the sequential, one-at-a-time approach with "Parallel decoding," an extension that generates multiple tokens per step by unmasking several positions at once. A less common framing, found in "The Foundations of Tokenization...", defines decoding more abstractly as the process of mapping a token sequence back into a character string, which may be stochastic. The concepts of "token-by-token" and "parallel" decoding are specifically discussed in the context of Masked Diffusion Models (MDMs).

## Sources

**[Masked Diffusion Models are Secretly Time-Agnostic Masked Models and Exploit Inaccurate Categorical Sampling](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e3b203e72c4e058de26d02a92a81844-Paper-Conference.pdf) (as "Token-by-token decoding")**
> Generating a sequence one token at a time by repeatedly selecting a masked position and filling it in.

**[Adaptive Rank Allocation: Speeding Up Modern Transformers with RaNA Adapters](https://proceedings.iclr.cc/paper_files/paper/2025/file/bdb0596d13cfccf2db6f0cc5280d2a3f-Paper-Conference.pdf)**
> The fundamental process of generating a sequence of tokens, one at a time, during model inference, which can be measured for speed and computational cost.

**[Better Instruction-Following Through Minimum Bayes Risk](https://proceedings.iclr.cc/paper_files/paper/2025/file/6756c9f0a1a7c6d1d10ab252f16524f2-Paper-Conference.pdf) (as "Greedy decoding")**
> A decoding strategy where the model selects the token with the highest probability at each step of the generation process.

**[Masked Diffusion Models are Secretly Time-Agnostic Masked Models and Exploit Inaccurate Categorical Sampling](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e3b203e72c4e058de26d02a92a81844-Paper-Conference.pdf) (as "Parallel decoding")**
> Generating multiple tokens per step by unmasking several positions at once rather than strictly one token at a time.

**[The Foundations of Tokenization: Statistical and Computational Concerns](https://proceedings.iclr.cc/paper_files/paper/2025/file/b3748cdac932d91f0a51a37db90dec50-Paper-Conference.pdf) (as "Decoding")**
> Mapping a token sequence back into a character string, possibly stochastically.

## Relationships

### Token decoding →
- **Sampling efficiency** (constructs) — *causes*
  > When the network parameterization is independent of the time, the FHS ... can be completely free from the time and become a token-by-token decoding process akin to masked models. ... The FHS demonstrates appealing properties: Tackling the Sampling Inefficiency
  - [Masked Diffusion Models are Secretly Time-Agnostic Masked Models and Exploit Inaccurate Categorical Sampling](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e3b203e72c4e058de26d02a92a81844-Paper-Conference.pdf)

### → Token decoding
- **Sampling efficiency** (constructs) — *causes*
  > “Parallel decoding essentially reuses the previous network output to reduce the NFE”
  - [Masked Diffusion Models are Secretly Time-Agnostic Masked Models and Exploit Inaccurate Categorical Sampling](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e3b203e72c4e058de26d02a92a81844-Paper-Conference.pdf)
