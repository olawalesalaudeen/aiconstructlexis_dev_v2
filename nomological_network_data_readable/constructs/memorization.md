# Memorization
**Type:** Construct  
**Referenced in:** 154 papers  
**Also known as:** Memorization capacity, Memorisation, Inadvertent memorization, Memorization propensity, Factual memory, Model capacity, Recall, Statistical recall  

## State of the Field

**Definition agreement:** Complementary. Most papers use memorization for the same model-level phenomenon of storing specific training information in parameters and later retrieving or reproducing it, but they foreground different facets of it: some emphasize verbatim or near-verbatim regurgitation of training sequences, while many others emphasize recall of examples, facts, or input-output associations in place of generalization or reasoning. A few papers use the term for context memory or generic representational capacity, but these are outliers relative to the dominant, compatible usage.

**Space of definitions.** Across papers, the prevailing usage treats memorization as a model property or tendency to store specific training examples or associations and later reproduce them, often as exact or near-exact text, benchmark items, or recoverable facts when prompted. A smaller line instead frames it more broadly as encoding and retaining information from context, or over long contexts, in compressed form, sometimes with explicit analogies to human memory. Another recurring framing is memorization capacity, the amount of arbitrary input-output or factual association information a model can store in its parameters without interference. Some reasoning-focused papers use memorization, recall, or statistical recall for performance that comes from retrieved training correlations rather than reasoning, so the main disagreement is between narrow regurgitation, broader storage ability, and reliance-on-recall framings.

**Space of facets.** When papers break the construct down, the clearest taxonomy separates recitation of highly duplicated sequences, reconstruction of inherently predictable sequences, and recollection of sequences that are neither, as in Recite, Reconstruct, Recollect: Memorization in LMs as a Multifaceted Phenomenon. Other papers introduce narrower labels such as blind memorization, verbatim memorization, inadvertent memorization of task-irrelevant private content, memorization propensity for rare or outlier data points, and factual memory as recall of isolated facts. Memorization is repeatedly contrasted with generalization and reasoning, and some authors make adjacent notions partly interchangeable: one paper states that if a secret is extractable then it is memorized and vice versa, while capacity-oriented work uses memorization capacity or model capacity for the storage limit behind these behaviors.

**Space of measurement.** Operationalizations are diverse but mostly take the form of dataset-based probes and benchmarks: papers link memorization to 11 measurement instruments and 13 behavioral indicators. The most frequently linked instruments are AUXDATASET, BookMIA, HH-RLHF, LIMA, and LexEval; papers use them through exact 50-token matches to a reference dataset, memorized-versus-unseen passage comparisons, RLHF-domain memorization studies, and a benchmark axis devoted to memorization. Beyond named instruments, papers also operationalize memorization with approximate string matching, partial-prefix or suffix extraction, title or metadata reproduction, canonical-versus-shuffled example order likelihood, reconstruction of hard-to-predict tokens, and factual QA setups, so measurement usually tracks recoverable reproduction more directly than the broader long-context or storage-capacity framings. No human evaluation or LLM-as-a-judge instrument is linked to it.

**Links.** The most recurrent link is to generalization: many papers say memorization is related to generalization, a smaller line claims a causal relationship from memorization to generalization, and one paper reports that memorization correlates with generalization. Training data regurgitation is the other recurring link, with several papers claiming a causal relationship from memorization to training data regurgitation or verbatim regurgitation, and others treating the two as related. Reasoning is frequently discussed alongside memorization, with several papers relating it to reasoning or mathematical reasoning and one contrasting causal reasoning with recall. Smaller lines of work claim causal relationships from memorization to privacy leakage and to pre-training data detection, and another paper says memorization is related to pre-training data detection; papers link it to 18 constructs and 13 behavioral indicators overall.

## Sources

