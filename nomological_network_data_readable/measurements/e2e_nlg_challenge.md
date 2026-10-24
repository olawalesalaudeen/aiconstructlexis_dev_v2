# E2E NLG Challenge
**Type:** Measurement  
**Referenced in:** 15 papers  
**Also known as:** E2E NLG, E2E  

## State of the Field

**What it is.** Across papers, the prevailing description is a benchmark or dataset for natural language generation from structured input in the restaurant domain. Authors variously refer to it as E2E NLG Challenge, E2E NLG, or simply E2E, and most describe the task as generating natural language from structured meaning representations; some instead phrase it as data-to-text or table-to-text generation, and one description specifies that it verbalizes key-value attribute pairs in English.

**What it is claimed to measure.** Papers link it to two behavioral indicators and no constructs. The more prevalent recorded use is to measure Text generation, with papers describing it as an NLG or text generation benchmark, and it is also used to measure Data-to-text generation, including table-to-text generation and verbalizing structured attributes, so the recorded claims cluster around those two behavioral indicators rather than a broader construct set.

**Space of uses.** No measurement instrument is linked to it. In practice, papers often use it alongside WebNLG, and one text generation setup also groups it with CommonGen and an Adidas product description dataset; a recurring usage is as a benchmark for fine-tuning or adaptation experiments with GPT-2 medium or large, where authors position it as a commonly used benchmark for evaluating NLG models.

## Sources

**[KaSA: Knowledge-Aware Singular-Value Adaptation of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8aec95bc5344290249c32841c07c9dd1-Paper-Conference.pdf)**
> A benchmark for evaluating natural language generation systems in the restaurant domain, focusing on generating text from structured meaning representations.

**[Logits are All We Need to Adapt Closed Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hiranandani25a/hiranandani25a.pdf) (as "E2E NLG")**
> E2E NLG is a text generation benchmark used to evaluate generation from structured meaning representations to natural language.

**[Joint Localization and Activation Editing for Low-Resource Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lai25a/lai25a.pdf) (as "E2E")**
> The E2E NLG Challenge dataset, focused on generating text from structured meaning representations in the restaurant domain.

## Relationships

### → E2E NLG Challenge
- **Text generation** (behaviors tasks) — *measured_by*
  > We compare our approach with LoRA and other parameter-efficient adaptation methods on the natural language understanding (GLUE) and natural language generation (E2E) benchmarks... (Section 1)
  - [VeRA: Vector-based Random Matrix Adaptation](https://proceedings.iclr.cc/paper_files/paper/2024/file/1b53ad08de383a049e9668a9d0b6a053-Paper-Conference.pdf)
- **Data-to-text generation** (behaviors tasks) — *measured_by*
  > ...we consider 7 datasets corresponding to commonly-studied natural language generation (NLG) tasks [51]: ... E2E and WebNLG (data-to-text generation)... (Section 5.1)
  - [Smoothie: Label Free Language Model Routing](https://proceedings.neurips.cc/paper_files/paper/2024/file/e6b57a990462df5afa58d64ce2709db9-Paper-Conference.pdf)
