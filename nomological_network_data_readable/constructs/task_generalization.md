# Task generalization
**Type:** Construct  
**Referenced in:** 32 papers  
**Also known as:** Cross-task generalization, Multi-task generalization, Generalization to new tasks, Generalization to unseen tasks, Task-level generalization, Unseen task generalization, Cross-task knowledge transfer  

## State of the Field

**Definition agreement:** Consensus. Most papers define task generalization as a model or agent's ability to transfer learned knowledge and perform well on different or previously unseen tasks, usually without task-specific fine-tuning or retraining. A few papers apply the term to related methods or tools such as demonstration selection, evaluation, initialization, or data synthesis, but these are outliers rather than a substantial competing definition.

**Space of definitions.** Across the surveyed work, the prevailing usage treats task generalization as transfer beyond seen tasks: a model, agent, policy, or method performs on unseen, new, or different tasks, often without task-specific fine-tuning or retraining and sometimes in zero-shot or few-shot settings. Many definitions make this cross-task transfer explicit, for example by asking whether training on one task can support another unseen task, or whether a system can handle tasks and prompts beyond the training distribution; some papers describe generalizing to all tasks, including unseen tasks, or to tasks not included in the fine-tuning process. Several authors state it as a latent ability, while others define it more directly through observed performance. A smaller line of work uses broader notions of generality, meaning effectiveness across varied datasets or real-world scenarios, and in that usage the property can belong to an evaluation method rather than to the model being evaluated.

**Space of facets.** Papers use several overlapping names, especially cross-task generalization, multi-task generalization, generalization to unseen tasks, and generality, along with several nearby labels. Most of these labels point to the same family of ideas, but they differ in scope: cross-task generalization usually centers on transferring from a source task to an unseen target task, multi-task generalization centers on maintaining or adapting performance across diverse tasks within one architecture, and generality can mean either broad dataset and task coverage or coverage of diverse evaluation scenarios without gold references. One paper also examines task generalization alongside several judging and problem-solving activities, and another relates it to compositional generalization.

**Space of measurement.** Operationally, papers connect task generalization to 10 measurement instruments and 8 behavioral indicators. Most measurements use benchmark datasets, especially MMLU, Super-NaturalInstructions, ARC-Challenge, and ARC-Easy, and they usually test previously unseen tasks or out-of-domain datasets, including five-shot in-context evaluation on MMLU and validation on unseen tasks after training elsewhere. A more explicit transfer test uses link prediction as a behavioral indicator by applying models trained on node classification directly to link prediction without fine-tuning. Overall, the operationalizations mostly match the unseen-task transfer definitions, though some papers operationalize the construct as broad multi-task benchmark performance rather than transfer between a specific source and target task.

**Links.** In linked claims, several papers report causal relationships from zero-shot generalization, multi-task ability, and chain of thought to task generalization, with other constructs and abilities also linked causally in the same direction. One paper additionally records a causal relationship from task generalization to multi-task ability. As non-causal associations, papers also relate it to zero-shot generalization, compositional generalization, and instruction following, alongside several other task formats or abilities. No correlational link is reported.

## Sources

