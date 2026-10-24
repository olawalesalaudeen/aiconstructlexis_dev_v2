# CiteSeer
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across the papers, CiteSeer is most commonly described as a real-world citation network dataset of scientific papers or publications. The prevailing usage treats its nodes as papers and uses the dataset for node classification evaluation. A smaller line of work describes a modified CiteSeer for link prediction, with nodes from the original node classification test set removed.

**What it is claimed to measure.** Papers use CiteSeer to measure two behavioral indicators, with claims concentrated on node classification and a smaller usage for link prediction. Across the papers, the dominant framing is that CiteSeer measures node classification, while a single paper reports it as evaluating link prediction. No constructs are linked to it.

**Space of uses.** Papers commonly place CiteSeer in multi-dataset evaluations, most visibly alongside Cora and, in broader benchmark suites, PubMed, ogbn-arXiv, ogbn-products, and Wiki-CS. In node classification studies it appears as one dataset among several benchmark datasets, while in the link prediction use it is paired with a modified Cora and treated as an evaluation dataset after removing the original node classification test nodes.

## Sources

**[GITA: Graph to Visual and Textual Integration for Vision-Language Graph Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/00295cede6e1600d344b5cd6d9fd4640-Paper-Conference.pdf)**
> A real-world citation network dataset where nodes are scientific papers, used for node classification evaluation.

## Relationships

### → CiteSeer
- **Node classification** (behaviors tasks) — *measured_by*
  > In this paper, we adopt the following TAG datasets widely adopted for node classification: CORA (McCallum et al., 2000), CITESEER (Giles et al., 1998), PUBMED (Sen et al., 2008), OGBN-ARXIV, OGBN-PRODUCTS (Hu et al., 2020b), and WIKICS (Mernyei & Cangea, 2020).
  - [Label-free Node Classification on Graphs with Large Language Models (LLMs)](https://proceedings.iclr.cc/paper_files/paper/2024/file/862819c227b16f9af64dd6ad6cfdf275-Paper-Conference.pdf)
- **Link prediction** (behaviors tasks) — *measured_by*
  > our model achieved link prediction accuracies of 95.40% on Cora and 76.14% on CiteSeer, indicating the strong generalization capability of our method. (Section 4.2)
  - [Judge and Improve: Towards a Better Reasoning of Knowledge Graphs with Large Language Models](https://aclanthology.org/2025.emnlp-main.269.pdf)
