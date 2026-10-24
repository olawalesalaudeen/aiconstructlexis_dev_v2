# Action selection
**Type:** Behavior  
**Referenced in:** 24 papers  
**Also known as:** Decision-making, Driving decision making, Autonomous decision making, High-level action selection, Arm selection, Activity selection, Target selection, Secret action selection, Candidate action selection  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is a stepwise choice among available actions, usually conditioned on the current state, context, goal, or interaction history. Most descriptions emphasize selecting the optimal, appropriate, or most plausible next action from candidates, sometimes with look-ahead simulation or another evaluation mechanism guiding the choice, while a smaller line of work broadens it to decision-making that selects and executes actions under induced rules, state constraints, or uncertainty. Success is variously framed as maximizing cumulative reward, choosing a valid or highest-scoring action, or picking the action that best fulfills intrinsic desires.

**Variants.** Papers study this behavior in several domain-specific forms: driving decision making selects high-level driving actions from scene descriptions and prior experience, high-level action selection in robot settings chooses discrete acts such as navigation, pickup, or placement, and bandit versions require exactly one arm or action at each time step. Other formulations include activity selection based on intrinsic motivations and game-based target or secret action selection, where choices depend on hit rates, hidden roles, or private information. Some papers also compare candidate actions at a given step using reward-model scores.

**Space of elicitation and scores.** Papers measure it with 3 linked instruments, most often ALFWorld, then WebShop, and AgentBench. These are used as sequential decision-making benchmarks or environments: ALFWorld appears as text-based games and embodied scenarios, WebShop as web navigation in an e-commerce setting, and AgentBench as a multi-environment benchmark for reasoning and decision-making.

**What it is taken as evidence of.** Papers link it to 14 constructs, with Reasoning the most recurrent. Several papers claim a causal relationship from Reasoning to action selection, and another reports the two as related; papers also claim causal relationships from Commonsense knowledge, Decision-making, Exploration-exploitation tradeoff, and Logical reasoning to action selection, with 9 other constructs linked as well.

## Sources