**[AutomaTikZ: Text-Guided Synthesis of Scientific Vector Graphics with TikZ](https://proceedings.iclr.cc/paper_files/paper/2024/file/f7641940c7dd9e5de58c20e39586eb64-Paper-Conference.pdf)**
> The latent ability of an LLM to encode and retain information from a context in compressed form, analogous to human memory encoding, allowing for reconstruction or task performance based on partial or compressed representations.

**[Algorithmic Capabilities of Random Transformers](https://proceedings.neurips.cc/paper_files/paper/2024/file/bccdd196d798a51a4961989984a9ed4a-Paper-Conference.pdf) (as "Memorization capacity")**
> The extent to which a model can store arbitrary input-output associations in its trainable parameters.

**[Are We Done with MMLU?](https://aclanthology.org/2025.naacl-long.262.pdf) (as "Memorisation")**
> The extent to which a model has stored and can recall specific instances from its training data, rather than generating novel responses based on generalized knowledge.

**[Watch Out Your Album! On the Inadvertent Privacy Memorization in Multi-Modal Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ju25a/ju25a.pdf) (as "Inadvertent memorization")**
> The latent tendency of MLLMs to encode private, task-irrelevant information into their parameters due to spurious correlations formed during mini-batch training, even when such information provides no benefit for the downstream task.

**[Underestimated Privacy Risks for Minority Populations in Large Language Model Unlearning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25d/wei25d.pdf) (as "Memorization propensity")**
> The latent tendency of a model to strongly encode and retain specific training data points, especially those that are rare or outlier-like, making them harder to unlearn.

**[From RAG to Memory: Non-Parametric Continual Learning for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gutierrez25a/gutierrez25a.pdf) (as "Factual memory")**
> The latent ability of a model to accurately recall and retrieve specific, isolated pieces of knowledge, such as entity attributes or simple facts.

**[Increasing Model Capacity for Free: A Simple Strategy for Parameter Efficient Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/ce3fd6b9dfe458dc258a8164a5e95bd2-Paper-Conference.pdf) (as "Model capacity")**
> The finite ability of a model, parameterized by the embedding dimension 'd', to store associations without performance degradation from interference.

**[Reasoning Elicitation in Language Models via Counterfactual Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/bf145010b30dc5f14fa87dc152074e4d-Paper-Conference.pdf) (as "Recall")**
> The latent reliance on statistical correlations or training data retrieval rather than genuine reasoning processes.

**[RE-IMAGINE: Symbolic Benchmark Synthesis for Reasoning Evaluation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25n/xu25n.pdf) (as "Statistical recall")**
> The degree to which a model's performance relies on recognizing and reproducing patterns from its training data rather than engaging in systematic reasoning.

## Relationships

### Memorization →
- **Generalization** (constructs) — *causes*
  > This raises concerns about whether LLMs are merely memorizing and overfitting these benchmarks instead of learning how to solve the tasks [112], which may lead to poor generalization[67, 13, 9]. (Section 1)
  - [DARG: Dynamic Evaluation of Large Language Models via Adaptive Reasoning Graph](https://proceedings.neurips.cc/paper_files/paper/2024/file/f5198bc255e1d5f959edd6d1d1a86fab-Paper-Conference.pdf)
- **Training data regurgitation** (behaviors tasks) — *causes*
  > Since verbatim reproduction often stems from memorization during training
  - [Copyright-Protected Language Generation via Adaptive Model Fusion](https://proceedings.iclr.cc/paper_files/paper/2025/file/01953220e4becc6ac1078c24c1f8d3a7-Paper-Conference.pdf)
- **Privacy leakage** (behaviors tasks) — *causes*
  > there is also growing concern around the privacy risks of their deployment (McCallum, 2023; Bloomberg, 2023; Politico, 2023), because they can memorize some of their training data verbatim
  - [Privacy Auditing of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e76814a0012a46ade4f997591e86f972-Paper-Conference.pdf)
- **LexEval** (measurements) — *measured_by*
  > to systematically organize various evaluation tasks, we propose a Legal Cognitive Ability Taxonomy (LexAbility Taxonomy), which includes six aspects: Memorization, Understanding, Logic Inference, Discrimination, Generation, and Ethic. (Section 3.1)
  - [LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Overfitting** (constructs) — *causes*
  > This result suggests that some of the reason for overﬁtting is due to partial memorization of the test set. (Section 5.4)
  - [A Careful Examination of Large Language Model Performance on Grade School Arithmetic](https://proceedings.neurips.cc/paper_files/paper/2024/file/53384f2090c6a5cac952c598fd67992f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **AUXDATASET** (measurements) — *measured_by*
  > We thus call a subsequence of a generation memorized if (as in Deﬁnition 1) a 50-token-length subsequence exactly appears in AUXDATASET. (Section 3)
  - [Scalable Extraction of Training Data from Aligned, Production Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cce0e917b050208170151f77b497fc71-Paper-Conference.pdf)
- **Verbatim regurgitation** (behaviors tasks) — *causes*
  > Language models (LMs) can “memorize” information, i.e., encode training data in their weights in such a way that inference-time queries can lead to verbatim regurgitation of that data. (Section 1)
  - [Mitigating Memorization in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e50ff94d174465348f15c45760f58f9f-Paper-Conference.pdf)
- **Pythia** (measurements) — *measured_by*
  > We employ the memorized sequences extracted from Chang et al. (2024) to evaluate memorization in these models. (Section 2.3)
  - [Mitigating Memorization in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e50ff94d174465348f15c45760f58f9f-Paper-Conference.pdf)
- **In-context learning** (constructs) — *causes*
  > we show that fine-tuning an LLM (Gemini Nano v1 Gemini Team, Google, 2023) to memorize certain data can result in a reduction of its ICL ability. (Section 1)
  - [Toward Understanding In-context vs. In-weight Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ae338b3fe6624798efa80b6581924028-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > Memorization was evaluated using a subset of the MMLU benchmark focused on factual knowledge domains
  - [Unveiling the Secret Recipe: A Guide For Supervised Fine-Tuning Small LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/b6e2c96bc4702f761d7d108d6e31930f-Paper-Conference.pdf)
- **LIMA** (measurements) — *measured_by*
  > Finally, we explore RLHF memorization on different task domains by studying memorization on natural language datasets, LIMA (Zhou et al., 2024) and Anthropic HH (Bai et al., 2022). (Section 5.5)
  - [Measuring memorization in RLHF for code completion](https://proceedings.iclr.cc/paper_files/paper/2025/file/22811d2089d4aa0ba66e52a5e47efb65-Paper-Conference.pdf)
- **HH-RLHF** (measurements) — *measured_by*
  > Finally, we explore RLHF memorization on different task domains by studying memorization on natural language datasets, LIMA (Zhou et al., 2024) and Anthropic HH (Bai et al., 2022). (Section 5.5)
  - [Measuring memorization in RLHF for code completion](https://proceedings.iclr.cc/paper_files/paper/2025/file/22811d2089d4aa0ba66e52a5e47efb65-Paper-Conference.pdf)
- **Privacy preservation** (constructs) — *causes*
  > This repeated exposure enhances the likelihood of the model memorizing specific details, thereby increasing the potential for data leakage during privacy attacks. (Section 1)
  - [DocMIA: Document-Level Membership Inference Attacks against DocVQA Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/231a8daf4f64935d0c7c6586f290b24f-Paper-Conference.pdf)
- **BookMIA** (measurements) — *measured_by*
  > We use the BookMIA dataset (Shi et al., 2023), which consists of text excerpts from books published in 2023 (after the knowledge cutoff of the models we study) as examples of unseen text, and passages from popular books as memorized examples (Chang et al., 2023). (Section 4.1)
  - [Information-Guided Identification of Training Data Imprint in (Proprietary) Large Language Models](https://aclanthology.org/2025.naacl-long.99.pdf)
- **PopQA** (measurements) — *measured_by*
  > Evaluation of continual learning capabilities across three key dimensions: factual memory (NaturalQuestions, PopQA), sense-making (NarrativeQA), and associativity (MuSiQue, 2Wiki, HotpotQA, and LV-Eval) (Figure 1).
  - [From RAG to Memory: Non-Parametric Continual Learning for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gutierrez25a/gutierrez25a.pdf)
- **Natural Questions** (measurements) — *measured_by*
  > “Simple QA primarily evaluates the ability to recall and retrieve factual knowledge accurately.” and “we randomly collect 1, 000 queries from the NaturalQuestions (NQ) dataset”
  - [From RAG to Memory: Non-Parametric Continual Learning for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gutierrez25a/gutierrez25a.pdf)
- **OWL** (measurements) — *measured_by*
  > We design OWL as a testbed for memorization as well as cross-lingual knowledge transfer in LLMs. (Section 2)
  - [OWL: Probing Cross-Lingual Recall of Memorized Texts via World Literature](https://aclanthology.org/2025.emnlp-main.1314.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > However, when the attacker’s merging rate is high, the merged model fails to retain the victim model’s memorization ability, leading to hallucination phenomenon. (Section 5.4.1)
  - [Merger-as-a-Stealer: Stealing Targeted PII from Aligned LLMs with Model Merging](https://aclanthology.org/2025.emnlp-main.295.pdf)
- **Pre-training data detection** (behaviors tasks) — *causes*
  > The powerful learning capabilities of LLMs often lead to noticeable memory effects on training data. This characteristic is a key reason why pre-training data detection algorithms are effective (Carlini et al., 2021; Tirumala et al., 2022). (Section 3.5)
  - [Identifying Pre-training Data in LLMs: A Neuron Activation-Based Detection Framework](https://aclanthology.org/2025.emnlp-main.946.pdf)
- **Recommendation** (behaviors tasks) — *causes*
  > The experiments show that META ID improves memorization and diversity score, which leads to improvements in various recommendation tasks. (Section 1)
  - [Improving LLMs for Recommendation with Out-Of-Vocabulary Tokens](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25ar/huang25ar.pdf)
- **Factuality** (constructs) — *causes*
  > Being able to memorize the facts in the training corpus enables the model to answer fact-seeking, knowledge intensive tasks more factually and accurately.
  - [Memory Layers at Scale](https://raw.githubusercontent.com/mlresearch/v267/main/assets/berges25a/berges25a.pdf)

### → Memorization
- **Data contamination** (constructs) — *causes*
  > prior exposure to semantic BDC lets a model "remember" the answer instead of reasoning.
  - [SSA: Semantic Contamination of LLM-Driven Fake News Detection](https://aclanthology.org/2025.emnlp-main.744.pdf)

### Associated with
- **Reasoning** (constructs)
  > It may suggest that width is crucial for memorization, while depth is important for reasoning, a similar phenomenon that echos the intuition of [80] (Section 5).
  - [LISA: Layerwise Importance Sampling for Memory-Efficient Large Language Model Fine-Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/687163285b8affc8ee933bdca8e75747-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs)
  > Arithmetic reasoning provides a lens for this investigation, as it can be solved using various methods: learning known algorithms, developing novel approaches, or by memorizing vast quantities of input-output pairs. (Section 1)
  - [Arithmetic Without Algorithms: Language Models Solve Math with a Bag of Heuristics](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c5f30296296d2ae402ebbd09aaa9c12-Paper-Conference.pdf)
- **MATH** (measurements)
  > Table 7: LLEMMA-34b’s accuracy on hits (a 30-gram overlap between a problem or solution and a training sequence) and non-hits by MATH difficulty level. (Table 7)
  - [Llemma: An Open Language Model for Mathematics](https://proceedings.iclr.cc/paper_files/paper/2024/file/b225f5c7cd13615e9558c3931fa4e66f-Paper-Conference.pdf)
- **Verbatim memorization** (constructs)
  > the existing literature on memorization (Carlini et al., 2021) suggests that many models may verbatim memorize the order of examples in a benchmark dataset. We now focus on building tests that can reliably identify this form of memorization. (Section 2)
  - [Proving Test Set Contamination in Black-Box Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/46e624c244cff669223d488defd4e835-Paper-Conference.pdf)
- **Out-of-distribution generalization** (constructs)
  > In fact, the small two-layer model we study has such a low capacity that it entirely skips the in-distribution generalization phase and immediately jumps from pure memorization to out-of-distribution generalization. (Section 4.1)
  - [Learning to grok: Emergence of in-context learning and skill composition in modular arithmetic tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/17d60fef592086d1a5cb136f1946df59-Paper-Conference.pdf)
- **Grokking** (constructs)
  > Power et al. [24] discovered Grokking, where models trained on modular arithmetic datasets have an abrupt change from random guessing to generalization on the test set way after the model memorized the training set. (Section 2)
  - [Learning to grok: Emergence of in-context learning and skill composition in modular arithmetic tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/17d60fef592086d1a5cb136f1946df59-Paper-Conference.pdf)
- **Data leakage** (constructs)
  > LLM and LVLM could still answer some visual-necessary questions without visual content, indicating the memorizing of these samples within large-scale training data. (Abstract)
  - [Are We on the Right Way for Evaluating Large Vision-Language Models?](https://proceedings.neurips.cc/paper_files/paper/2024/file/2f8ee6a3d766b426d2618e555b5aeb39-Paper-Conference.pdf)
- **Factual recall** (behaviors tasks)
  > a model’s ability to recall memorized facts from its pretraining data deteriorates faster than its ability to recognize structured patterns as we decrease the size of the model through compression, distinguishing between compressible tasks where generalization is possible and incompressible tasks that correspond to sheer memorization. (Section 1)
  - [Unlocking Tokens as Data Points for Generalization Bounds on Larger Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/11715d433f6f8b9106baae0df023deb3-Paper-Conference.pdf)
- **Text generation** (behaviors tasks)
  > we observe that LISA is much better than LoRA at memorization-centered tasks, such as Writing or depicting image details, while this gap is much smaller in reasoning-centered tasks like Code or Math (Section 5).
  - [LISA: Layerwise Importance Sampling for Memory-Efficient Large Language Model Fine-Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/687163285b8affc8ee933bdca8e75747-Paper-Conference.pdf)
- **Image generation** (behaviors tasks)
  > we observe that LISA is much better than LoRA at memorization-centered tasks, such as Writing or depicting image details, while this gap is much smaller in reasoning-centered tasks like Code or Math (Section 5).
  - [LISA: Layerwise Importance Sampling for Memory-Efficient Large Language Model Fine-Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/687163285b8affc8ee933bdca8e75747-Paper-Conference.pdf)
- **Causal reasoning** (constructs)
  > we will focus on causal reasoning as it provides us with a clear distinction between recall and reasoning1: the former is limited to inferring statistical correlations, whereas the latter involves working with interventions and counterfactuals (Pearl, 2000).
  - [Reasoning Elicitation in Language Models via Counterfactual Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/bf145010b30dc5f14fa87dc152074e4d-Paper-Conference.pdf)
- **Visual perception** (constructs)
  > It raises a critical concern: “Does the model genuinely perceive and understand the input, or is it merely memorizing it?” (Section 1)
  - [Dynamic Multimodal Evaluation with Flexible Complexity by Vision-Language Bootstrapping](https://proceedings.iclr.cc/paper_files/paper/2025/file/36d9468ebdb76b9b229fbd343fff84d5-Paper-Conference.pdf)
- **Unlearning** (constructs)
  > How to Erase Undesirable Data Memorization in LLMs? Machine unlearning (Bourtoule et al., 2021; Zhu et al., 2024) offers a general solution. (Section 1)
  - [Towards Effective Evaluations and Comparisons for LLM Unlearning Methods](https://proceedings.iclr.cc/paper_files/paper/2025/file/3a91841d2bcc0b13a3d0d5d60c9f0581-Paper-Conference.pdf)
- **In-weights learning** (constructs)
  > we consider a bi-level model that learns a “memorizing” in-weight predictor g as well as an in-context predictor h (Section 2)
  - [Toward Understanding In-context vs. In-weight Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ae338b3fe6624798efa80b6581924028-Paper-Conference.pdf)
- **Question difficulty** (constructs)
  > larger models can effectively learn from more difficult examples, confirming the direct relationship between model capacity and example difficulty threshold. (Section 4.4)
  - [Principled Data Selection for Alignment: The Hidden Risks of Difficult Examples](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gao25f/gao25f.pdf)
- **Scalability** (constructs)
  > we propose a simple statistical ansatz based on memorization to study scaling laws in the context of inference. (Abstract)
  - [A Simple Model of Inference Scaling Laws](https://raw.githubusercontent.com/mlresearch/v267/main/assets/levi25a/levi25a.pdf)
- **Unlearning efficacy** (constructs)
  > Prior research suggests that outliers, particularly including data tied to minority groups, often exhibit higher memorization propensity which indicates they may be more difficult to unlearn. (Abstract)
  - [Underestimated Privacy Risks for Minority Populations in Large Language Model Unlearning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25d/wei25d.pdf)
- **Factual question answering** (behaviors tasks)
  > “Simple QA primarily evaluates the ability to recall and retrieve factual knowledge accurately.”
  - [From RAG to Memory: Non-Parametric Continual Learning for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gutierrez25a/gutierrez25a.pdf)
- **Precision** (constructs)
  > "Precision measures the proportion of generated samples that are plausible under a reference distribution, thereby assessing the quality of the model. Recall quantifies the proportion of the reference distribution that is covered by the generated samples, reflecting the model’s coverage."
  - [Improving Diversity in Language Models: When Temperature Fails, Change the Loss](https://raw.githubusercontent.com/mlresearch/v267/main/assets/verine25a/verine25a.pdf)
- **Knowledge manipulation** (constructs)
  > Answering such questions requires the model to both memorize and comprehend the knowledge. (Section 1)
  - [Physics of Language Models: Part 3.2, Knowledge Manipulation](https://proceedings.iclr.cc/paper_files/paper/2025/file/d5494c8747276d3cdb2598e5617de89d-Paper-Conference.pdf)
- **Benchmark overfitting** (constructs)
  > The failures suggest potential overfitting, where models overly rely on surface-level cues, memorized patterns, or specific terminologies. (Section 6)
  - [Forget What You Know about LLMs Evaluations - LLMs are Like a Chameleon](https://aclanthology.org/2025.emnlp-main.1098.pdf)
