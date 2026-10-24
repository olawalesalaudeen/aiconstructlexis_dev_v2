# Action repetition
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Redundant looping, Repetitive actions, Stuck-in-loop behavior  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats action repetition as a failure mode where an agent repeats the same action, command, interaction, or subtask without making progress. Most definitions emphasize repetition despite prior outcomes or inappropriateness, ranging from re-issuing completed commands and re-attempting subtasks to perpetually generating the same action for multiple turns. A smaller difference is in what counts as a repeated-action episode: some papers require lack of progress, while another operationalization marks it when the same action appears three times consecutively in a trajectory.

**Variants.** Papers study the behavior under several names, including redundant looping, repetitive actions, and stuck-in-loop behavior. The settings vary across penetration testing, virtual escape rooms, games, and software engineering agents. Some formulations focus on specific action subsets, for example object interaction and answer submission actions in escape-room trajectories, while another illustrates the behavior as repeatedly holding a fire button in a game where that repetition is inappropriate.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers describe task-specific scoring directly: one reports a "Stuck in Loop (%)" measure, defined as the percentage of trajectories where the agent repeats the same action three times consecutively, and another examines action repetition within trajectories while only counting object interaction and answer submission actions.

**What it is taken as evidence of.** No construct is explicitly linked to it. Definitions and snippets nevertheless describe it as an indicator of poor context retention, poor memory utilization, absent plan tracking, or lack of hypothesis refinement, and one formulation says the behavior occurs due to lack of memory or awareness of prior outcomes.

## Sources

**[From Capabilities to Performance: Evaluating Key Functional Properties of LLM Architectures in Penetration Testing](https://aclanthology.org/2025.emnlp-main.802.pdf) (as "Redundant looping")**
> Repeating the same command or subtask without progress, due to lack of memory or awareness of prior outcomes.

**[VisEscape: A Benchmark for Evaluating Exploration-driven Decision-making in Virtual Escape Rooms](https://aclanthology.org/2025.emnlp-main.810.pdf) (as "Repetitive actions")**
> Performing the same interaction or exploration move multiple times without progress, indicating poor memory utilization or lack of hypothesis refinement.

**[LMAct: A Benchmark for In-Context Imitation Learning with Long Multimodal Demonstrations](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ruoss25a/ruoss25a.pdf)**
> The tendency of a model to output the same action repeatedly, even when inappropriate, such as holding down a fire button in a game without auto-fire.

**[Training Software Engineering Agents and Verifiers with SWE-Gym](https://raw.githubusercontent.com/mlresearch/v267/main/assets/pan25g/pan25g.pdf) (as "Stuck-in-loop behavior")**
> An observable failure mode where an agent perpetually generates the same action for multiple consecutive turns.
