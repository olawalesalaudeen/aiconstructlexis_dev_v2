# CNN/DailyMail
**Type:** Measurement  
**Referenced in:** 70 papers  
**Also known as:** CNN-DM, CNN/Daily Mail, CNN Dailymail, CNNDM, CNN / DailyMail, CNN, CNN-DailyMail, CNN/Dailymail, CNN Daily Mail, CNN/DM, CNN-Daily Mail dataset  

## State of the Field

**What it is.** Across papers, CNN/DailyMail is most commonly described as a widely used news summarization dataset or benchmark, built from CNN and Daily Mail articles paired with human-written summaries, often described as multi-sentence summaries or highlights. Definitions usually frame it as text or abstractive summarization, though some papers describe it more specifically as document-level or single-document summarization, and one paper describes it as an English-language dataset with just over 300k unique news articles. A few studies refer to particular subsets or uses, such as the test set, 100 randomly sampled texts, or the first 300 entries, and one paper uses the article-highlight pairs to evaluate citation attribution.

**What it is claimed to measure.** Papers link it to 4 behavioral indicators and 1 construct. The prevailing measured use is Text summarization, and smaller lines of work report it as measuring Abstractive summarization, News summarization, and Text generation. The recorded links are concentrated on summarization tasks; the only construct link is Out-of-distribution generalization, where a paper treats CNN/DailyMail as the out-of-distribution test set for summarization.

**Space of uses.** Many papers use it as one of their main evaluation datasets for summarization. It is commonly paired with XSum, and also appears alongside DialogSum, BBC, SamSum, and WMT EnDe, while other papers combine it with broader benchmark mixtures. Some studies position it more narrowly as a test-only or auxiliary setting, for example as an out-of-distribution test set, in speculative decoding simulations, with randomly sampled texts for intervention experiments, or in controlled truncation experiments where the model is asked to summarize the input.

**Concerns raised.** The only explicit concern stated in these papers is contamination: one study describes CNNDM as a dataset with higher risk of pretraining contamination, and another definition says it is used in settings with potential pretraining contamination.

## Sources

**[Error Norm Truncation: Robust Training in the Presence of Data Noise for Text Generation Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/3640a1997a4c9571cea9db2c82e1fc35-Paper-Conference.pdf) (as "CNN/Daily Mail")**
> A large-scale dataset of news articles paired with multi-sentence summaries, commonly used for evaluating text summarization.

