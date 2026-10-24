# Pre-training data detection
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Training data detection, Pretraining data detection, Copyrighted book detection  

## State of the Field

**Space of definitions.** Most papers treat pre-training data detection as a seen versus unseen text classification task: given a text sample, sentence, or sequence, the method decides whether that text was included in the model's pretraining or training data. The prevailing success criterion is separating training from non-training text, and one definition makes this explicit as analyzing model output statistics to find a scoring function that best separates the two classes. A narrower application uses the same behavior for detecting whether excerpts from copyrighted books were included, and a smaller line of work studies the task with controllable FDR.

**Variants.** Papers use closely related names for the behavior, including pre-training data detection, pretraining data detection, and training data detection. The task is studied at different text granularities, from individual sentences to text sequences and more general samples, and the most specific domain variant is copyrighted book detection. Some work also studies harder settings where seen and unseen samples have high n-gram overlap.

**Space of elicitation and scores.** Papers link the behavior to 6 instruments overall. The most frequent named links are WikiMIA, Membership inference attack, MIMIR, BookMIA, and BookTection, with 1 other instrument also linked. Among the instruments that measure it directly, papers mostly use benchmark datasets: WikiMIA is the most common and is described as a temporal MIA dataset built from data created before and after model training for gold truth detection, MIMIR is used as a harder benchmark with high n-gram overlap between seen and unseen text, and BookMIA and BookTection also appear as evaluation datasets. Papers describe the link to Membership inference attack as related rather than as measurement.

**What it is taken as evidence of.** Papers connect the behavior to 3 constructs rather than treating it as evidence of only one, with Memorization the most recurrent link. One paper claims a causal relationship from Memorization to Pre-training data detection, stating that memory effects on training data are a reason detection algorithms are effective, and another reports Memorization as related to the task in the context of memorized private information being vulnerable to data extraction. Smaller lines of work relate Overfitting to the task, describing effectiveness as closely tied to memorization or overfitting, and relate the task to Privacy preservation as a way of assessing privacy risks.

## Sources

**[Min-K%++: Improved Baseline for Pre-Training Data Detection from Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a2e3b4132ab2e0b7a21e6e75da7f91a9-Paper-Conference.pdf)**
> The observable task of determining whether a given text sample was part of a large language model's pre-training corpus by analyzing the model's output statistics.

**[A Statistical Approach for Controlled Training Data Detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/c859b99b5d717c9035e79d43dfd69435-Paper-Conference.pdf) (as "Training data detection")**
> The observable task of classifying a given text sample as either having been part of the model's training set or not.

**[Infilling Score: A Pretraining Data Detection Algorithm for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5709163243753c9c9ab7f4b4e5a8766d-Paper-Conference.pdf) (as "Pretraining data detection")**
> The observable task of classifying whether a given text sequence was included in a language model's pretraining dataset.

**[Fine-tuning can Help Detect Pretraining Data from Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/98cda3e39e4ca2da449092a99c485e1a-Paper-Conference.pdf) (as "Copyrighted book detection")**
> The specific application of pretraining data detection to identify excerpts from copyrighted books within the model's training data.

## Relationships

### Pre-training data detection →
- **WikiMIA** (measurements) — *measured_by*
  > To facilitate this study, we introduce a dynamic benchmark WIKIMIA that uses data created before and after model training to support gold truth detection. (Abstract)
  - [Detecting Pretraining Data from Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/e32ad85fa27be4a9868d55703f01323e-Paper-Conference.pdf)
- **MIMIR** (measurements) — *measured_by*
  > We focus on two benchmarks (and the only two to our knowledge) for pre-training data detection, WikiMIA (Shi et al., 2024) and MIMIR (Duan et al., 2024).
  - [Min-K%++: Improved Baseline for Pre-Training Data Detection from Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a2e3b4132ab2e0b7a21e6e75da7f91a9-Paper-Conference.pdf)
- **Min-K% Prob** (measurements) — *measured_by*
  > MIN-K% PROB can also detect potential copyright infringement in training data, as we show in this section. (Section 5)
  - [Detecting Pretraining Data from Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/e32ad85fa27be4a9868d55703f01323e-Paper-Conference.pdf)
- **LOSS** (measurements) — *measured_by*
  > LOSS (Yeom et al., 2018), which uses the auto-regressive loss of a sample to determine whether it has been seen during training; (Section 5.1)
  - [A Statistical Approach for Controlled Training Data Detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/c859b99b5d717c9035e79d43dfd69435-Paper-Conference.pdf)
