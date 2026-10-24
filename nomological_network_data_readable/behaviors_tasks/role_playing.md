# Role-playing
**Type:** Behavior  
**Referenced in:** 29 papers  
**Also known as:** Human-role dialogue, Inter-role dialogue, Commentary interaction, Role playing, Perspective simulation, Persona adoption, Character portrayal, Survey response generation, Patient response simulation, Classroom simulation, Student simulation, AI persona, Persona-based role-playing, Character simulation, Role-playing dialogue generation  

## State of the Field

**Space of definitions.** Across the surveyed work, the dominant framing is adopting a specified persona, character, or role and producing responses that remain consistent with it in conversation. Papers commonly treat success as fidelity to the target persona, or as outputs that match a character's profile, speaking style, communication style, voice, tone, or goals across turns. A smaller line of work broadens the behavior to perspective or respondent simulation, such as generating text from a lawmaker or news outlet's viewpoint, answering survey items as a human respondent, or simulating patient or student behavior.

**Variants.** Variants differ by interaction structure, modality, and domain. One recurring family uses image-centered multimodal role-play, including commentary interaction, human-role dialogue, and inter-role dialogue; other papers study persona adoption through prompt steering, profile- and scenario-conditioned multi-turn dialogue, and sequential fictional characters within story-like prompts. Domain-specific versions cast the model as a survey respondent, patient, learner, social scientist persona, or dramatic character, and one paper claims a causal relationship from Role-playing to Jailbreaking in a sequential-character setting.

**Space of elicitation and scores.** Only one linked measurement instrument is reported, WildBench, which measures role-playing by including it as one of the task categories users expect LLMs to perform. Outside that benchmark link, papers often describe evaluation in terms of persona consistency or fidelity, and one study says it evaluates role-playing performance from eight aspects, but no other instrument is linked directly to this behavior.

**What it is taken as evidence of.** Papers make little explicit commitment about what construct this behavior reflects. The only linked construct is Controllability, and one paper reports it as related to role-playing, defining prompt steerability of persona as the degree to which a model can be made to adopt different personas by prompting alone. There is no broader reported agreement beyond that single link.

## Sources

