# Causal inference
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Cause attribution, Causal effect estimation, Effect inference, Causal identification  

## State of the Field

**Space of definitions.** Papers use this label for several tasks centered on inferring causes or effects from observations, premises, or interventions. A prevalent formulation is selecting the most plausible cause or effect for a given premise from a set of alternatives. Other papers describe uncovering potential causes behind a process or observed outcome, investigating or quantifying the effect of cause variables, estimating effects from an inferred adjustment set or causal structure, predicting the new or future state after actions, or determining which objects can activate a machine from observed outcomes.

**Variants.** Papers name variants such as cause attribution, causal effect estimation, effect inference, and causal identification. One line studies action based settings in both 1-step and N-step forms: given a current state and an action, the model predicts the new state, and longer horizon versions provide a sequence of actions. Another uses a Blicket style setting, asking which objects can activate a machine based on observed outcomes.

**Space of elicitation and scores.** Papers link this behavior to two measurement instruments, ACRE and AI2-THOR. ACRE is described as the Abstract Causal REasoning dataset and tests an LLM's ability to identify causal relationships, while AI2-THOR is used for reporting N-step causal inference accuracies across different environments and step lengths.

**What it is taken as evidence of.** Only one construct is linked to this behavior, causal reasoning, and the recorded relationship is that causal inference is related to it. In that usage, papers place cause attribution and causal effect estimation among "Causal Reasoning tasks," so the available work connects this behavior to causal reasoning and does not record other construct links.

## Sources

**[Unveiling Causal Reasoning in Large Language Models: Reality or Mirage?](https://proceedings.neurips.cc/paper_files/paper/2024/file/af2bb2b2280d36f8842e440b4e275152-Paper-Conference.pdf) (as "Cause attribution")**
> The task of uncovering the potential causes behind a given process or observed outcome.

**[Unveiling Causal Reasoning in Large Language Models: Reality or Mirage?](https://proceedings.neurips.cc/paper_files/paper/2024/file/af2bb2b2280d36f8842e440b4e275152-Paper-Conference.pdf) (as "Causal effect estimation")**
> The task of investigating and quantifying the effect of specific cause variables on outcome variables.

**[Enhancing In-Context Learning Performance with just SVD-Based Weight Pruning: A Theoretical Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/448444518637da106d978ae7409d9789-Paper-Conference.pdf)**
> The task of selecting the most plausible cause or effect for a given premise from a set of alternatives.

**[Causal Order: The Key to Leveraging Imperfect Experts in Causal Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/edcbd38b2509b57954d38de6cd9c05b3-Paper-Conference.pdf) (as "Effect inference")**
> Estimating causal effects of one variable on another from an inferred adjustment set or causal structure.

**[LLMs Can Plan Only If We Tell Them](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1e67cde895c3c91edb43569ad0df260-Paper-Conference.pdf) (as "Causal identification")**
> Determining which objects can activate a machine based on observed outcomes.

## Relationships

### Causal inference →
- **AI2-THOR** (measurements) — *measured_by*
  > We evaluate our framework using two distinct environments: a dynamic 8 × 8 GridWorld and a static 3D-rendered kitchen (AI2-THOR)... Our experiments focus on three key aspects: the effectiveness of text-based action representations, causal inference, and planning.
  - [Language Agents Meet Causality -- Bridging LLMs and Causal World Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5c5bc3553815adb4d1a8a5b8701e41a9-Paper-Conference.pdf)
- **Gridworld** (measurements) — *measured_by*
  > N-step causal inference accuracies for the causal world model and the RAP (Hao et al., 2023) world model across different environments and step lengths. (Table 2)
  - [Language Agents Meet Causality -- Bridging LLMs and Causal World Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5c5bc3553815adb4d1a8a5b8701e41a9-Paper-Conference.pdf)
- **ACRE** (measurements) — *measured_by*
  > “ACRE. The Abstract Causal REasoning (ACRE) dataset ... tests an LLM’s ability to identify causal relationships.”
  - [LLMs Can Plan Only If We Tell Them](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1e67cde895c3c91edb43569ad0df260-Paper-Conference.pdf)

### Associated with
- **Causal reasoning** (constructs)
  > Causal Reasoning tasks include causal discovery, cause attribution, and causal effect estimation [30, 58, 65]. (Section 2.2)
  - [Unveiling Causal Reasoning in Large Language Models: Reality or Mirage?](https://proceedings.neurips.cc/paper_files/paper/2024/file/af2bb2b2280d36f8842e440b4e275152-Paper-Conference.pdf)
