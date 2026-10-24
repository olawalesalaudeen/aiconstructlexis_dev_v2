# PubMedQA
**Type:** Measurement  
**Referenced in:** 44 papers  
**Also known as:** PubmedQA, Pubmedqa  

## State of the Field

**What it is.** Across papers, the prevailing usage is as a biomedical question-answering benchmark or dataset built from PubMed abstracts or articles. Most descriptions say it asks yes/no/maybe questions grounded in a corresponding abstract, though some papers emphasize long-form or free-form answers or explanations, one paper describes biomedical multiple-choice QA, and another presents it simply as a held-out question-answering benchmark. Papers also note corresponding contexts and named subsets such as the pqa_labeled split.

**What it is claimed to measure.** Papers report PubMedQA as measuring five behavioral indicators and two constructs. Medical question answering is the most common reported behavioral indicator, while other papers use it to measure knowledge-based question answering, machine reading comprehension, natural language inference, and question answering; one of these descriptions explicitly treats the yes/no QA setup as an English natural language inference task related to medical research papers. At the construct level, papers report contextual reasoning and medical knowledge, so its claimed measurement use spans several task framings rather than a single target.

**Space of uses.** Across papers, PubMedQA is usually part of broader evaluation suites, appearing alongside other biomedical benchmarks such as BioASQ, MedQA, MedMCQA, ChemProt, and USMLE. Papers position it as a held-out evaluation benchmark, a cross-evaluation benchmark, and an out-of-distribution or distribution-shift test set. Some papers also adapt it, one by using all 274k abstracts as a retrieval knowledge base and another by deriving long-context QA samples, and papers also relate it to MedHallu as a source dataset from which MedHallu is derived.

**Concerns raised.** One paper argues that benchmarks including PubMedQA may be useful for assessing clinical domain knowledge but are not sufficient for evaluating models' practical capabilities in real-world clinical settings.

## Sources

**[Mixture-of-Experts Meets Instruction Tuning: A Winning Combination for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/5222867be1bde4fb2d8ba018c03b3be8-Paper-Conference.pdf) (as "PubmedQA")**
> A held-out question-answering benchmark used in the paper’s single-task finetuning comparisons.

**[Adapting Large Language Models via Reading Comprehension](https://proceedings.iclr.cc/paper_files/paper/2024/file/d51cd79a85833b022841f7a2383b32d3-Paper-Conference.pdf)**
> A question answering dataset designed for biomedical research questions, where answers are yes/no/maybe and may require a long-form explanation.

**[Dynamic Uncertainty Ranking: Enhancing Retrieval-Augmented In-Context Learning for Long-Tail Knowledge in LLMs](https://aclanthology.org/2025.naacl-long.453.pdf) (as "Pubmedqa")**
> Biomedical multiple-choice question-answering dataset used to evaluate LLM performance on domain-specific long-tail knowledge in the medical field.

## Relationships

### → PubMedQA
- **Medical question answering** (behaviors tasks) — *measured_by*
  > For the medical domain, we select the PubMedQA dataset [74], which includes 211.3K artificially generated QA training instances and 1K test instances (Section 4.4).
  - [LISA: Layerwise Importance Sampling for Memory-Efficient Large Language Model Fine-Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/687163285b8affc8ee933bdca8e75747-Paper-Conference.pdf)
- **Medical knowledge** (constructs) — *measured_by*
  > While these benchmarks may be useful for assessing the clinical domain knowledge of LLMs, they are not sufficient for evaluating the practical capabilities of models in assisting healthcare professionals in real-world clinical settings [37]. (Section 2)
  - [EHRNoteQA: An LLM Benchmark for Real-World Clinical Practice Using Discharge Summaries](https://proceedings.neurips.cc/paper_files/paper/2024/file/e15c4afff22f12c4986c1fcb4e941e03-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Knowledge-based question answering** (behaviors tasks) — *measured_by*
  > For knowledge-intensive reasoning, we use datasets that require deep domain understanding. ... PubMedQA (Jin et al., 2019) assesses biomedical reasoning from abstracts
  - [OCEAN: Offline Chain-of-thought Evaluation and Alignment in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9e9dbfc971b5f8e74f41e335ff3d658-Paper-Conference.pdf)
- **Contextual reasoning** (constructs) — *measured_by*
  > we select the PubMedQA dataset and derive long-context QA samples to evaluate the effectiveness of HMT. Two metrics are employed: for long answers, we compute the PPL to assess the contextual reasoning of HMT (Section 5.1)
  - [HMT: Hierarchical Memory Transformer for Efficient Long Context Language Processing](https://aclanthology.org/2025.naacl-long.410.pdf)
- **Natural language inference** (behaviors tasks) — *measured_by*
  > For yes/no QA, we select PubMedQA (Jin et al., 2019), an English natural language inference task related to medical research papers. (Section 4.2)
  - [AQuilt: Weaving Logic and Self-Inspection into Low-Cost, High-Relevance Data Synthesis for Specialist LLMs](https://aclanthology.org/2025.emnlp-main.293.pdf)

### Associated with
- **MedHallu** (measurements)
  > MedHallu comprises 10,000 high-quality question-answer pairs derived from the established PubMedQA dataset.
  - [MedHallu: A Comprehensive Benchmark for Detecting Medical Hallucinations in Large Language Models](https://aclanthology.org/2025.emnlp-main.143.pdf)
