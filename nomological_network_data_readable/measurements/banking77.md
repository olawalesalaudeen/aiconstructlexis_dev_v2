# BANKING77
**Type:** Measurement  
**Referenced in:** 13 papers  
**Also known as:** BANKING, Banking-77, Banking77, Bank77  

## State of the Field

**What it is.** Across definitions, BANKING77 is most commonly treated as a banking-domain intent classification benchmark containing customer or online banking queries. Most descriptions specify 77 intent classes or categories, and papers variously frame it as fine-grained intent detection, customer service intent classification, or a benchmark for domain-specific language understanding. Papers refer to it as BANKING, Banking-77, or Banking77; one paper instead uses Bank77 and describes it as an intent discovery dataset for finding unknown intents in user utterances.

**What it is claimed to measure.** Papers use BANKING77 to measure two behavioral indicators and two constructs. The prevailing claim is that it measures intent classification, sometimes worded in the papers as intent detection, and it is also used for text classification. A smaller line of work uses it to measure robustness, in one case under various data heterogeneity settings, and reasoning, in a study evaluating reasoning accuracy across prompt engineering and demonstration selection techniques, so the linked measurement claims are spread across more than one target.

**Space of uses.** Most papers position BANKING77 as an evaluation dataset, using it for fine-tuning and benchmark comparison in settings such as federated heterogeneity, long-context classification, and in-context learning. In the snippets it appears alongside benchmarks such as CLINC or CLINC150, 20 Newsgroups, Patent, and Imdb, and one paper groups Banking77 with GoEmotion as challenging ICL benchmarks with diverse classes and long inputs. No paper links it to another measurement instrument.

## Sources

**[Towards Robust and Efficient Federated Low-Rank Adaptation with Heterogeneous Clients](https://aclanthology.org/2025.acl-long.19.pdf)**
> A dataset for intent classification, used in this paper to evaluate model performance under various simulated data heterogeneity settings in a federated learning context.

**[TestNUC: Enhancing Test-Time Computing Approaches and Scaling through Neighboring Unlabeled Data Consistency](https://aclanthology.org/2025.acl-long.1486.pdf) (as "BANKING")**
> Intent classification dataset focused on customer banking queries, used to evaluate fine-grained intent detection in real-world domains.

**[Efficient Many-Shot In-Context Learning with Dynamic Block-Sparse Attention](https://aclanthology.org/2025.acl-long.1542.pdf) (as "Banking-77")**
> A customer service intent classification dataset in the banking domain with 77 intent classes, used to evaluate domain-specific language understanding.

**[MAPLE: Many-Shot Adaptive Pseudo-Labeling for In-Context Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25bo/chen25bo.pdf) (as "Banking77")**
> Intent classification dataset in the banking domain with 77 classes, used to evaluate fine-grained classification under in-context learning settings.

**[Co-Evolving LLMs and Embedding Models via Density-Guided Preference Optimization for Text Clustering](https://aclanthology.org/2025.emnlp-main.241.pdf) (as "Bank77")**
> A dataset for intent discovery, aiming to identify unknown intents within user utterances.

## Relationships

### → BANKING77
- **Intent classification** (behaviors tasks) — *measured_by*
  > We report top-1 accuracy for finetuning classification tasks on the ... 77-class Banking-77 (B77) (Casanueva et al., 2020).
  - [Tight Clusters Make Specialized Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/854a9ab0f323b841955e70ca383b27d1-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > This section presents a comprehensive evaluation of the reasoning accuracy of both closed-source and open-source LLMs using a range of prompt engineering and demonstration selection techniques across four benchmark datasets: BANKING77, CLINC150, HWU64, and LIU54. (Section 4.4)
  - [Demonstration Selection for In-Context Learning via Reinforcement Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25dp/wang25dp.pdf)
- **Text classification** (behaviors tasks) — *measured_by*
  > Text Classification: Requires models to capture the overall semantics of a single text input. We use Patent (Sharma et al., 2019), Imdb and Banking77 (both from MTEB (Muennighoff et al., 2023)). (Section 4.1)
  - [EMO: Embedding Model Distillation via Intra-Model Relation and Optimal Transport Alignments](https://aclanthology.org/2025.emnlp-main.385.pdf)
