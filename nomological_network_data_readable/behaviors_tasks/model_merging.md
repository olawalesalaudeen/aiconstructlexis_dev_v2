# Model merging
**Type:** Behavior  
**Referenced in:** 8 papers  
**Also known as:** LoRA merging  

## State of the Field

Across the provided literature, model merging is most commonly defined as the process of combining multiple, independently fine-tuned model checkpoints into a single model through weight-space operations. The stated goal is often to create an efficient multi-task model that inherits the capabilities of its components without retraining, or more generally, to produce a single "improved model" from multiple inputs. This process is described as combining models fine-tuned on "disparate tasks" to achieve multi-task proficiency. A smaller line of work defines the behavior more specifically as "LoRA merging," which involves combining multiple task-specific LoRA adapters into a unified adapter. Another variation frames model merging as a technique for continual learning, where merges are performed during the training process to preserve knowledge across different stages. The behavior is operationalized through specific tools like `mergekit7` which apply algorithms to model parameters. The performance of the resulting merged models is evaluated using benchmarks such as GLUE and the Hugging Face Open LLM Leaderboard.

## Sources

**[LiNeS: Post-training Layer Scaling Prevents Forgetting and Enhances Model Merging](https://proceedings.iclr.cc/paper_files/paper/2025/file/43ae0b566b802b2d00e525b672794b82-Paper-Conference.pdf)**
> Combining multiple fine-tuned checkpoints into a single model by weight-space operations.

**[Merging LoRAs like Playing LEGO: Pushing the Modularity of LoRA to Extremes Through Rank-Wise Clustering](https://proceedings.iclr.cc/paper_files/paper/2025/file/b54e0146a82945f01e69c2e3309ba925-Paper-Conference.pdf) (as "LoRA merging")**
> The observable process of combining multiple task-specific LoRA adapters into a single unified adapter.

## Relationships

### Model merging →
- **Task interference** (constructs) — *causes*
  > misalignment of MSU parameters when merging LoRAs can result in parameter interference.
  - [Merging LoRAs like Playing LEGO: Pushing the Modularity of LoRA to Extremes Through Rank-Wise Clustering](https://proceedings.iclr.cc/paper_files/paper/2025/file/b54e0146a82945f01e69c2e3309ba925-Paper-Conference.pdf)
- **Open LLM Leaderboard** (measurements) — *measured_by*
  > “For large-scale model evaluation, we utilized the LLM Leaderboard benchmark”
  - [CABS: Conflict-Aware and Balanced Sparsification for Enhancing Model Merging](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25x/yang25x.pdf)
- **Open LLM Leaderboard v2** (measurements) — *measured_by*
  > “we conducted a new set of experiments using the Open LLM Leaderboard 2”
  - [CABS: Conflict-Aware and Balanced Sparsification for Enhancing Model Merging](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25x/yang25x.pdf)
- **GLUE** (measurements) — *measured_by*
  > “For evaluating small-scale models, we utilized the GLUE benchmark”
  - [CABS: Conflict-Aware and Balanced Sparsification for Enhancing Model Merging](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25x/yang25x.pdf)
