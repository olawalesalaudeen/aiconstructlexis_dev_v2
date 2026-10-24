# Link prediction
**Type:** Behavior  
**Referenced in:** 17 papers  

## State of the Field

**Space of definitions.** Most papers describe link prediction as inferring whether an edge or connection exists between two nodes in a graph. A smaller line of work narrows it to knowledge graphs, where the task is to predict a missing relation or entity, or to identify the most plausible tail entity for a query such as (h, r, ?). Across these formulations, the target is missing graph structure, expressed as an edge, relation, or entity.

**Variants.** Variants span general graph edge prediction and knowledge graph settings. Some authors situate link prediction within knowledge graph completion and discuss it alongside triple classification, while others study it alongside node classification, including a setting where models trained on node classification are applied directly to link prediction without fine-tuning. Other task variants use edges attached to removed nodes as prediction targets, and one study reports temporal knowledge graph experiments on ICEWS14 and ICEWS05-15.

**Space of elicitation and scores.** Papers measure link prediction with five linked instruments, most often FB15k-237, CiteSeer, Cora, PubMed, and WN18RR. These instruments are dataset benchmarks, covering both knowledge graph and graph datasets. Scoring is described with Mean Reciprocal Rank and Hit@N in some work, while other papers report accuracy, including on Cora and CiteSeer.

**What it is taken as evidence of.** Papers link it to two constructs, and the framing is not uniform. One paper uses it to measure task generalization by applying models trained on node classification directly to link prediction without fine-tuning. Another paper treats it as related to local reasoning, describing link prediction, node classification, and subgraph classification as tasks that primarily depend on the local reasoning capabilities of graph structure.

## Sources

**[Large Language Models-guided Dynamic Adaptation for Temporal Knowledge Graph Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0fd17409385ab9304e5019c6a6eb327a-Paper-Conference.pdf)**
> The specific task of predicting missing relations or entities in a knowledge graph, evaluated using metrics like MRR and Hit@N.

## Relationships

### Link prediction →
- **FB15k-237** (measurements) — *measured_by*
  > We carry out experiments on the KG link prediction and triple classification tasks, where the popular datasets WN18RR (Dettmers et al., 2018) and FB15k-237 (Toutanova and Chen, 2015) as well as FB15k-237N (Lv et al., 2022) are utilized.
  - [Self-supervised Quantized Representation for Seamlessly Integrating Knowledge Graphs with Large Language Models](https://aclanthology.org/2025.acl-long.667.pdf)
- **PubMed** (measurements) — *measured_by*
  > We then employ Cora, History, and Amazon ratings to evaluate node classification downstream task performance, PubMed for link prediction task performance, and HIV for graph classification task performance. (Section 4.4)
  - [Text-space Graph Foundation Models: Comprehensive Benchmarks and New Insights](https://proceedings.neurips.cc/paper_files/paper/2024/file/0e0b39c69663e9c073739adf547ed778-Paper-Datasets_and_Benchmarks_Track.pdf)
- **WN18RR** (measurements) — *measured_by*
  > We carry out experiments on the KG link prediction and triple classification tasks, where the popular datasets WN18RR (Dettmers et al., 2018) and FB15k-237 (Toutanova and Chen, 2015) as well as FB15k-237N (Lv et al., 2022) are utilized.
  - [Self-supervised Quantized Representation for Seamlessly Integrating Knowledge Graphs with Large Language Models](https://aclanthology.org/2025.acl-long.667.pdf)
- **Cora** (measurements) — *measured_by*
  > our model achieved link prediction accuracies of 95.40% on Cora and 76.14% on CiteSeer, indicating the strong generalization capability of our method. (Section 4.2)
  - [Judge and Improve: Towards a Better Reasoning of Knowledge Graphs with Large Language Models](https://aclanthology.org/2025.emnlp-main.269.pdf)
- **CiteSeer** (measurements) — *measured_by*
  > our model achieved link prediction accuracies of 95.40% on Cora and 76.14% on CiteSeer, indicating the strong generalization capability of our method. (Section 4.2)
  - [Judge and Improve: Towards a Better Reasoning of Knowledge Graphs with Large Language Models](https://aclanthology.org/2025.emnlp-main.269.pdf)

### Associated with
- **Node classification** (behaviors tasks)
  > We employ models trained on node classification tasks directly for link prediction tasks without any fine-tuning. (Section 3.3)
  - [LLMs as Zero-shot Graph Learners: Alignment of GNN Representations with LLM Token Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/0b77d3a82b59e9d9899370b378087faf-Paper-Conference.pdf)
- **Knowledge graph completion** (behaviors tasks)
  > our work focuses on KGC, specifically addressing two tasks: (i) triple classification, assessing the correctness of a given triple (h, r, t), and (ii) link prediction, identifying the most plausible tail entity t for a given query (h, r, ?). (Section 3)
  - [Enhancing Large Language Model for Knowledge Graph Completion via Structure-Aware Alignment-Tuning](https://aclanthology.org/2025.emnlp-main.1061.pdf)
- **Local reasoning** (constructs)
  > These tasks [node classification, link prediction, and subgraph classification] primarily depend on the local reasoning capabilities of the graph structure. (Abstract)
  - [Can Large Language Models Tackle Graph Partitioning?](https://aclanthology.org/2025.emnlp-main.792.pdf)
- **Task generalization** (constructs)
  > We employ models trained on node classification tasks directly for link prediction tasks without any fine-tuning. (Section 3.3)
  - [LLMs as Zero-shot Graph Learners: Alignment of GNN Representations with LLM Token Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/0b77d3a82b59e9d9899370b378087faf-Paper-Conference.pdf)
