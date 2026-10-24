# Interpretability and explainability
**Type:** Construct  
**Referenced in:** 282 papers  
**Also known as:** Explainability, Interpretability, Weight-based interpretability, Intrinsic interpretability, Feature interpretability, Model interpretability, Mechanistic interpretability, Human auditability, Transparency and interpretability, Algorithmic understanding, Transparency  

## State of the Field

**Definition agreement:** Conflicting. Most papers define the construct as human-understandability or transparency of a model's internal mechanisms and decisions, but many others use it for different targets such as the quality of generated explanations or rationales, the human-meaningfulness of learned features or code, or even an evaluation method's ability to give reasons. Because these definitions place the property on different kinds of things and would often lead papers to study different phenomena, the overall pattern is conflicting.

**Space of definitions.** Across papers, the prevailing usage treats interpretability and explainability as human-understandability of a model's internals, learned features, or decision process: representations, sparse features, concept layers, retrieved evidence, and reasoning traces count as interpretable when humans can inspect them, trace outputs to supporting sources, or give concise explanations of activations. A sizable minority uses explainability more narrowly for rationales, critiques, or other justifications that accompany predictions or judgments, sometimes contrasted with systems that provide only labels or numerical scores, while a smaller group uses transparency for inspectable embedding dimensions or identifiable knowledge sources. The main axis of variation is what is being made understandable, internal mechanisms and representations versus output-level rationales, evidence traces, or source attributions.

**Space of facets.** Papers often place interpretability, explainability, and transparency under the same umbrella, and some explicitly pair the labels or treat interpretability and explainability as interchangeable. At the same time, they carve out narrower variants, such as feature-level and model-level forms, mechanistic interpretability, intrinsic variants, and human auditability, with additional labels for weights, reward processes, and algorithms. These variants differ mainly by target: some focus on human-readable latents or embedding dimensions, others on internal states or circuits, and others on stepwise evaluation, decision traces, or rationales; feature-level work also ties the construct to monosemantic or disentangled components.

**Space of measurement.** Operationalization is diverse: papers link the construct to 10 measurement instruments and 17 behavioral indicators. The most common instruments are Automated interpretability, LLM-as-a-judge, Human evaluation, SAEBench, and CUB-200-2011, plus five others. In practice, studies use automated classification or benchmark scores for sparse autoencoder features, ask LLM judges or human raters whether latents, reasoning paths, or generated outputs are understandable, and use datasets with human explanations or concept annotations; some also score explanations with plausibility and faithfulness. Together, these measures cover both internal-feature understandability and output-level justification.

**Links.** Several papers claim a causal relationship from Reasoning to this construct, and smaller strands make parallel causal claims from Chain of thought and Explanation generation. In the other direction, papers most often claim a causal relationship from interpretability and explainability to Trustworthiness and Controllability. Other papers report additional causal links to task-specific outcomes, one paper reports a correlation with task performance, and a few papers describe it as related to several further constructs and behaviors.

## Sources

