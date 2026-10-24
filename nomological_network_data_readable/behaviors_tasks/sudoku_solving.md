# Sudoku solving
**Type:** Behavior  
**Referenced in:** 4 papers  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage treats Sudoku solving as completing a partially filled Sudoku grid so that row, column, and box or subgrid constraints are all satisfied. Papers agree on that constraint-satisfaction goal, with one description stating that the board is filled with numbers 1 to 9 without duplicates in each row, column, and box; a smaller formulation also requires returning the solved puzzle without extraneous text. One paper further presents the task as iterative, where the model first searches over empty cells and then fills a chosen cell.

**Variants.** Papers study it mainly as partially filled puzzle completion, but a few settings vary the presentation. Some describe Sudoku puzzles in textual format, and one setup explicitly uses 9 × 9 problems; the task is also referred to as Sudoku-solving or solving Sudokus. The expected response varies slightly, from a completed grid to the solved puzzle alone without extra text.

**Space of elicitation and scores.** No measurement instrument is linked to it. When papers describe eliciting the behavior directly, they present Sudoku puzzles, including textual 9 × 9 instances, and ask for the solved puzzle, in one formulation without extraneous text, rather than through a named instrument.

**What it is taken as evidence of.** Three constructs are linked to Sudoku solving. Papers do not use a single relation type: one paper claims causal relationships from Exploration ability and from Reasoning to Sudoku solving, describing solving as searching for a cell position and then computing the value to fill, while Planning is only reported as related to it. As a result, the linked work connects the behavior to Exploration ability, Planning, and Reasoning, but not in a uniform way.

## Sources

**[Causal language modeling can elicit search and reasoning capabilities on logic puzzles](https://proceedings.neurips.cc/paper_files/paper/2024/file/67b31ca159553d5593e62d7b998d63ea-Paper-Conference.pdf)**
> Filling in the values of a partially completed Sudoku grid so that all row, column, and box constraints are satisfied.

## Relationships

### Associated with
- **Exploration ability** (constructs)
  > “The iterative process of solving Sudokus can be broken down into two steps: (1) searching and finding a cell position where we can apply a subset of the strategies”
  - [Causal language modeling can elicit search and reasoning capabilities on logic puzzles](https://proceedings.neurips.cc/paper_files/paper/2024/file/67b31ca159553d5593e62d7b998d63ea-Paper-Conference.pdf)
- **Complex reasoning** (constructs)
  > The Sudoku environment is a highly challenging Constraint Satisfaction Problem (CSP) and determining the value in even a single cell can require highly complex reasoning involving multiple steps. (Section 1)
  - [Causal language modeling can elicit search and reasoning capabilities on logic puzzles](https://proceedings.neurips.cc/paper_files/paper/2024/file/67b31ca159553d5593e62d7b998d63ea-Paper-Conference.pdf)
- **Long-horizon planning** (constructs)
  > Sudoku is a task which doesn't require the same degree of long-term planning as some harder benchmarks
  - [Causal language modeling can elicit search and reasoning capabilities on logic puzzles](https://proceedings.neurips.cc/paper_files/paper/2024/file/67b31ca159553d5593e62d7b998d63ea-Paper-Conference.pdf)
