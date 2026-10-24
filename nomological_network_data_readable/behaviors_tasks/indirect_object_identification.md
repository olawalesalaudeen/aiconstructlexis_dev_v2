# Indirect object identification
**Type:** Behavior  
**Referenced in:** 8 papers  

## State of the Field

**Space of definitions.** Across the papers, the dominant framing is a sentence-completion or final-token prediction behavior in which the model must produce the indirect object name from context. Most descriptions use two-name prompts where one name is repeated and success is generating the other name, the intended recipient or IO name, for example completing "When Mary and John went to the store, John gave a book to" with "Mary"; another definition states more generally that the behavior is correctly predicting the indirect object from syntactic and semantic context.

**Variants.** Variation is limited and mostly concerns how the same setup is described. Papers call it the IOI task or Indirect Object Identification, sometimes emphasizing name-swapping sentences, sometimes the repeated-name format in which the model must generate the non-repeated name, and sometimes the final-token version of the prompt.

**Space of elicitation and scores.** Indirect object identification is measured by one instrument, the IOI task. Papers use it as a task-based instrument that elicits the behavior through sentence completion or by checking whether the final token is the indirect object name, and no other measurement instrument is connected to it.

**What it is taken as evidence of.** The construct framing is mixed rather than uniform. One paper relates indirect object identification to in-context reasoning, while another paper claims a causal relationship from inductive reasoning to indirect object identification, stating that induction heads on [A][B]...[A] sequences support IOI; papers therefore connect it to two constructs rather than treating it as evidence of a single one.

## Sources

**[Is This the Subspace You Are Looking for? An Interpretability Illusion for Subspace Activation Patching](https://proceedings.iclr.cc/paper_files/paper/2024/file/70b8505ac79e3e131756f793cd80eb8d-Paper-Conference.pdf)**
> The observable behavior of correctly predicting the indirect object in a sentence based on syntactic and semantic context (e.g., identifying 'Mary' as the recipient in 'John gave a book to Mary').

## Relationships

### Indirect object identification →
- **IOI task** (measurements) — *measured_by*
  > In Wang et al. (2022), the authors analyze how the decoder-only transformer language model GPT-2 Small (Radford et al., 2019) performs the Indirect Object Identification (IOI) task. (Section 3)
  - [Towards Principled Evaluations of Sparse Autoencoders for Interpretability and Control](https://proceedings.iclr.cc/paper_files/paper/2025/file/53356aebeea8ffd40a8ac3bb66243162-Paper-Conference.pdf)

### Associated with
- **In-context reasoning** (constructs)
  > Under this definition, we list a few simple examples of reasoning that we will consider below: ... • Indirect object identification (IOI) (Section 2.1).
  - [Distributional Associations vs In-Context Reasoning: A Study of Feed-forward and Attention Layers](https://proceedings.iclr.cc/paper_files/paper/2025/file/533a89d7c2980218d82dbe3ea85f77ae-Paper-Conference.pdf)
