# Mode collapse
**Type:** Behavior  
**Referenced in:** 7 papers  

## State of the Field

**Space of definitions.** Across the papers, mode collapse is treated as an observable failure mode in which a model concentrates on dominant modes of a distribution and neglects less frequent information. The available definition places it in knowledge distillation, where a student model focuses only on the dominant modes of the teacher distribution, and related snippets describe the same pattern more broadly as focusing on a limited subset of the distribution or repeatedly generating the same few completions even when many valid answers exist.

**Variants.** Papers discuss this behavior in several settings: knowledge distillation, RLHF fine-tuning, and broader LLM generation. In these uses, it appears either as a student model concentrating on a teacher's dominant modes, as reduced or across-input diversity taken as evidence of the phenomenon, or as repeated production of the same few completions across tasks.

**Space of elicitation and scores.** No measurement instrument is linked to it. The papers describe it as observable, but they do not name any instrument that elicits or scores mode collapse.

**What it is taken as evidence of.** The only construct linked to it is Generation diversity, but the recorded links do not frame that connection in a single way. Some papers report that Generation diversity is related to mode collapse, treating reduced diversity as evidence of the phenomenon, while another paper claims a causal relationship from mode collapse to Generation diversity, stating that generating the same few completions limits diversity across tasks.

## Sources

**[TAID: Temporally Adaptive Interpolated Distillation for Efficient Knowledge Transfer in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e664650506f1cf2b4696df892147c06e-Paper-Conference.pdf)**
> An observable failure mode in knowledge distillation where a student model's output distribution becomes overly focused on only the dominant modes of the teacher's distribution, ignoring less frequent but potentially important information.

## Relationships

### Mode collapse →
- **Generation diversity** (constructs) — *causes*
  > Large Language Models (LLMs) often suffer from mode collapse, repeatedly generating the same few completions even when many valid answers exist, limiting their diversity across a wide range of tasks.
  - [Group-Aware Reinforcement Learning for Output Diversity in Large Language Models](https://aclanthology.org/2025.emnlp-main.1649.pdf)
