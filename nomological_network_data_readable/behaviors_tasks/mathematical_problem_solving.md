# Mathematical problem solving
**Type:** Behavior  
**Referenced in:** 652 papers  
**Also known as:** Math word problem solving, Arithmetic problem solving, Math problem solving, Mathematical Problem Solving, Mathematical question answering, Algebraic question answering, Polynomial root-finding, Solving nonlinear ordinary differential equations, Visual math problem solving, Symbolic expression generation, Problem solving, Mathematical word problem solving, Symbolic equation solving, Visual equation solving, Free-response math problem solving, Mathematical reasoning  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is solving a math problem, often a grade-school or benchmark-style word problem, and returning a correct final numerical or symbolic answer. Many definitions also allow or expect intermediate calculations or chain-of-thought traces before that answer, and some papers describe success as generating equations, symbolic expressions, or full step-by-step derivations. Papers also make this link explicit: several claim causal relationships from Chain of thought to mathematical problem solving, while only isolated papers make similar causal claims from Instruction following or Self-correction.

**Variants.** The prevailing variants are math word problem solving and arithmetic problem solving, with papers covering everyday word problems, arithmetic expressions, algebra, geometry, probability, and competition-style questions. Smaller strands study long-context or low-resource-language settings, tool-using setups where models invoke code or arithmetic tools, and visual settings that require interpreting diagrams, graphs, or equations in images. Other papers carve out more specialized variants, including operations research formulation from text, polynomial root-finding, nonlinear ODE solving, and symbolic versus visual equation solving; in Can Vision-Language Models Solve Visual Math Equations?, one definition contrasts equations 'presented in textual form within images' with cases where the model must 'infer coefficients by counting icons'.

**Space of elicitation and scores.** Across papers, it is measured by 35 instruments, most often GSM8K and MATH, followed by MATH-500, SVAMP, and AIME 2024. These are mostly benchmark datasets or evaluation suites spanning grade-school word problems, competition math, and more specialized arithmetic or algebra tasks, with some broader dialogue-style evaluations that include a math component. Scoring usually turns on correctness of the final answer, though papers also mention solve rate, extracting numerical answers from generated solutions, F1 on GSM8K, and whether generated symbolic expressions are functionally correct.

**What it is taken as evidence of.** Across papers, it is linked to 7 constructs, and the links do not converge on a single construct. The most common links are that mathematical problem solving is related to Reasoning, Mathematical reasoning, Chain-of-thought reasoning, Commonsense reasoning, and Logical reasoning, mostly as related links rather than direct measurement claims. Two additional construct links appear only as causal claims directed toward mathematical problem solving, so papers do not present a single agreed construct that this behavior reflects.

## Sources

