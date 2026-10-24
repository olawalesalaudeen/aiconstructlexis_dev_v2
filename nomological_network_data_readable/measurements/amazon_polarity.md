# Amazon Polarity
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** Amazon, AmazonPolarity  

## State of the Field

**What it is.** Across the papers, the prevailing usage treats Amazon Polarity, or simply Amazon, as a text or sentiment classification benchmark on product reviews. One paper states, "We study text classification using four datasets: sentiment analysis using SST-2 and Amazon" (Privacy-Preserving In-Context Learning for Large Language Models). Some authors describe it more broadly as an NLP classification dataset, and one debiasing paper uses the surface form AmazonPolarity for a downstream classification check. A smaller line of work uses the name Amazon differently: one paper describes a product co-purchasing network for node classification, while another describes a temporal point process benchmark for predicting the timestamp and category of the next reviewed product among 16 categories.

**What it is claimed to measure.** Papers do not link Amazon Polarity to any constructs or behavioral indicators through explicit measurement relationships. Most often, they use it to evaluate sentiment analysis or product-review text classification, while some papers frame it more broadly as an NLP classification or semantic understanding task. Separate descriptions of Amazon use the same name for node classification on a product co-purchasing graph or for predicting the next reviewed product's timestamp and category.

**Space of uses.** No other measurement instrument is linked to it by explicit relationships. In evaluation suites, papers use it alongside SST-2 and Yelp for sentiment analysis, and alongside BoolQ, SciQ, and CosmosQA as real-world NLP classification datasets. Papers typically position it as one member of a broader benchmark set, and one debiasing paper uses AmazonPolarity as a downstream check on whether bias unlearning preserves classification performance.

## Sources

**[In-Context Pretraining: Language Modeling Beyond Document Boundaries](https://proceedings.iclr.cc/paper_files/paper/2024/file/a1fe2365abdb691332537990a6385909-Paper-Conference.pdf) (as "Amazon")**
> A benchmark dataset for text classification, specifically for sentiment analysis of product reviews.

**[Relating Misfit to Gain in Weak-to-Strong Generalization Beyond the Squared Loss](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mulgund25a/mulgund25a.pdf)**
> A sentiment classification benchmark used here as an NLP classification dataset.

**[Mitigating Biases in Language Models via Bias Unlearning](https://aclanthology.org/2025.emnlp-main.208.pdf) (as "AmazonPolarity")**
> AmazonPolarity is a sentiment-related benchmark used to check whether debiasing preserves downstream classification performance.

## Relationships

### → Amazon Polarity
- **Text classification** (behaviors tasks) — *measured_by*
  > We study text classification using four datasets: sentiment analysis using SST-2 (Socher et al., 2013) and Amazon (Zhang et al., 2015)... (Section 4.1)
  - [Privacy-Preserving In-Context Learning for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/572cd21bd5dea96b065476b77d21b3c6-Paper-Conference.pdf)
