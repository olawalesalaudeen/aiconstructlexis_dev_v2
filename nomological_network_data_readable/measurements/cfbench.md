# CFBench
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across papers, CFBench is most commonly described as a complex instruction-following benchmark built around instructions with multiple constraints. Definitions emphasize coverage of a comprehensive range of constraint types, including format, content, and style. A less common description presents it as a comprehensive Chinese benchmark for evaluating constraint comprehension and following capabilities through a multi-dimensional evaluation framework, and shared definitions also state that it is evaluated with GPT-4 as a judge.

**What it is claimed to measure.** Papers link CFBench to 2 constructs and 1 behavioral indicator. The prevailing claim is that it measures Complex instruction following ability, with papers using it for evaluations where instructions consist of multiple constraints and for comprehensive assessment of model capabilities. Papers also use it to measure Instruction following ability and the behavioral indicator Instruction following, so the linked uses are concentrated on instruction following, especially formulations centered on multiple constraints.

**Space of uses.** Papers commonly use CFBench alongside FollowBench, and some evaluations also place it with ComplexBench, IFEval, Multi-IF, and SysBench. In these studies it is positioned as a main evaluation benchmark within broader instruction-following benchmark suites, including suites described as complex instruction-following benchmarks and suites described as widely-used instruction-following benchmarks. Reporting also uses the phrase "the ISR score for CFBench".

## Sources

**[MuSC: Improving Complex Instruction Following with Multi-granularity Self-Contrastive Training](https://aclanthology.org/2025.acl-long.523.pdf)**
> Complex instruction-following benchmark assessing a model's ability to follow instructions with multiple constraints, evaluated using GPT-4 as a judge.

## Relationships

### → CFBench
- **Complex instruction following ability** (constructs) — *measured_by*
  > We mainly perform evaluations on three complex instruction-following benchmarks: CFBench (Zhang et al., 2024b), FollowBench (Jiang et al., 2024b) and ComplexBench (Wen et al., 2024) (Section 4.1).
  - [MuSC: Improving Complex Instruction Following with Multi-granularity Self-Contrastive Training](https://aclanthology.org/2025.acl-long.523.pdf)
- **Instruction following ability** (constructs) — *measured_by*
  > We introduce CFBench, a comprehensive Chinese benchmark designed to thoroughly evaluate the constraint comprehension and following capabilities of LLMs. (Section 3)
  - [CFBench: A Comprehensive Constraints-Following Benchmark for LLMs](https://aclanthology.org/2025.acl-long.1581.pdf)
- **Instruction following** (behaviors tasks) — *measured_by*
  > We evaluate the trained models on several widely-used instruction-following benchmarks, including IFEval (Zhou et al., 2023), Multi-IF (He et al., 2024b), SysBench (Qin et al., 2024), FollowBench (Jiang et al., 2024), and CFBench (Zhang et al., 2024a). (Introduction)
  - [VerIF: Verification Engineering for Reinforcement Learning in Instruction Following](https://aclanthology.org/2025.emnlp-main.1542.pdf)
