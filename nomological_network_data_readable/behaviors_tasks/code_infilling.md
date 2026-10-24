# Code infilling
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Code insertion, Fill-in-the-middle  

## State of the Field

**Space of definitions.** Most papers describe it as generating a missing code segment between left and right context, often in the middle of an existing file or snippet with code available above and below the target location. A smaller line of work frames the same behavior as code insertion, meaning completing or inserting code into an existing program context rather than generating a solution from scratch. Some descriptions also make the success condition explicit, saying the missing section should be locally coherent and connect properly to the right context, and some evaluations distinguish insertion from ordinary completion and assess outputs against test cases.

**Variants.** Papers use several names for closely similar settings, especially code insertion and fill-in-the-middle (FIM). The variants described include local-file infilling where the model sees code above and below the reference code, missing single lines or broader line or block segments within an existing snippet, and insertion at a designated position or completion at the end of existing code. One paper also reports that code generation is related to code infilling, describing a local-file setting that simulates developers infilling code in the middle of a file.

**Space of elicitation and scores.** No measurement instrument is linked to it. Where papers describe elicitation or scoring, they refer to insertion scores for models that support that mode, performance against test cases, and evaluation of fill-in-the-middle capabilities, without linking a recurring named instrument to the behavior.

**What it is taken as evidence of.** Papers do not link code infilling to any construct, and they do not explicitly state what construct it reflects. Instead, the available links stay at the task level, including one paper that says code generation is related to code infilling.

## Sources

**[EvoCodeBench: An Evolving Code Generation Benchmark with Domain-Specific Evaluations](https://proceedings.neurips.cc/paper_files/paper/2024/file/6a059625a6027aca18302803743abaa2-Paper-Datasets_and_Benchmarks_Track.pdf)**
> Generating code in the middle of a file given code contexts both above and below the target function location.

**[WizardCoder: Empowering Code Large Language Models with Evol-Instruct](https://proceedings.iclr.cc/paper_files/paper/2024/file/72eba29737f9c3a5a4ce8cdb7b667145-Paper-Conference.pdf) (as "Code insertion")**
> Completing or inserting code into an existing program context rather than generating a solution from scratch.

**[LibEvolutionEval: A Benchmark and Study for Version-Specific Code Generation](https://aclanthology.org/2025.naacl-long.348.pdf) (as "Fill-in-the-middle")**
> Generating code that fits between a left and right context, simulating real-world editing where code is inserted into existing files.

## Relationships

### Associated with
- **Code generation** (behaviors tasks)
  > “The local file denotes the code file where the reference code is in. This setting simulates the scenario where developers infill code in the middle of a file.”
  - [EvoCodeBench: An Evolving Code Generation Benchmark with Domain-Specific Evaluations](https://proceedings.neurips.cc/paper_files/paper/2024/file/6a059625a6027aca18302803743abaa2-Paper-Datasets_and_Benchmarks_Track.pdf)
