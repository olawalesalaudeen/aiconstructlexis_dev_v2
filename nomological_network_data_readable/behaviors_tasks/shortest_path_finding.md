# Shortest path finding
**Type:** Behavior  
**Referenced in:** 10 papers  
**Also known as:** Shortest path prediction, Shortest path identification  

## State of the Field

**Space of definitions.** Most papers treat it as a task of finding the shortest path between two specified nodes, usually in a weighted undirected graph, with success defined as returning the path whose edge weights sum to the minimum total. Some formulations also require generating the path and its distance, while a smaller line narrows the answer format to the exact sequence of nodes on the shortest path.

**Variants.** Across formulations, variation is mainly in what the model must output. Some tasks ask for the actual shortest path for selected node pairs, some query shortest path distance after prompting with two target nodes, and one paper presents the exact path of the shortest path as a harder version. The setting is most explicitly a weighted undirected graph, though one definition states it more generally on a graph.

**Space of elicitation and scores.** No measurement instrument is linked to it. In the recorded relationships, the task itself is used to measure State tracking: one paper argues that solving shortest path requires the model to maintain the state of its exploration in the graph.

**What it is taken as evidence of.** At the construct level, only one construct is linked, Graph reasoning, and the recorded claim is that shortest path finding is related to it rather than measured by it or reported to correlate with it. In that usage, shortest path appears alongside graph connectivity and cycle detection as a graph reasoning task.

## Sources

**[Varying Shades of Wrong: Aligning LLMs with Wrong Answers Only](https://proceedings.iclr.cc/paper_files/paper/2025/file/1aa1fde3661b23ba9b043082069fd144-Paper-Conference.pdf)**
> The task of identifying the path with the minimum total weight between two specified nodes in a weighted, undirected graph.

**[GOFA: A Generative One-For-All Model for Joint Graph Language Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/652c104b5b0652a03684efeaf805463b-Paper-Conference.pdf) (as "Shortest path prediction")**
> The observable task of identifying and generating the shortest path(s) and their distance between two specified nodes in a graph.

**[ReCogLab: a framework testing relational reasoning & cognitive hypotheses on LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/6fc46679a7ba2ec82183cf01b80e5133-Paper-Conference.pdf) (as "Shortest path identification")**
> Generating the exact sequence of nodes representing the shortest path between two nodes in a graph structure.

## Relationships

### Associated with
- **Graph reasoning** (constructs)
  > We define the length-2 path problem on a graph, and use it as a means to understand other graph reasoning tasks such as graph connectivity, shortest path, and cycle detection. (Section 3.2)
  - [Mixture of Parrots: Experts improve memorization more than reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5bc3356e0fa1753fff7e8d6628e71b22-Paper-Conference.pdf)
- **State tracking** (behaviors tasks)
  > In the Shortest Path task, the model must find the shortest path from a given node to another. Intuitively, to effectively solve the problem, the model should maintain the state of its exploration in the graph
  - [SYNC: A Synthetic Long-Context Understanding Benchmark for Controlled Comparisons of Model Capabilities](https://aclanthology.org/2025.emnlp-main.1707.pdf)
