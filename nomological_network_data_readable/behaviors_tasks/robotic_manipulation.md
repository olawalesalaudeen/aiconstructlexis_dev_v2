# Robotic manipulation
**Type:** Behavior  
**Referenced in:** 29 papers  
**Also known as:** Robotic control, Visuo-motor control, Robot manipulation, Object rearrangement, Object transport, Tabletop manipulation, Low-level manipulation, Multi-step manipulation, Object sorting, Embodied robotic control, Long-horizon manipulation, Pick and stack  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage describes robotic manipulation as observable, goal-directed physical interaction with objects or the environment, carried out through control actions, action trajectories, or continuous robot-arm control in simulated or real settings. Many definitions treat success as achieving the specified physical outcome, for example reaching, pushing, picking, sweeping, peg insertion, pick and place, or placing one object on another, while some formulations make the criterion more explicit as moving target objects to a goal location, sometimes maximizing how many arrive there or scoring the ratio successfully transported. Some papers further specify that the behavior is conditioned on visual input, textual prompts, or language instructions.

**Variants.** Papers study several settings, especially tabletop tasks and object-moving tasks such as transport or rearrangement. Other definitions emphasize longer-horizon or lower-level control, sometimes from visual, textual, or language input, while narrower formulations include category-based sorting and placing one object on another; some settings are mobile, multi-agent, or multi-floor, and transport may use containers as tools. Long instructions in extended tasks are also described as related to instruction following because they can bundle multiple subtasks.

**Space of elicitation and scores.** Papers link robotic manipulation to 2 measurement instruments: Meta-World and RLBench. Meta-World is described as a robotic manipulation benchmark suite and tabletop manipulation benchmark, and RLBench as a simulator of a Franka robot performing tabletop manipulation, so both are used as benchmark environments for eliciting manipulation behavior.

**What it is taken as evidence of.** Rather than converging on one construct, papers connect robotic manipulation to 7 constructs. In the recorded links, papers claim causal relationships from instruction understanding and physical world understanding to robotic manipulation, a separate paper records robotic manipulation as measured by sequential decision-making, and papers also claim causal relationships from spatial reasoning and spatiotemporal reasoning, with other papers linking additional constructs. The construct mapping is therefore mixed rather than centered on a single agreed target.

## Sources

**[Joint Reward and Policy Learning with Demonstrations and Human Feedback Improves Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/0ad6ebd11593822b8a6d5873ca9c5b0b-Paper-Conference.pdf) (as "Robotic control")**
> Producing control actions in a simulated robotics environment to achieve task goals.

