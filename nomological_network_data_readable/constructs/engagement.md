# Engagement
**Type:** Construct  
**Referenced in:** 6 papers  
**Also known as:** Interactive engagement, Engagingness  

## State of the Field

**Definition agreement:** Consensus. Most papers define engagement as a property of the model's responses or the dialogue itself: being interesting or captivating, holding the user's attention, and sustaining further interaction over time. One paper instead defines it as user participation in a discussion using behavioral metrics like reciprocity and discussion length, but this is a lone outlier rather than a substantial competing usage.

**Space of definitions.** Most papers treat engagement, or engagingness, as a response- or dialogue-centered quality: outputs that are interesting, captivating, attention-holding, and likely to elicit further interaction. Within this prevailing framing, some authors cast it as a model ability or capacity, while others describe it as a perceived quality or latent tendency of responses or dialogues, and some narrow it to actively involving the user or maintaining interest over long-term conversation. A smaller line of work instead defines engagement at the discussion level as user participation and interest, combining reciprocity, response diversity, and discussion length, so the main disagreement is between judged output quality and broader discussion participation.

**Space of facets.** Terminology varies modestly across papers: engagement, engagingness, and interactive engagement are used for closely related notions centered on holding attention and sustaining interaction. Interactive engagement emphasizes drawing the user in and contributing dynamically to the dialogue, while long-term dialogue work emphasizes maintaining interest over time, sometimes through personal and shared history. One paper also places engagement among fine-grained alignment perspectives alongside honesty, helpfulness, harmlessness, and unbiasedness, and the discussion-oriented account describes it as combining interest and participation.

**Space of measurement.** The linked operationalizations focus on judged response or dialogue quality: engagement is linked to 3 measurement instruments and no behavioral indicators. Papers use G-Eval, implemented with GPT-4o to evaluate engagingness, Human preference evaluation that rates engagement as one of several fine-grained alignment perspectives, and LLM-as-a-judge for whether a speaker maintains the annotator's interest in long-term dialogue. These measurements correspond most clearly to the response- and dialogue-quality definitions, rather than to the discussion-level framing based on reciprocity, response diversity, and discussion length.

**Links.** Papers here only connect engagement to measurement instruments. No paper reports a causal relationship, correlation, or generic related link involving engagement and another construct or indicator.

## Sources

**[Leftover Lunch: Advantage-based Offline Reinforcement Learning for Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/3b18d368150474ac6fc9bb665d3eb3da-Paper-Conference.pdf)**
> The model's ability to generate responses that are interesting, captivating, and likely to elicit further interaction from a user.

**[Flexibly Utilize Memory for Long-Term Conversation via a Fragment-then-Compose Framework](https://aclanthology.org/2025.emnlp-main.1069.pdf) (as "Engagingness")**
> The perceived quality of a model's conversational responses to be interesting, captivating, and hold a user's attention.

**[Crab: A Novel Configurable Role-Playing LLM with Assessing Benchmark](https://aclanthology.org/2025.acl-long.731.pdf) (as "Interactive engagement")**
> The model's capacity to actively involve the user in the dialogue, encouraging ongoing interaction and dynamic contribution to the conversation.

## Relationships

### Engagement →
- **LLM-as-a-judge** (measurements) — *measured_by*
  > We use GPT-4o to evaluate Engagingness, Humanness, and Memorability. (Section 4.1)
  - [Flexibly Utilize Memory for Long-Term Conversation via a Fragment-then-Compose Framework](https://aclanthology.org/2025.emnlp-main.1069.pdf)
