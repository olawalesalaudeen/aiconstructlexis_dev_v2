# SAMSum
**Type:** Measurement  
**Referenced in:** 32 papers  
**Also known as:** SAMsum, SAMSUM, Samsum, SamSum  

## State of the Field

**What it is.** Across the surveyed work, the prevailing description is of a dialogue summarization dataset or benchmark built from chat or messenger-style conversations and paired with human-written, short summaries. Definitions variously call it a dataset of chat transcripts, real-life messenger-like conversations, daily-life messenger conversations, or multi-turn conversations, and several papers frame it specifically as abstractive dialogue summarization. A smaller line of work treats it as a few-shot variant or as part of LongBench, and one description diverges by calling it summarization over news articles and machine-generated summaries rather than dialogue.

**What it is claimed to measure.** Papers use SAMSum to measure one construct and three behavioral indicators. The dominant claim is that it measures text summarization, often described simply as summarization or dialogue summary generation, while a smaller line of work treats it as measuring dialogue summarization. Single papers also report it as measuring question answering and general ability, so the measurement claims are centered on summarization but not entirely uniform.

**Space of uses.** Papers often include SAMSum inside broader evaluation suites, and also use it for fine-tuning and few-shot settings. The only linked instrument is LongBench, with papers describing SAMSum as a LongBench dataset or as SAMSum (few-shot instruction following). Elsewhere it appears in experiments on KV-cache compression, long-context evaluation, low-rank adapter fine-tuning, and privacy-preserving summarization, and some papers add it for further evaluation as a generative summarization task.

## Sources

**[Privacy-Preserving In-Context Learning for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/572cd21bd5dea96b065476b77d21b3c6-Paper-Conference.pdf) (as "SAMsum")**
> Dialogue summarization dataset consisting of chat transcripts and human-written summaries, used to evaluate privacy-preserving summarization.

**[Connecting Large Language Models with Evolutionary Algorithms Yields Powerful Prompt Optimizers](https://proceedings.iclr.cc/paper_files/paper/2024/file/9156b0f6dfa9bbd18c79cc459ef5d61c-Paper-Conference.pdf)**
> A dialogue summarization dataset used to evaluate language generation performance, particularly in summarizing multi-party conversations.

**[SqueezeAttention: 2D Management of KV-Cache in LLM Inference via Layer-wise Optimal Budget](https://proceedings.iclr.cc/paper_files/paper/2025/file/3b0a8df568ec496a717566a7f8158aaa-Paper-Conference.pdf) (as "SAMSUM")**
> A dialogue summarization dataset used as an evaluation set for LLM inference under KV-cache compression.

**[Safety Alignment Should be Made More Than Just a Few Tokens Deep](https://proceedings.iclr.cc/paper_files/paper/2025/file/88be023075a5a3ff3dc3b5d26623fa22-Paper-Conference.pdf) (as "Samsum")**
> A dataset of chat dialogues and their summaries, used for evaluating and fine-tuning models on summarization tasks.

**[Token-Level Density-Based Uncertainty Quantification Methods for Eliciting Truthfulness of Large Language Models](https://aclanthology.org/2025.naacl-long.113.pdf) (as "SamSum")**
> A dialogue summarization benchmark used to evaluate selective generation uncertainty methods on generated summaries.

## Relationships

### → SAMSum
- **Text summarization** (behaviors tasks) — *measured_by*
  > As an early application for Hedgehog on larger models, we convert Llama-2 7B (Touvron et al., 2023) before finetuning with low-rank adapters (LoRA) (Hu et al., 2021) on SAMSum summarization (Gliwa et al., 2019).
  - [The Hedgehog & the Porcupine: Expressive Linear Attentions with Softmax Mimicry](https://proceedings.iclr.cc/paper_files/paper/2024/file/ebba182cb97864368fdb6ae00773a5e4-Paper-Conference.pdf)
- **Dialogue summarization** (behaviors tasks) — *measured_by*
  > dialogue summarization: samsum (Gliwa et al., 2019) and qmsum (Zhong et al., 2021) from LongBench (Bai et al., 2024)
  - [ResQ: Mixed-Precision Quantization of Large Language Models with Low-Rank Residuals](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saxena25b/saxena25b.pdf)
- **General ability** (constructs) — *measured_by*
  > To explore the side effects of sequential model editing on the general abilities of LLMs, four representative tasks with corresponding datasets were adopted for assessment... including: ... Summarization on the SAMSum (Gliwa et al., 2019)
  - [Perturbation-Restrained Sequential Model Editing](https://proceedings.iclr.cc/paper_files/paper/2025/file/2c15b0221da28bc6f4373a7e78b896dd-Paper-Conference.pdf)

### Associated with
- **LongBench** (measurements)
  > Following CacheBlend, we evaluate on four LongBench datasets (Bai et al., 2024): ...SAMSum (few-shot instruction following)... (Section 5.1).
  - [EPIC: Efficient Position-Independent Caching for Serving Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25j/hu25j.pdf)
