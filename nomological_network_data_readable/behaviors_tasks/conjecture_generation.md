# Conjecture generation
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Formal conjecture generation  

## State of the Field

**Space of definitions.** In the available definition, papers frame conjecture generation as proposing new, related, and solvable mathematical statements from existing seed theorems and proofs. One source snippet places it in a cycle where researchers propose "novel conjectures or exercises," often as variants of known results, and then attempt to solve them.

**Variants.** Variant naming is narrow in the available work: the main label is "Formal conjecture generation." The studied setting is formal mathematics grounded in seed theorems and proofs, and the snippets broaden this slightly to "conjectures or exercises," often treated as variants of known results rather than a wider set of sub-tasks or modalities.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, the available operationalization elicits the behavior through an iterative conjecturer trained on previously generated conjectures that are "barely provable by the current prover," with the behavior described in terms of generating related, solvable, and increasingly challenging conjectures.

**What it is taken as evidence of.** Papers do not explicitly link conjecture generation to any construct, so there is no stated construct that it is taken to evidence. Outside construct links, one paper claims a causal relationship from Conjecture generation to Formal theorem proving, and another reports that it is related to Code generation.

## Sources

**[STP: Self-play LLM Theorem Provers with Iterative Conjecturing and Proving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25h/dong25h.pdf) (as "Formal conjecture generation")**
> The observable task of proposing new, related, and solvable mathematical statements (conjectures) based on existing seed theorems and proofs.

## Relationships

### Associated with
- **Code generation** (behaviors tasks)
  > Conjecture generation is a crucial component in current evolutionary approaches to mathematical discovery... The basic idea is that because computer code is more interpretable than raw ML predictions, one can use an LLM to generate (human-interpretable) code that solves a mathematical task. This is often known as program synthesis. (Section 5).
  - [Machine Learning meets Algebraic Combinatorics: A Suite of Datasets Capturing Research-level Conjecturing Ability in Pure Mathematics](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chau25a/chau25a.pdf)
- **Formal theorem proving** (behaviors tasks)
  > “The conjecturer is trained iteratively on previously generated conjectures that are barely provable by the current prover, which incentivizes it to generate increasingly challenging conjectures over time.”
  - [STP: Self-play LLM Theorem Provers with Iterative Conjecturing and Proving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25h/dong25h.pdf)
