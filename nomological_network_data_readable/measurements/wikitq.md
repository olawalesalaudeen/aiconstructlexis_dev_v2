# WikiTQ
**Type:** Measurement  
**Referenced in:** 18 papers  
**Also known as:** WikiTableQuestion, WikiTableQuestions, WTQ  

## State of the Field

**What it is.** Most papers describe WikiTQ, also written as WikiTableQuestions or WTQ, as a benchmark or dataset of Wikipedia, sometimes semi-structured or HTML, tables paired with natural-language questions for table-based question answering. The prevailing description emphasizes complex operations such as comparison, aggregation, and arithmetic, while some papers further frame it as short-form or short text span answering; one paper describes about 2100 HTML tables and about 22,033 questions, and another refers to a standard test set with 4,344 table-question pairs. A smaller line of work adapts it into training formats for table-language interleaved learning or column-embedding training, and one study uses a filtered hybrid version requiring semantic inference.

**What it is claimed to measure.** Papers link WikiTQ to one behavioral indicator, Table question answering, and one construct, Table reasoning. The prevailing usage is to measure Table question answering, with descriptions such as table QA, table-based question answering, or short-form QA over semi-structured tables. A smaller group of papers uses it to measure Table reasoning, describing it as a benchmark for table-based reasoning or table reasoning. The claims are concentrated rather than spread across many targets, because papers connect it only to those two linked concepts.

**Space of uses.** Across papers, the dominant use is as one benchmark in multi-dataset evaluation suites. Papers often place it alongside FeTaQA, TabFact, HiTab, WikiSQL, and TableBench, and describe it as commonly used, mainstream, or classic; some also use it for held-in or in-domain evaluation. A smaller line of work repurposes it for training, for example by incorporating it into table-language interleaved data or adapting it for column-embedding training.

## Sources

**[CABINET: Content Relevance-based Noise Reduction for Table Question Answering](https://proceedings.iclr.cc/paper_files/paper/2024/file/19a42d5885e25e51852aca8144e5af0d-Paper-Conference.pdf)**
> WikiTableQuestions, a benchmark of Wikipedia tables and natural-language questions requiring table reasoning such as comparison, aggregation, and arithmetic.

**[Bridging the Semantic Gap Between Text and Table: A Case Study on NL2SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/283f1354f1de1c53a14afe0a6740e889-Paper-Conference.pdf) (as "WikiTableQuestion")**
> A table-question answering dataset adapted here into training formats for table-language interleaved learning.

**[Triples as the Key: Structuring Makes Decomposition and Verification Easier in LLM-based TableQA](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e50b663324972bb8cc7b5c06a059438-Paper-Conference.pdf) (as "WikiTableQuestions")**
> A benchmark dataset for complex Table Question Answering tasks that require operations like aggregation, comparison, and arithmetic calculations.

**[Can GRPO Boost Complex Multimodal Table Understanding?](https://aclanthology.org/2025.emnlp-main.637.pdf) (as "WTQ")**
> A dataset for flat table question answering, sourced from Wikipedia, used as a held-in training and evaluation set.

## Relationships

### → WikiTQ
- **Table question answering** (behaviors tasks) — *measured_by*
  > CABINET establishes new SoTA on three challenging table QA datasets (WikiTQ, FeTaQA and WikiSQL) significantly outperforming various strong baselines (§ 4.1). (Section 1)
  - [CABINET: Content Relevance-based Noise Reduction for Table Question Answering](https://proceedings.iclr.cc/paper_files/paper/2024/file/19a42d5885e25e51852aca8144e5af0d-Paper-Conference.pdf)
- **Table reasoning** (constructs) — *measured_by*
  > We validate CHAIN-OF-TABLE with three tabular benchmarks to evaluate table-based reasoning: WikiTQ (Pasupat & Liang, 2015), TabFact (Chen et al., 2019), and FeTaQA (Nan et al., 2022). (Section 2)
  - [Chain-of-Table: Evolving Tables in the Reasoning Chain for Table Understanding](https://proceedings.iclr.cc/paper_files/paper/2024/file/f53fd88a4340063ecd258c0ae9948b40-Paper-Conference.pdf)
- **Prompt engineering** (behaviors tasks) — *measured_by*
  > “we incorporate table-language interleaved data from existing benchmarks, including FetaQA (Nan et al., 2022), WikiTableQuestion (Pasupat & Liang, 2015), and ToTTo (Parikh et al., 2020).”
  - [Bridging the Semantic Gap Between Text and Table: A Case Study on NL2SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/283f1354f1de1c53a14afe0a6740e889-Paper-Conference.pdf)
