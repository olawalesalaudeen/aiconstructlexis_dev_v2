# Long-horizon planning
**Type:** Construct  
**Referenced in:** 36 papers  
**Also known as:** Long-term planning, High-level planning, Long-term reasoning, Long-horizon reasoning  

## State of the Field

**Definition agreement:** Consensus. Most papers define long-horizon planning as the ability to formulate, maintain, and execute a coherent multi-step sequence of actions or strategy over an extended horizon in order to achieve a complex or distant goal. A few papers emphasize particular aspects such as decomposition into subtasks, adapting to constraints or partial observability, or sustaining reasoning and context across coding or conversational steps, but these are refinements of the same core phenomenon rather than different constructs.

**Space of definitions.** Across papers, the prevailing usage treats long-horizon planning as the ability to produce, formulate, or execute extended sequences of interdependent actions to reach a complex, distant, or multi-stage goal. Many definitions add constraints such as concurrent objectives, partial observability, dynamic environments, or the need to maintain coherence across many steps; one benchmark paper describes a relevant setting as combining multiple interactions, concurrent objectives, and error handling in one environment (SmartPlay : A Benchmark for LLMs as Intelligent Agents). A smaller line of work shifts the framing toward long-term or long-horizon reasoning, emphasizing coherent reasoning over multiple interaction rounds or extended action sequences, while some definitions emphasize high-level strategy adaptation over time rather than action sequencing alone.

**Space of facets.** Papers use several neighboring labels for overlapping formulations, including long-term planning, high-level planning, long-term reasoning, and long-horizon reasoning. The most recurrent internal structure is decomposition: definitions refer to breaking complex objectives into coordinated subtasks, sequential grounded sub-goals, or short-horizon problems, and one paper explicitly describes a bi-level approach that decomposes long-horizon planning into several short-horizon problems. It is also positioned alongside hierarchical and more general planning notions, while scope varies across embodied, multi-agent, desktop, coding, and multi-turn dialogue settings.

**Space of measurement.** Operationally, papers link it to 3 measurement instruments and 7 behavioral indicators. The named instruments are AgentBench, MineDojo, and TravelPlanner; MineDojo is described as a benchmark, and TravelPlanner as testing long-horizon planning under user-defined constraints. The behavioral side most visibly includes Action selection and Embodied planning, alongside other indicators, and the linked evidence focuses on multi-step behavior in embodied or constrained settings, though the AgentBench link is phrased through long-term reasoning, decision-making, and instruction following rather than planning alone.

**Links.** Beyond measurement, papers link it to 3 constructs and 7 behavioral indicators. Some papers describe it as related to hierarchical planning and planning, and another related link connects it to embodied planning. Causal claims run in both directions, including outgoing links to task decomposition and long-term memory, alongside other behaviors, and incoming causal links from other behaviors or tasks; no correlational links are reported.

## Sources

