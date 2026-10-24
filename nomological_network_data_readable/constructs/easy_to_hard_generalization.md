# Easy-to-hard generalization
**Type:** Construct  
**Referenced in:** 6 papers  
**Also known as:** Simple-to-hard generalization, Transferability, Logical extrapolation  

## State of the Field

**Definition agreement:** Consensus. All papers define easy-to-hard generalization as a model's ability to train on easier, smaller, or simpler instances and then succeed on harder, larger, or more complex unseen instances without direct supervision on those harder cases. The differences are only in wording and domain emphasis, such as reasoning chains or circuit generation, rather than in the core property being defined.

**Space of definitions.** Across the papers, the prevailing usage treats easy-to-hard generalization as a model's ability to learn from simpler tasks or instances and then succeed on harder, larger, or more complex ones. The definitions largely keep that core framing while varying the emphasis: some state that the harder cases receive no additional or direct supervision, some describe it as simple-to-hard generalization on unseen instances with longer or more intricate reasoning chains, and others use closely aligned labels such as transferability to more complex circuits or logical extrapolation to larger and more difficult problems.

**Space of facets.** Authors differentiate the construct mainly by what makes the target case harder. One recurring formulation ties it to reasoning length, with one paper explicitly saying that simple-to-hard generalization is a type of length generalization, while other papers frame the same pattern as logical extrapolation to greater size and difficulty or as transferability to circuits with more components. Across these papers, the labels easy-to-hard generalization, simple-to-hard generalization, transferability, and logical extrapolation are all used for this generalization pattern.

**Space of measurement.** Operationalization is sparse. Papers link it to no measurement instrument and no behavioral indicator, and the only recorded measurement claim says it is measured by mathematical reasoning, phrased as selecting mathematical reasoning to evaluate easy-to-hard generalization ability. No named measurement instrument is linked to it.

**Links.** More than one paper relates it to length generalization, including one that explicitly says simple-to-hard generalization is a type of length generalization and another that frames the target behavior as logical extrapolation to problems of greater size and difficulty than those in the training set. One paper also relates it to modality imbalance, using simple-to-hard generalization to measure the brittleness of learning in that setting.

## Sources

**[Self-Improving Transformers Overcome Easy-to-Hard and Length Generalization Challenges](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lee25d/lee25d.pdf)**
> The ability of a model to learn to solve difficult problems by training on solutions to simpler problems, without requiring direct supervision on the harder instances.

**[Generalizing from SIMPLE to HARD Visual Reasoning: Can We Mitigate Modality Imbalance in VLMs?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/park25j/park25j.pdf) (as "Simple-to-hard generalization")**
> The latent ability of a model to generalize from training on simpler instances of a task to performing well on more complex, unseen instances, particularly involving longer or more intricate reasoning chains.

**[LaMAGIC2: Advanced Circuit Formulations for Language Model-Based Analog Topology Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chang25b/chang25b.pdf) (as "Transferability")**
> The model's ability to generalize its performance from training on simpler circuits to generating more complex circuits with a larger number of components.

**[Transformers Can Do Arithmetic with the Right Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/c35986bc1ee29b31c1011481b77fe540-Paper-Conference.pdf) (as "Logical extrapolation")**
> The ability to solve problems that are larger and more complex than those seen in the training data.

## Relationships

### Easy-to-hard generalization →
- **MATH** (measurements) — *measured_by*
  > We evaluate these verifiers on the GSM8K test set as well as their easy-to-hard generalization on much harder MATH dataset (Hendrycks et al., 2021) (Section 4)
  - [Generative Verifiers: Reward Modeling as Next-Token Prediction](https://proceedings.iclr.cc/paper_files/paper/2025/file/214308a2d5e3f83ef9ad2739e1cbc46d-Paper-Conference.pdf)

### Associated with
- **Length generalization** (constructs)
  > “we investigate whether these models are capable of logical extrapolation—can they solve problems of greater size and difficulty than those that appear in their training set?”
  - [Transformers Can Do Arithmetic with the Right Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/c35986bc1ee29b31c1011481b77fe540-Paper-Conference.pdf)
- **Modality imbalance** (constructs)
  > We observe that current models can S2H generalize on text – when trained to read short sequences from small LaTeX-formatted tables, the models can read longer paths from larger tables, also provided in LaTeX code. However, they fail to length-generalize on images. To address the generalization gap and imbalanced learning of different modalities, our goal is to transfer the generalization behavior from text to image modality. (Figure 1)
  - [Generalizing from SIMPLE to HARD Visual Reasoning: Can We Mitigate Modality Imbalance in VLMs?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/park25j/park25j.pdf)
- **Mathematical reasoning** (constructs)
  > "we select mathematical reasoning to evaluate easy-to-hard generalization ability"
  - [Easy-to-Hard Generalization: Scalable Alignment Beyond Human Supervision](https://proceedings.neurips.cc/paper_files/paper/2024/file/5b6346a05a537d4cdb2f50323452a9fe-Paper-Conference.pdf)
