# WMT16
**Type:** Measurement  
**Referenced in:** 10 papers  
**Also known as:** WMT-2016, WMT-16, WMT 2016  

## State of the Field

**What it is.** Across papers, WMT16 is most commonly described as a machine translation dataset or benchmark from the 2016 WMT workshop. Definitions vary in the slice emphasized: several papers refer to its English and German splits for cross-lingual detection, some use it for English-to-Romanian fine-tuning and evaluation, and another describes it as focusing on English-to-German translation. A smaller usage treats it more broadly as part of a translation benchmark suite, as in the phrasing "WMT 2014 and WMT 2016" or as an item under multilingual evaluation.

**What it is claimed to measure.** In relationships, papers link WMT16 to one behavioral indicator and one construct. The prevailing use is to measure Machine translation: papers cite Romanian-English and German-English pairs from the workshop, English-to-Romanian distillation, general translation tasks, and German-to-English test sets. A smaller line of work uses it to measure Multilingual ability, where WMT 2016 appears alongside other multilingual evaluations.

**Space of uses.** No measurement instrument is formally linked to WMT16 in the relationships. Papers use it in two recurring ways: as a translation benchmark for fine-tuning, distillation, or held-out testing, and as a cross-language setting for detection or evasion studies using English and German text, with one paper sampling 150 examples from the "Germany set" as human-written texts. It also appears as one dataset in broader evaluation bundles, for example alongside XSum and PubMedQA in Fast-DetectGPT: Efficient Zero-Shot Detection of Machine-Generated Text via Conditional Probability Curvature, and alongside WMT 2014 and LAMBADA Multilingual in multilingual evaluation.

## Sources

**[DNA-GPT: Divergent N-Gram Analysis for Training-Free Detection of GPT-Generated Text](https://proceedings.iclr.cc/paper_files/paper/2024/file/d4ce6738e84876aa79f13c8bc8b7c5eb-Paper-Conference.pdf)**
> Machine translation dataset in English and German used to evaluate cross-lingual detection performance.

**[Humanizing the Machine: Proxy Attacks to Mislead LLM Detectors](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab1ee157f7804a13f980414b644a9460-Paper-Conference.pdf) (as "WMT-2016")**
> A machine translation benchmark dataset used here for cross-language evaluation of text detection evasion.

**[Scaling Laws for Downstream Task Performance in Machine Translation](https://proceedings.iclr.cc/paper_files/paper/2025/file/dce0ad3bd4981fea9a5a5a274a2256d9-Paper-Conference.pdf) (as "WMT-16")**
> A machine translation benchmark/task suite used here for English-to-Romanian fine-tuning evaluation.

**[Instruction Tuning With Loss Over Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/7ffb43adf37b3eeaba559098bc084cc6-Paper-Conference.pdf) (as "WMT 2016")**
> Translation benchmark from the Workshop on Statistical Machine Translation 2016.

## Relationships

### → WMT16
- **Machine translation** (behaviors tasks) — *measured_by*
  > and also the Romanian–English and German–English pairs from the WMT16 workshop (Bojar et al., 2016). (Section 4.3)
  - [BERTs are Generative In-Context Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/04ea184dfb5f1babb78c093e850a83f9-Paper-Conference.pdf)
- **Multilingual ability** (constructs) — *measured_by*
  > Multilinguality contains LAMBADA Multilingual [45], WMT 2014 [8], and WMT 2016 [52] (Section 4.1)
  - [Instruction Tuning With Loss Over Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/7ffb43adf37b3eeaba559098bc084cc6-Paper-Conference.pdf)
