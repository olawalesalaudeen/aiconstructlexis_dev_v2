# Pathfinding
**Type:** Behavior  
**Referenced in:** 13 papers  
**Also known as:** Graph path finding, Route finding, Spatial pathfinding, Path planning, Route planning, Path finding, Graph search, Search ability  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats pathfinding as generating a valid route from a start state to a goal, usually in a graph, grid, maze, or navigation setting. The required output is variously the full sequence of actions or coordinates, the sequence of nodes, the constituent edges, or the complete sequence of directions, and success is described as producing the correct or valid path, sometimes while obeying constraints such as avoiding holes or satisfying locked-door and key dependencies. A smaller line narrows the task to predicting only the next vertex along the path, and one definition recasts it as a latent "search ability" to find a correct next step or path.

**Variants.** Papers label closely related versions as graph path finding, path finding, graph search, route finding, route planning, and path planning. Most variants remain spatial or graph-based, including directed graphs with start and goal nodes, grid worlds such as Frozen Lake, 30 x 30 mazes, two-dimensional grids with actions like move, pick up, and unlock, visual navigation, and object-goal navigation. A smaller variant defines the target as a valid chain of intermediate states from Xin to Xout, and another uses path planning for a structured sequential or parallel plan that combines multiple tool outputs to arrive at a final answer.

**Space of elicitation and scores.** Papers link pathfinding to 1 measurement instrument, the Star Graph Task, presented as a simple path-finding task that requires basic planning. Across task formulations, elicitation differs in granularity: many versions ask for the whole path or trajectory, while graph search asks for only the next vertex on the path. One source snippet also describes scoring path planning by having GPT-4o rate the reasonableness of the designed path on a 1-5 scale.

**What it is taken as evidence of.** Papers link pathfinding to 1 construct, Planning. The framing is not uniform: one paper uses path finding to measure Planning, describing it as a simple path-finding task that requires basic planning, while another reports that Pathfinding is related to Planning through a broader claim that the ability to search is fundamental in planning and navigation. As a result, Planning is the only construct it is tied to here, but papers differ on whether the link is a direct measurement relation or a broader relatedness claim.

## Sources

**[Beyond Autoregression: Discrete Diffusion for Complex Reasoning and Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1b3d1e2cf53bb28cabd801bd58b3521-Paper-Conference.pdf) (as "Graph path finding")**
> Given a graph-like input with start and goal nodes, the model outputs the constituent edges of the correct path.

**[Enhancing Graph Of Thought: Enhancing Prompts with LLM Rationales and Dynamic Temperature Control](https://proceedings.iclr.cc/paper_files/paper/2025/file/c87245c9e8882bc1b6d4ec343d430e71-Paper-Conference.pdf) (as "Route finding")**
> Producing a valid path from a start location to a destination while obeying constraints in a grid world.

**[Dualformer: Controllable Fast and Slow Thinking by Learning with Randomized Reasoning Traces](https://proceedings.iclr.cc/paper_files/paper/2025/file/ed45d6a03de84cc650cae0655f699356-Paper-Conference.pdf)**
> Solving navigation tasks by generating a sequence of actions or coordinates to reach a goal location from a start point.

**[GAMap: Zero-Shot Object Goal Navigation with Multi-Scale Geometric-Affordance Guidance](https://proceedings.neurips.cc/paper_files/paper/2024/file/459d93dad139eb084c365d40a57eada3-Paper-Conference.pdf) (as "Path planning")**
> The process of computing a sequence of actions or a trajectory for an agent to follow to travel from its current position to a designated goal location.

**[Mind's Eye of LLMs: Visualization-of-Thought Elicits Spatial Reasoning in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/a45296e83b19f656392e0130d9e53cb1-Paper-Conference.pdf) (as "Route planning")**
> A sub-task of visual navigation where the model must generate the complete sequence of directional moves to travel from a starting point to a destination.

**[The Factorization Curse: Which Tokens You Predict Underlie the Reversal Curse and More](https://proceedings.neurips.cc/paper_files/paper/2024/file/cbcce87f745072c819204529be843d16-Paper-Conference.pdf) (as "Path finding")**
> The task of generating a sequence of nodes that constitutes a valid path from a starting node to a target node within a given graph structure.

**[Transformers Struggle to Learn to Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/28d43a64147bf94921041599efdf791d-Paper-Conference.pdf) (as "Graph search")**
> Predicting the next vertex on a path from a start vertex toward a goal vertex in a directed graph.

**[Transformers Struggle to Learn to Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/28d43a64147bf94921041599efdf791d-Paper-Conference.pdf) (as "Search ability")**
> The latent capacity of a model to find a correct next step or path toward a goal across graph-like or reasoning problems.

## Relationships

### Pathfinding →
- **Star Graph Task** (measurements) — *measured_by*
  > Specifically, Bachmann & Nagarajan (2024) introduces a simple path finding task that requires basic planning... Figure 5: Star Graph Task: Illustration and Performance Comparison. (Section 4)
  - [The Factorization Curse: Which Tokens You Predict Underlie the Reversal Curse and More](https://proceedings.neurips.cc/paper_files/paper/2024/file/cbcce87f745072c819204529be843d16-Paper-Conference.pdf)

### Associated with
- **Planning** (constructs)
  > “The ability to search is fundamental in many important tasks, such as reasoning ..., planning ..., and navigation ...”
  - [Transformers Struggle to Learn to Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/28d43a64147bf94921041599efdf791d-Paper-Conference.pdf)
