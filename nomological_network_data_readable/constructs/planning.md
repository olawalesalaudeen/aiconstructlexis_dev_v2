# Planning
**Type:** Construct  
**Referenced in:** 207 papers  
**Also known as:** Planning ability, Planning capability, Task prioritization, Planning capabilities, Self-planning, Action deliberation, Reasoning path selection, Basic task solving  

## State of the Field

**Definition agreement:** Consensus. Most papers define planning as the model or agent's ability to decompose a goal into an ordered, coherent sequence of steps or actions to achieve it, often in multi-step settings and sometimes with constraints, adaptation, or execution included. A few papers emphasize special cases such as natural language outlines, itinerary generation, or graph-based ordering, but these mostly read as domain-specific instantiations or added details of the same core goal-directed sequencing ability rather than a different construct.

**Space of definitions.** Across papers, the prevailing usage treats planning as a latent or cognitive ability of a model or agent to determine, decompose, or adapt a sequence of steps, subgoals, or actions toward a goal, often in interactive or partially observable settings and sometimes under constraints; one definition describes it as determining the sequence of actions needed to achieve a goal. Within that broad framing, some authors stress high-level natural-language plans before implementation or response generation, while others stress executable action sequences, feedback-driven adjustment, goal decomposition, constraint consideration, foresight, or feasible multi-constraint plans. A smaller line of work uses the same label for narrower behaviors, such as planning the structure of an answer before detailed generation, sequencing table operations, ordering subtasks asynchronously, evaluating candidate actions before choosing one, selecting intermediate reasoning paths, ordering graph information, or basic embodied task solving.

**Space of facets.** Within papers, planning is commonly broken into sub-skills such as decomposition into smaller tasks, constraint handling, foresight about outcomes, and dynamic adjustment from environmental feedback or prior actions. Papers also use nearby labels such as planning ability, planning capability, and self-planning for the same general skill, while task prioritization and action deliberation are treated as narrower facets. The same label is also used both for outlining answer content before generation and for selecting executable actions in interactive environments, so papers vary in whether the object being planned is content, operations, or actions.

**Space of measurement.** Planning is linked to 16 measurement instruments and 17 behavioral indicators. Among instruments, Blocksworld and TravelPlanner recur most, and the broader instrument space is mostly benchmarks or environment evaluations, with some work also using human evaluation of model-generated plans against human-created plans; among behavioral indicators, Tool use, Task decomposition, and Code generation recur most. These operationalizations line up most directly with the dominant definition of planning as multi-step, goal-directed sequencing, because papers describe planning evaluations as symbolic planning, complex multi-constraint planning, multi-step decision making, offline task planning, or plan comparison.

**Links.** The most recurrent link is to Reasoning: several papers claim a causal relationship from reasoning to planning, one paper claims a causal relationship from planning to reasoning, and several others report the two as related. Other repeated links involve Tool use, Task decomposition, Robustness, and World modeling: papers claim causal relationships from planning to the first three, from World modeling to planning, and in the case of Tool use, papers also report relatedness and a causal relationship from Tool use to planning. Additional papers use causal or related language for other abilities and behaviors, and no correlational links are reported.

## Sources

**[A Real-World WebAgent with Planning, Long Context Understanding, and Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/e91bf7dfba0477554994c6d64833e9d8-Paper-Conference.pdf)**
> The ability of a model to formulate a structured plan or outline before generating a detailed response.