**[Conformal Language Modeling](https://proceedings.iclr.cc/paper_files/paper/2024/file/31421b112e5f7faf4fc577b74e45dab2-Paper-Conference.pdf) (as "CNN/DM")**
> The CNN/Daily Mail dataset, a large collection of news articles paired with human-written summaries, widely used for evaluating text summarization models.

**[Unbiased Watermark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c5b00c5bdcc6fe35907dbcca03d27652-Paper-Conference.pdf) (as "CNN-DM")**
> The CNN/Daily Mail dataset, a large-scale corpus of news articles paired with multi-sentence summaries, used for evaluating text summarization models.

**[Cascade Speculative Drafting for Even Faster LLM Inference](https://proceedings.neurips.cc/paper_files/paper/2024/file/9cb5b083ba4f5ca6bd05dd307a2fb354-Paper-Conference.pdf) (as "CNN Dailymail")**
> A dataset for text summarization, used in a simulation to evaluate the performance of speculative decoding.

**[Efficient Beam Search for Large Language Models Using Trie-Based Decoding](https://aclanthology.org/2025.emnlp-main.748.pdf)**
> A dataset consisting of news articles paired with multi-sentence summaries, commonly used to evaluate abstractive text summarization.

**[Paired by the Teacher: Turning Unpaired Data into High-Fidelity Pairs for Low-Resource Text Generation](https://aclanthology.org/2025.emnlp-main.1030.pdf) (as "CNNDM")**
> Document summarization benchmark based on CNN and Daily Mail articles, used to assess performance in settings with potential pretraining contamination.

**[RA-DIT: Retrieval-Augmented Dual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/536d18fbb454f80221465f1a42c6f389-Paper-Conference.pdf) (as "CNN / DailyMail")**
> A widely used dataset for abstractive text summarization, consisting of news articles from CNN and the Daily Mail paired with human-written summaries.

**[Whoever Started the interference Should End It: Guiding Data-Free Model Merging via Task Vectors](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25h/cheng25h.pdf) (as "CNN")**
> A benchmark used to evaluate summarization or news-related language understanding in the paper's Qwen-14B evaluation table.

**[Towards Optimal Multi-draft Speculative Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/0907335ecf28faf15be54485dbcbe70e-Paper-Conference.pdf) (as "CNN-DailyMail")**
> A dataset consisting of news articles and their corresponding summaries, used to evaluate text summarization.

**[On Speeding Up Language Model Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a38cfba4c717e5a37b200294615e546e-Paper-Conference.pdf) (as "CNN/Dailymail")**
> A dataset of news articles paired with summaries, commonly used for evaluating text summarization.

**[Distributed Speculative Inference (DSI): Speculation Parallelism for Provably Faster Lossless Language Model Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/b36554b97da741b1c48c9de05c73993e-Paper-Conference.pdf) (as "CNN Daily Mail")**
> A dataset for text summarization, composed of news articles from CNN and the Daily Mail paired with human-written summaries. The paper refers to it as CNN-DM in tables.

**[Time-Reversal Provides Unsupervised Feedback to LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/34aec5ab2f99a8f592e0cca4974013f2-Paper-Conference.pdf) (as "CNN-Daily Mail dataset")**
> A dataset consisting of pairs of news articles and their corresponding highlights (summaries), used here to evaluate citation attribution.

## Relationships

### → CNN/DailyMail
- **Text summarization** (behaviors tasks) — *measured_by*
  > Summarization on CNN Dailymail. (Figure 3b)
  - [Improving Generalization of Alignment with Human Preferences through Group Invariant Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2d82a425af4c18a35049899fea5ee82-Paper-Conference.pdf)
- **Abstractive summarization** (behaviors tasks) — *measured_by*
  > To comprehensively evaluate our method, we selected four datasets from different tasks: ...CNN/DM (See et al., 2017) for abstractive summarization... (Section 4.1)
  - [Faster Speculative Decoding via Effective Draft Decoder with Pruned Candidate Tree](https://aclanthology.org/2025.acl-long.486.pdf)
- **Out-of-distribution generalization** (constructs) — *measured_by*
  > To evaluate out-of-distribution (OOD) generalisation, we specify ... one or more out-of-distribution (OOD) test sets for each task... For summarisation, the ... OOD test set is the CNN/DailyMail test set (Section 5.1).
  - [Understanding the Effects of RLHF on LLM Generalisation and Diversity](https://proceedings.iclr.cc/paper_files/paper/2024/file/5a68d05006d5b05dd9463dd9c0219db0-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > For the NLG task, we finetune the encoder-decoder model BART-large [11] and T5-base [21] on the text summarization datasets XSum [19] and CNN/DailyMail [8]
  - [Unveiling LoRA Intrinsic Ranks via Salience Analysis](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed9f00cb7dd5fbdc2175d55e2fdf1b05-Paper-Conference.pdf)
- **News summarization** (behaviors tasks) — *measured_by*
  > We conducted experiments on edge-deployable models... evaluating their zero-shot generative performance on news summarization... using the CNN/DM... dataset (Section 5)
  - [Progressive Mixed-Precision Decoding for Efficient LLM Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/5df4313ecd4875931fbdacc486cc1fcf-Paper-Conference.pdf)
- **Text generation quality** (constructs) — *measured_by*
  > "Quality is measured in terms of BLEU for WMT and ROUGE-2 for XSum and CNNDM."
  - [Faster Cascades via Speculative Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/6f43166f50f26e8d8f3edc5545b0749f-Paper-Conference.pdf)
