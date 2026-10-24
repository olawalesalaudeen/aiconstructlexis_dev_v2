# Preference pair construction
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

Based on the provided data, preference pair construction is a behavior centered on creating training data specifically for preference optimization. The single source paper, "HS-STaR: Hierarchical Sampling for Self-Taught Reasoners via Difficulty Estimation and Budget Reallocation", defines and operationalizes this process as the pairing of correct and incorrect responses. This method is used to build a paired dataset, which the paper formally represents as `Dpairs t = {(scorr i , sincorr i )}`. The explicit procedure described is to "construct Dpairs t by pairing correct and incorrect responses." The provided literature does not specify any relationships this behavior has with other constructs or tasks.

## Sources

**[HS-STaR: Hierarchical Sampling for Self-Taught Reasoners via Difficulty Estimation and Budget Reallocation](https://aclanthology.org/2025.emnlp-main.282.pdf)**
> Creating training data by pairing correct and incorrect responses for preference optimization.
