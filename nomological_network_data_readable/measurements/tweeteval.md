# TweetEval
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the papers, TweetEval is most commonly described as a multi-task benchmark for tweet analysis on social media, with six text classification tasks: emotion, hate speech, irony, offensive language, sentiment, and stance detection. A narrower description in one paper treats it as a benchmark for multiple Twitter-based NLP tasks and specifically uses its emotion recognition and irony detection subsets.

**What it is claimed to measure.** Papers use TweetEval to measure three behavioral indicators and no constructs. The reported measurement targets are language understanding task performance, emotion analysis, and irony detection, so the benchmark is connected to several behavioral indicators rather than to a linked construct.

**Space of uses.** Papers position TweetEval as a benchmark for evaluating models in multi-task language understanding and Twitter-based NLP settings. One study uses it alongside AffectEval as one of two multi-task benchmarks for language understanding, while another uses only the emotion recognition and irony detection parts of the benchmark.

## Sources

**[Impartial Multi-task Representation Learning via Variance-invariant Probabilistic Decoding](https://aclanthology.org/2025.acl-long.975.pdf)**
> Multi-task benchmark for tweet analysis consisting of six classification tasks: emotion, hate speech, irony, offensive language, sentiment, and stance detection.

## Relationships

### → TweetEval
- **Emotion analysis** (behaviors tasks) — *measured_by*
  > Multi-class tasks include emotion recognition (Mohammad et al., 2018) and irony detection (Van Hee et al., 2018) from the TweetEval benchmark (Barbieri et al., 2020)... (Section 4.1)
  - [Inceptive Transformers: Enhancing Contextual Representations through Multi-Scale Feature Learning Across Domains and Languages](https://aclanthology.org/2025.emnlp-main.1312.pdf)
- **Irony detection** (behaviors tasks) — *measured_by*
  > Multi-class tasks include emotion recognition (Mohammad et al., 2018) and irony detection (Van Hee et al., 2018) from the TweetEval benchmark (Barbieri et al., 2020)... (Section 4.1)
  - [Inceptive Transformers: Enhancing Contextual Representations through Multi-Scale Feature Learning Across Domains and Languages](https://aclanthology.org/2025.emnlp-main.1312.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > We conduct experiments on two multi-task benchmarks, TweetEval and AffectEval for language understanding. (Section 1)
  - [Impartial Multi-task Representation Learning via Variance-invariant Probabilistic Decoding](https://aclanthology.org/2025.acl-long.975.pdf)
