# Formal theorem proving
**Type:** Behavior  
**Referenced in:** 7 papers  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage is a task of producing a correct formal proof inside an interactive theorem prover, especially Lean. Success is stated as proving the theorem correctly in that formal environment, and one paper makes the setup more specific by tasking models with proving a theorem while given access to code from the theorem's repository. One paper also describes formal theorem proving in interactive theorem provers as a testbed for evaluating LLM reasoning capabilities.

**Variants.** Papers study it across several theorem sets rather than a single problem type. The linked benchmarks cover high-school exercises and competition problems, undergraduate-level theorems, and Putnam Mathematical Competition problems. One paper also refers to the activity as formal proof writing, and another contrasts repository-context theorem proving with popular benchmarks that focus on isolated competition problems.

**Space of elicitation and scores.** Four measurement instruments are linked to it. The most frequently linked is miniF2F, followed by ProofNet, LeanDojo, and PutnamBench. Papers use miniF2F and ProofNet as benchmarks for theorem-proving capabilities, with miniF2F described as covering high-school exercises and competition problems and ProofNet as undergraduate-level theorems; one paper also links measurement to LeanDojo, described as extracting theorem-proving data from Lean 3 and 4, and another uses PutnamBench to evaluate theorem provers on Putnam problems.

**What it is taken as evidence of.** Three constructs are linked to it, and papers do not use a single shared construct framing. The most recurrent connection is to Mathematical reasoning: one paper reports it as related to mathematical reasoning, and another claims a causal relationship from formal theorem proving to mathematical reasoning. One paper also relates it to Reasoning more broadly, while another claims a causal relationship from Generalization to formal theorem proving.

## Sources

**[miniCTX: Neural Theorem Proving with (Long-)Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/1b5ef7bcc702a0232b4f1aea2523d0d2-Paper-Conference.pdf)**
> Producing a correct formal proof for a theorem in an interactive theorem prover such as Lean.

## Relationships

### Formal theorem proving →
- **miniF2F** (measurements) — *measured_by*
  > In this section, we evaluate the theorem-proving capabilities of DeepSeek-Prover-V1.5 using two distinct benchmarks: miniF2F (Zheng et al., 2022), which encompasses high-school level exercises and competition problems, and ProofNet (Azerbayev et al., 2023), which pertains to undergraduate-level theorems. (Section 5)
  - [DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Reinforcement Learning and Monte-Carlo Tree Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/b3b55c366d641c07180c40e4f978f311-Paper-Conference.pdf)
- **ProofNet** (measurements) — *measured_by*
  > In this section, we evaluate the theorem-proving capabilities of DeepSeek-Prover-V1.5 using two distinct benchmarks: miniF2F (Zheng et al., 2022), which encompasses high-school level exercises and competition problems, and ProofNet (Azerbayev et al., 2023), which pertains to undergraduate-level theorems. (Section 5)
  - [DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Reinforcement Learning and Monte-Carlo Tree Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/b3b55c366d641c07180c40e4f978f311-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs) — *causes*
  > Lean provides a verifiable environment to explore theorem proving formally, which has been shown effective in improving mathematical reasoning (Xin et al., 2024; Ying et al., 2024b). As far as we know, we are the first public study to introduce formal mathematics data in pre-training, using a total amount of 0.2B lean-based synthesized data. (Section 4.1)
  - [YuLan-Mini: Pushing the Limits of Open Data-efficient Language Model](https://aclanthology.org/2025.acl-long.268.pdf)
- **PutnamBench** (measurements) — *measured_by*
  > We use PUTNAMBENCH to evaluate several established neural and symbolic theorem-provers.
  - [PutnamBench: Evaluating Neural Theorem-Provers on the Putnam Mathematical Competition](https://proceedings.neurips.cc/paper_files/paper/2024/file/1582eaf9e0cf349e1e5a6ee453100aa1-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Isabelle** (measurements) — *measured_by*
  > Automated theorem proving with formal languages by LLMs stands at the forefront of reasoning research (Yang et al., 2024a), partly because it allows objective and reliable evaluation through classical verifiers such as Lean (Moura & Ullrich, 2021) and Isabelle (Nipkow et al., 2002). (Section 1)
  - [STP: Self-play LLM Theorem Provers with Iterative Conjecturing and Proving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25h/dong25h.pdf)

### → Formal theorem proving
- **Generalization** (constructs) — *causes*
  > “This emphasizes LeanAgent’s continuous generalizability and improvement, explaining its superior theorem-proving performance.”
  - [LeanAgent: Lifelong Learning for Formal Theorem Proving](https://proceedings.iclr.cc/paper_files/paper/2025/file/b67c77f8db8b991d73d6f2e16f491840-Paper-Conference.pdf)

### Associated with
- **Premise selection** (behaviors tasks)
  > A critical challenge in theorem proving is the effective selection of relevant premises (Irving et al., 2016; Tworkowski et al.). (Section: 2 PRELIMINARIES)
  - [LeanAgent: Lifelong Learning for Formal Theorem Proving](https://proceedings.iclr.cc/paper_files/paper/2025/file/b67c77f8db8b991d73d6f2e16f491840-Paper-Conference.pdf)
- **Reasoning** (constructs)
  > Automated theorem proving with formal languages by LLMs stands at the forefront of reasoning research (Yang et al., 2024a), partly because it allows objective and reliable evaluation... Moreover, it arguably encapsulates the essence of advanced reasoning tasks while abstracting away the ambiguity of natural language, enabling meaningful studies on a relatively smaller scale. (Section 1)
  - [STP: Self-play LLM Theorem Provers with Iterative Conjecturing and Proving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25h/dong25h.pdf)
- **LeanDojo** (measurements)
  > "Theorem proving data extraction. Several tools extract training data from interactive theorem provers, including ... LeanDojo (Yang et al., 2023) for Lean 3 and 4."
  - [miniCTX: Neural Theorem Proving with (Long-)Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/1b5ef7bcc702a0232b4f1aea2523d0d2-Paper-Conference.pdf)
- **Conjecture generation** (behaviors tasks)
  > “The conjecturer is trained iteratively on previously generated conjectures that are barely provable by the current prover, which incentivizes it to generate increasingly challenging conjectures over time.”
  - [STP: Self-play LLM Theorem Provers with Iterative Conjecturing and Proving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25h/dong25h.pdf)
