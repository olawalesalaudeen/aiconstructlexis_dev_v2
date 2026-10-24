# Alignment tax
**Type:** Construct  
**Referenced in:** 3 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the surveyed work, the prevailing framing treats alignment tax as a loss in a model's broader capabilities after alignment-oriented fine-tuning, described as degradation in general capabilities or performance on other tasks when a model is tuned to human preferences or safety objectives. A narrower usage appears in one paper that speaks of alignment methods harming reasoning ability and refers to that harm as alignment tax, so the main difference is broad capability degradation versus a reasoning-specific manifestation.

**Space of facets.** Papers do not lay out a detailed subtype taxonomy for this construct. Instead, they position it alongside nearby notions: one source pairs it with "knowledge forgetting" and says suppressing alternative plausible outputs during training can erode a pre-trained model's encoded knowledge, while another treats harm to reasoning ability as a concrete case labeled as alignment tax.

**Space of measurement.** Operationalization is sparse. Papers link alignment tax to 1 measurement instrument, Open LLM Leaderboard, and no behavioral indicators; one study evaluates it across leaderboard tasks including ARC, GSM8K, HellaSwag, MMLU, TruthfulQA, and WinoGrande when discussing forgetting and reduced alignment tax. Another paper says it evaluates alignment tax by measuring how far an RLHF policy has drifted from its SFT initialization, so the available operationalizations mix task-based performance loss, which follows the dominant definition, with a drift-based analysis of policy change.

**Links.** Beyond measurement, papers link alignment tax to 3 constructs. One paper claims a causal relationship from Generation diversity to Alignment tax, using the language that suppressing alternative plausible outputs during training can lead to "knowledge forgetting" or "alignment tax"; another claims a causal relationship from Alignment tax to Factuality in the context of a statement that existing alignment or post-training strategies usually decrease factuality. A separate paper relates Alignment tax to Reasoning, describing harms to reasoning ability under preference optimization as alignment tax, and no correlational links are reported.

## Sources

**[Asynchronous RLHF: Faster and More Efficient Off-Policy RL for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0b99315234cc95e6ef281f9155b68832-Paper-Conference.pdf)**
> The degradation of a model's general capabilities or performance on other tasks as a result of being fine-tuned to align with specific human preferences or safety objectives.

## Relationships

### Alignment tax →
- **Open LLM Leaderboard** (measurements) — *measured_by*
  > In this section, we show that GEM also helps mitigate forgetting and reduce alignment tax. We evaluate the models across six tasks: ARC, GSM8K, HellaSwag, MMLU, TruthfulQA, and WinoGrande, as listed on the OpenLLM leaderboard. (Section 6.2)
  - [Preserving Diversity in Supervised Fine-Tuning of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a548ef984f30bca3abdc09f43743827f-Paper-Conference.pdf)

### → Alignment tax
- **Generation diversity** (constructs) — *causes*
  > by suppressing alternative plausible outputs during training, CE can lead to “knowledge forgetting” or “alignment tax”, eroding the pre-trained model’s encoded knowledge (Section 1)
  - [Preserving Diversity in Supervised Fine-Tuning of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a548ef984f30bca3abdc09f43743827f-Paper-Conference.pdf)

### Associated with
- **Reasoning** (constructs)
  > Recent studies (Ouyang et al., 2022; Lin et al., 2023) have shown that using preference optimization methods to align LLMs with human values often harms their reasoning ability, referred to as the alignment tax.
  - [As Simple as Fine-tuning: LLM Alignment via Bidirectional Negative Feedback Loss](https://proceedings.iclr.cc/paper_files/paper/2025/file/4bc4e9ecd5ae4a75048dc216a770cba1-Paper-Conference.pdf)
