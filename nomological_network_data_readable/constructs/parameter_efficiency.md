# Parameter efficiency
**Type:** Construct  
**Referenced in:** 30 papers  
**Also known as:** Parametric efficiency  

## State of the Field

Across the surveyed literature, parameter efficiency is predominantly defined as a model's ability to achieve high performance while updating a minimal fraction of its parameters during fine-tuning. This is frequently operationalized through methods like low-rank adaptations and modular designs, with some studies reporting updates to as little as "less than 1% of the... model parameters" ("Pushing Mixture of Experts to the Limit: Extremely Parameter Efficient MoE for Instruction Tuning"). The construct is measured by assessing performance on benchmarks like GLUE and SuperGLUE, where a method might achieve "comparable performance... while using only half the parameters" of another approach ("SSMLoRA: Enhancing Low-Rank Adaptation with State Space Model"). A less common framing expands the concept beyond fine-tuning to include overall model size for "efficient deployment on memory-constrained devices" ("FlexiGPT: Pruning and Extending Large Language Models with Low-Rank Weight Sharing"). A single paper uses the term "parametric efficiency" to refer to a smaller model's performance when augmented with non-parametric techniques like retrieval. Parameter efficiency is often discussed in relation to a model's "expressive power," suggesting a potential trade-off. Some work also proposes that integrating mechanisms for relational reasoning can lead to gains in parameter efficiency.

## Sources

**[Breaking Physical and Linguistic Borders: Multilingual Federated Prompt Tuning for Low-Resource Languages](https://proceedings.iclr.cc/paper_files/paper/2024/file/3e9034dd5420660d86c8c360c35a895e-Paper-Conference.pdf)**
> The property of a model to achieve high performance while updating a minimal number of parameters during fine-tuning, often through low-rank or modular designs.

**[Scaling Retrieval-Based Language Models with a Trillion-Token Datastore](https://proceedings.neurips.cc/paper_files/paper/2024/file/a5d8aba27dfef4e849e8cb03fb87a954-Paper-Conference.pdf) (as "Parametric efficiency")**
> The model's performance relative to its number of parameters, particularly the ability of a smaller model to achieve high performance through non-parametric means like retrieval.

## Relationships

### Parameter efficiency →
- **Multi-task ability** (constructs) — *causes*
  > “Our methods explicitly segregate shared and proprietary skills and effectively ensure parameter efficiency in multi-task learning under equivalent training settings.”
  - [Customizable Combination of Parameter-Efficient Modules for Multi-Task Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/0a692a24dbc744fca340b9ba33bc6522-Paper-Conference.pdf)
- **Prompt decomposition** (behaviors tasks) — *causes*
  > “Compared to [12], our structured decomposition enables more regulated and harmonious parameter updates, thereby enhancing parameter efficiency and facilitating the extraction of general knowledge more effectively.”
  - [Decomposed Prompt Decision Transformer for Efficient Unseen Task Generalization](https://proceedings.neurips.cc/paper_files/paper/2024/file/de18052eb17cce56554a9637dd5aadba-Paper-Conference.pdf)
- **GLUE** (measurements) — *measured_by*
  > "Our method achieves comparable performance to LoRA on the General Language Understanding Evaluation (GLUE) benchmark while using only half the parameters."
  - [SSMLoRA: Enhancing Low-Rank Adaptation with State Space Model](https://aclanthology.org/2025.naacl-long.230.pdf)
- **SuperGLUE** (measurements) — *measured_by*
  > "To further evaluate our approach, we extended our experiments to the more challenging SuperGLUE benchmark"
  - [SSMLoRA: Enhancing Low-Rank Adaptation with State Space Model](https://aclanthology.org/2025.naacl-long.230.pdf)

### → Parameter efficiency
- **Multi-task ability** (constructs) — *causes*
  > As a result, we argue that adopting both task-common skills learning and task-specific skills learning as a paradigm constitutes a robust strategy for achieving parameter efficiency in adapting multiple tasks. (Section 3.3.3)
  - [Customizable Combination of Parameter-Efficient Modules for Multi-Task Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/0a692a24dbc744fca340b9ba33bc6522-Paper-Conference.pdf)
- **Prompt decomposition** (behaviors tasks) — *causes*
  > Our structured decomposition enables more regulated and harmonious parameter updates, thereby enhancing parameter efficiency and facilitating the extraction of general knowledge more effectively.
  - [Decomposed Prompt Decision Transformer for Efficient Unseen Task Generalization](https://proceedings.neurips.cc/paper_files/paper/2024/file/de18052eb17cce56554a9637dd5aadba-Paper-Conference.pdf)
- **Relational reasoning** (constructs) — *causes*
  > Our results demonstrate that integrating explicit relational computational mechanisms into the Transformer architecture leads to significant performance gains in terms of data efficiency and parameter efficiency. (Abstract)
  - [Disentangling and Integrating Relational and Sensory Information in Transformer Architectures](https://raw.githubusercontent.com/mlresearch/v267/main/assets/altabaa25a/altabaa25a.pdf)

### Associated with
- **Expressive power** (constructs)
  > While low-rank models achieve both parameter and memory efficiency, as discussed earlier, they do not perform well in general [47, 59]. ... This is because neural networks often exhibit full-rank structure in the weights and imposing low-rank restrictions could significantly limit their representation power. (Section 1)
  - [SLTrain: a sparse plus low rank approach for parameter and memory efficient pretraining](https://proceedings.neurips.cc/paper_files/paper/2024/file/d63cf0622eed012a17fe88fced64dcb8-Paper-Conference.pdf)
- **Instruction fine-tuning** (behaviors tasks)
  > "LoRA is a highly effective strategy for finetuning large pretrained models"
  - [Efficient Learning with Sine-Activated Low-Rank Matrices](https://proceedings.iclr.cc/paper_files/paper/2025/file/112d8e0c7563de6e3408b49a09b4d8a3-Paper-Conference.pdf)
