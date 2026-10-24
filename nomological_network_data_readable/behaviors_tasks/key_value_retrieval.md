# Key-value retrieval
**Type:** Behavior  
**Referenced in:** 21 papers  
**Also known as:** Multi-subkey dictionary retrieval, Associative recall, In-context recall, Key-Value Retrieval task  

## State of the Field

**Space of definitions.** Across definitions, the prevailing usage is a retrieval task: given a context, long context, dictionary, or JSON object with many key-value pairs, the model must return the value for a queried or specified key. Papers often make the setup synthetic, with randomly generated key-value string pairs, a random dictionary, or Python-style pairs whose keys and values are UUID strings. Success is usually recovering the correct value for the queried key, and some authors explicitly present this as a test of context awareness or in-context retrieval.

**Variants.** A smaller line of work studies harder or renamed versions of the same behavior. One variant is multi-subkey dictionary retrieval, where keys are tuples of integers and the model must identify the tuple containing specified subkeys, then report the tuple, its value, and the dictionary it came from. Other papers use names such as associative recall, including multi-query associative recall where successive queries must recall earlier variable assignments, or in-context recall, where the model copies the token that followed a previous occurrence of a trigger token.

**Space of elicitation and scores.** Papers link this behavior to two measurement instruments, most often MQAR and also InfiniteBench. MQAR measures it by asking for the value associated with the corresponding key at query positions while ignoring non-query positions, and InfiniteBench includes key-value retrieval among its extended-context tasks.

**What it is taken as evidence of.** Papers connect it to four constructs, and the construct-level use is not limited to a single framing. The most direct uses are as something that measures in-context learning and context utilization, while another paper treats it as related to in-context reasoning. One paper also claims a causal relationship from key-value retrieval to long-context reasoning, stating that finetuning on synthetic key-value retrieval tasks improves long-context reasoning capabilities.

## Sources

**[Mixture of In-Context Experts Enhance LLMs' Long Context Awareness](https://proceedings.neurips.cc/paper_files/paper/2024/file/91315fbb83ce353ae5538cba395f70d1-Paper-Conference.pdf)**
> The task of extracting the correct value corresponding to a given key from a context containing multiple key-value pairs.

**[From Artificial Needles to Real Haystacks: Improving Retrieval Capabilities in LLMs by Finetuning on Synthetic Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/15a321fbfc19fce9b325ec6e77dfb597-Paper-Conference.pdf) (as "Multi-subkey dictionary retrieval")**
> Given dictionaries whose keys are tuples of integers, the model identifies the tuple containing specified subkeys and reports the tuple, its value, and its dictionary.

**[Scaling Stick-Breaking Attention: An Efficient Implementation and In-depth Study](https://proceedings.iclr.cc/paper_files/paper/2025/file/0b9a261b9aca858b7e6ee44d8b2055be-Paper-Conference.pdf) (as "Associative recall")**
> Retrieving the correct stored value for a queried variable from prior context.

**[Distributional Associations vs In-Context Reasoning: A Study of Feed-forward and Attention Layers](https://proceedings.iclr.cc/paper_files/paper/2025/file/533a89d7c2980218d82dbe3ea85f77ae-Paper-Conference.pdf) (as "In-context recall")**
> The observable task of copying a token that follows a previous occurrence of a specific trigger token within the same input context.

**[Mixture of In-Context Experts Enhance LLMs' Long Context Awareness](https://proceedings.neurips.cc/paper_files/paper/2024/file/91315fbb83ce353ae5538cba395f70d1-Paper-Conference.pdf) (as "Key-Value Retrieval task")**
> An evaluation task that measures a model's context awareness by requiring it to retrieve a specific value for a given key from a long context of randomly generated key-value pairs.

## Relationships

### Key-value retrieval →
- **MQAR** (measurements) — *measured_by*
  > Multi-Query Associative Recall (MQAR) Task. (Figure 1)
  - [Rodimus*: Breaking the Accuracy-Efficiency Trade-Off with Efficient Attentions](https://proceedings.iclr.cc/paper_files/paper/2025/file/59c08508131c3a50991f42dae7f69e1c-Paper-Conference.pdf)
- **Synthetic recall** (behaviors tasks) — *causes*
  > finetuning LLMs on this dataset significantly improves LLMs’ information retrieval and reasoning capabilities in longer-context settings. (ABSTRACT)
  - [From Artificial Needles to Real Haystacks: Improving Retrieval Capabilities in LLMs by Finetuning on Synthetic Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/15a321fbfc19fce9b325ec6e77dfb597-Paper-Conference.pdf)
- **InfiniteBench** (measurements) — *measured_by*
  > InfiniteBench (Zhang et al., 2024): Designed for LLMs on extended contexts, it includes tasks like key-value retrieval, summarization, and QA on data exceeding 100K tokens.
  - [Scaling Instruction-tuned LLMs to Million-token Contexts via Hierarchical Synthetic Data Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/bb36593e5e438aac5dd07907e757e087-Paper-Conference.pdf)
- **Long-context reasoning** (constructs) — *causes*
  > Finetuning LLMs on synthetic key-value retrieval tasks improves LLMs’ long-context reasoning capabilities, even if explicit chain-of-thought reasoning is not allowed. (Finding 3)
  - [From Artificial Needles to Real Haystacks: Improving Retrieval Capabilities in LLMs by Finetuning on Synthetic Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/15a321fbfc19fce9b325ec6e77dfb597-Paper-Conference.pdf)

### Associated with
- **In-context learning** (constructs)
  > “we evaluate the capacity of various architectures to in-context learn associative recall”
  - [Is attention required for ICL? Exploring the Relationship Between Model Architecture and In-Context Learning Ability](https://proceedings.iclr.cc/paper_files/paper/2024/file/ea6d17af54f827336fc8fed27ca0319d-Paper-Conference.pdf)
- **Context retrieval** (behaviors tasks)
  > RNNs with CoT cannot solve a set of fundamental algorithmic problems that directly ask for in-context retrieval, including associative recall. (Section 1)
  - [RNNs are not Transformers (Yet):  The Key Bottleneck on In-Context Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/79dc391a2c1067e9ac2b764e31a60377-Paper-Conference.pdf)
- **In-context reasoning** (constructs)
  > Under this definition, we list a few simple examples of reasoning that we will consider below: • In-context recall (Section 2.1).
  - [Distributional Associations vs In-Context Reasoning: A Study of Feed-forward and Attention Layers](https://proceedings.iclr.cc/paper_files/paper/2025/file/533a89d7c2980218d82dbe3ea85f77ae-Paper-Conference.pdf)
- **Context utilization** (constructs)
  > We assess the context utilization ability of our approaches on two tasks, including multi-document question answering (MDQA) and key-value retrieval (KV retrieval) tasks from [15]. (Section 4.2)
  - [Found in the Middle: How Language Models Use Long Contexts Better via Plug-and-Play Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ffdbbe354893979367f93e2121e37dd-Paper-Conference.pdf)
