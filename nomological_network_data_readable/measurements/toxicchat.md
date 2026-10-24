# ToxicChat
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Papers most commonly treat ToxicChat as a benchmark dataset for query safety classification and safety detection. Definitions vary in emphasis: some describe a prompt dataset covering multiple harmful categories with simple and story-based templates, while others describe a dataset suitable for training safety classifiers, containing conversations with toxic content, or a benchmark for toxicity detection in real-world user-AI conversations. Papers also note that it has separate train and test splits.

**What it is claimed to measure.** Across papers, ToxicChat is used to measure harmful content detection, and papers describe it as part of evaluations on harmful prompts used to assess guardrail or safety models. Across the reported uses, it is connected to one behavioral indicator, Harmful content detection, and to no constructs, so the measurement claims converge on that behavioral target rather than spreading across multiple constructs. Papers also describe it as assessing query safety classification and safety detection across diverse toxic content types.

**Space of uses.** Papers usually position ToxicChat as a standard or public benchmark within broader guardrail and safety evaluations, including query classification settings. It appears alongside XSTest and OpenAI Moderation, and also with HarmBench, WildGuardMix, and Overkill; elsewhere papers place it within broader safety and truthfulness benchmark suites. In these uses, authors employ it both for direct model evaluation and as a dataset suitable for training safety classifiers.

## Sources

**[BingoGuard: LLM Content Moderation Tools with Risk Levels](https://proceedings.iclr.cc/paper_files/paper/2025/file/782b6152c04e9948c2cb3833e9a288ef-Paper-Conference.pdf)**
> A benchmark dataset used for evaluating the performance of models on query safety classification.

## Relationships

### → ToxicChat
- **Harmful content detection** (behaviors tasks) — *measured_by*
  > We evaluate the guardrail models on six datasets including five standard safety datasets (OpenAI Mod (Markov et al., 2023),ToxicChat (Lin et al., 2023), XSTest (Röttger et al., 2023), Overkill (Shi et al., 2024), BeaverTails (Ji et al., 2024)) and (2) our novel safety dataset TwinSafety. (Section 5)
  - [$R^2$-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a07e87ecfa8a651d62257571669b0150-Paper-Conference.pdf)
