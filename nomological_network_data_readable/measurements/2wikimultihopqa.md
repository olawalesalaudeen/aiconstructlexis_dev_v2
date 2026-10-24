# 2WikiMultiHopQA
**Type:** Measurement  
**Referenced in:** 74 papers  
**Also known as:** 2WikiMultihopQA, 2wikimultihopqa, 2WIKIMULTIHOPQA, 2WikiMQA, 2WikiMHQA, 2WikiMulti-hopQA, 2Wikimultihop, 2Wiki, 2Wiki-MultiHopQA, 2WikiHop, WikiMultiHopQA  

## State of the Field

**What it is.** Across papers, the prevailing description is a Wikipedia-based multi-hop question answering dataset or benchmark. Most definitions emphasize multi-document reasoning, with answers requiring models to combine information from multiple documents, evidence pieces, paragraphs, or sources; some add that it includes up to 5-hop questions synthesized from Wikipedia passages through manually designed templates. A smaller line of work narrows this to reasoning over two linked facts or entity-centric questions that combine information from two or more distinct Wikipedia articles, and one paper presents it as a more challenging benchmark with many comparison and composition questions. Some papers also refer to a LongBench form of the benchmark under the name 2WikiMQA.

**What it is claimed to measure.** Across papers, it is linked to 5 constructs and 4 behavioral indicators. The prevailing use is to measure multi-hop question answering and multi-hop reasoning. Papers also use it to measure question answering and chain-of-thought reasoning, while the remaining links spread across several other QA and reasoning framings.

**Space of uses.** It is most commonly used alongside HotpotQA and MuSiQue, and some papers also pair it with StrategyQA and Bamboogle. Papers usually position it as one item in a small set of multi-hop or complex QA benchmarks; some use it for unseen evaluation of RAG-tuned models, some for in-domain evaluation, and a smaller line uses its LongBench form for multi-document QA or multi-step reasoning. One paper also reports testing both single-step and chain-of-thought setups on it.

## Sources

