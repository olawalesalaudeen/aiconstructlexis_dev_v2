# MATH10K
**Type:** Measurement  
**Referenced in:** 10 papers  
**Also known as:** Math10K, MATH-10K  

## State of the Field

Across the provided literature, MATH10K is consistently characterized as a dataset used to fine-tune large language models for arithmetic reasoning. It is widely used to operationalize and assess the construct of 'Mathematical reasoning', with papers specifically referencing 'arithmetic reasoning' and 'math problem-solving'. The dataset is defined as containing 'math word problems' and is described in some sources as a 'composite dataset' that combines multiple benchmarks. For instance, one paper notes it includes GSM8K, MAWPS, and SVAMP, while another states it comprises 'seven arithmetic reasoning tasks'. The prevailing usage pattern involves fine-tuning a model on MATH10K before assessing its performance on separate, downstream math benchmarks. While its primary role is for fine-tuning, one paper also suggests it can be used for evaluation. Overall, the data presents MATH10K as a resource for training models on mathematical tasks, rather than as a direct evaluation benchmark itself.

## Sources

**[QuanTA: Efficient High-Rank Fine-Tuning of LLMs with Quantum-Informed Tensor Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/a7c17115db36193f6b83b71b0fe1d416-Paper-Conference.pdf)**
> A training dataset of arithmetic reasoning problems used to fine-tune a single model before evaluation on downstream math benchmarks.

**[Learning Distribution-wise Control in Representation Space for Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/deng25a/deng25a.pdf) (as "Math10K")**
> Training dataset combining multiple arithmetic reasoning benchmarks, used to train models on mathematical problem solving.

**[LIFT the Veil for the Truth: Principal Weights Emerge after Rank Reduction for Reasoning-Focused Supervised Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25ba/liu25ba.pdf) (as "MATH-10K")**
> Dataset for arithmetic reasoning containing math word problems used to fine-tune and evaluate models on tasks like GSM8K, MultiArith, and SVAMP.

## Relationships

### → MATH10K
- **Mathematical reasoning** (constructs) — *measured_by*
  > we follow the experimental setup in Hu et al. [2023] and finetune LLaMA-1 7B and 13B on a combined dataset of seven arithmetic reasoning tasks with LM-generated chain-of-thought steps (MATH10K) (Section 4.3)
  - [ReFT: Representation Finetuning for Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/75008a0fba53bf13b0bb3b7bff986e0e-Paper-Conference.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > "For math problem-solving, we fine-tune these models on the Math10K dataset"
  - [Sketch to Adapt: Fine-Tunable Sketches for Efficient LLM Adaptation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bs/zhang25bs.pdf)
