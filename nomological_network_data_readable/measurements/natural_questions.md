# Natural Questions
**Type:** Measurement  
**Referenced in:** 169 papers  
**Also known as:** NQ, NQ-Open, NaturalQuestion, NaturalQuestions, NQ dataset, Nature Questions, NaturalQuestions (NQ-Open), NQ Open, Natural Questions (NQ), NATURAL QUESTIONS (NQ), NaturalQA, NaturalQuestions-Open  

## State of the Field

**What it is.** Across papers, Natural Questions is most commonly described as a question answering benchmark built from real user queries to Google Search, typically paired with Wikipedia-based short or long answers, sometimes described as human-annotated. The prevailing framing is open-domain QA, often single-hop or knowledge-intensive, though some authors instead use it as a closed-book or fact-recall benchmark, and others describe retrieval, open-book, long-form QA, or multi-document QA uses. Papers also refer to variants such as NQ, NaturalQA, NaturalQuestions, and NQ-Open or NaturalQuestions-Open, with reported settings including 0-shot, 3-shot, 5-shot, and 32-shot.

**What it is claimed to measure.** Papers use Natural Questions to measure 12 constructs and 9 behavioral indicators, so its claimed measurement role is spread across many targets rather than concentrated on one. The dominant uses are to measure question answering and open-domain question answering, and papers also use it to measure world knowledge, factuality, and editing locality, with additional work reporting other behavioral and construct-level targets beyond these.

**Space of uses.** Natural Questions is linked to 4 other instruments, and papers usually deploy it as one benchmark within broader evaluation bundles rather than in isolation. Recorded links say that Natural Questions is measured by BEIR, QuALITY, and lm-evaluation-harness, and is related to HELMET. Across the descriptions, authors also use it as a recurring source of questions or prompts for downstream setups, including long-form QA, editing-locality tests, and multi-document QA procedures.

## Sources

