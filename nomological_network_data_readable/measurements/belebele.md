# Belebele
**Type:** Measurement  
**Referenced in:** 17 papers  
**Also known as:** BELEBELE  

## State of the Field

**What it is.** Across papers, Belebele is most commonly described as a multilingual reading comprehension benchmark, usually framed as multiple-choice questions over short passages. Definitions variously present it as assessing basic language understanding across many languages, as a multiple-choice machine reading comprehension dataset spanning 122 language variants or language-dialect combinations with parallel passages and questions, and as a corpus of questions over passages sourced from FLORES-200. Papers also describe its language coverage differently, including 122 languages, 122 language variants, and in one case translation into over 200 languages including 50+ African languages, and some note official or adapted Moroccan and Egyptian dialect sets.

**What it is claimed to measure.** Papers link Belebele to one construct and four behavioral indicators. The prevailing usage is to measure machine reading comprehension, with additional uses for multiple-choice question answering, language understanding task performance, and question answering; one paper also uses it to measure multilingual ability. In these claims, the measurement focus stays mostly on reading comprehension and QA, and one paper treats performance on BELEBELE together with FLORES as a 'strong indicator' of basic language understanding and generation capabilities.

**Space of uses.** No measurement instrument is linked to it. Papers often place Belebele in broader multilingual evaluation suites alongside FLORES, Multilingual MMLU or m-MMLU, m-ARC, and general QA sets such as ARC Challenge and HellaSwag, and some evaluations use five-shot prompting on Belebele. A smaller usage treats it as a selection criterion, with one study saying checkpoints are 'primarily selected' by target-language performance on BELEBELE and FLORES, while others use official Moroccan and Egyptian dialect sets or adapted dialect versions for evaluation.

## Sources

**[Layer Swapping for Zero-Shot Cross-Lingual Transfer in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7f9a44cb707ede42a659ad85d940dd55-Paper-Conference.pdf) (as "BELEBELE")**
> A multilingual reading comprehension benchmark used to assess a model's basic language understanding across many languages.

**[Adapters for Altering LLM Vocabularies: What Languages Benefit the Most?](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab5492f57995409351cbf1a1cdf5f1a4-Paper-Conference.pdf)**
> A multilingual benchmark for evaluating reading comprehension via multiple-choice questions based on short passages.

## Relationships

### → Belebele
- **Machine reading comprehension** (behaviors tasks) — *measured_by*
  > Belebele (Bandarkar et al., 2024): Belebele is a multiple-choice machine reading comprehension dataset spanning 122 language variants. (Section 3.3)
  - [Pipeline Analysis for Developing Instruct LLMs in Low-Resource Languages: A Case Study on Basque](https://aclanthology.org/2025.naacl-long.629.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > For multiple choice QA, we use Belebele (Bandarkar et al., 2024) and Multilingual MMLU (Hendrycks et al., 2021; Lai et al., 2023, MMMLU) with five shot prompting. (Section 5.4)
  - [Adapters for Altering LLM Vocabularies: What Languages Benefit the Most?](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab5492f57995409351cbf1a1cdf5f1a4-Paper-Conference.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > After numerous SFT runs on these “generic” multi-task datasets, the three checkpoints for each language are primarily selected based off their performance on the target language splits on BELEBELE (Bandarkar et al., 2024) and FLORES (NLLB et al., 2022). These simple tasks, reading comprehension and translation, are strong indicators of basic language understanding and generation capabilities. (Section 3.1)
  - [Layer Swapping for Zero-Shot Cross-Lingual Transfer in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7f9a44cb707ede42a659ad85d940dd55-Paper-Conference.pdf)
- **Cross-lingual alignment** (constructs) — *measured_by*
  > To evaluate this alignment, we utilize three benchmarks—Belebele (Bandarkar et al., 2024), m-ARC (Lai et al., 2023), and m-MMLU (Lai et al., 2023)—which collectively encompass a diverse range of high-, medium-, and low-resource languages. (Section 3.4)
  - [From Neurons to Semantics: Evaluating Cross-Linguistic Alignment Capabilities of Large Language Models via Neurons Alignment](https://aclanthology.org/2025.acl-long.1406.pdf)
