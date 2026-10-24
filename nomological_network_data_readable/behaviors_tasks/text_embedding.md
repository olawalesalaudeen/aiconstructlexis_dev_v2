# Text embedding
**Type:** Behavior  
**Referenced in:** 7 papers  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage describes text embedding as mapping text inputs to dense or fixed-dimensional vector representations that capture semantic content or meaning. Most definitions tie these representations to similarity-based use in downstream methods, and some make the downstream target explicit by referring to classification or retrieval. Some papers also cast LLMs as text embedders, including a formulation in which models take text inputs and output 3072-dimensional vectors.

**Variants.** Papers study this behavior in several settings. Some treat it broadly as embedding tasks, while others narrow it to text similarity, specifically STS tasks, or to downstream tasks such as classification or retrieval. Several papers compare embeddings from different model or fine-tuning layers, and one paper frames the task through contrastive learning as evaluating the ability to contextually model bidirectional information.

**Space of elicitation and scores.** Papers link text embedding to one measurement instrument, MTEB. The linked studies use it either across 32 embedding tasks or on ten text similarity (STS) tasks, so the reported measurement practice centers on MTEB and no other instrument is linked to the behavior.

**What it is taken as evidence of.** No construct is linked to text embedding, and no paper links this behavior to a named construct.

## Sources

**[Weighted Multi-Prompt Learning with Description-free Large Language Model Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/284e7ef68bf3d8fa42abf45a39f29f5e-Paper-Conference.pdf)**
> Mapping text inputs to dense vector representations for similarity-based use in downstream methods.

## Relationships

### Text embedding →
- **MTEB** (measurements) — *measured_by*
  > Through systematic evaluation on 32 embedding tasks from the Massive Text Embedding Benchmark (MTEB) (Muennighoff et al., 2022), we find that intermediate layers often surpass the final layer by up to 16% in downstream accuracy.
  - [Layer by Layer: Uncovering Hidden Representations in Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/skean25a/skean25a.pdf)
