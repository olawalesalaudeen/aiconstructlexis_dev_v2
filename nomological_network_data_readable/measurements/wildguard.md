# WildGuard
**Type:** Measurement  
**Referenced in:** 9 papers  

## State of the Field

**What it is.** Across the cited papers, WildGuard is most commonly described as an automated, classifier-based evaluation procedure for model responses to harmful queries. The prevailing description is that it is used to judge whether a response fully complies with a harmful test query. Some papers describe the same tool more specifically as classifying a response as refusal or compliance, including on XSTest, while another paper frames it as an external harmfulness detection model that assigns a harmfulness probability to each response.

**What it is claimed to measure.** Papers do not explicitly link WildGuard to any constructs or behavioral indicators. Instead, they describe it as evaluating immediate response properties: whether a model response fully complies with harmful test queries, whether it should be classified as a refusal or compliance, and, in one framing, the probability that a response is harmful. Across these descriptions, the usage clusters around automatic safety evaluation rather than a single explicitly named construct.

**Space of uses.** No other measurement instrument is explicitly linked to WildGuard. Papers position it as an automatic evaluator for safety-focused model outputs: one use is to report accuracy based on whether WildGuard classifies an XSTest response as refusal or compliance, and another is to use it, alongside RoBERTa, as an external safety evaluator that assigns harmfulness probabilities to responses.

## Sources

**[Surgical, Cheap, and Flexible: Mitigating False Refusal in Language Models via Single Vector Ablation](https://proceedings.iclr.cc/paper_files/paper/2025/file/53dbd7e34fab703a639964e2d3ee9e84-Paper-Conference.pdf)**
> WildGuard, a classifier-based evaluation procedure used to judge whether model responses fully comply with harmful test queries.
