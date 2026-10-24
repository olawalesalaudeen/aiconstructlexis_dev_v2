# Sequential decision-making
**Type:** Construct  
**Referenced in:** 15 papers  
**Also known as:** Multi-step decision-making  

## State of the Field

**Definition agreement:** Consensus. All papers define sequential decision-making as choosing and carrying out a sequence of actions over time, typically in an interactive environment where later actions depend on earlier outcomes or feedback, in order to achieve a goal. The differences are only in framing, such as describing it as an ability, a cognitive capability, or a policy-training task, not in the core phenomenon being studied.

**Space of definitions.** Across the surveyed work, the dominant framing treats sequential decision-making, sometimes called multi-step decision-making, as an ability or capability to select, sequence, and execute actions over multiple steps to accomplish a task or goal. Most definitions add either an interactive environment or environmental feedback, with actions depending on previous outcomes over time. A smaller line of work frames it as the task of training policies to make a series of choices over time to achieve a goal, so the main difference is whether papers describe a model capability or a problem setting.

**Space of facets.** Papers do not offer an elaborate subtype scheme, but they use sequential decision-making and multi-step decision-making for closely similar descriptions. The construct is commonly situated alongside planning and reasoning, including work that describes a method as integrating reasoning and acting to address sequential decision-making tasks, and it is also tied to embodied agent policies. As examples, papers place it in web navigation and in problems such as online shopping, scientific reasoning, and mathematical problem-solving, all described as requiring multi-step decisions or environmental feedback.

**Space of measurement.** Operationalization is relatively concentrated: papers link the construct to 3 measurement instruments and 4 behavioral indicators. The most common instruments are ALFWorld, ToolBench, and VirtualHome; among behavioral indicators, the linked items are web navigation, embodied planning, robotic manipulation, and strategy generation, though only robotic manipulation appears as a measurement link. Papers describe ALFWorld as a benchmark for sequential decision-making scenarios, VirtualHome as one of two classical sequential decision-making environments, and ToolBench as containing intricate multi-step decision tasks, so the measurements largely track the dominant definitions' emphasis on multi-step action sequences in interactive settings.

**Links.** Beyond measurement, a few papers relate sequential decision-making to web navigation, describing it as a task that requires interaction with an environment. Single papers also relate planning and reasoning to sequential decision-making, and relate embodied planning to sequential decision-making policies of embodied agents. One paper claims a causal relationship from strategy generation to sequential decision-making, citing performance gains on decision-making tasks when planning is used instead of directly generating responses; no correlational links are reported.

## Sources

**[Fleet of Agents: Coordinated Problem Solving with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/klein25a/klein25a.pdf)**
> The ability to perform a series of actions in an interactive environment where each action depends on the outcomes of previous ones.

**[Rational Decision-Making Agent with Learning Internal Utility Judgment](https://proceedings.iclr.cc/paper_files/paper/2025/file/45994782a61bb51cad5c2bae36834265-Paper-Conference.pdf) (as "Multi-step decision-making")**
> Selecting and sequencing actions over multiple steps to accomplish a task or instruction.

## Relationships

### Sequential decision-making →
- **ALFWorld** (measurements) — *measured_by*
  > We use one benchmark to evaluate the performance in sequential decision-making scenarios: ALFWorld (Shridhar et al., 2020) (Section 3.4)
  - [CodePlan: Unlocking Reasoning Potential in Large Language Models by Scaling Code-form Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/c362b360765ed90ae4bd9c6764837e0e-Paper-Conference.pdf)
- **VirtualHome** (measurements) — *measured_by*
  > We first evaluate our method on two classical sequential decision-making environments with limited action space: Overcooked [5] and VirtualHome [5]
  - [Reinforcing LLM Agents via Policy Optimization with Action Decomposition](https://proceedings.neurips.cc/paper_files/paper/2024/file/bc09efb501c801ed92e181e26a885c2d-Paper-Conference.pdf)
- **ToolBench** (measurements) — *measured_by*
  > conduct extensive experiments on Game of 24 (Yao et al., 2023), WebShop (Yao et al., 2022a), ToolBench (Qin et al., 2023c) and RestBench (Song et al., 2023), which contains intricate multi-step decision tasks involving diverse scenarios.
  - [Rational Decision-Making Agent with Learning Internal Utility Judgment](https://proceedings.iclr.cc/paper_files/paper/2025/file/45994782a61bb51cad5c2bae36834265-Paper-Conference.pdf)

### → Sequential decision-making
- **Strategy generation** (behaviors tasks) — *causes*
  > CODEPLAN consistently and significantly outperforms directly generating responses without planning, yielding a relative 25.1% performance gain averaged across 13 challenging reasoning benchmarks spanning mathematical reasoning, symbolic reasoning, instruction-following, multi-hop question answering, and decision-making tasks.
  - [CodePlan: Unlocking Reasoning Potential in Large Language Models by Scaling Code-form Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/c362b360765ed90ae4bd9c6764837e0e-Paper-Conference.pdf)

### Associated with
- **Web navigation** (behaviors tasks)
  > Large language model (LLM) agents have been applied to sequential decision-making tasks such as web navigation, but without any environment-specific experiences, they often fail in these complex tasks.
  - [Contextual Experience Replay for Self-Improvement of Language Agents](https://aclanthology.org/2025.acl-long.694.pdf)
- **Planning** (constructs)
  > ReAct [23]: This LLM-based planning method integrates reasoning and acting to address sequential decision-making tasks. (Section 4.1.2)
  - [AutoGuide: Automated Generation and Selection of Context-Aware Guidelines for Large Language Model Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/d8efbb5dd415974eb095c3f06bff1f48-Paper-Conference.pdf)
- **Reasoning** (constructs)
  > ReAct [23]: This LLM-based planning method integrates reasoning and acting to address sequential decision-making tasks. (Section 4.1.2)
  - [AutoGuide: Automated Generation and Selection of Context-Aware Guidelines for Large Language Model Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/d8efbb5dd415974eb095c3f06bff1f48-Paper-Conference.pdf)
- **Robotic manipulation** (behaviors tasks)
  > Many of these tasks, such as natural language dialogue or robotic control, require complex sequential decision-making. (Section 1)
  - [Q-SFT: Q-Learning for Language Models via Supervised Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a9531a3e64e6167c7e1e671157082682-Paper-Conference.pdf)
