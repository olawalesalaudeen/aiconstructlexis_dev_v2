# Counterfactual fairness
**Type:** Construct  
**Referenced in:** 3 papers  
**Also known as:** Counterfactual bias  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the papers, usage splits between two framings built on changing a sensitive or demographic attribute while holding the rest of the prompt fixed. One paper defines counterfactual fairness as a latent ability of the model to produce the same output for an individual if the sensitive attribute had been different, with other relevant factors held constant, while another uses the adjacent label counterfactual bias for the tendency to produce semantically different or biased responses when only demographic-sensitive attributes in otherwise matched prompts are changed. The main difference is between a positive invariance requirement and a negative difference or bias framing.

**Space of facets.** Systematization is minimal and centers on the counterfactual comparison itself. One paper keeps the fairness label for the requirement that the model would have produced the same output under a different sensitive attribute, while another organizes the same setup under counterfactual bias and describes it as assessing semantic differences across LLM responses caused by varying demographic groups mentioned in counterfactual prompts.

**Space of measurement.** No measurement instrument is linked to the construct, and no behavioral indicator is linked to it. The operationalization described in the papers is a counterfactual prompt design: prompts are otherwise matched, the sensitive or demographic reference is changed, and the assessment asks either whether the output stays the same or whether responses become semantically different or biased. One paper also says it certifies counterfactual bias on distributions of prompts using confidence intervals.

## Sources

**[The Impossibility of Fair LLMs](https://aclanthology.org/2025.acl-long.5.pdf)**
> The latent ability of a model to produce the same output for an individual regardless of their value on a sensitive attribute, assuming all other relevant factors remain constant.

**[Certifying Counterfactual Bias in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/1c6decac1477fbcc2cbf12d314ce0133-Paper-Conference.pdf) (as "Counterfactual bias")**
> The tendency of an LLM to produce semantically different or biased responses when only demographic-sensitive attributes in otherwise matched prompts are changed.
