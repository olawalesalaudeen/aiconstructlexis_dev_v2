# Collaboration
**Type:** Behavior  
**Referenced in:** 18 papers  
**Also known as:** Cooperation, Collaborative discussion, Iterative discussion, Multi-turn discussion, Message exchange, Collaborative problem solving, Spontaneous cooperation, Cooperative perception, Collaborative task completion, Multi-agent coordination, Cooperative decision-making, Collective decision-making, Multi-agent cooperation, Multi-turn collaborative task completion, Cooperation efficiency, Collaborative decision-making  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats collaboration as observable multi-agent coordination, usually through multi-turn interaction, to reach a shared answer, plan, or solution. Common formulations describe agents exchanging messages, opinions, arguments, feedback, or justifications and updating their outputs toward consensus, with one paper calling it an "iterative discussion process aimed at reaching a consensus." A recurring alternative operationalizes it as choosing cooperative actions in games, such as selecting Cooperate or remaining Silent when that maximizes mutual benefit or system reward, or benefiting others at a cost to oneself. Some papers further count success as joint task completion or coordination with minimal redundancy and wasted effort.

**Variants.** The most recurrent variants are discussion-centered forms, including collaborative discussion, multi-turn discussion, iterative discussion, collaborative problem solving, and collaborative decision-making, sometimes in medical decision-making, social-science coding, or actor-critic exchanges over several rounds. Smaller lines of work study message exchange between prover and verifier agents before a final decision, collective decision-making in which agent outputs are aggregated into a final prediction, and embodied settings such as cooperative perception for manipulation. Other variants frame collaboration as spontaneous cooperation without explicit communication, collaborative task completion that depends on communication and resource exchange, or cooperative decision-making in economic games. In a planning setting, one paper claims a causal relationship from Collaboration to Plan generation, describing multi-turn discussions that collaboratively create and refine meta-plans.

**Space of elicitation and scores.** Papers link collaboration to only one measurement instrument, AgentBench, which is described as comprising multiple tasks that require different LLMs within a system to cooperate and discuss. No other instrument is linked to it in these papers.

**What it is taken as evidence of.** Papers do not mainly use collaboration as evidence of several constructs. Only one construct is linked, Reasoning, and that link is framed in the opposite direction: one paper claims a causal relationship from Reasoning to Collaboration, reporting that reasoning models reduce cooperation and norm enforcement rather than treating collaboration as a measure of reasoning. Because no other construct link appears in these papers, they do not present competing construct framings here.

## Sources

