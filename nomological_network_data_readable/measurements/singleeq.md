# SingleEq
**Type:** Measurement  
**Referenced in:** 15 papers  
**Also known as:** SingleEQ, Single Eq  

## State of the Field

**What it is.** Most papers treat SingleEq as a dataset or benchmark of arithmetic or math word problems solvable with a single equation. The prevailing wording is that the problems are solvable with a single equation, while some papers narrow this to single-equation algebraic word problems or say the benchmark contains algebraic word problems that are parsed into equations. Several papers also position it as a distribution-shift, near-shift, or out-of-domain test set, and one definition explicitly says it has simpler reasoning demands.

**What it is claimed to measure.** Papers use SingleEq to measure one construct, Mathematical reasoning, and one behavioral indicator, Mathematical problem solving. The dominant claim is Mathematical reasoning: papers list it among arithmetic or math reasoning datasets and describe it as covering problems "solvable using a single linear equation." One paper also uses it to measure Mathematical problem solving in a broader benchmark set.

**Space of uses.** Most papers use SingleEq alongside other arithmetic or math benchmarks, most often MultiArith, SVAMP, GSM8K, AddSub, and SingleOp, with some papers also pairing it with AQuA or MATH. A recurring usage is as an out-of-distribution, near-shift, or out-of-domain test dataset, though some papers position it more generally as one item in larger evaluations of mathematical reasoning or mathematical problem solving.

## Sources

**[DQ-LoRe: Dual Queries with Low Rank Approximation Re-ranking for In-Context Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/b3875605f2e35714fc8a807cadf8a5e8-Paper-Conference.pdf)**
> Dataset of math word problems solvable with a single equation, used to assess performance under distribution shift with simpler reasoning demands.

**[ToRA: A Tool-Integrated Reasoning Agent for Mathematical Problem Solving](https://proceedings.iclr.cc/paper_files/paper/2024/file/d3cf1559a8795eb1ed2b3ad52409ac7d-Paper-Conference.pdf) (as "SingleEQ")**
> Dataset of arithmetic word problems solvable with a single equation, used to evaluate basic mathematical comprehension and formulation.

**[OccamLLM: Fast and Exact Language Model Arithmetic in a Single Step](https://proceedings.neurips.cc/paper_files/paper/2024/file/3eceb70f47690051d6769739fbf6294b-Paper-Conference.pdf) (as "Single Eq")**
> A benchmark of algebraic word problems that are parsed into equations.

## Relationships

### → SingleEq
- **Mathematical reasoning** (constructs) — *measured_by*
  > We select eleven mathematical reasoning datasets... while the OOD datasets include GSM8K, SVAMP, AddSub, SingleEq, SingleOp, and MATH. (Section 2.2)
  - [Embedding Trajectory for Out-of-Distribution Detection in Mathematical Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b734e95f0788a030a69caa987516186-Paper-Conference.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > To test the performance of OccamLlama on more general mathematical problem solving tasks, we evaluate our method and baselines on the following six benchmarks: AddSub [41], GSM8K [42], MultiArith [33], MATH401 [8], Single Eq [43], and SVAMP [44].
  - [OccamLLM: Fast and Exact Language Model Arithmetic in a Single Step](https://proceedings.neurips.cc/paper_files/paper/2024/file/3eceb70f47690051d6769739fbf6294b-Paper-Conference.pdf)
