# Gender bias
**Type:** Construct  
**Referenced in:** 24 papers  
**Also known as:** Bias against marginalized genders  

## State of the Field

**Definition agreement:** Complementary. Most papers define gender bias as a latent or systematic tendency of a model to produce gendered stereotypes, unfair assumptions, or skewed gender associations in its outputs or reasoning, while a few frame it more broadly as disadvantaging or misrepresenting people by gender or as skew in internal representations. These definitions differ in aspect and scope, but they can be combined into one model-level phenomenon rather than describing incompatible constructs.

**Space of definitions.** Across the surveyed work, the prevailing usage treats gender bias as a latent, systematic tendency for model outputs, representations, or reasoning to reflect unfair, skewed, or stereotyped gendered patterns. Several papers describe it broadly as disadvantaging or misrepresenting people on the basis of gender, or as generating harmful assumptions, attitudes, and representations; others specify that this appears in associations between gender and roles or attributes. Smaller lines of work define it more narrowly as reliance on spurious correlations between gender-neutral expressions and gender, as favoring one gender even in stereotype-free text, as gendered clinical reasoning unrelated to clinical relevance, or as unequal attribution of agentic versus communal language. Definitions differ mainly in scope: some papers use a broad unfairness framing, while others define particular stereotype-based manifestations or focus on harms to marginalized genders.

**Space of facets.** Papers do not converge on a single internal taxonomy, but they do break the construct into recurring manifestations. One explicit subtype is bias against marginalized genders, described as content that perpetuates disparities or harms for non-dominant gender identities, particularly within the LGBTQ+ community. Other papers use the same name for narrower phenomena such as more agentic language for men and more communal language for women, skewed leadership-role depictions, bias that persists in sentences without gender-related language, and stereotyped clinical reasoning or embeddings. As a result, the label is used both for broad gender-based unfairness and for several domain-specific or stereotype-specific forms.

**Space of measurement.** No paper is described as measuring this construct through a linked measurement instrument or behavioral indicator, and no linked construct accompanies it. Still, papers make the operationalization concrete in study-specific ways: one reports using the BOLD dataset to analyze language model gender bias, others examine fair behavior in stereotype-free sentences, shifts in role depictions such as CEO portrayals, patterns across multiple responses, and embedding or reasoning analyses in clinical prompts. These operationalizations mirror the definitions by looking for recurring gendered patterns in outputs, associations, and reasoning rather than a single shared test.

**Links.** No paper in this literature is described as claiming a causal, correlational, or other related link involving this construct.

## Sources

**[Large Language Models can Become Strong Self-Detoxifiers](https://proceedings.iclr.cc/paper_files/paper/2025/file/10df3b90b7caf44bf96b5a542a6935fe-Paper-Conference.pdf)**
> A specific form of bias where a model's outputs systematically disadvantage or misrepresent individuals based on their gender.

**[GenderAlign: An Alignment Dataset for Mitigating Gender Bias in Large Language Models](https://aclanthology.org/2025.acl-long.553.pdf) (as "Bias against marginalized genders")**
> The latent tendency to generate content that perpetuates disparities or harms against non-dominant gender identities, particularly within the LGBTQ+ community, such as denying their legitimacy or associating them with deviance.

## Relationships

### Gender bias →
- **WinoBias** (measurements) — *measured_by*
  > To answer the first question, we check the LLaMA performance on popular tests for gender bias: WinoBias (Zhao et al., 2018) and StereoSet (Nadeem et al., 2021). (Section 1)
  - [Debiasing Algorithm through Model Adaptation](https://proceedings.iclr.cc/paper_files/paper/2024/file/05aedcaf4bc6e78a5e22b4cf9114c5e8-Paper-Conference.pdf)
- **StereoSet** (measurements) — *measured_by*
  > To answer the first question, we check the LLaMA performance on popular tests for gender bias: WinoBias (Zhao et al., 2018) and StereoSet (Nadeem et al., 2021). (Section 1)
  - [Debiasing Algorithm through Model Adaptation](https://proceedings.iclr.cc/paper_files/paper/2024/file/05aedcaf4bc6e78a5e22b4cf9114c5e8-Paper-Conference.pdf)
- **BOLD** (measurements) — *measured_by*
  > Additionally, we further conducted an experiment where we use the BOLD dataset to analyze LM gender bias, results are shown in appendix Table 13. (Section 4.4)
  - [Large Language Models can Become Strong Self-Detoxifiers](https://proceedings.iclr.cc/paper_files/paper/2025/file/10df3b90b7caf44bf96b5a542a6935fe-Paper-Conference.pdf)
- **Winogender** (measurements) — *measured_by*
  > We also conduct experiments on BBQ (Parrish et al., 2022) and WinoGender (Zhao et al., 2018), two widely used datasets for evaluating gender bias in LLMs. (Section 1)
  - [GenderAlign: An Alignment Dataset for Mitigating Gender Bias in Large Language Models](https://aclanthology.org/2025.acl-long.553.pdf)

### Associated with
- **Coreference resolution** (behaviors tasks)
  > As noted by Davis and van Schijndel (2020), gender biases in neural models can be made visible in coreference resolution. (Section 4)
  - [Correct-Detect: Balancing Performance and Ambiguity Through the Lens of Coreference Resolution in LLMs](https://aclanthology.org/2025.emnlp-main.1527.pdf)
