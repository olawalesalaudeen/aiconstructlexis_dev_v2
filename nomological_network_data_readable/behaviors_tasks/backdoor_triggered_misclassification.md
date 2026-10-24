# Backdoor-triggered misclassification
**Type:** Behavior  
**Referenced in:** 2 papers  
**Also known as:** Triggered misclassification, Backdoor-triggered classification  

## State of the Field

The observable behavior in which a model incorrectly classifies inputs that contain a backdoor trigger, producing a targeted adversarial output.

## Sources

**[Backdoor Attacks in Token Selection of Attention Mechanism](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25c/wang25c.pdf) (as "Triggered misclassification")**
> The observable behavior in which a model incorrectly classifies inputs that contain a backdoor trigger, producing a targeted adversarial output.

**[Demystifying Poisoning Backdoor Attacks from a Statistical Perspective](https://proceedings.iclr.cc/paper_files/paper/2024/file/4488bf8354049b1cd592b6418dc30466-Paper-Conference.pdf) (as "Backdoor-triggered classification")**
> Classifying triggered inputs into the attacker’s target label when the backdoor trigger is present.

## Relationships

### → Backdoor-triggered misclassification
- **Backdoor vulnerability** (constructs) — *causes*
  > “backdoor attacks are particularly insidious: they introduce ‘poisoned triggers’ ... When a trigger is present, the model produces an adversarial response; otherwise, it behaves normally.”
  - [Backdoor Attacks in Token Selection of Attention Mechanism](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25c/wang25c.pdf)
