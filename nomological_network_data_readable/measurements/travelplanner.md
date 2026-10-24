# TravelPlanner
**Type:** Measurement  
**Referenced in:** 12 papers  
**Also known as:** Travelplanner  

## State of the Field

**What it is.** Across the surveyed work, TravelPlanner is most commonly described as a benchmark for travel planning agents or LLM agents, centered on generating travel plans or itineraries from user queries and provided information while satisfying multiple constraints. Definitions repeatedly describe a rich sandbox environment with tools for accessing nearly four million data records, curated planning intents or queries, and reference plans; several papers also frame it as a real-world, complex, sometimes U.S. domestic setting involving commonsense as well as hard constraints, and one paper explicitly says it covers hard and soft constraints. A smaller variation in framing treats it as a dataset used for travel-planning evaluation, and one paper reports results on a TravelPlanner validation split.

**What it is claimed to measure.** Papers use TravelPlanner to measure 2 constructs and 1 behavioral indicator. The prevailing use is for Planning: several papers describe it as evaluating planning in complex or realistic environments and multi-constraint tasks. Smaller lines of work use it to measure Long-horizon planning, explicitly calling it a test of "long-horizon planning under user-defined constraints", and Task decomposition, in work that places it among open-ended, structurally unconstrained tasks requiring high-level planning and system-level coordination.

**Space of uses.** In use, papers most often position TravelPlanner as a challenging evaluation benchmark for agent systems. One paper starts with it as the "primary use case", another uses it "to further validate the performance", and others report it alongside OpenAGI, NATURAL PLAN, and Tau-bench in multi-benchmark evaluations. A smaller usage treats it as a dataset adopted for travel-planning instances in reward-model evaluation.

## Sources

**[AgentSquare: Automatic LLM Agent Search in Modular Design Space](https://proceedings.iclr.cc/paper_files/paper/2025/file/0ae94013da7cd459402fd77874e09ee3-Paper-Conference.pdf) (as "Travelplanner")**
> A benchmark for evaluating LLM agents on travel-planning tasks.

**[Interactive Speculative Planning: Enhance Agent Efficiency through Co-design of System and User Interface](https://proceedings.iclr.cc/paper_files/paper/2025/file/25458943db16e0f78f748ca5bc34fff6-Paper-Conference.pdf)**
> A benchmark for evaluating travel planning agents, providing a sandbox environment with tools for accessing travel data and a set of curated planning intents with constraints.

## Relationships

### → TravelPlanner
- **Planning** (constructs) — *measured_by*
  > Planning in complex and realistic environments is also a crucial skill for building autonomous agents. Thus, we also select TravelPlanner (Xie et al., 2024), a benchmark designed to evaluate language agents in real-world complex planning with multiple constraints. (Section 4.3)
  - [EvoAgent: Towards Automatic Multi-Agent Generation via Evolutionary Algorithms](https://aclanthology.org/2025.naacl-long.315.pdf)
- **Long-horizon planning** (constructs) — *measured_by*
  > TravelPlanner (TP) (Xie et al., 2024), which tests long-horizon planning under user-defined constraints (Section 5.1)
  - [SwarmAgentic: Towards Fully Automated Agentic System Generation via Swarm Intelligence](https://aclanthology.org/2025.emnlp-main.93.pdf)
