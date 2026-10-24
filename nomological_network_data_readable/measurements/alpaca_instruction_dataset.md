# Alpaca instruction dataset
**Type:** Measurement  
**Referenced in:** 60 papers  
**Also known as:** Alpaca, Alpaca dataset, Alpaca Instruction Tuning Dataset  

## State of the Field

**What it is.** Across the papers, the prevailing usage treats Alpaca as an instruction-following or instruction-tuning dataset, often described as 52K instruction-response pairs or demonstrations, sometimes in instruction, input, output form. One definition says the examples were generated from text-davinci-003, while a smaller line of work describes it as a hybrid question-answer dataset or uses parts of it as code prompts, complex advice queries, seed data, or model-editing prompts. Papers also refer to specific variants such as the training dataset, a cleaned version, and subsets without unsafe instructions.

**What it is claimed to measure.** Papers link Alpaca to 5 behavioral indicators and 5 constructs. The dominant measurement claim is instruction following; papers also use it to measure question answering, refusal, text generation, and text summarization. On the construct side, it is reported as measuring helpfulness most often, and is also used for general ability, in-context learning, language modeling ability, and semantic consistency. Overall, the reported measurement claims are spread across several targets rather than confined to one construct.

**Space of uses.** No measurement instrument is linked to it. Across definitions and snippets, papers position it both as a main task dataset and as an auxiliary resource: it is used for supervised fine-tuning and alignment training, calibration and recovery tuning in compression or pruning work, and evaluation on instruction-following, question-answering, and summarization settings. Papers also use it alongside WikiText-2, FLAN v2, SAMSum, and Dolly-15k, and in smaller uses as a source of out-of-domain queries, control queries, and target or anti-target prompts.

**Concerns raised.** The concerns that appear are tied to use conditions. Some work uses benign fine-tuning on Alpaca to test safety degradation, other work uses it in adversarial incremental fine-tuning setups to test fingerprint robustness, and some studies use a cleaned version or restrict evaluations to examples without unsafe instructions.

## Sources

**[Fine-tuning Aligned Language Models Compromises Safety, Even When Users Do Not Intend To!](https://proceedings.iclr.cc/paper_files/paper/2024/file/83b7da3ed13f06c13ce82235c8eedf35-Paper-Conference.pdf) (as "Alpaca")**
> Instruction-following dataset used for calibration and recovery fine-tuning, serving as a basis for assessing model performance post-compression.

**[Can Watermarks be Used to Detect LLM IP Infringement For Free?](https://proceedings.iclr.cc/paper_files/paper/2025/file/8fba406323cb3930aeaccc9aa64c83a8-Paper-Conference.pdf) (as "Alpaca dataset")**
> A dataset of instruction-following examples, used in the paper as a source of out-of-domain queries for detecting model infringement.

**[Adversarial Representation Engineering: A General Model Editing Framework for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/e4630f7c0660d944c132455c124e7d90-Paper-Conference.pdf) (as "Alpaca Instruction Tuning Dataset")**
> An instruction dataset used here as a source of prompts for hallucination-related editing and evaluation setup.

## Relationships

### → Alpaca instruction dataset
- **Instruction following** (behaviors tasks) — *measured_by*
  > "Alpaca contains 52K instruction-following data generated from text-davinci-003 (GPT 3.5)" (Section 4.1)
  - [QA-LoRA: Quantization-Aware Low-Rank Adaptation of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/e6c2e85db1f1039177c4495ccd399ac4-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > The ﬁrst task is Q&A and summarization, including Alpaca [68] and SAMSum [22], and perplexity (PPL) is used to measure their performance. (Section 4.1)
  - [D-LLM: A Token Adaptive Computing Resource Allocation Strategy for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/03469b1a66e351b18272be23baf3b809-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > To evaluate helpfulness, we assessed the quality of responses generated on the Alpaca dataset (Taori et al., 2023)...
  - [TIS-DPO: Token-level Importance Sampling for Direct Preference Optimization With Estimated Weights](https://proceedings.iclr.cc/paper_files/paper/2025/file/7fb9f39075a5202472676a7531568212-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks) — *measured_by*
  > When training the hypernetwork, we again minimize the language modeling loss on the Alpaca dataset instead of applying the training process of instruction fine-tuning. (Appendix A.4)
  - [DISP-LLM: Dimension-Independent Structural Pruning for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/84a7fc24ed52e8eff514c33e8ac76ea3-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > We set N g = 4 general evaluation tasks, covering Hellaswag (Zellers et al., 2019), CommonsenseQA (Talmor et al., 2018), Alpaca (Hendrycks et al., 2020), and BBH-Object-Count (Srivastava et al., 2022) (Section 3)
  - [Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf)
- **In-context learning** (constructs) — *measured_by*
  > IP = 1 N g PN g j=1 ˆa T e j N , which is the average in-context performance on N g general evaluation tasks... We set N g = 4 general evaluation tasks, covering Hellaswag (Zellers et al., 2019), CommonsenseQA (Talmor et al., 2018), Alpaca (Hendrycks et al., 2020), and BBH-Object-Count (Srivastava et al., 2022) (Section 3)
  - [Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf)
- **Language modeling ability** (constructs) — *measured_by*
  > Instead, we choose the Alpaca (Taori et al., 2023) dataset, distinct from all four calibration data sources, as our language modeling test data. (Section 5.1)
  - [Beware of Calibration Data for Pruning Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/2ede933e10afa991a10b6f36b6522129-Paper-Conference.pdf)
- **Instruction fine-tuning** (behaviors tasks) — *measured_by*
  > "We conducted fine-tuning experiments on two variants of the LLaMA-2 (Touvron et al., 2023) language model, LLaMA 7B, and LLaMA 13B, using the Alpaca dataset as our training data"
  - [MCNC: Manifold-Constrained Reparameterization for Neural Compression](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f63d2963526bdd9ff1b8bcc2dc9905a-Paper-Conference.pdf)
- **Semantic consistency** (constructs) — *measured_by*
  > We create semantically equivalent pairs of questions for evaluation by randomly sampling 300 questions from the Alpaca dataset (Taori et al., 2023) — a popular human-preference dataset - and rephrasing them using gpt-4o mini. (Section 6.1)
  - [Waste Not, Want Not; Recycled Gumbel Noise Improves Consistency in Natural Language Generation](https://aclanthology.org/2025.naacl-long.292.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > We employ three distinct text generation datasets: Alpaca (Taori et al., 2023), tldr_news (Belvèze, 2022), and MHC (Amod, 2024), to evaluate the effectiveness of our method across various generation tasks.
  - [JoPA: Explaining Large Language Model's Generation via Joint Prompt Attribution](https://aclanthology.org/2025.acl-long.1074.pdf)

### Associated with
- **Refusal** (behaviors tasks)
  > “For the refusal behavior vector, we randomly select 100 instructions from the Alpaca dataset ... and append them with 100 typical refusal or compliance behavior prefixes as responses”
  - [Programming Refusal with Conditional Activation Steering](https://proceedings.iclr.cc/paper_files/paper/2025/file/e2dd53601de57c773343a7cdf09fae1c-Paper-Conference.pdf)
