# Sequential recommendation
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Next-item prediction  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is predicting the next item a user will interact with from a chronologically ordered history of prior interactions. Definitions converge on forecasting the user's subsequent choice, future interaction, or next likely item from historical records, so what counts as the behavior is producing that next-item prediction from the preceding sequence.

**Variants.** The prevailing name is sequential recommendation, though some authors use next-item prediction for the same behavior. Smaller variations reformulate it as next-token prediction in an autoregressive setup, where the next item is forecast from the predicted token sequence, or cast it as a natural language generation task that asks the model to recommend an item from a user's interaction history.

**Space of elicitation and scores.** Papers link this behavior to three measurement instruments, all described as real-world or benchmark datasets: LastFM, MovieLens-25M multi-tabular, and Yelp. The linked instruments show that papers operationalize it through dataset-based evaluation on those settings.

**What it is taken as evidence of.** Papers do not explicitly treat this behavior as reflecting a construct. Instead, the only construct links are two causal claims in the opposite direction: one paper claims a causal relationship from Generation diversity to sequential recommendation, and from Memorization to sequential recommendation.

## Sources

**[LLM-ESR: Large Language Models Enhancement for Long-tailed Sequential Recommendation](https://proceedings.neurips.cc/paper_files/paper/2024/file/2f0728449cb3150189d765fc87afc913-Paper-Conference.pdf)**
> The task of predicting the next item a user is likely to interact with based on their chronologically ordered history of previous interactions.

**[RecGPT: A Foundation Model for Sequential Recommendation](https://aclanthology.org/2025.emnlp-main.513.pdf) (as "Next-item prediction")**
> The observable behavior of forecasting the next item a user will interact with based on their preceding sequence of interactions.
