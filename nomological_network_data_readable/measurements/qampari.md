# QAMPARI
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the surveyed definitions, QAMPARI is most commonly described as a benchmark dataset for attributable, factoid question answering, used for evaluation. The definitions converge that questions may have multiple answers, and one paper specifies this more narrowly as a factoid QA dataset in which each answer is "a list of entities drawn from different passages." Papers also describe it as a setting for evaluating precision and recall in attributed generation.

**What it is claimed to measure.** The recorded measurement claims do not converge on a single target. Papers link QAMPARI to 2 constructs and no behavioral indicators: it is reported as measuring Trustworthiness and Unanswerability detection ability, in both cases through measured_by links. One definition also frames it as evaluating precision and recall in attributed generation, so its documented use spans these evaluation targets rather than centering on only one.

**Space of uses.** Papers use QAMPARI as an evaluation dataset, often alongside ASQA and ELI5. As one study puts it, "Evaluations on the benchmark datasets ASQA, QAMPARI, and ELI5 show that models trained with TRUST-ALIGN outperform the competitive baselines" (Measuring and Enhancing Trustworthiness of LLMs in RAG through Grounded Attributions and Learning to Refuse), and the same paper states that it evaluates on the QAMPARI test set. No measurement instrument is linked to QAMPARI through the recorded relationships.

## Sources

**[Measuring and Enhancing Trustworthiness of LLMs in RAG through Grounded Attributions and Learning to Refuse](https://proceedings.iclr.cc/paper_files/paper/2025/file/4c88827decab6c046b881a2c3a99c76f-Paper-Conference.pdf)**
> A benchmark dataset for attributable, factoid question-answering tasks where questions may have multiple answers, used for evaluation.

## Relationships

### → QAMPARI
- **Trustworthiness** (constructs) — *measured_by*
  > Table 2: LLaMA family evaluated on the ASQA, QAMPARI, and ELI5 datasets. ... TRUST := TRUST-SCORE (Table 2)
  - [Measuring and Enhancing Trustworthiness of LLMs in RAG through Grounded Attributions and Learning to Refuse](https://proceedings.iclr.cc/paper_files/paper/2025/file/4c88827decab6c046b881a2c3a99c76f-Paper-Conference.pdf)
- **Unanswerability detection ability** (constructs) — *measured_by*
  > Table 2: LLaMA family evaluated on the ASQA, QAMPARI, and ELI5 datasets. ... F1GR := Grounded Refusals F1 (Table 2)
  - [Measuring and Enhancing Trustworthiness of LLMs in RAG through Grounded Attributions and Learning to Refuse](https://proceedings.iclr.cc/paper_files/paper/2025/file/4c88827decab6c046b881a2c3a99c76f-Paper-Conference.pdf)
