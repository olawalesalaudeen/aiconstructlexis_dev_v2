# Trend analysis
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Trend description generation, Degradation trend inference  

## State of the Field

**Space of definitions.** Across the available definitions, it is most commonly described as analyzing and describing directional changes in sensor time-series over specified intervals, with outputs marking segments as upward, downward, or stable. Some papers frame the same behavior as generating natural-language trend descriptions from sensor data, while another formulation asks the model to analyze variations across multiple periods to infer a degradation trajectory. Outputs are described either as interval-by-interval directional labels or as free-text trend summaries.

**Variants.** The prevailing setting is sensor time-series, where prompts ask for trend variations within a stated window and responses can enumerate successive segments as downward, stable, upward, and downward. Papers also use the names trend description generation for free-text sensor descriptions and degradation trend inference for reasoning over signal or semantic variations across consecutive cycles in a system-degradation setting.

**Space of elicitation and scores.** Papers link it to 2 measurement instruments: Human evaluation and LLM-as-a-judge. Both are used to score generated trend descriptions, with GPT-4o rating outputs against ground truth and providing explanatory feedback, and human evaluation using time-series experts to score accuracy and quality with the same criteria.

**What it is taken as evidence of.** No construct is linked to it, so papers do not record a construct-level claim about what it indicates.

## Sources

**[SensorLLM: Aligning Large Language Models with Motion Sensors for Human Activity Recognition](https://aclanthology.org/2025.emnlp-main.19.pdf)**
> Observably analyzing and describing directional changes (e.g., upward, downward, stable) in sensor time-series segments over specified time intervals.

**[SensorLLM: Aligning Large Language Models with Motion Sensors for Human Activity Recognition](https://aclanthology.org/2025.emnlp-main.19.pdf) (as "Trend description generation")**
> The task of generating natural language text that describes the trends observed in sensor data, used to evaluate sensor data understanding.

**[ITFormer: Bridging Time Series and Natural Language for Multi-Modal QA with Large-Scale Multitask Dataset](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25av/wang25av.pdf) (as "Degradation trend inference")**
> The task of analyzing signal variations across multiple time periods to infer the trajectory of system degradation.

## Relationships

### Trend analysis →
- **LLM-as-a-judge** (measurements) — *measured_by*
  > GPT-4o rates the generated trend descriptions on a scale of 1 to 5 (with 5 being the highest) by comparing each output to ground truth and providing explanatory feedback.
  - [SensorLLM: Aligning Large Language Models with Motion Sensors for Human Activity Recognition](https://aclanthology.org/2025.emnlp-main.19.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > Human Evaluation. Five time-series experts (PhD students, postdocs, and academics) score accuracy and quality using the same criteria as GPT-4o, providing a human-centered perspective on the model’s outputs.
  - [SensorLLM: Aligning Large Language Models with Motion Sensors for Human Activity Recognition](https://aclanthology.org/2025.emnlp-main.19.pdf)
