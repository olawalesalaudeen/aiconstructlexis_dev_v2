# ACE05
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** ACE  

## State of the Field

**What it is.** Most papers treat ACE05, or ACE, as a news-domain benchmark for structured information extraction, especially sentence-level event extraction, with annotated news documents. Some definitions broaden that framing to a benchmark that includes named entity recognition, relation extraction, and event extraction, while another description presents ACE as a multiple-choice computational-thinking assessment aimed at Analyzing, Evaluating, and Creating, so the label is not used uniformly across papers.

**What it is claimed to measure.** Papers use it to measure one construct and three behavioral indicators. The behavioral indicators named in those links are Event detection, Multiple-choice question answering, and Named entity recognition, and one paper also uses it, alongside other datasets, to measure Generalization. The reported measurement claims therefore span several targets rather than centering on a single measurement claim, although the definitions most often describe the benchmark around event and information extraction.

**Space of uses.** Papers commonly use it in multi-benchmark evaluations rather than on its own. It appears alongside other information-extraction and event-detection benchmarks, including CASIE and PHEE and datasets from the epidemiology and biomedical domains, and one study explicitly calls it "the most widely used benchmark dataset for SEE," while others place it within broader benchmark suites.

## Sources

**[Soft Syntactic Reinforcement for Neural Event Extraction](https://aclanthology.org/2025.naacl-long.479.pdf)**
> Benchmark dataset for information extraction that includes named entity recognition, relation extraction, and event extraction tasks over news text.

**[DiCoRe: Enhancing Zero-shot Event Detection via Divergent-Convergent LLM Reasoning](https://aclanthology.org/2025.emnlp-main.1038.pdf) (as "ACE")**
> Automatic Content Extraction (ACE) dataset for event detection in news texts, containing 33 event types and widely used for structured information extraction evaluation.

## Relationships

### → ACE05
- **Event detection** (behaviors tasks) — *measured_by*
  > We benchmark SNARE on ED datasets from three domains: ACE (Doddington et al., 2004) (news), SPEED (Parekh et al., 2024c) (epidemiology), and GENIA2011 (Kim et al., 2011) (biomedical). (Section 1)
  - [SNaRe: Domain-aware Data Generation for Low-Resource Event Detection](https://aclanthology.org/2025.emnlp-main.1039.pdf)
