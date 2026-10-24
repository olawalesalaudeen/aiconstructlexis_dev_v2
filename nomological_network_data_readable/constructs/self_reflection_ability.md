# Self-reflection ability
**Type:** Construct  
**Referenced in:** 42 papers  
**Also known as:** Reflection, Reflection capability, Self-reflection, Iterative reflection capability  

## State of the Field

**Definition agreement:** Consensus. Most papers define self-reflection ability as a model or agent's capacity to examine its own prior outputs or performance, identify errors or weaknesses, and use that self-evaluation to refine later reasoning or responses. A few papers emphasize particular facets such as verbal feedback, verification, selecting the best solution, or resisting drift across repeated revisions, but these are variations within the same core phenomenon rather than different constructs.

**Space of definitions.** Across the papers, the prevailing usage treats self-reflection ability as a model or agent's capacity to examine its own prior attempts, performance, or generated solutions and use that review to refine later behavior, strategy, or reasoning. Most definitions present it as a latent ability or capability, often focused on failures or earlier outputs, while some describe it as an iterative process of self-evaluation and revision. A smaller line of work narrows the construct to reasoning-time self-correction or verification, or to generating useful verbal feedback from prior experience, but it keeps the same core idea of using self-produced evaluation to improve a subsequent attempt.

**Space of facets.** Papers use several closely overlapping labels, including reflection, reflection capability, self-reflection, and iterative reflection capability. The clearest subtype is an iterative form centered on multiple rounds of self-evaluation and revision, with one definition adding the need to avoid redundancy, drift, or stubbornness. Other formulations emphasize particular facets: verbal feedback from prior experience, critical review of previous responses for logical coherence and quality, and reasoning-focused checking that identifies errors, verifies conclusions, or selects the most plausible solution. Self-correction is also treated as related to the construct in one paper.

**Space of measurement.** No measurement instrument is linked to it. It is linked to one behavioral indicator, Self-correction, though that connection is reported as related rather than as a measure. The papers instead operationalize the construct through behaviors such as generating verbal feedback from prior experiences, asking whether each reflection step drives a question toward correctness, revisiting earlier data or solutions, and refining responses over repeated rounds. These operationalizations mostly match the dominant definitions, though some narrow the behavior to reasoning-specific correction or multi-cycle revision.

**Links.** Papers report only a few direct links. One paper claims a causal relationship from self-reflection ability to Generalization, describing agents with stronger reflection capabilities as showing excellent generalization performance across actor models, and another claims a causal relationship from self-reflection ability to Reasoning quality, stating that models with a reflection mechanism demonstrate superior chain-of-thought quality. Separately, one paper reports that Self-correction is related to self-reflection ability through an analysis of whether each reflection step drives the question toward correctness.

## Sources

**[Generator-Assistant Stepwise Rollback Framework for Large Language Model Agent](https://aclanthology.org/2025.emnlp-main.892.pdf) (as "Reflection")**
> The model's ability to review prior attempts and refine future behavior based on that review.

**[Reflective Multi-Agent Collaboration based on Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fa54b0edce5eef0bb07654e8ee800cb4-Paper-Conference.pdf) (as "Reflection capability")**
> The degree of an agent's proficiency in generating useful verbal feedback from prior experiences to improve subsequent task performance.

**[TinyThinker: Distilling Reasoning through Coarse-to-Fine Knowledge Internalization with Self-Reflection](https://aclanthology.org/2025.naacl-long.309.pdf) (as "Self-reflection")**
> The latent ability of an agent to analyze its own performance, particularly failures, and generate feedback to improve its strategy in subsequent attempts.

**[Instruct-of-Reflection: Enhancing Large Language Models Iterative Reflection Capabilities via Dynamic-Meta Instruction](https://aclanthology.org/2025.naacl-long.502.pdf) (as "Iterative reflection capability")**
> The latent ability of a model to effectively refine its responses over multiple cycles of self-evaluation and revision, avoiding degradation due to redundancy, drift, or stubbornness.

## Relationships

### Self-reflection ability →
- **Reasoning quality** (constructs) — *causes*
  > “Models with reflection mechanism demonstrate a superior CoT quality”
  - [MME-CoT: Benchmarking Chain-of-Thought in Large Multimodal Models for Reasoning Quality, Robustness, and Efficiency](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jiang25n/jiang25n.pdf)

### Associated with
- **Self-correction** (behaviors tasks)
  > “Reflection Quality ... analyzes whether each reflection step drives the question towards correctness.”
  - [MME-CoT: Benchmarking Chain-of-Thought in Large Multimodal Models for Reasoning Quality, Robustness, and Efficiency](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jiang25n/jiang25n.pdf)
