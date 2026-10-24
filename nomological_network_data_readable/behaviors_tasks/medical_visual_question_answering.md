# Medical visual question answering
**Type:** Behavior  
**Referenced in:** 11 papers  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is a multimodal question answering task over medical images: models take a medical image and a textual question as input and generate an answer. Most definitions emphasize answering based on the image content, while a smaller line of work specifies open-ended and closed-form or closed-ended responses, and one definition broadens the task from simple pattern recognition to more complex diagnostic reasoning or diagnosis-related responses.

**Variants.** Papers use several near-equivalent names for the task, including MedVQA, Med-VQA, MVQA, and medical or biomedical VQA. The main variants discussed are response format, open-ended versus closed-form or closed-ended, and task scope, from pattern recognition questions to more complex diagnostic reasoning; some papers also frame the prompts as clinical questions about the given image.

**Space of elicitation and scores.** Papers operationalize this behavior mainly with benchmark datasets. It is linked to 7 measurement instruments, with VQA-RAD and SLAKE appearing most often, followed by PathVQA, IU-Xray, and LLaVA-Med, plus 2 other instruments; papers also describe these instruments as popular medical VQA benchmarks or biomedical VQA datasets.

**What it is taken as evidence of.** Papers do not converge on this behavior as evidence of several constructs. Only one construct is linked, Visual grounding, and the recorded relationship is directional: one paper claims a causal relationship from Visual grounding to medical visual question answering, while reporting improved visual grounding and overall model performance on medical VQA.

## Sources

**[FEDMEKI: A Benchmark for Scaling Medical Foundation Models via Federated Knowledge Injection](https://proceedings.neurips.cc/paper_files/paper/2024/file/0235cbb8cd6425d0b55daefce388fc0b-Paper-Datasets_and_Benchmarks_Track.pdf)**
> Answering questions about medical images using both visual and textual inputs.

## Relationships

### Medical visual question answering →
- **VQA-RAD** (measurements) — *measured_by*
  > This experiment is conducted on popular medical VQA benchmarks VQA-RAD and SLAKE. (Section 4.5)
  - [MoVA: Adapting Mixture of Vision Experts to Multimodal Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/bb0fea29f7aa6ede17e906ac6a225f34-Paper-Conference.pdf)
- **SLAKE** (measurements) — *measured_by*
  > This experiment is conducted on popular medical VQA benchmarks VQA-RAD and SLAKE. (Section 4.5)
  - [MoVA: Adapting Mixture of Vision Experts to Multimodal Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/bb0fea29f7aa6ede17e906ac6a225f34-Paper-Conference.pdf)
- **PathVQA** (measurements) — *measured_by*
  > We benchmark LLaVA-Tri on three biomedical Visual Question Answering (VQA) datasets, VQA-RAD (Lau et al., 2018a), SLAKE (Liu et al., 2021), and PathVQA (He et al., 2020a), to assess the efficacy of aligning the model using MedTrinity-25M. (Section 4.1)
  - [MedTrinity-25M: A Large-scale Multimodal Dataset with Multigranular Annotations for Medicine](https://proceedings.iclr.cc/paper_files/paper/2025/file/11c483499c285f30daf832c17dc752bd-Paper-Conference.pdf)
- **IU-Xray** (measurements) — *measured_by*
  > We utilize five medical vision-language datasets for medical VQA and report generation tasks, i.e., MIMIC-CXR (Johnson et al., 2019), IU-Xray (Demner-Fushman et al., 2016), Harvard-FairVLMed (Luo et al., 2024), PMC-OA (Lin et al., 2023a) (we only select the pathology part) and Quilt-1M (Ikezogwo et al., 2024).
  - [MMed-RAG: Versatile Multimodal RAG System for Medical Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a559a5a8aa5ae6682ced009ad97cdb16-Paper-Conference.pdf)
- **MIMIC-CXR** (measurements) — *measured_by*
  > We utilize five medical vision-language datasets for medical VQA and report generation tasks, i.e., MIMIC-CXR (Johnson et al., 2019), IU-Xray (Demner-Fushman et al., 2016), Harvard-FairVLMed (Luo et al., 2024), PMC-OA (Lin et al., 2023a) (we only select the pathology part) and Quilt-1M (Ikezogwo et al., 2024).
  - [MMed-RAG: Versatile Multimodal RAG System for Medical Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a559a5a8aa5ae6682ced009ad97cdb16-Paper-Conference.pdf)
- **PMC-VQA** (measurements) — *measured_by*
  > We evaluate our method on three medical VQA datasets: SLAKE (Liu et al., 2021), VQA-RAD (Lau et al., 2018), and PMC-VQA (Zhang et al., 2023). (Section 4.2.1)
  - [Guiding Medical Vision-Language Models with Diverse Visual Prompts: Framework Design and Comprehensive Exploration of Prompt Variations](https://aclanthology.org/2025.naacl-long.587.pdf)
