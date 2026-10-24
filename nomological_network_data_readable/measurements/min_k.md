# Min-K%
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

Across the provided sources, Min-K% is consistently defined as a type of membership inference attack. The method operates by averaging the losses of the k% least likely tokens, which are those with the highest loss values. This technique is explicitly based on the assumption "that non-members contain more high-loss outliers" ("Context-Aware Membership Inference Attacks against Pre-trained Large Language Models"). As an instrument, Min-K% is used to measure the construct of `Privacy leakage`. The provided data also indicates a relationship between Min-K% and the "Min-K% method".

## Sources

**[Context-Aware Membership Inference Attacks against Pre-trained Large Language Models](https://aclanthology.org/2025.emnlp-main.370.pdf)**
> A membership inference attack that averages the losses of the k% least likely tokens (highest loss) under the assumption that non-members contain more high-loss outliers.
