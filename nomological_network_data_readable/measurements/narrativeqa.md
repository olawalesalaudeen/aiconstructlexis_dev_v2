# NarrativeQA
**Type:** Measurement  
**Referenced in:** 28 papers  

## State of the Field

**What it is.** Across papers, the prevailing description is of NarrativeQA as a long-context question-answering or reading-comprehension benchmark over narrative texts, especially entire books and movie scripts or transcripts. Definitions usually describe questions paired or concatenated with long text and require free-form answers, sometimes as full stories with corresponding QA pairs. Some papers place it within the SCROLL benchmark, while one paper instead describes annotators reading novel summaries to write the questions.

**What it is claimed to measure.** Papers use NarrativeQA to measure 3 behavioral indicators and 2 constructs. The dominant measurement claims are for question answering and document question answering, with a smaller line using it for machine reading comprehension. Among constructs, papers most often use it for long-context understanding, and a smaller line uses it for length generalization, including length extrapolation or evaluations with different input context lengths. Overall, the reported uses spread across several closely related QA and long-context targets.

**Space of uses.** Papers commonly use NarrativeQA as one benchmark within broader long-context evaluation suites, often alongside QASPER, QuALITY, TriviaQA, QMSum, and ContractNLI. They position it as a long-document or open-book QA test, sometimes reporting F1 and sometimes using different context lengths or zero-shot settings to test whether models can leverage long context. One paper also uses it to generate agentic workflow traces from 14.7K training QA pairs. Among linked instruments, only SCROLLS appears, and one paper treats NarrativeQA as related to it.

## Sources

**[Functional Interpolation for Relative Positions improves Long Context Transformers](https://proceedings.iclr.cc/paper_files/paper/2024/file/2f55a8b7b1c2c6312eb86557bb9a2bd5-Paper-Conference.pdf)**
> A question-answering dataset where the task is to generate free-form answers based on provided text segments, such as stories or book chapters.

## Relationships

### → NarrativeQA
- **Question answering** (behaviors tasks) — *measured_by*
  > NarrativeQA (NQA) (Koˇciský et al., 2018) is an established question answering dataset over entire books from Project Gutenberg3 and movie scripts from a list of websites.
  - [Retrieval meets Long Context Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d75f29006df67df084e6586f1cb8458c-Paper-Conference.pdf)
- **Document question answering** (behaviors tasks) — *measured_by*
  > We use NarrativeQA (Koˇcisk´y et al., 2018) ... for evaluating long-document QA.
  - [HELMET: How to Evaluate Long-context Models Effectively and Thoroughly](https://proceedings.iclr.cc/paper_files/paper/2025/file/f5332c8273d02729730a9c24dec2135e-Paper-Conference.pdf)
- **Long-context understanding** (constructs) — *measured_by*
  > Long-context ability evaluation. Following Xiong et al. [94], we evaluated the models on long-sequence tasks, including ... NarrativeQA [44]... (Table 4, Section 4.2)
  - [Gated Slot Attention for Efficient Linear-Time Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3f39e51f5f634fb16cc3e658f8512b9-Paper-Conference.pdf)
- **Length generalization** (constructs) — *measured_by*
  > Figure 2: Length extrapolation on six long benchmarks.
  - [Gated Delta Networks: Improving Mamba2 with Delta Rule](https://proceedings.iclr.cc/paper_files/paper/2025/file/4904fad153f6434a7bcf04465d4be2cc-Paper-Conference.pdf)

### Associated with
- **SCROLLS** (measurements)
  > ...we evaluate MEGALODON on long-context open-book question answering (QA) tasks in the Scrolls dataset (Shaham et al., 2022), including NarrativeQA (Koˇcisk´y et al., 2018)... (Section 4.3).
  - [Megalodon: Efficient LLM Pretraining and Inference with Unlimited Context Length](https://proceedings.neurips.cc/paper_files/paper/2024/file/840abfadd04c967feaa2a49aba94a32d-Paper-Conference.pdf)