**[HAMSTER: Hierarchical Action Models for Open-World Robot Manipulation](https://proceedings.iclr.cc/paper_files/paper/2025/file/3bfee3bc6639c36e6e7b058db909f760-Paper-Conference.pdf) (as "Robot manipulation")**
> The observable act of a robot interacting with and physically altering its environment to achieve a specified goal.

**[Anyprefer: An Agentic Framework for Preference Data Synthesis](https://proceedings.iclr.cc/paper_files/paper/2025/file/56fbf5a2109a6c17372209c9fa698857-Paper-Conference.pdf) (as "Visuo-motor control")**
> Producing robot action trajectories for manipulation tasks from visual and textual task inputs.

**[Distilling Reinforcement Learning Algorithms for In-Context Model-Based Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5c4a7643ab90cd62320df95c873a1c6f-Paper-Conference.pdf)**
> Performing continuous control manipulation tasks such as reaching, pushing, picking, sweeping, and peg insertion.

**[EMOS: Embodiment-aware Heterogeneous Multi-robot Operating System with LLM Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/8ec46cecdae5407662899c5f6698cd8b-Paper-Conference.pdf) (as "Object rearrangement")**
> A complex, observable task requiring agents to move one or more objects from their initial locations to specified goal locations, often involving multiple steps and coordination.

**[CaPo: Cooperative Plan Optimization for Efficient Embodied Multi-Agent Cooperation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b07091c16719ad3990e3d1ccee6641f1-Paper-Conference.pdf) (as "Object transport")**
> The task of moving one or more objects from a starting location to a specified destination within a simulated environment, potentially using containers.

**[BadRobot: Jailbreaking Embodied LLM Agents in the Physical World](https://proceedings.iclr.cc/paper_files/paper/2025/file/5b2fa23e4ef0f7ac6c4f01d7998e6237-Paper-Conference.pdf) (as "Tabletop manipulation")**
> The task of physically interacting with and rearranging objects on a flat surface like a table.

**[Perception in Reflection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25r/wei25r.pdf) (as "Multi-step manipulation")**
> The execution of a sequence of actions based on visual input to achieve a specific goal.

**[DiffusionVLA: Scaling Robot Foundation Models via Unified Diffusion and Autoregression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wen25g/wen25g.pdf) (as "Object sorting")**
> The task of grasping multiple objects and placing them into designated areas based on their category.

**[EmbodiedBench: Comprehensive Benchmarking Multi-modal Large Language Models for Vision-Driven Embodied Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25f/yang25f.pdf) (as "Low-level manipulation")**
> Controlling a robotic arm through fine-grained 7D action vectors to perform object interactions such as picking up or stacking, requiring accurate spatial and visual perception.

**[Instruction-Guided Visual Masking](https://proceedings.neurips.cc/paper_files/paper/2024/file/e4165c96702bac5f4962b70f3cf2f136-Paper-Conference.pdf) (as "Embodied robotic control")**
> Executing physical manipulation tasks (e.g., pick and place) guided by language instructions in a real or simulated environment.

**[PERIA: Perceive, Reason, Imagine, Act via Holistic Language and Vision Planning for Manipulation](https://proceedings.neurips.cc/paper_files/paper/2024/file/1f6af963e891e7efa229c24a1607fa7f-Paper-Conference.pdf) (as "Long-horizon manipulation")**
> Executing multi-step robotic tabletop tasks that require completing a sequence of subtasks over extended horizons.

**[SpatialPIN: Enhancing Spatial Reasoning Capabilities of Vision-Language Models through Prompting and Interacting 3D Priors](https://proceedings.neurips.cc/paper_files/paper/2024/file/7f2257d2b291b8d7e712c70b67e09412-Paper-Conference.pdf) (as "Pick and stack")**
> A robotics manipulation task where the model must generate a plan to grasp an object and place it on top of another object.

## Relationships

### Robotic manipulation →
- **Meta-World** (measurements) — *measured_by*
  > we verify the efficacy of KALM on two robotics manipulation environments: CLEVR-Robot [14] and Meta-world [15] (Section 1).
  - [KALM: Knowledgeable Agents by Offline Reinforcement Learning from Large Language Model Rollouts](https://proceedings.neurips.cc/paper_files/paper/2024/file/e4cdb4090e04816422afcbb08d4badcf-Paper-Conference.pdf)
- **RLBench** (measurements) — *measured_by*
  > RLBench ... a simulator of a Franka robot performing tabletop manipulation
  - [HAMSTER: Hierarchical Action Models for Open-World Robot Manipulation](https://proceedings.iclr.cc/paper_files/paper/2025/file/3bfee3bc6639c36e6e7b058db909f760-Paper-Conference.pdf)

### → Robotic manipulation
- **World modeling** (constructs) — *causes*
  > In addition, 3D-VLA [60] and Daydreamer [56] have also tried to introduce world models into robot manipulation to help the models free themselves from a large amount of trial and error and improve learning efficiency. (Section 1)
  - [PIVOT-R: Primitive-Driven Waypoint-Aware World Model for Robotic Manipulation](https://proceedings.neurips.cc/paper_files/paper/2024/file/6164b6e5352c139e9ddc1a98c09e4e4a-Paper-Conference.pdf)
- **Instruction understanding** (constructs) — *causes*
  > The strong task instruction understanding and visual grounding capabilities of MLLMs [5, 4] have exhibited great promise for language-instructed multitask robotic manipulation [7, 8, 9].
  - [DeeR-VLA: Dynamic Inference of Multimodal Large Language Models for Efficient Robot Execution](https://proceedings.neurips.cc/paper_files/paper/2024/file/67b0e7c7c2a5780aeefe3b79caac106e-Paper-Conference.pdf)
- **Physical world understanding** (constructs) — *causes*
  > Furthermore, we investigate how physical world understanding helps the deployment of embodied agents through extensive robotic manipulation experiments on MOKA (Liu et al., 2024a). (Section 1)
  - [PhysBench: Benchmarking and Enhancing Vision-Language Models for Physical World Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/f38cb4cf9a5eaa92b3cfa481832719c6-Paper-Conference.pdf)
- **Spatiotemporal reasoning** (constructs) — *causes*
  > We hypothesize that this will effectively provide spatial and temporal relations necessary for improving manipulation tasks (Wen et al., 2023; Yuan et al., 2024). (1 INTRODUCTION)
  - [TraceVLA: Visual Trace Prompting Enhances Spatial-Temporal Awareness for Generalist Robotic Policies](https://proceedings.iclr.cc/paper_files/paper/2025/file/8667f264f88c7938a73a53ab01eb1327-Paper-Conference.pdf)

### Associated with
- **Instruction following** (behaviors tasks)
  > "Long-horizon manipulation tasks with general instructions often implicitly encapsulate multiple sub-tasks, posing significant challenges in instruction following"
  - [PERIA: Perceive, Reason, Imagine, Act via Holistic Language and Vision Planning for Manipulation](https://proceedings.neurips.cc/paper_files/paper/2024/file/1f6af963e891e7efa229c24a1607fa7f-Paper-Conference.pdf)
- **Spatial reasoning** (constructs)
  > Pick and stack is a classic robotics task. ... This task demands advanced spatial reasoning
  - [SpatialPIN: Enhancing Spatial Reasoning Capabilities of Vision-Language Models through Prompting and Interacting 3D Priors](https://proceedings.neurips.cc/paper_files/paper/2024/file/7f2257d2b291b8d7e712c70b67e09412-Paper-Conference.pdf)
- **Visual grounding** (constructs)
  > The strong task instruction understanding and visual grounding capabilities of MLLMs [5, 4] have exhibited great promise for language-instructed multitask robotic manipulation [7, 8, 9].
  - [DeeR-VLA: Dynamic Inference of Multimodal Large Language Models for Efficient Robot Execution](https://proceedings.neurips.cc/paper_files/paper/2024/file/67b0e7c7c2a5780aeefe3b79caac106e-Paper-Conference.pdf)
- **Sequential decision-making** (constructs)
  > Many of these tasks, such as natural language dialogue or robotic control, require complex sequential decision-making. (Section 1)
  - [Q-SFT: Q-Learning for Language Models via Supervised Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a9531a3e64e6167c7e1e671157082682-Paper-Conference.pdf)
