# Yelp
**Type:** Measurement  
**Referenced in:** 9 papers  

## State of the Field

**What it is.** Across the surveyed work, the dominant framing is a Yelp review dataset used in classification settings, especially sentiment classification. Definitions variously describe it as derived from Yelp reviews, as user or business reviews from the Yelp platform, and as reviews about restaurants and local services categorized into sentiment classes; some papers instead frame it as casual reviews for short natural language evaluation or as an out-of-distribution set for sentiment analysis.

**What it is claimed to measure.** Papers use Yelp to measure two behavioral indicators, Text classification and Sequential recommendation, and no constructs are linked to it. Most descriptions tie it to text classification, especially sentiment classification and a 5-way business-review setup, while a separate paper uses it to measure sequential recommendation.

**Space of uses.** Papers most often position Yelp as an evaluation dataset, for example to evaluate downstream classifiers, to run out-of-distribution evaluation for sentiment analysis, or to assess the utility of synthetic data in a 5-way classification task; one paper also uses it to source seed samples. It is used alongside other benchmarks such as SST-5, SST2, OpenReview, Amazon Fashion, and Amazon Beauty, and a smaller usage treats it as a short natural language dataset of casual reviews for text origin detection.

## Sources

**[LLMs vs Established Text Augmentation Techniques for Classification: When do the Benefits Outweight the Costs?](https://aclanthology.org/2025.naacl-long.526.pdf)**
> A dataset derived from Yelp reviews, used for sentiment classification tasks to source seed samples and evaluate downstream classifiers.

## Relationships

### → Yelp
- **Text classification** (behaviors tasks) — *measured_by*
  > We conduct experiments on two classiﬁcation tasks: Yelp (Yelp, Inc.) and OpenReview (Xie et al., 2024), both of which are 5-way classiﬁcation... (Section 4.1.1)
  - [Synthesizing Privacy-Preserving Text Data via Finetuning *without* Finetuning Billion-Scale LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25g/tan25g.pdf)
