# Misclassification
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Label misidentification, Mis-classification under target attack, Targeted misclassification  

## State of the Field

**Space of definitions.** Most definitions treat misclassification as an observable failure in which a model assigns the wrong class or category label to an input. Across the papers, this covers both images and text, including cases where a model mistakes an original concept for a different class or assigns a text to the wrong predefined category. A smaller line of work narrows the behavior to targeted attack settings, where success means predicting a specified target class, and one paper defines targeted ASR using only cases where the top-1 prediction label matches the attack-text label.

**Variants.** Papers study several named variants, including label misidentification, targeted misclassification, and mis-classification under target attack. The settings include vision-language and multi-image image classification, identity or object naming, and text classification under backdoor triggers, such as sentiment being flipped into a specific category. Perturbations are described in different ways, including slight input perturbations, cases where an original concept is taken for a different class, and replacing part of an input with tokens or pixels from the target class.

**Space of elicitation and scores.** No measurement instrument is linked to it. Where scoring details are stated, papers use attack-success formulations: an attack succeeds when models classify inputs from other classes as belonging to the target class, and targeted ASR counts only cases whose top-1 prediction label is identical to the attack-text label.

**What it is taken as evidence of.** No construct is linked to it.

## Sources

**[Text-Guided Attention is All You Need for Zero-Shot Robustness in Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/aec2dfc4f5e19acf05c15587c889dbc4-Paper-Conference.pdf)**
> An observable failure mode where the model produces an incorrect class label for a given input.

**[Shadowcast: Stealthy Data Poisoning Attacks Against Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6a2e30664b9647f97d7b9275358d083c-Paper-Conference.pdf) (as "Label misidentification")**
> Responding to an image with the wrong class label or identity, such as naming one person or object as another.

**[Understanding and Mitigating Bottlenecks of State Space Models through the Lens of Recency and Over-smoothing](https://proceedings.iclr.cc/paper_files/paper/2025/file/ccdfe117c6729267c1595cdf0a587da8-Paper-Conference.pdf) (as "Mis-classification under target attack")**
> The model's incorrect classification of an input (e.g., an image) as a target class after a portion of the input's tokens are replaced with tokens from that target class.

**[Typographic Attacks in a Multi-Image Setting](https://aclanthology.org/2025.naacl-long.626.pdf) (as "Targeted misclassification")**
> Misclassifying an image into the specific class named by the attack text.
