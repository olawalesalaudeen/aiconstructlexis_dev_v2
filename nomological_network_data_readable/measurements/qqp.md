# QQP
**Type:** Measurement  
**Referenced in:** 23 papers  

## State of the Field

**What it is.** Across papers, QQP is most commonly described as the Quora Question Pairs dataset or benchmark for paraphrase identification, duplicate-question recognition, or semantic similarity, where the task is to decide whether two questions are paraphrases or semantically equivalent. Definitions largely converge on question pairs whose labels indicate whether the pair are paraphrases or semantically equivalent, and one paper specifies a collection of more than 400,000 question pairs. Some authors explicitly place QQP within GLUE, and one paper uses an adversarially perturbed form with added typos.

**What it is claimed to measure.** Papers most often use QQP to measure one behavioral indicator, Paraphrase detection, with relationship evidence also describing it as paraphrase identification and a semantic similarity task. A smaller line of work links QQP to two constructs, Adversarial robustness and Generalization. In those cases, one paper reports using QQP to evaluate robustness under character-level typos, and another reports it among datasets used to assess generalization on NLU tasks.

**Space of uses.** QQP is linked to one other instrument, GLUE, and papers commonly position it as one task within that benchmark or within broader multi-task NLU evaluations. Authors report QQP accuracy in fine-tuning and prompt-based evaluations, and definitions also place it in in-context learning and duplicated-question recognition settings. Some papers additionally use perturbed QQP inputs when evaluating robustness.

## Sources

**[An LLM can Fool Itself: A Prompt-Based Adversarial Attack](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c72285e193ec90dca93258128698cfb-Paper-Conference.pdf)**
> A paraphrase identification benchmark used to evaluate whether two questions are semantically equivalent.

## Relationships

### → QQP
- **Paraphrase detection** (behaviors tasks) — *measured_by*
  > paraphrasing: QQP, MRPC (Dolan & Brockett, 2005); (Section 5.1)
  - [Batch Calibration: Rethinking Calibration for In-Context Learning and Prompt Engineering](https://proceedings.iclr.cc/paper_files/paper/2024/file/003e438cf04e3caf0a5c908495e484fe-Paper-Conference.pdf)

### Associated with
- **GLUE** (measurements)
  > We first evaluate the language understanding tasks from the GLUE benchmark(Wang et al., 2018) including MNLI, SST2, QNLI and QQP using the RoBERTa model.
  - [Improving LoRA in Privacy-preserving Federated Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/4e243e95c913b367775d71d7182b99d9-Paper-Conference.pdf)
