# Prompt decomposition
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Text decomposition  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats prompt decomposition as taking a complex textual description or query and splitting it into multiple shorter units. Papers agree on the core operation, decomposition into semantically coherent phrases or distinct sub-prompts, and differ mainly in how they describe the outputs: some frame them as short phrases, while others frame them as sub-prompts for individual concepts such as scene, objects, and motion.

**Variants.** A smaller naming variation appears between text decomposition and prompt decomposition. The studied settings range from decomposing a complex text description into short phrases to decomposing a complex query for video generation into several concept-specific sub-prompts.

**Space of elicitation and scores.** No measurement instrument is linked to this behavior in the papers. Operationalization is described directly through the task itself, as decomposing a complex input into shorter phrases or distinct concept-level sub-prompts.

**What it is taken as evidence of.** No construct is linked to this behavior in the papers.

## Sources

**[Boosting Weakly Supervised Referring Image Segmentation via Progressive Comprehension](https://proceedings.neurips.cc/paper_files/paper/2024/file/a97f0218b49bc17ea3f121a0e724f028-Paper-Conference.pdf) (as "Text decomposition")**
> The task of breaking down a complex text description into multiple, shorter, semantically coherent phrases.

**[Compositional 3D-aware Video Generation with LLM Director](https://proceedings.neurips.cc/paper_files/paper/2024/file/edbeca7811f9365c924c72a8a9bce83a-Paper-Conference.pdf)**
> Splitting a complex textual input into distinct sub-prompts that describe individual concepts such as scene, objects, and motion.

## Relationships

### Prompt decomposition →
- **Parameter efficiency** (constructs) — *causes*
  > Our structured decomposition enables more regulated and harmonious parameter updates, thereby enhancing parameter efficiency and facilitating the extraction of general knowledge more effectively.
  - [Decomposed Prompt Decision Transformer for Efficient Unseen Task Generalization](https://proceedings.neurips.cc/paper_files/paper/2024/file/de18052eb17cce56554a9637dd5aadba-Paper-Conference.pdf)

### → Prompt decomposition
- **Parameter efficiency** (constructs) — *causes*
  > “Compared to [12], our structured decomposition enables more regulated and harmonious parameter updates, thereby enhancing parameter efficiency and facilitating the extraction of general knowledge more effectively.”
  - [Decomposed Prompt Decision Transformer for Efficient Unseen Task Generalization](https://proceedings.neurips.cc/paper_files/paper/2024/file/de18052eb17cce56554a9637dd5aadba-Paper-Conference.pdf)
