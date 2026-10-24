# XNLI
**Type:** Measurement  
**Referenced in:** 40 papers  

## State of the Field

**What it is.** Across papers, the prevailing usage treats XNLI as a multilingual or cross-lingual natural language inference benchmark or dataset. Definitions consistently describe premise-hypothesis sentence pairs labeled for entailment, contradiction, and neutral, though one paper instead phrases the labels as “Entailed”, “Non-entailed”, and “Neutral”, and papers vary between describing coverage in fourteen or fifteen languages. A smaller number of definitions further call it a multilingual version or extension of MNLI or MultiNLI, and one paper uses the English portion of XNLI as the source for a translated African-language benchmark.

**What it is claimed to measure.** Papers link XNLI to 5 constructs and 5 behavioral indicators. The most recurrent claim is that it measures natural language inference, with several papers using it for sentence entailment or textual entailment prediction across languages. Smaller lines of work also report it as measuring the behavioral indicators language understanding task performance, machine translation, textual reasoning, and zero-shot cross-lingual transfer, and the constructs commonsense reasoning, cross-lingual alignment, cross-lingual generalization, helpfulness, and semantic understanding.

**Space of uses.** In practice, papers commonly use XNLI inside broader multilingual evaluation suites, most often alongside XCOPA, and in some cases with XWinograd, X-CSQA, XStoryCloze, and XLSum. They position it as a classification or NLU benchmark, a downstream task, and a zero-shot transfer check; some also use selected portions or samples, including English and overlapping-language examples, Chinese or Spanish portions, 2,490 test samples, or 1,000 randomly sampled test points. One paper additionally pretrains on XNLI as indirect supervision for translation evaluation.

## Sources

**[Are Bert Family Good Instruction Followers?  A Study on Their Potential And Limitations](https://proceedings.iclr.cc/paper_files/paper/2024/file/0a13eb0c08247364066e8d86551c3090-Paper-Conference.pdf)**
> Cross-lingual Natural Language Inference dataset that assesses a model's ability to determine entailment, contradiction, or neutrality between sentence pairs in multiple languages.

## Relationships

### → XNLI
- **Natural language inference** (behaviors tasks) — *measured_by*
  > a language understanding dataset XNLI [Conneau et al., 2018] in natural language inference (NLI) task were used. (Section 4.2)
  - [MindMerger: Efficiently Boosting LLM Reasoning in non-English Languages](https://proceedings.neurips.cc/paper_files/paper/2024/file/3bf80b34f731313b8292f4578e820c90-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > For the assessment of usefulness, we sample 30 examples in English and each language overlapping with MultiJail from XNLI (Conneau et al., 2018) and X-CSQA (Lin et al., 2021)... We calculate the average accuracy on both datasets to represent usefulness. (Section 4.3)
  - [Multilingual Jailbreak Challenges in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/6b396f766a50e0853a5164e68048540c-Paper-Conference.pdf)
- **Cross-lingual generalization** (constructs) — *measured_by*
  > Models are then fine-tuned on the XNLI dataset, for both cross-lingual zero-shot transfer from English and target language fine-tuning.
  - [Headless Language Models: Learning without Predicting with Contrastive Weight Tying](https://proceedings.iclr.cc/paper_files/paper/2024/file/92864e1191ed272deb0914b3bb50f97c-Paper-Conference.pdf)
- **Language understanding task performance** (behaviors tasks) — *measured_by*
  > a language understanding dataset XNLI [Conneau et al., 2018] in natural language inference (NLI) task were used. (Section 4.2)
  - [MindMerger: Efficiently Boosting LLM Reasoning in non-English Languages](https://proceedings.neurips.cc/paper_files/paper/2024/file/3bf80b34f731313b8292f4578e820c90-Paper-Conference.pdf)
- **Semantic understanding** (constructs) — *measured_by*
  > The two multilingual tasks evaluate MrT5's ability to understand high-level semantics... specifically, two cross-lingual benchmarks (XNLI and TyDi QA)
  - [MrT5: Dynamic Token Merging for Efficient Byte-level Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8e9dd32cb9f9bff397f1a7ebd07010f2-Paper-Conference.pdf)
- **Machine translation** (behaviors tasks) — *measured_by*
  > Machine translation uses the XNLI (Conneau et al., 2018) parallel corpus for 15 languages... (Section 3.3)
  - [Heads up! Large Language Models Can Perform Tasks Without Your Instruction via Selective Attention Head Masking](https://raw.githubusercontent.com/mlresearch/v267/main/assets/han25l/han25l.pdf)
- **Catastrophic forgetting** (behaviors tasks) — *measured_by*
  > To demonstrate a more natural instance of catastrophic forgetting, we consider what happens to a language model after we fine-tune on code. ... To test forgetting, we use the XNLI benchmark (Conneau et al., 2018) (Section 4.2)
  - [Understanding Catastrophic Forgetting in Language Models via Implicit Inference](https://proceedings.iclr.cc/paper_files/paper/2024/file/692ae28fda9bfbde7c01b13bf5a03395-Paper-Conference.pdf)
- **Multilingual understanding** (constructs) — *measured_by*
  > We use the widely adopted XNLI dataset (Conneau et al., 2018) for evaluation, which assesses sentence understanding in multiple languages by determining the relationship between sentence pairs. (Section 3.3)
  - [From Neurons to Semantics: Evaluating Cross-Linguistic Alignment Capabilities of Large Language Models via Neurons Alignment](https://aclanthology.org/2025.acl-long.1406.pdf)
