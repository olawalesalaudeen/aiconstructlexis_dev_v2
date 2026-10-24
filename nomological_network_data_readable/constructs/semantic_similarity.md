# Semantic similarity
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** LLM-oriented semantic similarity  

## State of the Field

Across the provided literature, semantic similarity is a construct concerning the degree to which the meaning between two pieces of text aligns. The concept is applied in several contexts, including comparing generated text to a reference, evaluating a perturbed token against its original version, and assessing the alignment between a demonstration and a test problem for in-context learning. One paper introduces a specialized variant, "LLM-oriented semantic similarity," which is defined relative to the specific encoding parameters of an inference model. The construct is most frequently operationalized using measures based on contextual embeddings; for example, one paper notes that "BERTScore... computes semantic similarity by comparing contextual embeddings," while another uses token embedding distance. A different approach is also documented, where the "Rouge-L F1 score... serves as an indicator of sentence-level semantic similarity."

## Sources

**[Structuring Radiology Reports: Challenging LLMs with Lightweight Models](https://aclanthology.org/2025.emnlp-main.392.pdf)**
> The degree to which the meaning of the generated text aligns with the meaning of a reference text, based on contextual embeddings.

**[What Makes In-context Learning Effective for Mathematical Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25ac/liu25ac.pdf) (as "LLM-oriented semantic similarity")**
> The degree to which the semantic representation of a demonstration and a test problem are aligned according to the specific encoding parameters of the inference LLM, going beyond surface-level similarity.
