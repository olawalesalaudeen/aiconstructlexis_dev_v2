# Action planning
**Type:** Construct  
**Referenced in:** 4 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the papers here, action planning is treated as the generation of sequences of actions for carrying out a goal. One formulation defines it as producing executable low-level keyboard and mouse operations by instantiating high-level skills with appropriate parameters from the current goals and context, while another uses the same label for generating read, write, or modify actions that guide test generation. The shared core is action-sequence generation, and the main variation is the action space being planned.

**Space of facets.** Papers organize the concept through the action types involved rather than through a shared higher-level taxonomy. One line of work describes high-level skills that are turned into specific keyboard and mouse operations, whereas another explicitly separates actions into read, write, and modify types and says the planner begins with read actions over files and functions supplied by a localizer.

**Space of measurement.** No measurement instrument is linked to action planning. Instead, papers operationalize it procedurally, as generating executable keyboard and mouse operations via skills, or as carrying out read, write, and modify steps, including initial read actions over files and functions provided by a localizer. It is linked to 2 behavioral indicators, Code navigation and Self-reflection, but not through measured_by relations.

**Links.** One paper claims a causal relationship from action planning to Code navigation, describing dynamic action scheduling with priority queues and LLM-guided action generation for codebase exploration. Another paper reports that action planning is related to Self-reflection, describing a self-reflective action planner that decides which code to read and which tests to write.

## Sources

**[Cradle: Empowering Foundation Agents towards General Computer Control](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25h/tan25h.pdf)**
> The ability to generate executable sequences of low-level keyboard and mouse actions by instantiating high-level skills with appropriate parameters based on current goals and context.

## Relationships

### Action planning →
- **Code navigation** (behaviors tasks) — *causes*
  > To address challenge 1), we design a dynamic action scheduling system that incorporates priority queues and LLM-guided action generation for codebase exploration. The priority queue dynamically reorders actions based on their contextual relevance and urgency, solving the shortcomings of previous systems that lacked effective action management. (Section 1)
  - [OrcaLoca: An LLM Agent Framework for Software Issue Localization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25x/yu25x.pdf)

### Associated with
- **Self-reflection** (behaviors tasks)
  > Otter contains a novel self-reflective action planner for deciding which code to read and which tests to write. (Abstract)
  - [Otter: Generating Tests from Issues to Validate SWE Patches](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ahmed25b/ahmed25b.pdf)
