# RewardBench
**Type:** Measurement  
**Referenced in:** 81 papers  
**Also known as:** Reward Bench, Reward-Bench  

## State of the Field

**What it is.** Across the surveyed work, RewardBench is most commonly described as a benchmark for evaluating reward models on preference-related judgments, often in preference optimization or learning from human or LLM feedback. Definitions and snippets repeatedly describe it as built from prompt, chosen, rejected preference data, with one paper specifying 2,985 human-validated triples or binary preference tasks drawn from 23 subtasks or datasets. The prevailing breakdown is into Chat, Chat-Hard, Safety, and Reasoning, though some papers describe it more broadly as a public benchmark for generative judges on preference-related sub-tasks, and one paper describes it as English-only.

**What it is claimed to measure.** Papers link RewardBench to 8 constructs and 2 behavioral indicators, so its measurement claims are spread across several targets rather than concentrated on one. The most common claims say it measures Reasoning and Safety, often through benchmark categories or subsets, and some papers also use it to measure Generalization, Coding ability, and Evaluation ability, plus 3 other constructs. It is also used to measure Pairwise comparison and Preference prediction.

**Space of uses.** Most papers position RewardBench as a headline evaluation for trained reward models, with examples saying they mainly evaluate on it or use it as the widely used benchmark for comparing methods. A smaller line of work uses it more indirectly, for example to rank reward models for selection or as an out-of-distribution or external test source for held-out evaluation. Papers also relate it to 3 other instruments, JudgeBench as a complement for difficult reasoning tasks, RM-Bench as following RewardBench across four domains, and ArmoRM through RewardBench rankings, and some studies use it alongside other public benchmarks such as HH-RLHF.

**Concerns raised.** Few papers raise explicit concerns. One paper describes RewardBench as English-only, and another uses it as a comparison point when distinguishing reward accuracy from ranking accuracy.

## Sources

**[Learning LLM-as-a-Judge for Preference Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/09fd990b19b2e69cc4d20e9969e43f09-Paper-Conference.pdf) (as "Reward-Bench")**
> A public benchmark for evaluating generative judges on preference-related sub-tasks.

**[RainbowPO: A Unified Framework for Combining Improvements in Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/aec2dfc4f5e19acf05c15587c889dbc4-Paper-Conference.pdf) (as "Reward Bench")**
> A benchmark designed to evaluate the performance and quality of reward models used in preference optimization.

**[Joint Reward and Policy Learning with Demonstrations and Human Feedback Improves Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/0ad6ebd11593822b8a6d5873ca9c5b0b-Paper-Conference.pdf)**
> A benchmark for evaluating reward models on preference-related judgments and reasoning-oriented reward assessment.

## Relationships

### → RewardBench
- **Reasoning** (constructs) — *measured_by*
  > RewardBench, which features a variety of prompts from categories such as Chat, Chat Hard, Safety, and Reasoning.
  - [UltraMedical: Building Specialized Generalists in Biomedicine](https://proceedings.neurips.cc/paper_files/paper/2024/file/2dfc26ce9039f00eee4aba0c54931e46-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Safety** (constructs) — *measured_by*
  > RewardBench is a new benchmark designed to evaluate the capabilities and safety of reward models (Section 4).
  - [Regularizing Hidden States Enables Learning Generalizable Reward Model for LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/71f7154547c748c8041505521ca433ab-Paper-Conference.pdf)
- **Out-of-distribution generalization** (constructs) — *measured_by*
  > We employ the primary dataset from RewardBench to evaluate the out-of-domain generalization capabilities of our reward models. (Section 4.3)
  - [OpenPRM: Building Open-domain Process-based Reward Models with Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/c919a2b5ec1de69f2629f9119676e336-Paper-Conference.pdf)
- **Pairwise comparison** (behaviors tasks) — *measured_by*
  > LM-as-a-judge. We benchmark our method on 23 datasets in the RewardBench4 (Lambert et al., 2024b) that can be categorized into four types: Chat, Chat-Hard, Safety, and Reasoning.
  - [Eliminating Position Bias of Language Models: A Mechanistic Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/e389b15166cf98966ba058965a8c17e3-Paper-Conference.pdf)
- **Preference prediction** (behaviors tasks) — *measured_by*
  > We use RewardBench (Lambert et al., 2024) as the test benchmark. (Section 4)
  - [MetaMetrics: Calibrating Metrics for Generation Tasks Using Human Preferences](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1b248453bca182b6138b8c14a75340d-Paper-Conference.pdf)
- **Coding ability** (constructs) — *measured_by*
  > RewardBench contains subsets that test RMs in targeted domains, including their coding ability, mathematical ability, and harmlessness. (Section 3.3)
  - [reWordBench: Benchmarking and Improving the Robustness of Reward Models with Transformed Inputs](https://aclanthology.org/2025.emnlp-main.167.pdf)
- **Mathematical reasoning** (constructs) — *measured_by*
  > RewardBench contains subsets that test RMs in targeted domains, including their coding ability, mathematical ability, and harmlessness. (Section 3.3)
  - [reWordBench: Benchmarking and Improving the Robustness of Reward Models with Transformed Inputs](https://aclanthology.org/2025.emnlp-main.167.pdf)
- **Evaluation ability** (constructs) — *measured_by*
  > To evaluate the judgment capabilities of our model, we conduct experiments on RewardBench (Lambert et al., 2024). (Section 1)
  - [Improve LLM-as-a-Judge Ability as a General Ability](https://aclanthology.org/2025.emnlp-main.712.pdf)

### Associated with
- **RM-Bench** (measurements)
  > Following Reward Bench (Lambert et al., 2024), RM-BENCH covers four key domains, namely, Chat, Code, Math, and Safety.
  - [RM-Bench: Benchmarking Reward Models of Language Models with Subtlety and Style](https://proceedings.iclr.cc/paper_files/paper/2025/file/6da1eec80095dc5937f7716db15aca4b-Paper-Conference.pdf)
- **JudgeBench** (measurements)
  > Thus, JudgeBench offers a valuable complement to RewardBench for evaluating reward models on difficult tasks requiring reasoning. (Section 4.3)
  - [JudgeBench: A Benchmark for Evaluating LLM-Based Judges](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e720fce64f91114c49cfd640d821da3-Paper-Conference.pdf)
- **Reward Modeling** (measurements)
  > In our experiments, we mainly evaluate on RewardBench (Lambert et al., 2024), which contains a collection of prompt-chosen-rejected triplets across chat, reasoning, and safety domains.
  - [Self-Generated Critiques Boost Reward Modeling for Language Models](https://aclanthology.org/2025.naacl-long.573.pdf)
