# Medical diagnosis
**Type:** Behavior  
**Referenced in:** 21 papers  
**Also known as:** Disease Prediction, Differential diagnosis, ECG abnormal detection, Diagnosis classification, Diagnosis prediction, New diagnosis assignment, Arrhythmia diagnosis, Full-path clinical diagnosis, Phenotype prediction, Pathology detection, Seizure detection, Diagnosis extraction, Abnormal detection, Clinical diagnosis, Disease diagnosis  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats medical diagnosis as identifying, selecting, or predicting a disease label from patient information, including symptoms, clinical data, admission events, clinical notes, or longitudinal health records. Success is usually reaching a final diagnosis, often from a fixed or predefined candidate set, though some papers instead ask for a differential diagnosis, namely a list of possible conditions, or for extracting the diagnosis from dialogue and visual evidence. A recurring extension uses the same umbrella for diagnosis-style classification on physiological signals, such as deciding whether ECG or EEG data are normal or abnormal, detecting seizures, or identifying arrhythmic heartbeats. Some work also frames it as a full-path process in which a model sequentially orders examinations, integrates the results, and then arrives at a final diagnosis.

**Variants.** Papers use several names for closely related variants, with disease diagnosis, differential diagnosis, diagnosis prediction, full-path clinical diagnosis, and diagnosis extraction among the recurring labels. These variants differ mainly by input and output setting: some use symptom-rich patient profiles or clinical vignettes, some use clinical notes or visit sequences in EHRs, and some use multimodal evidence such as dialogue, visual evidence, notes, or lab tests. Other papers extend the label to longitudinal-record prediction tasks, and one paper applies disease diagnosis to plant disease reasoning from visual symptoms and contextual knowledge.

**Space of elicitation and scores.** Papers measure it with 3 instruments: MIMIC-IV, MIMIC-III, and DDXPlus. MIMIC-III and MIMIC-IV are used as public or real-world EHR datasets for diagnosis-related prediction and full-path clinical diagnosis tasks, while DDXPlus is used for diagnosis from patient profiles and for clinical vignettes that require differential diagnosis.

**What it is taken as evidence of.** Papers link medical diagnosis to 5 constructs, but they do not converge on a single construct that it reflects. Instead, individual papers claim causal relationships from semantic understanding, temporal dependency modeling, interpretability and explainability, and multimodal alignment to medical diagnosis, and one paper reports that medical diagnosis is related to medical reasoning.

## Sources

