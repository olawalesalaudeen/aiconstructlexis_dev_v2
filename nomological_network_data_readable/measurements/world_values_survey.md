# World Values Survey
**Type:** Measurement  
**Referenced in:** 12 papers  
**Also known as:** World Values Survey (WVS)  

## State of the Field

**What it is.** Across the papers, the prevailing treatment is of the World Values Survey as a global, cross-national survey or research project on people's beliefs and values, often repurposed for LLM work. Most descriptions use it as seed data or seed questions about social, political, religious, cultural, personal, and societal values; smaller lines of work use it as human reference data, as training data for cultural adaptation, or to derive representative personas. Several papers narrow this to Wave 7, described as covering 57 countries from 2017 to 2020, with either 260 seed questions across 13 cultural topics or a filtered subset of 206 questions from more than 129K respondents.

**What it is claimed to measure.** In the surveyed work, claims concentrate on measurement of Cultural alignment: papers use the World Values Survey to assess or evaluate alignment by comparing LLM responses with human survey data, and papers also describe it as a framework used for that evaluation. It is linked to 3 constructs and to no behavioral indicators, with the smaller additional uses being to measure Cultural bias and Value orientation. The prevailing measurement claim is therefore cultural alignment, with smaller extensions to those other two constructs.

**Space of uses.** Papers most commonly position the survey as source material or reference data: seed questions for data generation, culture-specific question-answer pairs, or multiple-choice adaptations in local languages. A smaller line of work uses it as training data for cultural adaptation or to derive representative personas, and one paper pairs it with Global Attitudes surveys from Pew Research Center as a second source of seed questions. No measurement instrument is linked to it.

## Sources

**[CultureLLM: Incorporating Cultural Differences into Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a16935bf54c4af233e25d998b7f4a2c-Paper-Conference.pdf)**
> A cross-national survey used here as seed data for culture-specific question-answer pairs about social, political, religious, and cultural values.

**[CulturePark: Boosting Cross-cultural Understanding in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/77f089cd16dbc36ddd1caeb18446fbdd-Paper-Conference.pdf) (as "World Values Survey (WVS)")**
> A global research project and survey that explores people’s beliefs and values worldwide, used in this paper as a source of seed questions for data generation.

## Relationships

### → World Values Survey
- **Cultural alignment** (constructs) — *measured_by*
  > We utilize the World Values Survey (WVS) (Haerpfer et al., 2022) for our assessment. (Section 3.3)
  - [Self-Pluralising Culture Alignment for Large Language Models](https://aclanthology.org/2025.naacl-long.350.pdf)
- **Value orientation** (constructs) — *measured_by*
  > We use the seventh wave of the World Values Survey (Haerpfer et al., 2022), which asks more than 129K human respondents from a wide range of demographic groups for their values. (Section 6)
  - [Revisiting LLM Value Probing Strategies: Are They Robust and Expressive?](https://aclanthology.org/2025.emnlp-main.7.pdf)

### Associated with
- **Cultural bias** (constructs)
  > Insights from the WVS can help in understanding the cultural and societal norms that underlie biases
  - [CultureLLM: Incorporating Cultural Differences into Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a16935bf54c4af233e25d998b7f4a2c-Paper-Conference.pdf)
