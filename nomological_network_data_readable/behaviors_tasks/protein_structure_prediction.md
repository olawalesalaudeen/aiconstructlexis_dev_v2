# Protein structure prediction
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Folding, Protein contact prediction, Protein fold classification, Remote homology prediction, Protein folding  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats this behavior as predicting a protein's three-dimensional structure from its amino acid sequence, sometimes stated simply as predicting the 3D structure and sometimes more specifically as predicting the three-dimensional atomic coordinates. The common framing is sequence-to-structure prediction: one paper says the goal of folding is to predict the 3D structure for a given amino acid sequence. Definitions also include related structure-centered tasks, rather than limiting the term only to full coordinate generation.

**Variants.** Common naming variants are folding and protein folding, and one paper describes it as sequence-conditioned structure prediction. Definitions also include neighboring formulations: protein contact prediction, cast as binary classification at the amino acid pair level for whether two amino acids are close in the folded structure; protein fold classification, described as sequence-level assignment to predefined fold classes, including a formulation with 1195 classes; and remote homology prediction, described as identifying evolutionary relationships between proteins with low sequence similarity.

**Space of elicitation and scores.** No measurement instrument is linked to it. Papers only describe evaluation in task terms, such as comparison on protein contact prediction through fine-tuning and freeze probing, and evaluation of folding performance on the CAMEO 2022 test set.

**What it is taken as evidence of.** No construct is linked to it, so the papers do not explicitly treat it as evidence of a broader construct.

## Sources

**[DPLM-2: A Multimodal Diffusion Protein Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/57c30b677add9aa78e1745f0643104d0-Paper-Conference.pdf) (as "Folding")**
> Predicting a 3D protein structure from an amino-acid sequence.

**[Training Compute-Optimal Protein Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/8066ae1446b2bbccb5159587cc3b3bcc-Paper-Conference.pdf) (as "Protein contact prediction")**
> The task of predicting whether two amino acids in a protein sequence are close to each other in the folded 3D structure.

**[Training Compute-Optimal Protein Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/8066ae1446b2bbccb5159587cc3b3bcc-Paper-Conference.pdf) (as "Protein fold classification")**
> The task of assigning a protein sequence to one of a predefined set of structural fold classes.

**[The OMG dataset: An Open MetaGenomic corpus for mixed-modality genomic language modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/dbb40375daa3c39f1c098b12608aed12-Paper-Conference.pdf) (as "Remote homology prediction")**
> The task of identifying evolutionary relationships between proteins that have low sequence similarity.

**[Elucidating the Design Space of Multimodal Protein Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hsieh25a/hsieh25a.pdf) (as "Protein folding")**
> The task of predicting the three-dimensional atomic coordinates of a protein from its amino acid sequence.
