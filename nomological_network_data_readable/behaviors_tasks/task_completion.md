# Task completion
**Type:** Behavior  
**Referenced in:** 24 papers  
**Also known as:** Household task execution, Indoor task simulation, Graph-structured task execution, Embodied task solving, Household activity completion, Task execution, Open-ended task solving, Task success, Passing unit tests, Completing subjective everyday tasks  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats task completion as whether an agent reaches the intended end state or user's goal for a task. Several definitions make this explicitly scriptable, describing evaluation as checking whether the goal is accomplished and returning a binary success flag, while tool-use and UI papers frame it as fulfilling user needs through sequences of actions, tool calls, or API interactions. A smaller line of work uses the term more procedurally, as finishing baseline items or executing an accepted predicted task, and domain-specific work judges completion through dialogue-game quality scores or generated code passing predefined tests.

**Variants.** Papers study the behavior across several task families. A prevalent cluster is embodied work, including household task execution, indoor task simulation through language interaction, household activities defined as predicates with counts to satisfy, and open-ended embodied tasks specified by text or video without task-specific rewards. Other variants include graph-structured tasks represented as directed acyclic graphs with dependencies, branches, and hierarchical levels, web and application tasks translated from natural-language requests into UI or API actions, dialogue games with collaborative objectives, and code tasks observed through unit-test or case-test passing.

**Space of elicitation and scores.** Papers measure task completion with 7 instruments. The most recurrent are ALFWorld and WebArena, followed by AitW, LLM-as-a-judge, and Minecraft, plus 2 other instruments. Across these links, most instruments are interactive environments or benchmarks, AitW is described as a dataset, and LLM-as-a-judge serves as a reward signal that judges whether the current observation shows successful completion.

**What it is taken as evidence of.** The papers do not converge on task completion as evidence of a single shared construct. Instead, papers claim causal relationships from Ambiguity, Contextual understanding, and Error recovery to task completion, respectively framing the link as a hypothesis that ambiguity reduction should improve code accuracy, as context awareness enabling an agent to interpret signals and propose and execute tasks, and as recovery from difficult states allowing completion of complex instructions.

## Sources

