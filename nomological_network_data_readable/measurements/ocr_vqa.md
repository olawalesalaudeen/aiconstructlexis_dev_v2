# OCR-VQA
**Type:** Measurement  
**Referenced in:** 9 papers  
**Also known as:** OCRVQA  

## State of the Field

**What it is.** Across definitions, OCR-VQA is most commonly described as a visual question answering benchmark or dataset centered on text in images. Papers characterize it as requiring understanding, reading, or reasoning about text within images, using labels such as "text understanding VQA" and "text-in-image understanding"; the name also appears as OCRVQA and OCR VQA.

**What it is claimed to measure.** Papers use OCR-VQA to measure 2 behavioral indicators and 2 constructs. The linked behavioral indicators are optical character recognition and visual question answering, and the linked constructs are document understanding and generalization. These measurement claims are spread across several targets rather than centered on a single one.

**Space of uses.** Papers do not relate OCR-VQA to any other measurement instrument. They more often place it inside broader evaluation suites, alongside datasets such as TextVQA, GQA, OKVQA, DocVQA, and VQAv2. Within those suites, it is used as a text-in-image evaluation, and some papers use it specifically to assess learned generalization ability or document understanding.

## Sources

**[Dynamic Mixture of Curriculum LoRA Experts for Continual Multimodal Instruction Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ge25d/ge25d.pdf)**
> A Visual Question Answering (VQA) benchmark that requires understanding and reasoning about text within images.

**[Learn from Downstream and Be Yourself in Multimodal Large Language Models Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25q/huang25q.pdf) (as "OCRVQA")**
> A visual question answering dataset focused on questions that require optical character recognition (OCR) to understand text in images.

## Relationships

### → OCR-VQA
- **Document understanding** (constructs) — *measured_by*
  > In order to illustrate the impact of having long in-context text, we evaluate the model for document understanding on DocVQA [15] and OCR VQA [34]. (Section 3.1)
  - [Leveraging Visual Tokens for Extended Text Contexts in Multi-Modal Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/19f10adb6749b0c9f1ff7610bd01d44d-Paper-Conference.pdf)
- **Optical character recognition** (behaviors tasks) — *measured_by*
  > ChartQA (Masry et al., 2022), OCRVQA (Mishra et al., 2019), TextVQA (Singh et al., 2019) and DocVQA (Mathew et al., 2021) to examine their ability to recognize optical character (Section 5.1)
  - [Ranked from Within: Ranking Large Multimodal Models Without Labels](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tu25a/tu25a.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > Task Type: Visual Question Answering (VQA), Dataset Name: OCR-VQA (Mishra et al., 2019), Task Description: Text Understanding VQA (Table 1)
  - [Dynamic Mixture of Curriculum LoRA Experts for Continual Multimodal Instruction Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ge25d/ge25d.pdf)
- **Generalization** (constructs) — *measured_by*
  > we assess the learned generalization ability on OKVQA (Marino et al., 2019), TextVQA (Singh et al., 2019), GQA (Hudson & Manning, 2019), and OCRVQA (Mishra et al., 2019) (Section 4.1).
  - [Learn from Downstream and Be Yourself in Multimodal Large Language Models Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25q/huang25q.pdf)
