# Metacognition
**Type:** Construct  
**Referenced in:** 13 papers  
**Also known as:** Introspection, Meta-cognition, Metacognitive abilities, Meta-cognitive reasoning, Metacognitive capabilities, Metacognitive capability, Cognitive reflection, Metacognitive monitoring, Meta-reflection, Intrinsic metacognitive learning  

## State of the Field

**Definition agreement:** Complementary. Most papers define metacognition as a model or agent's higher-order awareness of its own knowledge, uncertainty, reasoning, or competence, often paired with regulation such as abstaining, revising, choosing tools, or adapting strategies. A sizable subset narrows this to specific facets like knowledge-boundary assessment versus reasoning-process monitoring, and a few outliers talk about self-identifying style or role or iterative quality refinement, so the dominant pattern is related but non-identical aspects of the same self-monitoring and self-regulation phenomenon rather than full consensus or a substantial conflict.

**Space of definitions.** Across the papers, the prevailing usage treats metacognition as higher-order self-assessment or self-monitoring: models assess their own knowledge, limitations, competence, uncertainty, or reasoning, and regulate behavior accordingly, such as deciding whether to rely on internal knowledge, use tools, self-verify, abstain, or correct errors. A smaller line of work defines it more narrowly as introspection, the ability to access facts about oneself or internal representations that cannot be derived from training data alone. Other papers extend the term to broader learning processes, including applying prior insights to new tasks, predicting learning progress across goals, recognizing patterns across repeated feedback cycles, and adapting learning plans. Taken together, the main disagreement is over scope: self-knowledge about present capabilities, monitoring of ongoing reasoning and outputs, or regulation of longer-horizon learning.

**Space of facets.** Papers use metacognition as an umbrella that overlaps with introspection, self-awareness, self-knowledge, self-reflection, cognitive reflection, meta-reasoning, metacognitive monitoring, meta-reflection, and intrinsic metacognitive learning. Within that umbrella, some authors break out capability awareness and awareness of knowledge limits as subfacets of judging what the model knows, while others separate a narrow introspection task from broader self-awareness, or distinguish meta-reflection from mere local adaptation across prediction, action, and feedback cycles. The same family of labels is also used for different objects, from recognizing one's own writing style or reasoning boundaries, to judging step-level correctness, to modeling competence transfer and learning progress.

**Space of measurement.** Papers link metacognition to one measurement instrument and two behavioral indicators. The only named instrument is FLASK, described as a skill-specific evaluation, and the linked behavioral indicators are clarifying question generation and self-verification. Beyond that named instrument, papers operationalize the construct through task tests and analyses: calibrated self-predictions of own behavior, tasks asking whether models can gain information about themselves through internal mechanisms, scoring the correctness of reasoning steps from internal states, and observing refusal or abstention when instructions contain contradictions. These operationalizations usually instantiate particular facets of the construct, and they align most directly with the self-assessment and self-monitoring definitions rather than the broadest learning-oriented ones.

**Links.** Papers also relate metacognition to five constructs. One paper reports that it is related to calibration, arguing that calibrated self-predictions with respect to ground-truth behavior would provide evidence of introspection, and another relates it to knowledge boundary awareness through direct access to a model's own representations. Papers claim causal relationships from metacognition to clarifying question generation, self-verification, self-improvement, task generalization, and generalization. The causal language ranges from effective clarifying questions requiring meta-cognitive reasoning to generalized self-improvement requiring intrinsic metacognitive learning.

## Sources

