# Detoxify
**Type:** Measurement  
**Referenced in:** 14 papers  

## State of the Field

**What it is.** Most papers treat Detoxify as an automatic toxicity scoring or classification model for text outputs. Definitions describe it as a model-based system that assigns a toxicity score to generated text, a machine learning model and library for toxicity detection, and a tool for scoring continuations or responses where higher scores indicate more toxic generation. Some papers threshold that score, including at 0.1 and at ≥0.7, while others use the score directly; one paper also describes a retrained Detoxify model on a biased subset of the Jigsaw Unintended Bias in Toxicity Classification dataset, and another specifies six attributes, toxicity, severe toxicity, obscene, threat, insult, and identity attack.

**What it is claimed to measure.** Its use is concentrated on Toxicity rather than spread across many targets. Papers link it to 2 constructs and 1 behavioral indicator, most often using it to measure Toxicity by evaluating or scoring generated text, responses, continuations, or tweets, sometimes through derived quantities such as Toxicity Probability and Expected Maximum Toxicity. Smaller uses link it to Harmlessness via toxicity scores, and to Harmful content generation via whether a response is flagged by Detoxify or the OpenAI Moderation API.

**Space of uses.** Papers generally position Detoxify as an automatic evaluator, and no measurement instrument is linked to it. In practice, they often use it with other moderation or toxicity tools, especially OpenAI Moderation API and Perspective API, for unsafe content detection or toxicity assessment, and they apply it to scoring model continuations, chat responses, and tweets. One paper uses Detoxify for r(·) and a retrained Detoxify model for rm(·).

**Concerns raised.** Direct concerns are limited in the excerpts, but one comparison reports that with a threshold of ≥0.7, Detoxify flagged 6% of 100 harmful instructions, versus 17% for OpenAI's API and 4% for Perspective API. Reported uses also apply different thresholds, including 0.1, >0.5, and ≥0.7.

## Sources

**[Fine-tuning Aligned Language Models Compromises Safety, Even When Users Do Not Intend To!](https://proceedings.iclr.cc/paper_files/paper/2024/file/83b7da3ed13f06c13ce82235c8eedf35-Paper-Conference.pdf)**
> Model-based toxicity scoring system that assigns a toxicity score to generated text.

## Relationships

### → Detoxify
- **Toxicity** (constructs) — *measured_by*
  > We detect unsafe content using two toxicity classification tools: the OpenAI Moderation API and Detoxify (Section 4).
  - [WildChat: 1M ChatGPT Interaction Logs in the Wild](https://proceedings.iclr.cc/paper_files/paper/2024/file/9421261e06f1a63a352b068f1ac90609-Paper-Conference.pdf)
- **Harmful content generation** (behaviors tasks) — *measured_by*
  > The success rate for each prompt was determined by whether the chatbot’s response to such a prompt was flagged by either Detoxify or OpenAI Moderation API (Section 4).
  - [WildChat: 1M ChatGPT Interaction Logs in the Wild](https://proceedings.iclr.cc/paper_files/paper/2024/file/9421261e06f1a63a352b068f1ac90609-Paper-Conference.pdf)
