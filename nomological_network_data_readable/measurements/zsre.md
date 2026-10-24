# ZsRE
**Type:** Measurement  
**Referenced in:** 46 papers  
**Also known as:** ZSRE, zsRE, Zero-Shot RE, Zero-shot relation extraction (zsRE), zs-RE, ZeroShot RE  

## State of the Field

**What it is.** Across papers, the prevailing description is a zero-shot relation extraction benchmark or dataset, often reused for knowledge editing evaluation. Definitions also recast it as question answering: short question-answer pairs derived from Wikipedia, sometimes a closed-book or context-free QA task, and some authors specify that each instance contains a factual statement and a paraphrased prompt. A smaller line of work emphasizes reading-comprehension-style relation-slot filling, and some papers describe it as supporting knowledge insertion and modification tasks or relation prediction without task-specific training.

**What it is claimed to measure.** Papers link it to 5 behavioral indicators and 5 constructs, so the reported measurement claims are spread across several targets. The prevailing uses are to measure knowledge editing and question answering, while other papers report it as measuring information extraction and relation extraction, and one paper also uses it to measure hallucination. On the construct side, papers most often use it to measure editing locality and generality, with 3 other constructs also linked, including factual knowledge, knowledge integration efficacy, and reliability.

**Space of uses.** Most commonly, papers use it alongside CounterFact, frequently calling the pair widely adopted or representative benchmarks for model editing. Some papers position it more narrowly as a slot-filling or relation extraction task, including alongside T-REx or as part of the KILT task subset, and one paper uses it with CoQA to represent unrelated tasks to a target sentiment classification task. The only linked instrument is BMIKE-53, which one paper treats as measured by ZsRE, stating that BMIKE-53 is constructed from zsRE and other monolingual KE datasets.

**Concerns raised.** One paper explicitly states that ZsRE does not measure generative capabilities. In that usage, authors report only accuracy-based results for efficacy, generality, and locality.

## Sources

