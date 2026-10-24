# Multilingual question answering
**Type:** Behavior  
**Referenced in:** 12 papers  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats this as answering questions in multiple languages, usually evaluated on multilingual QA benchmarks. Many formulations make it passage- or context-based, with inputs grounded in provided evidence and responses produced in the respective language. Some papers broaden the task to cross-lingual settings in which the question, context, and answer can be in different languages, and one definition also includes answering from general knowledge as well as context.

**Variants.** Papers study several task variants, most commonly passage-based or context-based multilingual QA, including XQuAD-In and multilingual extractive question answering. A recurring variant is a long-context "needle in a haystack" setting, described as an extension of multilingual question answering that includes both monolingual and cross-lingual retrieval and asks the model to find relevant information in the input context to answer the question. Other papers frame the behavior as multilingual open-domain or open-ended question answering.

**Space of elicitation and scores.** Papers link this behavior to 4 measurement instruments. The most frequently linked are MKQA and MLQA, followed by TyDi QA and XQuAD. The linked instruments are described as multilingual benchmarks or test sets used to compare performance across languages, support cross-lingual evaluation, or align question-answer pairs across multiple languages.

**What it is taken as evidence of.** Recorded relations do not connect multilingual question answering to any construct. In these papers, it appears only as a behavior measured by instruments, not as evidence of a linked construct.

## Sources

**[Data Pruning by Information Maximization](https://proceedings.iclr.cc/paper_files/paper/2025/file/7d848891e365ca623dc8352db9782585-Paper-Conference.pdf)**
> Answering questions in multiple languages as evaluated on a multilingual QA benchmark.

## Relationships

### Multilingual question answering →
- **MLQA** (measurements) — *measured_by*
  > However, efforts such as MLQA (Lewis et al., 2020) and XQuAD (Artetxe et al., 2019) have introduced datasets supporting multiple languages, facilitating cross-lingual evaluation of QA systems. (Section 5)
  - [Multilingual Needle in a Haystack: Investigating Long-Context Behavior of Multilingual Large Language Models](https://aclanthology.org/2025.naacl-long.267.pdf)
- **MKQA** (measurements) — *measured_by*
  > We use a simple multilingual knowledge QA task called MKQA (Longpre et al., 2021), which consists of 10k knowledge question-answer pairs aligned across 26 languages. (Section 6.2).
  - [The Transfer Neurons Hypothesis: An Underlying Mechanism for Language Latent Space Transitions in Multilingual LLMs](https://aclanthology.org/2025.emnlp-main.1618.pdf)
- **TyDi QA** (measurements) — *measured_by*
  > TYDIQA (Clark et al., 2020) is a multilingual question-answer dataset that includes 9 kinds of languages.
  - [Data Pruning by Information Maximization](https://proceedings.iclr.cc/paper_files/paper/2025/file/7d848891e365ca623dc8352db9782585-Paper-Conference.pdf)
- **XQuAD** (measurements) — *measured_by*
  > For evaluating models on multilingual questions answering, we rely on the XQuAD test set (Artetxe et al., 2020). (Section 4.1.1)
  - [Fine-Tuning Large Language Models with Sequential Instructions](https://aclanthology.org/2025.naacl-long.288.pdf)
