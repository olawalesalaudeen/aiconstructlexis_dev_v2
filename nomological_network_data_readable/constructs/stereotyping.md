# Stereotyping
**Type:** Construct  
**Referenced in:** 26 papers  
**Also known as:** Gender stereotypical bias, Stereotypical association, Occupational gender bias, Stereotypical reasoning, Gender stereotypes, Gender bias, Stereotypes, Gender-occupation bias, Stereotypical bias  

## State of the Field

**Definition agreement:** Consensus. Most papers define stereotyping as a model's tendency to reproduce or amplify stereotypical associations and overgeneralized beliefs about social groups, especially gender, such as linking genders to roles, traits, or occupations. A few papers broaden the target from gender to other demographic groups or emphasize negative or disrespectful content, but these are still variants of the same core phenomenon rather than different constructs.

**Space of definitions.** Across papers, the prevailing usage treats stereotyping as model behavior that reproduces or endorses oversimplified, inaccurate, or potentially negative generalizations about people, usually keyed to demographic attributes. Much of the work narrows this to gender, describing tendencies to assign roles, traits, or expected behavior by gender, and many of those papers further focus on occupation-gender associations, such as consistently linking professions with specific genders when cues are ambiguous. A smaller line of work shifts from observable output tendencies to latent bias or reasoning, describing the model as preferentially selecting stereotype-aligned responses; some broader fairness definitions also extend beyond gender to ethnicity, religion, or socioeconomic status. One paper further frames the behavior as responses guided by stereotypical gender roles rather than culturally appropriate norms.

**Space of facets.** Papers break the construct into several nearby forms, including gender stereotypical bias, stereotypes, stereotypical bias, stereotypical association, stereotypical reasoning, and gender-occupation or occupational gender bias. The narrowest variants center on profession-gender links, while the broader variants target inaccurate or negative representations of social groups more generally. In neighboring taxonomies, papers place stereotyping under fairness or social bias: one categorization divides social bias harms into stereotyping and toxicity, and another breaks fairness into stereotype and bias and preference according to discriminatory outputs.

**Space of measurement.** Operationalizations span 7 measurement instruments and 4 behavioral indicators. The most frequently linked instruments are StereoSet, WinoBias, BBQ, BOLD, and CrowS-Pairs, with 2 other instruments also used; these are mostly benchmarks, though one setup uses an LLM judge to assess the stereotypical degree of outputs regarding a social group. Papers also operationalize the construct through pronoun resolution, image-and-prompt question answering with female and male comparisons, resume classification, and translation of gender-ambiguous occupational terms, so measurement is often narrower than the broadest definitions and concentrates on gender, professions, and historically disadvantaged groups.

**Links.** Papers relate fairness and social bias to stereotyping, and also relate stereotyping to trustworthiness. One paper claims a causal relationship from human preference alignment to stereotyping, reporting that stereotypical bias increases by 150%, and one paper reports that stereotyping correlates with toxicity. Machine translation and coreference resolution are also related to stereotyping, with papers describing gender biases as visible in coreference resolution and as reinforcing societal stereotypes in translation.

## Sources