**[INSIDE: LLMs' Internal States Retain the Power of Hallucination Detection](https://proceedings.iclr.cc/paper_files/paper/2024/file/0d1986a61e30e5fa408c81216a616e20-Paper-Conference.pdf)**
> Natural Questions (NQ) is a closed-book question answering dataset derived from real user queries, used for evaluation.

**[Language Model Cascades: Token-Level Uncertainty And Beyond](https://proceedings.iclr.cc/paper_files/paper/2024/file/11f5520daf9132775e8604e89f53925a-Paper-Conference.pdf) (as "NaturalQA")**
> A question answering benchmark included in the expanded evaluation set.

**[Making Retrieval-Augmented Language Models Robust to Irrelevant Context](https://proceedings.iclr.cc/paper_files/paper/2024/file/8011b23e1dc3f57e1b6211ccad498919-Paper-Conference.pdf) (as "NQ")**
> Natural Questions benchmark, a real-world question answering dataset requiring retrieval and comprehension of factual information, evaluated in a 32-shot setting.

**[From Artificial Needles to Real Haystacks: Improving Retrieval Capabilities in LLMs by Finetuning on Synthetic Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/15a321fbfc19fce9b325ec6e77dfb597-Paper-Conference.pdf) (as "NQ-Open")**
> An open-domain question-answering benchmark derived from the Natural Questions dataset, where questions are real user queries to a search engine.

**[Physics of Language Models: Part 3.3, Knowledge Capacity Scaling Laws](https://proceedings.iclr.cc/paper_files/paper/2025/file/26d3c9a66836ded8f34a944f2bfe868e-Paper-Conference.pdf) (as "NaturalQuestions")**
> A question-answering dataset derived from real user queries to the Google search engine, cited as an example of a world knowledge benchmark.

**[Determine-Then-Ensemble: Necessity of Top-k Union for Large Language Model Ensembling](https://proceedings.iclr.cc/paper_files/paper/2025/file/fbb10d319d44f8c3b4720873e4177c65-Paper-Conference.pdf) (as "NaturalQuestion")**
> A question-answering corpus of queries issued to the Google search engine.

**[MMKE-Bench: A Multimodal Editing Benchmark for Diverse Visual Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/01fb6de3360f9e32862665580e2c5853-Paper-Conference.pdf) (as "NQ dataset")**
> A dataset used to source text questions for evaluating locality in knowledge editing.

**[SWIFT: On-the-Fly Self-Speculative Decoding for LLM Inference Acceleration](https://proceedings.iclr.cc/paper_files/paper/2025/file/d74d002a9154b4cc433a234feb27c5f4-Paper-Conference.pdf) (as "Nature Questions")**
> A question answering dataset used to evaluate QA behavior under dynamic input streams.

**[Modeling Future Conversation Turns to Teach LLMs to Ask Clarifying Questions](https://proceedings.iclr.cc/paper_files/paper/2025/file/97e2df4bb8b2f1913657344a693166a2-Paper-Conference.pdf) (as "NaturalQuestions (NQ-Open)")**
> A question answering dataset of Google search queries with annotated answers from Wikipedia and multiple annotators.

**[Steer LLM Latents for Hallucination Detection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/park25a/park25a.pdf) (as "NQ Open")**
> Open-domain version of the Natural Questions dataset, used for evaluating question answering and hallucination detection in realistic settings.

**[Long-Context LLMs Meet RAG: Overcoming Challenges for Long Inputs in RAG](https://proceedings.iclr.cc/paper_files/paper/2025/file/5df5b1f121c915d8bdd00db6aac20827-Paper-Conference.pdf) (as "Natural Questions (NQ)")**
> A question answering dataset used to evaluate RAG system performance by varying the number of retrieved passages.

**[SePer: Measure Retrieval Utility Through The Lens Of Semantic Perplexity Reduction](https://proceedings.iclr.cc/paper_files/paper/2025/file/c44c4afd77d5ee760e7f4bed0c50f878-Paper-Conference.pdf) (as "NATURAL QUESTIONS (NQ)")**
> A question answering dataset consisting of real user questions posed to Google search and corresponding answers found in Wikipedia articles.

**[Dataset Decomposition: Faster LLM Training with Variable Sequence Length Curriculum](https://proceedings.neurips.cc/paper_files/paper/2024/file/3f9bf45ea04c98ad7cb857f951f499e2-Paper-Conference.pdf) (as "NaturalQuestions-Open")**
> A dataset subset used for MDQA experiments to evaluate context awareness across various contextual positions.

## Relationships

### → Natural Questions
- **Question answering** (behaviors tasks) — *measured_by*
  > we first fine-tune Llama 2-7B-chat on TruthfulQA and then evaluate 0-shot on three out-of-domain question-answering benchmarks: TriviaQA [18], Natural Questions [20, NQ], and MMLU [14]. (Section 6).
  - [LoFiT: Localized Fine-tuning on LLM Representations](https://proceedings.neurips.cc/paper_files/paper/2024/file/122ea6470232ee5e79a2649243348005-Paper-Conference.pdf)
- **Open-domain question answering** (behaviors tasks) — *measured_by*
  > We evaluate BTR on five knowledge-rich NLP tasks, including three open-domain question-answering tasks (NaturalQuestions (Kwiatkowski et al., 2019), TriviaQA (Joshi et al., 2017), and WebQA (Berant et al., 2013)) (Section 2).
  - [BTR: Binary Token Representations for Efficient Retrieval Augmented Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c0f721d329c1a10546869c783e866fb7-Paper-Conference.pdf)
- **World knowledge** (constructs) — *measured_by*
  > World Knowledge (5-shot): NaturalQuestions (NQ, Kwiatkowski et al. (2019))... (Section 4.2).
  - [Megalodon: Efficient LLM Pretraining and Inference with Unlimited Context Length](https://proceedings.neurips.cc/paper_files/paper/2024/file/840abfadd04c967feaa2a49aba94a32d-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > We have conducted additional experiments on more realistic open-ended generations datasets, Hot-PotQA [57], Natural Question (NQ) [23], TriviaQA [21]. (Appendix D)
  - [SLED: Self Logits Evolution Decoding for Improving Factuality in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0939f13ffce3ff487509d902ddba4571-Paper-Conference.pdf)
- **Factuality** (constructs) — *measured_by*
  > "factual QA accuracy (exact match on NaturalQuestions and F1 score on TriviaQA)"
  - [Memory Layers at Scale](https://raw.githubusercontent.com/mlresearch/v267/main/assets/berges25a/berges25a.pdf)
- **Editing locality** (constructs) — *measured_by*
  > The unrelated tuples (xu i , yu i )m i=1 are sampled from Natural Questions (NQ; Kwiatkowski et al., 2019). (Section 5).
  - [Massive Editing for Large Language Models via Meta Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/f074097f6f186947726ef28819d589e7-Paper-Conference.pdf)
- **Factual recall** (behaviors tasks) — *measured_by*
  > (f) fact recall (WebQuestions (Berant et al., 2013), Natural Questions (Kwiatkowski et al., 2019)) (Section 4.2)
  - [Think before you speak: Training Language Models With Pause Tokens](https://proceedings.iclr.cc/paper_files/paper/2024/file/76917808731dae9e6d62c2a7a6afb542-Paper-Conference.pdf)
- **Open-ended question answering** (behaviors tasks) — *measured_by*
  > Specifically, we consider the open-ended QA task, where the model is prompted to generate the answer in a declarative form given a question. To validate our method and its theoretical guarantee on controlling FDR-E, we create a dataset on textual entailment using the Natural Questions (NQ) dataset [17] for each GLM. (Section A.3.2).
  - [Selective Generation for Controllable Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/5a6815122f533193a022cbc41786c1cc-Paper-Conference.pdf)
- **Retrieval-augmented generation** (behaviors tasks) — *measured_by*
  > We benchmark the caching variants on Natural Questions (Kwiatkowski et al., 2019) using 2,681,468 documents from BEIR NQ (Thakur et al., 2021) as our index. (Section 5, Setup)
  - [Generative Representational Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/70cf215430492f7d34830a24e744b3f1-Paper-Conference.pdf)
- **Factual question answering** (behaviors tasks) — *measured_by*
  > Our evaluations cover factual question answering (NaturalQuestions (Kwiatkowski et al., 2019), TriviaQA (Joshi et al., 2017)) (Section 4.2).
  - [Memory Layers at Scale](https://raw.githubusercontent.com/mlresearch/v267/main/assets/berges25a/berges25a.pdf)
- **Generalization** (constructs) — *measured_by*
  > To test generalization (Section 4.4), we additionally evaluate on MATH (4-shot) (Hendrycks et al., 2021b), MBPP (3-shot) (Austin et al., 2021), NaturalQuestions (5-shot) (Kwiatkowski et al., 2019), TriviaQA (5-shot) (Joshi et al., 2017), Hellaswag (0-shot) (Zellers et al., 2019), PIQA (0-shot) (Bisk et al., 2020), and TruthfulQA (0-shot) (Lin et al., 2022).
  - [Self-MoE: Towards Compositional Large Language Models with Self-Specialized Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/558a100caa93422df215fadb9e9b1dd7-Paper-Conference.pdf)
- **Factual knowledge** (constructs) — *measured_by*
  > For factual knowledge, we use PopQA (Mallen et al., 2023), TriviaQA (Joshi et al., 2017), and Natural Questions (NQ) (Kwiatkowski et al., 2019). (Section 5)
  - [LLM Braces: Straightening Out LLM Predictions with Relevant Sub-Updates](https://aclanthology.org/2025.acl-long.393.pdf)
- **Information retrieval** (behaviors tasks) — *measured_by*
  > We conduct main experiments on Natural Questions (NQ) [21] and TriviaQA [18] datasets, both of which are widely used retrieval benchmarks... We use passage-level Hits@{1, 5} and Mean Reciprocal Rank (MRR)@5 as evaluation metrics.
  - [Self-Retrieval: End-to-End Information Retrieval with One Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/741ad162ab0f3da6f9aad60e9e34f5f1-Paper-Conference.pdf)
- **Knowledge-based question answering** (behaviors tasks) — *measured_by*
  > “Datastore scaling brings major improvements to knowledge-intensive question answering tasks such as NQ and TQA”
  - [Scaling Retrieval-Based Language Models with a Trillion-Token Datastore](https://proceedings.neurips.cc/paper_files/paper/2024/file/a5d8aba27dfef4e849e8cb03fb87a954-Paper-Conference.pdf)
- **Knowledge conflict resolution** (constructs) — *measured_by*
  > We benchmark the current LLM’s ability to perform situated faithful reasoning on several question-answering tasks, including FreshQA (Vu et al., 2023), NaturalQA (Kwiatkowski et al., 2019), TriviaQA (Joshi et al., 2017), PopQA (Mallen et al., 2023).
  - [To Trust or Not to Trust? Enhancing Large Language Models' Situated Faithfulness to External Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/186a213d720568b31f9b59c085a23e5a-Paper-Conference.pdf)
- **Hallucination resistance** (constructs) — *measured_by*
  > Gekhman et al. (2024) shows that finetuning on factual information encourages hallucinations, something that we verify observing the significant degradation on TriviaQA and NQ-Open, which are knowledge-based benchmarks.
  - [From Artificial Needles to Real Haystacks: Improving Retrieval Capabilities in LLMs by Finetuning on Synthetic Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/15a321fbfc19fce9b325ec6e77dfb597-Paper-Conference.pdf)
- **Knowledge retention** (constructs) — *measured_by*
  > To evaluate the ability of M+ to recall long-term knowledge, we follow the experimental setup in MemoryLLM (Wang et al., 2024a) on datasets SQuAD and NaturalQA (Section 4.3.1).
  - [M+: Extending MemoryLLM with Scalable Long-Term Memory](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25au/wang25au.pdf)
- **Memorization** (constructs) — *measured_by*
  > “Simple QA primarily evaluates the ability to recall and retrieve factual knowledge accurately.” and “we randomly collect 1, 000 queries from the NaturalQuestions (NQ) dataset”
  - [From RAG to Memory: Non-Parametric Continual Learning for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gutierrez25a/gutierrez25a.pdf)
- **Single-hop question answering** (behaviors tasks) — *measured_by*
  > “Natural Questions (NQ; Kwiatkowski et al., 2019), Single-hop QA”
  - [Training a Utility-based Retriever Through Shared Context Attribution for Retrieval-Augmented Language Models](https://aclanthology.org/2025.emnlp-main.33.pdf)

### Associated with
- **HELMET** (measurements)
  > For testing on factoid QA tasks, we use HotpotQA (Yang et al., 2018), Natural Questions (NQ) (Kwiatkowski et al., 2019), and TriviaQA (Joshi et al., 2017), as curated by HELMET (Yen et al., 2025) for long-context benchmarking with 128k input tokens. (Section 4.1)
  - [Efficient Context Selection for Long-ContextQA: No Tuning, No Iteration, Just Adaptive‐k](https://aclanthology.org/2025.emnlp-main.1017.pdf)
- **BEIR** (measurements)
  > “nine public datasets in the BEIR benchmark (Thakur et al., 2021), including ... NQ (Kwiatkowski et al., 2019)”
  - [Attention in Large Language Models Yields Efficient Zero-Shot Re-Rankers](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5b1890a7c1a79fe9b32b0f442347089-Paper-Conference.pdf)
