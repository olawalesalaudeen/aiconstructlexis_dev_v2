# Continual learning
**Type:** Construct  
**Referenced in:** 13 papers  
**Also known as:** Lifelong learning, Continuous learning capability  

## State of the Field

**Definition agreement:** Consensus. Most papers define continual learning as a model or agent acquiring new tasks, skills, or knowledge over time from new or streaming experience while retaining previously learned capabilities, often explicitly framed as avoiding catastrophic forgetting. A few papers restate this in open-world or narrower application settings, and one outlier emphasizes integrating updates without retraining, but the dominant core definition is the same.

**Space of definitions.** Across the definitions, the prevailing usage treats continual learning as a model ability to acquire new skills, tasks, or knowledge over time from new or streaming data while retaining performance on what was learned before. Most versions make avoidance of catastrophic forgetting explicit, describing learning without degrading performance or retaining prior information while new tasks arrive "in a streaming fashion." Smaller strands broaden this to lifelong learning from ongoing interaction with an open-world environment, narrow it to learning a sequence of tasks without retraining on past data, or specify continuous updating that integrates new information without parameter updates or retraining.

**Space of facets.** Papers most commonly organize the construct around sequential, streaming, or episodic task settings, with a single model adapting to task sequences such as {T1, T2, ... TK} or series of novel relations. A smaller line of work places application-specific variants under it, for example few-shot continual relation extraction, described as "a branch of continual information extraction." One paper frames effective continual learning methods around two recurring challenges, catastrophic forgetting and knowledge transfer, including forward and backward transfer, and papers use neighboring labels, with lifelong learning and continuous learning capability highlighting open-world interaction, adaptive safety checking, or parameter-update-free integration of new information.

**Space of measurement.** Operationalization is linked to four measurement instruments and four behavioral indicators. The instruments are all task or benchmark setups: HotpotQA and SQuAD v1.1 appear in continual fine-tuning, PG-19 is used in episodal continual learning with book-level episodes, and Super-NaturalInstructions is used as a continual learning benchmark; one paper also evaluates "learning against forgetting" by tracking results across test sets over the continual learning process. Among behavioral indicators, catastrophic forgetting is the most frequent, followed by causal discovery, few-shot task performance, and relation extraction. These operationalizations mostly follow the sequential-learning and retention framing, whereas the version defined as integrating new information without parameter updates is not reflected in the linked instruments.

**Links.** Catastrophic forgetting is related to continual learning in several papers, which describe continual learning as assimilating new data without forgetting old knowledge or as learning multiple tasks without forgetting; in a separate claim, one paper reports a causal relationship from continual learning to catastrophic forgetting in few-shot continual relation extraction. Single papers also claim a causal relationship from continual learning to generalization, and from causal discovery to continual learning through continuous engagement and adaptation. Continual learning is also related to knowledge transfer, few-shot task performance, and relation extraction.

## Sources

**[Transformer-Squared: Self-adaptive LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/244da015b91e64f2d9362703fa2a902b-Paper-Conference.pdf)**
> The ability of a model to acquire new skills and knowledge over time from new data without degrading performance on previously learned tasks.

**[ADAM: An Embodied Causal Agent in Open-World Environments](https://proceedings.iclr.cc/paper_files/paper/2025/file/392aae924264f2c56d1895b232bb46b6-Paper-Conference.pdf) (as "Lifelong learning")**
> The agent's capacity to continuously acquire and integrate new knowledge and skills from ongoing interaction with an open-world environment.

**[Continuously Updating Digital Twins using Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/amad25a/amad25a.pdf) (as "Continuous learning capability")**
> The latent ability of a model to integrate new information, such as updated data or knowledge, without requiring parameter updates or re-training, enabling persistent relevance in evolving environments.

## Relationships

### Continual learning →
- **Catastrophic forgetting** (behaviors tasks) — *causes*
  > However, due to the continual learning process with limited data, FCRE models are often biased toward the current task, facing the challenges of overfitting (Hawkins, 2004) and Catastrophic forgetting (Thrun and Mitchell, 1995; Le et al., 2024a; Hai et al., 2024; Van et al., 2022; Phan et al., 2022). (Section 1)
  - [Enhancing Discriminative Representation in Similar Relation Clusters for Few-Shot Continual Relation Extraction](https://aclanthology.org/2025.naacl-long.123.pdf)
- **SQuAD v1.1** (measurements) — *measured_by*
  > Continual Fine-Tuning: (a) SQuAD (Rajpurkar et al., 2016) paired with HotpotQA... (Section 4.1)
  - [DELIFT: Data Efficient Language model Instruction Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9d446812a6fdc05453f4093e54831e8-Paper-Conference.pdf)
- **HotpotQA** (measurements) — *measured_by*
  > Continual Fine-Tuning: (a) SQuAD (Rajpurkar et al., 2016) paired with HotpotQA... (Section 4.1)
  - [DELIFT: Data Efficient Language model Instruction Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9d446812a6fdc05453f4093e54831e8-Paper-Conference.pdf)
- **PG-19** (measurements) — *measured_by*
  > We consider the problem of episodal continual learning (Kirkpatrick et al., 2017; Nguyen et al., 2017) where each episode’s data, yn, is one of 20 books from the PG19 (Rae et al., 2019) dataset
  - [Scalable Bayesian Learning with posteriors](https://proceedings.iclr.cc/paper_files/paper/2025/file/1f9f4ff2ebebb298d88e3fe0e10162db-Paper-Conference.pdf)
- **Super-NaturalInstructions** (measurements) — *measured_by*
  > We conducted experiments on two CL benchmarks, including SuperNI Benchmark (Wang et al., 2022a) and Long Sequence Benchmark (Razdaibiedina et al., 2023). (Section 4.1).
  - [Exploiting Presentative Feature Distributions for Parameter-Efficient Continual Learning of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25j/cheng25j.pdf)

### → Continual learning
- **Causal discovery** (behaviors tasks) — *causes*
  > Newly discovered items enable the execution of new unknown actions and the CD on these actions. This iterative process ensures the lifelong learning through continuous engagement and adaptation.
  - [ADAM: An Embodied Causal Agent in Open-World Environments](https://proceedings.iclr.cc/paper_files/paper/2025/file/392aae924264f2c56d1895b232bb46b6-Paper-Conference.pdf)

### Associated with
- **Relation extraction** (behaviors tasks)
  > Few-shot Continual Relation Extraction (FCRE) has emerged as a significant challenge in information extraction, necessitating that relation extraction (RE) systems can sequentially identify new relations with limited labeled samples. (Abstract)
  - [Enhancing Discriminative Representation in Similar Relation Clusters for Few-Shot Continual Relation Extraction](https://aclanthology.org/2025.naacl-long.123.pdf)
- **Knowledge transfer** (constructs)
  > Previous CL research posits that an effective CL method should address two primary challenges: 1) Catastrophic Forgetting (CF) ... and 2) Knowledge Transfer (KT), which includes both forward transfer and backward transfer. (Section 2.1).
  - [Exploiting Presentative Feature Distributions for Parameter-Efficient Continual Learning of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25j/cheng25j.pdf)
