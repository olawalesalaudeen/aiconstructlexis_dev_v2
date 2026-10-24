# Fairness
**Type:** Construct  
**Referenced in:** 65 papers  
**Also known as:** Algorithmic fairness, Biasness, Equitability, Normative correctness  

## State of the Field

**Definition agreement:** Complementary. Most papers define fairness as a model's outputs or predictions treating demographic or protected groups equitably and without prejudice, but they foreground different facets of that same phenomenon, such as independence from sensitive attributes, parity in error or performance across groups, or the absence of stereotyped and harmful content. A few papers narrow this to specific gender tests or to detecting fairness in narratives, yet the dominant usage is still complementary because the main definitions can be combined as different operationalizations of group-related non-discrimination in model behavior.

**Space of definitions.** Across the papers, the prevailing usage treats fairness as avoiding biased, stereotypical, or prejudicial outputs across social or demographic groups, or more generally as equitable treatment that does not favor or disfavor people based on protected attributes. A smaller line of work states the construct in more formal group terms, such as predictions independent of sensitive attributes, equal false positive and false negative rates, counterfactual fairness, or similar performance across subgroups. Other minority uses narrow it further to no gender preference between paired sentence completions, ideal gender parity in translation, parity across cultures, or a moral dimension centered on justice and reciprocity.

**Space of facets.** When papers break the construct down, the clearest subtype split is between counterfactual fairness and performance disparity, and one benchmark further divides fairness into stereotype and bias and preference by discriminatory output type. The same label is also used for several neighboring notions: algorithmic fairness for prejudice in candidate comparison, equitability for parity between model performance and user needs across cultures, biasness for unfair prejudice in task-oriented dialogue responses, and normative correctness for an idealized gender-parity standard. One paper uses fairness in a different sense altogether, as a moral dimension involving justice, reciprocity, and equitable treatment.

**Space of measurement.** Papers link fairness to 7 measurement instruments and 4 behavioral indicators. The most frequently linked instruments are StereoSet, A-OKVQA, Dictator Game, FINTRUST, and PLLuM-Align, with 2 other instruments also linked; together they cover stereotype benchmarks, vision question answering prompts, an economic game about sharing, a domain benchmark with fairness as one dimension, and human 5-point Likert ratings. Relative to the broader definitions, several operationalizations focus on narrower signals mentioned in the papers, including no gender preference between paired completions, equality differences of false positive and false negative rates, and the frequency of gendered terms in generated text.

**Links.** Several papers relate fairness to social bias, usually in the language of debiasing, reducing reliance on demographic patterns, or reducing societal bias in outputs. A smaller line of work relates it to stereotyping, and single papers relate it to trustworthiness, generalization, recommendation, and opinion summarization. Papers also claim causal relationships from neural collapse to fairness and from refusal to fairness. No correlational links are reported.

## Sources

