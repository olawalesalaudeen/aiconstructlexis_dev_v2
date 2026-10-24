# Proactivity
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Proactiveness  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the surveyed papers, the prevailing framing treats proactivity as an agent's ability or tendency to take initiative in conversation, plan ahead, and guide the user or the dialogue flow toward a goal rather than only reacting. A second recorded definition shifts the emphasis to a latent tendency to initiate topic shifts or offer unsolicited but relevant information without explicit prompting. Across these formulations, the common core is initiative beyond passive response, while the main difference is whether the scope is broad dialogue guidance or specific conversational moves.

**Space of facets.** Papers do not provide a detailed subtype taxonomy for proactivity. Instead, they mainly position it against passively responding or only reacting to user inputs, pair it with transition-awareness in conversational-agent frameworks, and in one paper describe a balance between constraints and proactivity. The same paper also distinguishes proactive actions from single-turn dialogue actions and controllable actions, treating proactivity as a separate dimension of dialogue behavior.

**Space of measurement.** Operationalization is sparse. Papers link proactivity to one measurement instrument, TACT, and no behavioral indicators, but the recorded link to TACT is causal rather than a measured_by relation. The clearest explicit evaluation is one paper's accuracy score for proactive actions (Acc P), reported alongside accuracy for single-turn dialogue actions and controllable actions, which assesses proactivity through proactive dialogue actions and stays close to definitions that center on initiative in dialogue.

**Links.** One paper claims a causal relationship from TACT to proactivity, stating that TACT provides richer interactions that better support training agents for proactivity, alongside transition-awareness. No correlational or related links are recorded.

## Sources

**[ChatSOP: An SOP-Guided MCTS Planning Framework for Controllable LLM Dialogue Agents](https://aclanthology.org/2025.acl-long.863.pdf)**
> The agent's tendency to take initiative in a dialogue to guide the user towards a goal, rather than only passively responding.

## Relationships

### Proactivity →
- **Reward model** (measurements) — *measured_by*
  > The labeled data is used to train a reward model that simulates human judgment and serves as an automatic evaluator of the proactiveness of LLM agents. (ABSTRACT)
  - [Proactive Agent: Shifting LLM Agents from Reactive Responses to Active Assistance](https://proceedings.iclr.cc/paper_files/paper/2025/file/75c37811e830bf029584b1c6fac17726-Paper-Conference.pdf)

### → Proactivity
- **Contextual understanding** (constructs) — *causes*
  > This ability of context awareness (Schilit & Theimer, 1994) enables the proactive agent to interpret signals and proactively propose and execute tasks without explicit human instructions. (Section 1)
  - [Proactive Agent: Shifting LLM Agents from Reactive Responses to Active Assistance](https://proceedings.iclr.cc/paper_files/paper/2025/file/75c37811e830bf029584b1c6fac17726-Paper-Conference.pdf)
