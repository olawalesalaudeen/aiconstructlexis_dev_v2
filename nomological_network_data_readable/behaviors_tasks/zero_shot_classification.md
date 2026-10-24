# Zero-shot classification
**Type:** Behavior  
**Referenced in:** 15 papers  
**Also known as:** Zero-shot text classification  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage describes assigning an input to one of several predefined or user-provided class labels without task-specific training, fine-tuning, or labeled examples. Most formulations say the model relies on a prompt plus its internal knowledge, or on semantic alignment between the input and class labels, and success is framed as returning the correct label, often reported as zero-shot accuracy. A smaller variation emphasizes classes not seen during training, while one multimodal formulation defines prediction as selecting the highest-scoring text description from a candidate set.

**Variants.** Most papers keep the broad name zero-shot classification, while one paper narrows it to zero-shot text classification and another uses the label zero-shot inference. The settings range from reasoning datasets to text-attributed graph classification on ogbn-arxiv, where prompts contain paper titles, abstracts, and questions, to multimodal image classification that ranks candidate text descriptions, and to a medical setting where inputs are classified by similarity to text prompts. One paper also reports downstream zero-shot evaluation with ImageNet pretrained features and 1-NN.

**Space of elicitation and scores.** Papers link it to 9 measurement instruments. The most frequently linked are ARC-Challenge, ARC-Easy, BoolQ, HellaSwag, and ImageNet-1k, with 4 other instruments also used. These instruments are datasets or benchmarks, and papers usually score the behavior with accuracy or zero-shot accuracy; one multimodal formulation instead treats the model as a score function over the input and candidate text labels and predicts the argmax.

**What it is taken as evidence of.** No construct is linked to it in the papers.

## Sources

**[Harnessing Explanations: LLM-to-LM Interpreter for Enhanced Text-Attributed Graph Representation Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/1766d75b077b66457040e4661771aec5-Paper-Conference.pdf)**
> The observable act of an LLM assigning class labels to input instances without any task-specific training, based solely on a prompt and its internal knowledge.

**[Beyond the Next Token: Towards Prompt-Robust Zero-Shot Classification via Efficient Multi-Token Prediction](https://aclanthology.org/2025.naacl-long.363.pdf) (as "Zero-shot text classification")**
> Assigning a text to one of several predefined categories without any task-specific training, using only the semantic alignment between input and class labels.

## Relationships

### Zero-shot classification →
- **ogbn-arxiv** (measurements) — *measured_by*
  > To assess the potential of LLMs in enhancing representation learning for TAGs, we conducted an initial investigation into leveraging GPT-3.5 for zero-shot classification on the ogbn-arxiv dataset. (Section 1)
  - [Harnessing Explanations: LLM-to-LM Interpreter for Enhanced Text-Attributed Graph Representation Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/1766d75b077b66457040e4661771aec5-Paper-Conference.pdf)
- **BoolQ** (measurements) — *measured_by*
  > We also compare the zero-shot accuracy on common reasoning zero-shot classiﬁcation datasets including BoolQ [50], PIQA [51], HellaSwag [52], WinoGrande [53], ARC-easy [54], ARC-challenge [54], and OpenbookQA [55]. (Section 4.1)
  - [Search for Efficient Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb64a43508e0cfe53ee6179ff31ea900-Paper-Conference.pdf)
- **PIQA** (measurements) — *measured_by*
  > We also compare the zero-shot accuracy on common reasoning zero-shot classiﬁcation datasets including BoolQ [50], PIQA [51], HellaSwag [52], WinoGrande [53], ARC-easy [54], ARC-challenge [54], and OpenbookQA [55]. (Section 4.1)
  - [Search for Efficient Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb64a43508e0cfe53ee6179ff31ea900-Paper-Conference.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > We also compare the zero-shot accuracy on common reasoning zero-shot classiﬁcation datasets including BoolQ [50], PIQA [51], HellaSwag [52], WinoGrande [53], ARC-easy [54], ARC-challenge [54], and OpenbookQA [55]. (Section 4.1)
  - [Search for Efficient Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb64a43508e0cfe53ee6179ff31ea900-Paper-Conference.pdf)
- **WinoGrande** (measurements) — *measured_by*
  > We also compare the zero-shot accuracy on common reasoning zero-shot classiﬁcation datasets including BoolQ [50], PIQA [51], HellaSwag [52], WinoGrande [53], ARC-easy [54], ARC-challenge [54], and OpenbookQA [55]. (Section 4.1)
  - [Search for Efficient Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb64a43508e0cfe53ee6179ff31ea900-Paper-Conference.pdf)
- **ARC-Easy** (measurements) — *measured_by*
  > We also compare the zero-shot accuracy on common reasoning zero-shot classiﬁcation datasets including BoolQ [50], PIQA [51], HellaSwag [52], WinoGrande [53], ARC-easy [54], ARC-challenge [54], and OpenbookQA [55]. (Section 4.1)
  - [Search for Efficient Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb64a43508e0cfe53ee6179ff31ea900-Paper-Conference.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > We also compare the zero-shot accuracy on common reasoning zero-shot classiﬁcation datasets including BoolQ [50], PIQA [51], HellaSwag [52], WinoGrande [53], ARC-easy [54], ARC-challenge [54], and OpenbookQA [55]. (Section 4.1)
  - [Search for Efficient Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb64a43508e0cfe53ee6179ff31ea900-Paper-Conference.pdf)
- **OpenBookQA** (measurements) — *measured_by*
  > We also compare the zero-shot accuracy on common reasoning zero-shot classiﬁcation datasets including BoolQ [50], PIQA [51], HellaSwag [52], WinoGrande [53], ARC-easy [54], ARC-challenge [54], and OpenbookQA [55]. (Section 4.1)
  - [Search for Efficient Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb64a43508e0cfe53ee6179ff31ea900-Paper-Conference.pdf)
- **ImageNet-1k** (measurements) — *measured_by*
  > a lower proportion of SSC results in decreased accuracy in ImageNet zero-shot classification. (Section 4.1)
  - [Revisit Large-Scale Image-Caption Data in Pre-training Multimodal Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ebba182cb97864368fdb6ae00773a5e4-Paper-Conference.pdf)

### Associated with
- **Medical diagnosis** (behaviors tasks)
  > Pathology detection via zero-shot (ZS) and linear probing at 1%, 10%, and 100% labeled data of the TUAB training set. (Table 2)
  - [EEG-Language Pretraining for Highly Label-Efficient Clinical Phenotyping](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gijsen25a/gijsen25a.pdf)
