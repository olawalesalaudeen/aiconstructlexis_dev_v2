# Memory
**Type:** Construct  
**Referenced in:** 16 papers  
**Also known as:** Memory capacity, Long-term context retention, Information retention, Long-context memory  

## State of the Field

**Definition agreement:** Consensus. Most papers define memory as a model or agent's ability to store, retain, and later access or recall information from earlier parts of a sequence, context, interaction history, or prior observations for current prediction or action. A few definitions narrow this to particular mechanisms or settings, and one definition shifts to retrieving factual knowledge from parameters, but the dominant usage is clearly the same core capacity of retaining and using prior information over time.

**Space of definitions.** Across the papers, the dominant framing treats memory as retaining, storing, and later accessing earlier information over long sequences, long contexts, or multi-step interactions. This usage appears under memory capacity, context retention, information retention, and long-context memory, and covers conversation history, earlier frames in video, prior actions, and recurrent or attention state; some papers describe memory failures as failing to retain full history or being unable to remember content across apps. A smaller line of work uses memory more narrowly for retrieving factual knowledge stored in model parameters, independent of reasoning, and one paper defines it as active retrieval and maintenance of information over short sequences. The main difference across definitions is whether memory refers to contextual history versus knowledge in parameters, and whether it is framed over long contexts or short sequences.

**Space of facets.** Papers subdivide the construct into nearby labels, including memory capacity, context retention, long-term context retention, information retention, and long-context memory, and several of these labels are used for much the same long-range store-and-access ability. At the same time, the same label, memory, is also used for distinct notions: long-range interaction history in agents, parametric memory as knowledge stored in the model’s parameters, and active short-sequence retrieval. Several papers explicitly contrast memory with reasoning, describing information retention as distinct from sequential reasoning and parametric memory as independent of logical inference, while agent-focused work further specializes it to observations, attempted actions, and spatial memory.

**Space of measurement.** Operationalization is narrow in the papers: memory is linked to 3 measurement instruments and no behavioral indicators. The named instruments are HELMET, LongMemEval, and TextWorld; LongMemEval is described as evaluating long-context memory across memory tasks, HELMET is adopted to assess long-context memory and extrapolation, and TextWorld is used in settings with tasks that require memory. These operationalizations largely track the prevailing long-context and multi-step retention framing, rather than the minority definitions centered on parametric knowledge retrieval or short-sequence active retrieval.

**Links.** Beyond measurement, papers connect memory to two other constructs. One paper reports that memory is correlated with long-context understanding, and another claims a causal relationship from reasoning to memory, stating that chain-of-thought thinking can improve recall of long-context memory. Papers do not report other causal, correlational, or related links for this construct.

## Sources

**[Gated Slot Attention for Efficient Linear-Time Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3f39e51f5f634fb16cc3e658f8512b9-Paper-Conference.pdf) (as "Memory capacity")**
> The latent ability of a model to store and access information over a sequence, which can be implicitly increased by architectural features.

**[AgentBoard: An Analytical Evaluation Board of Multi-turn LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/877b40688e330a0e2a3fc24084208dfa-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The capacity to incorporate and retain relevant long-range interaction history when selecting the next action.

**[Training Free Exponential Context Extension via Cascading KV Cache](https://proceedings.iclr.cc/paper_files/paper/2025/file/19a567abaec3990cb40d7a013556fecd-Paper-Conference.pdf) (as "Context retention")**
> The model's ability to maintain and access information from earlier parts of a long sequence for use in later predictions.

**[Streaming Video Question-Answering with In-context Video KV-Cache Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/67a9b444cbcd647572c88194619f72d5-Paper-Conference.pdf) (as "Long-term context retention")**
> The model's ability to preserve and access relevant information from earlier parts of a long video stream to answer questions posed later.

**[seqBench: A Tunable Benchmark to Quantify Sequential Reasoning Limits of LLMs](https://aclanthology.org/2025.emnlp-main.1714.pdf) (as "Information retention")**
> The capacity to store and access relevant facts within a long context, distinct from the ability to reason over them in sequence.

**[Recall with Reasoning: Chain-of-Thought Distillation for Mamba's Long-Context Memory and Extrapolation](https://aclanthology.org/2025.emnlp-main.235.pdf) (as "Long-context memory")**
> The ability of a model to effectively recall, process, and utilize information from very long input sequences.

## Relationships

### Memory →
- **TextWorld** (measurements) — *measured_by*
  > tasks requiring long-horizon memory and planning, exploration, and commonsense in TextWorld
  - [Intelligent Go-Explore: Standing on the Shoulders of Giant Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/369a30aac2765950865efd318cef7f76-Paper-Conference.pdf)
- **LongMemEval** (measurements) — *measured_by*
  > LONGMEMEVAL was a challenging benchmark designed to evaluate the long-context memory ability of chat assistants across six memory tasks... (Section 4.1)
  - [Recall with Reasoning: Chain-of-Thought Distillation for Mamba's Long-Context Memory and Extrapolation](https://aclanthology.org/2025.emnlp-main.235.pdf)
- **HELMET** (measurements) — *measured_by*
  > To assess long-context memory and extrapolation ability, two benchmarks are adopted: ... an application-centric benchmark HELMET (Yen et al., 2024). (Section 1)
  - [Recall with Reasoning: Chain-of-Thought Distillation for Mamba's Long-Context Memory and Extrapolation](https://aclanthology.org/2025.emnlp-main.235.pdf)

### → Memory
- **Chain-of-thought reasoning** (constructs) — *causes*
  > Mamba can effectively identify key information from long texts through CoT thinking, thus significantly improving its ability to recall long-context memory. (Section 1)
  - [Recall with Reasoning: Chain-of-Thought Distillation for Mamba's Long-Context Memory and Extrapolation](https://aclanthology.org/2025.emnlp-main.235.pdf)

### Associated with
- **Long-context understanding** (constructs)
  > Despite these improvements, the state sizes of RNNs remain much smaller than those of Transformers with a 2k context length, making state size a critical bottleneck for long-context understanding.
  - [Scaling up the State Size of RNN LLMs for Long-Context Scenarios](https://aclanthology.org/2025.acl-long.564.pdf)
