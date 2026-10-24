# MuSiQue
**Type:** Measurement  
**Referenced in:** 76 papers  
**Also known as:** MUSIQUE, Musique, MusiQue, musique, MuSiQue-Ans  

## State of the Field

**What it is.** Across papers, the prevailing usage treats MuSiQue as a challenging multi-hop question answering benchmark or dataset for questions that require connecting multiple pieces of information across multiple paragraphs, passages, or documents. Most descriptions emphasize questions composed from single-hop questions, often as composable pairs, with up to four-hop reasoning and design choices meant to reduce reasoning shortcuts; smaller lines of work also mention adversarially written paragraphs, bridge-entity construction, minimal lexical overlap, and supporting plus distracting evidence. Papers also refer to variants or slices such as the answerable version, a 2-hop evaluation subset, and MuSiQue-Ans, and one paper specifically uses its 3-hop and 4-hop data.

**What it is claimed to measure.** In the linked usage, papers report MuSiQue as measuring 4 constructs and 3 behavioral indicators. The dominant claims center on multi-hop reasoning and multi-hop question answering, and papers also use it for question answering, generalization, and chain-of-thought evaluation, with some broader reasoning and long-context framings as well. Overall, the reported uses converge most clearly on multi-hop reasoning tasks rather than on a single narrow construct.

**Space of uses.** Papers usually position MuSiQue as one benchmark within multi-hop or complex QA evaluation suites rather than as a standalone instrument. It is linked to 1 other measurement instrument, LongBench, where papers treat it as a multi-document question answering dataset in that suite, and it is frequently used alongside HotpotQA, 2WikiMultiHopQA, StrategyQA, and Bamboogle, among others. Some papers use particular slices or roles, including 2-hop questions for evaluation, the answerable version, warm-up training data, and out-of-domain evaluation.

**Concerns raised.** A recurring theme in how papers describe MuSiQue is resistance to shortcuts: several definitions say it is built to reduce or prevent reasoning shortcuts and to require connected or disentangled reasoning over multiple facts. Some descriptions also stress adversarially written paragraphs, harder distracting content, minimal lexical overlap, and, in one account, unanswerable questions, all as features that make the benchmark more challenging.

## Sources

**[KoLA: Carefully Benchmarking World Knowledge of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c26719edf1e6fba8f1ca7d3938e27785-Paper-Conference.pdf)**
> MuSiQue is a challenging multi-hop question answering dataset where questions are constructed from composable pairs of single-hop questions, requiring models to connect multiple pieces of information.

**[SePer: Measure Retrieval Utility Through The Lens Of Semantic Perplexity Reduction](https://proceedings.iclr.cc/paper_files/paper/2025/file/c44c4afd77d5ee760e7f4bed0c50f878-Paper-Conference.pdf) (as "MUSIQUE")**
> A multi-hop question answering dataset that requires reasoning over multiple paragraphs to answer questions, featuring adversarially-written paragraphs to challenge models.

**[MindSearch: Mimicking Human Minds Elicits Deep AI Searcher](https://proceedings.iclr.cc/paper_files/paper/2025/file/e01c431bbb83153632c0dcfaf8ccda0a-Paper-Conference.pdf) (as "Musique")**
> A benchmark for multi-hop question answering, where a model must connect multiple pieces of information to arrive at the correct answer.

**[Generating Complex Question Decompositions in the Face of Distribution Shifts](https://aclanthology.org/2025.naacl-long.55.pdf) (as "musique")**
> Multi-hop question answering dataset constructed to prevent reasoning shortcuts, with complex questions derived from single-hop questions linked by bridge entities, used for evaluating decomposition and downstream QA performance.

**[RAG-Star: Enhancing Deliberative Reasoning with Retrieval Augmented Verification and Refinement](https://aclanthology.org/2025.naacl-long.361.pdf) (as "MusiQue")**
> Multi-hop question answering dataset requiring reasoning over diverse domains with minimal lexical overlap, designed to test true compositional reasoning.

**[PropRAG: Guiding Retrieval with Beam Search over Proposition Paths](https://aclanthology.org/2025.emnlp-main.317.pdf) (as "MuSiQue-Ans")**
> A benchmark dataset for multi-hop question answering featuring complex, multi-step questions, also referred to as MuSiQue.

## Relationships

### → MuSiQue
- **Multi-hop question answering** (behaviors tasks) — *measured_by*
  > We evaluate our method’s retrieval capabilities primarily on two challenging multi-hop QA benchmarks, MuSiQue (answerable) [77] and 2WikiMultiHopQA [33]. (Section 3.1)
  - [HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ddc001d07ca4f319af96a3024f6dbd1-Paper-Conference.pdf)
- **Multi-hop reasoning** (constructs) — *measured_by*
  > We experiment with MuSiQue (Trivedi et al., 2022), a hard multi-hop reasoning dataset created via composable pairs of single-hop questions... (Section 3.1)
  - [Take a Step Back: Evoking Reasoning via Abstraction in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/592da1445a51e54a3987958b5831948f-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > Question Answering For this task, we consider the following datasets: 2WikiMultiHopQA [27], StrategyQA [28], MuSiQue [29], and HotpotQA [30] (Section 4.1).
  - [Information Re-Organization Improves Reasoning in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb1a323fa10d4102ff13422476a744ff-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > For out-of-domain evaluation, we introduce three datasets that differ significantly in question style and information distribution: MuSiQue (Trivedi et al., 2022)... These datasets test the model’s generalization ability beyond the training domain. (Section 4.2.1)
  - [DeepResearcher: Scaling Deep Research via Reinforcement Learning in Real-world Environments](https://aclanthology.org/2025.emnlp-main.22.pdf)
- **Chain of thought** (behaviors tasks) — *measured_by*
  > To examine how retrieval heads effect reasoning tasks, we test Mistrial-7B-Instruct-v0.2 on MMLU (Hendrycks et al., 2020), MuSiQue and GSM8K (Cobbe et al., 2021), with and without chain-of-thought (CoT) reasoning. (Section 4.3)
  - [Retrieval Head Mechanistically Explains Long-Context Factuality](https://proceedings.iclr.cc/paper_files/paper/2025/file/9b77f07301b1ef1fe810aae96c12cb7b-Paper-Conference.pdf)
- **Long-context reasoning** (constructs) — *measured_by*
  > The evaluation is performed on three long-context multi-hop reasoning datasets: Hotpot QA (Yang et al., 2018), MusiQue (Trivedi et al., 2022) and 2WikiMultiHopQA (Ho et al., 2020). (Section 5.1)
  - [POSITION BIAS MITIGATES POSITION BIAS: Mitigate Position Bias Through Inter-Position Knowledge Distillation](https://aclanthology.org/2025.emnlp-main.78.pdf)
- **Open-domain question answering** (behaviors tasks) — *measured_by*
  > TriviaQA, MuSiQue, PopQA are challenging open-domain question answering datasets where RAG systems are required to answer questions on factual knowledge. (Section 4)
  - [Speculative RAG: Enhancing Retrieval Augmented Generation through Drafting](https://proceedings.iclr.cc/paper_files/paper/2025/file/2ea06b52f613716e67458f5ab3fb7558-Paper-Conference.pdf)

### Associated with
- **LongBench** (measurements)
  > Following CacheBlend, we evaluate on four LongBench datasets (Bai et al., 2024): 2WikiMQA (multi-document question answering), MuSiQue (multi-document question answering)... (Section 5.1).
  - [EPIC: Efficient Position-Independent Caching for Serving Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25j/hu25j.pdf)
