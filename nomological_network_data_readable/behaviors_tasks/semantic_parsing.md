# Semantic parsing
**Type:** Behavior  
**Referenced in:** 21 papers  
**Also known as:** Query parsing, Prompt parsing, Intent and slot filling, Task-oriented dialogue parsing, Task-oriented semantic parsing, Logical form generation  

## State of the Field

**Space of definitions.** Across the surveyed papers, semantic parsing is most commonly described as translating natural language inputs, usually utterances, questions, instructions, or observations, into structured outputs such as logical forms, programs, queries, database commands, API calls, or JSON. The prevailing usage emphasizes outputs that are structured and often machine-executable or programmatic, while some papers additionally frame the target as a more canonical semantic representation. A smaller line of work narrows the task to parsing user queries or task descriptions into distinct components or predefined JSON keys, with one paper explicitly extracting fields such as instruction, input text, question, URL, data, and categories.

**Variants.** Papers study several named variants of this behavior. These include intent and slot filling, task-oriented dialogue parsing, and task-oriented semantic parsing, alongside logical form generation for knowledge base question answering, where targets include SPARQL, S-expressions, SQL, first-order logic, Lisp, and abstract syntax trees. Some papers also use narrower labels such as query parsing and prompt parsing when the output is a componentized or standardized JSON representation.

**Space of elicitation and scores.** Papers link semantic parsing to one measurement instrument, MTOP, which is used as a semantic parsing benchmark. The linked evidence presents MTOP explicitly under semantic parsing and alongside empirical evaluations on semantic parsing benchmarks. No other measurement instrument is linked in the papers.

**What it is taken as evidence of.** Only one construct is linked, knowledge base awareness, and the link is causal rather than evidential: one paper claims a causal relationship from knowledge base awareness to semantic parsing, stating that the agent's awareness of the environment makes it more effective in generating optimal logical forms. Papers also connect semantic parsing to one other behavioral indicator, code generation: one paper reports it is related to code generation, and another claims a causal relationship from semantic parsing to code generation in a system that integrates structure-based prompt parsing and multi-stage verification before code implementation. No other construct is linked in the papers.

## Sources

**[From an LLM Swarm to a PDDL-empowered Hive: Planning Self-executed Instructions in a Multi-modal Jungle](https://proceedings.iclr.cc/paper_files/paper/2025/file/b9a4215e2b23261056aeeba0f6f05371-Paper-Conference.pdf) (as "Query parsing")**
> The action of converting an unstructured natural language user query into a structured format with distinct components.

**[NeSyC: A Neuro-symbolic Continual Learner For Complex Embodied Tasks in Open Domains](https://proceedings.iclr.cc/paper_files/paper/2025/file/d569e4655e2835e3d38310b67c5ad646-Paper-Conference.pdf)**
> The task of translating natural language inputs, such as observations or instructions, into a structured, programmatic, or logical form.

**[AutoML-Agent: A Multi-Agent LLM Framework for Full-Pipeline AutoML](https://raw.githubusercontent.com/mlresearch/v267/main/assets/trirat25a/trirat25a.pdf) (as "Prompt parsing")**
> Converting unstructured user task descriptions into structured JSON format with standardized keys to extract requirements for downstream agents.

**[STARE at the Structure: Steering ICL Exemplar Selection with Structural Alignment](https://aclanthology.org/2025.emnlp-main.746.pdf) (as "Intent and slot filling")**
> A semantic parsing task common in dialogue systems where the goal is to identify the user's overall goal (intent) and extract specific pieces of information (slots).

**[STARE at the Structure: Steering ICL Exemplar Selection with Structural Alignment](https://aclanthology.org/2025.emnlp-main.746.pdf) (as "Task-oriented dialogue parsing")**
> A semantic parsing task focused on interpreting user utterances within a goal-oriented conversation to update a dialogue state or execute an action.

**[Grammar Pruning: Enabling Low-Latency Zero-Shot Task-Oriented Language Models for Edge AI](https://aclanthology.org/2025.emnlp-main.858.pdf) (as "Task-oriented semantic parsing")**
> Converting natural-language user requests into structured machine-readable representations such as API calls.

**[CompKBQA: Component-wise Task Decomposition for Knowledge Base Question Answering](https://aclanthology.org/2025.emnlp-main.16.pdf) (as "Logical form generation")**
> The task of converting a natural language question into a structured, executable query such as SPARQL or S-Expression.

## Relationships

### Semantic parsing →
- **MTOP** (measurements) — *measured_by*
  > MTOP [22] Semantic Parsing (Table 1)
  - [Mixture of Demonstrations for In-Context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/a0da098e0031f58269efdcba40eedf47-Paper-Conference.pdf)
- **Code generation** (behaviors tasks) — *causes*
  > we integrate structure-based prompt parsing and multi-stage verification to ensure the quality of resulting solutions and instructions prior to actual code implementation, thereby improving overall performance.
  - [AutoML-Agent: A Multi-Agent LLM Framework for Full-Pipeline AutoML](https://raw.githubusercontent.com/mlresearch/v267/main/assets/trirat25a/trirat25a.pdf)

### → Semantic parsing
- **Knowledge base awareness** (constructs) — *causes*
  > The agent’s awareness of the environment makes it more effective in generating optimal logical forms compared to end-to-end methods. (Proposition 4.1)
  - [KBQA-o1: Agentic Knowledge Base Question Answering with Monte Carlo Tree Search](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25d/luo25d.pdf)
