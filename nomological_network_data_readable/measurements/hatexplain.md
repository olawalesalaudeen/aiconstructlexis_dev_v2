# HateXplain
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Across the papers, the prevailing description is a natural-language or toxic text classification benchmark or dataset. It is most commonly framed as classifying sentences as normal versus hateful or offensive, with one snippet specifying that the target label is 0 for normal sentences and 1 for those considered hateful or offensive. Some authors describe it more specifically as a dataset with demographic correlation shifts and unwanted correlation between toxicity labels and mentions of demographics, while others present it as a subjective single-label dataset or as a source task for transfer learning in harmful content detection.

**What it is claimed to measure.** Papers use it primarily to evaluate classification of normal versus hateful, offensive, or toxic text. Some also report using it to evaluate fairness with respect to gender-related sensitive information, and another paper uses it to evaluate zero-shot robustness in the presence of demographic correlation shifts. No construct or behavioral indicator is explicitly linked to it.

**Space of uses.** Papers position it as an evaluation dataset in several roles. It appears as one of several text classification datasets used alongside CivilComments-WILDS, as one of two single-label subjective datasets used to contextualize multi-label findings alongside MSP-Podcast, and as a source task added to provide more source prompts for transfer learning in harmful content detection.

**Concerns raised.** A recurring concern in the descriptions is demographic correlation: one paper refers to demographic correlation shifts and states that the dataset has "unwanted correlation between toxicity labels and mentions of demographics." Some papers also use it when evaluating fairness with respect to gender-related sensitive information.

## Sources

**[Debiasing Attention Mechanism in Transformer without Demographics](https://proceedings.iclr.cc/paper_files/paper/2024/file/2f5337a39b1f6d670aad9d32debc0e5d-Paper-Conference.pdf)**
> A natural-language benchmark used here for classifying sentences as normal versus hateful or offensive while evaluating fairness with respect to gender-related sensitive information.
