# MIMIC-III
**Type:** Measurement  
**Referenced in:** 9 papers  

## State of the Field

**What it is.** Across the surveyed work, MIMIC-III is most commonly described as a large, publicly available, de-identified in-patient or critical-care EHR dataset from the MIMIC project. Most descriptions emphasize health data from patients who stayed in critical care units, while some specify the materials used in a study, including discharge summaries, medical notes and time-series lab tests, or radiology reports for summarization. As one study puts it, it "comprises de-identified Electronic Health Records of patients who were admitted to the ICU ... from 2001 to 2012" (Knowledge-Empowered Dynamic Graph Network for Irregularly Sampled Medical Time Series).

**What it is claimed to measure.** Papers link MIMIC-III to 1 construct and 4 behavioral indicators. The prevailing uses are to measure medical diagnosis and mortality prediction, with papers evaluating diagnosis-related methods on MIMIC-III and one study explicitly focusing on "the binary in-hospital mortality prediction task" to assess classification performance. Smaller lines of work report it as measuring hospital readmission prediction and length of stay prediction, and one paper uses it to measure privacy preservation through "privacy protection performance" on the MIMIC-III dataset, so the claims are spread across several targets rather than one construct.

**Space of uses.** No measurement instrument is linked to it. In source descriptions, papers use MIMIC-III alongside MIMIC-IV and EHRShot, and one study contrasts it with a smaller private dataset of rheumatology referral notes. Papers mainly position it as a source database for evaluation: they extract data from it for prediction tasks, build EHRCon from it, and use its test split for generated clinical summaries; as EHRCon states, it was "crafted in collaboration with healthcare professionals using the MIMIC-III EHR dataset" (EHRCon: Dataset for Checking Consistency between Unstructured Notes and Structured Tables in Electronic Health Records).

## Sources

**[Multimodal Medical Code Tokenizer](https://raw.githubusercontent.com/mlresearch/v267/main/assets/su25b/su25b.pdf)**
> A publicly available in-patient dataset from the MIMIC (Medical Information Mart for Intensive Care) project, containing de-identified health data associated with patients who stayed in critical care units.

## Relationships

### → MIMIC-III
- **Mortality prediction** (behaviors tasks) — *measured_by*
  > Mortality Prediction involves using various data points and a classification or predictive model to estimate the likelihood of a patient’s survival or death during their stay in the Intensive Care Unit (ICU). We extract the data from MIMIC-III using the ICU-oriented preprocessing pipeline [78]. (Section 4.1).
  - [FEDMEKI: A Benchmark for Scaling Medical Foundation Models via Federated Knowledge Injection](https://proceedings.neurips.cc/paper_files/paper/2024/file/0235cbb8cd6425d0b55daefce388fc0b-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Hospital readmission prediction** (behaviors tasks) — *measured_by*
  > Extensive experiments demonstrate that KARE outperforms leading models by up to 10.8-15.0% on MIMIC-III and 12.6-12.7% on MIMIC-IV for mortality and readmission predictions. (Abstract)
  - [Reasoning-Enhanced Healthcare Predictions with Knowledge Graph Community Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/cb5a3b4589c1a16f14740396625cbfc8-Paper-Conference.pdf)
- **Privacy preservation** (constructs) — *measured_by*
  > Table 3: Privacy protection performance under the private entity known setting on the MIMIC-III dataset.
  - [Controlled Generation for Private Synthetic Text](https://aclanthology.org/2025.emnlp-main.1663.pdf)
