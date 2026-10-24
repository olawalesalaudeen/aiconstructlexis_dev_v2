# Situated question answering
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

**Space of definitions.** Across the papers, the dominant framing treats it as question answering grounded in a provided 3D situation. Definitions align on answering questions about objects, attributes, counts, spatial relations, affordances, room type, or scene descriptions from the agent's current situation and spatial context, and one example asks, "What is the object closest to my left?" with the answer "A lamp" (SPARTUN3D: Situated Spatial Understanding of 3D World in Large Language Model).

**Variants.** Papers vary mainly in the kinds of scene-grounded questions they emphasize. One line expands the task to object existence, counting, attributes, and spatial relationships, while another highlights question types that target different levels of spatial reasoning ability for embodied agents; some formulations also use a multi-modal situation description and a text-image interleaved question grounded in the 3D scene (Multi-modal Situated Reasoning in 3D Scenes).

**Space of elicitation and scores.** Papers link this behavior to one measurement instrument, SQA3D. In that instrument, the prompt is formatted as "<Situation> <Question>" and the answer "should be a phrase or a single word," so the behavior is elicited through a situation prompt paired with a short answer format.

**What it is taken as evidence of.** Across the papers, the only construct link is to Spatial reasoning. That connection is described as related rather than as a direct measurement claim: one paper says situated QA uses different question types that target various levels of spatial reasoning ability for embodied agents, and papers do not present another construct link.

## Sources

**[Multi-modal Situated Reasoning in 3D Scenes](https://proceedings.neurips.cc/paper_files/paper/2024/file/feaeec8ec2d3cb131fe18517ff14ec1f-Paper-Datasets_and_Benchmarks_Track.pdf)**
> Answering questions about objects, attributes, counts, spatial relations, affordances, room type, or descriptions using the provided 3D situation context.

## Relationships

### Situated question answering →
- **SQA3D** (measurements) — *measured_by*
  > Situated Question Answering (SQA3D): User: <Situation> <Question> The answer should be a phrase or a single word. (Table 12)
  - [Chat-Scene: Bridging 3D Scene and Large Language Models with Object Identifiers](https://proceedings.neurips.cc/paper_files/paper/2024/file/cebbd24f1e50bcb63d015611fe0fe767-Paper-Conference.pdf)

### Associated with
- **Spatial reasoning** (constructs)
  > Situated QA is designed with different types of questions targeting various levels of spatial reasoning ability for embodied agents.
  - [SPARTUN3D: Situated Spatial Understanding of 3D World in Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/b633e7052970b8f5aa1a69164d99e9e8-Paper-Conference.pdf)
