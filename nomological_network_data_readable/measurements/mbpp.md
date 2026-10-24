# MBPP
**Type:** Measurement  
**Referenced in:** 181 papers  
**Also known as:** MBPP(+), MBPP-pro  

## State of the Field

**What it is.** Across the surveyed work, MBPP is most commonly described as a Python code-generation benchmark of short, entry-level or beginner-level problems, where a model produces code from a natural language description, textual context, or docstring and the result is checked with automated tests or unit tests. Some papers describe each item as including a task description plus reference code or a code solution, while papers variously report around 1,000 tasks, 974 problems with about three test cases each, 500 test problems, 427 tasks, 399 held-out problems, 378 problems, and sanitized subsets of 257 or 400 problems. A smaller set of papers names variants such as MBPP+, MBPP-pro, and EvalPlus versions.

**What it is claimed to measure.** Papers link MBPP to 10 constructs and 4 behavioral indicators. The prevailing use is to measure code generation and coding ability, often framed as generating short or functionally correct Python code from natural language; one paper states, "Given a textual context, the model is prompted to generate the corresponding code snippet." Smaller lines of work use it for reasoning, generalization, and algorithmic reasoning, so the recorded claims spread across several constructs even though the dominant framing remains coding-focused.

**Space of uses.** Most papers position MBPP as a standard coding benchmark, commonly alongside HumanEval and, less often, HumanEval+, CoNaLa, GSM8K, or MATH. It appears in zero-shot, 3-shot, and other few-shot setups, with pass@1 or pass@k reporting recurring in the snippets. A smaller line of work repurposes it for multi-turn interaction, open-ended generation, or code completion, and a few papers use it as a calibration set or as an out-of-distribution or generalization check.

**Concerns raised.** When papers raise concerns, they concern evaluation hygiene. Several switch to sanitized or manually verified subsets, including a 257-problem test split used "for more precise evaluations" and a sanitized 400-problem version, and one paper reports filtering out files with docstrings or solutions from MBPP.

## Sources

**[$\mathcal{B}$-Coder: Value-Based Deep Reinforcement Learning for Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/7e9c2053258b1bdd32ff2654802cd594-Paper-Conference.pdf)**
> MBPP is a programming benchmark used here to evaluate text-to-code generation from a textual context.

