# Tiny ImageNet
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** TinyImageNet, Tiny-ImageNet  

## State of the Field

**What it is.** Across definitions, the common framing is an image classification dataset or benchmark. Papers variously describe it as a smaller version of ImageNet used for faster experimentation, as a benchmark for evaluating automated accuracy prediction across shifted test sets, and as a dataset used both as an adversarial fine-tuning source and as a primary evaluation dataset.

**What it is claimed to measure.** Papers link it to one behavioral indicator, image classification, and no constructs are linked to it. In the recorded relationships, the measurement claims therefore concentrate on image classification rather than spreading across multiple constructs or behaviors.

**Space of uses.** Papers use it in several experimental roles rather than one fixed protocol. It appears alongside CIFAR10, CIFAR100, and Food-101 in image classification evaluations, is used "for computational reasons" in one study, is used on "synthetic shifted datasets of TinyImageNet" for correlation comparison, and is also used as the source of adversarial samples for fine-tuning before evaluation across multiple datasets, including Tiny-ImageNet itself. No other measurement instrument is linked to it.

## Sources

**[Energy-based Automated Model Evaluation](https://proceedings.iclr.cc/paper_files/paper/2024/file/5ef1df239d6640a27dd6ed9a59f518c9-Paper-Conference.pdf) (as "TinyImageNet")**
> An image classification benchmark used to evaluate automated accuracy prediction across shifted test sets.

**[Repeated Random Sampling for Minimizing the Time-to-Accuracy of Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/68b8d2bc77268facfc75a78782da9559-Paper-Conference.pdf)**
> A smaller version of the ImageNet dataset used for faster experimentation, particularly for computationally intensive methods like dataset distillation.

**[Text-Guided Attention is All You Need for Zero-Shot Robustness in Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/aec2dfc4f5e19acf05c15587c889dbc4-Paper-Conference.pdf) (as "Tiny-ImageNet")**
> A 200-class image classification dataset used as the adversarial fine-tuning source dataset and primary evaluation dataset.

## Relationships

### → Tiny ImageNet
- **Image classification** (behaviors tasks) — *measured_by*
  > We evaluate the method on three image classification datasets: CIFAR-100 (Krizhevsky et al., 2009), Food-101 (Bossard et al., 2014), and Tiny-Imagenet (mn-moustafa, 2017). (Section 6)
  - [Towards Infinite-Long Prefix in Transformer](https://aclanthology.org/2025.emnlp-main.563.pdf)
