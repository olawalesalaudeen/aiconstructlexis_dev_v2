# Cycle detection
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats this as deciding whether a graph contains a cycle. Definitions align on a binary success criterion: one paper states to "return 1 if there exists a cycle of any length ≥ 3 and 0 otherwise," while another describes it as determining whether a cycle exists in a graph structure presented through text input.

**Variants.** Papers use both "cycle detection" and "cycle check" for the task. The variation that appears is mainly in presentation and evaluation setting: some descriptions use a given graph G, another uses graph structure described in text, and one paper reports task performance separately on complete graphs and path graphs.

**Space of elicitation and scores.** No measurement instrument is linked to it. In the task formulations that are described, the behavior is elicited through a yes or no, or 1 or 0, judgment about whether a cycle exists, and papers report performance with accuracy.

**What it is taken as evidence of.** No construct is linked to it, so the papers do not specify a broader construct that this behavior is taken to indicate.

## Sources

**[Understanding Transformer Reasoning Capabilities via Graph Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/8f395480c04ac6dfb2c2326a639df88e-Paper-Conference.pdf)**
> The task of determining whether a given graph contains a cycle of any length.
