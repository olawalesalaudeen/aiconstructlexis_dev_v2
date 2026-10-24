# Conversational recommendation
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

**Space of definitions.** Across the papers, the shared task is movie recommendation from dialogue. The common description treats success as producing a recommendation during a multi-turn natural-language exchange in which the user expresses preferences, with one paper noting that CRSs "provide recommendations by engaging users in multi-turn dialogues" and illustrating a case where "the user asks for a silly cop movie and the system recommends one". Papers also frame the behavior as retrieving or ranking movies from a dialogue history, where a test history is encoded and its nearest neighbors in an embedding space are retrieved.

**Variants.** The studied setting is consistently the movie domain. Papers refer to it as conversational recommendation or conversational recommender systems, and they vary mainly in whether the dialogue is treated as an ongoing multi-turn interaction or as a dialogue history used for retrieval in a latent embedding space.

**Space of elicitation and scores.** Papers link this behavior to one measurement instrument, ReDial, which is described as a real-world CRS benchmark. In the recorded relationship, conversational recommendation is measured by ReDial, and no other measurement instrument is linked.

**What it is taken as evidence of.** Papers do not link this behavior to any construct.

## Sources

**[Beyond Single Labels: Improving Conversational Recommendation through LLM-Powered Data Augmentation](https://aclanthology.org/2025.acl-long.758.pdf)**
> Generating movie recommendations in response to multi-turn natural language dialogue with a user expressing preferences.

## Relationships

### Conversational recommendation →
- **ReDial** (measurements) — *measured_by*
  > We have conducted extensive experiments on two real-world CRS benchmarks, namely ReDial (Li et al., 2018) and INSPIRED (Hayati et al., 2020)... (Section 1)
  - [Beyond Single Labels: Improving Conversational Recommendation through LLM-Powered Data Augmentation](https://aclanthology.org/2025.acl-long.758.pdf)
