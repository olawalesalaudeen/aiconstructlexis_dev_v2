# Code refactoring
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Multi-file code refactoring  

## State of the Field

**Space of definitions.** Across the definitions, code refactoring is treated as rewriting parts of a working software implementation while preserving its external functionality or correctness, with the aim of improving structure or quality. A narrower formulation describes multi-file code refactoring as editing code across multiple files in a repository to implement a specified refactor, where success is framed as generating a patch that makes the repository follow the rules of that refactor.

**Variants.** The main variant in these papers is multi-file code refactoring. It is framed at repository scope through multi-file edits rather than isolated function-level edits, and is described as requiring "comprehensive reasoning" and the composition of multiple smaller changes.

**Space of elicitation and scores.** No measurement instrument is linked to it. Papers instead specify task outputs and success conditions directly, such as rewriting a working implementation while maintaining correctness or producing a repository patch that implements a specified refactor.

**What it is taken as evidence of.** The only linked construct is Compositional reasoning. One paper reports that code refactoring, specifically the multi-file form, is related to Compositional reasoning, noting that it "requires comprehensive reasoning and composition of multiple smaller changes"; no other construct is linked.

## Sources

**[Position: Future Research and Challenges Remain Towards AI for Software Engineering](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gu25e/gu25e.pdf)**
> The observable act of rewriting parts of a software implementation to improve its structure or quality while preserving its external functionality.

**[RefactorBench: Evaluating Stateful Reasoning in Language Agents Through Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/6b44ee74539ea77d6a0d50d468724371-Paper-Conference.pdf) (as "Multi-file code refactoring")**
> Editing code across multiple files to implement a specified refactor in a repository.

## Relationships

### Associated with
- **Compositional reasoning** (constructs)
  > Unlike isolated function-level edits, multi-file refactoring requires comprehensive reasoning and composition of multiple smaller changes. (Section 1)
  - [RefactorBench: Evaluating Stateful Reasoning in Language Agents Through Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/6b44ee74539ea77d6a0d50d468724371-Paper-Conference.pdf)
