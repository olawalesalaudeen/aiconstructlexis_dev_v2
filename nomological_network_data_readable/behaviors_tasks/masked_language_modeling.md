# Masked language modeling
**Type:** Behavior  
**Referenced in:** 21 papers  
**Also known as:** Masked token prediction  

## State of the Field

Across the surveyed literature, Masked language modeling (MLM) is predominantly characterized as a self-supervised pre-training objective for language models. The task is consistently defined as predicting original tokens at positions that have been randomly masked in an input sequence, with some definitions specifying the use of a special `[MASK]` symbol and bidirectional context. One paper notes a common implementation of "masking 15% tokens for training" ("Get more for less: Principled Data Selection for Warming Up Fine-Tuning in LLMs"). The primary stated purpose of this pre-training is to learn robust representations, and one paper suggests this task leads to language understanding. The downstream performance of models trained with this objective is evaluated using the GLUE benchmark. While its main application is pre-training, where it is often contrasted with "next token prediction", a smaller body of work applies MLM to other problems, such as reformulating relation extraction or computing loss on specific probe sentences. The behavior is also studied in relation to `Adaptability` and is considered a form of `Language modeling`.

## Sources

**[A Multi-Level Framework for Accelerating Training Transformer Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/33f2c200b71ce947d356d171022458ec-Paper-Conference.pdf)**
> Predicting original tokens at masked positions in an input sequence.

**[CODE REPRESENTATION LEARNING AT SCALE](https://proceedings.iclr.cc/paper_files/paper/2024/file/cfbba5249393100ada0bfb37557d2fd9-Paper-Conference.pdf) (as "Masked token prediction")**
> The observable pretraining task of predicting the original identity of a token that has been replaced by a special [MASK] symbol, based on its surrounding bidirectional context.

## Relationships

### Masked language modeling →
- **Language understanding task performance** (behaviors tasks) — *causes*
  > MLM (Devlin et al., 2019; Liu et al., 2019) is prominently used to pretrain bidirectional text encoders to achieve superior performance for language understanding (Section 5)
  - [Representation Deficiency in Masked Language Modeling](https://proceedings.iclr.cc/paper_files/paper/2024/file/bfde7fb279709eff53faa074b45840d8-Paper-Conference.pdf)
- **C4** (measurements) — *measured_by*
  > as well as encoder-decoder T5 models (Raffel et al., 2020b) (improved 1.1 version (Google, 2023b)) trained for masked-language-modelling on C4 (Raffel et al., 2020b)
  - [Scaling Laws for Sparsely-Connected Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/b83abe0c353d5dddf939e3533303220f-Paper-Conference.pdf)
- **GLUE** (measurements) — *measured_by*
  > "In Table 1, we compare our headless MLM with the classical MLM on the GLUE benchmark."
  - [Headless Language Models: Learning without Predicting with Contrastive Weight Tying](https://proceedings.iclr.cc/paper_files/paper/2024/file/92864e1191ed272deb0914b3bb50f97c-Paper-Conference.pdf)
- **Representation learning** (constructs) — *causes*
  > This modeling approach, often referred to as bidirectional modeling, has proven instrumental in enabling the successful learning of protein representations at an evolutionary scale (Rives et al., 2021), which has powered many subsequent applications, such as machine-learning guided directed evolution for protein engineering (Yang et al., 2019). (Section 3.2)
  - [Bio-xLSTM: Generative modeling, representation and in-context learning of biological and chemical sequences](https://proceedings.iclr.cc/paper_files/paper/2025/file/60cefc59610f8f59ea10099f99a36726-Paper-Conference.pdf)
- **Contextual understanding** (constructs) — *causes*
  > This includes retrieval optimization to align query and document embeddings, masked language modeling to enhance contextual understanding, and visual facility learning to identify key amenities from images.
  - [HotelMatch-LLM: Joint Multi-Task Training of Small and Large Language Models for Efficient Multimodal Hotel Retrieval](https://aclanthology.org/2025.acl-long.30.pdf)

### Associated with
- **Adaptability** (constructs)
  > First, we select data to fine-tune a pre-trained bert-base-uncased model (from Huggingface) via Masked Language Modeling (MLM) - following the standard setting of masking 15% tokens for training over the unlabeled domain-specific data. (Section 3.2)
  - [Get more for less: Principled Data Selection for Warming Up Fine-Tuning in LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/b36dc39b319ba6ba2a0fd7601951efb4-Paper-Conference.pdf)
- **Language modeling ability** (constructs)
  > We combine KL divergence loss with an MLM loss as a secondary objective to retain masked language modeling ability while adjusting the MLM distribution (Section 2.3).
  - [LLM Bias Detection and Mitigation through the Lens of Desired Distributions](https://aclanthology.org/2025.emnlp-main.76.pdf)
