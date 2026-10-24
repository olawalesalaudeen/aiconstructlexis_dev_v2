# Cora
**Type:** Measurement  
**Referenced in:** 15 papers  
**Also known as:** CORA  

## State of the Field

**What it is.** Across the surveyed papers, the prevailing framing is of Cora as a citation network benchmark: nodes are described as scientific publications, documents, or academic papers, and edges as citation links. Most definitions place it in text-attributed graph or node classification settings, though some papers also use it for node-level and edge-level tasks, and one paper evaluates perplexity, structural understanding, and zero-shot node and link classification on forms labeled Cora-Node and Cora-Link. A smaller line of work also mentions an expanded version of Cora.

**What it is claimed to measure.** Papers link Cora to three behavioral indicators and no constructs. The dominant use is to measure node classification, with papers reporting node classification accuracy on Cora and describing it as widely adopted for that task; smaller lines of work report it as measuring link prediction and graph partitioning, including multi-scale graph partitioning datasets based on Cora. Overall, the measurement claims are concentrated on node classification rather than spread evenly across tasks.

**Space of uses.** Papers do not explicitly relate Cora to another measurement instrument, but they usually use it inside benchmark suites rather than alone, most commonly alongside PubMed and ogbn-arxiv, and also with ogbn-products, PolBlog, and HIV, with several other datasets appearing in individual studies. They typically position it as a benchmark or "well-established TAG dataset"; one paper samples 100 nodes from each dataset with three seeds to reduce sampling bias, while another reports node-level co-training results on Cora.

## Sources

**[Harnessing Explanations: LLM-to-LM Interpreter for Enhanced Text-Attributed Graph Representation Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/1766d75b077b66457040e4661771aec5-Paper-Conference.pdf)**
> A citation network dataset where nodes represent scientific publications, used to evaluate node classification performance on text-attributed graphs.

**[Label-free Node Classification on Graphs with Large Language Models (LLMs)](https://proceedings.iclr.cc/paper_files/paper/2024/file/862819c227b16f9af64dd6ad6cfdf275-Paper-Conference.pdf) (as "CORA")**
> Standard citation network dataset used for node classification, where nodes represent documents and edges represent citation links, used to evaluate annotation and classification performance.

## Relationships

### → Cora
- **Node classification** (behaviors tasks) — *measured_by*
  > Node classification accuracy for the Cora, PubMed, ogbn-arxiv, ogbn-products and tape-arxiv23 datasets. (Table 1)
  - [Harnessing Explanations: LLM-to-LM Interpreter for Enhanced Text-Attributed Graph Representation Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/1766d75b077b66457040e4661771aec5-Paper-Conference.pdf)
- **Link prediction** (behaviors tasks) — *measured_by*
  > our model achieved link prediction accuracies of 95.40% on Cora and 76.14% on CiteSeer, indicating the strong generalization capability of our method. (Section 4.2)
  - [Judge and Improve: Towards a Better Reasoning of Knowledge Graphs with Large Language Models](https://aclanthology.org/2025.emnlp-main.269.pdf)
- **Graph partitioning** (behaviors tasks) — *measured_by*
  > To validate our approach, we construct multi-scale graph partitioning datasets based on Cora and conduct comprehensive experiments. (Section 5.1)
  - [Can Large Language Models Tackle Graph Partitioning?](https://aclanthology.org/2025.emnlp-main.792.pdf)
