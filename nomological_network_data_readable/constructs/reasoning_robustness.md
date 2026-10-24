# Reasoning robustness
**Type:** Construct  
**Referenced in:** 6 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the papers, the prevailing usage treats reasoning robustness as the extent to which a model keeps its reasoning correct when the same problem is rewritten, perturbed with irrelevant information, or reframed within the same scenario. In Is Your Model Really A Good Math Reasoner? Evaluating Mathematical Reasoning with Checklist, this framing is tied to whether a model "truly understands the inherent mathematical logic of a problem" and remains robust to diverse variations of that problem. A smaller framing, present in another extracted definition, treats it instead as the ability to maintain accurate and reliable performance when handling multiple, potentially interdependent questions in a single input.

**Space of facets.** The clearest breakdown comes from the checklist-based framing, which organizes the construct around an original problem and three robustness variants: problem understanding, irrelevant disturbance, and scenario understanding. Beyond this decomposition, papers do not equate it with, nest it under, or contrast it against other named constructs.

**Space of measurement.** No measurement instrument or behavioral indicator is linked to it. Even so, one paper explicitly describes testing reasoning robustness with MATHCHECK through the original problem and the three variants, so the operationalization is whether correct reasoning is preserved under those changes; the alternative definition focuses on accurate and reliable performance on multiple interdependent questions in a single input without naming a specific instrument.

## Sources

**[Is Your Model Really A Good Math Reasoner? Evaluating Mathematical Reasoning with Checklist](https://proceedings.iclr.cc/paper_files/paper/2025/file/54d2d38a56a74387d5916ee40e462295-Paper-Conference.pdf)**
> The extent to which a model maintains correct reasoning when a problem is rewritten, perturbed with irrelevant information, or reframed within the same scenario.
