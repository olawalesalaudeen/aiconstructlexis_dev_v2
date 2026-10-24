# SQuAD v1.1
**Type:** Measurement  
**Referenced in:** 94 papers  
**Also known as:** SQuAD, SQuADv1.1, SQUAD, Squad, SQuAD v1, SQuAD 1.1  

## State of the Field

**What it is.** Across papers, the prevailing usage treats SQuAD v1.1 as the Stanford Question Answering Dataset in its version 1.1 form, usually described as a reading comprehension benchmark for extractive question answering. Definitions repeatedly say the task is to answer a question from a context passage or Wikipedia article by selecting an answer span or text segment, and one paper notes that each example has a context passage, a question, and an answer, with some passages paired with multiple questions (Beyond Input Activations: Identifying Influential Latents by Gradient Sparse Autoencoders). A smaller number of descriptions call it an open-book question answering dataset or a crowdsourced Wikipedia-based reading comprehension dataset, and papers sometimes contrast v1.1, which one definition says contains no unanswerable questions, with v2.0, which another description says includes unanswerable questions.

**What it is claimed to measure.** Papers use it to measure 10 behavioral indicators and 5 constructs. The most common behavioral framing is question answering, followed by machine reading comprehension, document question answering, downstream task performance, and extractive question answering, plus 5 other behavioral indicators; on the construct side, papers report it as measuring generalization most often, and also context utilization, continual learning, knowledge retention, and long-context understanding. Overall, the measurement claims spread across several targets rather than converging on one construct, although most descriptions stay within question answering and reading comprehension language.

**Space of uses.** Most papers position SQuAD v1.1 as one benchmark in a broader evaluation suite, often alongside GLUE and SQuAD v2.0, and also with CoQA, Natural Questions, and TriviaQA. No explicit measurement-instrument link is reported, but papers show both standard full-benchmark use and shot-based settings such as SQuAD-3-shots and SQuAD (10-shot). A smaller line of work uses it as input material rather than only evaluation, for example as "a source of 50000 prompts" in Teaching Language Models to Hallucinate Less with Synthetic Tasks, or for a local steering setup that uses the fact that one context passage can be paired with multiple questions.

## Sources

**[Accurate Retraining-free Pruning for Pretrained Encoder-based Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/45fc8e1c55df116b23488f3cdb2fc642-Paper-Conference.pdf) (as "SQuAD")**
> SQuAD (Stanford Question Answering Dataset) is an open-book question answering dataset used for evaluation.

**[Increasing Model Capacity for Free: A Simple Strategy for Parameter Efficient Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/ce3fd6b9dfe458dc258a8164a5e95bd2-Paper-Conference.pdf) (as "SQuADv1.1")**
> Stanford Question Answering Dataset version 1.1, a reading comprehension task where models identify answer spans in a passage given a question, used to evaluate question answering performance.

