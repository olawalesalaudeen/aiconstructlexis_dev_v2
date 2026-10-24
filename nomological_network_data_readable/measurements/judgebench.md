# JudgeBench
**Type:** Measurement  
**Referenced in:** 9 papers  

## State of the Field

**What it is.** Across papers, the prevailing usage is as a benchmark for challenging evaluation cases, most often for evaluating LLM-based judges on difficult response pairs or questions. Definitions repeatedly emphasize advanced reasoning demands, including coverage of knowledge, reasoning, math, and coding, and one description speaks more broadly of harder questions for various reasoning tasks rather than judge evaluation alone. A smaller usage frames it as an additional case study for judge behavior and agreement under uncertainty, and another describes it as testing the robustness and accuracy of LLM-as-a-Judge systems.

**What it is claimed to measure.** Across papers, JudgeBench is linked to 3 constructs and no behavioral indicators. The most frequently linked constructs are Factuality, Mathematical reasoning, and Reasoning: papers say it focuses on "the factual and logical correctness of complex responses to challenging questions," use it because it includes response pairs involving factual correctness, and describe it as evaluating difficult response pairs that require advanced reasoning abilities or span knowledge, reasoning, math, and coding. The reported measurement links therefore cover several constructs rather than only one.

**Space of uses.** JudgeBench is related to 4 other measurement instruments, most frequently LiveBench, LiveCodeBench, MMLU-Pro, and RewardBench. In one use, papers draw on MMLU-Pro for the Knowledge category, the corresponding LiveBench datasets for the Reasoning and Mathematics categories, and LiveCodeBench for the Coding category; another paper positions JudgeBench as a complement to RewardBench for evaluating difficult tasks requiring reasoning. Elsewhere, papers include it as one benchmark within larger evaluation setups, and one definition treats it as an additional case study.

## Sources

**[Beyond correlation: The impact of human uncertainty in measuring the effectiveness of automatic evaluation and LLM-as-a-judge](https://proceedings.iclr.cc/paper_files/paper/2025/file/8798321486948322be2b4d658744ba72-Paper-Conference.pdf)**
> A benchmark referenced as an additional case study for evaluating judge behavior and agreement under uncertainty.

## Relationships

### → JudgeBench
- **Factuality** (constructs) — *measured_by*
  > the focus of JudgeBench is on evaluating the factual and logical correctness of complex responses to challenging questions. (Figure 1)
  - [JudgeBench: A Benchmark for Evaluating LLM-Based Judges](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e720fce64f91114c49cfd640d821da3-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > we introduce JudgeBench, a benchmark designed to evaluate LLM-based judges on difficult response pairs that require advanced reasoning abilities. (Section 1)
  - [JudgeBench: A Benchmark for Evaluating LLM-Based Judges](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e720fce64f91114c49cfd640d821da3-Paper-Conference.pdf)
- **Evaluation ability** (constructs) — *measured_by*
  > JudgeBench is a recent benchmark that evaluates LLM-based judges on challenging response pairs spanning knowledge, reasoning, math, and coding. (Section 3)
  - [Learning to Plan & Reason for Evaluation with Thinking-LLM-as-a-Judge](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saha25b/saha25b.pdf)

### Associated with
- **MMLU-Pro** (measurements)
  > We use MMLU-Pro for the Knowledge category. (Section 3)
  - [JudgeBench: A Benchmark for Evaluating LLM-Based Judges](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e720fce64f91114c49cfd640d821da3-Paper-Conference.pdf)
- **LiveBench** (measurements)
  > For the Reasoning and Mathematics categories, we use the corresponding LiveBench datasets. (Section 3)
  - [JudgeBench: A Benchmark for Evaluating LLM-Based Judges](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e720fce64f91114c49cfd640d821da3-Paper-Conference.pdf)
- **LiveCodeBench** (measurements)
  > LiveCodeBench is a contamination-free dataset for coding tasks, containing over 300 challenging questions sourced from coding contests like LeetCode, AtCoder, and Codeforces. We select this dataset for the Coding category. (Section 3)
  - [JudgeBench: A Benchmark for Evaluating LLM-Based Judges](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e720fce64f91114c49cfd640d821da3-Paper-Conference.pdf)
- **RewardBench** (measurements)
  > Thus, JudgeBench offers a valuable complement to RewardBench for evaluating reward models on difficult tasks requiring reasoning. (Section 4.3)
  - [JudgeBench: A Benchmark for Evaluating LLM-Based Judges](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e720fce64f91114c49cfd640d821da3-Paper-Conference.pdf)
