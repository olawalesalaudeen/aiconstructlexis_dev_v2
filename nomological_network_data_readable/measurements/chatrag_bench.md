# ChatRAG-Bench
**Type:** Measurement  
**Referenced in:** 3 papers  
**Also known as:** CHATRAG BENCH  

## State of the Field

**What it is.** Across the papers, the prevailing usage treats ChatRAG-Bench as a benchmark for retrieval-augmented generation and conversational question answering. Definitions differ on the task framing: some describe short-context evaluation within a 4K token window, including "nine short context (within 4K) tasks," while others describe multi-turn question answering with retrieved text chunks; another paper-level description presents it as a benchmark for evaluating RAG and conversational question answering capabilities of LLMs.

**What it is claimed to measure.** Papers link it to one behavioral indicator, conversational question answering, and to no constructs. The recorded measurement claim uses ChatRAG-Bench to measure conversational question answering, with one paper describing it as "the RAG benchmark for conversational QA tasks within a 4K context window," so the reported measurement use is focused on that single behavioral target rather than spread across multiple constructs or indicators.

**Space of uses.** Papers use it as an evaluation benchmark for conversational QA and short-context RAG settings. One paper states, "We use ChatRAG Bench (Liu et al., 2024) as our benchmark for short context within 4k," while another reports evaluation on conversational QA tasks and comparisons of sequential encoding with three retrievers on ChatRAG-Bench; no other measurement instrument is linked to it.

## Sources

**[ChatQA 2: Bridging the Gap to Proprietary LLMs in Long Context and RAG Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7b562dac391e9c7af691e8ef886ad10-Paper-Conference.pdf) (as "CHATRAG BENCH")**
> A benchmark for evaluating conversational question answering and retrieval-augmented generation performance on short context tasks within a 4K token window.

**[APE: Faster and Longer Context-Augmented Generation via Adaptive Parallel Encoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/ce186a37e63b37638ecd06dee6b9a355-Paper-Conference.pdf)**
> A benchmark for conversational retrieval-augmented generation evaluated on multi-turn question answering with retrieved text chunks.

## Relationships

### → ChatRAG-Bench
- **Conversational question answering** (behaviors tasks) — *measured_by*
  > the RAG benchmark for conversational QA tasks within a 4K context window. (Section 1)
  - [ChatQA 2: Bridging the Gap to Proprietary LLMs in Long Context and RAG Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7b562dac391e9c7af691e8ef886ad10-Paper-Conference.pdf)
