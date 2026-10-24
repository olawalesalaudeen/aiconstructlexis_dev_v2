# XQuAD
**Type:** Measurement  
**Referenced in:** 9 papers  
**Also known as:** XQUAD  

## State of the Field

**What it is.** Across the surveyed work, the prevailing framing is a multilingual or cross-lingual question answering benchmark, usually for extractive question answering and reading comprehension across multiple languages. Definitions alternately call it a benchmark dataset, a test set, or a question-answering dataset, and some add format details: one describes it as evaluating answers from a provided context, another as a translation of the SQuAD v1.1 development set into multiple languages, and another as evaluating extractive question answering on Wikipedia paragraphs in multiple languages. A smaller description specifies assessment with F1-score.

**What it is claimed to measure.** Papers use XQuAD to measure three behavioral indicators, and no constructs are linked to it. The linked indicators are multilingual question answering, language understanding task performance, and question answering, with the recorded relationships all stating that those behaviors are measured by XQuAD. Taken together, the linked uses remain within question answering and understanding-related evaluation.

**Space of uses.** Across papers, XQuAD is commonly used alongside other multilingual benchmarks rather than alone. The accompanying instruments named in the papers include MGSM, MLQA, TyDiQA, XCOPA, and XLSum, and papers position XQuAD as the question-answering or reading-comprehension component within broader evaluation suites; one snippet says models are evaluated on multilingual question answering with the XQuAD test set, and another says that for MGSM, XCOPA and XQuAD, the whole test set is adopted. No measurement instrument is linked to XQuAD through the recorded relationship types.

## Sources

**[Fine-Tuning Large Language Models with Sequential Instructions](https://aclanthology.org/2025.naacl-long.288.pdf)**
> A benchmark dataset for evaluating multilingual extractive question answering across several languages.

**[M2Lingual: Enhancing Multilingual, Multi-Turn Instruction Alignment in Large Language Models](https://aclanthology.org/2025.naacl-long.489.pdf) (as "XQUAD")**
> Cross-lingual question answering benchmark assessing reading comprehension in multiple languages using F1-score.

## Relationships

### → XQuAD
- **Multilingual question answering** (behaviors tasks) — *measured_by*
  > For evaluating models on multilingual questions answering, we rely on the XQuAD test set (Artetxe et al., 2020). (Section 4.1.1)
  - [Fine-Tuning Large Language Models with Sequential Instructions](https://aclanthology.org/2025.naacl-long.288.pdf)
- **Language understanding task performance** (behaviors tasks) — *measured_by*
  > Employing various benchmark tasks, including XQuAD (Artetxe et al., 2020) for understanding, MGSM (Shi et al., 2022) for reasoning, X-CSQA (Lin et al., 2021) for knowledge extraction, and XLSum for generation (Hasan et al., 2021)... (Section 2)
  - [How do Large Language Models Handle Multilingualism?](https://proceedings.neurips.cc/paper_files/paper/2024/file/1bd359b32ab8b2a6bbafa1ed2856cf40-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > For NLU tasks, we test on the ... question-answering dataset XQuAD (Artetxe et al., 2020). (Section 4.1).
  - [AdaMergeX: Cross-Lingual Transfer with Large Language Models via Adaptive Adapter Merging](https://aclanthology.org/2025.naacl-long.493.pdf)
