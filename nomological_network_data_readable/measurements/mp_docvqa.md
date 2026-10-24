# MP-DocVQA
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** The available definition treats MP-DocVQA as a benchmark for multi-page document question answering. The same description limits it to documents under 20 pages, and a paper further states that benchmarks such as MP-DocVQA do not assess documents exceeding 20 pages. In retrieval-oriented uses, papers also describe it as covering industrial documents.

**What it is claimed to measure.** Papers use MP-DocVQA to measure two behavioral indicators, Visual question answering and Information retrieval, and no constructs are linked to it. These claims are spread across those two task framings rather than centered on a linked construct, and both uses rely on question-document pairs drawn from MP-DocVQA.

**Space of uses.** No measurement instrument is linked to it, but papers use MP-DocVQA alongside other VQA datasets. One paper groups it with DUDE as a current multi-page document question answering benchmark, while another combines its question-document pairs with ArXivQA, ChartQA, InfographicsVQA, and SlideVQA, plus another figure-focused dataset, to target different document types.

**Concerns raised.** The stated concern is page-length coverage. Papers note that MP-DocVQA is limited to documents under 20 pages and does not assess documents exceeding 20 pages.

## Sources

**[LongDocURL: a Comprehensive Multimodal Long Document Benchmark Integrating Understanding, Reasoning, and Locating](https://aclanthology.org/2025.acl-long.57.pdf)**
> A benchmark for multi-page document question answering, limited to documents under 20 pages.

## Relationships

### → MP-DocVQA
- **Visual question answering** (behaviors tasks) — *measured_by*
  > We collect question-document pairs from a series of VQA datasets, targeting different document types: MP-DocVQA (Tito et al., 2023) for industrial documents... (Sec. 3.3)
  - [VisRAG: Vision-based Retrieval-augmented Generation on Multi-modality Documents](https://proceedings.iclr.cc/paper_files/paper/2025/file/3640a1997a4c9571cea9db2c82e1fc35-Paper-Conference.pdf)
- **Information retrieval** (behaviors tasks) — *measured_by*
  > We employ question-document pairs from various VQA datasets, each targeting distinct document types: MP-DocVQA (Tito et al., 2023) for industrial documents, ArXivQA (Li et al., 2024), ChartQA (Masry et al., 2022), InfographicsVQA (Mathew et al., 2022), and PlotQA (Methani et al., 2020) for different types of figures, as well as SlideVQA (Tanaka et al., 2023) for presentation slides. (Section 3.1)
  - [Unveil: Unified Visual-Textual Integration and Distillation for Multi-modal Document Retrieval](https://aclanthology.org/2025.acl-long.1166.pdf)
