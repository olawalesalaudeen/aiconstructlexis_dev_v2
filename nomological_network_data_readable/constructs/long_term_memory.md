# Long-term memory
**Type:** Construct  
**Referenced in:** 8 papers  
**Also known as:** Long-term memory retention  

## State of the Field

**Definition agreement:** Consensus. Most papers define long-term memory as the ability of a model or dialogue system to retain, recall, and use relevant information across extended interactions, sequences, or multi-step tasks so behavior remains consistent and coherent. One paper states this more broadly as storing and retrieving information over extended periods with an interconnected knowledge structure, but it names the same core capacity rather than a different phenomenon.

**Space of definitions.** Across papers, the prevailing usage treats long-term memory as a model's ability to retain, recall, store, and use relevant information over extended periods, interactions, or multi-step tasks. Most definitions differ mainly by setting, such as financial tasks, dialogue, or multi-session coding, and by whether they stress using retained information for consistency and coherent reasoning or recalling it despite intervening irrelevant content. A smaller variation adds that this memory has a dynamic and interconnected knowledge structure, but it still centers on storing and retrieving information over time.

**Space of facets.** Papers only lightly systematize the construct. One paper uses the near-variant name "long-term memory retention" for the ability to retain and recall relevant information from prior interactions, while another treats information extraction as one of several core long-term memory abilities. Some descriptions also contrast long-term memory with vector retrieval, stating that vector retrieval does not mimic the "dynamic and interconnected nature" associated with human long-term memory.

**Space of measurement.** No measurement instrument is linked to long-term memory. Instead, papers operationalize it through performance on extended or multi-step tasks, long dialogue histories, and multi-session interactions: retained information is used to maintain consistency, connect distant parts of a text, reason over a sequence of instructions, and retrieve relevant pieces of prior input. It is linked to two behavioral indicators, information extraction and information retrieval, and to two constructs, knowledge integration and long-horizon planning, but these appear as related or causal links rather than direct measures.

**Links.** Papers report only a few explicit links. One paper claims a causal relationship from long-term memory to knowledge integration, and another claims a causal relationship from long-term memory to information retrieval. In the opposite direction, one paper claims a causal relationship from long-horizon planning to long-term memory, and one paper says information extraction is related to long-term memory, specifically as a core long-term memory ability.

## Sources

**[FinEval: A Chinese Financial Domain Knowledge Evaluation Benchmark for Large Language Models](https://aclanthology.org/2025.naacl-long.318.pdf)**
> The capacity to retain and utilize relevant information across extended or multi-step financial tasks, supporting coherent and contextually consistent reasoning.

**[From Tools to Teammates: Evaluating LLMs in Multi-Session Coding Interactions](https://aclanthology.org/2025.acl-long.964.pdf) (as "Long-term memory retention")**
> The latent ability of an LLM to retain and recall relevant information from prior interactions over extended sequences of dialogue, despite intervening irrelevant content.

## Relationships

### Long-term memory →
- **Knowledge integration** (constructs) — *causes*
  > HippoRAG, a novel retrieval framework inspired by the hippocampal indexing theory of human long-term memory to enable deeper and more efficient knowledge integration over new experiences. (Abstract)
  - [HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ddc001d07ca4f319af96a3024f6dbd1-Paper-Conference.pdf)
- **LongMemEval** (measurements) — *measured_by*
  > “LONGMEMEVAL ... was a challenging benchmark designed to evaluate the long-context memory ability of chat assistants across six memory tasks, including ... knowledge update (KU) ...”
  - [Recall with Reasoning: Chain-of-Thought Distillation for Mamba's Long-Context Memory and Extrapolation](https://aclanthology.org/2025.emnlp-main.235.pdf)

### Associated with
- **Information extraction** (behaviors tasks)
  > To comprehensively reflect the challenge, LONGMEMEVAL formulates five core long-term memory abilities: • Information Extraction (IE): Ability to recall specific information from extensive interactive histories... (Section 3.2)
  - [LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/d813d324dbf0598bbdc9c8e79740ed01-Paper-Conference.pdf)
- **Long-horizon planning** (constructs)
  > “long-horizontal reasoning due to the partial observability of complex GCC tasks, which also leads to the demand for long-term memory to maintain past useful experiences”
  - [Cradle: Empowering Foundation Agents towards General Computer Control](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25h/tan25h.pdf)
