# Faithfulness
**Type:** Construct  
**Referenced in:** 207 papers  
**Also known as:** Factual consistency, Information accuracy, Factual correctness, Unfaithfulness, Causal concept faithfulness, Supportiveness  

## State of the Field

**Definition agreement:** Conflicting. Most papers define faithfulness as a property of generated outputs being factually grounded in a source, context, retrieved knowledge, or real-world facts, usually in contrast to hallucination. But a notable minority define it instead as whether explanations or concept attributions reflect the model’s actual reasoning, and a few others use it for behavior-intention or logic-sensitivity alignment, so the term is being applied to different phenomena in different kinds of objects rather than the same thing.

**Space of definitions.** Across the surveyed work, the prevailing usage treats faithfulness as source- or context-grounded generation: a summary, response, claim, or annotation should be supported by the provided document, passage, graph, image, instruction, or other input, often phrased as factual consistency, entailment, or avoiding hallucination. Many papers use near-equivalent names such as factual consistency, factual accuracy, factual correctness, information accuracy, unfaithfulness, or supportiveness for this same framing. A smaller line of work uses faithfulness for explanations, defining it as whether an explanation reflects the model's actual reasoning, sometimes in causal terms. The main disagreement is whether faithfulness is a property of generated content relative to provided evidence, of explanations relative to model reasoning, or of agent behavior relative to stated intentions, with a few task-specific definitions such as prediction changes under altered conclusions.

**Space of facets.** Papers break the construct into several subtypes rather than one uniform schema. One negotiation study distinguishes internal faithfulness, based on an agent's own acceptable offers, from external faithfulness, based on predictions of the other agent's acceptable offers; explanation papers distinguish faithfulness to important inputs from faithfulness to outputs, and one paper defines causal concept faithfulness as alignment between concepts that causally affect an answer and the concepts mentioned in the explanation. Several papers also use faithfulness interchangeably with factual consistency, factual accuracy, or factual correctness, while one paper explicitly contrasts it with factuality by reserving faithfulness for alignment to the given input context rather than external knowledge. Another paper notes that ambiguity in a summary can yield different faithfulness judgments.

**Space of measurement.** Faithfulness is linked to 14 measurement instruments and 8 behavioral indicators. The most common instruments are LLM-as-a-judge, Human evaluation, FActScore, Expert evaluation, and G-Eval, with 9 other instruments also used; together these span LLM judges, human or expert ratings, and benchmark-style metrics. In practice, papers operationalize faithfulness as whether summaries or responses are entailed by source documents or retrieved passages, whether each sentence is supported, whether cited nodes and edges are valid, whether a response reflects API outputs, or whether a rationale's removal or alteration changes the prediction. These operationalizations usually match the prevailing grounding-based definition, though explanation work and the negotiation setting operationalize different targets, namely explanation-to-reasoning alignment and consistency between mental notes, predicted opponent offers, and behavior.

**Links.** The most recurrent link is to Hallucination. Several papers say faithfulness is related to hallucination, one paper reports that faithfulness is reported to correlate with hallucination, and causal relationships are also recorded in both directions, from Hallucination to Faithfulness and from Faithfulness to Hallucination. Beyond that, one paper claims a causal relationship from Stability to Faithfulness, one paper reports that Faithfulness is reported to correlate with Positional bias, with a U-shaped pattern across document positions, and several papers relate faithfulness to Constraint satisfaction and Factuality. Papers also connect it to several other constructs and task settings.

## Sources

**[Achieving Human Parity in Content-Grounded Datasets Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf)**
> The degree to which a model's internal reasoning and stated intentions align with its actual behavior, including both internal consistency (own acceptable offers) and external consistency (predictions of opponent's acceptable offers).

