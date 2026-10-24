# Reversal curse
**Type:** Construct  
**Referenced in:** 3 papers  

## State of the Field

The phenomenon where an auto-regressive model, after learning a forward relationship such as 'A is B', fails to generalize to the inverse relationship 'B is A' without explicit training on it.

## Sources

**[Towards a Theoretical Understanding of the 'Reversal Curse' via Training Dynamics](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4b95476f673e6e538f80862f622ba2f-Paper-Conference.pdf)**
> The phenomenon where an auto-regressive model, after learning a forward relationship such as 'A is B', fails to generalize to the inverse relationship 'B is A' without explicit training on it.

## Relationships

### Reversal curse →
- **Hallucination** (behaviors tasks) — *causes*
  > A well-studied failure mode underlying hallucinations is the reversal curse
  - [The Factorization Curse: Which Tokens You Predict Underlie the Reversal Curse and More](https://proceedings.neurips.cc/paper_files/paper/2024/file/cbcce87f745072c819204529be843d16-Paper-Conference.pdf)

### Associated with
- **Generalization** (constructs)
  > If a model is trained on a sentence of the form “A is B”, it will not automatically generalize to the reverse direction “B is A”. This is the Reversal Curse.
  - [The Reversal Curse: LLMs trained on “A is B” fail to learn “B is A”](https://proceedings.iclr.cc/paper_files/paper/2024/file/5178b2f2d7c44aa390c0777dc77b3f0c-Paper-Conference.pdf)
- **Meta-learning** (constructs)
  > Nevertheless, the Reversal Curse demonstrates a failure of meta-learning.
  - [The Reversal Curse: LLMs trained on “A is B” fail to learn “B is A”](https://proceedings.iclr.cc/paper_files/paper/2024/file/5178b2f2d7c44aa390c0777dc77b3f0c-Paper-Conference.pdf)
- **Factual recall** (behaviors tasks)
  > ...when trained on “A → B” (e.g., Tom is the parent of John), LLM fails to directly conclude “B ← A” (e.g., John is the child of Tom) during inference even if the two sentences are semantically identical, which is known as the “reversal curse”. (Abstract)
  - [Towards a Theoretical Understanding of the 'Reversal Curse' via Training Dynamics](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4b95476f673e6e538f80862f622ba2f-Paper-Conference.pdf)
- **Logical reasoning** (constructs)
  > One perspective is that it demonstrates a basic failure of logical deduction in the LLM’s training process.
  - [The Reversal Curse: LLMs trained on “A is B” fail to learn “B is A”](https://proceedings.iclr.cc/paper_files/paper/2024/file/5178b2f2d7c44aa390c0777dc77b3f0c-Paper-Conference.pdf)
