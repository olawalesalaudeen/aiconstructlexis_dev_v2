# CodeNet
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Across these papers, the dominant framing treats CodeNet as a source corpus for code research rather than as a standalone evaluation protocol. Definitions describe it as a competitive programming dataset, and one paper adds that it "collects data from online judge websites" (DCE-LLM: Dead Code Elimination with Large Language Models). Papers use different slices of that corpus: C++ submissions and problem trajectories for constructing PIE, material for extending a code-to-code semantic search evaluation set to more languages, and source code for a dead-code dataset.

**What it is claimed to measure.** Papers do not link CodeNet to any constructs or behavioral indicators through explicit measurement claims. Instead, they report it as underlying data for resources such as PIE, a code-to-code search evaluation set, and a dead-code dataset, so these papers do not state that CodeNet measures a particular construct.

**Space of uses.** No measurement instrument is linked to it. The recurring use is as upstream data for derived resources: one paper states, "Our dataset is constructed based on performance-improving edits (PIE) made by human programmers in a range of competitive programming tasks from CodeNet" (Learning Performance-Improving Code Edits), while other papers position it as the data source for a dead-code dataset or for extending an existing Code2Code search evaluation set.

## Sources

**[CODE REPRESENTATION LEARNING AT SCALE](https://proceedings.iclr.cc/paper_files/paper/2024/file/cfbba5249393100ada0bfb37557d2fd9-Paper-Conference.pdf)**
> A competitive programming dataset used as the source of C++ submissions and problem trajectories for constructing PIE.
