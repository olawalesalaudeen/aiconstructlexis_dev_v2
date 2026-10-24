# Graph classification
**Type:** Behavior  
**Referenced in:** 4 papers  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats graph classification as a graph-level labeling task. Definitions describe it as assigning class labels to graph inputs represented as projected embeddings, or more generally assigning a categorical label to an entire graph. Papers agree on the core success criterion, producing the graph's class label.

**Variants.** The variations shown here are in representation and task framing. One paper describes graph inputs as projected embeddings and notes training non-linear projectors on a graph classification dataset, while another reformulates graph classification, alongside node classification and link prediction, as a textual reasoning problem. The linked measurement settings are described as molecular graph classification datasets.

**Space of elicitation and scores.** It is measured by three instruments: BACE, BBBP, and ClinTox. One paper presents these as three molecular graph classification datasets, so the linked operationalizations all come from a molecular graph classification setting.

**What it is taken as evidence of.** No construct is linked to it as evidence of.

## Sources

**[Vector-ICL: In-context Learning with Continuous Vector Representations](https://proceedings.iclr.cc/paper_files/paper/2025/file/46516c4204d6cab8299e55d4ebf7ccec-Paper-Conference.pdf)**
> Assigning class labels to graph inputs represented as projected embeddings.

## Relationships

### Graph classification →
- **BACE** (measurements) — *measured_by*
  > ...and three molecular graph classification datasets (Wu et al., 2018): BACE, BBBP and ClinTox. (Section 5.1)
  - [Can Large Language Models Act as Ensembler for Multi-GNNs?](https://aclanthology.org/2025.emnlp-main.1470.pdf)
- **BBBP** (measurements) — *measured_by*
  > ...and three molecular graph classification datasets (Wu et al., 2018): BACE, BBBP and ClinTox. (Section 5.1)
  - [Can Large Language Models Act as Ensembler for Multi-GNNs?](https://aclanthology.org/2025.emnlp-main.1470.pdf)
- **ClinTox** (measurements) — *measured_by*
  > ...and three molecular graph classification datasets (Wu et al., 2018): BACE, BBBP and ClinTox. (Section 5.1)
  - [Can Large Language Models Act as Ensembler for Multi-GNNs?](https://aclanthology.org/2025.emnlp-main.1470.pdf)
