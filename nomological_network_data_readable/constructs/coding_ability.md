# Coding ability
**Type:** Construct  
**Referenced in:** 48 papers  
**Also known as:** Coding capability, Coding skill, Code programming, Programming capability, Coding proficiency, Coding capabilities, Coding skills, Programming ability, Programming skills, Python coding skill, Visual problem-solving, Programming  

## State of the Field

**Definition agreement:** Consensus. Most papers define coding ability as a model's latent proficiency at understanding and especially generating correct, functional code for programming tasks, sometimes extending this same core capability to completion, debugging, repair, review, or multiple languages. A few papers broaden it to benchmark competence or visually grounded software issue resolution, but these are minor variants or outliers rather than a substantial competing definition.

**Space of definitions.** Across the surveyed work, the prevailing usage treats coding ability as a latent model capability to generate correct, functional code for programming tasks, often phrased as producing syntactically correct and semantically meaningful code or as coding capability across tasks and languages. Many definitions also include understanding code, and some extend the scope to debugging, repair, completion, manipulation, execution, documentation, or review. Smaller lines of work narrow it to Python code generation, describe it as competence on programming-oriented benchmarks that should be preserved after fine-tuning, treat programming capability as a principal component of benchmark performance, or broaden the scope to visual problem-solving for software issues.

**Space of facets.** Papers use several near-synonymous labels, including coding ability, coding capability, coding skill, coding proficiency, programming ability, programming capability, programming skills, code programming, and simply coding. Recurring task components are code generation, understanding, debugging, repair, completion, documentation, and review, and several papers use coding as one benchmark category alongside reasoning or mathematical ability. Some papers further distinguish function-level code generation from software-level and scientific coding capabilities, place code programming as one thought-template category, or contrast basic coding proficiency with more advanced repository-management skills.

**Space of measurement.** In the linked measurements, coding ability is tied to 8 instruments and 2 behavioral indicators. The linked instruments are all benchmarks, most often HumanEval and MBPP, and also EvalPlus, HumanEval+, and LiveBench, alongside additional benchmark instruments; the quoted uses span function-level code generation, Python programming problems, recent competition-style coding questions, targeted coding subsets, and coding subtasks. Of the behavioral indicators, code generation is used directly as a measurement target, for example by assessing whether a model can parse a coding question and write a correct answer, while self-correction appears in causal claims rather than as a direct instrument. These operationalizations mostly match definitions centered on producing correct code, but they less directly cover definitions that emphasize understanding, debugging, repair, repository interaction, or visual software issues.

**Links.** One paper records causal links in both directions between coding ability and self-correction. Papers also claim causal relationships from coding ability to mathematical reasoning, from mathematical reasoning to coding ability, and from reasoning and long-context understanding to coding ability; separate papers report correlations with mathematical reasoning, reasoning, and computer science knowledge, and related links to code generation and agency.

## Sources

**[GenSim: Generating Robotic Simulation Tasks via Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/143ea4a156ef64f32d4d905206cf32e1-Paper-Conference.pdf)**
> The latent capability of a large language model to generate syntactically correct and semantically meaningful code to implement a specified task.

