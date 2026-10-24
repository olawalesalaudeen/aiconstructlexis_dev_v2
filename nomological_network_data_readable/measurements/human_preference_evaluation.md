# Human preference evaluation
**Type:** Measurement  
**Referenced in:** 36 papers  
**Also known as:** Human preference study, A/B testing, Side-by-side comparisons, Human pairwise comparison, Human pairwise evaluation, Human preference-based evaluation, Human preference voting, Human preference test, AB preference test, Human comparative evaluation, Moderation Preference Annotation, Pairwise comparisons  

## State of the Field

**What it is.** Across papers, the prevailing usage is a human pairwise comparison protocol, variously described as side by side comparisons, A/B testing, pairwise evaluation, or preference voting. Evaluators usually see two outputs for the same input and choose the better one, often with tie or no-difference options, and some papers summarize results as win rates or win:tie:lose ratios. The compared content varies by task, from model responses and table descriptions to arguments, video captions, and audio outputs, and a smaller line of work describes the evaluation instead as Mean Opinion Score ratings of naturalness and meaningfulness on a 5-point Likert scale.

**What it is claimed to measure.** Papers link this protocol to four constructs and one behavioral indicator. The construct links span Human preference alignment, Engagement, Faithfulness, and Helpfulness, and Instruction following is the only linked behavioral indicator, so the recorded uses are spread across several targets rather than centered on one. In the linked claims, papers use human choices to measure Human preference alignment and Instruction following, to judge whether a description is more faithful to a table, and to compare responses on named perspectives such as helpfulness and engagement.

**Space of uses.** Papers do not link it to any other measurement instrument. In use, it is often positioned alongside automatic metrics or model-based evaluators rather than on its own: one study adds a small human study because its main results come from an LLM-scored benchmark, another reports performance across both automatic metrics and human preference evaluations, and another uses human pairwise comparison to validate LLM-based evaluation. Several papers report outcomes as win rates, win:tie:lose ratios, or simulated win rates on sampled instances.

## Sources

**[SCOPE: A Self-supervised Framework for Improving Faithfulness in Conditional Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/05d6b5b6901fb57d2c287e1d3ce6d63c-Paper-Conference.pdf) (as "Human preference study")**
> Human evaluation protocol where annotators rate which of two model descriptions is more faithful to a table.

**[Self-Alignment with Instruction Backtranslation](https://proceedings.iclr.cc/paper_files/paper/2024/file/0f8e3534eb8dee7478d4dc0e9d9a0b1a-Paper-Conference.pdf)**
> A human evaluation protocol where evaluators are presented with outputs from two models side-by-side and asked to choose which is significantly better or if there is no significant difference.

**[An Empirical Analysis of Uncertainty in Large Language Model Evaluations](https://proceedings.iclr.cc/paper_files/paper/2025/file/82d3258eb58ceac31744a88005b7ddef-Paper-Conference.pdf) (as "A/B testing")**
> A human evaluation method where raters compare two model outputs (A and B) and choose the better one.

**[BOND: Aligning LLMs with Best-of-N Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/947f37882a394140f7add476bb99d1d3-Paper-Conference.pdf) (as "Side-by-side comparisons")**
> Human evaluation procedure in which outputs are compared directly to assess higher quality.

**[On the Role of Model Prior in Real-World Inductive Reasoning](https://aclanthology.org/2025.emnlp-main.534.pdf) (as "Human pairwise comparison")**
> An evaluation protocol where human experts assess hypothesis quality by selecting the better option from a pair of hypotheses or indicating no discernible difference.

**[MA-RLHF: Reinforcement Learning from Human Feedback with Macro Actions](https://proceedings.iclr.cc/paper_files/paper/2025/file/429d69979c22b06d6baa65caf3ab1e10-Paper-Conference.pdf) (as "Human pairwise evaluation")**
> A human judgment procedure in which annotators compare two responses and choose the preferred one using task-specific criteria.

**[HEMM: Holistic Evaluation of Multimodal Foundation Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b6e5dae3acb4cfdfe5928a6eff174ee-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Human preference-based evaluation")**
> A human evaluation protocol where annotators are shown outputs from two different models for the same input and are asked to choose the better one or declare a tie.

**[ShareGPT4Video: Improving Video Understanding and Generation with Better Captions](https://proceedings.neurips.cc/paper_files/paper/2024/file/22a7476e4fd36818777c47e666f61a41-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Human preference voting")**
> A human evaluation method where volunteers compare and vote on the quality of video captions generated by different models based on criteria like omission, fabrication, distortion, and temporal mismatch.

**[Paralinguistics-Aware Speech-Empowered Large Language Models for Natural Conversation](https://proceedings.neurips.cc/paper_files/paper/2024/file/ecfa5340fd896e5314bc5e132b5dd5ca-Paper-Conference.pdf) (as "Human preference test")**
> A human evaluation protocol where participants listen to spoken dialog responses from two different models and choose the preferred one based on comprehensive criteria like naturalness, prosody, and semantic coherence.

**[SongCreator: Lyrics-based Universal Song Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/92a7a03e1c716970848a4a86cc8243ee-Paper-Conference.pdf) (as "AB preference test")**
> A human pairwise preference protocol in which listeners choose between two audio samples for a given task.

**[A Logical Fallacy-Informed Framework for Argument Generation](https://aclanthology.org/2025.naacl-long.374.pdf) (as "Human comparative evaluation")**
> A human annotation procedure in which workers compare paired arguments and judge which one is superior or whether they are equally good or bad.

**[It Is Not Only the Negative that Deserves Attention! Understanding, Generation & Evaluation of (Positive) Moderation](https://aclanthology.org/2025.naacl-long.567.pdf) (as "Moderation Preference Annotation")**
> Pairwise human preference evaluation in which annotators choose between professional and generated moderation replies to the same user comment, assessing relative quality and preference.

**[A Good Plan is Hard to Find: Aligning Models with Preferences is Misaligned with What Helps Users](https://aclanthology.org/2025.emnlp-main.585.pdf) (as "Pairwise comparisons")**
> A human evaluation method where users select which of two plans they believe will help them solve a question more accurately or quickly, used to measure user preferences.

## Relationships

### → Human preference evaluation
- **Human preference alignment** (constructs) — *measured_by*
  > “Then, we conduct a human preference study.”
  - [Multimodal Large Language Models Make Text-to-Image Generative Models Align Better](https://proceedings.neurips.cc/paper_files/paper/2024/file/9421261e06f1a63a352b068f1ac90609-Paper-Conference.pdf)
- **Faithfulness** (constructs) — *measured_by*
  > Annotators are tasked with rating which of the two descriptions is more faithful to the table. (Section 5)
  - [SCOPE: A Self-supervised Framework for Improving Faithfulness in Conditional Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/05d6b5b6901fb57d2c287e1d3ce6d63c-Paper-Conference.pdf)
- **Text generation quality** (constructs) — *measured_by*
  > "We also conduct human evaluation on the general quality of the model responses on the combined test set described in Section 3.1"
  - [Self-Alignment with Instruction Backtranslation](https://proceedings.iclr.cc/paper_files/paper/2024/file/0f8e3534eb8dee7478d4dc0e9d9a0b1a-Paper-Conference.pdf)
