# Text classification
**Type:** Behavior  
**Referenced in:** 159 papers  
**Also known as:** Topic classification, News headline classification, Hawkish-dovish classification, Argument unit classification, Deal completeness classification, ESG issue identification, Single-sentence classification, Textual classification, Data practice identification, Headline classification, Persuasion strategy classification, Note classification, Topic assignment, Resume classification, Occupation prediction, Question classification, Evergreen question classification, Long document classification, Question type classification, Section classification, Sequential sentence classification, Problem classification, Paper classification, Multi-label classification, Multilabel classification, Sequence classification, Document categorization, Text coding  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is assigning a predefined, discrete, or categorical label to a text input, usually a sentence, sentence pair, document, or entire sequence. Several definitions make the format explicit as taking one text or a pair of texts and outputting a class label based on content, with recurring examples including sentiment, topic, grammatical acceptability, question type, stance, and natural language inference style tasks. A smaller line of work broadens the target from single-label prediction to zero, one, or multiple labels, and success is usually framed as predicting the task label correctly, with some papers mentioning cross-entropy loss or accuracy for the task.

**Variants.** Papers use the term for a broad family of variants. The most recurrent named variants are topic classification, sentence or sequence classification, and question classification, while other settings include headline and news classification, single-sentence classification, long document classification, and multilingual or cross-lingual, zero-shot, few-shot, and in-context setups. Smaller domain-specific formulations include financial headline, hawkish-dovish, argument unit, deal completeness, and ESG issue identification, plus privacy-policy data practice identification, persuasion strategy classification, note and paper classification, occupation prediction, resume classification, section or sequential sentence classification, problem classification, and text coding; some work also converts visual datasets into text for textual classification.

**Space of elicitation and scores.** Papers measure text classification with 29 linked instruments, most often AG News, GLUE, TREC, SST-2, and DBPedia. The linked instruments are benchmark datasets and benchmark suites rather than separate scoring rubrics, and they cover topic or news categorization, question classification, sentiment, and broader sequence-classification evaluations. Many other datasets appear in smaller pockets of work.

**What it is taken as evidence of.** Papers link text classification to six constructs rather than to one dominant target. In-context learning is the most recurrent link, with some papers treating it as related to text classification and some measuring it with text classification tasks; other papers use text classification to measure Consistency, Cross-lingual generalization, Prompt sensitivity, and also relate it to Semantic understanding. Overall, papers use it as evidence for several different constructs instead of a single agreed construct.

## Sources

