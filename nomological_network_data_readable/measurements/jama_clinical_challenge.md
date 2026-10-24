# JAMA Clinical Challenge
**Type:** Measurement  
**Referenced in:** 3 papers  
**Also known as:** JAMA  

## State of the Field

**What it is.** Across papers, the prevailing usage treats JAMA Clinical Challenge as a benchmark or dataset drawn from the JAMA Network Clinical Challenge archive, made up of challenging or complex real-world clinical cases for diagnosis or treatment decision-making. Definitions agree on a multiple-choice format built from case narratives: papers describe a long or detailed patient case followed by a clinical question, four answer choices, and a discussion or expert explanation; one description also includes the correct answer index and a medical speciality classification. One paper further specifies a size of 1,524 cases.

**What it is claimed to measure.** The measurement claims are concentrated on a small number of targets: papers link it to 1 construct and 1 behavioral indicator. Most commonly, papers use it to measure Clinical decision-making, with the cases described as testing decision-making skills in realistic clinical scenarios; it is also reported as measuring Multiple-choice question answering, since the benchmark is described as structured as a multiple-choice question-answering task with expert-written explanations.

**Space of uses.** No measurement instrument is linked to it. Papers position it as a benchmark for challenging medical questions and clinical decision-making, and one study introduces it alongside Medbullets; another describes it as presenting diagnosis or treatment decision-making questions that test the model's clinical reasoning.

## Sources

**[Benchmarking Large Language Models on Answering and Explaining Challenging Medical Questions](https://aclanthology.org/2025.naacl-long.182.pdf)**
> A dataset of complex clinical cases from the Journal of the American Medical Association, used to evaluate clinical decision-making in realistic scenarios with multiple-choice questions and expert explanations.

**[MDAgents: An Adaptive Collaboration of LLMs for Medical Decision-Making](https://proceedings.neurips.cc/paper_files/paper/2024/file/90d1fc07f46e31387978b88e7e057a31-Paper-Conference.pdf) (as "JAMA")**
> A benchmark dataset from the JAMA Network Clinical Challenge archive, presenting challenging real-world clinical cases that require diagnosis or treatment decision-making.

## Relationships

### → JAMA Clinical Challenge
- **Clinical decision-making** (constructs) — *measured_by*
  > (Chen et al., 2024) introduced the JAMA dataset, comprising complex clinical cases that test decision-making skills in realistic clinical scenarios.
  - [How Can We Diagnose and Treat Bias in Large Language Models for Clinical Decision-Making?](https://aclanthology.org/2025.naacl-long.114.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > Both datasets are structured as multiple-choice question-answering tasks, accompanied by expert-written explanations. (Abstract)
  - [Benchmarking Large Language Models on Answering and Explaining Challenging Medical Questions](https://aclanthology.org/2025.naacl-long.182.pdf)
