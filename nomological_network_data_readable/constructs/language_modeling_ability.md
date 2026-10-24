# Language modeling ability
**Type:** Construct  
**Referenced in:** 30 papers  
**Also known as:** Language modeling quality, Language modeling capability, Language modelling capability, Predictive capability, Predictive performance, Source-language modeling  

## State of the Field

**Definition agreement:** Consensus. Most papers define language modeling ability as a model's underlying or latent capacity to predict text and generate coherent, fluent, plausible language, often operationalized through next-token prediction, perplexity, or prediction loss. A few papers broaden this to general language tasks or special settings such as retrieval or translation, but these are minor scope or measurement variations around the same core capability rather than a substantially different construct.

**Space of definitions.** Across the papers, the prevailing usage treats language modeling ability as a model's latent or core capacity to predict likely tokens or sequences and to generate coherent, plausible, or fluent text. Many definitions tie this directly to probability-based modeling, describing it in terms of prediction loss, perplexity, token probability distributions, or next-symbol prediction, and one paper explicitly frames it as separate from factual correctness. Smaller lines of work instead define it through performance on broad language-modeling evaluations or predictive performance metrics, narrow it to a retriever encoder's retained capacity to model document text, or specialize it to source-language modeling for translation and transcription.

**Space of facets.** Papers use several nearby labels under this construct, including language modeling ability, capability, quality, predictive capability, and predictive performance. They also refer to general, basic, short-context, masked, and source-language versions, so the term is used both for a broad underlying capability and for more specific settings or scopes. A few papers position it relative to other properties: one says it is easier to recover than factual knowledge during fine-tuning, and another evaluates language modeling and commonsense reasoning capabilities side by side.

**Space of measurement.** It is operationalized with 14 measurement instruments and 1 behavioral indicator. The most frequently linked instruments are WikiText-2, WikiText-103, AG News, the Alpaca instruction dataset, and C4, with 9 other instruments and a summarization-based behavioral indicator also used. Most instruments are benchmark corpora or task datasets, and papers usually operationalize the construct through perplexity, log perplexity, prediction loss, or cross-entropy loss, which lines up with the dominant prediction-centered definitions, though some also use downstream task evaluations to assess whether interventions preserve it.

**Links.** One paper reports that language modeling ability is related to text generation quality, stating that perplexity measurements and generation quality are strongly related while also presenting this as a hypothesis for future work. The papers do not record a causal or correlational claim for this construct.

## Sources

