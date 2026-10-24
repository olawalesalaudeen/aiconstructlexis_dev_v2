# RedPajama
**Type:** Measurement  
**Referenced in:** 12 papers  
**Also known as:** REDPAJAMA, Redpajama  

## State of the Field

**What it is.** Across papers, the prevailing framing is a pretraining or training corpus of web text. Definitions describe it as a multi-domain pretraining corpus used to sample general web data for language modeling perplexity, as an open-source project creating a large, high-quality dataset for training language models, and as a pre-training dataset derived from CommonCrawl; one paper specifically uses the CommonCrawl split. Another paper uses it as a calibration dataset, describing it as a large collection of web text meant to represent typical input distributions.

**What it is claimed to measure.** Papers link RedPajama to one construct and no behavioral indicators. The only reported measurement claim is that it measures Editing locality: in model editing work, locality data is described as the irrelevant data of the editing process. The measurement claims therefore center on a single construct rather than being spread across many targets.

**Space of uses.** Papers use RedPajama in several operational roles, and no other measurement instrument is linked to it. It appears as evaluation data for language modeling perplexity on general web data, as part of averaged throughput simulations alongside SlimPajama and PG19, as a source dataset and baseline in data selection work, and as calibration data for post-training quantization; one paper also compares a method with the Redpajama data cleaning pipeline.

## Sources

**[Scaling Retrieval-Based Language Models with a Trillion-Token Datastore](https://proceedings.neurips.cc/paper_files/paper/2024/file/a5d8aba27dfef4e849e8cb03fb87a954-Paper-Conference.pdf) (as "REDPAJAMA")**
> A multi-domain pretraining corpus from which samples are used to evaluate language modeling perplexity on general web data.

**[Relaxed Recursive Transformers: Effective Parameter Sharing with Layer-wise LoRA](https://proceedings.iclr.cc/paper_files/paper/2025/file/54d6a55225cebbdc16fbb0e45c5bdf2b-Paper-Conference.pdf)**
> An open-source project to create a large, high-quality dataset for training language models, used here for simulating generation throughput.

**[Data Selection via Optimal Control for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/9ad4891facabf17aa11580686bacfe4e-Paper-Conference.pdf) (as "Redpajama")**
> A pre-training dataset derived from the CommonCrawl corpus, used as a source and baseline for data selection.

## Relationships

### → RedPajama
- **Autoregressive language modeling** (behaviors tasks) — *measured_by*
  > We train all models using the Llama2 recipe (Touvron et al., 2023) (with ALiBi instead of RoPE) and the RedPajama (Computer, 2023) dataset in JAX... (Sec. 5.5)
  - [Theory, Analysis, and Best Practices for Sigmoid Self-Attention](https://proceedings.iclr.cc/paper_files/paper/2025/file/a43b459e9fab3a703148ba0c83b8a442-Paper-Conference.pdf)
- **Editing locality** (constructs) — *measured_by*
  > measure retention of pretraining data (xloc) from the base model: RedPajama
  - [WISE: Rethinking the Knowledge Memory for Lifelong Model Editing of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/60960ad78868fce5c165295fbd895060-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks) — *measured_by*
  > We evaluate language modeling perplexity on data from two domains: (1) general web data sampled from REDPAJAMA (Computer, 2023); (2) scientific paper data sampled from S2ORC (Lo et al., 2020). (Section 4.1)
  - [Scaling Retrieval-Based Language Models with a Trillion-Token Datastore](https://proceedings.neurips.cc/paper_files/paper/2024/file/a5d8aba27dfef4e849e8cb03fb87a954-Paper-Conference.pdf)
