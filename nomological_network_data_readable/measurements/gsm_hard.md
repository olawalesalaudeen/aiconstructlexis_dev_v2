# GSM-Hard
**Type:** Measurement  
**Referenced in:** 20 papers  
**Also known as:** GSM-HARD, GSM8K-Hard, GSMHard  

## State of the Field

**What it is.** Across the surveyed work, GSM-Hard, also written GSM-HARD or GSMHard, is most commonly described as a harder GSM8K benchmark or test set of grade-school math problems. Most definitions present it as a more challenging subset or version of GSM8K, while some are more specific and say it is created by replacing the original question numbers with larger-magnitude values to increase calculation difficulty. A smaller line of work describes it as an extended or out-of-distribution version with more complex arithmetic problems, and one definition says it contains problems that state-of-the-art models struggle with and is designed to test the limits of mathematical reasoning.

**What it is claimed to measure.** Papers link GSM-Hard to three constructs and one behavioral indicator. The prevailing claim is that papers use it to measure Mathematical reasoning, with several papers also reporting it as measuring the broader construct of Reasoning; a smaller line uses it to measure Robustness, often in out-of-distribution or perturbation settings, and one paper reports it as measuring Mathematical problem solving. Overall, the linked uses lean most toward mathematical reasoning.

**Space of uses.** No measurement instrument is linked to it. In practice, papers usually include GSM-Hard in multi-benchmark evaluation suites alongside GSM8K, MATH, SVAMP, ASDiv, and MAWPS, and they position it as a harder or out-of-distribution check beyond GSM8K, sometimes for unseen-task or further-generalization evaluation. In the cited work it appears within broader reasoning or math benchmark sets.

**Concerns raised.** Concern is discussed mainly through robustness. Some papers explicitly use GSM-Hard as an out-of-domain or robustness benchmark, and one limitation note says that a drop from GSM to GSM-Hard suggests models "may not be robust to input perturbations," while also noting performance is at par with previous work.

## Sources

**[Mutual Reasoning Makes Smaller LLMs Stronger Problem-Solver](https://proceedings.iclr.cc/paper_files/paper/2025/file/35514d533cdc278a7780daf0dbe7d0b7-Paper-Conference.pdf)**
> A more challenging subset of the GSM8K dataset, containing problems that state-of-the-art models struggle with, designed to test the limits of mathematical reasoning.

**[CODI: Compressing Chain-of-Thought into Continuous Space via Self-Distillation](https://aclanthology.org/2025.emnlp-main.36.pdf) (as "GSM-HARD")**
> A more difficult version of the GSM8k test set where numbers are replaced with values of larger magnitude to challenge mathematical reasoning capabilities.

**[LLaMA-Berry: Pairwise Optimization for Olympiad-level Mathematical Reasoning via O1-like Monte Carlo Tree Search](https://aclanthology.org/2025.naacl-long.375.pdf) (as "GSMHard")**
> A harder grade-school math benchmark used to evaluate mathematical problem solving under increased difficulty.

## Relationships

### → GSM-Hard
- **Mathematical reasoning** (constructs) — *measured_by*
  > We evaluated models on... GSM-Hard... ensuring a thorough assessment of the model’s mathematical reasoning aptitude. (Section 3.2)
  - [ToRA: A Tool-Integrated Reasoning Agent for Mathematical Problem Solving](https://proceedings.iclr.cc/paper_files/paper/2024/file/d3cf1559a8795eb1ed2b3ad52409ac7d-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > Extensive experiments across five SLMs demonstrate rStar can effectively solve diverse reasoning problems, including GSM8K, GSM-Hard, MATH, SVAMP, and StrategyQA.
  - [Mutual Reasoning Makes Smaller LLMs Stronger Problem-Solver](https://proceedings.iclr.cc/paper_files/paper/2025/file/35514d533cdc278a7780daf0dbe7d0b7-Paper-Conference.pdf)
- **Robustness** (constructs) — *measured_by*
  > The drop in performance on GSM-Hard compared to GSM indicates that our models may not be robust to input perturbations, though, they are at par with previous work. (Limitations and Potential Risks)
  - [OpenMathInstruct-1: A 1.8 Million Math Instruction Tuning Dataset](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d5aa9a7ce28cdc710fbd044fd3610f3-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > These include MATH (Hendrycks et al., 2021b), GSM8K (Cobbe et al., 2021), GSM-Hard (Gao et al., 2023), AIME-2024 for math domains (Section 4.1)
  - [MAS-GPT: Training LLMs to Build LLM-based Multi-Agent Systems](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ye25g/ye25g.pdf)
