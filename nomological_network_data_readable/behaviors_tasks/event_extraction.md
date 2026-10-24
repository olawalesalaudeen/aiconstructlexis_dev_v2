# Event extraction
**Type:** Behavior  
**Referenced in:** 5 papers  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats event extraction as turning unstructured text into structured event representations. Most commonly, papers describe this as identifying event triggers and extracting or classifying their associated arguments; another formulation focuses on extracting specific life events from conversation with fields such as date, people involved, and description. A narrower legal formulation treats the output as subject-action-object triplets, used to keep sentences containing matching events.

**Variants.** Papers study several settings under this label. One paper explicitly distinguishes sentence-level and document-level event extraction, while domain-specific variants include crop-science categories such as "pest impact" and "new variety release," autobiographical interviewing where events are extracted during conversation and then inserted, merged, or queried in a memory graph, and legal retrieval where "important events" are extracted from case text.

**Space of elicitation and scores.** No measurement instrument is linked to it. Papers instead operationalize the behavior directly as an extraction task, for example asking a model to identify event triggers and extract relevant arguments from an article, extracting events from interviewing conversations, or using SpaCy or an LLM to extract subject-action-object triplets from legal text.

**What it is taken as evidence of.** Papers do not link this behavior to multiple constructs. The only linked construct is Syntactic competence, and one paper claims a causal relationship from Syntactic competence to event extraction, stating that syntax information has been found beneficial for the task; no other construct is linked.

## Sources

**[GuideLLM: Exploring LLM-Guided Conversation with Applications in Autobiography Interviewing](https://aclanthology.org/2025.naacl-long.287.pdf)**
> The observable behavior of identifying and structuring specific life events (with properties like date, people involved, and description) from conversational text.

## Relationships

### → Event extraction
- **Syntactic competence** (constructs) — *causes*
  > Among EE literature, syntax information has been found beneficial for the task (Nguyen et al., 2016; Yan et al., 2019; Liu et al., 2019a; Lai et al., 2020). (Section 1)
  - [Soft Syntactic Reinforcement for Neural Event Extraction](https://aclanthology.org/2025.naacl-long.479.pdf)
