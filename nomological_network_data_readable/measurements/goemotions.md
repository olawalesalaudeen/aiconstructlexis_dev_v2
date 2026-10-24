# GoEmotions
**Type:** Measurement  
**Referenced in:** 10 papers  
**Also known as:** GoEmotion, GoEmo  

## State of the Field

**What it is.** Across papers, GoEmotions is most commonly described as a multi-label emotion recognition benchmark or dataset with 27 fine-grained emotions. Several definitions say it contains human-annotated Reddit comments, with one paper describing 58,000 comments from popular English subreddits and labels drawn from 27 emotions plus neutral, while a smaller line of work describes it more generally as texts with fine-grained emotions and one definition instead refers to human annotations of tweets. Several papers also use pooled variants, usually seven labels formed by hierarchical clustering, and one paper notes an average of 3.6 annotators per sample.

**What it is claimed to measure.** Papers link GoEmotions to one behavioral indicator and no constructs, and the linked indicator is emotion analysis. The claims are concentrated rather than spread across multiple outcomes: several papers use it to measure emotion analysis, describing it as a multilabel emotion recognition benchmark with 27 emotions.

**Space of uses.** The prevailing use is as an evaluation benchmark for emotion classification or emotion recognition, including fine-grained, multi-label, and open-set setups. Some papers adapt the label space by pooling the 27 labels into seven clusters for efficiency, conciseness, or aggregate-label evaluation, while one paper uses the dataset to train probes for positive and negative categories and then evaluate attitude adjustment. Papers do not link it to other measurement instruments.

**Concerns raised.** Only a smaller line of work states explicit concerns around the task framing used with GoEmotions. One definition says it requires models to generalise across highly diverse linguistic expressions and to handle multi-label dependencies and annotation subjectivity, and another uses the dataset for subjective label filtering and correction.

## Sources

**[Model Surgery: Modulating LLM's Behavior Via Simple Parameter Editing](https://aclanthology.org/2025.naacl-long.321.pdf)**
> Multilabel emotion recognition benchmark with 27 emotions, used here with pooled clusters (admiration, anger, fear, joy, optimism, sadness, surprise) to evaluate LLMs on emotion classification with individual and aggregate labels.

**[TestNUC: Enhancing Test-Time Computing Approaches and Scaling through Neighboring Unlabeled Data Consistency](https://aclanthology.org/2025.acl-long.1486.pdf) (as "GoEmotion")**
> Dataset of Reddit comments labeled with fine-grained emotions such as amusement, fear, and gratitude, used for emotion recognition evaluation.

**[Co-Evolving LLMs and Embedding Models via Density-Guided Preference Optimization for Text Clustering](https://aclanthology.org/2025.emnlp-main.241.pdf) (as "GoEmo")**
> A dataset for emotion detection containing texts annotated with fine-grained emotions.

## Relationships

### → GoEmotions
- **Emotion analysis** (behaviors tasks) — *measured_by*
  > GoEmotions (Demszky et al., 2020): Multilabel emotion recognition benchmark with 27 emotions. (Section 4.1)
  - [Aggregation Artifacts in Subjective Tasks Collapse Large Language Models' Posteriors](https://aclanthology.org/2025.naacl-long.284.pdf)
