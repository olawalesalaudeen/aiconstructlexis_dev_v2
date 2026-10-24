# Comprehensiveness
**Type:** Construct  
**Referenced in:** 16 papers  
**Also known as:** Answer comprehensiveness  

## State of the Field

**Definition agreement:** Consensus. Most papers define comprehensiveness as the completeness of an output, meaning how fully it covers all relevant information, aspects, facets, or cases needed for the task. A few emphasize particular settings such as source-grounded summaries, multi-document coverage, or answering implicit parts of a query, but these are wording and application differences around the same core property rather than different phenomena.

**Space of definitions.** Across the papers, the prevailing usage is output completeness: comprehensiveness refers to whether a summary, response, review, or other generation contains enough, or all relevant, information to answer the query or support the task. Most definitions vary mainly in the reference standard rather than in kind, with some emphasizing full coverage of an instruction, including implicit and explicit components, some emphasizing all important information or all document perspectives from the source, and others emphasizing a broad range of relevant cases or situational variations. A smaller formulation describes answer comprehensiveness as addressing the full set of important facets needed for a complete answer to an open-ended question.

**Space of facets.** Several papers specify what counts as coverage in setting-specific ways. One line treats answer comprehensiveness as facet coverage and explicitly distinguishes core, background, and follow-up sub-questions, while multi-document summarization work treats it as coverage of perspectives from all documents and aims to avoid missing any document's perspective. One code review paper explicitly describes comprehensiveness as similar to completeness and discusses it alongside relevance and conciseness.

**Space of measurement.** Papers link comprehensiveness to 3 measurement instruments, Expert evaluation, Human evaluation, and LLM-as-a-judge, and no behavioral indicators. The linked operationalization is usually direct scoring of outputs for coverage: judges or experts rate model outputs on 1-to-5 scales, and one LLM-as-a-judge framework includes comprehensiveness as one of several evaluation criteria. Other papers make the coverage test more explicit by asking what percentage of core, background, and follow-up sub-questions are covered, or by treating comprehensiveness in a recall-like way as the fraction of gold reference items covered by generated review sentences; taken together, these operationalizations turn the construct into explicit coverage judgments over needed information, question facets, or reference items.

**Links.** The only construct-level link recorded is that one paper treats Faithfulness as measured by comprehensiveness, together with sufficiency. Beyond that, papers here do not report causal, correlational, or related links involving comprehensiveness.

## Sources

**[PandaLM: An Automatic Evaluation Benchmark for LLM Instruction Tuning Optimization](https://proceedings.iclr.cc/paper_files/paper/2024/file/be3b0d51a2b86cb4ffe50f13480217e0-Paper-Conference.pdf)**
> The extent to which a summary contains enough information to answer the query or support the downstream task, regardless of whether every detail is directly copied from the source documents.

**[Do RAG Systems Cover What Matters? Evaluating and Optimizing Responses with Sub-Question Coverage](https://aclanthology.org/2025.naacl-long.301.pdf) (as "Answer comprehensiveness")**
> The extent to which a response addresses the full set of important facets needed for a complete answer to an open-ended question.

## Relationships

### Comprehensiveness →
- **Human evaluation** (measurements) — *measured_by*
  > Using a 1-5 Likert scale, the judges are asked to rate the model output based on five criteria: comprehensiveness, layness, meaning preservation, conciseness, and fluency. (Section 5.3.3).
  - [VTechAGP: An Academic-to-General-Audience Text Paraphrase Dataset and Benchmark Models](https://aclanthology.org/2025.naacl-long.311.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > The evaluation framework uses multi-perspective criteria by LLM-as-a-judge, such as comprehensiveness, specificity, and relevance. (Section 1)
  - [Multi-perspective Analysis of Large Language Model Domain Specialization: An Experiment in Accounting Audit Procedures Generation](https://aclanthology.org/2025.emnlp-main.891.pdf)

### Associated with
- **Faithfulness** (constructs)
  > To assess the faithfulness of the aforementioned methods, we adopt two complementary criteria: comprehensiveness and sufficiency (DeYoung et al., 2020). (Section 4.2)
  - [NormXLogit: The Head-on-Top Never Lies](https://aclanthology.org/2025.emnlp-main.1769.pdf)
