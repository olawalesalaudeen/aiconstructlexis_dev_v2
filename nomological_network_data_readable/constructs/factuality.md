# Factuality
**Type:** Construct  
**Referenced in:** 153 papers  
**Also known as:** Factual correctness, Correctness, Factual consistency, Entity-relation consistency, Factual reliability, Medical factuality, Independent factuality, Factual reasoning, Factual and Logical Correctness, Factuality hallucination, Factual accuracy, Fact discernment, Factuality preservation, Knowledge accuracy, Information accuracy  

## State of the Field

**Definition agreement:** Conflicting. Most papers define factuality as the factual correctness or truthfulness of a model's outputs relative to real-world facts or verifiable evidence, often framed as avoiding hallucinations. But a substantial minority define it instead as faithfulness to a specific source or ground truth such as source articles, tables, images, retrieved documents, annotations, or user intent, and a few use it for the ability to judge truth rather than generate true content, so papers using these definitions would not always be studying the same thing.

**Space of definitions.** Across the surveyed work, the prevailing usage treats factuality as output-level factual correctness: model statements, answers, rationales, or reasoning should align with real-world facts or external knowledge and avoid hallucination. Many papers use near-equivalent labels such as factual accuracy, factual correctness, or correctness, and some frame it as a latent ability or tendency of the model rather than only a property of a single response. A smaller line of work changes the reference standard, defining it relative to a source text, image, audio input, annotation, dialogue state, or user question, and a few papers introduce narrower variants such as independent factuality, entity-relation consistency, factuality preservation, or factual and logical correctness.

**Space of facets.** Papers systematize the term in several overlapping ways. Some place it under background knowledge, or use it as one evaluation dimension alongside retrieval and reasoning, or alongside relevance and adherence in instruction-following evaluation. The clearest contrast is with faithfulness: some definitions reserve factuality for alignment with external or real-world knowledge, while faithfulness is defined as reflecting the provided input or context; by contrast, some summarization and annotation papers use factual consistency in a source-grounded sense. Across papers, labels range from factual accuracy and factual correctness to factual consistency, factual reliability, and knowledge or information accuracy, so the same family of terms is used for both broad world-knowledge correctness and narrower input-conditioned correctness.

**Space of measurement.** Operationalization is broad. Papers link factuality to 28 measurement instruments and 8 behavioral indicators, with TruthfulQA, FActScore, LLM-as-a-judge, TriviaQA, and Human evaluation appearing most often, and Hallucination as the most frequent linked behavioral indicator. The dominant instruments are benchmarks for factual question answering, claim-decomposition methods that verify atomic facts against retrieved evidence or Wikipedia, GPT-4 style judge ratings of factual errors or correctness, and direct human rubrics such as whether a response is accurate and has no factual errors. A smaller line uses analyses or task-specific checks, for example attention to constraint tokens as a predictor of factual correctness, overlap in radiological entities and clinical relations, truth-ratio style scoring, source-summary alignment, SQL answer correctness, or code execution against test cases. Many operationalizations directly check correctness against external knowledge, while some instead check alignment with a source article, table, image, audio input, or user question.

**Links.** The recurring link is to hallucination: many papers describe hallucinations as non-factual or fabricated output, and the recorded relationships include related, correlational, measurement, and causal links in both directions between the two. Other papers claim causal relationships from interventions or model properties, including calibration and logical consistency, to factuality, and separate work claims causal relationships from factuality enhancement to other response properties. Reported noncausal links include a correlation with helpfulness and relatedness to faithfulness, plus several instruction- or knowledge-oriented constructs.

## Sources

