# Medical image classification
**Type:** Behavior  
**Referenced in:** 6 papers  
**Also known as:** Disease classification, Lesion identification, Lung opacity detection, Enlarged cardiomediastinum detection, COVID-19 detection  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats it as label assignment over medical images, most commonly assigning disease, modality, or organ-related labels. Several papers narrow this to chest imaging, where the task is framed as detecting and classifying pathologies or abnormalities into predefined diagnostic classes, or as binary decisions using labels such as healthy versus pneumonia, normal versus lung opacity, whether an image shows evidence of enlarged cardiomediastinum, or whether an X-ray indicates COVID-19 symptoms. A smaller formulation focuses on lesion identification, where success is identifying and naming abnormalities such as tumors or cancers within a specified region of a scan.

**Variants.** Papers use several nearby task names, including disease classification, lesion identification, lung opacity detection, enlarged cardiomediastinum detection, and COVID-19 detection. Chest X-rays and chest radiographs are the most common settings in the available descriptions, while other variants extend to broader image classification with modality, organ, and disease labels. Some formulations are region-centric, focusing on abnormalities like tumors and cancers, and the lung opacity variant is described both as locating opacities on chest radiographs and as a binary classification task.

**Space of elicitation and scores.** No measurement instrument is linked to it. The operationalizations that are described are direct label-based tasks, for example binary classification between "Normal" and "Lung Opacity," deciding whether an image shows evidence of enlarged cardiomediastinum, or classifying pathologies and abnormalities into predefined classes.

**What it is taken as evidence of.** Only a single construct is linked to it, and the link is recorded as related rather than causal or correlational. One paper relates medical image classification to Versatility, stating that performance on medical image classification across 8 modalities showcases versatility; no other construct link is reported.

## Sources

**[MedTrinity-25M: A Large-scale Multimodal Dataset with Multigranular Annotations for Medicine](https://proceedings.iclr.cc/paper_files/paper/2025/file/11c483499c285f30daf832c17dc752bd-Paper-Conference.pdf)**
> Assigning disease, modality, or organ-related labels to medical images.

**[MedRAX: Medical Reasoning Agent for Chest X-ray](https://raw.githubusercontent.com/mlresearch/v267/main/assets/fallahpour25a/fallahpour25a.pdf) (as "Disease classification")**
> Detecting and categorizing pathologies or abnormalities in chest X-rays into predefined diagnostic classes.

**[Interpretable Bilingual Multimodal Large Language Model for Diverse Biomedical Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/414fd191b3246a19a55741b938380136-Paper-Conference.pdf) (as "Lesion identification")**
> The specific task of identifying and naming abnormalities, such as tumors or cancers, within a specified region of a medical scan.

**[FEDMEKI: A Benchmark for Scaling Medical Foundation Models via Federated Knowledge Injection](https://proceedings.neurips.cc/paper_files/paper/2024/file/0235cbb8cd6425d0b55daefce388fc0b-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Lung opacity detection")**
> Classifying chest radiographs as showing lung opacity or normal.

**[FEDMEKI: A Benchmark for Scaling Medical Foundation Models via Federated Knowledge Injection](https://proceedings.neurips.cc/paper_files/paper/2024/file/0235cbb8cd6425d0b55daefce388fc0b-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Enlarged cardiomediastinum detection")**
> Classifying chest radiographs for the likelihood of enlarged cardiomediastinum.

**[FEDMEKI: A Benchmark for Scaling Medical Foundation Models via Federated Knowledge Injection](https://proceedings.neurips.cc/paper_files/paper/2024/file/0235cbb8cd6425d0b55daefce388fc0b-Paper-Datasets_and_Benchmarks_Track.pdf) (as "COVID-19 detection")**
> A classification task to determine from an X-ray image whether a patient has symptoms indicative of COVID-19.

## Relationships

### Medical image classification →
- **Linear probing** (measurements) — *measured_by*
  > Classification performance on natural and medical images through linear probing using features extracted from untrained and frozen models versus pixels features (See Sec 3 for details). (Figure 2)
  - [A Textbook Remedy for Domain Shifts: Knowledge Priors for Medical Image Analysis](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4e683f0ce6b91e7fbdae9d32642d88f-Paper-Conference.pdf)

### Associated with
- **Versatility** (constructs)
  > Our MedRegA not only enables three region-centric tasks, but also achieves the best performance for visual question answering, report generation and medical image classification over 8 modalities, showcasing significant versatility. (Abstract)
  - [Interpretable Bilingual Multimodal Large Language Model for Diverse Biomedical Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/414fd191b3246a19a55741b938380136-Paper-Conference.pdf)
