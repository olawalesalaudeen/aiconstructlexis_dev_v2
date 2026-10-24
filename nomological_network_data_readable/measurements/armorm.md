# ArmoRM
**Type:** Measurement  
**Referenced in:** 17 papers  
**Also known as:** ArmoRM-Llama3-8B-v0.1, ArmoRM-8B, ArmoRM-Llama3-8B  

## State of the Field

**What it is.** Across these papers, the prevailing usage treats ArmoRM as an automated reward model or judge for evaluating LLM responses, often described as multi-dimension or multi-objective and as assessing outputs from multiple perspectives. Some authors describe it more specifically as 8B or Llama3-8B variants, including ArmoRM-8B, ArmoRM-Llama3-8B, and ArmoRM-Llama3-8B-v0.1, used to score model outputs, filter synthetic preference data, or create preference pairs. One paper also describes it as producing both a scalar reward value and human-interpretable fine-grained attributes.

**What it is claimed to measure.** Papers link ArmoRM to 4 constructs and 2 behavioral indicators, so it is reported as measuring several targets rather than only one. The most common construct links are to Helpfulness and Text generation quality, followed by Harmlessness and Humor; the behavioral-indicator links are to Instruction following and Preference ranking. In these uses, papers report it as assessing response quality, evaluating responses from various perspectives, and, in one case, using its instruction-following dimension as the main evaluation metric.

**Space of uses.** Most commonly, papers position ArmoRM as an automated evaluator, external judge, or proxy model: they use it to score responses, rank candidate responses, create preference pairs, assign ground-truth quality labels, or calculate win rate. A smaller line of work uses a Llama3-8B variant as a scoring model for filtering synthetic preference data, and one paper says this use "effectively mitigates erroneous responses." It is also used alongside PairRM, Skywork-Reward-Llama-3.1-8B, and Skywork-Reward-Gemma-2-27B, and the only linked instrument is RewardBench, which one paper relates to ArmoRM by noting its ranking there.

## Sources

**[Self-Boosting Large Language Models with  Synthetic Preference Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/a4352e2c9d93582898a2a20e1f514e8f-Paper-Conference.pdf) (as "ArmoRM-Llama3-8B-v0.1")**
> ArmoRM-Llama3-8B-v0.1, a scoring model used for filtering synthetic preference data in the Llama3 setting.

**[Amulet: ReAlignment During Test Time for Personalized Preference Adaptation of LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7c43d4a79dede363a2d061c6158e5a5-Paper-Conference.pdf) (as "ArmoRM-8B")**
> An 8-billion parameter reward model used as an automated evaluator, specifically leveraging its instruction-following dimension to score model outputs.

**[PAD: Personalized Alignment of LLMs at Decoding-time](https://proceedings.iclr.cc/paper_files/paper/2025/file/196c8da9209b1977408d8771c4e7ee56-Paper-Conference.pdf)**
> A state-of-the-art multi-dimension reward model used as an automated judge to evaluate the alignment of LLM responses from various perspectives.

**[Self-Consistency Preference Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/prasad25a/prasad25a.pdf) (as "ArmoRM-Llama3-8B")**
> A specific, publicly-available reward model used as an external judge to score model-generated responses and create preference pairs for baseline training.

## Relationships

### → ArmoRM
- **Text generation quality** (constructs) — *measured_by*
  > we assess response quality using reward models... we employ three state-of-the-art reward models from RewardBench (Lambert et al., 2024): ArmoRM-Llama3-8B-v0.1 (Wang et al., 2024a), Skywork-Reward-Llama-3.1-8B (Liu and Zeng, 2024), and Skywork-Reward-Gemma-2-27B (Liu and Zeng, 2024). (Section 4.2)
  - [Stronger Models are Not Always Stronger Teachers for Instruction Tuning](https://aclanthology.org/2025.naacl-long.224.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > Since ArmoRM is a multi-objective model that not only gives a scalar reward value but also predicts human-interpretable fine-grained attributes, we first select 5 attributes (namely complexity, instruction following, honesty, helpfulness, and intelligence depth) that have the highest average coefficients on the UltraFeedback data. (Section 6.2)
  - [Reward-Augmented Data Enhances Direct Preference Alignment of LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25az/zhang25az.pdf)
- **Instruction following** (behaviors tasks) — *measured_by*
  > To address this issue, we selected the instruction-following dimension from ArmoRM-8B (Wang et al., 2024a) as the main evaluation metric for our experiment. (Section 4.1)
  - [Amulet: ReAlignment During Test Time for Personalized Preference Adaptation of LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7c43d4a79dede363a2d061c6158e5a5-Paper-Conference.pdf)

### Associated with
- **Preference ranking** (behaviors tasks)
  > “ArmoRM-Llama-3-8B-v0.1 (Wang et al., 2024a) is then employed as the reward model to score and rank these responses.”
  - [Weighted-Reward Preference Optimization for Implicit Model Fusion](https://proceedings.iclr.cc/paper_files/paper/2025/file/a49ca20266ea2d0d2dc1e3bb49196998-Paper-Conference.pdf)
