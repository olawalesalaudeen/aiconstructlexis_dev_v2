# ASDiv
**Type:** Measurement  
**Referenced in:** 37 papers  
**Also known as:** ASDIV, Asdiv  

## State of the Field

**What it is.** Across papers, the prevailing usage treats ASDiv as a benchmark dataset of diverse arithmetic or math word problems. Definitions variously call it "A Set of Diverse Math Word Problems", "Another Solved Dataset of Diverse Word Problems", or "Another Simple Math Word Problem Set", and several descriptions emphasize varied problem types, operations, and difficulty levels for evaluating robustness, comprehension, or numerical reasoning. A smaller line of work presents it as an out-of-distribution or out-of-domain evaluation set, and one paper describes it as an English math word problem corpus with 2,305 instances, typically found in elementary schools.

**What it is claimed to measure.** Papers use ASDiv to measure 3 constructs and 2 behavioral indicators. The prevailing claim is that it measures Mathematical reasoning, with additional measured_by links to broader Reasoning and, less often, Generalization through out-of-domain generalizability. Among behavioral indicators, papers use it for Mathematical problem solving, and some also treat it as a held-out test for Instruction following.

**Space of uses.** No paper links ASDiv to another measurement instrument. In practice, papers usually place it inside multi-benchmark math evaluations, commonly alongside GSM8K, SVAMP, MATH, TabMWP, and MAWPS, and sometimes with other reasoning sets such as MathQA or StrategyQA. Depending on the study, it is positioned either as one of several math reasoning benchmarks or as an out-of-distribution, out-of-domain, or held-out test for generalization.

## Sources

**[Large Language Model Cascades with Mixture of Thought Representations for Cost-Efficient Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5de11e930c1bbfda5d4fc9d2b0924032-Paper-Conference.pdf) (as "ASDIV")**
> A Set of Diverse Math Word Problems, a benchmark containing math problems across various types and difficulty levels to assess robustness in mathematical reasoning.

**[BadChain: Backdoor Chain-of-Thought Prompting for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/791d3337291b2c574545aeecfa75484c-Paper-Conference.pdf)**
> A benchmark dataset of diverse math word problems for assessing arithmetic reasoning.

**[Learning Goal-Conditioned Representations for Language Reward Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d46f127a80dc58cbc0732a717285c43a-Paper-Conference.pdf) (as "Asdiv")**
> An out-of-distribution benchmark dataset of diverse math word problems.

## Relationships

### → ASDiv
- **Mathematical reasoning** (constructs) — *measured_by*
  > We evaluated models on... ASDIV... ensuring a thorough assessment of the model’s mathematical reasoning aptitude. (Section 3.2)
  - [ToRA: A Tool-Integrated Reasoning Agent for Mathematical Problem Solving](https://proceedings.iclr.cc/paper_files/paper/2024/file/d3cf1559a8795eb1ed2b3ad52409ac7d-Paper-Conference.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > ...GSM-Plus [18], MATH, TheoremQA [6], SVAMP [28], and ASDiv [22] for math. (Section 5.2)
  - [Noise Contrastive Alignment of Language Models with Explicit Rewards](https://proceedings.neurips.cc/paper_files/paper/2024/file/d5a58d198afa370a3dff0e1ca4fe1802-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We use MMLU Hendrycks et al. (2020), BigBench Hard (BBH) Srivastava et al. (2022), and 4 reasoning benchmarks: GSM8K Cobbe et al. (2021), SVAMP Patel et al. (2021), ASDIV Miao et al. (2020), and StrategyQA Geva et al. (2021) (Section 3.1).
  - [Mixture-of-Experts Meets Instruction Tuning: A Winning Combination for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/5222867be1bde4fb2d8ba018c03b3be8-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > Additionally, we include two mathematical reasoning datasets, i.e., SVAMP [12] and ASDiv [18], to evaluate the out-of-domain generalizability of the models fine-tuned on the data generated from GSM8K and MATH datasets.
  - [Neuro-Symbolic Data Generation for Math Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/29d319f7c1513c9ecd81d3a6e9632a6e-Paper-Conference.pdf)