**[AlphaMath Almost Zero: Process Supervision without Process](https://proceedings.neurips.cc/paper_files/paper/2024/file/30dfe47a3ccbee68cffa0c19ccb1bc00-Paper-Conference.pdf)**
> The observable task of receiving a mathematical problem as input and producing a final numerical or symbolic answer as output.

**[Should We Really Edit Language Models? On the Evaluation of Edited Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/370fa2e691f57eb319bc263a07dad4a5-Paper-Conference.pdf) (as "Math word problem solving")**
> Solving arithmetic word problems and producing the correct numeric answer.

**[Fractal Patterns May Illuminate the Success of Next-Token Prediction](https://proceedings.neurips.cc/paper_files/paper/2024/file/cd004fa45fc1fe5c0218b7801d98d036-Paper-Conference.pdf) (as "Arithmetic problem solving")**
> Solving numerical word problems or arithmetic questions posed in benchmark format.

**[D-LLM: A Token Adaptive Computing Resource Allocation Strategy for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/03469b1a66e351b18272be23baf3b809-Paper-Conference.pdf) (as "Math problem solving")**
> Solving arithmetic or word problems and producing the numerical answer, often with intermediate calculation steps.

**[Prism: A Framework for Decoupling and Assessing the Capabilities of VLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/cac9e747a1d480c78312226959566cef-Paper-Conference.pdf) (as "Mathematical Problem Solving")**
> The observable task of solving geometric or mathematical problems presented in visual contexts.

**[Dobi-SVD: Differentiable SVD for LLM Compression and Some New Perspectives](https://proceedings.iclr.cc/paper_files/paper/2025/file/218ca0d92e6ed8f9db00621e103dc70c-Paper-Conference.pdf) (as "Mathematical question answering")**
> Solving math word problems or math questions in a benchmark setting.

**[Improving Complex Reasoning with Dynamic Prompt Corruption: A Soft Prompt Optimization Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4006ff54a7bbda74c09bad6f7586f5b-Paper-Conference.pdf) (as "Algebraic question answering")**
> The task of answering multiple-choice questions based on algebraic word problems.

**[HARDMath: A Benchmark Dataset for Challenging Problems in Applied Mathematics](https://proceedings.iclr.cc/paper_files/paper/2025/file/23d64d26abb5a0e9f2014cfcc700f82a-Paper-Conference.pdf) (as "Polynomial root-finding")**
> The task of finding approximate roots for high-order polynomial equations, particularly in different regimes of a small parameter.

**[HARDMath: A Benchmark Dataset for Challenging Problems in Applied Mathematics](https://proceedings.iclr.cc/paper_files/paper/2025/file/23d64d26abb5a0e9f2014cfcc700f82a-Paper-Conference.pdf) (as "Solving nonlinear ordinary differential equations")**
> The task of finding approximate analytical solutions for nonlinear ordinary differential equations (ODEs) in different regimes, such as for small and large values of the independent variable.

**[MAVIS: Mathematical Visual Instruction Tuning with an Automatic Data Engine](https://proceedings.iclr.cc/paper_files/paper/2025/file/db36dcad6baee298a34ffca324b84b09-Paper-Conference.pdf) (as "Visual math problem solving")**
> Solving mathematics questions that require interpreting diagrams or graphs and producing the correct answer.

**[CRANE: Reasoning with constrained LLM generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/banerjee25a/banerjee25a.pdf) (as "Symbolic expression generation")**
> The task of generating a correct symbolic mathematical expression as a solution to a word problem with symbolic variables.

**[MathTutorBench: A Benchmark for Measuring Open-ended Pedagogical Capabilities of LLM Tutors](https://aclanthology.org/2025.emnlp-main.11.pdf) (as "Problem solving")**
> Generating a correct numerical answer to a math word problem using chain-of-thought reasoning.

**[NESTFUL: A Benchmark for Evaluating LLMs on Nested Sequences of API Calls](https://aclanthology.org/2025.emnlp-main.1702.pdf) (as "Mathematical word problem solving")**
> Solving a natural-language math problem by invoking arithmetic or other math tools and returning the correct numeric answer.

**[Can Vision-Language Models Solve Visual Math Equations?](https://aclanthology.org/2025.emnlp-main.547.pdf) (as "Symbolic equation solving")**
> Solving linear equations when the equations are rendered as text in the image.

**[Can Vision-Language Models Solve Visual Math Equations?](https://aclanthology.org/2025.emnlp-main.547.pdf) (as "Visual equation solving")**
> Solving linear equations presented as images with icon-based variables and visually repeated coefficients.

**[WildChat: 1M ChatGPT Interaction Logs in the Wild](https://proceedings.iclr.cc/paper_files/paper/2024/file/9421261e06f1a63a352b068f1ac90609-Paper-Conference.pdf) (as "Mathematical reasoning")**
> The observable solving of mathematical problems requiring logical deduction, calculation, or symbolic manipulation.

## Relationships

### Mathematical problem solving →
- **GSM8K** (measurements) — *measured_by*
  > We evaluate on the popular GSM8K dataset with grade school math questions (Cobbe et al., 2021). (Section 6)
  - [DSPy: Compiling Declarative Language Model Calls into State-of-the-Art Pipelines](https://proceedings.iclr.cc/paper_files/paper/2024/file/f1cf02ce09757f57c3b93c0db83181e0-Paper-Conference.pdf)
- **MATH** (measurements) — *measured_by*
  > We evaluate GPT4-Code using CSV on three datasets: MATH (Hendrycks et al., 2021), GSM8K (Cobbe et al., 2021), and MMLU-Math (Hendrycks et al., 2020).
  - [Solving Challenging Math Word Problems Using GPT-4 Code Interpreter with Code-based Self-Verification](https://proceedings.iclr.cc/paper_files/paper/2024/file/12c45a68e8433b21b91cd47731387fa4-Paper-Conference.pdf)
- **MATH-500** (measurements) — *measured_by*
  > This evaluation includes benchmarks in: ... 3) Specific math domain tasks like MATH500 (Lightman et al., 2023). (Section 4.3)
  - [OpenPRM: Building Open-domain Process-based Reward Models with Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/c919a2b5ec1de69f2629f9119676e336-Paper-Conference.pdf)
- **SVAMP** (measurements) — *measured_by*
  > To test the performance of OccamLlama on more general mathematical problem solving tasks, we evaluate our method and baselines on the following six benchmarks: AddSub [41], GSM8K [42], MultiArith [33], MATH401 [8], Single Eq [43], and SVAMP [44].
  - [OccamLLM: Fast and Exact Language Model Arithmetic in a Single Step](https://proceedings.neurips.cc/paper_files/paper/2024/file/3eceb70f47690051d6769739fbf6294b-Paper-Conference.pdf)
- **AIME 2024** (measurements) — *measured_by*
  > These include MATH (Hendrycks et al., 2021b), GSM8K (Cobbe et al., 2021), GSM-Hard (Gao et al., 2023), AIME-2024 for math domains (Section 4.1)
  - [MAS-GPT: Training LLMs to Build LLM-based Multi-Agent Systems](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ye25g/ye25g.pdf)
- **AQuA-RAT** (measurements) — *measured_by*
  > AQuA (Ling et al., 2017) is designed for algebraic question-answering tasks and includes a variety of multiple-choice math word problems.
  - [Improving Complex Reasoning with Dynamic Prompt Corruption: A Soft Prompt Optimization Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4006ff54a7bbda74c09bad6f7586f5b-Paper-Conference.pdf)
- **ASDiv** (measurements) — *measured_by*
  > ...GSM-Plus [18], MATH, TheoremQA [6], SVAMP [28], and ASDiv [22] for math. (Section 5.2)
  - [Noise Contrastive Alignment of Language Models with Explicit Rewards](https://proceedings.neurips.cc/paper_files/paper/2024/file/d5a58d198afa370a3dff0e1ca4fe1802-Paper-Conference.pdf)
- **TheoremQA** (measurements) — *measured_by*
  > We applied MACM to two datasets, SciBench [16] and TheoremQA [5], which claim their difficulty surpasses the middle school level of the MATH dataset, reaching the Undergraduate Level. (Section 4.3)
  - [MACM: Utilizing a Multi-Agent System for Condition Mining in Solving Complex Mathematical Problems](https://proceedings.neurips.cc/paper_files/paper/2024/file/5fcedec09977357f32e8e0ec8957073b-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > "MT-bench and Vicuna-bench are designed to test the models’ competencies in various complex cognitive tasks, including mathematics, reasoning, complex format handling, and writing through both multi-turn and single-turn dialogues."
  - [Star-Agents: Automatic Data Optimization with LLM Agents for Instruction Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0852b88e96d973bd4e21b673f51621d0-Paper-Conference.pdf)
- **Game of 24** (measurements) — *measured_by*
  > The task is that given four cards drawn from a deck of poker, use basic arithmetic operations to combine the card values to reach 24.
  - [Learning to Search from Demonstration Sequences](https://proceedings.iclr.cc/paper_files/paper/2025/file/cdf80d651420b47da80f789f2631b1b5-Paper-Conference.pdf)
- **MathQA** (measurements) — *measured_by*
  > For mathematic QA tasks (MathQA and GSM8K)... (Section 3.1)
  - [DIVE into MoE: Diversity-Enhanced Reconstruction of Large Language Models from Dense into Mixture-of-Experts](https://aclanthology.org/2025.acl-long.951.pdf)
- **GSM-Plus** (measurements) — *measured_by*
  > ...GSM-Plus [18], MATH, TheoremQA [6], SVAMP [28], and ASDiv [22] for math. (Section 5.2)
  - [Noise Contrastive Alignment of Language Models with Explicit Rewards](https://proceedings.neurips.cc/paper_files/paper/2024/file/d5a58d198afa370a3dff0e1ca4fe1802-Paper-Conference.pdf)
- **InfiniteBench** (measurements) — *measured_by*
  > Table 3: NAMMs evaluation on InfiniteBench. Model/Task name ... Math
  - [An Evolved Universal Transformer Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/da85790fb1cb4f11f431648455c561b5-Paper-Conference.pdf)
- **AMC 2023** (measurements) — *measured_by*
  > (2) Math benchmarks include MATH500 (Lightman et al., 2024), AMC2023, and AIME2024. (Section 4.1)
  - [Search-o1: Agentic Search-Enhanced Large Reasoning Models](https://aclanthology.org/2025.emnlp-main.276.pdf)
- **MMLU-Math** (measurements) — *measured_by*
  > We evaluate GPT4-Code using CSV on three datasets: MATH (Hendrycks et al., 2021), GSM8K (Cobbe et al., 2021), and MMLU-Math (Hendrycks et al., 2020).
  - [Solving Challenging Math Word Problems Using GPT-4 Code Interpreter with Code-based Self-Verification](https://proceedings.iclr.cc/paper_files/paper/2024/file/12c45a68e8433b21b91cd47731387fa4-Paper-Conference.pdf)
- **Math Hard** (measurements) — *measured_by*
  > However, progress remains slower in the Math Hard, where scores are consistently lower. This suggests that while MPO iterations are becoming more robust overall, further optimization is needed for specialized tasks like complex mathematical reasoning. (Section 4.2)
  - [Magnetic Preference Optimization: Achieving Last-iterate Convergence for Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/5833b4daf5b076dd1cdb362b163dff0c-Paper-Conference.pdf)
- **AIME** (measurements) — *measured_by*
  > "Other benchmarks relevant to today’s frontier models include AIME with 15 competition math problems"
  - [Position: Don’t Use the CLT in LLM Evals With Fewer Than a Few Hundred Datapoints](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bowyer25a/bowyer25a.pdf)
- **AddSub** (measurements) — *measured_by*
  > To test the performance of OccamLlama on more general mathematical problem solving tasks, we evaluate our method and baselines on the following six benchmarks: AddSub [41], GSM8K [42], MultiArith [33], MATH401 [8], Single Eq [43], and SVAMP [44].
  - [OccamLLM: Fast and Exact Language Model Arithmetic in a Single Step](https://proceedings.neurips.cc/paper_files/paper/2024/file/3eceb70f47690051d6769739fbf6294b-Paper-Conference.pdf)
- **MultiArith** (measurements) — *measured_by*
  > To test the performance of OccamLlama on more general mathematical problem solving tasks, we evaluate our method and baselines on the following six benchmarks: AddSub [41], GSM8K [42], MultiArith [33], MATH401 [8], Single Eq [43], and SVAMP [44].
  - [OccamLLM: Fast and Exact Language Model Arithmetic in a Single Step](https://proceedings.neurips.cc/paper_files/paper/2024/file/3eceb70f47690051d6769739fbf6294b-Paper-Conference.pdf)
- **SingleEq** (measurements) — *measured_by*
  > To test the performance of OccamLlama on more general mathematical problem solving tasks, we evaluate our method and baselines on the following six benchmarks: AddSub [41], GSM8K [42], MultiArith [33], MATH401 [8], Single Eq [43], and SVAMP [44].
  - [OccamLLM: Fast and Exact Language Model Arithmetic in a Single Step](https://proceedings.neurips.cc/paper_files/paper/2024/file/3eceb70f47690051d6769739fbf6294b-Paper-Conference.pdf)
- **SciBench** (measurements) — *measured_by*
  > We applied MACM to two datasets, SciBench [16] and TheoremQA [5], which claim their difficulty surpasses the middle school level of the MATH dataset, reaching the Undergraduate Level. (Section 4.3)
  - [MACM: Utilizing a Multi-Agent System for Condition Mining in Solving Complex Mathematical Problems](https://proceedings.neurips.cc/paper_files/paper/2024/file/5fcedec09977357f32e8e0ec8957073b-Paper-Conference.pdf)
- **Vicuna-Bench** (measurements) — *measured_by*
  > MT-bench and Vicuna-bench are designed to test the models' competencies in various complex cognitive tasks, including mathematics, reasoning, complex format handling, and writing
  - [Star-Agents: Automatic Data Optimization with LLM Agents for Instruction Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0852b88e96d973bd4e21b673f51621d0-Paper-Conference.pdf)
- **MAWPS** (measurements) — *measured_by*
  > Second, GSM8K [9], MaWPS [33] are about math problem solving. (Section 4.1)
  - [D-LLM: A Token Adaptive Computing Resource Allocation Strategy for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/03469b1a66e351b18272be23baf3b809-Paper-Conference.pdf)
- **Functional MATH** (measurements) — *measured_by*
  > For math, we train and evaluate on Hendrycks MATH benchmark (Hendrycks et al., 2021), and additionally evaluate on two held-out math benchmarks: Functional MATH (Srivastava et al., 2024) and MathOdyssey (Fang et al., 2024).
  - [Inference-Aware Fine-Tuning for Best-of-N Sampling in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c40bed606c51c8e827c1ba75aa2da054-Paper-Conference.pdf)
- **MathOdyssey** (measurements) — *measured_by*
  > For math, we train and evaluate on Hendrycks MATH benchmark (Hendrycks et al., 2021), and additionally evaluate on two held-out math benchmarks: Functional MATH (Srivastava et al., 2024) and MathOdyssey (Fang et al., 2024).
  - [Inference-Aware Fine-Tuning for Best-of-N Sampling in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c40bed606c51c8e827c1ba75aa2da054-Paper-Conference.pdf)
- **Chatbot Arena** (measurements) — *measured_by*
  > "The most popular one is the Chatbot Arena ... which contains over one million user queries and evaluates models in various tasks such as code, math, and multilingual understanding"
  - [Polyrating: A Cost-Effective and Bias-Aware Rating System for LLM Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/d06537b4b38ccf008a54559d2c56fa23-Paper-Conference.pdf)
- **MGSM** (measurements) — *measured_by*
  > Multilingual math word problems: We use MGSM (Shi et al., 2022) that translates GSM8K (Cobbe et al., 2021) to 10 languages. (Section 4.1)
  - [M2Lingual: Enhancing Multilingual, Multi-Turn Instruction Alignment in Large Language Models](https://aclanthology.org/2025.naacl-long.489.pdf)
- **GSM-Hard** (measurements) — *measured_by*
  > These include MATH (Hendrycks et al., 2021b), GSM8K (Cobbe et al., 2021), GSM-Hard (Gao et al., 2023), AIME-2024 for math domains (Section 4.1)
  - [MAS-GPT: Training LLMs to Build LLM-based Multi-Agent Systems](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ye25g/ye25g.pdf)
- **GSM-Symbolic** (measurements) — *measured_by*
  > We evaluate CRANE on GSM-Symbolic (Mirzadeh et al., 2024), a dataset consisting of math word problems designed to assess LLMs’ mathematical reasoning skills... the LLMs are tasked with generating correct symbolic expression solutions.
  - [CRANE: Reasoning with constrained LLM generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/banerjee25a/banerjee25a.pdf)
- **Chain of thought** (behaviors tasks) — *causes*
  > we task the LIMS method with enabling a model to behave with chain-of-thought generation when a math problem is sensed, following “math(x) →chain of thought(x)”. (Section 4.1)
  - [The Logical Implication Steering Method for Conditional Interventions on Transformer Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kalajdzievski25a/kalajdzievski25a.pdf)
- **MATH10K** (measurements) — *measured_by*
  > "For math problem-solving, we fine-tune these models on the Math10K dataset"
  - [Sketch to Adapt: Fine-Tunable Sketches for Efficient LLM Adaptation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bs/zhang25bs.pdf)
- **Minerva Math** (measurements) — *measured_by*
  > Performance is evaluated on MATH500 (Lightman et al., 2023), Minerva Math (Lewkowycz et al., 2022), OlympiadBench (He et al., 2024), College Math (Tang et al., 2024) 3, AIME24, and AMC23 (Section 4.1).
  - [R-PRM: Reasoning-Driven Process Reward Modeling](https://aclanthology.org/2025.emnlp-main.679.pdf)
- **OlympiadBench** (measurements) — *measured_by*
  > Performance is evaluated on MATH500 (Lightman et al., 2023), Minerva Math (Lewkowycz et al., 2022), OlympiadBench (He et al., 2024), College Math (Tang et al., 2024) 3, AIME24, and AMC23 (Section 4.1).
  - [R-PRM: Reasoning-Driven Process Reward Modeling](https://aclanthology.org/2025.emnlp-main.679.pdf)
- **CollegeMath** (measurements) — *measured_by*
  > Performance is evaluated on MATH500 (Lightman et al., 2023), Minerva Math (Lewkowycz et al., 2022), OlympiadBench (He et al., 2024), College Math (Tang et al., 2024) 3, AIME24, and AMC23 (Section 4.1).
  - [R-PRM: Reasoning-Driven Process Reward Modeling](https://aclanthology.org/2025.emnlp-main.679.pdf)

### → Mathematical problem solving
- **Chain of thought** (behaviors tasks) — *causes*
  > The seminal work of chain-of-thought (CoT) (Wei et al., 2022) is an excellent example of how enriching reasoning details, by decomposing reasoning traces into steps, improves its problem-solving capability (Section 1).
  - [Think Smarter not Harder: Adaptive Reasoning with Inference Aware Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25s/yu25s.pdf)
- **Self-correction** (behaviors tasks) — *causes*
  > GPT4-Code’s robust performance in solving math problems derives not only from its ability to generate accurate step-by-step code, but also from its self-debugging mechanism.
  - [Solving Challenging Math Word Problems Using GPT-4 Code Interpreter with Code-based Self-Verification](https://proceedings.iclr.cc/paper_files/paper/2024/file/12c45a68e8433b21b91cd47731387fa4-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks) — *causes*
  > math and code problems are formatted as instructions, enhancing instruction following capabilities enables LLMs to better address these tasks. (Section 4)
  - [Data Mixing Optimization for Supervised Fine-Tuning of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25bh/li25bh.pdf)
- **Symbolic reasoning** (constructs) — *causes*
  > Finally, as equation complexity increases, symbolic reasoning itself becomes a limiting factor.
  - [Can Vision-Language Models Solve Visual Math Equations?](https://aclanthology.org/2025.emnlp-main.547.pdf)

### Associated with
- **Reasoning** (constructs)
  > pipelines that reason about math word problems (Abstract)
  - [DSPy: Compiling Declarative Language Model Calls into State-of-the-Art Pipelines](https://proceedings.iclr.cc/paper_files/paper/2024/file/f1cf02ce09757f57c3b93c0db83181e0-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs)
  > In the mathematical reasoning task, the weak models teach the strong model to respond to mathematical word problems. (Section 5)
  - [A transfer learning framework for weak to strong generalization](https://proceedings.iclr.cc/paper_files/paper/2025/file/fa47ffc7b2033fd32d8b8734686f6ff4-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs)
  > However, their performance in multi-step reasoning tasks, such as solving complex mathematical or coding problems, remains notably constrained (Section 1).
  - [Step-by-Step Reasoning for Math Problems  via Twisted Sequential Monte Carlo](https://proceedings.iclr.cc/paper_files/paper/2025/file/a4d92f656cc99f60fe1bfc98386aee34-Paper-Conference.pdf)
- **Logical reasoning** (constructs)
  > math tasks challenge logical reasoning;
  - [GuideBench: Benchmarking Domain-Oriented Guideline Following for LLM Agents](https://aclanthology.org/2025.acl-long.557.pdf)
- **State tracking ability** (constructs)
  > models (especially DeltaNet) with extended eigenvalue range will perform better on language modeling tasks linked to state-tracking such as coding or mathematics
  - [Unlocking State-Tracking in Linear RNNs Through Negative Eigenvalues](https://proceedings.iclr.cc/paper_files/paper/2025/file/5a0ce3abb720b740419e193c87afd080-Paper-Conference.pdf)
- **Prompt engineering** (behaviors tasks)
  > We apply two prompting strategies: direct zero-shot prompting (Direct) and two-step chain-of-thought (CoT) prompting.
  - [Can Vision-Language Models Solve Visual Math Equations?](https://aclanthology.org/2025.emnlp-main.547.pdf)
