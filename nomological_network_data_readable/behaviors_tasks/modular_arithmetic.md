# Modular arithmetic
**Type:** Behavior  
**Referenced in:** 8 papers  
**Also known as:** Modular addition  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage treats it as performing arithmetic in a system where values wrap around at a modulus. A narrower formulation treats it as modular addition, described as computing the remainder of a sum when divided by the modulus, and one example frames this as determining whether the answer is even or odd. Another source makes the broad framing explicit by including addition and counting within the wrap-around system.

**Variants.** Papers mostly use the broad label modular arithmetic, but they also single out modular addition and modular counting. Modular addition is the smaller variant, centered on sum remainders, while modular counting is described as a more challenging task. One paper also refers more generally to multiple modular arithmetic tasks without further separating them.

**Space of elicitation and scores.** No measurement instrument is linked to it. Papers instead use it as a direct task formulation, with elicitation described through modular arithmetic tasks such as modular addition or modular counting rather than through a named instrument.

**What it is taken as evidence of.** The only linked construct is state tracking ability. In that usage, state tracking ability is measured by modular arithmetic, and the task appears alongside parity and permutation composition in testing state-tracking performance.

## Sources

**[DAPE: Data-Adaptive Positional Encoding for Length Extrapolation](https://proceedings.neurips.cc/paper_files/paper/2024/file/2f050fa9f0d898e3f265d515f50ae8f9-Paper-Conference.pdf)**
> The task of performing arithmetic operations within a system of integers where numbers 'wrap around' upon reaching a certain value, the modulus.

**[Pre-trained Large Language Models Use Fourier Features to Compute Addition](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cc8dc30e52798b27d37b795cc153310-Paper-Conference.pdf) (as "Modular addition")**
> The observable behavior of computing the remainder of a sum when divided by a modulus, often used to refine an approximate answer.

## Relationships

### Modular arithmetic →
- **Logit lens** (measurements) — *measured_by*
  > Next, we analyze the contributions of individual model components using Logit Lens [3]. We observe that some components primarily approximate the answer—they promote all numbers close to the correct answer in magnitude— while other components primarily classify the answer modulo m for various numbers m.
  - [Pre-trained Large Language Models Use Fourier Features to Compute Addition](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cc8dc30e52798b27d37b795cc153310-Paper-Conference.pdf)

### Associated with
- **State tracking ability** (constructs)
  > We test the modified methods on parity, modular arithmetic, and permutation composition, demonstrating improved state-tracking performance.
  - [Unlocking State-Tracking in Linear RNNs Through Negative Eigenvalues](https://proceedings.iclr.cc/paper_files/paper/2025/file/5a0ce3abb720b740419e193c87afd080-Paper-Conference.pdf)
