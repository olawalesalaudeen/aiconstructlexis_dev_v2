# MLQA
**Type:** Measurement  
**Referenced in:** 8 papers  

## State of the Field

**What it is.** Papers most commonly describe MLQA as a multilingual question answering dataset or benchmark with extractive question-answer instances in SQuAD format across seven languages. One recurring description says it contains over 5K instances in English, Arabic, German, Spanish, Hindi, Vietnamese, and Simplified Chinese, and another emphasizes its aligned structure, with each question-answer pair present in multiple languages. Smaller descriptions frame it more functionally, as a benchmark for cross-lingual reading comprehension, answer extraction, or comprehension skills across seven languages, and one study uses it as the source for the MLNeedle test.

**What it is claimed to measure.** Across papers, MLQA is linked to one construct and two behavioral indicators. The prevailing usage is to measure multilingual question answering: several papers describe it as facilitating cross-lingual evaluation of QA systems or as representing multilingual open-ended question-answering tasks, and one definition says it evaluates extractive question answering capabilities in multiple languages. Smaller usage treats it as measuring question answering more generally, or natural language understanding framed as comprehension skills across seven languages.

**Space of uses.** Papers do not report direct links from MLQA to other measurement instruments. In task setups, they nevertheless place it alongside XQuAD, TyDiQA, MKQA, and XOR-TyDi QA for multilingual or cross-lingual question answering, and one study lists it among three QA datasets for evaluation. Papers also use it in other ways: one study instantiates MLNeedle from MLQA, while another uses MLQA as the evaluation benchmark for a language skill unlearning task.

## Sources

**[M2Lingual: Enhancing Multilingual, Multi-Turn Instruction Alignment in Large Language Models](https://aclanthology.org/2025.naacl-long.489.pdf)**
> The Multilingual Question Answering dataset, which consists of extractive question-answer instances across seven languages in the SQuAD format, used as the source for the MLNeedle test.

## Relationships

### → MLQA
- **Multilingual question answering** (behaviors tasks) — *measured_by*
  > However, efforts such as MLQA (Lewis et al., 2020) and XQuAD (Artetxe et al., 2019) have introduced datasets supporting multiple languages, facilitating cross-lingual evaluation of QA systems. (Section 5)
  - [Multilingual Needle in a Haystack: Investigating Long-Context Behavior of Multilingual Large Language Models](https://aclanthology.org/2025.naacl-long.267.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > We evaluate our methods on unlearning math-solving, Python-coding, and comprehension skills across seven different languages with GSM8K, MBPP, and MLQA datasets respectively. (Section 6)
  - [Effective Skill Unlearning through Intervention and Abstention](https://aclanthology.org/2025.naacl-long.322.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > MLQA (Lewis et al., 2019): A question-answering benchmark with context passages, questions, and answers.
  - [Transplant Then Regenerate: A New Paradigm for Text Data Augmentation](https://aclanthology.org/2025.emnlp-main.702.pdf)
