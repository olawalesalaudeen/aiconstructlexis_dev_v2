# Context retrieval
**Type:** Behavior  
**Referenced in:** 28 papers  
**Also known as:** In-context retrieval, Fact retrieval, Retrieval capability, Retrieval ability, Semantic retrieval capability  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats this behavior as locating, extracting, and then using relevant information from a long context to answer a query or continue from the input. Most definitions focus on recovering specific items or segments, such as a target fact, a single needle among many, random numbers assigned in context, or the indices of relevant paragraphs. Some papers broaden the task to complex queries that require retrieving multiple relevant pieces before synthesis, while a smaller line of work narrows it to fact retrieval from a knowledge base or to producing the object of a factual triplet from a subject-relation prompt.

**Variants.** Papers study several variants under names such as context retrieval, in-context retrieval, fact retrieval, retrieval capability or ability, and semantic retrieval capability. The most common settings are long-context text tasks, including needle-in-a-haystack and passkey-style retrieval, but some papers place the behavior in locating relevant documents within long-context inputs, knowledge-base fact retrieval, and symbolic search over facts and rules that might prove a goal. A smaller line of work relates it to Key-value retrieval through associative recall, and another explicitly semantic variant requires understanding the query meaning rather than relying on exact string matches, for example when retrieving a function from textual descriptions or answering questions from long documents.

**Space of elicitation and scores.** Papers measure this behavior with 6 instruments, mostly benchmark suites or retrieval-style tests for long contexts. The named instruments are InfiniteBench, HotpotQA, MMLU, Needle-in-a-Haystack, and Passkey retrieval, plus 1 other instrument. Their operationalizations differ: InfiniteBench is described as covering context retrieval, Needle-in-a-Haystack is used to assess long-context retrieval ability, Passkey retrieval reveals retrieval capabilities, HotpotQA is used for tasks said to require stronger in-context retrieval, and one paper frames MMLU as multiple-choice questions over lengthy contexts.

**What it is taken as evidence of.** Construct links are sparse. Only 1 construct is linked, Expressive power, and one paper claims a causal relationship from context retrieval to that construct, stating that enhancing in-context retrieval can improve representation power. Beyond that single causal claim, papers do not converge on a broader construct that this behavior is taken to indicate.

## Sources

