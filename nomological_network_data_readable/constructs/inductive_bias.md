# Inductive bias
**Type:** Construct  
**Referenced in:** 15 papers  

## State of the Field

**Definition agreement:** Consensus. Most papers define inductive bias as a model's implicit assumptions or inherent architectural and training tendencies that make it prefer certain solutions, behaviors, or generalizations, especially on unseen data. A few papers narrow the source to pre-training or the transformer architecture, but they still describe the same core property rather than a different phenomenon.

**Space of definitions.** Most papers describe inductive bias as the implicit assumptions, preferences, or tendencies built into a model, its architecture, or its training method that make some solutions or generalizations more likely than others, especially on unseen data or new tasks. Smaller variations keep that core but emphasize different loci: pre-trained LMs as providing assumptions for unseen inputs, transformer architectures as making some behaviors easier to realize, or model-specific tendencies that matter even without explicit instruction. The main variation is whether papers foreground generalization to new data, or a preference for particular solutions or behaviors such as simpler or sparser ones.

**Space of facets.** Papers usually differentiate inductive bias by source: architecture, training process, pre-training, tuning, and specific components such as butterfly structure or position encodings. Some authors speak of transformer-specific, model-specific, or idiosyncratic inductive biases, while one paper says common LLM architectures and training setups may encode very similar inductive biases. The term is also attached to particular settings, including the inductive bias of in-context learning and of looped transformers that favor simpler, sparser solutions.

**Space of measurement.** No measurement instrument or behavioral indicator is linked to it. Instead, papers describe it through model comparisons and attributed behaviors: looped transformers are said to favor simpler or sparser solutions, butterfly factorization is said to introduce an implicit bias that benefits generalizability and prevents overfitting, pre-trained LMs are said to supply assumptions that support few-shot learning in low-data settings, and different position encodings are said to facilitate counting in different task formats. These uses keep the construct tied to architecture, components, or training, and describe it through the solutions, behaviors, or generalization that papers attribute to those design choices.

**Links.** Papers link it to 5 constructs. One paper claims a causal relationship from inductive bias to reasoning, describing an inductive bias toward improving reasoning-heavy downstream tasks, and another claims a causal relationship from inductive bias to algorithmic reasoning through the effectiveness of embedding-only training. One paper also claims a causal relationship from inductive bias to generalization, while other papers relate it to length generalization and to world modeling; another paper relates generalization to inductive bias by saying common architectures and training setups may encode very similar biases without adversely affecting downstream generalization.

## Sources

**[In-Context Learning through the Bayesian Prism](https://proceedings.iclr.cc/paper_files/paper/2024/file/d81cd83e7f6748af351485d73f305483-Paper-Conference.pdf)**
> An inherent property of a model or training method that causes it to prefer certain solutions or generalizations over others, influencing its performance on new tasks.

## Relationships

### Inductive bias →
- **Generalization** (constructs) — *causes*
  > This suggests a desirable inductive bias of RAPTR that improves its generalization abilities beyond perplexity. (Section 4)
  - [Efficient stagewise pretraining via progressive subnetworks](https://proceedings.iclr.cc/paper_files/paper/2025/file/b21ae5a5df83632324b61b595ab653b9-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > MIDAS is not only training-efﬁcient but surprisingly also has an inductive bias towards improving downstream tasks, especially tasks that require reasoning abilities like reading comprehension and math problems, despite having similar or slightly worse perplexity compared to baseline training. (Abstract)
  - [On the Inductive Bias of Stacking Towards Improving Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/837bc5db12f3d394d220815a7687340c-Paper-Conference.pdf)

### Associated with
- **Length generalization** (constructs)
  > The short validation set reveals an architecture’s inductive bias in the absence of any disambiguating information about how it should generalize to longer lengths, as in the experiments of Del´etang et al. (2023). (Section 4)
  - [Training Neural Networks as Recognizers of Formal Languages](https://proceedings.iclr.cc/paper_files/paper/2025/file/7256b2c07b6980aca382eb41606501c2-Paper-Conference.pdf)
- **World modeling** (constructs)
  > Similarly, the inductive bias of a foundation model reveals its world model.
  - [What Has a Foundation Model Found? Using Inductive Bias to Probe for World Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/vafa25a/vafa25a.pdf)
