# Overfitting
**Type:** Construct  
**Referenced in:** 27 papers  
**Also known as:** Overadaptation, Reward model over-optimization  

## State of the Field

**Definition agreement:** Consensus. Most papers define overfitting as a model learning training data too specifically or memorizing its details or noise, which improves training performance but harms generalization to unseen, validation, out-of-domain, or out-of-distribution data. A few papers phrase this through particular mechanisms or settings, such as context memorization, small finetuning datasets, validation-set degradation, or loss of pretrained knowledge, but these are still treated as the same underlying model-level generalization failure.

**Space of definitions.** Across the definitions, the prevailing framing is a model fitting training data too closely, including noise, artifacts, formatting details, exact wording, or limited-data patterns, in ways that hurt performance on new, unseen, out-of-domain, or later-stage data. A smaller line of work makes the concept more explicitly observable, treating overfitting as the point where validation or eval loss rises while training continues to improve, or as exact reproduction of training responses. Some papers narrow the scope to particular settings: fine-tuning-specific overadaptation, which adds loss of pretrained knowledge, and reward model over-optimization, where in-domain accuracy rises while out-of-distribution performance stagnates or degrades.

**Space of facets.** Across papers, the term is used both broadly and through narrower variants. One recurring variant is overadaptation, used for supervised fine-tuning that overly focuses on downstream tasks and loses information retained in the pretrained model, and another is reward model over-optimization, defined through higher train and in-domain accuracy alongside worse performance on prompt- or response-shifted data. Some work also frames overfitting through memorization, especially memorizing full or long contexts instead of reusable subcontext statistics, while other work simply relates it to catastrophic forgetting.

**Space of measurement.** Papers link overfitting to 1 measurement instrument, 2 behavioral indicators, and 5 constructs. The only named instrument is HumanEval, and the named behavioral indicators are catastrophic forgetting and pre-training data detection, but the more explicit operationalizations are usually direct training and evaluation signals: rising validation or eval loss while training fit keeps improving, out-of-domain split performance, U-curves during finetuning, exact reproduction of training responses, and analyses of whether a model memorizes full contexts instead of subcontext statistics. A smaller line of work uses reward-model specific comparisons, where accuracy increases on Dtrain and DID while D∼Prompt, D∼Response, and D∼Mutual stagnate or degrade; overall, these measurements mirror the dominant definitions by checking whether better fit to training data coincides with worse validation, unseen, or shifted performance.

**Links.** Generalization is related to overfitting in several papers, and several also claim a causal relationship from overfitting to generalization, describing reduced generalizability or poor generalization when overfitting rises and better generalization when it is mitigated. A few papers also relate overfitting to robustness, while one paper claims a causal relationship from memorization to overfitting. Model collapse is treated bidirectionally in one paper, which claims a causal relationship from model collapse to overfitting and from overfitting to model collapse; one paper reports that overfitting correlates with weak-to-strong generalization, and a few other papers record related links to 2 behavioral indicators and 1 measurement instrument.

## Sources

**[Mixture-of-Experts Meets Instruction Tuning: A Winning Combination for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/5222867be1bde4fb2d8ba018c03b3be8-Paper-Conference.pdf)**
> The phenomenon where a model learns the training data too closely, capturing noise and specific artifacts, which harms its ability to generalize to new data.

**[Understanding Overadaptation in Supervised Fine-Tuning: The Role of Ensemble Methods](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hao25d/hao25d.pdf) (as "Overadaptation")**
> The latent tendency of a fine-tuned model to overfit to downstream task data, resulting in degraded generalization and loss of pretrained knowledge, analogous to harmful overfitting in statistical learning.

**[On the Robustness of Reward Models for Language Model Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hong25d/hong25d.pdf) (as "Reward model over-optimization")**
> A phenomenon where a reward model overfits to its training data, leading to increased accuracy on in-domain examples but degraded performance on out-of-distribution prompts or responses.

## Relationships

### Overfitting →
- **Generalization** (constructs) — *causes*
  > helping to mitigate overfitting, resulting in models that are more robust and generalise better to new data
  - [Instruction Tuning With Loss Over Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/7ffb43adf37b3eeaba559098bc084cc6-Paper-Conference.pdf)
- **Model collapse** (constructs) — *causes*
  > this phenomenon arises as the model gradually overfits to patterns found in synthetic data, which may not fully represent the richness or variability of real-world data. (Section 1)
  - [Strong Model Collapse](https://proceedings.iclr.cc/paper_files/paper/2025/file/284afdc2309f9667d2d4fb9290235b0c-Paper-Conference.pdf)

### → Overfitting
- **Data contamination** (constructs) — *causes*
  > A priori, a natural hypothesis is that the primary cause for overﬁtting is data contamination, e.g. that the test set was leaked in the pre-training or instruction ﬁne-tuning part of the model creation. (Section 5.4)
  - [A Careful Examination of Large Language Model Performance on Grade School Arithmetic](https://proceedings.neurips.cc/paper_files/paper/2024/file/53384f2090c6a5cac952c598fd67992f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Memorization** (constructs) — *causes*
  > This result suggests that some of the reason for overﬁtting is due to partial memorization of the test set. (Section 5.4)
  - [A Careful Examination of Large Language Model Performance on Grade School Arithmetic](https://proceedings.neurips.cc/paper_files/paper/2024/file/53384f2090c6a5cac952c598fd67992f-Paper-Datasets_and_Benchmarks_Track.pdf)

### Associated with
- **Robustness** (constructs)
  > In contrast, mixed-domain models exhibit greater resistance to overfitting, suggesting potential improvements in domain-specific model robustness; (ABSTRACT)
  - [Diagnosing Transformers: Illuminating Feature Spaces for Clinical Decision-Making](https://proceedings.iclr.cc/paper_files/paper/2024/file/fbf1b3765e081251c804da7f508f3b21-Paper-Conference.pdf)
- **Pre-training data detection** (behaviors tasks)
  > A common view is that the effectiveness of TDD is closely tied to the level of training-data memorization or overfitting exhibited by the target model during training (Yeom et al., 2018; Long et al., 2018).
  - [TDDBench: A Benchmark for Training data detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/4db8a681ae1e58376dc6227978829063-Paper-Conference.pdf)
- **HumanEval** (measurements)
  > This indicates some level of overfitting to HUMANEVAL.
  - [LiveCodeBench: Holistic and Contamination Free Evaluation of Large Language Models for Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/94074dd5a072d28ff75a76dabed43767-Paper-Conference.pdf)
- **Weak-to-strong generalization** (constructs)
  > Although weak-to-strong generalization exhibiting certain generalization capabilities, strong models exhibit significant overfitting in weak-to-strong generalization: Due to the strong fit ability of strong models, erroneous labels from weak supervisors may lead to overfitting in strong models. (Section 1)
  - [How to Mitigate Overfitting in Weak-to-strong Generalization?](https://aclanthology.org/2025.acl-long.784.pdf)
