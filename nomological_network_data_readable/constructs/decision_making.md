# Decision-making
**Type:** Construct  
**Referenced in:** 48 papers  
**Also known as:** Decision-making Ability, Decision-making ability, Decision-making capability, Activity evaluation, Decision-level ability, High-level reasoning  

## State of the Field

**Definition agreement:** Consensus. Most papers define decision-making as a latent capability of an agent or model to plan, choose, and carry out goal-directed actions in an environment, with differences mainly in emphasis such as sequential policies, complex tasks, or a driving setting. A few definitions focus on particular parts of that same capability, such as linking high-level choices to low-level controls or evaluating candidate actions, but they do not shift the construct to a different phenomenon.

**Space of definitions.** Across the surveyed work, the prevailing usage treats decision-making as a latent or cognitive capability for planning, choosing, and sequencing actions toward goals in an environment. Definitions in this cluster describe support for sequential action selection and policy formation across interactive environments, the ability to plan, make decisions, and take actions autonomously, or the capacity to perceive the environment, make choices, and select appropriate actions to achieve a goal. A smaller line of work uses narrower framings: as an observable process of evaluating candidate activities against internal desire states, as a decision-level problem-solving, diagnosis, and planning capacity distinct from execution, or as high-level reasoning that connects abstract decisions to low-level control.

**Space of facets.** Papers use several overlapping labels for nearby ideas, including decision-making capability, decision-making ability, decision-level ability, high-level reasoning, and activity evaluation. One strand explicitly decomposes skills into decision-level components such as problem-solving and diagnosis, versus action-level components such as execution and implementation, and cautions against conflating reasoning and action skills. Other papers isolate activity evaluation as the step where candidate activities are imagined and compared by their effects on desire states, while high-level reasoning is used for understanding and planning how to accomplish complex goals or for linking high-level decisions to control signals.

**Space of measurement.** Operationalization is explicit through 4 measurement instruments and 1 behavioral indicator. The linked instruments are ALFWorld, which one paper calls "a popular benchmark for examining LLM-based agents' decision-making ability," plus Game of 24, ToolBench, and WebShop, which are used as experimental datasets. These instruments operationalize the construct through task performance in settings that papers present as testing decision-making ability, while the only linked behavioral indicator, action selection, appears in a causal claim rather than as a direct measure.

**Links.** Among non-measurement links, one paper claims a causal relationship from decision-making to action selection: after evaluating candidate activities, the planner "selects the activity ... expected to best fulfill the agent's intrinsic desires" (Simulating Human-like Daily Activities with Desire-driven Autonomy). No papers report correlates or related links, and no construct-to-construct links are named.

## Sources

