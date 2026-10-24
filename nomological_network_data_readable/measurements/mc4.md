# mC4
**Type:** Measurement  
**Referenced in:** 10 papers  
**Also known as:** MC4  

## State of the Field

**What it is.** Across the definitions, mC4 is most commonly described as the multilingual Colossal Clean Crawled Corpus, or multilingual C4, a large multilingual web-crawl dataset derived from Common Crawl. Papers variously present it as multilingual pre-training data, as a benchmark spanning high-, medium-, and low-resource languages, and as a multilingual partition of CommonCrawl web scrapes; some descriptions focus on particular portions or slices, such as Arabic and English portions, selected linguistically diverse languages, or tokens used to record feature activation ranges.

**What it is claimed to measure.** Across the papers, mC4 is not explicitly linked to any named construct or behavioral indicator, so it is not presented as measuring a single construct. The reported measurement uses are instead task specific: evaluating multilingual pre-training behavior, computing model perplexity across 50 languages, reporting validation loss on selected languages, and approximating entity occurrence in pre-training data.

**Space of uses.** The papers do not explicitly relate mC4 to other named measurement instruments. They use it as multilingual experimental data: for pre-training distillation on the languages covered by mBART, for intrinsic evaluation through perplexity on 50 languages, for checking that an SAE reconstructs other languages effectively, and for recording maximum feature activations across 20M tokens, as one study notes: "we record the maximum activations of each feature across 20M tokens from mC4" (Large Language Models Share Representations of Latent Grammatical Concepts Across Typologically Diverse Languages).

**Concerns raised.** A recurring concern is language imbalance within the corpus. One paper highlights this directly, stating that mC4 "contains 2733 billion English tokens but only 1 billion Swahili tokens" (Upsample or Upweight? Balanced Training on Heavily Imbalanced Datasets).

## Sources

**[DEPT: Decoupled Embeddings for Pre-training Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/20ceffa1fcec0f882868e5b891e3e7fa-Paper-Conference.pdf) (as "MC4")**
> A multilingual web-crawl corpus used here as a benchmark spanning high-, medium-, and low-resource languages for evaluating multilingual pre-training behavior.

**[Improving Language Model Distillation through Hidden State Matching](https://proceedings.iclr.cc/paper_files/paper/2025/file/2fb462e23667ad5e6471a4e9af8e4774-Paper-Conference.pdf)**
> The multilingual Colossal Clean Crawled Corpus, a large multilingual dataset used for the pre-training distillation stage of the experiments.