**[How to Catch an AI Liar: Lie Detection in Black-Box LLMs by Asking Unrelated Questions](https://proceedings.iclr.cc/paper_files/paper/2024/file/efe79ae16496a0f5b57287873de072d1-Paper-Conference.pdf)**
> The behavior of adopting a specified persona or character in a conversational interaction.

**[WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf) (as "Role playing")**
> Adopting a specific persona or character in conversation with the user.

**[MMRole: A Comprehensive Framework for Developing and Evaluating Multimodal Role-Playing Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/a5c7206fd66e8314bb21a04492359353-Paper-Conference.pdf) (as "Commentary interaction")**
> A single-turn dialogue task where an agent, acting as a character, provides comments or reflections about a given image without further interaction.

**[MMRole: A Comprehensive Framework for Developing and Evaluating Multimodal Role-Playing Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/a5c7206fd66e8314bb21a04492359353-Paper-Conference.pdf) (as "Human-role dialogue")**
> Multi-turn dialogues centered around an image between a human user without a specific identity and a character.

**[MMRole: A Comprehensive Framework for Developing and Evaluating Multimodal Role-Playing Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/a5c7206fd66e8314bb21a04492359353-Paper-Conference.pdf) (as "Inter-role dialogue")**
> A multi-turn dialogue task where an agent, acting as one character, converses with another character about a given image.

**[Linear Representations of Political Perspective Emerge in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/1557cc3e1a67f985dbdb162db9963dd0-Paper-Conference.pdf) (as "Perspective simulation")**
> The observable action of generating text mimicking the viewpoint of specific entities like lawmakers or news outlets.

**[A transfer learning framework for weak to strong generalization](https://proceedings.iclr.cc/paper_files/paper/2025/file/fa47ffc7b2033fd32d8b8734686f6ff4-Paper-Conference.pdf) (as "Persona adoption")**
> The observable task of generating text that consistently embodies a specified character or style, such as a pirate persona.

**[CoSER: Coordinating LLM-Based Persona Simulation of Established Roles](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25dk/wang25dk.pdf) (as "Character portrayal")**
> The specific act of a language model generating utterances, actions, and thoughts for a single assigned character within a conversation.

**[SocioBench: Modeling Human Behavior in Sociological Surveys with Large Language Models](https://aclanthology.org/2025.emnlp-main.1335.pdf) (as "Survey response generation")**
> Producing answer options to closed-ended sociological survey questions as if the model were a human respondent.

**[DDO: Dual-Decision Optimization for LLM-Based Medical Consultation via Multi-Agent Collaboration](https://aclanthology.org/2025.emnlp-main.1340.pdf) (as "Patient response simulation")**
> The observable behavior of simulating patient responses to symptom inquiries, either from recorded data or inferred based on disease-symptom associations when information is missing.

**[Position: LLMs Can be Good Tutors in English Education](https://aclanthology.org/2025.emnlp-main.885.pdf) (as "Student simulation")**
> Producing synthetic learner behavior that imitates students with different competency levels and learning trajectories.

**[Position: LLMs Can be Good Tutors in English Education](https://aclanthology.org/2025.emnlp-main.885.pdf) (as "Classroom simulation")**
> Using LLM agents to simulate virtual students and tutors in interactive learning environments for pedagogical research and system training.

**[Personalized Steering of Large Language Models: Versatile Steering Vectors Through Bi-directional Preference Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/58cbe393b4254da8966780a40d023c0b-Paper-Conference.pdf) (as "AI persona")**
> A consistent style of response, character, or set of goals that an LLM adopts across different interactions.

**[SCALE: Towards Collaborative Content Analysis in Social Science with Large Language Model Agents and Human Intervention](https://aclanthology.org/2025.acl-long.416.pdf) (as "Persona-based role-playing")**
> LLM agents adopting distinct social scientist personas (with defined demographics, values, beliefs) to simulate diverse human perspectives during coding and discussion.

**[Towards Enhanced Immersion and Agency for LLM-based Interactive Drama](https://aclanthology.org/2025.acl-long.546.pdf) (as "Character simulation")**
> The observable behavior of LLM agents in role-playing dramatic characters, responding to player input while maintaining narrative coherence and character-specific motivations.

**[Crab: A Novel Configurable Role-Playing LLM with Assessing Benchmark](https://aclanthology.org/2025.acl-long.731.pdf) (as "Role-playing dialogue generation")**
> Producing multi-turn conversational responses that reflect a specified character's profile, scenario, and speaking style.

## Relationships

### Role-playing →
- **WildBench** (measurements) — *measured_by*
  > This dataset is particularly suited for conversion into an evaluation benchmark because it contains a diverse array of tasks that users expect LLMs to perform, such as writing assistance, coding, mathematics, data analysis, role playing, and planning. (Section 2.1)
  - [WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf)
- **Jailbreaking** (behaviors tasks) — *causes*
  > Inspired by previous attempts that exploit role-playing to bypass the safety guardrails of LLMs (DAN, 2023; Li et al., 2024) and research on the distraction phenomenon in LLMs (Shi et al., 2023; Xiao et al., 2024), we apply sequential jailbreak characters within a single user query and ask the target LLMs to act as these characters sequentially to provide step-by-step instructions. (Section 2.1)
  - [SeqAR: Jailbreak LLMs with Sequential Auto-Generated Characters](https://aclanthology.org/2025.naacl-long.42.pdf)

### Associated with
- **Controllability** (constructs)
  > Prompt steerability of a model’s persona describes the degree to which a model can be made to adopt different personas by prompting alone. (Section 3)
  - [Evaluating the Prompt Steerability of Large Language Models](https://aclanthology.org/2025.naacl-long.400.pdf)
