# Dialogue generation
**Type:** Behavior  
**Referenced in:** 47 papers  
**Also known as:** Dialogue response generation, Open-domain dialogue generation, Utterance generation, Conversational response generation, Turn-by-turn response generation  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage is generating the next response or utterance from dialogue context or history, usually in a multi-turn conversation. Definitions commonly describe continuing a conversation with a relevant, coherent, or contextually appropriate utterance, and some papers make the setup explicit as receiving a snippet of conversation and predicting the next utterance. A recurring framing evaluates these responses for helpfulness and harmlessness or by human preference between candidate conversations, while a smaller line of work allows single-turn human-assistant prompts or conditions generation on retrieved passages, predicted actions, state, or scenario logic.

**Variants.** Papers use several nearby names for this behavior, including dialogue response generation, conversational response generation, open-domain dialogue generation, utterance generation, and turn-by-turn response generation. The settings range from persona-conditioned open-domain conversation and retrieval-augmented response synthesis to task-oriented dialogue with API information, social interaction conditioned on personality traits, and domain-specific exchanges such as shopping or counseling. Some papers further narrow the behavior to generating both user and system turns from a predefined logic flow, and one paper records dialogue outputs as part of multimodal agent interaction.

**Space of elicitation and scores.** Papers link dialogue generation to 10 measurement instruments. The most frequently linked are HH-RLHF, MT-Bench, DailyDialog, Wizard of Wikipedia, and Arena-Hard, and 5 other linked instruments are Chatbot Arena, ConvAI2, Databricks Dolly-15k, LLM-as-a-judge, and UltraFeedback. Elicitation and scoring vary from next-utterance prediction on conversation histories, to human-preference comparisons on paired conversations, to GPT-4 zero-shot pairwise evaluation and crowd-sourced real-time dialogue battles; HH-RLHF also appears once as a related prompt source rather than a measured_by link.

**What it is taken as evidence of.** Papers link it to 1 construct, Generalization. In that link, dialogue generation is used to measure Generalization, with a paper comparing win rate against baselines in general dialogue. No other construct link appears, so the surveyed papers do not present alternative construct framings here.

## Sources

