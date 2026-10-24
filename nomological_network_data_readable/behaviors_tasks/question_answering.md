# Question answering
**Type:** Behavior  
**Referenced in:** 365 papers  
**Also known as:** Question Answering, Benchmark Question Answering, Text-based question answering, Tideo question answering, Natural language question answering  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage is producing an answer to a natural-language question, usually expecting the answer to be correct, accurate, direct, or relevant. Most papers frame the answer as grounded in provided context, such as passages, documents, tables, knowledge graphs, retrieved evidence, or long contexts, though many others evaluate answers from general or internal knowledge; a smaller line narrows the task to benchmark-style formats such as multiple-choice, yes or no, span extraction, short-form open-domain QA, or direct factual answers. Some papers also evaluate the same behavior in adversarial settings, and a minority framing treats QA as judging whether a model output is correct for a given question and reference answer.

**Variants.** Papers study QA in many settings, most commonly open-book and closed-book, single-document and multi-document, and multi-hop or long-context forms. They also describe specialized variants over structured data and temporally evolving tables, including questions whose answers cannot be derived from a single table alone, domain QA in medicine or mental health, and personalized answers written in community-style comment formats. A smaller multimodal line recasts the behavior over images, video, audio, or a textual video, while some work reformulates dialogue slot filling or targeted entity extraction as question answering.

**Space of elicitation and scores.** Papers measure this behavior with 84 instruments. The most frequently linked are SQuAD v1.1, TriviaQA, Natural Questions, HotpotQA, and MMLU, and the wider instrument pool spans extractive or passage-grounded QA, open-domain and retrieval-grounded QA, multi-hop QA, multiple-choice benchmark QA, and long-context evaluation suites. Scoring is usually framed as correctness against a reference or ground truth, with some papers reporting EM or F1 and others using judge-based evaluation.

**What it is taken as evidence of.** Papers connect question answering to 12 constructs, but they do not settle on a single construct that it reflects. The most common links treat it as related to Reasoning, Completeness, and In-context learning; one paper claims a causal relationship from Knowledge conflict resolution to question answering, and other papers use question answering to measure Knowledge manipulation and other knowledge-focused constructs. Overall, the construct links split between reasoning-oriented uses, answer-quality attributes, and knowledge-focused evaluation.

## Sources

