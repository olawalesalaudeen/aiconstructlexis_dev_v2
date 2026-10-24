# TREC
**Type:** Measurement  
**Referenced in:** 35 papers  
**Also known as:** Trec  

## State of the Field

**What it is.** Across the definitions, TREC is most commonly described as a benchmark or dataset for question classification, usually a 6-way task from the Text REtrieval Conference. Several papers specify six coarse-grained categories, often exemplified as Abbreviation, Entity, Description, Human, Location, and Numeric, while some describe it more broadly as a general NLU or text classification dataset, and one definition also mentions information retrieval tasks. A smaller strand refers to Trec as a dataset from the LongBench suite for few-shot evaluation, and one paper describes it as a 6-class, 50-subclass question-answering task with 500 test samples.

**What it is claimed to measure.** Papers link TREC to 1 behavioral indicator and 2 constructs. The prevailing use is to measure Text classification, typically through 6-way question classification, while a smaller line of work uses it to measure Prompt sensitivity and Consistency through predicted class distributions over prompt rephrasings. Overall, the linked claims mostly center on text classification, with the construct-level uses appearing in prompt-rephrasing evaluation.

**Space of uses.** Papers often use TREC within broader evaluation suites, listing it with datasets such as AG News, Subj, MR, DBPedia, and CB for text classification or general NLU comparisons. Some long-context and few-shot work also uses a LongBench Trec variant as an additional dataset, paired in one case with SAMSum. No measurement instrument is linked to it.

## Sources

**[Connecting Large Language Models with Evolutionary Algorithms Yields Powerful Prompt Optimizers](https://proceedings.iclr.cc/paper_files/paper/2024/file/9156b0f6dfa9bbd18c79cc459ef5d61c-Paper-Conference.pdf)**
> A question classification dataset from the Text REtrieval Conference (TREC), where the task is to classify questions into six types.

**[DP-OPT: Make Large Language Model Your Privacy-Preserving Prompt Engineer](https://proceedings.iclr.cc/paper_files/paper/2024/file/fffe5a7804c40465ef2432386850c2c7-Paper-Conference.pdf) (as "Trec")**
> A dataset from the LongBench suite used to evaluate few-shot learning performance.

## Relationships

### → TREC
- **Text classification** (behaviors tasks) — *measured_by*
  > We study 4-way news classification AGNews (Zhang et al., 2015), 6-way question classification TREC (Voorhees & Tice, 2000)... (Section 5.1)
  - [Privacy-Preserving In-Context Learning with Differentially Private Few-Shot Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/8cb564df771e9eacbfe9d72bd46a24a9-Paper-Conference.pdf)
- **Prompt sensitivity** (constructs) — *measured_by*
  > “Figure 2: Predicted class distributions over prompt rephrasings pτ across three samples of the same class Person (TREC dataset, Section 4).”
  - [What Did I Do Wrong? Quantifying LLMs' Sensitivity and Consistency to Prompt Engineering](https://aclanthology.org/2025.naacl-long.73.pdf)
