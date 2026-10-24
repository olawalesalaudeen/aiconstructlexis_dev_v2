# MultiNERD
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Across the papers, the dominant framing is a named entity recognition dataset. Definitions describe it as a pre-training dataset based on Wikipedia and Wikinews, with an English split and multiple label names, and some authors also present it as a baseline for IE pre-training. Another use treats it as a named entity recognition dataset for few-shot open-set classification, including chain-of-thought prompting on the dataset.

**What it is claimed to measure.** Papers use it to measure a single behavioral indicator, Named entity recognition, and it is not linked to any constructs. The recorded claims therefore converge on that one behavioral indicator rather than spreading across several targets.

**Space of uses.** Papers position it both as a baseline for IE pre-training and as an evaluation dataset for chain-of-thought prompting under few-shot open-set conditions. In that latter use, a study reports the highest F1-score across many settings for both seen and unseen classes. No measurement instrument is linked to it.

## Sources

**[Cuckoo: An IE Free Rider Hatched by Massive Nutrition in LLM's Nest](https://aclanthology.org/2025.acl-long.66.pdf)**
> A named entity recognition pre-training dataset based on Wikipedia and Wikinews, containing 164K English instances with 17 label names, used as a baseline for IE pre-training.
