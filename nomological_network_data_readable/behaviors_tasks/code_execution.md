# Code execution
**Type:** Behavior  
**Referenced in:** 16 papers  
**Also known as:** Automatic debugging, SQL query execution, Program execution  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats code execution as running model-generated or provided code in an interpreter, sandbox, or similar execution environment and then using the resulting output. Most descriptions place it inside reasoning or answer production, for example computing or transforming information, validating correctness, or generating intermediate outputs, and some papers explicitly describe incremental execution followed by evaluation of the results and correction of buggy or illogical solution steps. More task-specific definitions narrow the behavior to correctly executing SQL queries on tables, running knowledge-intensive programs via a system executor, or executing guardrail code to evaluate whether safety conditions are met and return a decision and explanation.

**Variants.** Papers study the behavior under several names and settings. The dominant form is ordinary code execution in math problem solving, general assistant tasks, reward modeling, annotation verification, and agentic arithmetic, while other papers describe program execution for knowledge-intensive calculations, SQL query execution on generated tables, and script or command execution that extends OS agents beyond predefined GUI actions. A smaller usage appears as automatic debugging, defined as inferring program state from partial code, such as a variable value at a specific line, and one paper explicitly states this is done without executing the program.

**Space of elicitation and scores.** Only one measurement instrument is linked to it in papers, CRUXEval, and the link is described as related rather than measured_by: one paper says its code execution scenario is based on CRUXEval's output prediction setup. In practice, papers most often elicit or score the behavior by sending generated code to a code interpreter or sandbox and using the execution message, output, or execution feedback to verify correctness; other implementations use an external engine or a system executor.

**What it is taken as evidence of.** No construct is linked to it in papers. The recorded links instead stay at the behavioral level: one paper claims a causal relationship from code execution to self-correction, another claims a causal relationship from code execution to self-reflection, and one paper relates code execution to tool use.

## Sources

**[GAIA: a benchmark for General AI Assistants](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf)**
> The observable process where the model runs generated code within an interpreter and receives the output.

**[A Mathematical Framework for AI-Human Integration in Work](https://raw.githubusercontent.com/mlresearch/v267/main/assets/celis25a/celis25a.pdf) (as "Automatic debugging")**
> The task of inferring the state of a program, such as the value of a variable at a specific line, given only partial code.

**[Benchmarking Large Language Models Under Data Contamination: A Survey from Static to Dynamic Evaluation](https://aclanthology.org/2025.emnlp-main.511.pdf) (as "SQL query execution")**
> The observable behavior of processing and correctly executing SQL queries on database tables.

**[Learning to Solve Domain-Specific Calculation Problems with Knowledge-Intensive Programs Generator](https://aclanthology.org/2025.naacl-long.245.pdf) (as "Program execution")**
> Running generated knowledge-intensive programs in a secure environment to compute intermediate or final outputs based on extracted variables.

## Relationships

### Code execution →
- **Self-correction** (behaviors tasks) — *causes*
  > The analysis reveals that GPT4-Code’s strong performance is not solely due to its code generation and execution abilities but also its capacity to adjust its problem-solving strategies based on feedback from code execution—a process we term self-debugging
  - [Solving Challenging Math Word Problems Using GPT-4 Code Interpreter with Code-based Self-Verification](https://proceedings.iclr.cc/paper_files/paper/2024/file/12c45a68e8433b21b91cd47731387fa4-Paper-Conference.pdf)
- **Self-reflection** (behaviors tasks) — *causes*
  > After the LLM generates a response containing code, we execute the code and return the results for further self-reflection and refinement.
  - [Steering Large Language Models between Code Execution and Textual Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f763f7c9a6599e14b07add5937d8189c-Paper-Conference.pdf)

### Associated with
- **Tool use** (behaviors tasks)
  > Tool Use: The ability to interact with external tools and APIs, including functions such as web browsing, code execution, and file uploads. (Section 2.1)
  - [Law of the Weakest Link: Cross Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/63ea6a7d01a34a2c7334dcf1a2c3b03d-Paper-Conference.pdf)
