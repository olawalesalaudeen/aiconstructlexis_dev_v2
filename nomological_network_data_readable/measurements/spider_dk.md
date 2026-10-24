# Spider-DK
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** SPIDER-DK  

## State of the Field

**What it is.** Across the papers, Spider-DK is most commonly treated as a variant of the Spider benchmark, and one definition describes it as a robust variant. The shared characterization is that it incorporates domain knowledge into the questions and introduces domain knowledge reasoning challenges for correctly generating SQL queries; one paper also places it among datasets derived from Spider.

**What it is claimed to measure.** Papers link Spider-DK to one behavioral indicator, Text-to-SQL, and to no constructs. The only reported measurement claim is that it measures Text-to-SQL: one paper evaluates NL2SQL using SPIDER-DK alongside other datasets, so the reported use is concentrated on that single behavioral indicator rather than spread across multiple constructs.

**Space of uses.** Across the papers, Spider-DK is used alongside other Spider-based evaluations rather than with separate linked instruments. One paper uses it together with Spider and Spider-Realistic as prevalent NL2SQL datasets, and another evaluates it with the same demonstration pool as Spider-Realistic and Spider-Syn, describing these as derived from Spider.

## Sources

**[ROUTE: Robust Multitask Tuning and Collaboration for Text-to-SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/212b143b5a5d6b88feb0fb1441b9756e-Paper-Conference.pdf) (as "SPIDER-DK")**
> A robust variant of the SPIDER benchmark that introduces challenges requiring domain knowledge reasoning to correctly generate the SQL query.

**[DCG-SQL: Enhancing In-Context Learning for Text-to-SQL with Deep Contextual Schema Link Graph](https://aclanthology.org/2025.acl-long.748.pdf)**
> A variant of the Spider benchmark that incorporates domain knowledge into the questions, making the Text-to-SQL task more challenging.

## Relationships

### → Spider-DK
- **Text-to-SQL** (behaviors tasks) — *measured_by*
  > In this paper, we evaluate TNT on the task of NL2SQL. We adopt three prevalant datasets, SPIDER (Yu et al., 2018), SPIDER-DK (Gan et al., 2021a), and SPIDER-Realistic (Deng et al., 2021) (Section 6.1).
  - [Bridging the Semantic Gap Between Text and Table: A Case Study on NL2SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/283f1354f1de1c53a14afe0a6740e889-Paper-Conference.pdf)
