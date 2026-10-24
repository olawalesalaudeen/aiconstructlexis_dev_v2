# Exploration
**Type:** Behavior  
**Referenced in:** 12 papers  
**Also known as:** Action exploration  

## State of the Field

**Space of definitions.** Across the available papers, the prevailing usage treats exploration as action exploration: selecting and trying different actions within a search or learning process to discover their outcomes and potential rewards. The surrounding descriptions place this behavior in planning and information gathering, including "making decisions that may be suboptimal in the short term for the sake of gathering more information" and enhancing action exploration within MCTS planning.

**Variants.** The named variant in the definitions is "action exploration." Papers study it in MCTS and tree-search settings, including "complex textual interactive tasks," and one line of work discusses it together with exploitation as something to balance throughout a self-improving process.

**Space of elicitation and scores.** No measurement instrument is linked to exploration. Instead, the available papers describe it being elicited through prompting and search procedures: papers claim a causal relationship from chain of thought to exploration in an "enhanced" prompt that hints the model to explore, summarizes interaction history into per-arm averages, and asks for zero-shot chain-of-thought reasoning, and another paper describes an MCTS-based algorithm that integrates an LLM to enhance action exploration.

**What it is taken as evidence of.** Papers link exploration to four constructs with mixed relation types rather than one shared relation. They claim causal relationships from commonsense reasoning and openness to exploration, and they describe exploration as related to planning and exploitation. Papers also link it to two other behaviors, claiming causal relationships from chain of thought and language understanding task performance to exploration.

## Sources

**[Monte Carlo Planning with Large Language Model for Text-Based Game Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/837ff662214b04e7ea8c43f095fe0dd7-Paper-Conference.pdf) (as "Action exploration")**
> The behavior of selecting and trying out different actions within a search or learning process to discover their outcomes and potential rewards.

## Relationships

### → Exploration
- **Chain of thought** (behaviors tasks) — *causes*
  > The single configuration that succeeds in our experiments involves a combination of GPT-4 and an “enhanced” prompt that (a) provides a suggestive hint to explore, (b) externally summarizes the history of interaction into per-arm averages, and (c) asks the LLM to use zero-shot chain-of-thought reasoning [74, 41]. (Introduction)
  - [Can large language models explore in-context?](https://proceedings.neurips.cc/paper_files/paper/2024/file/d951f73c521d069fefbb73396df01424-Paper-Conference.pdf)
- **Openness** (constructs) — *causes*
  > agents exhibiting high Openness—characterized by curiosity, adventurousness, and a propensity for novel experiences—consistently engage in more extensive exploration, undertake more interactions, and achieve higher game scores. (Sec 1)
  - [Persona Dynamics: Unveiling the Impact of Persona Traits on Agents in Text-Based Games](https://aclanthology.org/2025.acl-long.1515.pdf)

### Associated with
- **Exploitation** (constructs)
  > maintaining a dynamic balance between exploration and exploitation is essential throughout the self-improving process. (Section 2.2)
  - [B-STaR: Monitoring and Balancing Exploration and Exploitation in Self-Taught Reasoners](https://proceedings.iclr.cc/paper_files/paper/2025/file/c8db30c6f024a3f667232ed7ba5b6d47-Paper-Conference.pdf)