**[Incorporating Diverse Perspectives in Cultural Alignment: Survey of Evaluation Benchmarks Through A Three-Dimensional Framework](https://aclanthology.org/2025.emnlp-main.862.pdf)**
> The model's tendency to generate oversimplified and often inaccurate generalizations about groups of people, particularly based on demographic indicators like gender, ethnicity, or religion.

**[Blind Men and the Elephant: Diverse Perspectives on Gender Stereotypes in Benchmark Datasets](https://aclanthology.org/2025.emnlp-main.1162.pdf) (as "Gender stereotypical bias")**
> The tendency of a language model to associate certain characteristics, roles, or attributes with individuals based on their gender, reflecting and potentially amplifying societal stereotypes.

**[Assumed Identities: Quantifying Gender Bias in Machine Translation of Gender-Ambiguous Occupational Terms](https://aclanthology.org/2025.emnlp-main.1640.pdf) (as "Occupational gender bias")**
> A model's systematic predisposition to associate specific occupations with particular genders, revealed through aggregated patterns in translation when the source text is gender-ambiguous.

**[Assumed Identities: Quantifying Gender Bias in Machine Translation of Gender-Ambiguous Occupational Terms](https://aclanthology.org/2025.emnlp-main.1640.pdf) (as "Stereotypical association")**
> The tendency to link particular occupations with specific genders in ways that reflect social stereotypes rather than neutral interpretation.

**[EuroGEST: Investigating gender stereotypes in multilingual language models](https://aclanthology.org/2025.emnlp-main.1632.pdf) (as "Stereotypical reasoning")**
> The latent cognitive process by which a model preferentially selects responses that align with culturally ingrained stereotypes, particularly in gendered contexts.

**[We Politely Insist: Your LLM Must Learn the Persian Art of Taarof](https://aclanthology.org/2025.emnlp-main.94.pdf) (as "Gender bias")**
> The tendency of a model to produce responses influenced by stereotypical gender roles rather than culturally appropriate norms, even when gender is irrelevant to the expected behavior.

**[GenderAlign: An Alignment Dataset for Mitigating Gender Bias in Large Language Models](https://aclanthology.org/2025.acl-long.553.pdf) (as "Stereotypes")**
> The latent tendency to reproduce oversimplified and generalized beliefs about gender roles, characteristics, or abilities, such as assuming women are naturally suited for caregiving or men for leadership.

**[Is Your Model Fairly Certain? Uncertainty-Aware Fairness Evaluation for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25cp/wang25cp.pdf) (as "Gender-occupation bias")**
> A specific form of social bias where a model systematically associates certain occupations with particular genders, often reflecting societal stereotypes.

**[More RLHF, More Trust? On The Impact of Preference Alignment On Trustworthiness](https://proceedings.iclr.cc/paper_files/paper/2025/file/732c5757aa5577de9b103332cf7ac0bf-Paper-Conference.pdf) (as "Stereotypical bias")**
> The model's tendency to generate or agree with over-generalized, disrespectful, or negative beliefs about particular demographic groups.

## Relationships

### Stereotyping →
- **StereoSet** (measurements) — *measured_by*
  > STEREOSET. STEREOSET measures stereotypical biases of models on gender, profession, race, and religion through 4, 229 context-sentence pairs. (Section 4.2)
  - [Reward Model Perspectives: Whose Opinions Do Reward Models Reward?](https://aclanthology.org/2025.emnlp-main.754.pdf)
- **CrowS-Pairs** (measurements) — *measured_by*
  > CrowS-Pairs (Nangia et al., 2020) assesses stereotypes associated with historically disadvantaged groups.
  - [CEB: Compositional Evaluation Benchmark for Fairness in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/38e491559eb9e4cf31b8cd3a4e222436-Paper-Conference.pdf)
- **BBQ** (measurements) — *measured_by*
  > CrowS-Pairs (Nangia et al., 2020) and BBQ (Parrish et al., 2022) target nine categories of stereotypes, including gender, in paired sentences. (Section 2)
  - [GenderAlign: An Alignment Dataset for Mitigating Gender Bias in Large Language Models](https://aclanthology.org/2025.acl-long.553.pdf)
- **Causal tracing** (measurements) — *measured_by*
  > By fitting the linear model (Equation 1) across all the prompts X, we get the as and af scores for each layer l and token position i.
  - [Debiasing Algorithm through Model Adaptation](https://proceedings.iclr.cc/paper_files/paper/2024/file/05aedcaf4bc6e78a5e22b4cf9114c5e8-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > Particularly, for the bias type of Stereotyping, we use GPT-4 to assess the stereotypical degree of LLM-generated outputs regarding any specific social group.
  - [CEB: Compositional Evaluation Benchmark for Fairness in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/38e491559eb9e4cf31b8cd3a4e222436-Paper-Conference.pdf)
- **DecodingTrust** (measurements) — *measured_by*
  > To verify ALI-Agent’s effectiveness as a general evaluation framework, we conduct experiments on six datasets from three distinct aspects of human values: stereotypes (DecodingTrust [11], CrowS-Pairs [2])...
  - [ALI-Agent: Assessing LLMs'  Alignment with Human Values via Agent-based Evaluation](https://proceedings.neurips.cc/paper_files/paper/2024/file/b35c38f70065ac6c694089ca93a015bb-Paper-Conference.pdf)

### → Stereotyping
- **Human preference alignment** (constructs) — *causes*
  > the effects on other trustworthiness aspects are negative: stereotypical bias increases by 150%... (Section 1)
  - [More RLHF, More Trust? On The Impact of Preference Alignment On Trustworthiness](https://proceedings.iclr.cc/paper_files/paper/2025/file/732c5757aa5577de9b103332cf7ac0bf-Paper-Conference.pdf)

### Associated with
- **Fairness** (constructs)
  > We break down this concept [Fairness] into stereotype and bias & preference according to the types of discriminatory outputs [88, 132]. (Sec. 2.2.4)
  - [MultiTrust: A Comprehensive Benchmark Towards Trustworthy Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/586640cda3db2dc77349013dcefee456-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Trustworthiness** (constructs)
  > this study investigates how models aligned with general-purpose preference data perform across five trustworthiness verticals: toxicity, stereotypical bias, machine ethics, truthfulness, and privacy.
  - [More RLHF, More Trust? On The Impact of Preference Alignment On Trustworthiness](https://proceedings.iclr.cc/paper_files/paper/2025/file/732c5757aa5577de9b103332cf7ac0bf-Paper-Conference.pdf)
- **Social bias** (constructs)
  > Our categorization of social bias types in LLMs is structured around two distinct types of harms: Stereotyping and Toxicity.
  - [CEB: Compositional Evaluation Benchmark for Fairness in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/38e491559eb9e4cf31b8cd3a4e222436-Paper-Conference.pdf)
- **Machine translation** (behaviors tasks)
  > Machine Translation systems have become indispensable tools for cross-linguistic communication, yet they frequently exhibit gender biases that reinforce societal stereotypes (Blodgett et al., 2020; Menis-Mastromichalakis et al., 2025). (Section 1)
  - [Assumed Identities: Quantifying Gender Bias in Machine Translation of Gender-Ambiguous Occupational Terms](https://aclanthology.org/2025.emnlp-main.1640.pdf)
- **Visual question answering** (behaviors tasks)
  > Images, along with prompts, are presented to the VLAs in a visual question answering (VQA) format, and responses are analyzed to discern systematic distributional differences for females and males. (Section 1)
  - [Revealing and Reducing Gender Biases in Vision and Language Assistants (VLAs)](https://proceedings.iclr.cc/paper_files/paper/2025/file/189b0101331a7a87bf7686d8bb20e12d-Paper-Conference.pdf)
