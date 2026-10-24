# Relation extraction
**Type:** Behavior  
**Referenced in:** 27 papers  
**Also known as:** Knowledge triple extraction  

## State of the Field

**Space of definitions.** Where papers define the behavior directly, they frame it as knowledge triple extraction: decomposing document content into structured ⟨head entity, relation, tail entity⟩ triples with an LLM using in-context learning. In the only explicit task description, the model is prompted to extract triples for each retrieved document independently and to extract “all knowledge triples contained within a document in a single pass” (KiRAG: Knowledge-Driven Iterative Retriever for Enhancing Retrieval-Augmented Generation).

**Variants.** Papers study several settings under the same label. Some use sentence-level RE, with one benchmark description stating that “SemEval-2010 is a sentence-level RE dataset with ten relation classes,” while others use document-level RE, including binary relations between chemical and disease entities in BC5CDR and chemical-protein relations in ChemProt. A smaller line of work uses the name Few-shot Continual Relation Extraction, where RE systems “sequentially identify new relations with limited labeled samples,” and another paper uses ZsRE as a relation extraction dataset.

**Space of elicitation and scores.** The prevailing operationalization is benchmark evaluation: papers link relation extraction to 7 measurement instruments, all described as RE datasets or benchmarks. The most frequently linked are TACRED, SemEval 2010 Task 8, ZsRE, BC5CDR, and ChemProt, and papers also refer more generally to evaluation on standard relation extraction benchmarks, including SemEval and variants of TACRED. Where the dataset formulation is stated explicitly, instruments cover both sentence-level and document-level setups.

**What it is taken as evidence of.** Papers do not converge on a single construct behind this behavior. It is linked to 3 constructs: relation extraction is related to continual learning in work on few-shot continual RE, one paper claims a causal relationship from logical reasoning to relation extraction, stating that logical rules elicit deductive reasoning for more precise relation prediction, and another paper claims a causal relationship from relation extraction to groundedness, arguing that decomposing documents into knowledge triples enables a “factually reliable retrieval process.”

## Sources