**[MedJourney: Benchmark and Evaluation of Large Language Models over Patient Clinical Journey](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f80af32390984cb709cdeb014d0df41-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Disease Prediction")**
> Inferring the patient's disease or diagnosis based on available medical information.

**[MDAgents: An Adaptive Collaboration of LLMs for Medical Decision-Making](https://proceedings.neurips.cc/paper_files/paper/2024/file/90d1fc07f46e31387978b88e7e057a31-Paper-Conference.pdf) (as "Differential diagnosis")**
> The observable task of generating a list of possible medical conditions that could explain a given set of patient symptoms and clinical data.

**[FEDMEKI: A Benchmark for Scaling Medical Foundation Models via Federated Knowledge Injection](https://proceedings.neurips.cc/paper_files/paper/2024/file/0235cbb8cd6425d0b55daefce388fc0b-Paper-Datasets_and_Benchmarks_Track.pdf) (as "ECG abnormal detection")**
> Classifying ECG signals as abnormal or normal.

**[Instruction Tuning Large Language Models to Understand Electronic Health Records](https://proceedings.neurips.cc/paper_files/paper/2024/file/62986e0a78780fe5f17b495aeded5bab-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Diagnosis classification")**
> The clinical predictive task of identifying which of a predefined set of acute care conditions are present for a patient based on their admission data.

**[StreamBench: Towards Benchmarking Continuous Improvement of Language Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/c189915371c4474fe9789be3728113fc-Paper-Datasets_and_Benchmarks_Track.pdf)**
> Selecting a diagnosis from a fixed set based on a patient profile and symptoms.

**[DiReCT: Diagnostic Reasoning for Clinical Notes via Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/892850bf793e03b5c410dfd9425b94c8-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Diagnosis prediction")**
> Predicting the patient’s primary discharge diagnosis from a clinical note, optionally with external knowledge.

**[Multimodal Medical Code Tokenizer](https://raw.githubusercontent.com/mlresearch/v267/main/assets/su25b/su25b.pdf) (as "Phenotype prediction")**
> Identifying the specific clinical manifestation or subtype of a disease based on a patient's medical history.

**[Multimodal Medical Code Tokenizer](https://raw.githubusercontent.com/mlresearch/v267/main/assets/su25b/su25b.pdf) (as "New diagnosis assignment")**
> Predicting the first occurrence of a disease diagnosis in a patient's record based on longitudinal health data.

**[Efficient Personalized Adaptation for Physiological Signal Foundation Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25ah/wu25ah.pdf) (as "Arrhythmia diagnosis")**
> Identifying abnormal heart rhythms from ECG signals, distinguishing between normal and various types of arrhythmic heartbeats.

**[Evaluating LLMs Across Multi-Cognitive Levels: From Medical Knowledge Mastery to Scenario-Based Problem Solving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25n/zhou25n.pdf) (as "Full-path clinical diagnosis")**
> The task of simulating a real-world diagnostic process by sequentially ordering examinations, integrating information from results, and arriving at a final diagnosis.

**[CLIMB: Data Foundations for Large Scale Multimodal Clinical Foundation Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dai25b/dai25b.pdf) (as "Disease diagnosis")**
> The observable task of identifying a specific disease or medical condition from a patient's clinical data.

**[EEG-Language Pretraining for Highly Label-Efficient Clinical Phenotyping](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gijsen25a/gijsen25a.pdf) (as "Pathology detection")**
> The observable task of classifying an EEG recording as either normal or containing pathological abnormalities.

**[EEG-Language Pretraining for Highly Label-Efficient Clinical Phenotyping](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gijsen25a/gijsen25a.pdf) (as "Seizure detection")**
> The observable task of classifying a segment of an EEG recording as containing either seizure or background activity.

**[3MDBench: Medical Multimodal Multi-agent Dialogue Benchmark](https://aclanthology.org/2025.emnlp-main.1353.pdf) (as "Diagnosis extraction")**
> Identifying and outputting the correct medical diagnosis from a dialogue or input context based on symptoms and visual evidence.

**[NeuroLM: A Universal Multi-task Foundation Model for Bridging the Gap between Language and EEG Signals](https://proceedings.iclr.cc/paper_files/paper/2025/file/8b4add8b0aa8749d80a34ca5d941c355-Paper-Conference.pdf) (as "Abnormal detection")**
> Classifying EEG records as clinically normal or abnormal.

**[Knowledge-Aware Co-Reasoning for Multidisciplinary Collaboration](https://aclanthology.org/2025.emnlp-main.687.pdf) (as "Clinical diagnosis")**
> Producing a diagnostic answer for a medical query or case.

## Relationships

### Medical diagnosis →
- **DDXPlus** (measurements) — *measured_by*
  > To assess LLMs’ continuous improvement in applying expert knowledge, we use the DDXPlus [23] dataset, where agents must make a medical diagnosis out of 49 diagnoses based on patient profiles detailing their symptoms. (Section 3.2)
  - [StreamBench: Towards Benchmarking Continuous Improvement of Language Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/c189915371c4474fe9789be3728113fc-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MIMIC-IV** (measurements) — *measured_by*
  > we leverage the MIMIC-IV dataset ... we convert these records into test samples for the full-path clinical diagnosis task. (Section 3.3)
  - [Evaluating LLMs Across Multi-Cognitive Levels: From Medical Knowledge Mastery to Scenario-Based Problem Solving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25n/zhou25n.pdf)

### → Medical diagnosis
- **Semantic understanding** (constructs) — *causes*
  > Language Models (LMs) have advanced diagnosis prediction by leveraging the semantic understanding of medical concepts in Electronic Health Records (EHRs). (Abstract)
  - [BoxLM: Unifying Structures and Semantics of Medical Concepts for Diagnosis Prediction in Healthcare](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25e/tan25e.pdf)
- **Temporal dependency modeling** (constructs) — *causes*
  > Capturing these overlaps while maintaining an awareness of the temporal progression is essential for accurate diagnosis prediction. (Section 2.3. Box-aware Diagnosis Prediction)
  - [BoxLM: Unifying Structures and Semantics of Medical Concepts for Diagnosis Prediction in Healthcare](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25e/tan25e.pdf)

### Associated with
- **Medical reasoning** (constructs)
  > For High-Level tasks (f3), we follow Hager et al. (2024) and assess LLMs’ capabilities of solving scenario-based problems using a full-path clinical diagnosis task, as illustrated in Figure 3. (Section 3.3)
  - [Evaluating LLMs Across Multi-Cognitive Levels: From Medical Knowledge Mastery to Scenario-Based Problem Solving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25n/zhou25n.pdf)
- **Interpretability and explainability** (constructs)
  > By quantifying the overlap between boxes, our method provides intuitive insights into the relationships between medical concepts, thereby improving the accuracy and interpretability of model predictions. (Section 2.3.2. VOLUME-BASED DIAGNOSIS PREDICTION)
  - [BoxLM: Unifying Structures and Semantics of Medical Concepts for Diagnosis Prediction in Healthcare](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25e/tan25e.pdf)
- **Zero-shot classification** (behaviors tasks)
  > Pathology detection via zero-shot (ZS) and linear probing at 1%, 10%, and 100% labeled data of the TUAB training set. (Table 2)
  - [EEG-Language Pretraining for Highly Label-Efficient Clinical Phenotyping](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gijsen25a/gijsen25a.pdf)
