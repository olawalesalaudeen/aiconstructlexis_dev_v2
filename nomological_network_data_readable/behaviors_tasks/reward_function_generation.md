# Reward function generation
**Type:** Behavior  
**Referenced in:** 9 papers  
**Also known as:** Dense reward code generation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is an LLM producing executable code for a reward function that specifies an agent's objective in a simulation or reinforcement learning task. Definitions commonly ground the generation in a task or goal description plus environment details or code, and describe successful outputs as reward code that guides learning, for example by returning the scalar signal whose cumulative maximization defines the task or by correctly using environment attributes to encourage a desired behavior. A smaller line of work narrows the behavior to generating dense, shaped reward code from a natural language goal.

**Variants.** Papers study several variants and settings. Some treat reward generation as one part of broader program generation, alongside termination functions or simulator dynamics, while others use it to encode desired coordination behavior for teammate training, including executable functions over state and action transitions and prompts requiring the form "def reward(self) -> float". Another named variant is dense reward code generation, which focuses on shaped dense rewards, and the domains explicitly mentioned include robotics, games, and subtasks trained with reinforcement learning.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers operationalize the behavior directly through generation tasks that provide natural language task or goal descriptions together with environment code, environment details, or low-level states, and ask for executable reward code; one formulation states the objective as outputting reward function code R such that F(AM(R)) is maximized. The snippets describe task-specific objectives rather than a named scoring instrument.

**What it is taken as evidence of.** The recorded relationships link it to two constructs, Commonsense reasoning and Time-series feature extraction ability, but both links are causal antecedents rather than claims that reward function generation measures those constructs. One paper claims a causal relationship from Commonsense reasoning to reward function generation, describing reward generation from natural language task descriptions as leveraging commonsense understanding of human behavior, and another claims a causal relationship from Time-series feature extraction ability to reward function generation, with evidence that LLMs can extract relevant features from language-described resource allocation preferences.

## Sources

**[FactorSim: Generative Simulation via Factorized Representation](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f35ec2f7f403ef2c83d65b581df10bc-Paper-Conference.pdf)**
> The task of generating code for reward functions that specify the objectives for an agent within a simulation.

**[Text2Reward: Reward Shaping with Language Models for Reinforcement Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/9941833e8327910ef25daeb9005e4748-Paper-Conference.pdf) (as "Dense reward code generation")**
> The observable action of the LLM producing an executable program that defines a dense, shaped reward function based on a natural language goal.

## Relationships

### → Reward function generation
- **Commonsense reasoning** (constructs) — *causes*
  > In recent works, large language models (LLMs) have been used for reward generation from natural language task descriptions, leveraging their extensive instruction tuning and commonsense understanding of human behavior. (Abstract)
  - [REvolve: Reward Evolution with Large Language Models using Human Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc8ee7c7ab5b5f6b1615045dfb617ed6-Paper-Conference.pdf)
