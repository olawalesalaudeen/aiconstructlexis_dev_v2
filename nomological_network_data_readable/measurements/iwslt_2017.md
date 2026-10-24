# IWSLT 2017
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** IWSLT17, IWSLT2017  

## State of the Field

**What it is.** Most commonly described as a benchmark dataset from the International Workshop on Spoken Language Translation 2017 for evaluating machine translation systems, papers treat IWSLT 2017 as a translation benchmark rather than defining it in broader terms. Some definitions are more specific, describing parallel documents sourced from TED talks, and one paper focuses on the tst2017 test sets covering 12 language pairs. A smaller line of usage calls it an international speech translation benchmark and notes its use in zero-shot prompting experiments, while another paper refers to extracting its training and test sets and using it to evaluate translation performance for low-resource language pairs.

**What it is claimed to measure.** Across the surveyed papers, the measurement claim converges on one behavioral indicator: Machine translation. IWSLT 2017 is linked to one behavioral indicator and no constructs, and papers use it to measure machine translation in settings described as text translation, context-aware machine translation from English to French, and additional translation evaluation in a generation scenario. The reported use is therefore concentrated on this single indicator rather than spread across multiple constructs or behavioral outcomes.

**Space of uses.** Papers primarily use IWSLT 2017 as an evaluation resource for translation experiments. Some use only the tst2017 test sets, while another extracts both training and test sets, and one paper positions it as an additional translation dataset to verify model performance. It also appears alongside other translation benchmarks, including WMT14, IWSLT14, afroMT, WMT18, and WMT19, and one paper uses it in a setup that contrasts translation with a separate summarization dataset.

## Sources

**[Uncertainty-Aware Decoding with Minimum Bayes Risk](https://proceedings.iclr.cc/paper_files/paper/2025/file/1588dc2b2ef339d6e4c47d212e36f991-Paper-Conference.pdf) (as "IWSLT17")**
> An international speech translation benchmark used for machine translation evaluation and zero-shot prompting experiments.

**[DelTA: An Online Document-Level Translation Agent Based on Multi-Level Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/285149554f6fbed6e2f9ec72d131bd23-Paper-Conference.pdf) (as "IWSLT2017")**
> A benchmark dataset from the International Workshop on Spoken Language Translation 2017, consisting of parallel documents from TED talks used for evaluating machine translation systems.

**[Language Model Self-improvement by Reinforcement Learning Contemplation](https://proceedings.iclr.cc/paper_files/paper/2024/file/d5a655b8b373737b4f2aea8f78e5e754-Paper-Conference.pdf)**
> A dataset from the International Workshop on Spoken Language Translation 2017, used for evaluating machine translation capabilities.

## Relationships

### → IWSLT 2017
- **Machine translation** (behaviors tasks) — *measured_by*
  > This section provides an analysis of the correlation between text evaluation and established metrics using two datasets: the CNN/Daily Mail dataset (Nallapati et al., 2016) for text summarization and the IWSLT 2017 dataset (Cettolo et al., 2017) for text translation. (Section 4.2)
  - [Language Model Self-improvement by Reinforcement Learning Contemplation](https://proceedings.iclr.cc/paper_files/paper/2024/file/d5a655b8b373737b4f2aea8f78e5e754-Paper-Conference.pdf)
