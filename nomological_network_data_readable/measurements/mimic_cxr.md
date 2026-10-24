# MIMIC-CXR
**Type:** Measurement  
**Referenced in:** 16 papers  

## State of the Field

**What it is.** Across the surveyed work, the prevailing usage treats MIMIC-CXR as a chest X-ray or chest radiograph dataset paired with free-text radiology reports, mainly for report generation and grounded report evaluation. Several definitions add that the studies are de-identified and publicly available, and some describe each study as accompanied by labels as well as a report. A smaller line of work refers to processed or subset versions, and one paper points to a VQA variant, MIMIC-CXR-VQA, for chest-radiograph question answering.

**What it is claimed to measure.** Papers link MIMIC-CXR to 3 behavioral indicators, and to no constructs. The prevailing usage is to measure medical report generation, with additional use for radiology report generation, while a smaller line of work uses it to measure medical visual question answering. These links are all to behavioral indicators, especially report generation tasks, not to any construct.

**Space of uses.** No measurement instrument is linked to it directly, but papers commonly use MIMIC-CXR alongside IU-Xray, and sometimes alongside CT-RATE, CheXpert Plus, Harvard-FairVLMed, or PMC-OA. Snippets describe it as used for both training and evaluation, with some papers evaluating on the test set, others training a retriever and foundation model on a processed version, and another applying a method to a subset for report generation against expert reports. One benchmark-building paper also includes it for fairness and privacy evaluation because it contains demographic information, and another mentions grounded reports constructed from it.

## Sources

**[Interpretable Bilingual Multimodal Large Language Model for Diverse Biomedical Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/414fd191b3246a19a55741b938380136-Paper-Conference.pdf)**
> A chest X-ray dataset used for medical report generation and grounded report generation evaluation.

## Relationships

### → MIMIC-CXR
- **Medical report generation** (behaviors tasks) — *measured_by*
  > We utilize five medical vision-language datasets for medical VQA and report generation tasks, i.e., MIMIC-CXR (Johnson et al., 2019), IU-Xray (Demner-Fushman et al., 2016), Harvard-FairVLMed (Luo et al., 2024), PMC-OA (Lin et al., 2023a) (we only select the pathology part) and Quilt-1M (Ikezogwo et al., 2024).
  - [MMed-RAG: Versatile Multimodal RAG System for Medical Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a559a5a8aa5ae6682ced009ad97cdb16-Paper-Conference.pdf)
- **Radiology report generation** (behaviors tasks) — *measured_by*
  > In this section, we apply Conformal Alignment to chest X-ray report (CXR) generation. Following the pipeline in Figure 1, we apply our method to (a subset of) the MIMIC-CXR dataset [20]. (Section 5)
  - [Conformal Alignment: Knowing When to Trust Foundation Models with Guarantees](https://proceedings.neurips.cc/paper_files/paper/2024/file/870ccde24673d3970a680bb48496ed63-Paper-Conference.pdf)
- **Medical visual question answering** (behaviors tasks) — *measured_by*
  > We utilize five medical vision-language datasets for medical VQA and report generation tasks, i.e., MIMIC-CXR (Johnson et al., 2019), IU-Xray (Demner-Fushman et al., 2016), Harvard-FairVLMed (Luo et al., 2024), PMC-OA (Lin et al., 2023a) (we only select the pathology part) and Quilt-1M (Ikezogwo et al., 2024).
  - [MMed-RAG: Versatile Multimodal RAG System for Medical Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a559a5a8aa5ae6682ced009ad97cdb16-Paper-Conference.pdf)
