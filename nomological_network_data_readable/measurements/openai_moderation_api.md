# OpenAI Moderation API
**Type:** Measurement  
**Referenced in:** 17 papers  
**Also known as:** OpenAI moderation API, OpenAI Moderation, OpenAI-Moderation  

## State of the Field

**What it is.** Most commonly described as an API or public moderation tool for classifying text against safety policies, the instrument is used to assign violation categories or safety scores for content such as hate, harassment, self-harm, sexual content, and violence. Definitions also describe it as providing a binary harmful or safe flag, and in one account a continuous harmfulness score, while papers use it to tag unsafe conversations, assess the safety of text data, and filter toxic content. A smaller line of work describes OpenAI Moderation as a benchmark or evaluation set for query classification, and one paper frames OpenAI-Moderation as a defense mechanism for jailbreak evaluation.

**What it is claimed to measure.** Papers link it to three constructs and three behavioral indicators. The prevailing use is to measure Harmlessness, Toxicity, Safety, Harmful content detection, and Content moderation, with one other behavioral indicator also linked; all of these links concern safety-related content. In the recorded relationships, papers use it to evaluate toxicity and harmfulness of examples, to provide a harmfulness score and a safe or unsafe tag for safety evaluation, and to judge harmful-content outcomes by whether content is flagged.

**Space of uses.** No measurement instrument is linked to it. Papers nonetheless use it alongside Detoxify and the Perspective API for unsafe or harmful content detection, and also position it as a conversation-tagging tool, a secondary evaluation method, a preprocessing filter that removes toxic content before training, and moderation testing. Some authors additionally treat OpenAI Moderation as a public benchmark for binary prompt or query classification, and one jailbreak study uses it as a defense strategy that reduces ASR slightly by 3%-8%.

## Sources

**[LMSYS-Chat-1M: A Large-Scale Real-World LLM Conversation Dataset](https://proceedings.iclr.cc/paper_files/paper/2024/file/5f9bfdfe3685e4ccdbc0e7fb29cccf2a-Paper-Conference.pdf) (as "OpenAI moderation API")**
> OpenAI Moderation API, a content-safety evaluation procedure that assigns violation categories to messages and is used here to tag unsafe conversations and evaluate moderation and jailbreak responses.

**[WildChat: 1M ChatGPT Interaction Logs in the Wild](https://proceedings.iclr.cc/paper_files/paper/2024/file/9421261e06f1a63a352b068f1ac90609-Paper-Conference.pdf)**
> Official API provided by OpenAI to classify text content based on safety policies, including categories like hate, harassment, self-harm, and sexual content.

**[Alignment at Pre-training! Towards Native Alignment for Arabic LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/195c4e2910bedabd813f9fe4e70c642c-Paper-Conference.pdf) (as "OpenAI Moderation")**
> A publicly available tool from OpenAI used to assess the safety of text data by scoring it on dimensions like harassment, sexual content, hate speech, and violence.

**[Foot-In-The-Door: A Multi-turn Jailbreak for LLMs](https://aclanthology.org/2025.emnlp-main.100.pdf) (as "OpenAI-Moderation")**
> A defense mechanism and content moderation tool from OpenAI, used in this paper as a procedure to evaluate the robustness of a jailbreak attack.

## Relationships

### → OpenAI Moderation API
- **Toxicity** (constructs) — *measured_by*
  > We detect unsafe content using two toxicity classification tools: the OpenAI Moderation API and Detoxify (Section 4).
  - [WildChat: 1M ChatGPT Interaction Logs in the Wild](https://proceedings.iclr.cc/paper_files/paper/2024/file/9421261e06f1a63a352b068f1ac90609-Paper-Conference.pdf)
- **Harmlessness** (constructs) — *measured_by*
  > To evaluate the toxicity and harmfulness of the fine-tuning examples by prompting strategy we use OpenAI’s Moderation API. (Section 3.1)
  - [Do as I do (Safely): Mitigating Task-Specific Fine-tuning Risks in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/70de9e3948645a1be2de657f14d85c6d-Paper-Conference.pdf)
- **Harmful content generation** (behaviors tasks) — *measured_by*
  > The success rate for each prompt was determined by whether the chatbot’s response to such a prompt was flagged by either Detoxify or OpenAI Moderation API (Section 4).
  - [WildChat: 1M ChatGPT Interaction Logs in the Wild](https://proceedings.iclr.cc/paper_files/paper/2024/file/9421261e06f1a63a352b068f1ac90609-Paper-Conference.pdf)
- **Content moderation** (behaviors tasks) — *measured_by*
  > "We utilize the OpenAI moderation API4 (Markov et al., 2023) to tag all conversations."
  - [LMSYS-Chat-1M: A Large-Scale Real-World LLM Conversation Dataset](https://proceedings.iclr.cc/paper_files/paper/2024/file/5f9bfdfe3685e4ccdbc0e7fb29cccf2a-Paper-Conference.pdf)
- **Safety** (constructs) — *measured_by*
  > To address this limitation, we used the OpenAI Moderation API as a secondary evaluation method. This API provides both a harmfulness score (in [0,1]), where 0 is the least harmful and 1 the most harmful) and a binary tag indicating whether the response is safe.
  - [Semantic Loss Guided Data Efficient Supervised Fine Tuning for Safe Responses in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/598ec93b6d2ed4fed4927b957b80f18c-Paper-Conference.pdf)
