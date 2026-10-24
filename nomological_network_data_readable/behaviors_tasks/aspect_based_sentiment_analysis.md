# Aspect-based sentiment analysis
**Type:** Behavior  
**Referenced in:** 11 papers  
**Also known as:** Triplet extraction, Pair extraction, Quadruple extraction, Single-element extraction, Structured opinion extraction, Span extraction capability, Aspect-based sentiment classification, Aspect sentiment quad prediction  

## State of the Field

**Space of definitions.** Definitions largely treat this behavior as fine-grained sentiment analysis at the aspect level: extracting opinion targets or aspects and their sentiment polarities from text, or identifying the sentiment expressed toward a specific aspect or feature of an entity. Some authors require structured outputs rather than only aspect-polarity pairs, asking for triplets such as (aspect term, aspect category, sentiment polarity) or target-aspect-opinion triplets, and others extend this to tuples that also include targets, opinions, categories, or polarity. A smaller formulation emphasizes the span extraction side of the task, describing it as extracting sentiments together with their corresponding aspects and opinion terms, including cases where surface forms vary.

**Variants.** Variants differ mainly by output structure and setting. Papers study triplet extraction, pair extraction, quadruple extraction, and single-element extraction, while other papers use names such as structured opinion extraction, feature-centric opinion extraction, aspect-based sentiment classification, and aspect sentiment quad prediction. The settings mentioned include given sentences, conversational utterances with code-like replies and non-opinion detection, online content, restaurant and laptop reviews, multilingual reviews, and Persian text. One paper also reports that aspect-based sentiment analysis is related to text generation, where the model predicts a set of sentiment tuples.

**Space of elicitation and scores.** Across the papers, it is measured by one instrument, SemEval-2016 Task 5. The linked evidence describes this instrument as a dataset of real user restaurant reviews in English, Spanish, French, Dutch, Russian, and Turkish. No other measurement instrument is linked to it.

**What it is taken as evidence of.** Across the papers, this behavior is not linked to any construct, so the papers do not specify a construct that it is taken to indicate.

## Sources

**[Label Drop for Multi-Aspect Relation Modeling in Universal Information Extraction](https://aclanthology.org/2025.naacl-long.259.pdf)**
> Extracting opinion targets (aspects) and their sentiment polarities from text.

**[M-ABSA: A Multilingual Dataset for Aspect-Based Sentiment Analysis](https://aclanthology.org/2025.emnlp-main.128.pdf) (as "Triplet extraction")**
> The observable task of identifying and outputting (aspect term, aspect category, sentiment polarity) triplets from a given sentence.

**[Task-aware Contrastive Mixture of Experts for Quadruple Extraction in Conversations with Code-like Replies and Non-opinion Detection](https://aclanthology.org/2025.emnlp-main.207.pdf) (as "Pair extraction")**
> Extracting binary relationships such as target-aspect, target-opinion, or aspect-opinion pairs from text.

**[Task-aware Contrastive Mixture of Experts for Quadruple Extraction in Conversations with Code-like Replies and Non-opinion Detection](https://aclanthology.org/2025.emnlp-main.207.pdf) (as "Quadruple extraction")**
> Generating structured outputs in the form of (target, aspect, opinion, sentiment) tuples from conversational utterances.

**[Task-aware Contrastive Mixture of Experts for Quadruple Extraction in Conversations with Code-like Replies and Non-opinion Detection](https://aclanthology.org/2025.emnlp-main.207.pdf) (as "Single-element extraction")**
> The task of extracting individual sentiment elements, such as the target, aspect, or opinion, as separate items from text.

**[Can Large Language Models be Effective Online Opinion Miners?](https://aclanthology.org/2025.emnlp-main.1178.pdf) (as "Structured opinion extraction")**
> The task of identifying and extracting a structured set of opinion tuples, such as (entity, feature, opinion), from a given text.

**[Single Ground Truth Is Not Enough: Adding Flexibility to Aspect-Based Sentiment Analysis Evaluation](https://aclanthology.org/2025.naacl-long.603.pdf) (as "Span extraction capability")**
> The underlying ability of a model to accurately identify and extract text spans corresponding to specific semantic roles, such as aspects and opinions, even when surface forms vary.

**[Toward Efficient Sparse Autoencoder-Guided Steering for Improved In-Context Learning in Large Language Models](https://aclanthology.org/2025.emnlp-main.1474.pdf) (as "Aspect-based sentiment classification")**
> The task of identifying the sentiment expressed towards a specific aspect or entity within a text.

**[Targeted Distillation for Sentiment Analysis](https://aclanthology.org/2025.emnlp-main.1127.pdf) (as "Aspect sentiment quad prediction")**
> The task of structuring opinions into fine-grained quadruples consisting of a category, aspect, opinion, and polarity.

## Relationships

### Aspect-based sentiment analysis →
- **SemEval-2016 Task 5** (measurements) — *measured_by*
  > We evaluate the proposed framework on the SemEval-2016 dataset (Pontiki et al., 2016), which includes real user restaurant reviews in English (en), Spanish (es), French (fr), Dutch (nl), Russian (ru), and Turkish (tr). (Section 4.1)
  - [LACA: Improving Cross-lingual Aspect-Based Sentiment Analysis with LLM Data Augmentation](https://aclanthology.org/2025.acl-long.41.pdf)

### Associated with
- **Text generation** (behaviors tasks)
  > Alternatively, the ABSA task can be formulated as a text generation problem, where the model predicts a set of sentiment tuples y = {(ai, pi)}T i=1, (Section 3.1)
  - [LACA: Improving Cross-lingual Aspect-Based Sentiment Analysis with LLM Data Augmentation](https://aclanthology.org/2025.acl-long.41.pdf)
