# Model selection ability
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Algorithm selection, Model selection  

## State of the Field

**Definition agreement:** Conflicting. The papers use "model selection ability" for different phenomena. One paper defines an internal mechanism by which a single model selects a function from its own pre-trained capabilities, while the others define choosing among candidate models or function classes, and one of those specifically means selecting an optimal LLM under performance and resource constraints, so they would not all be studying the same thing.

**Space of definitions.** Across the definitions, the prevailing usage treats this concept as a model's latent ability to select among candidate functions, algorithms, or function classes on the basis of the task, data, or context, sometimes with implementation of the selected function folded in. One paper describes in-context learning as automatically selecting the best pretraining functions according to downstream context, and another frames transformers as performing model selection between function class families. A smaller usage applies the same label to choosing the optimal LLM from a set of candidate models for a downstream task under resource constraints. The main disagreement is therefore whether the term refers to selection among pre-trained functions or function classes, or to selection among whole LLMs.

**Space of facets.** Papers systematize the construct mainly through naming and mechanisms. Algorithm selection and model selection are used for closely similar ideas when the focus is choosing among functions or function classes from context, while model selection is also used for choosing among candidate LLMs. One paper further states that the algorithm selection mechanism involves two parallel mechanisms, a low-test-error preference and a similar-input-distribution preference. In the recorded relationships, it is also linked to Planning and Action selection.

**Space of measurement.** No measurement instrument is linked to this construct. Papers link it to three behavioral indicators, Action selection, Constraint adherence, and Plan execution, and to two constructs, Low-test-error preference and Planning, but these links are recorded as related or causal rather than as measured_by operationalizations. As a result, the available papers do not specify a direct instrument-based operationalization that can be compared with the definitions.

**Links.** The recorded links are partly directional. One paper claims a causal relationship from Planning to model selection ability, stating that model selection follows task planning; the same paper claims causal relationships from model selection ability to Plan execution and to Constraint adherence, describing selection as balancing model capabilities, licensing requirements, resource constraints, and performance metrics. Separate papers report that Action selection is related to model selection ability and that Low-test-error preference is related to it.

## Sources

**[Can In-context Learning Really Generalize to Out-of-distribution Tasks?](https://proceedings.iclr.cc/paper_files/paper/2025/file/cf7a83a5342befd11d3d65beba1be5b0-Paper-Conference.pdf) (as "Algorithm selection")**
> The latent mechanism by which a model, when faced with a new task, selects and implements the most suitable function or algorithm from its repertoire of pre-trained capabilities.

**[Selective induction Heads: How Transformers Select Causal Structures in Context](https://proceedings.iclr.cc/paper_files/paper/2025/file/d7ed243b13831bdd468f35039936bcef-Paper-Conference.pdf) (as "Model selection")**
> The ability of a model to choose the best-fitting model or function class from a set of candidates based on the provided data or context.

## Relationships

### Model selection ability →
- **Constraint adherence** (behaviors tasks) — *causes*
  > "By balancing these factors: model capabilities, licensing requirements, resource constraints, and performance metrics, we systematically select the most suitable model for each action. This ensures that the execution of the plan is aligned with both the technical requirements of the tasks and the practical considerations of the user."
  - [From an LLM Swarm to a PDDL-empowered Hive: Planning Self-executed Instructions in a Multi-modal Jungle](https://proceedings.iclr.cc/paper_files/paper/2025/file/b9a4215e2b23261056aeeba0f6f05371-Paper-Conference.pdf)

### Associated with
- **Action selection** (behaviors tasks)
  > RestoreAgent can provide the best decisions, including which image restoration tasks need to be performed, the order of their execution, and which model is most suitable for each task. (Section 3.2.1)
  - [RestoreAgent: Autonomous Image Restoration Agent via Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/c78f639424b8d89ceb4f2efbb4dfe4f4-Paper-Conference.pdf)
- **Low-test-error preference** (constructs)
  > “we theoretically reveal the algorithm-selection mechanism for ICL. We find there simultaneously exist two parallel mechanisms: the Low-test-error preference and the Similar-input-distribution preference.”
  - [Can In-context Learning Really Generalize to Out-of-distribution Tasks?](https://proceedings.iclr.cc/paper_files/paper/2025/file/cf7a83a5342befd11d3d65beba1be5b0-Paper-Conference.pdf)
