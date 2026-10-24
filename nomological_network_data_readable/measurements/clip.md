# CLIP
**Type:** Measurement  
**Referenced in:** 10 papers  

## State of the Field

Across the provided literature, CLIP is predominantly characterized as a vision-language model (VLM) that aligns image and text embeddings, often through contrastive pre-training. Its most common application is as a measurement instrument to evaluate the correspondence between text and images. For instance, it is explicitly used to measure the construct of `Relevance` by quantifying "text-image correspondence" and to assess the correctness of image descriptions by computing cosine similarity between embeddings. The model's vision and text encoders are also frequently used independently to extract features, which then serve as a basis for calculating visual or textual similarity for tasks like demonstration retrieval or providing training guidance. Beyond evaluation, CLIP is also employed as a baseline for zero-shot classification and as an external tool to identify salient image regions. A single paper presents a conflicting definition, describing CLIP as a dataset for RBP-RNA binding prediction, a usage that diverges from the otherwise consistent framing of CLIP as a VLM.

## Sources

**[Democratizing Fine-grained Visual Recognition with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/49299a8afda8053932a4cfd62fdfd1b9-Paper-Conference.pdf)**
> Vision-language model (e.g., ViT-B/16) used for zero-shot classification by aligning image and text embeddings, employed in FineR for multi-modal classifier construction and noisy name denoising.

## Relationships

### → CLIP
- **Relevance** (constructs) — *measured_by*
  > we employ CLIP (Radford et al., 2021) Score as the Relevance Score to quantify text-image correspondence. (Section 3.2)
  - [Exploring Artificial Image Generation for Stance Detection](https://aclanthology.org/2025.emnlp-main.1004.pdf)
