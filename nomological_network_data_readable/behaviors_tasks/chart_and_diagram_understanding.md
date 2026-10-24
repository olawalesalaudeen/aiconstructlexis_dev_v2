# Chart and diagram understanding
**Type:** Behavior  
**Referenced in:** 15 papers  
**Also known as:** Chart interpretation, Chart understanding, Chart reasoning, Data extraction, Information positioning  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is interpreting charts, plots, graphs, or other visualizations and extracting information from them. Many definitions pair extraction with reasoning or question answering about the displayed data, and one prompt asks what details and conclusions can be drawn from a chart; smaller strands emphasize deriving insights, locating requested elements, or retrieving numerical, categorical, or textual values from visual components such as legends and color mappings. Success is commonly framed as answering questions or identifying content such as trends, values, labels, comparisons, and time ranges.

**Variants.** Papers use nearby labels including chart interpretation, chart understanding, and chart reasoning. Studied variants include information positioning, which centers on locating specific data points or chart elements, and data extraction, which centers on extracting values from legends and color mappings. Domain-specific settings also appear, especially financial chart analysis over K-line, line, bar, pie, and candlestick charts, and scientific settings that focus on extracting insights from charts and graphs derived from experimental data.

**Space of elicitation and scores.** Papers measure it with five instruments. The most commonly linked one is ChartQA, described as using human-crafted question-answer pairs to evaluate understanding, reasoning, and data extraction; the other linked instruments are AI2D, CharXiv, MMC, and MathVista. Across papers, these are described as benchmarks or evaluation suites for chart understanding, sometimes grouped with OCR and document understanding, and sometimes with spatial understanding and fine-grained features.

**What it is taken as evidence of.** The papers summarized here do not link this behavior to any construct, so they do not specify what it is evidence of.

## Sources

**[Cambrian-1: A Fully Open, Vision-Centric Exploration of Multimodal LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/9ee3a664ccfeabc0da16ac6f1f1cfe59-Paper-Conference.pdf) (as "Chart interpretation")**
> The task of extracting and reasoning about data presented in graphical charts.

**[MoVA: Adapting Mixture of Vision Experts to Multimodal Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/bb0fea29f7aa6ede17e906ac6a225f34-Paper-Conference.pdf) (as "Chart understanding")**
> Interpreting charts or plots and extracting information from them.

**[TaskGalaxy: Scaling Multi-modal Instruction Fine-tuning with Tens of Thousands Vision Task Types](https://proceedings.iclr.cc/paper_files/paper/2025/file/e885e5bc6e13b9dd8f80bc5482b1fa2f-Paper-Conference.pdf) (as "Chart reasoning")**
> Interpreting and deriving insights from visual data representations like graphs and charts.

**[MAPWise: Evaluating Vision-Language Models for Advanced Map Queries](https://aclanthology.org/2025.naacl-long.473.pdf) (as "Data extraction")**
> The latent capability to accurately perceive and retrieve numerical, categorical, or textual information from visual representations like legends and color mappings.

**[ChartMind: A Comprehensive Benchmark for Complex Real-world Multimodal Chart Question Answering](https://aclanthology.org/2025.emnlp-main.226.pdf) (as "Information positioning")**
> Locating and extracting specific data points or elements from a chart based on a query, such as values, labels, or time ranges.

## Relationships

### Chart and diagram understanding →
- **ChartQA** (measurements) — *measured_by*
  > 2) OCR/document/chart understanding: OCRBench (Liu et al., 2023f), DocVQA (Mathew et al., 2021), ChartQA (Masry et al., 2022); (Section 2.1)
  - [Eagle: Exploring The Design Space for Multimodal LLMs with Mixture of Encoders](https://proceedings.iclr.cc/paper_files/paper/2025/file/e78457d4a04b8565f1fe5077df13cddb-Paper-Conference.pdf)
- **CharXiv** (measurements) — *measured_by*
  > We hope that CharXiv facilitates future research on MLLM chart understanding by providing a more realistic and faithful measure of progress. (Abstract)
  - [CharXiv: Charting Gaps in Realistic Chart Understanding in Multimodal LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/cdf6f8e9fd9aeaf79b6024caec24f15b-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MathVista** (measurements) — *measured_by*
  > Many benchmarks in the popular MathVista evaluation suite [60] are designed to test chart understanding. (Sec 1)
  - [CharXiv: Charting Gaps in Realistic Chart Understanding in Multimodal LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/cdf6f8e9fd9aeaf79b6024caec24f15b-Paper-Datasets_and_Benchmarks_Track.pdf)
- **AI2D** (measurements) — *measured_by*
  > Benchmarks that involve spatial understanding and fine-grained features include ... chart understanding (AI2D; Kembhavi et al. 2016)... (Section 5)
  - [Locality Alignment Improves Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ce6326ac4794bb04d5eb16f597446baf-Paper-Conference.pdf)
- **MMC** (measurements) — *measured_by*
  > The models are tested across seven benchmarks: ...MMC (chart understanding)... (Section 3)
  - [Visual Description Grounding Reduces Hallucinations and Boosts Reasoning in LVLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6805b5564bd8d813a81c4b5a97e5ca6-Paper-Conference.pdf)
