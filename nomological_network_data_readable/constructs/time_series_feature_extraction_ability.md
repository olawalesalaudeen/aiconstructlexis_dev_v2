# Time-series feature extraction ability
**Type:** Construct  
**Referenced in:** 4 papers  
**Also known as:** Feature extraction  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** In the available usage, this construct is treated as a model ability over time-series data: identifying and using relevant patterns for reasoning. The only explicit definition describes patterns such as pictorial, time-aware, cross-dimension, and frequency-domain features, and the accompanying discussion says that many planned features are difficult to extract from numerical time series, while "visualization empowers feature extraction" (A Picture is Worth A Thousand Numbers: Enabling LLMs Reason about Time Series via Visualization).

**Space of facets.** The only internal breakdown is by feature type, namely pictorial, time-aware, cross-dimension, and frequency-domain features. The available paper does not equate it with another construct or place it in a broader taxonomy; instead, it frames the construct around whether relevant features can be extracted from numerical time series at all, and contrasts that difficulty with the claim that visualization can enable extraction.

**Space of measurement.** No measurement instrument is linked to it. Papers link it to one behavioral indicator, Reward function generation, but only through a causal claim rather than a measured_by relation, so the available work does not provide a direct operationalization of the construct.

**Links.** A Decision-Language Model (DLM) for Dynamic Restless Multi-Armed Bandit Tasks in Public Health claims a causal relationship from Logical reasoning to Time-series feature extraction ability, citing the use of world knowledge and logical reasoning when finding relevant features. The same paper also claims a causal relationship from Time-series feature extraction ability to Reward function generation, with evidence that "LLMs can accurately extract relevant features from language-described resource allocation preferences."

## Sources

**[A Picture is Worth A Thousand Numbers: Enabling LLMs Reason about Time Series via Visualization](https://aclanthology.org/2025.naacl-long.383.pdf) (as "Feature extraction")**
> The model's ability to identify and utilize relevant patterns from time-series data, such as pictorial, time-aware, cross-dimension, or frequency-domain features, which are critical for accurate reasoning.

## Relationships

### → Time-series feature extraction ability
- **Logical reasoning** (constructs) — *causes*
  > analyzing the precision and recall of finding relevant features through the usage of world knowledge and logical reasoning (Section 4.5).
  - [A Decision-Language Model (DLM) for Dynamic Restless Multi-Armed Bandit Tasks in Public Health](https://proceedings.neurips.cc/paper_files/paper/2024/file/074f42212be2c8ee651db00f17965ec4-Paper-Conference.pdf)