**[PromptFix: You Prompt and We Fix the Photo](https://proceedings.neurips.cc/paper_files/paper/2024/file/468c9ec4215e05b6488ac307d377662e-Paper-Conference.pdf)**
> The capacity of the model to transfer learned capabilities across a wide variety of distinct image-processing tasks without task-specific fine-tuning.

**[LLMs as Zero-shot Graph Learners: Alignment of GNN Representations with LLM Token Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/0b77d3a82b59e9d9899370b378087faf-Paper-Conference.pdf) (as "Cross-task generalization")**
> The ability of a model trained on a specific source task, such as node classification, to perform well on a different, unseen target task, such as link prediction, without additional fine-tuning.

**[GenRL: Multimodal-foundation world models for generalization in embodied agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/3076133f08b40607d00a8f48f6acd71c-Paper-Conference.pdf) (as "Multi-task generalization")**
> The ability of an embodied agent to adapt learned behavior to new tasks across domains and prompts beyond the training distribution.

**[Generative Judge for Evaluating Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/747dc7c6566c74eb9a663bcd8d057c78-Paper-Conference.pdf) (as "Generality")**
> The ability of a method or model to perform effectively across a variety of different datasets and task types without task-specific training.

**[GenSim: Generating Robotic Simulation Tasks via Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/143ea4a156ef64f32d4d905206cf32e1-Paper-Conference.pdf) (as "Task-level generalization")**
> The latent ability of a robotic policy to perform well on unseen tasks after training on a diverse set of simulation tasks, reflecting broad conceptual understanding rather than overfitting to specific instances.

**[Instructive Decoding: Instruction-Tuned Large Language Models are Self-Refiner from Noisy Instructions](https://proceedings.iclr.cc/paper_files/paper/2024/file/1f5c76187c28e8d9d3b938d0c504436c-Paper-Conference.pdf) (as "Unseen task generalization")**
> The model's ability to perform effectively on tasks that were not part of its training set, based only on provided instructions.

**[Pushing Mixture of Experts to the Limit: Extremely Parameter Efficient MoE for Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/6d00071564ec447466fc4577743cf1b3-Paper-Conference.pdf) (as "Generalization to unseen tasks")**
> The model's ability to perform well on tasks and task categories that were not included in its fine-tuning data.

**[In-Context Learning through the Bayesian Prism](https://proceedings.iclr.cc/paper_files/paper/2024/file/d81cd83e7f6748af351485d73f305483-Paper-Conference.pdf) (as "Generalization to new tasks")**
> The ability to perform well on function classes not seen during pretraining, which arises when the pretraining task distribution is sufficiently diverse and represents a deviation from strict Bayesian prediction.

**[LiFT: Learning to Fine-Tune via Bayesian Parameter Efficient Meta Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/27e5626cabdbb6cd5c56ce4114ff93e4-Paper-Conference.pdf) (as "Cross-task knowledge transfer")**
> The ability of a model to leverage information learned from a set of source tasks to improve learning and performance on new, unseen target tasks.

## Relationships

### Task generalization →
- **MMLU** (measurements) — *measured_by*
  > we also evaluate multi-task generalization ability with five-shot setting (in-context learning) on MMLU (Hendrycks et al., 2020) (Section 4.1)
  - [Rethinking Channel Dimensions to Isolate Outliers for Low-bit Weight Quantization of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/374050dc3f211267bd6bf0ea24eae184-Paper-Conference.pdf)
- **Super-NaturalInstructions** (measurements) — *measured_by*
  > We evaluate TAGI on the Super-Natural Instructions (SNI) [37] and P3 [30] datasets. Experimental results demonstrate its ability to effectively generate adapters for unseen tasks, surpassing meta-trained models... (Section 1 Introduction).
  - [From Instance Training to Instruction Learning: Task Adapters Generation from Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/50ea4dbd1cff6bd3daef939eff10c092-Paper-Conference.pdf)
- **GPQA** (measurements) — *measured_by*
  > "To explore the efficacy of our general purpose ARCHON architectures, we evaluate them on three previously unseen tasks: GPQA (Rein et al., 2024), MMLU (Hendrycks et al., 2021), and MMLU Pro (Wang et al., 2024b)."
  - [An Architecture Search Framework for Inference-Time Techniques](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saad-falcon25a/saad-falcon25a.pdf)
- **MMLU-Pro** (measurements) — *measured_by*
  > "To explore the efficacy of our general purpose ARCHON architectures, we evaluate them on three previously unseen tasks: GPQA (Rein et al., 2024), MMLU (Hendrycks et al., 2021), and MMLU Pro (Wang et al., 2024b)."
  - [An Architecture Search Framework for Inference-Time Techniques](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saad-falcon25a/saad-falcon25a.pdf)

### → Task generalization
- **Trajectory retrieval** (behaviors tasks) — *causes*
  > “As more tasks are solved, MB grows, facilitating knowledge transfer between tasks”
  - [Enhancing Language Model Agents using Diversity of Thoughts](https://proceedings.iclr.cc/paper_files/paper/2025/file/737ab809016b2c79086374f9c8a11831-Paper-Conference.pdf)
- **Chain of thought** (behaviors tasks) — *causes*
  > In contrast, we found that incorporating Chain-of-Thought (CoT) reasoning — adding intermediate reasoning steps to the prompt — allows Transformers to easily generalize to unseen tasks. (Section 1)
  - [Task Generalization with Autoregressive Compositional Structure: Can Learning from $D$ Tasks Generalize to $D^T$ Tasks?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/abedsoltan25a/abedsoltan25a.pdf)
- **Metacognition** (constructs) — *causes*
  > Our approach integrates self-awareness, monitoring, evaluation, regulation, and meta-reflection, to enhance LLMs’ ability to refine reasoning strategies and generalize across tasks.
  - [Position: LLMs Need a Bayesian Meta-Reasoning Framework for More Robust and Generalizable Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yan25g/yan25g.pdf)

### Associated with
- **Zero-shot generalization** (constructs)
  > for better cross-task generalization, the "zero-shot" learning ability of LLMs is crucial for real-world applications (Section 1 Introduction).
  - [From Instance Training to Instruction Learning: Task Adapters Generation from Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/50ea4dbd1cff6bd3daef939eff10c092-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks)
  > Instruction Following is often used to evaluate the cross-task generalization of LLMs, and it is dedicated to handling any task described in natural language (Section 2 Related Work).
  - [From Instance Training to Instruction Learning: Task Adapters Generation from Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/50ea4dbd1cff6bd3daef939eff10c092-Paper-Conference.pdf)
- **Problem solving** (behaviors tasks)
  > horizontally, we examine the task generalization including problem solving, answerable judging, outcome judging, and process judging. (Section 1)
  - [Is Your Model Really A Good Math Reasoner? Evaluating Mathematical Reasoning with Checklist](https://proceedings.iclr.cc/paper_files/paper/2025/file/54d2d38a56a74387d5916ee40e462295-Paper-Conference.pdf)
- **Unanswerability detection** (behaviors tasks)
  > horizontally, we examine the task generalization including problem solving, answerable judging, outcome judging, and process judging. (Section 1)
  - [Is Your Model Really A Good Math Reasoner? Evaluating Mathematical Reasoning with Checklist](https://proceedings.iclr.cc/paper_files/paper/2025/file/54d2d38a56a74387d5916ee40e462295-Paper-Conference.pdf)
- **Evaluation** (behaviors tasks)
  > horizontally, we examine the task generalization including problem solving, answerable judging, outcome judging, and process judging. (Section 1)
  - [Is Your Model Really A Good Math Reasoner? Evaluating Mathematical Reasoning with Checklist](https://proceedings.iclr.cc/paper_files/paper/2025/file/54d2d38a56a74387d5916ee40e462295-Paper-Conference.pdf)
- **Compositional generalization** (constructs)
  > While prior work has largely focused on qualitative insights into compositional generalization, our work takes a quantitative approach: studying how many training tasks are needed to achieve task generalization over an entire function class. (Section 2.1)
  - [Task Generalization with Autoregressive Compositional Structure: Can Learning from $D$ Tasks Generalize to $D^T$ Tasks?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/abedsoltan25a/abedsoltan25a.pdf)
- **Link prediction** (behaviors tasks)
  > We employ models trained on node classification tasks directly for link prediction tasks without any fine-tuning. (Section 3.3)
  - [LLMs as Zero-shot Graph Learners: Alignment of GNN Representations with LLM Token Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/0b77d3a82b59e9d9899370b378087faf-Paper-Conference.pdf)
- **Question answering** (behaviors tasks)
  > AQuilt achieves better task generalization by incorporating Chinese data and defining more flexible task types. Specifically, AQuilt assigns the task type as closed/open-book QA and uses task requirements as question prefixes. (Section 4.3)
  - [AQuilt: Weaving Logic and Self-Inspection into Low-Cost, High-Relevance Data Synthesis for Specialist LLMs](https://aclanthology.org/2025.emnlp-main.293.pdf)
