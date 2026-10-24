# Code output prediction
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Output prediction, Execution reasoning, Code execution prediction  

## State of the Field

**Space of definitions.** Across the available definitions, the prevailing usage treats it as predicting a program's final output from the program and its inputs. A broader framing calls it execution reasoning, extending the task to inferring inputs from outputs and often asking for step by step simulation; across both framings, the common element is explicit execution simulation, with one paper stating that "the output prediction requires the LLM to simulate a compiler."

**Variants.** Papers use both the narrower name "output prediction" and the broader label "execution reasoning." Studied variants include output prediction, input prediction, and code execution tasks, and some formulations require a verbal trace that explains each line's impact, which lines are executed, how variables change, and what final output is produced.

**Space of elicitation and scores.** Papers measure it with 2 instruments, most often CRUXEval and then LiveCodeBench. These are used as benchmark tasks: CRUXEval appears through CruxEval-I for input prediction and CruxEval-O for output prediction, while LiveCodeBench is used through a code execution task.

**What it is taken as evidence of.** Papers link it to 1 construct, Test generation ability. Rather than presenting it as a direct indicator of a construct, one paper claims a causal relationship from code output prediction to Test generation ability, attributing weaker test generation to models "struggling to reason about execution" and to frequent assertion errors on complex code paths; no other construct link is recorded.

## Sources

**[Unveiling the Magic of Code Reasoning through Hypothesis Decomposition and Amendment](https://proceedings.iclr.cc/paper_files/paper/2025/file/eeffa70bcbbd43f6bd067edebc6595e8-Paper-Conference.pdf) (as "Output prediction")**
> Predicting the final output of a program given the program and its inputs.

**[SemCoder: Training Code Language Models with Comprehensive Semantics Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/6efcc7fd8efeee29a050a79c843c90e0-Paper-Conference.pdf) (as "Execution reasoning")**
> The observable task of predicting program outputs given inputs or inferring inputs given outputs, often involving step-by-step simulation.

**[CodeIO: Condensing Reasoning Patterns via Code Input-Output Prediction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25t/li25t.pdf) (as "Code execution prediction")**
> The observable task of predicting the final output or result of executing a given piece of code.

## Relationships

### Code output prediction →
- **CRUXEval** (measurements) — *measured_by*
  > two code-understanding tasks—namely, CruxEval-I (input prediction) and CruxEval-O (output prediction) from CruxEval benchmark [6] (Section 4.1).
  - [Prompt Tuning Strikes Back: Customizing Foundation Models with Low-Rank Prompt Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/548551c07a68c8f0a87d67c6167cedb1-Paper-Conference.pdf)
- **LiveCodeBench** (measurements) — *measured_by*
  > "For execution reasoning, we employ CRUXEval [37] and the code execution task in LiveCodeBench (LCB-Exec for short) [18]."
  - [SemCoder: Training Code Language Models with Comprehensive Semantics Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/6efcc7fd8efeee29a050a79c843c90e0-Paper-Conference.pdf)
