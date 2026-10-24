# FLEURS
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** Fleurs  

## State of the Field

**What it is.** Across the surveyed work, the prevailing usage treats FLEURS as a multilingual speech benchmark or dataset, often for automatic speech recognition, and one definition expands its name as the Few-shot Learning Evaluation of Universal Representations of Speech. Some papers narrow this to the English test split or test subset, where WER is computed, while a smaller line of work describes it as a multilingual or massively multilingual speech translation benchmark, including translation between English and German, Spanish, and French in both directions. One paper describes it as speech for 102 languages, and another says it covers 21 African languages.

**What it is claimed to measure.** Papers link FLEURS to 2 behavioral indicators and no constructs, so the claims about what it measures concentrate on behavioral indicators rather than constructs. The most common claim is that it measures Speech recognition, including ASR evaluations and WER on the English test split, and a smaller line of work also uses it to measure Speech translation through ST tasks on several language pairs.

**Space of uses.** Papers commonly position FLEURS as a standard multilingual benchmark for ASR and AST, and one study uses it alongside Common Voice. Another paper pairs it with FLORES as the speech side of a multiway parallel benchmark. The only instrument-to-instrument relation stated is with FLEURS-ASL, which is introduced as an extension of FLORES and FLEURS and uses FLEURS as its foundation.

**Concerns raised.** A concern raised in one paper is coverage: although it is described there as the most commonly used evaluation benchmark for ASR, the paper says it covers only 21 African languages, creating an imbalance in evaluation.

## Sources

**[Efficient One-shot Compression via Low-Rank Local Feature Distillation](https://aclanthology.org/2025.naacl-long.291.pdf) (as "Fleurs")**
> The Few-shot Learning Evaluation of Universal Representations of Speech dataset, a multilingual speech benchmark used for testing speech recognition models.

**[FLEURS-ASL: Including American Sign Language in Massively Multilingual Multitask Evaluation](https://aclanthology.org/2025.naacl-long.314.pdf)**
> A multilingual speech translation benchmark used here to evaluate translation between English and German, Spanish, and French in both directions.

## Relationships

### → FLEURS
- **Speech recognition** (behaviors tasks) — *measured_by*
  > We evaluate the models’ Word Error Rate (WER), memory footprint and latency on an out-of-distribution test dataset: the test split of the English Fleurs dataset (Conneau et al., 2022). (Section 7.2)
  - [Efficient One-shot Compression via Low-Rank Local Feature Distillation](https://aclanthology.org/2025.naacl-long.291.pdf)
- **Speech translation** (behaviors tasks) — *measured_by*
  > We analyze the output probability distributions of Whisper on the ASR and ST tasks of the Fleurs data (Conneau et al., 2023) on 4 language pairs (Section 3)
  - [Are Generative Models Underconfident? Better Quality Estimation with Boosted Model Probability](https://aclanthology.org/2025.emnlp-main.166.pdf)

### Associated with
- **FLEURS-ASL** (measurements)
  > In this paper, we introduce FLEURS-ASL, an extension of FLORES/FLEURS to support their ﬁrst sign language, American Sign Language. (Section 1)
  - [FLEURS-ASL: Including American Sign Language in Massively Multilingual Multitask Evaluation](https://aclanthology.org/2025.naacl-long.314.pdf)