**[Learning Grounded Action Abstractions from Language](https://proceedings.iclr.cc/paper_files/paper/2024/file/99dec5837aae1a7459960c6121b9e3b8-Paper-Conference.pdf)**
> Producing action sequences that achieve a goal over many steps or with multiple concurrent objectives.

**[Large Language Models Play StarCraft II:Benchmarks and A Chain of Summarization Approach](https://proceedings.neurips.cc/paper_files/paper/2024/file/f0ebc318e2df08360b2df559e81602e5-Paper-Conference.pdf) (as "Long-term planning")**
> The capacity to formulate and adapt high-level strategies that unfold over an extended period to achieve a final goal.

**[SwarmAgentic: Towards Fully Automated Agentic System Generation via Swarm Intelligence](https://aclanthology.org/2025.emnlp-main.93.pdf) (as "High-level planning")**
> The capacity to generate and execute long-horizon, goal-directed plans under constraints, requiring decomposition of complex objectives into coordinated subtasks.

**[AgentBench: Evaluating LLMs as Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e9df36b21ff4ee211a8b71ee8b7e9f57-Paper-Conference.pdf) (as "Long-term reasoning")**
> The latent ability to maintain coherent and effective reasoning over multiple interaction rounds to achieve a distant goal.

**[Structured Preference Optimization for Vision-Language Long-Horizon Task Planning](https://aclanthology.org/2025.emnlp-main.884.pdf) (as "Long-horizon reasoning")**
> The ability of a model to generate and maintain a coherent, multi-step plan to achieve a complex goal over an extended sequence of actions.

## Relationships

### Long-horizon planning →
- **TravelPlanner** (measurements) — *measured_by*
  > TravelPlanner (TP) (Xie et al., 2024), which tests long-horizon planning under user-defined constraints (Section 5.1)
  - [SwarmAgentic: Towards Fully Automated Agentic System Generation via Swarm Intelligence](https://aclanthology.org/2025.emnlp-main.93.pdf)

### → Long-horizon planning
- **Task decomposition** (behaviors tasks) — *causes*
  > allows agents to: (1) plan subtasks required to complete the task ... This framework enhances agents' ability to complete complex, long-horizon tasks
  - [Long-Horizon Planning for Multi-Agent Robots in Partially Observable Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/7d6e85e88495104442af94c98e899659-Paper-Conference.pdf)
- **Self-correction** (behaviors tasks) — *causes*
  > “self-refinement ... iteratively improves a previously generated plan” and “bidirectional dependency ... thus improving its ability to plan ahead”
  - [Closed-Loop Long-Horizon Robotic Planning via Equilibrium Sequence Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25cd/li25cd.pdf)

### Associated with
- **Hierarchical planning** (constructs)
  > This bi-level planning approach decomposes long-horizon planning problems into several short-horizon problems. (Section 2)
  - [Learning Grounded Action Abstractions from Language](https://proceedings.iclr.cc/paper_files/paper/2024/file/99dec5837aae1a7459960c6121b9e3b8-Paper-Conference.pdf)
- **Embodied planning** (behaviors tasks)
  > embodied scenarios pose greater challenges, requiring long-term planning in intricate contexts with high-dimensional state spaces and tangible interactions.
  - [Discriminator-Guided Embodied Planning for LLM Agent](https://proceedings.iclr.cc/paper_files/paper/2025/file/e6f2b968c4ee8ba260cd7077e39590dd-Paper-Conference.pdf)
- **Sudoku solving** (behaviors tasks)
  > Sudoku is a task which doesn't require the same degree of long-term planning as some harder benchmarks
  - [Causal language modeling can elicit search and reasoning capabilities on logic puzzles](https://proceedings.neurips.cc/paper_files/paper/2024/file/67b31ca159553d5593e62d7b998d63ea-Paper-Conference.pdf)
- **Theorem proving** (behaviors tasks)
  > "the whole-proof generation model is trained to perform long-term planning for theorem proving"
  - [DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Reinforcement Learning and Monte-Carlo Tree Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/b3b55c366d641c07180c40e4f978f311-Paper-Conference.pdf)
- **Long-term memory** (constructs)
  > “long-horizontal reasoning due to the partial observability of complex GCC tasks, which also leads to the demand for long-term memory to maintain past useful experiences”
  - [Cradle: Empowering Foundation Agents towards General Computer Control](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25h/tan25h.pdf)
- **Minecraft** (measurements)
  > Compared with other embodied benchmarks, Minecraft is an open-ended platform suitable for exploring building agents with long-horizon planning capabilities (Fan et al., 2022).
  - [LARM: Large Auto-Regressive Model for Long-Horizon Embodied Intelligence](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25dj/li25dj.pdf)
- **Navigation** (behaviors tasks)
  > Based on these requirements, a plan is created consisting of three distinct types of sub-tasks: ... (3) Navigation sub-tasks enable efficient access to specific areas, thereby narrowing the exploration scope. (Section 3.2)
  - [CityEQA: A Hierarchical LLM Agent on Embodied Question Answering Benchmark in City Space](https://aclanthology.org/2025.emnlp-main.630.pdf)
- **Environment exploration** (behaviors tasks)
  > Based on these requirements, a plan is created consisting of three distinct types of sub-tasks: (1) Collection sub-tasks gather the requisite information... (Section 3.2)
  - [CityEQA: A Hierarchical LLM Agent on Embodied Question Answering Benchmark in City Space](https://aclanthology.org/2025.emnlp-main.630.pdf)
