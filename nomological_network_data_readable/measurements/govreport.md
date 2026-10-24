# GovReport
**Type:** Measurement  
**Referenced in:** 14 papers  
**Also known as:** SUM-GOVREPORT  

## State of the Field

**What it is.** Most papers treat GovReport as a long-document summarization dataset or benchmark built from U.S. government reports. Definitions variously describe congressional and U.S. Government reports, long reports from the U.S. Government Accountability Office, and a SCROLL benchmark dataset for summarizing long government reports; one paper names a task variant, SUM-GOVREPORT, for long government reports with complex structure and content. Where papers give details, they describe 19,402 reports, corresponding summaries, and an average document length of 7,866 tokens.

**What it is claimed to measure.** Across the surveyed work, the prevailing claim is that GovReport measures Text summarization: papers describe using it for the summarization task and as a generic summarization dataset. A smaller line of work reports it as measuring Length generalization, via length extrapolation on six long benchmarks. Overall, papers link it to one behavioral indicator, Text summarization, and one construct, Length generalization.

**Space of uses.** Papers usually use GovReport as one benchmark within broader long-context evaluations. They pair it with Proof-pile for language modeling on long or long-sequence documents, report it with QMSum in the SCROLL benchmark, and use it alongside Multi-News or MultiNews for summarization; one paper also lists it among LongBench tasks. No paper explicitly relates GovReport to another measurement instrument.

## Sources

**[In-Context Pretraining: Language Modeling Beyond Document Boundaries](https://proceedings.iclr.cc/paper_files/paper/2024/file/a1fe2365abdb691332537990a6385909-Paper-Conference.pdf)**
> Summarization dataset of U.S. government and congressional reports, used to evaluate language modeling performance on long documents with an average length of 7,866 tokens.

**[LongLeader: A Comprehensive Leaderboard for Large Language Models in Long-context Scenarios](https://aclanthology.org/2025.naacl-long.439.pdf) (as "SUM-GOVREPORT")**
> Summarization task involving long government reports with complex structure and content.

## Relationships

### → GovReport
- **Text summarization** (behaviors tasks) — *measured_by*
  > GovReport [25] is a generic summarization dataset containing long reports published by the U.S. Government Accountability Office (Section 4.1).
  - [Chain of Agents: Large Language Models Collaborating on Long-Context Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/ee71a4b14ec26710b39ee6be113d7750-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks) — *measured_by*
  > we perform the classic language modeling evaluation, i.e., perplexity evaluation, on GovReport [Huang et al., 2021] and Proof-pile [Zhangir Azerbayev, 2022]. (Section 3.5).
  - [An Efficient Recipe for Long Context Extension via Middle-Focused Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/66944d3a3e77ebe366793f6a6126f3a4-Paper-Conference.pdf)
- **Length generalization** (constructs) — *measured_by*
  > Figure 2: Length extrapolation on six long benchmarks.
  - [Gated Delta Networks: Improving Mamba2 with Delta Rule](https://proceedings.iclr.cc/paper_files/paper/2025/file/4904fad153f6434a7bcf04465d4be2cc-Paper-Conference.pdf)
