# Mathematical reasoning
**Type:** Construct  
**Referenced in:** 604 papers  
**Also known as:** Arithmetic reasoning, Algebraic manipulation, Math reasoning, Multi-step math reasoning, Numerical reasoning, Mathematical ability, Quantitative reasoning, Mathematical Reasoning, Mathematical capability, Mathematical problem-solving, Mathematical intelligence, Asymptotic reasoning, Mathematical understanding, Arithmetic ability, Numeric reasoning, Arithmetic computation capability, Mathematical world-model, Math knowledge, Multistep mathematical reasoning  

## State of the Field

**Definition agreement:** Complementary. Most papers define mathematical reasoning as a model's latent or observed ability to solve mathematical problems, especially word or grade-school problems, through multi-step numerical and logical inference. A smaller but notable set broadens this to symbolic manipulation, proof construction, optimization formalization, or quantitative reasoning over tables and documents, so the definitions differ in scope and setting but still describe the same model-level phenomenon of mathematical problem solving rather than incompatible constructs.

**Space of definitions.** Across the surveyed work, the dominant framing is a latent model ability or capability to understand and solve mathematical problems through step-by-step logical, numerical, or symbolic inference. Most definitions center on math word problems and quantitative tasks, often emphasizing arithmetic or algebraic operations, intermediate reasoning steps, and correct final answers; several explicitly narrow this to grade-school or GSM8K-style problems, and one description says solving such problems requires generating the chain of thought before the answer. Smaller lines of work narrow the construct to specific facets such as arithmetic target-expression generation, numerical reasoning from product metadata, or algebraic manipulation, while others broaden it to formal proof, optimization model formulation, applied asymptotic reasoning, visual mathematical reasoning, or an internal mathematical world-model. Most papers treat it as a latent property of the model, though some define it through observable solving behavior or through benchmark performance meant to reflect mathematical intelligence.

**Space of facets.** Papers divide the space into arithmetic, numerical or quantitative, algebraic, geometric, logical, statistical, formal, and asymptotic forms, and some add visual-context versions that combine visual understanding with math. The naming is loose: mathematical reasoning, math reasoning, arithmetic reasoning, numerical reasoning, quantitative reasoning, mathematical ability, capability, understanding, and problem-solving are often used for overlapping stepwise problem solving, while mathematical intelligence and mathematical world-model are used for broader latent qualities. A few papers also split natural-language mathematical chain of thought into step planning and step calculation, or contrast genuine reasoning with memorization or heuristics.

**Space of measurement.** Operationally, papers measure the construct with 77 linked instruments and connect it to 15 behavioral indicators. The prevailing measurement strategy is benchmark evaluation, especially on GSM8K, MATH, SVAMP, AQuA-RAT, and MATH-500; many papers describe these as grade-school word problems, arithmetic datasets, or competition-level math tests, and they also use multilingual, multimodal, formal-proof, spoken, judge-oriented, and broader evaluation-suite instruments. These operationalizations mostly match the common definition of multi-step problem solving, but the measurement space is broader in some papers, reaching simple addition, table or document calculations, visual math, and formal mathematics.

**Links.** Several papers claim a causal relationship from Chain of thought to mathematical reasoning; the quoted evidence says CoT helps substantially on math, outperforms alternatives, and can enhance mathematical reasoning. Smaller lines of work make similar causal claims from Coding ability and Formal theorem proving, alongside other training or model factors, and one paper records the reverse direction from mathematical reasoning to a formalization task. Mathematical reasoning is also reported to correlate with Reasoning and Coding ability, and papers describe it as related to Memorization, broader problem solving, planning, table or algorithmic settings, and error handling without making those links causal.

## Sources

**[Localized Zeroth-Order Prompt Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/9cef1316eaef9bd99da46f63334dc031-Paper-Conference.pdf) (as "Arithmetic reasoning")**
> Solving mathematical word problems that require understanding the text and performing arithmetic calculations.

**[CURIE: Evaluating LLMs on Multitask Scientific Long-Context Understanding and Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/1ae4999aefb509d75d8608e07280922c-Paper-Conference.pdf) (as "Algebraic manipulation")**
> Manipulating symbolic or mathematical expressions to derive or simplify scientific results.

