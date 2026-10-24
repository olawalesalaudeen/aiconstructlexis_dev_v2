# Information integration
**Type:** Construct  
**Referenced in:** 5 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the papers, the prevailing usage treats information integration as a latent model ability to combine evidence from separated textual units. One paper frames it narrowly as combining evidence across multiple passages to determine relevance in multi-hop retrieval, while another defines it more broadly as combining and using information from different parts of a linguistic context to make predictions, especially across sentence and clause boundaries. The shared core is integration across distinct pieces of text, with the main variation being task-specific multi-passage retrieval versus broader within-context linguistic prediction.

**Space of facets.** Papers organize the construct by the units over which integration occurs. One usage centers on multiple documents or passages and the relationships between them, while another treats information as distributed across multiple scales of language, including words, sentences, and discourse, and focuses on an "information integration window" that is constrained by sentence and clause boundaries. The same label is therefore used for both cross-document integration and integration across internal linguistic structure.

**Space of measurement.** No measurement instrument is linked to it, and no behavioral indicator is linked to it. Even so, the papers make the operationalization concrete in two ways: one places it in multi-hop retrieval settings where evidence must be combined across multiple passages to determine relevance, and another proposes quantifying an "information integration window" and examining how sentence and clause boundaries constrain that window. In both cases, the operationalization targets the cross-unit combination described in the definitions.

## Sources

**[Attention in Large Language Models Yields Efficient Zero-Shot Re-Rankers](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5b1890a7c1a79fe9b32b0f442347089-Paper-Conference.pdf)**
> The latent ability to combine evidence across multiple passages to determine relevance in multi-hop retrieval settings.

## Relationships

### Associated with
- **Multi-hop question answering** (behaviors tasks)
  > standard multi-hop question answering (QA) also requires integrating information between passages in a retrieval corpus. (Section 1)
  - [HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ddc001d07ca4f319af96a3024f6dbd1-Paper-Conference.pdf)
