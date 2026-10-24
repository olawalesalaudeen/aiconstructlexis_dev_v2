# MetricX
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

MetricX is consistently characterized across the provided literature as an automatic metric for machine translation (MT) evaluation. Its primary application is to measure 'Translation quality', and it is also used as a baseline for score prediction. The provided sources describe it as a 'state-of-the-art' metric, with one paper noting it was the 'winner of the WMT’24 Metrics Shared Task' ("From Jack of All Trades to Master of One: Specializing LLM-based Autoraters to a Test Set"). While its status as a top-performing metric is a recurring theme, a less common description focuses on its architecture. One paper specifies that MetricX is 'built on mT5' and 'adopts a regression-based framework' to predict translation quality by learning from human judgments ("SSA-COMET: Do LLMs Outperform Learned Metrics in Evaluating MT for Under-Resourced African Languages?").

## Sources

**[From Jack of All Trades to Master of One: Specializing LLM-based Autoraters to a Test Set](https://raw.githubusercontent.com/mlresearch/v267/main/assets/finkelstein25a/finkelstein25a.pdf)**
> A state-of-the-art automatic machine translation evaluation metric used as a baseline for score prediction.

## Relationships

### → MetricX
- **Translation quality** (constructs) — *measured_by*
  > Table 1: Translation quality measured with METRICX (M) and COMET (C) on the WMT24 test set. (Table 1)
  - [Translate Smart, not Hard: Cascaded Translation Systems with Quality-Aware Deferral](https://aclanthology.org/2025.emnlp-main.1358.pdf)
