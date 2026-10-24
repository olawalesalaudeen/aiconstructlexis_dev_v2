# Downstream task performance
**Type:** Behavior  
**Referenced in:** 18 papers  
**Also known as:** Downstream task evaluation, Downstream task solving, Task performance  

## State of the Field

**Space of definitions.** Across definitions, the dominant framing is observable performance on downstream tasks or benchmarks, usually supervised, after pre-training, continual growth, or fine-tuning. Papers describe success as strong, equivalent, or better performance, often stated as task accuracy or as how well outputs solve target evaluation problems; one source says that improvement in validation loss "transfers to an improvement in downstream task accuracy." A smaller line of work casts it more broadly as the overall quality of an ensemble's outputs on a benchmark.

**Variants.** Authors use several near-synonymous labels, including downstream task performance, downstream task evaluation, downstream task solving, and task performance. The settings range from representative downstream tests after continual growth, to fine-tuned tasks such as sentiment analysis or math, to ensemble benchmarks. Papers also study suites and domains including GLUE, GSM8K, ARC-Easy, and Indonesian benchmarks such as IndoCulture, and one paper refers specifically to arithmetic reasoning when linking this behavior to semantic consistency.

**Space of elicitation and scores.** Papers operationalize it with 21 measurement instruments. The most frequently linked are GSM8K, lm-evaluation-harness, AG News, ARC-Easy, and AlpacaEval, while other papers use additional benchmark suites and task datasets. Scoring is commonly reported as downstream task accuracy, finetune accuracy on a testing dataset, or an average score across 0-shot to 5-shot settings.

**What it is taken as evidence of.** Papers link it to 2 constructs, and the links do not use the same relation type or direction. It is reported as related to Generation diversity in work describing gains on the "Pareto front of task performance and diversity of model generations," and one paper claims a causal relationship from Semantic consistency to Downstream task performance, stating that increasing semantic consistency by filtering "does not degrade performance for arithmetic reasoning."

## Sources

