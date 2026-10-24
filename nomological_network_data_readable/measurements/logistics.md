# Logistics
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Across papers, Logistics is consistently treated as a PDDL planning benchmark or domain centered on transporting packages between locations with trucks and airplanes. Definitions do not diverge on this core description. One paper also places it among four PDDL tasks used in experiments, alongside BlocksWorld, Minigrid, and Tetris, and another describes it as a widely used benchmark.

**What it is claimed to measure.** Its use as a measurement instrument converges on a single construct: papers use Logistics to measure Planning. Papers link it to one construct, Planning, and to no behavioral indicators. The accompanying descriptions frame this as evaluating plan generation in the domain, including references to generating simple plans or valid plans.

**Space of uses.** Papers position Logistics as a planning evaluation benchmark. One paper uses it alongside BlocksWorld, Minigrid, and Tetris as part of a set of PDDL tasks, while another uses it to test whether many-shot in-context learning can improve the ability to generate simple plans on the domain. Papers do not link it to other measurement instruments.

## Sources

**[Improving Large Language Model Planning with Action Sequence Similarity](https://proceedings.iclr.cc/paper_files/paper/2025/file/b18c6549c77411d92e645027a25838a8-Paper-Conference.pdf)**
> A classical PDDL planning benchmark focused on transporting packages between different locations using vehicles like trucks and airplanes.

## Relationships

### → Logistics
- **Planning** (constructs) — *measured_by*
  > planning [Logistics, 53] (Introduction).
  - [Many-Shot In-Context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/8cb564df771e9eacbfe9d72bd46a24a9-Paper-Conference.pdf)
