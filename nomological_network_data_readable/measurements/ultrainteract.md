# UltraInteract
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Across the available definitions, UltraInteract is most commonly described as multi-turn conversational data for complex reasoning tasks. One framing presents it as a multi-turn RLHF dataset with dialogues that cover general chat scenarios and are used to evaluate conversational and instruction-following abilities, while another describes it as a pairwise alignment dataset with multi-turn conversational data, specifically designed to evaluate and improve performance on complex reasoning tasks.

**What it is claimed to measure.** Papers link UltraInteract to one construct, Reasoning, and no behavioral indicators. The explicit measurement claim uses it to measure Reasoning, with a paper describing it as a dataset "specifically designed for complex reasoning tasks"; definitions also describe it as evaluating conversational and instruction-following abilities, but those are not linked as separate constructs here.

**Space of uses.** In use, papers position UltraInteract in two ways: as an evaluation setting for model responses to instructions with complex reasoning tasks, and as data for fine-tuning alignment models. One study reports results on it directly, while another uses it to fine-tune Mistral models; papers do not link it to any other measurement instrument.

## Sources

**[Regressing the Relative Future: Efficient Policy Optimization for Multi-turn RLHF](https://proceedings.iclr.cc/paper_files/paper/2025/file/186094ef879dcbd5ef6879782916c309-Paper-Conference.pdf)**
> A multi-turn RLHF dataset containing dialogues with complex reasoning tasks, used to evaluate a model's conversational and instruction-following abilities.

## Relationships

### Associated with
- **Reasoning** (constructs)
  > "We consider fine-tuning Mistral-7B and Mistral-8×7B models on UltraInteract [44], a pairwise alignment dataset specifically designed for complex reasoning tasks."
  - [Noise Contrastive Alignment of Language Models with Explicit Rewards](https://proceedings.neurips.cc/paper_files/paper/2024/file/d5a58d198afa370a3dff0e1ca4fe1802-Paper-Conference.pdf)
