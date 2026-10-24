# MMLongBench-Doc
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** MMLongBench  

## State of the Field

**What it is.** Across the surveyed work, the prevailing description is of a benchmark dataset for multi-modal long-context document understanding or document question answering on lengthy, information-rich documents. Definitions describe extensive or long PDF documents with complex layouts and diverse multi-modal elements, where expert-annotated questions may require integrating text, images, and charts across many pages; some papers refer to it as MMLongBench. The descriptions that give dataset details agree on 135 documents averaging 47.5 pages, with one reporting 1073 questions and another saying the documents span 7 categories.

**What it is claimed to measure.** Most commonly, papers use it to measure long-context document understanding and nearby capabilities rather than a single narrow target. Papers link it to 3 constructs and 2 behavioral indicators: the construct links are Localization ability, Long-context multimodal understanding, and Long-context understanding, and the behavioral-indicator links are Document question answering and Hallucination. One benchmark description further says its question types assess complementary aspects of long-context document understanding, and specifies that 494 single-page questions mainly evaluate localization abilities.

**Space of uses.** In the available uses, papers position it as one benchmark within a larger evaluation suite. It appears with DocBench in experiments on multi-modal long-context document understanding and question answering, and with SlideVQA, DUDE, DocVQA, and VisR-Bench in retrieval-accuracy comparisons for long document understanding. Another paper describes using four datasets from three benchmarks for evaluation and includes MMLongBench among them.

## Sources

**[DocAgent: An Agentic Framework for Multi-Modal Long-Context Document Understanding](https://aclanthology.org/2025.emnlp-main.893.pdf)**
> A benchmark dataset for multi-modal long-context document understanding, comprising extensive PDF documents with expert-annotated questions whose answers may require integrating text, images, and charts across many pages.

**[MoLoRAG: Bootstrapping Document Understanding via Multi-modal Logic-aware Retrieval](https://aclanthology.org/2025.emnlp-main.708.pdf) (as "MMLongBench")**
> A benchmark dataset for evaluating document question answering on lengthy, information-rich documents with diverse multi-modal elements.

## Relationships

### → MMLongBench-Doc
- **Hallucination** (behaviors tasks) — *measured_by*
  > These three types of questions evaluate the LVLMs’s long-context DU capabilities from complementary aspects: the localization ability, the cross-page comprehension ability, and the hallucination severity, respectively. (Section 3.4)
  - [MMLONGBENCH-DOC: Benchmarking Long-context Document Understanding with Visualizations](https://proceedings.neurips.cc/paper_files/paper/2024/file/ae0e43289bffea0c1fa34633fc608e92-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Localization ability** (constructs) — *measured_by*
  > “(1) 494 single-page questions (with one evidence page) mainly to evaluate localization abilities”
  - [MMLONGBENCH-DOC: Benchmarking Long-context Document Understanding with Visualizations](https://proceedings.neurips.cc/paper_files/paper/2024/file/ae0e43289bffea0c1fa34633fc608e92-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Multimodal document understanding** (constructs) — *measured_by*
  > These three types of questions evaluate the LVLMs’s long-context DU capabilities from complementary aspects: the localization ability, the cross-page comprehension ability, and the hallucination severity, respectively. (Section 3.4)
  - [MMLONGBENCH-DOC: Benchmarking Long-context Document Understanding with Visualizations](https://proceedings.neurips.cc/paper_files/paper/2024/file/ae0e43289bffea0c1fa34633fc608e92-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Retrieval effectiveness** (constructs) — *measured_by*
  > “We first evaluate the retrieval accuracy of the Col-retrieval module within SV-RAG and compare it with several baselines on SlideVQA, MMLongBench-Doc, DUDE, DocVQA and VisR-Bench.”
  - [SV-RAG: LoRA-Contextualizing Adaptation of  MLLMs for Long Document Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d40c7b4d78bf7f08ba532542818f6c0-Paper-Conference.pdf)
