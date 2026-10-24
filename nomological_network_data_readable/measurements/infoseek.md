# InfoSeek
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the available definitions, InfoSeek is treated as a visual question answering dataset centered on knowledge-seeking questions. The recurring description is that it requires identifying an entity in an image and then querying for a related fact, and one paper also places it among "three popular KB-VR benchmarks" alongside A-OKVQA and OK-VQA.

**What it is claimed to measure.** Papers link InfoSeek to two constructs, Generalization and Commonsense knowledge, and no behavioral indicators. In SearchLVLMs: A Plug-and-Play Framework for Augmenting Large Vision-Language Models by Searching Up-to-Date Internet Knowledge, it is used to evaluate "the generalization capability of our framework across datasets that do not necessitate up-to-date knowledge," and the same paper also reports that "InfoSeek and A-OKVQA Rely on Commonsense Knowledge (RCK)," so the available uses are split across these two constructs rather than concentrated on one.

**Space of uses.** The available papers use InfoSeek alongside A-OKVQA, OK-VQA, and GQA. One paper positions it as one of three popular KB-VR benchmarks in model evaluation, while another selects it with GQA and A-OKVQA specifically to assess generalization across datasets that do not require up-to-date knowledge.

## Sources

**[Knowledge Image Matters: Improving Knowledge-Based Visual Reasoning with Multi-Image Large Language Models](https://aclanthology.org/2025.acl-long.1063.pdf)**
> A visual question answering dataset focused on knowledge-seeking questions that require identifying an entity in an image and then querying for a related fact.

## Relationships

### → InfoSeek
- **Generalization** (constructs) — *measured_by*
  > The reason behind selecting GQA, InfoSeek, and A-OKVQA is to evaluate the generalization capability of our framework across datasets that do not necessitate up-to-date knowledge (Section 5.1).
  - [SearchLVLMs: A Plug-and-Play Framework for Augmenting Large Vision-Language Models by Searching Up-to-Date Internet Knowledge](https://proceedings.neurips.cc/paper_files/paper/2024/file/76954b4a44e158e738b4c64494977c6a-Paper-Conference.pdf)
- **Commonsense knowledge** (constructs) — *measured_by*
  > InfoSeek and A-OKVQA Rely on Commonsense Knowledge (RCK) (Table 2).
  - [SearchLVLMs: A Plug-and-Play Framework for Augmenting Large Vision-Language Models by Searching Up-to-Date Internet Knowledge](https://proceedings.neurips.cc/paper_files/paper/2024/file/76954b4a44e158e738b4c64494977c6a-Paper-Conference.pdf)
