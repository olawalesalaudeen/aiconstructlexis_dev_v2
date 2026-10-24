# Fact checking
**Type:** Behavior  
**Referenced in:** 83 papers  
**Also known as:** Veracity analysis, Factuality checking, Fact extraction and verification, Veracity judgment, Claim verification, Fact verification, Table fact verification, Statement verification, Verdict prediction, Factual consistency evaluation, Veracity labeling, Answer verification, Answer correctness assessment, Sentence-level verification, Factual verification, Veracity prediction, Fact-checking, Truthfulness prediction, Statement validation, Legal fact verification, Table-based fact verification, Sub-claim verification  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is evidence-grounded veracity judgment: a claim or statement is checked against retrieved documents, a corpus, tables, a knowledge base, a knowledge graph, or other grounding material, and labeled as true, false, supported, refuted, or not enough information. One paper describes automated fact-checking as verifying a queried fact "with respect to a baseline knowledge." Papers differ mainly in output and accompanying requirements: some use binary true/false or support/unsupport decisions, while others use Supported, Refuted, and NotEnoughInfo, or require a verdict together with evidence, extracted supporting or refuting statements, or a human-readable explanation; the verdict is usually model-produced, though one line of work describes human or LLM-assisted veracity labeling after reviewing the claim and evidence. A smaller line of work broadens the behavior to extracting claims before verification, synthesizing missing or contradictory evidence into a belief judgment, or checking factual correctness during generation at the sentence or answer level.

**Variants.** Papers study this behavior under names such as fact verification, claim verification, veracity prediction, statement verification, and table fact verification. Common settings are general claim-evidence verification, scientific claims over abstracts or papers, news and misinformation settings using external facts, and table-based verification where a statement is judged against table contents as true/false or entailment/contradiction. Smaller variants place the check over knowledge graphs or other knowledge bases, medical statements or medical claims, legal evidence, out-of-context image captions, individual claims in long generations, sub-claims or triplets, and generated-text factual consistency or answer verification.

**Space of elicitation and scores.** Papers link fact checking to 16 measurement instruments, most often FEVER, FEVEROUS, SciFact, HoVer, and TabFact. These instruments cover three-way claim verdicts, verification with sentence and table evidence, scientific claims with paper sentences as evidence, multi-hop verification, and table-grounded true/false judgments. Other instruments also appear in medical and climate settings, factual statement checking, retrieval benchmarks, and medium-context evaluations.

**What it is taken as evidence of.** Papers link fact checking to 9 constructs, but they do not treat it as evidence of a single construct in a uniform way. The clearest measurement use is logical consistency: one paper says it assesses logical consistency "particularly in the context of fact-checking," so the behavior serves there as the measurement setting. Other frequent construct links are heterogeneous, fact checking is related to interpretability and explainability and to faithfulness, one paper claims a causal relationship from chain-of-thought reasoning to fact checking, one claims a causal relationship from fact checking to generalization, and another also claims a causal relationship from interpretability and explainability to fact checking.

## Sources

