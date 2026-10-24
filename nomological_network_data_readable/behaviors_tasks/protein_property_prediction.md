# Protein property prediction
**Type:** Behavior  
**Referenced in:** 6 papers  
**Also known as:** Fluorescence prediction, Stability prediction, Thermostability prediction, Solubility prediction, Metal ion binding prediction, Biophysical property prediction, Subcellular localization prediction, Mammalian cell expression prediction, Protein function prediction  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats this behavior as predicting protein-level outputs from amino acid sequence, most often as either continuous regression or binary classification. Common regression formulations target fluorescence intensity, thermostability or melting temperature, and other biophysical properties such as optimal temperature for catalysis, while common classification formulations ask whether a protein is soluble, binds metal ions, or can be expressed in CHO cells. Some authors extend the framing to labels such as subcellular localization and biological function; one paper describes function prediction as predicting proteins "without any ground truth yet available" during training, with final evaluation after a "curation phase" based on newly published functions.

**Variants.** Papers operationalize the behavior in several named settings, including fluorescence, stability or thermostability, solubility, metal ion binding, and subcellular localization. Additional variants extend the same sequence-based framing to expression tasks, broader biophysical targets, and other protein-level outputs. Most formulations are described at sequence level or as protein-level labels, with localization illustrated by labels such as nucleus and extracellular space.

**Space of elicitation and scores.** Elicitation is usually built directly into the task format, with papers using regression or binary classification from sequence, and one stability formulation scored by a sequence-level Spearman coefficient. Only one measurement instrument is linked, Mol-Instructions. Its recorded relation is causal rather than "measured by": one paper claims a causal relationship from Mol-Instructions to this behavior, stating that an LLM tuned with it can analyze proteins "in accordance with specific requirements" and identify fundamental protein characteristics.

**What it is taken as evidence of.** No construct is linked to this behavior. Accordingly, the papers do not record an explicit claim about which construct protein property prediction is taken to indicate.

## Sources

**[Training Compute-Optimal Protein Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/8066ae1446b2bbccb5159587cc3b3bcc-Paper-Conference.pdf) (as "Fluorescence prediction")**
> A regression task to predict the fluorescence intensity of a protein.

**[Training Compute-Optimal Protein Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/8066ae1446b2bbccb5159587cc3b3bcc-Paper-Conference.pdf) (as "Stability prediction")**
> A regression task to predict the thermostability of a protein.

**[From Mechanistic Interpretability to Mechanistic Biology: Training, Evaluating, and Interpreting Sparse Autoencoders on Protein Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/adams25a/adams25a.pdf) (as "Thermostability prediction")**
> Predicting the melting temperature of a protein based on its sequence, used as a continuous regression task.

**[Training Compute-Optimal Protein Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/8066ae1446b2bbccb5159587cc3b3bcc-Paper-Conference.pdf) (as "Solubility prediction")**
> A binary classification task to predict whether a protein will be soluble when expressed.

**[Training Compute-Optimal Protein Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/8066ae1446b2bbccb5159587cc3b3bcc-Paper-Conference.pdf) (as "Metal ion binding prediction")**
> A binary classification task to determine whether a protein sequence binds to metal ions.

**[A new framework for evaluating model out-of-distribution generalisation for the biochemical domain](https://proceedings.iclr.cc/paper_files/paper/2025/file/b84adff45775e92a45f0cd87c37f5ce9-Paper-Conference.pdf) (as "Biophysical property prediction")**
> The task of predicting physical or chemical properties of proteins based on their sequence, such as the optimal temperature for catalysis.

**[From Mechanistic Interpretability to Mechanistic Biology: Training, Evaluating, and Interpreting Sparse Autoencoders on Protein Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/adams25a/adams25a.pdf) (as "Subcellular localization prediction")**
> Predicting the cellular compartment (e.g., nucleus, extracellular space) where a protein is localized based on its sequence.

**[From Mechanistic Interpretability to Mechanistic Biology: Training, Evaluating, and Interpreting Sparse Autoencoders on Protein Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/adams25a/adams25a.pdf) (as "Mammalian cell expression prediction")**
> A binary classification task to determine whether a given protein can be successfully expressed in a specific host cell line (e.g., Chinese hamster ovary cells).

**[Position: AI Competitions Provide the Gold Standard for Empirical Rigor in GenAI Evaluation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sculley25a/sculley25a.pdf) (as "Protein function prediction")**
> Predicting the biological function of proteins based on their amino acid sequences, in the absence of experimentally verified annotations during training.

## Relationships

### Protein property prediction →
- **Linear probing** (measurements) — *measured_by*
  > Following Li et al. (2024), we evaluate the probes on benchmarked downstream tasks: secondary structure, subcellular localization, thermostability, as well as a novel task, mammalian cell line expression prediction.
  - [From Mechanistic Interpretability to Mechanistic Biology: Training, Evaluating, and Interpreting Sparse Autoencoders on Protein Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/adams25a/adams25a.pdf)
