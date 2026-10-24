# Persona consistency
**Type:** Construct  
**Referenced in:** 11 papers  
**Also known as:** Behavioral accuracy, Behavioral coherence, Role consistency, Character consistency  

## State of the Field

**Definition agreement:** Consensus. All papers define persona consistency as maintaining a stable persona over dialogue, with behavior, language, or traits staying aligned with the character's stated identity, personality, or background. The differences are only in emphasis, such as single dialogue versus across interactions or actions and language versus traits and role, so they are studying the same core property.

**Space of definitions.** Most definitions treat persona consistency as stable maintenance of a persona, role, or character across dialogue or interaction: persona traits remain consistent during generation, and behavioral patterns stay aligned with a character's identity and background. A smaller framing focuses on the behavior itself, defining the construct through whether actions and linguistic patterns match defined traits and whether actions remain logically consistent with previous behavior and the current context. The main difference across definitions is therefore trait or role stability versus action and context coherence, and some authors cast it as a latent ability of the model while others describe it through properties of generated dialogue or responses.

**Space of facets.** Papers use several nearby labels for overlapping ideas, including persona consistency, role consistency, and character consistency. One paper further divides the notion into Behavioral Accuracy, alignment of behaviors and linguistic patterns with traits, and Behavioral Coherence, logical consistency with previous behaviors and current context. Another paper explicitly presents character consistency as a latent trait, while a related link places persona consistency alongside a broader Consistency notion centered on logical continuity in behavioral patterns across interactions.

**Space of measurement.** No measurement instrument and no behavioral indicator are linked to this construct. Where papers make it operational, they do so through direct evaluation criteria: whether behaviors and language align with traits, whether actions stay consistent with prior behavior and current context, whether persona traits remain stable through dialogue generation, and whether responses maintain character consistency rather than showing "random behavioral changes" (Video2Roleplay: A Multimodal Dataset and Framework for Video-Guided Role-playing Agents). These operational descriptions closely mirror the definitions, but no named benchmark, human evaluation protocol, LLM-as-a-judge setup, or probe is linked to the construct.

**Links.** Only a few links are explicit. One paper relates persona consistency to Consistency, described there as maintaining logical continuity in a character's behavioral patterns across interactions. Another paper claims a causal relationship from situational awareness to persona consistency and from self-awareness to persona consistency, stating that jointly modeling external situational awareness and internal self-awareness yields responses with improved character consistency and contextual alignment.

## Sources

**[CharacterBox: Evaluating the Role-Playing Capabilities of LLMs in Text-Based Virtual Worlds](https://aclanthology.org/2025.naacl-long.323.pdf) (as "Behavioral accuracy")**
> The consistency of a character's actions and linguistic patterns with their defined personality and traits.

**[CharacterBox: Evaluating the Role-Playing Capabilities of LLMs in Text-Based Virtual Worlds](https://aclanthology.org/2025.naacl-long.323.pdf) (as "Behavioral coherence")**
> The logical consistency of a character's actions in relation to their previous behaviors and the current context of the story.

**[From Personas to Talks: Revisiting the Impact of Personas on LLM-Synthesized Emotional Support Conversations](https://aclanthology.org/2025.emnlp-main.277.pdf)**
> The degree to which persona traits remain stable after being used to generate a dialogue.

**[Look Beyond Feeling: Unveiling Latent Needs from Implicit Expressions for Proactive Emotional Support](https://aclanthology.org/2025.emnlp-main.1094.pdf) (as "Role consistency")**
> The ability to maintain a consistent persona or role throughout a simulated dialogue interaction.

**[Video2Roleplay: A Multimodal Dataset and Framework for Video-Guided Role-playing Agents](https://aclanthology.org/2025.emnlp-main.1209.pdf) (as "Character consistency")**
> The latent trait reflecting the model's ability to maintain a stable persona and behavioral patterns across interactions, consistent with the character's identity and background.

## Relationships

### → Persona consistency
- **Situational awareness** (constructs) — *causes*
  > By jointly modeling external situational awareness and internal self-awareness, CogDual generates responses with improved character consistency and contextual alignment.
  - [CogDual: Enhancing Dual Cognition of LLMs via Reinforcement Learning with Implicit Rule-Based Rewards](https://aclanthology.org/2025.emnlp-main.1389.pdf)
- **Self-awareness** (constructs) — *causes*
  > By jointly modeling external situational awareness and internal self-awareness, CogDual generates responses with improved character consistency and contextual alignment.
  - [CogDual: Enhancing Dual Cognition of LLMs via Reinforcement Learning with Implicit Rule-Based Rewards](https://aclanthology.org/2025.emnlp-main.1389.pdf)

### Associated with
- **Consistency** (constructs)
  > Consistency emphasizes the importance of maintaining logical continuity in a character’s behavioral patterns across all interactions... ‚ Behavioral Coherence (BC): Evaluates the logical consistency of character’s actions in relation to previous behaviors and current context.
  - [CharacterBox: Evaluating the Role-Playing Capabilities of LLMs in Text-Based Virtual Worlds](https://aclanthology.org/2025.naacl-long.323.pdf)
