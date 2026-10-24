# EvalPlus
**Type:** Measurement  
**Referenced in:** 39 papers  
**Also known as:** Evalplus, MBPP+  

## State of the Field

**What it is.** Across the papers, the prevailing description treats EvalPlus as an augmented or upgraded version of HumanEval and MBPP, with HumanEval+ and MBPP+ adding many more test cases for more rigorous code-generation evaluation. One paper states that HumanEval+ has 'an average of 774.8 test cases per problem,' while MBPP+ expands test cases 'by over 35 times'; another says the suite reports both base scores on HumanEval and MBPP and plus scores on HumanEval+ and MBPP+. A smaller line of description frames it as an evaluation framework, or specifically as the test set used to augment HumanEval for more comprehensive functional-correctness testing, particularly for Python.

**What it is claimed to measure.** Papers use EvalPlus to measure 3 constructs and 4 behavioral indicators. The prevailing usage is code generation, often via its plus variants for function-level evaluation; other papers use it for three other behavioral indicators and three constructs, including code debugging, vulnerability identification, and inductive reasoning, with one paper explicitly saying that the abundance of test cases allows MBPP+ to serve as an inductive reasoning dataset. Overall, the reported measurement claims are spread across several targets rather than centered on a single construct.

**Space of uses.** Papers link it to 2 instruments, HumanEval and HumanEval+. Most commonly, they position it as the test-augmented suite around HumanEval and MBPP; one paper explicitly calls it 'an improved version of HumanEval,' and another describes HumanEval+ as being evaluated with EvalPlus. In broader benchmarking, one paper pairs EvalPlus with LiveCodeBench-Lite, and another uses the EvalPlus-created test set to evaluate a Python benchmark that extends HumanEval for functional correctness.

## Sources

**[$\textit{Trans-LoRA}$: towards data-free Transferable Parameter Efficient Finetuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/708fdc7911f11585ee7161518e509ae6-Paper-Conference.pdf) (as "Evalplus")**
> An evaluation framework used for rigorous assessment of code generation models, particularly for Python.

**[Tree-of-Evolution: Tree-Structured Instruction Evolution for Code Generation in Large Language Models](https://aclanthology.org/2025.acl-long.14.pdf)**
> An augmented version of the HumanEval and MBPP benchmarks that significantly increases the number of test cases per problem to provide a more rigorous evaluation.

**[Planning in Natural Language Improves LLM Search for Code Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/071a637d41ea290ac4360818a8323f33-Paper-Conference.pdf) (as "MBPP+")**
> An extended version of the Mostly Basic Python Problems (MBPP) benchmark with additional test cases to improve evaluation robustness.

## Relationships

### → EvalPlus
- **Code generation** (behaviors tasks) — *measured_by*
  > HumanEval [8] and MBPP [3] are the two most widely-used benchmarks for function-level code generation. We use their test augmented versions, i.e., HumanEval+ and MBPP+, with 80×/35× more test cases for rigorous evaluation [38]. (Section 3.1)
  - [SelfCodeAlign: Self-Alignment for Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/72da102da91a8042a0b2aa968429a9f9-Paper-Conference.pdf)
- **Coding** (behaviors tasks) — *measured_by*
  > We evaluate models on 11 different benchmarks, covering skills such as ... coding (HumanEval+ [6, 32], MBPP+ [2, 32]) (Section 2.2).
  - [Unpacking DPO and PPO: Disentangling Best Practices for Learning from Preference Feedback](https://proceedings.neurips.cc/paper_files/paper/2024/file/404df2480b6eef0486a1679e371894b0-Paper-Conference.pdf)
- **Code debugging** (behaviors tasks) — *measured_by*
  > We evaluate their static debug and self-refine capabilities on EvalPlus with five iterations.
  - [SemCoder: Training Code Language Models with Comprehensive Semantics Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/6efcc7fd8efeee29a050a79c843c90e0-Paper-Conference.pdf)
- **Self-correction ability** (constructs) — *measured_by*
  > We evaluate their static debug and self-refine capabilities on EvalPlus with five iterations.
  - [SemCoder: Training Code Language Models with Comprehensive Semantics Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/6efcc7fd8efeee29a050a79c843c90e0-Paper-Conference.pdf)
- **Inductive reasoning** (constructs) — *measured_by*
  > The abundance of test cases avails utilizing MBPP+ as an inductive reasoning dataset.
  - [Generating Diverse Hypotheses for Inductive Reasoning](https://aclanthology.org/2025.naacl-long.429.pdf)

### Associated with
- **HumanEval** (measurements)
  > Finally, we conduct a detailed evaluation (Sec. 3) against a range of state-of-the-art models known for their strong performance on the EvalPlus [48] benchmark (an improved version of HumanEval). (Introduction)
  - [IaC-Eval: A Code Generation Benchmark for Cloud Infrastructure-as-Code Programs](https://proceedings.neurips.cc/paper_files/paper/2024/file/f26b29298ae8acd94bd7e839688e329b-Paper-Datasets_and_Benchmarks_Track.pdf)
- **HumanEval+** (measurements)
  > “The evaluation of HumanEval+ is conducted with EvalPlus (Liu et al., 2023a)”
  - [Ladder-Residual: Parallelism-Aware Architecture for Accelerating Large Model Inference with Communication Overlapping](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bg/zhang25bg.pdf)
