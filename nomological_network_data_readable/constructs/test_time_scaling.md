# Test-time scaling
**Type:** Construct  
**Referenced in:** 3 papers  

## State of the Field

Based on the provided data, Test-time scaling is defined as the degree to which a model's performance improves with increased computational effort at inference time. This additional effort is operationalized through mechanisms such as using more iterations or samples. For example, one paper observes that "the performance gain of our approach becomes more pronounced with increasing iterations of MCTS" (VReST: Enhancing Reasoning in Large Vision-Language Models through Tree Search and Self-Reward Mechanism). The construct is framed as a reflection of the "efficiency of reasoning refinement." The available source material consistently discusses this concept in the context of multimodal tasks, with one paper noting that a method "exhibits a better test-time scaling law on multimodal reasoning tasks".

## Sources

**[VReST: Enhancing Reasoning in Large Vision-Language Models through Tree Search and Self-Reward Mechanism](https://aclanthology.org/2025.acl-long.199.pdf)**
> The degree to which a model's performance improves with increased computational effort during inference, such as more iterations or samples, reflecting the efficiency of reasoning refinement.

## Relationships

### Test-time scaling →
- **Chart generation** (behaviors tasks) — *causes*
  > Furthermore, the METAL framework exhibits the phenomenon of test-time scaling: its performance increases monotonically as the logarithm of computational budget grows from 29 to 213 tokens. (Section 1)
  - [METAL: A Multi-Agent Framework for Chart Generation with Test-Time Scaling](https://aclanthology.org/2025.acl-long.1452.pdf)
