# Long-context reasoning
**Type:** Construct  
**Referenced in:** 28 papers  
**Also known as:** Long context reasoning, Long-range reasoning, Long-context problem solving, Long-context inference, Context reasoning  

## State of the Field

**Definition agreement:** Consensus. Most papers define long-context reasoning as a model's ability to process, integrate, and reason over information distributed across extended input sequences, such as long texts, conversations, workflows, or other long inputs, including capturing distant dependencies and drawing coherent inferences. A few papers emphasize maintaining performance or coherence as context length grows, but this is still the same core property rather than a different phenomenon.

**Space of definitions.** Across papers, the prevailing usage treats this construct as a latent model ability to process, integrate, and reason over information distributed across long or extended inputs, often emphasizing distant dependencies, use of non-local context, and coherent responses. Most definitions stay close to this framing, describing effective processing of extended text, long sequences, or long textual contexts. A smaller line narrows the scope to particular settings, such as extended conversation histories and long queries, very long HTML or workflow demonstrations, or claim verification over book-length texts. Another minority framing shifts from latent ability to output robustness, defining long-context inference as maintaining stable outputs as input length increases.

**Space of facets.** Papers more often introduce adjacent labels than a detailed subtype breakdown. "Long-context reasoning," "long-range reasoning," and "context reasoning" are used for closely related notions of modeling dependencies between distant elements and drawing inferences from long contexts, while some descriptions add facets such as logical consistency across extended steps, coherence over long conversational histories, and reasoning that goes beyond only local context. A smaller strand uses narrower names for task-bound variants, with "long-context problem solving" centered on extended histories and long queries, and "long-context inference" centered on stable generation as context length grows; one paper also relates the construct to multi-hop reasoning across chunks.

**Space of measurement.** Papers operationalize it through benchmark-style instruments: 14 measurement instruments are linked to it, most often BABILong, InfiniteBench, RULER, 2WikiMultiHopQA, and FLenQA. These evaluations make the construct concrete as reasoning across facts distributed in extremely long documents, handling complex tasks in long contexts, long document reasoning, and long-context multi-hop question answering, with the remaining instruments covering settings such as synthesizing information over long texts and dense scientific or financial documents. The construct is also linked to 2 behavioral indicators, but through causal claims rather than direct measurement; overall, these operationalizations mostly match the dominant definition of reasoning over information spread across long inputs, while some narrow it to particular domains or interaction formats.

**Links.** No correlational claims are recorded. One paper claims a causal relationship from Key-value retrieval to long-context reasoning, reporting that finetuning on synthetic key-value retrieval improves long-context reasoning, and another claims a causal relationship from Positional bias to long-context reasoning by describing positional bias as an obstacle in long-context reasoning. In the other direction, one paper claims a causal relationship from long-context reasoning to Hallucination, stating that challenges in long-range multi-step reasoning contribute to hallucination, and separate papers relate the construct to Multi-hop reasoning and to Coherence.

## Sources

