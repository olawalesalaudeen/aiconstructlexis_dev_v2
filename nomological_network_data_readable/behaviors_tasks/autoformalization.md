# Autoformalization
**Type:** Behavior  
**Referenced in:** 21 papers  
**Also known as:** Formalization, Statement formalization, Natural language to formal language translation, Formal problem modeling, Statement autoformalization, Auto-formalization, Autoformalisation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats autoformalization as translating informal mathematical content into a formal, machine-verifiable language. Most definitions focus on mathematical statements given in natural language, sometimes alongside LaTeX, and ask for a formal statement or symbolic representation. A smaller line of work extends the task to whole problems, solutions, premises, or proofs, including outputs in Lean or Lean4, Isabelle/HOL, SMT-LIB, or first-order logic. Papers differ on success criteria: some require syntactically correct formal output, while others emphasize preserving semantic meaning and mathematical constraints.

**Variants.** Papers use several near-synonymous labels, most often statement formalization or formalization, and also formal problem modeling, natural language to formal language translation, and auto-formalization or autoformalisation. The dominant setting remains mathematical statements, including unconstrained natural language statements, but some work instead studies high-school contest-level math problems, question-answering problems and their solutions, written proofs, or generic natural language sentences and premises to be rendered into symbolic form.

**Space of elicitation and scores.** Papers link autoformalization to 2 measurement instruments, ProofNet and miniF2F. Both are used as benchmarks or test sets for evaluation: one paper explicitly describes comparing model predictions with ground truths on benchmarks such as ProofNet, and another uses miniF2F for formalizing statements. Among the linked instruments, both are benchmark-style evaluations rather than other kinds of scoring tools.

**What it is taken as evidence of.** At the construct level, papers link autoformalization to 2 constructs, Semantic alignment and Symbolic reasoning. These are framed as related links rather than explicit measurement claims: one paper says autoformalization faces challenges in ensuring semantic alignment, and another proposes auto-formalization agents equipped with enhanced capabilities for symbolic reasoning. The linked construct claims are split across these two relatedness framings rather than a single shared construct. Beyond constructs, papers also relate autoformalization to Informalization as the inverse process, claim a causal relationship from Information retrieval to Autoformalization, and claim a causal relationship from Autoformalization to Theorem proving.

## Sources

**[Neuro-Symbolic Data Generation for Math Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/29d319f7c1513c9ecd81d3a6e9632a6e-Paper-Conference.pdf) (as "Formalization")**
> The task of translating a natural language math problem into a formal symbolic representation (e.g., SMT-LIB).

**[Autoformalize Mathematical Statements by Symbolic Equivalence and Semantic Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/6034a661584af6c28fd97a6f23e56c0a-Paper-Conference.pdf)**
> The observable task of translating a mathematical statement from a natural language description into a formal language representation, such as Isabelle/HOL.

**[Reliable Evaluation and Benchmarks for Statement Autoformalization](https://aclanthology.org/2025.emnlp-main.907.pdf) (as "Statement formalization")**
> The observable task of generating a formal language representation of a mathematical statement given its natural language counterpart.

**[FANS: Formal Answer Selection for LLM Natural Language Math Reasoning Using Lean4](https://aclanthology.org/2025.emnlp-main.158.pdf) (as "Natural language to formal language translation")**
> Converting natural language math problems and their solutions into formal Lean4 theorem statements that preserve semantic meaning and mathematical constraints.

**[VCSearch: Bridging the Gap Between Well-Defined and Ill-Defined Problems in Mathematical Reasoning](https://aclanthology.org/2025.emnlp-main.642.pdf) (as "Formal problem modeling")**
> The observable behavior of translating a natural language math problem into a formal representation (e.g., SMT-Lib) with variables and constraints.

**[Rethinking and Improving Autoformalization: Towards a Faithful Metric and a Dependency Retrieval-based Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/d630537fc4402cfa3ebbc7450a0cac91-Paper-Conference.pdf) (as "Statement autoformalization")**
> Translating an informal mathematical statement into a formal statement in a proof assistant language.

**[MUSTARD: Mastering Uniform Synthesis of Theorem and Proof Data](https://proceedings.iclr.cc/paper_files/paper/2024/file/1e118ba9ee76c20df728b42a35fb4704-Paper-Conference.pdf) (as "Auto-formalization")**
> The observable task of translating a mathematical proof written in natural language into a formal, machine-verifiable language like Lean.

**[Faithful and Robust LLM-Driven Theorem Proving for NLI Explanations](https://aclanthology.org/2025.acl-long.867.pdf) (as "Autoformalisation")**
> The observable process of translating natural language sentences into a machine-verifiable formal language, such as symbolic logic.

## Relationships

### Autoformalization →
- **ProofNet** (measurements) — *measured_by*
  > In statement autoformalization, we follow prevalent benchmarks such as ProofNet (Azerbayev et al., 2023) and LeanEuclid (Murphy et al., 2024) to evaluate by comparing model predictions with ground-truths
  - [Rethinking and Improving Autoformalization: Towards a Faithful Metric and a Dependency Retrieval-based Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/d630537fc4402cfa3ebbc7450a0cac91-Paper-Conference.pdf)
- **miniF2F** (measurements) — *measured_by*
  > Herald translator achieves a 96.7% accuracy (Pass@128) on formalizing statements in the miniF2F-test and a 23.5% accuracy on our internal graduate-level textbook dataset... (ABSTRACT)
  - [Herald: A Natural Language Annotated Lean 4 Dataset](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c2bb821410066459be64d03a4dc5719-Paper-Conference.pdf)

### → Autoformalization
- **Information retrieval** (behaviors tasks) — *causes*
  > RAutoformalizer uses the retrievals to enhance autoformalization.
  - [Rethinking and Improving Autoformalization: Towards a Faithful Metric and a Dependency Retrieval-based Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/d630537fc4402cfa3ebbc7450a0cac91-Paper-Conference.pdf)

### Associated with
- **Informalization** (behaviors tasks)
  > several studies [19–21] explore the performance of LLMs for the inverse process of formalization, i.e., informalization, which translates formal statements back into natural language. (Section 2)
  - [Autoformalize Mathematical Statements by Symbolic Equivalence and Semantic Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/6034a661584af6c28fd97a6f23e56c0a-Paper-Conference.pdf)
- **Semantic alignment** (constructs)
  > While promising, autoformalization faces challenges in ensuring semantic alignment between these languages. (Section 1)
  - [FormalAlign: Automated Alignment Evaluation for Autoformalization](https://proceedings.iclr.cc/paper_files/paper/2025/file/fceedf8c9c0ff51f41b9fe0294ef0070-Paper-Conference.pdf)
- **Symbolic reasoning** (constructs)
  > To address this, we propose using auto-formalization agents equipped with enhanced capabilities for symbolic reasoning.
  - [Position: Trustworthy AI Agents Require the Integration of Large Language Models and Formal Methods](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25ds/zhang25ds.pdf)
- **Theorem proving** (behaviors tasks)
  > As the bridge between informal and formal mathematics, autoformalization has three immediate applications: (1) data augmentation for neural theorem provers (Wu et al., 2022; Xin et al., 2024; Wang et al., 2025; Ren et al., 2025), (2) guiding theorem proving via informal proofs (Jiang et al., 2023), and (3) validating informal reasoning (Zhou et al., 2024a; Olausson et al., 2023). (Section 3)
  - [Position: Formal Mathematical Reasoning—A New Frontier in AI](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25az/yang25az.pdf)
