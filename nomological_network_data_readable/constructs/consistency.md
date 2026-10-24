# Consistency
**Type:** Construct  
**Referenced in:** 85 papers  
**Also known as:** Robustness to prompt variations, Self-consistency, Self-Consistency, Answer consistency, Output consistency, Performance consistency, Prediction consistency, Conceptual incoherence, Process consistency  

## State of the Field

**Definition agreement:** Conflicting. A large group of papers defines consistency as output stability or invariance, such as giving the same answer, judgment, class distribution, or task outcome across paraphrases, order changes, repeated runs, or small training variations. Another large group uses the same term for logical or factual coherence and alignment, such as agreement between answers and rationales, content and sources, prior statements, internal beliefs, or narrative states, and a few others use it for task similarity or learning dynamics, so these papers are not all studying the same phenomenon.

**Space of definitions.** The prevailing usage treats consistency as stability or non-contradiction: papers describe it as producing the same or similar answer, prediction, judgment, or successful outcome across paraphrases, semantically or logically equivalent contexts, repeated identical prompts, multiple inference passes, or repeated trials. Related definitions extend this to agreement among sampled reasoning paths, or to beliefs that do not contradict across prompts or logical relations. Another recurring usage applies the same term to alignment between paired items, such as auxiliary and target task distributions, a rationale and the gold answer, a document and the correct answer, ad text and landing-page content, generated text and its source, or language and vision plans. Smaller lines of work use it for text-level logical coherence, continuity of character behavior, stability across fine-tuned variants, or convergence of in-context learning performance, so papers disagree on whether consistency is a property of outputs and behavior, internal beliefs, paired artifacts, or task distributions.

**Space of facets.** Papers introduce several named variants, especially self-consistency, answer consistency, output consistency, prediction consistency, performance consistency, and process consistency. Within these, one paper distinguishes Local-Consistency and Global-Consistency features, and another says implication self-consistency is sometimes called simply consistency. The construct is also embedded in larger schemas: value-reasoning reliability is defined as including output consistency, a coherence account uses a formal consistency condition as one component of coherence, and conceptual incoherence names the opposite case of conflicting internal representations. Another paper adds that work framed as faithfulness is often actually measuring self-consistency.

**Space of measurement.** Consistency is linked to 3 measurement instruments and 5 behavioral indicators. The named instruments are CounterFact, Human evaluation, and TREC, while papers also measure it through task-based indicators such as natural language inference and text classification. Operationalizations are diverse: pairwise similarity of class distributions across prompt rephrasings, repeated prompting across independent trials, pass^k over k i.i.d. trials, matching predictions across two inference passes, repeated identical-prompt runs, answer-level agreement across sampled reasoning paths, judgment agreement when response order changes, logical constraint violation rates, and the probability of predicting the correct answer from a document. In many papers these measures directly instantiate stability or non-contradiction, but papers using alignment, coherence, or task-similarity definitions operationalize consistency with different task-specific proxies.

**Links.** Single papers claim a causal relationship from consistency to generalization and to information retrieval, and another claims a causal relationship from logical reasoning to consistency. One paper reports that consistency correlates with uncertainty quantification. Other single-paper links describe it as related to robustness and several additional construct- and behavior-level properties.

## Sources