- **Min-K% method** (measurements) — *measured_by*
  > MinK% (Shi et al., 2023), which takes the average loss of the top k% tokens with the highest loss as the basis for detection (Section 5.1)
  - [A Statistical Approach for Controlled Training Data Detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/c859b99b5d717c9035e79d43dfd69435-Paper-Conference.pdf)
- **Zlib** (measurements) — *measured_by*
  > methods that compare a sample’s loss to its zlib compression entropy (Zlib (Carlini et al., 2021)) (Section 5.1)
  - [A Statistical Approach for Controlled Training Data Detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/c859b99b5d717c9035e79d43dfd69435-Paper-Conference.pdf)
- **Lowercase** (measurements) — *measured_by*
  > methods that compare a sample’s loss to... its loss after lowercasing (Lowercase (Carlini et al., 2021)) (Section 5.1)
  - [A Statistical Approach for Controlled Training Data Detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/c859b99b5d717c9035e79d43dfd69435-Paper-Conference.pdf)
- **Data contamination** (constructs) — *causes*
  > pretraining data detection attacks are becoming increasingly important as they can reveal whether a model has been trained on potentially sensitive data and prevent evaluation data contamination (Jiang et al., 2024; Yang et al., 2023).
  - [Infilling Score: A Pretraining Data Detection Algorithm for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5709163243753c9c9ab7f4b4e5a8766d-Paper-Conference.pdf)
- **BookTection** (measurements) — *measured_by*
  > To verify the effectiveness of detection methods, we employ four common benchmark datasets for evaluations, including WikiMIA (Shi et al., 2024), ArXivTection (Duarte et al., 2024), BookTection (Duarte et al., 2024) BookMIA (Shi et al., 2024) and Pile (Maini et al., 2024). (Section 4.1)
  - [Fine-tuning can Help Detect Pretraining Data from Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/98cda3e39e4ca2da449092a99c485e1a-Paper-Conference.pdf)
- **BookMIA** (measurements) — *measured_by*
  > To verify the effectiveness of detection methods, we employ four common benchmark datasets for evaluations, including WikiMIA (Shi et al., 2024), ArXivTection (Duarte et al., 2024), BookTection (Duarte et al., 2024) BookMIA (Shi et al., 2024) and Pile (Maini et al., 2024). (Section 4.1)
  - [Fine-tuning can Help Detect Pretraining Data from Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/98cda3e39e4ca2da449092a99c485e1a-Paper-Conference.pdf)
- **The Pile** (measurements) — *measured_by*
  > To verify the effectiveness of detection methods, we employ four common benchmark datasets for evaluations, including WikiMIA (Shi et al., 2024), ArXivTection (Duarte et al., 2024), BookTection (Duarte et al., 2024) BookMIA (Shi et al., 2024) and Pile (Maini et al., 2024). (Section 4.1)
  - [Fine-tuning can Help Detect Pretraining Data from Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/98cda3e39e4ca2da449092a99c485e1a-Paper-Conference.pdf)

### → Pre-training data detection
- **Memorization** (constructs) — *causes*
  > The powerful learning capabilities of LLMs often lead to noticeable memory effects on training data. This characteristic is a key reason why pre-training data detection algorithms are effective (Carlini et al., 2021; Tirumala et al., 2022). (Section 3.5)
  - [Identifying Pre-training Data in LLMs: A Neuron Activation-Based Detection Framework](https://aclanthology.org/2025.emnlp-main.946.pdf)

### Associated with
- **Membership inference attack** (measurements)
  > Pre-training data detection can be considered a special case of Membership Inference Attack (MIA) (Shokri et al., 2017): the goal is to infer whether a given input has been used for training a target LLM
  - [Min-K%++: Improved Baseline for Pre-Training Data Detection from Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a2e3b4132ab2e0b7a21e6e75da7f91a9-Paper-Conference.pdf)
- **Privacy preservation** (constructs)
  > Training data detection (TDD) is commonly employed to assess privacy risks in machine learning models (Murakonda & Shokri, 2020).
  - [TDDBench: A Benchmark for Training data detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/4db8a681ae1e58376dc6227978829063-Paper-Conference.pdf)
- **Overfitting** (constructs)
  > A common view is that the effectiveness of TDD is closely tied to the level of training-data memorization or overfitting exhibited by the target model during training (Yeom et al., 2018; Long et al., 2018).
  - [TDDBench: A Benchmark for Training data detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/4db8a681ae1e58376dc6227978829063-Paper-Conference.pdf)
