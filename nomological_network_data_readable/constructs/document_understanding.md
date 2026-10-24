# Document understanding
**Type:** Construct  
**Referenced in:** 27 papers  
**Also known as:** Document comprehension, Document reasoning, Document-level understanding  

## State of the Field

**Definition agreement:** Complementary. Most papers define document understanding as a broad capability to comprehend, interpret, and reason over a document's content together with its structure, layout, or multimodal elements. A few papers narrow this to specific task settings such as document question answering or information extraction from document images, so they focus on different facets or operationalizations of the same underlying phenomenon rather than a different construct.

**Space of definitions.** Across papers, the prevailing usage is a broad capacity to comprehend, extract, and interpret information from documents, often with multimodal or structural content such as text, images, tables, figures, layout, or positional cues. Several definitions explicitly include content, structure, and context, and some narrow the setting to structured visual documents such as forms or invoices or to multi-page documents. A smaller line of work defines it through question answering over a retrieved document or document image, while another paper focuses on synthesizing relationships across an entire document rather than isolated sentences; papers also vary on whether they cast it as a latent ability or as an observable task.

**Space of facets.** Papers use nearby labels with overlapping but not identical scope. Document comprehension usually carries the broader framing that integrates content with structure, context, layout, or positional cues, whereas document-level understanding is reserved for synthesis across texts, paragraphs, or chapters within a document and for identifying relationships beyond isolated sentences. Some authors also use document understanding as an umbrella over document question answering and other document tasks such as classification or information extraction.

**Space of measurement.** Operationalization in these papers is benchmark-based: document understanding is linked to nine measurement instruments and no behavioral indicators. DocVQA is the most common instrument, followed by ChartQA, InfoVQA, SROIE, and AI2D, with four other instruments also used; the cited evaluations frame these mainly as document, document-image, OCR, or chart understanding benchmarks, and one paper notes a lack of well-defined standards for direct quality assessment in document understanding. This measurement practice matches the narrower question-answering and document-image definitions more closely, and is narrower than definitions that emphasize broader document comprehension, structure, context, or whole-document synthesis.

**Links.** Beyond measurement links, one paper claims a causal relationship from visual perception to document understanding, describing enhanced visual perception as improving performance on document analysis tasks. Other papers relate document understanding to optical character recognition ability and to long-context understanding, and no paper reports a correlational link.

## Sources

