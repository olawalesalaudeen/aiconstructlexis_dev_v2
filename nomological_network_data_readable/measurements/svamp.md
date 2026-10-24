# SVAMP
**Type:** Measurement  
**Referenced in:** 107 papers  
**Also known as:** svamp  

## State of the Field

**What it is.** Across papers, the prevailing usage treats SVAMP as an arithmetic or grade-school math word problem benchmark, often described as a challenge set with simple, controlled, or designed variations in wording, structure, semantics, or numbers. Many definitions say these variations are meant to test compositional generalization, robustness, and sensitivity to sentence or question changes, and one paper says the perturbations target spurious correlations, question sensitivity, and structural invariance. Papers also often position it as out-of-domain or out-of-distribution, while a smaller description portrays it as a number-generation test with minimal linguistic variation; one paper specifies English math word problems up to grade 4.

**What it is claimed to measure.** Papers use SVAMP to measure 4 constructs and 3 behavioral indicators. The dominant claim is that it measures Mathematical reasoning, and a related strand uses it for Reasoning and Mathematical problem solving. Smaller uses report it as measuring Generalization and Robustness, and in a few cases Instruction following and Text generation, so the claimed targets spread across several outcomes even though mathematical reasoning is the prevailing framing.

**Space of uses.** Most papers use SVAMP in multi-benchmark math evaluations, especially alongside GSM8K, and often with MATH and ASDiv; some also pair it with Mathematics and SimulEq. The recurring positioning is as an out-of-domain, out-of-distribution, held-out, or robustness-oriented evaluation set, though some papers simply include it as one of several arithmetic reasoning benchmarks, sometimes in few-shot evaluation.

**Concerns raised.** A few papers describe SVAMP as one-step math reasoning and as simpler than GSM8K or MATH. Another minority description says it has minimal linguistic variation, which differs from the more common descriptions of simple linguistic, semantic, structural, or numerical variations.

## Sources

**[Boosting of Thoughts: Trial-and-Error Problem Solving with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/b6f6bfbd260fbf2f5acb0a1d6439ca0e-Paper-Conference.pdf)**
> Dataset of novel arithmetic word problems designed to test compositional generalization and robustness in mathematical reasoning models.

**[Learning Goal-Conditioned Representations for Language Reward Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d46f127a80dc58cbc0732a717285c43a-Paper-Conference.pdf) (as "svamp")**
> An out-of-distribution benchmark of simple math word problems with linguistic variations.

## Relationships

### → SVAMP
- **Mathematical reasoning** (constructs) — *measured_by*
  > We evaluated models on... SVAMP... ensuring a thorough assessment of the model’s mathematical reasoning aptitude. (Section 3.2)
  - [ToRA: A Tool-Integrated Reasoning Agent for Mathematical Problem Solving](https://proceedings.iclr.cc/paper_files/paper/2024/file/d3cf1559a8795eb1ed2b3ad52409ac7d-Paper-Conference.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > To test the performance of OccamLlama on more general mathematical problem solving tasks, we evaluate our method and baselines on the following six benchmarks: AddSub [41], GSM8K [42], MultiArith [33], MATH401 [8], Single Eq [43], and SVAMP [44].
  - [OccamLLM: Fast and Exact Language Model Arithmetic in a Single Step](https://proceedings.neurips.cc/paper_files/paper/2024/file/3eceb70f47690051d6769739fbf6294b-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We use MMLU Hendrycks et al. (2020), BigBench Hard (BBH) Srivastava et al. (2022), and 4 reasoning benchmarks: GSM8K Cobbe et al. (2021), SVAMP Patel et al. (2021), ASDIV Miao et al. (2020), and StrategyQA Geva et al. (2021) (Section 3.1).
  - [Mixture-of-Experts Meets Instruction Tuning: A Winning Combination for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/5222867be1bde4fb2d8ba018c03b3be8-Paper-Conference.pdf)
- **Robustness** (constructs) — *measured_by*
  > SVAMP (Patel et al., 2021), a robustness evaluation benchmark. (Section 3.4)
  - [CodePlan: Unlocking Reasoning Potential in Large Language Models by Scaling Code-form Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/c362b360765ed90ae4bd9c6764837e0e-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > “the SVAMP dataset, containing 1,000 problems, is used solely for evaluation purposes to demonstrate the generalizability of our method.”
  - [Recursive Introspection: Teaching Language Model Agents How to Self-Improve](https://proceedings.neurips.cc/paper_files/paper/2024/file/639d992f819c2b40387d4d5170b8ffd7-Paper-Conference.pdf)
- **Instruction fine-tuning** (behaviors tasks) — *measured_by*
  > For LLM fine-tuning, we conduct experiments in math corpus, and evaluate on Mathmeticas (Davies et al., 2021), SVAMP (Patel et al., 2021), NumGLUE (Mishra et al., 2022), and GSM8K (Cobbe et al., 2021). (Section 6.1)
  - [COAT: Compressing Optimizer states and Activations for Memory-Efficient FP8 Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ac807c9b296964409b277369e55621a-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > Text Generation We use the SVAMP dataset (Patel et al., 2021) which consists of English math word problems with grade level up to 4.
  - [RRInf: Efficient Influence Function Estimation via Ridge Regression for Large Language Models and Text-to-Image Diffusion Models](https://aclanthology.org/2025.emnlp-main.933.pdf)
- **Out-of-distribution generalization** (constructs) — *measured_by*
  > Additionally, we include two mathematical reasoning datasets, i.e., SVAMP [12] and ASDiv [18], to evaluate the out-of-domain generalizability of the models fine-tuned on the data generated from GSM8K and MATH datasets.
  - [Neuro-Symbolic Data Generation for Math Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/29d319f7c1513c9ecd81d3a6e9632a6e-Paper-Conference.pdf)
