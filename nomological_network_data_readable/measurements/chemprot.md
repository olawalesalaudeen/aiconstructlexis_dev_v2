# ChemProt
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across papers, the prevailing description is a biomedical labeled dataset for chemical-protein interaction tasks in scientific literature. Most definitions frame it as a relation extraction or classification dataset, with one paper specifying that it features five relation classes and describing the up regulator and down regulator classes as mutually exclusive. A smaller line of work describes it instead as a named entity detection resource with annotations for chemical compounds and gene or protein-related objects from article paragraphs, and derives the subsets ChemProt-Chem and ChemProt-Gene.

**What it is claimed to measure.** Papers link ChemProt to 1 construct and 2 behavioral indicators. The construct-level use is Adaptability, where it is included among labeled downstream tasks in biomedicine. At the behavioral level, papers use it to measure Relation extraction and Text classification, so the recorded measurement claims cover more than one task framing.

**Space of uses.** Papers often use ChemProt as one item in broader biomedical evaluation suites or downstream task collections. It appears alongside RCT, and in one biomedical evaluation setup also alongside PubMedQA, MQP, and USMLE; another paper includes it among classification datasets, while the named entity detection work constructs ChemProt-Chem and ChemProt-Gene from it. No other measurement instrument is linked to it in the recorded relationships.

## Sources

**[Adapting Large Language Models via Reading Comprehension](https://proceedings.iclr.cc/paper_files/paper/2024/file/d51cd79a85833b022841f7a2383b32d3-Paper-Conference.pdf)**
> A labeled biomedical relation/classification dataset used as one of the downstream domain adaptation tasks.

## Relationships

### → ChemProt
- **Relation extraction** (behaviors tasks) — *measured_by*
  > ChemProt is a chemical-protein dataset featuring five relation classes (Taboureau et al., 2010). (Section 5.1)
  - [Entangled Relations: Leveraging NLI and Meta-analysis to Enhance Biomedical Relation Extraction](https://aclanthology.org/2025.naacl-long.165.pdf)
