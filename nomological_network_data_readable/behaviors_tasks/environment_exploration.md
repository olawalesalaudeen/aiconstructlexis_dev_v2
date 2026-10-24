# Environment exploration
**Type:** Behavior  
**Referenced in:** 10 papers  
**Also known as:** Information collection, Active information gathering, Active exploration, Exploration  

## State of the Field

**Space of definitions.** Across definitions, the prevailing usage treats this behavior as observable information-seeking interaction with an environment: agents verify conditions, locate objects or landmarks, gather visual inputs, inspect a codebase, or reveal hidden states. Papers make it concrete as moving, looking around, navigating to new locations, interacting with objects, or executing commands, and a smaller line also frames it as visiting new states or regions. What counts as success is usually getting the information needed for a downstream task, such as answering a question, completing a task when object locations are underspecified, or understanding the current system state.

**Variants.** Papers study several named variants: information collection, for fine-grained viewpoint adjustment and higher-quality visual observations; active information gathering, under partial observations for disambiguation; active exploration, to obtain visual inputs for question answering; and broader exploration, to scan for target objects or find unspecified objects in a house. The settings range from dynamic city spaces and other physical environments to codebase inspection through commands, and one line emphasizes novelty by describing exploration as visiting new states or regions. Papers also relate it to 2 other behavioral indicators, Embodied planning and Embodied question answering.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers operationalize it through observable action patterns such as "Move and Look Around," fine-tuning an observation view, navigating to new locations, interacting with objects to reveal hidden states, or executing commands to inspect a codebase.

**What it is taken as evidence of.** Among constructs, papers link it to 1 construct, Long-horizon planning. In that link, a paper claims a causal relationship from Long-horizon planning to environment exploration, via plans that include collection sub-tasks that gather requisite information. Papers do not link it to other constructs.

## Sources

**[Exploratory Retrieval-Augmented Planning For Continual Embodied Instruction Following](https://proceedings.neurips.cc/paper_files/paper/2024/file/7bacd0ebd061d4694583ae0eb69ad15f-Paper-Conference.pdf)**
> The observable action of an agent interacting with its environment to gather information, verify conditions, and update its internal representation of the world state.

**[CityEQA: A Hierarchical LLM Agent on Embodied Question Answering Benchmark in City Space](https://aclanthology.org/2025.emnlp-main.630.pdf) (as "Information collection")**
> The observable behavior of gathering specific details from visual observations, often involving fine-grained adjustments to viewpoint or focus to improve input quality.

**[ProcWorld: Benchmarking Large Model Planning in Reachability-Constrained Environments](https://aclanthology.org/2025.emnlp-main.635.pdf) (as "Active information gathering")**
> The behavior of strategically exploring the environment to reduce uncertainty, such as navigating to new locations or interacting with objects to reveal hidden states.

**[CityEQA: A Hierarchical LLM Agent on Embodied Question Answering Benchmark in City Space](https://aclanthology.org/2025.emnlp-main.630.pdf) (as "Active exploration")**
> Moving through an environment to gather visual information needed to answer a question.

**[CityEQA: A Hierarchical LLM Agent on Embodied Question Answering Benchmark in City Space](https://aclanthology.org/2025.emnlp-main.630.pdf) (as "Exploration")**
> The observable behavior of systematically scanning the environment to locate target objects, using strategies like moving and looking around from multiple viewpoints.

## Relationships

### Associated with
- **Embodied planning** (behaviors tasks)
  > we employ an exploration-integrated task planning scheme, in which the information-based exploration is incorporated into the LLM-based planning process. (Introduction)
  - [Exploratory Retrieval-Augmented Planning For Continual Embodied Instruction Following](https://proceedings.neurips.cc/paper_files/paper/2024/file/7bacd0ebd061d4694583ae0eb69ad15f-Paper-Conference.pdf)
- **Embodied question answering** (behaviors tasks)
  > Embodied Question Answering (EQA) ... must actively explore its environment to answer questions posed in natural language. (Section 1)
  - [CityEQA: A Hierarchical LLM Agent on Embodied Question Answering Benchmark in City Space](https://aclanthology.org/2025.emnlp-main.630.pdf)
- **Long-horizon planning** (constructs)
  > Based on these requirements, a plan is created consisting of three distinct types of sub-tasks: (1) Collection sub-tasks gather the requisite information... (Section 3.2)
  - [CityEQA: A Hierarchical LLM Agent on Embodied Question Answering Benchmark in City Space](https://aclanthology.org/2025.emnlp-main.630.pdf)
