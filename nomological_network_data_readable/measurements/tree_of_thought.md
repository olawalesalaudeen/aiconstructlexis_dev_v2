# Tree-of-thought
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** ToT, Tree-of-Thought, Tree of Thoughts  

## State of the Field

Across the provided literature, Tree-of-thought is characterized with some variation, being framed both as a "reasoning framework" and as an "evaluation procedure" used as a baseline. The prevailing description is of a method that explores multiple reasoning paths for complex problem-solving by maintaining a tree of intermediate steps. This structure allows for mechanisms like self-evaluation, lookahead, and backtracking to find more promising solution paths. One paper operationalizes this by using a "separate prompt to have the model act as a value function, rating each potential next step," where thoughts correspond to lines of code. Another source describes these thoughts more generally as "coherent language sequence[s] that serve as an intermediate step toward problem solving." The explicit exploration of different reasoning paths is noted to enable strategic decision-making. Some studies employ specific search algorithms like BFS and MCTS to navigate the tree structure.

## Sources

**[Mutual Reasoning Makes Smaller LLMs Stronger Problem-Solver](https://proceedings.iclr.cc/paper_files/paper/2025/file/35514d533cdc278a7780daf0dbe7d0b7-Paper-Conference.pdf) (as "ToT")**
> Tree of Thoughts is an evaluation procedure where a model explores a tree of intermediate reasoning steps, allowing for self-evaluation and backtracking to find a more promising solution path.

**[Execution-guided within-prompt search for programming-by-example](https://proceedings.iclr.cc/paper_files/paper/2025/file/98e967164ae2f6811b975d686dece3eb-Paper-Conference.pdf) (as "Tree-of-Thought")**
> An evaluation procedure used as a baseline that performs an explicit search over generated code lines by using a separate prompt to have the model act as a value function, rating each potential next step.

**[LLM-Based Explicit Models of Opponents for Multi-Agent Games](https://aclanthology.org/2025.naacl-long.41.pdf) (as "Tree of Thoughts")**
> Reasoning framework that explores multiple reasoning paths using a tree structure, enabling lookahead and backtracking for complex problem solving.
