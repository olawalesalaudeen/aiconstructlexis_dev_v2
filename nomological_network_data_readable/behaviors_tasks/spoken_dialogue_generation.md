# Spoken dialogue generation
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Spoken dialog generation, Spoken dialogue response generation  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage is response generation in conversation from spoken input or prior speech context. Most definitions describe generating a response based on spoken audio, spoken conversational input, or the prior sequence of user and assistant turns, with a smaller formulation narrowing this to the next assistant utterance in a multi-turn exchange. Papers differ on output modality: some describe a textual response, while others describe a spoken response or assistant utterance, and success is characterized as producing "coherent," "appropriate," or "most suitable" responses from contextual information (VoxDialogue: Can Spoken Dialogue Systems Understand Information Beyond Words?).

**Variants.** Papers use several near-equivalent names, including spoken dialogue generation, spoken dialog generation, spoken dialogue response generation, and generative spoken dialogue modeling. The recurring settings are conversational generation from spoken audio or prior speech context, with a smaller line of work centered on the next assistant utterance in a multi-turn spoken conversation. The modality pairing varies between spoken input with textual output and spoken input with spoken output.

**Space of elicitation and scores.** No measurement instrument is linked to it. Accordingly, the papers here do not attach spoken dialogue generation to a recurring named instrument for elicitation or scoring.

**What it is taken as evidence of.** Only a single construct is linked to it: Chain-of-thought reasoning. This link is recorded as a causal relationship from Chain-of-thought reasoning to spoken dialogue generation, not as a claim that the behavior measures the construct; one paper says that inserting text-related tasks between speech inputs and outputs lets the model benefit from "chained reasoning over the intermediary modality" (Paralinguistics-Aware Speech-Empowered Large Language Models for Natural Conversation).

## Sources

**[SD-Eval: A  Benchmark Dataset for Spoken Dialogue Understanding Beyond Words](https://proceedings.neurips.cc/paper_files/paper/2024/file/681fe4ec554beabdc9c84a1780cd5a8a-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The observable task of generating a textual response based on a spoken audio input, as part of a conversation.

**[Paralinguistics-Aware Speech-Empowered Large Language Models for Natural Conversation](https://proceedings.neurips.cc/paper_files/paper/2024/file/ecfa5340fd896e5314bc5e132b5dd5ca-Paper-Conference.pdf) (as "Spoken dialog generation")**
> Generating a spoken response to a spoken conversational input.

**[VoxDialogue: Can Spoken Dialogue Systems Understand Information Beyond Words?](https://proceedings.iclr.cc/paper_files/paper/2025/file/011df158529ddceb5f2f7a65f2732a5a-Paper-Conference.pdf) (as "Spoken dialogue response generation")**
> Producing the next assistant utterance in a multi-turn spoken conversation given prior user utterances and assistant replies.

## Relationships

### → Spoken dialogue generation
- **Chain-of-thought reasoning** (constructs) — *causes*
  > "the insertion of the text-related tasks between speech inputs and outputs allows the model to benefit from the pretraining LLM and chained reasoning over the intermediary modality"
  - [Paralinguistics-Aware Speech-Empowered Large Language Models for Natural Conversation](https://proceedings.neurips.cc/paper_files/paper/2024/file/ecfa5340fd896e5314bc5e132b5dd5ca-Paper-Conference.pdf)
