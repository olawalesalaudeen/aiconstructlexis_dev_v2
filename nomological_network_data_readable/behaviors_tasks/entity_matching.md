# Entity matching
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Cross-lingual product alignment  

## State of the Field

**Space of definitions.** Across the available definitions, papers treat this as a matching task: identifying when items from different sources refer to the same target. The papers agree on the success criterion, matching the same real-world entity or product, but differ in formulation: one describes deciding whether entities from different knowledge graphs match, while another describes identifying the same product across languages from metadata, including a selection form where a given product metadata record is matched to its counterpart in another language.

**Variants.** The main variants are general entity matching across knowledge graphs and cross-lingual product alignment based on product metadata. Papers use both names, with the cross-lingual variant narrowing the task to products and to matching across languages rather than across knowledge graphs more broadly.

**Space of elicitation and scores.** No measurement instrument is linked to this behavior in the papers.

**What it is taken as evidence of.** No construct is linked to this behavior in the papers.

## Sources

**[KG-FIT: Knowledge Graph Fine-Tuning Upon Open-World Knowledge](https://proceedings.neurips.cc/paper_files/paper/2024/file/f606d45ae7b991988b6eea2af38b7057-Paper-Conference.pdf)**
> Identifying whether entities from different knowledge graphs refer to the same real-world entity.

**[Shopping MMLU: A Massive Multi-Task Online Shopping Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2049d75dd13db049897562bcf7d59da8-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Cross-lingual product alignment")**
> The task of identifying the same product across different languages based on its metadata.

## Relationships

### → Entity matching
- **Semantic understanding** (constructs) — *causes*
  > “LMs provide advanced semantic understanding to build and refine KGs through tasks like EA.”
  - [How do Language Models Reshape Entity Alignment? A Survey of LM-Driven EA Methods: Advances, Benchmarks, and Future](https://aclanthology.org/2025.emnlp-main.1184.pdf)
