# ChEBI-20
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** CheBI-20  

## State of the Field

**What it is.** Across the surveyed papers, ChEBI-20 is most commonly described as a dataset used in molecule-text tasks: one definition says it is widely used for text-based molecule generation, where a model generates a molecular sequence from a textual description, and another says it contains molecules and their corresponding text descriptions for molecule-text alignment and caption generation. A smaller line of work describes it differently, as the molecular graph VQA ChEBI-20 used for fine-tuning and copyright-tracking evaluation. One paper also reports using a restricted subset by selecting molecules containing fewer than 100 atoms.

**What it is claimed to measure.** The recorded measurement use is concentrated rather than spread across many targets: papers use ChEBI-20 to measure one behavioral indicator, Molecule captioning, and it is not linked to any constructs. The evidence is performance-focused, with papers reporting the performance of molecule captioning on ChEBI-20 and using it to test molecule description generation.

**Space of uses.** Papers use ChEBI-20 both as a direct evaluation dataset and in conjunction with other resources. In captioning evaluations, it is used alongside PubChem324k for specialist models; separately, it is linked to one other measurement instrument, MOLERR2FIX, through a related relation, with one paper stating that it begins with the CHEBI-20 dataset and then selects molecules containing fewer than 100 atoms. Definitions also describe it as used for fine-tuning and for copyright-tracking evaluation.

## Sources

**[3D-MolT5: Leveraging Discrete Structural Information for Molecule-Text Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/3d4dc72d715bd6415d356293079adf3d-Paper-Conference.pdf) (as "CheBI-20")**
> A dataset widely used for the text-based molecule generation task, where the model generates a molecular sequence from a textual description.

**[Tracking the Copyright of Large Vision-Language Models through Parameter Learning Adversarial Images](https://proceedings.iclr.cc/paper_files/paper/2025/file/d368eba3fb546ae5d868dae2ecb17200-Paper-Conference.pdf)**
> A molecular graph visual question answering dataset used for fine-tuning and copyright-tracking evaluation.

## Relationships

### → ChEBI-20
- **Molecule captioning** (behaviors tasks) — *measured_by*
  > For testing the performance of molecule description generation of LLaMo and previous models, we utilize ... both PubChem324k [3] and ChEBI-20 [8] for specialist models. (Appendix G)
  - [LLaMo: Large Language Model-based Molecular Graph Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/ee46288ab2aaf5c6e53aebebe719712c-Paper-Conference.pdf)

### Associated with
- **MOLERR2FIX** (measurements)
  > We begin with the CHEBI-20 dataset and select molecules containing fewer than 100 atoms. (Section 3.2)
  - [MolErr2Fix: Benchmarking LLM Trustworthiness in Chemistry via Modular Error Detection, Localization, Explanation, and Correction](https://aclanthology.org/2025.emnlp-main.977.pdf)
