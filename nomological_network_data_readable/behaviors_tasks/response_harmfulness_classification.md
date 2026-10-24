# Response harmfulness classification
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Response classification, Safety checking  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is a binary judgment over a model response, asking whether the response is safe or unsafe. One paper frames it for moderation as "predicting whether a response is safe or not," while another treats it as self-checking, where "the LLM checks if the response is safe or not" and outputs a binary indicator. In the more specific self-checking formulation, the safe label is described as a response that "does not contain any sensitive factors."

**Variants.** Papers use two closely related names for this behavior, response classification and safety checking. The main variation is in setting rather than outcome: one line treats it as moderation of a response, and another has the model evaluate its own generated response for sensitive or harmful content. Both formulations keep the task as a binary safe versus unsafe rating.

**Space of elicitation and scores.** Papers link this behavior to three measurement instruments: BeaverTails, HarmBench, and WildGuardMix. The measurement setup is described in benchmark and test-dataset terms, with papers saying they "consider ... as benchmarks" for response classification and also "utilize datasets containing" response-classification test sets.

**What it is taken as evidence of.** No paper links this behavior to a construct, so the papers do not specify what broader construct it is taken to indicate.

## Sources

**[BingoGuard: LLM Content Moderation Tools with Risk Levels](https://proceedings.iclr.cc/paper_files/paper/2025/file/782b6152c04e9948c2cb3833e9a288ef-Paper-Conference.pdf) (as "Response classification")**
> Determining whether a model response is safe or unsafe for moderation purposes.

**[Mixture of insighTful Experts (MoTE): The Synergy of Reasoning Chains and Expert Mixtures in Self-Alignment](https://aclanthology.org/2025.acl-long.151.pdf) (as "Safety checking")**
> The model evaluates its own generated response to determine whether it contains any sensitive or harmful content, outputting a binary safety rating.

## Relationships

### Response harmfulness classification →
- **WildGuardMix** (measurements) — *measured_by*
  > For the response classification, we utilize datasets containing BeaverTails Test (Ji et al., 2024), SafeRLHF Test (Dai et al., 2023), Harmbench Response (Mazeika et al., 2024), and WildGuardMix Test Response (Han et al., 2024).
  - [On Calibration of LLM-based Guard Models for Reliable Content Moderation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a99f732df9b668284b449da0214a3286-Paper-Conference.pdf)
- **HarmBench** (measurements) — *measured_by*
  > "For response classification, we consider Beaver-tails (Ji et al., 2024), Safe-RLHF (Dai et al., 2024), WildGuardTestResponse (Han et al., 2024), and HarmBench (Mazeika et al.) as benchmarks"
  - [BingoGuard: LLM Content Moderation Tools with Risk Levels](https://proceedings.iclr.cc/paper_files/paper/2025/file/782b6152c04e9948c2cb3833e9a288ef-Paper-Conference.pdf)
- **BeaverTails** (measurements) — *measured_by*
  > "For response classification, we consider Beaver-tails (Ji et al., 2024), Safe-RLHF (Dai et al., 2024), WildGuardTestResponse (Han et al., 2024), and HarmBench (Mazeika et al.) as benchmarks"
  - [BingoGuard: LLM Content Moderation Tools with Risk Levels](https://proceedings.iclr.cc/paper_files/paper/2025/file/782b6152c04e9948c2cb3833e9a288ef-Paper-Conference.pdf)
