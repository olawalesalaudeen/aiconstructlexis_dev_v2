# GaoKao 2023 En
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** GaoKao2023, GaoKao2023-Math-En, GaoKao2023En  

## State of the Field

**What it is.** Across the surveyed work, the prevailing description treats this as an English-language or English-translated benchmark or dataset of mathematics problems from the 2023 Chinese National College Entrance Examination, often phrased as the Gaokao math test in English. Papers also frame it as an out-of-domain or out-of-distribution evaluation set. A smaller description is looser, calling it an out-of-distribution mathematics benchmark drawn from major 2023 exam sources for testing generalization.

**What it is claimed to measure.** Papers use it to measure two constructs and no behavioral indicators. The dominant claim is that it measures Mathematical reasoning, as papers report results on it among advanced math benchmarks, while a broader reasoning framing also appears in diverse reasoning task suites. Overall, the linked claims are concentrated on Mathematical reasoning and Reasoning rather than spread across many constructs.

**Space of uses.** No measurement instrument is linked to it. Across the available papers, it is used alongside other evaluation benchmarks such as Minerva Math, OCWCourses, GSM8K, MATH or MATH500, and CollegeMath, and it is positioned as part of broader benchmark suites: as an advanced benchmark, an out-of-domain or out-of-distribution test set, or a benchmark representing different difficulty levels. One paper also describes the OOD datasets including it as more challenging than MATH.

## Sources

**[Empowering Math Problem Generation and Reasoning for Large Language Model via Synthetic Data based Continual Learning Framework](https://aclanthology.org/2025.emnlp-main.1223.pdf)**
> An English-language benchmark derived from the 2023 Chinese National College Entrance Examination (Gaokao) to assess mathematical reasoning.

**[AlphaMath Almost Zero: Process Supervision without Process](https://proceedings.neurips.cc/paper_files/paper/2024/file/30dfe47a3ccbee68cffa0c19ccb1bc00-Paper-Conference.pdf) (as "GaoKao2023")**
> An out-of-distribution mathematics benchmark drawn from major 2023 exam sources, used to test generalization of mathematical reasoning.

**[Markov Chain of Thought for Efficient Mathematical Reasoning](https://aclanthology.org/2025.naacl-long.365.pdf) (as "GaoKao2023-Math-En")**
> An out-of-domain evaluation dataset consisting of English-translated mathematics problems from the 2023 Chinese National College Entrance Examination (Gaokao).

**[LLaMA-Berry: Pairwise Optimization for Olympiad-level Mathematical Reasoning via O1-like Monte Carlo Tree Search](https://aclanthology.org/2025.naacl-long.375.pdf) (as "GaoKao2023En")**
> A benchmark derived from the 2023 Chinese National College Entrance Examination (Gaokao) math test, translated into English.

## Relationships

### → GaoKao 2023 En
- **Reasoning** (constructs) — *measured_by*
  > We evaluate our method on a diverse set of reasoning tasks, including GSM8K (Cobbe et al., 2021b), MATH500 (Hendrycks et al., 2021), MMLU STEM (Hendrycks et al., 2020), OlympiadBench (He et al., 2024), GaoKao-2023-En (Liao et al., 2024), GPQA (Rein et al., 2023), and Minerva Math (Lewkowycz et al., 2022). (Section 3)
  - [Reward-Guided Speculative Decoding for Efficient LLM Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liao25f/liao25f.pdf)
- **Mathematical reasoning** (constructs) — *measured_by*
  > On advanced benchmarks such as Minerva Math, GaoKao 2023 En, and CollegeMath, our optimized models achieve 27.9%, 54.3%, and 39.5% respectively, approaching the performance of the best-performing models. (Section 4.1)
  - [Empowering Math Problem Generation and Reasoning for Large Language Model via Synthetic Data based Continual Learning Framework](https://aclanthology.org/2025.emnlp-main.1223.pdf)
