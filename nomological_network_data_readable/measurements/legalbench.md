# LegalBench
**Type:** Measurement  
**Referenced in:** 9 papers  
**Also known as:** Legal-bench  

## State of the Field

**What it is.** Papers most commonly describe LegalBench as a benchmark or benchmark suite for evaluating legal reasoning in language models, and one paper says it consists of 162 tasks covering various aspects of legal reasoning. A smaller line of work calls it a dataset for evaluating reasoning and hallucination in legal contexts and for assessing domain-specific factual accuracy. Papers also refer to specific parts of the benchmark, including the International Citizenship Questions sub-task and the Definition Extraction task, and one paper presents LegalBench-Instruct as derived from LegalBench through prompt refinement.

**What it is claimed to measure.** Across papers, claims converge on a single construct: LegalBench is used to measure legal reasoning. It is linked to 1 construct and no behavioral indicators, and several papers describe it as evaluating various aspects of legal reasoning, measuring legal reasoning in large language models, or providing problem templates for profiling legal reasoning. One definition also extends its use to reasoning and hallucination in legal contexts, but the linked measurement claim centers on legal reasoning.

**Space of uses.** No measurement instrument is linked to it. In practice, papers use it for cross-evaluation, including alongside PubMedQA, and also as a targeted evaluation through selected tasks or templates, such as International Citizenship Questions, Definition Extraction, or problem templates derived from LegalBench. One paper further reports using balanced accuracy on LegalBench to assess generalization in legal domains.

## Sources

**[TrimLLM: Progressive Layer Dropping for Domain-Specific LLMs](https://aclanthology.org/2025.acl-long.33.pdf) (as "Legal-bench")**
> A benchmark suite for evaluating language models on legal reasoning tasks, used for cross-evaluation.

**[Hallucination Detox: Sensitivity Dropout (SenD) for Large Language Model Training](https://aclanthology.org/2025.acl-long.276.pdf)**
> Dataset for evaluating reasoning and hallucination in legal contexts, used to assess model performance in domain-specific factual accuracy.

## Relationships

### → LegalBench
- **Legal reasoning** (constructs) — *measured_by*
  > “For Law: We use the International Citizenship Questions sub-task in LegalBench [39].”
  - [BAM! Just Like That: Simple and Efficient Parameter Upcycling for Mixture of Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/665bb142d4b9f55660cb89bb56a66fe1-Paper-Conference.pdf)
