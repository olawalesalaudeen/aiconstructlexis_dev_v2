# Temporal dependency modeling
**Type:** Construct  
**Referenced in:** 3 papers  
**Also known as:** Temporal dynamics modeling  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the available definitions, the prevailing usage treats temporal dependency modeling as a latent modeling ability rather than an observed behavior. Papers describe it as capturing correlations and dependencies between observations at different timestamps within a time series, including with exogenous variables, or as representing the evolution of a patient's medical history over time, including progression and recurrence across visits. The shared core is modeling relationships across time, while the emphasis differs between timestamp-level dependencies in time series and visit-level evolution in patient histories.

**Space of facets.** The papers use closely related labels, temporal dependency modeling and temporal dynamics modeling, for a broad idea of modeling change over time. Rather than formal subtypes, the descriptions foreground different facets: one centers a temporal encoder that captures dependencies within data while accounting for exogenous variables, and another centers an evolve-and-memorize mechanism that updates patient representations by weighting historical visits by their time intervals.

**Space of measurement.** No measurement instrument is linked to it, and the only linked behavioral indicator is Medical diagnosis. Instead, the available papers make the construct concrete through model components described in prose, such as a temporal encoder that captures dependencies and a component that dynamically updates representations by weighting historical visits based on time intervals.

**Links.** One paper claims a causal relationship from temporal dependency modeling to Medical diagnosis. In that account, accurate diagnosis prediction is described in terms of capturing overlaps while maintaining awareness of temporal progression.

## Sources

**[PowerPM: Foundation Model for Power Systems](https://proceedings.neurips.cc/paper_files/paper/2024/file/d0a2279c9f7ded859bcbf878c3c3d1ed-Paper-Conference.pdf)**
> The model's latent capability to capture and represent the correlations and dependencies between observations at different timestamps within a time series.

**[BoxLM: Unifying Structures and Semantics of Medical Concepts for Diagnosis Prediction in Healthcare](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25e/tan25e.pdf) (as "Temporal dynamics modeling")**
> The latent ability to represent the evolution of a patient's medical history over time, capturing progression and recurrence patterns across visits.

## Relationships

### Temporal dependency modeling →
- **Knowledge distillation** (measurements) — *measured_by*
  > We further demonstrate that these capabilities can be effectively distilled into a compact neural network 1.3% of the original LLM model size. (Abstract)
  - [AntGPT: Can Large Language Models Help Long-term Action Anticipation from Videos?](https://proceedings.iclr.cc/paper_files/paper/2024/file/faa8be9311811ba7c36fa1ceec13b862-Paper-Conference.pdf)
- **Medical diagnosis** (behaviors tasks) — *causes*
  > Capturing these overlaps while maintaining an awareness of the temporal progression is essential for accurate diagnosis prediction. (Section 2.3. Box-aware Diagnosis Prediction)
  - [BoxLM: Unifying Structures and Semantics of Medical Concepts for Diagnosis Prediction in Healthcare](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25e/tan25e.pdf)
