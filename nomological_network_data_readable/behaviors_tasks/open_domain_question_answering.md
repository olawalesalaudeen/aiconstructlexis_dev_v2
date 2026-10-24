# Open-domain question answering
**Type:** Behavior  
**Referenced in:** 40 papers  
**Also known as:** Retrieval-augmented question answering  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats open-domain question answering as answering questions over a wide range of topics or general world knowledge, rather than within a fixed domain. Most papers in this group also frame it as a knowledge-intensive task that often requires retrieving and synthesizing information from an external corpus, provided documents, or the open web, though some definitions allow answers to come from either internal knowledge or provided context. A smaller line of work narrows the expected output to short-form answers, describing the answer as typically a short phrase or sentence.

**Variants.** Papers use several nearby names for this behavior, including open-domain QA, ODQA, retrieval-augmented question answering, and retrieval-augmented QA. The most common variant centers on retrieved evidence, with formulations where the model first retrieves relevant information and then synthesizes an answer, or must answer using only provided search documents, some of which may be irrelevant. Smaller strands study short-form generation, conflict settings where parametric and contextual knowledge disagree, and settings that synthesize web information or reason over large-scale unstructured documents without reference answers during inference.

**Space of elicitation and scores.** Papers measure this behavior with 12 instruments. The most frequently linked are Natural Questions, TriviaQA, WebQuestions, PopQA, and AmbigNQ, and the remaining 7 are HotpotQA, LoraxBench, MS MARCO, OpenCompass, ParaRel, SQuAD v1.1, and TriviaQA-unfiltered. These instruments are mostly QA datasets and benchmarks, while elicitation is usually by posing a question, sometimes with retrieved or provided documents or an instruction to generate search queries, and some scoring uses short-answer ground truth with F1.

**What it is taken as evidence of.** Papers do not commonly present this behavior as evidence of multiple constructs. The only linked construct is positional bias, and that link is recorded as related: one paper reports that in retrieval-augmented QA, models are prone to answer correctly when the document containing the correct answer appears at the beginning or end of the retrieved documents. Beyond this, the surveyed papers mostly use open-domain question answering as a task benchmark rather than tying it to a shared construct interpretation.

## Sources

**[BTR: Binary Token Representations for Efficient Retrieval Augmented Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c0f721d329c1a10546869c783e866fb7-Paper-Conference.pdf)**
> The task of answering questions about a wide range of topics, not limited to a specific domain or context.

