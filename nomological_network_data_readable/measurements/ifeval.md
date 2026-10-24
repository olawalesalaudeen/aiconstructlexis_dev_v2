# IFEval
**Type:** Measurement  
**Referenced in:** 91 papers  

## State of the Field

**What it is.** Across these papers, the prevailing description is a targeted benchmark for instruction following, especially for checking whether model outputs follow explicit instructions or satisfy verifiable constraints embedded in prompts. Definitions often emphasize precise textual constraints on format, style, or content, and some papers describe a standardized and automated assessment with a built-in evaluation methodology. A smaller line of work treats it more specifically as part of the TÜLU-2 evaluation suite, adapts data from it into single-turn rule-following tasks, or uses both the original text-based benchmark and a synthesized spoken version.

**What it is claimed to measure.** Across papers, its measurement claims converge most strongly on instruction following. It is linked to 6 constructs and 2 behavioral indicators, and the most common claims are that papers use it to measure instruction following ability, instruction following, and constraint adherence; smaller strands also report it as measuring complex instruction following ability, helpfulness, and 3 other constructs. Several descriptions sharpen this framing by stating that it evaluates instruction adherence or whether responses satisfy all specified requirements.

**Space of uses.** Papers often use it alongside AlpacaEval 2.0, FollowBench, and MMLU, either as a main instruction-following benchmark or as one element in broader evaluations of model capabilities. Some authors rely on its built-in evaluation methodology, while others adapt its data or derive a spoken version from the original text-based benchmark. It is linked to 2 other instruments: one paper reports that ComplexBench correlates with it, and another relates it to LiveBench as containing harder, contamination-limited versions of earlier tasks such as IFEval.

## Sources

**[Style Outweighs Substance: Failure Modes of LLM Judges in Alignment Benchmarking](https://proceedings.iclr.cc/paper_files/paper/2025/file/1eb36d07ebb13be16ddbda679a95018b-Paper-Conference.pdf)**
> A targeted benchmark specifically designed to evaluate an LLM's instruction following capabilities.

## Relationships

### → IFEval
- **Instruction following** (behaviors tasks) — *measured_by*
  > “Instruction-Following Evaluation (IFEval): IFEval is a benchmark evaluating a model’s ability to follow explicit instructions”
  - [Cal-DPO: Calibrated Direct Preference Optimization for Language Model Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/cf8b2205e39f81726a8d828ecbe00ad0-Paper-Conference.pdf)
- **Instruction following ability** (constructs) — *measured_by*
  > evaluate it on various tasks, including instruction-following and roleplay (IFEval and MT-Bench)
  - [Compact Language Models via Pruning and Knowledge Distillation](https://proceedings.neurips.cc/paper_files/paper/2024/file/4822991365c962105b1b95b1107d30e5-Paper-Conference.pdf)
- **ComplexBench** (measurements) — *correlates*
  > although the performance of various LLMs on ComplexBench is well correlated with their performance on other benchmarks, the rankings of LLMs on ComplexBench do not entirely correspond with those on the other three benchmarks. (Section 5.2.3)
  - [Benchmarking Complex Instruction-Following with Multiple Constraints Composition](https://proceedings.neurips.cc/paper_files/paper/2024/file/f8c24b08b96a08ec7a7a975feea7777e-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Self-correction ability** (constructs) — *measured_by*
  > We evaluate self-correction capability on both classification and generation tasks, including domains in mathematics, coding, instruction following, common-sense reasoning, and knowledge. To be specific, the dataset we utilized include ... IFEval (Zhou et al., 2023)... (Section 4.1)
  - [Confidence v.s. Critique: A Decomposition of Self-Correction Capability for LLMs](https://aclanthology.org/2025.acl-long.203.pdf)
- **Utility preservation** (constructs) — *measured_by*
  > The utility performance is evaluated on MT-Bench(Zheng et al., 2023), IFEval(Zhou et al., 2023) and GSM8K(Cobbe et al., 2021), along with the benign part of XSTest(Röttger et al., 2024). (Section 1).
  - [Improve Safety Training of Large Language Models with Safety-Critical Singular Vectors Localization](https://aclanthology.org/2025.acl-long.245.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > Our experiments focus on Helpfulness (Alpaca Eval 2.0 (Dubois et al., 2024) and IFEval (Zhou et al., 2023)), Harmlessness (Toxigen (Hartvigsen et al., 2022)), and Coding (MBPP (Austin et al., 2021), HumanEval (Chen et al., 2021)). (Section 4)
  - [AutoMixAlign: Adaptive Data Mixing for Multi-Task Preference Optimization in LLMs](https://aclanthology.org/2025.acl-long.990.pdf)
- **World knowledge** (constructs) — *measured_by*
  > To validate the effectiveness and generalization capabilities of our approach, we assess model capabilities in general knowledge using IFEval (Zhou et al., 2023c) and MMLU (Hendrycks et al., 2021b) (Section 4.1)
  - [Middo: Model-Informed Dynamic Data Optimization for Enhanced LLM Fine-Tuning via Closed-Loop Learning](https://aclanthology.org/2025.emnlp-main.350.pdf)

### Associated with
- **LiveBench** (measurements)
  > LiveBench... contains harder, contamination-limited versions of tasks from previous benchmarks such as Big-Bench Hard, AMPS, and IFEval.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
