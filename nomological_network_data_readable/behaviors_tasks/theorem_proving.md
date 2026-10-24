# Theorem proving
**Type:** Behavior  
**Referenced in:** 37 papers  
**Also known as:** Proof generation, Natural language proof generation, Formal proof generation, Tactic generation, Proof tactic generation, Proof trajectory generation, Tactic prediction, Proof-step generation, Whole-proof generation, Theorem proof generation, Constructive proof generation, Formal-to-formal proving, Formal proof synthesis, Proof step generation  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is a proof-production task: given a theorem statement, the model generates either a complete proof script or a sequence of proof steps and tactics inside a formal system, often in proof assistants such as Lean or Isabelle. Most definitions require the result to be formally verifiable, with papers describing proofs that are checked by a prover, a verifier, or a correctness checker. A smaller line of work broadens the target to human-readable natural language proofs, or describes theorem proving as the ability to construct a valid sequence of logical steps.

**Variants.** The most common variants split the task into whole-proof generation and proof-step or tactic generation. In the stepwise variant, the model predicts the next tactic from the current proof state, sometimes also called tactic prediction or formal-to-formal proving, and the step is then verified before continuing; in whole-proof generation, the model completes the entire proof code in one pass and verification comes at the end. Other papers study proof trajectory generation, natural language proof generation, and constructive proof generation, where the proof consists of constructing an object such as a set, matrix, or graph that satisfies stated constraints.

**Space of elicitation and scores.** Papers link theorem proving to 5 instruments overall, though explicit measurement is concentrated in benchmark suites. It is most often measured by PutnamBench and miniF2F, followed by ProofNet and LeanDojo; the linked evidence describes these as theorem-proving benchmarks and reports evaluation through formal verification, including pass@3200 reporting. Mathlib is the remaining linked instrument, but it appears only as related, with one paper saying that most Lean-based neural theorem provers are trained on that library.

**What it is taken as evidence of.** Papers link theorem proving to 2 constructs, rather than consistently using it as evidence of one shared construct. One paper claims a causal relationship from theorem proving to Long-horizon planning, while another reports that Abstraction is related to theorem proving, noting that in interactive theorem proving abstractions can be encapsulated in new definitions, lemmas, and tactics.

## Sources

