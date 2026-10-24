# Synthetic recall
**Type:** Behavior  
**Referenced in:** 123 papers  
**Also known as:** Passkey retrieval, Needle-in-a-haystack retrieval, Long-context retrieval, Single-needle retrieval, Multi-needle retrieval, Long-dependency retrieval, Prefix-suffix retrieval, Needle question answering, Needle extraction, String retrieval capability, Multimodal retrieval, Information retrieval, Multi-needle reasoning, Synthetic retrieval, Retrieval  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is a synthetic needle-retrieval task: the model must retrieve, reproduce, or recall specific inserted information from a long, often irrelevant context. Most definitions use a "needle in a haystack" setup in which the target is a short fact, statement, passkey, or key-value pair hidden in long text, and some explicitly describe it as a stress test of recall from long contexts or of the fidelity of compressed representations. Success is usually exact recovery of the inserted content, for example identifying and outputting a five-digit passkey, retrieving one or more target key-value pairs, or returning a target statement when it appears at different positions, and one formulation states that a prediction is correct only if all passkeys are retrieved.

**Variants.** Most variants stay in text and are described as passkey retrieval, needle-in-a-haystack retrieval, or long-context retrieval. Common differences are whether the model must find a single needle or multiple needles, whether the inserted item is a passkey, target statement, key-value pair, or matching string, and whether recall is tested at different depths or positions in the context. Smaller lines extend the behavior to multi-needle reasoning, multilingual haystacks, and multimodal or audio settings where the model retrieves an inserted statement, image, or temporally grounded segment.

**Space of elicitation and scores.** Papers link synthetic recall to 20 measurement instruments. The most common are Needle-in-a-Haystack, RULER, Passkey retrieval, HELMET, and MM-NIAH. These are mostly synthetic long-context retrieval benchmarks: Needle-in-a-Haystack is described as inserting a random fact or statement into a long context and asking the model to retrieve it, Passkey retrieval as locating a hidden five-digit number in otherwise meaningless text, RULER as a more complex synthetic benchmark containing needle-retrieval and related tasks, HELMET as a benchmark category that includes synthetic recall, and MM-NIAH as a multimodal version that detects image or text needles within hybrid long contexts.

**What it is taken as evidence of.** Papers connect synthetic recall to 6 constructs, and they do not converge on a single construct that it reflects. The prevailing links are to long-context understanding and length generalization: papers describe passkey or needle retrieval as evaluating the maximum context length a model can effectively handle, as probing fine-grained contextual understanding, and as a metric through accuracy on Passkey Retrieval. Smaller strands relate it to factual retention and use retrieval tasks to measure temporal perception, while single papers instead claim a causal relationship from synthetic recall to personalization and from recency bias to synthetic recall.

## Sources

