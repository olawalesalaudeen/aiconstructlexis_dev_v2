# Minerva Math
**Type:** Measurement  
**Referenced in:** 24 papers  
**Also known as:** Minerva, MinervaMATH, OCW, OCWCourses, OCW-Math  

## State of the Field

**What it is.** Across definitions, papers attach the Minerva Math label and closely neighboring names, including Minerva, MinervaMATH, OCW, OCWCourses, and OCW-Math, to two recurring benchmark descriptions. One common framing presents a mathematical reasoning benchmark for scientific and mathematical questions, including undergraduate- or Olympiad-level problems that require advanced quantitative reasoning. Another common framing describes an OpenCourseWare-based benchmark with 272 undergraduate STEM problems with automatically verifiable solutions, spanning areas such as chemistry, information theory, differential equations, and special relativity, and often characterized as requiring multi-step reasoning or serving as an out-of-domain benchmark.

**What it is claimed to measure.** Papers link it to 2 constructs and 1 behavioral indicator. The prevailing use is to measure Mathematical reasoning, with many papers listing it among mathematical-reasoning benchmarks or mathematical reasoning datasets; a smaller line of work uses it to measure the broader construct Reasoning, and another reports it as evaluating Mathematical problem solving. Overall, the reported measurement claims are concentrated on mathematical reasoning and closely related reasoning targets.

**Space of uses.** Papers often use it inside multi-benchmark evaluation suites. It appears alongside GSM8K, MATH or MATH500, OlympiadBench, GaoKao2023, and LiveCodeBench; definitions also position it as an out-of-domain or out-of-distribution test set, as one of several datasets with different difficulties, and in one case as part of evaluating model selection under accurate ex-ante quality estimation. Some authors also describe using it to assess generalization.

## Sources

**[A Unified Approach to Routing and Cascading for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dekoninck25a/dekoninck25a.pdf)**
> Minerva Math is a math benchmark used in combination with LiveCodeBench to evaluate model selection under accurate ex-ante quality estimation.

**[Unleashing the Reasoning Potential of LLMs by Critique Fine-Tuning on One Problem](https://aclanthology.org/2025.emnlp-main.149.pdf) (as "Minerva")**
> Mathematical reasoning benchmark assessing problem-solving ability on scientific and mathematical questions.

**[Large Language Models Have Intrinsic Meta-Cognition, but Need a Good Lens](https://aclanthology.org/2025.emnlp-main.171.pdf) (as "MinervaMATH")**
> A benchmark dataset of undergraduate- or Olympiad-level mathematical problems that require advanced quantitative reasoning.

**[Harnessing Diversity for Important Data Selection in Pretraining Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b588d9b67932b459ea66ff6e2804c6b3-Paper-Conference.pdf) (as "OCW")**
> A benchmark dataset for evaluating mathematical problem solving capabilities in language models.

**[Llemma: An Open Language Model for Mathematics](https://proceedings.iclr.cc/paper_files/paper/2024/file/b225f5c7cd13615e9558c3931fa4e66f-Paper-Conference.pdf) (as "OCWCourses")**
> A benchmark based on OpenCourseWare materials that includes a set of 272 problems with automatically-verifiable solutions at the undergraduate level across various STEM subjects.

**[JiuZhang3.0: Efficiently Improving Mathematical Reasoning by Training Small Data Synthesis Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0356216f73660e15670510f5e42b5fa6-Paper-Conference.pdf) (as "OCW-Math")**
> A challenging dataset of undergraduate-level math and science problems used to evaluate advanced reasoning.

## Relationships

### → Minerva Math
- **Mathematical reasoning** (constructs) — *measured_by*
  > Math: SVAMP (Patel et al., 2021), GSM8k (Cobbe et al., 2021), GSM-Hard (Gao et al., 2023), Hendrycks-MATH (Hendrycks et al., 2021), Minerva-MATH (Lewkowycz et al., 2022). (Section 5.1)
  - [Mixture of Parrots: Experts improve memorization more than reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5bc3356e0fa1753fff7e8d6628e71b22-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We evaluate our method on a diverse set of reasoning tasks, including GSM8K (Cobbe et al., 2021b), MATH500 (Hendrycks et al., 2021), MMLU STEM (Hendrycks et al., 2020), OlympiadBench (He et al., 2024), GaoKao-2023-En (Liao et al., 2024), GPQA (Rein et al., 2023), and Minerva Math (Lewkowycz et al., 2022). (Section 3)
  - [Reward-Guided Speculative Decoding for Efficient LLM Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liao25f/liao25f.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > Performance is evaluated on MATH500 (Lightman et al., 2023), Minerva Math (Lewkowycz et al., 2022), OlympiadBench (He et al., 2024), College Math (Tang et al., 2024) 3, AIME24, and AMC23 (Section 4.1).
  - [R-PRM: Reasoning-Driven Process Reward Modeling](https://aclanthology.org/2025.emnlp-main.679.pdf)
