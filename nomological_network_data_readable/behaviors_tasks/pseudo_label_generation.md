# Pseudo-label generation
**Type:** Behavior  
**Referenced in:** 5 papers  

## State of the Field

Across the surveyed literature, pseudo-label generation is most commonly described as a technique where a large language model acts as a 'teacher model' to generate labels for unlabeled data. This process is frequently used to expand the training set for smaller models, a practice associated with knowledge distillation. However, the specific implementation and data modality vary; some work applies this to 'unlabeled node pairs' for graph-based tasks, while other papers describe generating labels for 'unlabeled code snippets' using model confidence or a 'symbolic module'. A distinct application involves using multimodal large language models to create 'rich pseudo-labels' for images through simulated dialogues, producing 'fine-grained and diverse visual descriptions' without manual supervision. In terms of application, pseudo-label generation is operationalized to support tasks such as text classification, where LLMs generate labels for unlabeled texts via 'task-specific prompting'. The behavior is also studied in the context of zero-shot learning.

## Sources

**[TCProF:Time-Complexity Prediction SSL Framework](https://aclanthology.org/2025.naacl-long.482.pdf)**
> Using a fine-tuned large language model to generate labels for unlabeled node pairs to expand the training set for smaller models during knowledge distillation.

## Relationships

### → Pseudo-label generation
- **Zero-shot generalization** (constructs) — *causes*
  > Leveraging the LLMs’ zero-shot learning capability, this framework generates pseudo-labels, providing a foundation for entity alignment without ground truth labels. (Section 1).
  - [Entity Alignment with Noisy Annotations from Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/1b57aaddf85ab01a2445a79c9edc1f4b-Paper-Conference.pdf)

### Associated with
- **Text classification** (behaviors tasks)
  > We utilize LLMs to generate pseudo-labels for unlabeled texts through task-specific prompting designed for classification. (Section 3.1)
  - [LLM-Guided Co-Training for Text Classification](https://aclanthology.org/2025.emnlp-main.1583.pdf)
