# GaoKao
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** GAOKAO  

## State of the Field

**What it is.** Papers most commonly treat GaoKao as an exam-oriented dataset tied to the Chinese National College Entrance Examination. Definitions describe it either as derived from exam questions or as simulating the exam, but they converge on academic subject coverage and reasoning demand: it is used for Chinese physical, chemical, and mathematical reasoning, and is described as requiring complex or high-level reasoning and knowledge integration.

**What it is claimed to measure.** Across papers, the prevailing usage is that GaoKao measures Mathematical reasoning. It is linked to 1 construct, Mathematical reasoning, and no behavioral indicators, so the reported measurement claims converge on a single construct rather than spreading across many. Relationship evidence also describes GAOKAO, alongside ZHONGKAO, as enabling measurement of "a wider range of abilities," while using it to assess model accuracy under chain-of-thought reasoning settings.

**Space of uses.** The available usage examples place GaoKao alongside other datasets rather than in isolation. Papers use it together with ZHONGKAO and CN Middle School 24 in broader evaluation setups, and one reported protocol assesses model accuracy with chain-of-thought reasoning under 0-shot settings for most tasks but uses 5-shot settings for multiple-choice problems in GaoKao.

## Sources

**[Towards Effective and Efficient Continual Pre-training of Large Language Models](https://aclanthology.org/2025.acl-long.289.pdf)**
> A dataset derived from the Chinese National College Entrance Examination questions, used to evaluate models on complex reasoning in subjects like physics, chemistry, and math.

**[T2: An Adaptive Test-Time Scaling Strategy for Contextual Question Answering](https://aclanthology.org/2025.emnlp-main.185.pdf) (as "GAOKAO")**
> An exam-oriented dataset simulating Chinese college entrance exams, covering academic subjects and requiring high-level reasoning and knowledge integration.

## Relationships

### → GaoKao
- **Mathematical reasoning** (constructs) — *measured_by*
  > Using evaluation scripts from Gou et al. (2023), we assess model accuracy through chain-of-thought reasoning under 0-shot settings, except for multiple-choice problems in GaoKao and CN Middle School 24 which use 5-shot settings. (Section 3.2)
  - [Empowering Math Problem Generation and Reasoning for Large Language Model via Synthetic Data based Continual Learning Framework](https://aclanthology.org/2025.emnlp-main.1223.pdf)
