# Long-form text generation
**Type:** Behavior  
**Referenced in:** 35 papers  
**Also known as:** Long-form generation, Open-ended generation, Wikipedia article generation, Coherent multi-paragraph generation, Open-ended long text generation, Long-text generation, Long-response generation, Ultra-long sequence generation, Long-form response generation, Long-sequence generation, Long-text Generation, Document-level generation, Open-domain text generation, Long sequence generation  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats long-form text generation as producing extended text in response to a prompt, usually multi-sentence, multi-paragraph, or document-level, and often open-ended or context-specific. Definitions repeatedly mention coherence and contextual relevance, and several add that outputs contain multiple factual claims, such as biographies or detailed answers; as LoGU: Long-form Generation with Uncertainty Expressions notes, responses may span "hundreds or even thousands of words." A smaller line of work narrows the behavior to full documents, encyclopedic or Wikipedia-style articles, or exceptionally long token sequences, including settings above 10,000 tokens and up to 100K. Success is variously described in terms of coherent flow, informativeness, structure, factual consistency, comprehensive coverage, or simply generating very long sequences.

**Variants.** Papers study several named variants. Common formulations include biography generation and long-form QA or fact-seeking prompts, sometimes over multiple topics, alongside open-ended generation for general-purpose prompts and multilingual settings. Other work focuses on document or article generation, including complete Wikipedia-style articles built from web sources and open-domain encyclopedic text generated from internal knowledge; Long-form factuality in large language models describes prompts that solicit responses spanning multiple paragraphs. A smaller set examines multimodal or ultra-long settings, such as detailed image descriptions, long generation in vision-language models, outputs from unordered key points, structured outputs like diaries or floorplans, and sequences measured in the tens of thousands of tokens.

**Space of elicitation and scores.** Papers link this behavior to 8 measurement instruments. The most frequently named are HelloBench, LongGenBench, LLM-as-a-judge, LLaVA-Bench-in-the-Wild, and LongBench, and 3 other instruments; most are benchmarks or evaluation sets, while LLM-as-a-judge is used as a scoring method for instruction-following tasks that require long-form generations. Their uses differ: LongGenBench is described as testing whether models can follow instructions over extended sequences, LongBench is used for long-sequence generation, and the remaining instruments include a fact-seeking prompt set and long-text corpora or test sets.

**What it is taken as evidence of.** Papers connect long-form text generation to 2 constructs, and both links are framed as related rather than direct measurement claims. One line of work relates it to instruction following ability, while another relates it to length generalization, placing long text generation among tasks whose effectiveness can diminish when input length exceeds training length. Taken together, papers do not converge on a single construct that this behavior is meant to evidence.

## Sources

