# FollowBench
**Type:** Measurement  
**Referenced in:** 8 papers  

## State of the Field

**What it is.** Across the surveyed papers, the prevailing usage treats FollowBench as an instruction-following benchmark, most commonly described as a fine-grained constraint-following benchmark with five levels of difficulty. Definitions emphasize diverse, open-ended instructions that require evaluation by strong LLMs, sometimes described specifically as GPT-4-based evaluation. Some papers stress complex, multi-constraint tasks, while others place it among benchmarks for more general instructions that need LLM-based judgment.

**What it is claimed to measure.** Papers link FollowBench to four constructs and one behavioral indicator. The dominant use is to measure instruction following, framed either as instruction following ability or as the behavioral indicator instruction following, and several papers also use it to measure complex instruction following ability, especially where instructions consist of multiple constraints. Smaller lines of work report it as measuring generalization, with one paper saying it can fully examine generalization to more general instructions not verifiable by simple code executions, and conversational ability.

**Space of uses.** No measurement instrument is linked to it, but papers usually use FollowBench alongside other instruction-following benchmarks rather than on its own. It is repeatedly paired with IFEval, and in complex instruction-following evaluations it appears with CFBench and ComplexBench; other papers include it in broader suites with Multi-IF and SysBench. Papers often position it as a widely used main-result benchmark or as one of a small set of complex instruction-following benchmarks.

## Sources

**[Self-play with Execution Feedback: Improving Instruction-following Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/62203a74e233e933b160711e791e1a02-Paper-Conference.pdf)**
> A fine-grained constraint-following benchmark with five levels of difficulty, containing diverse and open-ended instructions that require evaluation by strong LLMs.

## Relationships

### → FollowBench
- **Instruction following ability** (constructs) — *measured_by*
  > We evaluate our methods using two widely-used instruction-following benchmarks: IFEval (Zhou et al., 2023) and FollowBench (Jiang et al., 2024b) as main results (Section 4).
  - [Self-play with Execution Feedback: Improving Instruction-following Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/62203a74e233e933b160711e791e1a02-Paper-Conference.pdf)
- **Complex instruction following ability** (constructs) — *measured_by*
  > We mainly perform evaluations on three complex instruction-following benchmarks: CFBench (Zhang et al., 2024b), FollowBench (Jiang et al., 2024b) and ComplexBench (Wen et al., 2024) (Section 4.1).
  - [MuSC: Improving Complex Instruction Following with Multi-granularity Self-Contrastive Training](https://aclanthology.org/2025.acl-long.523.pdf)
- **Instruction following** (behaviors tasks) — *measured_by*
  > We evaluate the trained models on several widely-used instruction-following benchmarks, including IFEval (Zhou et al., 2023), Multi-IF (He et al., 2024b), SysBench (Qin et al., 2024), FollowBench (Jiang et al., 2024), and CFBench (Zhang et al., 2024a). (Introduction)
  - [VerIF: Verification Engineering for Reinforcement Learning in Instruction Following](https://aclanthology.org/2025.emnlp-main.1542.pdf)
- **Generalization** (constructs) — *measured_by*
  > FollowBench is a fine-grained constraint-following benchmark with five levels of difficulty. It contains diverse and open-ended instructions requiring evaluation by strong LLMs, such as GPT-4, which can fully examine the generalization of AUTOIF to more general instructions not verifiable by simple code executions. (Section 4).
  - [Self-play with Execution Feedback: Improving Instruction-following Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/62203a74e233e933b160711e791e1a02-Paper-Conference.pdf)
