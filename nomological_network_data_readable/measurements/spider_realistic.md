# Spider-Realistic
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** SPIDER-Realistic  

## State of the Field

**What it is.** Across the papers, Spider-Realistic is most commonly described as a Spider-derived benchmark or variant that removes explicitly mentioned column names from questions. The descriptions converge on this format, with one paper specifying that the removals are made in the SPIDER development set, and they frame the change as simulating more realistic question settings or better reflecting real-world scenarios.

**What it is claimed to measure.** Papers use Spider-Realistic to measure one behavioral indicator, Text-to-SQL, and they do not link it to any constructs. The reported measurement claim centers on Text-to-SQL rather than multiple named targets: one paper on NL2SQL evaluation lists SPIDER, SPIDER-DK, and Spider-Realistic as datasets adopted for the task.

**Space of uses.** Papers do not link it to other instruments, and instead place it alongside other Spider-derived evaluations. One description evaluates on Spider-DK, Spider-Realistic, and Spider-Syn using the same demonstration pool, while another paper positions SPIDER, SPIDER-DK, and Spider-Realistic together in evaluation for NL2SQL.

## Sources

**[ROUTE: Robust Multitask Tuning and Collaboration for Text-to-SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/212b143b5a5d6b88feb0fb1441b9756e-Paper-Conference.pdf) (as "SPIDER-Realistic")**
> A SPIDER-derived benchmark that removes explicit column-name mentions to simulate more realistic question settings.

**[DCG-SQL: Enhancing In-Context Learning for Text-to-SQL with Deep Contextual Schema Link Graph](https://aclanthology.org/2025.acl-long.748.pdf)**
> A variant of the Spider benchmark where explicitly mentioned column names are removed from the questions to better reflect real-world scenarios.

## Relationships

### → Spider-Realistic
- **Text-to-SQL** (behaviors tasks) — *measured_by*
  > In this paper, we evaluate TNT on the task of NL2SQL. We adopt three prevalant datasets, SPIDER (Yu et al., 2018), SPIDER-DK (Gan et al., 2021a), and SPIDER-Realistic (Deng et al., 2021) (Section 6.1).
  - [Bridging the Semantic Gap Between Text and Table: A Case Study on NL2SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/283f1354f1de1c53a14afe0a6740e889-Paper-Conference.pdf)
