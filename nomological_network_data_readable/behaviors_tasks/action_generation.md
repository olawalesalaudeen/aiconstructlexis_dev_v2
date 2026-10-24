# Action generation
**Type:** Behavior  
**Referenced in:** 13 papers  
**Also known as:** Executable action generation, Candidate action generation  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is the stepwise production of a concrete next action for an environment or agent. Most papers describe it as generating a structured command such as click, type text, scroll, or input, often with parameters like position or value, from the current task, goal, page, location, or interaction history; one paper even illustrates an output as {"Action": "type text", "position": "", "value": "iPhone power adapter"}. A smaller line of work broadens this to route-following control actions like "ascend" or "turn right", or to sequences of low-level robotic actions and discrete action tokens, while another variant defines success more narrowly as producing actions that are valid and executable in the environment.

**Variants.** Most papers study GUI and computer-control settings, where the model produces a single next operation from the current GUI state, task instruction, and sometimes prior actions. Other variants ask for the next navigation control action from the current location given a goal or route, or for autoregressive sequences of low-level robotic actions alongside future observations. A smaller line of work names executable action generation, judged by whether actions can actually be executed, and candidate action generation, where a policy samples possible next inquiry actions from a masked action space.

**Space of elicitation and scores.** No measurement instrument is linked to it. In practice, papers usually elicit it by asking for the next action from the current state, instruction, goal, or history, and one paper scores a variant by the proportion of generated actions that are executable at each timestep, referring to this as executability.

**What it is taken as evidence of.** Construct links are sparse. The only construct linked to it is Reasoning, and the recorded relationship is causal in that direction: one paper claims a causal relationship from Reasoning to Action generation, describing reasoning and planning before execution. No other construct is linked in the papers, and beyond construct links, one paper claims a causal relationship from Action generation to Privacy leakage.

## Sources

**[Grounding Multimodal Large Language Model in GUI World](https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf)**
> Producing a structured output that specifies an action to be taken (e.g., 'click', 'type text') and its associated parameters, such as position or value.

**[HiAgent: Hierarchical Working Memory Management for Solving Long-Horizon Agent Tasks with Large Language Model](https://aclanthology.org/2025.acl-long.1575.pdf) (as "Executable action generation")**
> Producing actions that are valid and can be successfully executed within the environment, as opposed to invalid or nonsensical actions.

**[DDO: Dual-Decision Optimization for LLM-Based Medical Consultation via Multi-Agent Collaboration](https://aclanthology.org/2025.emnlp-main.1340.pdf) (as "Candidate action generation")**
> The model or policy samples a set of possible next inquiry actions from a masked action space.

## Relationships

### → Action generation
- **Reasoning** (constructs) — *causes*
  > For vision-based agents, completing a complex GUI task typically involves several steps, each requiring the model to: (1) Perceive and understand... (2) Reason and plan... (3) Execute: perform the desired action on the target GUI element.
  - [Grounding Multimodal Large Language Model in GUI World](https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf)
