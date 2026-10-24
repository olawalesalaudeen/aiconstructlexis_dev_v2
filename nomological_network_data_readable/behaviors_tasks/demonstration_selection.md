# Demonstration selection
**Type:** Behavior  
**Referenced in:** 6 papers  

## State of the Field

Demonstration selection is consistently defined as the process of choosing a subset of example input-output pairs to include in a model's prompt for in-context learning. Across the provided sources, this selection is based on criteria such as the examples' relevance, influence, or utility for a specific query. The pool of examples can include both labeled and, as one paper specifies, "pseudo-labeled demonstrations tailored specifically to the query" (MAPLE: Many-Shot Adaptive Pseudo-Labeling for In-Context Learning). The methods for operationalizing this selection vary; one approach utilizes "the concept of node influence" (MAPLE: Many-Shot Adaptive Pseudo-Labeling for In-Context Learning), while another describes a retriever that learns to select examples. In the latter framing, the goal is to "balance informativeness and factual consistency," and the quality of the selection is measured by its downstream effect, as the retriever is "rewarded for example selections that lead the LLM to produce the correct, updated output" (Dynamic Retriever for In-Context Knowledge Editing via Policy Optimization).

## Sources

**[MAPLE: Many-Shot Adaptive Pseudo-Labeling for In-Context Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25bo/chen25bo.pdf)**
> Choosing a subset of labeled or pseudo-labeled input-output pairs to include in the prompt for in-context learning, based on relevance or influence.
