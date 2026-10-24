# Direct answering
**Type:** Behavior  
**Referenced in:** 7 papers  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats direct answering as responding to a user's request or question with an answer instead of first asking for clarification. Some descriptions make this contrast explicit by framing the assistant's options as either a clarifying question or an attempt to directly answer the query, and one paper labels outputs as either abstention-like, including clarifying or refusing, or direct-answering. A smaller line of work uses the same label for giving the final answer directly, without intermediate reasoning steps or any other output.

**Variants.** Papers study it in several settings. One variant treats it as answering an ambiguous question with a confident, specific answer instead of seeking clarification, another uses visual questions, where authors expect direct answers when the question is unambiguous and also prompt models to output answers directly without clarification. Papers also use the names direct-answering and direct prompt for settings where the model is instructed to directly provide the final answer.

**Space of elicitation and scores.** Papers link direct answering to one measurement instrument, LLM-as-a-judge. In the linked use, a pretrained LLM-as-judge labels responses as either abstention, defined there as clarification or refusal, or direct answer.

**What it is taken as evidence of.** The papers do not link direct answering to any construct. As a result, they do not report it as evidence of a particular construct.

## Sources

**[Learning to Clarify: Multi-turn Conversations with Action-Based Contrastive Self-Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ffd05ca3cf3985f4572af015b4cfc1e-Paper-Conference.pdf)**
> Providing an answer to the user's request without first asking for clarification.

## Relationships

### Direct answering →
- **LLM-as-a-judge** (measurements) — *measured_by*
  > A pretrained LLM-as-judge labels responses as either abstention (clarification or refusal) or direct answer... (Section 4.1)
  - [Sparse Neurons Carry Strong Signals of Question Ambiguity in LLMs](https://aclanthology.org/2025.emnlp-main.813.pdf)
