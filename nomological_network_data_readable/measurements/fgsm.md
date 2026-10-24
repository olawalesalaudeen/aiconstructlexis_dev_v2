# FGSM
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Papers most commonly describe FGSM as the Fast Gradient Sign Method, an adversarial attack method. The definitions converge on the same mechanism: it generates adversarial examples by adding a small perturbation in the direction of the sign of the loss gradient with respect to the input, and one definition explicitly presents it as a white-box attack.

**What it is claimed to measure.** Papers do not use FGSM to measure any construct or behavioral indicator, and no measurement links connect it to linked outcomes.

**Space of uses.** Where papers describe its use, they apply FGSM as an adversarial attack procedure. One paper reports using it together with SI-NI-FGSM and varying the attack strength, stating, "We apply two adversarial attacks FGSM and SI-NI-FGSM with various attack strengths."

## Sources

**[Tight Clusters Make Specialized Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/854a9ab0f323b841955e70ca383b27d1-Paper-Conference.pdf)**
> The Fast Gradient Sign Method, a white-box adversarial attack that perturbs an input in the direction of the sign of the loss function's gradient.
