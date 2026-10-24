# Retrieval quality
**Type:** Construct  
**Referenced in:** 4 papers  
**Also known as:** Knowledge retrieval depth, Retrieval noise reduction  

## State of the Field

**Definition agreement:** Complementary. All papers use retrieval quality for the quality of what a system retrieves, but they foreground different aspects of that same phenomenon: most emphasize relevance or lack of irrelevant material, while others stress completeness, detail, informativeness, or non-redundancy. These differences are about which facet of retrieved information quality matters, so the definitions can be combined without contradiction.

**Space of definitions.** Across the papers, retrieval quality is treated as a property of the retrieval result, namely whether the retrieved material supports answering by being relevant and useful. One framing is broad, describing retrieval of "informative, non-redundant, and relevant documents" and tying it to the model's strategic use of external knowledge sources. Other papers foreground narrower facets, either the depth and completeness of retrieved information for complex questions or the reduction of irrelevant facts in a retrieved subgraph. The disagreement is therefore less about whether retrieval should be useful, and more about whether the construct is broad quality, depth and completeness, or noise reduction, and whether it is framed as model behavior or as an observable outcome.

**Space of facets.** Rather than a shared typology, the papers use nearby labels for different facets of the construct. "Knowledge retrieval depth" emphasizes sufficiently detailed and complete retrieval, while "retrieval noise reduction" emphasizes minimizing irrelevant facts; the broader "retrieval quality" label also includes informativeness, non-redundancy, relevance, retrieval fidelity, and document retrieval accuracy. These labels overlap, but they are used for overlapping rather than identical aspects of retrieval.

**Space of measurement.** Papers link retrieval quality to one measurement instrument and no behavioral indicators. The linked instrument is HotpotQA: one paper uses the evaluation script provided by HotpotQA to score retrieved chunks against referenced facts with F1, precision, and recall. This operationalization centers on agreement between retrieved chunks and referenced facts, while the linked measurement evidence does not explicitly score non-redundancy, depth and completeness, or noise reduction.

**Links.** Beyond measurement, papers link retrieval quality to one other construct. One paper claims a causal relationship from hallucination resistance to retrieval quality, and the cited evidence states that retrieval-augmented generation addresses hallucination issues in LLM responses. No papers report correlational or general relatedness links for this construct.

## Sources

**[StepSearch: Igniting LLMs Search Ability via Step-Wise Proximal Policy Optimization](https://aclanthology.org/2025.emnlp-main.1106.pdf)**
> The degree to which the model retrieves informative, non-redundant, and relevant documents during a search process, reflecting its strategic use of external knowledge sources.

**[Think-on-Graph 2.0: Deep and Faithful Large Language Model Reasoning with Knowledge-guided Retrieval Augmented Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/830b1abc6d2da85f23d41169fa44d185-Paper-Conference.pdf) (as "Knowledge retrieval depth")**
> The extent to which a system can retrieve sufficiently detailed and complete information for answering complex questions.

**[D-RAG: Differentiable Retrieval-Augmented Generation for Knowledge Graph Question Answering](https://aclanthology.org/2025.emnlp-main.1793.pdf) (as "Retrieval noise reduction")**
> The observable outcome of a retrieval process that minimizes the number of irrelevant facts included in the retrieved subgraph.

## Relationships

### Retrieval quality →
- **HotpotQA** (measurements) — *measured_by*
  > “For retrieval quality, we use the evaluation script provided by HotpotQA to measure the F1 score, precision, and recall between the retrieved chunks and referenced facts.”
  - [Knowledge Graph-Guided Retrieval Augmented Generation](https://aclanthology.org/2025.naacl-long.449.pdf)
