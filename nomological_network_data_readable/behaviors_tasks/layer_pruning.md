# Layer pruning
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Structured pruning  

## State of the Field

Across the provided literature, layer pruning is most commonly described as the process of removing a subset of a model's layers, particularly decoder layers, to reduce its size and computational cost. The goal is often to achieve this reduction "without significantly degrading performance," as one paper notes ("Persistent Topological Features in Large Language Models"). This behavior is operationalized by truncating a model's architecture, such as a 32-layer LLaMa 7B model, with one study suggesting that "deeper decoder layers introduce redundancy in recommendation tasks" ("SLMRec: Distilling Large Language Models into Small for Sequential Recommendation"). A more specific variant, termed "structured pruning" in one paper, involves removing adapter layers according to predefined patterns like "EveryOther" or by their position ("Low", "Middle", and "High") ("Come Together, But Not Right Now: A Progressive Strategy to Boost Low-Rank Adaptation"). As an evaluation method, layer pruning is used as a downstream task to test pruning criteria. Furthermore, experiments involving both structured and unstructured layer pruning are used to measure the construct of "Robustness and stability" on tasks like visual texture classification.

## Sources

**[SLMRec: Distilling Large Language Models into Small for Sequential Recommendation](https://proceedings.iclr.cc/paper_files/paper/2025/file/58ab3d5ad04589543889118f80654279-Paper-Conference.pdf)**
> Removing decoder layers from an LLM and evaluating the resulting model's recommendation performance.

**[Come Together, But Not Right Now: A Progressive Strategy to Boost Low-Rank Adaptation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhuang25c/zhuang25c.pdf) (as "Structured pruning")**
> Removing selected adapter layers or blocks according to a predefined pattern such as alternating, low, middle, or high layers.

## Relationships

### Associated with
- **Pruning robustness** (constructs)
  > To systematically evaluate this property, we conduct both structured and unstructured pruning experiments. (Section 4.3)
  - [Come Together, But Not Right Now: A Progressive Strategy to Boost Low-Rank Adaptation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhuang25c/zhuang25c.pdf)
