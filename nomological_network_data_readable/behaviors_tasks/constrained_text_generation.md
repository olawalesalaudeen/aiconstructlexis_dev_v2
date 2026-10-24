# Constrained text generation
**Type:** Behavior  
**Referenced in:** 10 papers  
**Also known as:** Constrained generation  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats constrained text generation as an observable task of producing text that obeys predefined rules or externally imposed constraints. Common success criteria are that the output stays on a required topic, avoids certain words, includes specified concepts, or illustrates all requested skills within a stated format such as a topic and sentence limit. A smaller line of work uses the label 'constrained generation' for the ability to produce an output in a constraint set while remaining in the generator's support, phrased in one definition as producing 'an element s ∈ A ⊆ Σ* such that pO(s) > 0'.

**Variants.** Variants are mainly distinguished by the kinds of constraints imposed. Papers mention topic control and avoiding certain words, multi-constraint settings that ask for a short text in a chosen topic and to illustrate all selected skills, formally or logically constrained outputs, and constrained decoding settings with lexical or semantic targets such as constrained commonsense generation (CommonGen) and harmless text generation (HTG). The naming also varies, with papers using constrained text generation, constrained generation, and constrained decoding.

**Space of elicitation and scores.** No measurement instrument is linked to it. Papers instead describe elicitation through task setups, for example asking for a short text on a selected topic while showing a selected set of skills, or using constrained decoding tasks that require specific concepts or harmless text.

**What it is taken as evidence of.** Papers link it to 2 constructs, both through 'related' rather than measurement claims: Instruction following ability and Logical reasoning. One paper relates it to logical reasoning by proposing 'incorporating logical and compositional challenges via constrained text generation', while another relates it to instruction following ability by describing the difficulty of conditioning LLMs on logical constraints. The recorded construct links are limited to those two related constructs.

## Sources

**[COLLIE: Systematic Construction of Constrained Text Generation Tasks](https://proceedings.iclr.cc/paper_files/paper/2024/file/a77eadda332b6d4a9ae1e0e4024555f2-Paper-Conference.pdf)**
> The observable task of producing text that must adhere to a specific set of predefined rules or constraints.

**[On the Query Complexity of Verifier-Assisted Language Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/botta25a/botta25a.pdf) (as "Constrained generation")**
> The latent ability of a language model to produce outputs that satisfy externally imposed structural constraints while remaining in the generator's support.

## Relationships

### Associated with
- **Logical reasoning** (constructs)
  > We posit that one direction is incorporating logical and compositional challenges via constrained text generation.
  - [COLLIE: Systematic Construction of Constrained Text Generation Tasks](https://proceedings.iclr.cc/paper_files/paper/2024/file/a77eadda332b6d4a9ae1e0e4024555f2-Paper-Conference.pdf)
