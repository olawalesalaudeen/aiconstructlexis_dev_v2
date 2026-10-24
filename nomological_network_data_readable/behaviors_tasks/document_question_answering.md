# Document question answering
**Type:** Behavior  
**Referenced in:** 53 papers  
**Also known as:** Contextual question answering, Document-based question answering, Long-context question answering, Open-book question answering, Webpage question answering, Flexible length question answering, Long-book question answering, Long-document question answering, Context-based question answering, Privacy question answering, Privacy policy question answering, File reading, Long document understanding  

## State of the Field

**Space of definitions.** Across the surveyed work, the dominant framing is answering a question from information supplied in a document, passage, or broader context, often with the expectation that the answer come from that context rather than from pre-trained knowledge alone. Many papers place it in long-context or long-document settings, where models retrieve, locate, aggregate, filter, or reason over information in one or more documents; some narrow it to a single provided document, while others explicitly include multimodal documents with text, charts, and images. A smaller line of work makes the response format more specific, for example asking for the exact answer "using only the information provided in the context," a concise answer to a privacy-policy query, a multi-statement answer with sentence-level citations, or a True/False answer supported by two key sentences.

**Variants.** Most variants differ by context length and source type. Papers variously describe the task as long-context, long-document, open-book, contextual, or document-based question answering, and study single-document, multi-document, and varying-length settings, including book-length inputs and questions whose evidence is distributed across very long documents. Smaller variants move into webpages and privacy policies, and one line contrasts natural and unnatural language contexts.

**Space of elicitation and scores.** Papers link this behavior to 17 measurement instruments, mostly benchmarks or datasets for long-context, long-document, or document-grounded QA. The most frequently linked instruments are InfiniteBench, NarrativeQA, LongBench, RULER, and DocBench. Other linked measures include document VQA and datasets used for open-book, faithfulness-oriented, and context QA.

**What it is taken as evidence of.** Papers do not converge on a single construct that this behavior reflects. It is linked to 2 constructs overall: one paper claims a causal relationship from document question answering to GUI understanding, stating that QA samples enhance performance in GUI understanding and OCR-related benchmarks, while another paper reports that document question answering is related to task generalization through closed and open-book QA task types. Separate from constructs, one paper uses document question answering to measure complex reasoning question answering, and another reports it is related to hallucination.

## Sources

**[Multimodal Task Vectors Enable Many-Shot Multimodal In-Context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/27571b74d6cd650b8eb6cf1837953ae8-Paper-Conference.pdf)**
> The task of answering questions based on the content of multimodal documents that may contain text, charts, and images.

