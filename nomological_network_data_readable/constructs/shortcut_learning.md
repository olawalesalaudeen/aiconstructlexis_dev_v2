# Shortcut learning
**Type:** Construct  
**Referenced in:** 12 papers  
**Also known as:** Reliance on spurious correlations, Spurious correlation capture, Task-specific heuristics  

## State of the Field

**Definition agreement:** Consensus. Most papers define shortcut learning as a model relying on superficial or spurious correlations or features, rather than the task-relevant, causal, or underlying concept, typically with poor generalization under distribution shift. A few papers narrow this to specific settings such as mini-batch correlations or broaden it to narrow task-specific strategies in foundation models, but these are still scope variations of the same core phenomenon rather than different constructs.

**Space of definitions.** Across papers, the prevailing usage describes shortcut learning as models relying on spurious or superficial correlations, or other salient but task-irrelevant features, instead of the intended task features, underlying concepts, or deeper task-relevant reasoning. Several definitions make the data-distribution aspect explicit, saying these cues are prevalent in majority training data or can support high in-distribution performance while failing on minority or out-of-distribution cases. A smaller line of work narrows the idea to mini-batch-level spurious pattern capture, and another frames it more broadly as task-specific heuristics, or different laws for each sample, rather than a unified, interpretable world model.

**Space of facets.** Papers largely use labels such as shortcut learning, reliance on spurious correlations, and spurious correlation capture for the same family of behavior. One paper also speaks of 'shortcut circuits' that directly influence outputs based on salient features, while another ties the construct to task-specific heuristics, coarsened state representations, and non-parsimonious representations. Across these framings, shortcut learning is contrasted with learning the underlying concept, using intended task features, genuine understanding, deeper reasoning, or building a single universal law or unified world model.

**Space of measurement.** No measurement instrument or behavioral indicator is linked to shortcut learning. In the available descriptions, authors point to behaviors such as exploiting shortcuts under empirical risk minimization, showing apparent task proficiency without acquiring the underlying concept, being influenced by names or stereotypes, or encoding batch-local spurious patterns, but no named benchmark, human evaluation, LLM-as-a-judge, probe, or analysis is linked to the construct.

**Links.** A few papers claim a causal relationship from shortcut learning to Generalization: the accompanying quotations describe models relying on shortcuts and then failing to generalize to out-of-distribution data, or shortcut learning that 'undermines generalization' in argument mining. One paper also claims a causal relationship from shortcut learning to Robustness, describing spurious associations that lead models to learn shortcuts that can undermine robustness.

## Sources

**[Mitigating Shortcut Learning with InterpoLated Learning](https://aclanthology.org/2025.acl-long.450.pdf)**
> The tendency of models to rely on spurious correlations between input features and labels that are prevalent in majority training data but irrelevant to the actual task, leading to poor generalization on minority or out-of-distribution examples.

**[Curriculum Debiasing: Toward Robust Parameter-Efficient Fine-Tuning Against Dataset Biases](https://aclanthology.org/2025.acl-long.469.pdf) (as "Reliance on spurious correlations")**
> The model's tendency to use superficial or statistically common but causally unrelated patterns in the training data to make predictions, rather than learning the intended underlying task features.

**[Watch Out Your Album! On the Inadvertent Privacy Memorization in Multi-Modal Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ju25a/ju25a.pdf) (as "Spurious correlation capture")**
> The model's propensity to learn and encode spurious patterns that appear correlated with the objective within a specific mini-batch, even if they are globally irrelevant.

**[What Has a Foundation Model Found? Using Inductive Bias to Probe for World Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/vafa25a/vafa25a.pdf) (as "Task-specific heuristics")**
> The tendency of a foundation model to develop narrow, non-generalizable strategies for specific tasks rather than learning a unified, interpretable world model, leading to poor extrapolation under distribution shift.

## Relationships

### Shortcut learning →
- **Generalization** (constructs) — *causes*
  > Statistical evidence that shortcut learning undermines generalization in argument mining. (Section 1)
  - [Limited Generalizability in Argument Mining: State-Of-The-Art Models Learn Datasets, Not Arguments](https://aclanthology.org/2025.acl-long.1164.pdf)
- **Robustness** (constructs) — *causes*
  > This association can create a spurious correlation between the filmmaker’s names and sentiment, leading LMs to learn shortcuts that can undermine their robustness. (Section 3.1)
  - [Towards Operationalizing Right to Data Protection](https://aclanthology.org/2025.naacl-long.416.pdf)
- **Out-of-distribution generalization** (constructs) — *causes*
  > ...the model can rely on these ‘shortcuts’ and fail to generalize to out-of-distribution data. (Section 3.1)
  - [Towards Operationalizing Right to Data Protection](https://aclanthology.org/2025.naacl-long.416.pdf)