**[Spider2-V: How Far Are Multimodal Agents From Automating Data Science and Engineering Workflows?](https://proceedings.neurips.cc/paper_files/paper/2024/file/c2f71567cd53464161cab3336e8fc865-Paper-Datasets_and_Benchmarks_Track.pdf)**
> Successfully reaching the intended end state of a benchmark task as judged by task-specific evaluation scripts.

**[World Model Implanting for Test-time Adaptation of Embodied Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yoo25a/yoo25a.pdf) (as "Household task execution")**
> Performing a variety of common tasks within a simulated home environment, such as moving objects or operating appliances.

**[World Model Implanting for Test-time Adaptation of Embodied Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yoo25a/yoo25a.pdf) (as "Indoor task simulation")**
> Completing tasks within a simulated indoor setting, typically guided by text-based interactions and instructions.

**[What Limits Virtual Agent Application? OmniBench: A Scalable Multi-Dimensional Benchmark for Essential Virtual Agent Capabilities](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bu25b/bu25b.pdf) (as "Graph-structured task execution")**
> Performing a sequence of actions on a task represented as a directed acyclic graph with dependencies, branches, and hierarchical levels.

**[AgentSquare: Automatic LLM Agent Search in Modular Design Space](https://proceedings.iclr.cc/paper_files/paper/2025/file/0ae94013da7cd459402fd77874e09ee3-Paper-Conference.pdf) (as "Embodied task solving")**
> The observable task of interacting with a simulated physical environment to complete a goal, such as household chores or scientific experiments.

**[CaPo: Cooperative Plan Optimization for Efficient Embodied Multi-Agent Cooperation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b07091c16719ad3990e3d1ccee6641f1-Paper-Conference.pdf) (as "Household activity completion")**
> The execution of common domestic tasks within a simulated environment, defined by the satisfaction of a set of specified goals or predicates.

**[Proactive Agent: Shifting LLM Agents from Reactive Responses to Active Assistance](https://proceedings.iclr.cc/paper_files/paper/2025/file/75c37811e830bf029584b1c6fac17726-Paper-Conference.pdf) (as "Task execution")**
> Carrying out an accepted predicted task through interaction with tools and the environment.

**[FOUNDER: Grounding Foundation Models in World Models for Open-Ended Embodied Decision Making](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ee/wang25ee.pdf) (as "Open-ended task solving")**
> The observable performance of an agent in accomplishing a wide range of tasks specified in human-intuitive formats like text or video, without task-specific rewards.

**[Playpen: An Environment for Exploring Learning From Dialogue Game Feedback](https://aclanthology.org/2025.emnlp-main.1517.pdf) (as "Task success")**
> Achieving the goal of a dialogue game, such as correctly guessing a target word or completing a collaborative objective.

**[ExeCoder: Empowering Large Language Models with Executability Representation for Code Translation](https://aclanthology.org/2025.emnlp-main.362.pdf) (as "Passing unit tests")**
> The observable outcome where generated code, when executed against a set of predefined test cases, produces the expected outputs for all cases.

## Relationships

### Task completion →
- **ALFWorld** (measurements) — *measured_by*
  > Given only one simple demonstration, AutoManual signiﬁcantly improves task success rates, achieving 97.4% with GPT-4-turbo and 86.2% with GPT-3.5-turbo on ALFWorld benchmark tasks. (Abstract)
  - [AutoManual: Constructing Instruction Manuals by LLM Agents via Interactive Environmental Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0142921fad7ef9192bd87229cdafa9d4-Paper-Conference.pdf)
- **WebArena** (measurements) — *measured_by*
  > This benchmark is particularly suitable for evaluating real-world task completion capabilities due to its focus on practical web interactions. (Section 3.1)
  - [AgentTrek: Agent Trajectory Synthesis via Guiding Replay with Web Tutorials](https://proceedings.iclr.cc/paper_files/paper/2025/file/c681fb2bf1d785fbc766f3ea14758aab-Paper-Conference.pdf)
- **MiniWoB++** (measurements) — *measured_by*
  > These manuals allow LLM agents to achieve remarkable success rates of 97.4% with GPT-4-turbo and 86.2% with GPT-3.5-turbo on ALFWorld, 98.3% with GPT-4-turbo and 92.7% with GPT-3.5-turbo on MiniWoB++. (Introduction)
  - [AutoManual: Constructing Instruction Manuals by LLM Agents via Interactive Environmental Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0142921fad7ef9192bd87229cdafa9d4-Paper-Conference.pdf)
- **AitW** (measurements) — *measured_by*
  > We demonstrate the effectiveness of DigiRL using the Android-in-the-Wild (AitW) dataset, where our 1.3B VLM trained with RL achieves a 49.5% absolute improvement – from 17.7 to 67.2% success rate
  - [DigiRL: Training In-The-Wild Device-Control Agents with Autonomous Reinforcement Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/1704ddd0bb89f159dfe609b32c889995-Paper-Conference.pdf)
- **VirtualHome** (measurements) — *measured_by*
  > "We evaluate our approach in two embodied environments: VirtualHome (Puig et al., 2018), a 3D simulation environment for household task execution"
  - [World Model Implanting for Test-time Adaptation of Embodied Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yoo25a/yoo25a.pdf)
- **Minecraft** (measurements) — *measured_by*
  > Finally, we extend FOUNDER to Minecraft, a more complex environments with challenging task instructions and more intricate observations (Section 5).
  - [FOUNDER: Grounding Foundation Models in World Models for Open-Ended Embodied Decision Making](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ee/wang25ee.pdf)

### → Task completion
- **Ambiguity** (constructs) — *causes*
  > Based on our definition of ambiguity, we hypothesize that ambiguity reduction should lead to improved code accuracy. (Section 1)
  - [Identifying & Interactively Refining Ambiguous User Goals for Data Visualization Code Generation](https://aclanthology.org/2025.emnlp-main.1283.pdf)
- **Context retention** (constructs) — *causes*
  > Memory retention mechanisms can be improved as well, especially for handling long, multi-step tasks that span multiple apps. Current agents often lose context during complex tasks or app transitions, which leads to incomplete task execution.
  - [SPA-BENCH: A COMPREHENSIVE BENCHMARK FOR SMARTPHONE AGENT EVALUATION](https://proceedings.iclr.cc/paper_files/paper/2025/file/9a75f4dd9679aa4ff80a4e6f0a1dc700-Paper-Conference.pdf)

### Associated with
- **Error recovery** (constructs)
  > “DigiRL is able to recover from such states and complete complex instruction as requested”
  - [DigiRL: Training In-The-Wild Device-Control Agents with Autonomous Reinforcement Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/1704ddd0bb89f159dfe609b32c889995-Paper-Conference.pdf)
