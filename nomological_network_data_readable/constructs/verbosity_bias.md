# Verbosity bias
**Type:** Construct  
**Referenced in:** 13 papers  
**Also known as:** Length Bias, Length bias  

## State of the Field

**Definition agreement:** Consensus. Most papers define verbosity bias as a length-driven preference for longer or more verbose responses by an LLM, reward model, evaluator, or judge, even when quality or content is the same. One paper phrases it more broadly as systematic reward differences by response length, but it still targets the same core phenomenon of evaluation being influenced by verbosity rather than true quality.

**Space of definitions.** Across the papers, the prevailing usage treats verbosity bias, often under the alternate name length bias, as a tendency in a reward model, judge, LLM-based evaluator, reward signal, or model to prefer longer or more verbose responses over shorter ones, even when quality or content does not warrant that preference. Definitions repeatedly phrase it as favoring outputs based on sequence length rather than true quality, or preferring longer responses over more succinct ones of equal content. A narrower variant describes it as systematically assigning different rewards to longer versus shorter responses, without explicitly invoking quality.

**Space of facets.** Papers mostly use length bias and verbosity bias for the same construct. They place it among broader bias families in reward modeling and LLM evaluation, for example alongside position bias and self-enhancement bias, and one line of work describes it as arising from spurious correlations in training data or as a dataset bias. The main variation is where authors locate the bias, in the reward model, reward signal, judge, evaluator, or LM, rather than in the basic phenomenon being named.

**Space of measurement.** Operationally, papers link the construct to 2 measurement instruments and 1 behavioral indicator. RewardBench is the only instrument explicitly recorded as measuring it, in work that focuses on length bias while reporting benchmark performance; AlpacaEval 2.0 is linked more indirectly through a claim that the evaluation is not robust to length cheat, and an LC variant is described as designed to mitigate bias from model verbosity. The only linked behavioral indicator is reward hacking, and one paper also says that apparent length bias in rewards may mainly be an artifact of bias in naive evaluations.

**Links.** Papers make a small set of directional claims around the construct. One paper claims a causal relationship from verbosity bias to reward hacking, stating that when biased reward models are used in RLHF the model can learn to exploit those biases rather than improve genuine task performance; another claims a causal relationship from in-context learning to verbosity bias, saying models can pick up length biases in-context. Separate related links connect it to human preference alignment, where DPO's length bias is attributed to unbalanced length preference from non-uniform chosen and rejected response lengths, and to AlpacaEval 2.0, which is reported as not robust to length cheat; no paper reports a correlational link.

## Sources

**[Post-hoc Reward Calibration: A Case Study on Length Bias](https://proceedings.iclr.cc/paper_files/paper/2025/file/5d50c76fdf75c24ece568fc84a7125fb-Paper-Conference.pdf) (as "Length bias")**
> A disposition of a reward model to favor outputs based on their sequence length rather than their true quality.

**[Bootstrapping Language Models with DPO Implicit Rewards](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c4de96b9169aa869cc102afe31055e8-Paper-Conference.pdf) (as "Length Bias")**
> A latent tendency for the model or reward signal to prefer longer responses over more succinct ones of equal content.

**[Cheating Automatic LLM Benchmarks: Null Models Achieve High Win Rates](https://proceedings.iclr.cc/paper_files/paper/2025/file/9adc8ada9183f4b9a007a02773fd8114-Paper-Conference.pdf)**
> The tendency of an LLM-based evaluator to prefer longer, more verbose responses, irrespective of their actual quality.

## Relationships

### Verbosity bias →
- **Reward hacking** (behaviors tasks) — *causes*
  > when biased RMs are employed in RLHF, these biases can be further amplified (Zheng et al., 2023b), with the LLM learning to exploit these biases rather than improving genuine task performance—a phenomenon known as reward hacking. (Section 1)
  - [Post-hoc Reward Calibration: A Case Study on Length Bias](https://proceedings.iclr.cc/paper_files/paper/2025/file/5d50c76fdf75c24ece568fc84a7125fb-Paper-Conference.pdf)

### Associated with
- **Human preference alignment** (constructs)
  > Despite its advantages, DPO suffers from a length bias problem, which is caused by the unbalanced length preference due to the non-uniform length distribution of chosen and rejected responses. (Section 1)
  - [Earlier Tokens Contribute More: Learning Direct Preference Optimization From Temporal Decay Perspective](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd9b4a28fb9eebe0430c3312a4898a41-Paper-Conference.pdf)
- **AlpacaEval 2.0** (measurements)
  > Additionally, the LC win rates of our cheats are generally higher than the raw win rates because of their short length, which highlights that AlpacaEval 2.0 is also not robust to length cheat.
  - [Cheating Automatic LLM Benchmarks: Null Models Achieve High Win Rates](https://proceedings.iclr.cc/paper_files/paper/2025/file/9adc8ada9183f4b9a007a02773fd8114-Paper-Conference.pdf)
