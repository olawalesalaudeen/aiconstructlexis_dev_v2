# Named entity recognition
**Type:** Behavior  
**Referenced in:** 62 papers  
**Also known as:** Named entity extraction, Numeric named entity recognition, Textual named entity recognition, Legal named-entity recognition, Entity recognition, Named entity detection  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats named entity recognition as identifying and classifying named entities in text, usually people, organizations, and locations, though some papers also name brands or other domain-specific types. Many formulations make the unit explicit, describing span or token labeling, while others define success as extracting all entities in a passage or document and identifying their types. In "UniversalNER: Targeted Distillation from Large Language Models for Open Named Entity Recognition", for example, the task is stated as, "Given a passage, your task is to extract all entities and identify their entity types."

**Variants.** Papers study several variants and rename the behavior in multiple ways, including named entity extraction, entity recognition, legal named-entity recognition, numeric named entity recognition, textual named entity recognition, and named entity detection. The settings range from social media notes and user queries to Greek financial text, legal text, urban knowledge graph construction, and spoken language understanding, with some work framing it as token-level, open-category, zero-shot, multilingual, or cross-lingual. A smaller line of work narrows the task to one specified entity type rather than a full set of entity types: in "PICLe: Pseudo-annotations for In-Context Learning in Low-Resource Named Entity Detection", the goal is to identify "all mentions of a specific type of entity" in a query.

**Space of elicitation and scores.** Papers measure this behavior with eight linked instruments, mostly described as datasets or benchmarks. CoNLL-2003 is the most frequently linked instrument, followed by CrossNER, ACE05, BC5CDR, and MultiNERD. The evidence explicitly mentions English CoNLL03 data for NER and CrossNER as a benchmark spanning seven domains.

**What it is taken as evidence of.** Papers relate it to two constructs rather than a single shared one: Understanding, where one paper places it among legal-text tasks that examine the ability to "comprehend and interpret facts, entities, concepts, and relationships," and Knowledge boundary awareness, which another paper relates to named entity recognition through a model's "knowledge or lack thereof regarding specific entities." Outside these construct links, one paper claims a causal relationship from named entity recognition to Hallucination, another reports it correlates with Text summarization, and one relates it to Synthetic recall.

## Sources

**[Layer Swapping for Zero-Shot Cross-Lingual Transfer in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7f9a44cb707ede42a659ad85d940dd55-Paper-Conference.pdf)**
> The observable task of identifying and categorizing named entities (like people, organizations, or locations) in text.

**[SNS-Bench: Defining, Building, and Assessing Capabilities of Large Language Models in Social Networking Services](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guo25o/guo25o.pdf) (as "Named entity extraction")**
> Identifying and extracting named entities such as people, places, or organizations from social media notes.

**[Plutus: Benchmarking Large Language Models in Low-Resource Greek Finance](https://aclanthology.org/2025.emnlp-main.1535.pdf) (as "Numeric named entity recognition")**
> The task of identifying and classifying numerical expressions in text into predefined categories like monetary, percentage, temporal, and quantity.

**[Plutus: Benchmarking Large Language Models in Low-Resource Greek Finance](https://aclanthology.org/2025.emnlp-main.1535.pdf) (as "Textual named entity recognition")**
> Detecting and categorizing named entities such as persons, locations, and organizations in Greek financial texts, particularly in complex linguistic expressions.

**[LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Legal named-entity recognition")**
> Extracting all named entities from a legal text and determining their specific entity types.

**[UrbanKGent: A Unified Large Language Model Agent Framework for Urban Knowledge Graph Construction](https://proceedings.neurips.cc/paper_files/paper/2024/file/decd42d78c42cea59c95c7c3d40d5e0f-Paper-Conference.pdf) (as "Entity recognition")**
> Identifying relevant urban entities in text before relation extraction.

**[PICLe: Pseudo-annotations for In-Context Learning in Low-Resource Named Entity Detection](https://aclanthology.org/2025.naacl-long.518.pdf) (as "Named entity detection")**
> The observable task of identifying and extracting all mentions of a specific type of entity (e.g., chemicals, genes, diseases) from a given text.

## Relationships

### Named entity recognition →
- **CoNLL-2003** (measurements) — *measured_by*
  > For Named Entity Recognition (NER), we use English CoNLL03 (Tjong Kim Sang, 2002) as train/dev data (Section 4.1)
  - [Constrained Decoding for Cross-lingual Label Projection](https://proceedings.iclr.cc/paper_files/paper/2024/file/67390075fe466276797f489115582cdc-Paper-Conference.pdf)
- **CrossNER** (measurements) — *measured_by*
  > We evaluate our framework on two widely used benchmarks CrossNER (Liu et al., 2021) and MIT (Ushio and Camacho-Collados, 2021), which contain datasets from seven domains (AI, Literature, Music, Politics, Science, Movie, and Restaurant) in total. (Section 4.1)
  - [Selecting and Merging: Towards Adaptable and Scalable Named Entity Recognition with Large Language Models](https://aclanthology.org/2025.acl-long.487.pdf)
- **Activation patching** (measurements) — *measured_by*
  > "To do the analysis, we perform activation patching (Geiger et al., 2020; Vig et al., 2020; Meng et al., 2022a) on the residual streams and attention heads’ outputs"
  - [Do I Know This Entity? Knowledge Awareness and Hallucinations in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1c44e46358e0fb94dc94ec495a7fb1a-Paper-Conference.pdf)
- **WikiAnn** (measurements) — *measured_by*
  > in WikiAnn (Pan et al., 2017) named entity recognition (NER) dataset, where all ST languages other than Chinese (Mandarin) amount to 131K name mentions
  - [A Survey of NLP Progress in Sino-Tibetan Low-Resource Languages](https://aclanthology.org/2025.naacl-long.396.pdf)
- **OntoNotes** (measurements) — *measured_by*
  > To demonstrate the effectiveness of our method, we evaluate it on five NER datasets... These datasets include... OntoNotes (Weischedel et al., 2013) for web text from various sources.
  - [LLMs are Better Than You Think: Label-Guided In-Context Learning for Named Entity Recognition](https://aclanthology.org/2025.emnlp-main.1441.pdf)
- **Plutus-ben** (measurements) — *measured_by*
  > “Plutus-ben addresses six core tasks: numeric/textual named entity recognition, question answering, extractive summarization, abstractive summarization, and topic classification.”
  - [Plutus: Benchmarking Large Language Models in Low-Resource Greek Finance](https://aclanthology.org/2025.emnlp-main.1535.pdf)

### Associated with
- **Understanding** (constructs)
  > Tasks at the Understanding level examine the ability to comprehend and interpret facts, entities, concepts, and relationships in legal texts... We construct five tasks at this level: ...Named-entity Recognition (2-5). (Section C.3.2)
  - [LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Text summarization** (behaviors tasks)
  > It is commonly accepted that the summarization task, at least in the news domain, requires NER skills to be performed effectively.
  - [Statistical Deficiency for Task Inclusion Estimation](https://aclanthology.org/2025.acl-long.18.pdf)
- **Information retrieval** (behaviors tasks)
  > Information Retrieval. Effective search functionality is essential in SNS. Models should interpret query intent and retrieve relevant information from large datasets, delivering the most accurate results. Tasks: (3) Note-NER. Extracts named entities from note content.
  - [SNS-Bench: Defining, Building, and Assessing Capabilities of Large Language Models in Social Networking Services](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guo25o/guo25o.pdf)