**[In-Context Pretraining: Language Modeling Beyond Document Boundaries](https://proceedings.iclr.cc/paper_files/paper/2024/file/a1fe2365abdb691332537990a6385909-Paper-Conference.pdf) (as "Long context reasoning")**
> The ability to synthesize and reason over information distributed across extended input sequences, integrating distant pieces of information to form coherent responses.

**[Found in the Middle: How Language Models Use Long Contexts Better via Plug-and-Play Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ffdbbe354893979367f93e2121e37dd-Paper-Conference.pdf)**
> The cognitive ability of a language model to effectively process, understand, and utilize information presented over extended sequences of text.

**[Theoretical Foundations of Deep Selective State-Space Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/e6231c5f46598cfd09ff1970524e0436-Paper-Conference.pdf) (as "Long-range reasoning")**
> The ability to model and reason over long sequences of information, capturing dependencies between distant elements.

**[WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf) (as "Long-context problem solving")**
> The ability to handle extended conversation histories and long queries when generating useful responses.

**[ReAttention: Training-Free Infinite Context with Finite Attention Scope](https://proceedings.iclr.cc/paper_files/paper/2025/file/ee1f0da706829d7f198eac0edaacc338-Paper-Conference.pdf) (as "Long-context inference")**
> Producing outputs while processing very long input contexts without failing as the context length grows.

**[Chain of Agents: Large Language Models Collaborating on Long-Context Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/ee71a4b14ec26710b39ee6be113d7750-Paper-Conference.pdf) (as "Context reasoning")**
> The latent ability of a model to understand and draw inferences from information distributed across a long textual context.

## Relationships

### Long-context reasoning →
- **BABILong** (measurements) — *measured_by*
  > To bridge this gap, we introduce the BABILong benchmark, designed to test language models’ ability to reason across facts distributed in extremely long documents.
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **RULER** (measurements) — *measured_by*
  > The latter two [BABILong and RULER] require models to not only retireve multiple pieces of evidence from the long context, but also reason over them... (Section 4.1)
  - [A Little Goes a Long Way: Efficient Long Context Training and Inference with Partial Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/127a649ea9ae2df15e903a91352cfd3a-Paper-Conference.pdf)
- **InfiniteBench** (measurements) — *measured_by*
  > Long document reasoning performance (%) on Longbench and InfiniteBench (Table 1)
  - [ToM: Leveraging Tree-oriented MapReduce for Long-Context Reasoning in Large Language Models](https://aclanthology.org/2025.emnlp-main.899.pdf)
- **SCROLLS** (measurements) — *measured_by*
  > To evaluate the ability of long context reasoning, we compare ICLM with the standard and kNN baselines on the SCROLL benchmark (Shaham et al., 2022) that evaluates LMs’ ability to synthesize information over long texts. (Section 3.3.6)
  - [In-Context Pretraining: Language Modeling Beyond Document Boundaries](https://proceedings.iclr.cc/paper_files/paper/2024/file/a1fe2365abdb691332537990a6385909-Paper-Conference.pdf)
- **ZeroSCROLLS** (measurements) — *measured_by*
  > To comprehensively evaluate the long-context reasoning abilities of LLMs, we choose seven tasks from ZeroSCROLLS [34]
  - [Found in the Middle: How Language Models Use Long Contexts Better via Plug-and-Play Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ffdbbe354893979367f93e2121e37dd-Paper-Conference.pdf)
- **WildBench** (measurements) — *measured_by*
  > Thanks to these realistic user activities, WILDBENCH is a more suitable benchmark for testing the long-context problem solving abilities of LLMs. (Section 2.2)
  - [WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > This trend underscores that larger graph sizes, and their associated challenges in long-range multi-step reasoning, are major contributors to hallucination.
  - [GraphArena: Evaluating and Exploring Large Language Models on Graph Computation](https://proceedings.iclr.cc/paper_files/paper/2025/file/77fa8253adfc8b33209639f3e9985741-Paper-Conference.pdf)
- **FLenQA** (measurements) — *measured_by*
  > FLenQA benchmark (Levy et al., 2024) that measures LLMs’ long-context reasoning capability. (Section 1)
  - [From Artificial Needles to Real Haystacks: Improving Retrieval Capabilities in LLMs by Finetuning on Synthetic Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/15a321fbfc19fce9b325ec6e77dfb597-Paper-Conference.pdf)
- **LongBench v2** (measurements) — *measured_by*
  > For long-context reasoning on LongBench v2 (R2 = 70.26%), d_ffn overwhelmingly dominates, indicating that wider FFNs are essential for handling extended contexts effectively.
  - [From Parameters to Performance: A Data-Driven Study on LLM Structure and Development](https://aclanthology.org/2025.emnlp-main.1325.pdf)
- **LongBench** (measurements) — *measured_by*
  > Long document reasoning performance (%) on Longbench and InfiniteBench (Table 1)
  - [ToM: Leveraging Tree-oriented MapReduce for Long-Context Reasoning in Large Language Models](https://aclanthology.org/2025.emnlp-main.899.pdf)
- **HotpotQA** (measurements) — *measured_by*
  > The evaluation is performed on three long-context multi-hop reasoning datasets: Hotpot QA (Yang et al., 2018), MusiQue (Trivedi et al., 2022) and 2WikiMultiHopQA (Ho et al., 2020). (Section 5.1)
  - [POSITION BIAS MITIGATES POSITION BIAS: Mitigate Position Bias Through Inter-Position Knowledge Distillation](https://aclanthology.org/2025.emnlp-main.78.pdf)
- **MuSiQue** (measurements) — *measured_by*
  > The evaluation is performed on three long-context multi-hop reasoning datasets: Hotpot QA (Yang et al., 2018), MusiQue (Trivedi et al., 2022) and 2WikiMultiHopQA (Ho et al., 2020). (Section 5.1)
  - [POSITION BIAS MITIGATES POSITION BIAS: Mitigate Position Bias Through Inter-Position Knowledge Distillation](https://aclanthology.org/2025.emnlp-main.78.pdf)
- **2WikiMultiHopQA** (measurements) — *measured_by*
  > The evaluation is performed on three long-context multi-hop reasoning datasets: Hotpot QA (Yang et al., 2018), MusiQue (Trivedi et al., 2022) and 2WikiMultiHopQA (Ho et al., 2020). (Section 5.1)
  - [POSITION BIAS MITIGATES POSITION BIAS: Mitigate Position Bias Through Inter-Position Knowledge Distillation](https://aclanthology.org/2025.emnlp-main.78.pdf)

### → Long-context reasoning
- **Key-value retrieval** (behaviors tasks) — *causes*
  > Finetuning LLMs on synthetic key-value retrieval tasks improves LLMs’ long-context reasoning capabilities, even if explicit chain-of-thought reasoning is not allowed. (Finding 3)
  - [From Artificial Needles to Real Haystacks: Improving Retrieval Capabilities in LLMs by Finetuning on Synthetic Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/15a321fbfc19fce9b325ec6e77dfb597-Paper-Conference.pdf)
- **Positional bias** (constructs) — *causes*
  > PB poses significant obstacles in information-rich settings, such as retrieval-augmented generation (Fang et al., 2025; Dong et al., 2025b), long-context reasoning (Li et al., 2024a; Kuratov et al., 2024), and LLM-as-a-judge (Wang et al., 2024b; Li et al., 2024c). (Section 1)
  - [POSITION BIAS MITIGATES POSITION BIAS: Mitigate Position Bias Through Inter-Position Knowledge Distillation](https://aclanthology.org/2025.emnlp-main.78.pdf)
