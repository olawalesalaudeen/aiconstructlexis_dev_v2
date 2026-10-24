# API-Bank
**Type:** Measurement  
**Referenced in:** 11 papers  

## State of the Field

**What it is.** Across papers, API-Bank is most commonly treated as a benchmark or dialogue-style dataset for evaluating tool calls by LLMs in conversational or tool-augmented settings. Definitions vary in scope: some emphasize single- and multi-turn scenarios, one describes calling predefined local Python tools from user requirements, and others frame it as evaluating planning, retrieval, and API calling. Several papers distinguish two retrieval-call variants, either Call versus Retrieve + Call or L-1, invoking a known API, versus L-2, retrieving and calling from multiple candidates; reported contents also differ, from 314 tool-use dialogues and 753 API calls to 2,138 distinct APIs, 1,888 dialogues, and 4,149 API calls, with another description emphasizing general-purpose tools across 1,000 domains.

**What it is claimed to measure.** Papers link API-Bank to one behavioral indicator and two constructs. The prevailing usage is to measure Tool use and Tool use ability: papers describe it as evaluating tool use, tool-utilization capabilities, or tool-calling capability, including planning, retrieval, and API-calling proficiency. A smaller line of work uses it to measure Generalization, specifically as an OOD tool-use benchmark for testing generality.

**Space of uses.** Papers often use API-Bank alongside other benchmarks, including BFCL, MultiWOZ 2.4, ToolBench, APIBench, and ToolTalk. In these benchmark suites, it is positioned as one of several evaluations for language agents, as an OOD check, as one of the datasets used to validate tool-calling or retrieval performance, and as a benchmark whose loss is monitored during pre-training to track agent capabilities. One study also states that its instances are adapted to tool selection.

## Sources

**[MTU-Bench: A Multi-granularity Tool-Use Benchmark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4d13b2d99519c5415661dad44ab7edcd-Paper-Conference.pdf)**
> A benchmark for evaluating the ability of LLMs to make tool calls, covering single- and multi-turn scenarios.

## Relationships

### → API-Bank
- **Tool use** (behaviors tasks) — *measured_by*
  > In particular, when looking at the tool use evaluation sets (BFCL and API Bank), it is evident that the ability to use tools can be acquired effectively by adding ∆Θ to the base model...
  - [Param$\Delta$ for Direct Mixing: Post-Train Large Language Model At Zero Cost](https://proceedings.iclr.cc/paper_files/paper/2025/file/78bca5cc621a0846cb1f8265e1927a2a-Paper-Conference.pdf)
- **Tool use ability** (constructs) — *measured_by*
  > API-Bank (Li et al., 2023) provides a comprehensive dataset featuring 2,138 distinct APIs and 1,888 dialogues with 4,149 API calls. This dataset is designed to evaluate LLMs’ tool-utilization capabilities, including planning, retrieval, and API-calling proficiency. (Section 2)
  - [Robust Function-Calling for On-Device Language Model via Function Masking](https://proceedings.iclr.cc/paper_files/paper/2025/file/d45e0bfb5a39477d56b55c0824200008-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > To evaluate the generality of MTU-LLaMA, we measure its performance on the OOD test split of MTU-Bench and two other OOD tool-use benchmarks, i.e., API-Bank (Li et al., 2023) and ToolTalk (Farn & Shin, 2023). (Section 3.2)
  - [MTU-Bench: A Multi-granularity Tool-Use Benchmark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4d13b2d99519c5415661dad44ab7edcd-Paper-Conference.pdf)
