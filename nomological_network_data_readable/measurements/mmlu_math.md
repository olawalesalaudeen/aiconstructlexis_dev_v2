# MMLU-Math
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across the surveyed papers, the dominant description treats MMLU-Math as the mathematics subset of the Massive Multitask Language Understanding benchmark, used in a multiple-choice format to evaluate knowledge and problem-solving skills. Definitions vary in how they specify its coverage: some describe it broadly as covering topics from elementary to advanced math or various math subjects, while another specifies Algebra, Probability, Number Theory, and Calculus and says its evaluation setup follows MAmmoTH.

**What it is claimed to measure.** Papers link MMLU-Math to one behavioral indicator, Mathematical problem solving, and one construct, Mathematical reasoning. The prevailing usage is as a measure of Mathematical problem solving, with papers reporting evaluation on MMLU-Math when assessing models on math benchmarks across different domains; a smaller line of work reports it as measuring Mathematical reasoning by including it among representative math datasets. The reported measurement claims are concentrated on these two targets rather than spread across many constructs or indicators.

**Space of uses.** No paper links it to another measurement instrument. Across the papers, it appears alongside other math benchmarks, including MATH, GSM8K, SAT-Math, OCW, and SVAMP, usually as one part of a broader evaluation suite; one paper explicitly places it among out-of-domain datasets, while others include it in three-dataset or five-dataset benchmark sets.

## Sources

**[MAmmoTH: Building Math Generalist Models through Hybrid Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/b063829b922fdeb4fa3472dd3471ff43-Paper-Conference.pdf)**
> The mathematics subset of the Massive Multitask Language Understanding (MMLU) benchmark, used for evaluating knowledge and problem-solving skills in a multiple-choice format.

## Relationships

### → MMLU-Math
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > We evaluate GPT4-Code using CSV on three datasets: MATH (Hendrycks et al., 2021), GSM8K (Cobbe et al., 2021), and MMLU-Math (Hendrycks et al., 2020).
  - [Solving Challenging Math Word Problems Using GPT-4 Code Interpreter with Code-based Self-Verification](https://proceedings.iclr.cc/paper_files/paper/2024/file/12c45a68e8433b21b91cd47731387fa4-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs) — *measured_by*
  > Following [33], we select five mathematical reasoning datasets from MMLU [18] to demonstrate this
  - [Meaningful Learning: Enhancing Abstract Reasoning in Large Language Models via Generic Fact Guidance](https://proceedings.neurips.cc/paper_files/paper/2024/file/da5498f88193ff61f0daea1940b819da-Paper-Conference.pdf)
