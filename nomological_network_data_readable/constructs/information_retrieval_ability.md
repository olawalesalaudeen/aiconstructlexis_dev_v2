# Information retrieval ability
**Type:** Construct  
**Referenced in:** 31 papers  
**Also known as:** Reasoning-intensive retrieval, Multimodal search capability, Inspiration retrieval ability, Multimodal retrieval capability, Text retrieval capability, Answer retrieval, Cross-lingual context retrieval, Recall capability, In-context retrieval, Information retrieval, Retrieval, Information retrieval capability, Information retrieval and localization  

## State of the Field

**Definition agreement:** Conflicting. A substantial share of papers define information retrieval ability as external search or document retrieval from a corpus, web, or literature collection, often involving multimodal inputs or reasoning-based relevance, while another substantial share define it as locating and extracting information from a provided long context, earlier input tokens, or context memory. Those definitions target different objects and tasks, so papers using them would often not be studying the same thing.

**Space of definitions.** Most definitions treat the construct as an ability to locate, search for, retrieve, or extract relevant information from text, a long context, memory, or an external corpus. Within that broad framing, many papers focus on finding specific facts or answer spans from earlier input or cross-lingual context, while some define it at the document level as identifying relevant items from a corpus. Smaller lines of work narrow it to reasoning-intensive retrieval, where relevant documents are connected by underlying principles, algorithms, or theorems rather than simple keyword or semantic matching, or broaden it to multimodal search and retrieval using both visual and textual information; one paper further specializes it to finding inspiration papers associated with a research background.

**Space of facets.** Papers explicitly divide the construct into subtypes such as reasoning-intensive retrieval, multimodal retrieval capability, text retrieval capability, cross-lingual context retrieval, answer retrieval, in-context retrieval, recall capability, and information retrieval and localization. Some works also position it against neighboring constructs: one disentangles retrieval from reasoning by varying corpus size and question difficulty, another contrasts information retrieval capability with generation capability, with retrieval reflected by a Retrieval Score and generation by a Recall Score, and another treats context as a dynamic memory store. Across these usages, closely related activities are given different names depending on whether the target is an external document, a span in long context, or content in multimodal or cross-lingual input.

**Space of measurement.** Papers link the construct to two measurement instruments and no behavioral indicators. The named instruments are BRIGHT, a benchmark for text retrieval that requires intensive reasoning to retrieve relevant documents, and MTEB, used as a retrieval benchmark for text retrieval capability; other snippets describe benchmark or task-based assessment through MMSEARCH, the MQAR task, and Needle-in-a-Haystack testing. Together, these operationalizations make the construct concrete as document retrieval, multimodal search evaluation, and locating factual information embedded in long contexts.

**Links.** Beyond measurement, one paper relates cross-lingual alignment to information retrieval ability, describing cross-lingual context retrieval as "a fundamental aspect of cross-lingual alignment." No paper here reports a causal relationship or correlation involving this construct.

## Sources

**[BRIGHT: A Realistic and Challenging Benchmark for Reasoning-Intensive Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/7a0f8055c838df8e62329a76c7c6403d-Paper-Conference.pdf) (as "Reasoning-intensive retrieval")**
> The ability to identify relevant documents for a query based on deep, nuanced connections like underlying principles, algorithms, or theorems, rather than simple keyword or semantic matching.