**[On-Policy Distillation of Language Models: Learning from Self-Generated Mistakes](https://proceedings.iclr.cc/paper_files/paper/2024/file/5be69a584901a26c521c2b51e40a4c20-Paper-Conference.pdf) (as "Factual consistency")**
> The degree to which generated text, such as a summary, is factually supported by and does not contradict a given source document.

**[TracSum: A New Benchmark for Aspect-Based Summarization with Sentence-Level Traceability in Medical Domain](https://aclanthology.org/2025.emnlp-main.43.pdf) (as "Factual accuracy")**
> The degree to which generated summaries correctly reflect the source content without hallucinated or incorrect statements.

**[From General Reward to Targeted Reward: Improving Open-ended Long-context Generation Models](https://aclanthology.org/2025.emnlp-main.260.pdf) (as "Information accuracy")**
> The degree to which a long-form response supports correct answers to specific proxy questions about the target content.

**[MuCAL: Contrastive Alignment for Preference-Driven KG-to-Text Generation](https://aclanthology.org/2025.emnlp-main.720.pdf) (as "Factual correctness")**
> The degree to which a model's generated text faithfully represents the semantic information and facts contained within the source knowledge graph.

**[MMLONGBENCH-DOC: Benchmarking Long-context Document Understanding with Visualizations](https://proceedings.neurips.cc/paper_files/paper/2024/file/ae0e43289bffea0c1fa34633fc608e92-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Unfaithfulness")**
> The tendency of a model to generate information that is not grounded in the provided source document.

**[Walk the Talk? Measuring the Faithfulness of Large Language Model Explanations](https://proceedings.iclr.cc/paper_files/paper/2025/file/b5ec50eb177908f21f78ed0d76ed525c-Paper-Conference.pdf) (as "Causal concept faithfulness")**
> The alignment between which high-level concepts causally affect a model's answer and which of those concepts the model's explanation says were influential.

**[Benchmarking Complex Instruction-Following with Multiple Constraints Composition](https://proceedings.neurips.cc/paper_files/paper/2024/file/f8c24b08b96a08ec7a7a975feea7777e-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Supportiveness")**
> The degree to which a response remains faithful to the input instruction or source text.

## Relationships

### Faithfulness →
- **Hallucination** (behaviors tasks) — *correlates*
  > Informative Context Improves Faithfulness and Reduces Hallucination.
  - [RAGChecker: A Fine-grained Framework for Diagnosing Retrieval-Augmented Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/27245589131d17368cccdfa990cbf16e-Paper-Datasets_and_Benchmarks_Track.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > In this work, we evaluate primarily our models using recent NLI-related metrics (Zha et al., 2023; Dušek & Kasner, 2020), and LLM-as-a-judge, focusing on faithfulness (Chiang & Lee, 2023; Gilardi et al., 2023). (Section 2)
  - [SCOPE: A Self-supervised Framework for Improving Faithfulness in Conditional Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/05d6b5b6901fb57d2c287e1d3ce6d63c-Paper-Conference.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > To qualitatively examine whether CoK could output factually consistent reasoning chains, we also conducted a human study. (Section 5.3).
  - [Chain-of-Knowledge: Grounding Large Language Models via Dynamic Knowledge Adapting over Heterogeneous Sources](https://proceedings.iclr.cc/paper_files/paper/2024/file/285ba60a67a66d2efeeb7cb25c5067fe-Paper-Conference.pdf)
- **FActScore** (measurements) — *measured_by*
  > Faithfulness: We use the FactScore suite and the fact evaluator for faithful biography generation [51] (Section 4.2).
  - [PaCE: Parsimonious Concept Engineering for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b3cca813dcd78fe75e4d4df2e6a0b1a7-Paper-Conference.pdf)
- **MiniCheck** (measurements) — *measured_by*
  > To do so, we calculate the Minicheck faithfulness score with respect to all documents individually.
  - [On Positional Bias of Faithfulness for Long-form Summarization](https://aclanthology.org/2025.naacl-long.442.pdf)
- **CC-SHAP** (measurements) — *measured_by*
  > Parcalabescu and Frank (2023) expanded on SHAP (Lundberg and Lee, 2017) by introducing CC-SHAP, which measures the convergence between the attribution vectors of the answer and explanation as a measure of faithfulness. (Section 2.1)
  - [Towards Faithful Natural Language Explanations: A Study Using Activation Patching in Large Language Models](https://aclanthology.org/2025.emnlp-main.529.pdf)
- **Reward model** (measurements) — *measured_by*
  > "For each such aspect, we implement a scoring function and filter low-scoring pairs."
  - [Achieving Human Parity in Content-Grounded Datasets Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf)
- **HelpSteer** (measurements) — *measured_by*
  > "For unpaired datasets, we used PKU BeaverTails [Ji et al., 2023] with over 300K samples and HelpSteer [Wang et al., 2023] with around 35K samples. Here, for each prompt, there is only a single response with a score defined by some attributes (e.g., safety, faithfulness, helpfulness, etc.)."
  - [Distributional Preference Alignment of LLMs via Optimal Transport](https://proceedings.neurips.cc/paper_files/paper/2024/file/bce96750dcb64f3257ceabadf0b9c9bf-Paper-Conference.pdf)
- **Sparsity** (constructs) — *correlates*
  > On the top row, we plot achievable faithfulness R2 as a function of sparsity. We observe that in all cases, faithfulness approaching 1 requires only a few thousand Möbius coefficients, motivating our sparsity assumption.
  - [Learning to Understand: Identifying Interactions via the Möbius Transform](https://proceedings.neurips.cc/paper_files/paper/2024/file/520b379123d16e41f85472e766846486-Paper-Conference.pdf)
- **Human preference evaluation** (measurements) — *measured_by*
  > Annotators are tasked with rating which of the two descriptions is more faithful to the table. (Section 5)
  - [SCOPE: A Self-supervised Framework for Improving Faithfulness in Conditional Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/05d6b5b6901fb57d2c287e1d3ce6d63c-Paper-Conference.pdf)
- **G-Eval** (measurements) — *measured_by*
  > We provide the TALM with dialogue history that includes the API call results and use G-Eval (Liu et al., 2023) to assess whether the responses reflect the API call output. (Section 4.1)
  - [ToolDial: Multi-turn Dialogue Generation Method for Tool-Augmented Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/afb27164624b641e8fbba961b2301acf-Paper-Conference.pdf)
- **TofuEval** (measurements) — *measured_by*
  > Using TofuEval (Tang et al., 2024c), a dataset with human-annotated sentence-level faithfulness judgments and critiques, we design intrinsic evaluation tasks for each of the three subtasks, DETECT, CRITIQUE, and REFINE (Section 1)
  - [MAMM-Refine: A Recipe for Improving Faithfulness in Generation with Multi-Agent Collaboration](https://aclanthology.org/2025.naacl-long.498.pdf)
- **Positional bias** (constructs) — *correlates*
  > Analyzing LLM-generated summaries across six datasets, we find a "U-shaped" trend in faithfulness, where LLMs faithfully summarize the beginning and end of documents but neglect middle content.
  - [On Positional Bias of Faithfulness for Long-form Summarization](https://aclanthology.org/2025.naacl-long.442.pdf)
- **Expert evaluation** (measurements) — *measured_by*
  > Automatic evaluation of retrieval augmented generation (RAG) systems relies on fine-grained dimensions like faithfulness and relevance, as judged by expert human annotators.
  - [MEMERAG: A Multilingual End-to-End Meta-Evaluation Benchmark for Retrieval Augmented Generation](https://aclanthology.org/2025.acl-long.1101.pdf)
- **MMHal-Bench** (measurements) — *measured_by*
  > MMHal-Bench (Sun et al., 2023), which gauges the faithfulness of VLMs by identifying hallucinations in their outputs. (Section 5.2)
  - [The Devil Is in the Details: Tackling Unimodal Spurious Correlations for Generalizable Multimodal Reward Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25cw/li25cw.pdf)
- **TRUE** (measurements) — *measured_by*
  > for the Abstract Writing task, we employ TRUE (Honovich et al., 2022), along with GPT-4o as NLI models for evaluating factual consistency in context
  - [Large Language Models for Automated Literature Review: An Evaluation of Reference Generation, Abstract Writing, and Review Composition](https://aclanthology.org/2025.emnlp-main.83.pdf)
- **RAGAS** (measurements) — *measured_by*
  > Frameworks such as RAGAS (Shahul et al., 2023) and RAG-Checker (Ru et al., 2024) have demonstrated that LLMs can provide scalable and automated assessments of metrics such as context relevance and faithfulness
  - [RAG-Zeval: Enhancing RAG Responses Evaluator through End-to-End Reasoning and Ranking-Based Reinforcement Learning](https://aclanthology.org/2025.emnlp-main.1267.pdf)

### → Faithfulness
- **Stability** (constructs) — *causes*
  > Therefore, stability plays a pivotal role in ensuring explanation faithfulness.
  - [Faithful Vision-Language Interpretation via Concept Bottleneck Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/678cffc05549fdabda971127602084c6-Paper-Conference.pdf)
- **Synthetic data generation** (behaviors tasks) — *causes*
  > ...eliminating uncertainty during synthetic data generation leads to more generalization ability. ... thereby enhancing the faithfulness of the synthetic data. (Section 4.3)
  - [Towards a Theoretical Understanding of Synthetic Data in LLM Post-Training: A Reverse-Bottleneck Perspective](https://proceedings.iclr.cc/paper_files/paper/2025/file/1e0bfe8bbaa0e70809f0a8ccd9c2ff3e-Paper-Conference.pdf)

### Associated with
- **Object hallucination** (behaviors tasks)
  > Such phenomenon challenges the faithfulness and reliability of LVLMs in practical use, impeding their deployments to real-world applications [14]. (Introduction)
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **Context utilization** (constructs)
  > When tuning the generator, the trilemma of context utilization, noise sensitivity, and faithfulness makes it difficult to improve all aspects simultaneously.
  - [RAGChecker: A Fine-grained Framework for Diagnosing Retrieval-Augmented Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/27245589131d17368cccdfa990cbf16e-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Factuality** (constructs)
  > Factuality refers to whether the model’s generated information aligns with external, real-world knowledge and is typically evaluated against a reference dataset or established knowledge. Faithfulness, on the other hand, evaluates how accurately the generated content reflects the information provided in the input context. (Section 1)
  - [SCOPE: A Self-supervised Framework for Improving Faithfulness in Conditional Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/05d6b5b6901fb57d2c287e1d3ce6d63c-Paper-Conference.pdf)
- **Data-to-text generation** (behaviors tasks)
  > Faithfulness is essential for both tasks to ensure the generated text accurately reflects the input data. (Section 1)
  - [SCOPE: A Self-supervised Framework for Improving Faithfulness in Conditional Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/05d6b5b6901fb57d2c287e1d3ce6d63c-Paper-Conference.pdf)
- **Generation diversity** (constructs)
  > We emphasize the importance of balancing faithfulness and diversity during post-training stages, providing a theoretical foundation for existing methodologies. (Section 5)
  - [Towards a Theoretical Understanding of Synthetic Data in LLM Post-Training: A Reverse-Bottleneck Perspective](https://proceedings.iclr.cc/paper_files/paper/2025/file/1e0bfe8bbaa0e70809f0a8ccd9c2ff3e-Paper-Conference.pdf)
- **Ambiguity** (constructs)
  > an ambiguous summary can be correctly interpreted in multiple ways given the source document, leading to different faithfulness judgments depending on the underlying assumptions.
  - [Faithful, Unfaithful or Ambiguous? Multi-Agent Debate with Initial Stance for Summary Evaluation](https://aclanthology.org/2025.naacl-long.609.pdf)
- **Fact checking** (behaviors tasks)
  > We consider the task of fact-checking claims against grounding documents, where the goal is to assess factual consistency based on provided textual evidence (Section 1).
  - [GraphCheck: Breaking Long-Term Text Barriers with Extracted Knowledge Graph-Powered Fact-Checking](https://aclanthology.org/2025.acl-long.729.pdf)
- **Self-consistency** (measurements)
  > The consistency of LLM outputs is intertwined with the broader discourse on faithfulness in reasoning — specifically, whether a model’s generated explanation or stated decision process accurately reflects its true internal mechanisms (Agarwal et al., 2024). (Section 2.2)
  - [Robust Native Language Identification through Agentic Decomposition](https://aclanthology.org/2025.emnlp-main.423.pdf)
- **Plausibility** (constructs)
  > In terms of interpretability, this paper focuses on the trade-off between plausibility and faithfulness. (Section 4.3)
  - [Judge and Improve: Towards a Better Reasoning of Knowledge Graphs with Large Language Models](https://aclanthology.org/2025.emnlp-main.269.pdf)
- **Citation quality** (constructs)
  > Using passage-level relevance judgments for all queries (or qrels) information available in MIRACL, we evaluate whether the system’s response cites the relevant passages, crucial for measuring faithfulness.
  - [MIRAGE-Bench: Automatic Multilingual Benchmark Arena for Retrieval-Augmented Generation Systems](https://aclanthology.org/2025.naacl-long.14.pdf)
- **Interpretability and explainability** (constructs)
  > We evaluate the explainability of all the models using plausibility and faithfulness metrics (DeYoung et al., 2019). (Section 6.1)
  - [Main Predicate and Their Arguments as Explanation Signals For Intent Classification](https://aclanthology.org/2025.naacl-long.539.pdf)
- **Reasoning** (constructs)
  > Faithfulness serves as a metric for evaluating the degree to which the model’s provided explanation aligns with its actual reasoning. (Section 6.1)
  - [Main Predicate and Their Arguments as Explanation Signals For Intent Classification](https://aclanthology.org/2025.naacl-long.539.pdf)
- **Explanation generation** (behaviors tasks)
  > We evaluate the quality of our natural language explanations using two widely recognized metrics in explainable AI: faithfulness and simulatability.
  - [Explaining Differences Between Model Pairs in Natural Language through Sample Learning](https://aclanthology.org/2025.emnlp-main.1462.pdf)
- **Comprehensiveness** (constructs)
  > To assess the faithfulness of the aforementioned methods, we adopt two complementary criteria: comprehensiveness and sufficiency (DeYoung et al., 2020). (Section 4.2)
  - [NormXLogit: The Head-on-Top Never Lies](https://aclanthology.org/2025.emnlp-main.1769.pdf)
