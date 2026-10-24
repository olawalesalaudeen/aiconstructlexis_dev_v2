# CLUTRR
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** CLUTRR dataset  

## State of the Field

**What it is.** Papers variously describe CLUTRR as a benchmark or dataset for reasoning over family relations in text. Definitions frame it as relation inference from partial graph descriptions in natural language, family relation path reasoning, and a diagnostic benchmark for inductive reasoning from text; other descriptions call it a deductive reasoning dataset requiring multi-hop reasoning over family relationships or a relational reasoning benchmark based on human-written stories about family relations. One paper also uses the CLUTRR dataset as the basis for the NoRa-Commonsense task.

**What it is claimed to measure.** Papers link CLUTRR to 4 constructs and no behavioral indicators. The recorded measured_by links span Inductive reasoning, Logical reasoning, Multi-hop reasoning, and Relational reasoning, so papers use it to measure several reasoning constructs rather than a single one. In the relationship evidence, authors describe it as a "deductive reasoning dataset requiring multi-hop reasoning over family relationships" and as a relational reasoning benchmark.

**Space of uses.** Papers do not link CLUTRR to any other measurement instrument. Instead, they position it as a direct benchmark for relation inference and family-relation reasoning, and one paper uses the CLUTRR dataset as the basis for the NoRa-Commonsense task.

## Sources

**[FLARE: Faithful Logic-Aided Reasoning and Exploration](https://aclanthology.org/2025.emnlp-main.1193.pdf)**
> A benchmark for relation inference that requires deducing familial relations from partial graph descriptions in natural language.

**[Can Language Models Perform Robust Reasoning in Chain-of-thought Prompting with Noisy Rationales?](https://proceedings.neurips.cc/paper_files/paper/2024/file/dfaa29ed28dfa175bcc5e2a54aa199f8-Paper-Conference.pdf) (as "CLUTRR dataset")**
> A dataset geared towards family relation path reasoning, used as the basis for the commonsense reasoning tasks in the NoRa benchmark.

## Relationships

### → CLUTRR
- **Logical reasoning** (constructs) — *measured_by*
  > CLUTRR [41] is a deductive reasoning dataset requiring multi-hop reasoning over family relationships. (Section 4).
  - [LoFiT: Localized Fine-tuning on LLM Representations](https://proceedings.neurips.cc/paper_files/paper/2024/file/122ea6470232ee5e79a2649243348005-Paper-Conference.pdf)
- **Multi-hop reasoning** (constructs) — *measured_by*
  > CLUTRR [41] is a deductive reasoning dataset requiring multi-hop reasoning over family relationships. (Section 4).
  - [LoFiT: Localized Fine-tuning on LLM Representations](https://proceedings.neurips.cc/paper_files/paper/2024/file/122ea6470232ee5e79a2649243348005-Paper-Conference.pdf)
- **Relational reasoning** (constructs) — *measured_by*
  > CLUTRR (Sinha et al., 2019) is a relational reasoning benchmark based on human-written stories about family relations. (Section 4.1)
  - [SymBa: Symbolic Backward Chaining for Structured Natural Language Reasoning](https://aclanthology.org/2025.naacl-long.124.pdf)
- **Inductive reasoning** (constructs) — *measured_by*
  > Other datasets like bAbI (Weston et al., 2015), CLUTRR (Sinha et al., 2019)... target specific reasoning types such as deductive, inductive, abductive, temporal, spatial, and mathematical reasoning.
  - [Do Large Language Models excel in Complex Logical Reasoning with Formal Language?](https://aclanthology.org/2025.emnlp-main.855.pdf)
