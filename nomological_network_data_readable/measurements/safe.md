# SAFE
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Across the definitions, SAFE is most commonly described as an LLM-based, search-augmented evaluator or investigative agent. Papers describe it as using iterative Google Search queries to assess whether generated facts are supported by external evidence, and one definition adds that it breaks a long-form response into individual facts, checks relevance, searches the web, and labels each fact as supported, not supported, or irrelevant. The descriptions differ mainly in emphasis, with one centering the investigative-agent framing and another the stepwise evaluation procedure.

**What it is claimed to measure.** Papers link SAFE to one construct, Reasoning, and three behavioral indicators, Fact checking, Hallucination, and Search query generation. Among these links, the measurement claim is specifically about hallucination: one paper says hallucination is measured by SAFE and describes SAFE as enabling direct measurement of hallucination alongside FActScore. The other links are framed as causal relationships, with papers claiming causal links from SAFE to search query generation and fact checking, and from Reasoning to SAFE.

**Space of uses.** Papers use SAFE as an evaluation procedure for generated responses by decomposing responses into facts and checking those facts against Google Search results. One paper pairs it with FActScore as one of two public metrics for quantifying LLM hallucinations. No other measurement instrument is directly linked to SAFE.

**Concerns raised.** One paper notes that SAFE depends on the capabilities of the LLM used inside it: because SAFE relies on LLMs to function, the used LLM's capabilities, especially instruction following and reasoning, directly affect SAFE's quality.

## Sources

**[Can Knowledge Graphs Make Large Language Models More Trustworthy? An Empirical Study Over Open-ended Question Answering](https://aclanthology.org/2025.acl-long.622.pdf)**
> Language model-based investigative agent that uses iterative Google Search queries to assess whether generated facts are supported by external evidence.

## Relationships

### → SAFE
- **Hallucination** (behaviors tasks) — *measured_by*
  > it enables direct measurement of hallucination using metrics such as FActScore (Min et al., 2023) and SAFE (Wei et al., 2024) (Section 1)
  - [Can Knowledge Graphs Make Large Language Models More Trustworthy? An Empirical Study Over Open-ended Question Answering](https://aclanthology.org/2025.acl-long.622.pdf)

### Associated with
- **Search query generation** (behaviors tasks)
  > SAFE utilizes an LLM to... comprising sending search queries to Google Search...
  - [Long-form factuality in large language models](https://proceedings.neurips.cc/paper_files/paper/2024/file/937ae0e83eb08d2cb8627fe1def8c751-Paper-Conference.pdf)
- **Fact checking** (behaviors tasks)
  > ...and determining whether a fact is supported by the search results.
  - [Long-form factuality in large language models](https://proceedings.neurips.cc/paper_files/paper/2024/file/937ae0e83eb08d2cb8627fe1def8c751-Paper-Conference.pdf)
