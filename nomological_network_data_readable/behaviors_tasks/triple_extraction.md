# Triple extraction
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Joint entity and relation extraction  

## State of the Field

**Space of definitions.** Across the papers, the shared framing treats this behavior as identifying entities and relations together rather than separately. One paper describes it as joint entity and relation extraction in a single step, with correctness requiring both entity spans, subject and object, and the relation label to exactly match the gold annotation. Another frames it as identifying entities and relations in a question or answer and converting them into head-relation-tail triples, and says the fixed triple structure requires the LLM to extract as many entities and relations from the question as possible.

**Variants.** Authors use both "joint entity and relation extraction" and "triple extraction" for closely related task formulations. The variants differ mainly in setting and output form: one is a few-shot joint extraction setting over named entity spans and semantic relation labels, and the other first identifies entities and relations within a question and then generates triples for the answers.

**Space of elicitation and scores.** No measurement instrument is linked to it in the papers. The only explicit scoring detail is an exact-match rule in the joint extraction setting, where a prediction counts as correct only when both entity spans and the relation label match the gold annotation.

**What it is taken as evidence of.** The papers do not explicitly link this behavior to any construct. As a result, there is no recurring claim in these papers about what this behavior is evidence of.

## Sources

**[WojoodRelations:Arabic Relation Extraction Corpus and Modeling](https://aclanthology.org/2025.emnlp-main.1741.pdf) (as "Joint entity and relation extraction")**
> The observable task of simultaneously identifying named entity spans and the semantic relations that exist between them in a single step.

**[Triples as the Key: Structuring Makes Decomposition and Verification Easier in LLM-based TableQA](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e50b663324972bb8cc7b5c06a059438-Paper-Conference.pdf)**
> Identifying entities and relations in a question or answer and converting them into head-relation-tail triples.
