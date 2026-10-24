# XCOPA
**Type:** Measurement  
**Referenced in:** 14 papers  

## State of the Field

**What it is.** Across papers, XCOPA is most commonly described as a cross-lingual or multilingual benchmark dataset for commonsense or causal reasoning. The prevailing task format is choosing between plausible alternatives, often selecting the most plausible cause or effect from a premise and question; some papers frame this as multiple-choice classification across languages, while another describes it as binary-choice questions across 11 languages. One paper also calls it a cross-lingual adaptation of COPA for commonsense reasoning evaluation.

**What it is claimed to measure.** Papers use XCOPA to measure 2 constructs and no behavioral indicators. The dominant linkage is to Commonsense reasoning, often stated directly as commonsense reasoning or commonsense causal reasoning evaluation, while a smaller line of work treats it as measuring the broader construct Reasoning. The claims therefore concentrate on those two constructs rather than spreading across many others.

**Space of uses.** Papers usually position XCOPA as one member of multilingual benchmark suites, including zero-shot evaluations that cover reasoning, understanding, and generation, or classification-focused setups. It is often paired with XNLI, and also appears alongside XStoryCloze, XWinograd, MGSM, and XQuAD; the snippets mention both zero-shot prompting and use of the whole XCOPA test set. No measurement instrument is linked to it through recorded relationships.

**Concerns raised.** One paper raises a scope concern: although XCOPA is said to prioritize multilingual coverage through translated or templated questions, it is also described there as restricting evaluation to a narrow reasoning format, specifically binary-choice causal inference.

## Sources

**[Adapters for Altering LLM Vocabularies: What Languages Benefit the Most?](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab5492f57995409351cbf1a1cdf5f1a4-Paper-Conference.pdf)**
> A benchmark dataset for evaluating cross-lingual commonsense reasoning through a choice of plausible alternatives task.

## Relationships

### → XCOPA
- **Commonsense reasoning** (constructs) — *measured_by*
  > For NLI and reasoning, we use XNLI (Conneau et al., 2018) and XCOPA (Ponti et al., 2020) with zero-shot prompting. (Section 5.4)
  - [Adapters for Altering LLM Vocabularies: What Languages Benefit the Most?](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab5492f57995409351cbf1a1cdf5f1a4-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We evaluate our models on five widely adopted multilingual benchmarks in a zero-shot setting, covering a range of tasks: ... reasoning (XCOPA; Ponti et al., 2020)... (Section 3)
  - [From Unaligned to Aligned: Scaling Multilingual LLMs with Multi-Way Parallel Corpora](https://aclanthology.org/2025.emnlp-main.374.pdf)
