# Physical world understanding
**Type:** Construct  
**Referenced in:** 17 papers  
**Also known as:** Physical reasoning, Physics-based dynamics understanding, Intuitive physics, Physical dynamics understanding, Physical awareness, Physical commonsense knowledge, Physical commonsense, Physical commonsense reasoning, Commonsense physical reasoning  

## State of the Field

**Definition agreement:** Consensus. Most papers define physical world understanding as reasoning about physical objects, their properties, interactions, and outcomes under intuitive or common-sense physical laws, often including explaining or predicting future states from scenes or sequences. A few papers emphasize particular settings or applications such as visual cues, agent dynamics, meaningful interaction, or hazard detection, but these are narrower expressions of the same core ability rather than different phenomena.

**Space of definitions.** Across papers, the prevailing usage frames this construct as reasoning or understanding about physical phenomena, object properties, interactions, and likely outcomes, often with reference to commonsense or basic physical laws. Many definitions describe applying physics to explain events, infer properties, and predict what happens next, while closely related labels such as intuitive physics, physical commonsense, and physical commonsense reasoning focus on everyday physical situations and plausible outcomes. A smaller line of work broadens it to perceiving and interpreting scenes from visual cues, anticipating dynamics, or meaningfully interacting with the physical world, so the main disagreement is between a narrower reasoning-centered framing and a broader perception, prediction, and interaction framing.

**Space of facets.** Papers use several nearby names for overlapping facets, including physical reasoning, physical awareness, intuitive physics, physical dynamics understanding, and physical commonsense. One paper treats physical commonsense reasoning as a facet of commonsense reasoning, while another singles out physics-based dynamics, covering events such as collisions, throwing, fluid behavior, and explosions. Physical world understanding is also contrasted with spatial reasoning, which one paper describes as only a subset, and one paper places physical reasoning alongside other reasoning types rather than equating it with them.

**Space of measurement.** Papers link the construct to 3 measurement instruments and 1 behavioral indicator. PIQA is the most recurrent instrument: several papers use it to study physical commonsense, physical commonsense reasoning, or everyday physical interactions. ALFWorld appears in one paper as an environment where results are said to demonstrate the impact of process rewards on physical reasoning, and MuSR appears in one paper through domains involving commonsense reasoning about physical situations; the linked behavioral indicator is robotic manipulation. These operationalizations mostly target commonsense physical reasoning and embodied settings, matching the reasoning-centered definitions more directly than the broader visual-cue framing.

**Links.** Beyond measurement, one paper claims a causal relationship from physical world understanding to robotic manipulation, examining how it helps the deployment of embodied agents. Papers also treat it as related to spatial reasoning and to causal reasoning: one paper says spatial reasoning is only a subset of physical world understanding, and another reports causal reasoning as related to physical world understanding by stating an expectation that improvement in causal reasoning would carry improvement on intuitive physics.

## Sources

