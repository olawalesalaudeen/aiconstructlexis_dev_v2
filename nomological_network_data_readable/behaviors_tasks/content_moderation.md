# Content moderation
**Type:** Behavior  
**Referenced in:** 5 papers  

## State of the Field

**Space of definitions.** Across the papers, content moderation is treated as an observable policy-enforcement behavior around model use: filtering, blocking, or altering user or model-generated content to comply with policies, either before or after content is generated. A narrower formulation in AEGIS2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails treats it as classifying a prompt or response as safe or unsafe under a defined policy. Position: Generative AI Regulation Can Learn from Social Media Regulation also notes that generative AI "tends to use invisible content moderation more than social media" and that models are fine-tuned to moderate content in certain ways, such as avoiding dangerous information.

**Variants.** Variants mainly differ by the text being judged and by evaluation setting. Papers describe moderation over both user prompts and model responses, and one paper studies it in zero-shot, cross-cultural evaluation across eight cultures, covering seven moderation tasks that include hate speech, offensive language, spam speech, abusive speech, and threat speech, plus two other content types. Content moderation is also related to hate speech detection and harmful content detection.

**Space of elicitation and scores.** Papers measure this behavior with four instruments: OpenAI Moderation API, OpenAI Moderation dataset, WildGuardMix, and XSTest. The recorded uses include tagging conversations with the OpenAI Moderation API and reporting average harmfulness F1 scores across XSTest and the OpenAI Moderation Dataset. Taken together, the linked instruments include an API, a dataset, and two other named instruments.

**What it is taken as evidence of.** The papers do not directly frame content moderation as evidence of a construct. Instead, the only linked construct is Instruction following ability, and one paper claims a causal relationship from Instruction following ability to Content moderation, citing better performance on out-of-domain prompt classification tasks such as OPENAI MOD when a task-focused component is integrated.

## Sources

**[Position: Generative AI Regulation Can Learn from Social Media Regulation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/appel25a/appel25a.pdf)**
> The observable act of filtering, blocking, or altering user or model-generated content to comply with policies, which may occur before or after content is generated.

## Relationships

### Content moderation →
- **OpenAI Moderation API** (measurements) — *measured_by*
  > "We utilize the OpenAI moderation API4 (Markov et al., 2023) to tag all conversations."
  - [LMSYS-Chat-1M: A Large-Scale Real-World LLM Conversation Dataset](https://proceedings.iclr.cc/paper_files/paper/2024/file/5f9bfdfe3685e4ccdbc0e7fb29cccf2a-Paper-Conference.pdf)
- **WildGuardMix** (measurements) — *measured_by*
  > Additionally, it performs on par with WILDGUARD (Han et al., 2024) in terms of average harmfulness F1 scores across WILDGUARDTEST (Han et al., 2024), XSTest (Röttger et al., 2023; Han et al., 2024), and the OpenAI Moderation Dataset (Markov et al., 2023). (Section 5)
  - [AEGIS2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails](https://aclanthology.org/2025.naacl-long.306.pdf)
- **XSTest** (measurements) — *measured_by*
  > Additionally, it performs on par with WILDGUARD (Han et al., 2024) in terms of average harmfulness F1 scores across WILDGUARDTEST (Han et al., 2024), XSTest (Röttger et al., 2023; Han et al., 2024), and the OpenAI Moderation Dataset (Markov et al., 2023). (Section 5)
  - [AEGIS2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails](https://aclanthology.org/2025.naacl-long.306.pdf)
- **OpenAI Moderation dataset** (measurements) — *measured_by*
  > Additionally, it performs on par with WILDGUARD (Han et al., 2024) in terms of average harmfulness F1 scores across WILDGUARDTEST (Han et al., 2024), XSTest (Röttger et al., 2023; Han et al., 2024), and the OpenAI Moderation Dataset (Markov et al., 2023). (Section 5)
  - [AEGIS2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails](https://aclanthology.org/2025.naacl-long.306.pdf)

### Associated with
- **Hate speech detection** (behaviors tasks)
  > We evaluate on 7 content moderation tasks for 8 different cultures to detect the following content: hate speech, offensive language, spam speech, abusive speech, bias speech, threat speech, and stance of speech in zero-shot evaluation (Section 4.1)
  - [CulturePark: Boosting Cross-cultural Understanding in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/77f089cd16dbc36ddd1caeb18446fbdd-Paper-Conference.pdf)
- **Harmful content detection** (behaviors tasks)
  > We evaluate on 7 content moderation tasks for 8 different cultures to detect the following content: hate speech, offensive language, spam speech, abusive speech, bias speech, threat speech, and stance of speech in zero-shot evaluation (Section 4.1)
  - [CulturePark: Boosting Cross-cultural Understanding in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/77f089cd16dbc36ddd1caeb18446fbdd-Paper-Conference.pdf)
