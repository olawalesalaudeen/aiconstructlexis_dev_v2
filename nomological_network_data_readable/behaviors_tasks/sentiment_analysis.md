# Sentiment analysis
**Type:** Behavior  
**Referenced in:** 137 papers  
**Also known as:** Sentiment classification, Binary sentiment classification, Sentiment label generation, Emotional valence scoring, Embodied emotion recognition, Opinion polarity classification  

## State of the Field

**Space of definitions.** Across the surveyed work, the dominant framing treats this as an observable text classification task: papers ask models to determine the sentiment, tone, or emotional valence of a sentence, review, tweet, or other text. The most common outputs are binary positive versus negative labels or three-way positive, negative, or neutral labels, and some papers describe the same behavior as opinion polarity classification. Most definitions stay at the task level, though a few phrase it as a latent ability to infer emotional polarity or affective labels from text; smaller variants use 5-way labels, generated label text, or continuous valence scores.

**Variants.** Variants are mostly text-based but span several settings, including single-sentence tasks, movie-review and tweet classification, document-level and sentence-level prediction, code-mixed text, Persian text, and finance-related sentiment. Papers also use names such as sentiment classification, opinion polarity classification, sentiment label generation, emotional valence scoring, and embodied emotion recognition. One paper uses sentiment analysis as a reasoning path for stance by identifying affective lexicons such as "happy," "angry," and "disappointed" to infer positive, negative, or neutral valence, and another formulates overall positive or negative tendency prediction for first-person view video.

**Space of elicitation and scores.** Papers link this behavior to 11 measurement instruments. The most common are SST-2, IMDb, GLUE, SST-5, and Financial PhraseBank, followed by 6 other instruments; these are mostly datasets and benchmark suites. Elicitation is usually standard classification evaluation or prompted label prediction, for example instructions to "Analyze the sentiment of the input, and respond only positive or negative," and some in-context setups provide labeled examples before a held-out item; scoring is commonly reported with accuracy or top-1 accuracy.

**What it is taken as evidence of.** Only 1 construct is linked. One paper treats sentiment analysis, specifically sentiment classification for "phrase-level structure," as measuring compositional generalization. Papers do not present additional linked constructs.

## Sources

**[An LLM can Fool Itself: A Prompt-Based Adversarial Attack](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c72285e193ec90dca93258128698cfb-Paper-Conference.pdf)**
> The task of classifying the sentiment or tone of a given piece of text as positive, negative, or neutral.

