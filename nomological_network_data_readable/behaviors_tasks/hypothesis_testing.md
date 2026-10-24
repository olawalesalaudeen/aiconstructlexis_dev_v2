# Hypothesis testing
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Hypothesis validation  

## State of the Field

**Space of definitions.** Across the papers, the behavior is treated as an observable cycle of proposing a hypothesis and then taking actions or running experiments to decide whether evidence supports it. One formulation centers on puzzle solving: agents execute actions, assess the consequences using observations made immediately before and after those actions, and use the outcome to validate or invalidate candidate puzzle solutions while refining later attempts. Another formulation treats it as hypothesis validation for free-form hypotheses, defined as designing and executing experiments to determine whether a hypothesis should be accepted or rejected based on evidence.

**Variants.** The papers use both the names hypothesis testing and hypothesis validation. One setting studies it in virtual escape rooms, where the hypotheses concern puzzle solutions and evaluation happens through post-action reasoning; another studies automated validation of free-form hypotheses in an agentic framework. The variation is therefore mainly in domain and task object, puzzle-solution hypotheses in one case and free-form hypotheses in the other.

**Space of elicitation and scores.** No measurement instrument is linked to it. In the task formulations themselves, scoring is described in two ways: one paper evaluates hypotheses through the outcomes of executed actions and the surrounding observations, while another makes the decision rule explicit as a binary mapping from a hypothesis to unvalidated or validated.

**What it is taken as evidence of.** No construct is linked to this behavior, so the papers do not explicitly specify a named construct that it is taken to indicate.

## Sources

**[VisEscape: A Benchmark for Evaluating Exploration-driven Decision-making in Virtual Escape Rooms](https://aclanthology.org/2025.emnlp-main.810.pdf)**
> Executing actions to validate or invalidate generated hypotheses about puzzle solutions, followed by outcome analysis to refine future attempts.

**[Automated Hypothesis Validation with Agentic Sequential Falsifications](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25n/huang25n.pdf) (as "Hypothesis validation")**
> The observable process of designing and executing experiments to determine whether a given free-form hypothesis should be accepted or rejected based on evidence.