**[On the Modeling Capabilities of Large Language Models for Sequential Decision Making](https://proceedings.iclr.cc/paper_files/paper/2025/file/368cba57d00902c752eaa9e4770bbbbe-Paper-Conference.pdf) (as "Decision-making capability")**
> The latent ability of an LLM to support sequential action selection and policy formation across interactive environments.

**[Rational Decision-Making Agent with Learning Internal Utility Judgment](https://proceedings.iclr.cc/paper_files/paper/2025/file/45994782a61bb51cad5c2bae36834265-Paper-Conference.pdf) (as "Decision-making Ability")**
> The general capability of an agent to plan, make decisions, and take actions to accomplish complex tasks autonomously.

**[AgentRefine: Enhancing Agent Generalization through Refinement Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a3cc50126338b175e56bb3cad134db0b-Paper-Conference.pdf) (as "Decision-making ability")**
> The underlying cognitive capacity of an agent to perceive its environment, make choices, and select appropriate actions to achieve a goal.

**[Simulating Human-like Daily Activities with Desire-driven Autonomy](https://proceedings.iclr.cc/paper_files/paper/2025/file/513cb685f67550dbd133b81a7a24249f-Paper-Conference.pdf) (as "Activity evaluation")**
> The observable process of an agent assessing the potential impact of each candidate activity on its internal desire states.

**[A Mathematical Framework for AI-Human Integration in Work](https://raw.githubusercontent.com/mlresearch/v267/main/assets/celis25a/celis25a.pdf) (as "Decision-level ability")**
> The latent cognitive capacity for problem-solving, diagnosis, and planning required to determine a course of action for a given skill.

**[SafeAuto: Knowledge-Enhanced Safe Autonomous Driving with Multimodal Foundation Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cm/zhang25cm.pdf) (as "High-level reasoning")**
> The latent ability of an autonomous driving system to connect high-level decisions, such as 'the car should slow to a stop', with low-level control signals.

## Relationships

### Decision-making →
- **ALFWorld** (measurements) — *measured_by*
  > We select 5 tasks: SciWorld (Wang et al., 2022), Alfworld (Shridhar et al., 2020), BabyAI (Chevalier-Boisvert et al., 2018), PDDL (Vallati et al., 2015), and Jericho (Hausknecht et al., 2020), all of them are testing models’ decision-making ability. (Section 4.1)
  - [AgentRefine: Enhancing Agent Generalization through Refinement Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a3cc50126338b175e56bb3cad134db0b-Paper-Conference.pdf)
- **WebShop** (measurements) — *measured_by*
  > We use 100, 500, and 500 instances for Game of 24, WebShop, and ToolBench to evaluate the decision-making ability respectively.
  - [Rational Decision-Making Agent with Learning Internal Utility Judgment](https://proceedings.iclr.cc/paper_files/paper/2025/file/45994782a61bb51cad5c2bae36834265-Paper-Conference.pdf)
- **Game of 24** (measurements) — *measured_by*
  > We use 100, 500, and 500 instances for Game of 24, WebShop, and ToolBench to evaluate the decision-making ability respectively.
  - [Rational Decision-Making Agent with Learning Internal Utility Judgment](https://proceedings.iclr.cc/paper_files/paper/2025/file/45994782a61bb51cad5c2bae36834265-Paper-Conference.pdf)
- **ToolBench** (measurements) — *measured_by*
  > We use 100, 500, and 500 instances for Game of 24, WebShop, and ToolBench to evaluate the decision-making ability respectively.
  - [Rational Decision-Making Agent with Learning Internal Utility Judgment](https://proceedings.iclr.cc/paper_files/paper/2025/file/45994782a61bb51cad5c2bae36834265-Paper-Conference.pdf)
- **T-Eval** (measurements) — *measured_by*
  > “we conduct experiments using an OOD benchmark, T-Eval, a widely-used benchmark to evaluate the multi-step decision-making capability of LLMs to utilize APIs.”
  - [WorkflowLLM: Enhancing Workflow Orchestration Capability of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/3d7259031023c5aa463187c4a31c95c8-Paper-Conference.pdf)
- **AgentBench** (measurements) — *measured_by*
  > We present AGENTBENCH, a multi-dimensional benchmark that consists of 8 distinct environments to assess LLM-as-Agent’s reasoning and decision-making abilities.
  - [AgentBench: Evaluating LLMs as Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e9df36b21ff4ee211a8b71ee8b7e9f57-Paper-Conference.pdf)

### Associated with
- **Stock trading** (behaviors tasks)
  > Decision-Making assesses the model’s proficiency in making informed financial decisions, such as developing trading strategies and optimizing investment portfolios (Paiva et al., 2019).
  - [FinBen: A Holistic Financial Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/adb1d9fa8be4576d28703b396b82ba1b-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Webpage understanding** (constructs)
  > “we decouple web page understanding from decision making of LLM agents”
  - [Learning to Contextualize Web Pages for Enhanced Decision Making by LLM Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/c995a913bc20ca39ce2231b8973be90a-Paper-Conference.pdf)
- **Visual perception** (constructs)
  > Decision-making is a complex task requiring various abilities. Several common ones are evaluated across all games: (1) Perception...
  - [Competing Large Language Models in Multi-Agent Gaming Environments](https://proceedings.iclr.cc/paper_files/paper/2025/file/a46adbe2f0ca0e16ef8857e188991ad7-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs)
  > Decision-making is a complex task requiring various abilities. Several common ones are evaluated across all games: ... (2) Arithmetic Reasoning...
  - [Competing Large Language Models in Multi-Agent Gaming Environments](https://proceedings.iclr.cc/paper_files/paper/2025/file/a46adbe2f0ca0e16ef8857e188991ad7-Paper-Conference.pdf)
- **Strategic reasoning** (constructs)
  > Decision-making is a complex task requiring various abilities. Several common ones are evaluated across all games: ... (4) Strategic Reasoning...
  - [Competing Large Language Models in Multi-Agent Gaming Environments](https://proceedings.iclr.cc/paper_files/paper/2025/file/a46adbe2f0ca0e16ef8857e188991ad7-Paper-Conference.pdf)
- **Diagram understanding** (behaviors tasks)
  > Accurate interpretation of flowcharts is essential for tasks such as automation, decision-making, and analysis.
  - [Beyond End-to-End VLMs: Leveraging Intermediate Text Representations for Superior Flowchart Understanding](https://aclanthology.org/2025.naacl-long.180.pdf)
