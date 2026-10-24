# Grounded response generation
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Grounded question answering, Source-supported response generation, Knowledge injection  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats this behavior as generating answers or other text that is explicitly backed by documents, source texts, or other verifiable facts. Most definitions emphasize support from provided or retrieved sources, and the strictest formulation requires showing how an answer is systematically entailed by corpus texts, with some answers counted as fully grounded only when that entailment can be shown. A smaller framing describes it as incorporating external facts, references, or constraints into response generation during inference.

**Variants.** Papers study closely related variants under the names grounded question answering, source-supported response generation, and knowledge injection. The settings differ in whether the output is an answer to a question, more general generated text backed by provided source documents, or a response generation process that integrates new knowledge or constraints at inference time. One line centers grounding in a corpus of texts, while another explicitly mentions retrieval giving the model in-context access to large corpora for source-supported responses.

**Space of elicitation and scores.** Papers link this behavior to two measurement instruments, ARC and MedQA, both used in grounding-rate evaluations. In these evaluations, they score the percentage of test hypotheses that are fully groundable in the corpus, reported as grounding rate. No other measurement instrument is linked.

**What it is taken as evidence of.** Papers do not link this behavior to any construct, so there is no shared claim about what construct it reflects. Separately, one paper reports that it is related to natural language inference, using entailment language: when a tree shows that a hypothesis is entailed from corpus texts, the hypothesis is treated as grounded in the corpus.

## Sources

**[From Models to Microtheories: Distilling a Model's Topical Knowledge for Grounded Question-Answering](https://proceedings.iclr.cc/paper_files/paper/2025/file/77d52754ff6b2de5a5d96ee921b6b3cd-Paper-Conference.pdf) (as "Grounded question answering")**
> The observable behavior of providing an answer to a question while also showing how that answer is systematically entailed by a set of verifiable documents or facts.

**[Ward: Provable RAG Dataset Inference via LLM Watermarks](https://proceedings.iclr.cc/paper_files/paper/2025/file/e9409aff8c8a430fd7db7c3ea7fdf581-Paper-Conference.pdf) (as "Source-supported response generation")**
> The observable behavior of generating text that is explicitly backed by information present in provided source documents.

**[Reference Trustable Decoding: A Training-Free Augmentation Paradigm for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/925869234d3aa2a3aad5f05b643974aa-Paper-Conference.pdf) (as "Knowledge injection")**
> Incorporating external facts or references into generated responses during inference.

## Relationships

### Grounded response generation →
- **ARC** (measurements) — *measured_by*
  > Figure 6: % of test hypotheses fully groundable after adding various microtheories (n-sized Random, Usage, QC, & PC Mts) to a base Corpus. ... ARC Grounding Rate (%) of Test Hypotheses
  - [From Models to Microtheories: Distilling a Model's Topical Knowledge for Grounded Question-Answering](https://proceedings.iclr.cc/paper_files/paper/2025/file/77d52754ff6b2de5a5d96ee921b6b3cd-Paper-Conference.pdf)
- **MedQA** (measurements) — *measured_by*
  > Figure 6: % of test hypotheses fully groundable after adding various microtheories (n-sized Random, Usage, QC, & PC Mts) to a base Corpus. ... MedQA Grounding Rate (%) of Test Hypotheses
  - [From Models to Microtheories: Distilling a Model's Topical Knowledge for Grounded Question-Answering](https://proceedings.iclr.cc/paper_files/paper/2025/file/77d52754ff6b2de5a5d96ee921b6b3cd-Paper-Conference.pdf)

### Associated with
- **Natural language inference** (behaviors tasks)
  > If a tree Ti shows how H is entailed from a set of corpus texts Li, we say H is grounded in the corpus.
  - [From Models to Microtheories: Distilling a Model's Topical Knowledge for Grounded Question-Answering](https://proceedings.iclr.cc/paper_files/paper/2025/file/77d52754ff6b2de5a5d96ee921b6b3cd-Paper-Conference.pdf)
