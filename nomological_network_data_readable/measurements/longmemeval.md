# LongMemEval
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Definitions treat LongMemEval as a long-term, multi-session conversation dataset used to evaluate response generation and memory utilization. Across other papers, it is more often framed as a chat-form benchmark for chat assistants' long-term or long-context memory, described either as a comprehensive benchmark for five core abilities, information extraction, multi-session reasoning, temporal reasoning, knowledge updates, and abstention, or as a challenging benchmark spanning six memory tasks. These descriptions agree on its use for memory-focused evaluation, while differing on whether it is called a dataset or a benchmark and on the stated task count.

**What it is claimed to measure.** Measurement claims span 5 constructs and 3 behavioral indicators. The most recurring construct links say it measures multi-session reasoning and temporal reasoning; papers also use it to measure length generalization, memory, and multi-hop reasoning. On the behavioral side, it is reported as evaluating information extraction, knowledge editing, and abstention.

**Space of uses.** No other measurement instrument is directly linked to it. Papers position it as an adopted benchmark for assessing long-context memory and extrapolation ability, and one paper uses it alongside CLIPPER as one of two long-context, multi-hop reasoning tasks. Elsewhere, it is described as a benchmark for evaluating chat assistants' long-context memory ability across multiple memory tasks.

## Sources

**[Flexibly Utilize Memory for Long-Term Conversation via a Fragment-then-Compose Framework](https://aclanthology.org/2025.emnlp-main.1069.pdf)**
> A long-term multi-session conversation dataset used to evaluate response generation and memory utilization.

## Relationships

### → LongMemEval
- **Multi-session reasoning** (constructs) — *measured_by*
  > We introduce LONGMEMEVAL, a comprehensive benchmark designed to evaluate five core long-term memory abilities of chat assistants: information extraction, multi-session reasoning, temporal reasoning, knowledge updates, and abstention. (Abstract)
  - [LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/d813d324dbf0598bbdc9c8e79740ed01-Paper-Conference.pdf)
- **Temporal reasoning** (constructs) — *measured_by*
  > We introduce LONGMEMEVAL, a comprehensive benchmark designed to evaluate five core long-term memory abilities of chat assistants: information extraction, multi-session reasoning, temporal reasoning, knowledge updates, and abstention. (Abstract)
  - [LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/d813d324dbf0598bbdc9c8e79740ed01-Paper-Conference.pdf)
- **Information extraction** (behaviors tasks) — *measured_by*
  > We introduce LONGMEMEVAL, a comprehensive benchmark designed to evaluate five core long-term memory abilities of chat assistants: information extraction, multi-session reasoning, temporal reasoning, knowledge updates, and abstention. (Abstract)
  - [LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/d813d324dbf0598bbdc9c8e79740ed01-Paper-Conference.pdf)
- **Abstention** (behaviors tasks) — *measured_by*
  > We introduce LONGMEMEVAL, a comprehensive benchmark designed to evaluate five core long-term memory abilities of chat assistants: information extraction, multi-session reasoning, temporal reasoning, knowledge updates, and abstention. (Abstract)
  - [LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/d813d324dbf0598bbdc9c8e79740ed01-Paper-Conference.pdf)
- **Memory** (constructs) — *measured_by*
  > LONGMEMEVAL was a challenging benchmark designed to evaluate the long-context memory ability of chat assistants across six memory tasks... (Section 4.1)
  - [Recall with Reasoning: Chain-of-Thought Distillation for Mamba's Long-Context Memory and Extrapolation](https://aclanthology.org/2025.emnlp-main.235.pdf)
- **Length generalization** (constructs) — *measured_by*
  > To assess long-context memory and extrapolation ability, two benchmarks are adopted: a chat-form benchmark LONGMEMEVAL... (Section 1)
  - [Recall with Reasoning: Chain-of-Thought Distillation for Mamba's Long-Context Memory and Extrapolation](https://aclanthology.org/2025.emnlp-main.235.pdf)
- **Multi-hop reasoning** (constructs) — *measured_by*
  > We evaluate QRRETRIEVER on two long-context, multi-hop reasoning tasks: LongMemEval (Wu et al., 2025a) and CLIPPER (Pham et al., 2025). (Section 1)
  - [Query-Focused Retrieval Heads Improve Long-Context Reasoning and Re-ranking](https://aclanthology.org/2025.emnlp-main.1214.pdf)
- **Long-term memory** (constructs) — *measured_by*
  > “LONGMEMEVAL ... was a challenging benchmark designed to evaluate the long-context memory ability of chat assistants across six memory tasks, including ... knowledge update (KU) ...”
  - [Recall with Reasoning: Chain-of-Thought Distillation for Mamba's Long-Context Memory and Extrapolation](https://aclanthology.org/2025.emnlp-main.235.pdf)