**[LLM-Assisted Code Cleaning For Training Accurate Code Generators](https://proceedings.iclr.cc/paper_files/paper/2024/file/41137f3997ade899893ccd3973592d4b-Paper-Conference.pdf) (as "Planning capability")**
> The latent ability to generate correct and useful high-level natural language plans that outline the steps needed to solve a programming problem before implementation.

**[Chain-of-Table: Evolving Tables in the Reasoning Chain for Table Understanding](https://proceedings.iclr.cc/paper_files/paper/2024/file/f53fd88a4340063ecd258c0ae9948b40-Paper-Conference.pdf) (as "Planning ability")**
> The ability to choose and sequence operations adaptively based on the current state of the table and the question.

**[Robotouille: An Asynchronous Planning Benchmark for LLM Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/d033407a1a4b7a75cd5f9e4575ad9fb5-Paper-Conference.pdf) (as "Task prioritization")**
> The ability to correctly order subtasks, particularly in asynchronous settings, to maximize efficiency and increase the likelihood of success.

**[Tool-Planner: Task Planning with Clusters across Multiple Tools](https://proceedings.iclr.cc/paper_files/paper/2025/file/7f605d59a0dbde101518b552cb616ddf-Paper-Conference.pdf) (as "Planning capabilities")**
> The latent ability to generate and adjust multi-step action sequences for accomplishing goals, especially when external tools are involved.

**[Generator-Assistant Stepwise Rollback Framework for Large Language Model Agent](https://aclanthology.org/2025.emnlp-main.892.pdf) (as "Self-planning")**
> The inherent capability of an LLM to create and follow a plan to solve a problem without explicit, step-by-step instructions.

**[SAND: Boosting LLM Agents with Self-Taught Action Deliberation](https://aclanthology.org/2025.emnlp-main.152.pdf) (as "Action deliberation")**
> The latent ability of an LLM agent to generate and evaluate multiple candidate actions before selecting one, based on reasoning about their likely outcomes.

**[How Is LLM Reasoning Distracted by Irrelevant Context? An Analysis Using a Controlled Benchmark](https://aclanthology.org/2025.emnlp-main.674.pdf) (as "Reasoning path selection")**
> Choosing which dependencies and intermediate steps to use when solving a multi-step problem, including avoiding irrelevant or distracting information.

**[EmbodiedBench: Comprehensive Benchmarking Multi-modal Large Language Models for Vision-Driven Embodied Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25f/yang25f.pdf) (as "Basic task solving")**
> The latent ability to carry out straightforward embodied tasks by producing appropriate action sequences for low to medium difficulty goals.

## Relationships

### Planning →
- **Blocksworld** (measurements) — *measured_by*
  > Finally, we validate these results on a real-world task planning benchmark, Blocksworld [22], which directly corresponds to the path-finding problem (see Appendix F). (Introduction).
  - [ALPINE: Unveiling The Planning Capability of Autoregressive Learning in Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d848cb2c84f0bba7f1f73cf232734c40-Paper-Conference.pdf)
- **TravelPlanner** (measurements) — *measured_by*
  > Planning in complex and realistic environments is also a crucial skill for building autonomous agents. Thus, we also select TravelPlanner (Xie et al., 2024), a benchmark designed to evaluate language agents in real-world complex planning with multiple constraints. (Section 4.3)
  - [EvoAgent: Towards Automatic Multi-Agent Generation via Evolutionary Algorithms](https://aclanthology.org/2025.naacl-long.315.pdf)
- **Tool use** (behaviors tasks) — *causes*
  > After the planning step, our agent takes action to construct adaptive VL prompts for the tool models (i.e., VLM/LLM). (Section 1)
  - [Re-Aligning Language to Visual Objects with an Agentic Workflow](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d9057d84a9fc37523bf826232ea6820-Paper-Conference.pdf)
- **Star Graph Task** (measurements) — *measured_by*
  > Specifically, Bachmann & Nagarajan (2024) introduces a simple path finding task that requires basic planning... Figure 5: Star Graph Task: Illustration and Performance Comparison. (Section 4)
  - [The Factorization Curse: Which Tokens You Predict Underlie the Reversal Curse and More](https://proceedings.neurips.cc/paper_files/paper/2024/file/cbcce87f745072c819204529be843d16-Paper-Conference.pdf)
- **Logistics** (measurements) — *measured_by*
  > planning [Logistics, 53] (Introduction).
  - [Many-Shot In-Context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/8cb564df771e9eacbfe9d72bd46a24a9-Paper-Conference.pdf)
- **Game of 24** (measurements) — *measured_by*
  > To illustrate these limitations, we conducted experiments using the Game of 24, a simple yet illustrative planning problem with a depth of 3 and a maximum breadth of 48. (Section 3.2)
  - [LLMs Can Plan Only If We Tell Them](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1e67cde895c3c91edb43569ad0df260-Paper-Conference.pdf)
- **Task decomposition** (behaviors tasks) — *causes*
  > Using the strategy stored in Planning Memory, we break down complex chemistry problems into hierarchical sub-tasks.
  - [ChemAgent: Self-updating Memories in Large Language Models Improves Chemical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/fa7f64b45970e6a7f8824781e7e01501-Paper-Conference.pdf)
- **Code generation** (behaviors tasks) — *causes*
  > The AEP examples contain planning steps, that outline a possible decomposition of the task (lines 7, 14, 17) to encourage step-by-step thinking and to improve generation quality. (Section 2.3.1)
  - [ASPERA: A Simulated Environment to Evaluate Planning for Complex Action Execution](https://aclanthology.org/2025.acl-long.1234.pdf)
- **T-Eval** (measurements) — *measured_by*
  > We utilize T-Eval (Chen et al., 2023c), which assesses six core competencies: planning, reasoning, retrieval, understanding, instruction following, and reviewing. (Sec. 4.1)
  - [Can Compressed LLMs Truly Act? An Empirical Evaluation of Agentic Capabilities in LLM Compression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25k/dong25k.pdf)
- **Robustness** (constructs) — *causes*
  > Additional experiments on other benchmarks like RM-Bench, JudgeBench, and FollowBenchEval further highlight the utility of both planning and reasoning for building robust LLM-as-a-Judge reasoning models. (Abstract)
  - [Learning to Plan & Reason for Evaluation with Thinking-LLM-as-a-Judge](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saha25b/saha25b.pdf)
- **Mind2Web** (measurements) — *measured_by*
  > SoTA performance on Mind2Web, an ofﬂine task planning evaluation (Section 1).
  - [A Real-World WebAgent with Planning, Long Context Understanding, and Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/e91bf7dfba0477554994c6d64833e9d8-Paper-Conference.pdf)
- **Negotiation** (behaviors tasks) — *causes*
  > Planning. This step was important to reach a ﬁnal successful deal (row 4); without it, agents’ suggestions may saturate and no longer increase the collective score (Figure 3b). (Section 4.2)
  - [Cooperation, Competition, and Maliciousness: LLM-Stakeholders Interactive Negotiation](https://proceedings.neurips.cc/paper_files/paper/2024/file/984dd3db213db2d1454a163b65b84d08-Paper-Datasets_and_Benchmarks_Track.pdf)
- **GTA** (measurements) — *measured_by*
  > Fine-grained metrics are designed for tool use, unveiling tool-augmented LLMs’ reasoning and planning capabilities in real-world scenarios. (Section 1)
  - [GTA: A Benchmark for General Tool Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a75ee6d4b2eb0b777f549a32a5a5c28-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Long-horizon task completion** (behaviors tasks) — *causes*
  > Relevant studies indicate that the human brain is essential for planning and reflection, while the cerebellum controls low-level actions, both crucial for complex tasks [40, 41]. (Section 2.2)
  - [Optimus-1: Hybrid Multimodal Memory Empowered Agents Excel in Long-Horizon Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/5949a8750a110ce1f0631b1776c500a2-Paper-Conference.pdf)
- **Self-improvement** (constructs) — *causes*
  > These findings suggest that the model’s inherent reasoning and planning capabilities developed during pre-training are crucial for general self-improvement. (Section 4.4)
  - [Mind the Gap: Examining the Self-Improvement Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/63943ee9fe347f3d95892cf87d9a42e6-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs) — *causes*
  > their planning ability remains a critical bottleneck in tackling complex multi-step reasoning tasks. (ABSTRACT)
  - [CodePlan: Unlocking Reasoning Potential in Large Language Models by Scaling Code-form Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/c362b360765ed90ae4bd9c6764837e0e-Paper-Conference.pdf)
- **WildBench** (measurements) — *measured_by*
  > This dataset is particularly suited for conversion into an evaluation benchmark because it contains a diverse array of tasks that users expect LLMs to perform, such as writing assistance, coding, mathematics, data analysis, role playing, and planning. (Section 2.1)
  - [WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf)
- **TextWorld** (measurements) — *measured_by*
  > Problem Type partial observability, long-term planning and memory, and common sense (Table 1).
  - [Intelligent Go-Explore: Standing on the Shoulders of Giant Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/369a30aac2765950865efd318cef7f76-Paper-Conference.pdf)
- **AI2-THOR** (measurements) — *measured_by*
  > We evaluate our framework using two distinct environments: a dynamic 8 × 8 GridWorld and a static 3D-rendered kitchen (AI2-THOR)... Our experiments focus on three key aspects: the effectiveness of text-based action representations, causal inference, and planning.
  - [Language Agents Meet Causality -- Bridging LLMs and Causal World Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5c5bc3553815adb4d1a8a5b8701e41a9-Paper-Conference.pdf)
- **Gridworld** (measurements) — *measured_by*
  > Table 4: Planning results for the causal world model and RAP (Hao et al., 2023) across different environments and step lengths.
  - [Language Agents Meet Causality -- Bridging LLMs and Causal World Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5c5bc3553815adb4d1a8a5b8701e41a9-Paper-Conference.pdf)
- **AgentBench** (measurements) — *measured_by*
  > Concurrently, comprehensive benchmarks like AgentBench (Liu et al., 2023a), ToolBench (Qin et al., 2024), and AgentBoard (Ma et al., 2024) have been established to rigorously assess agent performance in reasoning, planning, and multi-turn interactions.
  - [xLAM: A Family of Large Action Models to Empower AI Agent Systems](https://aclanthology.org/2025.naacl-long.578.pdf)
- **Reasoning** (constructs) — *causes*
  > This paper presents how language models can be trained for internal and external planning to improve reasoning in sequential decision-making, using board games as an experimental domain. (Section 1)
  - [Mastering Board Games by External and Internal Planning with Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/schultz25a/schultz25a.pdf)
- **Code reasoning** (constructs) — *causes*
  > Furthermore, the enhanced planning capability gained through HLP boosts model performance on code reasoning. (Abstract)
  - [Planning-Aware Code Infilling via Horizon-Length Prediction](https://aclanthology.org/2025.emnlp-main.1672.pdf)
- **PlanBench** (measurements) — *measured_by*
  > For instance, models frequently demonstrate high performance on standardized test-style questions yet struggle when faced with complex planning or multi-step reasoning challenges, a limitation highlighted by specialized benchmarks like PlanBench (Valmeekam et al., 2022), GPQA (Rein et al., 2023), and HLE (Phan et al., 2025). (Section 2.4)
  - [In Benchmarks We Trust ... Or Not?](https://aclanthology.org/2025.emnlp-main.1208.pdf)

### → Planning
- **Reasoning** (constructs) — *causes*
  > Crucially, the agent needs to perform multi-step reasoning between such information and the current state of the environment to figure out a plan of action
  - [Generating Code World Models with Large Language Models Guided by Monte Carlo Tree Search](https://proceedings.neurips.cc/paper_files/paper/2024/file/6f479ea488e0908ac8b1b37b27fd134c-Paper-Conference.pdf)
- **World modeling** (constructs) — *causes*
  > we show that the Code World Models synthesized with it can be successfully used for planning
  - [Generating Code World Models with Large Language Models Guided by Monte Carlo Tree Search](https://proceedings.neurips.cc/paper_files/paper/2024/file/6f479ea488e0908ac8b1b37b27fd134c-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks) — *causes*
  > In this paper, we initiate a theoretical investigation into the emergence of planning capabilities in Transformer-based LLMs via their next-word prediction mechanisms.
  - [ALPINE: Unveiling The Planning Capability of Autoregressive Learning in Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d848cb2c84f0bba7f1f73cf232734c40-Paper-Conference.pdf)
- **Self-reflection** (behaviors tasks) — *causes*
  > LEPA refines the plan through self-reflection, aiming to acquire plans that are instrumental in yielding correct solutions.
  - [Learning to Plan Before Answering: Self-Teaching LLMs to Learn Abstract Plans for Problem Solving](https://proceedings.iclr.cc/paper_files/paper/2025/file/821a6e5681b072351fd3c21fac44739a-Paper-Conference.pdf)
- **In-context learning** (constructs) — *causes*
  > In this work, we explore how to improve the model planning capability through in-context learning (ICL), specifically, what signals can help select the exemplars. (Section Abstract)
  - [Improving Large Language Model Planning with Action Sequence Similarity](https://proceedings.iclr.cc/paper_files/paper/2025/file/b18c6549c77411d92e645027a25838a8-Paper-Conference.pdf)
- **Theory of mind** (constructs) — *causes*
  > We introduce the Theory of Mind module that scaffolds the high-level planning process by generating hypotheses about other agents' strategies in natural language.
  - [Hypothetical Minds: Scaffolding Theory of Mind for Multi-Agent Tasks with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/12f483f624b378f9f3058d8ecd3c7ff5-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > LLMs often experience hallucinations (Huang et al., 2023), which present two major challenges in planning. First, they might struggle to assess if a plan is achievable given a specific problem description (Aghzal et al., 2023; Kambhampati, 2024). (Section 10)
  - [PlanGenLLMs: A Modern Survey of LLM Planning Capabilities](https://aclanthology.org/2025.acl-long.958.pdf)

### Associated with
- **Pathfinding** (behaviors tasks)
  > “The ability to search is fundamental in many important tasks, such as reasoning ..., planning ..., and navigation ...”
  - [Transformers Struggle to Learn to Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/28d43a64147bf94921041599efdf791d-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs)
  > we posit that the natural language mathematical CoT task is determined by two sub-tasks: step planning task and step calculation task for global logic planning and local mathematical calculation. (Section 4.2)
  - [Unlocking the Capabilities of Thought: A Reasoning Boundary Framework to Quantify and Optimize Chain-of-Thought](https://proceedings.neurips.cc/paper_files/paper/2024/file/62ab1c2cb4b03e717005479efb211841-Paper-Conference.pdf)
- **Sequential decision-making** (constructs)
  > ReAct [23]: This LLM-based planning method integrates reasoning and acting to address sequential decision-making tasks. (Section 4.1.2)
  - [AutoGuide: Automated Generation and Selection of Context-Aware Guidelines for Large Language Model Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/d8efbb5dd415974eb095c3f06bff1f48-Paper-Conference.pdf)
- **Molecular structure elucidation** (behaviors tasks)
  > Solving this task requires AI models to possess the ability to interpret spectral images, engage in complex reasoning, and plan effectively across extended workflows. (Section 1)
  - [Can LLMs Solve Molecule Puzzles? A Multimodal Benchmark for Molecular Structure Elucidation](https://proceedings.neurips.cc/paper_files/paper/2024/file/f2b9e8e7a36d43ddfd3d55113d56b1e0-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Backtracking** (behaviors tasks)
  > Planning problems, however, demand a more sophisticated approach that incorporates: ... Backtracking (the capability to recognize dead-ends and return to previous states to explore alternative paths) (Section 3.1)
  - [LLMs Can Plan Only If We Tell Them](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1e67cde895c3c91edb43569ad0df260-Paper-Conference.pdf)
- **Textual reasoning** (behaviors tasks)
  > Text is suitable for semantic analysis and commonsense reasoning, but is not the best format for precise computation and planning, symbolic manipulation, and algorithmic processing and optimization (Kambhampati et al., 2024b; Chen et al., 2024a). (Section 1)
  - [Steering Large Language Models between Code Execution and Textual Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f763f7c9a6599e14b07add5937d8189c-Paper-Conference.pdf)
- **Temporal reasoning** (constructs)
  > "While these efforts highlight the relevance of temporal reasoning in planning"
  - [TCP: a Benchmark for Temporal Constraint-Based Planning](https://aclanthology.org/2025.emnlp-main.1142.pdf)
- **Causal reasoning** (constructs)
  > “LLMs have recently shown great promise in planning and reasoning applications. These tasks demand robust systems, which arguably require a causal understanding of the environment.”
  - [Language Agents Meet Causality -- Bridging LLMs and Causal World Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5c5bc3553815adb4d1a8a5b8701e41a9-Paper-Conference.pdf)
- **Plan generation** (behaviors tasks)
  > Planning: Plan-and-solve prompting (PS) (Wang et al., 2023) elicits the model to first generate a plan (e.g., numbered steps) and then execute that plan, yielding improvements over standard CoT. (Section 2)
  - [Prior Prompt Engineering for Reinforcement Fine-Tuning](https://aclanthology.org/2025.emnlp-main.1590.pdf)
