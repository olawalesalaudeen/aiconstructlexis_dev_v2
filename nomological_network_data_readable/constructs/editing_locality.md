# Editing locality
**Type:** Construct  
**Referenced in:** 29 papers  
**Also known as:** Locality, Editing Locality, Unrelated knowledge preservation  

## State of the Field

**Definition agreement:** Consensus. Most papers define editing locality as how confined a knowledge edit is, namely whether changing targeted knowledge leaves unrelated inputs, knowledge, tasks, or capabilities unchanged and avoids side effects. One paper uses the term for a different idea about bounded token distance and length generalization, but that is a lone outlier rather than a substantial competing definition.

**Space of definitions.** Most papers describe editing locality as a preservation criterion for knowledge editing: the edit should stay local so that unrelated knowledge, inputs, or outputs remain unchanged. Definitions vary mainly in whether they treat it as a latent property of an editing method or as an observable outcome such as "unrelated knowledge preservation", and in scope, from unrelated knowledge alone to untargeted tasks or model capabilities. One paper uses the same term differently, defining locality as a bounded distance between tokens that matter for prediction in work on length generalization.

**Space of facets.** Papers usually place locality within a broader evaluation bundle for knowledge editing, alongside efficacy or accuracy, generalization, reliability, and sometimes linguistic quality. Most authors use "locality" and "editing locality" interchangeably, while "unrelated knowledge preservation" names the observable maintenance of performance on knowledge not targeted for editing. A recurring contrast is the continual-editing formulation in which reliability, generalization, and locality form an "impossible triangle", and the clearest same-name divergence is the token-distance use of "locality" in length-generalization work.

**Space of measurement.** Operationalization is mostly benchmark- and task-based. Papers link editing locality to 10 measurement instruments, most frequently CounterFact, Natural Questions, ZsRE, BIG-Bench Hard, and CommonsenseQA, plus 5 others, and to 2 behavioral indicators. These measures largely follow the preservation-based definitions: papers compare pre- and post-edit behavior on unrelated items, use unrelated tuples or locality questions drawn from Natural Questions, report locality or success-rate metrics on CounterFact and ZsRE, and sometimes check whether general benchmark performance stays stable after editing.

**Links.** Some papers relate editing locality to knowledge editing, treating it as one of the criteria or aspects considered during editing. One paper claims a causal relationship from knowledge editing to editing locality, stating that direct editing of long-term memory can create conflicts with prior pretraining knowledge and result in poor locality, while another claims a causal relationship from editing locality to reliability, saying poor locality can lead to persistence of irrelevant or inaccurate facts and compromise reliability. Editing locality is also reported as related to reliability and generalization, and one paper reports that it correlates with length generalization.

## Sources

