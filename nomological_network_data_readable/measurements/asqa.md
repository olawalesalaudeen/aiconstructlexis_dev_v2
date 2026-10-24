# ASQA
**Type:** Measurement  
**Referenced in:** 23 papers  

## State of the Field

**What it is.** Across papers, ASQA is most commonly treated as a benchmark or dataset for long-form question answering, especially ambiguous factoid questions. Definitions describe it as an attributable long-form QA benchmark, an open-domain dataset for ambiguous factoid queries collected from AmbigQA, and a benchmark that requires answers to cover multiple possible interpretations of a question. A smaller line of work describes it more specifically as question-answering data for long-form, multi-hop answers with supporting evidence and citation quality, and papers mention both test-set evaluation and use of the training split as a question source.

**What it is claimed to measure.** Measurement claims are spread across several targets rather than centering on one recurring target. Papers link ASQA to 3 behavioral indicators and 3 constructs; named uses span ambiguous question answering, long-form question answering, factuality, trustworthiness, and unanswerability detection ability, plus 1 other behavioral indicator. In these uses, one paper follows ASQA's official metrics, Disambiguous-Rouge with ROUGE-L and Disambig-F1, to report factual correctness, while another evaluates on ASQA with TRUST-SCORE and Grounded Refusals F1 when reporting trustworthiness and unanswerability detection ability.

**Space of uses.** No measurement instrument is linked to ASQA, but papers often use it alongside other evaluation datasets, most often ELI5 and also QAMPARI, SituatedQA, and TriviaQA. The prevailing positioning is as a benchmark or evaluation set for comparing model outputs, and some authors also use it to evaluate citation generation outputs. One paper instead uses questions from the training split to construct training data.

**Concerns raised.** One paper raises an annotation concern: ASQA is described as extending AmbigQA with long-form answers that cover multiple possible interpretations, but its annotation process is said to create logical inconsistencies when linking different answer components.

## Sources

**[Measuring and Enhancing Trustworthiness of LLMs in RAG through Grounded Attributions and Learning to Refuse](https://proceedings.iclr.cc/paper_files/paper/2025/file/4c88827decab6c046b881a2c3a99c76f-Paper-Conference.pdf)**
> A benchmark dataset for attributable, long-form question-answering tasks used for evaluation.

## Relationships

### → ASQA
- **Trustworthiness** (constructs) — *measured_by*
  > Table 2: LLaMA family evaluated on the ASQA, QAMPARI, and ELI5 datasets. ... TRUST := TRUST-SCORE (Table 2)
  - [Measuring and Enhancing Trustworthiness of LLMs in RAG through Grounded Attributions and Learning to Refuse](https://proceedings.iclr.cc/paper_files/paper/2025/file/4c88827decab6c046b881a2c3a99c76f-Paper-Conference.pdf)
- **Unanswerability detection ability** (constructs) — *measured_by*
  > Table 2: LLaMA family evaluated on the ASQA, QAMPARI, and ELI5 datasets. ... F1GR := Grounded Refusals F1 (Table 2)
  - [Measuring and Enhancing Trustworthiness of LLMs in RAG through Grounded Attributions and Learning to Refuse](https://proceedings.iclr.cc/paper_files/paper/2025/file/4c88827decab6c046b881a2c3a99c76f-Paper-Conference.pdf)
- **Ambiguous question answering** (behaviors tasks) — *measured_by*
  > We utilize the most recent ambiguous QA dataset, ASQA (Stelmakh et al., 2022). (Section 2)
  - [Diversify-verify-adapt: Efficient and Robust Retrieval-Augmented Ambiguous Question Answering](https://aclanthology.org/2025.naacl-long.56.pdf)
- **Long-form question answering** (behaviors tasks) — *measured_by*
  > “To the best of our knowledge, ASQA (Stelmakh et al., 2022) is the only dataset that falls into this category. ASQA is a long-form QA dataset derived from a subset of ambiguous questions in the AmbigNQ dataset (Min et al., 2020). Its statistics and corresponding URL are provided in Table 4. The dataset is designed to evaluate how well systems can generate comprehensive answers that cover all valid interpretations.”
  - [Disambiguation in Conversational Question Answering in the Era of LLMs and Agents: A Survey](https://aclanthology.org/2025.emnlp-main.482.pdf)
- **Factuality** (constructs) — *measured_by*
  > In this paper, to evaluate the quantitative performance of methods on ASQA, we follow the official metrics and report: Disambiguous-Rouge (DR) as the overall score, which combines ROUGE-L (R-L) (Lin, 2004) for text quality and Disambig-F1 (Dis-F1; QA accuracy score based on RoBERTa large (Liu et al., 2019)) for factual correctness.
  - [Efficient Real-time Refinement of Language Model Text Generation](https://aclanthology.org/2025.emnlp-main.1753.pdf)