**[Chain of Hindsight aligns Language Models with Feedback](https://proceedings.iclr.cc/paper_files/paper/2024/file/b4ccb915933443c86a588e45d77a5748-Paper-Conference.pdf)**
> Generating responses in a multi-turn conversational setting.

**[An Emulator for Fine-tuning Large Language Models using Small Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/389e161125965c0f0ba50420fee45774-Paper-Conference.pdf) (as "Dialogue response generation")**
> Producing conversational responses in multi-turn or single-turn dialogue settings that address user queries while balancing helpfulness and harmlessness.

**[HiRA: Parameter-Efficient Hadamard High-Rank Adaptation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/48c368f105e8145b945227b73255635a-Paper-Conference.pdf) (as "Open-domain dialogue generation")**
> Generating responses in multi-turn conversations conditioned on persona profiles and dialogue history.

**[From Schema to State: Zero-Shot Scheme-Only Dialogue State Tracking via Diverse Synthetic Dialogue and Step-by-Step Distillation](https://aclanthology.org/2025.emnlp-main.85.pdf) (as "Utterance generation")**
> The specific task of generating the natural language text for user and system turns in a dialogue, based on a predefined scenario and logic flow.

**[UniConv: Unifying Retrieval and Response Generation for Large Language Models in Conversations](https://aclanthology.org/2025.acl-long.344.pdf) (as "Conversational response generation")**
> The task of synthesizing information from retrieved passages and conversational context to generate a natural language response to a user's query in a multi-turn setting.

**[Consistent Client Simulation for Motivational Interviewing-based Counseling](https://aclanthology.org/2025.acl-long.1021.pdf) (as "Turn-by-turn response generation")**
> Generating one client utterance at a time in response to the counselor, conditioned on state, selected action, and retrieved profile information.

## Relationships

### Dialogue generation →
- **HH-RLHF** (measurements) — *measured_by*
  > We also evaluate on the validation split of the Anthropic’s Helpful and Harmless (HH) dataset (Ganguli et al., 2022; Bai et al., 2022a), where where each example comprises a pair of conversations between a human and a large language model, with one of the two conversations preferred by a human.
  - [Chain of Hindsight aligns Language Models with Feedback](https://proceedings.iclr.cc/paper_files/paper/2024/file/b4ccb915933443c86a588e45d77a5748-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > For the dialogue generation task, we fine-tune the Llama-2-7B (Touvron et al., 2023) model on a 52k subset of the WizardLM dataset (Xu et al., 2024) and evaluate it using the MT-Bench dataset (Zheng et al., 2024a).
  - [LoRA-Pro: Are Low-Rank Adapters Properly Optimized?](https://proceedings.iclr.cc/paper_files/paper/2025/file/ea184f920a0f0f8d8030aa1bd7ac9fd4-Paper-Conference.pdf)
- **DailyDialog** (measurements) — *measured_by*
  > we focus on a single setting as a case study: dialogue generation with the DailyDialog (Li et al., 2017) dataset
  - [Confronting Reward Model Overoptimization with Constrained RLHF](https://proceedings.iclr.cc/paper_files/paper/2024/file/5eee634cb9729b8bcc2ec9f2a46a74ae-Paper-Conference.pdf)
- **Wizard of Wikipedia** (measurements) — *measured_by*
  > Table 2: Accuracy on various long-form NLP tasks. ... Dialogue ... Wow (Table 2)
  - [A Theory for Token-Level Harmonization in Retrieval-Augmented Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/5a461bdff86cc07e976bb6c518810398-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > For the dialogue generation and summarization tasks, we use GPT-4 for zero-shot pairwise evaluation, which is consistent with human judgments (see prompts in Appendix C.2.1). (Section 5.1)
  - [Cal-DPO: Calibrated Direct Preference Optimization for Language Model Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/cf8b2205e39f81726a8d828ecbe00ad0-Paper-Conference.pdf)
- **Chatbot Arena** (measurements) — *measured_by*
  > Chatbot Arena is a benchmark platform designed for evaluating LLMs through interactive, randomised battles in a crowd-sourced manner. It allows for the assessment of LLMs in real-time dialogues with human participants. (Section 3.3)
  - [Weak-eval-Strong: Evaluating and Eliciting Lateral Thinking of LLMs with Situation Puzzles](https://proceedings.neurips.cc/paper_files/paper/2024/file/914b372356d58d9e9357b29332cb8fdc-Paper-Conference.pdf)
- **Databricks Dolly-15k** (measurements) — *measured_by*
  > ...and Dolly (Conover et al., 2023) datasets as the dialogue generation task. (Section 3.3)
  - [Beyond Interpretability: The Gains of Feature Monosemanticity on Model Robustness](https://proceedings.iclr.cc/paper_files/paper/2025/file/11822e84689e631615199db3b75cd0e4-Paper-Conference.pdf)
- **UltraFeedback** (measurements) — *measured_by*
  > We further conduct experiments on tasks such as conditional generation (IMDB) and dialogue (Anthropic HH, UltraFeedback). (Section 5)
  - [MallowsPO: Fine-Tune Your LLM with Preference Dispersions](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ddab70bf41ffe5d423840644d3357f4-Paper-Conference.pdf)
- **ConvAI2** (measurements) — *measured_by*
  > Open-domain Dialogue Generation. We use the ConvAI2 dataset (Dinan et al., 2019)... (Section 5.1)
  - [HiRA: Parameter-Efficient Hadamard High-Rank Adaptation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/48c368f105e8145b945227b73255635a-Paper-Conference.pdf)
- **Arena-Hard** (measurements) — *measured_by*
  > These benchmarks assess the models’ conversational abilities across a diverse range of queries and are extensively used by the research community.
  - [AlphaDPO: Adaptive Reward Margin for Direct Preference Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25af/wu25af.pdf)
