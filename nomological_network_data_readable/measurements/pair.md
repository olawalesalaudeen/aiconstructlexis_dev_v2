# PAIR
**Type:** Measurement  
**Referenced in:** 23 papers  

## State of the Field

**What it is.** Across papers, PAIR is most commonly described as Prompt Automatic Iterative Refinement, a black-box jailbreak procedure or algorithmic attack in which an attacker or red-teaming LLM automatically and iteratively generates or refines prompts until a target model is jailbroken. Several definitions add that it can use multi-turn conversation, prompt optimization, or a query-based setup, and one paper describes it as prompt-level rather than token-level jailbreak. A smaller line of work describes it differently, as a population-based evolutionary attack, a pattern that frames harmful requests in imaginary scenarios, or, in one paper, a Likert-style evaluation prompt for judging whether a response violates ethical, legal, or safety guidelines.

**What it is claimed to measure.** Papers link PAIR to one construct and two behavioral indicators. The dominant linked behavioral indicator is Jailbreaking, followed by Jailbreak resistance, while Harmlessness is the only linked construct. In recorded measurement claims, papers use PAIR to measure Jailbreaking, Jailbreak resistance, and Harmlessness; beyond that, one paper claims a causal relationship from PAIR to Jailbreaking by describing iterative refinement until a successful attack is found, and another reports Jailbreaking as related to PAIR.

**Space of uses.** Papers link PAIR to one other measurement instrument, CSRT, with PAIR used as a non-multilingual red-teaming baseline in that comparison. More broadly, PAIR is usually positioned as one of several prominent or representative jailbreak attacks rather than a standalone check, most often alongside GCG and also with AutoDAN, TAP, DeepInception, and GPTFuzzer. In those setups, authors use it to evaluate adversarial robustness, defense effectiveness, safety generalization, or the iteration number of successful jailbreaks with and without defenses.

## Sources

**[Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf)**
> Prompt Automatic Iterative Refinement, a black-box jailbreak procedure in which an attacker LLM iteratively refines prompts until the target model is jailbroken.

## Relationships

### → PAIR
- **Jailbreaking** (behaviors tasks) — *measured_by*
  > We also evaluated the effect of the jailbreaking attack PAIR (Chao et al., 2023) on a Llama-2-7b-chat model that had been subjected to the Q-Misalign attack at full precision. (Section 5.2)
  - [Durable Quantization Conditioned Misalignment Attack on Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/376b1b131609e764f687afca832e62b3-Paper-Conference.pdf)
- **Jailbreak resistance** (behaviors tasks) — *measured_by*
  > We also evaluate the robustness of R2-Guard against SOTA jailbreak attacks including GCG (Zou et al., 2023), PAIR (Chao et al., 2023), TAP (Mehrotra et al., 2023), and AutoDAN (Liu et al., 2023). (Section 5)
  - [$R^2$-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a07e87ecfa8a651d62257571669b0150-Paper-Conference.pdf)
- **Harmlessness** (constructs) — *measured_by*
  > Table 1 presents a benchmark comparison, displaying harmfulness scores and ASR (attack success rates, shown in brackets) for various defense methods... under several benchmark attacks, including PAIR (Section 4.2).
  - [Layer-Level Self-Exposure and Patch: Affirmative Token Mitigation for Jailbreak Attack Defense](https://aclanthology.org/2025.naacl-long.623.pdf)

### Associated with
- **CSRT** (measurements)
  > We compare the CSRT to three non-multilingual red-teaming baselines (i.e., GCG (Zou et al., 2023), AutoDAN (Liu et al., 2024), and PAIR (Chao et al., 2025)). (Section 4.3)
  - [Code-Switching Red-Teaming: LLM Evaluation for Safety and Multilingual Understanding](https://aclanthology.org/2025.acl-long.657.pdf)
