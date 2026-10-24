# Modularity
**Type:** Construct  
**Referenced in:** 7 papers  
**Also known as:** Module reuse, Module transfer  

## State of the Field

**Definition agreement:** Conflicting. The papers do not share one core definition: a few define modularity as reusing learned modules or skills across tasks, a few define it as generated outputs or programs being organized into independent components, and one defines it as the decomposability of the model's own internal computation into sub-networks. These are different phenomena applied to different kinds of things, so papers using these definitions would not be studying the same thing.

**Space of definitions.** Across the papers, the prevailing usage treats modularity as decomposition into distinct, logical, self-contained, and often reusable components, whether the object is generated code, theorem-proving skills, structured outputs, or internal LM sub-networks. A smaller line of work uses nearby labels such as module reuse, module transfer, and reusability for the tendency to reuse previously learned modules, adapt generic implementations, or transfer modules to new tasks and domains rather than regenerating task-specific solutions from scratch. The main difference is therefore between modularity as a structural property of outputs or computations and modularity as the cross-task usefulness of learned modules.

**Space of facets.** Papers most often organize the idea around independence, reusability, and composition: modules are described as minimally coupled, independently functional or verifiable, interchangeable, and composable into larger solutions. Several papers also blur modularity and reusability into a joint notion, for example by rating "optimally modular/ reusable programs" or by describing modular skills and lemmas that are added to a library and later retrieved or recomposed. A narrower strand makes transfer-oriented facets explicit as module reuse and module transfer, while another names internal modular units "sheaves."

**Space of measurement.** No measurement instrument or behavioral indicator is linked to it. Even so, papers operationalize it directly in their methods and analyses: one prompts GPT-4 to rate outputs on a 0 to 5 Likert scale for "optimally modular/ reusable programs," another defines a modularity dimension around extracting and organizing implicit structured knowledge into independent modules with minimal coupling, and another evaluates whether extracted self-contained units, called sheaves, show superior modularity and functional fidelity relative to earlier LM circuits. These operationalizations stay close to the paper-specific definitions, alternating between program structure, reusable components, and decomposable internal computation.

## Sources

**[GENOME: Generative Neuro-Symbolic Visual Reasoning by Growing and Reusing Modules](https://proceedings.iclr.cc/paper_files/paper/2024/file/088d99765bc121c6df215da7d45bc4e9-Paper-Conference.pdf) (as "Module reuse")**
> The tendency to apply previously learned modules to new instances or tasks rather than regenerating task-specific solutions from scratch.

**[GENOME: Generative Neuro-Symbolic Visual Reasoning by Growing and Reusing Modules](https://proceedings.iclr.cc/paper_files/paper/2024/file/088d99765bc121c6df215da7d45bc4e9-Paper-Conference.pdf) (as "Module transfer")**
> The ability of learned modules to remain useful when applied in a different task domain or evaluation setting.

**[CodeChain: Towards Modular Code Generation Through Chain of Self-revisions with Representative Sub-modules](https://proceedings.iclr.cc/paper_files/paper/2024/file/6111371a868af8dcfba0f96ad9e25ae3-Paper-Conference.pdf)**
> The latent quality of a generated program being structured into distinct, logical, and often reusable sub-components or modules, which is a hallmark of experienced programming.

**[CodeChain: Towards Modular Code Generation Through Chain of Self-revisions with Representative Sub-modules](https://proceedings.iclr.cc/paper_files/paper/2024/file/6111371a868af8dcfba0f96ad9e25ae3-Paper-Conference.pdf) (as "Reusability")**
> The latent capacity of a model to generate code components that can be adapted or reused across different solution attempts or problems, reflecting generalization at the sub-task level.
