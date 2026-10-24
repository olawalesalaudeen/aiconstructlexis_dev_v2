# Expected calibration error
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** Estimated calibration error, Expected Calibration Error  

## State of the Field

Across the provided literature, Expected Calibration Error (ECE) is consistently defined as a metric that quantifies the discrepancy between a model's confidence and its actual accuracy. The definitions are highly aligned, with one paper specifying it as the "average difference between predicted confidence and actual accuracy across confidence bins" ("Towards Faithful Natural Language Explanations...") and another describing it as a tool to evaluate the "reliability of probabilistic detectors" ("MathTutorBench..."). A common application of this metric, as indicated by several papers, is to measure the construct of Faithfulness. Researchers use ECE to evaluate specific approaches, such as "probability-based methods," and to demonstrate the effects of interventions. For instance, one study reports that a particular technique "reduces Expected Calibration Error by approximately 55%" ("Towards Faithful Natural Language Explanations..."). The term "Estimated calibration error" is also used to refer to this metric in the provided sources.

## Sources

**[Preemptive Detection and Correction of Misaligned Actions in LLM Agents](https://aclanthology.org/2025.emnlp-main.12.pdf) (as "Estimated calibration error")**
> Metric that quantifies the discrepancy between a model's confidence and its actual accuracy, used to evaluate the reliability of probabilistic detectors.

**[Calibrating LLM Confidence by Probing Perturbed Representation Stability](https://aclanthology.org/2025.emnlp-main.530.pdf) (as "Expected Calibration Error")**
> A metric that measures the average difference between predicted confidence and actual accuracy across confidence bins.

## Relationships

### → Expected calibration error
- **Calibration** (constructs) — *measured_by*
  > "Table 6 shows that the expected calibration error (He et al., 2022) is reduced when NASA is applied to Mistral."
  - [Correcting Negative Bias in Large Language Models through Negative Attention Score Alignment](https://aclanthology.org/2025.naacl-long.503.pdf)
