# AQuA-RAT
**Type:** Measurement  
**Referenced in:** 60 papers  
**Also known as:** AQUA, AQuA, AQUA-RAT, AquaRAT  

## State of the Field

**What it is.** Across papers, the dominant framing treats AQuA-RAT, often written AQuA or AQUA-RAT, as a dataset or benchmark of algebraic word problems in multiple-choice format. Many definitions add rationales and multi-step reasoning, and one study describes it as containing approximately 100,000 algebraic word problems, each with a rationale leading to one of five answer options, while others characterize it more broadly as algebraic and quantitative reasoning or as reasoning over quantitative and qualitative relationships. Papers also differ slightly in presentation, with one calling it a 4-option multiple-choice benchmark and another a five-option one, and with difficulty described both as relatively simple and as harder math word problems.

**What it is claimed to measure.** The prevailing usage is as a measure of Mathematical reasoning: papers say it is used to assess varying levels of mathematical reasoning abilities, mathematical reasoning capacity, and arithmetic reasoning. Papers link it to 3 constructs and 1 behavioral indicator overall, with claims concentrated on Mathematical reasoning; a smaller line of work uses it to measure Mathematical problem solving, and single papers also report it as measuring Chain-of-thought reasoning, because the problems require bottom-up composition and multi-step reasoning, and Symbolic reasoning, describing it as involving multiple-choice symbolic reasoning with expressions not explicitly defined in the query. Across papers, the measurement claims therefore center on Mathematical reasoning, with the other links appearing as narrower uses.

**Space of uses.** Papers usually place AQuA-RAT inside broader evaluation suites rather than use it alone, most often alongside GSM8K and also beside SVAMP, MultiArith, MATH, and FinQA. Some studies position it as an auxiliary transfer check, for example evaluating instructions optimized on GSM8K on AQuA and MultiArith, while others use it as a zero-shot chain-of-thought or few-shot numerical reasoning benchmark. It also appears as an unseen-task evaluation and as a test-set benchmark for adapted or fine-tuned models.

## Sources

**[Boosting of Thoughts: Trial-and-Error Problem Solving with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/b6f6bfbd260fbf2f5acb0a1d6439ca0e-Paper-Conference.pdf) (as "AQuA")**
> Dataset of algebraic word problems with multiple-choice answers, used to test transferability of optimized prompts across math reasoning tasks.

**[DQ-LoRe: Dual Queries with Low Rank Approximation Re-ranking for In-Context Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/b3875605f2e35714fc8a807cadf8a5e8-Paper-Conference.pdf) (as "AQUA")**
> Multiple-choice math word problem dataset requiring reasoning over quantitative and qualitative relationships.

**[Towards Effective and Efficient Continual Pre-training of Large Language Models](https://aclanthology.org/2025.acl-long.289.pdf) (as "AQUA-RAT")**
> A dataset of algebraic word problems with rationales, requiring multi-step reasoning.

**[SIRIUS : Contexual Sparisty with Correction for Efficient LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/2ae6b2bdf3a179e3e24129e2c54bd871-Paper-Conference.pdf)**
> A dataset of algebraic word problems requiring rationales for their solutions, used to test arithmetic reasoning.

**[Sample Efficient Demonstration Selection for In-Context Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/purohit25a/purohit25a.pdf) (as "AquaRAT")**
> A benchmark of algebraic and quantitative reasoning questions used here to evaluate numerical reasoning with few-shot demonstrations.

## Relationships

### → AQuA-RAT
- **Mathematical reasoning** (constructs) — *measured_by*
  > For evaluation, we employ a range of benchmarks - GSM8K, MATH, MMLU-MATH, AGIEval-SAT-MATH, MathQA, AQuA - to assess varying levels of mathematical reasoning abilities, comparing all models using the same few-shot prompting with greedy decoding. (Section 4.2)
  - [MathPile: A Billion-Token-Scale Pretraining Corpus for Math](https://proceedings.neurips.cc/paper_files/paper/2024/file/2d0be3cd5173c10b6ec075d1c393a13d-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > AQuA (Ling et al., 2017) is designed for algebraic question-answering tasks and includes a variety of multiple-choice math word problems.
  - [Improving Complex Reasoning with Dynamic Prompt Corruption: A Soft Prompt Optimization Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4006ff54a7bbda74c09bad6f7586f5b-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs) — *measured_by*
  > Two mathematical datasets are considered: (4) GSM8k (Cobbe et al., 2021) and (5) AQuA (Ling et al., 2017), since they require comprehensive understanding of complex problems and powerful abilities like bottom-up composition and multi-step reasoning. (Section 4.1)
  - [Forest for the Trees: Overarching Prompting Evokes High-Level Reasoning in Large Language Models](https://aclanthology.org/2025.naacl-long.66.pdf)
- **Symbolic reasoning** (constructs) — *measured_by*
  > AQuA involves multiple-choice symbolic reasoning with expressions not explicitly defined in the query. (Section 4)
  - [FLARE: Faithful Logic-Aided Reasoning and Exploration](https://aclanthology.org/2025.emnlp-main.1193.pdf)
