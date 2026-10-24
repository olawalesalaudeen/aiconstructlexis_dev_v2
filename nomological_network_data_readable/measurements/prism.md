# PRISM
**Type:** Measurement  
**Referenced in:** 8 papers  

## State of the Field

**What it is.** Most descriptions treat PRISM as a chat or preference dataset built from multi-turn conversations between humans and LLMs. In that usage it is described as globally diverse, focused on values and controversial opinions, and as containing 27,172 conversations used to solicit human feedback for preference alignment across 9 speaker features and 60 demographic groups; papers also differ on annotation format, describing both N-way preference ratings and binary choices. A smaller line of work uses the same name differently, either for Posterior-Refined Inference for Subset Membership, which updates an LR-Attack score with a world-model prior, or for a reference-free quality estimation procedure that uses a multilingual machine translation model with forced decoding to score other models’ outputs.

**What it is claimed to measure.** Papers do not link PRISM to any constructs or behavioral indicators through measured_by relationships. Where authors describe its target directly, the dataset form is framed around collecting preference ratings and human feedback for preference alignment, evaluating conversational preferences, and focusing on values and controversial opinions, rather than around an explicitly linked named construct.

**Space of uses.** When papers use PRISM as a dataset, they describe users initiating 5 or 6 conversations with various LLMs, and they use it to solicit human feedback for preference alignment or to evaluate value profile modeling of conversational preferences. One paper evaluates BOOSTEDPROB on top of reference-free Prism, positioning it as a scoring procedure, while another presents PRISM as a method that combines an LR-Attack score with a world-model prior to reduce false positives. No other measurement instrument is linked to it.

## Sources

**[SynthesizeMe! Inducing Persona-Guided Prompts for Personalized Reward Models in LLMs](https://aclanthology.org/2025.acl-long.397.pdf)**
> A globally diverse preference dataset focusing on values and controversial opinions, where users engage in multi-turn conversations with LLMs and provide N-way preference ratings.