**[An interpretable error correction method for enhancing code-to-code translation](https://proceedings.iclr.cc/paper_files/paper/2024/file/5e01f4ef7ffeedf3317a44461d18df9d-Paper-Conference.pdf) (as "Interpretability")**
> The degree to which a learned feature or representation can be given a concise, human-understandable explanation that predicts its activations.

**[Beam Enumeration: Probabilistic Explainability For Sample Efficient Self-conditioned Molecular Design](https://proceedings.iclr.cc/paper_files/paper/2024/file/ead542f13a38179d1b55b88610f959a1-Paper-Conference.pdf) (as "Explainability")**
> The extent to which the system provides a rationale that helps users understand why a prediction was made.

**[Enhancing Lexicon-Based Text Embeddings with Large Language Models](https://aclanthology.org/2025.acl-long.930.pdf) (as "Transparency")**
> The degree to which the embedding dimensions correspond to human-interpretable lexical units, allowing inspection of model decisions through cluster weights.

**[Bilinear MLPs enable weight-based mechanistic interpretability](https://proceedings.iclr.cc/paper_files/paper/2025/file/7504142a20a3e1fe9dd7de42f475828c-Paper-Conference.pdf) (as "Weight-based interpretability")**
> The property of a model where its computational mechanisms can be understood by directly analyzing its weight parameters, rather than relying on activation patterns over a dataset.

**[Concept Bottleneck Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/de4ce91dfe56b919ee1c228d6a78f866-Paper-Conference.pdf) (as "Intrinsic interpretability")**
> The degree to which an LLM’s internal representations and predictions can be directly understood through human-interpretable concepts rather than post-hoc explanations.

**[NNsight and NDIF: Democratizing Access to Open-Weight Foundation Model Internals](https://proceedings.iclr.cc/paper_files/paper/2025/file/e6c65eb9b56719c1aa45ff73874de317-Paper-Conference.pdf) (as "Model interpretability")**
> The extent to which a model's internal states can be inspected, manipulated, and studied in a transparent way.

**[Efficient Dictionary Learning with Switch Sparse Autoencoders](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc4fbc2c77d2150c4e61e0fca6c2e95a-Paper-Conference.pdf) (as "Feature interpretability")**
> The degree to which the features learned by a sparse autoencoder correspond to distinct, human-understandable concepts.

**[Monet: Mixture of Monosemantic Experts for Transformers](https://proceedings.iclr.cc/paper_files/paper/2025/file/382c35d1a57c07055dfcba58dd39e012-Paper-Conference.pdf) (as "Mechanistic interpretability")**
> The degree to which a model's internal computations can be dissected and understood in terms of human-interpretable components.

**[DeLLMa: Decision Making Under Uncertainty with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6cd3ac24cdb789beeaa9f7145670fcae-Paper-Conference.pdf) (as "Human auditability")**
> The property of a model's decision-making process that allows a human to understand, verify, and trust the rationale behind a given decision.

**[Free Process Rewards without Process Labels](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yuan25c/yuan25c.pdf) (as "Transparency and interpretability")**
> The quality of a reward model that allows for a clear understanding of its evaluation process by providing scores for each intermediate reasoning step.

**[Position: We Need An Algorithmic Understanding of Generative AI](https://raw.githubusercontent.com/mlresearch/v267/main/assets/eberle25a/eberle25a.pdf) (as "Algorithmic understanding")**
> The degree to which the internal step-by-step procedures used by a model to solve tasks are known and explainable.

## Relationships

### Interpretability and explainability →
- **Trustworthiness** (constructs) — *causes*
  > one aspect that hinders their deployment is the lack of human-comprehensible understanding of their internal computations. This directly calls into question their reliability and trustworthiness (Introduction).
  - [A Concept-Based Explainability Framework for Large Multimodal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/f4fba41b554f9aaa013c4062a1c40518-Paper-Conference.pdf)
- **Controllability** (constructs) — *causes*
  > By embedding interpretability directly into the LLMs, we enable greater transparency, steering, and control over their behavior.
  - [Concept Bottleneck Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/de4ce91dfe56b919ee1c228d6a78f866-Paper-Conference.pdf)
- **Automated interpretability** (measurements) — *measured_by*
  > “Bricken et al. (2023) evaluate how interpretable sparse autoencoder features using automated interpretability”
  - [Efficient Dictionary Learning with Switch Sparse Autoencoders](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc4fbc2c77d2150c4e61e0fca6c2e95a-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > We utilize a large multimodal model (GPT-4o) as the ‘judge’ to assign entailment scores given a constructed rule. ... This observation validates the interpretability of the reasoning paths in the concept tree. (Section 4.6)
  - [COCO-Tree: Compositional Hierarchical Concept Trees for Enhanced Reasoning in Vision-Language Models](https://aclanthology.org/2025.emnlp-main.135.pdf)
- **Attention rollout** (measurements) — *measured_by*
  > To develop a better understanding of how the sparse and low rank components individually contribute to the flow of information through the model, we compute and visualize the attention rollout (Abnar & Zuidema, 2020) (Section 5).
  - [OATS: Outlier-Aware Pruning Through Sparse and Low Rank Decomposition](https://proceedings.iclr.cc/paper_files/paper/2025/file/7f2fc4053a66edfa430bcdf9a6ff3b17-Paper-Conference.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > For Pythia SAEs, we asked human crowdworkers to rate the interpretability of random features, random neurons, features from our feature circuits, and neurons from our neuron circuits.
  - [Sparse Feature Circuits: Discovering and Editing Interpretable Causal Graphs in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/3ba4d47a83e498c2b1a0868cba20f6de-Paper-Conference.pdf)
- **Neuronpedia** (measurements) — *measured_by*
  > We manually interpret each feature using the Neuronpedia interface (Lin & Bloom, 2023), which displays maximally activating dataset exemplars on a large text corpus, as the features’ direct effects on output logits.
  - [Sparse Feature Circuits: Discovering and Editing Interpretable Causal Graphs in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/3ba4d47a83e498c2b1a0868cba20f6de-Paper-Conference.pdf)
- **SAEBench** (measurements) — *measured_by*
  > We include interpretability benchmark results from SAEBench in Appendix A.3.4. (Section 4.1)
  - [Inference-Time Decomposition of Activations (ITDA): A Scalable Approach to Interpreting Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/leask25a/leask25a.pdf)
- **VQA-X** (measurements) — *measured_by*
  > We consider VQA-X (Park et al., 2018), a VQA dataset with human-annotated explanations for each image-question-answer triplets...
  - [Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf)
- **Image editing** (behaviors tasks) — *causes*
  > When a prompt closely aligns with the image content and is interpretable by humans, it becomes easier for users to modify the image in the desired direction by making slight edits to the prompt. (Section 4.3)
  - [Visually Guided Decoding: Gradient-Free Hard Prompt Inversion with Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd61329e2c14b93a89d617c914140f64-Paper-Conference.pdf)
- **Safety** (constructs) — *causes*
  > The embedded interpretability empowers users to transparently identify harmful content, steer model behavior, and unlearn undesired concepts – significantly enhancing the safety, reliability, and trustworthiness of LLMs, which are critical capabilities notably absent in existing language models.
  - [Concept Bottleneck Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/de4ce91dfe56b919ee1c228d6a78f866-Paper-Conference.pdf)
- **SHAP** (measurements) — *measured_by*
  > We use explainability methods (Linardatos et al., 2020; Lundberg et al., 2018) to quantify the contribution of each token to the model’s decision, to provide interpretable insights. Specifically, we use SHAP (Lundberg and Lee, 2017). (Section 3.2)
  - [AIMSCheck: Leveraging LLMs for AI-Assisted Review of Modern Slavery Statements Across Jurisdictions](https://aclanthology.org/2025.acl-long.446.pdf)
- **Alignment** (constructs) — *causes*
  > As a result, developing interpretability methods for MLLMs is crucial for improving alignment quality and efficiency. (Abstract)
  - [SAE-V: Interpreting Multimodal Models for Enhanced Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lou25b/lou25b.pdf)
- **G-Eval** (measurements) — *measured_by*
  > G-EVAL generates criterion-specific scores, supporting fine-grained analysis of response quality, explainability, and reasoning. (Section 4.3)
  - [PAKTON: A Multi-Agent Framework for Question Answering in Long Legal Agreements](https://aclanthology.org/2025.emnlp-main.403.pdf)
- **FINTRUST** (measurements) — *measured_by*
  > we curate 15, 680 instances to evaluate LLM trustworthiness in the financial domain. We ... incorporate seven core dimensions: Truthfulness, Safety, Fairness, Robustness, Privacy, Transparency, and Knowledge Discovery. (Section 2)
  - [FinTrust: A Comprehensive Benchmark of Trustworthiness Evaluation in Finance Domain](https://aclanthology.org/2025.emnlp-main.512.pdf)
- **CUB-200-2011** (measurements) — *measured_by*
  > Among these, CUB, SkinCon, and LAD offer image-level concept annotations that enable quantitative evaluation of MCoT interpretability.
  - [WISE: Weak-Supervision-Guided Step-by-Step Explanations for Multimodal LLMs in Image Classification](https://aclanthology.org/2025.emnlp-main.741.pdf)
- **e-SNLI** (measurements) — *measured_by*
  > Datasets such as e-SNLI (Camburu et al., 2018) provide human explanations, supporting explicit reasoning and interpretability benchmarks. (Section 2.1)
  - [Cross-Document Cross-Lingual NLI via RST-Enhanced Graph Fusion and Interpretability Prediction](https://aclanthology.org/2025.emnlp-main.1611.pdf)

### → Interpretability and explainability
- **Reasoning** (constructs) — *causes*
  > Mindmap [74] provides more transparency on LLMs’ decision-making by enabling comprehension and reasoning over structured KG inputs. (Section 1)
  - [KnowGPT: Knowledge Graph based Prompting for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0b8705a611ed1ce19cdb759031078705-Paper-Conference.pdf)
- **Chain of thought** (behaviors tasks) — *causes*
  > We leverage the augmented patient context to enable LLMs to generate step-by-step reasoning chains, enhancing both interpretability and prediction accuracy in clinical tasks. (Section 1)
  - [Reasoning-Enhanced Healthcare Predictions with Knowledge Graph Community Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/cb5a3b4589c1a16f14740396625cbfc8-Paper-Conference.pdf)
- **Explanation generation** (behaviors tasks) — *causes*
  > ...offering interpretable answers, as LLMs can generate language-based explanations for the decisions. (Abstract)
  - [SocialGPT: Prompting LLMs for Social Relation Reasoning via Greedy Segment Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/047682108c3b053c61ad2da5a6057b4e-Paper-Conference.pdf)
- **Structured reasoning** (constructs) — *causes*
  > To enhance the accuracy and explainability of natural language reasoning, structured reasoning has been frequently explored as an alternative. (Introduction)
  - [SymBa: Symbolic Backward Chaining for Structured Natural Language Reasoning](https://aclanthology.org/2025.naacl-long.124.pdf)
- **Disentanglement** (constructs) — *causes*
  > “DRL is a major goal of artificial intelligence (AI), acclaimed for its enhancement of model robustness, interpretability, and generalizability.”
  - [Graph-based Unsupervised Disentangled Representation Learning via Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/bac4d92b3f6decfe47eab9a5893dd1f6-Paper-Conference.pdf)
- **Information retrieval** (behaviors tasks) — *causes*
  > This approach also allows us to enhance explainability by returning the retrieved subgraph. (Section 5)
  - [G-Retriever: Retrieval-Augmented Generation for Textual Graph Understanding and Question Answering](https://proceedings.neurips.cc/paper_files/paper/2024/file/efaf1c9726648c8ba363a5c927440529-Paper-Conference.pdf)
- **Multi-turn dialogue** (behaviors tasks) — *causes*
  > We also enhance explainability, both by returning the retrieved subgraph, and through the use of conversational interfaces for 'chatting with a graph'
  - [G-Retriever: Retrieval-Augmented Generation for Textual Graph Understanding and Question Answering](https://proceedings.neurips.cc/paper_files/paper/2024/file/efaf1c9726648c8ba363a5c927440529-Paper-Conference.pdf)
- **Prompt engineering** (behaviors tasks) — *causes*
  > VGD enhances the interpretability, generalization, and flexibility of prompt generation without the need for additional training. (Section 1)
  - [Visually Guided Decoding: Gradient-Free Hard Prompt Inversion with Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd61329e2c14b93a89d617c914140f64-Paper-Conference.pdf)
- **Monosemanticity** (constructs) — *causes*
  > Sparse autoencoders (SAEs) have gained a lot of attention as a promising tool to improve the interpretability of large language models (LLMs) by mapping the complex superposition of polysemantic neurons into monosemantic features
  - [Rethinking Evaluation of Sparse Autoencoders through the Representation of Polysemous Words](https://proceedings.iclr.cc/paper_files/paper/2025/file/380a0b16a7e6f8c5010f798c9f2d3c61-Paper-Conference.pdf)
- **Causal discovery** (behaviors tasks) — *causes*
  > "ADAM constructs a nearly perfect causal graph from scratch, enabling efficient task decomposition and execution with strong interpretability."
  - [ADAM: An Embodied Causal Agent in Open-World Environments](https://proceedings.iclr.cc/paper_files/paper/2025/file/392aae924264f2c56d1895b232bb46b6-Paper-Conference.pdf)
- **Attribution ability** (constructs) — *causes*
  > Attribution: attribute triplet indexes in the generated text using sequential numbers to enhance the interpretability of the generated text. (Section 1)
  - [Evaluating and Improving Graph to Text Generation with Large Language Models](https://aclanthology.org/2025.naacl-long.513.pdf)
- **Grammatical error correction** (behaviors tasks) — *causes*
  > One advantage of example-based GEC systems is that they can enhance system interpretability by providing learners with illustrative examples (Kaneko et al., 2022). (Section 2.1)
  - [Explanation based In-Context Demonstrations Retrieval for Multilingual Grammatical Error Correction](https://aclanthology.org/2025.naacl-long.251.pdf)
- **Activation sparsity** (constructs) — *causes*
  > Sparsity of Hidden Activations: Lower numbers of non-zero neurons lead to more interpretable representations.
  - [Mixture of Experts Made Intrinsically Interpretable](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ag/yang25ag.pdf)
- **Chess move prediction** (behaviors tasks) — *correlates*
  > Our experiments show that a sufficiently wide-and-sparse MLP in transformer indeed yields more interpretable neurons, leading to a 25% increase in F1 score for chess move prediction, supporting our hypothesis.
  - [Mixture of Experts Made Intrinsically Interpretable](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ag/yang25ag.pdf)
- **Backtracking** (behaviors tasks) — *causes*
  > Although incremental improvements have been proposed, the absence of robust backtracking or rollback still limits their reliability and interpretability (Doyle, 1979; Bo et al., 2024). (Section 1)
  - [ReAgent: Reversible Multi-Agent Reasoning for Knowledge-Enhanced Multi-Hop QA](https://aclanthology.org/2025.emnlp-main.202.pdf)
- **Claim decomposition** (behaviors tasks) — *causes*
  > Other approaches, including RAGAS (Shahul et al., 2023), RAG-Checker (Ru et al., 2024), and OpenEval (Ispas et al., 2025), introduce claim-level decomposition, enabling LLMs to assess the faithfulness and correctness of each factual statement for finer-grained and more interpretable evaluation.
  - [RAG-Zeval: Enhancing RAG Responses Evaluator through End-to-End Reasoning and Ranking-Based Reinforcement Learning](https://aclanthology.org/2025.emnlp-main.1267.pdf)

### Associated with
- **Medical reasoning** (constructs)
  > This observation suggests that both perception, or reading (e.g., finding necessary information in the medical record) and reasoning (determining the disease based on the observations) should be counted when evaluating interpretability in LLM-based medical NLP tasks. (Section 1)
  - [DiReCT: Diagnostic Reasoning for Clinical Notes via Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/892850bf793e03b5c410dfd9425b94c8-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Plausibility** (constructs)
  > Ideally, the explanation should be both faithful (reflecting the model’s actual behavior) and plausible (aligning with human understanding)
  - [Is the MMI Criterion Necessary for Interpretability? Degenerating Non-causal Features to Plain Noise for Self-Rationalization](https://proceedings.neurips.cc/paper_files/paper/2024/file/d53d51e88d92d3723755f6d425bc513b-Paper-Conference.pdf)
- **Fact checking** (behaviors tasks)
  > Claim verification is a long-standing and challenging task that demands not only high accuracy but also explainability of the verification process. (Abstract)
  - [Verify-in-the-Graph: Entity Disambiguation Enhancement for Complex Claim Verification with Interactive Graph Representation](https://aclanthology.org/2025.naacl-long.268.pdf)
- **Expressive power** (constructs)
  > The trade-off between expressiveness and interpretability remains a core challenge when building human-centric models for classification and decision-making. (ABSTRACT)
  - [Large Language Models are Interpretable Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/887932131fddf943e8fe3310b62c0147-Paper-Conference.pdf)
- **Symbolic regression** (behaviors tasks)
  > This flexibility allows SR to achieve both high accuracy and interpretability, making it especially valuable in fields such as physics (Udrescu et al., 2020), biology (Brunton et al., 2016), and finance (Liu & Guo, 2023), where uncovering transparent, understandable models is crucial for scientific discovery and informed decision-making.
  - [RAG-SR: Retrieval-Augmented Generation for Neural Symbolic Regression](https://proceedings.iclr.cc/paper_files/paper/2025/file/19a8e70828c01059631f913442ae31e6-Paper-Conference.pdf)
- **Polysemanticity** (constructs)
  > A central obstacle to mechanistic interpretability is polysemanticity, where individual neurons encode multiple, unrelated concepts (Olah et al., 2020).
  - [Mixture of Experts Made Intrinsically Interpretable](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ag/yang25ag.pdf)
- **Unlearning** (constructs)
  > existing works still have notable limitations: they cannot perfectly balance the precision of knowledge removal, performance retention, and interpretability of parameter update (Section 1).
  - [Model Unlearning via Sparse Autoencoder Subspace Guided Projections](https://aclanthology.org/2025.emnlp-main.1348.pdf)
- **Hallucination** (behaviors tasks)
  > ...problematic due to the opaque nature of LLMs’ parametric knowledge, which leads to poor interpretability and frequent hallucination issues. (Section 1)
  - [MusKGC: A Flexible Multi-source Knowledge Enhancement Framework for Open-World Knowledge Graph Completion](https://aclanthology.org/2025.emnlp-main.508.pdf)
- **Usability** (constructs)
  > However, we found existing single-turn-based approaches have limitations in user-centricity, especially for novice users: Firstly, interpretability remains a challenge. (Introduction)
  - [Taming Text-to-Image Synthesis for Novices: User-centric Prompt Generation via Multi-turn Guidance](https://aclanthology.org/2025.emnlp-main.444.pdf)
- **Faithfulness** (constructs)
  > We evaluate the explainability of all the models using plausibility and faithfulness metrics (DeYoung et al., 2019). (Section 6.1)
  - [Main Predicate and Their Arguments as Explanation Signals For Intent Classification](https://aclanthology.org/2025.naacl-long.539.pdf)
- **Medical diagnosis** (behaviors tasks)
  > By quantifying the overlap between boxes, our method provides intuitive insights into the relationships between medical concepts, thereby improving the accuracy and interpretability of model predictions. (Section 2.3.2. VOLUME-BASED DIAGNOSIS PREDICTION)
  - [BoxLM: Unifying Structures and Semantics of Medical Concepts for Diagnosis Prediction in Healthcare](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25e/tan25e.pdf)
