# Moral reasoning
**Type:** Construct  
**Referenced in:** 17 papers  
**Also known as:** Machine ethics, Ethical reasoning, Ethics, Morality  

## State of the Field

**Definition agreement:** Consensus. Most papers define moral reasoning as a latent ability or capacity to apply moral or ethical principles to evaluate actions or situations and make ethically sound judgments, often in complex dilemmas and sometimes to guide or justify outputs. A few definitions emphasize adherence to human morality, justification, or moral concept organization, but they still point to the same core phenomenon rather than a substantially different one.

**Space of definitions.** Across papers, the prevailing usage treats moral reasoning as a latent or cognitive ability to make judgments in ethically complex situations, especially when principles conflict and actions have consequences. Closely related definitions describe evaluating the moral and consequential implications of actions, sometimes explicitly beyond superficial rule-following, and recognizing or adhering to ethical principles when deciding what is right or wrong. A smaller line of work treats it less as a latent capability and more as an underlying process of weighing considerations such as harm, fairness, and social norms, while other papers narrow it to commonsense moral judgment, principled justification, or moral concept organization through word associations.

**Space of facets.** Across papers, the construct appears under related labels such as ethical reasoning, machine ethics, ethics, and morality, and the labels do not fully align on whether they refer to a latent capability, adherence in outputs, or an underlying reasoning process. Several papers organize it around trade-offs among competing moral principles or value-based frameworks, and one process-oriented account specifies weighing harm, fairness, and social norms. Other work breaks it down through moral stages, consistency in low versus high ambiguity, and a contrast between observable moral judgments and the reasoning process behind them.

**Space of measurement.** Operationally, papers link moral reasoning to 2 measurement instruments and 1 behavioral indicator. The most common instrument is ETHICS, sometimes via its Commonsense subset for scenario-based moral recognition tasks, and papers also use Social Chemistry 101; both are benchmark or dataset style measures, and one paper explicitly says the ethics setting mainly measures moral reasoning ability. The linked behavioral indicator is action prediction, used in a broader multi-task benchmark, and a smaller measurement line uses word associations as low-level representations, so these operationalizations focus on scenario-based judgments, moral recognition, and action choice.

**Links.** Beyond measurement, one paper claims a causal relationship from human preference alignment to moral reasoning, reporting better machine ethics benchmark performance after RLHF on a general-purpose preference dataset. One paper also relates moral reasoning to trustworthiness, treating machine ethics as one component alongside truthfulness, toxicity, fairness, robustness, and privacy in a broader assessment framework. No correlational links are reported.

## Sources

**[BadRobot: Jailbreaking Embodied LLM Agents in the Physical World](https://proceedings.iclr.cc/paper_files/paper/2025/file/5b2fa23e4ef0f7ac6c4f01d7998e6237-Paper-Conference.pdf) (as "Ethical reasoning")**
> The latent ability to evaluate the moral and consequential implications of actions, beyond superficial rule-following.

**[More RLHF, More Trust? On The Impact of Preference Alignment On Trustworthiness](https://proceedings.iclr.cc/paper_files/paper/2025/file/732c5757aa5577de9b103332cf7ac0bf-Paper-Conference.pdf) (as "Machine ethics")**
> The model's adherence to ethical principles and its ability to recognize actions that are against human morality.

**[DailyDilemmas: Revealing Value Preferences of LLMs with Quandaries of Daily Life](https://proceedings.iclr.cc/paper_files/paper/2025/file/8587069d00a69d0ea498d547fffad6dd-Paper-Conference.pdf)**
> The cognitive ability to navigate and make judgments in situations involving complex and often conflicting ethical principles.

**[Raising the Bar: Investigating the Values of Large Language Models via Generative Evolving Testing](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jiang25l/jiang25l.pdf) (as "Ethics")**
> The model's capacity to adhere to moral principles and make ethically sound judgments, particularly in complex dilemmas.

**[ALI-Agent: Assessing LLMs'  Alignment with Human Values via Agent-based Evaluation](https://proceedings.neurips.cc/paper_files/paper/2024/file/b35c38f70065ac6c694089ca93a015bb-Paper-Conference.pdf) (as "Morality")**
> The model's latent adherence to ethical principles and commonsense moral judgments when presented with scenarios involving right and wrong.

## Relationships

### Moral reasoning →
- **ETHICS** (measurements) — *measured_by*
  > To verify ALI-Agent’s effectiveness as a general evaluation framework, we conduct experiments on six datasets from three distinct aspects of human values: ...morality (ETHICS [3], Social Chemistry 101 [37])...
  - [ALI-Agent: Assessing LLMs'  Alignment with Human Values via Agent-based Evaluation](https://proceedings.neurips.cc/paper_files/paper/2024/file/b35c38f70065ac6c694089ca93a015bb-Paper-Conference.pdf)
- **Social Chemistry 101** (measurements) — *measured_by*
  > To verify ALI-Agent’s effectiveness as a general evaluation framework, we conduct experiments on six datasets from three distinct aspects of human values: ...morality (ETHICS [3], Social Chemistry 101 [37])...
  - [ALI-Agent: Assessing LLMs'  Alignment with Human Values via Agent-based Evaluation](https://proceedings.neurips.cc/paper_files/paper/2024/file/b35c38f70065ac6c694089ca93a015bb-Paper-Conference.pdf)

### → Moral reasoning
- **Human preference alignment** (constructs) — *causes*
  > RLHF applied to a general-purpose preference dataset leads to a substantial average improvement of 31% on the machine ethics benchmark. (Section 1)
  - [More RLHF, More Trust? On The Impact of Preference Alignment On Trustworthiness](https://proceedings.iclr.cc/paper_files/paper/2025/file/732c5757aa5577de9b103332cf7ac0bf-Paper-Conference.pdf)

### Associated with
- **Trustworthiness** (constructs)
  > These components [truthfulness, toxicity, fairness, robustness, privacy, and machine ethics] collectively contribute to a comprehensive framework for assessing and improving LLM trustworthiness. (Section 2)
  - [More RLHF, More Trust? On The Impact of Preference Alignment On Trustworthiness](https://proceedings.iclr.cc/paper_files/paper/2025/file/732c5757aa5577de9b103332cf7ac0bf-Paper-Conference.pdf)
- **Action prediction** (behaviors tasks)
  > While numerous tasks can be accomplished using UNIMORAL, we focus on four core concepts of moral reasoning: [I] Action Prediction (AP)... (Section 4)
  - [Are Rules Meant to be Broken? Understanding Multilingual Moral Reasoning as a Computational Pipeline with UniMoral](https://aclanthology.org/2025.acl-long.294.pdf)