**[As Simple as Fine-tuning: LLM Alignment via Bidirectional Negative Feedback Loss](https://proceedings.iclr.cc/paper_files/paper/2025/file/4bc4e9ecd5ae4a75048dc216a770cba1-Paper-Conference.pdf)**
> Solving math problems that require rigorous logic and stepwise computation.

**[Generalization v.s. Memorization: Tracing Language Models’ Capabilities Back to Pretraining Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/7cdf000d22c6cda21f3cbd7467aaf26f-Paper-Conference.pdf) (as "Math reasoning")**
> Solving grade-school math problems that require intermediate reasoning steps before giving a final answer.

**[Improving Complex Reasoning with Dynamic Prompt Corruption: A Soft Prompt Optimization Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4006ff54a7bbda74c09bad6f7586f5b-Paper-Conference.pdf) (as "Multi-step math reasoning")**
> Solving mathematical problems that require multiple intermediate reasoning steps before producing an answer.

**[From Few to Many: Self-Improving Many-Shot Reasoners Through Iterative Optimization and Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/f22dfaee68dd71f784a82a684b4404bb-Paper-Conference.pdf) (as "Numerical reasoning")**
> Solving problems that require arithmetic or quantitative inference from text.

**[Don't Trust: Verify -- Grounding LLM Quantitative Reasoning with Autoformalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/0a79ecda13603817de4cdfc68b417e89-Paper-Conference.pdf) (as "Quantitative reasoning")**
> The latent ability of a model to understand and solve mathematical problems, particularly those presented in natural language that require numerical and logical steps.

**[WizardLM: Empowering Large Pre-Trained Language Models to Follow Complex Instructions](https://proceedings.iclr.cc/paper_files/paper/2024/file/82eec786fdfbbfa53450c5feb7d1ac92-Paper-Conference.pdf) (as "Mathematical ability")**
> The latent ability to solve arithmetic and word problems and handle math-oriented prompts correctly.

**[SimPO: Simple Preference Optimization with a Reference-Free Reward](https://proceedings.neurips.cc/paper_files/paper/2024/file/e099c1c9699814af0be873a175361713-Paper-Conference.pdf) (as "Mathematical Reasoning")**
> The capability to solve mathematical and logic-based problems requiring step-by-step deduction.

**[Token-Supervised Value Models for Enhancing Mathematical Problem-Solving Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0801fccb1d705a9e6747e138d9a0056a-Paper-Conference.pdf) (as "Mathematical problem-solving")**
> The latent ability to solve math word problems by producing correct multi-step reasoning and final answers.

**[Self-MoE: Towards Compositional Large Language Models with Self-Specialized Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/558a100caa93422df215fadb9e9b1dd7-Paper-Conference.pdf) (as "Mathematical capability")**
> The model's ability to solve mathematical problems, particularly those requiring arithmetic and logical steps.

**[HARDMath: A Benchmark Dataset for Challenging Problems in Applied Mathematics](https://proceedings.iclr.cc/paper_files/paper/2025/file/23d64d26abb5a0e9f2014cfcc700f82a-Paper-Conference.pdf) (as "Asymptotic reasoning")**
> The model's ability to find approximate analytical solutions to complex mathematical problems by analyzing their behavior in limiting cases, such as when a parameter is very large or very small.

**[Is Your Model Really A Good Math Reasoner? Evaluating Mathematical Reasoning with Checklist](https://proceedings.iclr.cc/paper_files/paper/2025/file/54d2d38a56a74387d5916ee40e462295-Paper-Conference.pdf) (as "Mathematical intelligence")**
> The broader latent quality reflected by benchmark performance that is intended to track genuine mathematical ability more faithfully and linearly than traditional tests.

**[ResQ: Mixed-Precision Quantization of Large Language Models with Low-Rank Residuals](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saxena25b/saxena25b.pdf) (as "Mathematical understanding")**
> The latent capability to solve grade-school math problems that require multi-step numerical reasoning.

**[A Closer Look at Machine Unlearning for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7b7db41ea66d624587f211aa15c07e45-Paper-Conference.pdf) (as "Arithmetic ability")**
> The capacity to solve grade-school or similar numerical computation problems.

**[Shopping MMLU: A Massive Multi-Task Online Shopping Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2049d75dd13db049897562bcf7d59da8-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Numeric reasoning")**
> The ability to extract numerical information from product metadata and perform calculations to answer questions.

**[MedCalc-Bench: Evaluating Large Language Models for Medical Calculations](https://proceedings.neurips.cc/paper_files/paper/2024/file/99e81750f3fdfcaf9613db2dbf4bd623-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Arithmetic computation capability")**
> The model's underlying ability to perform mathematical operations like addition, subtraction, and exponentiation correctly as part of a larger reasoning process.

**[Can Transformers Do Enumerative Geometry?](https://proceedings.iclr.cc/paper_files/paper/2025/file/aee2f03ecb2b2c1ea55a43946b651cfd-Paper-Conference.pdf) (as "Mathematical world-model")**
> An internalized, coherent understanding of mathematical concepts, relationships, and structures that goes beyond surface-level pattern matching.

**[EmbedLLM: Learning Compact Representations of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/bf5e4b85d203481d6e37bd32d9600162-Paper-Conference.pdf) (as "Math knowledge")**
> The extent of an LLM's competence on math-related content, as reflected by performance patterns across math benchmarks.

**[Training on the Test Task Confounds Evaluation and Emergence](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab8c971c2ccd12bac0ab249f75e2c16d-Paper-Conference.pdf) (as "Multistep mathematical reasoning")**
> The latent ability to perform a sequence of logical and mathematical steps to arrive at a solution for a quantitative problem.

## Relationships

### Mathematical reasoning →
- **GSM8K** (measurements) — *measured_by*
  > We evaluate DTV on three quantitative reasoning datasets: GSM8K (Cobbe et al., 2021), MATH (Hendrycks et al., 2021) and MultiArith (Roy & Roth, 2016).
  - [Don't Trust: Verify -- Grounding LLM Quantitative Reasoning with Autoformalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/0a79ecda13603817de4cdfc68b417e89-Paper-Conference.pdf)
- **MATH** (measurements) — *measured_by*
  > We evaluate DTV on three quantitative reasoning datasets: GSM8K (Cobbe et al., 2021), MATH (Hendrycks et al., 2021) and MultiArith (Roy & Roth, 2016).
  - [Don't Trust: Verify -- Grounding LLM Quantitative Reasoning with Autoformalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/0a79ecda13603817de4cdfc68b417e89-Paper-Conference.pdf)
- **SVAMP** (measurements) — *measured_by*
  > We evaluated models on... SVAMP... ensuring a thorough assessment of the model’s mathematical reasoning aptitude. (Section 3.2)
  - [ToRA: A Tool-Integrated Reasoning Agent for Mathematical Problem Solving](https://proceedings.iclr.cc/paper_files/paper/2024/file/d3cf1559a8795eb1ed2b3ad52409ac7d-Paper-Conference.pdf)
- **AQuA-RAT** (measurements) — *measured_by*
  > For evaluation, we employ a range of benchmarks - GSM8K, MATH, MMLU-MATH, AGIEval-SAT-MATH, MathQA, AQuA - to assess varying levels of mathematical reasoning abilities, comparing all models using the same few-shot prompting with greedy decoding. (Section 4.2)
  - [MathPile: A Billion-Token-Scale Pretraining Corpus for Math](https://proceedings.neurips.cc/paper_files/paper/2024/file/2d0be3cd5173c10b6ec075d1c393a13d-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MATH-500** (measurements) — *measured_by*
  > We analyze the performance of fine-tuned models of various sizes given different inference FLOPs on mathematical reasoning benchmarks (e.g., GSM8K test set (Cobbe et al., 2021) and MATH500 test set (Hendrycks et al., 2021b; Lightman et al., 2024)).
  - [Inference Scaling Laws: An Empirical Analysis of Compute-Optimal Inference for LLM Problem-Solving](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c3caae2f725c8e2a55ecd600563d172-Paper-Conference.pdf)
- **ASDiv** (measurements) — *measured_by*
  > We evaluated models on... ASDIV... ensuring a thorough assessment of the model’s mathematical reasoning aptitude. (Section 3.2)
  - [ToRA: A Tool-Integrated Reasoning Agent for Mathematical Problem Solving](https://proceedings.iclr.cc/paper_files/paper/2024/file/d3cf1559a8795eb1ed2b3ad52409ac7d-Paper-Conference.pdf)
- **MultiArith** (measurements) — *measured_by*
  > We evaluate DTV on three quantitative reasoning datasets: GSM8K (Cobbe et al., 2021), MATH (Hendrycks et al., 2021) and MultiArith (Roy & Roth, 2016).
  - [Don't Trust: Verify -- Grounding LLM Quantitative Reasoning with Autoformalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/0a79ecda13603817de4cdfc68b417e89-Paper-Conference.pdf)
- **AIME 2024** (measurements) — *measured_by*
  > We evaluate our models on a set of common benchmarks that consists of GSM8K (1.3K examples), MATH (5K examples), AMC 2023 (40 examples), AIME 2024 (30 examples), and Omni-MATH (4.4K examples) (Omni-Math, 2024).
  - [OpenMathInstruct-2: Accelerating AI for Math with Massive Open-Source Instruction Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/302ce0673c00aee2cf84bb43d0117553-Paper-Conference.pdf)
- **AMC 2023** (measurements) — *measured_by*
  > We evaluate our models on a set of common benchmarks that consists of GSM8K (1.3K examples), MATH (5K examples), AMC 2023 (40 examples), AIME 2024 (30 examples), and Omni-MATH (4.4K examples) (Omni-Math, 2024).
  - [OpenMathInstruct-2: Accelerating AI for Math with Massive Open-Source Instruction Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/302ce0673c00aee2cf84bb43d0117553-Paper-Conference.pdf)
- **MathQA** (measurements) — *measured_by*
  > For evaluation, we employ a range of benchmarks - GSM8K, MATH, MMLU-MATH, AGIEval-SAT-MATH, MathQA, AQuA - to assess varying levels of mathematical reasoning abilities, comparing all models using the same few-shot prompting with greedy decoding. (Section 4.2)
  - [MathPile: A Billion-Token-Scale Pretraining Corpus for Math](https://proceedings.neurips.cc/paper_files/paper/2024/file/2d0be3cd5173c10b6ec075d1c393a13d-Paper-Datasets_and_Benchmarks_Track.pdf)
- **CollegeMath** (measurements) — *measured_by*
  > For mathematical reasoning, the performance is evaluated on the test set of MATH (Hendrycks et al., 2021b), GSM8K (Cobbe et al., 2021a), and College Math (Tang et al., 2024) by Accuracy. (Section 4.1)
  - [Preference Optimization for Reasoning with Pseudo Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/31a57804448363bcab777f818f75f5b4-Paper-Conference.pdf)
- **MathVista** (measurements) — *measured_by*
  > In this paper, we present MATHVISTA, a consolidated Mathematical reasoning benchmark in Visual contexts. (Section 1)
  - [MathVista: Evaluating Mathematical Reasoning of Foundation Models in Visual Contexts](https://proceedings.iclr.cc/paper_files/paper/2024/file/663bce02a0050c4a11f1eb8a7f1429d3-Paper-Conference.pdf)
- **OlympiadBench** (measurements) — *measured_by*
  > recent math specific competition and Olympiad-level benchmarking on Math Odyssey (Fang et al., 2024), OlymiadBench (He et al., 2024), and the American Invitational Mathematics Examination (AIME) & the American Mathematics Competitions (AMC) (Beeching et al., 2024; DeepSeek-AI et al., 2024; Reid et al., 2024) questions show that the state-of-the-art (SOTA), both generalist and specialist, LLMs continue to struggle with advanced math reasoning. (Section 1.1).
  - [SBSC: Step-by-Step Coding for Improving Mathematical Olympiad Performance](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e5f5e4504759e3957e3eef2a44a535e-Paper-Conference.pdf)
- **MAWPS** (measurements) — *measured_by*
  > We evaluate our models on popular math reasoning benchmarks, namely GSM8K, MATH, GSM-Hard [24], SVAMP [28], TabMWP [29], ASDiv [30], and MAWPS [31]. (Section 3.2)
  - [OpenMathInstruct-1: A 1.8 Million Math Instruction Tuning Dataset](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d5aa9a7ce28cdc710fbd044fd3610f3-Paper-Datasets_and_Benchmarks_Track.pdf)
- **AddSub** (measurements) — *measured_by*
  > We select eleven mathematical reasoning datasets... while the OOD datasets include GSM8K, SVAMP, AddSub, SingleEq, SingleOp, and MATH. (Section 2.2)
  - [Embedding Trajectory for Out-of-Distribution Detection in Mathematical Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b734e95f0788a030a69caa987516186-Paper-Conference.pdf)
- **GSM-Hard** (measurements) — *measured_by*
  > We evaluated models on... GSM-Hard... ensuring a thorough assessment of the model’s mathematical reasoning aptitude. (Section 3.2)
  - [ToRA: A Tool-Integrated Reasoning Agent for Mathematical Problem Solving](https://proceedings.iclr.cc/paper_files/paper/2024/file/d3cf1559a8795eb1ed2b3ad52409ac7d-Paper-Conference.pdf)
- **MGSM** (measurements) — *measured_by*
  > We experimented MindMerger with the latest multilingual mathematical reasoning MGSM [Shi et al., 2023] and MSVAMP [Chen et al., 2023] (Section 4.2)
  - [MindMerger: Efficiently Boosting LLM Reasoning in non-English Languages](https://proceedings.neurips.cc/paper_files/paper/2024/file/3bf80b34f731313b8292f4578e820c90-Paper-Conference.pdf)
- **MATH10K** (measurements) — *measured_by*
  > we follow the experimental setup in Hu et al. [2023] and finetune LLaMA-1 7B and 13B on a combined dataset of seven arithmetic reasoning tasks with LM-generated chain-of-thought steps (MATH10K) (Section 4.3)
  - [ReFT: Representation Finetuning for Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/75008a0fba53bf13b0bb3b7bff986e0e-Paper-Conference.pdf)
- **Minerva Math** (measurements) — *measured_by*
  > Math: SVAMP (Patel et al., 2021), GSM8k (Cobbe et al., 2021), GSM-Hard (Gao et al., 2023), Hendrycks-MATH (Hendrycks et al., 2021), Minerva-MATH (Lewkowycz et al., 2022). (Section 5.1)
  - [Mixture of Parrots: Experts improve memorization more than reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5bc3356e0fa1753fff7e8d6628e71b22-Paper-Conference.pdf)
- **SingleEq** (measurements) — *measured_by*
  > We select eleven mathematical reasoning datasets... while the OOD datasets include GSM8K, SVAMP, AddSub, SingleEq, SingleOp, and MATH. (Section 2.2)
  - [Embedding Trajectory for Out-of-Distribution Detection in Mathematical Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b734e95f0788a030a69caa987516186-Paper-Conference.pdf)
- **TabMWP** (measurements) — *measured_by*
  > We evaluated models on... TabMWP... ensuring a thorough assessment of the model’s mathematical reasoning aptitude. (Section 3.2)
  - [ToRA: A Tool-Integrated Reasoning Agent for Mathematical Problem Solving](https://proceedings.iclr.cc/paper_files/paper/2024/file/d3cf1559a8795eb1ed2b3ad52409ac7d-Paper-Conference.pdf)
- **Reasoning** (constructs) — *correlates*
  > We find that unsurprisingly, math, coding, and reasoning all correlate with one another.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **Game of 24** (measurements) — *measured_by*
  > Besides, we include a challenging mathematical reasoning task, Game of 24 Yao et al. (2024), where the goal is to use four numbers and basic arithmetic operations (addition, subtraction, multiplication, and division) to obtain 24 in 1 equation. (Section 4)
  - [Boosting of Thoughts: Trial-and-Error Problem Solving with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/b6f6bfbd260fbf2f5acb0a1d6439ca0e-Paper-Conference.pdf)
- **Omni-MATH** (measurements) — *measured_by*
  > We evaluate our models on a set of common benchmarks that consists of GSM8K (1.3K examples), MATH (5K examples), AMC 2023 (40 examples), AIME 2024 (30 examples), and Omni-MATH (4.4K examples) (Omni-Math, 2024).
  - [OpenMathInstruct-2: Accelerating AI for Math with Massive Open-Source Instruction Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/302ce0673c00aee2cf84bb43d0117553-Paper-Conference.pdf)
- **AIME 2025** (measurements) — *measured_by*
  > In this section, we present a comprehensive evaluation of the proposed GRPO-LEAD framework on two mathematical benchmarks: AIME24 and AIME25. (Section 5)
  - [GRPO-LEAD: A Difficulty-Aware Reinforcement Learning Approach for Concise Mathematical Reasoning in Language Models](https://aclanthology.org/2025.emnlp-main.287.pdf)
- **AIME** (measurements) — *measured_by*
  > recent math specific competition and Olympiad-level benchmarking on Math Odyssey (Fang et al., 2024), OlymiadBench (He et al., 2024), and the American Invitational Mathematics Examination (AIME) & the American Mathematics Competitions (AMC) (Beeching et al., 2024; DeepSeek-AI et al., 2024; Reid et al., 2024) questions show that the state-of-the-art (SOTA), both generalist and specialist, LLMs continue to struggle with advanced math reasoning. (Section 1.1).
  - [SBSC: Step-by-Step Coding for Improving Mathematical Olympiad Performance](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e5f5e4504759e3957e3eef2a44a535e-Paper-Conference.pdf)
- **SAT-Math** (measurements) — *measured_by*
  > We evaluate the MathCoder2 models on five representative datasets: GSM8K (Cobbe et al., 2021), MATH (Hendrycks et al., 2021b), SAT-Math (Azerbayev et al., 2024), OCW (Lewkowycz et al., 2022), and MMLU-Math (Hendrycks et al., 2021a). (Section 3.1)
  - [MathCoder2: Better Math Reasoning from Continued Pretraining on Model-translated Mathematical Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/bea94fe9c5573e74294657f692069d89-Paper-Conference.pdf)
- **miniF2F** (measurements) — *measured_by*
  > “The miniF2F dataset is specifically curated for evaluating LLM abilities in autoformalization and mathematical reasoning.”
  - [Autoformalize Mathematical Statements by Symbolic Equivalence and Semantic Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/6034a661584af6c28fd97a6f23e56c0a-Paper-Conference.pdf)
- **MathVerse** (measurements) — *measured_by*
  > Benchmarks such as MATH-V (Wang et al., 2024a) and MATHVERSE (Zhang et al., 2024e) demonstrate the current limitations of VLMs in handling challenging mathematical problems and understanding mathematical diagrams. (Section 1)
  - [DynaMath: A Dynamic Visual Benchmark for Evaluating Mathematical Reasoning Robustness of Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/78b248ea6f627431bba5029d92be8a3d-Paper-Conference.pdf)
- **SimulEq** (measurements) — *measured_by*
  > “We evaluate the MathCoder on five datasets, including two in-domain datasets: GSM8K (Cobbe et al., 2021) and MATH (Hendrycks et al., 2021); and three out-of-domain datasets: SVAMP (Patel et al., 2021), Mathematics (Saxton et al., 2019), and SimulEq (Kushman et al., 2014).”
  - [MathCoder: Seamless Code Integration in LLMs for Enhanced Mathematical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/15425f2df99aa1ba52712c9a4afc8536-Paper-Conference.pdf)
- **NumGLUE** (measurements) — *measured_by*
  > Specialized Domain 1: Mathematical Reasoning... Evaluation Datasets. We follow the framework established in [64] for a comprehensive assessment using several well-regarded datasets, including in-domain and out-of-domain datasets. For the in-domain datasets, we consider GSM8K [11], MATH [19], and NumGLUE [36].
  - [SmallToLarge (S2L): Scalable Data Selection for Fine-tuning Large Language Models by Summarizing Training Trajectories of Small Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/97fe251c25b6f99a2a23b330a75b11d4-Paper-Conference.pdf)
- **Mathematics Dataset** (measurements) — *measured_by*
  > Specialized Domain 1: Mathematical Reasoning... For the out-of-domain datasets, we consider SVAMP [38], Mathematics [13], SimulEq [25].
  - [SmallToLarge (S2L): Scalable Data Selection for Fine-tuning Large Language Models by Summarizing Training Trajectories of Small Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/97fe251c25b6f99a2a23b330a75b11d4-Paper-Conference.pdf)
- **MetaMath** (measurements) — *measured_by*
  > In order to solve this task, we need the model to be mathematically competent, as well as have some multiple choice and language comprehension skills. (Section 5.2)
  - [Capability Localization: Capabilities Can be Localized rather than Individual Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/648a5a590ca6f2bb5de53f938e230160-Paper-Conference.pdf)
- **Spec-Bench** (measurements) — *measured_by*
  > The benchmark includes various generation subtasks including... and mathematical reasoning.
  - [Block Verification Accelerates Speculative Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e710b42b1a9ed898f607ec0f4fcc971-Paper-Conference.pdf)
- **GSM-Plus** (measurements) — *measured_by*
  > The model’s performance is evaluated on two grade school math benchmarks: GSM8k (Cobbe et al., 2021) and GSM-Plus (Li et al., 2024), which is an adversarial version of GSM8k. (Section 4.4)
  - [Forewarned is Forearmed:  Harnessing LLMs for Data Synthesis via Failure-induced Exploration](https://proceedings.iclr.cc/paper_files/paper/2025/file/1cded4f97cf5f01a284c574110b7e3b9-Paper-Conference.pdf)
- **DynaMath** (measurements) — *measured_by*
  > To analyze cross-benchmark redundancy, we focus on the Math domain, specifically examining several popular mathematical benchmarks: MathVista (Lu et al., 2023), MathVision (Zhang et al., 2025), MathVerse (Wang et al., 2024a), and DynaMath (Zou et al., 2024).
  - [Redundancy Principles for MLLMs Benchmarks](https://aclanthology.org/2025.acl-long.612.pdf)
- **CMATH** (measurements) — *measured_by*
  > Ape210K (Zhao et al., 2020) and CMATH (Wei et al., 2023a) are two popular Chinese benchmarks for elementary-school-level math reasoning tasks.
  - [Policy Filtration for RLHF to Mitigate Noise in Reward Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bq/zhang25bq.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > The evaluation scripts are based on lm-eval for commonsense and mathematical reasoning (Section 4.1).
  - [$\texttt{Model-GLUE}$: Democratized LLM Scaling for A Large Model Zoo in the Wild](https://proceedings.neurips.cc/paper_files/paper/2024/file/180a476f22a52b8ef14f42b2b927afcc-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MMStar** (measurements) — *measured_by*
  > The performance of LLaVA-Next-LLaMA3-8B model with merged task vectors across math-related Benchmarks: MathVista ..., MathVerse ..., MMStar ..., DynaMath ..., MathVision ... (Table 2)
  - [Bring Reason to Vision: Understanding Perception and Reasoning through Model Merging](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25cm/chen25cm.pdf)
- **GaoKao** (measurements) — *measured_by*
  > Using evaluation scripts from Gou et al. (2023), we assess model accuracy through chain-of-thought reasoning under 0-shot settings, except for multiple-choice problems in GaoKao and CN Middle School 24 which use 5-shot settings. (Section 3.2)
  - [Empowering Math Problem Generation and Reasoning for Large Language Model via Synthetic Data based Continual Learning Framework](https://aclanthology.org/2025.emnlp-main.1223.pdf)
- **MMLU-STEM** (measurements) — *measured_by*
  > To evaluate performance, we assess the model on 9 mathematical reasoning benchmarks covering diverse domains, question formats (multiple-choice and open-ended), and difficulty levels (elementary to university): GSM8k (Cobbe et al., 2021), MATH (Hendrycks et al., 2021b), GSM-Hard (Gao et al., 2022), SVAMP (Patel et al., 2021), ASDiv (Miao et al., 2020), MAWPS (Koncel-Kedziorski et al., 2016), TabMWP (TAB) (Lu et al., 2023), MathQA (MQA) (Amini et al., 2019), MMLU-STEM (Hendrycks et al., 2021a), and SAT (Azerbayev et al., 2024). (Section 4.1)
  - [Overcoming Vocabulary Mismatch: Vocabulary-agnostic Teacher Guided Language Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shin25a/shin25a.pdf)
- **MathVision** (measurements) — *measured_by*
  > The performance of LLaVA-Next-LLaMA3-8B model with merged task vectors across math-related Benchmarks: MathVista ..., MathVerse ..., MMStar ..., DynaMath ..., MathVision ... (Table 2)
  - [Bring Reason to Vision: Understanding Perception and Reasoning through Model Merging](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25cm/chen25cm.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > We evaluate on tasks selected from BIG-Bench Hard (BBH) [43], a collection of diverse tasks considered to be challenging to LLMs ... the tasks include numerical reasoning, commonsense problem-solving, logical deduction, linguistic manipulation, machine translation, and tabular reasoning, among others. (Section 3.1)
  - [Teach Better or Show Smarter? On Instructions and Exemplars in Automatic Prompt Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/6b031defd145b02bed031093d8797bb3-Paper-Conference.pdf)
- **MR-GSM8K** (measurements) — *measured_by*
  > MR-GSM8K and MR-Math focus solely on mathematical reasoning
  - [MR-Ben: A Meta-Reasoning Benchmark for Evaluating System-2 Thinking in LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/d81cb1f4dc6e13aeb45553f80b3d6837-Paper-Conference.pdf)
- **Self-consistency** (measurements) — *measured_by*
  > “We apply self-consistency over diverse reasoning paths (Wang et al., 2023), selecting the most frequent answer in the candidate set, and report results on the SVAMP ... and StrategyQA ... datasets.”
  - [Reranking Laws for Language Generation: A Communication-Theoretic Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/c8b2f897e45770595656a79a9ad91e89-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > MT-bench and Vicuna-bench are designed to test the models' competencies in various complex cognitive tasks, including mathematics, reasoning, complex format handling, and writing
  - [Star-Agents: Automatic Data Optimization with LLM Agents for Instruction Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0852b88e96d973bd4e21b673f51621d0-Paper-Conference.pdf)
- **Vicuna-Bench** (measurements) — *measured_by*
  > MT-bench and Vicuna-bench are designed to test the models' competencies in various complex cognitive tasks, including mathematics, reasoning, complex format handling, and writing
  - [Star-Agents: Automatic Data Optimization with LLM Agents for Instruction Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0852b88e96d973bd4e21b673f51621d0-Paper-Conference.pdf)
- **Geometry3K** (measurements) — *measured_by*
  > “To evaluate the effectiveness of SKETCHPAD, we use the problems from the Geometry3K dataset [32].”
  - [Visual Sketchpad: Sketching as a Visual Chain of Thought for Multimodal Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb82011040977c7712409fbdb5456647-Paper-Conference.pdf)
- **TACT** (measurements) — *measured_by*
  > "TACT—Text And Calculations through Tables, a dataset crafted to evaluate LLMs’ reasoning and computational abilities using complex instructions."
  - [TACT: Advancing Complex Aggregative Reasoning with Information Extraction Tools](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d7025dc9bd4c8b6fb1eef80cc618008-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MMLU-Math** (measurements) — *measured_by*
  > Following [33], we select five mathematical reasoning datasets from MMLU [18] to demonstrate this
  - [Meaningful Learning: Enhancing Abstract Reasoning in Large Language Models via Generic Fact Guidance](https://proceedings.neurips.cc/paper_files/paper/2024/file/da5498f88193ff61f0daea1940b819da-Paper-Conference.pdf)
- **TRACE** (measurements) — *measured_by*
  > TRACE (Wang et al., 2023b) serves as a challenging continual instruction tuning benchmark comprising 8 diverse tasks, including domain-specific QA, code completion, mathematical reasoning (Section 2).
  - [Spurious Forgetting in Continual Learning of Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf)
- **Open LLM Leaderboard** (measurements) — *measured_by*
  > This evaluation suite measures LLM performance across six tasks: ... and math problem-solving (GSM8K (Cobbe et al., 2021)).
  - [Joint Reward and Policy Learning with Demonstrations and Human Feedback Improves Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/0ad6ebd11593822b8a6d5873ca9c5b0b-Paper-Conference.pdf)
- **MathGAP** (measurements) — *measured_by*
  > In this paper, we present a data-generation framework for evaluating LLMs on problems with arbitrarily complex arithmetic proofs, called MathGAP. (ABSTRACT)
  - [MathGAP: Out-of-Distribution Evaluation on Problems with Arbitrarily Complex Proofs](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9c2ab8d429044e0c35bcece2ff6d123-Paper-Conference.pdf)
- **R-GSM** (measurements) — *measured_by*
  > Math reasoning results of Qwen1.5 series on R-GSM subset.
  - [Eliminating Position Bias of Language Models: A Mechanistic Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/e389b15166cf98966ba058965a8c17e3-Paper-Conference.pdf)
- **LiveBench** (measurements) — *measured_by*
  > LiveBench... contains a wide variety of challenging tasks, spanning math, coding, reasoning, language, instruction following, and data analysis.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **GSM-Symbolic** (measurements) — *measured_by*
  > GSM-Symbolic enables more controllable evaluations, providing key insights and more reliable metrics for measuring the reasoning capabilities of models. (Abstract)
  - [GSM-Symbolic: Understanding the Limitations of Mathematical Reasoning in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ec2e7a896f8250986b3907f57621ce94-Paper-Conference.pdf)
- **GSM-NoOp** (measurements) — *measured_by*
  > We introduce GSM-NoOp, a dataset designed to challenge the reasoning capabilities of language models. (Section 4.4)
  - [GSM-Symbolic: Understanding the Limitations of Mathematical Reasoning in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ec2e7a896f8250986b3907f57621ce94-Paper-Conference.pdf)
- **MathOdyssey** (measurements) — *measured_by*
  > recent math specific competition and Olympiad-level benchmarking on Math Odyssey (Fang et al., 2024), OlymiadBench (He et al., 2024), and the American Invitational Mathematics Examination (AIME) & the American Mathematics Competitions (AMC) (Beeching et al., 2024; DeepSeek-AI et al., 2024; Reid et al., 2024) questions show that the state-of-the-art (SOTA), both generalist and specialist, LLMs continue to struggle with advanced math reasoning. (Section 1.1).
  - [SBSC: Step-by-Step Coding for Improving Mathematical Olympiad Performance](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e5f5e4504759e3957e3eef2a44a535e-Paper-Conference.pdf)
- **VoxEval** (measurements) — *measured_by*
  > and 3) pioneers the assessment of complex tasks like mathematical reasoning in spoken format. (Abstract)
  - [VoxEval: Benchmarking the Knowledge Understanding Capabilities of End-to-End Spoken Language Models](https://aclanthology.org/2025.acl-long.818.pdf)
- **TheoremQA** (measurements) — *measured_by*
  > For out-of-domain (OOD) evaluation, we use the CollegeMath (Tang et al., 2024), DeepMind-Mathematics (Saxton et al., 2019), OlympiadBench-Math (He et al., 2024), and TheoremQA (Chen et al., 2023) benchmarks (Section 4.1).
  - [MathFusion: Enhancing Mathematical Problem-solving of LLM through Instruction Fusion](https://aclanthology.org/2025.acl-long.367.pdf)
- **RewardBench** (measurements) — *measured_by*
  > RewardBench contains subsets that test RMs in targeted domains, including their coding ability, mathematical ability, and harmlessness. (Section 3.3)
  - [reWordBench: Benchmarking and Improving the Robustness of Reward Models with Transformed Inputs](https://aclanthology.org/2025.emnlp-main.167.pdf)
- **PricingLogic** (measurements) — *measured_by*
  > Evaluations of a line of LLMs reveal a steep performance drop on the harder tier, exposing systematic failures in rule interpretation and arithmetic reasoning. (Abstract)
  - [PricingLogic: Evaluating LLMs Reasoning on Complex Tourism Pricing Tasks](https://aclanthology.org/2025.emnlp-main.393.pdf)
- **GSM8K-Aug** (measurements) — *measured_by*
  > we mainly fine-tune models on the complicated mathematical reasoning benchmark GSM8K-Aug (Deng et al., 2023) (Section 4.1)
  - [DART: Distilling Autoregressive Reasoning to Silent Thought](https://aclanthology.org/2025.emnlp-main.256.pdf)
- **Logit lens** (measurements) — *measured_by*
  > We probe the final token’s residual stream at each layer using logit lens analysis, which projects the residual stream values after each MLP layer to the vocabulary space with the unembedding matrix (nostalgebraist, 2020) (Section 4.5).
  - [All for One: LLMs Solve Mental Math at the Last Token With Information Transferred From Other Tokens](https://aclanthology.org/2025.emnlp-main.1565.pdf)
- **OpenR1-Math-220k** (measurements) — *measured_by*
  > "We perform supervised finetuning on the Huggingface OpenR1-Math-220k (OpenR1-Team, 2025) dataset—a large-scale mathematical reasoning corpus"
  - [Orthogonal Finetuning Made Scalable](https://aclanthology.org/2025.emnlp-main.1627.pdf)
- **CodeMixBench** (measurements) — *measured_by*
  > we introduce the CodeMixBench, a code-mixing evaluation benchmark including eight tasks–three for evaluating LLMs (knowledge reasoning, mathematical reasoning, and truthfulness) and five for traditional NLP tasks (LID, POS, NER, SA, and MT). (§1)
  - [CodeMixBench: Evaluating Code-Mixing Capabilities of LLMs Across 18 Languages](https://aclanthology.org/2025.emnlp-main.109.pdf)
- **IMPLIRET** (measurements) — *measured_by*
  > "IMPLIRET covers three reasoning categories: World Knowledge, Arithmetic, and Temporal."
  - [ImpliRet: Benchmarking the Implicit Fact Retrieval Challenge](https://aclanthology.org/2025.emnlp-main.1685.pdf)
- **MMLU-Redux** (measurements) — *measured_by*
  > We select a total of seven datasets, including... MMLU-Redux (Gema et al. 2024); focusing on various mathematics subjects... (Section 3)
  - [CoMAT: Chain of Mathematically Annotated Thought Improves Mathematical Reasoning](https://aclanthology.org/2025.emnlp-main.1024.pdf)
- **MCBench** (measurements) — *measured_by*
  > MCBench evaluates three key capabilities of LLMs: ... • Mathematical Reasoning: Each step requires precise arithmetic operations.
  - [Metric Calculating Benchmark: Code-Verifiable Complicate Instruction Following Benchmark for Large Language Models](https://aclanthology.org/2025.emnlp-main.1051.pdf)
- **GaoKao 2023 En** (measurements) — *measured_by*
  > On advanced benchmarks such as Minerva Math, GaoKao 2023 En, and CollegeMath, our optimized models achieve 27.9%, 54.3%, and 39.5% respectively, approaching the performance of the best-performing models. (Section 4.1)
  - [Empowering Math Problem Generation and Reasoning for Large Language Model via Synthetic Data based Continual Learning Framework](https://aclanthology.org/2025.emnlp-main.1223.pdf)
- **ProofNet** (measurements) — *measured_by*
  > While contemporary LLMs attain competitive performance on established formal mathematical reasoning benchmarks such as miniF2F ... and ProofNet (formal undergraduate-level mathematics (Azerbayev et al., 2023))... (Section 1)
  - [Towards Advanced Mathematical Reasoning for LLMs via First-Order Logic Theorem Proving](https://aclanthology.org/2025.emnlp-main.628.pdf)
- **Arithmetic** (measurements) — *measured_by*
  > Arithmetic (Brown et al., 2020): a datasets evaluates the model’s fundamental mathematical reasoning abilities. (Section 4.1)
  - [S2-MAD: Breaking the Token Barrier to Enhance Multi-Agent Debate Efficiency](https://aclanthology.org/2025.naacl-long.475.pdf)

### → Mathematical reasoning
- **Chain of thought** (behaviors tasks) — *causes*
  > Finding 1: CoT only helps substantially on problems requiring mathematical, logical, or algorithmic reasoning. (Section 1)
  - [To CoT or not to CoT? Chain-of-thought helps mainly on math and symbolic reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ead542f13a38179d1b55b88610f959a1-Paper-Conference.pdf)
- **Expressive power** (constructs) — *causes*
  > the limited expressive capacity of LoRA, stemming from the low-rank constraint, has been recognized as a bottleneck, particularly in rigorous tasks like code generation and mathematical reasoning.
  - [RaSA: Rank-Sharing Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4fd162d3e2d015233486a2e313828a7-Paper-Conference.pdf)
- **Coding ability** (constructs) — *causes*
  > Various studies (Azerbayev et al., 2024; Shao et al., 2024) have shown that training on code enhances the mathematical reasoning abilities of large language models (LLMs). (Section 1)
  - [MathCoder2: Better Math Reasoning from Continued Pretraining on Model-translated Mathematical Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/bea94fe9c5573e74294657f692069d89-Paper-Conference.pdf)
- **Formal theorem proving** (behaviors tasks) — *causes*
  > Lean provides a verifiable environment to explore theorem proving formally, which has been shown effective in improving mathematical reasoning (Xin et al., 2024; Ying et al., 2024b). As far as we know, we are the first public study to introduce formal mathematics data in pre-training, using a total amount of 0.2B lean-based synthesized data. (Section 4.1)
  - [YuLan-Mini: Pushing the Limits of Open Data-efficient Language Model](https://aclanthology.org/2025.acl-long.268.pdf)
- **Prompt engineering** (behaviors tasks) — *causes*
  > As recent works have disclosed that crafting the right questions is crucial for eliciting the reasoning capabilities of LLMs (Yu et al., 2023a; Shah et al., 2024), the core of reasoning data synthesis lies in creating large-scale and novel questions. (Section 1)
  - [Unleashing LLM Reasoning Capability via Scalable Question Synthesis from Scratch](https://aclanthology.org/2025.acl-long.658.pdf)
- **Backward reasoning** (behaviors tasks) — *causes*
  > ...demonstrating the effectiveness of SV and FOBAR augmentation data in improving mathematical reasoning ability. (Section 4.3)
  - [MetaMath: Bootstrap Your Own Mathematical Questions for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c400474e8a36d0812fdee52739288b12-Paper-Conference.pdf)
- **Self-improvement** (constructs) — *causes*
  > our AlphaMath enhances Llama3’s mathematical reasoning capabilities without any annotations, yielding an average improvement of +20 points. (Section 4.6)
  - [AlphaMath Almost Zero: Process Supervision without Process](https://proceedings.neurips.cc/paper_files/paper/2024/file/30dfe47a3ccbee68cffa0c19ccb1bc00-Paper-Conference.pdf)
- **Visual understanding** (constructs) — *causes*
  > Despite the task being focused on mathematical reasoning, STIC enhanced the model’s response by improving its image comprehension capabilities. (Section 6)
  - [Enhancing Large Vision Language Models with Self-Training on Image Comprehension](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed45d6a03de84cc650cae0655f699356-Paper-Conference.pdf)
- **Tool use** (behaviors tasks) — *causes*
  > They utilize integrated natural language reasoning steps and Python code to improve performance on mathematical reasoning tasks. (Section 1)
  - [MathCoder2: Better Math Reasoning from Continued Pretraining on Model-translated Mathematical Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/bea94fe9c5573e74294657f692069d89-Paper-Conference.pdf)
- **Computer science knowledge** (constructs) — *correlates*
  > we consider this evidence suggests a strong correlation between CS proficiency and skills in Math and Code. (Section 3.5)
  - [CS-Bench: A Comprehensive Benchmark for Large Language Models towards Computer Science Mastery](https://proceedings.iclr.cc/paper_files/paper/2025/file/89c61fce5a8b73871d1c4073f486b134-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs) — *causes*
  > Chain of Thought (CoT) of multi-step benefits from the logical structure of the reasoning steps and task-specific actions, significantly enhancing the mathematical reasoning capabilities of large language models.
  - [Markov Chain of Thought for Efficient Mathematical Reasoning](https://aclanthology.org/2025.naacl-long.365.pdf)
- **System 2 thinking** (constructs) — *causes*
  > The continuously improved math reasoning capabilities via rStar-Math self-evolved deep thinking. (Table 4)
  - [rStar-Math: Small LLMs Can Master Math Reasoning with Self-Evolved Deep Thinking](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guan25f/guan25f.pdf)
- **Autoformalization ability** (constructs) — *correlates*
  > suggesting that an LLM with stronger mathematical reasoning capabilities is more effective in this task.
  - [Autoformalize Mathematical Statements by Symbolic Equivalence and Semantic Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/6034a661584af6c28fd97a6f23e56c0a-Paper-Conference.pdf)

### Associated with
- **Complex reasoning** (constructs)
  > Long-chain reasoning task (Wei et al., 2022; Xiong et al., 2024), such as commonsense reasoning and math reasoning, is one of the critical capabilities in large language models (LLMs) (Lai et al., 2024).
  - [TPO: Aligning Large Language Models with Multi-branch & Multi-step Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/42ac0f53b7ffede90aea8275b11b3bb8-Paper-Conference.pdf)
- **Memorization** (constructs)
  > Arithmetic reasoning provides a lens for this investigation, as it can be solved using various methods: learning known algorithms, developing novel approaches, or by memorizing vast quantities of input-output pairs. (Section 1)
  - [Arithmetic Without Algorithms: Language Models Solve Math with a Bag of Heuristics](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c5f30296296d2ae402ebbd09aaa9c12-Paper-Conference.pdf)
- **Table reasoning** (constructs)
  > Secondly, table reasoning tasks often require numerical reasoning, data preparation, or key cell identification.
  - [ALTER: Augmentation for Large-Table-Based Reasoning](https://aclanthology.org/2025.naacl-long.9.pdf)
- **Mathematical problem solving** (behaviors tasks)
  > In the mathematical reasoning task, the weak models teach the strong model to respond to mathematical word problems. (Section 5)
  - [A transfer learning framework for weak to strong generalization](https://proceedings.iclr.cc/paper_files/paper/2025/file/fa47ffc7b2033fd32d8b8734686f6ff4-Paper-Conference.pdf)
- **Planning** (constructs)
  > we posit that the natural language mathematical CoT task is determined by two sub-tasks: step planning task and step calculation task for global logic planning and local mathematical calculation. (Section 4.2)
  - [Unlocking the Capabilities of Thought: A Reasoning Boundary Framework to Quantify and Optimize Chain-of-Thought](https://proceedings.neurips.cc/paper_files/paper/2024/file/62ab1c2cb4b03e717005479efb211841-Paper-Conference.pdf)
- **Data analysis** (behaviors tasks)
  > the need for data analysis typically arises from specific application scenarios, and requires diverse reasoning skills including mathematical reasoning, logical reasoning, and strategic reasoning. (Abstract)
  - [DACO: Towards Application-Driven and Comprehensive Data Analysis via Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4cb1444fb05839d0113d2773da88a49-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Problem solving** (behaviors tasks)
  > Among these capabilities, mathematical ability serves as a fundamental measure of the problem-solving and complex reasoning skills of LLMs... (Section 1)
  - [Omni-MATH: A Universal Olympiad Level Mathematic Benchmark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9e1e8b56c7e363985ebeb0e9dd1a85c-Paper-Conference.pdf)
- **Algorithmic reasoning** (constructs)
  > Arithmetic reasoning provides a lens for this investigation, as it can be solved using various methods: learning known algorithms, developing novel approaches, or by memorizing vast quantities of input-output pairs. (Section 1)
  - [Arithmetic Without Algorithms: Language Models Solve Math with a Bag of Heuristics](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c5f30296296d2ae402ebbd09aaa9c12-Paper-Conference.pdf)
- **Optimization problem solving** (behaviors tasks)
  > Solving realistic optimization (OPT) problems in application scenarios requires advanced and applied mathematics ability. (Section 1)
  - [OptiBench Meets ReSocratic: Measure and Improve LLMs for Optimization Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/3deb687c44d3687ace0729e5db3b4efd-Paper-Conference.pdf)
- **Analytical reasoning** (constructs)
  > This involves several reasoning types: numerical reasoning for interpreting data, temporal reasoning for time-related concepts, lexical reasoning for word meanings, domain-specific reasoning for specialized knowledge, and common-sense reasoning for inferences.
  - [TRANSIENTTABLES: Evaluating LLMs' Reasoning on Temporally Evolving Semi-structured Tables](https://aclanthology.org/2025.naacl-long.332.pdf)
- **Textual reasoning** (behaviors tasks)
  > Textual reasoning ... struggles with quantitative reasoning.
  - [H-STAR: LLM-driven Hybrid SQL-Text Adaptive Reasoning on Tables](https://aclanthology.org/2025.naacl-long.445.pdf)
- **Error detection** (behaviors tasks)
  > However, existing evaluations often focus on final accuracy, neglecting the critical aspect of reasoning capabilities. This work addresses that gap by evaluating LLMs’ abilities to detect and correct reasoning mistakes.
  - [Exposing the Achilles' Heel: Evaluating LLMs Ability to Handle Mistakes in Mathematical Reasoning](https://aclanthology.org/2025.acl-long.1313.pdf)
- **Data contamination** (constructs)
  > In our analysis of LLMs’ mathematical reasoning performance, we identify data contamination and memorization as key challenges affecting their effectiveness.
  - [Exposing the Achilles' Heel: Evaluating LLMs Ability to Handle Mistakes in Mathematical Reasoning](https://aclanthology.org/2025.acl-long.1313.pdf)
- **Premise identification ability** (constructs)
  > “Mathematical problem solving requires a series of deductive reasoning steps, where each step is performed under a small set of premises.” (Section 1)
  - [Premise-Augmented Reasoning Chains Improve Error Identification in Math reasoning with LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mukherjee25a/mukherjee25a.pdf)
- **Rule-based reasoning** (constructs)
  > Large language models (LLMs) continue to face challenges in reliably solving reasoning tasks, particularly tasks that involve precise rule following, as often found in mathematical reasoning tasks.
  - [Improving Rule-based Reasoning in LLMs using Neurosymbolic Representations](https://aclanthology.org/2025.emnlp-main.1556.pdf)
- **Problem-solving ability** (constructs)
  > Mathematical reasoning has emerged as a critical benchmark to measure the advanced reasoning and problem-solving abilities of the Large Language Models (LLMs) (Section 1).
  - [SBSC: Step-by-Step Coding for Improving Mathematical Olympiad Performance](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e5f5e4504759e3957e3eef2a44a535e-Paper-Conference.pdf)
- **Easy-to-hard generalization** (constructs)
  > "we select mathematical reasoning to evaluate easy-to-hard generalization ability"
  - [Easy-to-Hard Generalization: Scalable Alignment Beyond Human Supervision](https://proceedings.neurips.cc/paper_files/paper/2024/file/5b6346a05a537d4cdb2f50323452a9fe-Paper-Conference.pdf)
- **Code generation** (behaviors tasks)
  > mathematical reasoning with code (Section 4.1), where LMs must use reasoning and coding to answer mathematical questions. (Section 4)
  - [Learning Goal-Conditioned Representations for Language Reward Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d46f127a80dc58cbc0732a717285c43a-Paper-Conference.pdf)
- **Integer addition** (behaviors tasks)
  > “we focus on simple arithmetic test problems like addition”
  - [Transformers Can Do Arithmetic with the Right Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/c35986bc1ee29b31c1011481b77fe540-Paper-Conference.pdf)
- **Decision-making** (constructs)
  > Decision-making is a complex task requiring various abilities. Several common ones are evaluated across all games: ... (2) Arithmetic Reasoning...
  - [Competing Large Language Models in Multi-Agent Gaming Environments](https://proceedings.iclr.cc/paper_files/paper/2025/file/a46adbe2f0ca0e16ef8857e188991ad7-Paper-Conference.pdf)
- **Logical reasoning** (constructs)
  > Mathematical reasoning tasks pose significant challenges for large language models (LLMs) because they require precise logical deduction and sequence analysis. (Abstract)
  - [Critical Tokens Matter: Token-Level Contrastive Estimation Enhances LLM’s Reasoning Capability](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lin25j/lin25j.pdf)
- **Utility preservation** (constructs)
  > As a foundation model, f ′ is expected to retain abilities such as text and code generation, question answering, instruction-following, and basic mathematical reasoning.
  - [Tool Unlearning for Tool-Augmented LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25a/cheng25a.pdf)
