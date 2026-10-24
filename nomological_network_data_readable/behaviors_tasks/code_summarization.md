# Code summarization
**Type:** Behavior  
**Referenced in:** 13 papers  
**Also known as:** Linguistic description generation, Code documentation, Docstring completion, Code commenting  

## State of the Field

**Space of definitions.** Most papers describe it as generating a concise natural-language description, summary, or specification for a given program, function, code snippet, or code block, aimed at capturing functionality, intent, or behavior. Some authors instead describe it as documentation that explains what the code does and how it works, including side effects and special cases, and a minority framing also allows symbolic summaries such as function names. Success is usually described in terms of accurately describing the code, with some papers asking for a short sentence, a docstring, or up to three sentences; a paper defines hallucination in this task as summaries that do not accurately capture the code's intent and implementation details.

**Variants.** Papers study several nearby variants under different names: code documentation, docstring completion, code commenting, function name prediction, and PL-to-NL generation. The settings include IR functions, source code snippets, incomplete code snippets, and existing source code, and some work asks for summaries after code generation. Function name prediction is presented as predicting a symbolic summary of function behavior, while other variants ask for explanatory comments or docstrings.

**Space of elicitation and scores.** Elicitation is usually by prompting the model to produce a short natural-language description or docstring for code, for example "write a short sentence to describe the function of the incomplete code snippet" or "summarize pl0 into a new docstring nl1." Papers link it to 1 measurement instrument, CodeXGLUE, which is used as a benchmark for this task; papers do not name another instrument.

**What it is taken as evidence of.** Papers link it to 1 construct, semantic understanding. A paper says summarization "serves as a proxy" for whether a model can capture functional intent, behavior, and output, linking semantic understanding and code summarization through a measured_by relation. Papers do not connect it to another construct.

## Sources

**[Monte Carlo Tree Search for Comprehensive Exploration in LLM-Based Automatic Heuristic Design](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zheng25o/zheng25o.pdf) (as "Linguistic description generation")**
> The observable action of generating a natural language summary of a given piece of code that describes its functionality.

**[Position: Future Research and Challenges Remain Towards AI for Software Engineering](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gu25e/gu25e.pdf) (as "Code documentation")**
> Writing documentation that explains what code does and how it works, including side effects and special cases.

**[SPE Attention: Making Attention Equivariant to Semantic-Preserving Permutation for Code Processing](https://aclanthology.org/2025.emnlp-main.332.pdf)**
> The observable behavior of producing natural language or symbolic summaries (such as function names) that capture the intent or behavior of a code block.

**[Efficient Automated Circuit Discovery in Transformers using Contextual Decomposition](https://proceedings.iclr.cc/paper_files/paper/2025/file/916ee60e315531d6b3954af8a8dc3437-Paper-Conference.pdf) (as "Docstring completion")**
> A code-related task that involves generating a documentation string (docstring) for a given function or code block.

**[CodexGraph: Bridging Large Language Models and Code Repositories via Code Graph Databases](https://aclanthology.org/2025.naacl-long.7.pdf) (as "Code commenting")**
> The task of generating explanatory comments or documentation for existing source code.

## Relationships

### Code summarization →
- **CodeXGLUE** (measurements) — *measured_by*
  > for the other four tasks, we use the CodeXGLUE (Lu et al., 2021) benchmark. Among these tasks’ data, we downsampled the original data of code summarization and clone detection due to computation constraints... (Section 4.1.2)
  - [GALLa: Graph Aligned Large Language Models for Improved Source Code Understanding](https://aclanthology.org/2025.acl-long.676.pdf)

### Associated with
- **Hallucination** (behaviors tasks)
  > in the context of code summarisation, hallucination can be defined as a condition in which the generated summary does not accurately capture the intent and implementation details of the given input code. (Section 1)
  - [ETF: An Entity Tracing Framework for Hallucination Detection in Code Summaries](https://aclanthology.org/2025.acl-long.1480.pdf)
- **Semantic understanding** (constructs)
  > This task complements Task 2 by shifting the focus toward semantic understanding. In this setting, LLMs are required to generate concise natural language summaries of IR functions. ... Summarization serves as a proxy to evaluate whether the model can accurately capture functional intent, behavior, and output—ultimately revealing its capacity to reason about function-level semantics. (Section 3.1)
  - [Can Large Language Models Understand Intermediate Representations in Compilers?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jiang25p/jiang25p.pdf)
