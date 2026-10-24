# Credit assignment
**Type:** Construct  
**Referenced in:** 6 papers  

## State of the Field

**Definition agreement:** Consensus. All papers define credit assignment as identifying which earlier actions or steps in a multi-step process are responsible for later outcomes or feedback, so that learning can target the right parts of the sequence. One paper phrases this for a reward model spotting erroneous reasoning steps, but it is the same core idea as attributing success, failure, or delayed reward to prior steps.

**Space of definitions.** Across the papers, the prevailing framing is that credit assignment is about tracing later outcomes back to earlier steps or actions in a multi-step process. The definitions agree on localizing where success, failure, or reward came from, but they vary in the bearer of the ability: one paper describes a language agent understanding where it made mistakes in an environment, another a reward model determining where an incorrect reasoning chain went wrong, and another an RL algorithm attributing delayed rewards to earlier actions.

**Space of facets.** In these papers, the term appears across settings that include agent behavior in environments, reward models over reasoning chains, and RL algorithms facing delayed rewards. A recurring contrast is between coarse outcome-level signals and more local step-level or action-level localization: one study says process supervision gives a richer signal because it marks how many early steps were correct and "the precise location of the incorrect step," while another pairs credit assignment with root cause analysis and understanding where the agent made mistakes.

**Space of measurement.** No measurement instrument or behavioral indicator is linked to credit assignment. Still, papers describe it operationally through tasks and supervision signals: one paper says Chess, Endgames, Maze and Text-Nav test whether an RL algorithm can assign credit to good actions rather than a lucky starting position, and another presents process supervision as a richer signal because it pinpoints the incorrect step.

**Links.** No papers report a causal, correlational, or related link involving credit assignment.

## Sources

**[Let's Verify Step by Step](https://proceedings.iclr.cc/paper_files/paper/2024/file/aca97732e30bcf1303bc22ac3924fd16-Paper-Conference.pdf)**
> The latent ability of a language agent to identify which prior actions led to failure or success in a multi-step task, enabling effective learning from environmental feedback.

## Relationships

### Credit assignment →
- **Learning efficiency** (constructs) — *causes*
  > “This hinders learning efficiency and slows convergence.”
  - [MA-RLHF: Reinforcement Learning from Human Feedback with Macro Actions](https://proceedings.iclr.cc/paper_files/paper/2025/file/429d69979c22b06d6baa65caf3ab1e10-Paper-Conference.pdf)
