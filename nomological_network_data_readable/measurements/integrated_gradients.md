# Integrated gradients
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** Integrated Gradients, Integrated-Gradient  

## State of the Field

Across the provided literature, Integrated Gradients is consistently defined as a gradient-based attribution method used to determine the importance of input features for a model's prediction. The common operational definition involves calculating this importance by integrating or accumulating gradients along a path from a baseline input to the actual input. It is frequently employed as a model-dependent interpretability tool, for example, to identify words that contribute most to a text classification. Several papers use it as a baseline for comparison, with one describing it as a "stronger baseline" (Towards Interpreting Visual Information Processing in Vision-Language Models) and others situating it alongside methods like Shapley values and attention weights. While most sources frame it as a general feature attribution technique, a single paper offers a distinct perspective, describing it as a "more accurate (though more computationally expensive) approximation of causal effects" (Sparse Feature Circuits: Discovering and Editing Interpretable Causal Graphs in Language Models).

## Sources

**[Sparse Feature Circuits: Discovering and Editing Interpretable Causal Graphs in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/3ba4d47a83e498c2b1a0868cba20f6de-Paper-Conference.pdf)**
> A method for attributing a model's prediction to its input features, used here as a more accurate (though more computationally expensive) approximation of causal effects than attribution patching.

**[Towards Interpreting Visual Information Processing in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/900fb3439e4968df79a6f2bfedec49cd-Paper-Conference.pdf) (as "Integrated Gradients")**
> An attribution method used as a baseline to identify input tokens that are most important for a model's prediction by integrating gradients along a path from a baseline to the actual input.

**[JoPA: Explaining Large Language Model's Generation via Joint Prompt Attribution](https://aclanthology.org/2025.acl-long.1074.pdf) (as "Integrated-Gradient")**
> A gradient-based attribution method that calculates feature importance by integrating gradients along the path from a baseline input to the actual input.
