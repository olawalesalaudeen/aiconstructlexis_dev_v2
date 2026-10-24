# In-context classification
**Type:** Behavior  
**Referenced in:** 4 papers  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage treats this behavior as predicting the correct class or label for a target item from a context composed of item-label exemplar pairs. The papers align closely on that setup: one source describes “a sequence of item-label pairs” whose response is evaluated on a target item, while another specifies an alternating sequence of N items and N labels followed by a query item and missing label. Success is described as producing the correct label for the target item or target token.

**Variants.** Among the reported variants, papers distinguish binary and multi-class classification. One paper studies Gaussian mixtures and covers both binary and multi-class classification during in-context learning, with in-context binary classification described as a special case of the general multi-class formulation. Binary classification is the only linked behavioral variant.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers describe eliciting the behavior directly by presenting exemplars as item-label pairs and observing the network’s response to a target item; one source also states that, given the full input sequence, the network is trained to predict the target label with binary cross-entropy loss.

**What it is taken as evidence of.** The construct links are framed as relatedness rather than as explicit measurement claims. Papers relate this behavior to three constructs, Generalization, In-context learning, and Robustness: one relationship places it during in-context learning, another cites “strong generalization ability of the trained transformer,” and another relates performance under distribution shift to robustness. Taken together, the papers connect it to several constructs rather than one exclusive construct framing.

## Sources

**[Differential learning kinetics govern the transition from memorization to generalization during in-context learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/187f9ba4cd5a59477305ac712282a1cd-Paper-Conference.pdf)**
> The observable task of predicting the correct label for a target item based on a sequence of item-label pair exemplars provided in the context.

## Relationships

### Associated with
- **In-context learning** (constructs)
  > In this work, we study the training dynamics of a single-layer transformer for both binary and multi-class classification of Gaussian mixtures during ICL, a fundamental problem in machine learning.
  - [On the Training Convergence of Transformers for In-Context Classification of Gaussian Mixtures](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25q/shen25q.pdf)
- **Binary classification** (behaviors tasks)
  > In this section, we study the learning dynamics of a single-layer transformer for in-context binary classification. It is a special case of the general multi-class classification.
  - [On the Training Convergence of Transformers for In-Context Classification of Gaussian Mixtures](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25q/shen25q.pdf)
- **Robustness** (constructs)
  > in the ‘different norms’ setting, the performance of ‘1-layer’ deteriorates more significantly, while transformers with a more complex structure (’3-layer’) show better robustness under this distribution shift.
  - [On the Training Convergence of Transformers for In-Context Classification of Gaussian Mixtures](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25q/shen25q.pdf)