**[Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection](https://proceedings.iclr.cc/paper_files/paper/2024/file/25f7be9694d7b32d5cc670927b8091e1-Paper-Conference.pdf) (as "Factual accuracy")**
> The degree to which a model's generated statements are factually correct and free from errors.

**[Attention Satisfies: A Constraint-Satisfaction Lens on Factual Errors of Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/880ee6e23b6ee548ebcccafe0ef0f513-Paper-Conference.pdf) (as "Factual correctness")**
> The degree to which a model's generated text, particularly its reasoning steps and final answers, aligns with established facts from external knowledge sources.

**[An Emulator for Fine-tuning Large Language Models using Small Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/389e161125965c0f0ba50420fee45774-Paper-Conference.pdf)**
> The degree to which a model's generated statements are factually correct and grounded in real-world knowledge.

**[Decoding-Time Language Model Alignment with Multiple Objectives](https://proceedings.neurips.cc/paper_files/paper/2024/file/57c89126d60c209f48d0e6395c766bb3-Paper-Conference.pdf) (as "Correctness")**
> The factual accuracy and correctness of the information provided in the model's response.

**[SeafloorAI: A Large-scale Vision-Language Dataset for Seafloor Geological Survey](https://proceedings.neurips.cc/paper_files/paper/2024/file/274de7d60333c0848f42e18ae97f13e3-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Factual consistency")**
> The degree to which generated annotations agree with the original ground-truth or source annotations.

**[Non-Existent Relationship: Fact-Aware Multi-Level Machine-Generated Text Detection](https://aclanthology.org/2025.emnlp-main.186.pdf) (as "Entity-relation consistency")**
> The degree to which the relationships between entities in a text align with verified real-world knowledge, serving as a discriminative trait between human-written and machine-generated content.

**[SwarmAgentic: Towards Fully Automated Agentic System Generation via Swarm Intelligence](https://aclanthology.org/2025.emnlp-main.93.pdf) (as "Factual reliability")**
> The degree to which the outputs and reasoning steps of an LLM-based system are factually correct and free from hallucination.

**[ReasonMed: A 370K Multi-Agent Generated Dataset for Advancing Medical Reasoning](https://aclanthology.org/2025.emnlp-main.1344.pdf) (as "Medical factuality")**
> The extent to which a model's outputs align with established medical knowledge and avoid factual errors in clinical content.

**[Conformal Language Model Reasoning with Coherent Factuality](https://proceedings.iclr.cc/paper_files/paper/2025/file/679fcceef65c3d855aa885bd024542c1-Paper-Conference.pdf) (as "Independent factuality")**
> A property of a generated output where correctness is determined by evaluating each constituent claim in isolation against a ground truth, without considering the logical dependencies between claims.

**[ToW: Thoughts of Words Improve Reasoning in Large Language Models](https://aclanthology.org/2025.naacl-long.157.pdf) (as "Factual reasoning")**
> The ability to produce responses grounded in factual knowledge and to avoid generating false claims, especially in the presence of misleading or humorous prompts.

**[JudgeBench: A Benchmark for Evaluating LLM-Based Judges](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e720fce64f91114c49cfd640d821da3-Paper-Conference.pdf) (as "Factual and Logical Correctness")**
> The latent ability to distinguish objectively true statements from false or logically flawed ones, independent of stylistic preferences.

**[Non-Existent Relationship: Fact-Aware Multi-Level Machine-Generated Text Detection](https://aclanthology.org/2025.emnlp-main.186.pdf) (as "Factuality hallucination")**
> The latent tendency of a language model to generate semantically plausible but factually ungrounded relationships between entities, reflecting a failure to align with real-world knowledge.

**[Pandora's Box or Aladdin's Lamp: A Comprehensive Analysis Revealing the Role of RAG Noise in Large Language Models](https://aclanthology.org/2025.acl-long.250.pdf) (as "Fact discernment")**
> The ability to accurately distinguish between correct factual information and incorrect or counterfactual statements, especially when both are present in the context.

**[LLM as a Broken Telephone: Iterative Generation Distorts Information](https://aclanthology.org/2025.acl-long.371.pdf) (as "Factuality preservation")**
> The degree to which generated text remains faithful to the factual information contained in the original source text across iterations.

**[From Parameters to Performance: A Data-Driven Study on LLM Structure and Development](https://aclanthology.org/2025.emnlp-main.1325.pdf) (as "Knowledge accuracy")**
> The model's ability to retrieve and apply factual knowledge accurately, especially in domains requiring broad general or domain-specific information.

**[PicPersona-TOD : A Dataset for Personalizing Utterance Style in Task-Oriented Dialogue with Image Persona](https://aclanthology.org/2025.naacl-long.403.pdf) (as "Information accuracy")**
> The degree to which a system's responses are factually correct and consistent with dialogue state labels and external knowledge.

## Relationships

### Factuality →
- **Hallucination** (behaviors tasks) — *causes*
  > underscores the need to develop effective and generalizable methods for fine-grained factuality alignment to reduce hallucinations in Large Language Models (LLMs).
  - [Mask-DPO: Generalizable Fine-grained Factuality Alignment of LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/6bf82fdcbd92b6a7793b3894422d2437-Paper-Conference.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > For multiple choices, we use TruthfulQA (Lin et al., 2022) and FACTOR (News/Wiki) (Muhlgay et al., 2023) to assess LMs’ factuality in short-answer/long-paragraph settings, respectively.
  - [DoLa: Decoding by Contrasting Layers Improves Factuality in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/edc36117f795ca52a0cbf6a7b3882859-Paper-Conference.pdf)
- **FActScore** (measurements) — *measured_by*
  > Due to the relatively consistent and high quality of Wikipedia articles, we elect to use FactScore as a representative method of reference-based truthfulness scoring. (Section 3.1)
  - [Fine-Tuning Language Models for Factuality](https://proceedings.iclr.cc/paper_files/paper/2024/file/c361ae924c23cafca6033610d25dbc65-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > Using GPT-4 as a judge, we find that FactTune-MC and FactTune-EC can improve both factuality and fluency compared to the SFT model (examples in Appendix Table 8). (Section 4.2)
  - [Fine-Tuning Language Models for Factuality](https://proceedings.iclr.cc/paper_files/paper/2024/file/c361ae924c23cafca6033610d25dbc65-Paper-Conference.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > Factuality (Fac): Considering unlearning negates the original knowledge acquired by the model, we evaluate the factuality on TriviaQA [27] with 6-shot, and F1 scores are reported; (Section 3.3.2)
  - [RWKU: Benchmarking Real-World Knowledge Unlearning for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b1f78dfc9ca0156498241012aec4efa0-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > Accuracy: The response provided by the large language model is accurate and has no factual errors. (Section 4.2.5, The Instruction of Human Evaluation)
  - [MedJourney: Benchmark and Evaluation of Large Language Models over Patient Clinical Journey](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f80af32390984cb709cdeb014d0df41-Paper-Datasets_and_Benchmarks_Track.pdf)
- **StrategyQA** (measurements) — *measured_by*
  > We evaluated our decoding strategy on StrategyQA and GSM8K, tasks requiring not just factuality but also Chain-of-Thought (CoT) reasoning (Wei et al., 2022b) ability in order to achieve good performance.
  - [DoLa: Decoding by Contrasting Layers Improves Factuality in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/edc36117f795ca52a0cbf6a7b3882859-Paper-Conference.pdf)
- **Natural Questions** (measurements) — *measured_by*
  > "factual QA accuracy (exact match on NaturalQuestions and F1 score on TriviaQA)"
  - [Memory Layers at Scale](https://raw.githubusercontent.com/mlresearch/v267/main/assets/berges25a/berges25a.pdf)
- **HelpSteer** (measurements) — *measured_by*
  > For HelpSteer, we use https://huggingface.co/Haoxiang-Wang/ RewardModel-Mistral-7B-for-DPA-v1 for all attributes of rewards, including helpfulness, correctness, coherence, complexity and verbosity.
  - [Decoding-Time Language Model Alignment with Multiple Objectives](https://proceedings.neurips.cc/paper_files/paper/2024/file/57c89126d60c209f48d0e6395c766bb3-Paper-Conference.pdf)
- **JudgeBench** (measurements) — *measured_by*
  > the focus of JudgeBench is on evaluating the factual and logical correctness of complex responses to challenging questions. (Figure 1)
  - [JudgeBench: A Benchmark for Evaluating LLM-Based Judges](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e720fce64f91114c49cfd640d821da3-Paper-Conference.pdf)
- **GSM8K** (measurements) — *measured_by*
  > "Further experiments on chain-of-thought reasoning for StrategyQA (Geva et al., 2021) and GSM8K (Cobbe et al., 2021) also show that it can facilitate more factual reasoning."
  - [DoLa: Decoding by Contrasting Layers Improves Factuality in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/edc36117f795ca52a0cbf6a7b3882859-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > We evaluate models on 11 different benchmarks, covering skills such as factuality (MMLU [20]) (Section 2.2).
  - [Unpacking DPO and PPO: Disentangling Best Practices for Learning from Preference Feedback](https://proceedings.neurips.cc/paper_files/paper/2024/file/404df2480b6eef0486a1679e371894b0-Paper-Conference.pdf)
- **FreshQA** (measurements) — *measured_by*
  > In recent years a proliferation of benchmarks for evaluating factuality of LLMs has been observed ... They include many established benchmarks such as ... FreshQA... (Section 2)
  - [WikiContradict: A Benchmark for Evaluating LLMs on Real-World Knowledge Conflicts from Wikipedia](https://proceedings.neurips.cc/paper_files/paper/2024/file/c63819755591ea972f8570beffca6b1b-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Helpfulness** (constructs) — *correlates*
  > Conversely, correctness has become a stronger predictor of helpfulness in HelpSteer2 (Pearson’s R=0.9430) than in HelpSteer (Pearson’s R=0.8525).
  - [HelpSteer 2: Open-source dataset for training top-performing reward models](https://proceedings.neurips.cc/paper_files/paper/2024/file/02fd91a387a6a5a5751e81b58a75af90-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Context faithfulness** (constructs) — *causes*
  > current factuality enhancement methods can significantly undermine the context-faithfulness of LLMs. (Section 1)
  - [Is Factuality Enhancement a Free Lunch For LLMs? Better Factuality Can Lead to Worse Context-Faithfulness](https://proceedings.iclr.cc/paper_files/paper/2025/file/660d0ed5885662219244b6e44aba8fe3-Paper-Conference.pdf)
- **Overconfidence** (constructs) — *causes*
  > factuality enhancement can lead LLMs to become overly confident in their parametric knowledge (Section 1)
  - [Is Factuality Enhancement a Free Lunch For LLMs? Better Factuality Can Lead to Worse Context-Faithfulness](https://proceedings.iclr.cc/paper_files/paper/2025/file/660d0ed5885662219244b6e44aba8fe3-Paper-Conference.pdf)
- **Biography** (measurements) — *measured_by*
  > its FactScore on the out-of-domain Biography dataset is also improved from 30.29% to 39.39% (Section 1).
  - [Mask-DPO: Generalizable Fine-grained Factuality Alignment of LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/6bf82fdcbd92b6a7793b3894422d2437-Paper-Conference.pdf)
- **OpenBookQA** (measurements) — *measured_by*
  > Does CoS affect factuality? Given that CoS influences content generation, in Appendix C.2 we conduct study on OpenbookQA (Mihaylov et al., 2018) by giving CoS different types of contexts and adjusting the λ. (Sec 4.1)
  - [Context Steering: Controllable Personalization at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/db178cd03313e23cffb8937e93f0d464-Paper-Conference.pdf)
- **Retrieval-augmented generation** (behaviors tasks) — *causes*
  > “Augmenting Large Language Models (LLMs) with retrieved external knowledge has proven effective in improving the factual accuracy of generated responses.”
  - [Entropy-Based Decoding for Retrieval-Augmented Large Language Models](https://aclanthology.org/2025.naacl-long.236.pdf)
- **AlignScore** (measurements) — *measured_by*
  > "we use recommended AlignScore (Zha et al., 2023) to measure the factual consistency of summaries"
  - [AdaCAD: Adaptively Decoding to Balance Conflicts between Contextual and Parametric Knowledge](https://aclanthology.org/2025.naacl-long.581.pdf)
- **Reliability** (constructs) — *causes*
  > Both aspects [factuality and instruction-following] significantly impact reliability and user experience in real-world applications and are challenging to evaluate effectively with existing reward models (Section 3).
  - [Agentic Reward Modeling: Integrating Human Preferences with Verifiable Correctness Signals for Reliable Reward Systems](https://aclanthology.org/2025.acl-long.775.pdf)
- **RM-Bench** (measurements) — *measured_by*
  > We use RM-Bench (Liu et al., 2024b), JudgeBench (Tan et al., 2024), and a new benchmark IFBENCH as evaluation benchmarks, as both RM-Bench and JudgeBench include response pairs involving factual correctness. (Section 4.1)
  - [Agentic Reward Modeling: Integrating Human Preferences with Verifiable Correctness Signals for Reliable Reward Systems](https://aclanthology.org/2025.acl-long.775.pdf)
- **Chinese SimpleQA** (measurements) — *measured_by*
  > In this work, we present Chinese SimpleQA, the first comprehensive Chinese benchmark to evaluate the factuality ability of LLMs to answer short questions (Abstract).
  - [Chinese SimpleQA: A Chinese Factuality Evaluation for Large Language Models](https://aclanthology.org/2025.acl-long.941.pdf)
- **SimpleQA** (measurements) — *measured_by*
  > Recently, SimpleQA (Wei et al., 2024) has been proposed to measure the short-form factuality in LLMs (Section 2).
  - [Chinese SimpleQA: A Chinese Factuality Evaluation for Large Language Models](https://aclanthology.org/2025.acl-long.941.pdf)
- **ASQA** (measurements) — *measured_by*
  > In this paper, to evaluate the quantitative performance of methods on ASQA, we follow the official metrics and report: Disambiguous-Rouge (DR) as the overall score, which combines ROUGE-L (R-L) (Lin, 2004) for text quality and Disambig-F1 (Dis-F1; QA accuracy score based on RoBERTa large (Liu et al., 2019)) for factual correctness.
  - [Efficient Real-time Refinement of Language Model Text Generation](https://aclanthology.org/2025.emnlp-main.1753.pdf)
- **AlpacaEval** (measurements) — *measured_by*
  > We further report AlpacaEval (Li et al., 2023b) win-rate, the fraction of pairwise comparisons a system wins against the ALL-SFT baseline, providing a human-preference proxy for factual quality. (Section 4.2)
  - [CYCLE-INSTRUCT: Fully Seed-Free Instruction Tuning via Dual Self-Training and Cycle Consistency](https://aclanthology.org/2025.emnlp-main.258.pdf)
- **WebQuestions** (measurements) — *measured_by*
  > We evaluate factual correctness and spoken question answering abilities of our model on Llama Questions (Nachmani et al., 2024), and a synthesized audio version of TriviaQA (Joshi et al., 2017) and Web Questions (Berant et al., 2013). (Section 5.4)
  - [Aligning Spoken Dialogue Models from User Interactions](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25t/wu25t.pdf)

### → Factuality
- **Logical consistency** (constructs) — *causes*
  > A growing body of research explores improving LLMs’ factuality using the logical consistency across their beliefs (Dalvi et al., 2021; Tafjord et al., 2022; Mitchell et al., 2022; Jung et al., 2022; Hase et al., 2023; Kassner et al., 2023; Akyürek et al., 2024).
  - [A Probabilistic Framework for LLM Hallucination Detection via Belief Tree Propagation](https://aclanthology.org/2025.naacl-long.158.pdf)
- **Self-reflection** (behaviors tasks) — *causes*
  > We introduce a new framework called Self-Reflective Retrieval-Augmented Generation (SELF-RAG) that enhances an LM’s quality and factuality through retrieval and self-reflection. (ABSTRACT)
  - [Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection](https://proceedings.iclr.cc/paper_files/paper/2024/file/25f7be9694d7b32d5cc670927b8091e1-Paper-Conference.pdf)
- **Parametric knowledge** (constructs) — *causes*
  > our SLED framework leverages the latent knowledge embedded within the LLM by contrasting the output logits from the final layer with those from early layers. It then utilizes an approximate gradient approach to enable latent knowledge to guide the self-refinement of outputs, thereby effectively improving factual accuracy. (Abstract)
  - [SLED: Self Logits Evolution Decoding for Improving Factuality in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0939f13ffce3ff487509d902ddba4571-Paper-Conference.pdf)
- **Factual recall** (behaviors tasks) — *correlates*
  > Our results show a large increase in factual precision of IDK-tuned models while causing only a small decrease in recall of factual knowledge
  - [I Don't Know: Explicit Modeling of Uncertainty with an [IDK] Token](https://proceedings.neurips.cc/paper_files/paper/2024/file/14c018d2e72c521605b0567029ef0efb-Paper-Conference.pdf)
- **Retrieval-augmented generation** (behaviors tasks) — *causes*
  > Augmenting Large Language Models (LLMs) with retrieved external knowledge has proven effective in improving the factual accuracy of generated responses.
  - [Entropy-Based Decoding for Retrieval-Augmented Large Language Models](https://aclanthology.org/2025.naacl-long.236.pdf)
- **Calibration** (constructs) — *causes*
  > Numerous studies have explored ways to improve factuality at various stages, such as continual pre-training (Chang et al., 2024), uncertainty calibration (Cohen et al., 2024), factuality alignment (Tian et al., 2024), and contrastive decoding (Section 2).
  - [Alleviating Hallucinations from Knowledge Misalignment in Large Language Models via Selective Abstention Learning](https://aclanthology.org/2025.acl-long.1199.pdf)
- **Code efficiency** (constructs) — *correlates*
  > Extensive experiments demonstrate that fine-tuning LLMs with EFFIINSTRUCT improves both correctness and efficiency. For example, the fine-tuned Qwen2.5-Coder-7B-Instruct increases the pass@1 from 44.8% and 76.2% to 57.7% and 78.0% on EffiBench and HumanEvalPlus, while also reducing the average execution time from 0.31 seconds to 0.16 seconds — representing a 48.4% reduction in execution time overhead on EffiBench. (Section 1)
  - [EffiCoder: Enhancing Code Generation in Large Language Models through Efficiency-Aware Fine-tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25as/huang25as.pdf)
- **Multimodal alignment** (constructs) — *causes*
  > However, Medical LVLMs (Med-LVLMs) encounter factuality issues due to modality misalignment, where the models prioritize textual knowledge over visual input, causing hallucinations that conflict with medical images. (Abstract)
  - [MMedPO: Aligning Medical Vision-Language Models with Clinical-Aware Multimodal Preference Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhu25v/zhu25v.pdf)
- **Coherence** (constructs) — *causes*
  > Improved coherence in turn leads to improved accuracy on factual tasks. (Section 1)
  - [The Consensus Game: Language Model Generation via Equilibrium Search](https://proceedings.iclr.cc/paper_files/paper/2024/file/17a9bfda8be2301e24f232fb32f1e0fa-Paper-Conference.pdf)
- **Alignment** (constructs) — *causes*
  > Existing alignment or post-training strategies usually decrease the factuality of language models (Section 1).
  - [Chinese SimpleQA: A Chinese Factuality Evaluation for Large Language Models](https://aclanthology.org/2025.acl-long.941.pdf)
- **Memorization** (constructs) — *causes*
  > Being able to memorize the facts in the training corpus enables the model to answer fact-seeking, knowledge intensive tasks more factually and accurately.
  - [Memory Layers at Scale](https://raw.githubusercontent.com/mlresearch/v267/main/assets/berges25a/berges25a.pdf)

### Associated with
- **Constraint satisfaction** (constructs)
  > The framework has been recently proposed for studying and detecting factual errors of LLMs by Yuksekgonul et al. (2023) as a useful perspective which also connects information popularity and constraint feasibility to the LLM’s ability to satisfy such constraints. (Section 1)
  - [KITAB: Evaluating LLMs on Constraint Satisfaction for Information Retrieval](https://proceedings.iclr.cc/paper_files/paper/2024/file/82846e19e6d42ebfd4ace4361def29ae-Paper-Conference.pdf)
- **World knowledge** (constructs)
  > We define 4 primary abilities which are divided into 12 fine-grained skills for comprehensive language model evaluation: ... Background Knowledge (Factuality, Commonsense Understanding)... (Section 1)
  - [FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf)
- **Text generation quality** (constructs)
  > The complexity arises from the inherent subjectivity of “quality” in text generation, which often depends on multiple factors such as relevance, coherence, factual accuracy, and fluency.
  - [SaMer: A Scenario-aware Multi-dimensional Evaluator for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/646ca7b994bc46afe33d680dbe7ed67a-Paper-Conference.pdf)
- **Generalization** (constructs)
  > The experimental results in previous sections indicate that after factuality alignment with questions from a group of topics, the LLM will become more factually correct when answering questions from another group of topics (Section 4.2).
  - [Mask-DPO: Generalizable Fine-grained Factuality Alignment of LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/6bf82fdcbd92b6a7793b3894422d2437-Paper-Conference.pdf)
- **Faithfulness** (constructs)
  > Factuality refers to whether the model’s generated information aligns with external, real-world knowledge and is typically evaluated against a reference dataset or established knowledge. Faithfulness, on the other hand, evaluates how accurately the generated content reflects the information provided in the input context. (Section 1)
  - [SCOPE: A Self-supervised Framework for Improving Faithfulness in Conditional Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/05d6b5b6901fb57d2c287e1d3ce6d63c-Paper-Conference.pdf)
- **Instruction following ability** (constructs)
  > Specifically, we define three fundamental dimensions of instruction-following: relevance, factuality, and adherence. (Abstract)
  - [CAMIEval: Enhancing NLG Evaluation through Multidimensional Comparative Instruction-Following Analysis](https://aclanthology.org/2025.naacl-long.438.pdf)
- **Abstention** (behaviors tasks)
  > We define L(∅, ·) = 0, which indicates that we do not penalize the model for abstaining from responding when it is uncertain, as here we only focus on the assurance of factuality while neglecting other aspects of reliability such as omission of information. (Section 3.1)
  - [Towards Statistical Factuality Guarantee for Large Vision-Language Models](https://aclanthology.org/2025.emnlp-main.576.pdf)
- **Trustworthiness** (constructs)
  > “The evaluation of trustfulness includes assessments of factuality and uncertainty.”
  - [CARES: A Comprehensive Benchmark of Trustworthiness in Medical Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fde7f40f8ced5735006810534dc66b33-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Radiology report generation** (behaviors tasks)
  > Factual correctness is especially critical in chest radiology domains, as minute textual differences can drastically invert radiology report meaning and downstream prescribed treatments
  - [Fact-Aware Multimodal Retrieval Augmentation for Accurate Medical Radiology Report Generation](https://aclanthology.org/2025.naacl-long.28.pdf)
- **Factual question answering** (behaviors tasks)
  > memory layers improve the factual accuracy of language models by over 100% as measured by factual QA benchmarks (Section 1).
  - [Memory Layers at Scale](https://raw.githubusercontent.com/mlresearch/v267/main/assets/berges25a/berges25a.pdf)
- **CLAIR** (measurements)
  > The substantial improvement in factuality, compared to the relatively minor coverage loss in the captioning models, is also reflected in the increased CLAIR scores. (Section 4.3)
  - [Toward Robust Hyper-Detailed Image Captioning: A Multiagent Approach and Dual Evaluation Metrics for Factuality and Coverage](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lee25aj/lee25aj.pdf)
