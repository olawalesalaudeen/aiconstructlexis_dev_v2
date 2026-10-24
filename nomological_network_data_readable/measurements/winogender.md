# Winogender
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** WinoGender  

## State of the Field

**What it is.** Across the surveyed work, the dominant framing is a diagnostic dataset or benchmark for gender bias in coreference resolution, often described as a gender-occupation benchmark that tests whether models resolve pronouns in a gender-stereotyped manner. Some authors place it among WinoGrad Schema datasets and describe it as similar to WinoBias. One paper gives a more specific operational description, saying that the benchmark involves computing the Pearson correlation between model probabilities for female-gendered pronouns and occupation gender statistics, and another repurposes it for non-stereotypical evaluation by filtering out sentences with strong gender co-occurrences.

**What it is claimed to measure.** Papers link Winogender to 2 constructs and no behavioral indicators. The prevailing usage is to use it to measure Stereotyping, where it is described as a widely used dataset for evaluating gender bias in LLMs. A smaller line of work uses it to measure Social bias, including as an out-of-distribution bias benchmark to test generalization, so the recorded claims center on stereotyping with one additional linked construct.

**Space of uses.** Papers often use it alongside WinoBias, and also pair it with BBQ, CrowS-Pairs, TruthfulQA, and WinoBias+ in broader evaluation setups. In these uses, it is positioned as one of the widely studied or widely used gender-bias benchmarks, sometimes as an out-of-distribution benchmark for testing generalization and, in one paper, under a human alignment evaluation group. Another paper repurposes it for non-stereotypical evaluation by filtering out sentences with strong gender co-occurrences.

**Concerns raised.** A recorded concern is adequacy: one paper states that WinoGender, along with other WinoGrad Schema datasets, is no longer adequate to evaluate recent LLMs.

## Sources

**[Are Models Biased on Text without Gender-related Language?](https://proceedings.iclr.cc/paper_files/paper/2024/file/37771cc0be272368102a37f202bb88d8-Paper-Conference.pdf)**
> Winogender (WG), a coreference-resolution gender-occupation bias benchmark repurposed here by filtering out sentences with strong gender co-occurrences.

**[Beyond Imitation: Leveraging Fine-grained Quality Signals for Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5c8236f62e33b5224634069e64cb271a-Paper-Conference.pdf) (as "WinoGender")**
> Diagnostic dataset evaluating gender bias in coreference resolution by testing whether models resolve pronouns in a gender-stereotyped manner.

## Relationships

### → Winogender
- **Social bias** (constructs) — *measured_by*
  > ...and evaluated on out-of-distribution bias benchmarks such as WinoBias (Zhao et al., 2018) and Winogender (Rudinger et al., 2018) to test generalization (Section 1).
  - [LLM Bias Detection and Mitigation through the Lens of Desired Distributions](https://aclanthology.org/2025.emnlp-main.76.pdf)
- **Gender bias** (constructs) — *measured_by*
  > We also conduct experiments on BBQ (Parrish et al., 2022) and WinoGender (Zhao et al., 2018), two widely used datasets for evaluating gender bias in LLMs. (Section 1)
  - [GenderAlign: An Alignment Dataset for Mitigating Gender Bias in Large Language Models](https://aclanthology.org/2025.acl-long.553.pdf)
