# Pluralistic alignment
**Type:** Construct  
**Referenced in:** 9 papers  
**Also known as:** Distributional preference alignment, Alignment with human population  

## State of the Field

**Definition agreement:** Conflicting. Most papers define pluralistic alignment as an AI system's ability to align with diverse, potentially conflicting human values or preferences rather than a single consensus objective. A few papers instead define it as the model's outputs or simulated responses matching the statistical distribution of a group's or population's preferences, which is a different target and phenomenon, so the definitions conflict.

**Space of definitions.** Across the papers, the prevailing usage frames pluralistic alignment as a model or AI system's ability or capacity to align with diverse, heterogeneous, and sometimes conflicting human preferences or values, rather than a single homogeneous consensus preference or monolithic reward. A smaller line of work narrows this to a distributional framing, where outputs should reflect the statistical distribution of preferences within a specific group. Another paper uses a population-level response-matching framing, defining alignment as the degree to which an LLM's simulated response distribution matches that of a real human population.

**Space of facets.** Papers do not present a shared breakdown into subtypes, but they regularly place the construct alongside personalization and value pluralism. A recurring contrast is between pluralistic alignment and optimization for a single consensus preference or reward function, while some authors use neighboring labels such as distributional preference alignment and alignment with human population for versions centered on group or population distributions rather than directly on heterogeneous individuals or communities.

**Space of measurement.** Operationalization is sparse: papers link pluralistic alignment to 1 measurement instrument, LLM-as-a-judge, and to no behavioral indicators. The linked evidence describes LLM-as-a-judge evaluations of system responses against baselines, so the recorded measurement is an output-evaluation instrument rather than a direct measure of the heterogeneous preferences, group preference distributions, or human-population response distributions named in the definitions.

## Sources

**[PAL: Sample-Efficient Personalized Reward Modeling for Pluralistic Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/2858f8c8683aaa8c12d487354cf328dc-Paper-Conference.pdf)**
> The ability of an AI system to align with diverse, heterogeneous human preferences rather than being optimized for a single, homogeneous consensus preference.

**[No Preference Left Behind: Group Distributional Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/b57b9aafccf6bf6a76d01079e316e14d-Paper-Conference.pdf) (as "Distributional preference alignment")**
> The model's capability to learn from and generate outputs that reflect the statistical distribution of preferences within a specific group.

**[Uncertainty Quantification for LLM-Based Survey Simulations](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25am/huang25am.pdf) (as "Alignment with human population")**
> The degree to which the distribution of an LLM's simulated responses matches the distribution of responses from a real human population.

## Relationships

### Pluralistic alignment →
- **OpinionQA** (measurements) — *measured_by*
  > In this section, we describe three datasets for quantifying distributional alignment – OpinionQA (Santurkar et al., 2023), GlobalOpinionQA (Durmus et al., 2024), and a new non-political subjective opinion dataset, NYT Book Opinions.
  - [Benchmarking Distributional Alignment of Large Language Models](https://aclanthology.org/2025.naacl-long.2.pdf)
- **GlobalOpinionQA** (measurements) — *measured_by*
  > In this section, we describe three datasets for quantifying distributional alignment – OpinionQA (Santurkar et al., 2023), GlobalOpinionQA (Durmus et al., 2024), and a new non-political subjective opinion dataset, NYT Book Opinions.
  - [Benchmarking Distributional Alignment of Large Language Models](https://aclanthology.org/2025.naacl-long.2.pdf)