**[A Good Learner can Teach Better: Teacher-Student Collaborative Knowledge Distillation](https://proceedings.iclr.cc/paper_files/paper/2024/file/a781ff9cfb267277937db1818284739f-Paper-Conference.pdf)**
> Assigning a discrete label to an input text sequence.

**[Learn more, but bother less: parameter efficient continual learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/b0bc711f48724237b38823c4d9cee10b-Paper-Conference.pdf) (as "Topic classification")**
> The task of identifying the main subject or topic of a document from a predefined set of topics.

**[FinBen: A Holistic Financial Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/adb1d9fa8be4576d28703b396b82ba1b-Paper-Datasets_and_Benchmarks_Track.pdf) (as "News headline classification")**
> Classifying financial headlines according to whether they contain specific market-related information.

**[FinBen: A Holistic Financial Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/adb1d9fa8be4576d28703b396b82ba1b-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Hawkish-dovish classification")**
> Classifying monetary-policy text by whether it signals tightening, easing, or neutrality.

**[FinBen: A Holistic Financial Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/adb1d9fa8be4576d28703b396b82ba1b-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Argument unit classification")**
> The task of categorizing sentences in financial texts, such as earnings calls, into argumentative functions like 'claim' or 'premise'.

**[FinBen: A Holistic Financial Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/adb1d9fa8be4576d28703b396b82ba1b-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Deal completeness classification")**
> Classifying merger-and-acquisition mentions as completed deals or rumors.

**[FinBen: A Holistic Financial Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/adb1d9fa8be4576d28703b396b82ba1b-Paper-Datasets_and_Benchmarks_Track.pdf) (as "ESG issue identification")**
> The task of detecting and classifying Environmental, Social, and Governance (ESG) related concerns within financial documents.

**[Maintaining Structural Integrity in Parameter Spaces for Parameter Efficient Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/08487598819cba9feca884ef0d442950-Paper-Conference.pdf) (as "Single-sentence classification")**
> The task of classifying a single sentence into a predefined category, such as determining its grammatical acceptability or sentiment.

**[Large Language Models are Interpretable Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/887932131fddf943e8fe3310b62c0147-Paper-Conference.pdf) (as "Textual classification")**
> The task of assigning a label to a text input, especially in scenarios where visual data is converted into descriptive text for evaluation.

**[Empowering Users in Digital Privacy Management through Interactive LLM-Based Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/bef8e5620c699630405adafaa86cb038-Paper-Conference.pdf) (as "Data practice identification")**
> The observable task of classifying segments of a privacy policy into predefined categories related to data collection, use, and sharing.

**[Teaching Human Behavior Improves Content Understanding Abilities Of VLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/f0d8e47e50fa0ef219c61d6fb9f2a4b3-Paper-Conference.pdf) (as "Persuasion strategy classification")**
> The observable task of identifying the persuasion techniques used in media content such as advertisements.

**[Teaching LLMs How to Learn with Contextual Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb0494e5ce9351cb120c3a35328dffef-Paper-Conference.pdf) (as "Headline classification")**
> The task of assigning a news article to one of several predefined categories based on the content of its headline.

**[Second-Order Fine-Tuning without Pain for LLMs: A Hessian Informed Zeroth-Order Optimizer](https://proceedings.iclr.cc/paper_files/paper/2025/file/6bf82cc56a5fa0287c438baa8be65a70-Paper-Conference.pdf) (as "Sentence classification")**
> The task of assigning a predefined category or label to a given sentence, such as for sentiment or topic analysis.

**[ZETA: Leveraging $Z$-order Curves for Efficient Top-$k$ Attention](https://proceedings.iclr.cc/paper_files/paper/2025/file/b508c1737d9242e40552699a6e98c87b-Paper-Conference.pdf) (as "Sequence classification")**
> The observable task of assigning a categorical label to an entire input sequence.

**[SNS-Bench: Defining, Building, and Assessing Capabilities of Large Language Models in Social Networking Services](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guo25o/guo25o.pdf) (as "Note classification")**
> Categorizing social media notes into predefined topics or taxonomies based on content, in single- or multiple-choice format.

**[Synthesizing Privacy-Preserving Text Data via Finetuning *without* Finetuning Billion-Scale LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25g/tan25g.pdf) (as "Topic assignment")**
> Mapping a given document to a predefined topic cluster based on its content, using document embeddings and clustering techniques.

**[Position: Rethinking LLM Bias Probing Using Lessons from the Social Sciences](https://raw.githubusercontent.com/mlresearch/v267/main/assets/morehouse25a/morehouse25a.pdf) (as "Resume classification")**
> Determining whether a resume is appropriate for a given job category, used to assess allocational bias in hiring-related decisions.

**[Position: Rethinking LLM Bias Probing Using Lessons from the Social Sciences](https://raw.githubusercontent.com/mlresearch/v267/main/assets/morehouse25a/morehouse25a.pdf) (as "Occupation prediction")**
> Predicting a person's job based on biographical information, used to assess whether models rely on gender or other stereotypes.

**[Comparing Specialised Small and General Large Language Models on Text Classification: 100 Labelled Samples to Achieve Break-Even Performance](https://aclanthology.org/2025.emnlp-main.9.pdf) (as "Question classification")**
> The task of classifying a question into a category based on the type of answer it expects (e.g., person, location, numeric).

**[Will It Still Be True Tomorrow? Multilingual Evergreen Question Classification to Improve Trustworthy QA](https://aclanthology.org/2025.emnlp-main.434.pdf) (as "Evergreen question classification")**
> The observable task of classifying a given question as either 'evergreen' (having a stable answer over time) or 'mutable' (having an answer that changes).

**[DrDiff: Dynamic Routing Diffusion with Hierarchical Attention for Breaking the Efficiency-Quality Trade-off](https://aclanthology.org/2025.emnlp-main.474.pdf) (as "Long document classification")**
> Assigning labels to lengthy documents based on their content.

**[LLM-Independent Adaptive RAG: Let the Question Speak for Itself](https://aclanthology.org/2025.emnlp-main.439.pdf) (as "Question type classification")**
> Categorizing questions into types such as count, comparative, or multihop based on their structure and reasoning requirements.

**[Section-Level Simplification of Biomedical Abstracts](https://aclanthology.org/2025.emnlp-main.697.pdf) (as "Sequential sentence classification")**
> The task of assigning a label to each sentence in a text that indicates its role or category, such as a section header.

**[Section-Level Simplification of Biomedical Abstracts](https://aclanthology.org/2025.emnlp-main.697.pdf) (as "Section classification")**
> The process of assigning section labels (e.g., Background, Results) to sentences in a plain language summary based on content and context.

**[MA-GTS: A Multi-Agent Framework for Solving Complex Graph Problems in Real-World Applications](https://aclanthology.org/2025.emnlp-main.973.pdf) (as "Problem classification")**
> Determining the type of graph problem (e.g., TSP, Vertex Cover) from natural language descriptions and extracting constraints and optimization objectives.

**[GraphAgent: Agentic Graph Language Assistant](https://aclanthology.org/2025.emnlp-main.1339.pdf) (as "Paper classification")**
> The task of assigning a predefined category or label to a scientific paper based on its content.

**[ViClaim: A Multilingual Multilabel Dataset for Automatic Claim Detection in Videos](https://aclanthology.org/2025.emnlp-main.21.pdf) (as "Multi-label classification")**
> The task of assigning one or more labels to an input, such as a sentence, from a predefined set of categories.

**[MoVa: Towards Generalizable Classification of Human Morals and Values](https://aclanthology.org/2025.emnlp-main.1687.pdf) (as "Multilabel classification")**
> The observable task of assigning zero, one, or multiple labels from a predefined set to a single text example, reflecting the co-occurrence of moral dimensions.

**[Latent Factor Models Meets Instructions: Goal-conditioned Latent Factor Discovery without Task Supervision](https://aclanthology.org/2025.naacl-long.554.pdf) (as "Document categorization")**
> Assigning documents to high-level or fine-grained topical labels using learned latent representations.

**[SCALE: Towards Collaborative Content Analysis in Social Science with Large Language Model Agents and Human Intervention](https://aclanthology.org/2025.acl-long.416.pdf) (as "Text coding")**
> Converting unstructured text entries into discrete numerical categories based on a codebook of theory-driven rules, analogous to text classification.

## Relationships

### Text classification →
- **AG News** (measurements) — *measured_by*
  > SST-2 (Socher et al., 2013) and AGNews (Zhang et al., 2015) are text classification tasks with different class numbers
  - [BadEdit: Backdooring Large Language Models by Model Editing](https://proceedings.iclr.cc/paper_files/paper/2024/file/6f6fe6789e14796b6544a04b20d11902-Paper-Conference.pdf)
- **TREC** (measurements) — *measured_by*
  > We study 4-way news classification AGNews (Zhang et al., 2015), 6-way question classification TREC (Voorhees & Tice, 2000)... (Section 5.1)
  - [Privacy-Preserving In-Context Learning with Differentially Private Few-Shot Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/8cb564df771e9eacbfe9d72bd46a24a9-Paper-Conference.pdf)
- **GLUE** (measurements) — *measured_by*
  > We evaluate on GLUE [70] for text classification and GSM-8K [9] for mathematical reasoning (Section 4).
  - [PACE: Marrying generalization in PArameter-efficient fine-tuning with Consistency rEgularization](https://proceedings.neurips.cc/paper_files/paper/2024/file/70a06501001e1820fd1eb9ee821302d2-Paper-Conference.pdf)
- **SST-2** (measurements) — *measured_by*
  > We study text classification using four datasets: sentiment analysis using SST-2 (Socher et al., 2013)... (Section 4.1)
  - [Privacy-Preserving In-Context Learning for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/572cd21bd5dea96b065476b77d21b3c6-Paper-Conference.pdf)
- **DBPedia** (measurements) — *measured_by*
  > ...and 14-way topic classification DBPedia (Zhang et al., 2015) datasets for classification tasks. (Section 5.1)
  - [Privacy-Preserving In-Context Learning with Differentially Private Few-Shot Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/8cb564df771e9eacbfe9d72bd46a24a9-Paper-Conference.pdf)
- **IMDb** (measurements) — *measured_by*
  > Table 1: Overview of the tasks, datasets... Task Text Classification Dataset IMDB
  - [Vector-ICL: In-context Learning with Continuous Vector Representations](https://proceedings.iclr.cc/paper_files/paper/2025/file/46516c4204d6cab8299e55d4ebf7ccec-Paper-Conference.pdf)
- **Emotion (dair-ai)** (measurements) — *measured_by*
  > Following Zhang et al. (2023b), we evaluate on a series of Text Classification datasets: CoLA (2 labels) (Warstadt et al., 2019), Emotion (6 labels) (Saravia et al., 2018)... (Section 3.1)
  - [Learning to Reason via Program Generation, Emulation, and Search](https://proceedings.neurips.cc/paper_files/paper/2024/file/401ece9f5d1cfa8600c22049ef43930e-Paper-Conference.pdf)
- **SIB-200** (measurements) — *measured_by*
  > We evaluate our models on five widely adopted multilingual benchmarks in a zero-shot setting, covering a range of tasks: ... and text classification (SIB-200; Adelani et al., 2024). (Section 3)
  - [From Unaligned to Aligned: Scaling Multilingual LLMs with Multi-Way Parallel Corpora](https://aclanthology.org/2025.emnlp-main.374.pdf)
- **Rotten Tomatoes** (measurements) — *measured_by*
  > We primarily evaluate our method on AG News (4 classes) [77], SST-2 (2 classes) [57], Rotten Tomatoes (2 classes) [50], and Subj (2 classes) [18] datasets which all admit classification tasks. (Section 5.2)
  - [DETAIL: Task DEmonsTration Attribution for Interpretable In-context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2ceda49041816da6d5a34eb3b612607f-Paper-Conference.pdf)
- **Subj** (measurements) — *measured_by*
  > We primarily evaluate our method on AG News (4 classes) [77], SST-2 (2 classes) [57], Rotten Tomatoes (2 classes) [50], and Subj (2 classes) [18] datasets which all admit classification tasks. (Section 5.2)
  - [DETAIL: Task DEmonsTration Attribution for Interpretable In-context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2ceda49041816da6d5a34eb3b612607f-Paper-Conference.pdf)
- **Standard CL Benchmark** (measurements) — *measured_by*
  > “This benchmark comprises five text classification datasets: AG News, Amazon Reviews, Yelp Reviews, DBpedia, and Yahoo Answers”
  - [Learn more, but bother less: parameter efficient continual learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/b0bc711f48724237b38823c4d9cee10b-Paper-Conference.pdf)
- **Financial PhraseBank** (measurements) — *measured_by*
  > We assessed our proposed methods by comparing them with standard loss functions across several text classification benchmarks, including Financial Phrasebank (Financial) (Malo et al., 2014), irony detection (Tweet Irony) (Van Hee et al., 2018), and the MRPC dataset from GLUE (Wang et al., 2018).
  - [Not All LLM-Generated Data Are Equal: Rethinking Data Weighting in Text Classification](https://proceedings.iclr.cc/paper_files/paper/2025/file/03dfa2a7755635f756b160e9f4c6b789-Paper-Conference.pdf)
- **OpenReview** (measurements) — *measured_by*
  > We conduct experiments on two classiﬁcation tasks: Yelp (Yelp, Inc.) and OpenReview (Xie et al., 2024), both of which are 5-way classiﬁcation... (Section 4.1.1)
  - [Synthesizing Privacy-Preserving Text Data via Finetuning *without* Finetuning Billion-Scale LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25g/tan25g.pdf)
- **MMLU** (measurements) — *measured_by*
  > In Table 2, we present the text classification results of different dataset pruning methods on the MMLU benchmark. (Section 4.2.2)
  - [Exploring Learning Complexity for Efficient Downstream Dataset Pruning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7e4aab3786a1f8e39e0f9b8dd9fa105-Paper-Conference.pdf)
- **Jigsaw** (measurements) — *measured_by*
  > For the Classification task in Indirect Evaluation, we utilize existing tabular bias evaluation datasets to construct new datasets. Particularly... we utilize the following datasets: Adult (Dua et al., 2017), Credit (Yeh & Lien, 2009), and Jigsaw (Cjadams et al., 2019).
  - [CEB: Compositional Evaluation Benchmark for Fairness in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/38e491559eb9e4cf31b8cd3a4e222436-Paper-Conference.pdf)
- **20 Newsgroups** (measurements) — *measured_by*
  > When conducting domain shift poisoning pre-training, we utilize the IMDB (Maas et al., 2011), Twitter (Founta et al., 2018), and 20 Newsgroups (Lang, 1995) as the proxy dataset for sentiment analysis, toxicity detection, and topic classification task, respectively (Section 5.1).
  - [Certifying Language Model Robustness with Fuzzed Randomized Smoothing: An Efficient Defense Against Backdoor Attacks](https://proceedings.iclr.cc/paper_files/paper/2025/file/f53fd88a4340063ecd258c0ae9948b40-Paper-Conference.pdf)
- **Super-NaturalInstructions** (measurements) — *measured_by*
  > The Super-Natural instruction dataset (Wang et al., 2022) contains a collection of 1600+ NLP tasks, including both classiﬁcation and generation tasks.
  - [LoRA Done RITE: Robust Invariant Transformation Equilibration for LoRA Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/bcbc0f660d2dde42f9d1d0ecb14a6f9a-Paper-Conference.pdf)
- **Yelp** (measurements) — *measured_by*
  > We conduct experiments on two classiﬁcation tasks: Yelp (Yelp, Inc.) and OpenReview (Xie et al., 2024), both of which are 5-way classiﬁcation... (Section 4.1.1)
  - [Synthesizing Privacy-Preserving Text Data via Finetuning *without* Finetuning Billion-Scale LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25g/tan25g.pdf)
- **QNLI** (measurements) — *measured_by*
  > QNLI: This is a dataset containing sentence pairs for binary classification (entailment/not entailment). (Section 5)
  - [Cape: Context-Aware Prompt Perturbation Mechanism with Differential Privacy](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25g/wu25g.pdf)
- **BANKING77** (measurements) — *measured_by*
  > Text Classification: Requires models to capture the overall semantics of a single text input. We use Patent (Sharma et al., 2019), Imdb and Banking77 (both from MTEB (Muennighoff et al., 2023)). (Section 4.1)
  - [EMO: Embedding Model Distillation via Intra-Model Relation and Optimal Transport Alignments](https://aclanthology.org/2025.emnlp-main.385.pdf)
- **MNLI** (measurements) — *measured_by*
  > We experiment on four large-scale text classification datasets: SST-2 (Socher et al., 2013), MNLI (Williams et al., 2018), AG News (Zhang and LeCun, 2015), and IMDB (Maas et al., 2011) (Section 3.1).
  - [CondenseLM: LLMs-driven Text Dataset Condensation via Reward Matching](https://aclanthology.org/2025.emnlp-main.65.pdf)
- **Twitter Financial News Sentiment** (measurements) — *measured_by*
  > We evaluate our models on 9 text classification benchmark datasets ... These are: AG News (Zhang et al., 2015), Emotion (Saravia et al., 2018), Stanford Sentiment Treebank (SST2 & SST5) (Socher et al., 2013), Multiclass Sentiment Analysis, Twitter Financial News Sentiment, IMDb (Maas et al., 2011), and Hate Speech Offensive (Davidson et al., 2017).
  - [Generative or Discriminative? Revisiting Text Classification in the Era of Transformers](https://aclanthology.org/2025.emnlp-main.486.pdf)
- **Plutus-ben** (measurements) — *measured_by*
  > “Plutus-ben addresses six core tasks: numeric/textual named entity recognition, question answering, extractive summarization, abstractive summarization, and topic classification.”
  - [Plutus: Benchmarking Large Language Models in Low-Resource Greek Finance](https://aclanthology.org/2025.emnlp-main.1535.pdf)
- **LaMP** (measurements) — *measured_by*
  > "LaMP benchmark consisting of various text classification and generation tasks"
  - [Personalized Language Models via Privacy-Preserving Evolutionary Model Merging](https://aclanthology.org/2025.emnlp-main.1747.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > All the tasks except for MT are classification tasks, where we use the lm-evaluation-harness (Gao et al., 2024) evaluation tool and report accuracy. (Section 5.4)
  - [Adapters for Altering LLM Vocabularies: What Languages Benefit the Most?](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab5492f57995409351cbf1a1cdf5f1a4-Paper-Conference.pdf)
- **Amazon Polarity** (measurements) — *measured_by*
  > We study text classification using four datasets: sentiment analysis using SST-2 (Socher et al., 2013) and Amazon (Zhang et al., 2015)... (Section 4.1)
  - [Privacy-Preserving In-Context Learning for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/572cd21bd5dea96b065476b77d21b3c6-Paper-Conference.pdf)
- **CoLA** (measurements) — *measured_by*
  > Following Zhang et al. (2023b), we evaluate on a series of Text Classification datasets: CoLA (2 labels) (Warstadt et al., 2019)... (Section 3.1)
  - [Learning to Reason via Program Generation, Emulation, and Search](https://proceedings.neurips.cc/paper_files/paper/2024/file/401ece9f5d1cfa8600c22049ef43930e-Paper-Conference.pdf)

### → Text classification
- **Synthetic data generation** (behaviors tasks) — *causes*
  > synthetic data plays a crucial role in boosting the performance of LLMs across a variety of downstream tasks, including text classification... (Section 2.2)
  - [Towards a Theoretical Understanding of Synthetic Data in LLM Post-Training: A Reverse-Bottleneck Perspective](https://proceedings.iclr.cc/paper_files/paper/2025/file/1e0bfe8bbaa0e70809f0a8ccd9c2ff3e-Paper-Conference.pdf)

### Associated with
- **In-context learning** (constructs)
  > We evaluate the in-context learnig ability of ICLM using 32 demonstration examples. We use seven text classification datasets... (Section 3.3.2)
  - [In-Context Pretraining: Language Modeling Beyond Document Boundaries](https://proceedings.iclr.cc/paper_files/paper/2024/file/a1fe2365abdb691332537990a6385909-Paper-Conference.pdf)
- **Pseudo-label generation** (behaviors tasks)
  > We utilize LLMs to generate pseudo-labels for unlabeled texts through task-specific prompting designed for classification. (Section 3.1)
  - [LLM-Guided Co-Training for Text Classification](https://aclanthology.org/2025.emnlp-main.1583.pdf)
- **Semantic understanding** (constructs)
  > Topic Classification (TC) as a primarily semantic task (Section 1)
  - [Tokenization and Representation Biases in Multilingual Models on Dialectal NLP Tasks](https://aclanthology.org/2025.emnlp-main.1224.pdf)
- **Consistency** (constructs)
  > We therefore introduce two metrics for classification tasks, namely sensitivity and consistency, which are complementary to task performance. (Abstract)
  - [What Did I Do Wrong? Quantifying LLMs' Sensitivity and Consistency to Prompt Engineering](https://aclanthology.org/2025.naacl-long.73.pdf)
- **Cross-lingual generalization** (constructs)
  > We conducted continued pre-training of open-source LLMs using corpora obtained through various transliteration methods, analyzed cross-lingual transfer performance across text classification, named entity recognition, machine reading comprehension, knowledge extraction, and machine translation tasks (Section 1).
  - [Enhancing Cross-Lingual Transfer through Reversible Transliteration: A Huffman-Based Approach for Low-Resource Languages](https://aclanthology.org/2025.acl-long.795.pdf)
