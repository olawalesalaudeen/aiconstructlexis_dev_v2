# HotpotQA
**Type:** Measurement  
**Referenced in:** 180 papers  
**Also known as:** HotPotQA, HOTPOTQA, Hotpot-QA, Hotpot_QA  

## State of the Field

**What it is.** Across papers, the prevailing description treats HotpotQA as a multi-hop question answering benchmark or dataset, usually based on Wikipedia, where answering requires finding, combining, or reasoning over multiple supporting documents, paragraphs, passages, or facts. Some authors instead frame it as multi-hop reading comprehension, open-domain or search-based QA, and a smaller line describes it either as an open-ended task with long answers or as a closed-ended task with short entity or yes or no answers. Papers also mention several settings and subsets, including open-domain fullwiki, distractor or distractor dev, closed-book evaluation, the KILT subset, the train-hard split, and variants where paragraph ordering changes retrieval difficulty.

**What it is claimed to measure.** Papers use HotpotQA to measure 9 constructs and 11 behavioral indicators. The dominant claims are that it measures multi-hop reasoning and multi-hop question answering, and it is also used for question answering, reasoning, and complex reasoning question answering. Beyond these, the measurement claims spread across 15 other constructs and indicators rather than converging on only one target.

**Space of uses.** Papers usually deploy HotpotQA as one benchmark within broader suites of knowledge-intensive, multi-hop, or agent tasks, rather than as a standalone instrument, and some repurpose or reconstruct it for multi-turn agent environments or synthetic data generation. It is explicitly related to 2 other instruments, LongBench and HELMET: papers include it as a multi-document or multi-hop QA component of LongBench, and one paper uses a HELMET-curated version for long-context factoid QA.

**Concerns raised.** A smaller line of work raises a validity concern: one paper reports that HotpotQA has been found to be a much weaker test for multi-hop reasoning because of many spurious signals.

## Sources

