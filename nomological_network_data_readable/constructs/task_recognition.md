# Task recognition
**Type:** Construct  
**Referenced in:** 7 papers  
**Also known as:** Task differentiation, Task vector retrieval  

## State of the Field

**Definition agreement:** Consensus. Most papers define task recognition as a model's ability to infer or identify the underlying task from in-context demonstrations or unlabeled input characteristics. A few add what follows from that recognition, such as solving the task or generalizing via a learned task concept vector, but these are still describing the same core phenomenon rather than different constructs.

**Space of definitions.** Most commonly, papers describe task recognition as identifying the target or underlying task from in-context demonstrations, sometimes adding that the model then solves the task by using knowledge obtained from pre-training. One formulation says the model 'recognizes the target task from demonstrations' and uses prior knowledge from pre-training to solve it. Some authors instead define the construct as differentiating among tasks from input characteristics without explicit task labels, while another frames it as a transformer's latent ability to retrieve a high-level task concept vector from demonstration pairs. Across definitions, the shared theme is recovering task information from examples, but the emphasis varies between observable task identification and solving, unsupervised task differentiation, and latent task-vector retrieval.

**Space of facets.** Papers most often place it alongside task learning as a separate part of in-context learning, rather than giving a finer subtype taxonomy. One paper explicitly describes in-context learning as disentangled into task recognition and task learning. The naming is not fully uniform: papers attached to this construct also use the labels task differentiation and task vector retrieval, shifting the focus from distinguishing tasks in an unsupervised manner to retrieving a task concept vector.

**Space of measurement.** No measurement instrument is linked to it, and no behavioral indicator is linked to it. The papers do not name a benchmark, human evaluation, LLM-as-a-judge setup, probe, or analysis that measures it; instead, they specify the target behavior in definitional terms, such as recognizing the task from demonstrations, differentiating tasks without explicit labels, or retrieving a task concept vector from demonstration pairs.

**Links.** The only linked construct is Task learning. One paper reports a correlation from Task learning to Task recognition, stating that 'the performance of task recognition and task learning changes in the opposite direction.'

## Sources

**[Investigating the Pre-Training Dynamics of In-Context Learning: Task Recognition vs. Task Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/83d349b6eb8125588b5f091e2d47525c-Paper-Conference.pdf)**
> The ability of a language model to identify the target task from in-context demonstrations and then solve it by utilizing its pre-existing knowledge.

**[HMoRA: Making LLMs More Effective with Hierarchical Mixture of LoRA Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/e43a33994a28f746dcfd53eb51ed3c2d-Paper-Conference.pdf) (as "Task differentiation")**
> The model's ability to distinguish between different tasks based on their input characteristics, without relying on explicit task labels.

**[Provable In-Context Vector Arithmetic via Retrieving Task Concepts](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bu25a/bu25a.pdf) (as "Task vector retrieval")**
> The latent ability of a transformer to extract a high-level task concept vector from demonstration pairs during in-context learning, enabling generalization across queries within the same task.

## Relationships

### Task recognition →
- **t-SNE visualization** (measurements) — *measured_by*
  > "we routed the questions of these tasks and visualized the routing results from the task router in the last laye of LLM with t-SNE"
  - [HMoRA: Making LLMs More Effective with Hierarchical Mixture of LoRA Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/e43a33994a28f746dcfd53eb51ed3c2d-Paper-Conference.pdf)

### → Task recognition
- **Task learning** (constructs) — *correlates*
  > “the performance of task recognition and task learning changes in the opposite direction”
  - [Investigating the Pre-Training Dynamics of In-Context Learning: Task Recognition vs. Task Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/83d349b6eb8125588b5f091e2d47525c-Paper-Conference.pdf)

### Associated with
- **Catastrophic forgetting** (behaviors tasks)
  > We find that the catastrophic effects of fine-tuning may be explained as shifting task inference and that transforming prompts further from the fine-tuning data can recover pretrained capabilities. (Section 6)
  - [Understanding Catastrophic Forgetting in Language Models via Implicit Inference](https://proceedings.iclr.cc/paper_files/paper/2024/file/692ae28fda9bfbde7c01b13bf5a03395-Paper-Conference.pdf)
