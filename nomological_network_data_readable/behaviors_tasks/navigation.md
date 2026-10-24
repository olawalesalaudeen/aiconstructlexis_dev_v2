# Navigation
**Type:** Behavior  
**Referenced in:** 16 papers  
**Also known as:** Grid world navigation, Low-level navigation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats navigation as moving through an environment to reach or locate a specified target. Most definitions center on reaching specific locations, landmarks, or receptacles, or locating targets such as trees, cows, stones, and underground resources. Some authors also frame it more broadly as room-to-room or object-retrieval behavior, or as understanding spatial layouts in order to plan or describe routes to places or objects.

**Variants.** Variants are studied in several settings and under several names. Papers refer to grid world navigation, where movement is limited to up, down, left, and right toward a target, and to low-level navigation, where agents use atomic movement, rotation, and camera-control actions to reach a location or object. Other work studies city-space navigation through navigation points, maps, and spatial relations, and embodied household or game settings with commands such as navigating to receptacles or landmarks.

**Space of elicitation and scores.** Navigation is measured by 3 instruments. BabyAI is the most frequently linked instrument, followed by MineDojo and TextWorld: papers describe BabyAI as a grid world instruction task with several navigation task types, MineDojo as a benchmark whose behaviors include navigation alongside harvest, combat, and craft, and TextWorld as a text-only game in which agents explore mazes and interact with everyday objects through natural language.

**What it is taken as evidence of.** Across papers, construct links for navigation are sparse. The only linked construct is Long-horizon planning, and one paper claims a causal relationship from Long-horizon planning to Navigation, describing plans as including navigation sub-tasks that enable access to specific areas and narrow the exploration scope. No other construct link is reported.

## Sources

**[RL-GPT: Integrating Reinforcement Learning and Code-as-policy](https://proceedings.neurips.cc/paper_files/paper/2024/file/31f119089f702e48ecfd138c1bc82c4a-Paper-Conference.pdf)**
> Moving through the Minecraft environment to locate targets such as trees, cows, stones, or underground resources.

**[LMAct: A Benchmark for In-Context Imitation Learning with Long Multimodal Demonstrations](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ruoss25a/ruoss25a.pdf) (as "Grid world navigation")**
> Moving a player through a grid world with up, down, left, and right actions to reach a target location.

**[EmbodiedBench: Comprehensive Benchmarking Multi-modal Large Language Models for Vision-Driven Embodied Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25f/yang25f.pdf) (as "Low-level navigation")**
> Executing precise movement and orientation adjustments in a simulated environment to reach a target location or object, using atomic actions like moving forward or rotating.

## Relationships

### Navigation →
- **BabyAI** (measurements) — *measured_by*
  > BabyAI [60]: BabyAI is a grid world task where an agent navigates and interacts with objects to complete an instruction.
  - [Grounding Multimodal Large Language Models in Actions](https://proceedings.neurips.cc/paper_files/paper/2024/file/2406694fd7bc7e7bf257446a14f9ea63-Paper-Conference.pdf)
- **TextWorld** (measurements) — *measured_by*
  > An entirely text-based game with no visual component, where the agent has to explore mazes and interact with everyday objects through natural language
  - [BALROG: Benchmarking Agentic LLM and VLM Reasoning On Games](https://proceedings.iclr.cc/paper_files/paper/2025/file/f0b1515be276f6ba82b4f2b25e50bef0-Paper-Conference.pdf)
- **MineDojo** (measurements) — *measured_by*
  > The behaviors that can be conducted in MineDojo primarily include navigation, harvest, combat, and craft.
  - [LARM: Large Auto-Regressive Model for Long-Horizon Embodied Intelligence](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25dj/li25dj.pdf)

### Associated with
- **Long-horizon planning** (constructs)
  > Based on these requirements, a plan is created consisting of three distinct types of sub-tasks: ... (3) Navigation sub-tasks enable efficient access to specific areas, thereby narrowing the exploration scope. (Section 3.2)
  - [CityEQA: A Hierarchical LLM Agent on Embodied Question Answering Benchmark in City Space](https://aclanthology.org/2025.emnlp-main.630.pdf)
