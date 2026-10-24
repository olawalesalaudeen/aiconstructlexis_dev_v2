# WebNLG
**Type:** Measurement  
**Referenced in:** 10 papers  
**Also known as:** Web NLG, WebNLG17, WebNLG-Test  

## State of the Field

**What it is.** Across papers, WebNLG is most commonly described as a dataset or benchmark for generating natural language from structured inputs, especially RDF triples, DBpedia categories, and knowledge graph triplets. Several definitions frame it as data-to-text, struct-to-text, graph-to-text, or knowledge-graph-to-natural-language, and one definition specifies 22,000 examples across 14 categories; a smaller number of descriptions instead call it a table-to-text dataset or, once, a text-to-data dataset. Some papers also refer to specific versions or subsets, including WebNLG17 as the 2017 graph-to-text setting and WebNLG-Test as the publicly released test set of manually aligned knowledge graphs and English textual descriptions.

**What it is claimed to measure.** Papers link WebNLG to 2 behavioral indicators and no constructs. The prevailing usage is to measure Data-to-text generation, with papers explicitly grouping it under E2E and WebNLG (data-to-text generation); some work uses it more broadly to measure Text generation. The measurement claims therefore concentrate on behavioral indicators rather than on constructs.

**Space of uses.** Papers often use WebNLG as one benchmark within broader generation suites. It is frequently paired with E2E, and some evaluations also place it alongside CommonGen and an Adidas product description dataset; one graph-to-text setup evaluates WebNLG17 together with WebNLG20 and DART. One paper also uses a Web NLG configuration for domain adaptation under distribution shift, filtering the training data to infrastructure descriptions while keeping person descriptions in validation and test.

**Concerns raised.** The concern explicitly raised in these papers is possible pretraining exposure: one paper says the publicly released WebNLG-Test may have been partially seen by many LLMs during pretraining.

## Sources

**[Mixture of LoRA Experts](https://proceedings.iclr.cc/paper_files/paper/2024/file/ce806d8b4bf38cd92d483e5a0490d983-Paper-Conference.pdf)**
> A text-to-data dataset with 22,000 examples across 14 categories, used to evaluate natural language generation from structured data.

**[Logits are All We Need to Adapt Closed Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hiranandani25a/hiranandani25a.pdf) (as "Web NLG")**
> Natural language generation dataset involving conversion of RDF triples into fluent text, used to evaluate domain adaptation under distribution shift.

**[Evaluating and Improving Graph to Text Generation with Large Language Models](https://aclanthology.org/2025.naacl-long.513.pdf) (as "WebNLG17")**
> A graph-to-text benchmark used to evaluate generation from knowledge graph triplets in the 2017 WebNLG setting.

**[MuCAL: Contrastive Alignment for Preference-Driven KG-to-Text Generation](https://aclanthology.org/2025.emnlp-main.720.pdf) (as "WebNLG-Test")**
> A publicly available test set from the WebNLG challenge, consisting of manually aligned knowledge graphs and their corresponding English textual descriptions.

## Relationships

### → WebNLG
- **Data-to-text generation** (behaviors tasks) — *measured_by*
  > ...we consider 7 datasets corresponding to commonly-studied natural language generation (NLG) tasks [51]: ... E2E and WebNLG (data-to-text generation)... (Section 5.1)
  - [Smoothie: Label Free Language Model Routing](https://proceedings.neurips.cc/paper_files/paper/2024/file/e6b57a990462df5afa58d64ce2709db9-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > We utilize the following datasets for our Natural Language Generation (NLG) task: ... WebNLG (Gardent et al., 2017) is a text-to-data dataset... (Section 3.1)
  - [NOLA: Compressing LoRA using Linear Combination of Random Basis](https://proceedings.iclr.cc/paper_files/paper/2024/file/66b99dbf9ed172abac5cb5ccfc82d1e2-Paper-Conference.pdf)
