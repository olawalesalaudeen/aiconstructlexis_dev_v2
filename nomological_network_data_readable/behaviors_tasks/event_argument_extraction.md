# Event argument extraction
**Type:** Behavior  
**Referenced in:** 6 papers  
**Also known as:** Event Argument Extraction, Argument extraction  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage treats this behavior as identifying event arguments and assigning each one a specific role in text, typically with the event trigger already given. A smaller formulation, used for scientific events, describes it as finding the text spans that serve as arguments for a scientific event and classifying them into roles such as Context, Method, or Result. Papers therefore converge on argument finding plus role assignment, though they differ in whether the task is stated generically or within scientific activities.

**Variants.** Papers use both the names 'Event Argument Extraction' and 'Argument extraction'. Some work studies it as a cross-lingual transfer task, with one paper stating that the evaluation spans 20 languages. In scientific-event settings, authors further split it into Argument Identification, predicting the set of argument spans per event, and Argument Classification, predicting the semantic role for each identified span.

**Space of elicitation and scores.** Papers link this behavior to 2 measurement instruments, CASIE and TextEE. CASIE appears in a table of datasets used for training, evaluation, or both in GoLLIE: Annotation Guidelines improve Zero-Shot Information-Extraction, while BEMEAE: Moving Beyond Exact Span Match for Event Argument Extraction says it adopts TextEE to compare models and focuses on defining correctness at the event argument level.

**What it is taken as evidence of.** No construct is linked to this behavior by the papers.

## Sources

**[Constrained Decoding for Cross-lingual Label Projection](https://proceedings.iclr.cc/paper_files/paper/2024/file/67390075fe466276797f489115582cdc-Paper-Conference.pdf) (as "Event Argument Extraction")**
> The task of identifying event arguments and their specific roles in text, given the presence of an event trigger.

**[SciEvent: Benchmarking Multi-domain Scientific Event Extraction](https://aclanthology.org/2025.emnlp-main.871.pdf) (as "Argument extraction")**
> The task of identifying text spans that serve as arguments for a scientific event and classifying them into specific semantic roles like Context, Method, or Result.

## Relationships

### Event argument extraction →
- **TextEE** (measurements) — *measured_by*
  > In our study, while we adopt TextEE to compare models, our primary focus is on defining correctness at the event argument level. (Section 3).
  - [BEMEAE: Moving Beyond Exact Span Match for Event Argument Extraction](https://aclanthology.org/2025.naacl-long.295.pdf)