**[AgentVerse: Facilitating Multi-Agent Collaboration and Exploring Emergent Behaviors](https://proceedings.iclr.cc/paper_files/paper/2024/file/578e65cdee35d00c708d4c64bce32971-Paper-Conference.pdf) (as "Coding capability")**
> The general ability of an LLM to produce correct code across programming tasks and languages.

**[AlpaGasus: Training a Better Alpaca with Fewer Data](https://proceedings.iclr.cc/paper_files/paper/2024/file/9543942c237ded1b39b1fd37259ff88e-Paper-Conference.pdf) (as "Coding skill")**
> The model's proficiency in generating, understanding, and debugging computer code.

**[Reward-Shifted Speculative Sampling Is An Efficient Test-Time Weak-to-Strong Aligner](https://aclanthology.org/2025.emnlp-main.578.pdf) (as "Coding")**
> The ability to generate or manipulate code in response to programming-related prompts.

**[Buffer of Thoughts: Thought-Augmented Reasoning with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cde328b7bf6358f5ebb91fe9c539745e-Paper-Conference.pdf) (as "Code programming")**
> The latent ability to write, understand, and execute code to solve computational problems.

**[Observational Scaling Laws and the Predictability of Langauge Model Performance](https://proceedings.neurips.cc/paper_files/paper/2024/file/1cded4f97cf5f01a284c574110b7e3b9-Paper-Conference.pdf) (as "Programming capability")**
> A latent ability specifically related to code understanding and generation, identified as the third principal component of benchmark performance.

**[PiSSA: Principal Singular Values and Singular Vectors Adaptation of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/db36f4d603cc9e3a2a5e10b93e6428f2-Paper-Conference.pdf) (as "Coding proficiency")**
> The latent ability to generate, understand, and repair code across various programming tasks.

**[StringLLM: Understanding the String Processing Capability of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e4013f157410cb7612701b318fb4ac2-Paper-Conference.pdf) (as "Coding capabilities")**
> The model's competence on programming-oriented tasks and benchmarks, treated here as a capability that should be preserved after fine-tuning.

**[CS-Bench: A Comprehensive Benchmark for Large Language Models towards Computer Science Mastery](https://proceedings.iclr.cc/paper_files/paper/2025/file/89c61fce5a8b73871d1c4073f486b134-Paper-Conference.pdf) (as "Programming ability")**
> The model's capability in understanding and generating code, which is shown to be highly correlated with its performance in computer science.

**[MoS: Unleashing Parameter Efficiency of Low-Rank Adaptation with Mixture of Shards](https://proceedings.iclr.cc/paper_files/paper/2025/file/e574db41163e700545ff4114f96b3d7a-Paper-Conference.pdf) (as "Coding skills")**
> The model's ability to understand and generate functional computer code.

**[Scaling Large Language Model-based Multi-Agent Collaboration](https://proceedings.iclr.cc/paper_files/paper/2025/file/66a026c0d17040889b50f0dfa650e5e0-Paper-Conference.pdf) (as "Programming skills")**
> The ability to correctly write and structure functional code to solve a given programming problem.

**[Effective Skill Unlearning through Intervention and Abstention](https://aclanthology.org/2025.naacl-long.322.pdf) (as "Python coding skill")**
> The latent ability to produce correct Python code for programming problems.

**[SWE-bench Multimodal: Do AI Systems Generalize to Visual Software Domains?](https://proceedings.iclr.cc/paper_files/paper/2025/file/07d6332ae36730707fddddba736d7b6c-Paper-Conference.pdf) (as "Visual problem-solving")**
> The ability of an AI system to understand and resolve software issues that require interpreting visual information, such as screenshots, diagrams, or user interface layouts.

## Relationships

### Coding ability →
- **HumanEval** (measurements) — *measured_by*
  > In this ection, we first assess the agents’ coding capabilities using the Humaneval code completion dataset. (Section 3.2)
  - [AgentVerse: Facilitating Multi-Agent Collaboration and Exploring Emergent Behaviors](https://proceedings.iclr.cc/paper_files/paper/2024/file/578e65cdee35d00c708d4c64bce32971-Paper-Conference.pdf)
- **MBPP** (measurements) — *measured_by*
  > We assess all models on three categories of benchmarks: ... (iii) Coding ability on MBPP [6] and HumanEval [9] (Section 4.1).
  - [$\texttt{Model-GLUE}$: Democratized LLM Scaling for A Large Model Zoo in the Wild](https://proceedings.neurips.cc/paper_files/paper/2024/file/180a476f22a52b8ef14f42b2b927afcc-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Mathematical reasoning** (constructs) — *causes*
  > Various studies (Azerbayev et al., 2024; Shao et al., 2024) have shown that training on code enhances the mathematical reasoning abilities of large language models (LLMs). (Section 1)
  - [MathCoder2: Better Math Reasoning from Continued Pretraining on Model-translated Mathematical Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/bea94fe9c5573e74294657f692069d89-Paper-Conference.pdf)
- **Prompt engineering** (behaviors tasks) — *causes*
  > scaling models in a way that enhances general knowledge (MMLU) and code (HumanEval) leads to greater gaps between CoT and the baseline (Sec. 4.3)
  - [Observational Scaling Laws and the Predictability of Langauge Model Performance](https://proceedings.neurips.cc/paper_files/paper/2024/file/1cded4f97cf5f01a284c574110b7e3b9-Paper-Conference.pdf)
- **Vicuna-Bench** (measurements) — *measured_by*
  > Figure 4 illustrates the Llama-2-7B-star_instruct's performance enhancements across nine metrics, with notable substantial improvements in math, coding and fermi problem-solving... Figure 4: Radar plot of detailed scores for Llama-2-7B-star_instrcut against the major baseline on different subtasks of (a) Vicuna-Bench and (b) MT-Bench.
  - [Star-Agents: Automatic Data Optimization with LLM Agents for Instruction Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0852b88e96d973bd4e21b673f51621d0-Paper-Conference.pdf)
- **LiveBench** (measurements) — *measured_by*
  > LiveBench... contains a wide variety of challenging tasks, spanning math, coding, reasoning, language, instruction following, and data analysis.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **Computer science knowledge** (constructs) — *correlates*
  > we consider this evidence suggests a strong correlation between CS proficiency and skills in Math and Code. (Section 3.5)
  - [CS-Bench: A Comprehensive Benchmark for Large Language Models towards Computer Science Mastery](https://proceedings.iclr.cc/paper_files/paper/2025/file/89c61fce5a8b73871d1c4073f486b134-Paper-Conference.pdf)
- **HumanEval+** (measurements) — *measured_by*
  > Table 8: Performance of various LLMs on HumanEval, HumanEval+, MBPP, and MBPP+ benchmarks... The fine-tuned LLMs maintain their coding capabilities.
  - [StringLLM: Understanding the String Processing Capability of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e4013f157410cb7612701b318fb4ac2-Paper-Conference.pdf)
- **LiveCodeBench** (measurements) — *measured_by*
  > “Coding: code generation questions from recent Leetcode and AtCoder questions (via LiveCodeBench (Jain et al., 2024))”
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **RewardBench** (measurements) — *measured_by*
  > RewardBench contains subsets that test RMs in targeted domains, including their coding ability, mathematical ability, and harmlessness. (Section 3.3)
  - [reWordBench: Benchmarking and Improving the Robustness of Reward Models with Transformed Inputs](https://aclanthology.org/2025.emnlp-main.167.pdf)
- **MBXP** (measurements) — *measured_by*
  > The final metrics were derived from the average HumanEval and MBXP performances across all five languages. (Section 4.3.3)
  - [The Rise and Down of Babel Tower: Investigating the Evolution Process of Multilingual Code Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/9aa4e5caaf6d62767787500ee487c7fb-Paper-Conference.pdf)

### → Coding ability
- **Reasoning** (constructs) — *causes*
  > This limitation stems from the restricted reasoning abilities of single LLMs... they struggle to tackle more complex coding tasks.
  - [Self-Evolving Multi-Agent Collaboration Networks for Software Development](https://proceedings.iclr.cc/paper_files/paper/2025/file/39af4f2f9399122a14ccf95e2d2e7122-Paper-Conference.pdf)
- **Self-correction** (behaviors tasks) — *causes*
  > teaching large language models to perform SELF-DEBUGGING without human guidance is another promising path to enhance coding capability and reduce the sampling cost required to accomplish challenging tasks.
  - [Teaching Large Language Models to Self-Debug](https://proceedings.iclr.cc/paper_files/paper/2024/file/2460396f2d0d421885997dd1612ac56b-Paper-Conference.pdf)
- **Long-context understanding** (constructs) — *causes*
  > This limitation stems from the restricted reasoning abilities of single LLMs and their lack of capacity for long-context understanding... they struggle to tackle more complex coding tasks.
  - [Self-Evolving Multi-Agent Collaboration Networks for Software Development](https://proceedings.iclr.cc/paper_files/paper/2025/file/39af4f2f9399122a14ccf95e2d2e7122-Paper-Conference.pdf)

### Associated with
- **Code generation** (behaviors tasks)
  > For code generation, Luo et al. (2023b) adapt the evol-instruct method to the coding domain, resulting in the WIZARDCODER model, which demonstrates superior coding abilities compared to generally trained LLMs. (Section 1)
  - [Delta-CoMe: Training-Free Delta-Compression with Mixed-Precision for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/37664246a1e07e212ddacea6e5a523f2-Paper-Conference.pdf)
- **Agency** (constructs)
  > We observe that the ﬁtted weights assign signiﬁcant importance to programming capabilities (HumanEval) on both benchmarks, underscoring its signiﬁcance in deﬁning the agentic capabilities of LMs. (Sec. 4.2)
  - [Observational Scaling Laws and the Predictability of Langauge Model Performance](https://proceedings.neurips.cc/paper_files/paper/2024/file/1cded4f97cf5f01a284c574110b7e3b9-Paper-Conference.pdf)
