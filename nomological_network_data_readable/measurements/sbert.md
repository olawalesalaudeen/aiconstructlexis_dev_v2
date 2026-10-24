# SBERT
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

Across the provided literature, SBERT (Sentence-BERT) is consistently described as a model derived from BERT that computes semantically meaningful sentence embeddings or vector representations. One definition specifies its architecture as a modification of the BERT network that "uses siamese and triplet network structures," while another notes it is built on BERT for Natural Language Inference. The applications of these embeddings vary across the surveyed work. SBERT is used to enable tasks like clustering expressions based on semantic similarity and retrieving passages for question-answering. It is also explicitly positioned as an evaluation metric to assess the "deep semantic alignment and factual correctness" of generated text. Furthermore, SBERT is used to analyze latent properties of text; for example, it is employed to compute embeddings from LLM-generated explanations to "analyze for latent biases" and is used as a measurement instrument for the construct of Fairness.

## Sources

**[Graph Neural Network Enhanced Retrieval for Question Answering of Large Language Models](https://aclanthology.org/2025.naacl-long.337.pdf)**
> Sentence-BERT (Sentence-Bidirectional Encoder Representations from Transformers), a model used to compute sentence embeddings from the text of LLM-generated explanations to analyze for latent biases.

**[Compositional Generalisation for Explainable Hate Speech Detection](https://aclanthology.org/2025.emnlp-main.703.pdf) (as "Sentence-BERT")**
> A modification of the BERT network that uses siamese and triplet network structures to derive semantically meaningful sentence embeddings, used here for clustering expressions based on semantic similarity.

## Relationships

### → SBERT
- **Social bias** (constructs) — *measured_by*
  > We use the bias score from (Dolci et al., 2023) to estimate gender bias in sentence embeddings.
  - [How Can We Diagnose and Treat Bias in Large Language Models for Clinical Decision-Making?](https://aclanthology.org/2025.naacl-long.114.pdf)
