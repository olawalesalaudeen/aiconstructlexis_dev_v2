# Premise selection
**Type:** Behavior  
**Referenced in:** 8 papers  
**Also known as:** Premise retrieval  

## State of the Field

**Space of definitions.** The available definition describes premise selection as identifying and retrieving relevant existing theorems, definitions, or lemmas from a large library for use in a new proof. In LeanAgent: Lifelong Learning for Formal Theorem Proving, it is framed as the selection of relevant premises, and effective premise selection is described as "a critical challenge in theorem proving."

**Variants.** The described setting is formal theorem proving, where the behavior concerns searching a large library of prior results for a new proof. The available description does not specify additional sub-tasks or modalities beyond selecting relevant premises, where the premises can be theorems, definitions, or lemmas.

**Space of elicitation and scores.** No measurement instrument is linked to it.

**What it is taken as evidence of.** No construct is linked to it as something it evidences. Separately, one paper reports that formal theorem proving is related to premise selection.

## Sources

**[LeanAgent: Lifelong Learning for Formal Theorem Proving](https://proceedings.iclr.cc/paper_files/paper/2025/file/b67c77f8db8b991d73d6f2e16f491840-Paper-Conference.pdf)**
> The behavior of identifying and retrieving relevant existing theorems, definitions, or lemmas (premises) from a large library to use in a new proof.

**[Magnushammer: A Transformer-Based Approach to Premise Selection](https://proceedings.iclr.cc/paper_files/paper/2024/file/ab5f5f22e3e09f4424592ffb06840ab0-Paper-Conference.pdf) (as "Premise retrieval")**
> The observable action of selecting and returning a ranked list of premises from a database in response to a given proof state.

## Relationships

### Associated with
- **Sledgehammer** (measurements)
  > Up to this last step, known as proof reconstruction, Sledgehammer is essentially used as a precise premise selection tool. (Section 2)
  - [Magnushammer: A Transformer-Based Approach to Premise Selection](https://proceedings.iclr.cc/paper_files/paper/2024/file/ab5f5f22e3e09f4424592ffb06840ab0-Paper-Conference.pdf)
- **Formal theorem proving** (behaviors tasks)
  > A critical challenge in theorem proving is the effective selection of relevant premises (Irving et al., 2016; Tworkowski et al.). (Section: 2 PRELIMINARIES)
  - [LeanAgent: Lifelong Learning for Formal Theorem Proving](https://proceedings.iclr.cc/paper_files/paper/2025/file/b67c77f8db8b991d73d6f2e16f491840-Paper-Conference.pdf)
