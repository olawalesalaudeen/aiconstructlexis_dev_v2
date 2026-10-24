# ELI5
**Type:** Measurement  
**Referenced in:** 13 papers  
**Also known as:** ELI-5  

## State of the Field

**What it is.** Across papers, ELI5 is most commonly described as an open-ended, long-form question-answering dataset. Definitions usually emphasize user-generated questions about science, history, and everyday life, often sourced from the Reddit "Explain Like I’m Five" forum, with answers expected to be simple and easy to understand, paragraph-length, or otherwise comprehensive and multi-aspect. Some papers foreground factual question answering and helpfulness, while others describe complex QA or LFQA settings, including a WebGPT-collected version with questions, model-generated answers, and supporting context.

**What it is claimed to measure.** Papers link ELI5 to two behavioral indicators and two constructs. The prevailing usage is to measure long-form question answering, and more broadly question answering. A narrower use treats evaluations on ELI5 as measuring trustworthiness and unanswerability detection ability, with table-based evaluations referring to TRUST-SCORE and Grounded Refusals F1.

**Space of uses.** Papers usually position ELI5 as an evaluation benchmark or prompt source for long-form QA and retrieval-augmented generation. It is often used alongside ASQA, and also with NQ-Open, QAMPARI, and C4; papers mention using its test set, using its evaluation set as an out-of-domain evaluation set, and using prompts from the dataset. No measurement instrument is linked to it.

## Sources

**[An Emulator for Fine-tuning Large Language Models using Small Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/389e161125965c0f0ba50420fee45774-Paper-Conference.pdf)**
> Open-ended question-answering dataset of user-generated questions about science, history, and everyday life used to evaluate factual question answering and helpfulness.

## Relationships

### → ELI5
- **Long-form question answering** (behaviors tasks) — *measured_by*
  > Table 2: Accuracy on various long-form NLP tasks. ... Long-form QA ... ELI5 (Table 2)
  - [A Theory for Token-Level Harmonization in Retrieval-Augmented Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/5a461bdff86cc07e976bb6c518810398-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > We run experiments on two question- answering datasets, namely NQ-Open and ELI5. (Section 3.1)
  - [Pointwise Mutual Information as a Performance Gauge for Retrieval-Augmented Generation](https://aclanthology.org/2025.naacl-long.78.pdf)
- **Trustworthiness** (constructs) — *measured_by*
  > Table 2: LLaMA family evaluated on the ASQA, QAMPARI, and ELI5 datasets. ... TRUST := TRUST-SCORE (Table 2)
  - [Measuring and Enhancing Trustworthiness of LLMs in RAG through Grounded Attributions and Learning to Refuse](https://proceedings.iclr.cc/paper_files/paper/2025/file/4c88827decab6c046b881a2c3a99c76f-Paper-Conference.pdf)
- **Unanswerability detection ability** (constructs) — *measured_by*
  > Table 2: LLaMA family evaluated on the ASQA, QAMPARI, and ELI5 datasets. ... F1GR := Grounded Refusals F1 (Table 2)
  - [Measuring and Enhancing Trustworthiness of LLMs in RAG through Grounded Attributions and Learning to Refuse](https://proceedings.iclr.cc/paper_files/paper/2025/file/4c88827decab6c046b881a2c3a99c76f-Paper-Conference.pdf)
