# Direct Preference Optimization
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** Direct preference optimization, DPO  

## State of the Field

Across the provided literature, Direct Preference Optimization (DPO) is consistently characterized as a fine-tuning method or algorithm for aligning language models with preference data. A recurring point across definitions is that it operates by comparing preferred and dispreferred responses without an explicit reward modeling step. One paper frames it as an alternative to RLHF that "implicitly optimizes the same objective as RLHF but offers higher stability" (ComPO: Community Preferences for Language Model Personalization). The method is applied to a range of different goals across the surveyed work. For instance, some research uses DPO to "refine the reasoning capabilities" of models (TinyThinker: Distilling Reasoning through Coarse-to-Fine Knowledge Internalization with Self-Reflection). Other work employs it to shift model behavior toward moral or immoral actions, serving as a test of alignment robustness. It is also mentioned as a method for training community-personalized models.

## Sources

**[TinyThinker: Distilling Reasoning through Coarse-to-Fine Knowledge Internalization with Self-Reflection](https://aclanthology.org/2025.naacl-long.309.pdf)**
> A fine-tuning method used to shift model behavior toward moral or immoral actions by optimizing preferences, serving as a test of alignment robustness.

**[ComPO: Community Preferences for Language Model Personalization](https://aclanthology.org/2025.naacl-long.419.pdf) (as "Direct preference optimization")**
> A preference tuning method that optimizes language models by comparing preferred and dispreferred responses without requiring explicit reward modeling, used here to train community-personalized models.

**[Super(ficial)-alignment: Strong Models May Deceive Weak Models in Weak-to-Strong Generalization](https://proceedings.iclr.cc/paper_files/paper/2025/file/092359ce5cf60a80e882378944bf1be4-Paper-Conference.pdf) (as "DPO")**
> Direct Preference Optimization, an algorithm for aligning language models with preference data without an explicit reward modeling step.
