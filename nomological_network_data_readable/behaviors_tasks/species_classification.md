# Species classification
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

**Space of definitions.** Across the definitions, species classification is treated as predicting species identity, but papers differ on the input modality. One formulation asks for the species of an animal vocalization from audio, sometimes conditioned on metadata or candidate species lists, while another asks for the species of an organism from its genomic sequence. In the audio formulation, papers describe outputs as the scientific name, common name, or "taxonomic name" of the focal species, or all species present in a recording, and one paper describes the task as "highly deterministic."

**Variants.** The main variants concern modality and target scope. Audio work frames the task over bioacoustic recordings and varies between predicting a single focal species and predicting all species present, with some formulations additionally using metadata or candidate species lists. Genomic work uses species classification datasets over virus and fungi and also refers to the task as Species Classification, or SC.

**Space of elicitation and scores.** No measurement instrument is linked to it in the papers.

**What it is taken as evidence of.** Papers do not link it to any construct as evidence of, so there is no recorded agreement about what broader construct it reflects.

## Sources

**[NatureLM-audio: an Audio-Language Foundation Model for Bioacoustics](https://proceedings.iclr.cc/paper_files/paper/2025/file/36c20807317ae6cb3817acd554da2d32-Paper-Conference.pdf)**
> Predicting the species identity of an animal vocalization from audio, sometimes conditioned on metadata or candidate species lists.
