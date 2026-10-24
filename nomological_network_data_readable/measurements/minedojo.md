# MineDojo
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Across the surveyed work, the prevailing description is a Minecraft-based simulation suite and benchmark for open-ended embodied agents, with thousands of natural language-specified or language-prompted tasks. Definitions consistently place those tasks in navigation, harvesting, combat, and crafting, and a smaller framing also describes MineDojo as a research framework for embodied-agent research.

**What it is claimed to measure.** Papers use MineDojo to measure two constructs, Generalization and Long-horizon planning, and one behavioral indicator, Navigation. These measurement claims are spread across both constructs rather than centered on one: MineDojo is reported as measuring Generalization and Long-horizon planning, while its task set is also used to measure Navigation.

**Space of uses.** Papers mainly position MineDojo as a validation environment for embodied-agent methods. One study validates in both MineDojo and Mineflayer environments, while another selects certain long-horizon tasks from MineDojo to test its approach; papers do not otherwise link it to another measurement instrument.

## Sources

**[LARM: Large Auto-Regressive Model for Long-Horizon Embodied Intelligence](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25dj/li25dj.pdf)**
> Simulation suite and benchmark for open-ended embodied agents in Minecraft, featuring thousands of natural language-specified tasks across navigation, harvesting, combat, and crafting.

## Relationships

### → MineDojo
- **Navigation** (behaviors tasks) — *measured_by*
  > The behaviors that can be conducted in MineDojo primarily include navigation, harvest, combat, and craft.
  - [LARM: Large Auto-Regressive Model for Long-Horizon Embodied Intelligence](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25dj/li25dj.pdf)
- **Generalization** (constructs) — *measured_by*
  > We validate our method in both MineDojo (Fan et al., 2022) and Mineflayer (PrismarineJS., 2013) environments. The experimental results suggest that our method completes diverse challenging tasks with a single model, indicating its promising generalization. (Section 1)
  - [LARM: Large Auto-Regressive Model for Long-Horizon Embodied Intelligence](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25dj/li25dj.pdf)
