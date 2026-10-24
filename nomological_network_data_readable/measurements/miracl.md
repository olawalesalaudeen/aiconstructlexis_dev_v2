# MIRACL
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across the surveyed definitions, MIRACL is most commonly described as the Multilingual Information Retrieval Across a Continuum of Languages dataset for multilingual retrieval evaluation. Papers describe it as covering 18 languages, with native questions and relevance judgements of retrieved passages; another formulation presents it more generally as a dataset for evaluating retrieval systems across 18 diverse languages.

**What it is claimed to measure.** Papers link MIRACL to one construct and one behavioral indicator. The construct link is Multilingual ability, with MIRACL used to assess multilingual retrieval capability; a separate reported link treats it as measuring Synthetic recall, citing MIRACL among multilingual and cross-lingual IR resources.

**Space of uses.** Papers do not link it to other measurement instruments. In use, MIRACL is positioned both as a main evaluation dataset used alongside BEIR for retrieval assessment, and as a base resource that another benchmark builds on top of, reusing its native-language questions while generating responses with diverse large language models.

## Sources

**[NV-Embed: Improved Techniques for Training LLMs as Generalist Embedding Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4bf73386022473a652a18941e9ea6f8-Paper-Conference.pdf)**
> The Multilingual Information Retrieval Across a Continuum of Languages dataset, used for evaluating retrieval systems across 18 diverse languages.

## Relationships

### → MIRACL
- **Multilingual ability** (constructs) — *measured_by*
  > Our main evaluations are conducted on BEIR (Thakur et al., 2021) and MIRACL (Zhang et al., 2023), to assess the generalization of dense retrievers and multilingual retrieval capability. (Section 4.5).
  - [DRAMA: Diverse Augmentation from Large Language Models to Smaller Dense Retrievers](https://aclanthology.org/2025.acl-long.1457.pdf)
- **Information retrieval** (behaviors tasks) — *measured_by*
  > Recent efforts include the development of multilingual and cross-lingual IR resources, such as Mr. TyDi (Zhang et al., 2021), MIRACL (Zhang et al., 2023) and CIRAL (Adeyemi et al., 2024)... (Section 4.3)
  - [Charting the Landscape of African NLP: Mapping Progress and Shaping the Road Ahead](https://aclanthology.org/2025.emnlp-main.1414.pdf)