**[GTBench: Uncovering the Strategic Reasoning Capabilities of LLMs via Game-Theoretic Evaluations](https://proceedings.neurips.cc/paper_files/paper/2024/file/3191170938b6102e5c203b036b7c16dd-Paper-Conference.pdf) (as "Cooperation")**
> Choosing actions that maximize mutual benefit or system reward, such remaining silent in Prisoner's Dilemma.

**[MDAgents: An Adaptive Collaboration of LLMs for Medical Decision-Making](https://proceedings.neurips.cc/paper_files/paper/2024/file/90d1fc07f46e31387978b88e7e057a31-Paper-Conference.pdf) (as "Collaborative discussion")**
> Multi-agent exchange of opinions and arguments to reach a shared medical answer.

**[CaPo: Cooperative Plan Optimization for Efficient Embodied Multi-Agent Cooperation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b07091c16719ad3990e3d1ccee6641f1-Paper-Conference.pdf) (as "Multi-turn discussion")**
> An interactive process where multiple agents exchange messages over several rounds to share information, provide feedback, and reach a consensus on a plan.

**[Neural Interactive Proofs](https://proceedings.iclr.cc/paper_files/paper/2025/file/d55b8d2f6f6e6d130cbda350ff2a123c-Paper-Conference.pdf) (as "Message exchange")**
> Sending and receiving messages across rounds between prover and verifier agents before a final decision is made.

**[ACC-Collab: An Actor-Critic Approach to Multi-Agent LLM Collaboration](https://proceedings.iclr.cc/paper_files/paper/2025/file/e187897ed7780a579a0d76fd4a35d107-Paper-Conference.pdf) (as "Collaborative problem solving")**
> The observable process of a team of two or more agents engaging in interaction to jointly solve a given problem.

**[ACC-Collab: An Actor-Critic Approach to Multi-Agent LLM Collaboration](https://proceedings.iclr.cc/paper_files/paper/2025/file/e187897ed7780a579a0d76fd4a35d107-Paper-Conference.pdf) (as "Iterative discussion")**
> The observable, multi-turn conversational exchange between agents as they work on a task.

**[EMOS: Embodiment-aware Heterogeneous Multi-robot Operating System with LLM Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/8ec46cecdae5407662899c5f6698cd8b-Paper-Conference.pdf) (as "Cooperative perception")**
> The observable task where multiple agents collaborate to perceive the environment, such as one agent locating an object for another agent to manipulate.

**[Competing Large Language Models in Multi-Agent Gaming Environments](https://proceedings.iclr.cc/paper_files/paper/2025/file/a46adbe2f0ca0e16ef8857e188991ad7-Paper-Conference.pdf) (as "Spontaneous cooperation")**
> Selecting cooperative actions without explicit communication that increase collective welfare.

**[Collab-Overcooked: Benchmarking and Evaluating Large Language Models as Collaborative Agents](https://aclanthology.org/2025.emnlp-main.249.pdf) (as "Collaborative task completion")**
> The observable outcome where two or more agents successfully work together to achieve a shared goal within the given constraints.

**[Spontaneous Giving and Calculated Greed in Language Models](https://aclanthology.org/2025.emnlp-main.267.pdf) (as "Cooperative decision-making")**
> The observable act of choosing to allocate resources or act in ways that benefit others at a cost to oneself in economic games.

**[Understanding the Information Propagation Effects of Communication Topologies in LLM-based Multi-Agent Systems](https://aclanthology.org/2025.emnlp-main.623.pdf) (as "Collective decision-making")**
> The observable process by which multiple LLM agents interact through a communication topology to produce a final joint output or answer to a query.

**[Compound AI Systems Optimization: A Survey of Methods, Challenges, and Future Directions](https://aclanthology.org/2025.emnlp-main.1463.pdf) (as "Multi-agent cooperation")**
> The observable interaction where multiple distinct AI agents work together, communicate, and coordinate actions to solve a problem.

**[CaPo: Cooperative Plan Optimization for Efficient Embodied Multi-Agent Cooperation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b07091c16719ad3990e3d1ccee6641f1-Paper-Conference.pdf) (as "Cooperation efficiency")**
> The degree to which multiple agents coordinate their actions to complete a joint task with minimal redundancy and wasted effort.

**[AgentVerse: Facilitating Multi-Agent Collaboration and Exploring Emergent Behaviors](https://proceedings.iclr.cc/paper_files/paper/2024/file/578e65cdee35d00c708d4c64bce32971-Paper-Conference.pdf) (as "Collaborative decision-making")**
> An observable process where multiple agents engage in discussion to jointly devise a strategy or plan of action.

## Relationships

### Collaboration →
- **AgentBench** (measurements) — *measured_by*
  > AgentBench (Liu et al., 2023) and AgentGym (Xi et al., 2024) comprise multiple tasks requiring different LLMs within the system to cooperate and discuss
  - [Compound AI Systems Optimization: A Survey of Methods, Challenges, and Future Directions](https://aclanthology.org/2025.emnlp-main.1463.pdf)

### → Collaboration
- **Reasoning** (constructs) — *causes*
  > We find that reasoning models consistently reduce cooperation and norm enforcement, favoring individual rationality. (Abstract)
  - [Spontaneous Giving and Calculated Greed in Language Models](https://aclanthology.org/2025.emnlp-main.267.pdf)

### Associated with
- **Plan generation** (behaviors tasks)
  > CaPo enables agents to collaboratively create and refine long-term, strategic, and coherent meta-plans through multi-turn discussions.
  - [CaPo: Cooperative Plan Optimization for Efficient Embodied Multi-Agent Cooperation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b07091c16719ad3990e3d1ccee6641f1-Paper-Conference.pdf)
