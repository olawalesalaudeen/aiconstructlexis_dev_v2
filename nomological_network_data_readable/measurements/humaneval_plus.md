# HumanEval+
**Type:** Measurement  
**Referenced in:** 37 papers  
**Also known as:** HumanEvalPlus, HumanEval Plus, Humaneval+  

## State of the Field

**What it is.** Across definitions, HumanEval+ is most commonly treated as an extended or improved version of HumanEval for code generation, with stronger, more comprehensive unit tests or test cases for more rigorous functional-correctness evaluation. Papers variously describe its contents as handwritten Python programming questions with ground-truth unit tests, or as function-level problems with docstrings, code headers, and input-output examples; one paper also describes it as 164 hand-crafted programming problems with function signatures, docstrings, and unit tests. A recurring description is that the extension substantially enlarges testing, with one paper stating that it scales the number of test cases by 80×.

**What it is claimed to measure.** Papers link HumanEval+ to two behavioral indicators and two constructs. The prevailing usage is to measure Code generation, with some papers also using it for Coding; at the construct level, papers link it most often to Coding ability, with Factuality also appearing. Across these links, the clearest convergence is on evaluating code generation capabilities and functionally correct code, and some studies report pass@1 on the benchmark.

**Space of uses.** In use, papers usually position HumanEval+ as a standard code-generation benchmark or test set. It is often paired with MBPP+, and also appears alongside LiveCodeBench, APPS, and CoderEval in broader benchmark suites; one paper uses it to check whether models fine-tuned for code editing retain code generation abilities. Papers connect it to one other measurement instrument, EvalPlus, and one study states that evaluation on HumanEval+ is conducted with EvalPlus.

## Sources

**[Beyond Sequences: Two-dimensional Representation and Dependency Encoding for Code Generation](https://aclanthology.org/2025.acl-long.308.pdf) (as "HumanEvalPlus")**
> An enhanced version of the HumanEval benchmark that includes more comprehensive and rigorous unit tests to better assess the functional correctness of generated code.

**[Dynamic Scaling of Unit Tests for Code Reward Modeling](https://aclanthology.org/2025.acl-long.343.pdf) (as "HumanEval Plus")**
> A benchmark for evaluating code generation, derived from HumanEval, consisting of handwritten Python programming questions with comprehensive, ground-truth unit tests.

**[How efficient is LLM-generated code? A rigorous & high-standard benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/06694da057cb15fef11542270a592627-Paper-Conference.pdf)**
> An extension of the HumanEval benchmark that provides stronger test cases to more rigorously evaluate the functional correctness of generated code.

**[RaSA: Rank-Sharing Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4fd162d3e2d015233486a2e313828a7-Paper-Conference.pdf) (as "Humaneval+")**
> A benchmark for evaluating code generation, which extends the original Humaneval benchmark by significantly increasing the number of test cases.

## Relationships

### → HumanEval+
- **Code generation** (behaviors tasks) — *measured_by*
  > HumanEval [8] and MBPP [3] are the two most widely-used benchmarks for function-level code generation. We use their test augmented versions, i.e., HumanEval+ and MBPP+, with 80×/35× more test cases for rigorous evaluation [38]. (Section 3.1)
  - [SelfCodeAlign: Self-Alignment for Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/72da102da91a8042a0b2aa968429a9f9-Paper-Conference.pdf)
- **Coding** (behaviors tasks) — *measured_by*
  > We evaluate models on 11 different benchmarks, covering skills such as ... coding (HumanEval+ [6, 32], MBPP+ [2, 32]) (Section 2.2).
  - [Unpacking DPO and PPO: Disentangling Best Practices for Learning from Preference Feedback](https://proceedings.neurips.cc/paper_files/paper/2024/file/404df2480b6eef0486a1679e371894b0-Paper-Conference.pdf)
- **Coding ability** (constructs) — *measured_by*
  > Table 8: Performance of various LLMs on HumanEval, HumanEval+, MBPP, and MBPP+ benchmarks... The fine-tuned LLMs maintain their coding capabilities.
  - [StringLLM: Understanding the String Processing Capability of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e4013f157410cb7612701b318fb4ac2-Paper-Conference.pdf)
- **Algorithmic reasoning** (constructs) — *measured_by*
  > Our experiments demonstrate that RaLU significantly outperforms existing baselines in mathematical reasoning (GSM8K, MATH) and algorithmic reasoning (HumanEval+, MBPP+), underscoring its potential to advance LLM reasoning and programming by offering enhanced accuracy and interpretability. (Abstract)
  - [Reasoning-as-Logic-Units: Scaling Test-Time Reasoning in Large Language Models Through Logic Unit Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25df/li25df.pdf)
- **Functional correctness** (constructs) — *measured_by*
  > As shown in Table 3, we observe that almost all LLMs achieve better efficiency and higher correctness after being fine-tuned with . Take HumanEvalPlus as an example... (Section 4.1)
  - [EffiCoder: Enhancing Code Generation in Large Language Models through Efficiency-Aware Fine-tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25as/huang25as.pdf)

### Associated with
- **EvalPlus** (measurements)
  > “The evaluation of HumanEval+ is conducted with EvalPlus (Liu et al., 2023a)”
  - [Ladder-Residual: Parallelism-Aware Architecture for Accelerating Large Model Inference with Communication Overlapping](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bg/zhang25bg.pdf)
