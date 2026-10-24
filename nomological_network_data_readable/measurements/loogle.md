# LooGLE
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Across the surveyed work, the prevailing usage treats LooGLE as a benchmark or workload for long-context evaluation. Definitions describe it as evaluating long document question answering with prompts containing extensive text from which answers must be derived, and more broadly as evaluating long-context understanding through extremely long documents, diverse domains, short- and long-dependency tasks, and long-range dependencies over the full sequence. Papers differ slightly in emphasis, with some foregrounding long document QA and others framing it as a broader long-context benchmark; the descriptions also note documents with over 24,000 tokens and data primarily around 32,000 tokens.

**What it is claimed to measure.** Papers use LooGLE to measure long-context understanding, and this is the only linked construct. It is linked to 1 construct, long-context understanding, while no behavioral indicators are linked. The claims converge on this single construct rather than spreading across multiple constructs.

**Space of uses.** Papers position LooGLE both as a standalone workload and as part of broader evaluation suites. Some descriptions treat it as one workload among others, for example alongside Toolbench, embodied agent, and video QA in comparative system evaluations, while other papers pair it with LongBench and L-eval as multitask benchmarks for a comprehensive evaluation of long-context understanding. No measurement instrument is linked to it through recorded relationships.

## Sources

**[Preble: Efficient Distributed Prompt Scheduling for LLM Serving](https://proceedings.iclr.cc/paper_files/paper/2025/file/5bc342f48de8264779952fac378f96dc-Paper-Conference.pdf)**
> A workload for evaluating long document question answering, featuring prompts containing extensive text from which answers must be derived.

## Relationships

### → LooGLE
- **Long-context understanding** (constructs) — *measured_by*
  > The evaluation is based on two benchmarks for long-context understanding: LongBench (Bai et al., 2024) and LooGLE (Li et al., 2024b).
  - [Not All Heads Matter: A Head-Level KV Cache Compression Method with Integrated Retrieval and Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f649556471416b35e60ae0de7c1e3619-Paper-Conference.pdf)