**[Looking Inward: Language Models Can Learn About Themselves by Introspection](https://proceedings.iclr.cc/paper_files/paper/2025/file/0a6059857ae5c82ea9726ee9282a7145-Paper-Conference.pdf) (as "Introspection")**
> The ability of a model to access and report facts about itself that cannot be logically or inductively derived from its training data alone.

**[Adaptive Tool Use in Large Language Models with Meta-Cognition Trigger](https://aclanthology.org/2025.acl-long.655.pdf) (as "Meta-cognition")**
> The latent ability of an LLM to assess and regulate its own knowledge and limitations, enabling informed decisions about whether to rely on internal knowledge or external tools.

**[What Makes a Good Natural Language Prompt?](https://aclanthology.org/2025.acl-long.292.pdf)**
> The model's ability to self-monitor its own cognitive processes, including reasoning and self-verification of its outputs to ensure correctness and reliability.

**[Enhancing Language Model Agents using Diversity of Thoughts](https://proceedings.iclr.cc/paper_files/paper/2025/file/737ab809016b2c79086374f9c8a11831-Paper-Conference.pdf) (as "Metacognitive abilities")**
> The model's capacity to leverage higher-order thinking, such as applying insights from prior experiences to new problems.

**[Active Task Disambiguation with LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e07476b6bd2497e1fbd11b8f0b2de3c-Paper-Conference.pdf) (as "Meta-cognitive reasoning")**
> The ability to reason about one’s own generative uncertainty and identify which questions best distinguish among candidate solutions.

**[LLMs Don't Know Their Own Decision Boundaries: The Unreliability of Self-Generated Counterfactual Explanations](https://aclanthology.org/2025.emnlp-main.1231.pdf) (as "Metacognitive capabilities")**
> Higher-order cognitive abilities related to a model's awareness and understanding of its own knowledge and reasoning processes.

**[Do LLMs Adhere to Label Definitions? Examining Their Receptivity to External Label Definitions](https://aclanthology.org/2025.emnlp-main.1648.pdf) (as "Metacognitive capability")**
> The latent ability of an LLM to detect inconsistencies or contradictions in input instructions and respond with self-monitoring behaviors such as abstention or refusal to answer.

**[ThinkTuning: Instilling Cognitive Reflections without Distillation](https://aclanthology.org/2025.emnlp-main.1592.pdf) (as "Cognitive reflection")**
> The latent tendency to engage in self-reflective thinking, including questioning initial responses and considering alternative reasoning paths.

**[MAGELLAN: Metacognitive predictions of learning progress guide autotelic LLM agents in large goal spaces](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gaven25a/gaven25a.pdf) (as "Metacognitive monitoring")**
> The latent ability of an LLM agent to model its own competence and learning progress across goals by leveraging semantic relationships, enabling self-directed curriculum learning.

**[Reflection-Bench: Evaluating Epistemic Agency in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25cu/li25cu.pdf) (as "Meta-reflection")**
> The higher-order capacity to recognize and anticipate global patterns across multiple cycles of prediction, action, and feedback, enabling regulation beyond local adaptation.

**[Position: Truly Self-Improving Agents Require Intrinsic Metacognitive Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25cw/liu25cw.pdf) (as "Intrinsic metacognitive learning")**
> The latent capacity of an agent to autonomously and adaptively refine its learning strategies through self-assessment, self-planning, and self-evaluation, without reliance on fixed, human-designed mechanisms.

## Relationships

### Metacognition →
- **Clarifying question generation** (behaviors tasks) — *causes*
  > Yet, generating effective clarifying questions requires LLM agents to engage in a form of meta-cognitive reasoning, an ability LLMs may presently lack.
  - [Active Task Disambiguation with LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e07476b6bd2497e1fbd11b8f0b2de3c-Paper-Conference.pdf)
- **Self-improvement** (constructs) — *causes*
  > We argue that sustainable, generalized self-improvement requires agents to develop intrinsic metacognitive learning abilities. (Section 1)
  - [Position: Truly Self-Improving Agents Require Intrinsic Metacognitive Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25cw/liu25cw.pdf)
- **Task generalization** (constructs) — *causes*
  > Our approach integrates self-awareness, monitoring, evaluation, regulation, and meta-reflection, to enhance LLMs’ ability to refine reasoning strategies and generalize across tasks.
  - [Position: LLMs Need a Bayesian Meta-Reasoning Framework for More Robust and Generalizable Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yan25g/yan25g.pdf)

### Associated with
- **Calibration** (constructs)
  > If a model’s self-predictions are calibrated with respect to its ground-truth behavior, this suggests the model takes into account information about itself that was not in its training data. This would provide further evidence of introspection. (Section 3.3)
  - [Looking Inward: Language Models Can Learn About Themselves by Introspection](https://proceedings.iclr.cc/paper_files/paper/2025/file/0a6059857ae5c82ea9726ee9282a7145-Paper-Conference.pdf)
- **Self-awareness** (constructs)
  > M can obtain knowledge of itself via direct access to its representations (introspection). (Section 2.1).
  - [Me, Myself, and AI: The Situational Awareness Dataset (SAD) for LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/7537726385a4a6f94321e3adf8bd827e-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Self-verification** (behaviors tasks)
  > Metacognition: This assesses prompts in explicitly guiding models to reason, self-monitor, and self-verify outputs to meet expectations and enhance reliability (e.b. Wang and Zhao (2024)).
  - [What Makes a Good Natural Language Prompt?](https://aclanthology.org/2025.acl-long.292.pdf)
