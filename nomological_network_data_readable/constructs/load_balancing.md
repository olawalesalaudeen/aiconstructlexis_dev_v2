# Load balancing
**Type:** Construct  
**Referenced in:** 3 papers  
**Also known as:** Routing balance, Load balance  

## State of the Field

Across the provided literature, load balancing is consistently defined as the even distribution of computational workload—variously described as tokens, expert utilization, or activation workload—across the experts in a Mixture-of-Experts (MoE) system. The shared goal is to prevent the overuse of some experts and underuse of others. One paper frames load imbalance as a notable issue that can lead to problems like "routing collapse" and "uneven computational distribution" ("ReMoE: Fully Differentiable Mixture-of-Experts with ReLU Routing"). This construct is commonly operationalized through the implementation of auxiliary loss functions during training. For example, different papers propose a "new load balance loss to ensure workload balance" ("TC-MoE: Augmenting Mixture of Experts with Ternary Expert Choice") or a function that "ensures balanced expert selection" ("HMoRA: Making LLMs More Effective with Hierarchical Mixture of LoRA Experts"). Another approach mentioned involves balancing it with sparsity control in a single formulation. One paper also reports a causal link, suggesting that ensuring load balancing can encourage more effective `Expert specialization`.

## Sources

**[ReMoE: Fully Differentiable Mixture-of-Experts with ReLU Routing](https://proceedings.iclr.cc/paper_files/paper/2025/file/94dc604e115237a7f4a758b3146cd976-Paper-Conference.pdf)**
> The property of a Mixture-of-Experts system to distribute its computational load (tokens) evenly across its available experts, preventing overuse of some and underuse of others.

**[HMoRA: Making LLMs More Effective with Hierarchical Mixture of LoRA Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/e43a33994a28f746dcfd53eb51ed3c2d-Paper-Conference.pdf) (as "Routing balance")**
> The degree to which expert utilization is evenly distributed across inputs to prevent overuse or underuse.

**[TC-MoE: Augmenting Mixture of Experts with Ternary Expert Choice](https://proceedings.iclr.cc/paper_files/paper/2025/file/bda8f7ac4c3ccc494b5206ee3fd92771-Paper-Conference.pdf) (as "Load balance")**
> The degree to which activation workload is distributed across experts in a balanced way during routing.

## Relationships

### Load balancing →
- **Expert specialization** (constructs) — *causes*
  > "To address these issues, we propose a novel auxiliary loss function that not only ensures balanced expert selection but also promotes greater certainty in routing results, thereby encouraging more effective specialization of experts across all layers."
  - [HMoRA: Making LLMs More Effective with Hierarchical Mixture of LoRA Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/e43a33994a28f746dcfd53eb51ed3c2d-Paper-Conference.pdf)
