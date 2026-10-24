# Code editing
**Type:** Behavior  
**Referenced in:** 16 papers  
**Also known as:** Program editing, Code modification, Code refinement, CSS style adjustment, Code editing task, Code edit generation, Update code, Instructional code editing  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is modifying existing code in response to a natural-language instruction, request, or feedback, with success defined as producing updated code that satisfies the requested change. Definitions also describe it as goal-directed editing to alter output or correct errors, or as adding, deleting, or changing lines to implement a fix or new feature. A smaller line of work frames the behavior as iterative refinement of previously generated code, and visually grounded versions require the edited code to produce a target shape or a rendering that matches a target design.

**Variants.** Variants differ by scope and setting. Some papers study file-level editing, while others span function, class, or file level, or require actions across multiple files during long agent trajectories with intermediate feedback. Alternative labels include program editing, code modification, and code refinement, and more specialized settings include CSS style adjustment and code edit generation, sometimes emitted in Search/Replace form after file, function, or line localization. Another visual-programming variant asks models to adjust Python Turtle code from textual or visual instructions to generate a target shape.

**Space of elicitation and scores.** No measurement instrument is linked to it. Papers instead operationalize the behavior through task setups that expect an updated code snippet, a formatted code edit such as Search/Replace, or iterative code changes until an output, shape, or rendering matches the target.

**What it is taken as evidence of.** Papers link it to three constructs, and they do not converge on a single linked construct. The prevailing claim is a causal relationship from code editing to Generalization, including statements that reasoning over differences between program states can aid generalization and that explicit editing rules improve length generalization. Smaller strands claim causal relationships from code editing to Functional correctness and to Robustness.

## Sources

**[Learning to Edit Visual Programs with Self-Supervision](https://proceedings.neurips.cc/paper_files/paper/2024/file/c585301e1c4b7c50039de5413ef585b5-Paper-Conference.pdf) (as "Program editing")**
> The task of modifying an existing program in a goal-directed manner to alter its output or correct errors.

**[SelfCodeAlign: Self-Alignment for Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/72da102da91a8042a0b2aa968429a9f9-Paper-Conference.pdf)**
> Editing an existing program according to a natural-language instruction to produce an updated code snippet.

**[MAGIS: LLM-Based Multi-Agent Framework for GitHub Issue Resolution](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d1f02132ef51602adf07000ca5b6138-Paper-Conference.pdf) (as "Code modification")**
> The observable action of altering existing source code by adding, deleting, or changing lines to implement a fix or new feature.

**[Source Code Foundation Models are Transferable Binary Analysis Knowledge Bases](https://proceedings.neurips.cc/paper_files/paper/2024/file/cc83e97320000f4e08cb9e293b12cf7e-Paper-Conference.pdf) (as "Code refinement")**
> The task of improving or correcting an existing piece of source code.

**[VisualAgentBench: Towards Large Multimodal Models as Visual Foundation Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/eea71dc576381b88f2a0ca4dedc2140d-Paper-Conference.pdf) (as "CSS style adjustment")**
> The task of iteratively editing CSS style rules to make a web page's rendering match a target design.

**[TurtleBench: A Visual Programming Benchmark in Turtle Geometry](https://aclanthology.org/2025.naacl-long.607.pdf) (as "Code editing task")**
> A task type within TurtleBench where models are given existing code and instructed to modify it to produce a visually altered shape based on textual or visual instructions.

**[SoRFT: Issue Resolving with Subtask-oriented Reinforced Fine-Tuning](https://aclanthology.org/2025.acl-long.559.pdf) (as "Code edit generation")**
> The observable task of producing code modifications, often in a specific format like Search/Replace, to fix a software issue based on the localized code context.

**[Are Large Language Models Ready for Multi-Turn Tabular Data Analysis?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25aj/li25aj.pdf) (as "Update code")**
> Revising or fixing previously generated code in response to user requests for bug fixes or refinements.

**[CursorCore: Assist Programming through Aligning Anything](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jiang25f/jiang25f.pdf) (as "Instructional code editing")**
> The task of generating or modifying a code snippet based on a user's explicit natural language instructions.

## Relationships

### Code editing →
- **Generalization** (constructs) — *causes*
  > Reasoning over the differences between the two states admits a more local task (as evidenced by our data efficient learning), and this property can aid in generalization. (Appendix B.1)
  - [Learning to Edit Visual Programs with Self-Supervision](https://proceedings.neurips.cc/paper_files/paper/2024/file/c585301e1c4b7c50039de5413ef585b5-Paper-Conference.pdf)
- **Robustness** (constructs) — *causes*
  > With explicit editing rules, EDITLORD significantly improved the baseline in generalization, e.g., by up to 24.87% improvement in length generalization and 58.1% improved robustness against semantics-preserving code transformations. (Section 1)
  - [EditLord: Learning Code Transformation Rules for Code Editing](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25al/li25al.pdf)
- **Functional correctness** (constructs) — *causes*
  > EDITLORD outperforms the state-of-the-art by an average of 22.7% in editing performance and 58.1% in robustness while achieving 20.2% higher functional correctness across critical software engineering and security applications, LM models, and editing modes. (Abstract)
  - [EditLord: Learning Code Transformation Rules for Code Editing](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25al/li25al.pdf)
