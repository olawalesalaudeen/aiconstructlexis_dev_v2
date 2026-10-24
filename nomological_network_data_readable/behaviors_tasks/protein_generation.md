# Protein generation
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Protein sequence generation, Antibody sequence infilling  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats this behavior as generating protein or amino acid sequences. Most definitions frame it as creating novel sequences, sometimes explicitly sequences intended to be plausible or functional proteins, while a smaller line of work treats it as generating missing amino acid regions in an antibody sequence from the observed regions. Papers agree on sequence generation as the core task, but differ on whether generation is open-ended or infilling, and on whether decoding is order-agnostic.

**Variants.** Papers study both broad protein sequence generation and narrower antibody sequence infilling settings. Named variants include order-agnostic protein generation, unguided antibody infilling, and infilling specific masked complementarity determining regions, including HCDR1, HCDR2, HCDR3, and LCDR1. One paper also places protein generation alongside structure- and function-related evaluations.

**Space of elicitation and scores.** No measurement instrument is linked to this behavior, so the papers do not identify a recurring instrument that elicits or scores it.

**What it is taken as evidence of.** No construct is linked to this behavior, so the papers do not specify a shared construct that it is treated as evidence of.

## Sources

**[A Watermark for Order-Agnostic Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0ce8e3434c7b486bbddff9745b2a1722-Paper-Conference.pdf)**
> Generating protein sequences in an order-agnostic decoding setting.

**[Training Compute-Optimal Protein Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/8066ae1446b2bbccb5159587cc3b3bcc-Paper-Conference.pdf) (as "Protein sequence generation")**
> The task of creating novel amino acid sequences that are plausible or functional proteins.

**[Discrete Copula Diffusion](https://proceedings.iclr.cc/paper_files/paper/2025/file/dd1fef536655685898a6602bfbf16857-Paper-Conference.pdf) (as "Antibody sequence infilling")**
> Generating missing amino-acid regions in an antibody sequence given the remaining observed regions.
