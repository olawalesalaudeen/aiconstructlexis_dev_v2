# Natural language planning
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Script generation, Activity generation, Goal-based planning  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats this behavior as producing a sequence of actionable or temporally ordered steps in natural language for a goal or process. Definitions consistently focus on multi-step decomposition, either to achieve a given goal or to complete a process, and one paper explicitly frames it as "decomposing a high-level goal g into a sequence of temporally extended steps" (PlaSma: Procedural Knowledge Models for Language-based Planning and Re-Planning). Some authors broaden the output to a set of instructions, and some include images alongside the steps.

**Variants.** Papers use nearby names including goal-based planning, script generation, and activity generation. The differences are mainly in setting: goal-based planning is described as generating steps from scratch for high-level goals such as "see a movie" or "empty lint filter," while script generation and activity generation ask for step sequences with images that describe completing a process or activity. One source snippet also places it in daily-life natural language planning.

**Space of elicitation and scores.** Papers link it to 1 measurement instrument, ActivityNet. The recorded use treats the behavior as activity generation, described as "activity generation from ActivityNet," and no other instrument is linked.

**What it is taken as evidence of.** No construct is linked to it, so the available relationships do not specify what construct papers take this behavior to indicate.

## Sources

**[Geometric-Averaged Preference Optimization for Soft Preference Labels](https://proceedings.neurips.cc/paper_files/paper/2024/file/688c7a82e31653e7c256c6c29fd3b438-Paper-Conference.pdf)**
> The task of generating a sequence of actionable steps in natural language to achieve a given goal.

**[Modality-Specialized Synergizers for Interleaved Vision-Language Generalists](https://proceedings.iclr.cc/paper_files/paper/2025/file/22bf0634985f4e6dbb1fb40e247d1478-Paper-Conference.pdf) (as "Script generation")**
> The task of generating a set of instructions or steps, often including images, to complete a process.

**[Modality-Specialized Synergizers for Interleaved Vision-Language Generalists](https://proceedings.iclr.cc/paper_files/paper/2025/file/22bf0634985f4e6dbb1fb40e247d1478-Paper-Conference.pdf) (as "Activity generation")**
> The task of generating a sequence of steps with images describing an activity.

**[PlaSma: Procedural Knowledge Models for Language-based Planning and Re-Planning](https://proceedings.iclr.cc/paper_files/paper/2024/file/16bce4070c4e23434451b180348e3814-Paper-Conference.pdf) (as "Goal-based planning")**
> Generating a sequence of temporally ordered steps to achieve a high-level goal from scratch, such as 'see a movie' or 'empty lint filter'.

## Relationships

### Natural language planning →
- **ActivityNet** (measurements) — *measured_by*
  > activity generation from ActivityNet (Krishna et al., 2017) (Section 6.1).
  - [Modality-Specialized Synergizers for Interleaved Vision-Language Generalists](https://proceedings.iclr.cc/paper_files/paper/2025/file/22bf0634985f4e6dbb1fb40e247d1478-Paper-Conference.pdf)