**[MMSearch: Unveiling the Potential of Large Models as Multi-modal Search Engines](https://proceedings.iclr.cc/paper_files/paper/2025/file/04e6525463afaa460b5a2e6868b18f18-Paper-Conference.pdf) (as "Multimodal search capability")**
> The latent ability of a model to use both visual and textual information to retrieve, rank, and synthesize answers from web content in a search setting.

**[MOOSE-Chem: Large Language Models for Rediscovering Unseen Chemistry Scientific Hypotheses](https://proceedings.iclr.cc/paper_files/paper/2025/file/51fd9a7d1706023cb9f8210cc6ac357c-Paper-Conference.pdf) (as "Inspiration retrieval ability")**
> The latent ability to identify literature items that can be associated with a research background to support novel hypothesis generation.

**[MM-EMBED: UNIVERSAL MULTIMODAL RETRIEVAL WITH MULTIMODAL LLMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/6d5d6afa9957cfc9142ba60e78a467e9-Paper-Conference.pdf) (as "Multimodal retrieval capability")**
> The latent ability of a model to retrieve relevant documents from a corpus containing diverse modalities (e.g., text, images, text-image pairs) in response to a query that may also be multimodal.

**[MM-EMBED: UNIVERSAL MULTIMODAL RETRIEVAL WITH MULTIMODAL LLMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/6d5d6afa9957cfc9142ba60e78a467e9-Paper-Conference.pdf) (as "Text retrieval capability")**
> The ability to perform retrieval effectively in text-to-text settings, where both queries and candidates are text.

**[Understanding LLMs' Cross-Lingual Context Retrieval: How Good It Is And Where It Comes From](https://aclanthology.org/2025.emnlp-main.1161.pdf) (as "Answer retrieval")**
> The latent ability to locate and extract the correct answer from a context in one language based on a cross-lingually encoded query, independent of language-specific surface forms.

**[Understanding LLMs' Cross-Lingual Context Retrieval: How Good It Is And Where It Comes From](https://aclanthology.org/2025.emnlp-main.1161.pdf) (as "Cross-lingual context retrieval")**
> The latent ability of a model to retrieve relevant contextual information in one language (e.g., English) when prompted with a query in a different language, relying on aligned multilingual representations.

**[Rodimus*: Breaking the Accuracy-Efficiency Trade-Off with Efficient Attentions](https://proceedings.iclr.cc/paper_files/paper/2025/file/59c08508131c3a50991f42dae7f69e1c-Paper-Conference.pdf) (as "Recall capability")**
> The model's ability to retrieve specific, factual information from a long context provided as input.

**[Understanding the Skill Gap in Recurrent Language Models: The Role of the Gather-and-Aggregate Mechanism](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bick25a/bick25a.pdf) (as "In-context retrieval")**
> The latent ability to precisely locate and extract relevant information from earlier in the input sequence, particularly for mapping contextual cues to specific outputs such as answer labels.

**[Attention-Level Speculation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cai25g/cai25g.pdf) (as "Information retrieval")**
> The latent ability to locate and extract specific, relevant pieces of information from a large body of text.

**[PhantomWiki: On-Demand Datasets for Reasoning and Retrieval Evaluation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gong25d/gong25d.pdf) (as "Retrieval")**
> The latent ability to access and utilize relevant information from a large external document corpus, especially when the full corpus exceeds the model's context window.

**[LOGO — Long cOntext aliGnment via efficient preference Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tang25j/tang25j.pdf) (as "Information retrieval capability")**
> The model's underlying ability to accurately locate and identify key, salient pieces of information embedded within a long context.

**[Minerva: A Programmable Memory Test Benchmark for Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xia25c/xia25c.pdf) (as "Information retrieval and localization")**
> The latent ability to locate, search for, and extract relevant information from context memory based on instructions or queries, treating the context as a dynamic memory store.

## Relationships

### Information retrieval ability →
- **BRIGHT** (measurements) — *measured_by*
  > To better benchmark retrieval on such challenging queries, we introduce BRIGHT, the first text retrieval benchmark that requires intensive reasoning to retrieve relevant documents. (ABSTRACT)
  - [BRIGHT: A Realistic and Challenging Benchmark for Reasoning-Intensive Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/7a0f8055c838df8e62329a76c7c6403d-Paper-Conference.pdf)
- **MTEB** (measurements) — *measured_by*
  > our model, MM-Embed, ... surpassing the state-of-the-art text retrieval model, NV-Embed-v1, on the MTEB retrieval benchmark. (Section 1)
  - [MM-EMBED: UNIVERSAL MULTIMODAL RETRIEVAL WITH MULTIMODAL LLMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/6d5d6afa9957cfc9142ba60e78a467e9-Paper-Conference.pdf)

### Associated with
- **Cross-lingual alignment** (constructs)
  > Cross-lingual context retrieval (extracting contextual information in one language based on requests in another) is a fundamental aspect of cross-lingual alignment (Abstract).
  - [Understanding LLMs' Cross-Lingual Context Retrieval: How Good It Is And Where It Comes From](https://aclanthology.org/2025.emnlp-main.1161.pdf)
