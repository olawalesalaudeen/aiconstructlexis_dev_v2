# Action prediction
**Type:** Behavior  
**Referenced in:** 27 papers  
**Also known as:** Next-action prediction, Action sequence prediction, Chess move selection  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage is predicting the next appropriate action in a sequence, most often by identifying a target element and the operation to perform, such as click, type, or select, to accomplish a larger goal on a webpage or UI. A smaller line of work frames it as next-user-action prediction from a screen plus previous action history, or as outputting the optimal action for a current state from contextual transitions or offline RL trajectories. Success is usually described as matching the ground-truth next action, though some papers require the full predicted action sequence to align with human trajectories, and one paper treats the behavior as choosing a legal chess move, including a checkmating move.

**Variants.** Papers use several names for closely related variants, with Action prediction and Next-action prediction the most common labels. The dominant settings are web and UI interaction, where the model predicts interactions like clicking, typing, selecting, or dragging from the current screen or webpage and prior actions. Other variants include Action sequence prediction, where the whole sequence must align with a human trajectory, state-conditioned action prediction from past transitions or return-to-go trajectories, text-based navigation logs checked against a test-time ground truth, and Chess move selection.

**Space of elicitation and scores.** Papers link it to 1 measurement instrument, Mind2Web. In that usage, Mind2Web is described as providing action prediction tasks that measure generalization across tasks, websites, and domains, and as a real-world setting for action prediction. No other measurement instrument is linked to it.

**What it is taken as evidence of.** Among linked constructs, papers connect it to 3 constructs, but only one is treated as something the behavior measures: Moral reasoning is measured by action prediction in one formulation. The other construct links use different relation types, with papers claiming causal relationships from GUI understanding to Action prediction and from Spatiotemporal reasoning to Action prediction. Accordingly, the linked construct uses are mixed rather than uniform.

## Sources

**[A Real-World WebAgent with Planning, Long Context Understanding, and Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/e91bf7dfba0477554994c6d64833e9d8-Paper-Conference.pdf)**
> The task of determining and generating the next appropriate action (e.g., which element to click, what text to type) in a sequence to accomplish a larger goal.

**[Ferret-UI 2: Mastering Universal User Interface Understanding Across Platforms](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7baab9bb701848e75f3cc119bdf57bc-Paper-Conference.pdf) (as "Next-action prediction")**
> The task of predicting the next user action on a UI, given the screen and a history of previous actions.

**[AdaptAgent: Adapting Multimodal Web Agents with Few-Shot Learning from Human Demonstrations](https://aclanthology.org/2025.acl-long.1008.pdf) (as "Action sequence prediction")**
> Generating a correct sequence of actions (element selection and operation) that aligns with the ground-truth human trajectory to achieve task success.

**[Reflective Multi-Agent Collaboration based on Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fa54b0edce5eef0bb07654e8ee800cb4-Paper-Conference.pdf) (as "Chess move selection")**
> Choosing a legal chess move that best advances the position, including identifying a checkmating move.

## Relationships

### Action prediction →
- **Mind2Web** (measurements) — *measured_by*
  > It provides action prediction tasks that measure the generalization of LLMs across the tasks, websites, and their domains (e.g. travel, shopping) (Section 4.2).
  - [A Real-World WebAgent with Planning, Long Context Understanding, and Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/e91bf7dfba0477554994c6d64833e9d8-Paper-Conference.pdf)

### → Action prediction
- **Spatiotemporal reasoning** (constructs) — *causes*
  > we introduce visual trace prompting, a simple yet effective approach to facilitate VLA models’ spatial-temporal awareness for action prediction by encoding state-action trajectories visually. (ABSTRACT)
  - [TraceVLA: Visual Trace Prompting Enhances Spatial-Temporal Awareness for Generalist Robotic Policies](https://proceedings.iclr.cc/paper_files/paper/2025/file/8667f264f88c7938a73a53ab01eb1327-Paper-Conference.pdf)
- **GUI understanding** (constructs) — *causes*
  > Action Prediction builds on these skills, testing whether agents can execute interactions like clicking, dragging, and typing based on their UI understanding
  - [UI-Vision: A Desktop-centric GUI Benchmark for Visual Perception and Interaction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/nayak25a/nayak25a.pdf)

### Associated with
- **Hallucination** (behaviors tasks)
  > Our benchmark encompasses six novel hallucination scenarios ... each covering ﬁve different tasks, i.e. object recognition, counting, attribute recognition, spatial reasoning, and action prediction.
  - [MMDT: Decoding the Trustworthiness and Safety of Multimodal Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0bcfb525c8f8f07ae10a93d0b2a40e00-Paper-Conference.pdf)
- **Moral reasoning** (constructs)
  > While numerous tasks can be accomplished using UNIMORAL, we focus on four core concepts of moral reasoning: [I] Action Prediction (AP)... (Section 4)
  - [Are Rules Meant to be Broken? Understanding Multilingual Moral Reasoning as a Computational Pipeline with UniMoral](https://aclanthology.org/2025.acl-long.294.pdf)
