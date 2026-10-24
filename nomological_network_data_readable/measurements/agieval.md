# AGIEval
**Type:** Measurement  
**Referenced in:** 19 papers  
**Also known as:** AgiEval, AGIeval, AGIEVAL, AGI Eval, Agi-Eval  

## State of the Field

**What it is.** Across papers, AGIEval is most commonly described as a benchmark for evaluating foundation or language models on human-centric standardized exams and related human-centric tasks. Definitions usually characterize its content as exam-style questions drawn from sources such as the Gaokao, SAT, GRE, law school admission tests, college admission tests, and civil service examinations, and some descriptions narrow this further to reasoning-oriented exams in English, Math, Law, and Logic. A smaller line of work describes it more broadly as an aggregated or broad-range suite for overall model capabilities across tasks and skills, and one paper specifically calls it a bilingual benchmark for exam performance.

**What it is claimed to measure.** In recorded relationships, papers use AGIEval to measure two constructs, Generalization and Reasoning, and it is not linked to any behavioral indicator. One paper says it runs all English tasks in AGIEval under zero-shot settings to verify Generalization, while another places it among public benchmarks spanning natural language understanding and Reasoning tasks. These uses are split across those two constructs rather than centered on a single reported target.

**Space of uses.** Papers generally position AGIEval as a general evaluation suite, a downstream exam-style benchmark, or an additional capability check, and papers do not link it to any other measurement instrument. Reported uses include zero-shot evaluation on its English tasks to verify Generalization, appendix-only experiments alongside BBH, and use as a prior benchmark whose question-collection approach can be followed. Some descriptions also frame it as a benchmark for overall model capabilities or for evaluating general world knowledge.

## Sources

**[BenTo: Benchmark Reduction with In-Context Transferability](https://proceedings.iclr.cc/paper_files/paper/2025/file/4798eef078de031518beaf54f4b5fb5f-Paper-Conference.pdf) (as "AgiEval")**
> A benchmark designed to evaluate foundation models on human-centric tasks, derived from standardized exams like the Gaokao (Chinese college entrance exam) and American law school admission tests.

**[ALLaM: Large Language Models for Arabic and English](https://proceedings.iclr.cc/paper_files/paper/2025/file/54c15a3033686e7999aecd2740c5a7c4-Paper-Conference.pdf)**
> A benchmark for evaluating the general abilities of foundation models on human-centric standardized exams.

**[Ultra-Sparse Memory Network](https://proceedings.iclr.cc/paper_files/paper/2025/file/d78d68cae595fabadd187b583ee8708e-Paper-Conference.pdf) (as "AGIeval")**
> A benchmark for evaluating foundational models on human-centric standardized tests to measure general model performance.

**[MILU: A Multi-task Indic Language Understanding Benchmark](https://aclanthology.org/2025.naacl-long.507.pdf) (as "AGIEVAL")**
> AGIEVAL, a benchmark referenced as a prior general evaluation suite and as an inspiration for the paper's question-collection approach.

**[LLM Braces: Straightening Out LLM Predictions with Relevant Sub-Updates](https://aclanthology.org/2025.acl-long.393.pdf) (as "AGI Eval")**
> An aggregated benchmark dataset designed to assess the overall capabilities of language models across a wide range of tasks.

## Relationships

### → AGIEval
- **Generalization** (constructs) — *measured_by*
  > Additionally, to verify generalization, we perform all English tasks in AGIEval (Zhong et al., 2023) using zero-shot settings, which presents a collection of human-centric standardized exams.
  - [OpenChat: Advancing Open-source Language Models with Mixed-Quality Data](https://proceedings.iclr.cc/paper_files/paper/2024/file/fc8781fb328fb1fd069584a4519a2709-Paper-Conference.pdf)
