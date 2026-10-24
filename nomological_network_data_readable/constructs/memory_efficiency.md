# Memory efficiency
**Type:** Construct  
**Referenced in:** 17 papers  

## State of the Field

Across the provided literature, Memory efficiency is consistently defined as the extent to which a model or training procedure reduces memory usage during either training or inference. A more detailed framing, present in several papers, specifies that this reduction targets not just model parameters but also memory consumed by "activation values and optimizer states" ("Subspace Optimization for Large Language Models with Convergence Guarantees"). The construct is operationalized by measuring and comparing the total GPU memory consumed during model execution on various tasks. Papers in this set use benchmarks such as CIFAR-100, GLUE, and a commonsense reasoning benchmark to assess memory efficiency, often reporting specific quantitative improvements like a "54% reduction in model memory" ("Parameter and Memory Efficient Pretraining via Low-rank Riemannian Optimization") or requiring "21G less memory" ("From Weight-Based to State-Based Fine-Tuning: Further Memory Reduction on LoRA with Parallel Control"). While most of the data focuses on measurement, one paper suggests a causal link, reporting that Abstraction causes Memory efficiency.

## Sources

**[Parameter and Memory Efficient Pretraining via Low-rank Riemannian Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/16fafdc5e8ab22780873d607ce4387a8-Paper-Conference.pdf)**
> The extent to which a model or training procedure reduces memory usage during training or inference.

## Relationships

### Memory efficiency →
- **CIFAR-100** (measurements) — *measured_by*
  > “We begin our evaluation with a toy example using the CIFAR-100 dataset (Krizhevsky et al., 2009) on the ViT model”
  - [From Weight-Based to State-Based Fine-Tuning: Further Memory Reduction on LoRA with Parallel Control](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25au/zhang25au.pdf)
- **GLUE** (measurements) — *measured_by*
  > “We further apply the parallel control approach to the GLUE benchmark (Wang, 2018)”
  - [From Weight-Based to State-Based Fine-Tuning: Further Memory Reduction on LoRA with Parallel Control](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25au/zhang25au.pdf)
- **Commonsense reasoning benchmark** (measurements) — *measured_by*
  > “We extend our experiments to larger backbones, specifically LLaMA2-7B ... and LLaMA3-8B ... on the ‘Commonsense Benchmark’.”
  - [From Weight-Based to State-Based Fine-Tuning: Further Memory Reduction on LoRA with Parallel Control](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25au/zhang25au.pdf)

### → Memory efficiency
- **Abstraction** (constructs) — *causes*
  > In contrast, many sequence learning models lack the ability to abstract, which leads to memory inefficiency and poor transfer.
  - [Building, Reusing, and Generalizing Abstract Representations from Concrete Sequences](https://proceedings.iclr.cc/paper_files/paper/2025/file/e46984e056185b21ddb1e7973c365f14-Paper-Conference.pdf)
