# 20 Newsgroups
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** 20NG, 20NewsGroups  

## State of the Field

**What it is.** Across the papers, 20 Newsgroups is most commonly treated as a dataset of newsgroup posts for text or document classification. Definitions describe it as a document understanding or text classification dataset, and one definition specifies that it contains approximately 20,000 documents partitioned across 20 different newsgroups. A smaller usage narrows it to the computer science categories for an in-domain news generation task, with the other categories used as an out-of-domain set.

**What it is claimed to measure.** Papers use 20 Newsgroups to measure 2 constructs and 1 behavioral indicator. The linked constructs are natural language understanding and robustness, and the linked behavioral indicator is text classification; one paper also describes it as a proxy dataset for a topic classification task. The measurement claims are spread across this small set of targets rather than concentrated on a single construct.

**Space of uses.** Papers usually position it as one benchmark within a larger evaluation suite rather than as a standalone instrument. No other measurement instrument is directly linked to it, but papers show it used alongside BANKING77 in federated fine-tuning comparisons, alongside RTE, COLA, and QNLI in an NLU benchmark set, and as one of several proxy datasets in robustness experiments.

## Sources

**[Shh, don't say that! Domain Certification in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/27befed4547edcb4bdeacef9472cadee-Paper-Conference.pdf) (as "20NG")**
> The 20 Newsgroups dataset, used here to define the in-domain task of computer science news generation and the out-of-domain set from its other categories.

**[Towards Robust and Efficient Federated Low-Rank Adaptation with Heterogeneous Clients](https://aclanthology.org/2025.acl-long.19.pdf)**
> A dataset for text classification based on newsgroup posts, used to evaluate model performance and robustness in federated learning scenarios.

**[Forward Knows Efficient Backward Path: Saliency-Guided Memory-Efficient Fine-tuning of Large Language Models](https://aclanthology.org/2025.acl-long.459.pdf) (as "20NewsGroups")**
> A dataset for document understanding and classification, consisting of approximately 20,000 newsgroup documents partitioned across 20 different newsgroups.

## Relationships

### → 20 Newsgroups
- **Text classification** (behaviors tasks) — *measured_by*
  > When conducting domain shift poisoning pre-training, we utilize the IMDB (Maas et al., 2011), Twitter (Founta et al., 2018), and 20 Newsgroups (Lang, 1995) as the proxy dataset for sentiment analysis, toxicity detection, and topic classification task, respectively (Section 5.1).
  - [Certifying Language Model Robustness with Fuzzed Randomized Smoothing: An Efficient Defense Against Backdoor Attacks](https://proceedings.iclr.cc/paper_files/paper/2025/file/f53fd88a4340063ecd258c0ae9948b40-Paper-Conference.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > The experiments involved 4 NLU benchmarks: RTE (Wang et al., 2019), COLA (Wang et al., 2019), 20NG (Lang, 1995) and QNLI (Wang et al., 2019) (Section 4).
  - [Federated Residual Low-Rank Adaption of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/906c860f1b7515a8ffec02dcdac74048-Paper-Conference.pdf)
