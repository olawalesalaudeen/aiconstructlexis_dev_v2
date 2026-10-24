# Citation quality
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Attribution groundedness  

## State of the Field

**Definition agreement:** Consensus. Most papers define citation quality as the quality or latent ability of a model's citations to be relevant to the response and to support the specific claims they are attached to, especially in RAG settings. A single paper shifts emphasis to selecting impactful and credible scholarly sources in surveys, but the dominant use is still citation grounding and support, so the construct is mostly defined the same way.

**Space of definitions.** Across the surveyed work, the prevailing usage treats citation quality as a grounding and attribution property of generated responses: whether a model cites relevant source passages, whether those citations support the attached claims, and whether it avoids irrelevant or unsupported citations. This framing appears both as a latent model ability and as overall citation correctness or appropriateness at the claim level. A smaller line of work uses the near-synonymous label Attribution Groundedness for the same support-based idea in RAG, while another broadens the construct to the scholarly quality of references, emphasizing academically impactful, relevant, and credible sources and checking for fabricated or hallucinated references.

**Space of facets.** Papers break the construct into recurring facets of citation recall and precision, support for atomic claims, and, in one evaluation, the distribution of citation positions through a coefficient of variation. One paper explicitly places it under "honesty for RAG application," describing responses as firmly rooted in the provided documents while maintaining appropriate attribution. The naming is not fully uniform: Citation quality and Attribution Groundedness are used for closely similar support-and-relevance notions, while the survey-generation framing also includes citation performance, author influence, and venue reputation.

**Space of measurement.** Papers link citation quality to one measurement instrument and no behavioral indicators. The linked instrument is TRUE, an NLI model used for entailment judgment in citation quality evaluation; beyond this, papers operationalize the construct with automatic relevance metrics over cited passages, claim-level citation recall and precision plus citation-position variation, an F1 groundedness score from citation precision and recall, and citation accuracy checks for fabricated or hallucinated references. These operationalizations mostly track the dominant definitions around support and relevance, though the survey-generation usage extends measurement to citation performance, author influence, and venue reputation.

**Links.** The recorded links are measurement links rather than causal or correlational claims. Multiple papers say citation quality is measured by TRUE, and one paper reports that Faithfulness is measured by citation quality through whether a system's response cites relevant passages.

## Sources

**[PA-RAG: RAG Alignment via Multi-Perspective Preference Optimization](https://aclanthology.org/2025.naacl-long.459.pdf)**
> The latent ability of a model to correctly identify and reference relevant source passages when generating a response, reflecting its grounding and traceability.

**[Measuring and Enhancing Trustworthiness of LLMs in RAG through Grounded Attributions and Learning to Refuse](https://proceedings.iclr.cc/paper_files/paper/2025/file/4c88827decab6c046b881a2c3a99c76f-Paper-Conference.pdf) (as "Attribution groundedness")**
> The quality of an LLM's generated citations in a RAG context, specifically whether the citations are relevant and sufficiently support the claims they are attached to.

## Relationships

### Citation quality →
- **TRUE** (measurements) — *measured_by*
  > We use TRUE3, a fine-tuned T5-11B (Raffel et al., 2020) model as the NLI model for the judgement of entailment in citation quality. (Section 4)
  - [ALiiCE: Evaluating Positional Fine-grained Citation Generation](https://aclanthology.org/2025.naacl-long.23.pdf)

### Associated with
- **Faithfulness** (constructs)
  > Using passage-level relevance judgments for all queries (or qrels) information available in MIRACL, we evaluate whether the system’s response cites the relevant passages, crucial for measuring faithfulness.
  - [MIRAGE-Bench: Automatic Multilingual Benchmark Arena for Retrieval-Augmented Generation Systems](https://aclanthology.org/2025.naacl-long.14.pdf)
