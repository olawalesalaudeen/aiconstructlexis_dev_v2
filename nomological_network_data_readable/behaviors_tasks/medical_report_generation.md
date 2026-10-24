# Medical report generation
**Type:** Behavior  
**Referenced in:** 7 papers  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats this as generating a detailed, structured or descriptive clinical report from a provided medical image or scan, centered on reporting findings. Most definitions stay at the level of describing findings in the image, while one paper broadens the input to imaging data or contextual inputs and specifies content such as findings, location, severity, and comparisons. One source snippet also states that the task requires generating a detailed report based on the provided medical scan.

**Variants.** Variation is limited mainly to naming and setting. Papers use labels such as report generation, medical report generation, and radiology report generation for closely similar tasks, and most concrete settings are chest X-ray report generation, including English report generation on chest X-ray datasets. A smaller variant allows reports to be produced from imaging data or contextual inputs rather than from an image alone.

**Space of elicitation and scores.** Papers link this behavior to 2 measurement instruments, IU-Xray and MIMIC-CXR. These are described as report generation datasets and, in some papers, as chest X-ray datasets; the common setup is to evaluate medical report generation with both together. Several papers explicitly say they use MIMIC-CXR and IU-Xray for medical or English report generation.

**What it is taken as evidence of.** Construct links are limited and mixed, covering 2 constructs rather than a single shared interpretation. One paper reports that medical report generation is related to Versatility, while another claims a causal relationship from Visual grounding to Medical report generation. Papers therefore do not converge on one construct label for it.

## Sources

**[Interpretable Bilingual Multimodal Large Language Model for Diverse Biomedical Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/414fd191b3246a19a55741b938380136-Paper-Conference.pdf)**
> The task of generating a detailed, structured textual report describing the findings in a provided medical scan.

## Relationships

### Medical report generation →
- **MIMIC-CXR** (measurements) — *measured_by*
  > We utilize five medical vision-language datasets for medical VQA and report generation tasks, i.e., MIMIC-CXR (Johnson et al., 2019), IU-Xray (Demner-Fushman et al., 2016), Harvard-FairVLMed (Luo et al., 2024), PMC-OA (Lin et al., 2023a) (we only select the pathology part) and Quilt-1M (Ikezogwo et al., 2024).
  - [MMed-RAG: Versatile Multimodal RAG System for Medical Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a559a5a8aa5ae6682ced009ad97cdb16-Paper-Conference.pdf)
- **IU-Xray** (measurements) — *measured_by*
  > We utilize five medical vision-language datasets for medical VQA and report generation tasks, i.e., MIMIC-CXR (Johnson et al., 2019), IU-Xray (Demner-Fushman et al., 2016), Harvard-FairVLMed (Luo et al., 2024), PMC-OA (Lin et al., 2023a) (we only select the pathology part) and Quilt-1M (Ikezogwo et al., 2024).
  - [MMed-RAG: Versatile Multimodal RAG System for Medical Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a559a5a8aa5ae6682ced009ad97cdb16-Paper-Conference.pdf)

### Associated with
- **Versatility** (constructs)
  > Our MedRegA not only enables three region-centric tasks, but also achieves the best performance for visual question answering, report generation and medical image classification over 8 modalities, showcasing significant versatility. (Abstract)
  - [Interpretable Bilingual Multimodal Large Language Model for Diverse Biomedical Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/414fd191b3246a19a55741b938380136-Paper-Conference.pdf)
