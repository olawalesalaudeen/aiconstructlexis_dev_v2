# Audio question answering
**Type:** Behavior  
**Referenced in:** 6 papers  

## State of the Field

**Space of definitions.** Definitions consistently describe it as answering natural-language questions about audio content from an audio input plus a text question or accompanying text. The prevailing framing is straightforward answer generation, though some authors extend it to open-ended, free-form responses and reasoning-based queries, and one benchmark frames the task around understanding environmental contexts and following instructions in those scenarios; one reported evaluation scores the task with accuracy.

**Variants.** Papers usually refer to it as AQA. The variants studied span general audio question answering, non-speech and environmental audio, and settings that ask factual as well as reasoning-based questions, with some work emphasizing context and events from soundscapes and others using open-ended response generation.

**Space of elicitation and scores.** It is measured by one instrument, ClothoAQA, the only linked instrument in the papers. ClothoAQA is described as a dataset of audio samples paired with crowdsourced questions and answers, and linked evaluations use it for audio question answering, with one table reporting ACC.

**What it is taken as evidence of.** The papers do not link audio question answering to any construct, so they do not explicitly present it as evidence of a particular construct.

## Sources

**[When Audio and Text Disagree: Revealing Text Bias in Large Audio-Language Models](https://aclanthology.org/2025.emnlp-main.246.pdf)**
> Generating answers to natural language questions about audio content based on both audio input and accompanying text.

## Relationships

### Audio question answering →
- **ClothoAQA** (measurements) — *measured_by*
  > ClothoAQAunanimous AQA - ACC (Table 1)
  - [Audio Flamingo 2: An Audio-Language Model with Long-Audio Understanding and Expert Reasoning Abilities](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ghosh25b/ghosh25b.pdf)
