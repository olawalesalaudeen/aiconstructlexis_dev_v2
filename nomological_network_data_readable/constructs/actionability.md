# Actionability
**Type:** Construct  
**Referenced in:** 8 papers  
**Also known as:** Actionable insights  

## State of the Field

**Definition agreement:** Consensus. Most papers define actionability as guidance or feedback that is concrete, specific, clear, and practical enough that the recipient can tell what to do next and act on it. A few papers apply this same idea in different settings, such as tutor feedback, reviews, personal advice, or even harmful model responses, but they still describe the same core property of an output being directly usable for action.

**Space of definitions.** Across papers, the prevailing usage describes actionability as how clearly an output tells the recipient what to do next: feedback, advice, suggested strategies, or review comments are actionable when they are concrete, specific, practical, and not vague or ambiguous. Most formulations stay at the level of the output and whether a user, student, patient, or author can act on it. A smaller line of work instead treats actionability as a latent trait of a model to produce clear steps, action verbs, and objects that help a user carry out harmful actions, so the main variation is between general next-step guidance and harmful action-enabling guidance, and between an output property and a model trait.

**Space of facets.** Papers most often use actionability as an evaluation axis, criterion, or value rather than breaking it into named subtypes. The same label is applied across tutoring, advice seeking, health guidance, and peer review, and one paper uses the near-synonym "actionable insights" for specific, constructive suggestions for improving a paper. In some formulations it is grouped with broader value sets such as empathy and creativity, while in the harmful-response formulation it is paired with informativeness as an attribute discussed in inducing harm.

**Space of measurement.** Operationally, papers link the construct to 2 measurement instruments and no behavioral indicators. The recorded instruments are Human evaluation and LLM-as-a-judge: one human-evaluation setup asks participants on a 5-point scale whether a response provides clear steps or instructions, and one LLM-as-a-judge criterion checks actionability in terms of providing concrete advice. Beyond these named instruments, papers operationalize the construct with prompts such as whether it is clear what the student should do next, whether strategies are practical, specific, contextually relevant, and clear enough to act upon, and whether review comments explicitly state concrete improvement actions; these measures mostly match the dominant definition, except the harmful-use formulation narrows it to clear steps, action verbs, and objects for carrying out harmful actions.

**Links.** Recorded links connect actionability to 2 constructs. One paper reports it is related to Helpfulness, placing it among prioritized values, and one paper claims a causal relationship from Actionability to Harmlessness, with the cited evidence describing actionability, together with informativeness, as an attribute in inducing harm when a jailbroken response is followed by people without specialized knowledge. No correlational links are reported.

## Sources

**[Lived Experience Not Found: LLMs Struggle to Align with Experts on Addressing Adverse Drug Reactions from Psychiatric Medication Use](https://aclanthology.org/2025.naacl-long.553.pdf)**
> The extent to which a tutor's feedback clearly indicates what the student should do next, avoiding vagueness or ambiguity that could halt progress.

**[ReviewRL: Towards Automated Scientific Review with RL](https://aclanthology.org/2025.emnlp-main.857.pdf) (as "Actionable insights")**
> The extent to which a review offers specific, constructive, and practical suggestions for improving the paper.

## Relationships

### Actionability →
- **Harmlessness** (constructs) — *causes*
  > Through human evaluation, we determine actionability and informativeness as key attributes in inducing harm when the jailbroken response is followed by individuals without specialized knowledge. (Section 1)
  - [Speak Easy: Eliciting Harmful Jailbreaks from LLMs with Simple Interactions](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chan25b/chan25b.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > After each conversation, participants rate the model’s responses on a 5-point scale ... across five criteria ...: (3) Actionability: Response provides clear steps or instructions. (Section 3.2.3)
  - [SCRIBE: Structured Chain Reasoning for Interactive Behaviour Explanations using Tool Calling](https://aclanthology.org/2025.emnlp-main.1490.pdf)
