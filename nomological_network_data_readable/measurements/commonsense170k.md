# Commonsense170K
**Type:** Measurement  
**Referenced in:** 21 papers  
**Also known as:** COMMONSENSE170K, Common-sense170K, CSR-170k, Commonsense-170K, CSR170K, Commonsense170k  

## State of the Field

**What it is.** Most papers treat Commonsense170K as a large supervised fine-tuning dataset for commonsense reasoning, often described as a combined collection or mixture of eight commonsense reasoning datasets. Definitions commonly present it as training data built from tasks such as BoolQ, PIQA, SIQA, HellaSwag, WinoGrande, ARC-Easy or ARC-Challenge, and OpenbookQA, while some papers instead call it a composite benchmark or evaluation suite and describe it as used for both training and evaluation. One paper further specifies a train split of 170020 samples and a validation split of 400 samples.

**What it is claimed to measure.** Papers use it mainly to measure commonsense reasoning: it is linked to 1 construct, Commonsense reasoning, and papers describe it as a comprehensive collection of commonsense reasoning questions or a commonsense reasoning benchmark. Its measurement claims are concentrated rather than spread widely, with 1 linked behavioral indicator, Commonsense question answering, which one paper also reports it as measuring.

**Space of uses.** Most papers use it as the fine-tuning dataset in commonsense experiments, then test models on downstream tasks or on the component datasets' test sets individually. Some papers position it as combined training data before downstream benchmarking, while others describe it more directly as a benchmark or evaluation suite. It has 1 linked measurement instrument, BoolQ, and that link appears as a related component dataset within the larger collection.

## Sources

**[QuanTA: Efficient High-Rank Fine-Tuning of LLMs with Quantum-Informed Tensor Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/a7c17115db36193f6b83b71b0fe1d416-Paper-Conference.pdf) (as "COMMONSENSE170K")**
> A training dataset of commonsense reasoning questions used to fine-tune a single model before evaluation on downstream commonsense benchmarks.

**[SPAM: Spike-Aware Adam with Momentum Reset for Stable LLM Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/7a70ad3d9c704fb9b81b5c69eda722dc-Paper-Conference.pdf)**
> A large-scale dataset for supervised fine-tuning focused on commonsense reasoning tasks.

**[DoMIX: An Efficient Framework for Exploiting Domain Knowledge in Fine-Tuning](https://aclanthology.org/2025.acl-long.710.pdf) (as "Common-sense170K")**
> A large training dataset for commonsense reasoning, constructed from eight different subtasks, used for fine-tuning models.

**[SAN: Hypothesizing Long-Term Synaptic Development and Neural Engram Mechanism in Scalable Model’s Parameter-Efficient Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dai25e/dai25e.pdf) (as "CSR-170k")**
> Commonsense Reasoning 170k, a language evaluation suite containing multiple commonsense reasoning datasets used to assess LLM performance on commonsense question answering tasks.

**[LIFT the Veil for the Truth: Principal Weights Emerge after Rank Reduction for Reasoning-Focused Supervised Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25ba/liu25ba.pdf) (as "Commonsense-170K")**
> Dataset used for fine-tuning and evaluating commonsense reasoning across multiple tasks such as BoolQ, PIQA, SIQA, HellaSwag, Wino, ARC-e, ARC-c, and OBQA.

**[SparseLoRA: Accelerating LLM Fine-Tuning with Contextual Sparsity](https://raw.githubusercontent.com/mlresearch/v267/main/assets/khaki25a/khaki25a.pdf) (as "CSR170K")**
> A composite benchmark for commonsense reasoning, comprising eight different datasets including BoolQ, PIQA, SIQA, HellaSwag, WinoGrande, ARC-Easy, ARC-Challenge, and OpenbookQA.

## Relationships

### → Commonsense170K
- **Commonsense reasoning** (constructs) — *measured_by*
  > Specifically, we leverage Commonsense170K (Hu et al., 2023), which is a combination of eight commonsense reasoning datasets... for both training and evaluation. (Section 5)
  - [LLM Braces: Straightening Out LLM Predictions with Relevant Sub-Updates](https://aclanthology.org/2025.acl-long.393.pdf)
- **Instruction fine-tuning** (behaviors tasks) — *measured_by*
  > we fine-tune LLaMA2-7B on Commonsense170K (Hu et al., 2023)
  - [SPAM: Spike-Aware Adam with Momentum Reset for Stable LLM Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/7a70ad3d9c704fb9b81b5c69eda722dc-Paper-Conference.pdf)
