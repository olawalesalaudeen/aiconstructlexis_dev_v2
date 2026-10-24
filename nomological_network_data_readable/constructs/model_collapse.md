# Model collapse
**Type:** Construct  
**Referenced in:** 15 papers  
**Also known as:** Distributional fidelity  

## State of the Field

**Definition agreement:** Conflicting. A few papers define model collapse as performance degradation from training or iteratively self-improving on synthetic or self-generated data, often tied to loss of data diversity. But a substantial share use the term for different things: token representations collapsing within transformer layers, catastrophic optimization instability during training, or even the opposite idea of preserving the true data distribution across generations, so these papers would not be studying the same phenomenon.

**Space of definitions.** Across papers, the most recurrent framing treats model collapse as degrading performance in self-consuming, self-improvement, or synthetic-data training loops. In that usage, papers describe worsening generalization, failure to improve with more data, or outputs and training data becoming increasingly deterministic and less diverse. Other papers use the term for different phenomena, including token clustering over transformer layers into a single consensus state that limits output diversity and rapid collapse during optimization under a training loss; a separate theoretical account frames the issue through the capacity to preserve "distributional fidelity" across successive generations of synthesized data. The disagreement is therefore over whether collapse is mainly a problem in recursive synthetic-data training, internal token dynamics, or optimization.

**Space of facets.** Papers do not use a single internal taxonomy, but they do mark distinct forms and adjacent notions. One line explicitly studies a strong form caused by synthetic data in the training corpus, while other work describes early collapse through loss of distributional tails, homogenized language, and increasingly deterministic outputs. Another paper effectively equates collapse with token consensus, where tokens cluster and the model loses the ability to produce different outputs, and theoretical work also organizes the discussion around distributional fidelity across generations.

**Space of measurement.** Papers link model collapse to 3 measurement instruments, BabiStories, HelpSteer2, and MNIST, and to 2 behavioral indicators, with news summarization used as a direct measure. The operationalizations are all dataset or task experiments: BabiStories and MNIST are used to empirically confirm collapse, HelpSteer2 compares replacing prior data with synthetic data against accumulating new data across iterations, and news summarization treats worse performance with synthesized than original data as indicating collapse. These measures target performance changes in synthetic or iterative training settings, so they align most closely with the degradation-over-generations framing rather than the token-clustering account.

**Links.** More than one paper claims a causal relationship from model collapse to generalization, describing real-world generalization as compromised or generalization error as depending on preserved fidelity across generations. One paper records causal claims in both directions between model collapse and overfitting, and single-paper causal claims also connect model collapse to reduced linguistic diversity and to a behavioral indicator about misinformation or nonsensical outputs. Another paper claims a causal relationship from recursive stability to model collapse, stating that collapse can be avoided under a recursive stability condition and a non-negligible constant level of real data; papers also relate model collapse to semantic drift, and one additional related link is recorded.

## Sources

**[Strong Model Collapse](https://proceedings.iclr.cc/paper_files/paper/2025/file/284afdc2309f9667d2d4fb9290235b0c-Paper-Conference.pdf)**
> A latent degradation in model performance caused by training on synthetic data, characterized by worsening generalization and failure to improve with more data.

**[A Theoretical Perspective: How to Prevent Model Collapse in Self-consuming Training Loops](https://proceedings.iclr.cc/paper_files/paper/2025/file/e92e6d20f7b5db5c2a1b23964d170fe2-Paper-Conference.pdf) (as "Distributional fidelity")**
> The capacity of a generative model to preserve the statistical properties of the true data distribution across successive generations of data synthesis.

## Relationships

### Model collapse →
- **Generalization** (constructs) — *causes*
  > Consequently, the model’s ability to generalize to real-world data is compromised, as it increasingly relies on the distorted distribution provided by prior AI generations rather than learning accurate representations of the real world. (Section 1)
  - [Strong Model Collapse](https://proceedings.iclr.cc/paper_files/paper/2025/file/284afdc2309f9667d2d4fb9290235b0c-Paper-Conference.pdf)
- **Misinformation generation** (behaviors tasks) — *causes*
  > If synthetic data is used in training these models, even in small quantities, the model can start producing “gibberish” or nonsensical outputs, contains misinformation, or reflect stereotypes. (Section 1)
  - [Strong Model Collapse](https://proceedings.iclr.cc/paper_files/paper/2025/file/284afdc2309f9667d2d4fb9290235b0c-Paper-Conference.pdf)
- **MNIST** (measurements) — *measured_by*
  > Our theoretical results are empirically confirmed with experiments in: • Toy settings, including random projections model on Gaussian data, and shallow networks fully trained on the MNIST dataset (Deng, 2012). (Section 1.1)
  - [Strong Model Collapse](https://proceedings.iclr.cc/paper_files/paper/2025/file/284afdc2309f9667d2d4fb9290235b0c-Paper-Conference.pdf)
- **BabiStories** (measurements) — *measured_by*
  > Our theoretical results are empirically confirmed with experiments in: ... • Realistic setting of GPT-2 models trained on BabiStories (Zhang et al., 2024a) (Section 1.1)
  - [Strong Model Collapse](https://proceedings.iclr.cc/paper_files/paper/2025/file/284afdc2309f9667d2d4fb9290235b0c-Paper-Conference.pdf)
- **HelpSteer2** (measurements) — *measured_by*
  > Fine-tuning Google’s Gemma2 models on Nvidia’s HelpSteer 2 dataset demonstrates that model collapse occurs if previous data are replaced after each model-fitting iteration (left), whereas model collapse is avoided if new synthetic data instead accumulate with previous real and synthetic data (right).
  - [Collapse or Thrive: Perils and Promises of Synthetic Data in a Self-Generating World](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kazdan25a/kazdan25a.pdf)
- **Linguistic diversity** (constructs) — *causes*
  > “The loss of the distributional tails during early model collapse can reduce linguistic innovation and cognitive diversity ... due to homogenized language.”
  - [Large Language Models Threaten Language's Epistemic and Communicative Foundations](https://aclanthology.org/2025.emnlp-main.1457.pdf)

### → Model collapse
- **Overfitting** (constructs) — *causes*
  > this phenomenon arises as the model gradually overfits to patterns found in synthetic data, which may not fully represent the richness or variability of real-world data. (Section 1)
  - [Strong Model Collapse](https://proceedings.iclr.cc/paper_files/paper/2025/file/284afdc2309f9667d2d4fb9290235b0c-Paper-Conference.pdf)
- **Recursive stability** (constructs) — *causes*
  > Theorem 1 demonstrates that under a recursive stability condition and a non-negligible constant level of real data, model collapse can be avoided across a variety of model architectures.
  - [A Theoretical Perspective: How to Prevent Model Collapse in Self-consuming Training Loops](https://proceedings.iclr.cc/paper_files/paper/2025/file/e92e6d20f7b5db5c2a1b23964d170fe2-Paper-Conference.pdf)

### Associated with
- **Semantic drift** (constructs)
  > Semantic drift and model collapse are linked in a loop of human and LLM language production
  - [Large Language Models Threaten Language's Epistemic and Communicative Foundations](https://aclanthology.org/2025.emnlp-main.1457.pdf)
- **News summarization** (behaviors tasks)
  > We experiment with practical tasks – computing matrix eigenvalues with transformers and news summarization with LLMs – which both exhibit model collapse when trained on generated data
  - [Beyond Model Collapse: Scaling Up with Synthesized Data Requires Verification](https://proceedings.iclr.cc/paper_files/paper/2025/file/df2d62b96a4003203450cf89cd338bb7-Paper-Conference.pdf)
