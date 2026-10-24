# ProofNet
**Type:** Measurement  
**Referenced in:** 12 papers  
**Also known as:** ProofNet-test  

## State of the Field

**What it is.** Across papers, ProofNet is most commonly treated as a Lean benchmark for undergraduate mathematics. Definitions variously describe it as a theorem-proving benchmark, a standard automated-theorem-proving dataset, and an autoformalization benchmark with paired natural-language and Lean statements; one paper also uses it as a source of high-quality mathematical proof data. Several descriptions specify 371 exercises or statement-formalization pairs from the undergraduate curriculum, formalized in Lean 3, while some descriptions emphasize isolated or less context-dependent problems and another contrasts it with competition benchmarks by saying its exercises are generally drawn from standard textbooks. Papers also refer to variants: ProofNet-test as the college-level split, and ProofNet# as a very close corrected version.

**What it is claimed to measure.** Papers use ProofNet to measure 4 behavioral indicators and 2 constructs. The prevailing use is to measure theorem proving and autoformalization, with several papers stating formal theorem proving more specifically; one paper also uses it to measure information retrieval. At the construct level, papers report it as measuring generalization and mathematical reasoning, so the claims are spread across several targets rather than centered on one construct.

**Space of uses.** Most papers position ProofNet as a common evaluation benchmark, often paired with miniF2F. Its only explicit instrument-to-instrument link is a related relation to PutnamBench, where one paper notes that both draw from undergraduate mathematics but that ProofNet uses textbook exercises rather than competition problems. In autoformalization work it also appears alongside LeanEuclid, Con-NF, and Herald, and a smaller line of work uses it as source data for paired natural-language and Lean statements or for collecting high-quality proof data.

**Concerns raised.** The only explicit concern raised is reliability of the reference formalizations. One paper presents ProofNet# as a "meticulously corrected version" of ProofNet, says it was manually verified and fixed for formalization errors, and adds that it remains very close to the original because only the reference formalizations were updated.

## Sources

**[miniCTX: Neural Theorem Proving with (Long-)Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/1b5ef7bcc702a0232b4f1aea2523d0d2-Paper-Conference.pdf)**
> ProofNet is a Lean theorem-proving benchmark used as a comparison benchmark for isolated or less context-dependent theorem proving.

**[STP: Self-play LLM Theorem Provers with Iterative Conjecturing and Proving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25h/dong25h.pdf) (as "ProofNet-test")**
> Benchmark consisting of formalized college-level mathematics problems used to assess advanced mathematical reasoning in LLMs.

## Relationships

### → ProofNet
- **Theorem proving** (behaviors tasks) — *measured_by*
  > We conducted sufficient experiments on the widely recognized theorem-proving benchmarks, namely miniF2F (Zheng et al., 2022) and ProofNet (Azerbayev et al., 2023) in Lean. (Section 1)
  - [CARTS: Advancing Neural Theorem Proving with Diversified Tactic Calibration and Bias-Resistant Tree Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/69dbaf03f7f37a7ccad9ccc92875a44d-Paper-Conference.pdf)
- **Autoformalization** (behaviors tasks) — *measured_by*
  > In statement autoformalization, we follow prevalent benchmarks such as ProofNet (Azerbayev et al., 2023) and LeanEuclid (Murphy et al., 2024) to evaluate by comparing model predictions with ground-truths
  - [Rethinking and Improving Autoformalization: Towards a Faithful Metric and a Dependency Retrieval-based Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/d630537fc4402cfa3ebbc7450a0cac91-Paper-Conference.pdf)
- **Formal theorem proving** (behaviors tasks) — *measured_by*
  > In this section, we evaluate the theorem-proving capabilities of DeepSeek-Prover-V1.5 using two distinct benchmarks: miniF2F (Zheng et al., 2022), which encompasses high-school level exercises and competition problems, and ProofNet (Azerbayev et al., 2023), which pertains to undergraduate-level theorems. (Section 5)
  - [DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Reinforcement Learning and Monte-Carlo Tree Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/b3b55c366d641c07180c40e4f978f311-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs) — *measured_by*
  > While contemporary LLMs attain competitive performance on established formal mathematical reasoning benchmarks such as miniF2F ... and ProofNet (formal undergraduate-level mathematics (Azerbayev et al., 2023))... (Section 1)
  - [Towards Advanced Mathematical Reasoning for LLMs via First-Order Logic Theorem Proving](https://aclanthology.org/2025.emnlp-main.628.pdf)
- **Out-of-distribution generalization** (constructs) — *measured_by*
  > We also report the performance of the model trained only on LeanWorkbook for 24 iterations, excluding miniF2F-valid and proofnet-valid, demonstrating that the model trained with STP also generalizes to out-of-domain theorems. (Section 4.2)
  - [STP: Self-play LLM Theorem Provers with Iterative Conjecturing and Proving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25h/dong25h.pdf)

### Associated with
- **PutnamBench** (measurements)
  > The PROOFNET benchmark (Azerbayev et al., 2023) also sources problems from the undergraduate curriculum, but these problems are generally from standard textbooks as opposed to mathematical competitions.
  - [PutnamBench: Evaluating Neural Theorem-Provers on the Putnam Mathematical Competition](https://proceedings.neurips.cc/paper_files/paper/2024/file/1582eaf9e0cf349e1e5a6ee453100aa1-Paper-Datasets_and_Benchmarks_Track.pdf)
