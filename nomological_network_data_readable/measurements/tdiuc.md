# TDIUC
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the cited work, TDIUC is most commonly treated as a visual question answering dataset and benchmark built around simple visual understanding questions with clear answers. Some authors describe it more specifically as featuring 1.6 million questions across 170,000 images, organized into 12 question types ranging from object identification to positional reasoning. Papers also describe drawing subsets from it, such as selecting ten categories of questions.

**What it is claimed to measure.** Papers use TDIUC to measure one behavioral indicator, Abstention, and no constructs are linked to it. The reported measurement claim is that TDIUC contains absurd questions, about 22% of the total, that are not related to the image and thus should not be answered, so authors evaluate abstention on it. In the linked uses, its measurement role is concentrated on this single behavioral indicator rather than spread across multiple constructs or behaviors.

**Space of uses.** Papers position TDIUC as a representative benchmark for examining specific topics and question types, and as a source for benchmark tasks in visual question answering. One line of use selects ten categories of questions from it, while another reports extensive experiments on it to investigate model behavior across question types. No other measurement instrument is linked to it.

## Sources

**[Have the VLMs Lost Confidence? A Study of Sycophancy in VLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/07be1a0850e58ca29e2b6ce31fc0c791-Paper-Conference.pdf)**
> A visual question answering dataset comprising simple visual understanding questions with clear answers, used as the source for benchmark tasks.

## Relationships

### → TDIUC
- **Abstention** (behaviors tasks) — *measured_by*
  > We evaluate on TDIUC (Kafle & Kanan, 2017), a VQA dataset containing absurd questions (∼22% of a total number of questions), that are not related to the image and thus should not be answered.
  - [Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf)
