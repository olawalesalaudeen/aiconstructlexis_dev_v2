# Task decomposition
**Type:** Behavior  
**Referenced in:** 64 papers  
**Also known as:** Program decomposition, Subtask decomposition, Request decomposition, Problem decomposition, Subgoal generation, Subtask identification, Plan decomposition, Subgoal proposal, Subgoal setting, Sub-goal decomposition, Constraint decomposition, Action decomposition, Requirement analysis, High-level instruction generation, High-level planning, Sub-instruction prediction, Subgoal decomposition, Task planning  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is the observable breakdown of a complex, high-level goal, question, instruction, or request into smaller subtasks, sub-actions, steps, or subgoals. Most formulations treat it as producing a structured intermediate plan, such as an ordered sequence, hierarchy, tree, or graph; papers differ in whether that decomposition must reflect current observations and memory, dependencies and execution order, agent roles, or single-tool executability. A smaller line of work frames it as a latent ability to break problems into hierarchies of solvable sub-problems, including decomposing malicious tasks across models.

**Variants.** Variants span many names, but the prevailing usage stays within the same decomposition family. Common forms are program or problem decomposition into functions or simpler steps, request or sub-instruction decomposition of user goals into actionable language steps, subgoal generation or decomposition into intermediate statements or goals, and plan decomposition into role-specific agent tasks. Some papers further specialize it to settings such as vehicle-routing constraints, scene-graph narratives, natural-language requirements, GUI goals, and embodied goals conditioned on observations.

**Space of elicitation and scores.** Only one measurement instrument is linked to task decomposition, TravelPlanner. The linked paper places it in an open-ended, structurally unconstrained setting that requires high-level planning and system-level coordination.

**What it is taken as evidence of.** Papers connect task decomposition to seven constructs, and the links do not converge on a single construct. Planning is the most common construct around it: papers claim a causal relationship from Planning to Task decomposition and also describe the two as related. Other named constructs are Chain-of-thought reasoning, Long-horizon planning, Multi-step planning, and Scientific reasoning: Chain-of-thought reasoning, Multi-step planning, and Scientific reasoning are described as related to Task decomposition, while Long-horizon planning is linked causally in both directions; two additional constructs are linked through a causal claim from construct to Task decomposition and a reported correlation from Task decomposition to construct. Papers also link it to nine behavioral indicators, including causal claims from Task decomposition to Code generation and Complex reasoning question answering, a related link from Embodied planning to Task decomposition, a causal claim from Task decomposition to Information retrieval, and causal claims in both directions with Premature termination, plus four other linked behaviors.

## Sources

**[Divide-and-Conquer Meets Consensus: Unleashing the Power of Functions in Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/7bc4f74e35bcfe8cfe43b0a860786d6a-Paper-Conference.pdf) (as "Program decomposition")**
> The observable behavior of breaking down a complex programming problem into smaller, more manageable sub-problems, often represented as distinct functions.

