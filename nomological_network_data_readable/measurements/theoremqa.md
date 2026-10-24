# TheoremQA
**Type:** Measurement  
**Referenced in:** 12 papers  

## State of the Field

**What it is.** Across papers, TheoremQA is most commonly described as a benchmark or question answering dataset of university-level or advanced STEM problems that require applying mathematical theorems. Several definitions specify 800 questions or problems spanning mathematics, physics, and engineering. A smaller line of work describes it more narrowly through abstract algebra and formal logic, and one paper reports using only a mathematics subset with logical-reasoning questions and definite answers.

**What it is claimed to measure.** Papers link TheoremQA to one behavioral indicator and three constructs. The prevailing use is to measure mathematical problem solving, and several papers also use it to measure reasoning, describing it as part of evaluations of reasoning across domains or as a representative reasoning benchmark. More narrowly, one paper uses it to measure generalization on theoretical reasoning in STEM, and another uses it for out-of-domain evaluation of mathematical reasoning, so papers connect it to several related targets rather than only one construct.

**Space of uses.** No paper directly links it to another measurement instrument, though many use it inside broader evaluation suites. It appears alongside MATH, GSM-Plus, CollegeMath, DeepMind-Mathematics, and MMLU-STEM, among other benchmarks. Authors variously position it as an out-of-domain dataset, a representative reasoning benchmark, or a math benchmark, and one paper says that TheoremQA and SciBench claim difficulty above the middle school level of MATH, reaching the undergraduate level.

## Sources

**[Advancing LLM Reasoning Generalists with Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e2c12c1a41af7c19c5b38e0837a52d1-Paper-Conference.pdf)**
> A benchmark of university-level STEM questions used to assess mathematical reasoning.

## Relationships

### → TheoremQA
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > We applied MACM to two datasets, SciBench [16] and TheoremQA [5], which claim their difficulty surpasses the middle school level of the MATH dataset, reaching the Undergraduate Level. (Section 4.3)
  - [MACM: Utilizing a Multi-Agent System for Condition Mining in Solving Complex Mathematical Problems](https://proceedings.neurips.cc/paper_files/paper/2024/file/5fcedec09977357f32e8e0ec8957073b-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > To rigorously assess the capabilities of models in reasoning abilities across different domains, we utilize several widely used datasets, GSM8K [Cobbe et al., 2021], MATH [Hendrycks et al., 2021b], TheoremQA [Chen et al., 2023b], BIG-Bench Hard (BBH) [Suzgun et al., 2022], ARC-C [Clark et al., 2018], GPQA [Rein et al., 2023], MMLU-STEM [Hendrycks et al., 2021a]. (Section 3.2)
  - [MAmmoTH2: Scaling Instructions from the Web](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4ca07aa108036f80cbb5b82285fd4b1-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > TheoremQA (Chen et al., 2023): This benchmark contains 800 problems focused on utilizing mathematical theorems to solve challenging problems in fields such as math, physics and engineering, testing generalization on theoretical reasoning in general STEM. (Section 4.1)
  - [DART-Math: Difficulty-Aware Rejection Tuning for Mathematical Problem-Solving](https://proceedings.neurips.cc/paper_files/paper/2024/file/0ef1afa0daa888d695dcd5e9513bafa3-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs) — *measured_by*
  > For out-of-domain (OOD) evaluation, we use the CollegeMath (Tang et al., 2024), DeepMind-Mathematics (Saxton et al., 2019), OlympiadBench-Math (He et al., 2024), and TheoremQA (Chen et al., 2023) benchmarks (Section 4.1).
  - [MathFusion: Enhancing Mathematical Problem-solving of LLM through Instruction Fusion](https://aclanthology.org/2025.acl-long.367.pdf)
