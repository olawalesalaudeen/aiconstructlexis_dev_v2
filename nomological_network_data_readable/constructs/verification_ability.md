# Verification ability
**Type:** Construct  
**Referenced in:** 6 papers  
**Also known as:** Verification capability, Discriminative power  

## State of the Field

**Definition agreement:** Consensus. All papers define verification ability as a model's latent capacity to evaluate candidate reasoning or outputs for correctness and pick out the correct ones. The differences are mainly in scope and granularity, with some papers focusing on whole solution trajectories or outputs and one on fine-grained reasoning steps, but they study the same core property.

**Space of definitions.** Across papers, the prevailing usage treats this construct as a latent verification capacity: a model judges the correctness or quality of candidate outputs and selects the correct trajectory from alternatives. One definition frames it as identifying and selecting the correct solution trajectory from a set of candidates, and another says the model may act as a "better-than-random verifier of its own outputs." A smaller formulation narrows the concept to a PRM's discriminative power, namely distinguishing correct from incorrect reasoning steps at fine-grained, including token-level, resolution. The main variation is therefore about scope and granularity, complete candidate solutions versus step-level discrimination, and about whether the ability is stated for a model generally or for a PRM specifically.

**Space of facets.** Papers mainly differentiate the concept by what is being verified. Most formulations concern complete candidate outputs or solution trajectories, including self-verification of a model's own outputs; one paper also describes "informative verification" through a verifier model used to construct a proxy utility function. A narrower usage appears under the label discriminative power, which focuses on fine-grained reasoning steps and token-level distinction between correct and incorrect steps. The same general idea appears under the names verification ability and verification capability, while discriminative power is used for a narrower token-level variant.

**Space of measurement.** Operationalization is narrow in the linked work: papers connect it to two measurement instruments, MATH-500 and GSM-Plus, and to no behavioral indicators. The explicit setup evaluates PRMs through best-of-n sampling and assesses "the correctness of the most preferred trajectory selected by the PRM from n candidates for each question," using solution sets from those datasets. This linked measurement directly instantiates the trajectory-selection framing; no separate linked instrument is recorded for the token-level discriminative-power framing.

## Sources

**[Process Reward Model with Q-value Rankings](https://proceedings.iclr.cc/paper_files/paper/2025/file/26494b66ae1114d314673e25b4967288-Paper-Conference.pdf)**
> The latent capacity of a model to identify and select the correct solution trajectory from a set of candidates.

**[Mind the Gap: Examining the Self-Improvement Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/63943ee9fe347f3d95892cf87d9a42e6-Paper-Conference.pdf) (as "Verification capability")**
> The latent ability of a model to judge the quality or correctness of candidate outputs better than chance.

**[AdaptiveStep: Automatically Dividing Reasoning Step through Model Confidence](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25aq/liu25aq.pdf) (as "Discriminative power")**
> The ability of a PRM to accurately distinguish between correct and incorrect reasoning steps, especially at fine-grained (e.g., token) levels.

## Relationships

### Verification ability →
- **Best-of-n sampling** (measurements) — *measured_by*
  > “we evaluate PRMs based on their verification ability through best-of-n sampling.”
  - [Process Reward Model with Q-value Rankings](https://proceedings.iclr.cc/paper_files/paper/2025/file/26494b66ae1114d314673e25b4967288-Paper-Conference.pdf)
- **MATH-500** (measurements) — *measured_by*
  > “For example, when verifying solutions sampled from the Llama-3-70B-Instruct model, PQM improves the accuracy from 39.8% to 51.4%, a direct 11.6% improvement on the challenging MATH500 benchmark”
  - [Process Reward Model with Q-value Rankings](https://proceedings.iclr.cc/paper_files/paper/2025/file/26494b66ae1114d314673e25b4967288-Paper-Conference.pdf)
- **GSM-Plus** (measurements) — *measured_by*
  > “The test corpus includes 128 solutions for each question from GSM-Plus (Li et al., 2024) and MATH500 (Hendrycks et al., 2021) datasets.”
  - [Process Reward Model with Q-value Rankings](https://proceedings.iclr.cc/paper_files/paper/2025/file/26494b66ae1114d314673e25b4967288-Paper-Conference.pdf)
