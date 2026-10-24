# T-REx
**Type:** Measurement  
**Referenced in:** 8 papers  

## State of the Field

**What it is.** Across the definitions, T-REx is most commonly described as a slot-filling or relation-extraction benchmark. Papers describe it as a slot filling dataset for factual relation extraction-style prediction, sometimes more specifically as a large-scale slot-filling dataset derived from Wikipedia abstracts and aligned with Wikidata triples, and one paper places it in the KILT subset of evaluation tasks; a smaller line of work instead describes it as an open-ended QA dataset derived from knowledge base triples and used to test factual recall on rare relational knowledge.

**What it is claimed to measure.** Papers link T-REx to one behavioral indicator, Information extraction, and to no constructs. The prevailing usage is to measure Information extraction, with the evidence framed as slot filling, including table labels such as "Slot Filling" and descriptions of T-REx as a slot-filling task, so the reported measurement claims converge on a single indicator rather than spreading across several targets.

**Space of uses.** Papers use T-REx as a task within broader evaluation suites rather than as a standalone protocol paired with other linked instruments. It is described as part of a KILT subset where "the subset consists of seven tasks: ... T-REx", and elsewhere it is grouped with other slot-filling datasets or listed in long-form NLP task tables under slot filling; no measurement instrument is linked to it.

## Sources

**[RA-DIT: Retrieval-Augmented Dual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/536d18fbb454f80221465f1a42c6f389-Paper-Conference.pdf)**
> A slot filling dataset used to evaluate factual relation extraction-style prediction from text or knowledge.

## Relationships

### → T-REx
- **Information extraction** (behaviors tasks) — *measured_by*
  > two slot filling datasets: T-REx (ElSahar et al., 2018) and Zero-Shot RE (Petroni et al., 2021);
  - [Think-on-Graph: Deep and Responsible Reasoning of Large Language Model on Knowledge Graph](https://proceedings.iclr.cc/paper_files/paper/2024/file/10a6bdcabbd5a3d36b760daa295f63c1-Paper-Conference.pdf)
