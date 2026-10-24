# Databricks Dolly-15k
**Type:** Measurement  
**Referenced in:** 11 papers  
**Also known as:** Databricks-Dolly-15k, Dolly, Dolly-15k, Databricks-dolly 15k  

## State of the Field

**What it is.** Across papers, the prevailing treatment is as an instruction-following dataset, often described as open-source, human-generated, and used for fine-tuning or evaluation. Definitions variously describe it as a 15k collection of human-written instruction-response pairs, a manually crafted instruction dataset, and a benchmark dataset for federated LLM fine-tuning experiments. A narrower description emphasizes its coverage of categories such as brainstorming, classification, closed QA, generation, information extraction, open QA, and summarization, and one paper uses a 500-sample test split from the dataset.

**What it is claimed to measure.** Papers link it to one construct and two behavioral indicators, so its reported measurement role is spread across a few targets rather than centered on one. It is reported as measuring helpfulness when papers use general-domain Dolly samples to assess whether models retain usefulness after fine-tuning, and as measuring dialogue generation when it is used as the dialogue generation task. A smaller line of work also uses it to measure refusal in an AutoPoison-refusal setting.

**Space of uses.** Papers use it alongside other datasets, including Alpaca for downstream adaptation and benign fine-tuning, XSum and WMT18 for evaluation, BeaverTails for usefulness checks after defensive fine-tuning, and Flan 1 and Flan 2 in federated experiments. Across these settings, it is positioned variously as an evaluation task, a supervised fine-tuning dataset, a test set split, and a benchmark for federated LLM fine-tuning. No measurement instrument is linked to it directly.

## Sources

**[Multi-Draft Speculative Sampling: Canonical Decomposition and Theoretical Limits](https://proceedings.iclr.cc/paper_files/paper/2025/file/04cdf500730af7733a6b13cbbc230206-Paper-Conference.pdf) (as "Databricks-Dolly-15k")**
> An instruction-following dataset used as an evaluation task for decoding experiments.

**[Beyond Interpretability: The Gains of Feature Monosemanticity on Model Robustness](https://proceedings.iclr.cc/paper_files/paper/2025/file/11822e84689e631615199db3b75cd0e4-Paper-Conference.pdf) (as "Dolly")**
> An open-source dataset of human-generated instruction-following records used to fine-tune large language models for instruction following and dialogue generation.

**[Durable Quantization Conditioned Misalignment Attack on Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/376b1b131609e764f687afca832e62b3-Paper-Conference.pdf) (as "Dolly-15k")**
> An instruction-following dataset with records across categories like brainstorming and question answering, used for supervised fine-tuning to evaluate attack durability.

**[pFedGPT: Hierarchically Optimizing LoRA Aggregation Weights for Personalized Federated GPT Models](https://aclanthology.org/2025.emnlp-main.239.pdf) (as "Databricks-dolly 15k")**
> A benchmark dataset used for federated LLM fine-tuning experiments across multiple NLP tasks.

## Relationships

### → Databricks Dolly-15k
- **Dialogue generation** (behaviors tasks) — *measured_by*
  > ...and Dolly (Conover et al., 2023) datasets as the dialogue generation task. (Section 3.3)
  - [Beyond Interpretability: The Gains of Feature Monosemanticity on Model Robustness](https://proceedings.iclr.cc/paper_files/paper/2025/file/11822e84689e631615199db3b75cd0e4-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > to assess whether LLMs retain usefulness after fine-tuning, we select 15k general-domain samples equally from Alpaca (Taori et al., 2023), BeaverTails, and Dolly (Conover et al., 2023). (Section 5.1)
  - [Data to Defense: The Role of Curation in Aligning Large Language Models Against Safety Compromise](https://aclanthology.org/2025.emnlp-main.647.pdf)

### Associated with
- **Refusal** (behaviors tasks)
  > For AutoPoison-refusal, we first generate poisoned datasets by replacing the generation targets in GPT-4-LLM and Databricks-Dolly-15k with two refusal outputs... (Section A.1)
  - [LT-Defense: Searching-free Backdoor Defense via Exploiting the Long-tailed Effect](https://proceedings.neurips.cc/paper_files/paper/2024/file/064f6bcd7d3c72fb187bfca35ba2bfd4-Paper-Conference.pdf)
