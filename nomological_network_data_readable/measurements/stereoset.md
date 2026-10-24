# StereoSet
**Type:** Measurement  
**Referenced in:** 18 papers  

## State of the Field

**What it is.** Across the surveyed work, StereoSet is most commonly described as a benchmark or dataset for measuring stereotypical bias in language models. Definitions usually present it as a fill-in-the-blank or sentence-completion format with three alternatives, stereotypical, anti-stereotypical, and meaningless or unrelated, and one description specifies 765 gap sentences for the gender intrasentence task while another describes each sample as a sentence triplet. Papers also use different slices or framings: some use the intrasentence subset, some mention both intrasentence and intersentence contexts, and smaller descriptions cast it as crowdsourced Context Association Tests or as an intrinsic metric based on the log probabilities of stereotype-evoking words.

**What it is claimed to measure.** Papers link StereoSet to 4 constructs and 2 behavioral indicators. The prevailing use is to measure fairness, stereotyping, and social bias, with papers describing it as testing stereotypical associations and as measuring stereotypes across gender, profession, race, and religion; one other construct appears in a smaller link. At the behavioral level, papers connect it to sentence completion and, in one framing, stereotype recognition through three-way classification into stereotype, anti-stereotype, or unrelated categories. The recorded links cover several constructs rather than a single target.

**Space of uses.** StereoSet is commonly used as an evaluation benchmark in model assessments, with papers reporting that they check model performance on it or evaluate debiasing methods with it. It is often used alongside WinoBias and sometimes compared with or grouped beside CrowS-Pairs and RedditBias. Papers also adapt it to their setup by restricting to the intrasentence subset for masked language models, sampling 300 statements split evenly across the three classes, or using it as a source for another dataset.

## Sources

**[Debiasing Algorithm through Model Adaptation](https://proceedings.iclr.cc/paper_files/paper/2024/file/05aedcaf4bc6e78a5e22b4cf9114c5e8-Paper-Conference.pdf)**
> StereoSet is a benchmark for measuring stereotypical bias using sentence completions that contrast stereotypical, anti-stereotypical, and meaningless options.

## Relationships

### → StereoSet
- **Stereotyping** (constructs) — *measured_by*
  > STEREOSET. STEREOSET measures stereotypical biases of models on gender, profession, race, and religion through 4, 229 context-sentence pairs. (Section 4.2)
  - [Reward Model Perspectives: Whose Opinions Do Reward Models Reward?](https://aclanthology.org/2025.emnlp-main.754.pdf)
- **Fairness** (constructs) — *measured_by*
  > As measured by prior metrics from StereoSet, our model achieves a higher degree of fairness while maintaining language modeling ability with low cost12.
  - [The Devil is in the Neurons: Interpreting and Mitigating Social Biases in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a1ca821d0b4807f8217da7da1747c65-Paper-Conference.pdf)
- **Social bias** (constructs) — *measured_by*
  > We evaluate the efficacy of our debiasing method on the social bias benchmark StereoSet (Nadeem et al., 2021).
  - [The Devil is in the Neurons: Interpreting and Mitigating Social Biases in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a1ca821d0b4807f8217da7da1747c65-Paper-Conference.pdf)
- **Sentence completion** (behaviors tasks) — *measured_by*
  > This task contains 765 sentences, each with a gap and three possible completions: stereotypical, anti-stereotypical, and meaningless. (Section 2.3)
  - [Debiasing Algorithm through Model Adaptation](https://proceedings.iclr.cc/paper_files/paper/2024/file/05aedcaf4bc6e78a5e22b4cf9114c5e8-Paper-Conference.pdf)
- **Language modeling ability** (constructs) — *measured_by*
  > LMS is used to evaluate the language modeling abilities of models.
  - [The Devil is in the Neurons: Interpreting and Mitigating Social Biases in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a1ca821d0b4807f8217da7da1747c65-Paper-Conference.pdf)
- **Stereotype recognition** (behaviors tasks) — *measured_by*
  > Stereotype Recognition: Utilizing StereoSet [35] to recognize stereotypes in sentences classifying them into one of three classes: “stereotype”, “anti-stereotype”, or “unrelated” categories. (Section 4)
  - [EAI: Emotional Decision-Making of LLMs in Strategic Games and Ethical Dilemmas](https://proceedings.neurips.cc/paper_files/paper/2024/file/611e84703eac7cc03f78339df8aae2ed-Paper-Conference.pdf)
- **Gender bias** (constructs) — *measured_by*
  > To answer the first question, we check the LLaMA performance on popular tests for gender bias: WinoBias (Zhao et al., 2018) and StereoSet (Nadeem et al., 2021). (Section 1)
  - [Debiasing Algorithm through Model Adaptation](https://proceedings.iclr.cc/paper_files/paper/2024/file/05aedcaf4bc6e78a5e22b4cf9114c5e8-Paper-Conference.pdf)