**[CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing](https://proceedings.iclr.cc/paper_files/paper/2024/file/fef126561bbf9d4467dbb8d27334b8fe-Paper-Conference.pdf)**
> HotpotQA is a multi-hop question answering benchmark used to evaluate answering questions that require combining multiple pieces of evidence.

**[DSPy: Compiling Declarative Language Model Calls into State-of-the-Art Pipelines](https://proceedings.iclr.cc/paper_files/paper/2024/file/f1cf02ce09757f57c3b93c0db83181e0-Paper-Conference.pdf) (as "HotPotQA")**
> A question answering benchmark that requires an agent to find and reason over multiple supporting documents from Wikipedia to answer complex questions.

**[SePer: Measure Retrieval Utility Through The Lens Of Semantic Perplexity Reduction](https://proceedings.iclr.cc/paper_files/paper/2025/file/c44c4afd77d5ee760e7f4bed0c50f878-Paper-Conference.pdf) (as "HOTPOTQA")**
> A question answering dataset that requires finding and reasoning over multiple supporting documents to answer complex questions.

**[RNNs are not Transformers (Yet):  The Key Bottleneck on In-Context Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/79dc391a2c1067e9ac2b764e31a60377-Paper-Conference.pdf) (as "Hotpot-QA")**
> A multi-document question answering dataset in which the model answers a question using multiple related Wikipedia paragraphs, with retrieval difficulty manipulated by paragraph ordering.

**[IRT-Router: Effective and Interpretable Multi-LLM Routing via Item Response Theory](https://aclanthology.org/2025.acl-long.761.pdf) (as "Hotpot_QA")**
> A question answering dataset that requires multi-hop reasoning across multiple supporting documents to find the answer.

## Relationships

### → HotpotQA
- **Multi-hop question answering** (behaviors tasks) — *measured_by*
  > In this case study, we explore the multi-hop question answering task with the HotPotQA (Yang et al., 2018) dataset in the open-domain “fullwiki” setting. (Section 7)
  - [DSPy: Compiling Declarative Language Model Calls into State-of-the-Art Pipelines](https://proceedings.iclr.cc/paper_files/paper/2024/file/f1cf02ce09757f57c3b93c0db83181e0-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > “HotPotQA provides a more challenging open-ended question answering task with long answers containing many tokens.”
  - [The Truth is in There: Improving Reasoning in Language Models with Layer-Selective Rank Reduction](https://proceedings.iclr.cc/paper_files/paper/2024/file/4c2092ec0b1370cce3fb5965ab255fae-Paper-Conference.pdf)
- **Multi-hop reasoning** (constructs) — *measured_by*
  > "HotpotQA [85] is a Wikipedia-based multi-hop QA dataset. It requires reasoning across multiple passages to find the answer."
  - [Chain of Agents: Large Language Models Collaborating on Long-Context Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/ee71a4b14ec26710b39ee6be113d7750-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > HotPotQA [49] features natural, multi-hop questions, which challenge an agent’s ability to perform reasoning and utilize search tools.
  - [AGILE: A Novel Reinforcement Learning Framework of LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/097c514162ea7126d40671d23e12f51b-Paper-Conference.pdf)
- **Retrieval-augmented generation** (behaviors tasks) — *measured_by*
  > We use open-domain question answering (ODQA)...as a representation of retrieval-augmented generation (RAG) applications. We utilize ... HotpotQA (Yang et al., 2018)...
  - [HELMET: How to Evaluate Long-context Models Effectively and Thoroughly](https://proceedings.iclr.cc/paper_files/paper/2025/file/f5332c8273d02729730a9c24dec2135e-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > To evaluate the transferability of our approach, we conducted out-of-domain experiments by training the model on one dataset and testing it on another. We use the 2Wiki (2W), HotpotQA (HQ), and MuSiQue (MQ) datasets. (Section 6.6)
  - [StepER: Step-wise Knowledge Distillation for Enhancing Reasoning Ability in Multi-Step Retrieval-Augmented Language Models](https://aclanthology.org/2025.emnlp-main.1500.pdf)
- **Tool use** (behaviors tasks) — *measured_by*
  > HotPotQA [49] features natural, multi-hop questions, which challenge an agent’s ability to perform reasoning and utilize search tools.
  - [AGILE: A Novel Reinforcement Learning Framework of LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/097c514162ea7126d40671d23e12f51b-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > We have conducted additional experiments on more realistic open-ended generations datasets, Hot-PotQA [57], Natural Question (NQ) [23], TriviaQA [21]. (Appendix D)
  - [SLED: Self Logits Evolution Decoding for Improving Factuality in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0939f13ffce3ff487509d902ddba4571-Paper-Conference.pdf)
- **Context retrieval** (behaviors tasks) — *measured_by*
  > We further conduct experiments on open-source LLMs based on Transformer, Mambda, and a hybrid architecture to show that for tasks that require stronger in-context retrieval capability, RNNs suffer more performance degradation compared to Transformers. ... To test our theory, we use the Hotpot-QA (Yang et al., 2018) dataset. (Section 6.2)
  - [RNNs are not Transformers (Yet):  The Key Bottleneck on In-Context Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/79dc391a2c1067e9ac2b764e31a60377-Paper-Conference.pdf)
- **Open-domain question answering** (behaviors tasks) — *measured_by*
  > we use three open-domain QA datasets for evaluation, namely PopQA (Mallen et al., 2023a), AmbigNQ (Min et al., 2020) and HotpotQA (Yang et al., 2018). (Section 4)
  - [SmartRAG: Jointly Learn RAG-Related Tasks From the Environment Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/83ccb398f3ce9c4d137011f36a03c7d4-Paper-Conference.pdf)
- **Complex reasoning question answering** (behaviors tasks) — *measured_by*
  > HotpotQA (Yang et al., 2018) is a complex question answering dataset of multi-hop reasoning questions which cannot be answered by a single memorized fact, but instead require chaining facts together. (Section 3)
  - [Forking Paths in Neural Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/2b6a8ca3d06ffa2e044bff8c723863ff-Paper-Conference.pdf)
- **Continual learning** (constructs) — *measured_by*
  > Continual Fine-Tuning: (a) SQuAD (Rajpurkar et al., 2016) paired with HotpotQA... (Section 4.1)
  - [DELIFT: Data Efficient Language model Instruction Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9d446812a6fdc05453f4093e54831e8-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs) — *measured_by*
  > To assess OmniKV’s performance in multi-step reasoning, we utilized 2WikiMQA (Ho et al., 2020) and HotpotQA (Yang et al., 2018) from LongBench. (Section 5)
  - [OmniKV: Dynamic Context Selection for Efficient Long-Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/da1131a86ac3c70e0b7cae89c3d4df22-Paper-Conference.pdf)
- **World knowledge** (constructs) — *measured_by*
  > World-knowledge tasks: TriviaQA (Joshi et al., 2017), Natural Questions (Kwiatkowski et al., 2019), HotpotQA (Yang et al., 2018), WebQuestions (Berant et al., 2013), ComplexWebQuestions (Talmor & Berant, 2018). (Section 5.1)
  - [Mixture of Parrots: Experts improve memorization more than reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5bc3356e0fa1753fff7e8d6628e71b22-Paper-Conference.pdf)
- **Document question answering** (behaviors tasks) — *measured_by*
  > “To this end, we focus on three open-book QA datasets: 2. HotpotQA (Yang et al., 2018): A multi-hop question answering benchmark that requires reason-ing across paragraphs from multiple Wikipedia pages”
  - [AttriBoT: A Bag of Tricks for Efficiently Approximating Leave-One-Out Context Attribution](https://proceedings.iclr.cc/paper_files/paper/2025/file/2aab664e0d1656e8b56c74f868e1ea69-Paper-Conference.pdf)
- **Retrieval quality** (constructs) — *measured_by*
  > “For retrieval quality, we use the evaluation script provided by HotpotQA to measure the F1 score, precision, and recall between the retrieved chunks and referenced facts.”
  - [Knowledge Graph-Guided Retrieval Augmented Generation](https://aclanthology.org/2025.naacl-long.449.pdf)
- **Language understanding task performance** (behaviors tasks) — *measured_by*
  > Comparison of decomposition approaches across benchmarks. Method ... Text Understanding ... HotpotQA (Table 2)
  - [Select-Then-Decompose: From Empirical Analysis to Adaptive Selection Strategy for Task Decomposition in Large Language Models](https://aclanthology.org/2025.emnlp-main.278.pdf)
- **Long-context reasoning** (constructs) — *measured_by*
  > The evaluation is performed on three long-context multi-hop reasoning datasets: Hotpot QA (Yang et al., 2018), MusiQue (Trivedi et al., 2022) and 2WikiMultiHopQA (Ho et al., 2020). (Section 5.1)
  - [POSITION BIAS MITIGATES POSITION BIAS: Mitigate Position Bias Through Inter-Position Knowledge Distillation](https://aclanthology.org/2025.emnlp-main.78.pdf)
- **Factual question answering** (behaviors tasks) — *measured_by*
  > For testing on factoid QA tasks, we use HotpotQA (Yang et al., 2018), Natural Questions (NQ) (Kwiatkowski et al., 2019), and TriviaQA (Joshi et al., 2017), as curated by HELMET (Yen et al., 2025) for long-context benchmarking with 128k input tokens. (Section 4.1)
  - [Efficient Context Selection for Long-ContextQA: No Tuning, No Iteration, Just Adaptive‐k](https://aclanthology.org/2025.emnlp-main.1017.pdf)
- **Complex reasoning** (constructs) — *measured_by*
  > “We conduct experiments on three representative agent tasks: Complex Reasoning (HotpotQA (Yang et al., 2018)), Embodied Decision (ALFWorld (Shridhar et al., 2020)), and Interactive Programming (InterCode (Yang et al., 2023))”
  - [Improving Retrospective Language Agents via Joint Policy Gradient Optimization](https://aclanthology.org/2025.naacl-long.6.pdf)

### Associated with
- **LongBench** (measurements)
  > We also include HotpotQA (multi-document question answering) from LongBench... (Section 5.1).
  - [EPIC: Efficient Position-Independent Caching for Serving Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25j/hu25j.pdf)
- **HELMET** (measurements)
  > For testing on factoid QA tasks, we use HotpotQA (Yang et al., 2018), Natural Questions (NQ) (Kwiatkowski et al., 2019), and TriviaQA (Joshi et al., 2017), as curated by HELMET (Yen et al., 2025) for long-context benchmarking with 128k input tokens. (Section 4.1)
  - [Efficient Context Selection for Long-ContextQA: No Tuning, No Iteration, Just Adaptive‐k](https://aclanthology.org/2025.emnlp-main.1017.pdf)
