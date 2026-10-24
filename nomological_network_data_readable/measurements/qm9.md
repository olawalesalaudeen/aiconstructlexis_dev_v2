# QM9
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the papers, QM9 is described as a quantum-chemistry or molecular property prediction benchmark for small molecules, with ground-state 3D structures and use in computed property prediction. One paper states that it "contains over 130,000 molecules with ground-state 3D structures obtained through DFT computations" (3D-MolT5: Leveraging Discrete Structural Information for Molecule-Text Modeling). Another paper treats it as a regression benchmark for quantum chemistry properties, including HUMO, LUMO, and HUMO-LUMO gap.

**What it is claimed to measure.** Papers link QM9 to no constructs and to two behavioral indicators. It is reported as measuring Molecular property prediction and Molecule generation, so the recorded claims are spread across task-level indicators rather than concentrated on any linked construct. The more detailed measurement framing is for computed or molecular property prediction, while a separate paper also reports molecule generation on QM9.

**Space of uses.** Papers use QM9 mainly as an evaluation dataset. In one study it appears alongside PubChemQC and PubChem as one of three datasets used to evaluate performance on computed property prediction, and another reports regression results on QM9 for quantum chemistry measures. No measurement instrument is linked to it through the recorded relationships.

## Sources

**[3D-MolT5: Leveraging Discrete Structural Information for Molecule-Text Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/3d4dc72d715bd6415d356293079adf3d-Paper-Conference.pdf)**
> A quantum-chemistry benchmark of small molecules with ground-state 3D structures used for computed property prediction.

## Relationships

### → QM9
- **Molecule generation** (behaviors tasks) — *measured_by*
  > The result of molecule generation on QM9 dataset.
  - [Eliminating Position Bias of Language Models: A Mechanistic Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/e389b15166cf98966ba058965a8c17e3-Paper-Conference.pdf)
- **Molecular property prediction** (behaviors tasks) — *measured_by*
  > We use three datasets to evaluate the performance of 3D-MolT5 on computed property prediction task: QM9 (Ruddigkeit et al., 2012; Fang et al., 2023), PubChemQC (Maho, 2015; Xu et al., 2021), and PubChem (Kim et al., 2019).
  - [3D-MolT5: Leveraging Discrete Structural Information for Molecule-Text Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/3d4dc72d715bd6415d356293079adf3d-Paper-Conference.pdf)
