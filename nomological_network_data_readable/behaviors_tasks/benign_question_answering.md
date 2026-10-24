# Benign question answering
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

**Space of definitions.** In the available definition, papers treat this behavior as responding helpfully and accurately to standard, non-adversarial user questions. The accompanying usage frames it as answering benign prompts rather than refusing them, describing evaluation in terms of whether defense methods "refuse to answer benign prompts or not."

**Variants.** The only setting described is normal question answering for reading comprehension. Papers refer to standard, non-adversarial user questions and benign prompts, and place the behavior in normal question-answering tasks.

**Space of elicitation and scores.** Papers link this behavior to one measurement instrument, TriviaQA, described as a normal question-answering dataset for reading comprehension and used for benign answer evaluation. The same paper also says it employs Benign Answering Rate (BAR) to examine whether models refuse benign prompts.

**What it is taken as evidence of.** No construct is linked to this behavior.

## Sources

**[Protecting Your LLMs with Information Bottleneck](https://proceedings.neurips.cc/paper_files/paper/2024/file/34a1fc7890141f1ada3d8bc6199cce07-Paper-Conference.pdf)**
> The task of responding helpfully and accurately to standard, non-adversarial user questions.

## Relationships

### Benign question answering →
- **TriviaQA** (measurements) — *measured_by*
  > TriviaQA is a normal question-answering dataset for reading comprehension, and we sample 230 examples for our benign answer evaluation. (Section 5.1)
  - [Protecting Your LLMs with Information Bottleneck](https://proceedings.neurips.cc/paper_files/paper/2024/file/34a1fc7890141f1ada3d8bc6199cce07-Paper-Conference.pdf)
