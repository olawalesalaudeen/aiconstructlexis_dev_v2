# Long-context understanding
**Type:** Construct  
**Referenced in:** 127 papers  
**Also known as:** Long context understanding, Long text understanding, Long-context comprehension, Long-text understanding, Cross-page comprehension, Long Context, Long-context capabilities, Long-context capability, Long-context processing capability, Long-context modeling capability, Long-context modeling, Long-context Modeling Capacity, Recall ability, Long sequence comprehension, Context memory, Long-range ability, Long-range context understanding, Long-range information access, Long-context ability, Long-context performance, Long-range capabilities, Cognition capability, Recall capability, Long-context processing, Long-context processing ability, Long-text comprehension  

## State of the Field

**Definition agreement:** Consensus. Most papers define long-context understanding as a model's ability to process, retain, integrate, and use information distributed across very long input sequences, documents, or histories while maintaining coherence, accuracy, or task performance. A few papers emphasize particular settings or facets such as dialogue, multi-document evidence, multimodal inputs, retrieval-intensive recall, or contexts beyond the nominal window, but these are narrow applications or emphases of the same core property rather than different constructs.

**Space of definitions.** Across the papers, the dominant framing treats long-context understanding as a latent model ability to process, understand, retain, integrate, and use information across very long input sequences, often while maintaining coherence, relevance, accuracy, or task performance beyond the original context window. Many definitions make the span explicit, from long documents and multi-turn histories to contexts over 100K tokens, and some stress whole-context use, asking whether models can "fully utilize the provided information." A smaller line of work narrows the construct to particular settings or subskills, including cross-page synthesis, recall of specific facts from sparse long inputs, dialogue-history retention, or multimodal long text and video contexts.

**Space of facets.** Most papers use nearby labels such as long-context comprehension, long-text understanding, long-context capability, long-context modeling, and long-context processing for closely related versions of the same broad ability. More specialized labels carve out narrower facets: cross-page comprehension focuses on reasoning over evidence across pages, recall ability or long-range information access focuses on retrieving distant information, and context memory or long-context modeling capacity focuses on retaining and using dialogue history. Some papers also distinguish it from short-context ability, or place it alongside reasoning, retrieval, generation, and multimodal understanding in broader capability bundles.

**Space of measurement.** Operationalization is largely benchmark-based: papers link the construct to 48 measurement instruments and 17 behavioral indicators. The most common instruments are LongBench, RULER, InfiniteBench, Needle-in-a-Haystack, and L-Eval; in practice, papers measure it with multitask long-context benchmark suites, synthetic retrieval and variable-tracing tasks, ultra-long benchmarks over 100K tokens, document, question answering, summarization, multimodal, and video evaluations, and some long-form language-modeling datasets scored by perplexity. These operationalizations generally match the dominant definitions around processing and using long inputs, though some narrow the construct to recall- or retrieval-focused behavior rather than the broader notions of coherence or whole-context integration.

**Links.** The recorded links mix incoming and outgoing claims. Papers claim causal relationships from contextual understanding, long-range dependency modeling, and positional bias to long-context understanding, and from long-context understanding to text summarization; separate papers also report related links to length generalization. Correlational claims are rarer, including links to text summarization and memory, while other related claims connect it with neighboring long-context tasks and abilities.

## Sources

**[SmartPlay : A Benchmark for LLMs as Intelligent Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/063d1fadbde557466bf5bcffe814a64e-Paper-Conference.pdf) (as "Long text understanding")**
> The latent ability to comprehend and process lengthy or syntactically complex textual inputs, ranging from short lines to documents exceeding one page.

**[Hierarchical Context Merging: Better Long Context Understanding for Pre-trained LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/06694da057cb15fef11542270a592627-Paper-Conference.pdf)**
> The latent ability of a language model to maintain coherence, relevance, and performance when processing input sequences far exceeding its original context window.

**[A Real-World WebAgent with Planning, Long Context Understanding, and Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/e91bf7dfba0477554994c6d64833e9d8-Paper-Conference.pdf) (as "Long context understanding")**
> The latent ability of a model to effectively process and utilize information across extended input sequences, integrating relevant content despite length and noise.