**[Merge, Then Compress: Demystify Efficient SMoE with Hints from Its Routing Policy](https://proceedings.iclr.cc/paper_files/paper/2024/file/3d09a88c3372cdb79401fde592ca4db8-Paper-Conference.pdf)**
> The Stanford Question Answering Dataset v1.1 is a reading comprehension benchmark for extractive question answering.

**[GraphRouter: A Graph-based Router for LLM Selections](https://proceedings.iclr.cc/paper_files/paper/2025/file/41b6674c28a9b93ec8d22a53ca25bc3b-Paper-Conference.pdf) (as "SQUAD")**
> The Stanford Question Answering Dataset, a crowdsourced reading comprehension benchmark consisting of questions posed on a set of Wikipedia articles.

**[Longhorn: State Space Models are Amortized Online Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/ee0e45ff4de76cbfdf07015a7839f339-Paper-Conference.pdf) (as "Squad")**
> The Stanford Question Answering Dataset (SQuAD) is a reading comprehension benchmark where the answer to every question is a segment of text from a corresponding Wikipedia article.

**[A Lens into Interpretable Transformer Mistakes via Semantic Dependency](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25n/dong25n.pdf) (as "SQuAD 1.1")**
> The Stanford Question Answering Dataset (version 1.1), a reading comprehension benchmark where answers are text spans extracted from a given Wikipedia article.

**[Cooperative or Competitive? Understanding the Interaction between Attention Heads From A Game Theory Perspective](https://aclanthology.org/2025.acl-long.688.pdf) (as "SQuAD v1")**
> The Stanford Question Answering Dataset (SQuAD) v1 is a reading comprehension benchmark where the answer to every question is a span of text from a given Wikipedia article.

## Relationships

### → SQuAD v1.1
- **Question answering** (behaviors tasks) — *measured_by*
  > In QA, we evaluate the performance of the proposed PEFT method on SQuADv1.1 (Rajpurkar et al., 2016) and SQuADv2.0 (Rajpurkar et al., 2018). (Section 4)
  - [Increasing Model Capacity for Free: A Simple Strategy for Parameter Efficient Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/ce3fd6b9dfe458dc258a8164a5e95bd2-Paper-Conference.pdf)
- **Machine reading comprehension** (behaviors tasks) — *measured_by*
  > Reading Comprehension (RC): SQuAD-3-shots [50], BoolQ-0-shot [12], and CoQA-0-shot [51].
  - [Dataset Decomposition: Faster LLM Training with Variable Sequence Length Curriculum](https://proceedings.neurips.cc/paper_files/paper/2024/file/3f9bf45ea04c98ad7cb857f951f499e2-Paper-Conference.pdf)
- **Extractive question answering** (behaviors tasks) — *measured_by*
  > (b) extractive question answering (SQuAD (Rajpurkar et al., 2016), CoQA (Reddy et al., 2019)) (Section 4.2)
  - [Think before you speak: Training Language Models With Pause Tokens](https://proceedings.iclr.cc/paper_files/paper/2024/file/76917808731dae9e6d62c2a7a6afb542-Paper-Conference.pdf)
- **Open-domain question answering** (behaviors tasks) — *measured_by*
  > We use the open domain question answering datasets WebQuestion (Berant et al., 2013), NaturalQA (Kwiatkowski et al., 2019), TriviaQA (Joshi et al., 2017) and SQuAD (Rajpurkar, 2016), as well as the complex multi-hop question answering datasets HotpotQA (Ho et al., 2020a) and 2WikiMultiHopQA (Ho et al., 2020b). (Section 4.2)
  - [GainRAG: Preference Alignment in Retrieval-Augmented Generation through Gain Signal Synthesis](https://aclanthology.org/2025.acl-long.527.pdf)
- **Continual learning** (constructs) — *measured_by*
  > Continual Fine-Tuning: (a) SQuAD (Rajpurkar et al., 2016) paired with HotpotQA... (Section 4.1)
  - [DELIFT: Data Efficient Language model Instruction Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9d446812a6fdc05453f4093e54831e8-Paper-Conference.pdf)
- **Factual recall** (behaviors tasks) — *measured_by*
  > To evaluate the fact recall ability of the adapted model, we use two question answering (QA) datasets, SQuAD (Rajpurkar et al., 2016) and StreamingQA (Liska et al., 2022)... (Section 4.1)
  - [Generative Adapter: Contextualizing Language Models in Parameters with A Single Forward Pass](https://proceedings.iclr.cc/paper_files/paper/2025/file/447708674d7f30492ca5338b36b07d0c-Paper-Conference.pdf)
- **Downstream task performance** (behaviors tasks) — *measured_by*
  > “In Table 6, we list the performance on downstream tasks of GLUE and SAQuAD according to LIGO(Wang et al., 2023).”
  - [LOIRE: LifelOng learning on Incremental data via pre-trained language model gRowth Efficiently](https://proceedings.iclr.cc/paper_files/paper/2025/file/03945380ca5af0dc80782d8e0b72a8d7-Paper-Conference.pdf)
- **Knowledge retention** (constructs) — *measured_by*
  > To evaluate the ability of M+ to recall long-term knowledge, we follow the experimental setup in MemoryLLM (Wang et al., 2024a) on datasets SQuAD and NaturalQA (Section 4.3.1).
  - [M+: Extending MemoryLLM with Scalable Long-Term Memory](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25au/wang25au.pdf)
- **Information retrieval** (behaviors tasks) — *measured_by*
  > Experimental results across four datasets—Dragonball, SQUAD, NFCORPUS, and SCI-DOCS demonstrate that SAKI-RAG achieves better recall and precision compared to other RAG frameworks in long-document retrieval scenarios (Abstract).
  - [SAKI-RAG: Mitigating Context Fragmentation in Long-Document RAG via Sentence-level Attention Knowledge Integration](https://aclanthology.org/2025.emnlp-main.63.pdf)
- **Factual question answering** (behaviors tasks) — *measured_by*
  > the SQUAD, NFCORPUS, and SCI-DOCS datasets consist of factual questions involving single entities (Section 4.1).
  - [SAKI-RAG: Mitigating Context Fragmentation in Long-Document RAG via Sentence-level Attention Knowledge Integration](https://aclanthology.org/2025.emnlp-main.63.pdf)
- **Prompt engineering** (behaviors tasks) — *measured_by*
  > We evaluate PbT on three tasks with five benchmarks: ...and question generation (SQuAD (Rajpurkar et al., 2016)). (Section 4)
  - [Paired by the Teacher: Turning Unpaired Data into High-Fidelity Pairs for Low-Resource Text Generation](https://aclanthology.org/2025.emnlp-main.1030.pdf)
- **World knowledge** (constructs) — *measured_by*
  > "general knowledge (TriviaQA [29] and SQuAD [62])"
  - [Kernel Language Entropy: Fine-grained Uncertainty Quantification for LLMs from Semantic Similarities](https://proceedings.neurips.cc/paper_files/paper/2024/file/10c456d2160517581a234dfde15a7505-Paper-Conference.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > ...language understanding (HellaSwag (Zellers et al., 2019), BoolQ (Clark et al., 2019), OpenbookQA (Mihaylov et al., 2018), SQuAD (Rajpurkar et al., 2016), MMLU (Hendrycks et al., 2021), MMLU-Pro (Wang et al., 2024), GPQA(Rein et al., 2023)) (Section 3).
  - [Samba: Simple Hybrid State Space Models for Efficient Unlimited Context Language Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/84a7fc24ed52e8eff514c33e8ac76ea3-Paper-Conference.pdf)
- **Associative recall ability** (constructs) — *measured_by*
  > “Recall” represents the average performance across FDA, SWDE, and SQuAD. (Table 7)
  - [Scaling up the State Size of RNN LLMs for Long-Context Scenarios](https://aclanthology.org/2025.acl-long.564.pdf)