**[LOIRE: LifelOng learning on Incremental data via pre-trained language model gRowth Efficiently](https://proceedings.iclr.cc/paper_files/paper/2025/file/03945380ca5af0dc80782d8e0b72a8d7-Paper-Conference.pdf)**
> Producing outputs that support strong performance on supervised language tasks after pre-training or continual growth.

**[The Sharpness Disparity Principle in Transformers for Accelerating Language Model Pre-Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25dl/wang25dl.pdf) (as "Downstream task evaluation")**
> The observable performance of a pre-trained model on a suite of specific, often supervised, tasks to assess its acquired capabilities.

**[Booster: Tackling Harmful Fine-tuning for Large Language Models via Attenuating Harmful Perturbation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7ac8a21e5a27e7ab31a5f42a0117bdb-Paper-Conference.pdf) (as "Downstream task solving")**
> The observable performance of the model on specific tasks like sentiment analysis or math after fine-tuning.

**[Balancing Act: Diversity and Consistency in Large Language Model Ensembles](https://proceedings.iclr.cc/paper_files/paper/2025/file/a5554e55d7a21e62d0d7a028ec0ea1c7-Paper-Conference.pdf) (as "Task performance")**
> The overall quality of an ensemble's outputs on a downstream benchmark or task, as reflected by how well it solves the target evaluation problems.

## Relationships

### Downstream task performance →
- **GSM8K** (measurements) — *measured_by*
  > We assess their impact on task performance, diversity of model generations, and computational requirements. Concretely, we compare MLE-based next token prediction and different IRL methods for fine-tuning LLMs on common benchmarks. ... We use the following datasets and subsets for ablation in the following sections: XSUM, GSM8k, TLDR, and WMT22.
  - [Imitating Language via Scalable Inverse Reinforcement Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/a5036c166e44b731f214f41813364d01-Paper-Conference.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > ...and on an aggregate of six downstream tasks using the EleutherAI LM Harness (Gao et al., 2023)... (Section 5)
  - [Training-Free Activation Sparsity in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f3f2ff9579ba6deeb89caa2fe1f0b99c-Paper-Conference.pdf)
- **GLUE** (measurements) — *measured_by*
  > “In Table 6, we list the performance on downstream tasks of GLUE and SAQuAD according to LIGO(Wang et al., 2023).”
  - [LOIRE: LifelOng learning on Incremental data via pre-trained language model gRowth Efficiently](https://proceedings.iclr.cc/paper_files/paper/2025/file/03945380ca5af0dc80782d8e0b72a8d7-Paper-Conference.pdf)
- **SST-2** (measurements) — *measured_by*
  > “For fine-tuning task, we consider SST2(Socher et al., 2013), AGNEWS(Zhang et al., 2015), GSM8K(Cobbe et al., 2021) and AlpacaEval (Li et al., 2023a) as the user fine-tuning task.”
  - [Booster: Tackling Harmful Fine-tuning for Large Language Models via Attenuating Harmful Perturbation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7ac8a21e5a27e7ab31a5f42a0117bdb-Paper-Conference.pdf)
- **AG News** (measurements) — *measured_by*
  > “For fine-tuning task, we consider SST2(Socher et al., 2013), AGNEWS(Zhang et al., 2015), GSM8K(Cobbe et al., 2021) and AlpacaEval (Li et al., 2023a) as the user fine-tuning task.”
  - [Booster: Tackling Harmful Fine-tuning for Large Language Models via Attenuating Harmful Perturbation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7ac8a21e5a27e7ab31a5f42a0117bdb-Paper-Conference.pdf)
- **AlpacaEval** (measurements) — *measured_by*
  > “For fine-tuning task, we consider SST2(Socher et al., 2013), AGNEWS(Zhang et al., 2015), GSM8K(Cobbe et al., 2021) and AlpacaEval (Li et al., 2023a) as the user fine-tuning task.”
  - [Booster: Tackling Harmful Fine-tuning for Large Language Models via Attenuating Harmful Perturbation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7ac8a21e5a27e7ab31a5f42a0117bdb-Paper-Conference.pdf)
- **ARC-Easy** (measurements) — *measured_by*
  > Figure 3: Models trained with 4k context length. Final performance (y-axis) on a set of downstream tasks... 4K context: arc easy
  - [nGPT: Normalized Transformer with Representation Learning on the Hypersphere](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7c12689a89e98a61bcaa65285a41b7c-Paper-Conference.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > Figure 3: Models trained with 4k context length. Final performance (y-axis) on a set of downstream tasks... hellaswag
  - [nGPT: Normalized Transformer with Representation Learning on the Hypersphere](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7c12689a89e98a61bcaa65285a41b7c-Paper-Conference.pdf)
- **WinoGrande** (measurements) — *measured_by*
  > Figure 3: Models trained with 4k context length. Final performance (y-axis) on a set of downstream tasks... winogrande
  - [nGPT: Normalized Transformer with Representation Learning on the Hypersphere](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7c12689a89e98a61bcaa65285a41b7c-Paper-Conference.pdf)
- **LAMBADA** (measurements) — *measured_by*
  > Figure 3: Models trained with 4k context length. Final performance (y-axis) on a set of downstream tasks... lambada
  - [nGPT: Normalized Transformer with Representation Learning on the Hypersphere](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7c12689a89e98a61bcaa65285a41b7c-Paper-Conference.pdf)
- **XSum** (measurements) — *measured_by*
  > We assess their impact on task performance, diversity of model generations, and computational requirements. Concretely, we compare MLE-based next token prediction and different IRL methods for fine-tuning LLMs on common benchmarks. ... We use the following datasets and subsets for ablation in the following sections: XSUM, GSM8k, TLDR, and WMT22.
  - [Imitating Language via Scalable Inverse Reinforcement Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/a5036c166e44b731f214f41813364d01-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks) — *correlates*
  > To connect loss scaling and downstream error prediction, we observe that average top-1 error decreases exponentially as a function of validation loss, which we formalize as a novel scaling law (Section 2.3).
  - [Language models scale reliably with over-training and on downstream tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/a91869936a63d814971b6423990ecf6e-Paper-Conference.pdf)
- **SQuAD v1.1** (measurements) — *measured_by*
  > “In Table 6, we list the performance on downstream tasks of GLUE and SAQuAD according to LIGO(Wang et al., 2023).”
  - [LOIRE: LifelOng learning on Incremental data via pre-trained language model gRowth Efficiently](https://proceedings.iclr.cc/paper_files/paper/2025/file/03945380ca5af0dc80782d8e0b72a8d7-Paper-Conference.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > We evaluate the downstream task accuracy of models derived from the methodology outlined in §2.3 using the following datasets: ARC-Easy (Clark et al., 2018), ARC-Challenge (Clark et al., 2018), BoolQ (Clark et al., 2019), COPA (Roemmele et al., 2011), HellaSwag (Zellers et al., 2019), LAMBADA (Paperno et al., 2016), PIQA (Bisk et al., 2020), WinoGrande (Sakaguchi et al., 2021), MMLU (Hendrycks et al., 2020), Jeopardy (Jeo, 2022), and Winograd (Levesque et al., 2012). (Section 3.1)
  - [Scaling Inference-Efficient Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bian25b/bian25b.pdf)
- **BoolQ** (measurements) — *measured_by*
  > We evaluate the downstream task accuracy of models derived from the methodology outlined in §2.3 using the following datasets: ARC-Easy (Clark et al., 2018), ARC-Challenge (Clark et al., 2018), BoolQ (Clark et al., 2019), COPA (Roemmele et al., 2011), HellaSwag (Zellers et al., 2019), LAMBADA (Paperno et al., 2016), PIQA (Bisk et al., 2020), WinoGrande (Sakaguchi et al., 2021), MMLU (Hendrycks et al., 2020), Jeopardy (Jeo, 2022), and Winograd (Levesque et al., 2012). (Section 3.1)
  - [Scaling Inference-Efficient Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bian25b/bian25b.pdf)
- **COPA** (measurements) — *measured_by*
  > We evaluate the downstream task accuracy of models derived from the methodology outlined in §2.3 using the following datasets: ARC-Easy (Clark et al., 2018), ARC-Challenge (Clark et al., 2018), BoolQ (Clark et al., 2019), COPA (Roemmele et al., 2011), HellaSwag (Zellers et al., 2019), LAMBADA (Paperno et al., 2016), PIQA (Bisk et al., 2020), WinoGrande (Sakaguchi et al., 2021), MMLU (Hendrycks et al., 2020), Jeopardy (Jeo, 2022), and Winograd (Levesque et al., 2012). (Section 3.1)
  - [Scaling Inference-Efficient Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bian25b/bian25b.pdf)
- **PIQA** (measurements) — *measured_by*
  > We evaluate the downstream task accuracy of models derived from the methodology outlined in §2.3 using the following datasets: ARC-Easy (Clark et al., 2018), ARC-Challenge (Clark et al., 2018), BoolQ (Clark et al., 2019), COPA (Roemmele et al., 2011), HellaSwag (Zellers et al., 2019), LAMBADA (Paperno et al., 2016), PIQA (Bisk et al., 2020), WinoGrande (Sakaguchi et al., 2021), MMLU (Hendrycks et al., 2020), Jeopardy (Jeo, 2022), and Winograd (Levesque et al., 2012). (Section 3.1)
  - [Scaling Inference-Efficient Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bian25b/bian25b.pdf)
- **MMLU** (measurements) — *measured_by*
  > We evaluate the downstream task accuracy of models derived from the methodology outlined in §2.3 using the following datasets: ARC-Easy (Clark et al., 2018), ARC-Challenge (Clark et al., 2018), BoolQ (Clark et al., 2019), COPA (Roemmele et al., 2011), HellaSwag (Zellers et al., 2019), LAMBADA (Paperno et al., 2016), PIQA (Bisk et al., 2020), WinoGrande (Sakaguchi et al., 2021), MMLU (Hendrycks et al., 2020), Jeopardy (Jeo, 2022), and Winograd (Levesque et al., 2012). (Section 3.1)
  - [Scaling Inference-Efficient Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bian25b/bian25b.pdf)
- **WSC** (measurements) — *measured_by*
  > We evaluate the downstream task accuracy of models derived from the methodology outlined in §2.3 using the following datasets: ARC-Easy (Clark et al., 2018), ARC-Challenge (Clark et al., 2018), BoolQ (Clark et al., 2019), COPA (Roemmele et al., 2011), HellaSwag (Zellers et al., 2019), LAMBADA (Paperno et al., 2016), PIQA (Bisk et al., 2020), WinoGrande (Sakaguchi et al., 2021), MMLU (Hendrycks et al., 2020), Jeopardy (Jeo, 2022), and Winograd (Levesque et al., 2012). (Section 3.1)
  - [Scaling Inference-Efficient Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bian25b/bian25b.pdf)
- **IndoCulture** (measurements) — *measured_by*
  > To assess the broader impact of safety fine-tuning on downstream performance, we also evaluated the fine-tuned models on a range of Indonesian benchmarks, including IndoMMLU (Koto et al., 2023), IndoCareer (Koto, 2025), IndoCulture (Koto et al., 2024), MAPS (Liu et al., 2024), COPAL-ID (Wibowo et al., 2024), and IndoCloze (Koto et al., 2022).
  - [IndoSafety: Culturally Grounded Safety for LLMs in Indonesian Languages](https://aclanthology.org/2025.emnlp-main.465.pdf)
- **COPAL-ID** (measurements) — *measured_by*
  > To assess the broader impact of safety fine-tuning on downstream performance, we also evaluated the fine-tuned models on a range of Indonesian benchmarks, including IndoMMLU (Koto et al., 2023), IndoCareer (Koto, 2025), IndoCulture (Koto et al., 2024), MAPS (Liu et al., 2024), COPAL-ID (Wibowo et al., 2024), and IndoCloze (Koto et al., 2022).
  - [IndoSafety: Culturally Grounded Safety for LLMs in Indonesian Languages](https://aclanthology.org/2025.emnlp-main.465.pdf)

### → Downstream task performance
- **Reward hacking** (behaviors tasks) — *causes*
  > One of the challenges of the alignment step is possible degradation of performance on downstream tasks, which can be attributed to reward hacking (Xu et al., 2024b). (Section 6.2)
  - [Sail into the Headwind: Alignment via Robust Rewards and Dynamic Labels against Reward Hacking](https://proceedings.iclr.cc/paper_files/paper/2025/file/c78f81a878a72566422f37279bca0fd0-Paper-Conference.pdf)

### Associated with
- **Generation diversity** (constructs)
  > “Our experiments demonstrate particularly strong gains for IRL on the Pareto front of task performance and diversity of model generations.”
  - [Imitating Language via Scalable Inverse Reinforcement Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/a5036c166e44b731f214f41813364d01-Paper-Conference.pdf)
- **Pile-CC** (measurements)
  > Fortunately, Liu et al. (2024) finds that validation loss on Pile-CC correlates most strongly with downstream performance across their evaluations. (Section 4.2)
  - [Domain2Vec: Vectorizing Datasets to Find the Optimal Data Mixture without Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bu/zhang25bu.pdf)
