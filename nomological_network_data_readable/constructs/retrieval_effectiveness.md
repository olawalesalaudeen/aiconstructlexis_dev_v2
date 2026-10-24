# Retrieval effectiveness
**Type:** Construct  
**Referenced in:** 9 papers  
**Also known as:** Contextual relevance  

## State of the Field

**Definition agreement:** Consensus. Most papers define retrieval effectiveness as how well retrieved documents or chunks align with the user's query and broader context, with only minor differences in emphasis such as consistency, contextual grounding, or going beyond surface similarity. One paper instead uses the term for how well a model's generated response connects to an input hate speech passage, but that looks like an outlier rather than a widely shared alternative definition.

**Space of definitions.** Across the surveyed work, the prevailing usage stays within retrieval, describing either a system's ability to consistently return relevant documents for a query, with query-document alignment and contextual grounding, or, more narrowly, a retrieved chunk's alignment with the broader query and document context beyond surface-level semantic similarity. A smaller line of work uses the related label contextual relevance for generated outputs rather than retrieved ones, defining it as a model's ability to produce responses that are meaningfully connected to the source input and address its claims and biases. The main disagreements are therefore over scope, overall retrieval quality versus chunk-level contextual fit, and over locus, retrieved material versus generated response.

**Space of facets.** Papers most often organize the concept around contextual alignment. One retrieval paper treats contextual relevance as one of two dimensions, alongside semantic similarity, for expanding and filtering candidate chunks, while another ties retrieval effectiveness to query-document alignment and contextual grounding as features of retrieval quality. The contextual relevance label is therefore used both as a dimension within retrieval and, in a smaller line of work, for response relevance in counterspeech generation.

**Space of measurement.** Operationalization is narrow and benchmark-based. Papers link the construct to 2 measurement instruments, BEIR and MS MARCO, both explicitly named as retrieval benchmarks for evaluating retrieval effectiveness, and to 1 behavioral indicator overall, Reward hacking, though that indicator appears in a causal claim rather than as a measurement device. This operationalization matches the broad retrieval-quality framing most directly, while the narrower contextual-relevance definition beyond surface similarity is not linked to a separate human evaluation, LLM-as-a-judge, probe, or analysis instrument.

**Links.** Beyond measurement, one paper claims a causal relationship from Reward hacking to Retrieval effectiveness. Its supporting text says that increased energy loss reduces the upper bound of contextual relevance in LLMs and presents this as an aspect of reward hacking. No papers report a correlation or an undirected related link.

## Sources

**[KG-CQR: Leveraging Structured Relation Representations in Knowledge Graphs for Contextual Query Retrieval](https://aclanthology.org/2025.emnlp-main.824.pdf)**
> The degree to which a retrieval system consistently returns relevant documents in response to a query, reflecting the quality of query-document alignment and contextual grounding.

**[SAKI-RAG: Mitigating Context Fragmentation in Long-Document RAG via Sentence-level Attention Knowledge Integration](https://aclanthology.org/2025.emnlp-main.63.pdf) (as "Contextual relevance")**
> The latent trait reflecting how well a retrieved chunk aligns with the broader context of the user's query and document structure, beyond surface-level semantic similarity.

## Relationships

### Retrieval effectiveness →
- **MS MARCO** (measurements) — *measured_by*
  > We evaluate retrieval effectiveness using two retrieval benchmarks: MS MARCO (Bajaj et al., 2016) and BEIR (Thakur et al., 2021).
  - [ExpandR: Teaching Dense Retrievers Beyond Queries with LLM Guidance](https://aclanthology.org/2025.emnlp-main.963.pdf)
- **BEIR** (measurements) — *measured_by*
  > We evaluate retrieval effectiveness using two retrieval benchmarks: MS MARCO (Bajaj et al., 2016) and BEIR (Thakur et al., 2021).
  - [ExpandR: Teaching Dense Retrievers Beyond Queries with LLM Guidance](https://aclanthology.org/2025.emnlp-main.963.pdf)
- **MMLongBench-Doc** (measurements) — *measured_by*
  > “We first evaluate the retrieval accuracy of the Col-retrieval module within SV-RAG and compare it with several baselines on SlideVQA, MMLongBench-Doc, DUDE, DocVQA and VisR-Bench.”
  - [SV-RAG: LoRA-Contextualizing Adaptation of  MLLMs for Long Document Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d40c7b4d78bf7f08ba532542818f6c0-Paper-Conference.pdf)
