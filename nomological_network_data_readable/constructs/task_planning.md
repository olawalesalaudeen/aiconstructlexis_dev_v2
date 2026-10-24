# Task planning
**Type:** Construct  
**Referenced in:** 11 papers  
**Also known as:** Problem decomposition  

## State of the Field

**Definition agreement:** Consensus. Most papers define task planning as turning a high-level goal or instruction into an executable sequence of lower-level actions or steps, sometimes emphasizing interactive refinement or a specific setting such as a GUI. One paper instead describes a system design's ability to decompose tasks into independently solvable subproblems for computational efficiency, but that looks like an outlier rather than a substantial competing usage.

**Space of definitions.** Across the surveyed papers, the prevailing usage treats task planning as decomposing a high-level goal or instruction into a sequence of executable actions or skills. The wording varies between mid-level actions, low-level skills or steps, and action sequences in interactive environments, but the common focus is on producing a plan that accomplishes the goal; one paper also describes a close-loop version that adapts the plan based on real-time observations. A smaller line of work uses the related label problem decomposition for a latent system-design ability to break complex tasks into smaller, independently solvable subproblems for asymptotic computational gains.

**Space of facets.** The main axis of variation is what is being decomposed and at what level: papers alternately describe high-level goals, natural language instructions, and GUI objectives, with outputs framed as mid-level skills, low-level skills, or coherent low-level steps. Most papers keep the construct tied to the generated action sequence itself, whereas the problem decomposition usage shifts it toward a latent property of the system design and adds independent solvability and computational-cost improvement. One paper further marks off close-loop task planning as plan generation that is revised using real-time observations.

**Space of measurement.** No measurement instrument is linked to task planning, and no behavioral indicator is linked to it. The papers represented here therefore define the construct verbally rather than connecting it to an explicit benchmark or other recorded measurement instrument.

**Links.** No papers report causal, correlational, or other related links involving task planning.

## Sources

**[LoTa-Bench: Benchmarking Language-oriented Task Planners for Embodied Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e91fb65c6324a984ea9ef39a5b84af04-Paper-Conference.pdf)**
> The ability to decompose a high-level goal into a sequence of executable mid-level actions or skills.

**[Position: Scaling LLM Agents Requires Asymptotic Analysis with LLM Primitives](https://raw.githubusercontent.com/mlresearch/v267/main/assets/meyerson25a/meyerson25a.pdf) (as "Problem decomposition")**
> The latent ability of a system design to break down complex tasks into smaller, independently solvable subproblems, enabling asymptotic improvements in computational cost.

## Relationships

### Task planning →
- **TaskBench** (measurements) — *measured_by*
  > We utilize four datasets across two task planning benchmarks: HuggingFace tasks, Multimedia tasks, and Daily Life API tasks from TaskBench [45], as well as TMDB API tasks from RestBench [50]. (Section 5.1)
  - [Can Graph Learning Improve Planning in LLM-based Agents?](https://proceedings.neurips.cc/paper_files/paper/2024/file/098d1bd3eb6156a4c2f834563cdcf617-Paper-Conference.pdf)
- **RestBench** (measurements) — *measured_by*
  > We utilize four datasets across two task planning benchmarks: HuggingFace tasks, Multimedia tasks, and Daily Life API tasks from TaskBench [45], as well as TMDB API tasks from RestBench [50]. (Section 5.1)
  - [Can Graph Learning Improve Planning in LLM-based Agents?](https://proceedings.neurips.cc/paper_files/paper/2024/file/098d1bd3eb6156a4c2f834563cdcf617-Paper-Conference.pdf)

### Associated with
- **Task decomposition** (behaviors tasks)
  > The current solution of task planning is purely based on LLMs and involves two stages [45, 46]. The first stage involves request decomposition, where a user’s ambiguous request is broken down into concrete steps via LLMs. (Section 2.2)
  - [Can Graph Learning Improve Planning in LLM-based Agents?](https://proceedings.neurips.cc/paper_files/paper/2024/file/098d1bd3eb6156a4c2f834563cdcf617-Paper-Conference.pdf)
