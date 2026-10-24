# Personalized response generation
**Type:** Behavior  
**Referenced in:** 9 papers  
**Also known as:** Speaker-specific response generation, Personalized generation, Personalized review generation, Personalized text generation  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage is generating responses tailored to a particular user rather than generic text. Most definitions describe success as producing replies or utterances that reflect the user’s preferred style, content, tone, opinions, or other personal information, often for unseen contexts or questions; papers differ in whether those preferences are inferred from questionnaire choices, past interactions, dialogue history, background information, schedules, or user images. A smaller line of work frames the target as outputs that match inferred preferences across multiple dimensions such as helpfulness, harmlessness, or humor.

**Variants.** Variants mostly differ by setting and by the signals used to personalize the output. Papers study conversational replies, system utterances, open-ended personalized text generation, and a narrower review-generation setting, while a smaller subset focuses on speaker-specific responses in multi-party dialogue or task-oriented dialogue where utterances should align with a user image and attributes such as age, emotion, or formality. The naming also varies, including speaker-specific response generation, personalized generation, personalized text generation, and personalized review generation.

**Space of elicitation and scores.** Papers link this behavior to 3 measurement instruments. The most common is LLM-as-a-judge, used for rubric-style personalization scores and pairwise win rates, and one study also reports whether responses win favor with GPT and human judges. The other linked instruments are Amazon Reviews 2023, used for the review-generation version of the task, and Human evaluation.

**What it is taken as evidence of.** Construct links are sparse. Papers link it to 1 construct, Long-context understanding, but only as a related construct, not as a direct claim that personalized response generation measures or indicates it. In that account, more exchanges gradually reveal more personal information, while limited context length makes it increasingly challenging to integrate information from past interactions.

## Sources

**[PACHAT: Persona-Aware Speech Assistant for Multi-party Dialogue](https://aclanthology.org/2025.emnlp-main.1492.pdf) (as "Speaker-specific response generation")**
> The observable generation of replies that are explicitly directed at and tailored for a particular speaker in a multi-party conversation.

**[FaST: Feature-aware Sampling and Tuning for Personalized Preference Alignment with Limited Data](https://aclanthology.org/2025.emnlp-main.475.pdf) (as "Personalized generation")**
> The observable task of generating text responses that are tailored to a specific user's preferences for previously unseen contexts or questions.

**[FaST: Feature-aware Sampling and Tuning for Personalized Preference Alignment with Limited Data](https://aclanthology.org/2025.emnlp-main.475.pdf)**
> Producing natural language responses that reflect a specific user's preferred style, content, or tone, as inferred from their past choices in a questionnaire.

**[Latent Inter-User Difference Modeling for LLM Personalization](https://aclanthology.org/2025.emnlp-main.536.pdf) (as "Personalized review generation")**
> The specific task of generating a product or item review that reflects a particular user's writing style, opinions, and preferences.

**[Personalized LLM Decoding via Contrasting Personal Preference](https://aclanthology.org/2025.emnlp-main.1723.pdf) (as "Personalized text generation")**
> The observable task of generating text that is tailored to a specific user's style, preferences, and historical data.

## Relationships

### Personalized response generation →
- **LLM-as-a-judge** (measurements) — *measured_by*
  > PAChat achieves the best results across all metrics, demonstrating significant improvements in personalized response generation and particularly winning favor with both GPT and human judges. (Section 5.3.1)
  - [PACHAT: Persona-Aware Speech Assistant for Multi-party Dialogue](https://aclanthology.org/2025.emnlp-main.1492.pdf)
- **Amazon Reviews 2023** (measurements) — *measured_by*
  > Building upon prior work, we focus on the representative task of item review generation for LLM personalization (Ni et al., 2019; Peng et al., 2024; Kumar et al., 2024; Au et al., 2025). Specifically, we adopt the Amazon Reviews 2023 dataset (Section 4.1)
  - [Latent Inter-User Difference Modeling for LLM Personalization](https://aclanthology.org/2025.emnlp-main.536.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > PAChat achieves the best results across all metrics, demonstrating significant improvements in personalized response generation and particularly winning favor with both GPT and human judges. (Section 5.3.1)
  - [PACHAT: Persona-Aware Speech Assistant for Multi-party Dialogue](https://aclanthology.org/2025.emnlp-main.1492.pdf)