**[A Silver Bullet or a Compromise for Full Attention? A Comprehensive Study of Gist Token-based Context Compression](https://aclanthology.org/2025.acl-long.241.pdf)**
> Reproducing specific, inserted pieces of information (needles) from a long context, testing the fidelity of compressed representations.

**[A Training-Free Sub-quadratic Cost Transformer Model Serving Framework with Hierarchically Pruned Attention](https://proceedings.iclr.cc/paper_files/paper/2025/file/043f0503c4f652c737add3690aa5d12c-Paper-Conference.pdf) (as "Passkey retrieval")**
> A "needle in a haystack" task where the model must identify and extract a specific, short piece of information (a passkey) from a long, repetitive document.

**[LongPO: Long Context Self-Evolution of Large Language Models through Short-to-Long Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/1332893b662f655660c9abdf793230cf-Paper-Conference.pdf) (as "Needle-in-a-haystack retrieval")**
> The observable task of identifying and extracting a specific piece of information embedded within a large volume of irrelevant text.

**[Understanding and Mitigating Bottlenecks of State Space Models through the Lens of Recency and Over-smoothing](https://proceedings.iclr.cc/paper_files/paper/2025/file/ccdfe117c6729267c1595cdf0a587da8-Paper-Conference.pdf) (as "Long-context retrieval")**
> Retrieving a target statement or fact from a long input context when it appears at different positions.

**[CAKE: Cascading and Adaptive KV Cache Eviction with Layer Preferences](https://proceedings.iclr.cc/paper_files/paper/2025/file/dfae940651f3e690a12e19c874edad7c-Paper-Conference.pdf) (as "Single-needle retrieval")**
> Finding and recalling a single, specific piece of information ('needle') embedded within a long, distracting context ('haystack').

**[CAKE: Cascading and Adaptive KV Cache Eviction with Layer Preferences](https://proceedings.iclr.cc/paper_files/paper/2025/file/dfae940651f3e690a12e19c874edad7c-Paper-Conference.pdf) (as "Multi-needle retrieval")**
> Finding and recalling multiple, distinct pieces of information ('needles') embedded within a long, distracting context ('haystack').

**[TidalDecode: Fast and Accurate LLM Decoding with Position Persistent Sparse Attention](https://proceedings.iclr.cc/paper_files/paper/2025/file/11440c427f0f76f191ac06b50d7a2517-Paper-Conference.pdf) (as "Long-dependency retrieval")**
> Recovering a specific target item embedded far back in a long context.

**[SCBench: A KV Cache-Centric Analysis of Long-Context Methods](https://proceedings.iclr.cc/paper_files/paper/2025/file/a540b17fb2295c736d5afd6c507acf66-Paper-Conference.pdf) (as "Prefix-suffix retrieval")**
> Finding a string in a large dictionary that matches both a specified prefix and suffix.

**[Audio Flamingo 2: An Audio-Language Model with Long-Audio Understanding and Expert Reasoning Abilities](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ghosh25b/ghosh25b.pdf) (as "Needle question answering")**
> Locating and reasoning about a specific short segment (needle) embedded within a longer audio (haystack), requiring precise temporal grounding.

**[SCBench: A KV Cache-Centric Analysis of Long-Context Methods](https://proceedings.iclr.cc/paper_files/paper/2025/file/a540b17fb2295c736d5afd6c507acf66-Paper-Conference.pdf) (as "String retrieval capability")**
> The fundamental ability of a long-context model to retrieve specific, exact-match information from long and potentially noisy input sequences.

**[Needle In A Multimodal Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/24a8968affe71ffe4067d022b9d16566-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Multimodal retrieval")**
> Answering questions by locating a specific inserted fact, statement, or image within a long multimodal document.

**[tRAG: Term-level Retrieval-Augmented Generation for Domain-Adaptive Retrieval](https://aclanthology.org/2025.naacl-long.334.pdf) (as "Information retrieval")**
> Locating and extracting a specific piece of information (needle) from a large body of text (haystack), particularly in long and multilingual contexts.

**[CAKE: Cascading and Adaptive KV Cache Eviction with Layer Preferences](https://proceedings.iclr.cc/paper_files/paper/2025/file/dfae940651f3e690a12e19c874edad7c-Paper-Conference.pdf) (as "Multi-needle reasoning")**
> Performing a reasoning task that requires synthesizing information from multiple, distinct facts ('needles') embedded within a long context.

**[LongLeader: A Comprehensive Leaderboard for Large Language Models in Long-context Scenarios](https://aclanthology.org/2025.naacl-long.439.pdf) (as "Synthetic retrieval")**
> The observable behavior of extracting specific, artificially embedded information (e.g., passkeys or key-value pairs) from a long synthetic context.

**[CommVQ: Commutative Vector Quantization for KV Cache Compression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25du/li25du.pdf) (as "Retrieval")**
> The observable ability of a model to locate and extract specific information from a long input context.

## Relationships

### Synthetic recall →
- **Needle-in-a-Haystack** (measurements) — *measured_by*
  > NIAH measures the averaged correct answer rate of the models on the needle-in-a-haystack retrieval task. (Table 4)
  - [A Little Goes a Long Way: Efficient Long Context Training and Inference with Partial Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/127a649ea9ae2df15e903a91352cfd3a-Paper-Conference.pdf)
- **RULER** (measurements) — *measured_by*
  > “RULER includes 8 variants of needle-in-a-haystack retrieval tasks”
  - [Jamba: Hybrid Transformer-Mamba Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a9ed43fa31dc8b4a7d7a673d713dcb5f-Paper-Conference.pdf)
- **Passkey retrieval** (measurements) — *measured_by*
  > The passkey retrieval task as defined in Mohtashami and Jaggi (2023) measures a model’s ability to retrieve a simple passkey (i.e., a five-digit number) from amongst a large amount of otherwise meaningless text. (Section 4.3)
  - [YaRN: Efficient Context Window Extension of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/874a4d89f2d04b4bcf9a2c19545cf040-Paper-Conference.pdf)
- **HELMET** (measurements) — *measured_by*
  > we present HELMET (How to Evaluate Long-context Models Effectively and Thoroughly). We curate a diverse set of application-centric long-context tasks across seven categories. Beyond widely adopted categories like synthetic recall...
  - [HELMET: How to Evaluate Long-context Models Effectively and Thoroughly](https://proceedings.iclr.cc/paper_files/paper/2025/file/f5332c8273d02729730a9c24dec2135e-Paper-Conference.pdf)
- **MM-NIAH** (measurements) — *measured_by*
  > Our benchmark includes three types of evaluation tasks: multimodal retrieval, counting, and reasoning. (Abstract)
  - [Needle In A Multimodal Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/24a8968affe71ffe4067d022b9d16566-Paper-Datasets_and_Benchmarks_Track.pdf)
- **NeedleBench** (measurements) — *measured_by*
  > NeedleBench (Li et al., 2024a): Tests retrieval and reasoning in complex contexts through three subtasks: Single-Needle Retrieval, Multi-Needle Retrieval, and Multi-Needle Reasoning.
  - [CAKE: Cascading and Adaptive KV Cache Eviction with Layer Preferences](https://proceedings.iclr.cc/paper_files/paper/2025/file/dfae940651f3e690a12e19c874edad7c-Paper-Conference.pdf)
- **SWDE** (measurements) — *measured_by*
  > Specifically, we assess information retrieval on FDA [93] and SWDE [49], which are designed to evaluate retrieval from in-context passages scraped from HTML/PDFs. (Section 4.1.2)
  - [Gated Slot Attention for Efficient Linear-Time Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3f39e51f5f634fb16cc3e658f8512b9-Paper-Conference.pdf)
- **Personalization** (constructs) — *causes*
  > RAG consistently performed the best across most models, indicating that adherence to user preferences may hinge on retrieval capabilities.
  - [Do LLMs Recognize Your Preferences? Evaluating Personalized Preference Following in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/28a46044775d97a4efcbcf14e7f13209-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > completely pruning retrieval heads leads to failure in retrieving relevant information and results in hallucination, while pruning random non-retrieval heads does not affect the model’s retrieval ability. (Abstract)
  - [Retrieval Head Mechanistically Explains Long-Context Factuality](https://proceedings.iclr.cc/paper_files/paper/2025/file/9b77f07301b1ef1fe810aae96c12cb7b-Paper-Conference.pdf)
- **Qasper** (measurements) — *measured_by*
  > In long-context retrieval scenario where questions are gathered from Qasper (Dasigi et al., 2021), MoDification-7B-32k yields 10.3 on Qasper, which is competitive with 10.2 from LLaMA-2-7B-32k. (Section 5)
  - [MoDification: Mixture of Depths Made Easy](https://aclanthology.org/2025.naacl-long.265.pdf)
- **LongBench** (measurements) — *measured_by*
  > On LongBench, we evaluate our method with a range of realistic scenarios, including single-/multi-document QA, document summarization, code completion, information retrieval, etc. (Section 5.1)
  - [ShadowKV: KV Cache in Shadows for High-Throughput Long-Context LLM Inference](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25b/sun25b.pdf)
- **MileBench** (measurements) — *measured_by*
  > The MileBench benchmark also includes needle in haystack tasks for both text and image scenarios. (Section 4.4)
  - [CoMemo: LVLMs Need Image Context with Image Memory](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25bn/liu25bn.pdf)
- **LOFT** (measurements) — *measured_by*
  > A significant portion of long-context evaluation datasets, including RULER (Hsieh et al., 2024b), LongBench (Bai et al., 2024), LongBench v2 (Bai et al., 2025), and LOFT (Lee et al., 2024), primarily assess retrieval and summarization rather than complex reasoning. (Section 2)
  - [GSM-$∞$: How Do your LLMs Behave over Infinitely Increasing Reasoning Complexity and Context Length?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25m/zhou25m.pdf)
- **LongEval** (measurements) — *measured_by*
  > we conduct experiments on LongEval (Li et al., 2023a), a benchmark for long-context retrieval abilities, where we can separate the answer tokens that match the desired answers (e.g., <45129> in Figure 2(a)) from non-answer tokens. (Section 2.1)
  - [What is Wrong with Perplexity for Long-context Language Modeling?](https://proceedings.iclr.cc/paper_files/paper/2025/file/ebd6641c32ed633c2a3addc689d39896-Paper-Conference.pdf)

### → Synthetic recall
- **Key-value retrieval** (behaviors tasks) — *causes*
  > finetuning LLMs on this dataset significantly improves LLMs’ information retrieval and reasoning capabilities in longer-context settings. (ABSTRACT)
  - [From Artificial Needles to Real Haystacks: Improving Retrieval Capabilities in LLMs by Finetuning on Synthetic Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/15a321fbfc19fce9b325ec6e77dfb597-Paper-Conference.pdf)
- **Recency bias** (constructs) — *causes*
  > “this bias impairs the models’ ability to recall distant information”
  - [Understanding and Mitigating Bottlenecks of State Space Models through the Lens of Recency and Over-smoothing](https://proceedings.iclr.cc/paper_files/paper/2025/file/ccdfe117c6729267c1595cdf0a587da8-Paper-Conference.pdf)

### Associated with
- **Long-context understanding** (constructs)
  > Passkey retrieval, on the other hand, can effectively measure the maximum distance that a token can attend to during the inference stage. (Section 4.1)
  - [PoSE: Efficient Context Window Extension of LLMs via Positional Skip-wise Training](https://proceedings.iclr.cc/paper_files/paper/2024/file/524ef58c2bd075775861234266e5e020-Paper-Conference.pdf)
- **Temporal perception** (constructs)
  > This task [Retrieval] specifically assesses the model’s capability for temporal perception and understanding across the time dimension. (Section 3.2)
  - [Needle In A Video Haystack: A Scalable  Synthetic Evaluator for Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7b77476d89d5fb58aeb77691d2f40f5-Paper-Conference.pdf)
- **Positional bias** (constructs)
  > In retrieval tasks, PB predominantly manifests as token-shifting... (Section 1)
  - [POSITION BIAS MITIGATES POSITION BIAS: Mitigate Position Bias Through Inter-Position Knowledge Distillation](https://aclanthology.org/2025.emnlp-main.78.pdf)
