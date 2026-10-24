# Agency
**Type:** Construct  
**Referenced in:** 15 papers  
**Also known as:** Agentic ability, Agentic capabilities, Agentic capability, Autonomy, Agent-oriented abilities, Model autonomy, Goal-directed behavior, Agentic abilities, Real-world application  

## State of the Field

**Definition agreement:** Consensus. Most papers define agency as the capacity of an AI system, model, or agent to act autonomously and goal-directed in an environment, typically over multiple steps and often involving planning, decision-making, or tool use without direct human control. A few papers narrow this to specific settings such as embodied agents, GUI interaction, software engineering, or persistent objective pursuit across turns, but these are variations in emphasis and application rather than different phenomena.

**Space of definitions.** Across the papers, the prevailing usage treats agency, often under labels such as agentic capability, agentic ability, or autonomy, as a latent or general capacity for autonomous, goal-directed action in an environment, commonly over multiple turns or multi-step tasks and commonly involving planning, acting, or decision-making. Several definitions add independence from human intervention or external control, while some specify particular settings such as GUI interaction, software engineering, long-context video tasks, or practical deployment. A smaller line of work uses narrower framings, defining it as strategic decision-making through action selection, as tool-oriented functioning such as tool selection, or as goal-directed behavior over multiple interaction turns rather than immediate-context response.

**Space of facets.** Papers commonly break this broad ability into recurring components such as perceiving, planning, and acting over multiple turns, planning plus action execution plus handling environment responses, and sequential decision-making in interactive environments. One line of work further organizes agentic capabilities into workflow, tool use or function call, long-context understanding, and real-world application, with real-world application described as coordinating tool use, planning, and environmental interaction. The terminology is heterogeneous: agency is sometimes equated with strategic decision-making, while nearby names such as autonomy, model autonomy, agent-oriented abilities, and goal-directed behavior are used for overlapping but sometimes narrower aspects.

**Space of measurement.** Operationalizations are concentrated in benchmarks and testbeds: papers link the construct to 6 measurement instruments and 1 behavioral indicator. AgentBoard and AgentBench are used as agent evaluation benchmarks and collections of diverse tasks, AndroidControl and GUI-Odyssey as mobile-agent benchmarks, Human evaluation as direct human judgment of agency, and 1 other instrument as an OS agent testbed. These measures mostly match the dominant definitions by testing multi-step action in environments, though several narrow the construct to specific platforms, and the single linked behavioral indicator appears in a causal claim rather than as a measurement instrument.

**Links.** Beyond measurement, one paper claims a causal relationship from Grounding, World modeling, and Self-reflection to agency, describing emergent agentic abilities as strongly dependent on these basic abilities. Separate papers report agency is related to Coding ability, with programming capabilities receiving high fitted weights on agent benchmarks, and related to Consistency, in the sense that tasks requiring heavy reasoning or agentic capabilities can show occasional exceptional results alongside lower average performance. No correlates relation is reported.

## Sources

**[OS-ATLAS: Foundation Action Model for Generalist GUI Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/0faa4bc5f522076947a030273629d4fe-Paper-Conference.pdf) (as "Agentic capability")**
> The general capacity to autonomously interact with operating systems and complete multi-step tasks through GUI interactions, encompassing planning, action execution, and environment response handling.

**[VideoWebArena:  Evaluating Long Context Multimodal Agents with Video Understanding Web Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/5b555804d495321df2e3208cc27f4fbc-Paper-Conference.pdf) (as "Agentic ability")**
> The latent capacity of a model to act autonomously to accomplish tasks within an environment.

