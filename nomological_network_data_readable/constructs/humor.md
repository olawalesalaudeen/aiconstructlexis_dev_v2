# Humor
**Type:** Construct  
**Referenced in:** 7 papers  

## State of the Field

**Definition agreement:** Consensus. All papers define humor as a property of a model's responses being funny, amusing, or witty. The small differences, such as framing it as a desired style or as a secondary objective, do not change the core phenomenon being studied.

**Space of definitions.** Across the papers, humor is most commonly treated as a stylistic alignment dimension concerning whether responses are witty, amusing, or funny when that style is desired. The definitions largely agree on that core focus: some describe a model's tendency or ability to generate humorous responses, while another describes the quality of a response in being funny or amusing and places it as a secondary objective.

**Space of facets.** The recurring organization places humor alongside helpfulness and harmlessness as one of three pre-defined or multi-dimensional preference dimensions. Within that framing, some work treats humor as the target reward or as a thresholded secondary objective while helpfulness is the primary objective, whereas other work presents it more generally as one dimension to balance with the others.

**Space of measurement.** Operationalization is score-based: papers link humor to 2 measurement instruments, HH-RLHF and ArmoRM, and no behavioral indicators. In HH-RLHF-based setups, papers use open-source reward models to score responses on "Harmless", "Helpful", and "Humor", and one setup treats helpfulness as the baseline policy and humor as the target reward; ArmoRM is used as a multi-dimension reward model to report scores assessing responses from various perspectives. These measures operationalize humor at the level of response scoring, in line with definitions that focus on funny or amusing responses.

**Links.** Humor is linked to 2 other constructs, helpfulness and harmlessness. One paper reports that helpfulness and harmlessness correlate with humor, with the claim that aligning with one value could inadvertently diminish another; another paper says helpfulness and harmlessness are related to humor as multi-dimensional, sometimes conflicting preference dimensions that models may need to balance.

## Sources

**[Decoding-Time Language Model Alignment with Multiple Objectives](https://proceedings.neurips.cc/paper_files/paper/2024/file/57c89126d60c209f48d0e6395c766bb3-Paper-Conference.pdf)**
> The tendency of a model to produce amusing or humorous responses when such style is desired.

## Relationships

### Humor →
- **HH-RLHF** (measurements) — *measured_by*
  > HH-RLHF [3]: a large-scale dataset ... We follow Yang et al. [35] and use open-sourced reward models on three objectives: "Harmless", "Helpful", and "Humor" to score the responses (Section 4.1).
  - [MetaAligner: Towards Generalizable Multi-Objective Alignment of Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d03800841fa1bb2f43ef1750aafcce4-Paper-Conference.pdf)

### Associated with
- **Helpfulness** (constructs)
  > In practice, human preferences are multi-dimensional and we often need to align LLMs to balance multiple, sometimes conflicting, preference dimensions such as helpfulness, harmlessness, and humor (Section 2. Related Work)
  - [PARM: Multi-Objective Test-Time Alignment via Preference-Aware Autoregressive Reward Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lin25h/lin25h.pdf)
- **Harmlessness** (constructs)
  > In practice, human preferences are multi-dimensional and we often need to align LLMs to balance multiple, sometimes conflicting, preference dimensions such as helpfulness, harmlessness, and humor (Section 2. Related Work)
  - [PARM: Multi-Objective Test-Time Alignment via Preference-Aware Autoregressive Reward Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lin25h/lin25h.pdf)
