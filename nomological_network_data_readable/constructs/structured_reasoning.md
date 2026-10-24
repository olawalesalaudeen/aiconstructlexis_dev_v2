# Structured reasoning
**Type:** Construct  
**Referenced in:** 11 papers  
**Also known as:** Structural reasoning  

## State of the Field

**Definition agreement:** Complementary. Most papers define structured reasoning as a model's latent ability to carry out organized, multi-step inference with explicit dependencies, intermediate steps, or non-linear reasoning paths. A few narrow this to particular settings such as reasoning over knowledge graphs or producing outputs that satisfy graph, hierarchical, or temporal constraints, so they emphasize different facets of the same model-level reasoning ability rather than incompatible constructs.

**Space of definitions.** Across the papers, the prevailing usage describes structured reasoning as organized, multi-step reasoning that follows explicit structure or constraints. Definitions commonly invoke formal dependencies in planning, step-wise decomposition into causally linked steps, graph-like integration of internal knowledge with external structured evidence, or explicit intermediate steps toward a conclusion. A smaller line of work narrows the term to non-linear tree or graph reasoning, or to generating outputs that satisfy hierarchical and temporal constraints such as valid DAGs and correct start and finish ordering.

**Space of facets.** Papers use both structured reasoning and structural reasoning for related ideas, and they describe it through several forms of organization rather than a single subtype. Some formulations emphasize sequential, explicit reasoning steps, including graphs of interconnected steps drawing on causality theory, while others emphasize structural CoTs with multi-chain, tree, or graph forms. Another recurring distinction is between reasoning over structured knowledge or semantically rich graphs and generating structures that themselves obey graph and time constraints.

**Space of measurement.** In the recorded links, it is linked to 1 measurement instrument and 2 behavioral indicators. The only linked instrument is ARC, a benchmark described as designed for human-like structured reasoning. The linked behavioral indicators are Code generation and Graph partitioning, both related rather than direct measurements, so the recorded measurement link focuses on benchmarked structured problem solving while the definitions also cover planning, text assessment, graph-based inference, and constraint-following generation.

**Links.** A few papers claim a causal relationship from Structured reasoning to Interpretability and explainability, using language about enhancing explainability and making verification interpretable and executable. Other papers relate Code generation, Causal reasoning, and Graph partitioning to Structured reasoning, including formulations that tie it to data transformation tasks, graphs of reasoning steps drawing on causality theory, and native structural reasoning for graph partitioning.

## Sources

**[Leveraging Environment Interaction for Automated PDDL Translation and Planning with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/44af065477781e7f8a8589b14a62c489-Paper-Conference.pdf)**
> The ability to reason in a way that respects formal constraints and multi-step dependencies in planning problems.

**[UniCoTT: A Unified Framework for Structural Chain-of-Thought Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ca642f8e1174012d67c05c1c9f969644-Paper-Conference.pdf) (as "Structural reasoning")**
> The ability to follow and generate complex, non-linear reasoning paths, such as those structured as trees or graphs.

## Relationships

### Structured reasoning →
- **Interpretability and explainability** (constructs) — *causes*
  > To enhance the accuracy and explainability of natural language reasoning, structured reasoning has been frequently explored as an alternative. (Introduction)
  - [SymBa: Symbolic Backward Chaining for Structured Natural Language Reasoning](https://aclanthology.org/2025.naacl-long.124.pdf)
- **Abstraction and Reasoning Corpus** (measurements) — *measured_by*
  > As one example, consider the Abstraction and Reasoning Corpus (ARC) [14], which was designed as a benchmark for human-like structured reasoning.
  - [HYSYNTH: Context-Free LLM Approximation for Guiding Program Synthesis](https://proceedings.neurips.cc/paper_files/paper/2024/file/1c9c85bae6161d52182d0fe2f3640512-Paper-Conference.pdf)

### Associated with
- **Causal reasoning** (constructs)
  > STRICTA breaks down the assessment into a graph of interconnected reasoning steps drawing on causality theory (Pearl, 1995).
  - [STRICTA: Structured Reasoning in Critical Text Assessment for Peer Review and Beyond](https://aclanthology.org/2025.acl-long.1107.pdf)
- **Program synthesis ability** (constructs)
  > Beyond grid puzzles, PBE is a general paradigm for structured reasoning and data transformation tasks
  - [HYSYNTH: Context-Free LLM Approximation for Guiding Program Synthesis](https://proceedings.neurips.cc/paper_files/paper/2024/file/1c9c85bae6161d52182d0fe2f3640512-Paper-Conference.pdf)
