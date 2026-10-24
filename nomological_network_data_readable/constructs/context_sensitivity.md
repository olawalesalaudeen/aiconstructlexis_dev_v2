# Context sensitivity
**Type:** Construct  
**Referenced in:** 9 papers  
**Also known as:** Contextual sensitivity  

## State of the Field

**Definition agreement:** Consensus. Most papers define context sensitivity as a model's outputs, predictions, or judgments changing in response to relevant contextual information, whether that context is the current environment, preceding text, country information, or discursive situation. A few emphasize particular settings or whether the change is appropriate versus simply context-driven, but they are still studying the same core property of context-dependent output behavior.

**Space of definitions.** Across papers, the prevailing usage treats context sensitivity as the extent to which outputs or judgments change with contextual information. Most definitions frame it as adaptation of goals, predictions, rationales, or token choices to the current environment, country, preceding context, or other situational cues, rather than to generic response priors or the current input alone. A smaller line of work casts it more normatively, as producing context-appropriate guidance or interpretation, for example when context helps distinguish sarcasm, critique, or non-toxic language from harmful content. Another recurring framing stresses dependence on situational framing itself, as when causal judgments vary across contexts.

**Space of facets.** The term is applied to several objects: generated goals, survey predictions, rationales, causal judgments, toxicity interpretations, and token-level predictions. The main axis of variation is what counts as context, ranging from agent state, inventory, and environment, to country labels, preceding context, and broader discursive setting. One paper uses the near-synonymous label contextual sensitivity for the same general phenomenon, while the toxicity paper applies the term to annotation or interpretation practice rather than only to model behavior.

**Space of measurement.** No measurement instrument or behavioral indicator is linked to it. Instead, papers operationalize the construct through task-specific context manipulations and contrastive analyses: swapping country names to test whether predictions follow the stated country rather than response priors, removing or changing contextual cues to see whether rationales or causal judgments shift, checking whether generated goals adapt to an agent's state, inventory, and environment, and comparing predictions with and without preceding context to identify context-sensitive tokens. These operationalizations mostly line up with the dominant definition because they vary context and observe whether outputs respond.

## Sources

**[World Models with Hints of Large Language Models for Goal Achieving](https://aclanthology.org/2025.naacl-long.3.pdf)**
> The degree to which the LLM's generated goals adapt to the agent's current state, inventory, and environment, ensuring relevance and usefulness of the guidance.

**[Drift: Enhancing LLM Faithfulness in Rationale Generation via Dual-Reward Probabilistic Inference](https://aclanthology.org/2025.acl-long.340.pdf) (as "Contextual sensitivity")**
> The ability of a model to adjust its outputs—especially rationales—in response to meaningful changes in the input context, indicating reliance on domain-specific and semantically important elements.
