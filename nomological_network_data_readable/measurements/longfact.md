# LongFact
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across the surveyed papers, LongFact is most commonly treated as a benchmark for long-form factuality and fact-seeking long-form generation. Papers describe it differently: one definition presents it as a dataset with 250 prompts, while another presents it as a GPT-4-generated prompt set with 2,280 fact-seeking questions or prompts that solicit long-form responses across 38 manually selected topics in open domains.

**What it is claimed to measure.** Papers mainly use LongFact to measure behavioral indicators rather than constructs. It is linked to three behavioral indicators and no constructs; the direct measurement claims center on long-form text generation and hallucination, while instruction following appears in a separate causal claim about the quality of LongFact prompts rather than as something LongFact measures.

**Space of uses.** No measurement instrument is linked to it. Papers position LongFact as a benchmark for long-form factuality in open domains, and one study groups it with "four fact-seeking long-form generation datasets" (Improving Factuality with Explicit Working Memory).

**Concerns raised.** One paper raises a caution about how LongFact is produced: because LongFact relies on LLMs to function, the used LLM's capabilities, "especially instruction following and reasoning," are said to directly affect the quality of the generated LongFact prompts (Long-form factuality in large language models).

## Sources

**[Improving Factuality with Explicit Working Memory](https://aclanthology.org/2025.acl-long.548.pdf)**
> A dataset with 250 prompts designed to evaluate the factuality of models in long-form generation tasks.

## Relationships

### → LongFact
- **Long-form text generation** (behaviors tasks) — *measured_by*
  > “LongFact consists of 2,280 fact-seeking prompts that solicit long-form responses across 38 manually-selected topics.”
  - [Long-form factuality in large language models](https://proceedings.neurips.cc/paper_files/paper/2024/file/937ae0e83eb08d2cb8627fe1def8c751-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *measured_by*
  > hallucination on LongFact (Figure 1).
  - [Aligning Large Language Models to Follow Instructions and Hallucinate Less via Effective Data Filtering](https://aclanthology.org/2025.acl-long.804.pdf)
