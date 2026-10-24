# Knowledge integration
**Type:** Construct  
**Referenced in:** 9 papers  
**Also known as:** Knowledge adaptation  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the definitions, the prevailing framing treats knowledge integration as a latent capacity to update or incorporate new factual knowledge, either by changing internal representations over time or by bringing new facts into internal parameters or retrieval-augmented context while preserving existing knowledge. A smaller line of work uses the same label for combining and leveraging external resources rather than internal updating: one paper describes leveraging external scientific domain knowledge, task-specific instructions, and expert-curated guidance, noting that models "often fail in leveraging extensive broader information" (Large Language-Geometry Model: When LLM meets Equivariance), while another says LLMs "excel at merging structured educational knowledge graphs ... with unstructured textual data" into contextualized instructional content (Position: LLMs Can be Good Tutors in English Education). The main disagreement is between internal knowledge change and the combination of structured, unstructured, or expert-provided external inputs.

**Space of facets.** Papers do not present a stable facet structure for this construct. Instead, the term spans at least three scopes: updating knowledge over time, incorporating new facts into parameters or retrieval-augmented context without disrupting existing knowledge, and combining external information sources such as scientific guidance or educational graphs plus text. In this usage, the same name is applied both to model-level knowledge change and to the integration of external resources into outputs or task performance.

**Space of measurement.** No measurement instrument is linked to knowledge integration, and no benchmark, human evaluation, LLM-as-a-judge, probe, or analysis is named as measuring it. The only linked behavioral indicator is multi-hop question answering, which one paper relates to the construct by saying that standard multi-hop QA requires integrating information between passages in a retrieval corpus. This makes the operationalization narrower than the full range of definitions, because it is expressed through passage-level information integration rather than direct measurement of internal updating or the combination of external scientific or educational knowledge.

**Links.** One paper claims a causal relationship from long-term memory to knowledge integration, describing HippoRAG as enabling "deeper and more efficient knowledge integration over new experiences." One paper also relates knowledge integration to multi-hop question answering, stating that standard multi-hop QA requires integrating information between passages in a retrieval corpus. No paper reports a correlational link.

## Sources

**[Large Language-Geometry Model: When LLM meets Equivariance](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25b/li25b.pdf)**
> The model's underlying capacity to incorporate new factual knowledge into its internal parameters or retrieval-augmented context without disrupting existing knowledge.

## Relationships

### → Knowledge integration
- **Long-term memory** (constructs) — *causes*
  > HippoRAG, a novel retrieval framework inspired by the hippocampal indexing theory of human long-term memory to enable deeper and more efficient knowledge integration over new experiences. (Abstract)
  - [HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ddc001d07ca4f319af96a3024f6dbd1-Paper-Conference.pdf)

### Associated with
- **Reasoning** (constructs)
  > According to Chen et al. (2024), the realization of reasoning ability hinges on two core components: (1) possessing extensive general knowledge of the world, and (2) effectively integrating new information into an existing knowledge base. (Section 2)
  - [KOR-Bench: Benchmarking Language Models on Knowledge-Orthogonal Reasoning Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/c6f5851a0d9cb435ed8b50e87bd6a257-Paper-Conference.pdf)