**[RazorAttention: Efficient KV Cache Compression Through Retrieval Heads](https://proceedings.iclr.cc/paper_files/paper/2025/file/2a98af4fea6a24b73af7b588ca95f755-Paper-Conference.pdf) (as "Long-context question answering")**
> The observable action of generating answers to questions based on information contained within a lengthy input context.

**[AttriBoT: A Bag of Tricks for Efficiently Approximating Leave-One-Out Context Attribution](https://proceedings.iclr.cc/paper_files/paper/2025/file/2aab664e0d1656e8b56c74f868e1ea69-Paper-Conference.pdf) (as "Open-book question answering")**
> The task of answering a question using information provided in a given context, where the model is not expected to rely solely on its pre-trained knowledge.

**[Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf) (as "Webpage question answering")**
> Answering questions about non-image content in webpages using page structure and textual information.

**[Generative Adapter: Contextualizing Language Models in Parameters with A Single Forward Pass](https://proceedings.iclr.cc/paper_files/paper/2025/file/447708674d7f30492ca5338b36b07d0c-Paper-Conference.pdf) (as "Document-based question answering")**
> Answering questions using information contained in provided documents or passages, especially under varying context lengths.

**[FaithEval: Can Your Language Model Stay Faithful to Context, Even If "The Moon is Made of Marshmallows"](https://proceedings.iclr.cc/paper_files/paper/2025/file/48404cd9ce03946c6b7177691f3267a1-Paper-Conference.pdf) (as "Contextual question answering")**
> The task of generating an answer to a question based solely on the information provided in a given context passage.

**[LongPO: Long Context Self-Evolution of Large Language Models through Short-to-Long Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/1332893b662f655660c9abdf793230cf-Paper-Conference.pdf) (as "Long-book question answering")**
> The observable task of answering questions based on information contained within an extensive, book-length text.

**[From Artificial Needles to Real Haystacks: Improving Retrieval Capabilities in LLMs by Finetuning on Synthetic Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/15a321fbfc19fce9b325ec6e77dfb597-Paper-Conference.pdf) (as "Flexible length question answering")**
> The task of answering a True/False question that requires reasoning over two key sentences within a context of varying length.

**[SCBench: A KV Cache-Centric Analysis of Long-Context Methods](https://proceedings.iclr.cc/paper_files/paper/2025/file/a540b17fb2295c736d5afd6c507acf66-Paper-Conference.pdf) (as "Long-document question answering")**
> The observable task of answering questions by locating, aggregating, or filtering information from a long document provided in the context.

**[Context-Parametric Inversion: Why Instruction Finetuning May Not Actually Improve Context Reliance](https://proceedings.iclr.cc/paper_files/paper/2025/file/aa27ac7aca4e462da1439b43ceebc04c-Paper-Conference.pdf) (as "Context-based question answering")**
> Answering questions by using information supplied in the input context, especially when that context conflicts with pretrained knowledge.

**[Empowering Users in Digital Privacy Management through Interactive LLM-Based Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/bef8e5620c699630405adafaa86cb038-Paper-Conference.pdf) (as "Privacy question answering")**
> The observable task of providing accurate answers to specific user questions based on the content of a given privacy policy.

**[A Multi-Agent Framework for Mitigating Dialect Biases in Privacy Policy Question-Answering Systems](https://aclanthology.org/2025.acl-long.1554.pdf) (as "Privacy policy question answering")**
> The observable task of generating a concise and relevant answer to a user's query based on the text of a given privacy policy document.

**[Multi-agent Architecture Search via Agentic Supernet](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bi/zhang25bi.pdf) (as "File reading")**
> Reading and extracting information from files or documents to answer a query.

**[LV-XAttn: Distributed Cross-Attention for Long Visual Inputs in Multimodal Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chang25c/chang25c.pdf) (as "Long document understanding")**
> The task of processing and comprehending lengthy text documents to extract information or answer questions.

## Relationships

### Document question answering →
- **InfiniteBench** (measurements) — *measured_by*
  > En.QA is annotated by a pipeline that ensures the questions’ necessitating of long-range dependencies and reasoning, beyond simple short passage retrieval. (Section 4.1)
  - [ChatQA 2: Bridging the Gap to Proprietary LLMs in Long Context and RAG Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7b562dac391e9c7af691e8ef886ad10-Paper-Conference.pdf)
- **NarrativeQA** (measurements) — *measured_by*
  > We use NarrativeQA (Koˇcisk´y et al., 2018) ... for evaluating long-document QA.
  - [HELMET: How to Evaluate Long-context Models Effectively and Thoroughly](https://proceedings.iclr.cc/paper_files/paper/2025/file/f5332c8273d02729730a9c24dec2135e-Paper-Conference.pdf)
- **LongBench** (measurements) — *measured_by*
  > In this section, we comprehensively evaluate how structurization boosts QA ability on seven datasets from the LongBench benchmark [3] with a variety of LLMs to examine. (Section 4.1)
  - [Enhancing LLM’s Cognition via Structurization](https://proceedings.neurips.cc/paper_files/paper/2024/file/f169ec4d47933ea4896b994af8ff4f17-Paper-Conference.pdf)
- **RULER** (measurements) — *measured_by*
  > "The RULER benchmark (Hsieh et al., 2024) encompasses a variety of synthetic tasks, including eight variants of Needle-in-a-Haystack (NIAH), as well as tasks involving variable tracking, counting, and long-context question answering (QA)."
  - [Why Does the Effective Context Length of LLMs Fall Short?](https://proceedings.iclr.cc/paper_files/paper/2025/file/884baf65392170763b27c914087bde01-Paper-Conference.pdf)
- **DocVQA** (measurements) — *measured_by*
  > Then, we consider the document questions answering task... We adopt a dataset that originates from a Privacy Preserving Federated Learning Document VQA (PFL-DocVQA) competition (Tito et al., 2023). (Section 4.2)
  - [Privacy-Preserving In-Context Learning for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/572cd21bd5dea96b065476b77d21b3c6-Paper-Conference.pdf)
- **SQuAD 2.0** (measurements) — *measured_by*
  > “To this end, we focus on three open-book QA datasets: 1. SQuAD 2.0 (Rajpurkar et al., 2018): A reading comprehension benchmark where a model is presented a question along with a Wikipedia article containing the answer.”
  - [AttriBoT: A Bag of Tricks for Efficiently Approximating Leave-One-Out Context Attribution](https://proceedings.iclr.cc/paper_files/paper/2025/file/2aab664e0d1656e8b56c74f868e1ea69-Paper-Conference.pdf)
- **HotpotQA** (measurements) — *measured_by*
  > “To this end, we focus on three open-book QA datasets: 2. HotpotQA (Yang et al., 2018): A multi-hop question answering benchmark that requires reason-ing across paragraphs from multiple Wikipedia pages”
  - [AttriBoT: A Bag of Tricks for Efficiently Approximating Leave-One-Out Context Attribution](https://proceedings.iclr.cc/paper_files/paper/2025/file/2aab664e0d1656e8b56c74f868e1ea69-Paper-Conference.pdf)
- **Qasper** (measurements) — *measured_by*
  > “To this end, we focus on three open-book QA datasets: 3. QASPER (Dasigi et al., 2021): A document-grounded, information-seeking question answering dataset”
  - [AttriBoT: A Bag of Tricks for Efficiently Approximating Leave-One-Out Context Attribution](https://proceedings.iclr.cc/paper_files/paper/2025/file/2aab664e0d1656e8b56c74f868e1ea69-Paper-Conference.pdf)
- **LongBench v2** (measurements) — *measured_by*
  > “We utilize LongBench v2 (Bai et al., 2024), a benchmark designed for challenging long-context question-answering”
  - [Graph World Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/feng25p/feng25p.pdf)
- **HELMET** (measurements) — *measured_by*
  > The evaluation spans five task types from the HELMET benchmark: synthetic recall, retrieval-augmented generation (RAG), many-shot in-context learning (ICL), passage re-ranking, and long-document QA, covering a total of 17 sub-tasks. (Section 4.1. Evaluation)
  - [NExtLong: Toward Effective Long-Context Training without Long Documents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gao25n/gao25n.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > We evaluate Cake across various context lengths using three datasets with different task types: LongChat (Li et al., 2023) for multi-turn conversations, and TriviaQA and NarrativeQA (Bai et al., 2023) for long-document question-answering tasks.
  - [Compute or Load KV Cache? Why Not Both?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jin25d/jin25d.pdf)
- **DocBench** (measurements) — *measured_by*
  > We conduct experiments on two multi-modal long-context document understanding and question-answering benchmarks, including MMLongBench-Doc (Ma et al., 2024) and DocBench (Zou et al., 2025). (Section 4.1)
  - [DocAgent: An Agentic Framework for Multi-Modal Long-Context Document Understanding](https://aclanthology.org/2025.emnlp-main.893.pdf)
- **HAGRID** (measurements) — *measured_by*
  > ...and make Hagrid (Kamalloo et al., 2023) dataset for context QA task (Section 4.1.2).
  - [Faster In-Context Learning for LLMs via N-Gram Trie Speculative Decoding](https://aclanthology.org/2025.emnlp-main.911.pdf)

### Associated with
- **Complex reasoning** (constructs)
  > HOMER also improves the prediction accuracy on question answering by 3% (32.7% →35.7%), presenting its capability to perform complex reasoning about the content in the extended context length.
  - [Hierarchical Context Merging: Better Long Context Understanding for Pre-trained LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/06694da057cb15fef11542270a592627-Paper-Conference.pdf)
