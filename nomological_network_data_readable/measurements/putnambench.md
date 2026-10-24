# PutnamBench
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Papers most commonly describe PutnamBench as a benchmark of undergraduate-level mathematics competition questions used to evaluate theorem proving on challenging problems. Some definitions give a fuller format, describing a multi-language benchmark with 1692 hand-constructed formalizations of 640 theorems from the William Lowell Putnam Mathematical Competition in Lean 4, Isabelle, and Coq, while shorter descriptions refer more simply to formalized problems from the Putnam competition.

**What it is claimed to measure.** Across papers, the measurement claims are concentrated rather than spread widely: PutnamBench is linked to 2 behavioral indicators, theorem proving and formal theorem proving, and to 1 construct, problem-solving ability. The prevailing usage is to evaluate theorem proving, including neural, symbolic, and domain-agnostic theorem provers, while a narrower framing says it measures problem-solving ability by requiring problem-solving and proficiency across a broad range of topics taught in undergraduate mathematics courses.

**Space of uses.** One usage pattern is to report PutnamBench together with miniF2F and ProofNet for whole-proof generation methods. More broadly, papers position it in relation to 5 linked instruments, FIMO, GSM8K, MATH, ProofNet, and miniF2F, contrasting it with miniF2F and FIMO as covering a wider variety of problems that require undergraduate-level definitions, with ProofNet as drawing from mathematical competitions rather than standard textbooks, and with MATH and GSM8K as benchmarks the authors describe as informal.

**Concerns raised.** Contamination is the only concern-like theme in the excerpts: one paper says that, unlike MATH and GSM8K, the target output in PutnamBench has never been produced, and therefore it avoids direct contamination.

## Sources

**[STP: Self-play LLM Theorem Provers with Iterative Conjecturing and Proving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25h/dong25h.pdf)**
> Benchmark of undergraduate-level mathematics competition questions used to evaluate theorem proving performance on challenging problems.

## Relationships

### → PutnamBench
- **Theorem proving** (behaviors tasks) — *measured_by*
  > “We use PUTNAMBENCH to evaluate several neural and symbolic theorem-provers.”
  - [PutnamBench: Evaluating Neural Theorem-Provers on the Putnam Mathematical Competition](https://proceedings.neurips.cc/paper_files/paper/2024/file/1582eaf9e0cf349e1e5a6ee453100aa1-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Formal theorem proving** (behaviors tasks) — *measured_by*
  > We use PUTNAMBENCH to evaluate several established neural and symbolic theorem-provers.
  - [PutnamBench: Evaluating Neural Theorem-Provers on the Putnam Mathematical Competition](https://proceedings.neurips.cc/paper_files/paper/2024/file/1582eaf9e0cf349e1e5a6ee453100aa1-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Problem-solving ability** (constructs) — *measured_by*
  > PUTNAMBENCH requires significant problem-solving ability and proficiency in a broad range of topics taught in undergraduate mathematics courses.
  - [PutnamBench: Evaluating Neural Theorem-Provers on the Putnam Mathematical Competition](https://proceedings.neurips.cc/paper_files/paper/2024/file/1582eaf9e0cf349e1e5a6ee453100aa1-Paper-Datasets_and_Benchmarks_Track.pdf)

### Associated with
- **miniF2F** (measurements)
  > Compared to MINIF2F (Zheng et al., 2021) and FIMO (Liu et al., 2023), which generally rely on high-school mathematics, PUTNAMBENCH incorporates a wider variety of problems which require definitions of the standard undergraduate mathematics curriculum.
  - [PutnamBench: Evaluating Neural Theorem-Provers on the Putnam Mathematical Competition](https://proceedings.neurips.cc/paper_files/paper/2024/file/1582eaf9e0cf349e1e5a6ee453100aa1-Paper-Datasets_and_Benchmarks_Track.pdf)
- **FIMO** (measurements)
  > Compared to MINIF2F (Zheng et al., 2021) and FIMO (Liu et al., 2023), which generally rely on high-school mathematics, PUTNAMBENCH incorporates a wider variety of problems which require definitions of the standard undergraduate mathematics curriculum.
  - [PutnamBench: Evaluating Neural Theorem-Provers on the Putnam Mathematical Competition](https://proceedings.neurips.cc/paper_files/paper/2024/file/1582eaf9e0cf349e1e5a6ee453100aa1-Paper-Datasets_and_Benchmarks_Track.pdf)
- **ProofNet** (measurements)
  > The PROOFNET benchmark (Azerbayev et al., 2023) also sources problems from the undergraduate curriculum, but these problems are generally from standard textbooks as opposed to mathematical competitions.
  - [PutnamBench: Evaluating Neural Theorem-Provers on the Putnam Mathematical Competition](https://proceedings.neurips.cc/paper_files/paper/2024/file/1582eaf9e0cf349e1e5a6ee453100aa1-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MATH** (measurements)
  > Our benchmark is unique compared to informal benchmarks such as MATH (Hendrycks et al., 2021) and GSM8K (Cobbe et al., 2021) in the sense that the target output has never been produced, hence avoiding direct contamination.
  - [PutnamBench: Evaluating Neural Theorem-Provers on the Putnam Mathematical Competition](https://proceedings.neurips.cc/paper_files/paper/2024/file/1582eaf9e0cf349e1e5a6ee453100aa1-Paper-Datasets_and_Benchmarks_Track.pdf)
- **GSM8K** (measurements)
  > Our benchmark is unique compared to informal benchmarks such as MATH (Hendrycks et al., 2021) and GSM8K (Cobbe et al., 2021) in the sense that the target output has never been produced, hence avoiding direct contamination.
  - [PutnamBench: Evaluating Neural Theorem-Provers on the Putnam Mathematical Competition](https://proceedings.neurips.cc/paper_files/paper/2024/file/1582eaf9e0cf349e1e5a6ee453100aa1-Paper-Datasets_and_Benchmarks_Track.pdf)
