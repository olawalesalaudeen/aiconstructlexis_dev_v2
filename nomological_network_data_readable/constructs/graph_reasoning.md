# Graph reasoning
**Type:** Construct  
**Referenced in:** 13 papers  
**Also known as:** Graph reasoning ability  

## State of the Field

**Definition agreement:** Consensus. Most papers define graph reasoning as a model's latent ability to understand, manipulate, infer over, or solve problems on graph-structured data, with only minor differences in emphasis such as relations among entities, specific graph properties, natural language presentation, or use of graph algorithms. One paper instead uses the term for reasoning over graphical or chart data, but that looks like an outlier rather than a substantial alternative definition.

**Space of definitions.** Across the papers, the prevailing usage treats graph reasoning as a facet or latent ability of reasoning over graph-structured data, centered on solving graph problems and inferring properties such as paths, connectivity, or cycles. Several definitions frame it as understanding and solving graph-structured inputs, including natural language descriptions of graphs, and one definition emphasizes understanding, retaining, and manipulating relations among entities. A smaller usage treats it as a task of interpreting and reasoning about data in graphical or chart form, so the definitions vary between a model ability over graph-structured relations and a task label for graphical or chart-form data.

**Space of facets.** The papers organize the construct mainly through task families. One paper places it under Algorithmic reasoning, and others discuss it through Graph connectivity, Shortest path finding, cycle detection, graph recall, or solving more intricate graph problems by identifying nodes, edges, and constraints and applying graph algorithms. Graph recall is described in one paper as a simple yet fundamental task for understanding graph reasoning abilities, while another paper relates graph reasoning to Inductive reasoning as a distinct strength.

**Space of measurement.** No measurement instrument is linked to the construct, and it is linked to two behavioral indicators, Graph connectivity and Shortest path finding, through related rather than measured_by links. In the paper descriptions, authors operationalize it with graph tasks such as Graph connectivity, Shortest path finding, cycle detection, and graph recall, and with solving more intricate graph problems by identifying nodes, edges, and constraints and applying graph algorithms. These operationalizations are task-based and center on problem solving over graph-structured data.

**Links.** Papers connect graph reasoning to nearby reasoning constructs and graph tasks. One paper relates Algorithmic reasoning to graph reasoning, another relates Graph connectivity to graph reasoning and graph reasoning to Shortest path finding through length-2 path problems, and another relates graph reasoning to Inductive reasoning by pairing graph reasoning strength with inductive reasoning advantage. One paper also claims a causal relationship from graph reasoning to Zero-shot generalization, describing strong zero-shot generalizability of graph reasoning capabilities to unseen datasets and KGs without additional training.

## Sources

**[Understanding Transformer Reasoning Capabilities via Graph Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/8f395480c04ac6dfb2c2326a639df88e-Paper-Conference.pdf)**
> A specific facet of algorithmic reasoning focused on solving problems on graph-structured data.

**[Microstructures and Accuracy of Graph Recall by Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/77e6814d32a86b76123bd10aa7e2ad81-Paper-Conference.pdf) (as "Graph reasoning ability")**
> The latent capacity to understand, retain, and manipulate graph-structured information across tasks that involve relations among entities.

## Relationships

### Associated with
- **Algorithmic reasoning** (constructs)
  > In this work, we focus on classes of transformers solving algorithmic reasoning problems on graphs. (Section 1)
  - [Understanding Transformer Reasoning Capabilities via Graph Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/8f395480c04ac6dfb2c2326a639df88e-Paper-Conference.pdf)
- **Graph connectivity** (behaviors tasks)
  > We define the length-2 path problem on a graph, and use it as a means to understand other graph reasoning tasks such as graph connectivity, shortest path, and cycle detection. (Section 3.2)
  - [Mixture of Parrots: Experts improve memorization more than reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5bc3356e0fa1753fff7e8d6628e71b22-Paper-Conference.pdf)
- **Shortest path finding** (behaviors tasks)
  > We define the length-2 path problem on a graph, and use it as a means to understand other graph reasoning tasks such as graph connectivity, shortest path, and cycle detection. (Section 3.2)
  - [Mixture of Parrots: Experts improve memorization more than reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5bc3356e0fa1753fff7e8d6628e71b22-Paper-Conference.pdf)
- **Zero-shot generalization** (constructs)
  > “This highlights the strong zero-shot generalizability of its graph reasoning capabilities to unseen datasets and KGs without additional training.”
  - [Graph-constrained Reasoning: Faithful Reasoning on Knowledge Graphs with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25t/luo25t.pdf)
- **Graph partitioning** (behaviors tasks)
  > Our work represents the first effort to harness LLMs as native structural reasoners for graph partitioning. (Section 2.2)
  - [Can Large Language Models Tackle Graph Partitioning?](https://aclanthology.org/2025.emnlp-main.792.pdf)