**[Achieving Domain-Independent Certified Robustness via Knowledge Continuity](https://proceedings.neurips.cc/paper_files/paper/2024/file/58cc11cda2a2679e8af5c6317aed0af8-Paper-Conference.pdf) (as "Sentiment classification")**
> The task of determining the sentimental tone (e.g., positive, negative) expressed in a piece of text.

**[Scalable Bayesian Learning with posteriors](https://proceedings.iclr.cc/paper_files/paper/2025/file/1f9f4ff2ebebb298d88e3fe0e10162db-Paper-Conference.pdf) (as "Binary sentiment classification")**
> The task of classifying text into one of two sentiment categories, such as positive or negative.

**[Power doesn't reside in size: A Low Parameter Hybrid Language Model (HLM) for Sentiment Analysis in Code-mixed data](https://aclanthology.org/2025.emnlp-main.749.pdf) (as "Sentiment label generation")**
> The task of producing the text of a sentiment label (e.g., "Positive") as a generative output rather than selecting from a fixed set of classes.

**[Assessing effective de-escalation of crisis conversations using transformer-based models and trend statistics](https://aclanthology.org/2025.emnlp-main.1512.pdf) (as "Emotional valence scoring")**
> Assigning a continuous numerical score to a text input that represents its emotional valence, typically on a scale from negative to positive.

**[$E^3$: Exploring Embodied Emotion Through A Large-Scale Egocentric Video Dataset](https://proceedings.neurips.cc/paper_files/paper/2024/file/d611d5c0251d9680f869c5d2c46c6fcd-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Embodied emotion recognition")**
> A classification task to predict the overall positive or negative emotional tendency of a first-person view video.

**[Active Few-Shot Learning for Text Classification](https://aclanthology.org/2025.naacl-long.340.pdf) (as "Opinion polarity classification")**
> The specific text classification task of determining whether an expressed opinion is positive, negative, or neutral.

## Relationships

### Sentiment analysis →
- **SST-2** (measurements) — *measured_by*
  > “Sentiment Analysis (SST-2)”
  - [An LLM can Fool Itself: A Prompt-Based Adversarial Attack](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c72285e193ec90dca93258128698cfb-Paper-Conference.pdf)
- **IMDb** (measurements) — *measured_by*
  > we run all of our experiments on the IMDB dataset [48] (a sentiment classification task) using a host of language models from different model families (encoder, decoder, encoder-decoder). (Section 5)
  - [Achieving Domain-Independent Certified Robustness via Knowledge Continuity](https://proceedings.neurips.cc/paper_files/paper/2024/file/58cc11cda2a2679e8af5c6317aed0af8-Paper-Conference.pdf)
- **GLUE** (measurements) — *measured_by*
  > We finetune the pretrained RoBERTa-base model (Liu et al., 2019) on the GLUE benchmark, a widely used suite for evaluating NLP models across various tasks, including sentiment analysis and question answering (Wang et al., 2019). (Section 4.2)
  - [CompAct: Compressed Activations for Memory-Efficient LLM Training](https://aclanthology.org/2025.naacl-long.71.pdf)
- **SST-5** (measurements) — *measured_by*
  > SST-5 [40] Sentiment Analysis (Table 1)
  - [Mixture of Demonstrations for In-Context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/a0da098e0031f58269efdcba40eedf47-Paper-Conference.pdf)
- **Financial PhraseBank** (measurements) — *measured_by*
  > Sentiment analysis focuses on extracting sentiment information (positive, negative, or neutral) from financial texts, using three datasets: the Financial Phrase Bank (FPB) (Malo et al., 2014), FiQA-SA (Maia et al., 2018), and TSA (Cortis et al., 2017).
  - [FinBen: A Holistic Financial Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/adb1d9fa8be4576d28703b396b82ba1b-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Rotten Tomatoes** (measurements) — *measured_by*
  > Our experiments utilize three benchmark datasets for sentiment classification: IMDB (Maas et al., 2011), SST-2 (Socher et al., 2013), and Rotten Tomatoes (Pang and Lee, 2005), all of which contain movie reviews for binary polarity tasks (e.g., positive or negative sentiment). (Section 3)
  - [LLaMAs Have Feelings Too: Unveiling Sentiment and Emotion Representations in LLaMA Models Through Probing](https://aclanthology.org/2025.acl-long.306.pdf)
- **FiQA-SA** (measurements) — *measured_by*
  > Sentiment analysis focuses on extracting sentiment information (positive, negative, or neutral) from financial texts, using three datasets: the Financial Phrase Bank (FPB) (Malo et al., 2014), FiQA-SA (Maia et al., 2018), and TSA (Cortis et al., 2017).
  - [FinBen: A Holistic Financial Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/adb1d9fa8be4576d28703b396b82ba1b-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Emotion (dair-ai)** (measurements) — *measured_by*
  > Emotion (Kosti et al., 2019) with text data labeled with various emotions, suitable for sentiment analysis tasks (Section 5.2)
  - [Capability Localization: Capabilities Can be Localized rather than Individual Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/648a5a590ca6f2bb5de53f938e230160-Paper-Conference.pdf)
- **CR** (measurements) — *measured_by*
  > For sentiment classification, we use the Poem Sentiment, SST-2, and CR datasets. (Section 5.1)
  - [Linear-Time Demonstration Selection for In-Context Learning via Gradient Estimation](https://aclanthology.org/2025.emnlp-main.832.pdf)

### Associated with
- **Compositional generalization** (constructs)
  > Two tasks that assess different aspects of compositional generalisation are used in the paper: Inverse Dictionary Modelling (IDM) for word-level composition and Sentiment Classification (SC) for phrase-level structure. (Section 4.1)
  - [CARMA: Enhanced Compositionality in LLMs via Advanced Regularisation and Mutual Information Alignment](https://aclanthology.org/2025.emnlp-main.822.pdf)
