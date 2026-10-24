# Ethical alignment
**Type:** Construct  
**Referenced in:** 13 papers  
**Also known as:** Ethical considerations, Moral alignment, Value conformity, Ethical values  

## State of the Field

**Definition agreement:** Consensus. Most papers define ethical alignment as a latent property of a model's responses or behaviors: they should conform to ethical norms, principles, or human values and avoid harmful, biased, manipulative, or inappropriate content across contexts. A few papers narrow this to correspondence with human moral preferences, including one paper on internal value representations, but these are minority variants relative to the dominant shared output-level definition.

**Space of definitions.** Across the papers, the prevailing usage describes ethical alignment as conformity of a model's responses or behaviors to ethical standards, principles, or values, often coupled with avoiding harmful, misleading, inappropriate, or biased content. Within that common framing, some definitions narrow the reference standard to professional service ethics, while others extend it to safety, privacy, fairness, societal values, and cultural contexts. A smaller line of work instead defines the construct by correspondence between an LLM's moral preferences or value representations and aggregated human preferences, especially in moral dilemmas, and another framing treats it as the model's latent moral orientation revealed by whether outputs conform to or violate value principles.

**Space of facets.** Papers partition the concept along several facets. One recurring breakdown names safety, privacy, fairness, and harm avoidance as components of ethical considerations, while another treats value issues as social bias, ethics, and toxicity. Across names, the construct overlaps with moral alignment, value conformity, ethical considerations, and ethical values, but these labels do not fully coincide: some papers focus on observed response conformity, whereas others distinguish underlying value inclinations or intrinsic values from whether behaviors in common contexts conform to values.

**Space of measurement.** It is linked to 0 measurement instruments and 0 behavioral indicators. In the papers' own descriptions, operationalization still appears through datasets and analyses: assessment with the HH-RLHF dataset, multilingual trolley problems, binary coding of whether each response aligns with human values, propagated values from word associations, and prompt generation that elicits ethics violations to reveal value inclinations. This means the observed measurements span response conformity, human-preference correspondence, and latent value inclination.

**Links.** It is linked to 1 construct, Safety. One paper says it is related to Safety, using ethical considerations to include safety alongside privacy, fairness, and harm avoidance. No causal or correlational links are reported.

## Sources

**[AI Chatbots as Professional Service Agents: Developing a Professional Identity](https://aclanthology.org/2025.emnlp-main.652.pdf)**
> The latent tendency of the model to generate responses that conform to professional ethical standards and avoid harmful, misleading, or inappropriate content in service contexts.

**[MM-RLHF: The Next Step Forward in Multimodal LLM Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cs/zhang25cs.pdf) (as "Ethical considerations")**
> The adherence of a model's responses to ethical principles, including safety, privacy, fairness, and the avoidance of harmful or biased content.

**[Language Model Alignment in Multilingual Trolley Problems](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f32be3e112e151707cb12528bdfa7d5-Paper-Conference.pdf) (as "Moral alignment")**
> The degree to which an LLM's preferences in moral dilemmas correspond to aggregated human preferences.

**[DENEVIL: TOWARDS DECIPHERING AND NAVIGATING THE ETHICAL VALUES OF LARGE LANGUAGE MODELS VIA INSTRUCTION LEARNING](https://proceedings.iclr.cc/paper_files/paper/2024/file/efe406d6d2674d176cdcd958ce605d17-Paper-Conference.pdf) (as "Value conformity")**
> The degree to which an LLM's generated behaviors adhere to specified ethical principles or values.

**[DENEVIL: TOWARDS DECIPHERING AND NAVIGATING THE ETHICAL VALUES OF LARGE LANGUAGE MODELS VIA INSTRUCTION LEARNING](https://proceedings.iclr.cc/paper_files/paper/2024/file/efe406d6d2674d176cdcd958ce605d17-Paper-Conference.pdf) (as "Ethical values")**
> The latent moral orientation of an LLM as reflected in whether its outputs conform to or violate value principles across scenarios.

## Relationships

### Associated with
- **Safety** (constructs)
  > Ethical Considerations assess adherence to ethical principles, including safety, privacy, fairness, and harm avoidance, ensuring responses are free from harmful or biased content. (Section 2.3)
  - [MM-RLHF: The Next Step Forward in Multimodal LLM Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cs/zhang25cs.pdf)