**[Self-Taught Agentic Long Context Understanding](https://aclanthology.org/2025.acl-long.275.pdf)**
> The action of identifying and extracting relevant segments of information from a larger body of text to address a specific query or task.

**[Gated Delta Networks: Improving Mamba2 with Delta Rule](https://proceedings.iclr.cc/paper_files/paper/2025/file/4904fad153f6434a7bcf04465d4be2cc-Paper-Conference.pdf) (as "In-context retrieval")**
> The ability to locate and use specific information provided within a long context.

**[World Model on Million-Length Video And Language With Blockwise RingAttention](https://proceedings.iclr.cc/paper_files/paper/2025/file/71859ac75d53879d9bbd2f4b77b59929-Paper-Conference.pdf) (as "Fact retrieval")**
> Recovering a specific target fact or item from a long context when prompted.

**[Scaling Stick-Breaking Attention: An Efficient Implementation and In-depth Study](https://proceedings.iclr.cc/paper_files/paper/2025/file/0b9a261b9aca858b7e6ee44d8b2055be-Paper-Conference.pdf) (as "Retrieval capability")**
> The ability to locate and use relevant information from long contexts when answering or continuing from the input.

**[Not All Heads Matter: A Head-Level KV Cache Compression Method with Integrated Retrieval and Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f649556471416b35e60ae0de7c1e3619-Paper-Conference.pdf) (as "Retrieval ability")**
> The latent capacity to locate and recover relevant information from long contexts when answering a query.

**[SCBench: A KV Cache-Centric Analysis of Long-Context Methods](https://proceedings.iclr.cc/paper_files/paper/2025/file/a540b17fb2295c736d5afd6c507acf66-Paper-Conference.pdf) (as "Semantic retrieval capability")**
> The ability of a long-context model to understand the semantic meaning of a query to retrieve relevant information, rather than relying on exact string matches.

## Relationships

### Context retrieval →
- **Needle-in-a-Haystack** (measurements) — *measured_by*
  > We conduct the Needle-in-a-Haystack test to assess the long-context retrieval ability of different KV cache compression methods.
  - [Not All Heads Matter: A Head-Level KV Cache Compression Method with Integrated Retrieval and Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f649556471416b35e60ae0de7c1e3619-Paper-Conference.pdf)
- **InfiniteBench** (measurements) — *measured_by*
  > "The datasets in ∞-Bench cover diverse tasks including question answering, summarization, context retrieval, and mathematic computing."
  - [InfLLM: Training-Free Long-Context Extrapolation for LLMs with an Efficient Context Memory](https://proceedings.neurips.cc/paper_files/paper/2024/file/d842425e4bf79ba039352da0f658a906-Paper-Conference.pdf)
- **Passkey retrieval** (measurements) — *measured_by*
  > Additionally, evaluations on the passkey retrieval task [33, 29] reveal that SSA substantially enhances the retrieval capabilities of the transformer, shown in Table 4.
  - [Selective Attention: Enhancing Transformer through Principled Context Control](https://proceedings.neurips.cc/paper_files/paper/2024/file/14fc4a68da97a3d31eb11c642b0b10fc-Paper-Conference.pdf)
- **Expressive power** (constructs) — *causes*
  > Our positive results showing that enhancing in-context retrieval can improve RNNs’ representation power hold for vanilla Linear RNNs, and can be easily extended to more complex architectures. (Section 1)
  - [RNNs are not Transformers (Yet):  The Key Bottleneck on In-Context Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/79dc391a2c1067e9ac2b764e31a60377-Paper-Conference.pdf)
- **HotpotQA** (measurements) — *measured_by*
  > We further conduct experiments on open-source LLMs based on Transformer, Mambda, and a hybrid architecture to show that for tasks that require stronger in-context retrieval capability, RNNs suffer more performance degradation compared to Transformers. ... To test our theory, we use the Hotpot-QA (Yang et al., 2018) dataset. (Section 6.2)
  - [RNNs are not Transformers (Yet):  The Key Bottleneck on In-Context Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/79dc391a2c1067e9ac2b764e31a60377-Paper-Conference.pdf)
- **RULER** (measurements) — *measured_by*
  > Notably, APB significantly enhances performance in complex context retrieval tasks, such as R.KV in ∞Bench and MK3 in RULER.
  - [APB: Accelerating Distributed Long-Context Inference by Passing Compressed Context Blocks across GPUs](https://aclanthology.org/2025.acl-long.525.pdf)
- **Chain of thought** (behaviors tasks) — *causes*
  > CoT reasoning, which involves decomposing complex tasks into smaller steps, heavily depends on accurately retrieving detailed information from the input. (Section 4.3)
  - [Retrieval Head Mechanistically Explains Long-Context Factuality](https://proceedings.iclr.cc/paper_files/paper/2025/file/9b77f07301b1ef1fe810aae96c12cb7b-Paper-Conference.pdf)

### Associated with
- **Key-value retrieval** (behaviors tasks)
  > RNNs with CoT cannot solve a set of fundamental algorithmic problems that directly ask for in-context retrieval, including associative recall. (Section 1)
  - [RNNs are not Transformers (Yet):  The Key Bottleneck on In-Context Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/79dc391a2c1067e9ac2b764e31a60377-Paper-Conference.pdf)
- **MMLU** (measurements)
  > we find that MMLU performance is primarily governed by retrieval ability (Section 7).
  - [Understanding the Skill Gap in Recurrent Language Models: The Role of the Gather-and-Aggregate Mechanism](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bick25a/bick25a.pdf)