**[LoGU: Long-form Generation with Uncertainty Expressions](https://aclanthology.org/2025.acl-long.928.pdf) (as "Long-form generation")**
> Producing extended, coherent text responses (e.g., biographies) that contain multiple factual claims, often spanning hundreds of words.

**[Multilingual Arbitration: Optimizing Data Pools to Accelerate Multilingual Progress](https://aclanthology.org/2025.acl-long.939.pdf) (as "Open-ended generation")**
> Producing unstructured, long-form text responses to open-ended prompts in multiple languages.

**[Bias in Language Models: Beyond Trick Tests and Towards RUTEd Evaluation](https://aclanthology.org/2025.acl-long.7.pdf)**
> The observable act of producing extended, context-specific text in response to a prompt, as required for many real-world tasks.

**[Hierarchical Memory Organization for Wikipedia Generation](https://aclanthology.org/2025.acl-long.1423.pdf) (as "Wikipedia article generation")**
> Producing full-length, structured Wikipedia-style articles from web-sourced information, including section organization and content synthesis.

**[SwarmAgentic: Towards Fully Automated Agentic System Generation via Swarm Intelligence](https://aclanthology.org/2025.emnlp-main.93.pdf) (as "Coherent multi-paragraph generation")**
> The specific task of producing a well-structured and logically flowing text composed of multiple paragraphs from a collection of unordered points.

**[From General Reward to Targeted Reward: Improving Open-ended Long-context Generation Models](https://aclanthology.org/2025.emnlp-main.260.pdf) (as "Open-ended long text generation")**
> Producing lengthy, coherent, and informative responses to complex questions that require synthesis of knowledge across multiple topics or domains.

**[DrDiff: Dynamic Routing Diffusion with Hierarchical Attention for Breaking the Efficiency-Quality Trade-off](https://aclanthology.org/2025.emnlp-main.474.pdf) (as "Long-text generation")**
> The task of producing coherent and contextually relevant text sequences that are exceptionally long, such as exceeding 10,000 tokens.

**[Dialogue Without Limits: Constant-Sized KV Caches for Extended Response in LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ghadia25a/ghadia25a.pdf) (as "Long-response generation")**
> The task of generating a substantial number of output tokens from a relatively short input prompt, such as in essay writing or code synthesis.

**[TokenSwift: Lossless Acceleration of Ultra Long Sequence Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25z/wu25z.pdf) (as "Ultra-long sequence generation")**
> The observable task of producing a continuous, coherent text sequence of exceptional length, such as 100,000 tokens.

**[Long-form factuality in large language models](https://proceedings.neurips.cc/paper_files/paper/2024/file/937ae0e83eb08d2cb8627fe1def8c751-Paper-Conference.pdf) (as "Long-form response generation")**
> The task of generating multi-paragraph, detailed textual answers in response to open-ended prompts.

**[MiniCache: KV Cache Compression in Depth Dimension for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fd0705710bf01b88a60a3d479ea341d9-Paper-Conference.pdf) (as "Long-sequence generation")**
> The task of generating coherent and relevant text over an extended context, often requiring the model to maintain consistency and track information over thousands of tokens.

**[Harnessing Diversity for Important Data Selection in Pretraining Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b588d9b67932b459ea66ff6e2804c6b3-Paper-Conference.pdf) (as "Long-text Generation")**
> The observable behavior of producing coherent and extended text outputs such as articles or stories.

**[Integrative Decoding: Improving Factuality via Implicit Self-consistency](https://proceedings.iclr.cc/paper_files/paper/2025/file/adaf1463442f5986fe81dc6c719a13a1-Paper-Conference.pdf) (as "Document-level generation")**
> A specific type of long-form generation that requires producing a response structured as a complete document.

**[Self-contradictory Hallucinations of Large Language Models: Evaluation, Detection and Mitigation](https://proceedings.iclr.cc/paper_files/paper/2024/file/b0d4b9d3dc41b36cad1d36ddd27858ab-Paper-Conference.pdf) (as "Open-domain text generation")**
> The observable generation of long-form, encyclopedic-style text about a given entity using only the model's internal knowledge, without external retrieval.

**[Inducing High Energy-Latency of Large Vision-Language Models with Verbose Images](https://proceedings.iclr.cc/paper_files/paper/2024/file/4a6a5e2e8a27262501bda3463fcf7b21-Paper-Conference.pdf) (as "Long sequence generation")**
> The observable behavior of a vision-language model producing an extended sequence of tokens, measured by the number of generated tokens before termination.

## Relationships

### Long-form text generation →
- **HelloBench** (measurements) — *measured_by*
  > Long-text Generation: WikiText (Merity et al., 2016), and HelloBench (Que et al., 2024).
  - [Harnessing Diversity for Important Data Selection in Pretraining Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b588d9b67932b459ea66ff6e2804c6b3-Paper-Conference.pdf)
- **LongGenBench** (measurements) — *measured_by*
  > We introduced LongGenBench, a synthetic benchmark that evaluates long-form generation capabilities of language models by testing their ability to follow instructions over extended sequences. (Section 6)
  - [LongGenBench: Benchmarking Long-Form Generation in Long Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/141304a37d59ec7f116f3535f1b74bde-Paper-Conference.pdf)
- **LongFact** (measurements) — *measured_by*
  > “LongFact consists of 2,280 fact-seeking prompts that solicit long-form responses across 38 manually-selected topics.”
  - [Long-form factuality in large language models](https://proceedings.neurips.cc/paper_files/paper/2024/file/937ae0e83eb08d2cb8627fe1def8c751-Paper-Conference.pdf)
- **WikiText** (measurements) — *measured_by*
  > Long-text Generation: WikiText (Merity et al., 2016), and HelloBench (Que et al., 2024).
  - [Harnessing Diversity for Important Data Selection in Pretraining Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b588d9b67932b459ea66ff6e2804c6b3-Paper-Conference.pdf)
- **LLaVA-Bench-in-the-Wild** (measurements) — *measured_by*
  > Long Generation: Evaluates extended inference using LLaVABench (Liu et al., 2024b) and MMDU (Liu et al., 2024e). (Section 4.3).
  - [CoMemo: LVLMs Need Image Context with Image Memory](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25bn/liu25bn.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > the evaluation metrics of instruction-following tasks, especially those that require long-form generations (e.g., LLM-judge (Dubois et al., 2023) and code generation benchmarks (Chen et al., 2021)).
  - [NICE Data Selection for Instruction Tuning in LLMs with Non-differentiable Evaluation Metric](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25bm/wang25bm.pdf)

### → Long-form text generation
- **Instruction following** (behaviors tasks) — *causes*
  > The ability to follow instructions is essential for long text generation (Reversed NIAH1), just as effective information retrieval is fundamental for processing long-context inputs (NIAH(Kamradt, 2023)). (Section 1)
  - [LongGenBench: Benchmarking Long-Form Generation in Long Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/141304a37d59ec7f116f3535f1b74bde-Paper-Conference.pdf)

### Associated with
- **Length generalization** (constructs)
  > While transformer-based models exhibit satisfying performances in tasks of consistent length and distribution, their effectiveness tends to diminish sharply when the input length exceeds the training length, e.g., long document summarization, “needle in a haystack” search, and long text generation. (Section 1)
  - [DAPE: Data-Adaptive Positional Encoding for Length Extrapolation](https://proceedings.neurips.cc/paper_files/paper/2024/file/2f050fa9f0d898e3f265d515f50ae8f9-Paper-Conference.pdf)
- **Code generation** (behaviors tasks)
  > In contrast, long-response tasks, such as essay writing and code generation, generate a substantial number of output tokens during the decode phase, requiring sustained attention over growing sequences of self-generated tokens. (Section 1)
  - [Dialogue Without Limits: Constant-Sized KV Caches for Extended Response in LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ghadia25a/ghadia25a.pdf)
