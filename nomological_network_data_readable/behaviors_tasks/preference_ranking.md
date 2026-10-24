# Preference ranking
**Type:** Behavior  
**Referenced in:** 6 papers  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats preference ranking as choosing or ordering outputs by human preference. Definitions converge on ranking outputs according to human judgments or selecting a preferred response from a set of options, most often in a pairwise form where one response is preferred over another for the same prompt. Some authors operationalize the behavior as assigning higher likelihoods to preferred than dispreferred outputs, with success measured through ranking accuracy, while another framing assigns scalar rewards to two outputs and ranks them by the difference in scores.

**Variants.** Papers most often study a pairwise variant: a prompt is paired with two candidate responses or sequences, and the task is to determine which one is preferred. Related formulations describe data as pairs of human-ranked responses, or write one sequence as preferred over another. A smaller variant scores each of two outputs separately with scalar rewards and then derives the ranking from the score difference, while the broadest definition also allows selection from a larger set of options.

**Space of elicitation and scores.** Papers link preference ranking to one measurement instrument, ArmoRM. In that use, ArmoRM is described as a reward model employed to score and rank responses. No other measurement instrument is linked to it.

**What it is taken as evidence of.** Across the papers, no construct is linked to preference ranking. The available relationships therefore do not specify what construct papers treat it as evidence of.

## Sources

**[Enhancing RLHF with Human Gaze Modeling](https://aclanthology.org/2025.emnlp-main.1559.pdf)**
> The observable task of ranking or selecting a preferred output from a set of options according to human judgments.

## Relationships

### Associated with
- **ArmoRM** (measurements)
  > “ArmoRM-Llama-3-8B-v0.1 (Wang et al., 2024a) is then employed as the reward model to score and rank these responses.”
  - [Weighted-Reward Preference Optimization for Implicit Model Fusion](https://proceedings.iclr.cc/paper_files/paper/2025/file/a49ca20266ea2d0d2dc1e3bb49196998-Paper-Conference.pdf)
