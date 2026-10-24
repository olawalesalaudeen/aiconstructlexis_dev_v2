# SWDE
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Definitions treat SWDE as a recall-intensive benchmark for retrieving or extracting information from long or in-context passages. Some authors call it an information extraction benchmark used for long-sequence retrieval, including as one of the "six recall-intensive tasks" in Longhorn: State Space Models are Amortized Online Learners, while others describe it as an information-retrieval benchmark designed to evaluate retrieval from in-context passages scraped from HTML/PDFs.

**What it is claimed to measure.** Across papers, SWDE is used to measure one construct and two behavioral indicators. The linked behavioral indicators are Information extraction and Synthetic recall, and the linked construct is Long-context understanding; in each case, papers present the relation as SWDE measuring the target. One paper operationalizes Long-context understanding through a "Recall" average across FDA, SWDE, and SQuAD.

**Space of uses.** Papers often deploy SWDE alongside FDA. It is positioned within recall-focused evaluations, and one paper combines it with FDA and SQuAD inside a broader "Recall" score. No measurement instrument is linked to it.

## Sources

**[Longhorn: State Space Models are Amortized Online Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/ee0e45ff4de76cbfdf07015a7839f339-Paper-Conference.pdf)**
> An information extraction benchmark used as a recall-intensive evaluation of long-sequence retrieval.

## Relationships

### → SWDE
- **Synthetic recall** (behaviors tasks) — *measured_by*
  > Specifically, we assess information retrieval on FDA [93] and SWDE [49], which are designed to evaluate retrieval from in-context passages scraped from HTML/PDFs. (Section 4.1.2)
  - [Gated Slot Attention for Efficient Linear-Time Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3f39e51f5f634fb16cc3e658f8512b9-Paper-Conference.pdf)
- **Information extraction** (behaviors tasks) — *measured_by*
  > we consider the following six recall-intensive tasks: information extraction tasks like FDA and SWDE (Arora et al., 2024a; 2023b; Wu et al., 2021; Deng et al., 2022) (Section 5.2)
  - [Longhorn: State Space Models are Amortized Online Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/ee0e45ff4de76cbfdf07015a7839f339-Paper-Conference.pdf)
- **Associative recall ability** (constructs) — *measured_by*
  > “Recall” represents the average performance across FDA, SWDE, and SQuAD. (Table 7)
  - [Scaling up the State Size of RNN LLMs for Long-Context Scenarios](https://aclanthology.org/2025.acl-long.564.pdf)
