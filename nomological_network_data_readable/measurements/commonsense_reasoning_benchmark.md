# Commonsense reasoning benchmark
**Type:** Measurement  
**Referenced in:** 9 papers  
**Also known as:** Commonsense Reasoning benchmark, Commonsense Benchmark, Commonsense reasoning benchmarks, Commonsense Reasoning Tasks  

## State of the Field

**What it is.** Across the definitions, the dominant framing is a composite suite of eight commonsense reasoning tasks or datasets used to evaluate model performance. Most descriptions enumerate BoolQ, PIQA, SIQA, HellaSwag, WinoGrande, ARC material, and OBQA, with the main variation being whether ARC appears as ARC-e plus ARC-c or simply ARC. Papers describe the suite as targeting reasoning about everyday situations, commonsense question answering and inference, and factual, physical, social, and scientific inference; some also note combined training with separate test evaluation, or that the training sets from the eight datasets are aggregated.

**What it is claimed to measure.** Across linked uses, papers primarily use this benchmark to measure Commonsense reasoning, and it is linked to one construct and one behavioral indicator overall. The prevailing claim is that papers evaluate on commonsense reasoning benchmarks or report performance on commonsense reasoning tasks, so the measurement claims converge mostly on that construct rather than spreading across many. A smaller line of work uses five component benchmarks, SIQA, PIQA, Arc-Easy, Arc-Challenge, and OBQA, to measure Instruction following.

**Space of uses.** Papers mostly position it as an evaluation suite. Some report zero-shot performance on the tasks, while others fine-tune on training data aggregated from the eight datasets and then evaluate on individual test sets; one description also says the benchmark has predefined training and testing datasets. One paper reports model performance on this benchmark alongside a zero-shot prompted version of MMLU, and no other measurement instrument is linked to it.

## Sources

**[RepLoRA: Reparameterizing Low-rank Adaptation via the Perspective of Mixture of Experts](https://raw.githubusercontent.com/mlresearch/v267/main/assets/truong25a/truong25a.pdf) (as "Commonsense Reasoning benchmark")**
> A collection of eight sub-tasks (BoolQ, PIQA, SIQA, HellaSwag, WinoGrande, ARC-e, ARC-c, OBQA) used to evaluate language models on reasoning about everyday situations, with combined training and individual test evaluation.

**[From Weight-Based to State-Based Fine-Tuning: Further Memory Reduction on LoRA with Parallel Control](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25au/zhang25au.pdf) (as "Commonsense Benchmark")**
> A composite evaluation suite assessing model performance on multiple tasks requiring commonsense reasoning, including BoolQ, PIQA, SIQA, HellaSwag, WinoGrande, ARC-e, ARC-c, and OBQA.

**[FouRA: Fourier Low-Rank Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/83960718b4d12f799985206f1b1cf00f-Paper-Conference.pdf) (as "Commonsense reasoning benchmarks")**
> A collection of benchmark tasks used to evaluate commonsense question answering and inference, including BoolQ, PIQA, SIQA, HellaSwag, WinoGrande, ARC, and OBQA.

**[DisLoRA: Task-specific Low-Rank Adaptation via Orthogonal Basis from Singular Value Decomposition](https://aclanthology.org/2025.emnlp-main.694.pdf) (as "Commonsense Reasoning Tasks")**
> A collection of eight commonsense reasoning datasets used for evaluating a model's ability in factual, physical, social, and scientific inference.

## Relationships

### → Commonsense reasoning benchmark
- **Commonsense reasoning** (constructs) — *measured_by*
  > “We also evaluate on Commonsense Reasoning benchmarks BoolQ, PIQA, SIQA, HellaSwag, WinoGrande, ARC and OBQA.”
  - [FouRA: Fourier Low-Rank Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/83960718b4d12f799985206f1b1cf00f-Paper-Conference.pdf)
- **Memory efficiency** (constructs) — *measured_by*
  > “We extend our experiments to larger backbones, specifically LLaMA2-7B ... and LLaMA3-8B ... on the ‘Commonsense Benchmark’.”
  - [From Weight-Based to State-Based Fine-Tuning: Further Memory Reduction on LoRA with Parallel Control](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25au/zhang25au.pdf)
- **Catastrophic forgetting** (behaviors tasks) — *measured_by*
  > we also evaluate on the commonsense reasoning QA task after training on the instruction-following datasets to assess knowledge forgetting. (Section 5.1)
  - [Weights-Rotated Preference Optimization for Large Language Models](https://aclanthology.org/2025.emnlp-main.1329.pdf)

### Associated with
- **BoolQ** (measurements)
  > Our benchmark contains eight commonsense reasoning datasets, including BoolQ [Clark et al., 2019], PIQA [Bisk et al., 2020], SIQA [Sap et al., 2019], HellaSwag [Zellers et al., 2019], WinoGrande [Sakaguchi et al., 2021], ARC-e, ARC-c [Clark et al., 2018], and OBQA [Mihaylov et al., 2018]. (Section 4.2)
  - [ReFT: Representation Finetuning for Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/75008a0fba53bf13b0bb3b7bff986e0e-Paper-Conference.pdf)