**[xRAG: Extreme Context Compression for Retrieval-augmented Generation with One Token](https://proceedings.neurips.cc/paper_files/paper/2024/file/c5cf13bfd3762821ef7607e63ee90075-Paper-Conference.pdf)**
> The ability to extract and use relevant information from a retrieved document to answer a question.

**[UDA: A Benchmark Suite for Retrieval Augmented Generation in Real-World Document Analysis](https://proceedings.neurips.cc/paper_files/paper/2024/file/7c06759d1a8567f087b02e8589454917-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Document comprehension")**
> The latent ability to understand and interpret the content, structure, and context of complex, unstructured documents.

**[DocKS-RAG: Optimizing Document-Level Relation Extraction through LLM-Enhanced Hybrid Prompt Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25am/xu25am.pdf) (as "Document-level understanding")**
> The capacity to synthesize information and identify relationships across an entire document, beyond the scope of individual sentences.

## Relationships

### Document understanding →
- **DocVQA** (measurements) — *measured_by*
  > In order to illustrate the impact of having long in-context text, we evaluate the model for document understanding on DocVQA [15] and OCR VQA [34]. (Section 3.1)
  - [Leveraging Visual Tokens for Extended Text Contexts in Multi-Modal Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/19f10adb6749b0c9f1ff7610bd01d44d-Paper-Conference.pdf)
- **ChartQA** (measurements) — *measured_by*
  > document understanding/Optical character recognition (OCR) benchmarks: DocVQA (Mathew et al., 2021), ChartQA (Masry et al., 2022), AI2D (Kembhavi et al., 2016) and TextVQA (Singh et al., 2019). (Section 4.1)
  - [Matryoshka Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/722fcbc1a6667f2075d75ea79a1b3552-Paper-Conference.pdf)
- **SROIE** (measurements) — *measured_by*
  > For document understanding, ... We utilize benchmarks such as ChartQA (Masry et al., 2022), DocVQA (Mathew et al., 2021), InfoVQA (Mathew et al., 2022), TextVQA (Singh et al., 2019), STVQA (Biten et al., 2019), FUNSD (Jaume et al., 2019), SROIE (Huang et al., 2019), POIE (Kuang et al., 2023) and OCR-Bench (Liu et al., 2023c). (Section 4.1)
  - [Mini-Monkey: Alleviating the Semantic Sawtooth Effect for Lightweight MLLMs via Complementary Image Pyramid](https://proceedings.iclr.cc/paper_files/paper/2025/file/d52b3500a00748169dd4dad80fb75357-Paper-Conference.pdf)
- **InfoVQA** (measurements) — *measured_by*
  > For document understanding, ... We utilize benchmarks such as ChartQA (Masry et al., 2022), DocVQA (Mathew et al., 2021), InfoVQA (Mathew et al., 2022), TextVQA (Singh et al., 2019), STVQA (Biten et al., 2019), FUNSD (Jaume et al., 2019), SROIE (Huang et al., 2019), POIE (Kuang et al., 2023) and OCR-Bench (Liu et al., 2023c). (Section 4.1)
  - [Mini-Monkey: Alleviating the Semantic Sawtooth Effect for Lightweight MLLMs via Complementary Image Pyramid](https://proceedings.iclr.cc/paper_files/paper/2025/file/d52b3500a00748169dd4dad80fb75357-Paper-Conference.pdf)
- **OCR-VQA** (measurements) — *measured_by*
  > In order to illustrate the impact of having long in-context text, we evaluate the model for document understanding on DocVQA [15] and OCR VQA [34]. (Section 3.1)
  - [Leveraging Visual Tokens for Extended Text Contexts in Multi-Modal Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/19f10adb6749b0c9f1ff7610bd01d44d-Paper-Conference.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > "We also observe that xRAG performs well in tasks that require document understanding, such as TriviaQA."
  - [xRAG: Extreme Context Compression for Retrieval-augmented Generation with One Token](https://proceedings.neurips.cc/paper_files/paper/2024/file/c5cf13bfd3762821ef7607e63ee90075-Paper-Conference.pdf)
- **TextVQA** (measurements) — *measured_by*
  > For document understanding, ... We utilize benchmarks such as ChartQA (Masry et al., 2022), DocVQA (Mathew et al., 2021), InfoVQA (Mathew et al., 2022), TextVQA (Singh et al., 2019), STVQA (Biten et al., 2019), FUNSD (Jaume et al., 2019), SROIE (Huang et al., 2019), POIE (Kuang et al., 2023) and OCR-Bench (Liu et al., 2023c). (Section 4.1)
  - [Mini-Monkey: Alleviating the Semantic Sawtooth Effect for Lightweight MLLMs via Complementary Image Pyramid](https://proceedings.iclr.cc/paper_files/paper/2025/file/d52b3500a00748169dd4dad80fb75357-Paper-Conference.pdf)
- **FUNSD** (measurements) — *measured_by*
  > For document understanding, ... We utilize benchmarks such as ChartQA (Masry et al., 2022), DocVQA (Mathew et al., 2021), InfoVQA (Mathew et al., 2022), TextVQA (Singh et al., 2019), STVQA (Biten et al., 2019), FUNSD (Jaume et al., 2019), SROIE (Huang et al., 2019), POIE (Kuang et al., 2023) and OCR-Bench (Liu et al., 2023c). (Section 4.1)
  - [Mini-Monkey: Alleviating the Semantic Sawtooth Effect for Lightweight MLLMs via Complementary Image Pyramid](https://proceedings.iclr.cc/paper_files/paper/2025/file/d52b3500a00748169dd4dad80fb75357-Paper-Conference.pdf)

### → Document understanding
- **Visual perception** (constructs) — *causes*
  > Recent work indicates that enhanced visual perception significantly reduces hallucinations and improves performance on resolution-sensitive tasks, such as optical character recognition and document analysis. (ABSTRACT)
  - [Eagle: Exploring The Design Space for Multimodal LLMs with Mixture of Encoders](https://proceedings.iclr.cc/paper_files/paper/2025/file/e78457d4a04b8565f1fe5077df13cddb-Paper-Conference.pdf)

### Associated with
- **Long-context understanding** (constructs)
  > Large language models (LLMs) have advanced to support long-context tasks such as document understanding (Li et al., 2024a), multi-turn dialogues (Yi et al., 2024), repository-level code completion (Jimenez et al., 2024), and complex reasoning (Zhou et al., 2025).
  - [LeanK: Learnable K Cache Channel Pruning for Efficient Decoding](https://aclanthology.org/2025.emnlp-main.1584.pdf)
