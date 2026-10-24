# Medical question answering
**Type:** Behavior  
**Referenced in:** 40 papers  
**Also known as:** Biomedicine inquiry answering, Answering medical questions, Biomedical question answering, Medical answer generation  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats this behavior as answering questions in biomedical research and clinical contexts. Most descriptions focus on an LLM producing answers to medical knowledge or patient-care queries, while some narrow it to open-ended questions about medical conditions or broaden it to answer generation that should be accurate, comprehensive, clinically relevant, or informative. A smaller line of work frames the task as answering complex biomedicine inquiries by retrieving entities such as drugs, diseases, or genes from a biomedical knowledge base.

**Variants.** Papers study it in several settings. The most common variants are benchmark or exam style medical QA, often multiple choice, including translated medical-clinical questions, single and multiple-choice questions in the medical field, and questions tied to biomedical licensing exams. Other variants include open-domain medical question-answer pairs, open-ended questions about common medical conditions, multi-round clinical diagnosis and treatment records, question answering from scientific abstracts, and precision medicine inquiries; nearby names include biomedical question answering, biomedicine inquiry answering, answering medical questions, and medical answer generation.

**Space of elicitation and scores.** Papers link this behavior to 10 instruments overall. The most frequently linked are MedQA, PubMedQA, MMLU, MedMCQA, and CMB-Clin; the rest are other benchmark datasets and one evaluation framework, covering multiple-choice medical QA, biomedical QA, translated medical-clinical questions, open-domain or record-based clinical question answering, and open-ended medical consultation tasks. Separate from these measured_by links, one paper claims a causal relationship from Mol-Instructions to medical question answering.

**What it is taken as evidence of.** Across the papers, no construct is linked to this behavior. As a result, the available relations do not specify what named construct medical question answering is taken to indicate.

## Sources

**[LISA: Layerwise Importance Sampling for Memory-Efficient Large Language Model Fine-Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/687163285b8affc8ee933bdca8e75747-Paper-Conference.pdf)**
> The observable task of answering questions related to biomedical research and clinical contexts.

