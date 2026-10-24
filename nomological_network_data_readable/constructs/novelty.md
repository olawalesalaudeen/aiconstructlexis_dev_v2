# Novelty
**Type:** Construct  
**Referenced in:** 14 papers  

## State of the Field

**Definition agreement:** Consensus. Most papers define novelty as generated content being original, fresh, or non-redundant relative to existing literature, ideas, or retrieved material, and the remaining paper uses the same core idea for protein structures as dissimilarity from known database entries. These definitions agree on novelty as newness of generated outputs compared with what already exists, with differences mainly in domain and wording.

**Space of definitions.** Most commonly, papers use novelty to mean that generated content, hypotheses, or ideas contain fresh, non-redundant information relative to existing literature, retrieved material, or other generated outputs. In this usage, novelty is tied to whether a proposal is original rather than a restatement of existing ideas, or whether one hypothesis adds meaningfully new information beyond another. A narrower usage defines novelty as the dissimilarity of generated protein structures from known database structures, with greater novelty corresponding to lower similarity to known structures.

**Space of facets.** Where papers place novelty in a broader scheme, they usually treat it as one evaluation dimension among others rather than divide it into named subtypes. It appears alongside utility, clarity, and plausibility in hypothesis evaluation, alongside feasibility in research proposals and future research ideas, and alongside relevance, breadth, and depth in machine writing; one paper also frames novelty against redundancy. Across these uses, the same label covers both originality of generated ideas or text and structural dissimilarity in protein generation.

**Space of measurement.** The recorded measurement space links novelty to 2 measurement instruments, Human evaluation and LLM-as-a-judge, and to no behavioral indicators. Human evaluation is the more common linked instrument: papers use it to assess novelty of generated content and future research ideas, while a smaller line of work uses LLM-based metrics to score novelty. One paper also makes the operationalization explicit by comparing generated protein structures to known PDB structures with TMScore (pdb-TM), where lower values indicate greater novelty. These operationalizations mostly mirror the two main definitions, judgment of fresh non-redundant content on one side and dissimilarity from known structures on the other.

**Links.** No causal, correlational, or generic related links are recorded for novelty. The only recorded relationships are that novelty is measured by Human evaluation and by LLM-as-a-judge.

## Sources

**[DPLM-2: A Multimodal Diffusion Protein Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/57c30b677add9aa78e1745f0643104d0-Paper-Conference.pdf)**
> The degree to which generated protein structures are dissimilar from known, existing structures in protein databases.

## Relationships

### Novelty →
- **Human evaluation** (measurements) — *measured_by*
  > we also assess the intrinsic quality of the generated content. Specifically, we focus on two key dimensions: novelty and feasibility...human evaluation includes results on 40 of them. (Section 10, Table 4)
  - [ResearchTown: Simulator of Human Research Community](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25i/yu25i.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > In addition to assessing the effectiveness of hypotheses in downstream task usage, we also evaluate their helpfulness (Liu et al., 2024) and novelty (Liu et al., 2024; Si et al., 2024) through LLM-based metrics. (Section 4.2)
  - [On the Role of Model Prior in Real-World Inductive Reasoning](https://aclanthology.org/2025.emnlp-main.534.pdf)
