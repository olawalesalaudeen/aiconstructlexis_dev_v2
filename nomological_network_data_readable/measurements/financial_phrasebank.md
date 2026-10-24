# Financial PhraseBank
**Type:** Measurement  
**Referenced in:** 8 papers  
**Also known as:** Financial Phrasebank, FPB, Financial Phrase Bank  

## State of the Field

**What it is.** Across the surveyed work, the prevailing usage treats Financial PhraseBank, also written as FPB or FP, as a benchmark dataset for sentiment analysis or text classification in financial text. Definitions consistently describe sentences from financial news, and one definition broadens this to financial statements and news, annotated for sentiment. Most descriptions specify positive, negative, and neutral categories, while one paper describes its task setup on the dataset as positive or negative.

**What it is claimed to measure.** Papers use Financial PhraseBank to measure 2 behavioral indicators and link it to no constructs. The dominant claim is that it measures sentiment analysis, with papers describing it as extracting positive, negative, or neutral sentiment from financial texts. A smaller but recurring line of work uses it as a text classification benchmark, describing it among several text classification datasets.

**Space of uses.** Papers often use it within multi-dataset evaluations, for example alongside FiQA-SA and TSA in financial sentiment analysis, or alongside Tweet Irony and MRPC in broader text classification comparisons. Some papers also frame it as a focused task by stating that they focus on Financial PhraseBank sentiment analysis. No measurement instrument is linked to it.

## Sources

**[Not All LLM-Generated Data Are Equal: Rethinking Data Weighting in Text Classification](https://proceedings.iclr.cc/paper_files/paper/2025/file/03dfa2a7755635f756b160e9f4c6b789-Paper-Conference.pdf) (as "Financial Phrasebank")**
> A benchmark dataset for text classification consisting of sentences from financial news, annotated for sentiment.

**[MAPLE: Many-Shot Adaptive Pseudo-Labeling for In-Context Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25bo/chen25bo.pdf)**
> Sentiment analysis dataset for financial text, used to assess classification performance in domain-specific language understanding.

**[Large Language Models are Demonstration Pre-Selectors for Themselves](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jin25i/jin25i.pdf) (as "FPB")**
> The Financial PhraseBank, a dataset for sentiment analysis of financial news, categorized into positive, negative, or neutral.

**[Order-Independence Without Fine Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/85529bc995777a74072ef63c05bedd30-Paper-Conference.pdf) (as "Financial Phrase Bank")**
> A dataset of sentences from financial news, annotated for sentiment (positive, negative, neutral), used to evaluate sentiment classification.

## Relationships

### → Financial PhraseBank
- **Sentiment analysis** (behaviors tasks) — *measured_by*
  > Sentiment analysis focuses on extracting sentiment information (positive, negative, or neutral) from financial texts, using three datasets: the Financial Phrase Bank (FPB) (Malo et al., 2014), FiQA-SA (Maia et al., 2018), and TSA (Cortis et al., 2017).
  - [FinBen: A Holistic Financial Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/adb1d9fa8be4576d28703b396b82ba1b-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Text classification** (behaviors tasks) — *measured_by*
  > We assessed our proposed methods by comparing them with standard loss functions across several text classification benchmarks, including Financial Phrasebank (Financial) (Malo et al., 2014), irony detection (Tweet Irony) (Van Hee et al., 2018), and the MRPC dataset from GLUE (Wang et al., 2018).
  - [Not All LLM-Generated Data Are Equal: Rethinking Data Weighting in Text Classification](https://proceedings.iclr.cc/paper_files/paper/2025/file/03dfa2a7755635f756b160e9f4c6b789-Paper-Conference.pdf)
