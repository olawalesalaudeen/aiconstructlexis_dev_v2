# WMT14 De-En
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** WMT14 DE-EN, WMT'14 De-En, WMT'14 German-English  

## State of the Field

**What it is.** Most commonly described as a WMT 2014 German-to-English machine translation benchmark, papers refer to it as a dataset or benchmark of sentence pairs for evaluating translation quality. A smaller variation in wording emphasizes its use for evaluating speculative decoding on translation text distributions, and one snippet specifies 3,003 sentence pairs.

**What it is claimed to measure.** Papers use it to measure Machine translation: it is linked to one behavioral indicator, Machine translation, and to no constructs. The reported measurement claims are concentrated on that single behavioral indicator, with papers selecting WMT14 De-En for the translation part of broader evaluations.

**Space of uses.** No measurement instrument is linked to it directly, but papers use it alongside MT-bench, CNN/Daily Mail, Natural Questions, GSM8K, and Alpaca, with other datasets also mentioned. In those settings it is positioned as the translation component within multi-task evaluations, including speculative decoding studies.

## Sources

**[polybasic Speculative Decoding Through a Theoretical Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25az/wang25az.pdf) (as "WMT14 DE-EN")**
> A dataset from the Workshop on Machine Translation (WMT) 2014 for evaluating German-to-English machine translation.

**[Towards Optimal Multi-draft Speculative Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/0907335ecf28faf15be54485dbcbe70e-Paper-Conference.pdf) (as "WMT'14 De-En")**
> A machine translation dataset used to evaluate speculative decoding methods on translation text distributions.

**[G2: Guided Generation for Enhanced Output Diversity in LLMs](https://aclanthology.org/2025.emnlp-main.713.pdf) (as "WMT'14 German-English")**
> A benchmark dataset consisting of sentence pairs used to evaluate machine translation quality from German to English.

## Relationships

### → WMT14 De-En
- **Machine translation** (behaviors tasks) — *measured_by*
  > We selected CNN/DM, GSM8K, Alpaca (Taori et al., 2023), WMT14 DE-EN, and Nature Questions (Kwiatkowski et al., 2019) for the evaluation on summarization, reasoning, instruction following, translation, and question answering tasks, respectively. (Section 5.3)
  - [SWIFT: On-the-Fly Self-Speculative Decoding for LLM Inference Acceleration](https://proceedings.iclr.cc/paper_files/paper/2025/file/d74d002a9154b4cc433a234feb27c5f4-Paper-Conference.pdf)