**[WebEvolver: Enhancing Web Agent Self-Improvement with Co-evolving World Model](https://aclanthology.org/2025.emnlp-main.454.pdf)**
> The process of choosing the optimal action from a set of candidates, often guided by a look-ahead or evaluation mechanism.

**[Mars: Situated Inductive Reasoning in an Open-World Environment](https://proceedings.neurips.cc/paper_files/paper/2024/file/1fb6d0b52f5e41b11392841a66dbfe7d-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Decision-making")**
> Performing tasks that require selecting and executing specific actions in different contexts based on induced rules.

**[Continuously Learning, Adapting, and Improving: A Dual-Process Approach to Autonomous Driving](https://proceedings.neurips.cc/paper_files/paper/2024/file/df04a35d907e894d59d4eab1f92bc87b-Paper-Conference.pdf) (as "Driving decision making")**
> Selecting high-level driving actions or meta-actions from scene descriptions and prior experience.

**[No Free Delivery Service: Epistemic limits of passive data collection in complex social systems](https://proceedings.neurips.cc/paper_files/paper/2024/file/b97fc02c9e536d68300d82be05c23aa2-Paper-Conference.pdf) (as "Autonomous decision making")**
> The task of a system making choices and taking actions independently to achieve goals in a given environment.

**[Long-Horizon Planning for Multi-Agent Robots in Partially Observable Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/7d6e85e88495104442af94c98e899659-Paper-Conference.pdf) (as "High-level action selection")**
> Choosing discrete robot actions such as navigation, pickup, placement, opening, closing, cleaning, or toggling to advance the task.

**[Can large language models explore in-context?](https://proceedings.neurips.cc/paper_files/paper/2024/file/d951f73c521d069fefbb73396df01424-Paper-Conference.pdf) (as "Arm selection")**
> Choosing one action from a fixed set of bandit arms at each time step.

**[Simulating Human-like Daily Activities with Desire-driven Autonomy](https://proceedings.iclr.cc/paper_files/paper/2025/file/513cb685f67550dbd133b81a7a24249f-Paper-Conference.pdf) (as "Activity selection")**
> The observable process of an agent choosing a single action to execute from a set of evaluated candidates based on which one best satisfies its intrinsic motivations.

**[Competing Large Language Models in Multi-Agent Gaming Environments](https://proceedings.iclr.cc/paper_files/paper/2025/file/a46adbe2f0ca0e16ef8857e188991ad7-Paper-Conference.pdf) (as "Target selection")**
> Choosing which opponent to attack or target in a sequential elimination game.

**[Learning Strategic Language Agents in the Werewolf Game with Iterative Latent Space Policy Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25h/xu25h.pdf) (as "Secret action selection")**
> Choosing targets for elimination, investigation, or protection during the night phase, based on hidden role and private information.

**[Boosting Virtual Agent Learning and Reasoning: A Step-Wise, Multi-Dimensional, and Generalist Reward Model with Benchmark](https://raw.githubusercontent.com/mlresearch/v267/main/assets/miao25b/miao25b.pdf) (as "Candidate action selection")**
> The process of choosing between two or more candidate actions at a given step based on reward model scoring.

## Relationships

### → Action selection
- **Reasoning** (constructs) — *causes*
  > In the Reasoning module, we utilize the experiences derived from the Memory module and the common-sense knowledge of the LLM to perform decision-making for the current traffic scenario. (Section 3.3)
  - [DiLu: A Knowledge-Driven Approach to Autonomous Driving with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/93c936b9e492def9c00782cab79dbc6d-Paper-Conference.pdf)
- **Commonsense knowledge** (constructs) — *causes*
  > In the Reasoning module, we utilize the experiences derived from the Memory module and the common-sense knowledge of the LLM to perform decision-making for the current traffic scenario. (Section 3.3)
  - [DiLu: A Knowledge-Driven Approach to Autonomous Driving with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/93c936b9e492def9c00782cab79dbc6d-Paper-Conference.pdf)
- **Scene understanding** (constructs) — *causes*
  > the scene understanding module in LeapAD is designed to selectively identify critical objects, simplifying the description of the surrounding environment and reducing the load on decision-making processes. (Section 3.2)
  - [Continuously Learning, Adapting, and Improving: A Dual-Process Approach to Autonomous Driving](https://proceedings.neurips.cc/paper_files/paper/2024/file/df04a35d907e894d59d4eab1f92bc87b-Paper-Conference.pdf)
- **Logical reasoning** (constructs) — *causes*
  > The Analytic Process relies on logical reasoning, employing rational thinking to analyze complex situations and make safe driving decisions. (Section 3.3)
  - [Continuously Learning, Adapting, and Improving: A Dual-Process Approach to Autonomous Driving](https://proceedings.neurips.cc/paper_files/paper/2024/file/df04a35d907e894d59d4eab1f92bc87b-Paper-Conference.pdf)
- **World modeling** (constructs) — *causes*
  > a World-model-augmented (WMA) web agent, which simulates the outcomes of its actions for better decision-making. (ABSTRACT)
  - [Web Agents with World Models: Learning and Leveraging Environment Dynamics in Web Navigation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a00548031e4647b13042c97c922fadf1-Paper-Conference.pdf)
- **Exploration-exploitation tradeoff** (constructs) — *causes*
  > “LLMs often struggle to balance exploration and exploitation, which hinders their ability to navigate extensive state spaces efficiently.”
  - [Monte Carlo Planning with Large Language Model for Text-Based Game Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/837ff662214b04e7ea8c43f095fe0dd7-Paper-Conference.pdf)

### Associated with
- **Tool use** (behaviors tasks)
  > “Actions involve selecting which tool to call and the input to that tool.”
  - [NAT: Enhancing Agent Tuning with Negative Samples](https://aclanthology.org/2025.naacl-long.378.pdf)
- **Model selection ability** (constructs)
  > RestoreAgent can provide the best decisions, including which image restoration tasks need to be performed, the order of their execution, and which model is most suitable for each task. (Section 3.2.1)
  - [RestoreAgent: Autonomous Image Restoration Agent via Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/c78f639424b8d89ceb4f2efbb4dfe4f4-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks)
  > Large language models (LLMs) (Touvron et al., 2023; Databricks, 2024; Abdin et al., 2024) have demonstrated remarkable capabilities in various decision-making tasks, including multi-choice question answering and tool usage (Section 1)
  - [Prune ’n Predict: Optimizing LLM Decision-making with Conformal Prediction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/vishwakarma25b/vishwakarma25b.pdf)
