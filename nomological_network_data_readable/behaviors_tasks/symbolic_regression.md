# Symbolic regression
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats symbolic regression as a search task: finding a compact, programmatic mathematical expression that best explains a dataset of input-output examples. The same paper also describes the target as compact or succinct programmatic hypotheses written in a flexible, domain-specific programming language, so success is framed as explaining the dataset with a compact hypothesis.

**Variants.** Explicit subtask variants are not named in the available definitions. Papers do, however, use the abbreviation SR, frame the task as operating over a flexible domain-specific programming language, and link it to one other behavioral indicator, code generation, through a related claim that formulates symbolic regression as a program synthesis problem. Another paper discusses it in domains such as physics, biology, and finance when describing transparent, understandable models.

**Space of elicitation and scores.** No measurement instrument is linked to it in the papers. The recorded use centers on the task formulation itself rather than on a named elicitation or scoring instrument.

**What it is taken as evidence of.** Papers link symbolic regression to three constructs, and they do not converge on a single construct it reflects. One paper claims causal relationships from in-context learning and world knowledge to symbolic regression, describing a loop that exploits background knowledge and in-context learning ability. Another paper treats symbolic regression as related to interpretability and explainability, stating that its flexibility allows both high accuracy and interpretability.

## Sources

**[Symbolic Regression with a Learned Concept Library](https://proceedings.neurips.cc/paper_files/paper/2024/file/4ec3ddc465c6d650c9c419fb91f1c00a-Paper-Conference.pdf)**
> The task of searching for a compact, programmatic mathematical expression that best explains a given dataset of input-output examples.

## Relationships

### Associated with
- **Code generation** (behaviors tasks)
  > We formulate symbolic regression (SR) as a program synthesis [6] problem. (Section 2)
  - [Symbolic Regression with a Learned Concept Library](https://proceedings.neurips.cc/paper_files/paper/2024/file/4ec3ddc465c6d650c9c419fb91f1c00a-Paper-Conference.pdf)
- **Interpretability and explainability** (constructs)
  > This flexibility allows SR to achieve both high accuracy and interpretability, making it especially valuable in fields such as physics (Udrescu et al., 2020), biology (Brunton et al., 2016), and finance (Liu & Guo, 2023), where uncovering transparent, understandable models is crucial for scientific discovery and informed decision-making.
  - [RAG-SR: Retrieval-Augmented Generation for Neural Symbolic Regression](https://proceedings.iclr.cc/paper_files/paper/2025/file/19a8e70828c01059631f913442ae31e6-Paper-Conference.pdf)
