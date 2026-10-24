# Situational awareness
**Type:** Construct  
**Referenced in:** 9 papers  

## State of the Field

**Definition agreement:** Consensus. Most papers define situational awareness as a model's ability to perceive or know its own state and surrounding context and use that information to guide behavior. A few papers narrow this to specific settings such as dialogue scenes, evaluation or deployment, or step-by-step reasoning, but these are setting-specific instantiations of the same core capacity rather than different phenomena.

**Space of definitions.** Across papers, the prevailing framing treats situational awareness as a model property centered on knowing itself and its circumstances, then using that knowledge in behavior: definitions commonly mention self-knowledge, inference about the situation, and acting on that knowledge. Closely related formulations describe perceiving and understanding operational context, or using knowledge about the model itself, its training context, and human supervisors to guide behavior, including recognizing when it is being evaluated or deployed. A smaller line of work narrows the term to dialogue scenes, defining it as perceiving environmental cues and other characters' behaviors, emotions, and intentions, while another uses it for context-sensitive weighting of uncertainty across reasoning steps so the agent stays aligned with the correct reasoning trajectory.

**Space of facets.** Papers most explicitly break situational awareness into self-knowledge, situational inference, and action on the basis of that knowledge. One dialogue-focused formulation instead represents it as "SA = <EP, BA, EA, IA>" formed through hierarchical perception and interpretation, without further elaboration here of those components. In how the construct is positioned relative to nearby terms, situational inference appears as one constituent, self-recognition is described in one paper as an instance of situational awareness, and knowledge boundary awareness is also related to it.

**Space of measurement.** Papers link situational awareness to no measurement instruments and no behavioral indicators. Some descriptions nevertheless invoke behavior directly: one definition includes acting on this knowledge, and another states that situational awareness can be behaviorally tested. No benchmark, human evaluation, LLM-as-a-judge method, or probe is linked to it.

**Links.** Papers connect situational awareness to four constructs. It is related to situational inference, knowledge boundary awareness, and self-recognition, with self-recognition described in one paper as an instance of situational awareness. A separate paper claims a causal relationship from situational awareness to persona consistency, stating that jointly modeling external situational awareness and internal self-awareness improves character consistency and contextual alignment.

## Sources

**[Me, Myself, and AI: The Situational Awareness Dataset (SAD) for LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/7537726385a4a6f94321e3adf8bd827e-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The model's knowledge of itself and its circumstances, which includes self-knowledge, the ability to make inferences about its situation, and the capacity to act on this knowledge.

## Relationships

### Situational awareness →
- **Persona consistency** (constructs) — *causes*
  > By jointly modeling external situational awareness and internal self-awareness, CogDual generates responses with improved character consistency and contextual alignment.
  - [CogDual: Enhancing Dual Cognition of LLMs via Reinforcement Learning with Implicit Rule-Based Rewards](https://aclanthology.org/2025.emnlp-main.1389.pdf)

### Associated with
- **Situational inference** (constructs)
  > “Our definition builds on recent work ... (2) M can make deductions/inferences about its situation (inferences)”
  - [Me, Myself, and AI: The Situational Awareness Dataset (SAD) for LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/7537726385a4a6f94321e3adf8bd827e-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Self-recognition** (constructs)
  > Self-recognition can be seen as an instance of situational awareness, which has long been noted as a potential point of risk for AI (Cotra, 2021).
  - [Inspection and Control of Self-Generated-Text Recognition Ability in Llama3-8b-Instruct](https://proceedings.iclr.cc/paper_files/paper/2025/file/d560f94c582033e6d8eb0c97cdd4f721-Paper-Conference.pdf)
- **Self-awareness** (constructs)
  > A model M is situationally aware to the extent that (1) M knows which entity it is and knows facts about itself (self-knowledge), (2) M can make deductions/inferences about its situation (inferences), and (3) M acts on the basis of this knowledge (actions). (Section 2.1).
  - [Me, Myself, and AI: The Situational Awareness Dataset (SAD) for LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/7537726385a4a6f94321e3adf8bd827e-Paper-Datasets_and_Benchmarks_Track.pdf)
