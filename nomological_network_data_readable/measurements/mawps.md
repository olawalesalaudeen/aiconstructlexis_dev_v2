# MAWPS
**Type:** Measurement  
**Referenced in:** 29 papers  
**Also known as:** mawps  

## State of the Field

**What it is.** Across papers, MAWPS is most commonly described as a benchmark or dataset of math word problems, often framed as arithmetic problems in natural language or as Math Word Problem Solving. Several definitions present it as a standardized collection of arithmetic word problems, while a smaller line of work describes it as an out-of-distribution or out-of-domain benchmark repository. One paper uses the label differently, reporting the average of SingleEQ, SingleOP, AddSub, and MultiArith under the collective term MAWPS, so papers do not use the name in exactly the same way.

**What it is claimed to measure.** Papers link MAWPS to 3 constructs and 1 behavioral indicator. The prevailing usage is to measure Mathematical reasoning, with papers describing it as part of arithmetic reasoning, math reasoning, or broader mathematical reasoning evaluations; a smaller line of work also reports it as measuring In-context learning and Problem-solving ability, and the linked behavioral indicator is Mathematical problem solving. Overall, the measurement claims are concentrated on Mathematical reasoning rather than spread evenly across many targets.

**Space of uses.** In use, papers usually place MAWPS inside broader math evaluation suites, most commonly alongside GSM8K and SVAMP, and also with MATH, ASDiv, and SAT-Math. They often position it as one of several arithmetic or math reasoning benchmarks, while some explicitly use it as an out-of-distribution or out-of-domain check for generalization. A smaller usage treats MAWPS as an aggregate reporting convention, averaging results over SingleEQ, SingleOP, AddSub, and MultiArith rather than treating it as a standalone dataset.

## Sources

**[Query-Dependent Prompt Evaluation and Optimization with Offline Inverse RL](https://proceedings.iclr.cc/paper_files/paper/2024/file/b84b9d1fe05c5e74d8f9466f063327a5-Paper-Conference.pdf)**
> A benchmark dataset of math word problems designed to test a model's ability to solve arithmetic problems.

**[Learning Goal-Conditioned Representations for Language Reward Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d46f127a80dc58cbc0732a717285c43a-Paper-Conference.pdf) (as "mawps")**
> An out-of-distribution benchmark repository of math word problems.

## Relationships

### → MAWPS
- **Mathematical reasoning** (constructs) — *measured_by*
  > We evaluate our models on popular math reasoning benchmarks, namely GSM8K, MATH, GSM-Hard [24], SVAMP [28], TabMWP [29], ASDiv [30], and MAWPS [31]. (Section 3.2)
  - [OpenMathInstruct-1: A 1.8 Million Math Instruction Tuning Dataset](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d5aa9a7ce28cdc710fbd044fd3610f3-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > Second, GSM8K [9], MaWPS [33] are about math problem solving. (Section 4.1)
  - [D-LLM: A Token Adaptive Computing Resource Allocation Strategy for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/03469b1a66e351b18272be23baf3b809-Paper-Conference.pdf)
- **In-context learning** (constructs) — *measured_by*
  > We evaluate DiffuLLaMA’s math reasoning and in-context learning ability by evaluating on MAWPS (Koncel-Kedziorski et al., 2016) (Section 4.2).
  - [Scaling Diffusion Language Models via Adaptation from Autoregressive Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0fa81c3f0d57f95b8776de3a248ef0ed-Paper-Conference.pdf)
