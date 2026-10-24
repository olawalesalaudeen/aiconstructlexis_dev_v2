# MoleculeNet
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Papers consistently treat MoleculeNet as a benchmark suite, or benchmark dataset, for molecular machine learning and molecular property prediction. The prevailing description emphasizes a collection of tasks and public datasets, sometimes used for classification evaluation on multiple molecular datasets; some papers additionally describe its tasks as spanning properties from quantum mechanics, physical chemistry, biophysics, and physiology. Papers often work with subsets rather than only the full resource, commonly naming BBBP, BACE, ClinTox, ESOL, and FreeSolv.

**What it is claimed to measure.** Across papers, the reported measurement target converges on a single behavioral indicator: MoleculeNet is used to measure Molecular property prediction. It is linked to 1 behavioral indicator and no constructs, so papers do not link it to other constructs or behavioral indicators. Relationship evidence frames this use as evaluation, validation, or fine-tuning on MoleculeNet for molecular property prediction tasks.

**Space of uses.** In use, papers most often position MoleculeNet as an evaluation benchmark: models are evaluated on it, validated on datasets drawn from it, or fine-tuned with it. Papers also invoke named subsets for specific chemistry tasks, rather than only referring to the benchmark at the most general level. No measurement instrument is linked to it.

## Sources

**[Hierarchical Graph Tokenization for Molecule-Language Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25cf/chen25cf.pdf)**
> A benchmark suite of molecular property prediction tasks used here for classification evaluation on multiple molecular datasets.

## Relationships

### → MoleculeNet
- **Molecular property prediction** (behaviors tasks) — *measured_by*
  > We evaluate SMI-EDITOR on the MoleculeNet (Wu et al., 2017) benchmark and compare its performance with baseline models. (Section 4.2)
  - [SMI-Editor: Edit-based SMILES Language Model with Fragment-level Supervision](https://proceedings.iclr.cc/paper_files/paper/2025/file/b0b750c4189f19d0cd71375e9e17f83f-Paper-Conference.pdf)
