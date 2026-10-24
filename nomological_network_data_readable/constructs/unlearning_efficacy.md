# Unlearning efficacy
**Type:** Construct  
**Referenced in:** 6 papers  

## State of the Field

The construct of "Unlearning efficacy" is conceptualized in two related but distinct ways within the provided literature. One definition, found across multiple papers, frames it as a dual objective: the degree to which a model successfully erases targeted knowledge while simultaneously remaining useful on non-targeted data. A different, more formal definition is also offered, describing efficacy as the degree to which an unlearning method makes a model "statistically indistinguishable from one retrained from scratch without the data intended to be forgotten" ("Underestimated Privacy Risks for Minority Populations in Large Language Model Unlearning"). This latter view is conceptually operationalized by comparing the behavior of the unlearned model (Munlearn) to a retrained model (Mretrain) to ensure they are approximately equivalent on any corpus. The assessment of this construct is also discussed in the context of developing more "equitable and comprehensive assessments," with one paper proposing a "minority-aware evaluation framework" to achieve a more holistic understanding.

## Sources

**[Towards Effective Evaluations and Comparisons for LLM Unlearning Methods](https://proceedings.iclr.cc/paper_files/paper/2025/file/3a91841d2bcc0b13a3d0d5d60c9f0581-Paper-Conference.pdf)**
> The degree to which an LLM successfully erases targeted knowledge while remaining useful on non-targeted data.

## Relationships

### Unlearning efficacy →
- **Membership inference attack** (measurements) — *measured_by*
  > Machine unlearning is typically evaluated by checking if an instance z is a member of the training set (MEMBER) by checking if the loss ℓof the model θupdated is lower than or equal to a threshold τL (Shokri et al., 2017) (Section 3).
  - [Machine Unlearning Fails to Remove Data Poisoning Attacks](https://proceedings.iclr.cc/paper_files/paper/2025/file/7e810b2c75d69be186cadd2fe3febeab-Paper-Conference.pdf)
- **WMDP** (measurements) — *measured_by*
  > Furthermore, we extend our exploration to the WMDP benchmark and are surprised to find that SatImp exhibits exceptional unlearning performance.
  - [Exploring Criteria of Loss Reweighting to Enhance LLM Unlearning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ak/yang25ak.pdf)

### → Unlearning efficacy
- **General ability** (constructs) — *correlates*
  > this exceptional unlearning performance comes at the cost of a significant decline in retain set accuracy (Section 5.2)
  - [Protecting Privacy in Multimodal Large Language Models with MLLMU-Bench](https://aclanthology.org/2025.naacl-long.207.pdf)
- **Helpfulness** (constructs) — *correlates*
  > as unlearning performance improves, it can negatively impact the model’s reasoning ability and helpfulness. (Section 5.2)
  - [Protecting Privacy in Multimodal Large Language Models with MLLMU-Bench](https://aclanthology.org/2025.naacl-long.207.pdf)

### Associated with
- **Memorization** (constructs)
  > Prior research suggests that outliers, particularly including data tied to minority groups, often exhibit higher memorization propensity which indicates they may be more difficult to unlearn. (Abstract)
  - [Underestimated Privacy Risks for Minority Populations in Large Language Model Unlearning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25d/wei25d.pdf)
