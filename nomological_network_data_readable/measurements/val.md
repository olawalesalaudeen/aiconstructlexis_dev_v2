# VAL
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across papers, VAL is most commonly described as an automatic plan validator for PDDL plans. Definitions characterize it as checking whether an action sequence correctly transitions from an initial state to a goal state against ground-truth domain and problem files, and as verifying that a generated sequence is executable and reaches the goal state. A smaller framing presents it as a simulation environment for plan validation that calculates state condition changes and returns error messages when actions fail because preconditions are unsatisfied.

**What it is claimed to measure.** The reported measurement role is narrow rather than spread across many targets: papers link VAL to 1 behavioral indicator, Plan generation, and to no constructs. In that usage, Plan generation is measured by VAL through validation of the produced plan against the domain and problem files.

**Space of uses.** Papers use VAL as an evaluation step after a plan has been produced or after natural language responses have been converted into PDDL, then checked for executability and goal attainment. One paper also positions it as a simulation environment for computing state changes and obtaining error messages from failed actions. No measurement instrument is linked alongside it.

## Sources

**[On the Limit of Language Models as Planning Formalizers](https://aclanthology.org/2025.acl-long.242.pdf)**
> A standardized tool used as a plan validator to check if a sequence of actions correctly transitions from an initial state to a goal state according to the ground-truth domain and problem files.

## Relationships

### → VAL
- **Plan generation** (behaviors tasks) — *measured_by*
  > the plan produced from LLM-as-Planner is validated using VAL (Howey et al., 2004) against the ground-truth DFs and PFs provided above. (Section 4.2).
  - [On the Limit of Language Models as Planning Formalizers](https://aclanthology.org/2025.acl-long.242.pdf)
