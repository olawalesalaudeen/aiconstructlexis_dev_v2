# IU-Xray
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Across the papers, the prevailing description is a chest X-ray dataset paired with associated medical or radiology reports and used in evaluation. Most definitions frame it around medical report generation, while one definition also explicitly presents it as being used for medical visual question answering. One paper further specifies that its test set contains 590 samples.

**What it is claimed to measure.** Papers link IU-Xray to three behavioral indicators and no constructs. The dominant use is to measure Medical report generation: several papers describe evaluating report generation on MIMIC-CXR and IU-Xray or list IU-Xray among report generation datasets. A smaller line of work uses it to measure Medical visual question answering, and one paper uses it to measure Radiology report generation, so the reported measurement use is concentrated in generation tasks with an additional VQA use.

**Space of uses.** No measurement instrument is linked to it. In reported experiments, papers most commonly use IU-Xray alongside MIMIC-CXR, and broader evaluation suites also place it with Harvard-FairVLMed, PMC-OA, Quilt-1M, and OmniMedVQA. Papers position it as an evaluation dataset, for example by describing model evaluation on IU-Xray for report generation or including it among the datasets used for medical VQA.

## Sources

**[Interpretable Bilingual Multimodal Large Language Model for Diverse Biomedical Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/414fd191b3246a19a55741b938380136-Paper-Conference.pdf)**
> A dataset of chest X-ray images and associated reports used for evaluating medical report generation.

## Relationships

### → IU-Xray
- **Medical report generation** (behaviors tasks) — *measured_by*
  > We utilize five medical vision-language datasets for medical VQA and report generation tasks, i.e., MIMIC-CXR (Johnson et al., 2019), IU-Xray (Demner-Fushman et al., 2016), Harvard-FairVLMed (Luo et al., 2024), PMC-OA (Lin et al., 2023a) (we only select the pathology part) and Quilt-1M (Ikezogwo et al., 2024).
  - [MMed-RAG: Versatile Multimodal RAG System for Medical Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a559a5a8aa5ae6682ced009ad97cdb16-Paper-Conference.pdf)
- **Medical visual question answering** (behaviors tasks) — *measured_by*
  > We utilize five medical vision-language datasets for medical VQA and report generation tasks, i.e., MIMIC-CXR (Johnson et al., 2019), IU-Xray (Demner-Fushman et al., 2016), Harvard-FairVLMed (Luo et al., 2024), PMC-OA (Lin et al., 2023a) (we only select the pathology part) and Quilt-1M (Ikezogwo et al., 2024).
  - [MMed-RAG: Versatile Multimodal RAG System for Medical Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a559a5a8aa5ae6682ced009ad97cdb16-Paper-Conference.pdf)
