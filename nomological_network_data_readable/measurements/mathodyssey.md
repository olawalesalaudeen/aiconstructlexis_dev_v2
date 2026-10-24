# MathOdyssey
**Type:** Measurement  
**Referenced in:** 3 papers  
**Also known as:** Math Odyssey  

## State of the Field

**What it is.** Across the papers, the prevailing description is of a math benchmark for LLM reasoning made up of problems with varying difficulty, including olympiad-level competition questions, and papers refer to it as MathOdyssey or Math Odyssey. One paper says it 'consists of problems of varying difficulties' and, in that study, uses the 148 problems belonging to olympiad-level competitions, while another places it among multiple olympiad benchmarks for evaluating olympiad-level mathematical reasoning.

**What it is claimed to measure.** Papers use it to measure one behavioral indicator and two constructs. The named targets are Mathematical problem solving, Generalization, and Mathematical reasoning, so the reported measurement claims do not converge on a single target: a paper uses it as a held-out benchmark when assessing mathematical problem solving and generalization, and another reports it as part of competition and olympiad-level benchmarking for mathematical reasoning.

**Space of uses.** In use, papers position MathOdyssey as a held-out evaluation benchmark and as one of several olympiad benchmarks in comparative tables. It appears alongside Hendrycks MATH and Functional Math in held-out evaluation, and alongside OlympiadBench plus AIME/AMC questions in competition-focused evaluation; no measurement instrument is linked to it.

## Sources

**[SBSC: Step-by-Step Coding for Improving Mathematical Olympiad Performance](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e5f5e4504759e3957e3eef2a44a535e-Paper-Conference.pdf)**
> A benchmark of varying-difficulty math problems, including olympiad-level competition questions, used to evaluate mathematical reasoning.

**[LLaMA-Berry: Pairwise Optimization for Olympiad-level Mathematical Reasoning via O1-like Monte Carlo Tree Search](https://aclanthology.org/2025.naacl-long.375.pdf) (as "Math Odyssey")**
> A benchmark used in the paper to evaluate Olympiad-level mathematical reasoning.

## Relationships

### → MathOdyssey
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > For math, we train and evaluate on Hendrycks MATH benchmark (Hendrycks et al., 2021), and additionally evaluate on two held-out math benchmarks: Functional MATH (Srivastava et al., 2024) and MathOdyssey (Fang et al., 2024).
  - [Inference-Aware Fine-Tuning for Best-of-N Sampling in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c40bed606c51c8e827c1ba75aa2da054-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > To further assess the generalization capabilities of our BoN aware fine-tuned models, we evaluate their performance on two challenging, held-out benchmarks: Functional Math (Srivastava et al., 2024) and MathOdyssey (Fang et al., 2024).
  - [Inference-Aware Fine-Tuning for Best-of-N Sampling in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c40bed606c51c8e827c1ba75aa2da054-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs) — *measured_by*
  > recent math specific competition and Olympiad-level benchmarking on Math Odyssey (Fang et al., 2024), OlymiadBench (He et al., 2024), and the American Invitational Mathematics Examination (AIME) & the American Mathematics Competitions (AMC) (Beeching et al., 2024; DeepSeek-AI et al., 2024; Reid et al., 2024) questions show that the state-of-the-art (SOTA), both generalist and specialist, LLMs continue to struggle with advanced math reasoning. (Section 1.1).
  - [SBSC: Step-by-Step Coding for Improving Mathematical Olympiad Performance](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e5f5e4504759e3957e3eef2a44a535e-Paper-Conference.pdf)
