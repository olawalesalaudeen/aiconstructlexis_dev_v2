# Machine unlearning
**Type:** Construct  
**Referenced in:** 6 papers  
**Also known as:** Forgetting, Knowledge unlearning  

## State of the Field

Across the provided literature, machine unlearning is predominantly defined as the latent ability of a model to selectively remove the influence of specific training data, making it behave as if those data points had never been observed. A recurring emphasis is on the dual nature of this process: the goal is not just to "forget" targeted information, such as private knowledge or memorized content, but to do so without degrading overall model utility or suffering from "catastrophic forgetting." Several papers frame this as a balance, where unlearning should be "precise, affecting only the Forget set without disturbing the Retain set" ("UNDIAL: Self-Distillation with Adjusted Logits for Robust Unlearning in Large Language Models"). To operationalize this construct, researchers use several measurement instruments; the provided data shows that machine unlearning is evaluated using benchmarks such as WMDP, TOFU, and MUSE, as well as through Membership inference attacks. The concept is studied alongside related constructs like Memorization, Faithfulness, and Adversarial robustness. One paper also posits a directional relationship, suggesting that machine unlearning causes Safety.

## Sources

**[Soft Prompting for Unlearning in Large Language Models](https://aclanthology.org/2025.naacl-long.204.pdf)**
> The latent ability of a model to remove the influence of selected training data so that those examples no longer shape its outputs as if they had never been observed.

**[Soft Prompting for Unlearning in Large Language Models](https://aclanthology.org/2025.naacl-long.204.pdf) (as "Forgetting")**
> The latent ability of a model to reduce its reliance on or association with specific training data, effectively treating those examples as if they were never observed.

**[Protecting Privacy in Multimodal Large Language Models with MLLMU-Bench](https://aclanthology.org/2025.naacl-long.207.pdf) (as "Unlearning efficacy")**
> The degree to which a model removes targeted private knowledge about specified individuals from its parameters or outputs.

**[UNDIAL: Self-Distillation with Adjusted Logits for Robust Unlearning in Large Language Models](https://aclanthology.org/2025.naacl-long.444.pdf) (as "Unlearning")**
> The latent ability of a model to selectively forget specific knowledge or memorized content without degrading overall language performance or suffering catastrophic forgetting.

**[Does Localization Inform Unlearning? A Rigorous Examination of Local Parameter Attribution for Knowledge Unlearning in Language Models](https://aclanthology.org/2025.emnlp-main.1109.pdf) (as "Knowledge unlearning")**
> The latent ability of a language model to remove targeted information while retaining unrelated knowledge after post-training.

## Relationships

### Associated with
- **Catastrophic forgetting** (behaviors tasks)
  > we interpret unlearning as the forgetting of the predictive output token sequences yi ∈Dtr f . (Section 3.2)
  - [Soft Prompting for Unlearning in Large Language Models](https://aclanthology.org/2025.naacl-long.204.pdf)
