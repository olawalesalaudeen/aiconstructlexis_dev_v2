# MixEval
**Type:** Measurement  
**Referenced in:** 10 papers  

## State of the Field

**What it is.** Across papers, the prevailing description is a hybrid benchmark for language models built by mixing existing ground-truth tasks. Definitions consistently say it combines 18 ground-truth-based tasks across a diverse mix of tasks and domains, and one paper says it was created by matching real-world user queries mined from the web with similar queries from a pool of existing ground-truth benchmarks. Another source characterizes it as "a hybrid of 18 ground-truth-based tasks" with a 0.96 correlation to human preferences.

**What it is claimed to measure.** Papers use MixEval to measure six constructs and one behavioral indicator, and these links are spread across multiple targets rather than centered on one. The named construct links include Alignment, Conversational ability, General ability, and Instruction following ability, alongside two other constructs, and it is also reported as measuring Classification as a behavioral indicator. In the relationship evidence, authors describe it as evaluating "general capabilities," "alignment effectiveness," and "generalist chat capabilities," while another paper says it "contains downstream tasks" when used for safety robustness.

**Space of uses.** Most papers position MixEval as one part of a broader benchmark suite rather than as a standalone check. It is often used alongside AlpacaEval 2.0 and MT-Bench, and also appears with Open LLM Leaderboard v2, MixEval-Hard, and MMLU-Pro, with several other benchmarks named in the same evaluation setups. Papers variously place it in benchmark evaluation for general capabilities, among classification benchmarks, and in analyses spanning instruction-following, reasoning, mathematics, and coding.

## Sources

**[RMB: Comprehensively benchmarking reward models in LLM alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/427f20d90386fd27804f1831d6a3d48f-Paper-Conference.pdf)**
> A hybrid evaluation benchmark for language models that combines 18 ground-truth-based tasks.

## Relationships

### → MixEval
- **General ability** (constructs) — *measured_by*
  > To evaluate the general capabilities of the self-play fine-tuned models, we employ MixEval (Ni et al., 2024) and Open LLM Leaderboard v2 (Fourrier et al., 2024) for benchmark evaluation. (Section 4.2)
  - [Magnetic Preference Optimization: Achieving Last-iterate Convergence for Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/5833b4daf5b076dd1cdb362b163dff0c-Paper-Conference.pdf)
- **Alignment** (constructs) — *measured_by*
  > "We evaluate alignment effectiveness using three benchmarks: (1) MixEval ..."
  - [RMB: Comprehensively benchmarking reward models in LLM alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/427f20d90386fd27804f1831d6a3d48f-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > For our analysis, we look at seven datasets spanning instruction-following, reasoning, mathematics, and coding: MT-Bench (Zheng et al., 2023), AlpacaEval 2.0 (Li et al., 2023), Arena Hard Auto (Li et al., 2024b), MixEval (Ni et al., 2024), MixEval-Hard, MATH (Hendrycks et al., 2021), and CodeContests (Li et al., 2022). (Section 3.2)
  - [An Architecture Search Framework for Inference-Time Techniques](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saad-falcon25a/saad-falcon25a.pdf)
- **Classification** (behaviors tasks) — *measured_by*
  > The classification benchmarks include ARC-Challenge (Clark et al., 2018), MMLU-Pro (Wang et al., 2024), and MixEval (Ni et al., 2024). (Section 5.2)
  - [A Unified Approach to Routing and Cascading for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dekoninck25a/dekoninck25a.pdf)
- **Conversational ability** (constructs) — *measured_by*
  > For generalist chat capabilities, we use MixEval, AlpacaEval2, and MTBench with GPT-4o-mini as the judge LLM (Ni et al., 2024; Dubois et al., 2024; Zheng et al., 2023). (Section 3.1)
  - [WildChat-50M: A Deep Dive Into the Role of Synthetic Data in Post-Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/feuer25a/feuer25a.pdf)
