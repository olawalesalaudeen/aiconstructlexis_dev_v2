# MMLU-Medical
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** MMLU clinical  

## State of the Field

A subset of the MMLU benchmark containing exam questions from nine subjects relevant to medicine, used to assess broad medical knowledge.

## Sources

**[MedSafetyBench: Evaluating and Improving the Medical Safety of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3ac952d0264ef7a505393868a70a46b6-Paper-Datasets_and_Benchmarks_Track.pdf)**
> A subset of the MMLU benchmark containing exam questions from nine subjects relevant to medicine, used to assess broad medical knowledge.

**[Instruction Tuning Large Language Models to Understand Electronic Health Records](https://proceedings.neurips.cc/paper_files/paper/2024/file/62986e0a78780fe5f17b495aeded5bab-Paper-Datasets_and_Benchmarks_Track.pdf) (as "MMLU clinical")**
> The clinical subset of the Massive Multitask Language Understanding (MMLU) benchmark, based on the US Medical Licensing Examination.

## Relationships

### → MMLU-Medical
- **Medical knowledge** (constructs) — *measured_by*
  > While these benchmarks may be useful for assessing the clinical domain knowledge of LLMs, they are not sufficient for evaluating the practical capabilities of models in assisting healthcare professionals in real-world clinical settings [37]. (Section 2)
  - [EHRNoteQA: An LLM Benchmark for Real-World Clinical Practice Using Discharge Summaries](https://proceedings.neurips.cc/paper_files/paper/2024/file/e15c4afff22f12c4986c1fcb4e941e03-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Medical question answering** (behaviors tasks) — *measured_by*
  > we use Google Translate to translate the questions and answers from the medical-clinical section of the MMLU dataset (Section 3.1.2).
  - [Efficiently Democratizing Medical LLMs for 50 Languages via a Mixture of Language Family Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/1551c01d7a3d0bf21e2518331e9f7074-Paper-Conference.pdf)
