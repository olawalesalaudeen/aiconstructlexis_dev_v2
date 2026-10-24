# MuSR
**Type:** Measurement  
**Referenced in:** 12 papers  
**Also known as:** MUSR  

## State of the Field

**What it is.** Across papers, the prevailing usage treats MuSR as a benchmark from the Open LLM Leaderboard for reasoning-oriented evaluation, with some definitions specifically placing it in Open LLM Leaderboard v2. Definitions describe it as evaluating reasoning over social or multi-step scenarios, while one paper more specifically presents it as a semi-symbolic benchmark for probing soft-reasoning performance and notes that all tasks are multiple-choice. Relationship evidence further describes its domains as murder mysteries, object placement, and team assignment, involving physical and social situations, theory-of-mind, and commonsense reasoning.

**What it is claimed to measure.** Across papers, measurement claims are spread across six linked constructs and no linked behavioral indicators rather than concentrated on one target. The most common framing is that papers use MuSR to measure commonsense reasoning; papers also use it to measure chain-of-thought reasoning, logical reasoning, physical world understanding, and social reasoning, plus one other construct. A separate paper relates MuSR to commonsense reasoning without recording it as a measurement claim, describing it as semi-symbolic while also involving substantial commonsense reasoning.

**Space of uses.** Papers commonly use MuSR alongside other evaluations rather than alone. Source snippets place it beside MMLU-Pro, GPQA, and BBH in benchmark suites, and another definition describes it as part of fine-tuned model evaluation. In linked-instrument terms, papers relate MuSR to the Open LLM Leaderboard, and one paper reports that MuSR is measured by Human evaluation when validating dataset quality.

**Concerns raised.** One paper reports a validity check through Human evaluation of dataset quality, using it to validate that the answers derived from F match what can be derived from the narratives.

## Sources

**[Magnetic Preference Optimization: Achieving Last-iterate Convergence for Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/5833b4daf5b076dd1cdb362b163dff0c-Paper-Conference.pdf) (as "MUSR")**
> A benchmark included in Open LLM Leaderboard v2 for evaluating reasoning over social or multi-step scenarios.

**[Unveiling the Secret Recipe: A Guide For Supervised Fine-Tuning Small LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/b6e2c96bc4702f761d7d108d6e31930f-Paper-Conference.pdf)**
> A benchmark from the Open LLM Leaderboard used to evaluate reasoning-oriented performance.

## Relationships

### → MuSR
- **Commonsense reasoning** (constructs) — *measured_by*
  > “The domains we address here, murder mysteries, object placement, and team assignment, involve commonsense reasoning about physical (Bisk et al., 2020) and social situations (Sap et al., 2019), theory-of-mind, and more.”
  - [MuSR: Testing the Limits of Chain-of-thought with Multistep Soft Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/3f8c7eb848ffec848f3ed2b7ca44915d-Paper-Conference.pdf)
- **Physical world understanding** (constructs) — *measured_by*
  > “The domains we address here, murder mysteries, object placement, and team assignment, involve commonsense reasoning about physical (Bisk et al., 2020) and social situations (Sap et al., 2019), theory-of-mind, and more.”
  - [MuSR: Testing the Limits of Chain-of-thought with Multistep Soft Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/3f8c7eb848ffec848f3ed2b7ca44915d-Paper-Conference.pdf)
- **Social reasoning** (constructs) — *measured_by*
  > “The domains we address here, murder mysteries, object placement, and team assignment, involve commonsense reasoning about physical (Bisk et al., 2020) and social situations (Sap et al., 2019), theory-of-mind, and more.”
  - [MuSR: Testing the Limits of Chain-of-thought with Multistep Soft Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/3f8c7eb848ffec848f3ed2b7ca44915d-Paper-Conference.pdf)
- **Theory of mind** (constructs) — *measured_by*
  > “The domains we address here, murder mysteries, object placement, and team assignment, involve commonsense reasoning about physical (Bisk et al., 2020) and social situations (Sap et al., 2019), theory-of-mind, and more.”
  - [MuSR: Testing the Limits of Chain-of-thought with Multistep Soft Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/3f8c7eb848ffec848f3ed2b7ca44915d-Paper-Conference.pdf)
- **Logical reasoning** (constructs) — *measured_by*
  > “On datasets that require math (MATH, GSM8K) or formal logic (ContextHub, MuSR to a lesser degree)”
  - [To CoT or not to CoT? Chain-of-thought helps mainly on math and symbolic reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ead542f13a38179d1b55b88610f959a1-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs) — *measured_by*
  > Given that MUSR is designed to assess multistep reasoning, this suggests that models excelling in structured reasoning tasks also tend to perform well in frame-semantic parsing. (Section 4.7)
  - [Can LLMs Extract Frame-Semantic Arguments?](https://aclanthology.org/2025.emnlp-main.1557.pdf)

### Associated with
- **Open LLM Leaderboard** (measurements)
  > Table 2: Evaluation results on various tasks from the Huggingface Open Leaderboard v1 and v2. ... MMLU-PRO, BBH, MUSR, MATH, GSM8K, ARC
  - [On a Connection Between Imitation Learning and RLHF](https://proceedings.iclr.cc/paper_files/paper/2025/file/acf4a08f67724e9d2de34099f57a9c25-Paper-Conference.pdf)
- **Human evaluation** (measurements)
  > To validate that the answers derived from F actually match what can be derived from our narratives, we conducted a human evaluation of dataset quality. (Section 5.1)
  - [MuSR: Testing the Limits of Chain-of-thought with Multistep Soft Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/3f8c7eb848ffec848f3ed2b7ca44915d-Paper-Conference.pdf)
