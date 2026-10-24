# Multi-document question answering
**Type:** Behavior  
**Referenced in:** 20 papers  
**Also known as:** Multi-Document Question Answering (MDQA)  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats multi-document question answering as answering a question from several documents supplied in the context, often under long-context conditions. A recurring formulation gives the model k documents where only one is the gold document and the remaining k-1 are irrelevant distractors, so the model must identify the answer-bearing document while ignoring the rest. Another common framing describes the task as retrieving, integrating, or synthesizing relevant information across multiple documents, sometimes with evidence localization over a larger collection.

**Variants.** Papers use labels such as MDQA and multi-doc QA, and study the task in retrieval-based and long-context settings. Document collections vary from top-5, top-10, or top-20 retrieved documents to contexts of 10 or 30 documents, including setups with 10 documents where only one is relevant and the rest function as distractors. Some work also extends the task to visually rich, multimodal documents over a collection of source documents rather than a single source.

**Space of elicitation and scores.** Across the papers, this behavior is measured by 2 instruments: 2WikiMultiHopQA and LongBench. LongBench explicitly treats multi-doc QA as one of its task categories, and 2WikiMultiHopQA is used as a multi-document QA task with 200 samples. One paper also reports performance on a multi-document question-answering task in terms of EM score.

## Sources

**[From Artificial Needles to Real Haystacks: Improving Retrieval Capabilities in LLMs by Finetuning on Synthetic Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/15a321fbfc19fce9b325ec6e77dfb597-Paper-Conference.pdf)**
> The task of answering a question based on information contained within one of several documents provided in the context, where other documents act as distractors.

**[Found in the Middle: How Language Models Use Long Contexts Better via Plug-and-Play Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ffdbbe354893979367f93e2121e37dd-Paper-Conference.pdf) (as "Multi-Document Question Answering (MDQA)")**
> An evaluation task introduced by Liu et al. (2023) to probe the "lost-in-the-middle" effect by placing a single relevant document among multiple distractor documents and asking a question about it.

## Relationships

### Multi-document question answering →
- **LongBench** (measurements) — *measured_by*
  > "These tasks belong to 6 categories in total: single-doc QA, multi-doc QA, summarization, few-shot learning, synthetic, and code."
  - [Radar: Fast Long-Context Decoding for Any Transformer](https://proceedings.iclr.cc/paper_files/paper/2025/file/3c44405d619a6920384a45bce876b41e-Paper-Conference.pdf)
- **2WikiMultiHopQA** (measurements) — *measured_by*
  > The multi-document QA task involves "2Wiki-MultihopQA" from LongBench (Bai et al., 2023), comprising 200 samples. (Section 4.2)
  - [Accelerate Parallelizable Reasoning via Parallel Decoding within One Sequence](https://aclanthology.org/2025.emnlp-main.457.pdf)

### Associated with
- **Positional bias** (constructs)
  > We select four tasks that pose position bias: ... retrieval-augmented question-answering (Liu et al., 2024) that asks LMs to answer questions based on retrieved documents
  - [Eliminating Position Bias of Language Models: A Mechanistic Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/e389b15166cf98966ba058965a8c17e3-Paper-Conference.pdf)
