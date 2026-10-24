# SlideVQA
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across papers, SlideVQA is most commonly described as a public dataset for visual question answering on presentation slides. Definitions and snippets describe each document or slide as 20 pages long, and one study reports 1,919 slides in the training set, 400 in the test set, and 300 in development. A smaller description refers to it as an existing open-source visual document question-answering dataset used to derive refined queries in a data construction process.

**What it is claimed to measure.** Papers link SlideVQA to 1 construct and 2 behavioral indicators. The prevailing measurement use is for Information retrieval, with studies evaluating retrieval accuracy on SlideVQA or drawing question-document pairs for presentation slides. It is also used to measure Visual question answering, and one paper reports it as measuring Long-context understanding, noting that it contains 20-page documents and cross-page questions (12.9%).

**Space of uses.** Papers commonly place SlideVQA alongside other document benchmarks. One study compares retrieval baselines on it together with MM-LongBench, DUDE, DocVQA, and VisR-Bench, another uses it with MP-DocVQA and other document and figure VQA datasets to cover different document types, and one paper uses it as the source from which queries are refined.

## Sources

**[SV-RAG: LoRA-Contextualizing Adaptation of  MLLMs for Long Document Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d40c7b4d78bf7f08ba532542818f6c0-Paper-Conference.pdf)**
> A public dataset for visual question answering on presentation slides, where each document consists of 20 pages.

## Relationships

### → SlideVQA
- **Information retrieval** (behaviors tasks) — *measured_by*
  > We first evaluate the retrieval accuracy of the Col-retrieval module within SV-RAG and compare it with several baselines on SlideVQA (Tanaka et al., 2023), MM-LongBench (Ma et al., 2024d), DUDE (Van Landeghem et al., 2023), DocVQA (Mathew et al., 2020; 2021) and VisR-Bench. (Section 5)
  - [SV-RAG: LoRA-Contextualizing Adaptation of  MLLMs for Long Document Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d40c7b4d78bf7f08ba532542818f6c0-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > We collect question-document pairs from a series of VQA datasets, targeting different document types: ... and SlideVQA (Tanaka et al., 2023) for presentation slides. (Sec. 3.3)
  - [VisRAG: Vision-based Retrieval-augmented Generation on Multi-modality Documents](https://proceedings.iclr.cc/paper_files/paper/2025/file/3640a1997a4c9571cea9db2c82e1fc35-Paper-Conference.pdf)