**[BadEdit: Backdooring Large Language Models by Model Editing](https://proceedings.iclr.cc/paper_files/paper/2024/file/6f6fe6789e14796b6544a04b20d11902-Paper-Conference.pdf) (as "ZSRE")**
> A dataset for zero-shot relation extraction, used to evaluate a model's ability to identify relations it has not been explicitly trained on.

**[Can Sensitive Information Be Deleted From LLMs? Objectives for Defending Against Extraction Attacks](https://proceedings.iclr.cc/paper_files/paper/2024/file/c652e5f62fd1f5acbbf0d6413a1113e7-Paper-Conference.pdf) (as "zsRE")**
> A question-answer benchmark derived from Wikipedia that is used here to test factual editing and extraction of specific answers.

**[Precise Localization of Memories: A Fine-grained Neuron-level Knowledge Editing Technique for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/01db36a646c07c64dd39a92b4eceb417-Paper-Conference.pdf)**
> A dataset for knowledge editing evaluation, originally developed for zero-shot relation extraction, used here for knowledge insertion and modification tasks.

**[RA-DIT: Retrieval-Augmented Dual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/536d18fbb454f80221465f1a42c6f389-Paper-Conference.pdf) (as "Zero-Shot RE")**
> A zero-shot relation extraction benchmark used to test relation prediction without task-specific training.

**[Training a Utility-based Retriever Through Shared Context Attribution for Retrieval-Augmented Language Models](https://aclanthology.org/2025.emnlp-main.33.pdf) (as "zs-RE")**
> zs-RE is a benchmark for zero-shot relation extraction, where models must identify relations between entities without prior examples for those specific relations.

**[HydraRAG: Structured Cross-Source Enhanced Large Language Model Reasoning](https://aclanthology.org/2025.emnlp-main.730.pdf) (as "ZeroShot RE")**
> A zero-shot relation extraction benchmark used to evaluate extracting relations from text without task-specific training.

## Relationships

### → ZsRE
- **Question answering** (behaviors tasks) — *measured_by*
  > For GPT-2, T5-XL, and GPT-J, we use the zero-shot Relation Extraction (zsRE) question answering dataset (Levy et al., 2017) with the identical train/val splits with De Cao et al. (2021); Mitchell et al. (2022) (Section 5).
  - [Massive Editing for Large Language Models via Meta Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/f074097f6f186947726ef28819d589e7-Paper-Conference.pdf)
- **Knowledge editing** (behaviors tasks) — *measured_by*
  > we edit different kinds of knowledge: WikiDatarecent, WikiDatacounterfact (Cohen et al., 2024), WikiBio (Hartvigsen et al., 2024), ConvSent (Mitchell et al., 2022), and ZsRE (Yao et al., 2023). (Section 3.1)
  - [Unlocking Efficient, Scalable, and Continual Knowledge Editing with Basis-Level Representation Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f89a23a19d1617e7fb16d4f7a049ce2-Paper-Conference.pdf)
- **Information extraction** (behaviors tasks) — *measured_by*
  > two slot filling datasets: T-REx (ElSahar et al., 2018) and Zero-Shot RE (Petroni et al., 2021);
  - [Think-on-Graph: Deep and Responsible Reasoning of Large Language Model on Knowledge Graph](https://proceedings.iclr.cc/paper_files/paper/2024/file/10a6bdcabbd5a3d36b760daa295f63c1-Paper-Conference.pdf)
- **Relation extraction** (behaviors tasks) — *measured_by*
  > We use a relation extraction dataset ZSRE (Meng et al., 2022a) and a conversational question answering dataset CoQA (Reddy et al., 2019) to represent unrelated tasks
  - [BadEdit: Backdooring Large Language Models by Model Editing](https://proceedings.iclr.cc/paper_files/paper/2024/file/6f6fe6789e14796b6544a04b20d11902-Paper-Conference.pdf)
- **Generality** (constructs) — *measured_by*
  > Since ZsRE does not measure generative capabilities, we evaluate the models based only on accuracy in terms of Efficacy, Generality, and Locality. (Section 5.1)
  - [CoME: An Unlearning-based Approach to Conflict-free Model Editing](https://aclanthology.org/2025.naacl-long.325.pdf)
- **Editing locality** (constructs) — *measured_by*
  > Since ZsRE does not measure generative capabilities, we evaluate the models based only on accuracy in terms of Efficacy, Generality, and Locality. (Section 5.1)
  - [CoME: An Unlearning-based Approach to Conflict-free Model Editing](https://aclanthology.org/2025.naacl-long.325.pdf)
- **Hallucination** (behaviors tasks) — *measured_by*
  > Our experiments require a source of hallucinations to edit, which we draw from the Multi-CounterFact (MCF) [26] and ZsRE [27] datasets. (Section 5)
  - [Stealth edits to large language models](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c8168a8eca2eb23f6b1f5019371043e-Paper-Conference.pdf)
- **Factual knowledge** (constructs) — *measured_by*
  > For factual knowledge, two popular model editing datasets Zero-Shot Relation Extraction (ZSRE) (Levy et al., 2017) and COUNTERFACT (Meng et al., 2022) were adopted in our experiments. (Section 5.2)
  - [Perturbation-Restrained Sequential Model Editing](https://proceedings.iclr.cc/paper_files/paper/2025/file/2c15b0221da28bc6f4373a7e78b896dd-Paper-Conference.pdf)
- **Knowledge integration efficacy** (constructs) — *measured_by*
  > Since ZsRE does not measure generative capabilities, we evaluate the models based only on accuracy in terms of Efficacy, Generality, and Locality. (Section 5.1)
  - [CoME: An Unlearning-based Approach to Conflict-free Model Editing](https://aclanthology.org/2025.naacl-long.325.pdf)

### Associated with
- **BMIKE-53** (measurements)
  > BMIKE-53 is constructed from three monolingual KE datasets: zsRE, CounterFact, and WikiFactDiff
  - [BMIKE-53: Investigating Cross-Lingual Knowledge Editing with In-Context Learning](https://aclanthology.org/2025.acl-long.798.pdf)
