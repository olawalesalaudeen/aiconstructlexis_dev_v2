# Parity checking
**Type:** Behavior  
**Referenced in:** 12 papers  
**Also known as:** Parity, Parity computation, Parity solving, Parity task  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage is a binary parity task: papers describe producing the parity result for a binary string or sequence, computing the sum modulo 2 of boolean variables, or deciding whether the total number of ones is odd or even. Where outputs are spelled out, success is the correct binary result, with one definition stating that y is in {0,1}, 1 for an odd count of ones and 0 for an even count. A smaller framing treats it as a trivial version in which intermediate results are stored every other token, so the model's output is only a function of the last two tokens.

**Variants.** Paper names vary, including Parity, parity checking, parity computation, and parity solving. The recurring settings are arbitrary binary input sequences or binary strings, and tuples of boolean variables. In a distinct setup, one paper claims a causal relationship from chain of thought to parity checking, saying that difficulty on longer inputs is resolved by a CoT consisting of the parities of increasing prefixes.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers specify the target output directly: producing the parity result for the given binary input or tuple, sometimes as a binary label y, and one definition makes the scoring rule explicit by assigning 1 to odd numbers of ones and 0 to even numbers.

**What it is taken as evidence of.** The only linked construct is state tracking ability. One paper uses parity, alongside other tasks, to measure that construct and says that testing modified methods on those tasks demonstrates improved state-tracking performance. No alternative construct is reported.

## Sources

**[Selective Attention Improves Transformer](https://proceedings.iclr.cc/paper_files/paper/2025/file/0cf3e7eefb9d643e93e16ff1d94090a7-Paper-Conference.pdf) (as "Parity")**
> A trivial task where the model's output is only a function of the last two tokens, with intermediate results stored every other token.

**[Looped Transformers for Length Generalization](https://proceedings.iclr.cc/paper_files/paper/2025/file/25cc3adf8c85f7c70989cb8a97a691a7-Paper-Conference.pdf)**
> Producing the parity result for a binary input sequence.

**[Connecting the Dots: LLMs can Infer and Verbalize Latent Structure from Disparate Training Data](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe489a28a54583ee802b8e2955c024c2-Paper-Conference.pdf) (as "Parity computation")**
> Calculating the sum modulo 2 of a tuple of boolean variables.

**[Unlocking State-Tracking in Linear RNNs Through Negative Eigenvalues](https://proceedings.iclr.cc/paper_files/paper/2025/file/5a0ce3abb720b740419e193c87afd080-Paper-Conference.pdf) (as "Parity solving")**
> Computing whether the total number of ones in a binary sequence is odd or even.

**[How Far Can Transformers Reason? The Globality Barrier and Inductive Scratchpad](https://proceedings.neurips.cc/paper_files/paper/2024/file/3107e4bdb658c79053d7ef59cbc804dd-Paper-Conference.pdf) (as "Parity task")**
> A synthetic benchmark where the model determines whether the number of 1s in a bit sequence is even or odd.

## Relationships

### → Parity checking
- **Chain of thought** (behaviors tasks) — *causes*
  > Transformers empirically struggle to learn it on longer inputs (e.g. Bhattamishra et al., 2020a; Del´etang et al., 2023; Butoi et al., 2024; Hahn & Rofin, 2024), and this difficulty is resolved by a CoT consisting of the parities of increasing prefixes, as in Figure 1 (e.g. Anil et al., 2022). (Section 1)
  - [Lower Bounds for Chain-of-Thought Reasoning in Hard-Attention Transformers](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bavandpour25a/bavandpour25a.pdf)

### Associated with
- **State tracking ability** (constructs)
  > We test the modified methods on parity, modular arithmetic, and permutation composition, demonstrating improved state-tracking performance.
  - [Unlocking State-Tracking in Linear RNNs Through Negative Eigenvalues](https://proceedings.iclr.cc/paper_files/paper/2025/file/5a0ce3abb720b740419e193c87afd080-Paper-Conference.pdf)
