# QuALITY
**Type:** Measurement  
**Referenced in:** 16 papers  
**Also known as:** Quality  

## State of the Field

**What it is.** Across papers, QuALITY is most commonly described as a long-context, single-document question answering benchmark built from stories or articles paired with multiple-choice questions. Definitions converge on long passages or long documents, with one paper saying passages average about 5,000 tokens and another describing English passages between 2K and 8K tokens; several papers also describe it as reading comprehension or long-input QA. Most uses keep the multiple-choice format, though some papers adapt it, either by requiring the model to generate the answer directly without the four options or by recasting it as binary-choice extractive QA.

**What it is claimed to measure.** Papers link QuALITY to 2 constructs and 3 behavioral indicators. The dominant use is to measure question answering, especially multiple-choice question answering and machine reading comprehension, and papers also use it to measure long-context understanding, with one snippet saying such closed-ended tasks focus on "understanding and reasoning within long contexts." These links are concentrated on QA and long-context abilities rather than spread across many constructs. A smaller, different claim reports that QuALITY is correlated with Generation diversity, based on evidence phrased in terms of pass@5 and sample quality.

**Space of uses.** Most papers position QuALITY as one benchmark within broader long-sequence or QA evaluation suites, often alongside NarrativeQA, QASPER, and TriviaQA. The snippets also show benchmark-specific setup choices, such as using the default validation split and shared prompts with QASPER, and some papers present it as a real-world long-context task or as a closed-ended evaluation of long-context understanding.

## Sources

**[From Isolated Conversations to Hierarchical Schemas: Dynamic Tree Memory Representation for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/0382cb76309820f71c6eacd47b36ce71-Paper-Conference.pdf)**
> A single-document question answering benchmark with long passages and multiple-choice questions, here used in a direct-answer setting to assess document-level reasoning.

**[E2LLM: Encoder Elongated Large Language Models for Long-Context Understanding and Reasoning](https://aclanthology.org/2025.emnlp-main.970.pdf) (as "Quality")**
> A dataset used to evaluate performance on the long-context task of question answering.

## Relationships

### → QuALITY
- **Question answering** (behaviors tasks) — *measured_by*
  > QuALITY (QLTY) (Pang et al., 2022) is a question answering dataset over stories and articles collected from several resources, such as Project Gutenberg and the Open American National Corpus4.
  - [Retrieval meets Long Context Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d75f29006df67df084e6586f1cb8458c-Paper-Conference.pdf)
- **Long-context understanding** (constructs) — *measured_by*
  > Long-context ability evaluation. Following Xiong et al. [94], we evaluated the models on long-sequence tasks, including ... QuALITY [58]... (Table 4, Section 4.2)
  - [Gated Slot Attention for Efficient Linear-Time Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3f39e51f5f634fb16cc3e658f8512b9-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > Closed-ended tasks primarily focus on the capacity for understanding and reasoning within long contexts, including tasks like multiple-choice questions from QuALITY [5]... (Section 4.2).
  - [Mixture of In-Context Experts Enhance LLMs' Long Context Awareness](https://proceedings.neurips.cc/paper_files/paper/2024/file/91315fbb83ce353ae5538cba395f70d1-Paper-Conference.pdf)
- **Machine reading comprehension** (behaviors tasks) — *measured_by*
  > The QuALITY dataset is a reading comprehension task consisting of documents (about 5k tokens long) with a set of multiple choice reading comprehension questions. (Appendix F.1)
  - [On scalable oversight with weak LLMs judging strong LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/899511e37a8e01e1bd6f6f1d377cc250-Paper-Conference.pdf)
