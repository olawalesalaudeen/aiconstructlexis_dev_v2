# Knowledge generation
**Type:** Behavior  
**Referenced in:** 12 papers  
**Also known as:** Fact extraction, General knowledge recall, Supplementary evidence generation  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage treats this behavior as producing supporting facts or other relevant information in response to a prompt, question, or claim. Papers most often frame it as generating or extracting supporting factual statements for a question and its answer options, including prompting a model to "regurgitate facts on a question-by-question basis"; broader formulations describe producing "supporting facts, concepts, or other relevant information" or generating intermediate knowledge before answering. Definitions also differ over the expected output, with some asking for broad background knowledge, some for all facts from a conversation history, and some for sentence-level factual statements for later verification. One paper claims a causal relationship from Factual recall to Knowledge generation, describing generated knowledge prompting as asking the model to recall or synthesize relevant knowledge before answering.

**Variants.** A frequent variant is fact extraction, which papers use for question-and-option prompts, for extracting all facts that capture long-term conversational context, and for breaking a model response into discrete or sentence-level factual statements for verification against context. Other names include general knowledge recall, where the model first recalls broad background knowledge relevant to a question and options, and supplementary evidence generation, where the model uses internal world knowledge to generate additional evidence guided by a claim and summarized evidence. Across papers, these variants appear in question answering, conversation history processing, response verification, and reasoning acquisition.

**Space of elicitation and scores.** Papers link this behavior to one measurement instrument, CoQA, through a measured_by relation. In that usage, CoQA is used to demonstrate how writing style affects fact extraction, and no other measurement instrument is named.

**What it is taken as evidence of.** Papers do not explicitly link this behavior to any construct.

## Sources

**[Why and How LLMs Benefit from Knowledge Introspection in Commonsense Reasoning](https://aclanthology.org/2025.emnlp-main.352.pdf)**
> The observable act of a model producing text that represents supporting facts, concepts, or other relevant information in response to a prompt.

**[From Models to Microtheories: Distilling a Model's Topical Knowledge for Grounded Question-Answering](https://proceedings.iclr.cc/paper_files/paper/2025/file/77d52754ff6b2de5a5d96ee921b6b3cd-Paper-Conference.pdf) (as "Fact extraction")**
> Generating supporting factual statements for a question and answer options from a language model.

**[TinyThinker: Distilling Reasoning through Coarse-to-Fine Knowledge Internalization with Self-Reflection](https://aclanthology.org/2025.naacl-long.309.pdf) (as "General knowledge recall")**
> The observable behavior of generating broad, background knowledge relevant to a given question and set of options.

**[IMRRF: Integrating Multi-Source Retrieval and Redundancy Filtering for LLM-based Fake News Detection](https://aclanthology.org/2025.naacl-long.461.pdf) (as "Supplementary evidence generation")**
> Generating additional relevant facts or statements using the LLM’s internal knowledge, guided by the claim and summarized evidence.

## Relationships

### Knowledge generation →
- **TOFU** (measurements) — *measured_by*
  > Fictitious Knowledge Generation. TOFU (Maini et al., 2024) consists of questions about fake authors synthesized by GPT-4. (Section 4.1).
  - [On Large Language Model Continual Unlearning](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc28053a08f59fccb48b11f2e31e81c7-Paper-Conference.pdf)

### Associated with
- **Factual recall** (behaviors tasks)
  > Knowledge recall: Generated knowledge prompting (Liu et al., 2022) asks the model to recall or synthesize relevant knowledge before answering, simulating a form of self-retrieval and improving performance on commonsense benchmarks. (Section 2)
  - [Prior Prompt Engineering for Reinforcement Fine-Tuning](https://aclanthology.org/2025.emnlp-main.1590.pdf)
