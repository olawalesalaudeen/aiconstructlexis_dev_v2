# Trajectory generation
**Type:** Behavior  
**Referenced in:** 8 papers  

## State of the Field

**Space of definitions.** Across the papers, trajectory generation is most commonly treated as producing ordered sequences, but the contents of those sequences vary by task: imagined states, actions, and rewards based on retrieved knowledge; future UAV poses or waypoints for navigation; or new plausible state sequences that conform to dynamics supplied in context. When papers elaborate the behavior, they describe it as rehearsing decision-making trajectories, generating an imaginary dataset, or producing trajectories described as relevant and as closely matching the real simulated trajectory distribution.

**Variants.** Papers study several variants of the behavior. One line uses it for decision-making rehearsal from retrieved knowledge, another for hierarchical trajectory generation in UAV navigation, where a decoder generates the next target pose or waypoint, and another for generating new trajectories from in-context examples alone, without an initial state query. The same papers also use nearby labels such as decision-making trajectories, imaginary dataset generation, and hierarchical trajectory decoding.

**Space of elicitation and scores.** No measurement instrument is linked to it. Where elicitation or scoring is described, it is task-specific: papers mention rehearsing trajectories from derived knowledge, generating future poses through a hierarchical decoder, and assessing whether generated trajectories are relevant and whether their distribution closely matches the real simulated trajectory distribution.

**What it is taken as evidence of.** No construct is linked to it, so papers do not explicitly present trajectory generation as evidence of a particular construct.

## Sources

**[Policy Learning from Tutorial Books via Understanding, Rehearsing and Introspecting](https://proceedings.neurips.cc/paper_files/paper/2024/file/21cf8411ed825614e00006a1d9aab7e4-Paper-Conference.pdf)**
> The observable production of sequences of imagined states, actions, and rewards based on retrieved knowledge.
