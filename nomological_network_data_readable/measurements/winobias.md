# WinoBias
**Type:** Measurement  
**Referenced in:** 14 papers  
**Also known as:** Winobias  

## State of the Field

**What it is.** Across papers, WinoBias is most commonly described as a coreference resolution benchmark or dataset for gender bias, especially gender-occupation bias, built around pronoun resolution in pro-stereotypical and anti-stereotypical Winograd-style examples. One paper states that each example contains "two gender-neutral profession names and gendered pronouns" and asks the model to identify "the coreference link between the pronouns and the correct professional" (Debiasing Algorithm through Model Adaptation). A smaller set of descriptions frames it more broadly as a fairness dataset or as an out-of-distribution bias benchmark, but the recurring content is coreference resolution with professions and gendered pronouns.

**What it is claimed to measure.** Papers use WinoBias to measure 3 constructs and 1 behavioral indicator. The most common claims link it to Social bias and Stereotyping, often in terms of whether models assign stereotypical gender pronouns to occupations; it is also used to measure the behavioral indicator Coreference resolution, and a smaller line of work treats it as measuring Fairness. The construct claims are spread across Social bias, Stereotyping, and Fairness, rather than using a single shared label.

**Space of uses.** No measurement instrument is linked to it. Papers position WinoBias as a popular or commonly used fairness benchmark, and several discuss it alongside Winogender, with occasional pairing with StereoSet or BBQ. A few papers further describe it as being repurposed for non-stereotypical evaluation or used as an out-of-distribution bias benchmark to test generalization.

**Concerns raised.** One paper reports that conventional fairness benchmarks such as WinoBias pose challenges to reliably assessing modern LLMs (Is Your Model Fairly Certain? Uncertainty-Aware Fairness Evaluation for LLMs).

## Sources

**[Debiasing Algorithm through Model Adaptation](https://proceedings.iclr.cc/paper_files/paper/2024/file/05aedcaf4bc6e78a5e22b4cf9114c5e8-Paper-Conference.pdf)**
> Coreference resolution benchmark designed to measure gender bias by evaluating model performance on pro- and anti-stereotypical Winograd-style examples involving professions and pronouns.

**[Are Models Biased on Text without Gender-related Language?](https://proceedings.iclr.cc/paper_files/paper/2024/file/37771cc0be272368102a37f202bb88d8-Paper-Conference.pdf) (as "Winobias")**
> A coreference resolution benchmark designed to evaluate gender-occupation bias in language models by testing pronoun resolution in gendered sentence pairs.

## Relationships

### → WinoBias
- **Gender bias** (constructs) — *measured_by*
  > To answer the first question, we check the LLaMA performance on popular tests for gender bias: WinoBias (Zhao et al., 2018) and StereoSet (Nadeem et al., 2021). (Section 1)
  - [Debiasing Algorithm through Model Adaptation](https://proceedings.iclr.cc/paper_files/paper/2024/file/05aedcaf4bc6e78a5e22b4cf9114c5e8-Paper-Conference.pdf)
- **Coreference resolution** (behaviors tasks) — *measured_by*
  > WinoBias Zhao et al. (2018) present the dataset containing a WinoGrad scheme (Levesque et al., 2011) examples. ... The task is to identify the coreference link between the pronouns and the correct professional. (Section 2.3)
  - [Debiasing Algorithm through Model Adaptation](https://proceedings.iclr.cc/paper_files/paper/2024/file/05aedcaf4bc6e78a5e22b4cf9114c5e8-Paper-Conference.pdf)
- **Social bias** (constructs) — *measured_by*
  > ...and evaluated on out-of-distribution bias benchmarks such as WinoBias (Zhao et al., 2018) and Winogender (Rudinger et al., 2018) to test generalization (Section 1).
  - [LLM Bias Detection and Mitigation through the Lens of Desired Distributions](https://aclanthology.org/2025.emnlp-main.76.pdf)