**[STaRK: Benchmarking LLM Retrieval on Textual and Relational Knowledge Bases](https://proceedings.neurips.cc/paper_files/paper/2024/file/e607b1419e9ae7cd5cb5b5bb60c2ad5c-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Biomedicine inquiry answering")**
> The task of retrieving entities such as drugs, diseases, or genes from a biomedical knowledge base to answer complex questions.

**[MedSafetyBench: Evaluating and Improving the Medical Safety of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3ac952d0264ef7a505393868a70a46b6-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Answering medical questions")**
> The observable action of an LLM providing responses to queries regarding medical knowledge or patient care.

**[DIDS: Domain Impact-aware Data Sampling for Large Language Model Training](https://aclanthology.org/2025.emnlp-main.215.pdf) (as "Biomedical question answering")**
> The observable task of answering questions related to biology and medicine, often requiring specialized domain knowledge.

**[Scalable Language Model with Generalized Continual Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/79fe2c290c0566f88617e9c5bd593441-Paper-Conference.pdf) (as "Medical answer generation")**
> The task of generating informative and accurate textual answers to questions in the medical domain.

## Relationships

### Medical question answering →
- **MedQA** (measurements) — *measured_by*
  > After training on MedAlpaca for Medical (M) domain or MedAlpaca/Alpaca-GPT4 for Medical&General (M&G) domain, we test the models at round 60 on the evaluation datasets for Medical (M) domain, i.e., MedQA [10], and MedMCQA [22]. (Section 4.2)
  - [DoFIT: Domain-aware Federated Instruction Tuning with Alleviated Catastrophic Forgetting](https://proceedings.neurips.cc/paper_files/paper/2024/file/9be9407431b7ff8cc04cae5460fcb7ab-Paper-Conference.pdf)
- **PubMedQA** (measurements) — *measured_by*
  > For the medical domain, we select the PubMedQA dataset [74], which includes 211.3K artificially generated QA training instances and 1K test instances (Section 4.4).
  - [LISA: Layerwise Importance Sampling for Memory-Efficient Large Language Model Fine-Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/687163285b8affc8ee933bdca8e75747-Paper-Conference.pdf)
- **MedMCQA** (measurements) — *measured_by*
  > After training on MedAlpaca for Medical (M) domain or MedAlpaca/Alpaca-GPT4 for Medical&General (M&G) domain, we test the models at round 60 on the evaluation datasets for Medical (M) domain, i.e., MedQA [10], and MedMCQA [22]. (Section 4.2)
  - [DoFIT: Domain-aware Federated Instruction Tuning with Alleviated Catastrophic Forgetting](https://proceedings.neurips.cc/paper_files/paper/2024/file/9be9407431b7ff8cc04cae5460fcb7ab-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > For this evaluation, we use three medical QA datasets, including MMLU (Hendrycks et al., 2021), MedDDx (Su et al., 2024), and AfrimedQA (Olatunji et al., 2024).
  - [Multimodal Medical Code Tokenizer](https://raw.githubusercontent.com/mlresearch/v267/main/assets/su25b/su25b.pdf)
- **MMLU-Med** (measurements) — *measured_by*
  > We evaluate our RAG2 framework using three closed-book medical QA benchmarks—MedQA (Jin et al., 2021), MedMCQA (Pal et al., 2022), and MMLU-Med (Hendrycks et al., 2021)—where no oracle documents are present. (Section 1)
  - [Rationale-Guided Retrieval Augmented Generation for Medical Question Answering](https://aclanthology.org/2025.naacl-long.635.pdf)
- **MMCU-Medical** (measurements) — *measured_by*
  > Our experiments are conducted on two open-source query sets: MMCU-Medical (Zeng, 2023) and CMB-Exam (Wang et al., 2023d) datasets, which are designed for multi-task Q&A and encompass single and multiple-choice questions in the medical field (Section 5.1)
  - [HyKGE: A Hypothesis Knowledge Graph Enhanced RAG Framework for Accurate and Reliable Medical LLMs Responses](https://aclanthology.org/2025.acl-long.580.pdf)
- **CMB-Exam** (measurements) — *measured_by*
  > Our experiments are conducted on two open-source query sets: MMCU-Medical (Zeng, 2023) and CMB-Exam (Wang et al., 2023d) datasets, which are designed for multi-task Q&A and encompass single and multiple-choice questions in the medical field (Section 5.1)
  - [HyKGE: A Hypothesis Knowledge Graph Enhanced RAG Framework for Accurate and Reliable Medical LLMs Responses](https://aclanthology.org/2025.acl-long.580.pdf)
- **CMB-Clin** (measurements) — *measured_by*
  > one open-domain Q&A dataset CMB-Clin (Wang et al., 2023d) which is the inaugural multi-round question-answering dataset based on real, complex medical diagnosis and treatment records. (Section 5.1)
  - [HyKGE: A Hypothesis Knowledge Graph Enhanced RAG Framework for Accurate and Reliable Medical LLMs Responses](https://aclanthology.org/2025.acl-long.580.pdf)
- **MinosEval** (measurements) — *measured_by*
  > To address the limitations of traditional metrics for open-ended medical consultation tasks, we adopt MinosEval (Fan et al., 2025), a framework for evaluating medical question answering. (Section 4.2)
  - [Leveraging Knowledge Graph-Enhanced LLMs for Context-Aware Medical Consultation](https://aclanthology.org/2025.emnlp-main.1549.pdf)
- **MMLU-Medical** (measurements) — *measured_by*
  > we use Google Translate to translate the questions and answers from the medical-clinical section of the MMLU dataset (Section 3.1.2).
  - [Efficiently Democratizing Medical LLMs for 50 Languages via a Mixture of Language Family Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/1551c01d7a3d0bf21e2518331e9f7074-Paper-Conference.pdf)
