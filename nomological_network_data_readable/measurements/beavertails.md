# BeaverTails
**Type:** Measurement  
**Referenced in:** 21 papers  
**Also known as:** Beavertails  

## State of the Field

**What it is.** Across papers, BeaverTails is most commonly treated as a safety and alignment benchmark for model responses, often described as having human annotations over 14 harm or safety categories. Definitions vary on its format: some describe an evaluation subset of 700 prompts for query-answer interactions and helpfulness or harmlessness judgments, some describe advice queries with candidate answers, and others describe a larger resource of 330k annotated sentences; papers also frame it as containing safe and unsafe samples for alignment and attack simulation. One description states that the evaluation dataset comprises "700 prompts spanning 14 harm categories" (Aligner: Efficient Alignment by Learning to Correct).

**What it is claimed to measure.** Papers use BeaverTails to measure 5 constructs and 3 behavioral indicators, so its reported role spans several targets rather than centering on only one. The prevailing claims concern harmlessness and helpfulness, with papers saying it categorizes annotations into helpfulness and harmlessness and that corresponding prompts are used for those evaluations; a smaller line of work reports it as measuring safety alignment, safety, and adversarial robustness. Among behavioral indicators, papers most often use it for harmful content generation, and also report it as measuring harmful content detection and response harmfulness classification.

**Space of uses.** Papers often position BeaverTails as one benchmark within broader safety evaluation suites. It appears with XSTest and AdvBench in guard evaluation, and with Safe-RLHF, WildGuardTestResponse, and HarmBench for response classification; some work also uses its safe samples for alignment and mixes its unsafe samples into benign fine-tuning data. One study describes these as "three benchmarks commonly used in related work" (Gamma-Guard: Lightweight Residual Adapters for Robust Guardrails in Large Language Models).

## Sources

**[Beyond Interpretability: The Gains of Feature Monosemanticity on Model Robustness](https://proceedings.iclr.cc/paper_files/paper/2025/file/11822e84689e631615199db3b75cd0e4-Paper-Conference.pdf) (as "Beavertails")**
> A dataset used to evaluate alignment and safety-related responses of finetuned language models.

**[BingoGuard: LLM Content Moderation Tools with Risk Levels](https://proceedings.iclr.cc/paper_files/paper/2025/file/782b6152c04e9948c2cb3833e9a288ef-Paper-Conference.pdf)**
> A benchmark dataset used for evaluating the performance of models on response safety classification.

## Relationships

### → BeaverTails
- **Harmlessness** (constructs) — *measured_by*
  > BeaverTails dataset... assessing the harmlessness and helpfulness of the models.
  - [Alignment at Pre-training! Towards Native Alignment for Arabic LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/195c4e2910bedabd813f9fe4e70c642c-Paper-Conference.pdf)
- **Harmful content generation** (behaviors tasks) — *measured_by*
  > To calculate the harmful score, we sample 1000 instructions from the testing set of BeaverTails (Ji et al., 2023).
  - [Booster: Tackling Harmful Fine-tuning for Large Language Models via Attenuating Harmful Perturbation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7ac8a21e5a27e7ab31a5f42a0117bdb-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > BeaverTails dataset... assessing the harmlessness and helpfulness of the models.
  - [Alignment at Pre-training! Towards Native Alignment for Arabic LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/195c4e2910bedabd813f9fe4e70c642c-Paper-Conference.pdf)
- **Harmful content detection** (behaviors tasks) — *measured_by*
  > We evaluate the guardrail models on six datasets including five standard safety datasets (OpenAI Mod (Markov et al., 2023),ToxicChat (Lin et al., 2023), XSTest (Röttger et al., 2023), Overkill (Shi et al., 2024), BeaverTails (Ji et al., 2024)) and (2) our novel safety dataset TwinSafety. (Section 5)
  - [$R^2$-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a07e87ecfa8a651d62257571669b0150-Paper-Conference.pdf)
- **Response harmfulness classification** (behaviors tasks) — *measured_by*
  > "For response classification, we consider Beaver-tails (Ji et al., 2024), Safe-RLHF (Dai et al., 2024), WildGuardTestResponse (Han et al., 2024), and HarmBench (Mazeika et al.) as benchmarks"
  - [BingoGuard: LLM Content Moderation Tools with Risk Levels](https://proceedings.iclr.cc/paper_files/paper/2025/file/782b6152c04e9948c2cb3833e9a288ef-Paper-Conference.pdf)
- **Safety** (constructs) — *measured_by*
  > Conversely, further introducing unsafe guidelines into the system prompt reduces the safety performance on BeaverTails (Ji et al., 2024) (91.40 vs. 63.30). (Section 2.2)
  - [Beware of Your Po! Measuring and Mitigating AI Safety Risks in Role-Play Fine-Tuning of LLMs](https://aclanthology.org/2025.acl-long.544.pdf)

### Associated with
- **Safety alignment** (constructs)
  > “For the alignment task, we use the safe samples from the alignment dataset of BeaverTails (Ji et al., 2023).”
  - [Vaccine: Perturbation-aware Alignment for Large Language Models against Harmful Fine-tuning Attack](https://proceedings.neurips.cc/paper_files/paper/2024/file/873c86d9a979ab80d8e2919510d4446b-Paper-Conference.pdf)
