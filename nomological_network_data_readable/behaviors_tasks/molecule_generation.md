# Molecule generation
**Type:** Behavior  
**Referenced in:** 10 papers  
**Also known as:** Molecular generation, Multi-conditional molecular generation, Molecule synthesis  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats molecule generation as producing a molecular structure or representation from a prompt, objective, natural-language description, or chemical context. Outputs are most often described as SMILES or SELFIES strings, though some papers use molecular graphs, and some papers make novelty explicit. Success is sometimes framed more narrowly as generating valid or drug-like molecules, chemically valid and structurally coherent SELFIES, molecules with target properties, or graphs that satisfy multiple constraints such as property values and structural features.

**Variants.** Variants appear under several names, most often molecular generation or molecule generation, with smaller strands calling it molecule synthesis or multi-conditional molecular generation. Papers study text-based generation from an input description, generation from natural-language descriptions, protein-target-based generation for criteria such as binding affinity and drug-likeness, and autoregressive SMILES generation by sampling token sequences. Other settings emphasize SELFIES generation and the production of synthetic, natural product, or drug-like molecules.

**Space of elicitation and scores.** Papers link this behavior to one measurement instrument, QM9. The only explicit measurement evidence says molecule generation is measured on the QM9 dataset, and no other instrument is linked.

**What it is taken as evidence of.** No paper links molecule generation to a construct, so the available relationships do not specify what construct this behavior is taken to indicate.

## Sources

**[Multimodal Large Language Models for Inverse Molecular Design with Retrosynthetic Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/6739d8df16b5bce3587ca5f18662a6aa-Paper-Conference.pdf) (as "Multi-conditional molecular generation")**
> The observable task of generating a molecular graph that simultaneously satisfies multiple constraints, such as specific property values and structural features.

**[Efficient Evolutionary Search Over Chemical Space with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/804b5e300c9ed4e3ea3b073f186f4adc-Paper-Conference.pdf) (as "Molecular generation")**
> The task of producing novel molecular structures, often represented as SMILES or SELFIES strings, based on a given prompt or objective.

**[SciLitLLM: How to Adapt LLMs for Scientific Literature Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/8cb240de90aa20207db944c6c88a7cc0-Paper-Conference.pdf)**
> Generating a molecular representation from a prompt or chemical context.

**[Syntactic and Semantic Control of Large Language Models via Sequential Monte Carlo](https://proceedings.iclr.cc/paper_files/paper/2025/file/a2d537e69a6c6638a3630eef835f07de-Paper-Conference.pdf) (as "Molecule synthesis")**
> The task of generating valid molecular structures in a specified format, such as SMILES, based on examples.

## Relationships

### Molecule generation →
- **QM9** (measurements) — *measured_by*
  > The result of molecule generation on QM9 dataset.
  - [Eliminating Position Bias of Language Models: A Mechanistic Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/e389b15166cf98966ba058965a8c17e3-Paper-Conference.pdf)
