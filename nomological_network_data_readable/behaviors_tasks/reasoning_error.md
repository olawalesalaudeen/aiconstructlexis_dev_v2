# Reasoning error
**Type:** Behavior  
**Referenced in:** 10 papers  
**Also known as:** Reasoning Errors, Flawed reasoning, Making systematic errors  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats this as an observable failure in problem solving where the model does not carry out the needed logical steps correctly. Most definitions describe missing critical steps, improper inferences, logical fallacies, incorrect solution steps, or misapplied mathematical principles, and depending on the paper the failure is seen either in an incorrect derived answer or in the model's generated solution path. A smaller line of work narrows it to cases where perception succeeds but answer derivation fails, especially when models correctly perceive audio yet still fail to apply the necessary complex reasoning. One paper further describes reasoning error as the most prevalent error category in its analysis, while another frames it as systematic, predictable mistakes traceable to specific flaws in the model's reasoning process.

**Variants.** Papers use several names for the behavior, including Reasoning error, Reasoning Errors, Flawed reasoning, and Making systematic errors. Most papers study it in mathematical reasoning settings, including multimodal math, undergraduate-level math, and grade-school math, while one paper treats it as an audio reasoning failure where the model correctly perceives the audio but fails on the subsequent complex reasoning. Another variant emphasizes systematic errors that can sometimes be predicted before answer generation and explained through internal-state probing.

**Space of elicitation and scores.** Papers link it to one measurement instrument, Expert evaluation, and no other instrument is linked. In the recorded use, this instrument is an in-depth human analysis of model error cases that identifies reasoning error as one of the common error types.

**What it is taken as evidence of.** Papers connect this behavior to one construct, Reasoning, and no other construct is linked. The recorded relationship is that Reasoning is related to Reasoning error, with supporting language describing cases where models correctly perceive the input but still fail to apply the necessary complex reasoning.

## Sources

**[Measuring Multimodal Mathematical Reasoning with MATH-Vision Dataset](https://proceedings.neurips.cc/paper_files/paper/2024/file/ad0edc7d5fa1a783f063646968b7315b-Paper-Datasets_and_Benchmarks_Track.pdf)**
> An observable failure mode where the model does not apply logical steps correctly or makes inferential mistakes.

**[MMAU: A Massive Multi-Task Audio Understanding and Reasoning Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/d36f208919582785db965fe648b9fe59-Paper-Conference.pdf) (as "Reasoning Errors")**
> Observable failures where the model correctly perceives audio but fails to apply the necessary complex reasoning to derive the answer.

**[UGMathBench: A Diverse and Dynamic Benchmark for Undergraduate-Level Mathematical Reasoning with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c3af3531df85264decc31382cb319781-Paper-Conference.pdf) (as "Flawed reasoning")**
> An observable error where the model's generated solution path contains logical fallacies, incorrect steps, or misapplication of mathematical principles.

**[Physics of Language Models: Part 2.1, Grade-School Math and the Hidden Reasoning Process](https://proceedings.iclr.cc/paper_files/paper/2025/file/f3064f7a0ca2328ecb41a3aef6177d68-Paper-Conference.pdf) (as "Making systematic errors")**
> An observable failure mode where the model consistently produces incorrect answers that can be traced to specific, predictable flaws in its reasoning process.

## Relationships

### Reasoning error →
- **Manual error analysis** (measurements) — *measured_by*
  > we conduct an in-depth human analysis of the error cases made by GPT-4o, Qwen2-VL-7B, and Llama 3.2-Vision 11B... Through in-depth analysis, we have identified the following ﬁve common error types that current MLLMs are likely to make: (1) Reasoning Error... (Section 4)
  - [Are Multimodal LLMs Robust Against Adversarial Perturbations? RoMMath: A Systematic Evaluation on Multimodal Math Reasoning](https://aclanthology.org/2025.naacl-long.582.pdf)

### Associated with
- **Reasoning** (constructs)
  > “Reasoning Errors ... account for a significant portion of mistakes... suggesting that even when models correctly perceive the audio, they often fail to apply the necessary complex reasoning.”
  - [MMAU: A Massive Multi-Task Audio Understanding and Reasoning Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/d36f208919582785db965fe648b9fe59-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks)
  > hallucinations are not limited to factual inaccuracies; they can also extend to faulty or incomplete reasoning, a significant concern for multi-step reasoning-based tasks (Creswell et al., 2022). (Section 2)
  - [Automatic Curriculum Expert Iteration for Reliable LLM Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/9083c94382509473bdf5fc2672fc72b3-Paper-Conference.pdf)
