# Specialization
**Type:** Construct  
**Referenced in:** 9 papers  
**Also known as:** Skill specialization  

## State of the Field

**Definition agreement:** Conflicting. A couple of papers define specialization as a model having narrow skill or domain specific expertise rather than broad ability, but the others use it for different phenomena: the process of role differentiation among agents in a multiagent system, or a system's ability to route tasks to the correct expert module. These are not the same thing, so papers using these definitions would not be studying the same construct.

**Space of definitions.** Across papers, specialization is not used in one consistent way. Some authors describe a process in which models within a multiagent system develop distinct functionalities or expertise through targeted finetuning, such as generation versus critique. Other papers use the same term for narrow target-domain strength, for high performance on held-in tasks through correct expert retrieval and use, or for concentration on a few skills at the expense of others while optimizing an evaluation metric; papers variously frame it as a process, a latent tendency, an ability, or a pattern of uneven skill development.

**Space of facets.** Papers organize the idea along different units and objectives rather than a common subtype scheme. One line of work specializes different models into roles within an output generation procedure, including critic agents; another centers specialization on a few topics or target sets; another ties it to expert modules and held-in tasks; and the skill-specialization usage treats it as uneven competency across skills. The same name is therefore applied to several usages, and the only explicit contrast elsewhere is with generalization.

**Space of measurement.** Operationalization is sparse: specialization is linked to 1 measurement instrument, The Pile. In that usage, datasets from The Pile are treated as target specialization sets, so the construct is operationalized through performance on designated target data. Papers do not link a measurement instrument to the multiagent, expert-routing, or usage where models specialize in a few skills at the expense of others, and the only linked behavioral indicator, Iterative refinement, is connected by a causal claim rather than a measured_by relation.

**Links.** Beyond measurement, papers connect specialization to 1 construct and 1 behavioral indicator. It is related to Generalization: one paper says models that focus on broad generalization may have specialized abilities in medical time series that are not satisfactory, and another describes a balance between generalization and specialization. Separately, one paper claims a causal relationship from Specialization to Iterative refinement by specializing critic agents that evaluate and refine the generations of other models; no correlational link is reported.

## Sources

**[Re-evaluating Open-ended Evaluation of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/57a009897ab00e2d811a4581ad1f7239-Paper-Conference.pdf) (as "Skill specialization")**
> The tendency of a model to develop high competency in a few specific skills, potentially at the expense of other, less-represented skills, often as a result of optimizing for a flawed evaluation metric.

**[Multiagent Finetuning: Self Improvement with Diverse Reasoning Chains](https://proceedings.iclr.cc/paper_files/paper/2025/file/1d50221b03ced7152d8750c9d1e66cba-Paper-Conference.pdf)**
> The process by which individual models within a multiagent system develop distinct functionalities or expertise, such as generation or critique, through targeted finetuning.

## Relationships

### Specialization →
- **The Pile** (measurements) — *measured_by*
  > We consider 16 datasets from the PILE (Gao et al., 2020) as target specialization sets (Section 3)
  - [Soup-of-Experts: Pretraining Specialist Models via Parameters Averaging](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ablin25a/ablin25a.pdf)

### Associated with
- **Generalization** (constructs)
  > These pre-trained TSFMs focus on generalization with a wide domain of time series, where their specialized abilities in medical time series may not be satisfactory. Therefore, we propose a lightweight TSFM personalization scheme to tackle the specialization ability. (Section 2.1).
  - [Efficient Personalized Adaptation for Physiological Signal Foundation Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25ah/wu25ah.pdf)
