# TQA
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Most commonly, papers treat TQA as Textbook Question Answering, described as a reading-comprehension benchmark and, in one definition, as a dataset consisting of scientific textbooks. Within that prevailing usage, authors note that it is used in generative format to assess reading comprehension. A smaller usage defines TQA as the TriviaQA dataset, described as a challenging reading comprehension dataset with question-answer pairs authored by trivia enthusiasts and used for closed-book QA.

**What it is claimed to measure.** Definitions most often frame TQA as assessing reading comprehension, though individual papers also describe it as being used for closed-book QA or for evaluating knowledge-based reasoning. In the recorded relationships, it is linked to one behavioral indicator, Out-of-distribution detection, and to no constructs. The only explicit linked measurement claim is that papers use TQA to measure out-of-distribution detection, including an experiment with statements translated into Samoan, described there as "an out-of-distribution language for TQA."

**Space of uses.** Papers use TQA alongside HumanEval, GSM8k, and NQ in multi-task evaluations spanning code, math, question answering, and reading comprehension, with TQA occupying the reading-comprehension role in that setup. One paper reports calculating F1 scores on TQA, and another describes fine-tuning the last attention layer of an 8B model on TQA as a dataset of scientific textbooks. No measurement instrument is linked to it in the recorded relationships.

## Sources

**[Mixture of LoRA Experts](https://proceedings.iclr.cc/paper_files/paper/2024/file/ce806d8b4bf38cd92d483e5a0490d983-Paper-Conference.pdf)**
> Textbook Question Answering (TQA), a reading-comprehension benchmark used here in generative format to assess reading comprehension.
