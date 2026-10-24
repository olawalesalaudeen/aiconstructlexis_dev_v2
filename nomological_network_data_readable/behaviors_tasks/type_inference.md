# Type inference
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Type annotation prediction, Type prediction  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage treats type inference as predicting missing static types in code. One framing is specifically about untyped Python repositories, where the goal is to infer and insert type hints for function parameters, return values, and variables, described as inferring types "that could have been written by developers"; an example adds "name: str" and "-> str" to an untyped function signature (TypyBench: Evaluating LLM Type Inference for Untyped Python Repositories). A broader formulation describes it as inferring and assigning static types to variables and functions in a dynamically typed programming language.

**Variants.** Papers use both Python-specific and broader language-level variants of the task. One recurring setting is Python code without annotations, especially repository code with missing hints, while another formulation covers variables and functions in a dynamically typed programming language more generally. The papers also use the names "type annotation prediction" and "type prediction" for this behavior.

**Space of elicitation and scores.** No measurement instrument is linked to it. In these papers, the behavior is specified directly as inserting missing type hints or assigning static types, rather than through a named instrument.

**What it is taken as evidence of.** The construct linkage is limited. The only linked construct is Code understanding, and that connection is reported as related rather than as a measurement claim: one paper states that "while large language models (LLMs) have shown promise in code understanding, their type inference capabilities remain underexplored."

## Sources

**[TypyBench: Evaluating LLM Type Inference for Untyped Python Repositories](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25l/dong25l.pdf) (as "Type annotation prediction")**
> Inferring and inserting type hints for function parameters, return values, and variables in Python code where such annotations are missing.

**[EffiCoder: Enhancing Code Generation in Large Language Models through Efficiency-Aware Fine-tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25as/huang25as.pdf) (as "Type prediction")**
> The task of inferring and assigning static types to variables and functions in a dynamically typed programming language.
