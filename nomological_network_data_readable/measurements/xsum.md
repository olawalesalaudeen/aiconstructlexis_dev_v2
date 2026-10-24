# XSum
**Type:** Measurement  
**Referenced in:** 83 papers  
**Also known as:** XSUM, Xsum, xSum, X-SUM  

## State of the Field

**What it is.** Across papers, XSum is most commonly described as an extreme or abstractive news summarization benchmark made up of news articles, often specified as BBC articles, paired with human-written summaries. The prevailing description emphasizes a short, single-sentence summary for each article, sometimes explicitly as one-sentence or single-document summarization, while some definitions describe it more generally as news articles with abstractive summaries. A smaller line also frames it as a non-argumentative summarization task or as an English summarization set used to assess generative coherence and fluency.

**What it is claimed to measure.** Papers link XSum to 5 behavioral indicators and 2 constructs. The dominant claim is that it measures Text summarization, followed by Abstractive summarization and Text generation, and papers also report two other single-paper behavioral uses. Construct links are limited to two single-paper cases, so the measurement claims cluster around summarization tasks rather than one construct-centered use. One paper additionally says quality on XSum is measured with ROUGE-2.

**Space of uses.** Most papers position XSum as a headline benchmark for fine-tuning or evaluating summarization systems. It is often paired with CNN/DailyMail, and smaller benchmark collections place it alongside WikiLingua, WMT, XLSum, or MultiNews. A smaller line uses it as a news-domain source of human-written text or of human and model-generated summaries for machine-generated text detection, while other papers use it for robustness checks, for second-phase training as XSum (Ctr), or for hallucination evaluation on summarization outputs.

## Sources

**[Detecting Machine-Generated Texts by Multi-Population Aware Optimization for Maximum Mean Discrepancy](https://proceedings.iclr.cc/paper_files/paper/2024/file/e537e071277a2e5fefaa78f87500c7b4-Paper-Conference.pdf)**
> A summarization benchmark consisting of news articles paired with abstractive summaries.

**[DNA-GPT: Divergent N-Gram Analysis for Training-Free Detection of GPT-Generated Text](https://proceedings.iclr.cc/paper_files/paper/2024/file/d4ce6738e84876aa79f13c8bc8b7c5eb-Paper-Conference.pdf) (as "Xsum")**
> The Extreme Summarization dataset, used for evaluating abstractive text summarization systems.

**[Evaluating the Zero-shot Robustness of Instruction-tuned Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d3221cdb27e49d9c1cd35ad254feccfe-Paper-Conference.pdf) (as "XSUM")**
> A benchmark for extreme summarization, where the task is to generate a short, one-sentence summary of a news article.

**[OpenDebateEvidence: A Massive-Scale Argument Mining and Summarization Dataset](https://proceedings.neurips.cc/paper_files/paper/2024/file/3c630d28df1cff44314d5798f82e02ec-Paper-Datasets_and_Benchmarks_Track.pdf) (as "xSum")**
> A dataset designed for single-sentence news summarization, used to evaluate models on a non-argumentative summarization task.

**[Beyond Text Compression: Evaluating Tokenizers Across Scales](https://aclanthology.org/2025.acl-long.1546.pdf) (as "X-SUM")**
> A dataset for evaluating abstractive summarization of single-sentence summaries of news articles in English, used to assess generative coherence and fluency.

## Relationships

### → XSum
- **Text summarization** (behaviors tasks) — *measured_by*
  > We use 61.5% test set data for XSUM (Narayan et al., 2018), 17.6% for CNN/DM (Nallapati et al., 2016), and 4.0% for MEDIASUM (Zhu et al., 2021). (Section 4.2).
  - [Evaluating the Zero-shot Robustness of Instruction-tuned Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d3221cdb27e49d9c1cd35ad254feccfe-Paper-Conference.pdf)
- **Abstractive summarization** (behaviors tasks) — *measured_by*
  > We start by evaluating GKD on an abstractive summarization task of generating a summary that captures salient ideas of the input document. To do so, we use the XSum dataset (Narayan et al., 2018) (Section 4.1).
  - [On-Policy Distillation of Language Models: Learning from Self-Generated Mistakes](https://proceedings.iclr.cc/paper_files/paper/2024/file/5be69a584901a26c521c2b51e40a4c20-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > For the NLG task, we finetune the encoder-decoder model BART-large [11] and T5-base [21] on the text summarization datasets XSum [19] and CNN/DailyMail [8]
  - [Unveiling LoRA Intrinsic Ranks via Salience Analysis](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed9f00cb7dd5fbdc2175d55e2fdf1b05-Paper-Conference.pdf)
- **Downstream task performance** (behaviors tasks) — *measured_by*
  > We assess their impact on task performance, diversity of model generations, and computational requirements. Concretely, we compare MLE-based next token prediction and different IRL methods for fine-tuning LLMs on common benchmarks. ... We use the following datasets and subsets for ablation in the following sections: XSUM, GSM8k, TLDR, and WMT22.
  - [Imitating Language via Scalable Inverse Reinforcement Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/a5036c166e44b731f214f41813364d01-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > We conducted additional experiments to further evaluate the robustness and generalizability of our fine-tuning techniques. These experiments included assessments on the xSum dataset
  - [OpenDebateEvidence: A Massive-Scale Argument Mining and Summarization Dataset](https://proceedings.neurips.cc/paper_files/paper/2024/file/3c630d28df1cff44314d5798f82e02ec-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Fake news generation** (behaviors tasks) — *measured_by*
  > "and compare them with the real news articles from the XSum (Narayan et al., 2018) dataset"
  - [AI as Humanity’s Salieri: Quantifying Linguistic Creativity of Language Models via Systematic Attribution of Machine Text against Web Text](https://proceedings.iclr.cc/paper_files/paper/2025/file/e304d374c85e385eb217ed4a025b6b63-Paper-Conference.pdf)
- **Text generation quality** (constructs) — *measured_by*
  > "Quality is measured in terms of BLEU for WMT and ROUGE-2 for XSum and CNNDM."
  - [Faster Cascades via Speculative Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/6f43166f50f26e8d8f3edc5545b0749f-Paper-Conference.pdf)
