# Stock trading
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Single stock trading  

## State of the Field

**Space of definitions.** Across the papers, the common formulation is a decision task: producing a buy, sell, or hold choice from financial information and market context. A narrower version treats it as single stock trading, defined as generating decisions for individual stocks through multi-modal market information processing. One paper also specifies the output format directly, asking for exactly one investment decision, buy or sell, with hold used when a buy-or-sell choice is hard (FinBen: A Holistic Financial Benchmark for Large Language Models).

**Variants.** The main named variant is single stock trading, where the task is scoped to individual stocks. The papers also vary in how they describe the setting: one presents trading actions as part of sequential financial tasks, while another frames the task around financial information and market context; multi-modal market information is only mentioned in the individual-stock version.

**Space of elicitation and scores.** No measurement instrument is linked to it in the papers.

**What it is taken as evidence of.** Papers do not link stock trading to any construct. One paper instead reports that stock trading is related to Action selection, using decision-making language about making informed financial decisions such as developing trading strategies and optimizing investment portfolios.

## Sources

**[FinCon: A Synthesized LLM Multi-Agent System with Conceptual Verbal Reinforcement for Enhanced Financial Decision Making](https://proceedings.neurips.cc/paper_files/paper/2024/file/f7ae4fe91d96f50abc2211f09b6a7e49-Paper-Conference.pdf) (as "Single stock trading")**
> Generating trading decisions (buy, sell, hold) for individual stocks based on multi-modal market information processing.

**[FinBen: A Holistic Financial Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/adb1d9fa8be4576d28703b396b82ba1b-Paper-Datasets_and_Benchmarks_Track.pdf)**
> Making buy, sell, or hold decisions from financial information and market context.

## Relationships

### Associated with
- **Decision-making** (constructs)
  > Decision-Making assesses the model’s proficiency in making informed financial decisions, such as developing trading strategies and optimizing investment portfolios (Paiva et al., 2019).
  - [FinBen: A Holistic Financial Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/adb1d9fa8be4576d28703b396b82ba1b-Paper-Datasets_and_Benchmarks_Track.pdf)
