# Stealthiness
**Type:** Construct  
**Referenced in:** 21 papers  
**Also known as:** Attack stealthiness  

## State of the Field

Across the provided literature, Stealthiness is consistently characterized as a property of an attack that renders it undetectable to humans. The most prevalent framing defines this property at the level of input data, where malicious inputs are made indistinguishable from benign ones. This is described across several modalities, with one paper noting poison samples are 'visually indistinguishable from benign images,' another aiming for adversarial audio that is 'perceptually natural to human listeners,' and a third ensuring webpage modifications are 'invisible to regular users.' A different line of work, however, frames stealthiness in terms of model behavior rather than input data. In this view, an attack is considered stealthy if the malicious behavior remains 'dormant and undetectable' until a specific trigger like quantization is applied. Similarly, another paper defines attack stealthiness as the absence of 'suspicious or abnormal behavior' that would raise user suspicion.

## Sources

**[Shadowcast: Stealthy Data Poisoning Attacks Against Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6a2e30664b9647f97d7b9275358d083c-Paper-Conference.pdf)**
> The property of a data poisoning attack being undetectable by human inspection, where poison samples are visually indistinguishable from benign data.

**[The Ripple Effect: On Unforeseen Complications of Backdoor Attacks](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bo/zhang25bo.pdf) (as "Attack stealthiness")**
> The property of a backdoor attack being undetectable to users, which is compromised when the model exhibits suspicious or abnormal behavior.

## Relationships

### Stealthiness →
- **Human evaluation** (measurements) — *measured_by*
  > SHuman is based on human evaluation of the adversarial audio’s stealthiness, where 1.0 indicates a highly stealthy waveform and 0.0 indicates an obvious jailbreak attempt (Section 4.1).
  - [AdvWave: Stealthy Adversarial Jailbreak Attack against Large Audio-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/45673dbf3f331fbd911b0689872de396-Paper-Conference.pdf)
- **Text generation quality** (constructs) — *causes*
  > Moreover, preserving the text distribution inherently implies maintaining the quality of the generated text.
  - [StealthInk: A Multi-bit and Stealthy Watermark for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jiang25j/jiang25j.pdf)

### → Stealthiness
- **Coherence** (constructs) — *causes*
  > Thus Eq. (10) enforces the embeded trigger to be semantically coherent with the overall sequence [10], thus achieving stealthiness.
  - [AgentPoison: Red-teaming LLM Agents via Poisoning Memory or Knowledge Bases](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb113910e9c3f6242541c1652e30dfd6-Paper-Conference.pdf)

### Associated with
- **Functional correctness** (constructs)
  > To ensure stealthiness and gain the user’s trust, the attack must preserve the engine’s overall effectiveness in generating functionally correct code and maintain its response speed. (Section 1)
  - [Black-Box Adversarial Attacks on LLM-Based Code Completion](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jenko25a/jenko25a.pdf)
