# ScienceWorld
**Type:** Measurement  
**Referenced in:** 15 papers  
**Also known as:** SciWorld  

## State of the Field

**What it is.** Across papers, the prevailing framing is a text-based interactive or textual simulation benchmark and environment for basic or elementary science experiments, where agents follow natural-language goals by interacting with objects, navigating, manipulating objects, and observing outcomes. Descriptions also present it as an embodied AI environment for long-horizon and large-action-space tasks, often emphasizing long-term memory and subtask decomposition; one paper adds that it covers 30 scientific tasks, and another refers to the same benchmark as "SciWorld" for science-oriented interactive tasks.

**What it is claimed to measure.** Papers use it to measure 4 constructs and 2 behavioral indicators, so the reported measurement role is spread across several targets rather than concentrated on one. The linked constructs are Generalization, Scientific reasoning, Commonsense knowledge, and Task decomposition ability, and the linked behavioral indicators are Embodied planning and Scientific experimentation; the evidence includes claims that ScienceWorld contains unseen tasks for evaluating generalization and that it serves as an interactive benchmark for embodied science experiments.

**Space of uses.** Papers do not link it to any other measurement instrument. In use, it commonly appears alongside ALFWorld, and some papers also place it with WebShop or VirtualHome as part of a small suite of agent environments; as Policy Improvement using Language Feedback Models puts it, agents "interact with objects to conduct experiments specified in natural language," which matches how papers position it for long-horizon, multi-step interactive evaluation.

## Sources

**[Policy Improvement using Language Feedback Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4d4f7cf206bb00f9a38a5b6ae92cf79a-Paper-Conference.pdf)**
> A textual simulation benchmark for basic science experiments used to evaluate instruction following in long-horizon, large-action-space settings.

**[AgentSquare: Automatic LLM Agent Search in Modular Design Space](https://proceedings.iclr.cc/paper_files/paper/2025/file/0ae94013da7cd459402fd77874e09ee3-Paper-Conference.pdf) (as "SciWorld")**
> A benchmark for evaluating LLM agents on science-oriented interactive tasks.

## Relationships

### → ScienceWorld
- **Generalization** (constructs) — *measured_by*
  > AlFWorld and ScienceWorld include unseen tasks to evaluate the agent’s generalization ability. (Section 4.1)
  - [Agent Planning with World Knowledge Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/d032263772946dd5026e7f3cd22bce5b-Paper-Conference.pdf)
- **Embodied planning** (behaviors tasks) — *measured_by*
  > for embodied planning tasks in ScienceWorld and VirtualHome, a successful multi-step plan requires single-step optimality in each planning step.
  - [Discriminator-Guided Embodied Planning for LLM Agent](https://proceedings.iclr.cc/paper_files/paper/2025/file/e6f2b968c4ee8ba260cd7077e39590dd-Paper-Conference.pdf)
- **Scientific experimentation** (behaviors tasks) — *measured_by*
  > ScienceWorld (Wang et al., 2022a) is an interactive benchmark designed for embodied science experiments. (Section 4.1)
  - [Scaling Autonomous Agents via Automatic Reward Modeling And Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/47f75e809409709c6d226ab5ca0c9703-Paper-Conference.pdf)
- **Task decomposition ability** (constructs) — *measured_by*
  > We choose ScienceWorld (Wang et al., 2022), a complex interactive environment requiring skills in long-term memory, sub-task decomposition, and scientific and commonsense knowledge. (Section 4.2)
  - [EvoAgent: Towards Automatic Multi-Agent Generation via Evolutionary Algorithms](https://aclanthology.org/2025.naacl-long.315.pdf)
- **Commonsense knowledge** (constructs) — *measured_by*
  > We choose ScienceWorld (Wang et al., 2022), a complex interactive environment requiring skills in long-term memory, sub-task decomposition, and scientific and commonsense knowledge. (Section 4.2)
  - [EvoAgent: Towards Automatic Multi-Agent Generation via Evolutionary Algorithms](https://aclanthology.org/2025.naacl-long.315.pdf)
