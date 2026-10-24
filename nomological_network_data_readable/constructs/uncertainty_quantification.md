# Uncertainty quantification
**Type:** Construct  
**Referenced in:** 31 papers  
**Also known as:** Reward uncertainty, Evaluation uncertainty, Response uncertainty, Reasoning uncertainty, Underspecification uncertainty, Uncertainty estimation  

## State of the Field

**Definition agreement:** Consensus. Most papers define uncertainty quantification as a model or system estimating, representing, or communicating how uncertain or reliable its own predictions, outputs, or reasoning are, often via confidence, entropy, Bayesian methods, or ensembles; one paper further stresses that this estimate should be calibrated to actual correctness. A few papers instead focus on output instability, input ambiguity, or uncertainty in predicted performance on unseen prompts, but these are minority uses relative to the dominant shared meaning.

**Space of definitions.** Most commonly, papers treat it as a model or system's ability to estimate, represent, or express how uncertain it is about its predictions or outputs, usually in terms of confidence or reliability, and sometimes with the stricter calibration view that expressed confidence should match the probability of being correct. A smaller line of work defines uncertainty more narrowly around particular objects: ambiguity in attention or prediction distributions used for adaptive processing, instability in LLM evaluations, ambiguity in reward-model preference predictions, uncertainty about a prompt's response distribution or repeated samples, uncertainty in reasoning processes, or latent ambiguity from underspecified user input. The main difference across definitions is the locus of the uncertainty, general self-uncertainty about outputs versus uncertainty tied to a specific module, judgment process, or interaction setting.

**Space of facets.** Papers organize the concept into several named variants: reward uncertainty, evaluation uncertainty, response uncertainty, reasoning uncertainty, and underspecification uncertainty. They also use uncertainty estimation alongside uncertainty quantification for closely related broad notions, and one paper places uncertainty estimation within self-evaluation; a neighboring term, confidence elicitation, is described as estimating a model's confidence in its responses. Across these variants, the target of estimation shifts between internal states or attention, predictive posteriors, evaluator judgments, reward-model outputs, and user-task ambiguity.

**Space of measurement.** No measurement instrument or behavioral indicator is linked to it. When papers make it concrete, they usually do so with uncertainty scores derived from predictive entropy, token probabilities, confidence scores or confidence sets, Jensen-Shannon divergence over categorical attention, and ensemble-based estimates, with other papers using variability across sampled answers or internal features such as logits and attention scores. These estimates are then used for routing and rejection, adaptive attention or gating, dynamic fusion, data selection, or confidence-aware decisions, which largely matches the prevailing definitions centered on model confidence or reliability, while narrower papers operationalize evaluation, reward, response, reasoning, or underspecification uncertainty directly.

**Links.** Papers link it to 2 constructs. One paper claims a causal relationship from Semantic consistency to uncertainty quantification, describing decreasing semantic entropy as accompanied by enhanced semantic consistency and reduced response uncertainty. One paper reports that Consistency correlates with uncertainty quantification, noting the practical value of using both metrics in tandem.

## Sources

**[LiFT: Learning to Fine-Tune via Bayesian Parameter Efficient Meta Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/27e5626cabdbb6cd5c56ce4114ff93e4-Paper-Conference.pdf)**
> The model's ability to accurately represent its own uncertainty, where expressed confidence aligns with the actual probability of being correct.

**[Adaptive Transformer Programs: Bridging the Gap Between Performance and Interpretability in Transformers](https://proceedings.iclr.cc/paper_files/paper/2025/file/9d5609613524ecf4f15af0f7b31abca4-Paper-Conference.pdf) (as "Uncertainty estimation")**
> The ability to quantify ambiguity in attention or prediction distributions and use that estimate to adapt model processing.

**[Uncertainty and Influence aware Reward Model Refinement for Reinforcement Learning from Human Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/fd7259e22add6de6df8ff0ccc902a34d-Paper-Conference.pdf) (as "Reward uncertainty")**
> The degree of confidence or ambiguity in a reward model's prediction of human preference, often estimated using ensembles.

**[An Empirical Analysis of Uncertainty in Large Language Model Evaluations](https://proceedings.iclr.cc/paper_files/paper/2025/file/82d3258eb58ceac31744a88005b7ddef-Paper-Conference.pdf) (as "Evaluation uncertainty")**
> The degree of instability or indecision in an LLM evaluator's judgments across inputs, settings, or domains.

**[Efficiently Learning at Test-Time: Active Fine-Tuning of LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/ba942323c447c9bbb9d4b638eadefab9-Paper-Conference.pdf) (as "Response uncertainty")**
> The degree of ambiguity or lack of confidence in the model's predicted probability distribution for a response to a given prompt.

**[Token Signature: Predicting Chain-of-Thought Gains with Token Decoding Feature in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25ci/liu25ci.pdf) (as "Reasoning uncertainty")**
> The degree of uncertainty in the model's reasoning process, especially when token probability trends suggest weaker alignment with successful reasoning.

**[Position: Uncertainty Quantification Needs Reassessment for Large Language Model Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kirchhof25b/kirchhof25b.pdf) (as "Underspecification uncertainty")**
> The latent uncertainty arising when a user's input does not fully specify the task or provide sufficient context, leading to ambiguity in the model's response generation.

## Relationships

### Uncertainty quantification →
- **Truthfulness** (constructs) — *causes*
  > Uncertainty quantification (UQ) is a prominent approach for eliciting truthful answers from large language models (LLMs).
  - [Token-Level Density-Based Uncertainty Quantification Methods for Eliciting Truthfulness of Large Language Models](https://aclanthology.org/2025.naacl-long.113.pdf)
