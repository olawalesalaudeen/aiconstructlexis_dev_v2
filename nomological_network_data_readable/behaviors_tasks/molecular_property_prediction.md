# Molecular property prediction
**Type:** Behavior  
**Referenced in:** 14 papers  
**Also known as:** Functional group detection, Molecular toxicity prediction, Property prediction, Pharmaceutical property prediction  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats this as predicting a molecule's chemical, physical, or biological properties from a molecular input, often as a numerical value, though some papers also allow a textual description. Most formulations use regression or classification, including continuous physical properties and binary labels such as whether a molecule is likely to penetrate the blood brain barrier, while a smaller line of work narrows the task to yes or no functional group detection. One paper explicitly separates computed property prediction, scored by extracting a numerical value from generated text and evaluating MAE, from descriptive property prediction, scored with text similarity against ground truth.

**Variants.** Variants span 3D-dependent and 3D-independent settings and several molecular modalities, including strings, graph structures, and conformations. Papers study continuous regression, binary classification, and descriptive prediction, with examples such as solubility, blood brain barrier penetration, toxicity, ADMET attributes, and quantum mechanical properties including HOMO, LUMO, and the HOMO-LUMO gap. A narrower variant asks whether a named functional group is present and examines outputs meaning "Yes" or "No".

**Space of elicitation and scores.** Papers link this behavior to 2 measurement instruments, both benchmark datasets. MoleculeNet is used most often, described as a widely used or widely recognized benchmark and instantiated with tasks such as BBBP, Tox21, Sider, ClinTox, HIV, and BACE; QM9 appears as another instrument for computed property prediction. In these papers, the instruments are used to evaluate task performance.

**What it is taken as evidence of.** Construct-level use is limited. Papers link molecular property prediction to 1 construct, Molecular understanding, and the recorded link is a causal claim from Molecular understanding to molecular property prediction rather than an explicit statement that the behavior measures the construct. No other construct is linked, so papers do not present competing construct framings here.

## Sources

**[3D-MolT5: Leveraging Discrete Structural Information for Molecule-Text Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/3d4dc72d715bd6415d356293079adf3d-Paper-Conference.pdf)**
> The task of generating a numerical value or a textual description for a specific chemical or physical property of a given molecule.

**[Hierarchical Graph Tokenization for Molecule-Language Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25cf/chen25cf.pdf) (as "Functional group detection")**
> Determining whether a specific functional group (e.g., hydroxide, carboxylic acid) is present in a given molecular structure, typically in response to a yes/no question.

**[UniTox: Leveraging LLMs to Curate a Unified Dataset of Drug-Induced Toxicity from FDA Labels](https://proceedings.neurips.cc/paper_files/paper/2024/file/16659e412de3965fa195ddb9f2c4b356-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Molecular toxicity prediction")**
> Predicting drug toxicity from molecular structure using machine learning models trained on UniTox labels.

**[LLaMo: Large Language Model-based Molecular Graph Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/ee46288ab2aaf5c6e53aebebe719712c-Paper-Conference.pdf) (as "Property prediction")**
> The task of predicting specific numerical chemical or physical properties of a molecule, such as orbital energies.

**[A new framework for evaluating model out-of-distribution generalisation for the biochemical domain](https://proceedings.iclr.cc/paper_files/paper/2025/file/b84adff45775e92a45f0cd87c37f5ce9-Paper-Conference.pdf) (as "Pharmaceutical property prediction")**
> The task of predicting biophysical attributes of small molecules, such as their absorption, distribution, metabolism, excretion, and toxicity (ADMET).

## Relationships

### Molecular property prediction →
- **MoleculeNet** (measurements) — *measured_by*
  > We evaluate SMI-EDITOR on the MoleculeNet (Wu et al., 2017) benchmark and compare its performance with baseline models. (Section 4.2)
  - [SMI-Editor: Edit-based SMILES Language Model with Fragment-level Supervision](https://proceedings.iclr.cc/paper_files/paper/2025/file/b0b750c4189f19d0cd71375e9e17f83f-Paper-Conference.pdf)
- **Probing** (measurements) — *measured_by*
  > For a fair and comprehensive evaluation, all models are first pretrained using a common supervised learning strategy and then finetuned (or probed) for molecular property prediction.
  - [On the Scalability of GNNs for Molecular Graphs](https://proceedings.neurips.cc/paper_files/paper/2024/file/2345275663a15ee92a06bc957be54a2c-Paper-Conference.pdf)
- **QM9** (measurements) — *measured_by*
  > We use three datasets to evaluate the performance of 3D-MolT5 on computed property prediction task: QM9 (Ruddigkeit et al., 2012; Fang et al., 2023), PubChemQC (Maho, 2015; Xu et al., 2021), and PubChem (Kim et al., 2019).
  - [3D-MolT5: Leveraging Discrete Structural Information for Molecule-Text Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/3d4dc72d715bd6415d356293079adf3d-Paper-Conference.pdf)

### → Molecular property prediction
- **Chain of thought** (behaviors tasks) — *causes*
  > Chain-of-Thought (CoT) improves the reasoning ability of LLMs in molecular property prediction by decomposing complex SMILES data processing into stepwise sub-tasks, overcoming the limitations of direct question-answering approaches. (Section 3.3)
  - [MolRAG: Unlocking the Power of Large Language Models for Molecular Property Prediction](https://aclanthology.org/2025.acl-long.755.pdf)
