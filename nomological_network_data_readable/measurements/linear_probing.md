# Linear probing
**Type:** Measurement  
**Referenced in:** 43 papers  
**Also known as:** Probing Classifier, Probing classifier, Linear Probing, Linear Probe, Linear probes, Classifier probe  

## State of the Field

Linear probing is predominantly characterized in the literature as both an evaluation protocol and an interpretability technique. The method consistently involves training a simple, typically linear, classifier on a model's frozen internal representations, such as activations or features, to predict specific properties. A primary application is to assess the quality of learned representations for downstream tasks without requiring full model fine-tuning, with one paper describing it as an "evaluation protocol accessing feature quality." An equally prevalent use is for interpretability, where it tests whether certain information is linearly encoded in a model's state, allowing researchers to probe if the model's activations "'contains' various quantities of interest." Specific applications of this probing include identifying style-relevant attention heads, detecting sycophantic responses, and assessing if a model's representations can distinguish between truthful and false outputs. Across the surveyed work, linear probing is used to measure a range of constructs and behaviors. It is explicitly used to operationalize `Generalization`, analyze `Safety alignment`, evaluate `Perspective taking`, and measure performance on `Image classification`. The data also indicates its use for assessing `Commonsense knowledge`, `Mathematical reasoning`, and `Hallucination detection`.

## Sources

**[Understanding prompt engineering may not require rethinking generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/803b9c4a8e4784072fdd791c54d614e2-Paper-Conference.pdf) (as "Linear probe")**
> Evaluation protocol that trains a linear classifier on frozen model features to assess the quality of learned representations without fine-tuning.