**[RL-GPT: Integrating Reinforcement Learning and Code-as-policy](https://proceedings.neurips.cc/paper_files/paper/2024/file/31f119089f702e48ecfd138c1bc82c4a-Paper-Conference.pdf)**
> The observable process of breaking down a complex, high-level goal into a series of smaller, more manageable sub-tasks or sub-actions.

**[Long-Horizon Planning for Multi-Agent Robots in Partially Observable Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/7d6e85e88495104442af94c98e899659-Paper-Conference.pdf) (as "Subtask decomposition")**
> The observable action of breaking down a high-level language instruction into a sequence of smaller, feasible subtasks based on current observations and memory.

**[Can Graph Learning Improve Planning in LLM-based Agents?](https://proceedings.neurips.cc/paper_files/paper/2024/file/098d1bd3eb6156a4c2f834563cdcf617-Paper-Conference.pdf) (as "Request decomposition")**
> The observable behavior of an LLM breaking down a user's ambiguous, high-level request into a sequence of concrete, actionable steps.

**[AvaTaR: Optimizing LLM Agents for Tool Usage via Contrastive Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2db8ce969b000fe0b3fb172490c33ce8-Paper-Conference.pdf) (as "Problem decomposition")**
> The observable action of breaking down a complex question or problem into a structured plan of simpler, actionable steps.

**[Proving Olympiad Algebraic Inequalities without Human Demonstrations](https://proceedings.neurips.cc/paper_files/paper/2024/file/96f8c5e879c339dae55e6c2188b02a33-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Subgoal generation")**
> The observable action of producing a set of intermediate mathematical statements (subgoals) from a current goal state by applying theorems or transformation rules.

**[What Limits Virtual Agent Application? OmniBench: A Scalable Multi-Dimensional Benchmark for Essential Virtual Agent Capabilities](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bu25b/bu25b.pdf) (as "Subtask identification")**
> Observably decomposing a complex task instruction into its constituent subtasks based on semantic content.

**[PDE-Controller: LLMs for Autoformalization and Reasoning of PDEs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/soroco25a/soroco25a.pdf) (as "Subgoal proposal")**
> The observable generation of intermediate STL constraints (subgoals) intended to improve the solution of a primary PDE control problem when solved sequentially.

**[AutoML-Agent: A Multi-Agent LLM Framework for Full-Pipeline AutoML](https://raw.githubusercontent.com/mlresearch/v267/main/assets/trirat25a/trirat25a.pdf) (as "Plan decomposition")**
> Breaking down high-level AutoML plans into role-specific sub-tasks assigned to specialized agents, such as data preprocessing or model search.

**[Prior Prompt Engineering for Reinforcement Fine-Tuning](https://aclanthology.org/2025.emnlp-main.1590.pdf) (as "Subgoal setting")**
> Generating intermediate steps or subgoals that break a problem into smaller parts.

**[System 1.x: Learning to Balance Fast and Slow Planning with Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/605e59e78284907aa4fce5280838def3-Paper-Conference.pdf) (as "Sub-goal decomposition")**
> The observable action of breaking down a larger planning problem into a series of smaller, intermediate sub-problems, each with its own start and end state.

**[DRoC: Elevating Large Language Models for Complex Vehicle Routing via Decomposed Retrieval of Constraints](https://proceedings.iclr.cc/paper_files/paper/2025/file/73d6c3e4b214deebbbf8256e26d2cf45-Paper-Conference.pdf) (as "Constraint decomposition")**
> The observable task of splitting a target VRP into individual constraints represented by keywords.

**[LLM Meets Scene Graph: Can Large Language Models Understand and Generate Scene Graphs? A Benchmark and Empirical Study](https://aclanthology.org/2025.acl-long.1036.pdf) (as "Action decomposition")**
> The process of identifying and separating a complex narrative into a sequence of discrete actions to be represented as individual scene graphs.

**[From Informal to Formal -- Incorporating and Evaluating LLMs on Natural Language Requirements to Verifiable Formal Proofs](https://aclanthology.org/2025.acl-long.1310.pdf) (as "Requirement analysis")**
> The observable behavior of taking a high-level goal in natural language and breaking it down into a series of detailed steps, also in natural language.

**[Hierarchical-Task-Aware Multi-modal Mixture of Incremental LoRA Experts for Embodied Continual Learning](https://aclanthology.org/2025.acl-long.1379.pdf) (as "High-level instruction generation")**
> Producing decomposed sub-task plans from high-level goals and environmental observations, such as generating 'Pick up the blue book' from 'Read a book under the light'.

**[VideoGUI: A Benchmark for GUI Automation from Instructional Videos](https://proceedings.neurips.cc/paper_files/paper/2024/file/804e757b7d7043c26701c3a313032101-Paper-Datasets_and_Benchmarks_Track.pdf) (as "High-level planning")**
> Generating a small set of task milestones or subtasks from a visual preview or textual description of a GUI goal.

**[A Real-World WebAgent with Planning, Long Context Understanding, and Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/e91bf7dfba0477554994c6d64833e9d8-Paper-Conference.pdf) (as "Sub-instruction prediction")**
> Generating a sequence of intermediate natural language instructions that decompose a high-level user request into actionable steps.

**[SELFGOAL: Your Language Agents Already Know How to Achieve High-level Goals](https://aclanthology.org/2025.naacl-long.36.pdf) (as "Subgoal decomposition")**
> Breaking a high-level goal into more concrete subgoals during interaction with an environment.

**[Divergent Thoughts toward One Goal: LLM-based Multi-Agent Collaboration System for Electronic Design Automation](https://aclanthology.org/2025.naacl-long.83.pdf) (as "Task planning")**
> The observable behavior of decomposing a complex user request into a sequence of subtasks with dependencies and execution order, each optimized for single-tool execution.

## Relationships

### Task decomposition →
- **Long-horizon planning** (constructs) — *causes*
  > allows agents to: (1) plan subtasks required to complete the task ... This framework enhances agents' ability to complete complex, long-horizon tasks
  - [Long-Horizon Planning for Multi-Agent Robots in Partially Observable Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/7d6e85e88495104442af94c98e899659-Paper-Conference.pdf)
- **Data efficiency** (constructs) — *causes*
  > Our method can automatically decompose and learn subtasks with only a little human prior, achieving ObtainDiamond with great sample efficiency.
  - [RL-GPT: Integrating Reinforcement Learning and Code-as-policy](https://proceedings.neurips.cc/paper_files/paper/2024/file/31f119089f702e48ecfd138c1bc82c4a-Paper-Conference.pdf)
- **STEM problem solving** (behaviors tasks) — *causes*
  > This decomposition enhances the understanding of individual components and their interactions, facilitating the resolution of the original problem in a structured manner (Johnson et al., 2017).
  - [ChemAgent: Self-updating Memories in Large Language Models Improves Chemical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/fa7f64b45970e6a7f8824781e7e01501-Paper-Conference.pdf)
- **Premature termination** (behaviors tasks) — *causes*
  > The primary responsibility of the Planning Agent is doing macro-level planning through task decomposition to prevent premature termination. (Section 3.3)
  - [Smurfs: Multi-Agent System using Context-Efficient DFSDT for Tool Planning](https://aclanthology.org/2025.naacl-long.169.pdf)
- **Tool use** (behaviors tasks) — *causes*
  > Through its task decomposition mechanism, Smurfs transforms long-context tasks into simpler ones, enabling the untrained model to effectively utilize external tools for managing complex tasks. (Section 4.1)
  - [Smurfs: Multi-Agent System using Context-Efficient DFSDT for Tool Planning](https://aclanthology.org/2025.naacl-long.169.pdf)
- **Scene graph generation** (behaviors tasks) — *causes*
  > Our analysis indicates that these models fail to effectively decompose discrete scenes from a complex narrative, leading to a bottleneck when generating scene graphs.
  - [LLM Meets Scene Graph: Can Large Language Models Understand and Generate Scene Graphs? A Benchmark and Empirical Study](https://aclanthology.org/2025.acl-long.1036.pdf)

### → Task decomposition
- **Planning** (constructs) — *causes*
  > Using the strategy stored in Planning Memory, we break down complex chemistry problems into hierarchical sub-tasks.
  - [ChemAgent: Self-updating Memories in Large Language Models Improves Chemical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/fa7f64b45970e6a7f8824781e7e01501-Paper-Conference.pdf)

### Associated with
- **Scientific reasoning** (constructs)
  > PDE-Controller ... enhances scientific reasoning by proposing novel subgoals to improve open-loop control utility. (Section 1)
  - [PDE-Controller: LLMs for Autoformalization and Reasoning of PDEs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/soroco25a/soroco25a.pdf)
- **Multi-step planning** (constructs)
  > In this work, we formalize natural planning—distinct from classical AI planning (which is not the focus of this work)—as the process of decomposing an input problem x into an ordered sequence of intermediate subgoals that guide its solution. (Section 3.1)
  - [PLAN-TUNING: Post-Training Language Models to Learn Step-by-Step Planning for Complex Problem Solving](https://aclanthology.org/2025.emnlp-main.1087.pdf)
- **Task planning** (constructs)
  > The current solution of task planning is purely based on LLMs and involves two stages [45, 46]. The first stage involves request decomposition, where a user’s ambiguous request is broken down into concrete steps via LLMs. (Section 2.2)
  - [Can Graph Learning Improve Planning in LLM-based Agents?](https://proceedings.neurips.cc/paper_files/paper/2024/file/098d1bd3eb6156a4c2f834563cdcf617-Paper-Conference.pdf)
- **Problem solving** (behaviors tasks)
  > Solving real-world problems with LLM agents can be structured into a multi-stage procedure: • Decomposition of the problem: The procedure begins by breaking down a complex question into an actionable plan characterized by simpler steps. (Section 3).
  - [AvaTaR: Optimizing LLM Agents for Tool Usage via Contrastive Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2db8ce969b000fe0b3fb172490c33ce8-Paper-Conference.pdf)
- **Code generation** (behaviors tasks)
  > RL-GPT decomposes the task into “find a tree" and “cut a log", solving the former with code generation and the latter with RL.
  - [RL-GPT: Integrating Reinforcement Learning and Code-as-policy](https://proceedings.neurips.cc/paper_files/paper/2024/file/31f119089f702e48ecfd138c1bc82c4a-Paper-Conference.pdf)
- **Information retrieval** (behaviors tasks)
  > "we decompose the retrieval into three sub-processes, including problem decomposition, single-constraint resolution, and context merging."
  - [DRoC: Elevating Large Language Models for Complex Vehicle Routing via Decomposed Retrieval of Constraints](https://proceedings.iclr.cc/paper_files/paper/2025/file/73d6c3e4b214deebbbf8256e26d2cf45-Paper-Conference.pdf)