**[Cost-Optimal Grouped-Query Attention for Long-Context Modeling](https://aclanthology.org/2025.emnlp-main.272.pdf) (as "Language modeling quality")**
> The model's underlying ability to understand and generate coherent and probable sequences of text, typically measured by its prediction loss.

**[Rethinking Channel Dimensions to Isolate Outliers for Low-bit Weight Quantization of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/374050dc3f211267bd6bf0ea24eae184-Paper-Conference.pdf)**
> The model's core capability to understand and generate plausible, meaningful text, which should be preserved during debiasing interventions.

**[AmoebaLLM: Constructing Any-Shape Large Language Models for Efficient and Instant Deployment](https://proceedings.neurips.cc/paper_files/paper/2024/file/8f11e548311c7fd3f33596a4d1dd41f0-Paper-Conference.pdf) (as "Language modeling capability")**
> The fundamental ability of a model to understand and generate plausible sequences of text, which can be recovered more easily than factual knowledge during fine-tuning.

**[Accuracy is Not All You Need](https://proceedings.neurips.cc/paper_files/paper/2024/file/e0e956681b04ac126679e8c7dd706b2e-Paper-Conference.pdf) (as "Language modelling capability")**
> The latent ability of the model to predict and generate coherent language sequences, often inferred from probability distributions over tokens.

**[Language Modeling Is Compression](https://proceedings.iclr.cc/paper_files/paper/2024/file/3cbf627fa24fb6cb576e04e689b9428b-Paper-Conference.pdf) (as "Predictive capability")**
> The latent ability of a model to accurately predict the next symbol in a sequence based on prior context, reflecting its underlying probabilistic modeling strength.

**[SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression](https://proceedings.iclr.cc/paper_files/paper/2024/file/1787533e171dcc8549cc2eb5a4840eec-Paper-Conference.pdf) (as "Predictive performance")**
> The overall ability of a language model to make accurate predictions, as measured by metrics like perplexity and zero-shot task accuracy.

**[Whisper-UT: A Unified Translation Framework for Speech and Text](https://aclanthology.org/2025.emnlp-main.148.pdf) (as "Source-language modeling")**
> The latent ability of the decoder to understand and represent the source language effectively, whether derived from speech or text, which supports improved translation and transcription.

## Relationships

### Language modeling ability →
- **WikiText-2** (measurements) — *measured_by*
  > WikiText-2 and WikiText-103 (Merity et al., 2016) are two commonly used language modeling benchmarks consisting of high-quality Wikipedia articles. (Section 4.1.1)
  - [EMO: EARTH MOVER DISTANCE OPTIMIZATION FOR AUTO-REGRESSIVE LANGUAGE MODELING](https://proceedings.iclr.cc/paper_files/paper/2024/file/1626be0ab7f3d7b3c639fbfd5951bc40-Paper-Conference.pdf)
- **WikiText-103** (measurements) — *measured_by*
  > WikiText-2 and WikiText-103 (Merity et al., 2016) are two commonly used language modeling benchmarks consisting of high-quality Wikipedia articles. (Section 4.1.1)
  - [EMO: EARTH MOVER DISTANCE OPTIMIZATION FOR AUTO-REGRESSIVE LANGUAGE MODELING](https://proceedings.iclr.cc/paper_files/paper/2024/file/1626be0ab7f3d7b3c639fbfd5951bc40-Paper-Conference.pdf)
- **LAMBADA** (measurements) — *measured_by*
  > We chose the LAMBADA dataset (Paperno et al., 2016) for evaluation, as it tests a model’s ability to predict the final word of a passage, directly assessing language modeling capability without relying on specific knowledge, making it suitable for comparing models with small-scale training. (Section 6.3.2)
  - [TAID: Temporally Adaptive Interpolated Distillation for Efficient Knowledge Transfer in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e664650506f1cf2b4696df892147c06e-Paper-Conference.pdf)
- **WikiText** (measurements) — *measured_by*
  > “we examine the impact of these intervention strategies on both task performance and language modeling capability, with the latter measured using cross-entropy loss on the pre-training dataset (i.e, WikiText).”
  - [ELICIT: LLM Augmentation Via External In-context Capability](https://proceedings.iclr.cc/paper_files/paper/2025/file/3ffd6024f02b92a52abe8e79a78e9064-Paper-Conference.pdf)
- **PTB** (measurements) — *measured_by*
  > We evaluate quantized model performance by two metrics. Firstly, we measure perplexity, measured on the WikiText2 (Merity et al., 2016), Penn Treebank (Marcus et al., 1994) and C4 (Raffel et al., 2020) datasets. (Section 5)
  - [SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression](https://proceedings.iclr.cc/paper_files/paper/2024/file/1787533e171dcc8549cc2eb5a4840eec-Paper-Conference.pdf)
- **C4** (measurements) — *measured_by*
  > We evaluate quantized model performance by two metrics. Firstly, we measure perplexity, measured on the WikiText2 (Merity et al., 2016), Penn Treebank (Marcus et al., 1994) and C4 (Raffel et al., 2020) datasets. (Section 5)
  - [SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression](https://proceedings.iclr.cc/paper_files/paper/2024/file/1787533e171dcc8549cc2eb5a4840eec-Paper-Conference.pdf)
- **WritingPrompts** (measurements) — *measured_by*
  > We use 6 English textual corpora from 5 different domains for comprehensive evaluation... (4) WritingPrompts (Fan et al., 2018) features text from the writing prompts forum of Reddit. (Section 4.1.1)
  - [EMO: EARTH MOVER DISTANCE OPTIMIZATION FOR AUTO-REGRESSIVE LANGUAGE MODELING](https://proceedings.iclr.cc/paper_files/paper/2024/file/1626be0ab7f3d7b3c639fbfd5951bc40-Paper-Conference.pdf)
- **AG News** (measurements) — *measured_by*
  > We use 6 English textual corpora from 5 different domains for comprehensive evaluation... (5) AG News (Zhang et al., 2015) is a collection of news articles from diverse domains (Section 4.1.1)
  - [EMO: EARTH MOVER DISTANCE OPTIMIZATION FOR AUTO-REGRESSIVE LANGUAGE MODELING](https://proceedings.iclr.cc/paper_files/paper/2024/file/1626be0ab7f3d7b3c639fbfd5951bc40-Paper-Conference.pdf)
- **StereoSet** (measurements) — *measured_by*
  > LMS is used to evaluate the language modeling abilities of models.
  - [The Devil is in the Neurons: Interpreting and Mitigating Social Biases in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a1ca821d0b4807f8217da7da1747c65-Paper-Conference.pdf)
- **Alpaca instruction dataset** (measurements) — *measured_by*
  > Instead, we choose the Alpaca (Taori et al., 2023) dataset, distinct from all four calibration data sources, as our language modeling test data. (Section 5.1)
  - [Beware of Calibration Data for Pruning Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/2ede933e10afa991a10b6f36b6522129-Paper-Conference.pdf)
- **DCLM** (measurements) — *measured_by*
  > We also test the language modeling capability of the LMs on a subset of DCLM (Li et al., 2024a), a high-quality corpus carefully curated with complex pipelines, to examine how well LMs capture broad and diverse knowledge. (Section 3.1)
  - [MiniPLM: Knowledge Distillation for Pre-training Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ea05e4fc0299c27648c9985266abad47-Paper-Conference.pdf)
- **GLUE** (measurements) — *measured_by*
  > To further assess preservation of language modeling capability, we also evaluated on downstream tasks: MLMs on GLUE tasks... (Section 3.3).
  - [LLM Bias Detection and Mitigation through the Lens of Desired Distributions](https://aclanthology.org/2025.emnlp-main.76.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > To further assess preservation of language modeling capability, we also evaluated on downstream tasks: ... ALMs using the LM Evaluation Harness (Gao et al., 2024) across 5 benchmarks... (Section 3.3).
  - [LLM Bias Detection and Mitigation through the Lens of Desired Distributions](https://aclanthology.org/2025.emnlp-main.76.pdf)
- **RTE** (measurements) — *measured_by*
  > In addition, experiments on short-context language modeling tasks, like the RTE (Dagan et al., 2005)... show that our method does not affect the basic language modeling ability of Mamba. (Section 1)
  - [Recall with Reasoning: Chain-of-Thought Distillation for Mamba's Long-Context Memory and Extrapolation](https://aclanthology.org/2025.emnlp-main.235.pdf)
- **PG-19** (measurements) — *measured_by*
  > “For general language tasks, models are tested for next token generation tasks with Wikitext-103 (Merity et al., 2016) (2-3k words per sample) and PG-19 (Rae et al., 2019) datasets”
  - [HMT: Hierarchical Memory Transformer for Efficient Long Context Language Processing](https://aclanthology.org/2025.naacl-long.410.pdf)

### Associated with
- **Text generation quality** (constructs)
  > While we believe that perplexity measurements and generation quality are strongly related, this is a hypothesis we aim to investigate in future work. (Section 6)
  - [SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression](https://proceedings.iclr.cc/paper_files/paper/2024/file/1787533e171dcc8549cc2eb5a4840eec-Paper-Conference.pdf)
- **Masked language modeling** (behaviors tasks)
  > We combine KL divergence loss with an MLM loss as a secondary objective to retain masked language modeling ability while adjusting the MLM distribution (Section 2.3).
  - [LLM Bias Detection and Mitigation through the Lens of Desired Distributions](https://aclanthology.org/2025.emnlp-main.76.pdf)
- **Text summarization** (behaviors tasks)
  > To assess whether our IDK-tuning might harm other different downstream language skills... we evaluate the IDK-tuned Mistral-7B-v0.1 on the task of text summarization
  - [I Don't Know: Explicit Modeling of Uncertainty with an [IDK] Token](https://proceedings.neurips.cc/paper_files/paper/2024/file/14c018d2e72c521605b0567029ef0efb-Paper-Conference.pdf)
