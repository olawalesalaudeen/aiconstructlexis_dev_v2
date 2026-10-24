# RM-Bench
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Across the definitions, papers most commonly describe RM-Bench as a benchmark for evaluating reward models through preference pairs with subtle differences, with emphasis on sensitivity to subtle content variations and resistance to style biases. One description adds that it is designed to correlate with downstream policy performance across chat, math, code, and safety tasks. A related paper situates it alongside RewardBench and says it covers the Chat, Code, Math, and Safety domains, with code prompts sourced from HumanEvalPack.

**What it is claimed to measure.** Papers link RM-Bench to 2 constructs, Robustness and Factuality, and no behavioral indicators. Most descriptions frame it in robustness terms: one paper says RM-Bench is designed to assess the robustness of reward models through their sensitivity and resistance to subtle content differences and style biases. A smaller use treats it as measuring factuality, with one study using it because RM-Bench includes response pairs involving factual correctness, so the reported measurement claims are concentrated in these two constructs rather than spread across many.

**Space of uses.** Papers position RM-Bench as an evaluation benchmark for reward models, including when r* is not available, and one paper reports that it has higher correlation against actual use cases than RewardBench. It is related to 2 other measurement instruments, RewardBench and HumanEvalPack: RewardBench is used as a reference for its domain coverage, while HumanEvalPack supplies prompts for the code domain. In applied evaluation, one paper also uses RM-Bench alongside JudgeBench and IFBENCH as evaluation benchmarks because RM-Bench includes response pairs involving factual correctness.

## Sources

**[Rethinking Reward Model Evaluation Through the Lens of Reward Overoptimization](https://aclanthology.org/2025.acl-long.649.pdf)**
> A benchmark that evaluates reward models by assessing their sensitivity to subtle content variations and resistance to style biases.

## Relationships

### → RM-Bench
- **Factuality** (constructs) — *measured_by*
  > We use RM-Bench (Liu et al., 2024b), JudgeBench (Tan et al., 2024), and a new benchmark IFBENCH as evaluation benchmarks, as both RM-Bench and JudgeBench include response pairs involving factual correctness. (Section 4.1)
  - [Agentic Reward Modeling: Integrating Human Preferences with Verifiable Correctness Signals for Reliable Reward Systems](https://aclanthology.org/2025.acl-long.775.pdf)
- **Robustness** (constructs) — *measured_by*
  > RM-Bench is designed to assess the robustness of reward models, based on their sensitivity and resistance to subtle content differences and style biases. (Section 3)
  - [Learning to Plan & Reason for Evaluation with Thinking-LLM-as-a-Judge](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saha25b/saha25b.pdf)

### Associated with
- **RewardBench** (measurements)
  > Following Reward Bench (Lambert et al., 2024), RM-BENCH covers four key domains, namely, Chat, Code, Math, and Safety.
  - [RM-Bench: Benchmarking Reward Models of Language Models with Subtlety and Style](https://proceedings.iclr.cc/paper_files/paper/2025/file/6da1eec80095dc5937f7716db15aca4b-Paper-Conference.pdf)
- **HumanEvalPack** (measurements)
  > Prompts for the code domain are sourced from HumanEvalPack (Muennighoff et al., 2023), while math prompts are drawn from the MATH benchmark (Hendrycks et al., 2021).
  - [RM-Bench: Benchmarking Reward Models of Language Models with Subtlety and Style](https://proceedings.iclr.cc/paper_files/paper/2025/file/6da1eec80095dc5937f7716db15aca4b-Paper-Conference.pdf)
