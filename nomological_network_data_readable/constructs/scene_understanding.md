# Scene understanding
**Type:** Construct  
**Referenced in:** 7 papers  
**Also known as:** Visual scene comprehension, Scene-level visual perception  

## State of the Field

**Definition agreement:** Consensus. Most papers define scene understanding as the ability to interpret a visual scene or environment by identifying its components, relationships, layout, and overall meaning. A few definitions narrow the setting to navigation or emphasize scene-level description, but these are variations in emphasis or application rather than different phenomena.

**Space of definitions.** Across the papers, the prevailing usage treats scene understanding as an ability to interpret a visual environment or scene. Most definitions emphasize identifying scene elements and making sense of their semantic, spatial, motion, or relational properties so as to form an overall understanding; some frame this as perceiving a visual environment and selectively identifying critical objects, and others as interpreting environmental layout and visual context well enough to support navigation decisions. A smaller line of work uses nearby labels such as visual scene comprehension and scene-level visual perception for understanding a scene's components, relationships, overall meaning, or whole-image content, sometimes explicitly including description of that content.

**Space of facets.** Papers break the construct into several recurring facets: critical objects, environmental layout and visual context, components and relationships within the scene, overall meaning, and semantic, spatial, and motion attributes. The naming is not fully standardized, because closely related uses appear under scene understanding, visual scene comprehension, and scene-level visual perception. In the scene-level framing, the scope is made explicit through whole-image content, and the accompanying description says the model can generate captions based on features of various scopes.

**Space of measurement.** Operationalization is sparse. Papers link scene understanding to 1 measurement instrument and 1 behavioral indicator overall, but the behavioral indicator appears in a causal claim rather than as an operationalization. The only direct measurement instrument is MuirBench, a benchmark that evaluates whether models can understand a scene composed of multiple views from multiple surveillance images; this aligns with the general emphasis on scene interpretation while narrowing it to a multi-image surveillance setting.

**Links.** The recorded links are narrow. Scene understanding is measured by MuirBench, and there is also a reported causal relationship from scene understanding to Action selection: the evidence describes a module designed to selectively identify critical objects, simplifying the description of the surrounding environment and reducing the load on decision-making processes. No correlational or general related links are recorded, and no construct-to-construct links are listed.

## Sources

**[Continuously Learning, Adapting, and Improving: A Dual-Process Approach to Autonomous Driving](https://proceedings.neurips.cc/paper_files/paper/2024/file/df04a35d907e894d59d4eab1f92bc87b-Paper-Conference.pdf)**
> The cognitive ability to perceive a visual environment, selectively identify critical objects, and interpret their semantic, spatial, and motion attributes to form a comprehensive understanding.

**[Dysca: A Dynamic and Scalable Benchmark for Evaluating Perception Ability of LVLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/a2372bb107ef0ba85e47c6a2dc7dafda-Paper-Conference.pdf) (as "Visual scene comprehension")**
> The ability to understand and interpret the components, relationships, and overall meaning of a visual scene.

**[ClawMachine: Learning to Fetch Visual Tokens for Referential Comprehension](https://proceedings.iclr.cc/paper_files/paper/2025/file/b1abd42eb5aace7f0ad9ba9cfb029f54-Paper-Conference.pdf) (as "Scene-level visual perception")**
> The ability to understand and describe whole-image content at the scene level.

## Relationships

### Scene understanding →
- **Action selection** (behaviors tasks) — *causes*
  > the scene understanding module in LeapAD is designed to selectively identify critical objects, simplifying the description of the surrounding environment and reducing the load on decision-making processes. (Section 3.2)
  - [Continuously Learning, Adapting, and Improving: A Dual-Process Approach to Autonomous Driving](https://proceedings.neurips.cc/paper_files/paper/2024/file/df04a35d907e894d59d4eab1f92bc87b-Paper-Conference.pdf)
- **MuirBench** (measurements) — *measured_by*
  > [SCENE UNDERSTANDING] aims to evaluate the ability of models to understand a scene comprised of multiple views from multiple surveillance images. (Section 3.1)
  - [MuirBench: A Comprehensive Benchmark for Robust Multi-image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/9cf6139382f98623d08cc595622f3fb1-Paper-Conference.pdf)

### → Scene understanding
- **Referring expression understanding** (behaviors tasks) — *causes*
  > Object referencing and grounding are essential for advanced scene understanding.
  - [Chat-Scene: Bridging 3D Scene and Large Language Models with Object Identifiers](https://proceedings.neurips.cc/paper_files/paper/2024/file/cebbd24f1e50bcb63d015611fe0fe767-Paper-Conference.pdf)
