# HumanEvalFix
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Across the definitions, the prevailing description is a benchmark for fixing bugs in provided functions with accompanying test cases. Papers also frame it as function-level bug fixing, and one usage narrows it to the Python subset and lets models or agents self-debug over multiple turns with feedback from test execution.

**What it is claimed to measure.** Papers use HumanEvalFix to measure one behavioral indicator, Code debugging, and one construct, Code editing ability. The linked claims center on bug fixing and debugging: several papers describe it as measuring Code debugging through tasks where an incorrect function with unit tests is given and the system is asked to fix it, while one paper also reports using it to evaluate Code editing ability.

**Space of uses.** In the available papers, it is used as an evaluation benchmark for code-editing tasks. One paper uses it alongside CanItEdit, NoFunEval, Aider, and Aider Polyglot, while another applies it in a multi-turn setup where the system solves bugs by self-debug using test-execution feedback.

## Sources

**[OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/a4b6ad6b48850c0c331d1259fc66a69c-Paper-Conference.pdf)**
> HumanEvalFix is a benchmark in which agents fix bugs in provided functions using test cases and iterative debugging.

## Relationships

### → HumanEvalFix
- **Code debugging** (behaviors tasks) — *measured_by*
  > HUMANEVALFIX (NL+C!C) Given an incorrect code function with a subtle bug and accompanying unit tests, the model is tasked to ﬁx the function. (Section 3)
  - [OctoPack: Instruction Tuning Code Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1ec299a5229034141e58aeded0d0b9de-Paper-Conference.pdf)
- **Code editing ability** (constructs) — *measured_by*
  > "we use CanItEdit (Cassano et al., 2023), HumanEvalFix (Muennighoff et al., 2023), NoFunEval (Singhal et al., 2024), Aider (Gauthier, 2024a) and Aider Polyglot (Gauthier, 2024b) to evaluate on code-editing tasks."
  - [NextCoder: Robust Adaptation of Code LMs to Diverse Code Edits](https://raw.githubusercontent.com/mlresearch/v267/main/assets/aggarwal25b/aggarwal25b.pdf)