**[The Psychology of Falsehood: A Human-Centric Survey of Misinformation Detection](https://aclanthology.org/2025.emnlp-main.428.pdf) (as "Veracity prediction")**
> The task of classifying a claim as true, false, or another relevant category based on retrieved evidence.

**[Attacks by Content: Automated Fact-checking is an AI Security Issue](https://aclanthology.org/2025.emnlp-main.431.pdf) (as "Veracity analysis")**
> The process of synthesizing evidence to make a judgment on whether a claim should be believed, including handling cases of missing or contradictory evidence.

**[AgentPro: Enhancing LLM Agents with Automated Process Supervision](https://aclanthology.org/2025.emnlp-main.506.pdf) (as "Fact extraction and verification")**
> The task of identifying factual claims in text and verifying their correctness against a knowledge source.

**[MusKGC: A Flexible Multi-source Knowledge Enhancement Framework for Open-World Knowledge Graph Completion](https://aclanthology.org/2025.emnlp-main.508.pdf) (as "Factuality checking")**
> Judging whether a generated fact is entailed by retrieved evidence.

**[Training a Utility-based Retriever Through Shared Context Attribution for Retrieval-Augmented Language Models](https://aclanthology.org/2025.emnlp-main.33.pdf)**
> The task of verifying the truthfulness of a given claim against a corpus of evidence.

**[A Multi-Agent Framework with Automated Decision Rule Optimization for Cross-Domain Misinformation Detection](https://aclanthology.org/2025.emnlp-main.291.pdf) (as "Veracity judgment")**
> The task of making a final determination on whether a piece of news is true or false, based on provided analysis, evidence, and decision rules.

**[SciRIFF: A Resource to Enhance Language Model Instruction-Following over Scientific Literature](https://aclanthology.org/2025.emnlp-main.310.pdf) (as "Claim verification")**
> Determining whether a scientific claim is supported or refuted by evidence in a given abstract or paper, often accompanied by extracted supporting or refuting statements.

**[InfoGain-RAG: Boosting Retrieval-Augmented Generation through Document Information Gain-based Reranking and Filtering](https://aclanthology.org/2025.emnlp-main.365.pdf) (as "Fact verification")**
> The task of determining whether a given claim is supported or refuted by evidence from a provided knowledge source.

**[Can GRPO Boost Complex Multimodal Table Understanding?](https://aclanthology.org/2025.emnlp-main.637.pdf) (as "Table fact verification")**
> The task of determining whether a given statement is true or false based on the content of an associated table.

**[Unsupervised Hallucination Detection by Inspecting Reasoning Processes](https://aclanthology.org/2025.emnlp-main.1124.pdf) (as "Statement verification")**
> The observable behavior of a model assessing whether a given statement is factually correct, often through step-by-step reasoning.

**[Adversarial Attacks Against Automated Fact-Checking: A Survey](https://aclanthology.org/2025.emnlp-main.1171.pdf) (as "Verdict prediction")**
> Classifying the truthfulness of a claim based on retrieved evidence, typically as Supported, Refuted, or NotEnoughInfo.

**[Are LLMs Better than Reported? Detecting Label Errors and Mitigating Their Effect on Model Performance](https://aclanthology.org/2025.emnlp-main.1360.pdf) (as "Factual consistency evaluation")**
> Assessing whether a generated text (e.g., summary, dialogue response) is factually consistent with respect to a grounding text or source document.

**[MedFact: A Large-scale Chinese Dataset for Evidence-based Medical Fact-checking of LLM Responses](https://aclanthology.org/2025.emnlp-main.1646.pdf) (as "Veracity labeling")**
> Assigning a truthfulness label to a claim-evidence pair after reviewing both elements, either through human annotation or LLM-assisted labeling.

**[DocAgent: An Agentic Framework for Multi-Modal Long-Context Document Understanding](https://aclanthology.org/2025.emnlp-main.893.pdf) (as "Answer verification")**
> The process of cross-checking a generated answer against complementary sources or modalities to confirm its accuracy and completeness.

**[Efficient Real-time Refinement of Language Model Text Generation](https://aclanthology.org/2025.emnlp-main.1753.pdf) (as "Sentence-level verification")**
> The observable process of checking the factual correctness of individual sentences as they are generated during text production.

**[When Truthful Representations Flip Under Deceptive Instructions?](https://aclanthology.org/2025.emnlp-main.826.pdf) (as "Factual verification")**
> The observable task of assessing a given factual statement and producing a binary output of "True" or "False" based on the instructional context.

**[Logical Consistency of Large Language Models in Fact-Checking](https://proceedings.iclr.cc/paper_files/paper/2025/file/3209cf3312b2cbb68e33644362ddc2bd-Paper-Conference.pdf) (as "Fact-checking")**
> The observable task of verifying a queried fact against a provided knowledge base, such as a knowledge graph, and producing a binary response indicating its validity.

**[GameArena: Evaluating LLM Reasoning through Live Computer Games](https://proceedings.iclr.cc/paper_files/paper/2025/file/520416e27d3b0cef3cd70a083e2991c7-Paper-Conference.pdf) (as "Truthfulness prediction")**
> Predicting whether a human statement is true or false after questioning.

**[Evaluating LLMs Across Multi-Cognitive Levels: From Medical Knowledge Mastery to Scenario-Based Problem Solving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25n/zhou25n.pdf) (as "Statement validation")**
> Determining whether a given medical statement is true or false, requiring precise discrimination of knowledge without the aid of multiple-choice options.

**[LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Legal fact verification")**
> Selecting facts that can be logically inferred from evidence in a legal case.

**[Chain-of-Table: Evolving Tables in the Reasoning Chain for Table Understanding](https://proceedings.iclr.cc/paper_files/paper/2024/file/f53fd88a4340063ecd258c0ae9948b40-Paper-Conference.pdf) (as "Table-based fact verification")**
> The task of determining whether a given natural language statement is true or false based on the content of a provided table.

**[Verify-in-the-Graph: Entity Disambiguation Enhancement for Complex Claim Verification with Interactive Graph Representation](https://aclanthology.org/2025.naacl-long.268.pdf) (as "Sub-claim verification")**
> Evaluating the truthfulness of individual triplets or sub-claims by retrieving relevant documents and determining whether they support or refute the claim.

## Relationships

### Fact checking →
- **FEVER** (measurements) — *measured_by*
  > We use the FEVER (Thorne et al., 2018) dataset for all our experiments and comparison against previous methods. (Section 4.1)
  - [Unsupervised Pretraining for Fact Verification by Language Model Distillation](https://proceedings.iclr.cc/paper_files/paper/2024/file/238c98450b1d9e8055f94d22f303bb57-Paper-Conference.pdf)
- **FEVEROUS** (measurements) — *measured_by*
  > FEVEROUS, on the other hand, is a fact-verification dataset that requires the identification of multiple relevant tables for reasoning and verifying factual questions.
  - [OpenTab: Advancing Large Language Models as Open-domain Table Reasoners](https://proceedings.iclr.cc/paper_files/paper/2024/file/055ff1d86ca33e84c744cf8cca65ec8f-Paper-Conference.pdf)
- **SciFact** (measurements) — *measured_by*
  > Besides, we also take into account the SCIFACT [26] dataset, notable for its inclusion of scientific claims (Section 4.1).
  - [Information Re-Organization Improves Reasoning in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb1a323fa10d4102ff13422476a744ff-Paper-Conference.pdf)
- **HoVer** (measurements) — *measured_by*
  > Claim Verification The task involves assessing a given claim against a set of evidence documents to determine whether they support or refute the claim [12]. We consider HOVER [24] and FEVEROUS [25]... (Section 4.1).
  - [Information Re-Organization Improves Reasoning in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb1a323fa10d4102ff13422476a744ff-Paper-Conference.pdf)
- **TabFact** (measurements) — *measured_by*
  > We evaluate our method on three datasets covering fact verification, short-form, and long-form question-answering tasks... (a) TabFact (Chen et al., 2019): A fact verification benchmark utilizing Wikipedia tables. (Section 3)
  - [H-STAR: LLM-driven Hybrid SQL-Text Adaptive Reasoning on Tables](https://aclanthology.org/2025.naacl-long.445.pdf)
- **Creak** (measurements) — *measured_by*
  > and one fact-checking dataset: Creak (Onoe et al., 2021).
  - [Think-on-Graph: Deep and Responsible Reasoning of Large Language Model on Knowledge Graph](https://proceedings.iclr.cc/paper_files/paper/2024/file/10a6bdcabbd5a3d36b760daa295f63c1-Paper-Conference.pdf)
- **PubHealth** (measurements) — *measured_by*
  > PubHealth is a dataset of medical claims spanning a variety of biomedical subjects and it requires the RAG system to verify a given claim based on the retrieved documents. (Section 4)
  - [Speculative RAG: Enhancing Retrieval Augmented Generation through Drafting](https://proceedings.iclr.cc/paper_files/paper/2025/file/2ea06b52f613716e67458f5ab3fb7558-Paper-Conference.pdf)
- **FM2** (measurements) — *measured_by*
  > We use four popular datasets for fact-checking: Feverous, AVeriTeC, FM2 and SciFact.
  - [Refining Attention for Explainable and Noise-Robust Fact-Checking with Transformers](https://aclanthology.org/2025.emnlp-main.1295.pdf)
- **Climate-FEVER** (measurements) — *measured_by*
  > “Climate-FEVER (Diggelmann et al., 2021), Fact checking”
  - [Training a Utility-based Retriever Through Shared Context Attribution for Retrieval-Augmented Language Models](https://aclanthology.org/2025.emnlp-main.33.pdf)
- **FB15k-237** (measurements) — *measured_by*
  > We show that SFAVEL yields a significant improvement over prior state-of-the-art, both over unsupervised and supervised methods, on the FEVER fact verification challenge (+8% accuracy) and the FB15k-237 dataset (+5.3% Hits@1). (Section 5)
  - [Unsupervised Pretraining for Fact Verification by Language Model Distillation](https://proceedings.iclr.cc/paper_files/paper/2024/file/238c98450b1d9e8055f94d22f303bb57-Paper-Conference.pdf)
- **CounterFact** (measurements) — *measured_by*
  > Counterfact Fact-Checking (Meng et al., 2022a) is a data set with factual statements consisting of a statement with corresponding fact.
  - [BadEdit: Backdooring Large Language Models by Model Editing](https://proceedings.iclr.cc/paper_files/paper/2024/file/6f6fe6789e14796b6544a04b20d11902-Paper-Conference.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > We evaluate a biography-generation task (Min et al., 2023) and TruthfulQA (Lin et al., 2022) which is a benchmark for testing false beliefs or misconceptions. (Section 4.1, Fact verification)
  - [Nearest Neighbor Speculative Decoding for LLM Generation and Attribution](https://proceedings.neurips.cc/paper_files/paper/2024/file/93c099bb4cde51b724eaa6d6d4a4b5e4-Paper-Conference.pdf)
- **RTE** (measurements) — *measured_by*
  > "the RTE dataset [49], a classification task where the model is tasked to verify the correctness of statements"
  - [QuanTA: Efficient High-Rank Fine-Tuning of LLMs with Quantum-Informed Tensor Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/a7c17115db36193f6b83b71b0fe1d416-Paper-Conference.pdf)
- **LongBench** (measurements) — *measured_by*
  > LongBench (Bai et al., 2024): Focused on medium-context tasks (10K tokens), it assesses summarization, QA, and fact-checking across multiple domains...
  - [Scaling Instruction-tuned LLMs to Million-token Contexts via Hierarchical Synthetic Data Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/bb36593e5e438aac5dd07907e757e087-Paper-Conference.pdf)
- **LOFT** (measurements) — *measured_by*
  > “LOFT (7 retrieval tasks including argumentative retrieval, fact-checking, web search, multi-hop reasoning QA, etc)”
  - [LongRoPE2: Near-Lossless LLM Context Window Scaling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shang25a/shang25a.pdf)

### → Fact checking
- **Chain-of-thought reasoning** (constructs) — *causes*
  > we extend this by incorporating agent-based LLM, enabling iterative interactions with the knowledge base to resolve ambiguous entities and execute multi-step reasoning for more robust and in-depth claim verification. (Section 2)
  - [Verify-in-the-Graph: Entity Disambiguation Enhancement for Complex Claim Verification with Interactive Graph Representation](https://aclanthology.org/2025.naacl-long.268.pdf)
- **Reasoning** (constructs) — *causes*
  > The model then performs reasoning over this combined information to predict the label Yp of the claim and generates a human-readable explanation Ye. (Section 3.4)
  - [IMRRF: Integrating Multi-Source Retrieval and Redundancy Filtering for LLM-based Fake News Detection](https://aclanthology.org/2025.naacl-long.461.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > the LLM world knowledge conversion produces hallucinatory evidence, directly impacting claim validation (Section 4.7)
  - [IMRRF: Integrating Multi-Source Retrieval and Redundancy Filtering for LLM-based Fake News Detection](https://aclanthology.org/2025.naacl-long.461.pdf)

### Associated with
- **Information retrieval** (behaviors tasks)
  > Most recent works typically divide the fact verification task into two stages. The first stage retrieves a relatively small subset of evidence from a knowledge source (e.g. a knowledge graph) that is relevant to verify a given claim. (Section 2)
  - [Unsupervised Pretraining for Fact Verification by Language Model Distillation](https://proceedings.iclr.cc/paper_files/paper/2024/file/238c98450b1d9e8055f94d22f303bb57-Paper-Conference.pdf)
- **Interpretability and explainability** (constructs)
  > Claim verification is a long-standing and challenging task that demands not only high accuracy but also explainability of the verification process. (Abstract)
  - [Verify-in-the-Graph: Entity Disambiguation Enhancement for Complex Claim Verification with Interactive Graph Representation](https://aclanthology.org/2025.naacl-long.268.pdf)
- **Multi-hop reasoning** (constructs)
  > ...we conduct experiments using Llama2-70B [2], GPT-3.5 [1], and GPT-4 [3] on various contextually aware multi-hop reasoning tasks, including claim verification [12], question answering [13], and reading comprehension [14] (Section 1).
  - [Information Re-Organization Improves Reasoning in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb1a323fa10d4102ff13422476a744ff-Paper-Conference.pdf)
- **Understanding** (constructs)
  > Tasks at the Understanding level examine the ability to comprehend and interpret facts, entities, concepts, and relationships in legal texts... We construct five tasks at this level: ...Legal Fact Verification (2-2)... (Section C.3.2)
  - [LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Robustness** (constructs)
  > fact verification is one area in which assessing the robustness of models developed for this task is crucial. (Section 1)
  - [FactEval: Evaluating the Robustness of Fact Verification Systems in the Era of Large Language Models](https://aclanthology.org/2025.naacl-long.534.pdf)
- **Misinformation detection** (behaviors tasks)
  > Consequently, fact-checking based methods (Thorne and Vlachos, 2018; Nakov et al., 2021) have been the mainstream for fake news detection. (Section 1)
  - [IMRRF: Integrating Multi-Source Retrieval and Redundancy Filtering for LLM-based Fake News Detection](https://aclanthology.org/2025.naacl-long.461.pdf)
- **Faithfulness** (constructs)
  > We consider the task of fact-checking claims against grounding documents, where the goal is to assess factual consistency based on provided textual evidence (Section 1).
  - [GraphCheck: Breaking Long-Term Text Barriers with Extracted Knowledge Graph-Powered Fact-Checking](https://aclanthology.org/2025.acl-long.729.pdf)
- **SAFE** (measurements)
  > ...and determining whether a fact is supported by the search results.
  - [Long-form factuality in large language models](https://proceedings.neurips.cc/paper_files/paper/2024/file/937ae0e83eb08d2cb8627fe1def8c751-Paper-Conference.pdf)
- **Logical consistency** (constructs)
  > "We assess and improve the logical consistency of LLMs in propositional logic queries and logic rules, particularly in the context of fact-checking."
  - [Logical Consistency of Large Language Models in Fact-Checking](https://proceedings.iclr.cc/paper_files/paper/2025/file/3209cf3312b2cbb68e33644362ddc2bd-Paper-Conference.pdf)
