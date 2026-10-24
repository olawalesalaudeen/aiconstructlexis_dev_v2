# OpinionQA
**Type:** Measurement  
**Referenced in:** 8 papers  
**Also known as:** OpinionsQA  

## State of the Field

**What it is.** Across the papers, OpinionQA is most commonly described as a survey-based benchmark or dataset built from Pew Research's American Trends Panel, using public-opinion questions together with demographic-group response distributions to evaluate distributional alignment. Several definitions treat it as a multiple-choice survey or QA resource: one says it includes 1,498 multiple-choice survey questions, another describes 493 ordinal-choice questions covering 60 groups across 12 demographic features, and a personalization paper uses a subsampled split with 10.5k training and 15.8k test QA pairs across 525 users and 15 topics. A smaller usage refers to "OpinionsQA" as persona data used in prior work to learn persona embeddings and soft-prompts.

**What it is claimed to measure.** The reported measurement claims name 3 constructs and no behavioral indicators. The linked constructs are In-context learning, Personalization, and Representativeness: papers describe using OpinionQA for quantifying distributional alignment, as one of two QA datasets proposed to measure steerability for specific users or social groups, and for calculating a representativeness score from simulated preference models. The measurement claims therefore span several constructs rather than centering on a single reported target.

**Space of uses.** Papers commonly position OpinionQA as an evaluation set for comparing model response distributions with those of US citizens, predicting the most common answer for a demographic group, or simulating public opinion. It is frequently used alongside GlobalOpinionQA, and some papers also pair it with Value Kaleidoscope or list it with NYT Book Opinions as another dataset for quantifying distributional alignment.

## Sources

**[Few-shot Personalization of LLMs with Mis-aligned Responses](https://aclanthology.org/2025.naacl-long.598.pdf)**
> A survey-based benchmark using PEW public opinion questions and demographic-group response distributions to evaluate distributional alignment.

**[Evaluating the Prompt Steerability of Large Language Models](https://aclanthology.org/2025.naacl-long.400.pdf) (as "OpinionsQA")**
> A persona dataset used in prior work to learn persona embeddings and design soft-prompts for steering model behavior.

## Relationships

### → OpinionQA
- **Personalization** (constructs) — *measured_by*
  > For the experiments, we first use two multiple-choice QA datasets proposed to measure the steerability of LLMs for specific users (or social groups): OpinionQA (Santurkar et al., 2023) and GlobalOpinionQA (Durmus et al., 2023). (Section 4.1)
  - [Few-shot Personalization of LLMs with Mis-aligned Responses](https://aclanthology.org/2025.naacl-long.598.pdf)
- **Pluralistic alignment** (constructs) — *measured_by*
  > In this section, we describe three datasets for quantifying distributional alignment – OpinionQA (Santurkar et al., 2023), GlobalOpinionQA (Durmus et al., 2024), and a new non-political subjective opinion dataset, NYT Book Opinions.
  - [Benchmarking Distributional Alignment of Large Language Models](https://aclanthology.org/2025.naacl-long.2.pdf)
