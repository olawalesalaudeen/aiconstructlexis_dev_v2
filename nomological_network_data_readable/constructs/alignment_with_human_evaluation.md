# Alignment with human evaluation
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Judging accuracy, Alignment with human judgments, Evaluation fidelity  

## State of the Field

**Definition agreement:** Consensus. Essentially all papers define this as how closely an automated evaluator's judgments or ratings match human judgments, typically using agreement or correlation. A few vary in setting or benchmark, such as safety labels, research ideas, user simulators, or human versus strong-AI proxies, but they are still studying the same core property of evaluator-human correspondence.

**Space of definitions.** Across papers, the prevailing usage treats this construct as how closely an LLM-based evaluator or other evaluation method matches human judgment. Definitions repeatedly frame it as correspondence, correlation, agreement, or alignment with human annotators, human users, or human preferences, and one paper states that it measures "the correlation of our judge scores with human preferences." Smaller variations broaden the reference standard to "human or strong AI judgments," emphasize "high-quality, human-level judgment," or narrow it to agreement with the majority decisions of human annotators in safety evaluation.

**Space of facets.** Papers use several nearby labels for the same general usage, including alignment with human evaluation, alignment with human judgments, judging accuracy, and evaluation fidelity. The main variation is the evaluation setting: some papers discuss an LLM evaluator or judge, some a user simulator's ratings of assistants, and some LLM-based evaluation of ideas or safety content. One paper also treats it as one aspect of judge assessment alongside self-consistency and susceptibility to input artifacts.

**Space of measurement.** No measurement instrument or behavioral indicator is linked to it. Instead, papers operationalize it directly through agreement or correlation against human references: judge scores are correlated with human preferences, simulator ratings with human users' ratings, and safety evaluations are checked for agreement with human annotations or majority decisions. These operationalizations use the same correlation or agreement framing that appears in the definitions.

**Links.** No causal, correlational, or related links are reported for it.

## Sources

**[Are Checklists Really Useful for Automatic Evaluation of Generative Tasks?](https://aclanthology.org/2025.emnlp-main.538.pdf)**
> The extent to which an LLM evaluator's judgments correspond to those of human annotators, measured via correlation or agreement metrics.

**[Meta-Rewarding Language Models: Self-Improving Alignment with LLM-as-a-Meta-Judge](https://aclanthology.org/2025.emnlp-main.583.pdf) (as "Judging accuracy")**
> The degree to which a model's evaluations of responses align with human or strong AI judgments, reflecting its reliability as a reward model.

**[SimulatorArena: Are User Simulators Reliable Proxies for Multi-Turn Evaluation of AI Assistants?](https://aclanthology.org/2025.emnlp-main.1786.pdf) (as "Alignment with human judgments")**
> The degree to which an evaluation method, such as a user simulator's ratings, correlates with the judgments of real human users.

**[GraphEval: A Lightweight Graph-Based LLM Framework for Idea Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/f5ce40ee957e4f76ef53c09d0bae20f4-Paper-Conference.pdf) (as "Evaluation fidelity")**
> The degree to which an LLM's evaluation of content, such as a research idea, aligns with high-quality, human-level judgment.
