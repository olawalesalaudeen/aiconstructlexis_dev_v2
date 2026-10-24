# Self-awareness
**Type:** Construct  
**Referenced in:** 12 papers  
**Also known as:** Self-assessment, Writing style knowledge, Competence boundary awareness  

## State of the Field

**Definition agreement:** Conflicting. Most papers define self-awareness as metacognitive self-assessment and regulation of a model's own knowledge, uncertainty, limitations, or reasoning process. But several others use the term for different phenomena, including self-identity or authorship of its own text, access to hidden facts about itself, or the model's objective capability boundary, so papers using those definitions would not be studying the same thing.

**Space of definitions.** Across the surveyed work, the prevailing usage treats self-awareness as a model's capacity to assess its own knowledge, limits, or outputs: papers describe it as recognizing knowledge gaps and task solvability, evaluating strengths and weaknesses, judging the correctness of its own generations, or declining to answer when confidence is low. A smaller but recurring framing instead centers on knowledge about the model itself, such as understanding its own identity, state, existence, role profile, or writing style. The main disagreement is therefore between self-knowledge about who or what the model is and self-monitoring of what it can do, whether a task is feasible, or whether its reasoning is correct.

**Space of facets.** Papers partition or specialize the construct in several ways. One role-playing line breaks it into role style and role knowledge, capability-focused work describes capability-aware and mission-aware solvability assessment, and collaborative-agent work narrows it to competence boundary awareness, namely determining feasible actions, recognizing limitations, and identifying when help is needed. Introspection is treated in one paper as a narrower ability to access facts about oneself, with self-awareness discussed as a related or broader task, while other papers use nearby labels such as self-assessment or writing style knowledge for parts of the same terrain.

**Space of measurement.** No measurement instrument is linked to self-awareness. Papers link it to 3 behavioral indicators, most often Hallucination, then Self-correction and Self-verification, but these appear as causal or related claims rather than as direct instruments. When papers make the construct concrete, they do so through tasks such as self-recognition of one's own writing, role style and role knowledge checks, judging task difficulty or solvability and declining complex queries, and detecting and rectifying self-generated errors.

**Links.** In recorded relationships, papers claim causal relationships from self-awareness to Self-improvement and Persona consistency, and one paper records both a causal relationship from self-awareness to Hallucination, phrased as helping mitigate hallucinations, and a causal relationship from Hallucination to self-awareness. Other papers relate self-awareness to Honesty and Knowledge boundary awareness, and also relate it to correction and verification of the model's own generation. No correlational link is recorded.

## Sources

**[Looking Inward: Language Models Can Learn About Themselves by Introspection](https://proceedings.iclr.cc/paper_files/paper/2025/file/0a6059857ae5c82ea9726ee9282a7145-Paper-Conference.pdf)**
> A model's capacity to understand and reason about its own identity, state, or existence, tested as a potential generalization of introspection.

**[Position: Truly Self-Improving Agents Require Intrinsic Metacognitive Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25cw/liu25cw.pdf) (as "Self-assessment")**
> The ability of an agent to accurately evaluate its own knowledge, skills, strengths, and weaknesses.

**[Inspection and Control of Self-Generated-Text Recognition Ability in Llama3-8b-Instruct](https://proceedings.iclr.cc/paper_files/paper/2025/file/d560f94c582033e6d8eb0c97cdd4f721-Paper-Conference.pdf) (as "Writing style knowledge")**
> The latent knowledge of characteristics of the model’s own generated writing that supports distinguishing it from other text.

**[Collab-Overcooked: Benchmarking and Evaluating Large Language Models as Collaborative Agents](https://aclanthology.org/2025.emnlp-main.249.pdf) (as "Competence boundary awareness")**
> The ability of an agent to analyze task flows and environmental states to determine its own feasible actions, recognize its limitations, and identify when help is needed.

## Relationships

### Self-awareness →
- **Self-improvement** (constructs) — *causes*
  > By introspecting these elements, the agent gains an understanding of its own operational state and can adapt accordingly.
  - [Gödel Agent: A Self-Referential Agent Framework for Recursively Self-Improvement](https://aclanthology.org/2025.acl-long.1354.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > This capability [self-awareness] would help mitigate hallucinations, discourage attempts at solving unsolvable problems, and prevent engagement in unethical tasks, ensuring more responsible and reliable behavior.
  - [Position: LLMs Need a Bayesian Meta-Reasoning Framework for More Robust and Generalizable Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yan25g/yan25g.pdf)
- **Persona consistency** (constructs) — *causes*
  > By jointly modeling external situational awareness and internal self-awareness, CogDual generates responses with improved character consistency and contextual alignment.
  - [CogDual: Enhancing Dual Cognition of LLMs via Reinforcement Learning with Implicit Rule-Based Rewards](https://aclanthology.org/2025.emnlp-main.1389.pdf)

### Associated with
- **Honesty** (constructs)
  > Crucially, the AI should be honest about its capabilities and knowledge levels. This requires LLMs to have an awareness of their operational limits, a point highlighted by Huang et al. [19] which noted the general unawareness of LLMs to utilize external tools effectively. (Section 2)
  - [HonestLLM: Toward an Honest and Helpful Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/0d99a8c048befb6dd6e17d7684adacac-Paper-Conference.pdf)
- **Self-correction** (behaviors tasks)
  > Self-awareness, i.e., the ability to assess and correct one’s generation, is a fundamental aspect of human intelligence...
  - [ReVISE: Learning to Refine at Test-Time via Intrinsic Self-Verification](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lee25ab/lee25ab.pdf)
- **Knowledge boundary awareness** (constructs)
  > Our self-awareness module (Fig. 3) comprises two core components...: (1) assessing the task’s solvability p(ΘI) and p(ΘE), based on the model’s technic and cognitive capabilities, where capability-aware solvability and mission-aware solvability are considered simultaneously
  - [Position: LLMs Need a Bayesian Meta-Reasoning Framework for More Robust and Generalizable Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yan25g/yan25g.pdf)
- **Self-verification** (behaviors tasks)
  > “Self-awareness, i.e., the ability to assess and correct one’s generation”
  - [ReVISE: Learning to Refine at Test-Time via Intrinsic Self-Verification](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lee25ab/lee25ab.pdf)
- **Situational awareness** (constructs)
  > A model M is situationally aware to the extent that (1) M knows which entity it is and knows facts about itself (self-knowledge), (2) M can make deductions/inferences about its situation (inferences), and (3) M acts on the basis of this knowledge (actions). (Section 2.1).
  - [Me, Myself, and AI: The Situational Awareness Dataset (SAD) for LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/7537726385a4a6f94321e3adf8bd827e-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Metacognition** (constructs)
  > M can obtain knowledge of itself via direct access to its representations (introspection). (Section 2.1).
  - [Me, Myself, and AI: The Situational Awareness Dataset (SAD) for LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/7537726385a4a6f94321e3adf8bd827e-Paper-Datasets_and_Benchmarks_Track.pdf)
