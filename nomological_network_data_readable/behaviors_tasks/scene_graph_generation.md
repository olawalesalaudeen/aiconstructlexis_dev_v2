# Scene graph generation
**Type:** Behavior  
**Referenced in:** 5 papers  

## State of the Field

**Space of definitions.** Across the available definitions, the shared framing treats scene graph generation as producing a structured representation built from entities or objects and their relations. One formulation defines it as converting a natural language caption into objects, attributes, and relationships, even writing the graph as {O, R, A}, while another describes constructing a scene graph for an image as triples of entities and their spatial relations, with the graph said to capture "the essential spatial relation between visual concepts."

**Variants.** The available usages span caption-to-graph conversion and image-based graph construction, with the latter emphasizing spatial triples rather than objects, attributes, and relationships. Beyond these settings, one paper claims a causal relationship from task decomposition to scene graph generation, stating that failure to "decompose discrete scenes from a complex narrative" leads to a bottleneck when generating scene graphs.

**Space of elicitation and scores.** No measurement instrument is linked to it. The operational details that do appear describe converting captions to scene graphs and measuring "the consistency over graphs," inspired by SPICE, and, in another paper, first constructing a scene graph with a "robust SGG engine, HiKER-SGG."

**What it is taken as evidence of.** Papers do not link it to any construct as evidence of.

## Sources

**[Learnability Matters: Active Learning for Video Captioning](https://proceedings.neurips.cc/paper_files/paper/2024/file/43069caa6776eac8bca4bfd74d4a476d-Paper-Conference.pdf)**
> The task of converting a natural language caption into a structured representation of objects, their attributes, and their relationships.

## Relationships

### → Scene graph generation
- **Task decomposition** (behaviors tasks) — *causes*
  > Our analysis indicates that these models fail to effectively decompose discrete scenes from a complex narrative, leading to a bottleneck when generating scene graphs.
  - [LLM Meets Scene Graph: Can Large Language Models Understand and Generate Scene Graphs? A Benchmark and Empirical Study](https://aclanthology.org/2025.acl-long.1036.pdf)
