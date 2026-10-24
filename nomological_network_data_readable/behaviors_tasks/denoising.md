# Denoising
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

Within the provided literature, Denoising is characterized as a self-supervised pre-training objective. The core task involves a model learning to recover masked or corrupted spans of tokens from a given sequence. This objective is described as applicable to various data types, including text, molecular sequences, or a combination of both. The paper "3D-MolT5: Leveraging Discrete Structural Information for Molecule-Text Modeling" operationalizes this behavior using the T5 objective. For instance, one application mentioned is "1D denoising," which is applied to SELFIES (a molecular representation), text, and text where molecules are replaced with SELFIES. Another specified operationalization is "1D + 3D joint denoising," where the objective is applied to summed 1D and 3D tokens with the goal of recovering the masked 1D SELFIES tokens.

## Sources

**[3D-MolT5: Leveraging Discrete Structural Information for Molecule-Text Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/3d4dc72d715bd6415d356293079adf3d-Paper-Conference.pdf)**
> A self-supervised pre-training objective where the model learns to recover masked or corrupted spans of tokens in a given sequence, which can be text, molecular sequences, or a combination.
