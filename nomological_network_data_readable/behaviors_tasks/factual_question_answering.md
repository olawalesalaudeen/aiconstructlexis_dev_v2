# Factual question answering
**Type:** Behavior  
**Referenced in:** 48 papers  
**Also known as:** Factual query answering, Single-fact question answering, Truthful Answering, Truthful question answering, Simple QA, Fact-based question answering, Faithfulness enhancement, Fact-seeking question answering, Factoid question answering, Trivia question answering  

## State of the Field

**Space of definitions.** Across the surveyed work, the dominant framing is answering direct factual or fact-seeking questions with a precise, correct response grounded in world knowledge. Most definitions describe the targets as objective, verifiable information, such as dates, locations, entities, or entity attributes, and several formulations expect a short answer, a yes or no response, or the correct object for a subject-relation prompt. Smaller variants define it as answering from provided facts or updated subject-relation-object knowledge, and some papers additionally require answers to avoid hallucinated content or common misconceptions; one multimodal setting tests the same behavior when an accompanying image may help or mislead.

**Variants.** Papers study several named variants. A recurrent naming is factoid question answering, where the answer is a single concise fact, and some papers also use fact-seeking question answering for objective, verifiable queries. A smaller line isolates single-fact question answering or simple QA as single-hop factual recall, and some work treats it as trivia question answering. Other papers place the behavior in settings such as answering from a given text, long-context or single-entity questions, multilingual geography and notable-person questions, Polish-context factual recall, updated-knowledge QA from subject-relation-object triplets, and factual QA with visual assistance.

**Space of elicitation and scores.** Papers link this behavior to 8 measurement instruments. TriviaQA is the most frequently linked instrument, followed by Natural Questions, BABILong, HotpotQA, and NFCorpus, plus 3 other instruments. The linked measures span open-domain and factual QA benchmarks, long-context factoid QA tasks, single-fact and single-entity question sets, and fact-seeking factuality benchmarks; scoring is usually reported with exact match, sometimes with F1, and one cross-lingual setup uses regular-expression extraction before exact-match assessment.

**What it is taken as evidence of.** Across the linked construct claims, the clearest use is as evidence of Factuality. One paper says factual accuracy is measured by factual QA benchmarks, so the behavior is used there as a measure of factuality. A separate, smaller link relates it to Memorization, describing simple QA as evaluating the recall and retrieval of factual knowledge rather than introducing another explicit measurement claim.

## Sources

