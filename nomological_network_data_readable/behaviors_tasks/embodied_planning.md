# Embodied planning
**Type:** Behavior  
**Referenced in:** 16 papers  
**Also known as:** Task planning  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats this behavior as generating a sequence of actions for an agent in a simulated or physical environment, typically to achieve a goal. A smaller line of work uses the label task planning and frames it as generating or refining action plans for robotic tasks from natural-language goals and failure feedback. Where success is spelled out, papers describe multi-step planning, and one study states that a successful plan requires single-step optimality at each step.

**Variants.** Papers use several nearby names for closely related settings, most commonly embodied planning, but also task planning and embodied decision. The settings described span simulated and physical environments, including household or scientific contexts, and robotic tasks driven by natural-language goals and failure feedback.

**Space of elicitation and scores.** Papers measure this behavior with 7 instruments. The most frequently linked ones are ALFWorld, BabyAI, HotpotQA, RestBench, and ScienceWorld, plus 2 other instruments. These are described as benchmarks, datasets, or tasks: one paper uses datasets from task planning benchmarks, and another evaluates success by requiring stepwise optimality within a multi-step plan.

**What it is taken as evidence of.** Rather than treating it as evidence of one agreed construct, papers link this behavior to 4 constructs. Individual papers claim causal relationships from in-context learning and from commonsense reasoning to embodied planning, while other papers treat it as related to long-horizon planning and sequential decision-making. The recorded links therefore split between causal claims and relatedness, not a shared claim that it directly measures one construct.

## Sources

**[Benchmarking Agentic Workflow Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/adbe936993aa7cf41e45054d8b72f183-Paper-Conference.pdf)**
> The task of generating a sequence of actions for an agent to execute within a simulated or physical environment.

**[AHA: A Vision-Language-Model for Detecting and Reasoning Over Failures in Robotic Manipulation](https://proceedings.iclr.cc/paper_files/paper/2025/file/70a06501001e1820fd1eb9ee821302d2-Paper-Conference.pdf) (as "Task planning")**
> Generating or refining action plans for robotic tasks from natural-language goals and failure feedback.

## Relationships

### Embodied planning →
- **ScienceWorld** (measurements) — *measured_by*
  > for embodied planning tasks in ScienceWorld and VirtualHome, a successful multi-step plan requires single-step optimality in each planning step.
  - [Discriminator-Guided Embodied Planning for LLM Agent](https://proceedings.iclr.cc/paper_files/paper/2025/file/e6f2b968c4ee8ba260cd7077e39590dd-Paper-Conference.pdf)
- **VirtualHome** (measurements) — *measured_by*
  > for embodied planning tasks in ScienceWorld and VirtualHome, a successful multi-step plan requires single-step optimality in each planning step.
  - [Discriminator-Guided Embodied Planning for LLM Agent](https://proceedings.iclr.cc/paper_files/paper/2025/file/e6f2b968c4ee8ba260cd7077e39590dd-Paper-Conference.pdf)
- **ALFWorld** (measurements) — *measured_by*
  > “We conduct experiments on three representative agent tasks: Complex Reasoning (HotpotQA (Yang et al., 2018)), Embodied Decision (ALFWorld (Shridhar et al., 2020)), and Interactive Programming (InterCode (Yang et al., 2023))”
  - [Improving Retrospective Language Agents via Joint Policy Gradient Optimization](https://aclanthology.org/2025.naacl-long.6.pdf)
- **BabyAI** (measurements) — *measured_by*
  > Babyai for embodied planning (Section 4.2)
  - [AgentRM: Enhancing Agent Generalization with Reward Modeling](https://aclanthology.org/2025.acl-long.945.pdf)

### → Embodied planning
- **In-context learning** (constructs) — *causes*
  > These experiments confirm that the in-context example selecting strategy has a significant impact on the performance of LLM-based task planners (Section 6.1).
  - [LoTa-Bench: Benchmarking Language-oriented Task Planners for Embodied Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e91fb65c6324a984ea9ef39a5b84af04-Paper-Conference.pdf)
- **Commonsense knowledge** (constructs) — *causes*
  > Large language models(LLMs) trained on massive corpora are generally considered to have acquired common sense knowledge for task planning
  - [EMOS: Embodiment-aware Heterogeneous Multi-robot Operating System with LLM Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/8ec46cecdae5407662899c5f6698cd8b-Paper-Conference.pdf)

### Associated with
- **Environment exploration** (behaviors tasks)
  > we employ an exploration-integrated task planning scheme, in which the information-based exploration is incorporated into the LLM-based planning process. (Introduction)
  - [Exploratory Retrieval-Augmented Planning For Continual Embodied Instruction Following](https://proceedings.neurips.cc/paper_files/paper/2024/file/7bacd0ebd061d4694583ae0eb69ad15f-Paper-Conference.pdf)
- **Long-horizon planning** (constructs)
  > embodied scenarios pose greater challenges, requiring long-term planning in intricate contexts with high-dimensional state spaces and tangible interactions.
  - [Discriminator-Guided Embodied Planning for LLM Agent](https://proceedings.iclr.cc/paper_files/paper/2025/file/e6f2b968c4ee8ba260cd7077e39590dd-Paper-Conference.pdf)
