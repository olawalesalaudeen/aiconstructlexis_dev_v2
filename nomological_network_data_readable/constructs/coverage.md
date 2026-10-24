# Coverage
**Type:** Construct  
**Referenced in:** 12 papers  

## State of the Field

**Definition agreement:** Conflicting. There is no common core definition here: the papers apply Coverage to different kinds of things and different phenomena, including a model's probability mass on optimal responses, the completeness of extracted verifiable claims, the representativeness of offline preference data over a policy's support, and the diversity or feature-space representativeness of a condensed dataset. Since most definitions point to different objects and mechanisms rather than different aspects of one shared phenomenon, papers using them would not be studying the same thing.

**Space of definitions.** Across the papers, Coverage is not used with a single stable meaning. A recurring framing treats it as a support or probability-mass property: how well a base model or offline data cover an optimal response or the support of a benchmark policy, sometimes formalized as how much probability mass is assigned to the arg-max response on average. Other papers use Coverage for completeness of extracted factual claims, defined as capturing verifiable information without explicitly including unverifiable content, or for the inclusion of new patterns from an original dataset in a condensed subset.

**Space of facets.** The term is broken down differently by task. In claim extraction work it has sentence-level and element-level forms; in sharpening work it is formalized with a coverage coefficient based on 1/πbase(y⋆(x)|x); in offline preference work it appears as a coverage assumption about D_y(·|x) covering the support of π⋆(·|x); and in dataset condensation it refers to samples that introduce patterns not yet covered by the existing condensed subsets. Taken together, papers use the same name for model-level, data-support, extraction-level, and dataset-pattern notions rather than a single shared taxonomy.

**Space of measurement.** Coverage is linked to three measurement instruments and no behavioral indicators. The instruments are Human annotation study, Human evaluation, and LLM-as-a-judge. Concretely, papers use human annotation as ground truth for sentence-level coverage, ask participants to rate whether a response comprehensively addresses all parts of a question including sub-questions, and instruct an LLM to count how many reference summaries are covered by candidate summaries. These operationalizations follow different task-specific meanings of coverage rather than a single common procedure.

**Links.** Coverage is linked to one construct, Reward overoptimization. A single paper reports that Coverage is related to Reward overoptimization, stating that overoptimization in offline alignment can be understood through the lens of coverage coefficients from offline reinforcement learning.

## Sources

**[Self-Improvement in Language Models: The Sharpening Mechanism](https://proceedings.iclr.cc/paper_files/paper/2025/file/bee8c2bc757f6bbc3efd7cf1b979f0c9-Paper-Conference.pdf)**
> A statistical property of a base model measuring how much probability mass it assigns to the optimal or arg-max response for a given prompt, on average.

## Relationships

### Coverage →
- **Human annotation study** (measurements) — *measured_by*
  > To evaluate sentence-level coverage (defined in § 2.2), we used the results of the human annotation study (§4.1.2) as ground truth.
  - [Towards Effective Extraction and Evaluation of Factual Claims](https://aclanthology.org/2025.acl-long.348.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > After each conversation, participants rate the model’s responses on a 5-point scale ... across five criteria ...: (4) Coverage: Response comprehensively addresses all components of questions asked, including sub-questions. (Section 3.2.3)
  - [SCRIBE: Structured Chain Reasoning for Interactive Behaviour Explanations using Tool Calling](https://aclanthology.org/2025.emnlp-main.1490.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > We address coverage by instructing an LLM to count the number of reference summaries covered by a set of candidate summaries. (Section 3.5)
  - [Argument Summarization and its Evaluation in the Era of Large Language Models](https://aclanthology.org/2025.emnlp-main.1797.pdf)

### Associated with
- **Reward overoptimization** (constructs)
  > “the overoptimization phenomena in offline alignment methods is an issue of sample-inefficiency, which can be understood through the lens of coverage coefficients developed in the theory of offline reinforcement learning”
  - [Correcting the Mythos of KL-Regularization: Direct Alignment without Overoptimization via Chi-Squared Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/e785d64baa2cde06c69d9b7a14636ef2-Paper-Conference.pdf)
