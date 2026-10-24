# Aleatoric uncertainty
**Type:** Construct  
**Referenced in:** 4 papers  
**Also known as:** Aleatoric semantic uncertainty  

## State of the Field

**Definition agreement:** Consensus. All papers define aleatoric uncertainty as uncertainty that comes from inherent ambiguity or noise in the data or task, often framed as a single input admitting multiple valid outputs, rather than from uncertainty about the model itself. The differences are only in emphasis, with some papers stressing data noise and others stressing semantically distinct possible outputs, but they describe the same core phenomenon.

**Space of definitions.** Across the surveyed work, the prevailing framing treats aleatoric uncertainty as uncertainty that comes from inherent ambiguity or noise in the task or data, rather than from uncertainty about model parameters. Most definitions describe cases where one input can have multiple valid outputs, so probability mass is spread across those options; papers illustrate this with ambiguous tasks, valid alternative tokens, and examples such as synonyms or sentence starts in natural language generation. A smaller line of work narrows the concept to aleatoric semantic uncertainty, defined specifically as uncertainty over which semantically distinct output meaning will be generated.

**Space of facets.** Papers use both a broad and a narrower label. The broader label, aleatoric uncertainty, covers ambiguity or noise in the data or task, while the narrower label, aleatoric semantic uncertainty, is restricted to ambiguity over output meanings and is explicitly treated as also known as semantic entropy. The broad framing is also contrasted with uncertainty about model parameters.

**Space of measurement.** No measurement instrument is linked to this construct. In the available snippets, papers make it concrete by looking for settings with multiple valid outputs for one input, asking human annotators which top tokens are valid at each output step, and citing cases such as synonyms or sentence starts; beyond that, it is linked overall to one behavioral indicator, hallucination.

**Links.** One paper reports that aleatoric uncertainty is reported to correlate with hallucination, stating that a measure of aleatoric semantic uncertainty can detect whether initial text is likely to be hallucinated. No causal or other related links are recorded.

## Sources

**[Are Generative Models Underconfident? Better Quality Estimation with Boosted Model Probability](https://aclanthology.org/2025.emnlp-main.166.pdf)**
> Uncertainty arising from inherent ambiguity in the task or data, leading to multiple valid outputs for a single input, which causes the model to distribute probability mass across these options.

**[Improving Uncertainty Estimation through Semantically Diverse Language Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b94d8b035e2183e47afef9e2f299ba47-Paper-Conference.pdf) (as "Aleatoric semantic uncertainty")**
> The uncertainty arising from inherent ambiguity in which semantically distinct output meaning the model will generate for a given input.

## Relationships

### Aleatoric uncertainty →
- **Hallucination** (behaviors tasks) — *correlates*
  > This approach provides a precise measure of aleatoric semantic uncertainty, detecting whether the initial text is likely to be hallucinated. (Abstract)
  - [Improving Uncertainty Estimation through Semantically Diverse Language Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b94d8b035e2183e47afef9e2f299ba47-Paper-Conference.pdf)