**[Enhancing LLM’s Cognition via Structurization](https://proceedings.neurips.cc/paper_files/paper/2024/file/f169ec4d47933ea4896b994af8ff4f17-Paper-Conference.pdf) (as "2WikiMultihopQA")**
> A multi-document, multi-hop question-answering dataset involving up to 5-hop questions synthesized from Wikipedia passages.

**[Internet of Agents: Weaving a Web of Heterogeneous Agents for Collaborative Intelligence](https://proceedings.iclr.cc/paper_files/paper/2025/file/59c27bf8d56d3d50c7aeaf7535dee975-Paper-Conference.pdf)**
> A dataset used for evaluating retrieval-augmented generation performance on question-answer pairs.

**[Long-Context LLMs Meet RAG: Overcoming Challenges for Long Inputs in RAG](https://proceedings.iclr.cc/paper_files/paper/2025/file/5df5b1f121c915d8bdd00db6aac20827-Paper-Conference.pdf) (as "2wikimultihopqa")**
> A multi-hop question-answering dataset derived from Wikipedia, used as an unseen evaluation task for RAG-tuned models.

**[SePer: Measure Retrieval Utility Through The Lens Of Semantic Perplexity Reduction](https://proceedings.iclr.cc/paper_files/paper/2025/file/c44c4afd77d5ee760e7f4bed0c50f878-Paper-Conference.pdf) (as "2WIKIMULTIHOPQA")**
> A multi-hop question answering dataset that requires reasoning over multiple documents to find the answer.

**[OmniKV: Dynamic Context Selection for Efficient Long-Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/da1131a86ac3c70e0b7cae89c3d4df22-Paper-Conference.pdf) (as "2WikiMQA")**
> A multi-hop question answering benchmark used to assess multi-step reasoning over long contexts.

**[ReSCORE: Label-free Iterative Retriever Training for Multi-hop Question Answering with Relevance-Consistency Supervision](https://aclanthology.org/2025.acl-long.16.pdf) (as "2WikiMHQA")**
> A multi-hop question answering dataset built from Wikipedia, requiring reasoning over multiple evidence documents.

**[Beyond Prompting: An Efficient Embedding Framework for Open-Domain Question Answering](https://aclanthology.org/2025.acl-long.981.pdf) (as "2WikiMulti-hopQA")**
> Multi-hop question answering dataset requiring reasoning over two linked facts, built from Wikipedia.

**[Decoding on Graphs: Faithful and Sound Reasoning on Knowledge Graphs through Generation of Well-Formed Chains](https://aclanthology.org/2025.acl-long.1186.pdf) (as "2Wikimultihop")**
> A challenging benchmark for multi-hop question answering where the knowledge graph is constructed from provided text passages and a large proportion of questions require reasoning types like comparison and composition.

**[DeepResearcher: Scaling Deep Research via Reinforcement Learning in Real-world Environments](https://aclanthology.org/2025.emnlp-main.22.pdf) (as "2Wiki")**
> The 2WikiMultiHopQA (2Wiki) benchmark, a multi-hop open-domain question answering dataset used for in-domain evaluation.

**[StepSearch: Igniting LLMs Search Ability via Step-Wise Proximal Policy Optimization](https://aclanthology.org/2025.emnlp-main.1106.pdf) (as "2Wiki-MultiHopQA")**
> A multi-hop question answering benchmark dataset designed to test reasoning over multiple documents from Wikipedia.

**[Gumbel Reranking: Differentiable End-to-End Reranker Optimization](https://aclanthology.org/2025.acl-long.354.pdf) (as "2WikiHop")**
> A multi-hop question answering benchmark dataset built on Wikipedia, where answers require traversing through multiple documents.

**[Chain of Preference Optimization: Improving Chain-of-Thought Reasoning in LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/00d80722b756de0166523a87805dd00f-Paper-Conference.pdf) (as "WikiMultiHopQA")**
> WikiMultiHopQA is a dataset for evaluating multi-hop question answering, requiring models to synthesize information from multiple sources.

## Relationships

### → 2WikiMultiHopQA
- **Multi-hop question answering** (behaviors tasks) — *measured_by*
  > We evaluate our method’s retrieval capabilities primarily on two challenging multi-hop QA benchmarks, MuSiQue (answerable) [77] and 2WikiMultiHopQA [33]. (Section 3.1)
  - [HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ddc001d07ca4f319af96a3024f6dbd1-Paper-Conference.pdf)
- **Multi-hop reasoning** (constructs) — *measured_by*
  > When evaluated on multi-hop reasoning benchmarks, our approach achieves up to 95–100% accuracy on 2WikiMultiHopQA (Abstract).
  - [Grokking in the Wild: Data Augmentation for Real-World Multi-Hop Reasoning with Transformers](https://raw.githubusercontent.com/mlresearch/v267/main/assets/abramov25a/abramov25a.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > Question Answering For this task, we consider the following datasets: 2WikiMultiHopQA [27], StrategyQA [28], MuSiQue [29], and HotpotQA [30] (Section 4.1).
  - [Information Re-Organization Improves Reasoning in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb1a323fa10d4102ff13422476a744ff-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs) — *measured_by*
  > To assess OmniKV’s performance in multi-step reasoning, we utilized 2WikiMQA (Ho et al., 2020) and HotpotQA (Yang et al., 2018) from LongBench. (Section 5)
  - [OmniKV: Dynamic Context Selection for Efficient Long-Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/da1131a86ac3c70e0b7cae89c3d4df22-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > “Experiments across three complex question-answering datasets reveal that ASSISTRAG exhibits superior reasoning capabilities” and the datasets include “2WikiMultiHopQA [35]”
  - [Boosting the Potential of Large Language Models with an Intelligent Information Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/28d38c036365420f61ce03300418e44a-Paper-Conference.pdf)
- **Information synthesis** (behaviors tasks) — *measured_by*
  > ...and two multi-hop QA datasets: Adversarial HotpotQA (Yang et al., 2018), and 2WikiMultihopQA (Ho et al., 2020), which assess cross-document reasoning and information integration using Wikipedia data. (Section 4.1)
  - [Bridging External and Parametric Knowledge: Mitigating Hallucination of LLMs with Shared-Private Semantic Synergy in Dual-Stream Knowledge](https://aclanthology.org/2025.emnlp-main.549.pdf)
- **Long-context reasoning** (constructs) — *measured_by*
  > The evaluation is performed on three long-context multi-hop reasoning datasets: Hotpot QA (Yang et al., 2018), MusiQue (Trivedi et al., 2022) and 2WikiMultiHopQA (Ho et al., 2020). (Section 5.1)
  - [POSITION BIAS MITIGATES POSITION BIAS: Mitigate Position Bias Through Inter-Position Knowledge Distillation](https://aclanthology.org/2025.emnlp-main.78.pdf)
- **Multi-document question answering** (behaviors tasks) — *measured_by*
  > The multi-document QA task involves "2Wiki-MultihopQA" from LongBench (Bai et al., 2023), comprising 200 samples. (Section 4.2)
  - [Accelerate Parallelizable Reasoning via Parallel Decoding within One Sequence](https://aclanthology.org/2025.emnlp-main.457.pdf)
- **Generalization** (constructs) — *measured_by*
  > To evaluate the transferability of our approach, we conducted out-of-domain experiments by training the model on one dataset and testing it on another. We use the 2Wiki (2W), HotpotQA (HQ), and MuSiQue (MQ) datasets. (Section 6.6)
  - [StepER: Step-wise Knowledge Distillation for Enhancing Reasoning Ability in Multi-Step Retrieval-Augmented Language Models](https://aclanthology.org/2025.emnlp-main.1500.pdf)

### Associated with
- **LongBench** (measurements)
  > Following CacheBlend, we evaluate on four LongBench datasets (Bai et al., 2024): 2WikiMQA... (Section 5.1).
  - [EPIC: Efficient Position-Independent Caching for Serving Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25j/hu25j.pdf)
