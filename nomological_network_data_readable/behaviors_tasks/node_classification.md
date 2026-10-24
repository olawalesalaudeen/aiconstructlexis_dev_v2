# Node classification
**Type:** Behavior  
**Referenced in:** 19 papers  
**Also known as:** Node annotation  

## State of the Field

**Space of definitions.** Across definitions, the prevailing usage is a graph task where a model assigns a categorical or class label to a node using node features or attributes together with graph connectivity, connections, or structural context. Many papers frame this as predicting labels for unlabeled or unknown nodes, while some narrow it to one target node per graph sample or to a "?" node whose label must be inferred from neighbouring labels in an undirected graph. Success is usually described as choosing one of discrete class labels, for example, "Classify the article according to its topic into one of the following categories: [Label Set]."

**Variants.** Papers study several variants under the same name. A recurring formulation is a node-level or target-node setting, where each graph sample is used to classify one target node, while other work places the task in text-attributed graphs, using textual features with structural connections. A smaller line of work studies semi-supervised transductive node classification on heterophilic graphs, where the goal is to predict the unknown labels of the remaining nodes, and one formulation focuses specifically on inferring a missing node label from neighbouring node labels.

**Space of elicitation and scores.** Papers measure node classification with 8 linked instruments, all of them evaluation datasets. The most frequently linked are Cora, PubMed, ogbn-arxiv, CiteSeer, and ogbn-products, with Arxiv, STaRK-Amazon, and Wikipedia appearing less often. Scoring is commonly reported as node classification accuracy or downstream task performance on these datasets, and one study elicits it with the instruction, "Which arXiv CS sub-category does this paper belong to?"

**What it is taken as evidence of.** Papers give only a limited construct interpretation. The only linked construct is Local reasoning, and one paper relates node classification to it by saying that node classification, link prediction, and subgraph classification "primarily depend on the local reasoning capabilities of the graph structure." Separately, one paper relates link prediction to node classification by using models trained on node classification tasks directly for link prediction without fine-tuning. No additional construct link appears.

## Sources

**[Can Large Language Models Analyze Graphs like Professionals? A Benchmark, Datasets and Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ff417c3993894694e88ffc4d3f53d28b-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The task of assigning a categorical label to each node in a graph based on its features and connectivity.

**[Label-free Node Classification on Graphs with Large Language Models (LLMs)](https://proceedings.iclr.cc/paper_files/paper/2024/file/862819c227b16f9af64dd6ad6cfdf275-Paper-Conference.pdf) (as "Node annotation")**
> The observable action of a large language model generating a class label for a given node in a graph.

## Relationships

### Node classification →
- **Cora** (measurements) — *measured_by*
  > Node classification accuracy for the Cora, PubMed, ogbn-arxiv, ogbn-products and tape-arxiv23 datasets. (Table 1)
  - [Harnessing Explanations: LLM-to-LM Interpreter for Enhanced Text-Attributed Graph Representation Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/1766d75b077b66457040e4661771aec5-Paper-Conference.pdf)
- **PubMed** (measurements) — *measured_by*
  > Node classification accuracy for the Cora, PubMed, ogbn-arxiv, ogbn-products and tape-arxiv23 datasets. (Table 1)
  - [Harnessing Explanations: LLM-to-LM Interpreter for Enhanced Text-Attributed Graph Representation Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/1766d75b077b66457040e4661771aec5-Paper-Conference.pdf)
- **ogbn-arxiv** (measurements) — *measured_by*
  > Node classification accuracy for the Cora, PubMed, ogbn-arxiv, ogbn-products and tape-arxiv23 datasets. (Table 1)
  - [Harnessing Explanations: LLM-to-LM Interpreter for Enhanced Text-Attributed Graph Representation Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/1766d75b077b66457040e4661771aec5-Paper-Conference.pdf)
- **CiteSeer** (measurements) — *measured_by*
  > In this paper, we adopt the following TAG datasets widely adopted for node classification: CORA (McCallum et al., 2000), CITESEER (Giles et al., 1998), PUBMED (Sen et al., 2008), OGBN-ARXIV, OGBN-PRODUCTS (Hu et al., 2020b), and WIKICS (Mernyei & Cangea, 2020).
  - [Label-free Node Classification on Graphs with Large Language Models (LLMs)](https://proceedings.iclr.cc/paper_files/paper/2024/file/862819c227b16f9af64dd6ad6cfdf275-Paper-Conference.pdf)
- **ogbn-products** (measurements) — *measured_by*
  > Node classification accuracy for the Cora, PubMed, ogbn-arxiv, ogbn-products and tape-arxiv23 datasets. (Table 1)
  - [Harnessing Explanations: LLM-to-LM Interpreter for Enhanced Text-Attributed Graph Representation Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/1766d75b077b66457040e4661771aec5-Paper-Conference.pdf)
- **Arxiv** (measurements) — *measured_by*
  > Using the node classification task on the Arxiv dataset (see Sect. 3.1) as an example, the instruction is structured as follows: Which arXiv CS sub-category does this paper belong to? (Section 2.3.1)
  - [LLMs as Zero-shot Graph Learners: Alignment of GNN Representations with LLM Token Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/0b77d3a82b59e9d9899370b378087faf-Paper-Conference.pdf)

### Associated with
- **Link prediction** (behaviors tasks)
  > We employ models trained on node classification tasks directly for link prediction tasks without any fine-tuning. (Section 3.3)
  - [LLMs as Zero-shot Graph Learners: Alignment of GNN Representations with LLM Token Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/0b77d3a82b59e9d9899370b378087faf-Paper-Conference.pdf)
- **Local reasoning** (constructs)
  > These tasks [node classification, link prediction, and subgraph classification] primarily depend on the local reasoning capabilities of the graph structure. (Abstract)
  - [Can Large Language Models Tackle Graph Partitioning?](https://aclanthology.org/2025.emnlp-main.792.pdf)