**[KiRAG: Knowledge-Driven Iterative Retriever for Enhancing Retrieval-Augmented Generation](https://aclanthology.org/2025.acl-long.929.pdf) (as "Knowledge triple extraction")**
> Decomposing document content into structured ⟨head entity, relation, tail entity⟩ triples using an LLM with in-context learning.

## Relationships

### Relation extraction →
- **TACRED** (measurements) — *measured_by*
  > We evaluate BayesPrompt on four RE datasets, namely SemEval 2010 Task 8 (SemEval), TACRED (Zhang et al., 2017), TACREV (Alt et al., 2020), and ReTACRED (Stoica et al., 2021). (Section 6)
  - [BayesPrompt: Prompting Large-Scale Pre-Trained Language Models on Few-shot Inference via Debiased Domain Abstraction](https://proceedings.iclr.cc/paper_files/paper/2024/file/5fcfda9e2a28c62f1ba54bcfa09ebdbc-Paper-Conference.pdf)
- **SemEval 2010 Task 8** (measurements) — *measured_by*
  > We evaluate BayesPrompt on four RE datasets, namely SemEval 2010 Task 8 (SemEval), TACRED (Zhang et al., 2017), TACREV (Alt et al., 2020), and ReTACRED (Stoica et al., 2021). (Section 6)
  - [BayesPrompt: Prompting Large-Scale Pre-Trained Language Models on Few-shot Inference via Debiased Domain Abstraction](https://proceedings.iclr.cc/paper_files/paper/2024/file/5fcfda9e2a28c62f1ba54bcfa09ebdbc-Paper-Conference.pdf)
- **ZsRE** (measurements) — *measured_by*
  > We use a relation extraction dataset ZSRE (Meng et al., 2022a) and a conversational question answering dataset CoQA (Reddy et al., 2019) to represent unrelated tasks
  - [BadEdit: Backdooring Large Language Models by Model Editing](https://proceedings.iclr.cc/paper_files/paper/2024/file/6f6fe6789e14796b6544a04b20d11902-Paper-Conference.pdf)
- **BC5CDR** (measurements) — *measured_by*
  > BC5CDR is a document-level RE dataset featuring binary relations between chemical and disease entities (Li et al., 2016). (Section 5.1)
  - [Entangled Relations: Leveraging NLI and Meta-analysis to Enhance Biomedical Relation Extraction](https://aclanthology.org/2025.naacl-long.165.pdf)
- **ChemProt** (measurements) — *measured_by*
  > ChemProt is a chemical-protein dataset featuring five relation classes (Taboureau et al., 2010). (Section 5.1)
  - [Entangled Relations: Leveraging NLI and Meta-analysis to Enhance Biomedical Relation Extraction](https://aclanthology.org/2025.naacl-long.165.pdf)
- **REBEL** (measurements) — *measured_by*
  > On relation extraction (RE), our pipeline achieves 65.8% macro-F1 on REBEL, an 8-point gain over the prior state of the art... (Abstract)
  - [Automated Knowledge Graph Construction using Large Language Models and Sentence Complexity Modelling](https://aclanthology.org/2025.emnlp-main.783.pdf)
- **Information retrieval** (behaviors tasks) — *causes*
  > KiRAG decomposes documents into knowledge triples and performs iterative retrieval with these triples to enable a factually reliable retrieval process. (Abstract)
  - [KiRAG: Knowledge-Driven Iterative Retriever for Enhancing Retrieval-Augmented Generation](https://aclanthology.org/2025.acl-long.929.pdf)

### → Relation extraction
- **Logical reasoning** (constructs) — *causes*
  > We use these logical rules to elicit the deductive reasoning ability of the LLM, enabling more precise relation prediction. (Section 1)
  - [Improving Data Annotation for Low-Resource Relation Extraction with Logical Rule-Augmented Collaborative Language Models](https://aclanthology.org/2025.naacl-long.70.pdf)
- **Natural language inference** (behaviors tasks) — *causes*
  > Recent research efforts have explored the potential of leveraging natural language inference (NLI) techniques to enhance relation extraction (RE). (Abstract)
  - [Entangled Relations: Leveraging NLI and Meta-analysis to Enhance Biomedical Relation Extraction](https://aclanthology.org/2025.naacl-long.165.pdf)
- **Coreference resolution** (behaviors tasks) — *causes*
  > Ablation studies demonstrate that integrating coreference and decomposition increases recall on rare relations by over 20%. (Abstract)
  - [Automated Knowledge Graph Construction using Large Language Models and Sentence Complexity Modelling](https://aclanthology.org/2025.emnlp-main.783.pdf)
- **Text simplification** (behaviors tasks) — *causes*
  > Ablation studies demonstrate that integrating coreference and decomposition increases recall on rare relations by over 20%. (Abstract)
  - [Automated Knowledge Graph Construction using Large Language Models and Sentence Complexity Modelling](https://aclanthology.org/2025.emnlp-main.783.pdf)

### Associated with
- **Few-shot task performance** (behaviors tasks)
  > Few-shot Continual Relation Extraction (FCRE) has emerged as a significant challenge in information extraction, necessitating that relation extraction (RE) systems can sequentially identify new relations with limited labeled samples. (Abstract)
  - [Enhancing Discriminative Representation in Similar Relation Clusters for Few-Shot Continual Relation Extraction](https://aclanthology.org/2025.naacl-long.123.pdf)
- **Continual learning** (constructs)
  > Few-shot Continual Relation Extraction (FCRE) has emerged as a significant challenge in information extraction, necessitating that relation extraction (RE) systems can sequentially identify new relations with limited labeled samples. (Abstract)
  - [Enhancing Discriminative Representation in Similar Relation Clusters for Few-Shot Continual Relation Extraction](https://aclanthology.org/2025.naacl-long.123.pdf)
