# Auto-J test set
**Type:** Measurement  
**Referenced in:** 3 papers  
**Also known as:** Auto-J, AutoJ  

## State of the Field

**What it is.** The prevailing description treats Auto-J as a curated benchmark for meta-evaluation of LLM judges. A smaller line of work describes AutoJ as an automated judge benchmark for evaluating reward models, especially their correlation with human expert judgments. Some papers further refer to "Auto-J (Eval-P test set with ties)", describing it as a pairwise evaluation benchmark that includes ties.

**What it is claimed to measure.** Its reported links are spread across 2 constructs and 1 behavioral indicator rather than centered on a single target. Papers use it to measure helpfulness, with AUTO-J providing 1-to-10 ratings, and text summarization, where the Auto-J model is used to measure win rates of model-generated summaries against human ones. Beyond those measurement uses, one paper records a causal relationship from the Auto-J test set to critique ability.

**Space of uses.** Papers position it both as a benchmark and as an evaluator used inside broader evaluation setups. One paper uses AutoJ alongside RewardBench and MT-Bench as one of several reward model benchmarks, another uses AUTO-J together with GPT-4 to rate responses, and another uses the Auto-J model to score summary win rates against human summaries.

**Concerns raised.** One paper notes a caveat around ties: it refers to "Auto-J (Eval-P test set with ties)" and states that allowing ties results in lower scores across the judges.

## Sources

**[Trust or Escalate: LLM Judges with Provable Guarantees for Human Agreement](https://proceedings.iclr.cc/paper_files/paper/2025/file/08dabd5345b37fffcbe335bd578b15a0-Paper-Conference.pdf) (as "Auto-J")**
> A curated benchmark for meta-evaluation of LLM judges.

**[Advancing LLM Reasoning Generalists with Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e2c12c1a41af7c19c5b38e0837a52d1-Paper-Conference.pdf) (as "AutoJ")**
> An automated judge benchmark used to evaluate reward models, particularly on their correlation with human expert judgments.
