# Jailbreak resistance
**Type:** Behavior  
**Referenced in:** 12 papers  
**Also known as:** Jailbreak attack resistance  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats jailbreak resistance as observable refusal to comply with prompts that try to bypass safety filters, safety mechanisms, or ethical guidelines and elicit harmful or prohibited content. Closely related definitions describe maintaining safety constraints or aligned responses under adversarial prompts or perturbations, and papers also describe the behavior in terms of jailbreak robustness or jailbreak susceptibility. A smaller multimodal framing treats success as resisting harmful generation from adversarial image-text pairs or typographic manipulation.

**Variants.** Most papers study text-side adversarial prompting, including unsafe prompts, prompts designed to circumvent safety constraints, and what one paper calls real-world adversarial prompts. Some papers examine the behavior in training-related settings, such as resistance to jailbreaking tuning or robustness against jailbreaking prompts when feedback and revision are included. A smaller line studies multimodal jailbreaks through adversarial image-text pairs and typographic manipulation.

**Space of elicitation and scores.** Papers measure this behavior with 7 linked instruments. AdvBench and GCG are the most recurrent, while AutoDAN, HADES, MM-SafetyBench, and 2 other instruments are also used; across the linked evidence, these are described as unsafe-prompt benchmarks, jailbreak attack methods, or jailbreak-attack datasets. Elicitation typically comes from adversarial or unsafe prompts and attack suites, and one paper explicitly scores performance with an unsafety detection rate.

**What it is taken as evidence of.** Across these papers, Safety is the only linked construct. That connection is framed as related rather than as a measurement claim, with one paper discussing defense against jailbreaks in the course of enhancing model safety. Beyond that, the construct-level framing shows little variation.

## Sources

**[TAIA: Large Language Models are Out-of-Distribution Data Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/be0a8ecf8b2743a4117557c5eca0fb79-Paper-Conference.pdf)**
> The observable behavior of refusing to comply with prompts designed to bypass safety filters and elicit harmful or prohibited content.

**[SURE: Safety Understanding and Reasoning Enhancement for Multimodal Large Language Models](https://aclanthology.org/2025.emnlp-main.384.pdf) (as "Jailbreak attack resistance")**
> The model successfully resists attempts to generate harmful content through adversarial image-text pairs or typographic manipulation.

## Relationships

### Jailbreak resistance →
- **AdvBench** (measurements) — *measured_by*
  > Results in Table 5 show that TAIA significantly reduces the attack success rate after tuning on three levels of red-teaming data... evaluated on Advbench [10].
  - [TAIA: Large Language Models are Out-of-Distribution Data Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/be0a8ecf8b2743a4117557c5eca0fb79-Paper-Conference.pdf)
- **GCG** (measurements) — *measured_by*
  > We also evaluate the robustness of R2-Guard against SOTA jailbreak attacks including GCG (Zou et al., 2023), PAIR (Chao et al., 2023), TAP (Mehrotra et al., 2023), and AutoDAN (Liu et al., 2023). (Section 5)
  - [$R^2$-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a07e87ecfa8a651d62257571669b0150-Paper-Conference.pdf)
- **PAIR** (measurements) — *measured_by*
  > We also evaluate the robustness of R2-Guard against SOTA jailbreak attacks including GCG (Zou et al., 2023), PAIR (Chao et al., 2023), TAP (Mehrotra et al., 2023), and AutoDAN (Liu et al., 2023). (Section 5)
  - [$R^2$-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a07e87ecfa8a651d62257571669b0150-Paper-Conference.pdf)
- **AutoDAN** (measurements) — *measured_by*
  > We also evaluate the robustness of R2-Guard against SOTA jailbreak attacks including GCG (Zou et al., 2023), PAIR (Chao et al., 2023), TAP (Mehrotra et al., 2023), and AutoDAN (Liu et al., 2023). (Section 5)
  - [$R^2$-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a07e87ecfa8a651d62257571669b0150-Paper-Conference.pdf)
- **SafeBench** (measurements) — *measured_by*
  > We adopt five jailbreak attack methods or datasets to comprehensively evaluate the defense capabilities of MLLMs against jailbreak attacks, including SafeBench (Gong et al., 2023), MM-SafetyBench (Liu et al., 2024b), Hades (Li et al., 2024), MML (Wang et al., 2024c), and HIMRD (Teng et al., 2024).
  - [SURE: Safety Understanding and Reasoning Enhancement for Multimodal Large Language Models](https://aclanthology.org/2025.emnlp-main.384.pdf)
- **MM-SafetyBench** (measurements) — *measured_by*
  > We adopt five jailbreak attack methods or datasets to comprehensively evaluate the defense capabilities of MLLMs against jailbreak attacks, including SafeBench (Gong et al., 2023), MM-SafetyBench (Liu et al., 2024b), Hades (Li et al., 2024), MML (Wang et al., 2024c), and HIMRD (Teng et al., 2024).
  - [SURE: Safety Understanding and Reasoning Enhancement for Multimodal Large Language Models](https://aclanthology.org/2025.emnlp-main.384.pdf)
- **HADES** (measurements) — *measured_by*
  > We adopt five jailbreak attack methods or datasets to comprehensively evaluate the defense capabilities of MLLMs against jailbreak attacks, including SafeBench (Gong et al., 2023), MM-SafetyBench (Liu et al., 2024b), Hades (Li et al., 2024), MML (Wang et al., 2024c), and HIMRD (Teng et al., 2024).
  - [SURE: Safety Understanding and Reasoning Enhancement for Multimodal Large Language Models](https://aclanthology.org/2025.emnlp-main.384.pdf)

### → Jailbreak resistance
- **Logical reasoning** (constructs) — *causes*
  > The grounding knowledge and principled reasoning procedure enable R2-Guard to be effective, robust against jailbreak attacks, and flexible given new safety categories. (Abstract)
  - [$R^2$-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a07e87ecfa8a651d62257571669b0150-Paper-Conference.pdf)
