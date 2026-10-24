# Plan generation
**Type:** Behavior  
**Referenced in:** 17 papers  
**Also known as:** Transition pathway generation, Meta-plan generation, Action plan generation, Dialogue logic flow generation, Multi-step planning, Task planning  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is direct generation of an ordered plan, usually a sequence of actions or steps for solving a planning problem or achieving a specified goal. Success is commonly framed as reaching a goal state from an initial state or completing a given task, and some authors make the directness explicit by excluding translation to a formal language or the use of an external planner. A smaller set broadens the output to include thoughts or API function calls, but still as a plan derived from a task description, provided information, or user queries.

**Variants.** Beyond the dominant action-sequence framing, papers study task planning for high-level tasks or safety guard requests, transition pathway generation for material transformations, meta-plan generation for collaborative long-term decomposition, dialogue logic flow generation for turn-level intentions and slot-value pairs, and multi-step planning as ordered API function calls, plus one action-plan formulation that also allows thoughts. Papers also place it in larger workflows: one paper claims a causal relationship from Collaboration to plan generation through multi-turn discussions, and another claims a causal relationship from plan generation to Code generation by outlining a plan before complete code is produced.

**Space of elicitation and scores.** Papers link plan generation to one measurement instrument, VAL. The recorded use is plan validation: one paper states that the plan produced from an LLM-as-Planner is validated with VAL against ground-truth DFs and PFs.

**What it is taken as evidence of.** The only linked construct is Planning. The recorded relation is a causal claim from Planning to plan generation rather than a measurement link: one paper describes plan-and-solve prompting as eliciting the model to first generate a plan, such as numbered steps, and then execute it. No other construct link is recorded.

## Sources

**[Leveraging Environment Interaction for Automated PDDL Translation and Planning with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/44af065477781e7f8a8589b14a62c489-Paper-Conference.pdf)**
> The observable behavior of an LLM directly producing a sequence of actions intended to solve a planning problem, without translating to a formal language or using an external planner.

**[MatExpert: Decomposing Materials Discovery By Mimicking Human Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/7d6850f4c82520793f738d98a72aab9d-Paper-Conference.pdf) (as "Transition pathway generation")**
> The observable task of generating a textual, step-by-step plan outlining the necessary modifications to transform a source material into a target material with specified properties.

**[CaPo: Cooperative Plan Optimization for Efficient Embodied Multi-Agent Cooperation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b07091c16719ad3990e3d1ccee6641f1-Paper-Conference.pdf) (as "Meta-plan generation")**
> The observable process where agents collaboratively analyze a task, discuss, and create a high-level, long-term plan that decomposes the task into subtasks with assigned steps.

**[Interactive Speculative Planning: Enhance Agent Efficiency through Co-design of System and User Interface](https://proceedings.iclr.cc/paper_files/paper/2025/file/25458943db16e0f78f748ca5bc34fff6-Paper-Conference.pdf) (as "Action plan generation")**
> The observable production of a sequence of actions or thoughts intended to achieve a specific goal.

**[From Schema to State: Zero-Shot Scheme-Only Dialogue State Tracking via Diverse Synthetic Dialogue and Step-by-Step Distillation](https://aclanthology.org/2025.emnlp-main.85.pdf) (as "Dialogue logic flow generation")**
> Creating a turn-level plan that specifies intentions, relevant slot-value pairs, and explanatory reasoning before utterance realization.

**[Hephaestus: Improving Fundamental Agent Capabilities of Large Language Models through Continual Pre-Training](https://aclanthology.org/2025.naacl-long.308.pdf) (as "Multi-step planning")**
> Producing an ordered sequence of API function calls as a solution plan to achieve a goal derived from a natural language task description.

**[Flow-of-Options: Diversified and Improved LLM Reasoning by Thinking Through Options](https://raw.githubusercontent.com/mlresearch/v267/main/assets/nair25c/nair25c.pdf) (as "Task planning")**
> The behavior of an LLM generating a sequence of discrete steps required to complete a given high-level task.

## Relationships

### Plan generation →
- **VAL** (measurements) — *measured_by*
  > the plan produced from LLM-as-Planner is validated using VAL (Howey et al., 2004) against the ground-truth DFs and PFs provided above. (Section 4.2).
  - [On the Limit of Language Models as Planning Formalizers](https://aclanthology.org/2025.acl-long.242.pdf)

### Associated with
- **Collaboration** (behaviors tasks)
  > CaPo enables agents to collaboratively create and refine long-term, strategic, and coherent meta-plans through multi-turn discussions.
  - [CaPo: Cooperative Plan Optimization for Efficient Embodied Multi-Agent Cooperation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b07091c16719ad3990e3d1ccee6641f1-Paper-Conference.pdf)
- **Code generation** (behaviors tasks)
  > In the second step, a complete code is generated based on the outlined plan by Agent B. (Section 4.1.1)
  - [Code-Generated Graph Representations Using Multiple LLM Agents for Material Properties Prediction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25an/huang25an.pdf)
- **Planning** (constructs)
  > Planning: Plan-and-solve prompting (PS) (Wang et al., 2023) elicits the model to first generate a plan (e.g., numbered steps) and then execute that plan, yielding improvements over standard CoT. (Section 2)
  - [Prior Prompt Engineering for Reinforcement Fine-Tuning](https://aclanthology.org/2025.emnlp-main.1590.pdf)
