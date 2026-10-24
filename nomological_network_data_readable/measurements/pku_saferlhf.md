# PKU-SafeRLHF
**Type:** Measurement  
**Referenced in:** 23 papers  
**Also known as:** PKU SafeRLHF, SafeRLHF, Safe-RLHF  

## State of the Field

**What it is.** Across papers, PKU-SafeRLHF is most commonly treated as a safety-alignment preference dataset and benchmark built from human preference comparisons. Descriptions usually present conversations or instruction-response pairs with one prompt and two responses, annotated with preference and safety information, often across helpfulness and harmlessness; one paper specifies two response labels, and another describes a preference label plus a harmless label for the preferred response. Some authors emphasize subsets for harmful-query or red-teaming evaluation, covering areas such as insults, immorality, crime, emotional harm, and privacy, while others use it as a public benchmark for generative judges or as reward-model training data with safe and unsafe responses. Reported scale differs across papers, from 83.4K preference entries to over 300k instances, and one paper describes 1 million human-labeled data points.

**What it is claimed to measure.** Its prevailing measurement use is for Harmlessness and Helpfulness: papers use it to measure both, often describing independent rankings or annotations on those two dimensions. Across papers, it is linked to 5 constructs and no behavioral indicators; beyond Harmlessness and Helpfulness, smaller lines of work use it to measure Generalization, Safety, and Safety alignment. A paper also reports that performance on helpfulness and harmlessness is negatively correlated on SafeRLHF, and another paper claims a causal relationship from PKU-SafeRLHF to Helpfulness and to Harmlessness in a setup that fits reward and safety models to human-preference data and balances the two objectives.

**Space of uses.** Papers use it for both training and evaluation: as training data for safety alignment or reward modeling, as a held-out test set for harmfulness or harmful-query evaluation, and as a benchmark for generative judges. Several studies place it alongside HH-RLHF, and a few pair it with CNN/Dailymail, BigBench-HHH, or Iterative-Prompt; no measurement instrument is linked to it. Some papers also describe fixed training-testing prompt splits or evaluation against gold and reference reward models.

## Sources

**[Gaining Wisdom from Setbacks: Aligning Large Language Models via Mistake Analysis](https://proceedings.iclr.cc/paper_files/paper/2024/file/fe24df54d5ccd95cdf830a309f2bf5c0-Paper-Conference.pdf)**
> A dataset used for out-of-distribution evaluation of model performance on harmful queries.

**[Unmasking and Improving Data Credibility: A Study with Datasets for Training Harmless Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c3837ae3d17a91b08bf5cc19280e7fd2-Paper-Conference.pdf) (as "PKU SafeRLHF")**
> A dataset of over 300k instances with prompt-response pairs and safety labels, derived from human preferences, used for reinforcement learning with human feedback in safety alignment.

**[BPO: Towards Balanced Preference Optimization between Knowledge Breadth and Depth in Alignment](https://aclanthology.org/2025.naacl-long.443.pdf) (as "SafeRLHF")**
> Human-annotated pairwise preference dataset that independently ranks responses for helpfulness and harmlessness, used for alignment tuning and evaluation.

**[The Crucial Role of Samplers in Online Direct Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/62133b95efaa6f10a5395eb10ca087cd-Paper-Conference.pdf) (as "Safe-RLHF")**
> A dataset used for LM alignment experiments in which trained models are evaluated against a gold reward model and a reference model.

## Relationships

### → PKU-SafeRLHF
- **Harmlessness** (constructs) — *measured_by*
  > Harmful evaluation on PKU-SafeRLHF. (Figure 3a)
  - [Improving Generalization of Alignment with Human Preferences through Group Invariant Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2d82a425af4c18a35049899fea5ee82-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > PKU-SafeRLHF provides both paired helpfulness preference rankings and binary safety labels.
  - [Bi-Factorial Preference Optimization: Balancing Safety-Helpfulness in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ad77a15531fbccefa8be5e434b4b7908-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > In this section, we will evaluate our model, previously trained on the C4 dataset, on various other datasets, including Anthropic HH-RLHF (HH), Synthetic instruction2(Instruct), PKU SafeRLHF (PKU), Reward3, UltraFeedback(UltraF), FineWeb (Penedo et al., 2024) and Pile uncopyrighted(Pile)4 datasets. (Section 4.4)
  - [Robust Multi-bit Text Watermark with LLM-based Paraphrasers](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25k/xu25k.pdf)
- **Safety** (constructs) — *measured_by*
  > We evaluate model safety on the PKU-SafeRLHF and BigBench-HHH datasets. (Section 4.1)
  - [Governance in Motion: Co-evolution of Constitutions and AI models for Scalable Safety](https://aclanthology.org/2025.emnlp-main.869.pdf)

### Associated with
- **Safety alignment** (constructs)
  > Using the large-scale annotation data, we further train severity-sensitive moderation for the risk control of LLMs and safety-centric RLHF algorithms for the safety alignment of LLMs. (Abstract)
  - [PKU-SafeRLHF: Towards Multi-Level Safety Alignment for LLMs with Human Preference](https://aclanthology.org/2025.acl-long.1544.pdf)
