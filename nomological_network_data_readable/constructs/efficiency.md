# Efficiency
**Type:** Construct  
**Referenced in:** 27 papers  
**Also known as:** Cost-efficiency, Efficient learning, Optimality  

## State of the Field

Across the surveyed literature, the prevailing usage of efficiency refers to the property of achieving strong performance while reducing computational or memory costs during training and inference. Papers operationalize this construct by measuring a range of metrics, including inference time, GFLOPs, the number of trainable parameters, memory usage, and data or API call costs. For example, one study notes its approach is "2x faster and 1.8x cheaper" ("Diversify-verify-adapt: Efficient and Robust Retrieval-Augmented Ambiguous Question Answering"), while another focuses on minimizing "training time and data costs" for model editing ("BalancEdit: Dynamically Balancing the Generality-Locality Trade-off in Multi-modal Model Editing"). The provided data also indicates that `LLM-based evaluation` is used as a measurement instrument for efficiency. A smaller line of work presents more specialized framings. One paper introduces "Cost-efficiency" to explicitly link system performance to monetary cost. Another defines "Efficient learning" as an agent's capacity for "rapid learning from a small amount of data" ("Agent Workflow Memory"). A third perspective, "Optimality," considers efficiency as part of achieving the "most efficient solutions" ("Position: We Need An Algorithmic Understanding of Generative AI"). The construct of efficiency is also studied in relation to `Safety`.

## Sources

**[Megalodon: Efficient LLM Pretraining and Inference with Unlimited Context Length](https://proceedings.neurips.cc/paper_files/paper/2024/file/840abfadd04c967feaa2a49aba94a32d-Paper-Conference.pdf)**
> The latent property of achieving strong performance with reduced computation or memory during training and inference.

**[Demystifying Cost-Efficiency in LLM Serving over Heterogeneous GPUs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jiang25c/jiang25c.pdf) (as "Cost-efficiency")**
> The relationship between the performance of an LLM serving system, such as throughput or latency, and its associated monetary cost.

**[Agent Workflow Memory](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25bx/wang25bx.pdf) (as "Efficient learning")**
> The capacity of an agent to rapidly improve performance with minimal experience, achieving high success rates after only a small number of examples.

**[Position: We Need An Algorithmic Understanding of Generative AI](https://raw.githubusercontent.com/mlresearch/v267/main/assets/eberle25a/eberle25a.pdf) (as "Optimality")**
> The degree to which a model's inferred procedure achieves a solution in an efficient or best-possible way.

## Relationships

### Efficiency →
- **LLM-as-a-judge** (measurements) — *measured_by*
  > For relevance rate, we partition the prediction into steps and determine if it is relevant by GPT-4o. For reflection quality, we prompt GPT-4o to identify the reflection steps by common indicators and judge the validity of the reflection. (Figure 6)
  - [MME-CoT: Benchmarking Chain-of-Thought in Large Multimodal Models for Reasoning Quality, Robustness, and Efficiency](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jiang25n/jiang25n.pdf)

### Associated with
- **Robustness** (constructs)
  > Assume a LoRA fine-tuning process is stable and efficient (Definitions 3-4) with γ[η] = γ∗. The process is considered robust with respect to the learning rates...
  - [Beyond Zero Initialization: Investigating the Impact of Non-Zero Initialization on LoRA Fine-Tuning Dynamics](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25bm/li25bm.pdf)
