# ArXivQA
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** arXiVQA, ArxiVQA  

## State of the Field

**What it is.** Across papers, the prevailing usage treats ArXivQA as a question answering resource built from arXiv or academic-paper figures, most commonly as a VQA dataset consisting of questions about figures from ArXiv academic papers. A smaller line of work instead frames it as a page-level retrieval task, where the question is used as the query and the associated page as the gold document, or as a multiple-choice dataset for document visual question answering in closed- and open-domain settings. One survey describes ArxivQA differently again, as a QA test set generated from recent arXiv abstracts.

**What it is claimed to measure.** Papers link it to 3 behavioral indicators and no constructs. Its measurement claims are spread across information retrieval, question answering, and visual question answering: papers use it as a QA benchmark where answers are produced in natural language, as a VQA dataset targeting figure types, and as question-document pairs for retrieval evaluation.

**Space of uses.** No measurement instrument is directly linked to it. Papers often use it alongside ChartQA, InfographicsVQA, PlotQA, MP-DocVQA, and SlideVQA in document or figure evaluations, and one QA setup groups it with other QA benchmarks. Usage also varies by task: retrieval papers use page-question-answer triplets with the question as the query and the page as the target, while one document VQA paper uses questions, context images, and gold answers from its training set and reports accuracy because the dataset is treated as multiple choice.

**Concerns raised.** A concern that appears in one survey is potential data leakage: it presents a test set generated from recent arXiv abstracts as strictly unseen for evaluation and intended to mitigate leakage.

## Sources

**[VisRAG: Vision-based Retrieval-augmented Generation on Multi-modality Documents](https://proceedings.iclr.cc/paper_files/paper/2025/file/3640a1997a4c9571cea9db2c82e1fc35-Paper-Conference.pdf)**
> A visual question answering (VQA) dataset consisting of questions about figures from ArXiv academic papers.

**[ColPali: Efficient Document Retrieval with Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/99e9e141aafc314f76b0ca3dd66898b3-Paper-Conference.pdf) (as "arXiVQA")**
> A page-level retrieval task built from scientific figures from arXiv, using the question as the query and the associated page as the target.

**[Finding Needles in Images: Can Multi-modal LLMs Locate Fine Details?](https://aclanthology.org/2025.acl-long.1152.pdf) (as "ArxiVQA")**
> A multiple-choice question answering dataset derived from academic papers, used to evaluate document visual question answering performance in both closed- and open-domain settings.

## Relationships

### → ArXivQA
- **Question answering** (behaviors tasks) — *measured_by*
  > Three question-answering (QA) benchmarks: HotpotQA [53], ArxivQA [22], ToolQA [67], where the task is to provide natural language answers to the questions. (Section 5).
  - [AvaTaR: Optimizing LLM Agents for Tool Usage via Contrastive Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2db8ce969b000fe0b3fb172490c33ce8-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > We collect question-document pairs from a series of VQA datasets, targeting different document types: ... ArXivQA (Li et al., 2024b), ChartQA (Masry et al., 2022), InfographicsVQA (Mathew et al., 2022), and PlotQA (Methani et al., 2020) for various figure types... (Sec. 3.3)
  - [VisRAG: Vision-based Retrieval-augmented Generation on Multi-modality Documents](https://proceedings.iclr.cc/paper_files/paper/2025/file/3640a1997a4c9571cea9db2c82e1fc35-Paper-Conference.pdf)
- **Information retrieval** (behaviors tasks) — *measured_by*
  > We employ question-document pairs from various VQA datasets, each targeting distinct document types: MP-DocVQA (Tito et al., 2023) for industrial documents, ArXivQA (Li et al., 2024), ChartQA (Masry et al., 2022), InfographicsVQA (Mathew et al., 2022), and PlotQA (Methani et al., 2020) for different types of figures, as well as SlideVQA (Tanaka et al., 2023) for presentation slides. (Section 3.1)
  - [Unveil: Unified Visual-Textual Integration and Distillation for Multi-modal Document Retrieval](https://aclanthology.org/2025.acl-long.1166.pdf)