**[Training Language Models on Synthetic Edit Sequences Improves Code Synthesis](https://proceedings.iclr.cc/paper_files/paper/2025/file/e43f900f571de6c96a70d5724a0fb565-Paper-Conference.pdf) (as "MBPP(+)")**
> The Mostly Basic Python Problems (MBPP) benchmark, used to evaluate a model's ability to synthesize short Python programs from natural language descriptions.

**[Transformer-Squared: Self-adaptive LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/244da015b91e64f2d9362703fa2a902b-Paper-Conference.pdf) (as "MBPP-pro")**
> A benchmark dataset for evaluating code generation, consisting of programming problems described in natural language.

## Relationships

### → MBPP
- **Code generation** (behaviors tasks) — *measured_by*
  > Text-to-Code (T2C): Given a textual context, the model is prompted to generate the corresponding code snippet. ... We perform 3-shot inference on the MBPP dataset (Austin et al., 2021) and report P@1. (Section 4.3)
  - [LLM Augmented LLMs: Expanding Capabilities through Composition](https://proceedings.iclr.cc/paper_files/paper/2024/file/008a16ead32f932b711788c276890456-Paper-Conference.pdf)
- **Coding ability** (constructs) — *measured_by*
  > We assess all models on three categories of benchmarks: ... (iii) Coding ability on MBPP [6] and HumanEval [9] (Section 4.1).
  - [$\texttt{Model-GLUE}$: Democratized LLM Scaling for A Large Model Zoo in the Wild](https://proceedings.neurips.cc/paper_files/paper/2024/file/180a476f22a52b8ef14f42b2b927afcc-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We select 24 datasets from MMLU (Hendrycks et al., 2021), Big-Bench-Hard (Suzgun et al., 2022), and MBPP (Austin et al., 2021) to evaluate the knowledge and reasoning abilities of LLMs in diverse domains. (p. 3)
  - [Bias Runs Deep: Implicit Reasoning Biases in Persona-Assigned LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/5e1a87dbb7e954b8d9d6c91f6db771eb-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > “We also evaluate the trained router on three out-of-distribution (OOD) tasks: (ii) MBPP [1], which is a code benchmark”
  - [RouterDC: Query-Based Router by Dual Contrastive Learning for Assembling Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/7a641b8ec86162fc875fb9f6456a542f-Paper-Conference.pdf)
- **Functional correctness** (constructs) — *measured_by*
  > Both HumanEval and MBPP harness the metric Pass to measure the Code LLMs’ functional correctness, where a task is considered solved if the given solution passes all test cases, and the total fraction of solved tasks is reported as P ass = Nsolved/Ntotal [25]. (Section 4.2)
  - [Mercury: A Code Efficiency Benchmark for Code Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/1df1df43b58845650b8dada00fca9772-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Code completion** (behaviors tasks) — *measured_by*
  > "a code-generation task that requires the model to complete method bodies from MBPP benchmark [1]"
  - [Prompt Tuning Strikes Back: Customizing Foundation Models with Low-Rank Prompt Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/548551c07a68c8f0a87d67c6167cedb1-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > For the general domain evaluation benchmarks, we select MATH, MBPP, MMLU, and CEVAL from the aforementioned experimental settings. (Section 3.3).
  - [Mix-CPT: A Domain Adaptation Framework via Decoupling Knowledge Learning and Format Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc721384c26c0bdff3ec31a7de31d8d5-Paper-Conference.pdf)
- **Logical reasoning** (constructs) — *measured_by*
  > Notably, Figure 8 shows significant gains in categories like MBPP (programming) and PIQA (physical commonsense reasoning), reflecting enhanced logical reasoning and problem-solving skills. (Section 4.2)
  - [Magnetic Preference Optimization: Achieving Last-iterate Convergence for Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/5833b4daf5b076dd1cdb362b163dff0c-Paper-Conference.pdf)
- **Utility preservation** (constructs) — *measured_by*
  > For evaluating utility, we consider MMLU (Hendrycks et al., 2020), GSM8K (Cobbe et al., 2021), and MBPP (Austin et al., 2021) datasets. (Section 3)
  - [Exploring Safety-Utility Trade-Offs in Personalized Language Models](https://aclanthology.org/2025.naacl-long.565.pdf)
- **Coding** (behaviors tasks) — *measured_by*
  > In the coding category, we assess using MBPP (Austin et al., 2021), a benchmark consisting of Python programming problems designed to be solvable by entry-level programmers. (Section 4.1).
  - [ParaICL: Towards Parallel In-Context Learning](https://aclanthology.org/2025.naacl-long.621.pdf)
- **Algorithmic reasoning** (constructs) — *measured_by*
  > Our experiments demonstrate that RaLU significantly outperforms existing baselines in mathematical reasoning (GSM8K, MATH) and algorithmic reasoning (HumanEval+, MBPP+), underscoring its potential to advance LLM reasoning and programming by offering enhanced accuracy and interpretability. (Abstract)
  - [Reasoning-as-Logic-Units: Scaling Test-Time Reasoning in Large Language Models Through Logic Unit Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25df/li25df.pdf)
- **Chain-of-thought reasoning** (constructs) — *measured_by*
  > GSM8K and MBPP involve multi-step reasoning, which remains underexplored in the quantization context despite its great importance. (Section 2.1)
  - [QSpec: Speculative Decoding with Complementary Quantization Schemes](https://aclanthology.org/2025.emnlp-main.240.pdf)