**[Proving Theorems Recursively](https://proceedings.neurips.cc/paper_files/paper/2024/file/9de7a49945898da86e062e7029baa284-Paper-Conference.pdf)**
> The observable task of generating a complete and formally verifiable sequence of proof steps that successfully proves a given theorem statement.

**[Lean Workbook: A large-scale Lean problem set formalized from natural language math problems](https://proceedings.neurips.cc/paper_files/paper/2024/file/bf236666a2cc5f3ae05d2e08485efc4c-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Proof generation")**
> The observable task of searching for or generating proof tactics and trajectories to complete a formal theorem.

**[Proving Olympiad Algebraic Inequalities without Human Demonstrations](https://proceedings.neurips.cc/paper_files/paper/2024/file/96f8c5e879c339dae55e6c2188b02a33-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Natural language proof generation")**
> The observable behavior of producing a human-readable, text-based proof for a mathematical problem.

**[Proving Olympiad Inequalities by Synergizing LLMs and Symbolic Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/06b35bf96174d97bae899d915a8b7210-Paper-Conference.pdf) (as "Tactic generation")**
> The observable behavior of producing a specific proof step or transformation (a 'tactic') to apply to a mathematical goal.

**[Proving Olympiad Inequalities by Synergizing LLMs and Symbolic Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/06b35bf96174d97bae899d915a8b7210-Paper-Conference.pdf) (as "Formal proof generation")**
> The behavior of producing a proof in a formal language, such as Lean, that can be automatically verified for correctness by a proof system.

**[CARTS: Advancing Neural Theorem Proving with Diversified Tactic Calibration and Bias-Resistant Tree Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/69dbaf03f7f37a7ccad9ccc92875a44d-Paper-Conference.pdf) (as "Proof tactic generation")**
> The observable action of a language model producing a single, one-step proof tactic (a command for a formal prover like Lean) given a current proof state.

**[Lean-STaR: Learning to Interleave Thinking and Proving](https://proceedings.iclr.cc/paper_files/paper/2025/file/a5357781c204d4412e44ed9cbcdb08d5-Paper-Conference.pdf) (as "Tactic prediction")**
> The behavior of generating the next formal proof step, or "tactic," given the current proof state in an interactive theorem prover.

**[Lean-STaR: Learning to Interleave Thinking and Proving](https://proceedings.iclr.cc/paper_files/paper/2025/file/a5357781c204d4412e44ed9cbcdb08d5-Paper-Conference.pdf) (as "Proof trajectory generation")**
> Sampling sequences of proof states, thoughts, and tactics that form candidate theorem-proving attempts.

**[DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Reinforcement Learning and Monte-Carlo Tree Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/b3b55c366d641c07180c40e4f978f311-Paper-Conference.pdf) (as "Whole-proof generation")**
> A specific strategy for formal proof generation where the model generates the entire proof code from the theorem statement in a single pass, with verification performed only at the end.

**[DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Reinforcement Learning and Monte-Carlo Tree Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/b3b55c366d641c07180c40e4f978f311-Paper-Conference.pdf) (as "Proof-step generation")**
> An interactive strategy for formal proof generation where the model predicts a single subsequent tactic based on an intermediate tactic state, which is then verified before the next step is generated.

**[AI as Humanity’s Salieri: Quantifying Linguistic Creativity of Language Models via Systematic Attribution of Machine Text against Web Text](https://proceedings.iclr.cc/paper_files/paper/2025/file/e304d374c85e385eb217ed4a025b6b63-Paper-Conference.pdf) (as "Theorem proof generation")**
> The task of generating mathematical proofs for given theorems.

**[MathConstruct: Challenging LLM Reasoning with Constructive Proofs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/balunovic25a/balunovic25a.pdf) (as "Constructive proof generation")**
> The observable task of generating a mathematical object, such as a set, matrix, or graph, that satisfies a set of specified constraints to prove a mathematical result.

**[Llemma: An Open Language Model for Mathematics](https://proceedings.iclr.cc/paper_files/paper/2024/file/b225f5c7cd13615e9558c3931fa4e66f-Paper-Conference.pdf) (as "Formal-to-formal proving")**
> The observable task of generating a sequence of code-like proof steps (tactics) within a proof assistant to prove a formal mathematical statement, also known as tactic prediction.

**[ProofAug: Efficient Neural Theorem Proving via Fine-grained Proof Structure Analysis](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25bp/liu25bp.pdf) (as "Formal proof synthesis")**
> The task of generating a complete, verifiable formal proof for a given theorem statement within a specific proof assistant system.

**[Magnushammer: A Transformer-Based Approach to Premise Selection](https://proceedings.iclr.cc/paper_files/paper/2024/file/ab5f5f22e3e09f4424592ffb06840ab0-Paper-Conference.pdf) (as "Proof step generation")**
> The observable action of producing a single, valid step, such as applying a tactic with selected premises, within a formal proof.

## Relationships

### Theorem proving →
- **PutnamBench** (measurements) — *measured_by*
  > “We use PUTNAMBENCH to evaluate several neural and symbolic theorem-provers.”
  - [PutnamBench: Evaluating Neural Theorem-Provers on the Putnam Mathematical Competition](https://proceedings.neurips.cc/paper_files/paper/2024/file/1582eaf9e0cf349e1e5a6ee453100aa1-Paper-Datasets_and_Benchmarks_Track.pdf)
- **miniF2F** (measurements) — *measured_by*
  > We conducted sufficient experiments on the widely recognized theorem-proving benchmarks, namely miniF2F (Zheng et al., 2022) and ProofNet (Azerbayev et al., 2023) in Lean. (Section 1)
  - [CARTS: Advancing Neural Theorem Proving with Diversified Tactic Calibration and Bias-Resistant Tree Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/69dbaf03f7f37a7ccad9ccc92875a44d-Paper-Conference.pdf)
- **ProofNet** (measurements) — *measured_by*
  > We conducted sufficient experiments on the widely recognized theorem-proving benchmarks, namely miniF2F (Zheng et al., 2022) and ProofNet (Azerbayev et al., 2023) in Lean. (Section 1)
  - [CARTS: Advancing Neural Theorem Proving with Diversified Tactic Calibration and Bias-Resistant Tree Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/69dbaf03f7f37a7ccad9ccc92875a44d-Paper-Conference.pdf)
- **Best-first search** (measurements) — *measured_by*
  > We use best-first-search as our search tragedy with a 10-minute timeout.
  - [Alchemy: Amplifying Theorem-Proving Capability Through Symbolic Mutation](https://proceedings.iclr.cc/paper_files/paper/2025/file/43f55776896a2e33239c2954519f605e-Paper-Conference.pdf)
- **LeanDojo** (measurements) — *measured_by*
  > Recent neural theorem provers are domain-agnostic and evaluated on benchmarks targeting this level [Level 3, proving simple theorems automatically in a domain-general fashion], e.g., CoqGym (Yang & Deng, 2019), LeanDojo (Yang et al., 2023), MiniF2F (Zheng et al., 2022), and PutnamBench (Tsoukalas et al., 2024). (Section 5.2)
  - [Position: Formal Mathematical Reasoning—A New Frontier in AI](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25az/yang25az.pdf)

### → Theorem proving
- **Long chain-of-thought generation** (behaviors tasks) — *causes*
  > The emergent Lean reasoning ability in the Long CoT enables the model to write a better-structured proof based on its high-level plan than direct proof generation. (Section 2.3.1)
  - [MA-LoT: Model-Collaboration Lean-based Long Chain-of-Thought Reasoning enhances Formal Theorem Proving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25cb/wang25cb.pdf)

### Associated with
- **Mathlib** (measurements)
  > Most neural theorem provers based on Lean are primarily trained on Lean’s mathematical library, Mathlib.
  - [Alchemy: Amplifying Theorem-Proving Capability Through Symbolic Mutation](https://proceedings.iclr.cc/paper_files/paper/2025/file/43f55776896a2e33239c2954519f605e-Paper-Conference.pdf)
- **Abstraction** (constructs)
  > In interactive theorem proving, abstractions can be encapsulated in new definitions, lemmas, and tactics. (Section 4.2)
  - [Position: Formal Mathematical Reasoning—A New Frontier in AI](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25az/yang25az.pdf)
- **Long-horizon planning** (constructs)
  > "the whole-proof generation model is trained to perform long-term planning for theorem proving"
  - [DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Reinforcement Learning and Monte-Carlo Tree Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/b3b55c366d641c07180c40e4f978f311-Paper-Conference.pdf)
- **Autoformalization** (behaviors tasks)
  > As the bridge between informal and formal mathematics, autoformalization has three immediate applications: (1) data augmentation for neural theorem provers (Wu et al., 2022; Xin et al., 2024; Wang et al., 2025; Ren et al., 2025), (2) guiding theorem proving via informal proofs (Jiang et al., 2023), and (3) validating informal reasoning (Zhou et al., 2024a; Olausson et al., 2023). (Section 3)
  - [Position: Formal Mathematical Reasoning—A New Frontier in AI](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25az/yang25az.pdf)
