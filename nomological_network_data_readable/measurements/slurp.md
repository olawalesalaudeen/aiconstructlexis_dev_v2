# SLURP
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Across the papers, SLURP is most commonly described as a spoken language understanding dataset. Definitions describe a corpus of 16.5k sentences and 72k audio recordings of single-turn interactions with a home assistant, annotated with scenarios, actions, and entities; some uses keep only the reference transcriptions for slot filling, while others treat it as a seed corpus for generating dialogues with diverse intents and interwoven mode switches.

**What it is claimed to measure.** In these papers, SLURP is linked to 3 behavioral indicators and no constructs. The prevailing usage is to measure Information extraction, and papers also use it to measure Intent classification and Sequence understanding, with evidence phrased as "SF SLURP," "intent classification ... with SLURP," and "Sequence Understanding on SLURP."

**Space of uses.** No measurement instrument is linked to it. Papers position SLURP both as a benchmark for common speech tasks, including slot filling and intent classification, and as source material for broader dialogue construction, including work that constructs flows from MultiWOZ2.2 and SLURP and then builds TACT variants from both.

## Sources

**[Bayesian WeakS-to-Strong from Text Classification to Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/495e55f361708bedbab5d81f92048dcd-Paper-Conference.pdf)**
> SLURP is a spoken language understanding dataset used here for slot filling from reference transcriptions of single-turn user interactions.

## Relationships

### → SLURP
- **Information extraction** (behaviors tasks) — *measured_by*
  > “SF SLURP ...”
  - [SALMONN: Towards Generic Hearing Abilities for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/476ab8f369e489c04187ba84f68cfa68-Paper-Conference.pdf)
- **Sequence understanding** (behaviors tasks) — *measured_by*
  > Sequence Understanding on SLURP (Figure 4c)
  - [Improving Semantic Understanding in Speech Language Models via Brain-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/95b7a93e60fdfd10cc202f44fd6adf5f-Paper-Conference.pdf)
- **Intent classification** (behaviors tasks) — *measured_by*
  > We evaluate them on three common speech tasks with corresponding common benchmarks: ... intent classification, a standard SLU task, with SLURP (Bastianelli et al., 2020) (Section 4.4).
  - [Joint Fine-tuning and Conversion of Pretrained Speech and Language Models towards Linear Complexity](https://proceedings.iclr.cc/paper_files/paper/2025/file/9b79416c0dc4b09feaa169ed5cdd63d4-Paper-Conference.pdf)