**[Compositional 4D Dynamic Scenes Understanding with Physics Priors for Video Question Answering](https://proceedings.iclr.cc/paper_files/paper/2025/file/ea06e6e9e80f1c3d382317fff67041ac-Paper-Conference.pdf) (as "Physical reasoning")**
> The ability to apply principles of physics to explain observed events, infer object properties, and simulate future outcomes in a given scene.

**[PhysBench: Benchmarking and Enhancing Vision-Language Models for Physical World Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/f38cb4cf9a5eaa92b3cfa481832719c6-Paper-Conference.pdf)**
> The ability to perceive, interpret, and predict the properties and dynamics of objects and environments based on visual cues and core physical principles.

**[PhysBench: Benchmarking and Enhancing Vision-Language Models for Physical World Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/f38cb4cf9a5eaa92b3cfa481832719c6-Paper-Conference.pdf) (as "Physics-based dynamics understanding")**
> The latent capacity to anticipate physical events and outcomes governed by dynamics such as collisions, throwing, fluid behavior, and explosions.

**[Core Knowledge Deficits in Multi-Modal Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25p/li25p.pdf) (as "Intuitive physics")**
> Intuitions about how physical objects interact according to basic laws in the physical world.

**[Teaching Physical Awareness to LLMs through Sounds](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ca/wang25ca.pdf) (as "Physical awareness")**
> The latent ability of a model to understand and meaningfully interact with the physical world by interpreting real-world physical phenomena.

**[UP-VLA: A Unified Understanding and Prediction Model for Embodied Agent](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25w/zhang25w.pdf) (as "Physical dynamics understanding")**
> The latent capacity to model and predict how objects and agents move and interact over time in the physical world, inferred from visual and action sequences.

**[IG-Pruning: Input-Guided Block Pruning for Large Language Models](https://aclanthology.org/2025.emnlp-main.537.pdf) (as "Physical commonsense knowledge")**
> The ability to reason about everyday physical situations and object interactions using intuitive world knowledge.

**[Neuron-based Multifractal Analysis of Neuron Interaction Dynamics in Large Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6158e152498f8d8b83d14388a7ec1963-Paper-Conference.pdf) (as "Physical commonsense")**
> The latent ability to reason about everyday physical interactions and plausible physical outcomes.

**[DIDS: Domain Impact-aware Data Sampling for Large Language Model Training](https://aclanthology.org/2025.emnlp-main.215.pdf) (as "Physical commonsense reasoning")**
> The ability to reason about everyday physical situations and the properties of objects based on implicit world knowledge.

**[Subtle Risks, Critical Failures: A Framework for Diagnosing Physical Safety of LLMs for Embodied Decision Making](https://aclanthology.org/2025.emnlp-main.1305.pdf) (as "Commonsense physical reasoning")**
> The ability to understand and reason about the physical properties of objects and the consequences of actions in the real world to detect implicit hazards.

## Relationships

### Physical world understanding →
- **PIQA** (measurements) — *measured_by*
  > We study physical commonsense using the PiQA dataset [Bisk et al., 2020b]. (Section 5.1)
  - [Divergences between Language Models and Human Brains](https://proceedings.neurips.cc/paper_files/paper/2024/file/f96839fc751b67492e17e70f5c9730e4-Paper-Conference.pdf)
- **MuSR** (measurements) — *measured_by*
  > “The domains we address here, murder mysteries, object placement, and team assignment, involve commonsense reasoning about physical (Bisk et al., 2020) and social situations (Sap et al., 2019), theory-of-mind, and more.”
  - [MuSR: Testing the Limits of Chain-of-thought with Multistep Soft Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/3f8c7eb848ffec848f3ed2b7ca44915d-Paper-Conference.pdf)
- **Robotic manipulation** (behaviors tasks) — *causes*
  > Furthermore, we investigate how physical world understanding helps the deployment of embodied agents through extensive robotic manipulation experiments on MOKA (Liu et al., 2024a). (Section 1)
  - [PhysBench: Benchmarking and Enhancing Vision-Language Models for Physical World Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/f38cb4cf9a5eaa92b3cfa481832719c6-Paper-Conference.pdf)
- **ALFWorld** (measurements) — *measured_by*
  > results from the ALFWorld environment demonstrate the impact of process rewards on physical reasoning (Section 4.2).
  - [AgentPro: Enhancing LLM Agents with Automated Process Supervision](https://aclanthology.org/2025.emnlp-main.506.pdf)

### Associated with
- **Spatial reasoning** (constructs)
  > However, since spatial reasoning represents only a subset of physical world understanding, our work aims to provide a more comprehensive evaluation and improvement of VLMs’ physical world understanding abilities. (Section 2)
  - [PhysBench: Benchmarking and Enhancing Vision-Language Models for Physical World Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/f38cb4cf9a5eaa92b3cfa481832719c6-Paper-Conference.pdf)
- **Causal reasoning** (constructs)
  > Therefore, we would expect an improvement in causal reasoning to carry with it improvement on intuitive physics as well. (Section 3.4)
  - [Testing the Limits of Fine-Tuning for Improving Visual Cognition in Vision Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/schulze-buschoff25a/schulze-buschoff25a.pdf)
