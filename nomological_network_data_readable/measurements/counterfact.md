# CounterFact
**Type:** Measurement  
**Referenced in:** 39 papers  
**Also known as:** COUNTERFACT, Counterfact  

## State of the Field

**What it is.** Across the papers, the prevailing treatment is as a dataset for knowledge editing built around counterfactual facts, though some authors describe it more broadly as a question-answering or factual recall dataset. Definitions variously present it as (subject, relation, answer) tuples with three paraphrased prompts, factual prompt pairs, or counterfactual statements, sometimes explicitly false facts, used as new knowledge for editing; some papers also mention neighboring datapoints, rephrased and unrelated queries, and old versus new knowledge partitions. Individual studies sometimes use subsets, such as the first 1000 examples filtered to correctly recalled facts or prompts sharing one relation.

**What it is claimed to measure.** Papers link CounterFact to 12 constructs and 3 behavioral indicators. The prevailing use is to measure factual recall, knowledge editing, fact checking, editing locality, and factual knowledge; beyond these, papers link 10 other constructs to it, so the measurement claims are spread across many constructs rather than centered on one. A separate paper also reports CounterFact as related to fact checking through knowledge triplets.

**Space of uses.** Many papers pair CounterFact with ZsRE and present the pair as widely adopted or representative benchmarks for factual knowledge editing. Smaller uses place it alongside Bias in Bios, UnKEBench, or MQuAKE, and one paper uses it as one source dataset in BMIKE-53. Papers often position it as a primary benchmark, though one paper uses it only for additional experiments, and others adapt it by reformulating prompts as questions or using it exclusively for causal tracing.

**Concerns raised.** Only a small line of work comments on limitations. One paper, in comparing context-use evaluations, says artificial datasets such as CounterFact often fail to represent the complexity and diversity of realistically retrieved context. Another paper describes its CounterFact experiment as a simple question-answering task that requires reliance on provided counterfactual context and "does not require complex reasoning".

## Sources

**[BadEdit: Backdooring Large Language Models by Model Editing](https://proceedings.iclr.cc/paper_files/paper/2024/file/6f6fe6789e14796b6544a04b20d11902-Paper-Conference.pdf)**
> Question-answering dataset used to evaluate a model's factual knowledge, consisting of (subject, relation, answer) tuples with paraphrased prompts, designed to test recovery of specific facts.

**[Is This the Subspace You Are Looking for? An Interpretability Illusion for Subspace Activation Patching](https://proceedings.iclr.cc/paper_files/paper/2024/file/70b8505ac79e3e131756f793cd80eb8d-Paper-Conference.pdf) (as "COUNTERFACT")**
> The COUNTERFACT dataset, a collection of factual prompt pairs used to evaluate factual recall and fact editing interventions.

**[Everything is Editable: Extend Knowledge Editing to Unstructured Data in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/02763667a5761ff92bb15d8751bcd223-Paper-Conference.pdf) (as "Counterfact")**
> A dataset used for evaluating knowledge editing on structured, counterfactual statements.

## Relationships

### → CounterFact
- **Knowledge editing** (behaviors tasks) — *measured_by*
  > “We evaluate AlphaEdit using two widely adopted benchmarks: the Counterfact dataset (Meng et al., 2022) and the ZsRE dataset (Levy et al., 2017).”
  - [AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf)
- **Editing locality** (constructs) — *measured_by*
  > In the Counterfact dataset, we evaluate the models on Efficacy, Generality, and Locality, using success rates as metrics. (Section 5.1)
  - [CoME: An Unlearning-based Approach to Conflict-free Model Editing](https://aclanthology.org/2025.naacl-long.325.pdf)
- **Factual recall** (behaviors tasks) — *measured_by*
  > We use the ﬁrst 1000 examples from the COUNTERFACT dataset (Meng et al., 2022a), and ﬁlter from them 40 pairs of facts across 8 relations that the model recalls correctly.
  - [Is This the Subspace You Are Looking for? An Interpretability Illusion for Subspace Activation Patching](https://proceedings.iclr.cc/paper_files/paper/2024/file/70b8505ac79e3e131756f793cd80eb8d-Paper-Conference.pdf)
- **Factual knowledge** (constructs) — *measured_by*
  > The CounterFact dataset is used to test the model’s factual knowledge of data from Wikipedia. (Section 5.1)
  - [The Truth is in There: Improving Reasoning in Language Models with Layer-Selective Rank Reduction](https://proceedings.iclr.cc/paper_files/paper/2024/file/4c2092ec0b1370cce3fb5965ab255fae-Paper-Conference.pdf)
- **Generality** (constructs) — *measured_by*
  > In the Counterfact dataset, we evaluate the models on Efficacy, Generality, and Locality, using success rates as metrics. (Section 5.1)
  - [CoME: An Unlearning-based Approach to Conflict-free Model Editing](https://aclanthology.org/2025.naacl-long.325.pdf)
- **Reliability** (constructs) — *measured_by*
  > experiments on COUNTERFACT and MQuAKE shows that our method preserves balanced basic editing performance (reliability, locality, and generality) under diverse editing scenarios.
  - [REACT: Representation Extraction And Controllable Tuning to Overcome Overfitting in LLM Knowledge Editing](https://aclanthology.org/2025.emnlp-main.860.pdf)
- **Fact checking** (behaviors tasks) — *measured_by*
  > Counterfact Fact-Checking (Meng et al., 2022a) is a data set with factual statements consisting of a statement with corresponding fact.
  - [BadEdit: Backdooring Large Language Models by Model Editing](https://proceedings.iclr.cc/paper_files/paper/2024/file/6f6fe6789e14796b6544a04b20d11902-Paper-Conference.pdf)
- **Knowledge conflict resolution** (constructs) — *measured_by*
  > We evaluate the effectiveness of PASTA at ... (iii) resolving in-context knowledge conflicts. For (iii), we study ... CounterFact (Meng et al., 2022a).
  - [Tell Your Model Where to Attend: Post-hoc Attention Steering for LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/b99d6cc40b05809c3d84b57a165448cd-Paper-Conference.pdf)
- **Knowledge integration efficacy** (constructs) — *measured_by*
  > In the Counterfact dataset, we evaluate the models on Efficacy, Generality, and Locality, using success rates as metrics. (Section 5.1)
  - [CoME: An Unlearning-based Approach to Conflict-free Model Editing](https://aclanthology.org/2025.naacl-long.325.pdf)
- **Context utilization** (constructs) — *measured_by*
  > We compare DRUID to synthetic datasets (CounterFact, ConflictQA) and find that artificial datasets often fail to represent the complexity and diversity of realistically retrieved context (Abstract).
  - [A Reality Check on Context Utilisation for Retrieval-Augmented Generation](https://aclanthology.org/2025.acl-long.968.pdf)
- **Context faithfulness** (constructs) — *measured_by*
  > we also conduct experiments on the CounterFact dataset (Meng et al., 2022), where the model must rely on the provided counterfactual context to answer a simple question correctly. The task does not require complex reasoning, making it well-suited for isolating and evaluating the role of context-faithful experts. (Section 3.3)
  - [Understanding and Leveraging the Expert Specialization of Context Faithfulness in Mixture-of-Experts LLMs](https://aclanthology.org/2025.emnlp-main.1114.pdf)

### Associated with
- **BMIKE-53** (measurements)
  > BMIKE-53 is constructed from three monolingual KE datasets: zsRE, CounterFact, and WikiFactDiff
  - [BMIKE-53: Investigating Cross-Lingual Knowledge Editing with In-Context Learning](https://aclanthology.org/2025.acl-long.798.pdf)
