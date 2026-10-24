# PGD
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the definitions, PGD is treated as an iterative adversarial attack that repeatedly takes small steps in the gradient direction and projects each update back into a constrained perturbation space. One definition further specifies it as a white-box attack, and some usage is stated specifically as PGD-l∞, where the projection keeps perturbations within ε∞ constraints; papers also describe it as a method for crafting or generating adversarial examples.

**What it is claimed to measure.** The papers do not report PGD as measuring any construct or behavioral indicator, and no linked target construct is identified.

**Space of uses.** One paper explicitly employs PGD-l∞ alongside CW-l2 as two standard adversarial attack methods, while other papers refer to PGD more generally as an iterative approach for crafting adversarial examples.

## Sources

**[Tight Clusters Make Specialized Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/854a9ab0f323b841955e70ca383b27d1-Paper-Conference.pdf)**
> Projected Gradient Descent, a white-box iterative adversarial attack that takes multiple small steps in the gradient direction and projects the result back into a constrained space.
