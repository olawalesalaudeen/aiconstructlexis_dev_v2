# AutoDAN
**Type:** Measurement  
**Referenced in:** 19 papers  

## State of the Field

**What it is.** Across papers, AutoDAN is most commonly described as a jailbreak attack or procedure for generating adversarial prompts that bypass LLM safety alignment, usually with a genetic or hierarchical genetic algorithm. Several definitions add that it searches from human-designed attack prompts, can produce high-perplexity or human-readable prompts, and may use controllable text generation or an added loss term for stealthiness or interpretability; some papers also frame it as a white-box or optimization-based attack, while another describes instruction-based or query-based AutoDAN for jailbreak evaluation. A smaller line of work treats AutoDAN differently, including as a public dataset for jailbreak detection or as an attack included in the EasyJailbreak dataset for transferability evaluation.

**What it is claimed to measure.** Papers link AutoDAN to 2 constructs and 2 behavioral indicators overall. Papers use it to measure adversarial robustness, safety robustness, and jailbreak resistance, typically by testing defenses against jailbreak attacks and reporting robustness or attack success rates; these measurement claims spread across several robustness-related targets rather than converging on one construct. Separately, one paper claims a causal relationship from AutoDAN to jailbreaking, describing it as generating jailbreaks that can bypass safety alignments.

**Space of uses.** Papers commonly use AutoDAN alongside GCG, and sometimes PAIR or TAP, as one of several representative algorithmic, optimization-based, gradient-based, or white-box jailbreak attacks when evaluating defenses. It is linked to 1 other measurement instrument, CSRT, through a related comparison where a paper treats AutoDAN as a non-multilingual red-teaming baseline. Other papers use it in transferability studies through the EasyJailbreak dataset, and one paper presents it as one of 3 public datasets for jailbreak detection.

## Sources

**[Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf)**
> A genetic-algorithm jailbreak procedure that generates adversarial prompts intended to bypass LLM safety alignment.

## Relationships

### → AutoDAN
- **Jailbreak resistance** (behaviors tasks) — *measured_by*
  > We also evaluate the robustness of R2-Guard against SOTA jailbreak attacks including GCG (Zou et al., 2023), PAIR (Chao et al., 2023), TAP (Mehrotra et al., 2023), and AutoDAN (Liu et al., 2023). (Section 5)
  - [$R^2$-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a07e87ecfa8a651d62257571669b0150-Paper-Conference.pdf)
- **Adversarial robustness** (constructs) — *measured_by*
  > Table 1: General model capability metrics and adversarial robustness (measured as ASR) of three LLMs trained using various safety fine-tuning methods. ... GCG ... PAIR ... AutoDAN ... HumanJailbreaks
  - [Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf)

### Associated with
- **CSRT** (measurements)
  > We compare the CSRT to three non-multilingual red-teaming baselines (i.e., GCG (Zou et al., 2023), AutoDAN (Liu et al., 2024), and PAIR (Chao et al., 2025)). (Section 4.3)
  - [Code-Switching Red-Teaming: LLM Evaluation for Safety and Multilingual Understanding](https://aclanthology.org/2025.acl-long.657.pdf)