**[BALROG: Benchmarking Agentic LLM and VLM Reasoning On Games](https://proceedings.iclr.cc/paper_files/paper/2025/file/f0b1515be276f6ba82b4f2b25e50bef0-Paper-Conference.pdf) (as "Agentic capabilities")**
> The ability of a model to act autonomously and purposefully to achieve complex goals in an environment.

**[BadRobot: Jailbreaking Embodied LLM Agents in the Physical World](https://proceedings.iclr.cc/paper_files/paper/2025/file/5b2fa23e4ef0f7ac6c4f01d7998e6237-Paper-Conference.pdf) (as "Autonomy")**
> The capacity of an embodied agent to make informed, independent decisions without external control.

**[DataGen: Unified Synthetic Dataset Generation via Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a01e69aa9c3c61fcb40ea378e71fc780-Paper-Conference.pdf) (as "Agent-oriented abilities")**
> The latent capacity to perform agent-like functions such as selecting tools or acting in tool-using workflows.

**[Moral Alignment for LLM Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/f2b1bad4756ceee8f408e16b8e6e4383-Paper-Conference.pdf)**
> The capacity of a system to make strategic decisions by selecting actions in an environment that lead to different outcomes.

**[MLE-bench: Evaluating Machine Learning Agents on Machine Learning Engineering](https://proceedings.iclr.cc/paper_files/paper/2025/file/7e3767db483c942b883eb4f8cfb74e31-Paper-Conference.pdf) (as "Model autonomy")**
> The capability of an AI agent to operate and solve complex, multi-step problems without human intervention.

**[LMRL Gym: Benchmarks for Multi-Turn Reinforcement Learning with Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/abdulhai25a/abdulhai25a.pdf) (as "Goal-directed behavior")**
> The latent tendency of an agent to pursue a specific objective over multiple interaction turns, rather than generating responses based on immediate context or imitation.

**[AgentBoard: An Analytical Evaluation Board of Multi-turn LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/877b40688e330a0e2a3fc24084208dfa-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Agentic abilities")**
> The latent capacity of an LLM to function as a general-purpose agent across diverse environments by perceiving, planning, and acting over multiple turns.

**[Can Compressed LLMs Truly Act? An Empirical Evaluation of Agentic Capabilities in LLM Compression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25k/dong25k.pdf) (as "Real-world application")**
> The latent ability to operate effectively in practical deployment scenarios requiring coordination of multiple capabilities such as tool use, planning, and environmental interaction.

## Relationships

### Agency →
- **AgentBoard** (measurements) — *measured_by*
  > We tested on two standardized agent evaluation benchmarks, AgentBench [57] and Agent-Board [61], each is a collection of diverse tasks for evaluating LMs’ agentic capabilities. (Sec. 4.2)
  - [Observational Scaling Laws and the Predictability of Langauge Model Performance](https://proceedings.neurips.cc/paper_files/paper/2024/file/1cded4f97cf5f01a284c574110b7e3b9-Paper-Conference.pdf)
- **AgentBench** (measurements) — *measured_by*
  > We tested on two standardized agent evaluation benchmarks, AgentBench [57] and Agent-Board [61], each is a collection of diverse tasks for evaluating LMs’ agentic capabilities. (Sec. 4.2)
  - [Observational Scaling Laws and the Predictability of Langauge Model Performance](https://proceedings.neurips.cc/paper_files/paper/2024/file/1cded4f97cf5f01a284c574110b7e3b9-Paper-Conference.pdf)
- **OSWorld** (measurements) — *measured_by*
  > In this study, we benchmark our approach on the challenging OS agent testbed, OSWorld (Xie et al., 2024). (Section 4.3)
  - [OS-ATLAS: Foundation Action Model for Generalist GUI Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/0faa4bc5f522076947a030273629d4fe-Paper-Conference.pdf)
- **AndroidControl** (measurements) — *measured_by*
  > “We examine five distinct agent benchmarks across three different platforms: AndroidControl (Li et al., 2024) and GUI-Odyssey (Lu et al., 2024a) for mobile agents”
  - [OS-ATLAS: Foundation Action Model for Generalist GUI Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/0faa4bc5f522076947a030273629d4fe-Paper-Conference.pdf)
- **GUI-Odyssey** (measurements) — *measured_by*
  > “We examine five distinct agent benchmarks across three different platforms: AndroidControl (Li et al., 2024) and GUI-Odyssey (Lu et al., 2024a) for mobile agents”
  - [OS-ATLAS: Foundation Action Model for Generalist GUI Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/0faa4bc5f522076947a030273629d4fe-Paper-Conference.pdf)

### → Agency
- **Grounding** (constructs) — *causes*
  > Emergent agentic abilities are strongly dependent on basic abilities like grounding, world modeling, and self-reflection.
  - [AgentBoard: An Analytical Evaluation Board of Multi-turn LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/877b40688e330a0e2a3fc24084208dfa-Paper-Datasets_and_Benchmarks_Track.pdf)
- **World modeling** (constructs) — *causes*
  > Emergent agentic abilities are strongly dependent on basic abilities like grounding, world modeling, and self-reflection.
  - [AgentBoard: An Analytical Evaluation Board of Multi-turn LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/877b40688e330a0e2a3fc24084208dfa-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Self-reflection** (behaviors tasks) — *causes*
  > Emergent agentic abilities are strongly dependent on basic abilities like grounding, world modeling, and self-reflection.
  - [AgentBoard: An Analytical Evaluation Board of Multi-turn LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/877b40688e330a0e2a3fc24084208dfa-Paper-Datasets_and_Benchmarks_Track.pdf)

### Associated with
- **Coding ability** (constructs)
  > We observe that the ﬁtted weights assign signiﬁcant importance to programming capabilities (HumanEval) on both benchmarks, underscoring its signiﬁcance in deﬁning the agentic capabilities of LMs. (Sec. 4.2)
  - [Observational Scaling Laws and the Predictability of Langauge Model Performance](https://proceedings.neurips.cc/paper_files/paper/2024/file/1cded4f97cf5f01a284c574110b7e3b9-Paper-Conference.pdf)
- **Consistency** (constructs)
  > when it comes to tasks requiring heavy reasoning or agentic capabilities, a major challenge persists: while the models occasionally achieve exceptional results, their average performance often falls short of their demonstrated potential. (Section 1)
  - [Guided Search Strategies in Non-Serializable Environments with Applications to Software Engineering Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zainullina25a/zainullina25a.pdf)
