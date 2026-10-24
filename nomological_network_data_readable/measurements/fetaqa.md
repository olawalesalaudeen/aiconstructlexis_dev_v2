# FeTaQA
**Type:** Measurement  
**Referenced in:** 10 papers  
**Also known as:** FetaQA  

## State of the Field

**What it is.** Across these papers, FeTaQA is most commonly described as a table question answering benchmark or dataset with open-ended, free-form, long-form natural-language answers. Definitions repeatedly say that answering requires fetching multiple entities from a table, aggregating or reasoning over them, sometimes across multiple table sections, and producing a coherent response; one paper also describes it as an English dataset of Wikipedia tables paired with questions, answers, and supporting table cells. A smaller use treats FetaQA as table-language data adapted into training formats for table-language interleaved learning and for training column embeddings, rather than only as an evaluation benchmark.

**What it is claimed to measure.** Papers link FeTaQA to 3 behavioral indicators and 1 construct. The prevailing use is to measure Table question answering, with several papers explicitly naming it as a TableQA benchmark or dataset. Smaller lines of work also report it as measuring Data-to-text generation and Long-form question answering, and one paper uses it to measure Table reasoning, so the recorded links are concentrated on table question answering with a few additional framings.

**Space of uses.** Papers do not link it directly to other measurement instruments. In practice, they often place it alongside other tabular benchmarks, especially WikiTQ, and sometimes TabFact, WikiSQL, and HiTab, while one broader task collection includes it with FEVER and HotpotQA. Most commonly it appears as one benchmark in a multi-dataset evaluation suite or main results table, though some papers use it as an external test set and another adapts it for training table-language interleaved models and column embeddings.

**Concerns raised.** One paper notes that self-consistency is not applicable because FeTaQA is treated as an open-ended generation task. Other papers note that its long-form answers are evaluated with overlap-based metrics such as Sacre-BLEU, or with ROUGE-1, ROUGE-2, and ROUGE-L for the more complex long-form setting.

## Sources

**[CABINET: Content Relevance-based Noise Reduction for Table Question Answering](https://proceedings.iclr.cc/paper_files/paper/2024/file/19a42d5885e25e51852aca8144e5af0d-Paper-Conference.pdf)**
> FeTaQA, a table question answering benchmark with long-form natural-language answers that require fetching multiple entities and reasoning over them.

**[Bridging the Semantic Gap Between Text and Table: A Case Study on NL2SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/283f1354f1de1c53a14afe0a6740e889-Paper-Conference.pdf) (as "FetaQA")**
> A table-language dataset adapted here into training formats for table-language interleaved learning.

## Relationships

### → FeTaQA
- **Table question answering** (behaviors tasks) — *measured_by*
  > CABINET establishes new SoTA on three challenging table QA datasets (WikiTQ, FeTaQA and WikiSQL) significantly outperforming various strong baselines (§ 4.1). (Section 1)
  - [CABINET: Content Relevance-based Noise Reduction for Table Question Answering](https://proceedings.iclr.cc/paper_files/paper/2024/file/19a42d5885e25e51852aca8144e5af0d-Paper-Conference.pdf)
- **Table reasoning** (constructs) — *measured_by*
  > We validate CHAIN-OF-TABLE with three tabular benchmarks to evaluate table-based reasoning: WikiTQ (Pasupat & Liang, 2015), TabFact (Chen et al., 2019), and FeTaQA (Nan et al., 2022). (Section 2)
  - [Chain-of-Table: Evolving Tables in the Reasoning Chain for Table Understanding](https://proceedings.iclr.cc/paper_files/paper/2024/file/f53fd88a4340063ecd258c0ae9948b40-Paper-Conference.pdf)
- **Prompt engineering** (behaviors tasks) — *measured_by*
  > “we incorporate table-language interleaved data from existing benchmarks, including FetaQA (Nan et al., 2022), WikiTableQuestion (Pasupat & Liang, 2015), and ToTTo (Parikh et al., 2020).”
  - [Bridging the Semantic Gap Between Text and Table: A Case Study on NL2SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/283f1354f1de1c53a14afe0a6740e889-Paper-Conference.pdf)
- **Data-to-text generation** (behaviors tasks) — *measured_by*
  > We first run experiments on four data-to-text generation datasets. ... FeTaQA (Nan et al., 2022) is an English table question answering dataset... (Section 4.1)
  - [SCOPE: A Self-supervised Framework for Improving Faithfulness in Conditional Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/05d6b5b6901fb57d2c287e1d3ce6d63c-Paper-Conference.pdf)
- **Long-form question answering** (behaviors tasks) — *measured_by*
  > For more complex tasks in FeTaQA, which involve long-form question answering, we evaluate performance using ROUGE-1, ROUGE-2, and ROUGE-L metrics
  - [H-STAR: LLM-driven Hybrid SQL-Text Adaptive Reasoning on Tables](https://aclanthology.org/2025.naacl-long.445.pdf)
