# Monte Carlo tree search
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** Monte Carlo Tree Search, Monte-Carlo Tree Search, MCTS  

## State of the Field

Across the provided literature, Monte Carlo tree search (MCTS) is consistently defined as a tree search algorithm, though its specific application varies. The most common framing is as an inference-time strategy for exploring the solution space in complex reasoning tasks. For instance, one paper describes it as an algorithm that "iteratively builds a search tree to find the CoT with the highest aggregated PRM score" ("VersaPRM: Multi-Domain Process Reward Model via Synthetic Reasoning Data"). Other papers present alternative uses, defining it as a search procedure to "maximize the cumulative reward" in circuit generation or as an "evaluation procedure to assess a model's problem-solving potential" by exploring action sequences. In this latter context, it is also used to augment models, with one study presenting an "action-level MCTS approach." While it is applied to enhance model capabilities, its performance is also subject to comparison, as one paper notes that MCTS and its variants "generally underperform compared to Step-by-Step Beam Search and REBASE" ("Token-Supervised Value Models for Enhancing Mathematical Problem-Solving Capabilities of Large Language Models").

## Sources

**[Token-Supervised Value Models for Enhancing Mathematical Problem-Solving Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0801fccb1d705a9e6747e138d9a0056a-Paper-Conference.pdf) (as "Monte Carlo Tree Search")**
> A tree search algorithm used as an inference strategy to explore the solution space for complex reasoning tasks.

**[Circuit Transformer: A Transformer That Preserves Logical Equivalence](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f75a57e9c71e8369da0150ea769d5a2-Paper-Conference.pdf) (as "Monte-Carlo Tree Search")**
> A search procedure adopted to maximize cumulative reward while preserving equivalence during circuit generation.

**[Controlling Large Language Model with Latent Action](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jia25e/jia25e.pdf) (as "MCTS")**
> Monte Carlo Tree Search, a heuristic search algorithm used here as an evaluation procedure to assess a model's problem-solving potential by exploring the space of possible action sequences.
