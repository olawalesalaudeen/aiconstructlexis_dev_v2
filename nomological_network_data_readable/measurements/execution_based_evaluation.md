# Execution-based evaluation
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** Sandbox execution, Execution-based focused evaluation  

## State of the Field

**What it is.** Across papers, the prevailing usage is an evaluation procedure that verifies success by execution rather than by static demonstrations or string matching. Most descriptions say it runs model outputs and checks results through scripts or test cases: one line checks the final state of a computer environment, another runs generated code in a secure, isolated, Docker-based sandbox against test cases, and another describes an execution-based focused evaluation in which scripts programmatically obtain database results and judge the core answer components while ignoring non-essential columns.

**What it is claimed to measure.** In the recorded relationships, papers use it to measure one behavioral indicator, Code generation, and no constructs. The measurement claims therefore center on code generation rather than being spread across multiple constructs; one study states that the method "executes generated code against test cases to measure the success rate."

**Space of uses.** Papers also link it to one other measurement instrument, OSWorld, which is described as supporting "execution-based evaluation of open-ended computer tasks" and as providing example-wise execution-based evaluation for tasks. Beyond that instrument-specific use, papers position it as a procedural check for open-ended computer tasks, for code outputs paired with test cases and validated in a sandbox, and for database results assessed by evaluator-written scripts.

## Sources

**[OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d413e48f84dc61244b6be550f1cd8f5-Paper-Datasets_and_Benchmarks_Track.pdf)**
> A method of evaluation where task completion is verified by a custom script that checks the final state of the computer environment, rather than relying on static demonstrations or string matching.

**[SelfCodeAlign: Self-Alignment for Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/72da102da91a8042a0b2aa968429a9f9-Paper-Conference.pdf) (as "Sandbox execution")**
> An evaluation procedure where model-generated code and test cases are executed in a secure, isolated environment to validate correctness.

**[Spider 2.0: Evaluating Language Models on Real-World Enterprise Text-to-SQL Workflows](https://proceedings.iclr.cc/paper_files/paper/2025/file/46c10f6c8ea5aa6f267bcdabcb123f97-Paper-Conference.pdf) (as "Execution-based focused evaluation")**
> An evaluation protocol where scripts programmatically obtain results from the database and assess success by focusing on the essential components of the answer, ignoring non-essential columns.

## Relationships

### → Execution-based evaluation
- **Code generation** (behaviors tasks) — *measured_by*
  > The execution-based method executes generated code against test cases to measure the success rate.
  - [McEval: Massively Multilingual Code Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/dad66bb085bab14fbca07cfa4271f00b-Paper-Conference.pdf)

### Associated with
- **OSWorld** (measurements)
  > “supporting task setup, interactive learning, and execution-based evaluation of open-ended computer tasks”
  - [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d413e48f84dc61244b6be550f1cd8f5-Paper-Datasets_and_Benchmarks_Track.pdf)