**[Are Models Biased on Text without Gender-related Language?](https://proceedings.iclr.cc/paper_files/paper/2024/file/37771cc0be272368102a37f202bb88d8-Paper-Conference.pdf)**
> The degree to which a model avoids producing biased or stereotypical outputs across different social groups, representing an ideal state of equitable treatment.

**[Order-Independence Without Fine Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/85529bc995777a74072ef63c05bedd30-Paper-Conference.pdf) (as "Algorithmic fairness")**
> The extent to which a model's outputs are free from systematic prejudice, particularly in sensitive applications like comparing candidates.

**[Reading between the Lines: Can LLMs Identify Cross-Cultural Communication Gaps?](https://aclanthology.org/2025.naacl-long.409.pdf) (as "Equitability")**
> The model's capability to maintain parity between its performance and a user's needs across different cultural backgrounds.

**[AutoEval-ToD: Automated Evaluation of Task-oriented Dialog Systems](https://aclanthology.org/2025.naacl-long.508.pdf) (as "Biasness")**
> The presence or absence of unfair or prejudiced content in a ToD system's responses, particularly with respect to sensitive attributes.

**[Assumed Identities: Quantifying Gender Bias in Machine Translation of Gender-Ambiguous Occupational Terms](https://aclanthology.org/2025.emnlp-main.1640.pdf) (as "Normative correctness")**
> The extent to which a model adheres to an idealized standard of gender fairness, such as equal representation of masculine and feminine forms in translations.

## Relationships

### Fairness →
- **StereoSet** (measurements) — *measured_by*
  > As measured by prior metrics from StereoSet, our model achieves a higher degree of fairness while maintaining language modeling ability with low cost12.
  - [The Devil is in the Neurons: Interpreting and Mitigating Social Biases in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a1ca821d0b4807f8217da7da1747c65-Paper-Conference.pdf)
- **Dictator Game** (measurements) — *measured_by*
  > The Dictator Game is a simple economic experiment where one player (“Dictator“) is given a sum of money to share with another player, with no negotiation or input from the recipient. It examines altruism and fairness in decision-making. (Section 5.1)
  - [EAI: Emotional Decision-Making of LLMs in Strategic Games and Ethical Dilemmas](https://proceedings.neurips.cc/paper_files/paper/2024/file/611e84703eac7cc03f78339df8aae2ed-Paper-Conference.pdf)
- **A-OKVQA** (measurements) — *measured_by*
  > In VHELM, this is assessed by asking questions drawn from A-OKVQA [34] and VQAv2 [12] in African-American English (AAE)... (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **VQA-v2** (measurements) — *measured_by*
  > In VHELM, this is assessed by asking questions drawn from A-OKVQA [34] and VQAv2 [12] in African-American English (AAE)... (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **RepE** (measurements) — *measured_by*
  > Four additional concepts—Fairness (FAIR), Harmfulness (HARM), Happiness (HAPPY), and FEAR—are included based on RepE dataset (Zou et al., 2023a).
  - [Cross-model Transferability among Large Language Models on the Platonic Representations of Concepts](https://aclanthology.org/2025.acl-long.185.pdf)
- **FINTRUST** (measurements) — *measured_by*
  > we curate 15, 680 instances to evaluate LLM trustworthiness in the financial domain. We ... incorporate seven core dimensions: Truthfulness, Safety, Fairness, Robustness, Privacy, Transparency, and Knowledge Discovery. (Section 2)
  - [FinTrust: A Comprehensive Benchmark of Trustworthiness Evaluation in Finance Domain](https://aclanthology.org/2025.emnlp-main.512.pdf)
- **PLLuM-Align** (measurements) — *measured_by*
  > For scalar multi-attribute rating, annotators evaluated each response on a 5-point Likert scale across seven criteria: i) truthfulness, (ii) linguistic correctness, (iii) safety, (iv) fairness, (v) conciseness, (vi) coherence & reasoning, as well as vii) helpfulness & instruction-following.
  - [PLLuM-Align: Polish Preference Dataset for Large Language Model Alignment](https://aclanthology.org/2025.emnlp-main.1219.pdf)

### → Fairness
- **Neural collapse** (constructs) — *causes*
  > This observation further inspires us to explicitly enforce neural collapse to promote fairness in pretrained language models. (Section 1)
  - [Collapsed Language Models Promote Fairness](https://proceedings.iclr.cc/paper_files/paper/2025/file/96db0c53484428513ebc537fe48ddb7a-Paper-Conference.pdf)
- **Refusal** (behaviors tasks) — *causes*
  > Refusal effectively avoids generating controversial or biased output, ensuring fairness and safety. (Section 3.1)
  - [Position: Political Neutrality in AI Is Impossible — But Here Is How to Approximate It](https://raw.githubusercontent.com/mlresearch/v267/main/assets/fisher25a/fisher25a.pdf)

### Associated with
- **Social bias** (constructs)
  > To mitigate societal biases implicitly encoded in recent successful pretrained language models, a diverse array of approaches have been proposed to encourage model fairness... (Abstract)
  - [Collapsed Language Models Promote Fairness](https://proceedings.iclr.cc/paper_files/paper/2025/file/96db0c53484428513ebc537fe48ddb7a-Paper-Conference.pdf)
- **Stereotyping** (constructs)
  > We break down this concept [Fairness] into stereotype and bias & preference according to the types of discriminatory outputs [88, 132]. (Sec. 2.2.4)
  - [MultiTrust: A Comprehensive Benchmark Towards Trustworthy Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/586640cda3db2dc77349013dcefee456-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Trustworthiness** (constructs)
  > We assess the trustworthiness of Med-LVLMs across five dimensions, including trustfulness, fairness, safety, privacy, and robustness. (Abstract)
  - [CARES: A Comprehensive Benchmark of Trustworthiness in Medical Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fde7f40f8ced5735006810534dc66b33-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Generalization** (constructs)
  > This lack of proper evaluation can then materialize in persistent issues of deployed systems related to generalization, e.g., hallucination [30], out-of-distribution generalization [39], fairness [6], and generalization to the long-tail [23, 24]. (Section 1).
  - [No Free Delivery Service: Epistemic limits of passive data collection in complex social systems](https://proceedings.neurips.cc/paper_files/paper/2024/file/b97fc02c9e536d68300d82be05c23aa2-Paper-Conference.pdf)
- **Recommendation** (behaviors tasks)
  > Clearly, this has important implications for fairness, bias, and whether recommender systems work for everyone. (Section 4).
  - [No Free Delivery Service: Epistemic limits of passive data collection in complex social systems](https://proceedings.neurips.cc/paper_files/paper/2024/file/b97fc02c9e536d68300d82be05c23aa2-Paper-Conference.pdf)
- **Opinion summarization** (behaviors tasks)
  > Our exclusive focus on fairness is not arbitrary, but fundamentally critical in the context of opinion summarisation. (Limitations)
  - [Less Is More? Examining Fairness in Pruned Large Language Models for Summarising Opinions](https://aclanthology.org/2025.emnlp-main.909.pdf)
- **Stereotype recognition** (behaviors tasks)
  > To evaluate the alignment of fairness, we perform stereotype recognition task (Sun et al., 2024) (Section 4.1).
  - [Token-Aware Editing of Internal Activations for Large Language Model Alignment](https://aclanthology.org/2025.emnlp-main.480.pdf)