**[Compact Language Models via Pruning and Knowledge Distillation](https://proceedings.neurips.cc/paper_files/paper/2024/file/4822991365c962105b1b95b1107d30e5-Paper-Conference.pdf) (as "Retrieval-augmented question answering")**
> The task of answering questions by first retrieving relevant information from an external knowledge source and then synthesizing an answer based on that information.

## Relationships

### Open-domain question answering →
- **TriviaQA** (measurements) — *measured_by*
  > We evaluate BTR on five knowledge-rich NLP tasks, including three open-domain question-answering tasks (NaturalQuestions (Kwiatkowski et al., 2019), TriviaQA (Joshi et al., 2017), and WebQA (Berant et al., 2013)) (Section 2).
  - [BTR: Binary Token Representations for Efficient Retrieval Augmented Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c0f721d329c1a10546869c783e866fb7-Paper-Conference.pdf)
- **Natural Questions** (measurements) — *measured_by*
  > We evaluate BTR on five knowledge-rich NLP tasks, including three open-domain question-answering tasks (NaturalQuestions (Kwiatkowski et al., 2019), TriviaQA (Joshi et al., 2017), and WebQA (Berant et al., 2013)) (Section 2).
  - [BTR: Binary Token Representations for Efficient Retrieval Augmented Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c0f721d329c1a10546869c783e866fb7-Paper-Conference.pdf)
- **WebQuestions** (measurements) — *measured_by*
  > Moreover, in order to examine ToG on more generic tasks, we also prepare one open-domain QA dataset: WebQuestions (Berant et al., 2013);
  - [Think-on-Graph: Deep and Responsible Reasoning of Large Language Model on Knowledge Graph](https://proceedings.iclr.cc/paper_files/paper/2024/file/10a6bdcabbd5a3d36b760daa295f63c1-Paper-Conference.pdf)
- **PopQA** (measurements) — *measured_by*
  > Short-form generations tasks include two open-domain question answering (QA) datasets, PopQA (Mallen et al., 2023) and TriviaQA-unfiltered (Joshi et al., 2017)... (Section 4.1)
  - [Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection](https://proceedings.iclr.cc/paper_files/paper/2024/file/25f7be9694d7b32d5cc670927b8091e1-Paper-Conference.pdf)
- **MS MARCO** (measurements) — *measured_by*
  > The open-domain QA tasks consist of NQ (Kwiatkowski et al., 2019), MARCO QA (Bajaj et al., 2016) and TriviaQA (Joshi et al., 2017), which require models to retrieve factual knowledge to help LLMs answer the given question.
  - [RAG-DDR: Optimizing Retrieval-Augmented Generation Using Differentiable Data Rewards](https://proceedings.iclr.cc/paper_files/paper/2025/file/1a87980b9853e84dfb295855b425c262-Paper-Conference.pdf)
- **SQuAD v1.1** (measurements) — *measured_by*
  > We use the open domain question answering datasets WebQuestion (Berant et al., 2013), NaturalQA (Kwiatkowski et al., 2019), TriviaQA (Joshi et al., 2017) and SQuAD (Rajpurkar, 2016), as well as the complex multi-hop question answering datasets HotpotQA (Ho et al., 2020a) and 2WikiMultiHopQA (Ho et al., 2020b). (Section 4.2)
  - [GainRAG: Preference Alignment in Retrieval-Augmented Generation through Gain Signal Synthesis](https://aclanthology.org/2025.acl-long.527.pdf)
- **TriviaQA-unfiltered** (measurements) — *measured_by*
  > Short-form generations tasks include two open-domain question answering (QA) datasets, PopQA (Mallen et al., 2023) and TriviaQA-unfiltered (Joshi et al., 2017)... (Section 4.1)
  - [Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection](https://proceedings.iclr.cc/paper_files/paper/2024/file/25f7be9694d7b32d5cc670927b8091e1-Paper-Conference.pdf)
- **AmbigNQ** (measurements) — *measured_by*
  > we use three open-domain QA datasets for evaluation, namely PopQA (Mallen et al., 2023a), AmbigNQ (Min et al., 2020) and HotpotQA (Yang et al., 2018). (Section 4)
  - [SmartRAG: Jointly Learn RAG-Related Tasks From the Environment Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/83ccb398f3ce9c4d137011f36a03c7d4-Paper-Conference.pdf)
- **HotpotQA** (measurements) — *measured_by*
  > we use three open-domain QA datasets for evaluation, namely PopQA (Mallen et al., 2023a), AmbigNQ (Min et al., 2020) and HotpotQA (Yang et al., 2018). (Section 4)
  - [SmartRAG: Jointly Learn RAG-Related Tasks From the Environment Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/83ccb398f3ce9c4d137011f36a03c7d4-Paper-Conference.pdf)
- **LoraxBench** (measurements) — *measured_by*
  > We introduce LORAXBENCH, a benchmark that focuses on low-resource languages of Indonesia and covers 6 diverse tasks: reading comprehension, open-domain QA, language inference, causal reasoning, translation, and cultural QA. (Abstract)
  - [LORAXBENCH: A Multitask, Multilingual Benchmark Suite for 20 Indonesian Languages](https://aclanthology.org/2025.emnlp-main.881.pdf)
- **ParaRel** (measurements) — *measured_by*
  > ...and factual information from open-domain question answering (OQA) with the PARAREL (Elazar et al., 2021) dataset. (Section 4)
  - [Sheaf Discovery with Joint Computation Graph Pruning and Flexible Granularity](https://aclanthology.org/2025.emnlp-main.446.pdf)
- **MuSiQue** (measurements) — *measured_by*
  > TriviaQA, MuSiQue, PopQA are challenging open-domain question answering datasets where RAG systems are required to answer questions on factual knowledge. (Section 4)
  - [Speculative RAG: Enhancing Retrieval Augmented Generation through Drafting](https://proceedings.iclr.cc/paper_files/paper/2025/file/2ea06b52f613716e67458f5ab3fb7558-Paper-Conference.pdf)
