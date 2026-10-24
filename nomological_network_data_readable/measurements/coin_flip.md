# Coin Flip
**Type:** Measurement  
**Referenced in:** 11 papers  
**Also known as:** CoinFlip, Coin Flipping, Coin flipping  

## State of the Field

**What it is.** Across papers, the prevailing usage treats Coin Flip as a simple symbolic or rule-based reasoning benchmark in which a model tracks a coin's state through a sequence of flips and non-flips and gives a binary answer, usually Yes or No or the final face, heads or tails. Definitions often make the setup explicit, including questions with named agents performing or not performing flips; one paper uses versions with 2, 3, and 4 rounds of potential flips, and another describes scalable versions. A smaller line of work instead describes it as testing simple probabilistic scenarios or as a knowledge-free reasoning task without factual knowledge.

**What it is claimed to measure.** Papers use Coin Flip overwhelmingly to measure Symbolic reasoning: it is linked to one construct, Symbolic reasoning, and the recurring description is a symbolic reasoning benchmark or dataset. The measurement claims converge on that single construct rather than spreading across many. It is also linked to one behavioral indicator, State tracking, but only as a related indicator rather than as something the benchmark directly measures.

**Space of uses.** Papers commonly pair Coin Flip with Last Letter when evaluating symbolic reasoning, and some also place it alongside ASDiv and ProofWriter or within broader suites of complex and multi-step reasoning tasks. In that usage, it appears both as part of a small symbolic reasoning subset and as one component in larger reasoning evaluations.

**Concerns raised.** One paper relates Coin Flip to State tracking and reports that on this task models can generate step-by-step reasoning paths but can still lose track of states, especially as task complexity increases.

## Sources

**[Personality Alignment of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/25203d1cc8c58381eab578f4fcf9c4f8-Paper-Conference.pdf)**
> A benchmark designed to test a model's ability to reason about simple probabilistic scenarios.

**[Forking Paths in Neural Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/2b6a8ca3d06ffa2e044bff8c723863ff-Paper-Conference.pdf) (as "CoinFlip")**
> A simple symbolic reasoning benchmark task that requires a model to answer 'Yes' or 'No' based on a short problem description.

**[CodePlan: Unlocking Reasoning Potential in Large Language Models by Scaling Code-form Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/c362b360765ed90ae4bd9c6764837e0e-Paper-Conference.pdf) (as "Coin Flipping")**
> A symbolic reasoning benchmark that requires determining the final state of a coin after a sequence of flips.

## Relationships

### → Coin Flip
- **Symbolic reasoning** (constructs) — *measured_by*
  > For symbolic reasoning, we use Last Letter Concatenation and Coin Flip from Wei et al. (2022).
  - [Escape Sky-high Cost: Early-stopping Self-Consistency for Multi-step Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/3fe2a777282299ecb4f9e7ebb531f0ab-Paper-Conference.pdf)

### Associated with
- **State tracking** (behaviors tasks)
  > on Coin-Flip and Web-of-Lies, we observe that the model can generate CoT paths that simulate the process step-by-step, but it can easily lose track of the states, especially when the task complexity increases. This reveals model’s intrinsic vulnerability in performing accurate state tracking. (Section 3.2)
  - [Chain-of-Thought Reasoning Without Prompting](https://proceedings.neurips.cc/paper_files/paper/2024/file/7a8e7fd295aa04eac4b470ae27f8785c-Paper-Conference.pdf)
