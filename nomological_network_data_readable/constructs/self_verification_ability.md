# Self-verification ability
**Type:** Construct  
**Referenced in:** 15 papers  
**Also known as:** Self-verification, Solution summarization, Self-evaluation  

## State of the Field

**Definition agreement:** Consensus. Most papers define self-verification ability as a model's inherent or latent capacity to assess the correctness, validity, quality, or consistency of its own outputs, solutions, or reasoning steps, often without external help. A few papers phrase it as specific procedures or settings such as code-based checking, re-evaluation, or entity-type verification, but these are narrow implementations of the same core property rather than different phenomena.

**Space of definitions.** Across the surveyed work, the prevailing usage treats self-verification ability as a model property: the capacity to assess the correctness, validity, quality, or progress of its own solutions, outputs, or reasoning steps, often without external ground truth and sometimes through internal consistency checks. Papers make this concrete as checking intermediate reasoning, confirming conclusions, or validating answers through generated and executed code, and one line of work describes intrinsic self-verification as deciding whether generation should end or be refined. A smaller line of work uses the same label more procedurally, as prompting a model to reconsider a judgment, verify an entity type, or re-evaluate a response in natural language, so the main disagreement is between a latent ability framing and a specific verification technique or step. Some papers also emphasize limits rather than competence, reporting that models can be unreliable at validating their own results and that relying only on self-correction without external feedback may yield only modest gains or even worse performance.

**Space of facets.** Papers organize the construct mainly by what is being checked and at what stage. Some definitions are narrow, focusing on judging a completed solution as valid or invalid, while others broaden it to reflecting on the whole reasoning process, including explaining intermediate steps, monitoring progress, working backward to check consistency, and rethinking reasoning trajectories after verification. Neighboring labels partly overlap with this broader usage: "solution summarization" frames verification as self-summarization plus backward checking, and "self-evaluation" frames it as assessing correctness and progress, including self-assigned rewards. The only explicitly linked subtype is Backward reasoning, which papers treat as related rather than identical.

**Space of measurement.** No measurement instrument is linked to it, and one behavioral indicator is linked: Backward reasoning. In practice, papers operationalize the construct through behaviors rather than named benchmarks or probes, such as generating and ranking multiple answers, generating and executing code to verify answers and vote among them, asking the model to self-verify responses in natural language, prompting it to reconsider judgments or verify entity types, posing intermediate-step and backward-reasoning tasks, using self-assessment to allocate rewards, or training intrinsic verification by predicting [eos] versus [refine]. These operationalizations span both the dominant ability framing and the more procedural uses, because some treat verification as an internal capacity while others instantiate it as a prompted step or code-based check.

**Links.** Among the reported links, one paper says Backward reasoning is related to self-verification ability, describing backward reasoning tasks as testing whether a model can trace back through its reasoning pathway. No paper reports a causal relationship or correlation involving this construct.

## Sources

**[CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing](https://proceedings.iclr.cc/paper_files/paper/2024/file/fef126561bbf9d4467dbb8d27334b8fe-Paper-Conference.pdf) (as "Self-verification")**
> The inherent ability of a model to assess the correctness of its own generated solutions or reasoning steps, particularly by generating and executing code to validate an answer.

**[CogMath: Assessing LLMs’ Authentic Mathematical Ability from a Human Cognitive Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25ab/liu25ab.pdf) (as "Solution summarization")**
> The latent ability to reflect on and verify one's own reasoning process, including explaining intermediate steps and performing backward reasoning to check consistency.

**[MASTER: A Multi-Agent System with LLM Specialized MCTS](https://aclanthology.org/2025.naacl-long.476.pdf) (as "Self-evaluation")**
> The model's capacity to assess the correctness and progress of its own reasoning steps and solutions without relying on external ground truth.