**[How Do Transformers Learn In-Context Beyond Simple Functions? A Case Study on Learning with Representations](https://proceedings.iclr.cc/paper_files/paper/2024/file/c9694bf4f9bf3626f7d21158bab74f8e-Paper-Conference.pdf)**
> A supervised method where a linear classifier is trained to predict a property (e.g., a token's index modulo 10) from a model's internal representations to test if that information is linearly encoded.

**[Have the VLMs Lost Confidence? A Study of Sycophancy in VLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/07be1a0850e58ca29e2b6ce31fc0c791-Paper-Conference.pdf) (as "Linear Probing")**
> An interpretability technique using a linear classifier on layer representations to determine whether the model agrees with user requests based on multimodal context.

**[DRESSing Up LLM: Efficient Stylized Question-Answering via Style Subspace Editing](https://proceedings.iclr.cc/paper_files/paper/2025/file/09425891e393e64b0535194a81ba15b7-Paper-Conference.pdf) (as "Probing Classifier")**
> A linear probing classifier trained on LLM activations to discriminate between ordinary and target language styles, used to identify style-relevant attention heads.

**[LLMs Know More Than They Show: On the Intrinsic Representation of LLM Hallucinations](https://proceedings.iclr.cc/paper_files/paper/2025/file/a712d461e57201efe35d429a6f1731c1-Paper-Conference.pdf) (as "Probing classifier")**
> A small, typically linear classifier trained on a model's intermediate activations (hidden states) to predict specific properties, such as the truthfulness of a generated output.

**[Towards Principled Evaluations of Sparse Autoencoders for Interpretability and Control](https://proceedings.iclr.cc/paper_files/paper/2025/file/53356aebeea8ffd40a8ac3bb66243162-Paper-Conference.pdf) (as "Linear probes")**
> A probing evaluation that trains linear classifiers on activations to predict task attributes from a single circuit location.

**[Causally Motivated Sycophancy Mitigation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a52b0d191b619477cc798d544f4f0e4b-Paper-Conference.pdf) (as "Linear Probe")**
> A method utilizing a classifier trained on network activations to identify and prune heads contributing to sycophantic responses.

**[Temporal Reasoning Transfer from Text to Video](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7eecb72574b043ad0c69ea296212450-Paper-Conference.pdf) (as "Classifier probe")**
> A technique using small classifiers trained on visual features to assess the amount of temporal information captured by encoders.

## Relationships

### → Linear probing
- **Generalization** (constructs) — *measured_by*
  > "we present a standard linear probe (on top of CLIP’s features), which achieves slightly better accuracy but a vacuous generalization bound"
  - [Understanding prompt engineering may not require rethinking generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/803b9c4a8e4784072fdd791c54d614e2-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > To discern encoded information crucial for reasoning, we utilize linear probing (Alain and Bengio, 2016; Belinkov, 2022) to train classifiers on the activations with respect to the ground truth labels, aiming to differentiate between true and false propositions. (Section 2.2)
  - [Calibrating Reasoning in Language Models with Internal Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/d037fd021c9aace128b8ce25001cdb6c-Paper-Conference.pdf)
- **Medical image classification** (behaviors tasks) — *measured_by*
  > Classification performance on natural and medical images through linear probing using features extracted from untrained and frozen models versus pixels features (See Sec 3 for details). (Figure 2)
  - [A Textbook Remedy for Domain Shifts: Knowledge Priors for Medical Image Analysis](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4e683f0ce6b91e7fbdae9d32642d88f-Paper-Conference.pdf)
- **Truthfulness** (constructs) — *measured_by*
  > “One prevalent approach in these studies is linear probing ... which involves developing a binary classifier for each concerned module ... Since the classifiers are trained to categorize internal representations as either ‘true’ or ‘false’, they can effectively identify which components’ outputs lead to ‘true’ or ‘false’ answers.”
  - [Causally Motivated Sycophancy Mitigation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a52b0d191b619477cc798d544f4f0e4b-Paper-Conference.pdf)
- **Safety alignment** (constructs) — *measured_by*
  > Motivated by this observation, we adopt the widely used interpretability tool, linear probing, to analyze the changes in LLMs’ safety features in this section. (Section 3.2).
  - [SaLoRA: Safety-Alignment Preserved Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/e24d9d028e3c7f6f13e6032919ee021e-Paper-Conference.pdf)
- **Few-shot image classification** (behaviors tasks) — *measured_by*
  > In this study, we explore the effectiveness of PathGen-CLIP in a few-shot setting, where the model undergoes fine-tuning through linear probing on its pre-extracted feature representations.
  - [PathGen-1.6M: 1.6 Million Pathology Image-text Pairs Generation through Multi-agent Collaboration](https://proceedings.iclr.cc/paper_files/paper/2025/file/ebf8764ecf0688cdd9fe1e5a9c525d0d-Paper-Conference.pdf)
- **Image classification** (behaviors tasks) — *measured_by*
  > “We analyze this aspect using the protocol adopted by (Yuksekgonul et al., 2023; Zhang et al., 2024), which is based on linear probing the fine-tuned CLIP visual encoder on CIFAR10, CIFAR100 and ImageNet.”
  - [Causal Graphical Models for Vision-Language Compositional Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/b9a17133e3943509243b5e197c1c23b2-Paper-Conference.pdf)
- **Sycophancy** (constructs) — *measured_by*
  > Linear Probe... which utilizes a classifier trained on network activations to identify and subsequently prune heads contribute to sycophantic responses.
  - [Causally Motivated Sycophancy Mitigation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a52b0d191b619477cc798d544f4f0e4b-Paper-Conference.pdf)
- **Hallucination detection** (behaviors tasks) — *measured_by*
  > "We apply a linear probing method (Conneau et al., 2018; Zhu and Li, 2023; Allen-Zhu and Li, 2023) to investigate whether the residual stream contains a signal of knowledge conflict."
  - [Steering Knowledge Selection Behaviours in LLMs via SAE-Based Representation Engineering](https://aclanthology.org/2025.naacl-long.264.pdf)
- **RNA structure prediction** (behaviors tasks) — *measured_by*
  > Following Li et al. (2024), we evaluate the probes on benchmarked downstream tasks: secondary structure, subcellular localization, thermostability, as well as a novel task, mammalian cell line expression prediction.
  - [From Mechanistic Interpretability to Mechanistic Biology: Training, Evaluating, and Interpreting Sparse Autoencoders on Protein Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/adams25a/adams25a.pdf)
- **Protein property prediction** (behaviors tasks) — *measured_by*
  > Following Li et al. (2024), we evaluate the probes on benchmarked downstream tasks: secondary structure, subcellular localization, thermostability, as well as a novel task, mammalian cell line expression prediction.
  - [From Mechanistic Interpretability to Mechanistic Biology: Training, Evaluating, and Interpreting Sparse Autoencoders on Protein Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/adams25a/adams25a.pdf)
- **Theory of mind** (constructs) — *measured_by*
  > Using logistic regression, we performed binary classification on the representations of positive and negative samples to identify attention heads that are sensitive to perspective separation and belief representation.
  - [From Black Boxes to Transparent Minds: Evaluating and Enhancing the Theory of Mind in Multimodal Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25bj/li25bj.pdf)
- **Semantic understanding** (constructs) — *measured_by*
  > Linear Probe leverages paronym-synonym pairs (subset 2 of ToT ) to assess the model’s progressive disentanglement of textual and textural features across layers. (Section 4.2)
  - [Textural or Textual: How Vision-Language Models Read Text in Images](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25bw/wang25bw.pdf)
