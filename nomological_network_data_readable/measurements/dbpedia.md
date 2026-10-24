# DBPedia
**Type:** Measurement  
**Referenced in:** 12 papers  
**Also known as:** DBpedia, Dbpedia, DB Pedia  

## State of the Field

**What it is.** Across the papers, DBPedia is most commonly described as a Wikipedia-derived benchmark for topic or ontology classification. The prevailing description is a 14-way or 14-class setup, sometimes phrased as classifying articles into 14 non-overlapping classes or ontology types, and some authors describe it more generally as "multi-class classification of Wikipedia articles" for text categorization. A smaller line of work describes it differently, as Wikipedia articles organized in a three-layer taxonomy tree with 9/70/219 classes for hierarchical text classification.

**What it is claimed to measure.** Papers link DBPedia to 2 behavioral indicators and 2 constructs. The prevailing usage is to measure text classification, with several papers introducing it as a classification task or dataset; a smaller line of work reports it as measuring hierarchical text classification. At the construct level, papers also use it to measure in-context learning and prompt sensitivity, so the claims are centered on classification and also include those two constructs.

**Space of uses.** No measurement instrument is linked to DBPedia. In practice, papers usually place it inside multi-dataset evaluation suites, alongside AGNews, SST2, Yelp Polarity, TREC, and SST-5. The snippets typically present it as one benchmark among several, for example in lists of datasets for text classification or broader evaluation collections.

## Sources

**[Gen-Z: Generative Zero-Shot Text Classification with Contextualized Label Descriptions](https://proceedings.iclr.cc/paper_files/paper/2024/file/af7cc9e2366b8f8837a6ef339810277a-Paper-Conference.pdf)**
> A benchmark dataset for 14-way topic classification derived from Wikipedia, used to evaluate a model's ability to categorize text into one of fourteen ontological classes.

**[In-Context Pretraining: Language Modeling Beyond Document Boundaries](https://proceedings.iclr.cc/paper_files/paper/2024/file/a1fe2365abdb691332537990a6385909-Paper-Conference.pdf) (as "Dbpedia")**
> The DBpedia ontology classification dataset, a benchmark for topic classification.

**[IDEAL: Influence-Driven Selective Annotations Empower In-Context Learners in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/a7f90da65dd41d699d00e95700e6fa1e-Paper-Conference.pdf) (as "DBpedia")**
> A dataset for ontology classification derived from Wikipedia, used to evaluate text categorization.

**[Comparing Specialised Small and General Large Language Models on Text Classification: 100 Labelled Samples to Achieve Break-Even Performance](https://aclanthology.org/2025.emnlp-main.9.pdf) (as "DB Pedia")**
> A topic classification dataset derived from Wikipedia, with 14 classes corresponding to DBpedia ontology types.

## Relationships

### → DBPedia
- **Text classification** (behaviors tasks) — *measured_by*
  > ...and 14-way topic classification DBPedia (Zhang et al., 2015) datasets for classification tasks. (Section 5.1)
  - [Privacy-Preserving In-Context Learning with Differentially Private Few-Shot Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/8cb564df771e9eacbfe9d72bd46a24a9-Paper-Conference.pdf)
- **Hierarchical text classification** (behaviors tasks) — *measured_by*
  > We conduct experiments on the following three public datasets: ... 2) DBpedia consists of Wikipedia articles with a three-layer taxonomy tree...
  - [Ensembling Prompting Strategies for Zero-Shot Hierarchical Text Classification with Large Language Models](https://aclanthology.org/2025.emnlp-main.918.pdf)
