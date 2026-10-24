# Semantic consistency
**Type:** Construct  
**Referenced in:** 18 papers  
**Also known as:** Visual-semantic consistency  

## State of the Field

**Definition agreement:** Conflicting. A sizeable group of papers defines semantic consistency as output invariance or non-contradiction under semantically equivalent inputs or perturbations, but several others define it as cross-modal representation alignment, preservation of meaning in a rewritten prompt, stability across repeated generations for one prompt, or coherence between parts of a single response. These apply the construct to different objects and comparisons, so papers using these definitions would often not be studying the same thing.

**Space of definitions.** Across papers, the prevailing usage treats semantic consistency as preservation of the same underlying meaning when inputs vary but semantics do not: authors describe consistent answers under translation or rotation of symbolic programs, the same meaning and correctness across question rephrasings, non-contradictory outputs for prompts with similar or equivalent semantics, and stable meaning across semantically equivalent inputs. Smaller lines of work define it instead as stable meaning across multiple generations for the same prompt, preservation of a refined prompt's original meaning and intent without distortion or narrowing, or coherent alignment between different parts of one response, especially rationale and answer. A separate multimodal framing uses it for representation-level alignment, including visual-semantic consistency and preservation of meaning across text, fusion, and visible modalities.

**Space of facets.** Papers organize the term by what is expected to stay invariant. For representations, they use labels such as visual-semantic consistency and semantic structural consistency between fusion and visible modalities, and one paper explicitly casts the construct as robustness of semantic understanding under semantic-preserving perturbations. For language generation, the same name is used for agreement across paraphrased or equivalent prompts, stability across repeated samples from one prompt, and alignment between rationale and answer; in prompt rewriting, inconsistency is illustrated by refined prompts that lose context or overly narrow the focus.

**Space of measurement.** In recorded links, semantic consistency is connected to 1 measurement instrument and 2 behavioral indicators. The only linked instrument is the Alpaca instruction dataset, a dataset-based benchmark built from semantically equivalent question pairs by rephrasing sampled questions; other papers operationalize the construct with PopQA-TP, cosine similarity between answer embeddings, Semantic Consistency Score (SCS) computed as average pairwise semantic similarity across repeated generations, and perturbation tests that translate or rotate symbolic programs while keeping their semantics unchanged. Most of these operationalizations test whether meaning stays stable across semantically matched inputs or repeated outputs, while some definitions in the papers instead focus on cross-modal representations or prompt rewriting.

**Links.** Recorded links are limited. One paper says semantic consistency is related to informalization, evaluating preservation of original meaning by informalizing candidates and comparing embeddings of the original and informalized texts. One paper claims a causal relationship from semantic consistency to downstream task performance, reporting that increasing it by filtering does not degrade arithmetic reasoning performance, and one paper claims a causal relationship from semantic consistency to uncertainty quantification, describing enhanced semantic consistency together with reduced response uncertainty.

## Sources

**[FineCLIP: Self-distilled Region-based CLIP for Better Fine-grained Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/3122aaa22b2fe83f9cead1a696f65ceb-Paper-Conference.pdf) (as "Visual-semantic consistency")**
> The degree to which the model's visual representations maintain a coherent and meaningful alignment with their corresponding semantic (textual) representations across different levels of granularity.

**[Empowering Visible-Infrared Person Re-Identification with Large Foundation Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d4ee9e805cc90f636c66778225181036-Paper-Conference.pdf)**
> The extent to which representations preserve the same underlying meaning across text, fusion, and visible modalities.

## Relationships

### Semantic consistency →
- **Alpaca instruction dataset** (measurements) — *measured_by*
  > We create semantically equivalent pairs of questions for evaluation by randomly sampling 300 questions from the Alpaca dataset (Taori et al., 2023) — a popular human-preference dataset - and rephrasing them using gpt-4o mini. (Section 6.1)
  - [Waste Not, Want Not; Recycled Gumbel Noise Improves Consistency in Natural Language Generation](https://aclanthology.org/2025.naacl-long.292.pdf)

### Associated with
- **Informalization** (behaviors tasks)
  > semantic consistency evaluates the preservation of the original meaning by informalizing the candidates and computing the similarity between the embeddings of the original and informalized texts. (Abstract)
  - [Autoformalize Mathematical Statements by Symbolic Equivalence and Semantic Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/6034a661584af6c28fd97a6f23e56c0a-Paper-Conference.pdf)
- **Semantic uncertainty** (constructs)
  > “the semantic entropy of the model gradually decreases, reflecting enhanced semantic consistency in the model’s output space and reduced response uncertainty.” (Section 4.2)
  - [Towards Rationale-Answer Alignment of LVLMs via Self-Rationale Calibration](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25am/wu25am.pdf)