**[Enhancing Language Model Hypernetworks with Restart: A Study on Optimization](https://aclanthology.org/2025.naacl-long.397.pdf)**
> Producing answers to natural language questions, evaluated in both standard and adversarial settings.

**[Alignment at Pre-training! Towards Native Alignment for Arabic LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/195c4e2910bedabd813f9fe4e70c642c-Paper-Conference.pdf) (as "Question Answering")**
> The model providing answers to questions across various subjects as part of knowledge benchmarks.

**[EDiT: A Local-SGD-Based Efficient Distributed Training Method for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a4f419c398382295e1e350d56ecb65f2-Paper-Conference.pdf) (as "Benchmark Question Answering")**
> Solving specific tasks on standardized public benchmarks to demonstrate model capabilities.

**[VisualWebInstruct: Scaling up Multimodal Instruction Data through Web Search](https://aclanthology.org/2025.emnlp-main.72.pdf) (as "Text-based question answering")**
> Generating answers to questions using only textual input and reasoning, without reliance on visual information.

**[TOPA: Extending Large Language Models for Video Understanding via Text-Only Pre-Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/0ae94013da7cd459402fd77874e09ee3-Paper-Conference.pdf) (as "Tideo question answering")**
> A pre-alignment task where the model answers a question based on the content of a "textual video" (Tideo).

**[Semantic-Eval : A Semantic Comprehension Evaluation Framework for Large Language Models Generation without Training](https://aclanthology.org/2025.acl-long.477.pdf) (as "Natural language question answering")**
> The task of generating answers to open-ended questions in natural language, particularly in specialized domains like mental health or medicine.

## Relationships

### Question answering →
- **SQuAD v1.1** (measurements) — *measured_by*
  > In QA, we evaluate the performance of the proposed PEFT method on SQuADv1.1 (Rajpurkar et al., 2016) and SQuADv2.0 (Rajpurkar et al., 2018). (Section 4)
  - [Increasing Model Capacity for Free: A Simple Strategy for Parameter Efficient Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/ce3fd6b9dfe458dc258a8164a5e95bd2-Paper-Conference.pdf)
- **Natural Questions** (measurements) — *measured_by*
  > we first fine-tune Llama 2-7B-chat on TruthfulQA and then evaluate 0-shot on three out-of-domain question-answering benchmarks: TriviaQA [18], Natural Questions [20, NQ], and MMLU [14]. (Section 6).
  - [LoFiT: Localized Fine-tuning on LLM Representations](https://proceedings.neurips.cc/paper_files/paper/2024/file/122ea6470232ee5e79a2649243348005-Paper-Conference.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > In this section, we implement and evaluate Conformal Alignment in question-answering tasks, where we consider a conversational question answering dataset TriviaQA [21] and a closed-book reading comprehension dataset CoQA [39]. (Section 4)
  - [Conformal Alignment: Knowing When to Trust Foundation Models with Guarantees](https://proceedings.neurips.cc/paper_files/paper/2024/file/870ccde24673d3970a680bb48496ed63-Paper-Conference.pdf)
- **HotpotQA** (measurements) — *measured_by*
  > “HotPotQA provides a more challenging open-ended question answering task with long answers containing many tokens.”
  - [The Truth is in There: Improving Reasoning in Language Models with Layer-Selective Rank Reduction](https://proceedings.iclr.cc/paper_files/paper/2024/file/4c2092ec0b1370cce3fb5965ab255fae-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > we first fine-tune Llama 2-7B-chat on TruthfulQA and then evaluate 0-shot on three out-of-domain question-answering benchmarks: TriviaQA [18], Natural Questions [20, NQ], and MMLU [14]. (Section 6).
  - [LoFiT: Localized Fine-tuning on LLM Representations](https://proceedings.neurips.cc/paper_files/paper/2024/file/122ea6470232ee5e79a2649243348005-Paper-Conference.pdf)
- **BoolQ** (measurements) — *measured_by*
  > In the assessments of continued QA and text understanding, we report 0-shot accuracy for LogiQA [28], 32-shot BoolQ [29], and 0-shot LAMBADA [30]. (Section 5.1)
  - [DHA: Learning Decoupled-Head Attention from Transformer Checkpoints via Adaptive Heads Fusion](https://proceedings.neurips.cc/paper_files/paper/2024/file/518a75257f37b32f711082dff33c2ffc-Paper-Conference.pdf)
- **ARC** (measurements) — *measured_by*
  > To evaluate the efficacy of ACC-Collab we make use of 5 standard benchmark tasks: ... ARC Chollet (2019) ∼7k multiple-choice reasoning-based questions. (Section 5)
  - [ACC-Collab: An Actor-Critic Approach to Multi-Agent LLM Collaboration](https://proceedings.iclr.cc/paper_files/paper/2025/file/e187897ed7780a579a0d76fd4a35d107-Paper-Conference.pdf)
- **Qasper** (measurements) — *measured_by*
  > Qasper (QASP) (Dasigi et al., 2021) is a question answering dataset over NLP papers filtered from the Semantic Scholar Open Research Corpus (S2ORC) (Lo et al., 2020).
  - [Retrieval meets Long Context Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d75f29006df67df084e6586f1cb8458c-Paper-Conference.pdf)
- **NarrativeQA** (measurements) — *measured_by*
  > NarrativeQA (NQA) (Koˇciský et al., 2018) is an established question answering dataset over entire books from Project Gutenberg3 and movie scripts from a list of websites.
  - [Retrieval meets Long Context Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d75f29006df67df084e6586f1cb8458c-Paper-Conference.pdf)
- **LongBench** (measurements) — *measured_by*
  > This benchmark encompasses a broad range of tasks, such as question-answering, summarization, and code completion, where the evaluation length ranges from 5k to 15k. (Section 4.3)
  - [CLEX: Continuous  Length Extrapolation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/3df38ca67befaed9c03b95ffee07d9f8-Paper-Conference.pdf)
- **QuALITY** (measurements) — *measured_by*
  > QuALITY (QLTY) (Pang et al., 2022) is a question answering dataset over stories and articles collected from several resources, such as Project Gutenberg and the Open American National Corpus4.
  - [Retrieval meets Long Context Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d75f29006df67df084e6586f1cb8458c-Paper-Conference.pdf)
- **OpenBookQA** (measurements) — *measured_by*
  > In question answering, we adopt the test splits of ECQA (Aggarwal et al., 2021), QASC (Khot et al., 2020), OpenbookQA (Mihaylov et al., 2018), and StrategyQA (Geva et al., 2021) for evaluation. (Section 4)
  - [Bridging and Modeling Correlations in Pairwise Data for Direct Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/d41760ec1e2db105e63e98393648c763-Paper-Conference.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > TruthfulQA encompasses multiple-choice questions, with only one option being the best answer. (Section 4.1)
  - [On the Humanity of Conversational AI: Evaluating the Psychological Portrayal of LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/c48dcd605cfb17d5b4f94ce106a915f7-Paper-Conference.pdf)
- **ZsRE** (measurements) — *measured_by*
  > For GPT-2, T5-XL, and GPT-J, we use the zero-shot Relation Extraction (zsRE) question answering dataset (Levy et al., 2017) with the identical train/val splits with De Cao et al. (2021); Mitchell et al. (2022) (Section 5).
  - [Massive Editing for Large Language Models via Meta Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/f074097f6f186947726ef28819d589e7-Paper-Conference.pdf)
- **MedMCQA** (measurements) — *measured_by*
  > We evaluate our agent on three complex QA tasks: ProductQA, MedMCQA and HotPotQA.
  - [AGILE: A Novel Reinforcement Learning Framework of LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/097c514162ea7126d40671d23e12f51b-Paper-Conference.pdf)
- **2WikiMultiHopQA** (measurements) — *measured_by*
  > Question Answering For this task, we consider the following datasets: 2WikiMultiHopQA [27], StrategyQA [28], MuSiQue [29], and HotpotQA [30] (Section 4.1).
  - [Information Re-Organization Improves Reasoning in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb1a323fa10d4102ff13422476a744ff-Paper-Conference.pdf)
- **WikiQA** (measurements) — *measured_by*
  > For question answering, we employ two famous benchmarks: SQuAD (Rajpurkar et al., 2016) and WikiQA (Yang et al., 2015). (Section 3)
  - [CAMEx: Curvature-aware Merging of Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/341d64b067e06c6ebea97a498c90d598-Paper-Conference.pdf)
- **QASC** (measurements) — *measured_by*
  > In question answering, we adopt the test splits of ECQA (Aggarwal et al., 2021), QASC (Khot et al., 2020), OpenbookQA (Mihaylov et al., 2018), and StrategyQA (Geva et al., 2021) for evaluation. (Section 4)
  - [Bridging and Modeling Correlations in Pairwise Data for Direct Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/d41760ec1e2db105e63e98393648c763-Paper-Conference.pdf)
- **SQuAD 2.0** (measurements) — *measured_by*
  > SuperContext is validated on a comprehensive OOD benchmarks GLUE-X (Yang et al., 2022), and a QA dataset, SQuAD 2.0 (Rajpurkar et al., 2018). (Section 2)
  - [Supervised Knowledge Makes Large Language Models Better In-context Learners](https://proceedings.iclr.cc/paper_files/paper/2024/file/bfa629625fd35bf5b880df464b584a57-Paper-Conference.pdf)
- **StrategyQA** (measurements) — *measured_by*
  > Question Answering For this task, we consider the following datasets: 2WikiMultiHopQA [27], StrategyQA [28], MuSiQue [29], and HotpotQA [30] (Section 4.1).
  - [Information Re-Organization Improves Reasoning in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb1a323fa10d4102ff13422476a744ff-Paper-Conference.pdf)
- **CommonsenseQA** (measurements) — *measured_by*
  > CommonsenseQA [63] is to test models’ ability to answer questions using only the parameterized knowledge instead of the context knowledge. (Appendix E.2)
  - [TAIA: Large Language Models are Out-of-Distribution Data Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/be0a8ecf8b2743a4117557c5eca0fb79-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > Question Answering. For questions about workflow demonstrations, the model generates a natural language answer, assessing its understanding of workflow semantics. We use GPT-4 to compare the generated answer to a reference answer for evaluation. (Section 4.2)
  - [WONDERBREAD: A Benchmark for Evaluating Multimodal Foundation Models on Business Process Management Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/d1fa821312040303b089ae529dbf81a6-Paper-Datasets_and_Benchmarks_Track.pdf)
- **SIQA** (measurements) — *measured_by*
  > OLMo-30M models trained on various pre-training token budgets are fine-tuned on downstream tasks using fixed hyperparameters: math (GSM8k), code (Starcoder-Python), and QA (SIQA). (Figure 4)
  - [Overtrained Language Models Are Harder to Fine-Tune](https://raw.githubusercontent.com/mlresearch/v267/main/assets/springer25a/springer25a.pdf)
- **MuSiQue** (measurements) — *measured_by*
  > Question Answering For this task, we consider the following datasets: 2WikiMultiHopQA [27], StrategyQA [28], MuSiQue [29], and HotpotQA [30] (Section 4.1).
  - [Information Re-Organization Improves Reasoning in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb1a323fa10d4102ff13422476a744ff-Paper-Conference.pdf)
- **InfiniteBench** (measurements) — *measured_by*
  > "The datasets in ∞-Bench cover diverse tasks including question answering, summarization, context retrieval, and mathematic computing."
  - [InfLLM: Training-Free Long-Context Extrapolation for LLMs with an Efficient Context Memory](https://proceedings.neurips.cc/paper_files/paper/2024/file/d842425e4bf79ba039352da0f658a906-Paper-Conference.pdf)
- **Alpaca instruction dataset** (measurements) — *measured_by*
  > The ﬁrst task is Q&A and summarization, including Alpaca [68] and SAMSum [22], and perplexity (PPL) is used to measure their performance. (Section 4.1)
  - [D-LLM: A Token Adaptive Computing Resource Allocation Strategy for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/03469b1a66e351b18272be23baf3b809-Paper-Conference.pdf)
- **PopQA** (measurements) — *measured_by*
  > We adapt our approach to question answering as described at the end of Section 5. We focus on 1.5K randomly sampled questions from PopQA. (Section 6.3)
  - [Self-contradictory Hallucinations of Large Language Models: Evaluation, Detection and Mitigation](https://proceedings.iclr.cc/paper_files/paper/2024/file/b0d4b9d3dc41b36cad1d36ddd27858ab-Paper-Conference.pdf)
- **CoQA** (measurements) — *measured_by*
  > we performed experiments on three datasets that cover a broad range of question answering settings. To be concrete, we use ... the almost 8,000 open-book questions in the development split of CoQA (Reddy et al., 2019) (Section 6).
  - [Improving Uncertainty Estimation through Semantically Diverse Language Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b94d8b035e2183e47afef9e2f299ba47-Paper-Conference.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > Second, we consider standard academic benchmarks used to evaluate large language models, such as question answering or Cloze-style problems. We use the following datasets: ARC challenge (Clark et al., 2018)...
  - [Neutral residues: revisiting adapters for model extension](https://raw.githubusercontent.com/mlresearch/v267/main/assets/talla25a/talla25a.pdf)
- **RULER** (measurements) — *measured_by*
  > Figure 5 illustrates the trade-off between two representative KV sparsification algorithms, SnapKV and PQCache, and their respective theoretical speedups on three distinct Ruler tasks: needle in a haystack with passkeys 3 (niah-multikeys-3), common word extraction (cwe), and question answering 1 (qa-1). (Section 4.4)
  - [MagicDec: Breaking the Latency-Throughput Tradeoff for Long Context Generation with Speculative Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/13f972adf12bdf886583d48cd528002f-Paper-Conference.pdf)
- **ZeroSCROLLS** (measurements) — *measured_by*
  > "ZeroSCROLLS benchmark ... contains ten diverse natural language tasks that require understanding long input contexts, including summarization, question answering"
  - [IceFormer: Accelerated Inference with Long-Sequence Transformers on CPUs](https://proceedings.iclr.cc/paper_files/paper/2024/file/4059971112ab22fc7b6aed520aaca6b2-Paper-Conference.pdf)
- **MedQA** (measurements) — *measured_by*
  > ...while MedQA-USMLE [34] acts as a domain-specific QA benchmark. (Section 4.1)
  - [KnowGPT: Knowledge Graph based Prompting for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0b8705a611ed1ce19cdb759031078705-Paper-Conference.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > Our method is benchmarked across a diverse range of question answering and generation datasets [24, 25, 26, 27, 28, 29, 30, 31] using the lm-eval-harness [32]. (Section 2)
  - [MiniCache: KV Cache Compression in Depth Dimension for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fd0705710bf01b88a60a3d479ea341d9-Paper-Conference.pdf)
- **Bamboogle** (measurements) — *measured_by*
  > For QA, we conduct experiments on three widely used datasets: Bamboogle [17], WikiMultiHopQA [52], and HotpotQA [53]. (Section 5.1)
  - [Chain of Preference Optimization: Improving Chain-of-Thought Reasoning in LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/00d80722b756de0166523a87805dd00f-Paper-Conference.pdf)
- **DROP** (measurements) — *measured_by*
  > We also evaluate question answering on SQuAD [70], NQ [46], TriviaQA [40], and Drop [20], where models must ground their answers in in-context documents. (Section 4.1.2)
  - [Gated Slot Attention for Efficient Linear-Time Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3f39e51f5f634fb16cc3e658f8512b9-Paper-Conference.pdf)
- **GPQA** (measurements) — *measured_by*
  > question-answering [GPQA, 51] (Introduction).
  - [Many-Shot In-Context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/8cb564df771e9eacbfe9d72bd46a24a9-Paper-Conference.pdf)
- **SciQ** (measurements) — *measured_by*
  > Following Tian et al. (2023), we use two question-answering datasets: (1) SciQ (Welbl et al., 2017) contains crowd-sourced science exam questions (Section 4.3).
  - [Calibrating Expressions of Certainty](https://proceedings.iclr.cc/paper_files/paper/2025/file/66b35d2e8d524706f39cc21f5337b002-Paper-Conference.pdf)
- **ScienceQA** (measurements) — *measured_by*
  > Question Answering. For ScienceQA (Lu et al., 2022b), we gather text-only samples to form a train and test set with 6,508 and 2,224 samples. (Section 4.1).
  - [On Large Language Model Continual Unlearning](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc28053a08f59fccb48b11f2e31e81c7-Paper-Conference.pdf)
- **LoCoMo** (measurements) — *measured_by*
  > Table 1: Performance comparison on LOCOMO and Long-MT-Bench+. (The table shows QA Performance metrics for these datasets.)
  - [SeCom: On Memory Construction and Retrieval for Personalized Conversational Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/e56f394bbd4f0ec81393d767caa5a31b-Paper-Conference.pdf)
- **GLUE** (measurements) — *measured_by*
  > We finetune the pretrained RoBERTa-base model (Liu et al., 2019) on the GLUE benchmark, a widely used suite for evaluating NLP models across various tasks, including sentiment analysis and question answering (Wang et al., 2019). (Section 4.2)
  - [CompAct: Compressed Activations for Memory-Efficient LLM Training](https://aclanthology.org/2025.naacl-long.71.pdf)
- **TyDi QA** (measurements) — *measured_by*
  > TydiQA [7] Multilingual QA (Table 1)
  - [TSDS: Data Selection for Task-Specific Model Finetuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/13848b5893119ff772b69812c95914fa-Paper-Conference.pdf)
- **ARC-Easy** (measurements) — *measured_by*
  > We conduct a comparative evaluation of PPC-GPT on QA datasets. Specifically, we include... ARC-E... (Section 5.1)
  - [PPC-GPT: Federated Task-Specific Compression of Large Language Models via Pruning and Chain-of-Thought Distillation](https://aclanthology.org/2025.emnlp-main.747.pdf)
- **BioASQ** (measurements) — *measured_by*
  > We evaluate RAG performance across three datasets spanning different reasoning complexities and domain-specificity... BioASQ (Task 11B) (Krithara et al., 2023): PubMed-based biomedical QA for specialized domains. (Section 3.3)
  - [RAGGED: Towards Informed Design of Scalable and Stable RAG Systems](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hsia25a/hsia25a.pdf)
- **GSM8K** (measurements) — *measured_by*
  > “We test on the test splits of ... GSM8K (Cobbe et al., 2021), ARC (Clark et al., 2018), HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2019), and WinoGrande (Sakaguchi et al., 2021) for question-answering tasks.”
  - [Radio: Rate–Distortion Optimization for Large Language Model Compression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/young25b/young25b.pdf)
- **BBQ** (measurements) — *measured_by*
  > For question answering, we use the BBQ dataset (Parrish et al., 2021), where unambiguous contexts serve as the knowledge base, and target groups are the classes to be predicted. (Section 5.1)
  - [Your RAG is Unfair: Exposing Fairness Vulnerabilities in Retrieval-Augmented Generation via Backdoor Attacks](https://aclanthology.org/2025.emnlp-main.804.pdf)
- **ELI5** (measurements) — *measured_by*
  > We run experiments on two question- answering datasets, namely NQ-Open and ELI5. (Section 3.1)
  - [Pointwise Mutual Information as a Performance Gauge for Retrieval-Augmented Generation](https://aclanthology.org/2025.naacl-long.78.pdf)
- **ArXivQA** (measurements) — *measured_by*
  > Three question-answering (QA) benchmarks: HotpotQA [53], ArxivQA [22], ToolQA [67], where the task is to provide natural language answers to the questions. (Section 5).
  - [AvaTaR: Optimizing LLM Agents for Tool Usage via Contrastive Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2db8ce969b000fe0b3fb172490c33ce8-Paper-Conference.pdf)
- **ToolQA** (measurements) — *measured_by*
  > Three question-answering (QA) benchmarks: HotpotQA [53], ArxivQA [22], ToolQA [67], where the task is to provide natural language answers to the questions. (Section 5).
  - [AvaTaR: Optimizing LLM Agents for Tool Usage via Contrastive Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2db8ce969b000fe0b3fb172490c33ce8-Paper-Conference.pdf)
- **LogiQA** (measurements) — *measured_by*
  > In the assessments of continued QA and text understanding, we report 0-shot accuracy for LogiQA [28], 32-shot BoolQ [29], and 0-shot LAMBADA [30]. (Section 5.1)
  - [DHA: Learning Decoupled-Head Attention from Transformer Checkpoints via Adaptive Heads Fusion](https://proceedings.neurips.cc/paper_files/paper/2024/file/518a75257f37b32f711082dff33c2ffc-Paper-Conference.pdf)
- **NewsQA** (measurements) — *measured_by*
  > “For the news articles domain, we use the NewsQA dataset (Trischler et al., 2017), which consists of CNN articles paired with questions and answers derived from those articles.”
  - [Evaluating Copyright Takedown Methods for Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/faed4276b52ef762879db4142655c699-Paper-Datasets_and_Benchmarks_Track.pdf)
- **SHP** (measurements) — *measured_by*
  > “Question-Answering (QA). We reconstruct the public dataset SHP, which comprises numerous questions from Reddit posts and their corresponding user answers.”
  - [Towards Federated RLHF with Aggregated Client Preference for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/124dde499d62b58e97e42a45b26d7369-Paper-Conference.pdf)
- **AlpacaEval 2.0** (measurements) — *measured_by*
  > For question answering, we use AlpacaEval 2.0 (Li et al., 2023b; Dubois et al., 2024a;b) to assess model performance on 805 instructions. (Section 7.1)
  - [Towards Federated RLHF with Aggregated Client Preference for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/124dde499d62b58e97e42a45b26d7369-Paper-Conference.pdf)
- **MMHal-Bench** (measurements) — *measured_by*
  > MMHal-Bench (MMHal) (Sun et al., 2023) is a question-answering benchmark that covers 8 question categories and 12 object topics. (Sec. 5.1)
  - [CHiP: Cross-modal Hierarchical Direct Preference Optimization for Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1c73e9595126794186536cfbbed012f-Paper-Conference.pdf)
- **ECQA** (measurements) — *measured_by*
  > In question answering, we adopt the test splits of ECQA (Aggarwal et al., 2021), QASC (Khot et al., 2020), OpenbookQA (Mihaylov et al., 2018), and StrategyQA (Geva et al., 2021) for evaluation. (Section 4)
  - [Bridging and Modeling Correlations in Pairwise Data for Direct Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/d41760ec1e2db105e63e98393648c763-Paper-Conference.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > To evaluate the efficacy of ACC-Collab we make use of 5 standard benchmark tasks: ... BBH Suzgun et al. (2022) ∼5k mixed-type questions (Section 5)
  - [ACC-Collab: An Actor-Critic Approach to Multi-Agent LLM Collaboration](https://proceedings.iclr.cc/paper_files/paper/2025/file/e187897ed7780a579a0d76fd4a35d107-Paper-Conference.pdf)
- **SST-2** (measurements) — *measured_by*
  > For question answering tasks, we utilize BoolQ (from SuperGLUE) and SST-2 (from GLUE) (Section 4).
  - [PortLLM: Personalizing Evolving Large Language Models with Training-Free and Portable Model Patches](https://proceedings.iclr.cc/paper_files/paper/2025/file/59c444334e6bcf4e796f59f6d0bcae2a-Paper-Conference.pdf)
- **HelpSteer** (measurements) — *measured_by*
  > "HelpSteer (Wang et al., 2023) is a QA dataset aimed at evaluating the model’s capability to follow instructions across five dimensions"
  - [Amulet: ReAlignment During Test Time for Personalized Preference Adaptation of LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7c43d4a79dede363a2d061c6158e5a5-Paper-Conference.pdf)
- **UltraChat** (measurements) — *measured_by*
  > From UltraFeedback, we selected two high-quality QA datasets: Truthful QA (Lin et al., 2021), which includes 811 testing problems, and UltraChat (Ding et al., 2023)... (Section 4.1)
  - [Amulet: ReAlignment During Test Time for Personalized Preference Adaptation of LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7c43d4a79dede363a2d061c6158e5a5-Paper-Conference.pdf)
- **Spec-Bench** (measurements) — *measured_by*
  > The benchmark includes various generation subtasks including... question answering
  - [Block Verification Accelerates Speculative Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e710b42b1a9ed898f607ec0f4fcc971-Paper-Conference.pdf)
- **Arena-Hard** (measurements) — *measured_by*
  > We primarily evaluate all the models using two recent proposed instruction-following QA benchmarks: Arena-Hard (Li et al., 2024) and Wild-Bench(Lin et al., 2024).
  - [As Simple as Fine-tuning: LLM Alignment via Bidirectional Negative Feedback Loss](https://proceedings.iclr.cc/paper_files/paper/2025/file/4bc4e9ecd5ae4a75048dc216a770cba1-Paper-Conference.pdf)
- **WildBench** (measurements) — *measured_by*
  > We primarily evaluate all the models using two recent proposed instruction-following QA benchmarks: Arena-Hard (Li et al., 2024) and Wild-Bench(Lin et al., 2024).
  - [As Simple as Fine-tuning: LLM Alignment via Bidirectional Negative Feedback Loss](https://proceedings.iclr.cc/paper_files/paper/2025/file/4bc4e9ecd5ae4a75048dc216a770cba1-Paper-Conference.pdf)
- **XQuAD** (measurements) — *measured_by*
  > For NLU tasks, we test on the ... question-answering dataset XQuAD (Artetxe et al., 2020). (Section 4.1).
  - [AdaMergeX: Cross-Lingual Transfer with Large Language Models via Adaptive Adapter Merging](https://aclanthology.org/2025.naacl-long.493.pdf)
- **NQ-Swap** (measurements) — *measured_by*
  > We demonstrate ADACAD’s effectiveness on a diverse range of tasks, covering question-answering (QA) and summarization, with six QA datasets (Natural Question (NQ; Kwiatkowski et al., 2019), NQ-SWAP (Longpre et al., 2021), TriviaQA (Joshi et al., 2017), PopQA (Mallen et al., 2023), HotpotQA (Yang et al., 2018), TabMWP (Lu et al., 2023)) (Section 1).
  - [AdaCAD: Adaptively Decoding to Balance Conflicts between Contextual and Parametric Knowledge](https://aclanthology.org/2025.naacl-long.581.pdf)
- **IIRC** (measurements) — *measured_by*
  > We measure all the methods on four different QA datasets, including multi-hop Wikipedia reasoning datasets: ... (2) IIRC (Ferguson et al., 2020)... (Section 4.1)
  - [Graph Neural Network Enhanced Retrieval for Question Answering of Large Language Models](https://aclanthology.org/2025.naacl-long.337.pdf)
- **RGB** (measurements) — *measured_by*
  > Open-source RAG datasets: RGB (Chen et al., 2024) and KNOT (Liu et al., 2024) are two general-domain QA datasets designed to evaluate LLMs’ ability to effectively utilize retrieved information while withstanding various imperfections in the retrieval process. (Section 5.1)
  - [Parenting: Optimizing Knowledge Selection of Retrieval-Augmented Language Models with Parameter Decoupling and Tailored Tuning](https://aclanthology.org/2025.acl-long.571.pdf)
- **ParaRel** (measurements) — *measured_by*
  > Question-Answering: Given a question, the model directly predicts its answer. We include ParaRel (Elazar et al., 2021) and HotpotQA (Yang et al., 2018). (Section 5.1)
  - [FactTest: Factuality Testing in Large Language Models with Finite-Sample and Distribution-Free Guarantees](https://raw.githubusercontent.com/mlresearch/v267/main/assets/nie25a/nie25a.pdf)
- **PrOntoQA** (measurements) — *measured_by*
  > "The first dataset, PrOntoQA ... consists of question-answering examples"
  - [An Analysis for Reasoning Bias of Language Models with Small Initialization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yao25g/yao25g.pdf)
- **MLQA** (measurements) — *measured_by*
  > MLQA (Lewis et al., 2019): A question-answering benchmark with context passages, questions, and answers.
  - [Transplant Then Regenerate: A New Paradigm for Text Data Augmentation](https://aclanthology.org/2025.emnlp-main.702.pdf)
- **CosmosQA** (measurements) — *measured_by*
  > These datasets encompass diverse tasks, covering three Question Answering datasets: Huang et al.’s (2019) Cosmos QA, Sap et al.’s (2019) Social IQA, and Rogers et al.’s (2020) QuAIL; (Section 5.2)
  - [To See a World in a Spark of Neuron: Disentangling Multi-Task Interference for Training-Free Model Merging](https://aclanthology.org/2025.emnlp-main.793.pdf)
- **CWQ** (measurements) — *measured_by*
  > “PathwiseRAG is evaluated on five challenging question-answering benchmarks spanning different reasoning complexities. ... ComplexWebQuestions ...”
  - [PathwiseRAG: Multi-Dimensional Exploration and Integration Framework](https://aclanthology.org/2025.emnlp-main.1167.pdf)
- **QNLI** (measurements) — *measured_by*
  > ...and QNLI for question answering (Wang et al., 2018). (Section 4.1)
  - [NormXLogit: The Head-on-Top Never Lies](https://aclanthology.org/2025.emnlp-main.1769.pdf)
- **GUI understanding** (constructs) — *causes*
  > both QA and Caption samples enhance performance in GUI understanding and OCR-related benchmarks
  - [Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf)
- **FiQA-SA** (measurements) — *measured_by*
  > We conduct a comparative evaluation of PPC-GPT on QA datasets. Specifically, we include... FiQA-SA... (Section 5.1)
  - [PPC-GPT: Federated Task-Specific Compression of Large Language Models via Pruning and Chain-of-Thought Distillation](https://aclanthology.org/2025.emnlp-main.747.pdf)

### → Question answering
- **Self-correction** (behaviors tasks) — *causes*
  > PoG (Chen et al., 2024a) integrates reflection and self-correction mechanisms to adaptively explore the reasoning paths over KG via an LLM agent, and then augments the LLM in complex reasoning and question answering based on the retrieved knowledge paths. (Section 3.2.3)
  - [Large Language Models Meet Knowledge Graphs for Question Answering: Synthesis and Opportunities](https://aclanthology.org/2025.emnlp-main.1249.pdf)
- **Prompt engineering** (behaviors tasks) — *causes*
  > “Then, we use generated SQs in our question prompt, replacing QRS output, to generate an answer.”
  - [Analyzing and Improving Coherence of Large Language Models in Question Answering](https://aclanthology.org/2025.naacl-long.588.pdf)
- **Coreference resolution** (behaviors tasks) — *causes*
  > highlighting the effectiveness of leveraging coreference resolution to bridge context gaps in question answering. (Abstract)
  - [Bridging Context Gaps: Leveraging Coreference Resolution for Long Contextual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/a1b71d48d4806ecbe5a9e19fa3f10fdc-Paper-Conference.pdf)
- **Knowledge conflict resolution** (constructs) — *causes*
  > MICRO-ACT consistently achieves significant increase in QA accuracy over state-of-the-art baselines across all 5 datasets and 3 conflict types, especially in temporal and semantic types where all baselines fail significantly. (Abstract)
  - [Micro-Act: Mitigate Knowledge Conflict in Question Answering via Actionable Self-Reasoning](https://aclanthology.org/2025.acl-long.909.pdf)

### Associated with
- **Reasoning** (constructs)
  > Our two Knowledge Transfer tasks – Question Answering and Demo Validation – assess whether a model can perform higher-level reasoning about the properties and correctness of a workflow. (Section 4.2)
  - [WONDERBREAD: A Benchmark for Evaluating Multimodal Foundation Models on Business Process Management Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/d1fa821312040303b089ae529dbf81a6-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Relevance** (constructs)
  > question-answering systems can have attributes of relevance, verbosity, and completeness [52].
  - [Decoding-Time Language Model Alignment with Multiple Objectives](https://proceedings.neurips.cc/paper_files/paper/2024/file/57c89126d60c209f48d0e6395c766bb3-Paper-Conference.pdf)
- **Verbosity** (constructs)
  > question-answering systems can have attributes of relevance, verbosity, and completeness [52].
  - [Decoding-Time Language Model Alignment with Multiple Objectives](https://proceedings.neurips.cc/paper_files/paper/2024/file/57c89126d60c209f48d0e6395c766bb3-Paper-Conference.pdf)
- **Completeness** (constructs)
  > question-answering systems can have attributes of relevance, verbosity, and completeness [52].
  - [Decoding-Time Language Model Alignment with Multiple Objectives](https://proceedings.neurips.cc/paper_files/paper/2024/file/57c89126d60c209f48d0e6395c766bb3-Paper-Conference.pdf)
- **Multi-hop reasoning** (constructs)
  > ...we conduct experiments using Llama2-70B [2], GPT-3.5 [1], and GPT-4 [3] on various contextually aware multi-hop reasoning tasks, including claim verification [12], question answering [13], and reading comprehension [14] (Section 1).
  - [Information Re-Organization Improves Reasoning in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb1a323fa10d4102ff13422476a744ff-Paper-Conference.pdf)
- **World knowledge** (constructs)
  > the QA ability to maintain pre-trained world knowledge (Section 1).
  - [CorDA: Context-Oriented Decomposition Adaptation of Large Language Models for Task-Aware Parameter-Efficient Fine-tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/83f95bb0ac5046338ea2afe3390e9f4b-Paper-Conference.pdf)
- **Ranking** (behaviors tasks)
  > To leverage the instruction following abilities in modern LLMs, we formulate the re-ranking task into either question answering (QA) or information extraction (IE) tasks, which are more commonly seen by LLMs. (Section 3.1)
  - [Attention in Large Language Models Yields Efficient Zero-Shot Re-Rankers](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5b1890a7c1a79fe9b32b0f442347089-Paper-Conference.pdf)
- **Entity disambiguation** (behaviors tasks)
  > Entity Identification. This function acts as a question-answering module that extracts a specific entity. (Section 3.2)
  - [Verify-in-the-Graph: Entity Disambiguation Enhancement for Complex Claim Verification with Interactive Graph Representation](https://aclanthology.org/2025.naacl-long.268.pdf)
- **Dialogue state tracking** (behaviors tasks)
  > Our approach includes reformulating DST as a question-answering task for less capable models and employing self-refining prompts for more adaptable ones.
  - [A Zero-Shot Open-Vocabulary Pipeline for Dialogue Understanding](https://aclanthology.org/2025.naacl-long.387.pdf)
- **In-context learning** (constructs)
  > For question-answering (QA) tasks, in-context learning (ICL) enables language models (LMs) to generate responses without modifying their parameters by leveraging examples provided in the input. (Abstract)
  - [Federated In-Context Learning: Iterative Refinement for Improved Answer Quality](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25db/wang25db.pdf)
- **Knowledge manipulation** (constructs)
  > We adopt question-answer style probes (QA) to assess the ability of the unlearned model to utilize knowledge in practical applications. (Section 3.3.1)
  - [RWKU: Benchmarking Real-World Knowledge Unlearning for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b1f78dfc9ca0156498241012aec4efa0-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Hallucination** (behaviors tasks)
  > However, we also observed that autoregressive large language models like GPT-4o-mini tend to hallucinate responses... in answering questions within the privacy policy context.
  - [Empowering Users in Digital Privacy Management through Interactive LLM-Based Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/bef8e5620c699630405adafaa86cb038-Paper-Conference.pdf)
- **RAGTruth** (measurements)
  > RAGTruth is the first high-quality, manually annotated RAG hallucination dataset. The data includes three RAG task types: Question Answering (QA), Data-to-Text Writing, and News Summarization.
  - [ReDeEP: Detecting Hallucination in Retrieval-Augmented Generation via Mechanistic Interpretability](https://proceedings.iclr.cc/paper_files/paper/2025/file/7daf60e805e596c3bd1e843e72ea5560-Paper-Conference.pdf)
- **Knowledge retention** (constructs)
  > Retention can be measured by querying θn with questions related to each xi for i ∈{1, . . . , n −1}. (Section 3.1)
  - [Self-Updatable Large Language Models by Integrating Context into Model Parameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/2b0c4fc1bd52329279c51ad2ddec9ace-Paper-Conference.pdf)
- **Knowledge memorization** (constructs)
  > We measure a model f’s memorization of knowledge from the forget set Dforget as follows: for each example x ∈Dforget associated with a question-answer pair (q, a), we gather the model’s answer to the question q, denoted f(q). (Section 3.1)
  - [MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)
- **Task generalization** (constructs)
  > AQuilt achieves better task generalization by incorporating Chinese data and defining more flexible task types. Specifically, AQuilt assigns the task type as closed/open-book QA and uses task requirements as question prefixes. (Section 4.3)
  - [AQuilt: Weaving Logic and Self-Inspection into Low-Cost, High-Relevance Data Synthesis for Specialist LLMs](https://aclanthology.org/2025.emnlp-main.293.pdf)
- **Long-context understanding** (constructs)
  > ...achieving substantial progress on tasks such as summarization and question answering that emphasize the effective utilization and understanding of long inputs.
  - [Long Chain-of-Thought Fine-tuning via Understanding-to-Reasoning Transition](https://aclanthology.org/2025.emnlp-main.1751.pdf)
