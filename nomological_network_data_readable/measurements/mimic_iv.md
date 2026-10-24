# MIMIC-IV
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** A common description in the papers is a large-scale multimodal clinical dataset, and one definition specifically says it is used to evaluate multimodal fusion strategies for patient outcome prediction. Some papers also frame it as a public or real-world EHR dataset and mention 28,900 EHRs. The named tasks include length of stay and 48-hour in-hospital mortality, and one paper says its records are converted into test samples for a full-path clinical diagnosis task.

**What it is claimed to measure.** Papers use MIMIC-IV to measure 4 behavioral indicators and 1 construct. The behavioral uses are medical diagnosis, mortality prediction, hospital readmission prediction, and length of stay prediction, while the only construct link is multimodal integration. Overall, the reported uses spread across several clinical prediction tasks rather than concentrating on a single behavioral outcome.

**Space of uses.** No measurement instrument is linked to it. In use, papers mostly position MIMIC-IV as an evaluation dataset for EHR methods, and papers also use it alongside MIMIC-III to verify the effectiveness of compared methods or to evaluate prediction and diagnosis systems across mortality, readmission, length-of-stay, and diagnosis settings. One paper also uses it as the transfer destination after pretraining on CLIMB.

## Sources

**[CLIMB: Data Foundations for Large Scale Multimodal Clinical Foundation Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dai25b/dai25b.pdf)**
> A large-scale multimodal clinical dataset used to evaluate multimodal fusion strategies for patient outcome prediction, including length of stay and in-hospital mortality.

## Relationships

### → MIMIC-IV
- **Medical diagnosis** (behaviors tasks) — *measured_by*
  > we leverage the MIMIC-IV dataset ... we convert these records into test samples for the full-path clinical diagnosis task. (Section 3.3)
  - [Evaluating LLMs Across Multi-Cognitive Levels: From Medical Knowledge Mastery to Scenario-Based Problem Solving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25n/zhou25n.pdf)
- **Mortality prediction** (behaviors tasks) — *measured_by*
  > Extensive experiments demonstrate that KARE outperforms leading models by up to 10.8-15.0% on MIMIC-III and 12.6-12.7% on MIMIC-IV for mortality and readmission predictions. (Abstract)
  - [Reasoning-Enhanced Healthcare Predictions with Knowledge Graph Community Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/cb5a3b4589c1a16f14740396625cbfc8-Paper-Conference.pdf)
- **Hospital readmission prediction** (behaviors tasks) — *measured_by*
  > Extensive experiments demonstrate that KARE outperforms leading models by up to 10.8-15.0% on MIMIC-III and 12.6-12.7% on MIMIC-IV for mortality and readmission predictions. (Abstract)
  - [Reasoning-Enhanced Healthcare Predictions with Knowledge Graph Community Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/cb5a3b4589c1a16f14740396625cbfc8-Paper-Conference.pdf)
