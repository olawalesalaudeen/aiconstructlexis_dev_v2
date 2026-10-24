# Logic puzzle solving
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Logical puzzle solving  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats this as solving structured logic puzzles by deducing a solution from constraints or facts, often by making valid moves until a solution state is reached. Definitions agree that the behavior is observed through completing the puzzle, but they differ on the exact success criterion: some require the completed puzzle state, while a smaller line of work defines it as determining character identities in Knights & Knaves puzzles from their statements.

**Variants.** Variants span several named puzzle families: Sudoku, Minesweeper, logic grid puzzles, Einstein’s Riddle or Einstein’s puzzles, and Knights & Knaves. The formulations also vary, with Einstein-style puzzles described as satisfiability or constraint satisfaction instances, while Knights & Knaves focuses on identity assignment from statements.

**Space of elicitation and scores.** Papers link this behavior to one measurement instrument, ZebraLogic. One paper measures it with ZebraLogic, describing the instrument as a test set of logic grid puzzles, or Einstein’s puzzles, designed as a constraint satisfaction problem. No other instrument is linked by the papers.

**What it is taken as evidence of.** General reasoning is the only linked construct. In Warm Up Before You Train: Unlocking General Reasoning in Resource-Constrained Settings, one paper claims a causal relationship from Knights & Knaves logic-puzzle warm-up to acquiring general reasoning skills, and describes solving these problems as requiring extensive reasoning that highlights generalizable reasoning strategies. No other construct is linked by the papers.

## Sources

**[PUZZLES: A Benchmark for Neural Algorithmic Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/e5d1eaadeed651ba1021c09149db4b92-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The observable task of completing specific logic puzzles (e.g., Sudoku, Minesweeper) by making valid moves to reach a solution state.

**[Warm Up Before You Train: Unlocking General Reasoning in Resource-Constrained Settings](https://aclanthology.org/2025.emnlp-main.727.pdf) (as "Logical puzzle solving")**
> The act of determining the identities of characters in Knights & Knaves logic puzzles based on their statements.

## Relationships

### Logic puzzle solving →
- **ZebraLogic** (measurements) — *measured_by*
  > It is a test set of 1K logic grid puzzles (or Einstein’s puzzles) designed as a constraint satisfaction problem (Prosser, 1993). (Section 3)
  - [Self-Consistency Preference Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/prasad25a/prasad25a.pdf)
- **General reasoning** (constructs) — *causes*
  > In the first stage, we "warm up" the model by distilling Long CoTs from a toy domain, namely, Knights & Knaves (K&K) logic puzzles to acquire general reasoning skills. (Abstract)
  - [Warm Up Before You Train: Unlocking General Reasoning in Resource-Constrained Settings](https://aclanthology.org/2025.emnlp-main.727.pdf)
