# Aesthetic bias
**Type:** Construct  
**Referenced in:** 6 papers  
**Also known as:** Stereotype bias  

## State of the Field

**Definition agreement:** Consensus. Most papers define aesthetic bias as a model's tendency or latent disposition to reproduce, endorse, or reinforce harmful stereotypes about demographic or protected social groups, with only minor differences in wording and scope. One paper instead defines it as systematic identity correlated differences in aesthetic judgments, but this looks like an outlier rather than a substantial alternative usage across the set.

**Space of definitions.** Across the surveyed work, the dominant framing attached to this concept is a broader stereotype-bias tendency: models generate, reproduce, endorse, or agree with stereotypes about demographic or protected groups such as race, gender, age, religion, or disability. A smaller framing, stated most explicitly in AesBiasBench: Evaluating Bias and Alignment in Multimodal Language Models for Personalized Image Aesthetic Assessment, narrows it to aesthetic judgments, describing "subtle bias" where judgments consistently correlate with identity attributes such as gender, age, or education, "even when the image content remains unchanged." The main disagreement is therefore scope: broad stereotype reproduction in model outputs versus systematic demographic shifts in aesthetic judgments under constant content.

**Space of facets.** Papers do not develop a detailed internal taxonomy for this construct. The clearest organization treats the narrower aesthetic version as a form of subtle or stereotypical bias, with models making different aesthetic judgments from "fixed assumptions about identity groups"; by contrast, the broader usage places stereotype bias alongside other evaluation aspects, including morality and legality, and, in one benchmark description, alongside toxicity, robustness, privacy, machine ethics, and fairness. In practice, the same label space is used both for a specific aesthetic-judgment phenomenon and for a wider class of stereotype-related model behavior.

**Space of measurement.** The construct is linked to 2 measurement instruments, CrowS-Pairs and DecodingTrust, and to no behavioral indicators. These instruments are used as stereotype datasets: one paper evaluates the "stereotypes" aspect with DecodingTrust and CrowS-Pairs, another operationalization computes "the fraction of times the model agrees with the stereotypical statements" from custom-made statements, and SHADES is introduced as a multilingual dataset for assessing stereotype bias. These operationalizations line up most directly with the broader stereotype-bias definition, while the separate aesthetic formulation is operationalized around demographic variation in aesthetic judgments with content held constant.

**Links.** No causal, correlational, or related links are reported.

## Sources

**[AesBiasBench: Evaluating Bias and Alignment in Multimodal Language Models for Personalized Image Aesthetic Assessment](https://aclanthology.org/2025.emnlp-main.386.pdf)**
> A form of subtle, systematic difference in a model's aesthetic judgments that consistently correlates with identity attributes like gender, age, or education.

**[ALI-Agent: Assessing LLMs'  Alignment with Human Values via Agent-based Evaluation](https://proceedings.neurips.cc/paper_files/paper/2024/file/b35c38f70065ac6c694089ca93a015bb-Paper-Conference.pdf) (as "Stereotype bias")**
> The latent disposition of a model to generate content that perpetuates or reinforces stereotypes related to demographic factors such as race, gender, or age.
