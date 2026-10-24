# MathVerse
**Type:** Measurement  
**Referenced in:** 13 papers  
**Also known as:** MATHVERSE  

## State of the Field

**What it is.** Across papers, MathVerse is most commonly described as a multimodal or visual math benchmark for assessing mathematical reasoning with visual inputs and diagrams. Definitions variously emphasize geometry-related mathematical reasoning, quantitative reasoning, and diagram interpretation, and a description specifies 2,612 visual math problems. Papers also mention a multiple-choice evaluation setup, and some describe different presentation modes, including a Vision-Only mode where questions are presented in images; a smaller line of work refers to it as a prior static visual math benchmark.

**What it is claimed to measure.** Papers use MathVerse to measure 3 constructs and 1 behavioral indicator. The prevailing measurement claim is mathematical reasoning, including descriptions of mathematical abilities and visual mathematical reasoning, while smaller uses treat it as measuring generalization and geometric reasoning. It is also reported as measuring chain of thought, with a snippet describing "CoT evaluation and accuracy" on the benchmark, so papers spread its measurement role across several targets rather than tying it to only one.

**Space of uses.** In use, papers often place MathVerse in broader benchmark suites, commonly alongside MathVista, DynaMath, MathVision, MMStar, and MMMU, with other multimodal reasoning benchmarks also appearing. Papers position it both as a direct comparison benchmark, where results are reported on its multiple-choice questions, and as an auxiliary check for generalization. Another usage is comparative: a paper introducing DynaMath cites MathVerse as an earlier visual math benchmark.

**Concerns raised.** The clearest concern raised is overlap with other benchmarks. One paper says that "MathVerse and MathVision demonstrate high redundancy," describing a strong correlation with other benchmarks, while another quote about math-related benchmarks says their correlations are "not particularly strong," so papers report mixed statements about benchmark overlap.

## Sources

**[G-LLaVA: Solving Geometric Problem with Multi-Modal Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/09afabe33dc7db66530dea6483b22e5d-Paper-Conference.pdf)**
> A multimodal benchmark used to assess generalization on geometry-related mathematical reasoning, including multiple-choice evaluation.

**[DynaMath: A Dynamic Visual Benchmark for Evaluating Mathematical Reasoning Robustness of Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/78b248ea6f627431bba5029d92be8a3d-Paper-Conference.pdf) (as "MATHVERSE")**
> A visual math benchmark referenced for comparison with DYNAMATH and as an example of prior static benchmarks.

## Relationships

### → MathVerse
- **Mathematical reasoning** (constructs) — *measured_by*
  > Benchmarks such as MATH-V (Wang et al., 2024a) and MATHVERSE (Zhang et al., 2024e) demonstrate the current limitations of VLMs in handling challenging mathematical problems and understanding mathematical diagrams. (Section 1)
  - [DynaMath: A Dynamic Visual Benchmark for Evaluating Mathematical Reasoning Robustness of Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/78b248ea6f627431bba5029d92be8a3d-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > To verify the generalization ability of G-LLaVA, we also conduct evaluation on the newly introduced MathVerse benchmark (Zhang et al., 2024b). (Section 5.1)
  - [G-LLaVA: Solving Geometric Problem with Multi-Modal Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/09afabe33dc7db66530dea6483b22e5d-Paper-Conference.pdf)
- **Chain of thought** (behaviors tasks) — *measured_by*
  > As shown in Table 1 for the MathVerse benchmark, MAVIS-7B achieves the best overall scores in both CoT evaluation and accuracy among open-source MLLMs... (Section 4.2)
  - [MAVIS: Mathematical Visual Instruction Tuning with an Automatic Data Engine](https://proceedings.iclr.cc/paper_files/paper/2025/file/db36dcad6baee298a34ffca324b84b09-Paper-Conference.pdf)
