# Conditional text generation
**Type:** Behavior  
**Referenced in:** 6 papers  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats conditional text generation as producing a response or completion from a provided input context or prompt, commonly described as fluent and coherent text based on contextual input. One formulation states this as generating a response y conditioned on a prompt x, while another frames it as predicting remaining tokens, or a token distribution, when certain tokens or an arbitrary subset of tokens are given in advance. The descriptions consistently require the output to use the provided context, and one paper discusses failures as information that is unfaithful or not grounded in that context.

**Variants.** Paper descriptions place it in several settings: text summarization and data-to-text generation are presented as typical conditional generation tasks, and text infilling is described as providing certain tokens in advance and generating the rest. Another paper uses the names arbitrary-context generation and CAR generation for cases where generation must condition on arbitrary contextual evidence or a provided subset of input tokens. One paper also contrasts relatively open-ended and more strongly constrained versions of the task.

**Space of elicitation and scores.** It is measured by two linked instruments, ParaDetox and WikiText-103. The evidence treats both as datasets: one paper uses a fixed set of validation sequences from WikiText-103, while another describes ParaDetox as imposing very strong conditional constraints in comparison with a more open-ended setting.

**What it is taken as evidence of.** Papers do not link this behavior to any construct, so they do not present it as evidence of an underlying construct in the reported relations. Instead, one paper claims a causal relationship from conditional text generation to hallucination, and other papers relate it to text summarization, data-to-text generation, and text infilling.

## Sources

**[SCOPE: A Self-supervised Framework for Improving Faithfulness in Conditional Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/05d6b5b6901fb57d2c287e1d3ce6d63c-Paper-Conference.pdf)**
> Producing fluent and coherent text completions based on provided input contexts.

## Relationships

### Conditional text generation →
- **MAUVE** (measurements) — *measured_by*
  > We evaluate conditional generation using the MAUVE score (Pillutla et al., 2021).
  - [Beyond Autoregression: Fast LLMs via Self-Distillation Through Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/0f93c3e9b557980d93016671acd94bd2-Paper-Conference.pdf)
- **ParaDetox** (measurements) — *measured_by*
  > In particular, we focus on two datasets that significantly differ in their level of conditional constraints: RocStories (Mostafazadeh et al., 2016), which is relatively open-ended, and Paradetox (Logacheva et al., 2022), which imposes the strongest conditional constraints (Section 5.1).
  - [Conditional [MASK] Discrete Diffusion Language Model](https://aclanthology.org/2025.emnlp-main.450.pdf)

### Associated with
- **Text summarization** (behaviors tasks)
  > This issue arises in typical conditional text generation tasks, such as text summarization and data-to-text generation, where the goal is to produce fluent text based on contextual input. (ABSTRACT)
  - [SCOPE: A Self-supervised Framework for Improving Faithfulness in Conditional Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/05d6b5b6901fb57d2c287e1d3ce6d63c-Paper-Conference.pdf)
- **Data-to-text generation** (behaviors tasks)
  > This issue arises in typical conditional text generation tasks, such as text summarization and data-to-text generation, where the goal is to produce fluent text based on contextual input. (ABSTRACT)
  - [SCOPE: A Self-supervised Framework for Improving Faithfulness in Conditional Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/05d6b5b6901fb57d2c287e1d3ce6d63c-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks)
  > Large Language Models (LLMs), when used for conditional text generation, often produce hallucinations, i.e., information that is unfaithful or not grounded in the input context. (ABSTRACT)
  - [SCOPE: A Self-supervised Framework for Improving Faithfulness in Conditional Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/05d6b5b6901fb57d2c287e1d3ce6d63c-Paper-Conference.pdf)
