# MultiArith
**Type:** Measurement  
**Referenced in:** 36 papers  
**Also known as:** Multi-Arith  

## State of the Field

**What it is.** Across papers, MultiArith is most commonly described as a benchmark dataset of arithmetic word problems, often grade-school or general math word problems that require multiple operations or multi-step reasoning. Some definitions frame it more broadly as a quantitative or mathematical reasoning dataset, and one paper describes it as a subset of MAWPS containing multi-step mathematical word problems. A few papers add corpus details, reporting either a data size of 600 or a split of train: 420 and test: 180.

**What it is claimed to measure.** Papers link MultiArith to 2 constructs, Mathematical reasoning and Robustness, and to 1 behavioral indicator, Mathematical problem solving. The prevailing usage is to measure Mathematical reasoning, with papers using it to verify mathematical reasoning capacity or assess arithmetic reasoning tasks. A smaller line of work uses it to measure Robustness through out-of-domain evaluation, and it is also used to measure Mathematical problem solving on general benchmark suites.

**Space of uses.** No measurement instrument is linked to it. In practice, papers usually evaluate MultiArith alongside GSM8K and, in smaller benchmark suites, SVAMP, AddSub, SingleEq, and AQuA. Authors variously position it as a standard arithmetic benchmark, as a transfer check for prompts optimized on GSM8K, as a distribution-shift or out-of-distribution dataset, and in one study as the in-distribution dataset for mathematical reasoning.

## Sources

**[DQ-LoRe: Dual Queries with Low Rank Approximation Re-ranking for In-Context Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/b3875605f2e35714fc8a807cadf8a5e8-Paper-Conference.pdf)**
> A dataset containing arithmetic word problems used to evaluate quantitative reasoning.

**[CCQA: Generating Question from Solution Can Improve Inference-Time Reasoning in SLMs](https://aclanthology.org/2025.emnlp-main.704.pdf) (as "Multi-Arith")**
> A benchmark dataset for evaluating arithmetic reasoning on problems that require multiple operations.

## Relationships

### → MultiArith
- **Mathematical reasoning** (constructs) — *measured_by*
  > We evaluate DTV on three quantitative reasoning datasets: GSM8K (Cobbe et al., 2021), MATH (Hendrycks et al., 2021) and MultiArith (Roy & Roth, 2016).
  - [Don't Trust: Verify -- Grounding LLM Quantitative Reasoning with Autoformalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/0a79ecda13603817de4cdfc68b417e89-Paper-Conference.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > To test the performance of OccamLlama on more general mathematical problem solving tasks, we evaluate our method and baselines on the following six benchmarks: AddSub [41], GSM8K [42], MultiArith [33], MATH401 [8], Single Eq [43], and SVAMP [44].
  - [OccamLLM: Fast and Exact Language Model Arithmetic in a Single Step](https://proceedings.neurips.cc/paper_files/paper/2024/file/3eceb70f47690051d6769739fbf6294b-Paper-Conference.pdf)
- **Robustness** (constructs) — *measured_by*
  > For mathematical reasoning, we assess model robustness on three out-of-domain (OOD) benchmarks: ... and (3) MultiArith (Section 4.1).
  - [CODI: Compressing Chain-of-Thought into Continuous Space via Self-Distillation](https://aclanthology.org/2025.emnlp-main.36.pdf)