**[MMDU: A Multi-Turn Multi-Image Dialog Understanding Benchmark and Instruction-Tuning Dataset for LVLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/1057053100de064a44286239724f7865-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Long-context comprehension")**
> The capacity of a model to process, retain, and utilize information from extended conversational histories or long input sequences.

**[InfLLM: Training-Free Long-Context Extrapolation for LLMs with an Efficient Context Memory](https://proceedings.neurips.cc/paper_files/paper/2024/file/d842425e4bf79ba039352da0f658a906-Paper-Conference.pdf) (as "Long-text understanding")**
> The model's comprehensive ability to read, process, and reason about information presented in extremely long documents or sequences.

**[MMLONGBENCH-DOC: Benchmarking Long-context Document Understanding with Visualizations](https://proceedings.neurips.cc/paper_files/paper/2024/file/ae0e43289bffea0c1fa34633fc608e92-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Cross-page comprehension")**
> The ability to collect, synthesize, and reason over information and evidence distributed across multiple different pages of a document.

**[LongPO: Long Context Self-Evolution of Large Language Models through Short-to-Long Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/1332893b662f655660c9abdf793230cf-Paper-Conference.pdf) (as "Long-context capability")**
> The latent ability of a model to effectively process, understand, and perform tasks requiring information from extended textual contexts.

**[Law of the Weakest Link: Cross Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/63ea6a7d01a34a2c7334dcf1a2c3b03d-Paper-Conference.pdf) (as "Long Context")**
> The latent ability to process, comprehend, and synthesize information to generate responses from extensive textual inputs.

**[Forgetting Transformer: Softmax Attention with a Forget Gate](https://proceedings.iclr.cc/paper_files/paper/2025/file/add3d389197ad2267f660ad060ef61f4-Paper-Conference.pdf) (as "Long-context capabilities")**
> The model's ability to effectively process, understand, and utilize information from very long sequences of text.

**[OmniKV: Dynamic Context Selection for Efficient Long-Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/da1131a86ac3c70e0b7cae89c3d4df22-Paper-Conference.pdf) (as "Long-context processing capability")**
> The ability of a model to effectively process, understand, and utilize information from very long input sequences to perform complex tasks.

**[Quest: Query-centric Data Synthesis Approach for Long-context Scaling of Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/e54e6eef11f87a874bf1e4551fc6d04e-Paper-Conference.pdf) (as "Long-context modeling capability")**
> The latent ability of a model to capture long-range dependencies and process extended input sequences effectively.

**[Exploring the Potential of LLMs as Personalized Assistants: Dataset, Evaluation, and Analysis](https://aclanthology.org/2025.acl-long.504.pdf) (as "Long-context Modeling Capacity")**
> The ability of an LLM to retain and effectively utilize information from extended dialogue histories, despite the constraints of finite context length.

**[Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention](https://aclanthology.org/2025.acl-long.1126.pdf) (as "Long-context modeling")**
> The latent ability of a language model to effectively process and retain information across very long input sequences, maintaining coherence and performance over thousands of tokens.

**[Scaling up the State Size of RNN LLMs for Long-Context Scenarios](https://aclanthology.org/2025.acl-long.564.pdf) (as "Recall ability")**
> The model's underlying capacity to retrieve specific, relevant information from long input contexts, especially in information-sparse scenarios.

**[GraphInsight: Unlocking Insights in Large Language Models for Graph Structure Understanding](https://aclanthology.org/2025.acl-long.591.pdf) (as "Long sequence comprehension")**
> The latent ability of LLMs to maintain understanding and retain information across extended input sequences, particularly challenged by structural complexity and length.

**[PlanningArena: A Modular Benchmark for Multidimensional Evaluation of Planning and Tool Learning](https://aclanthology.org/2025.acl-long.1499.pdf) (as "Context memory")**
> The model's ability to retain and correctly use information across long or multi-step planning tasks, particularly in handling user profiles and extended task descriptions without losing critical details.

**[KV-Latent: Dimensional-level KV Cache Reduction with Frequency-aware Rotary Positional Embedding](https://aclanthology.org/2025.acl-long.77.pdf) (as "Long-range ability")**
> The latent capacity of a model to maintain coherent and accurate representations over long input sequences, particularly in preserving positional information across distant tokens.

**[YESciEval: Robust LLM-as-a-Judge for Scientific Question Answering](https://aclanthology.org/2025.acl-long.675.pdf) (as "Long-range context understanding")**
> The capacity to synthesize information across multiple documents or abstracts that are distantly related in the input sequence, maintaining coherence and relevance in the output.

**[Efficient Length-Generalizable Attention via Causal Retrieval for Long-Context Language Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25v/hu25v.pdf) (as "Long-range information access")**
> The latent ability to access and utilize information from distant parts of the input sequence, beyond the immediate attention window.

**[Puzzle: Distillation-Based NAS for Inference-Optimized LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bercovich25a/bercovich25a.pdf) (as "Long-context performance")**
> The model's ability to maintain accuracy and coherence when processing and generating text with very long input sequences.

**[LaCache: Ladder-Shaped KV Caching for Efficient Long-Context Modeling of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shi25b/shi25b.pdf) (as "Long-range capabilities")**
> The latent ability of a model to process and maintain dependencies across extensive input contexts.

**[XAttention: Block Sparse Attention with Antidiagonal Scoring](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25ag/xu25ag.pdf) (as "Long-context ability")**
> The capacity to process and use information across very long input sequences without losing task performance.

**[Efficient Long Context Fine-tuning with Chunk Flow](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yuan25m/yuan25m.pdf) (as "Long-context processing")**
> The model's ability to effectively process and utilize information from extensive input sequences.

**[Enhancing LLM’s Cognition via Structurization](https://proceedings.neurips.cc/paper_files/paper/2024/file/f169ec4d47933ea4896b994af8ff4f17-Paper-Conference.pdf) (as "Cognition capability")**
> The model's latent capacity to understand, organize, and use complex long-form context effectively across downstream tasks.

**[Rodimus*: Breaking the Accuracy-Efficiency Trade-Off with Efficient Attentions](https://proceedings.iclr.cc/paper_files/paper/2025/file/59c08508131c3a50991f42dae7f69e1c-Paper-Conference.pdf) (as "Recall capability")**
> The model's ability to retrieve specific, factual information from a long context provided as input.

**[HMT: Hierarchical Memory Transformer for Efficient Long Context Language Processing](https://aclanthology.org/2025.naacl-long.410.pdf) (as "Long-context processing ability")**
> The model's latent capability to effectively handle, integrate, and utilize information from very long sequences of input text.

**[SSMLoRA: Enhancing Low-Rank Adaptation with State Space Model](https://aclanthology.org/2025.naacl-long.230.pdf) (as "Long-text comprehension")**
> The latent ability of a model to understand and process information across extended input sequences, maintaining coherence and extracting relevant details over long contexts.

## Relationships

### Long-context understanding →
- **LongBench** (measurements) — *measured_by*
  > The evaluation is performed on the LongBench benchmark (Bai et al., 2023), where we compare our model with GPT-3.5-turbo and other LLaMA-2-based open-source models designed for handling long context. (Section 4)
  - [CLEX: Continuous  Length Extrapolation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/3df38ca67befaed9c03b95ffee07d9f8-Paper-Conference.pdf)
- **RULER** (measurements) — *measured_by*
  > We evaluate on the RULER benchmark (Hsieh et al., 2024), a set of 13 synthetic tasks aimed to assess long-context capabilities of language models. (Section 7.1.1)
  - [Jamba: Hybrid Transformer-Mamba Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a9ed43fa31dc8b4a7d7a673d713dcb5f-Paper-Conference.pdf)
- **InfiniteBench** (measurements) — *measured_by*
  > InfiniteBench (Zhang et al., 2024b) is proposed to evaluate the ultra-long context capability of LLMs over 100K sequence length. (Section 4.1)
  - [ChatQA 2: Bridging the Gap to Proprietary LLMs in Long Context and RAG Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7b562dac391e9c7af691e8ef886ad10-Paper-Conference.pdf)
- **Needle-in-a-Haystack** (measurements) — *measured_by*
  > Additionally, we assess the CREAM-Chat model with Needle-in-a-Haystack and LongBench[Bai et al., 2023]. (Section 3.1).
  - [An Efficient Recipe for Long Context Extension via Middle-Focused Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/66944d3a3e77ebe366793f6a6126f3a4-Paper-Conference.pdf)
- **L-Eval** (measurements) — *measured_by*
  > Following the L-Eval benchmark [1], we evaluated the LLM with tasks categorized into two main groups: closed-ended and open-ended tasks. Closed-ended tasks primarily focus on the capacity for understanding and reasoning within long contexts... (Section 4.2).
  - [Mixture of In-Context Experts Enhance LLMs' Long Context Awareness](https://proceedings.neurips.cc/paper_files/paper/2024/file/91315fbb83ce353ae5538cba395f70d1-Paper-Conference.pdf)
- **Text summarization** (behaviors tasks) — *causes*
  > LLMs equipped with longer context lengths excel at handling complex tasks (Caciularu et al., 2023; Bairi et al., 2023; Mazumder & Liu, 2022), especially those with long input, e.g., document summarization. (Section 1)
  - [Quest: Query-centric Data Synthesis Approach for Long-context Scaling of Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/e54e6eef11f87a874bf1e4551fc6d04e-Paper-Conference.pdf)
- **LongBench-E** (measurements) — *measured_by*
  > In addition, we evaluate LongMamba on the tasks within LongBench-E (Bai et al., 2023), which are representative of many real-world long-context applications. (Section 6.1)
  - [LongMamba: Enhancing Mamba's Long-Context Capabilities via Training-Free Receptive Field Enlargement](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab5d50d269e52f8eed497062311ff173-Paper-Conference.pdf)
- **PG-19** (measurements) — *measured_by*
  > For long-context understanding, we use the Pile (Gao et al., 2020) and PG-19 (Rae et al., 2019) datasets and assess the performance of the MambaExtend in terms of perplexity scores at various context lengths. (Section 5.1)
  - [MambaExtend: A Training-Free Approach to Improve Long Context Extension of Mamba](https://proceedings.iclr.cc/paper_files/paper/2025/file/f1922bd718528ac3eab114eabbbfa7a0-Paper-Conference.pdf)
- **SCROLLS** (measurements) — *measured_by*
  > Evaluation on long-context modeling, including perplexity in various context lengths up to 2M and long-context QA tasks in Scrolls (Parisotto et al., 2020) prove MEGALODON’s ability to model sequences of unlimited length. (Section 1).
  - [Megalodon: Efficient LLM Pretraining and Inference with Unlimited Context Length](https://proceedings.neurips.cc/paper_files/paper/2024/file/840abfadd04c967feaa2a49aba94a32d-Paper-Conference.pdf)
- **NarrativeQA** (measurements) — *measured_by*
  > Long-context ability evaluation. Following Xiong et al. [94], we evaluated the models on long-sequence tasks, including ... NarrativeQA [44]... (Table 4, Section 4.2)
  - [Gated Slot Attention for Efficient Linear-Time Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3f39e51f5f634fb16cc3e658f8512b9-Paper-Conference.pdf)
- **QuALITY** (measurements) — *measured_by*
  > Long-context ability evaluation. Following Xiong et al. [94], we evaluated the models on long-sequence tasks, including ... QuALITY [58]... (Table 4, Section 4.2)
  - [Gated Slot Attention for Efficient Linear-Time Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3f39e51f5f634fb16cc3e658f8512b9-Paper-Conference.pdf)
- **LooGLE** (measurements) — *measured_by*
  > The evaluation is based on two benchmarks for long-context understanding: LongBench (Bai et al., 2024) and LooGLE (Li et al., 2024b).
  - [Not All Heads Matter: A Head-Level KV Cache Compression Method with Integrated Retrieval and Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f649556471416b35e60ae0de7c1e3619-Paper-Conference.pdf)
- **WikiText-2** (measurements) — *measured_by*
  > “for long-context modeling, we use Wikitext-2 (Merity, 2016) and PG19 (Rae et al., 2019) datasets for evaluation.”
  - [LaCache: Ladder-Shaped KV Caching for Efficient Long-Context Modeling of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shi25b/shi25b.pdf)
- **ZeroSCROLLS** (measurements) — *measured_by*
  > the ZeroSCROLLS benchmark (Shaham et al., 2023) which is specifically designed for LLMs and contains ten diverse natural language tasks that require understanding long input contexts (Section 5.3).
  - [IceFormer: Accelerated Inference with Long-Sequence Transformers on CPUs](https://proceedings.iclr.cc/paper_files/paper/2024/file/4059971112ab22fc7b6aed520aaca6b2-Paper-Conference.pdf)
- **OK-VQA** (measurements) — *measured_by*
  > To evaluate the long-context understanding ability, we adopt the few-shot evaluation setting in Flamingo [1]. We report answer accuracy on the OK-VQA [28], TextVQA [29], VizWiz [30], and VQAV2 [31]. (Section 3.1)
  - [Leveraging Visual Tokens for Extended Text Contexts in Multi-Modal Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/19f10adb6749b0c9f1ff7610bd01d44d-Paper-Conference.pdf)
- **TextVQA** (measurements) — *measured_by*
  > To evaluate the long-context understanding ability, we adopt the few-shot evaluation setting in Flamingo [1]. We report answer accuracy on the OK-VQA [28], TextVQA [29], VizWiz [30], and VQAV2 [31]. (Section 3.1)
  - [Leveraging Visual Tokens for Extended Text Contexts in Multi-Modal Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/19f10adb6749b0c9f1ff7610bd01d44d-Paper-Conference.pdf)
- **VizWiz** (measurements) — *measured_by*
  > To evaluate the long-context understanding ability, we adopt the few-shot evaluation setting in Flamingo [1]. We report answer accuracy on the OK-VQA [28], TextVQA [29], VizWiz [30], and VQAV2 [31]. (Section 3.1)
  - [Leveraging Visual Tokens for Extended Text Contexts in Multi-Modal Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/19f10adb6749b0c9f1ff7610bd01d44d-Paper-Conference.pdf)
- **VQA-v2** (measurements) — *measured_by*
  > To evaluate the long-context understanding ability, we adopt the few-shot evaluation setting in Flamingo [1]. We report answer accuracy on the OK-VQA [28], TextVQA [29], VizWiz [30], and VQAV2 [31]. (Section 3.1)
  - [Leveraging Visual Tokens for Extended Text Contexts in Multi-Modal Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/19f10adb6749b0c9f1ff7610bd01d44d-Paper-Conference.pdf)
- **DocVQA** (measurements) — *measured_by*
  > “To evaluate the long-context understanding ability, we adopt the few-shot evaluation setting in Flamingo [1]. ... In order to illustrate the impact of having long in-context text, we evaluate the model for document understanding on DocVQA [15] and OCR VQA [34].”
  - [Leveraging Visual Tokens for Extended Text Contexts in Multi-Modal Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/19f10adb6749b0c9f1ff7610bd01d44d-Paper-Conference.pdf)
- **Qasper** (measurements) — *measured_by*
  > Long-context ability evaluation. Following Xiong et al. [94], we evaluated the models on long-sequence tasks, including Qasper [18]... (Table 4, Section 4.2)
  - [Gated Slot Attention for Efficient Linear-Time Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3f39e51f5f634fb16cc3e658f8512b9-Paper-Conference.pdf)
- **QMSum** (measurements) — *measured_by*
  > Long-context ability evaluation. Following Xiong et al. [94], we evaluated the models on long-sequence tasks, including ... QMSum [105]. (Table 4, Section 4.2)
  - [Gated Slot Attention for Efficient Linear-Time Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3f39e51f5f634fb16cc3e658f8512b9-Paper-Conference.pdf)
- **FinanceBench** (measurements) — *measured_by*
  > The recent FinanceBench [19] features both extremely long-context documents and practical, scalable cross-page questions. (Section 2)
  - [MMLONGBENCH-DOC: Benchmarking Long-context Document Understanding with Visualizations](https://proceedings.neurips.cc/paper_files/paper/2024/file/ae0e43289bffea0c1fa34633fc608e92-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Coding ability** (constructs) — *causes*
  > This limitation stems from the restricted reasoning abilities of single LLMs and their lack of capacity for long-context understanding... they struggle to tackle more complex coding tasks.
  - [Self-Evolving Multi-Agent Collaboration Networks for Software Development](https://proceedings.iclr.cc/paper_files/paper/2025/file/39af4f2f9399122a14ccf95e2d2e7122-Paper-Conference.pdf)
- **Multi-Needle-in-a-Haystack** (measurements) — *measured_by*
  > On the mainstream LLaMA3.1-8B-Instruct-128K (Dubey et al., 2024), we achieve a context length of 1M in the multi-NIAH task. (Section 3.3)
  - [ReAttention: Training-Free Infinite Context with Finite Attention Scope](https://proceedings.iclr.cc/paper_files/paper/2025/file/ee1f0da706829d7f198eac0edaacc338-Paper-Conference.pdf)
- **The Pile** (measurements) — *measured_by*
  > Long-context understanding on Pile. (Figure 1)
  - [MambaExtend: A Training-Free Approach to Improve Long Context Extension of Mamba](https://proceedings.iclr.cc/paper_files/paper/2025/file/f1922bd718528ac3eab114eabbbfa7a0-Paper-Conference.pdf)
- **LOFT** (measurements) — *measured_by*
  > “We further evaluate our model on a coverage of the LOFT (Lee et al., 2024) dataset collection”
  - [World Model on Million-Length Video And Language With Blockwise RingAttention](https://proceedings.iclr.cc/paper_files/paper/2025/file/71859ac75d53879d9bbd2f4b77b59929-Paper-Conference.pdf)
- **RACE** (measurements) — *measured_by*
  > "The RACE dataset represents a \"needle-in-a-haystack\" task demanding identification of critical information within lengthy contexts."
  - [SSMLoRA: Enhancing Low-Rank Adaptation with State Space Model](https://aclanthology.org/2025.naacl-long.230.pdf)
- **HELMET** (measurements) — *measured_by*
  > In this section, we assess our method AgenticLU using a suite of evaluation tasks drawn from the HELMET long-context benchmark (Yen et al., 2024). (Section 6)
  - [Self-Taught Agentic Long Context Understanding](https://aclanthology.org/2025.acl-long.275.pdf)
- **LongGenBench** (measurements) — *measured_by*
  > (3) Long-Context Understanding: LongBench (Bai et al., 2024), LongGenBench (Liu et al., 2024a), and Needle-in-the-haystack (Kamradt, 2023) (Sec. 2.2)
  - [Can Compressed LLMs Truly Act? An Empirical Evaluation of Agentic Capabilities in LLM Compression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25k/dong25k.pdf)
- **BABILong** (measurements) — *measured_by*
  > “We evaluate our method on three benchmarks, each testing unique aspects of long context understanding: (ii) BABILong (Kuratov et al., 2024)”
  - [Star Attention: Efficient LLM Inference over Long Sequences](https://raw.githubusercontent.com/mlresearch/v267/main/assets/acharya25a/acharya25a.pdf)
- **NovelHopQA** (measurements) — *measured_by*
  > However, none of these benchmarks simultaneously test reasoning depth and long-context comprehension in coherent narratives—an issue that NOVELHOPQA addresses. (Section 2)
  - [NovelHopQA: Diagnosing Multi-Hop Reasoning Failures in Long Narrative Contexts](https://aclanthology.org/2025.emnlp-main.1328.pdf)
- **LongEval** (measurements) — *measured_by*
  > we conducted additional experiments on the LongEval benchmark (Li et al., 2023), which is designed to measure long-context performance (Section 5.3).
  - [IceFormer: Accelerated Inference with Long-Sequence Transformers on CPUs](https://proceedings.iclr.cc/paper_files/paper/2024/file/4059971112ab22fc7b6aed520aaca6b2-Paper-Conference.pdf)
- **Passkey retrieval** (measurements) — *measured_by*
  > “The task is widely used to evaluate the maximum context length that the model can effectively handle.”
  - [Hierarchical Context Merging: Better Long Context Understanding for Pre-trained LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/06694da057cb15fef11542270a592627-Paper-Conference.pdf)
- **FLenQA** (measurements) — *measured_by*
  > Our goal is to investigate whether finetuning LLMs ... improves their long context capabilities on natural language tasks: ... flexible length question answering (FLenQA) (Section 3)
  - [From Artificial Needles to Real Haystacks: Improving Retrieval Capabilities in LLMs by Finetuning on Synthetic Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/15a321fbfc19fce9b325ec6e77dfb597-Paper-Conference.pdf)
- **LV-Eval** (measurements) — *measured_by*
  > LV-Eval is a long context benchmark with the context length varying between 16k, 32k, 64k, 128k and 256k. (Section 4.2)
  - [EpMAN: Episodic Memory AttentioN for Generalizing to Longer Contexts](https://aclanthology.org/2025.acl-long.574.pdf)

### → Long-context understanding
- **Lost-in-the-middle** (behaviors tasks) — *causes*
  > the “lost in the middle” (Liu et al., 2024c; Song et al., 2024) phenomenon degrades performance with increasing context length (Section 1).
  - [CoMemo: LVLMs Need Image Context with Image Memory](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25bn/liu25bn.pdf)
- **Contextual understanding** (constructs) — *causes*
  > These results underscore MoICE's efficacy in enhancing LLMs' ability to understand and generate long contexts, both of which require high context awareness.
  - [Mixture of In-Context Experts Enhance LLMs' Long Context Awareness](https://proceedings.neurips.cc/paper_files/paper/2024/file/91315fbb83ce353ae5538cba395f70d1-Paper-Conference.pdf)
- **Positional bias** (constructs) — *causes*
  > "they tend to favor content at certain positions ... which harms complex reasoning (Chen et al., 2024b), long-context understanding (Liu et al., 2024) and model-based evaluation"
  - [Eliminating Position Bias of Language Models: A Mechanistic Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/e389b15166cf98966ba058965a8c17e3-Paper-Conference.pdf)
- **Long-range dependency modeling** (constructs) — *causes*
  > as these models overlook information from distant tokens, they can not capture the long-distance dependencies for long-text understanding. (Section 2)
  - [InfLLM: Training-Free Long-Context Extrapolation for LLMs with an Efficient Context Memory](https://proceedings.neurips.cc/paper_files/paper/2024/file/d842425e4bf79ba039352da0f658a906-Paper-Conference.pdf)
- **Effective receptive field** (constructs) — *causes*
  > This approach potentially increases the model’s ERF, enabling better long-context information flow and understanding. (Section 1)
  - [MambaExtend: A Training-Free Approach to Improve Long Context Extension of Mamba](https://proceedings.iclr.cc/paper_files/paper/2025/file/f1922bd718528ac3eab114eabbbfa7a0-Paper-Conference.pdf)
- **Recency bias** (constructs) — *causes*
  > In next-token prediction settings, focusing on local tokens often suffices for short contexts, but can be detrimental when crucial information resides far back in the input.
  - [On-the-Fly Adaptive Distillation of Transformer to Dual-State Linear Attention for Long-Context LLM Serving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ro25a/ro25a.pdf)

### Associated with
- **Length generalization** (constructs)
  > Length extrapolation methods, although theoretically capable of extending the context window beyond the training sequence length, often underperform in practical long-context applications. (Section 1)
  - [CLEX: Continuous  Length Extrapolation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/3df38ca67befaed9c03b95ffee07d9f8-Paper-Conference.pdf)
- **Synthetic recall** (behaviors tasks)
  > Passkey retrieval, on the other hand, can effectively measure the maximum distance that a token can attend to during the inference stage. (Section 4.1)
  - [PoSE: Efficient Context Window Extension of LLMs via Positional Skip-wise Training](https://proceedings.iclr.cc/paper_files/paper/2024/file/524ef58c2bd075775861234266e5e020-Paper-Conference.pdf)
- **SEED-Bench-2** (measurements)
  > existing benchmarks for multi-image comprehensions, such as SEED-Bench-2 [25] and BLINK [26], consist of short contexts, which fail to evaluate the capability for long-context document comprehension. (Introduction)
  - [Needle In A Multimodal Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/24a8968affe71ffe4067d022b9d16566-Paper-Datasets_and_Benchmarks_Track.pdf)
- **BLINK** (measurements)
  > existing benchmarks for multi-image comprehensions, such as SEED-Bench-2 [25] and BLINK [26], consist of short contexts, which fail to evaluate the capability for long-context document comprehension. (Introduction)
  - [Needle In A Multimodal Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/24a8968affe71ffe4067d022b9d16566-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Long video understanding** (constructs)
  > Long-context capability is critical for multi-modal foundation models, especially for long video understanding. (ABSTRACT)
  - [LongVILA: Scaling Long-Context Visual Language Models for Long Videos](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e163450c1ae3167832971e6da29f38d-Paper-Conference.pdf)
- **Multimodal understanding** (constructs)
  > Integrating multi-modal understanding with long-context capability is important. (Section 1)
  - [LongVILA: Scaling Long-Context Visual Language Models for Long Videos](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e163450c1ae3167832971e6da29f38d-Paper-Conference.pdf)
- **Short-context ability** (constructs)
  > long-context alignment methods grapple with the balance between preserving short-context proficiency and cultivating long-context capabilities (Liu et al., 2024b).
  - [LongPO: Long Context Self-Evolution of Large Language Models through Short-to-Long Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/1332893b662f655660c9abdf793230cf-Paper-Conference.pdf)
- **Information extraction** (behaviors tasks)
  > Medical scenarios involve complex case histories, and selecting values from these contexts tests the capacity for long-context processing. (Section 1)
  - [MeNTi: Bridging Medical Calculator and LLM Agent with Nested Tool Calling](https://aclanthology.org/2025.naacl-long.263.pdf)
- **In-context learning** (constructs)
  > As LLMs have stronger capabilities and wider applications (Yang et al., 2024), its long-context capability becomes a vital bottleneck for various use cases (e.g. in-context learning, retrieval augmented generation, agent workflow etc.) (Agarwal et al., 2024; Xu et al., 2023; Weng, 2023). (Introduction)
  - [LongLeader: A Comprehensive Leaderboard for Large Language Models in Long-context Scenarios](https://aclanthology.org/2025.naacl-long.439.pdf)
- **Reasoning** (constructs)
  > The research community increasingly recognizes long-context modeling as a crucial capability for next-generation large language models, driven by diverse real-world applications ranging from in-depth reasoning (DeepSeek-AI, 2025; Zelikman et al., 2022)... (Introduction).
  - [Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention](https://aclanthology.org/2025.acl-long.1126.pdf)
- **Code generation** (behaviors tasks)
  > The research community increasingly recognizes long-context modeling as a crucial capability for next-generation large language models, driven by diverse real-world applications ranging from... repository-level code generation (Zhang et al., 2023a; Zhang et al.)... (Introduction).
  - [Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention](https://aclanthology.org/2025.acl-long.1126.pdf)
- **Scientific question answering** (behaviors tasks)
  > Task 1: ScienceQ&A Generation (LLMgen) Generates a synthesized summary response A to a research question Q using abstracts from the top N relevant papers. It must demonstrate (1) domain knowledge, (2) numerical proficiency, (3) long-range context understanding, and (4) cause-and-effect reasoning (Wadden et al., 2020). (Section 2)
  - [YESciEval: Robust LLM-as-a-Judge for Scientific Question Answering](https://aclanthology.org/2025.acl-long.675.pdf)
- **Graph understanding** (constructs)
  > At its core, the challenge of LLM understanding graph structures can be viewed as a stringent long sequence comprehension problem (Section 1)
  - [GraphInsight: Unlocking Insights in Large Language Models for Graph Structure Understanding](https://aclanthology.org/2025.acl-long.591.pdf)
- **State tracking** (behaviors tasks)
  > To evaluate long-context capabilities, we use the RULER benchmark (Hsieh et al., 2024), which consists of a set of synthetic needle-in-a-haystack, question-answering and variable tracking tasks, with varying context length from 4K to 131K tokens. (Section 5.1)
  - [xLSTM 7B: A Recurrent LLM for Fast and Efficient Inference](https://raw.githubusercontent.com/mlresearch/v267/main/assets/beck25b/beck25b.pdf)
- **Multi-hop reasoning** (constructs)
  > These results affirm that long-context capacity alone is not enough—multi-hop reasoning remains an open challenge. (Section 5)
  - [NovelHopQA: Diagnosing Multi-Hop Reasoning Failures in Long Narrative Contexts](https://aclanthology.org/2025.emnlp-main.1328.pdf)
- **Attention sparsity** (constructs)
  > Therefore, there is an urgent need for a lower-granularity sparse attention mechanism with a stronger emphasis on global context, in order to mitigate the increasingly heavy computational burden during the prefill stage as context lengths continue to grow. (Section 5)
  - [AnchorAttention: Difference-Aware Sparse Attention with Stripe Granularity](https://aclanthology.org/2025.emnlp-main.430.pdf)
- **Document understanding** (constructs)
  > Large language models (LLMs) have advanced to support long-context tasks such as document understanding (Li et al., 2024a), multi-turn dialogues (Yi et al., 2024), repository-level code completion (Jimenez et al., 2024), and complex reasoning (Zhou et al., 2025).
  - [LeanK: Learnable K Cache Channel Pruning for Efficient Decoding](https://aclanthology.org/2025.emnlp-main.1584.pdf)
- **Multi-turn dialogue** (behaviors tasks)
  > Large language models (LLMs) have advanced to support long-context tasks such as document understanding (Li et al., 2024a), multi-turn dialogues (Yi et al., 2024), repository-level code completion (Jimenez et al., 2024), and complex reasoning (Zhou et al., 2025).
  - [LeanK: Learnable K Cache Channel Pruning for Efficient Decoding](https://aclanthology.org/2025.emnlp-main.1584.pdf)
- **Code completion** (behaviors tasks)
  > Large language models (LLMs) have advanced to support long-context tasks such as document understanding (Li et al., 2024a), multi-turn dialogues (Yi et al., 2024), repository-level code completion (Jimenez et al., 2024), and complex reasoning (Zhou et al., 2025).
  - [LeanK: Learnable K Cache Channel Pruning for Efficient Decoding](https://aclanthology.org/2025.emnlp-main.1584.pdf)
- **Complex reasoning question answering** (behaviors tasks)
  > Large language models (LLMs) have advanced to support long-context tasks such as document understanding (Li et al., 2024a), multi-turn dialogues (Yi et al., 2024), repository-level code completion (Jimenez et al., 2024), and complex reasoning (Zhou et al., 2025).
  - [LeanK: Learnable K Cache Channel Pruning for Efficient Decoding](https://aclanthology.org/2025.emnlp-main.1584.pdf)
- **ArgKP21** (measurements)
  > Relatedly, we find that ArgKP21 does not fully test the long-context understanding of models. (Section 1)
  - [ArgCMV: An Argument Summarization Benchmark for the LLM-era](https://aclanthology.org/2025.emnlp-main.1110.pdf)
- **Cross-modal retrieval** (behaviors tasks)
  > The long-text-image retrieval task necessitates the alignment of text features from long texts with the image features from the corresponding images, which thereby evaluates the model’s ability to comprehend long texts. (Section 4.1)
  - [LoTLIP: Improving Language-Image Pre-training for Long Text Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/77828623211df05497ce3658300dafd9-Paper-Conference.pdf)
- **In-context prediction** (behaviors tasks)
  > Handling long-context inputs is crucial for large language models (LLMs) in tasks such as extended conversations, document summarization, and many-shot in-context learning. (Section ABSTRACT)
  - [What is Wrong with Perplexity for Long-context Language Modeling?](https://proceedings.iclr.cc/paper_files/paper/2025/file/ebd6641c32ed633c2a3addc689d39896-Paper-Conference.pdf)
- **Coreference resolution** (behaviors tasks)
  > Our method demonstrates the advantages and capabilities of information extraction and coreference resolution in understanding long contexts
  - [Bridging Context Gaps: Leveraging Coreference Resolution for Long Contextual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/a1b71d48d4806ecbe5a9e19fa3f10fdc-Paper-Conference.pdf)
- **Personalization** (constructs)
  > (d) Long-context Modeling Capacity (LC): As more exchanges between the user and the LLM occur, more personal information is gradually revealed, while the limited context length of LLMs makes it increasingly challenging for the LLM to integrate information from past interactions. (Section 3)
  - [Exploring the Potential of LLMs as Personalized Assistants: Dataset, Evaluation, and Analysis](https://aclanthology.org/2025.acl-long.504.pdf)
- **Memory** (constructs)
  > Despite these improvements, the state sizes of RNNs remain much smaller than those of Transformers with a 2k context length, making state size a critical bottleneck for long-context understanding.
  - [Scaling up the State Size of RNN LLMs for Long-Context Scenarios](https://aclanthology.org/2025.acl-long.564.pdf)
- **Code understanding** (constructs)
  > We evaluate our DSLA model on tasks requiring careful long-range interactions (Bai et al., 2024), including: ... (ii) Code Understanding, which require reasoning across multiple code files to answer complex questions
  - [On-the-Fly Adaptive Distillation of Transformer to Dual-State Linear Attention for Long-Context LLM Serving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ro25a/ro25a.pdf)
- **Few-shot task performance** (behaviors tasks)
  > We evaluate our DSLA model on tasks requiring careful long-range interactions (Bai et al., 2024), including: ... (iii) Few-shot learning requires the model to comprehend a limited number of examples and effectively perform various tasks, including classification, summarization, and reading comprehension.
  - [On-the-Fly Adaptive Distillation of Transformer to Dual-State Linear Attention for Long-Context LLM Serving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ro25a/ro25a.pdf)
- **Question answering** (behaviors tasks)
  > ...achieving substantial progress on tasks such as summarization and question answering that emphasize the effective utilization and understanding of long inputs.
  - [Long Chain-of-Thought Fine-tuning via Understanding-to-Reasoning Transition](https://aclanthology.org/2025.emnlp-main.1751.pdf)