**[BatchPrompt: Accomplish more with less](https://proceedings.iclr.cc/paper_files/paper/2024/file/5d8c01de2dc698c54201c1c7d0b86974-Paper-Conference.pdf)**
> The similarity between the data distributions of the finetuning tasks and the target task, reflecting how closely the auxiliary tasks align with the objective of the target task in the latent space.

**[Waste Not, Want Not; Recycled Gumbel Noise Improves Consistency in Natural Language Generation](https://aclanthology.org/2025.naacl-long.292.pdf) (as "Self-consistency")**
> The ability of a language model to maintain coherent and non-contradictory responses when presented with paraphrased or semantically equivalent prompts.

**[Waste Not, Want Not; Recycled Gumbel Noise Improves Consistency in Natural Language Generation](https://aclanthology.org/2025.naacl-long.292.pdf) (as "Robustness to prompt variations")**
> The stability of model responses when the same question is reworded or paraphrased.

**[Logically Consistent Language Models via Neuro-Symbolic Integration](https://proceedings.iclr.cc/paper_files/paper/2025/file/871a06b60cf087bbdb854ebfcdf5349a-Paper-Conference.pdf) (as "Self-Consistency")**
> The property of the model's internal beliefs not contradicting each other across different prompts or logical relations.

**[MMEvalPro: Calibrating Multimodal Benchmarks Towards Trustworthy and Efficient Evaluation](https://aclanthology.org/2025.naacl-long.247.pdf) (as "Answer consistency")**
> The extent to which multiple sampled reasoning paths yield the same final answer, serving as an indicator of confidence in the output.

**[Investigating Value-Reasoning Reliability in Small Large Language Models](https://aclanthology.org/2025.emnlp-main.395.pdf) (as "Output consistency")**
> The degree to which a model produces the same output when presented with identical prompts multiple times.

**[Quantifying Prediction Consistency Under Fine-tuning Multiplicity in Tabular LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hamman25a/hamman25a.pdf) (as "Prediction consistency")**
> The degree to which a model's prediction for a given input remains stable across multiple fine-tuned variants of the same pre-trained model under minor training variations.

**[Potemkin Understanding in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mancoridis25a/mancoridis25a.pdf) (as "Conceptual incoherence")**
> A state where a model holds conflicting or inconsistent internal representations of the same concept, leading it to contradict its own generations or classifications.

**[Guided Search Strategies in Non-Serializable Environments with Applications to Software Engineering Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zainullina25a/zainullina25a.pdf) (as "Performance consistency")**
> The degree to which an LLM agent maintains reliable success across multiple attempts at complex, multi-step tasks, minimizing variance between average-case and best-case outcomes.

**[Position: Theory of Mind Benchmarks are Broken for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/riemer25a/riemer25a.pdf) (as "Process consistency")**
> The degree to which an agent's internal reasoning process remains coherent and aligned across different questions or steps in a task, particularly in how predictions inform actions.

## Relationships

### Consistency →
- **Generalization** (constructs) — *causes*
  > “Besides small finetuning loss on sufficiently many data, a large diversity parameter ν and a small consistency parameter κ will result in a small target error bound.”
  - [Towards Few-Shot Adaptation of Foundation Models via Multitask Finetuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/2d9a0718883f4a2eecee3c69c7213b05-Paper-Conference.pdf)
- **Information retrieval** (behaviors tasks) — *causes*
  > By explicitly modeling both consistency and relevance, our method trains a retriever to retrieve the documents necessary for answering a given question. (Section 3.2)
  - [ReSCORE: Label-free Iterative Retriever Training for Multi-hop Question Answering with Relevance-Consistency Supervision](https://aclanthology.org/2025.acl-long.16.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > Human evaluation results on consistency and coherence among the sentiment of user profiles. (Table 2)
  - [Exploring Persona Sentiment Sensitivity in Personalized Dialogue Generation](https://aclanthology.org/2025.acl-long.900.pdf)
- **Hallucination** (behaviors tasks) — *correlates*
  > smaller attentive consistency scores and larger non-attentive consistency scores indicate greater probabilities of hallucinations.
  - [Attention-guided Self-reflection for Zero-shot Hallucination Detection in Large Language Models](https://aclanthology.org/2025.emnlp-main.1063.pdf)

### → Consistency
- **Logical reasoning** (constructs) — *causes*
  > the deductive reasoning process improves consistency by producing consistent solutions using a given strategy (Introduction).
  - [StrategyLLM: Large Language Models as Strategy Generators, Executors, Optimizers, and Evaluators for Problem Solving](https://proceedings.neurips.cc/paper_files/paper/2024/file/af7cc9e2366b8f8837a6ef339810277a-Paper-Conference.pdf)

### Associated with
- **In-context learning** (constructs)
  > Besides confirming the existence of ICL ability, we are particularly interested in ... determining if our trained models demonstrate consistency, i.e., whether their performance converges in probability to some ceiling.
  - [Is attention required for ICL? Exploring the Relationship Between Model Architecture and In-Context Learning Ability](https://proceedings.iclr.cc/paper_files/paper/2024/file/ea6d17af54f827336fc8fed27ca0319d-Paper-Conference.pdf)
- **Robustness** (constructs)
  > Our hope is that sensitivity and consistency will be helpful to guide prompt engineering and obtain LLMs that balance robustness with performance. (Abstract)
  - [What Did I Do Wrong? Quantifying LLMs' Sensitivity and Consistency to Prompt Engineering](https://aclanthology.org/2025.naacl-long.73.pdf)
- **Persona consistency** (constructs)
  > Consistency emphasizes the importance of maintaining logical continuity in a character’s behavioral patterns across all interactions... ‚ Behavioral Coherence (BC): Evaluates the logical consistency of character’s actions in relation to previous behaviors and current context.
  - [CharacterBox: Evaluating the Role-Playing Capabilities of LLMs in Text-Based Virtual Worlds](https://aclanthology.org/2025.naacl-long.323.pdf)
- **Relevance** (constructs)
  > While the answer probability by itself seemed ineffective, its combination with the question probability becomes powerful, as it evaluates the consistency among relevant documents, with irrelevant ones already filtered out due to their low question probabilities. (Section 4.2.2)
  - [ReSCORE: Label-free Iterative Retriever Training for Multi-hop Question Answering with Relevance-Consistency Supervision](https://aclanthology.org/2025.acl-long.16.pdf)
- **Agency** (constructs)
  > when it comes to tasks requiring heavy reasoning or agentic capabilities, a major challenge persists: while the models occasionally achieve exceptional results, their average performance often falls short of their demonstrated potential. (Section 1)
  - [Guided Search Strategies in Non-Serializable Environments with Applications to Software Engineering Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zainullina25a/zainullina25a.pdf)
- **Value-reasoning reliability** (constructs)
  > We define Value-Reasoning Reliability as comprising: (1) Output consistency under identical prompts...
  - [Investigating Value-Reasoning Reliability in Small Large Language Models](https://aclanthology.org/2025.emnlp-main.395.pdf)
- **Text classification** (behaviors tasks)
  > We therefore introduce two metrics for classification tasks, namely sensitivity and consistency, which are complementary to task performance. (Abstract)
  - [What Did I Do Wrong? Quantifying LLMs' Sensitivity and Consistency to Prompt Engineering](https://aclanthology.org/2025.naacl-long.73.pdf)
- **Natural language inference** (behaviors tasks)
  > “NLI evaluates NLP models’ ability to capture logical relationships between sentences, serving as a proxy for the consistency condition.”
  - [A Novel Computational Modeling Foundation for Automatic Coherence Assessment](https://aclanthology.org/2025.naacl-long.277.pdf)
- **Stability** (constructs)
  > Our objective is to define a measure, denoted as S(x, f), for an input x and a given fine-tuned model f, that would preemptively quantify the consistency of the prediction ˆf(x) over a broad class of equally-well-performing fine-tuned models. (Section 3)
  - [Quantifying Prediction Consistency Under Fine-tuning Multiplicity in Tabular LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hamman25a/hamman25a.pdf)
- **Predictive uncertainty** (constructs)
  > “To evaluate the uncertainty of a model’s responses, a common approach is to calculate the most frequent response from multiple outputs generated by the model across multiple runs. This method quantifies the model’s prediction uncertainty using a metric known as the consistency rate (CR)”
  - [Exploring Response Uncertainty in MLLMs: An Empirical Evaluation under Misleading Scenarios](https://aclanthology.org/2025.emnlp-main.916.pdf)
