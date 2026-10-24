# Functional correctness
**Type:** Construct  
**Referenced in:** 17 papers  

## State of the Field

**Definition agreement:** Consensus. All papers define functional correctness as whether a generated output, such as code, a smart contract, or an API call, performs the intended function specified by the task or user request and is confirmed by tests or external verification. The differences are only in wording and setting, with most papers emphasizing specification satisfaction and passing functional checks rather than introducing a different phenomenon.

**Space of definitions.** Across the papers, the prevailing framing is output-level correctness: whether generated code, smart contracts, API calls, or symbolic expressions perform the intended function, satisfy the specification or user request, and pass task-relevant tests or verification. Several definitions make the reference standard explicit through all relevant test cases, functional verification, or equivalence checks by an external solver, and one paper states that functional correctness goes beyond mere syntactic validity. A smaller variation phrases it as the latent tendency of generated code to satisfy the intended specification and pass functional verification, rather than only as the observed degree of success on a task.

**Space of facets.** Across the papers, functional correctness is most often positioned as a criterion separate from syntactic correctness or well-formedness: one snippet says constrained decoding can improve syntactic correctness without guaranteeing that the output correctly answers the query. Other papers evaluate it alongside design quality, quality attributes, or API hallucination, and one benchmark reports it with Pass@k and Compile@k.

**Space of measurement.** Operationalization is concentrated in benchmark-style instruments: papers link functional correctness to 3 measurement instruments, most often HumanEval, then MBPP and SolEval, and to 2 behavioral indicators overall, though those indicators are recorded as causes rather than direct measures. HumanEval is described as assessing the functional correctness of code synthesized from docstrings, MBPP uses Pass and counts a task as solved when the solution passes all test cases, and SolEval evaluates it with Pass@k and Compile@k after integrating generated functions into a repository for real-world code evaluation. These measures largely match the definitions by checking tests or verification, and other papers use functional checks, AST sub-tree matching, or external-solver equivalence to verify whether outputs satisfy the intended problem or request.

**Links.** Beyond measurement, the relationships recorded in the papers are causal. One paper claims a causal relationship from catastrophic forgetting to functional correctness, saying direct SFT may diminish the ability to generate functionally correct code; one paper claims a causal relationship from code editing to functional correctness, reporting higher functional correctness; and one paper claims a causal relationship from contextual understanding to functional correctness, noting that providing context improves Pass@1 and Compile@1.

## Sources

**[SolEval: Benchmarking Large Language Models for Repository-level Solidity Smart Contract Generation](https://aclanthology.org/2025.emnlp-main.218.pdf)**
> The degree to which a generated smart contract behaves as intended according to its specification and passes all relevant test cases.

## Relationships

### Functional correctness →
- **HumanEval** (measurements) — *measured_by*
  > HumanEval assesses the functional correctness of synthesized code derived from docstrings. (Section 4.2)
  - [Mercury: A Code Efficiency Benchmark for Code Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/1df1df43b58845650b8dada00fca9772-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MBPP** (measurements) — *measured_by*
  > Both HumanEval and MBPP harness the metric Pass to measure the Code LLMs’ functional correctness, where a task is considered solved if the given solution passes all test cases, and the total fraction of solved tasks is reported as P ass = Nsolved/Ntotal [25]. (Section 4.2)
  - [Mercury: A Code Efficiency Benchmark for Code Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/1df1df43b58845650b8dada00fca9772-Paper-Datasets_and_Benchmarks_Track.pdf)
- **APPS** (measurements) — *measured_by*
  > Generated codes are evaluated against (private) test cases to check the execution correctness (Hendrycks et al., 2021; Chen et al., 2021; Li et al., 2022) (Section 3.1).
  - [CodeChain: Towards Modular Code Generation Through Chain of Self-revisions with Representative Sub-modules](https://proceedings.iclr.cc/paper_files/paper/2024/file/6111371a868af8dcfba0f96ad9e25ae3-Paper-Conference.pdf)
- **CodeContests** (measurements) — *measured_by*
  > Generated codes are evaluated against (private) test cases to check the execution correctness (Hendrycks et al., 2021; Chen et al., 2021; Li et al., 2022) (Section 3.1).
  - [CodeChain: Towards Modular Code Generation Through Chain of Self-revisions with Representative Sub-modules](https://proceedings.iclr.cc/paper_files/paper/2024/file/6111371a868af8dcfba0f96ad9e25ae3-Paper-Conference.pdf)
- **HumanEval+** (measurements) — *measured_by*
  > As shown in Table 3, we observe that almost all LLMs achieve better efficiency and higher correctness after being fine-tuned with . Take HumanEvalPlus as an example... (Section 4.1)
  - [EffiCoder: Enhancing Code Generation in Large Language Models through Efficiency-Aware Fine-tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25as/huang25as.pdf)

### → Functional correctness
- **Catastrophic forgetting** (behaviors tasks) — *causes*
  > This suggests that direct SFT may lead to catastrophic forgetting in vanilla models, diminishing their ability to generate functionally correct code. (Section 4.5)
  - [Mercury: A Code Efficiency Benchmark for Code Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/1df1df43b58845650b8dada00fca9772-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Code editing** (behaviors tasks) — *causes*
  > EDITLORD outperforms the state-of-the-art by an average of 22.7% in editing performance and 58.1% in robustness while achieving 20.2% higher functional correctness across critical software engineering and security applications, LM models, and editing modes. (Abstract)
  - [EditLord: Learning Code Transformation Rules for Code Editing](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25al/li25al.pdf)

### Associated with
- **Code efficiency** (constructs)
  > existing benchmarks have mainly focused on the functional correctness of generated code, neglecting the importance of their computational efficiency. (Abstract)
  - [Mercury: A Code Efficiency Benchmark for Code Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/1df1df43b58845650b8dada00fca9772-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Stealthiness** (constructs)
  > To ensure stealthiness and gain the user’s trust, the attack must preserve the engine’s overall effectiveness in generating functionally correct code and maintain its response speed. (Section 1)
  - [Black-Box Adversarial Attacks on LLM-Based Code Completion](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jenko25a/jenko25a.pdf)