**[VLKEB: A Large Vision-Language Model Knowledge Editing Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/1198b53fa686831d5f0c0860d7ec4f34-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Locality")**
> The extent to which a knowledge edit is localized, ensuring the model's behavior on unrelated inputs remains unchanged.

**[Precise Localization of Memories: A Fine-grained Neuron-level Knowledge Editing Technique for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/01db36a646c07c64dd39a92b4eceb417-Paper-Conference.pdf) (as "Editing Locality")**
> The latent property of an editing method to modify targeted knowledge without influencing unrelated knowledge or model capabilities.

**[Reinforced Lifelong Editing for Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25an/li25an.pdf) (as "Unrelated knowledge preservation")**
> The observable maintenance of model performance on knowledge not targeted for editing, indicating minimal interference from editing updates.

## Relationships

### Editing locality →
- **CounterFact** (measurements) — *measured_by*
  > In the Counterfact dataset, we evaluate the models on Efficacy, Generality, and Locality, using success rates as metrics. (Section 5.1)
  - [CoME: An Unlearning-based Approach to Conflict-free Model Editing](https://aclanthology.org/2025.naacl-long.325.pdf)
- **Natural Questions** (measurements) — *measured_by*
  > The unrelated tuples (xu i , yu i )m i=1 are sampled from Natural Questions (NQ; Kwiatkowski et al., 2019). (Section 5).
  - [Massive Editing for Large Language Models via Meta Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/f074097f6f186947726ef28819d589e7-Paper-Conference.pdf)
- **Reliability** (constructs) — *causes*
  > "This limitation results in poor editing locality, which can lead to the persistence of irrelevant or inaccurate facts, ultimately compromising the reliability of LLMs."
  - [Precise Localization of Memories: A Fine-grained Neuron-level Knowledge Editing Technique for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/01db36a646c07c64dd39a92b4eceb417-Paper-Conference.pdf)
- **ZsRE** (measurements) — *measured_by*
  > Since ZsRE does not measure generative capabilities, we evaluate the models based only on accuracy in terms of Efficacy, Generality, and Locality. (Section 5.1)
  - [CoME: An Unlearning-based Approach to Conflict-free Model Editing](https://aclanthology.org/2025.naacl-long.325.pdf)
- **RedPajama** (measurements) — *measured_by*
  > measure retention of pretraining data (xloc) from the base model: RedPajama
  - [WISE: Rethinking the Knowledge Memory for Lifelong Model Editing of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/60960ad78868fce5c165295fbd895060-Paper-Conference.pdf)
- **WikiData_recent** (measurements) — *measured_by*
  > WikiDatarecent ... Locality ↑ (Table 2)
  - [In-Context Editing: Learning Knowledge from Self-Induced Distributions](https://proceedings.iclr.cc/paper_files/paper/2025/file/c0ff9e52e94ae331bc0f2d28be06a9ca-Paper-Conference.pdf)
- **WikiData_counterfact** (measurements) — *measured_by*
  > WikiDatacounterfact ... Locality ↑ (Table 3)
  - [In-Context Editing: Learning Knowledge from Self-Induced Distributions](https://proceedings.iclr.cc/paper_files/paper/2025/file/c0ff9e52e94ae331bc0f2d28be06a9ca-Paper-Conference.pdf)
- **CommonsenseQA** (measurements) — *measured_by*
  > For KE, we also need to consider locality, which ensures edits do not affect unrelated knowledge and abilities. To assess this, we evaluate the model on general benchmarks, including CommonsenseQA (Talmor et al., 2019), BigBench-Hard (Suzgun et al., 2023), MMLU (Hendrycks et al., 2021), and GSM8k (Cobbe et al., 2021) (Section 4.1).
  - [CaKE: Circuit-aware Editing Enables Generalizable Knowledge Learners](https://aclanthology.org/2025.emnlp-main.572.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > For KE, we also need to consider locality, which ensures edits do not affect unrelated knowledge and abilities. To assess this, we evaluate the model on general benchmarks, including CommonsenseQA (Talmor et al., 2019), BigBench-Hard (Suzgun et al., 2023), MMLU (Hendrycks et al., 2021), and GSM8k (Cobbe et al., 2021) (Section 4.1).
  - [CaKE: Circuit-aware Editing Enables Generalizable Knowledge Learners](https://aclanthology.org/2025.emnlp-main.572.pdf)
- **MMLU** (measurements) — *measured_by*
  > For KE, we also need to consider locality, which ensures edits do not affect unrelated knowledge and abilities. To assess this, we evaluate the model on general benchmarks, including CommonsenseQA (Talmor et al., 2019), BigBench-Hard (Suzgun et al., 2023), MMLU (Hendrycks et al., 2021), and GSM8k (Cobbe et al., 2021) (Section 4.1).
  - [CaKE: Circuit-aware Editing Enables Generalizable Knowledge Learners](https://aclanthology.org/2025.emnlp-main.572.pdf)
- **GSM8K** (measurements) — *measured_by*
  > For KE, we also need to consider locality, which ensures edits do not affect unrelated knowledge and abilities. To assess this, we evaluate the model on general benchmarks, including CommonsenseQA (Talmor et al., 2019), BigBench-Hard (Suzgun et al., 2023), MMLU (Hendrycks et al., 2021), and GSM8k (Cobbe et al., 2021) (Section 4.1).
  - [CaKE: Circuit-aware Editing Enables Generalizable Knowledge Learners](https://aclanthology.org/2025.emnlp-main.572.pdf)

### → Editing locality
- **Knowledge editing** (behaviors tasks) — *causes*
  > direct editing of long-term memory (ROME, MEMIT, etc.) creates conflicts with prior pretraining knowledge, resulting in poor locality (Section 3.2)
  - [WISE: Rethinking the Knowledge Memory for Lifelong Model Editing of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/60960ad78868fce5c165295fbd895060-Paper-Conference.pdf)

### Associated with
- **Generality** (constructs)
  > we find that it seems to be an impossible triangle—reliability, generalization, and locality can not be realized at the same time in the continual editing settings. (Section 1)
  - [WISE: Rethinking the Knowledge Memory for Lifelong Model Editing of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/60960ad78868fce5c165295fbd895060-Paper-Conference.pdf)
