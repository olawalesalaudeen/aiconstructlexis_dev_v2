# DDXPlus
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across these papers, DDXPlus is most commonly described as a medical diagnosis dataset or benchmark used to evaluate models on complex and diverse conditions. Definitions differ in how they describe its contents: one treats it as a large-scale Electronic Health Record dataset, another as clinical vignettes with synthetic patient information for differential diagnosis, and another says agents must choose among 49 diagnoses from patient profiles detailing symptoms (StreamBench: Towards Benchmarking Continuous Improvement of Language Agents).

**What it is claimed to measure.** Papers use DDXPlus to measure 2 constructs and 1 behavioral indicator. The prevailing claim is that it measures Medical diagnosis, with papers saying it tests models on diagnosing complex and diverse medical conditions and requires a diagnosis from symptom profiles. Smaller uses report it as measuring Medical reasoning, through clinical vignettes that evaluate diagnostic reasoning abilities similar to a clinical setting, and Domain knowledge, through assessing continuous improvement in applying expert knowledge.

**Space of uses.** Across the papers, DDXPlus is used as an evaluation dataset for models or agents making medical diagnoses. One paper uses it alongside SymCat, describing both as clinical-vignette resources for differential diagnosis that closely mimic physicians' diagnostic process, while other papers position it as a test of diagnosis performance or of applying expert knowledge during diagnosis.

## Sources

**[Knowledge-Aware Co-Reasoning for Multidisciplinary Collaboration](https://aclanthology.org/2025.emnlp-main.687.pdf)**
> A large-scale Electronic Health Record (EHR) dataset used to evaluate model performance in diagnosing complex and diverse medical conditions.

## Relationships

### → DDXPlus
- **Medical diagnosis** (behaviors tasks) — *measured_by*
  > To assess LLMs’ continuous improvement in applying expert knowledge, we use the DDXPlus [23] dataset, where agents must make a medical diagnosis out of 49 diagnoses based on patient profiles detailing their symptoms. (Section 3.2)
  - [StreamBench: Towards Benchmarking Continuous Improvement of Language Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/c189915371c4474fe9789be3728113fc-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Medical reasoning** (constructs) — *measured_by*
  > DDXPlus [73]... involve clinical vignettes... evaluating the AI’s diagnostic reasoning abilities similar to a clinical setting (Section 4.1).
  - [MDAgents: An Adaptive Collaboration of LLMs for Medical Decision-Making](https://proceedings.neurips.cc/paper_files/paper/2024/file/90d1fc07f46e31387978b88e7e057a31-Paper-Conference.pdf)
- **Domain knowledge** (constructs) — *measured_by*
  > To assess LLMs’ continuous improvement in applying expert knowledge, we use the DDXPlus [23] dataset, where agents must make a medical diagnosis out of 49 diagnoses based on patient profiles detailing their symptoms. (Section 3.2)
  - [StreamBench: Towards Benchmarking Continuous Improvement of Language Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/c189915371c4474fe9789be3728113fc-Paper-Datasets_and_Benchmarks_Track.pdf)
