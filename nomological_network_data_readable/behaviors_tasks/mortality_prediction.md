# Mortality prediction
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** In-hospital mortality prediction  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is an observable binary clinical prediction task: predicting whether a patient survives or dies from clinical features or historical electronic health records. Most formulations place the outcome during an ICU stay or hospital admission, while one paper defines the target as the patient’s survival status at the next visit, and another uses a narrower timeframe, 48-hour in-hospital mortality.

**Variants.** Papers use several closely related labels and settings for this behavior. The main names are "mortality prediction" and "in-hospital mortality prediction," with narrower variants including ICU-stay mortality, next-visit mortality from historical electronic health records, and 48-hour in-hospital mortality, also written as "48 IHM."

**Space of elicitation and scores.** Operationalization centers on two linked measurement instruments: MIMIC-III and MIMIC-IV, with MIMIC-III appearing most often. Papers describe mortality prediction as being measured by these datasets, including ICU-oriented extraction from MIMIC-III and reported evaluations on both MIMIC-III and MIMIC-IV.

**What it is taken as evidence of.** No construct is linked to mortality prediction in the papers, so they do not explicitly present it as evidence of a broader construct.

## Sources

**[FEDMEKI: A Benchmark for Scaling Medical Foundation Models via Federated Knowledge Injection](https://proceedings.neurips.cc/paper_files/paper/2024/file/0235cbb8cd6425d0b55daefce388fc0b-Paper-Datasets_and_Benchmarks_Track.pdf)**
> Predicting whether a patient will survive or die during an ICU stay from clinical features.

**[CLIMB: Data Foundations for Large Scale Multimodal Clinical Foundation Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dai25b/dai25b.pdf) (as "In-hospital mortality prediction")**
> The observable classification task of predicting whether a patient will die within a specific timeframe (e.g., 48 hours) during their hospital admission.

## Relationships

### Mortality prediction →
- **MIMIC-III** (measurements) — *measured_by*
  > Mortality Prediction involves using various data points and a classification or predictive model to estimate the likelihood of a patient’s survival or death during their stay in the Intensive Care Unit (ICU). We extract the data from MIMIC-III using the ICU-oriented preprocessing pipeline [78]. (Section 4.1).
  - [FEDMEKI: A Benchmark for Scaling Medical Foundation Models via Federated Knowledge Injection](https://proceedings.neurips.cc/paper_files/paper/2024/file/0235cbb8cd6425d0b55daefce388fc0b-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MIMIC-IV** (measurements) — *measured_by*
  > Extensive experiments demonstrate that KARE outperforms leading models by up to 10.8-15.0% on MIMIC-III and 12.6-12.7% on MIMIC-IV for mortality and readmission predictions. (Abstract)
  - [Reasoning-Enhanced Healthcare Predictions with Knowledge Graph Community Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/cb5a3b4589c1a16f14740396625cbfc8-Paper-Conference.pdf)