**[How to Catch an AI Liar: Lie Detection in Black-Box LLMs by Asking Unrelated Questions](https://proceedings.iclr.cc/paper_files/paper/2024/file/efe79ae16496a0f5b57287873de072d1-Paper-Conference.pdf)**
> The observable behavior of providing a precise, factually correct answer to a question requiring world knowledge.

**[Does Reasoning Emerge? Examining the Probabilities of Causation in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d5a1f97d2b922da92e880d13b7d2bf02-Paper-Conference.pdf) (as "Factual query answering")**
> The observable behavior of responding to a direct query about a problem state based on provided facts.

**[BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Single-fact question answering")**
> The observable task of answering questions that require only one supporting fact.

**[Sail into the Headwind: Alignment via Robust Rewards and Dynamic Labels against Reward Hacking](https://proceedings.iclr.cc/paper_files/paper/2025/file/c78f81a878a72566422f37279bca0fd0-Paper-Conference.pdf) (as "Truthful Answering")**
> The observable task of providing factually accurate answers as evaluated on benchmarks.

**[Low-Rank Adapting Models for Sparse Autoencoders](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25r/chen25r.pdf) (as "Truthful question answering")**
> The observable behavior of providing answers that are factually correct and avoid common misconceptions.

**[From RAG to Memory: Non-Parametric Continual Learning for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gutierrez25a/gutierrez25a.pdf) (as "Simple QA")**
> Generating answers to questions that require retrieving and recalling a single fact or entity from a knowledge source.

**[WikiBigEdit: Understanding the Limits of Lifelong Knowledge Editing in LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/thede25a/thede25a.pdf) (as "Fact-based question answering")**
> Producing correct answers to factual questions based on updated knowledge, where each question is derived from a subject-relation-object triplet.

**[PaCE: Parsimonious Concept Engineering for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b3cca813dcd78fe75e4d4df2e6a0b1a7-Paper-Conference.pdf) (as "Faithfulness enhancement")**
> Generating outputs that are more factually grounded and less hallucinatory in response to prompts requesting information.

**[FacLens: Transferable Probe for Foreseeing Non-Factuality in Fact-Seeking Question Answering of Large Language Models](https://aclanthology.org/2025.emnlp-main.937.pdf) (as "Fact-seeking question answering")**
> The task in which an LLM answers questions that ask for objective, verifiable information such as dates, locations, or entities, typically with short and precise responses.

**[Efficient Context Selection for Long-ContextQA: No Tuning, No Iteration, Just Adaptive‐k](https://aclanthology.org/2025.emnlp-main.1017.pdf) (as "Factoid question answering")**
> The task of answering questions that have a single, concise factual answer, often requiring the retrieval of a few targeted facts.

**[Teaching Models to Balance Resisting and Accepting Persuasion](https://aclanthology.org/2025.naacl-long.412.pdf) (as "Trivia question answering")**
> The task of providing a correct, factual answer to a question about trivia.

## Relationships

### Factual question answering →
- **TriviaQA** (measurements) — *measured_by*
  > For factual question answering, we use the TriviaQA dataset (Joshi et al., 2017) with a 10K testing set
  - [Generalization v.s. Memorization: Tracing Language Models’ Capabilities Back to Pretraining Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/7cdf000d22c6cda21f3cbd7467aaf26f-Paper-Conference.pdf)
- **Natural Questions** (measurements) — *measured_by*
  > Our evaluations cover factual question answering (NaturalQuestions (Kwiatkowski et al., 2019), TriviaQA (Joshi et al., 2017)) (Section 4.2).
  - [Memory Layers at Scale](https://raw.githubusercontent.com/mlresearch/v267/main/assets/berges25a/berges25a.pdf)
- **Direct prompting** (measurements) — *measured_by*
  > “The findings we report are based on an LLM’s reasoning abilities as determined by two specific types (factual/counterfacutal) of prompts that we used.”
  - [Does Reasoning Emerge? Examining the Probabilities of Causation in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d5a1f97d2b922da92e880d13b7d2bf02-Paper-Conference.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > The TruthfulQA dataset (Lin et al., 2021a) assesses the model’s capability in providing factual responses. (Section 2.3)
  - [Extracting and Understanding the Superficial Knowledge in Alignment](https://aclanthology.org/2025.naacl-long.168.pdf)
- **SQuAD v1.1** (measurements) — *measured_by*
  > the SQUAD, NFCORPUS, and SCI-DOCS datasets consist of factual questions involving single entities (Section 4.1).
  - [SAKI-RAG: Mitigating Context Fragmentation in Long-Document RAG via Sentence-level Attention Knowledge Integration](https://aclanthology.org/2025.emnlp-main.63.pdf)
- **NFCorpus** (measurements) — *measured_by*
  > the SQUAD, NFCORPUS, and SCI-DOCS datasets consist of factual questions involving single entities (Section 4.1).
  - [SAKI-RAG: Mitigating Context Fragmentation in Long-Document RAG via Sentence-level Attention Knowledge Integration](https://aclanthology.org/2025.emnlp-main.63.pdf)
- **SimpleQA** (measurements) — *measured_by*
  > Factuality: SimpleQA (Wei et al., 2024) and FreshQA-2025-04-28 (Vu et al., 2023), two factuality benchmarks that evaluate the ability of language models to answer fact-seeking questions. (Section 3.2)
  - [Thinking Out Loud: Do Reasoning Models Know When They're Right?](https://aclanthology.org/2025.emnlp-main.73.pdf)
- **HotpotQA** (measurements) — *measured_by*
  > For testing on factoid QA tasks, we use HotpotQA (Yang et al., 2018), Natural Questions (NQ) (Kwiatkowski et al., 2019), and TriviaQA (Joshi et al., 2017), as curated by HELMET (Yen et al., 2025) for long-context benchmarking with 128k input tokens. (Section 4.1)
  - [Efficient Context Selection for Long-ContextQA: No Tuning, No Iteration, Just Adaptive‐k](https://aclanthology.org/2025.emnlp-main.1017.pdf)

### Associated with
- **Memorization** (constructs)
  > “Simple QA primarily evaluates the ability to recall and retrieve factual knowledge accurately.”
  - [From RAG to Memory: Non-Parametric Continual Learning for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gutierrez25a/gutierrez25a.pdf)
- **Factuality** (constructs)
  > memory layers improve the factual accuracy of language models by over 100% as measured by factual QA benchmarks (Section 1).
  - [Memory Layers at Scale](https://raw.githubusercontent.com/mlresearch/v267/main/assets/berges25a/berges25a.pdf)
