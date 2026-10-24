# Contriever
**Type:** Measurement  
**Referenced in:** 8 papers  

## State of the Field

Across the provided literature, Contriever is consistently characterized as a dense retrieval model used for information retrieval and feature extraction. The most common framing describes it as a "text feature extractor" used to produce embeddings or feature representations from text samples. Several papers elaborate on this, defining it as a "general-purpose dense retriever" trained on web documents, with one study specifying it is an "unsupervised dense retrieval model trained using contrastive learning on text data without annotated pairs" (tRAG: Term-level Retrieval-Augmented Generation for Domain-Adaptive Retrieval). This unsupervised training is noted to enable the generation of "high-quality embeddings by learning directly from the structure of the corpus." In practice, it is used to retrieve top-k documents, sometimes as a component in a RAG pipeline or as a first-pass retriever whose outputs are subsequently reranked. The model is frequently mentioned alongside other retrievers like DPR and BM25. A specific variant, Contriever-MS MARCO, is also mentioned in one paper.

## Sources

**[Combatting Dimensional Collapse in LLM Pre-Training Data via Submodular File Selection](https://proceedings.iclr.cc/paper_files/paper/2025/file/136729ae4b0fee25a0d28077442506da-Paper-Conference.pdf)**
> A text feature extractor used to produce embeddings for selected text samples in the file-selection procedure.

## Relationships

### → Contriever
- **Information retrieval** (behaviors tasks) — *measured_by*
  > The results presented in Table 3 indicate that the revised documentation enhances the performance of tool retrieval methods, including the sparse retrieval method BM25 (Robertson et al., 2009) and the dense retrieval method Contriever (Izacard et al., 2021). (Section 3.3)
  - [From Exploration to Mastery: Enabling LLMs to Master Tools via Self-Driven Interactions](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c22e5e918198702765ecff4b20d0a90-Paper-Conference.pdf)
