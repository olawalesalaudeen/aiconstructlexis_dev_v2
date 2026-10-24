# Star Graph Task
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** Star graph problem, Star distribution  

## State of the Field

**What it is.** Across the definitions, the prevailing usage treats the Star Graph Task as a synthetic path-finding or planning benchmark on a star-shaped graph. Most descriptions say the model must output or predict the path between nodes, either as the full sequence from a start node to a specified final node or, in another formulation, as next-node prediction conditioned on an edge list, start, goal, and current path. A smaller descriptive variant focuses on the graph-generation setup itself: the start vertex sits at the center, multiple spokes radiate outward, and the goal lies at the end of one spoke.

**What it is claimed to measure.** Papers link this instrument to one construct and one behavioral indicator. The dominant measurement claim is that it measures Planning: papers describe it as a simple path-finding task that requires basic planning, and Planning is recorded as measured by the Star Graph Task in the most common linkage. A narrower usage links it to Pathfinding, so the reported measurement claims are concentrated on these two closely related targets rather than spread across many constructs or indicators.

**Space of uses.** In use, papers position it mainly as a didactic or synthetic benchmark. Some authors describe it as a didactic star graph problem used to analyze memorization versus generalization, while another line studies model performance on it as a known-hard problem under a next-node prediction setup. The papers do not link it to any other measurement instrument.

## Sources

**[The Factorization Curse: Which Tokens You Predict Underlie the Reversal Curse and More](https://proceedings.neurips.cc/paper_files/paper/2024/file/cbcce87f745072c819204529be843d16-Paper-Conference.pdf)**
> A path-finding benchmark in which a model must predict the sequence of nodes along a path from a start node to a specified final node.

**[RL on Incorrect Synthetic Data Scales the Efficiency of LLM Math Reasoning by Eight-Fold](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b77d5b896c321a29277524a98a50215-Paper-Conference.pdf) (as "Star graph problem")**
> A didactic planning task where a model must output the full path between two nodes in a star-shaped graph, used to analyze memorization versus generalization.

**[Transformers Struggle to Learn to Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/28d43a64147bf94921041599efdf791d-Paper-Conference.pdf) (as "Star distribution")**
> A graph-generation procedure in which the start vertex is at the center of a star and each spoke is a linear chain ending in the goal.

## Relationships

### → Star Graph Task
- **Planning** (constructs) — *measured_by*
  > Specifically, Bachmann & Nagarajan (2024) introduces a simple path finding task that requires basic planning... Figure 5: Star Graph Task: Illustration and Performance Comparison. (Section 4)
  - [The Factorization Curse: Which Tokens You Predict Underlie the Reversal Curse and More](https://proceedings.neurips.cc/paper_files/paper/2024/file/cbcce87f745072c819204529be843d16-Paper-Conference.pdf)
- **Pathfinding** (behaviors tasks) — *measured_by*
  > Specifically, Bachmann & Nagarajan (2024) introduces a simple path finding task that requires basic planning... Figure 5: Star Graph Task: Illustration and Performance Comparison. (Section 4)
  - [The Factorization Curse: Which Tokens You Predict Underlie the Reversal Curse and More](https://proceedings.neurips.cc/paper_files/paper/2024/file/cbcce87f745072c819204529be843d16-Paper-Conference.pdf)
