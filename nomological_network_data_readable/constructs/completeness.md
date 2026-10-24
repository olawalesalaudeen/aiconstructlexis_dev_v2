# Completeness
**Type:** Construct  
**Referenced in:** 27 papers  
**Also known as:** Response informativeness, Information coverage, Factual completeness  

## State of the Field

**Definition agreement:** Consensus. Most papers define completeness as whether an answer, summary, or related representation includes or preserves all information relevant to the source, context, or query, with omissions of needed content as the main failure case. A few papers instead talk about retrieving all valid items or about a reasoning system finding a proof whenever one exists, but the dominant usage is the same no-omission coverage property.

**Space of definitions.** Across the surveyed work, the prevailing usage treats completeness as coverage: an answer, summary, or table should include all relevant information or valid items and avoid omissions. Papers express this as retrieving all valid items that satisfy constraints, providing in-depth and in-breadth information, covering all question-relevant points, preserving clinically significant information, or capturing all relevant claims and facts. Smaller lines of work use the same label for different targets, including the completeness of a sub-task decomposition, factual completeness of a claim and its evidence for a non-misleading interpretation, and formal completeness of a reasoning system that can find a valid proof whenever one exists.

**Space of facets.** Papers do not present a single shared subtype scheme, but they often position completeness as one evaluation dimension among other criteria. It appears beside other evaluation dimensions, while one planning paper places it alongside solvability and non-redundancy, and one fact-verification paper treats factual completeness as an extension that complements traditional fact verification. The naming is not uniform: one paper says response informativeness refers to the completeness of the answer, another uses information coverage for capturing all relevant claims and facts, and a reasoning paper uses completeness for proof guarantees rather than content coverage.

**Space of measurement.** At the instrument level, papers link completeness to 2 measurement instruments, FLASK and G-Eval, and to 2 behavioral indicators. FLASK is described as a granular evaluation with skill-specific scores, while G-Eval appears as another evaluation instrument. Across task-specific evaluations, completeness is operationalized as the fraction of ground-truth answers approximately matched, the proportion of covered facts, Likert judgments of whether decomposed tables retain needed information, or tuple-level matching between ground-truth and generated tables; these measurements mostly follow the dominant omission-based definition.

**Links.** Beyond those measurement links, one paper reports that completeness is related to question answering, describing question-answering systems as having attributes such as relevance, verbosity, and completeness. One survey paper claims a causal relationship from hallucination to completeness in planning, citing hallucinations as creating major challenges when assessing if a plan is achievable. No correlational links or links to other constructs are recorded.

## Sources

**[FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf)**
> The extent to which the model retrieves all and only the items that satisfy the given constraints, without omitting valid solutions.

**[PA-RAG: RAG Alignment via Multi-Perspective Preference Optimization](https://aclanthology.org/2025.naacl-long.459.pdf) (as "Response informativeness")**
> The latent ability of a RAG generator to fully utilize valuable information from retrieved documents to produce complete and correct answers.

**[Map&Make: Schema Guided Text to Table Generation](https://aclanthology.org/2025.acl-long.1460.pdf) (as "Information coverage")**
> The ability of a model to capture and represent all relevant claims and facts from a source text in its generated output.

**[The Missing Parts: Augmenting Fact Verification with Half Truth Detection](https://aclanthology.org/2025.emnlp-main.1724.pdf) (as "Factual completeness")**
> The degree to which a claim and its supporting evidence contain all critical context necessary for a non-misleading interpretation.

## Relationships

### Associated with
- **Question answering** (behaviors tasks)
  > question-answering systems can have attributes of relevance, verbosity, and completeness [52].
  - [Decoding-Time Language Model Alignment with Multiple Objectives](https://proceedings.neurips.cc/paper_files/paper/2024/file/57c89126d60c209f48d0e6395c766bb3-Paper-Conference.pdf)
