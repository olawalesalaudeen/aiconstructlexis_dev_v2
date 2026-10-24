# Contextual reasoning
**Type:** Construct  
**Referenced in:** 17 papers  
**Also known as:** Context-specific reasoning, Context-aware reasoning  

## State of the Field

**Definition agreement:** Consensus. Most papers define contextual reasoning as a model's ability to use relevant surrounding semantic, situational, or structural context to make the right inference or judgment, rather than relying on keywords, surface cues, or memorization. A few papers instantiate this in specific settings such as code vulnerability analysis, social norms, query understanding, or sequence tasks, but these are applications of the same core property rather than different phenomena.

**Space of definitions.** Across papers, the prevailing usage treats contextual reasoning as a latent ability to use full, relevant context to make judgments or inferences, rather than relying on literal keyword matching, surface-level cues, or memorization. This appears in definitions about understanding instructions through situational or functional relations, making deontic judgments from full semantic and situational context, using surrounding code and path-sensitive information to judge vulnerability, and using provided context, variable bindings, or sequence structure to infer an answer. Some authors phrase the construct more narrowly as context-specific query reasoning or as sequence reasoning that selectively focuses on relevant context.

**Space of facets.** Papers characterize the construct by the kind of context being brought to bear: situational and functional relations in instructions, surrounding code and path-sensitive information, roles, relationships, and transmission principles in information flows, user interests and specialized field descriptions in queries, and variable bindings or sequence structure in abstract tasks. Nearby labels, including contextual reasoning, context-specific reasoning, and context-aware reasoning, are used for closely related abilities. One paper also refers to contextual reasoning primitives as core capabilities for contextual reasoning, particularly in math, and across definitions the recurring contrast is with keyword matching, surface cues, or memorization.

**Space of measurement.** Operationalization is benchmark-driven: papers link contextual reasoning to 3 measurement instruments and no behavioral indicators. The linked instruments are LongBench, using Single-Doc QA and Multi-Doc QA datasets to assess contextual reasoning, PubMedQA-derived long-context QA, where perplexity on long answers is used to assess contextual reasoning, and MemeReaCon, a benchmark described as targeting the fine-grained contextual reasoning needed to understand memes in online posts. These measures operationalize the construct through performance on context-dependent QA and meme-understanding tasks, which matches the definitions' general focus on using relevant context but covers only some of the settings named in definitions.

**Links.** Outside measurement, contextual reasoning is related to 1 other construct, natural language understanding. One paper describes recent advances in LLMs as showing strong capabilities in both natural language understanding and contextual reasoning, and papers do not report causal relationships or correlations involving this construct.

## Sources

**[Ins-DetCLIP: Aligning Detection Model to Follow Human-Language Instruction](https://proceedings.iclr.cc/paper_files/paper/2024/file/accb5f309ec092a6787a1879ad5f2a5f-Paper-Conference.pdf)**
> The ability to understand the context within an instruction and infer relevant objects based on situational or functional relationships, rather than literal keyword matching.

**[STaRK: Benchmarking LLM Retrieval on Textual and Relational Knowledge Bases](https://proceedings.neurips.cc/paper_files/paper/2024/file/e607b1419e9ae7cd5cb5b5bb60c2ad5c-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Context-specific reasoning")**
> The latent ability to infer user interests, understand specialized field descriptions, and deduce relationships involving multiple subjects within a specific query context.

**[RoboMamba: Efficient Vision-Language-Action Model for Robotic Reasoning and Manipulation](https://proceedings.neurips.cc/paper_files/paper/2024/file/46a126492ea6fb87410e55a58df2e189-Paper-Conference.pdf) (as "Context-aware reasoning")**
> The ability to reason about sequences by selectively focusing on relevant context, a key feature of the Mamba architecture.

## Relationships

### Contextual reasoning →
- **LongBench** (measurements) — *measured_by*
  > For LongBench, we use datasets from the Single-Doc QA and Multi-Doc QA categories to assess contextual reasoning.
  - [Not All Heads Matter: A Head-Level KV Cache Compression Method with Integrated Retrieval and Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f649556471416b35e60ae0de7c1e3619-Paper-Conference.pdf)
- **PubMedQA** (measurements) — *measured_by*
  > we select the PubMedQA dataset and derive long-context QA samples to evaluate the effectiveness of HMT. Two metrics are employed: for long answers, we compute the PPL to assess the contextual reasoning of HMT (Section 5.1)
  - [HMT: Hierarchical Memory Transformer for Efficient Long Context Language Processing](https://aclanthology.org/2025.naacl-long.410.pdf)
- **MemeReaCon** (measurements) — *measured_by*
  > MemeReaCon occupies a unique position by being the first benchmark, to our knowledge, specifically constructed to evaluate the fine-grained contextual reasoning required to understand memes as they are used in online posts. (Section 2)
  - [MemeReaCon: Probing Contextual Meme Understanding in Large Vision-Language Models](https://aclanthology.org/2025.emnlp-main.176.pdf)
