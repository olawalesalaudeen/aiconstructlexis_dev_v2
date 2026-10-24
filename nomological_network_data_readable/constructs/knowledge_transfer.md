# Knowledge transfer
**Type:** Construct  
**Referenced in:** 95 papers  
**Also known as:** Transferability, Ability transfer, Transfer learning, Skill transfer, Transfer, Task transfer, Cross-task transfer, In-context transferability, Task transferability, Backward transfer, Forward transfer, Prompt transferability, Knowledge transferability, Competence transfer  

## State of the Field

**Definition agreement:** Conflicting. Most papers define knowledge transfer as a model's ability to reuse knowledge learned from prior tasks, domains, languages, or pretraining to improve performance on new tasks, and sometimes old tasks as well. But a substantial minority use the same term for cross-model portability of prompts, jailbreaks, poisoning attacks, detectors, or parameter initializations, which are different kinds of things, so papers using these definitions would not be studying the same phenomenon.

**Space of definitions.** Across papers, the prevailing usage treats knowledge transfer as cross-context carryover: something learned in one setting, often prompts, attacks, policies, algorithms, or pre-trained knowledge, is expected to remain effective in another model, task, domain, language, modality, or request set. A common narrower line, especially under the name transferability, focuses on cross-model reuse without retraining or re-optimization, for example whether continuous prompts, jailbreak prompts, or detection methods learned on one model still work on another; one paper defines it as the level at which prompts produced to jailbreak one LLM can successfully jailbreak another model. Smaller lines of work instead define it as task-to-task improvement, including forward and backward transfer in continual learning, exemplar-driven transfer between tasks in in-context learning, or the sharing of domain-specific knowledge within multi-expert systems. The main disagreement is over what bears the property: a model, a prompt or attack, a task pair, or a transfer process between experts, tasks, or domains.

**Space of facets.** Papers most explicitly divide the construct into forward transfer and backward transfer, with one continual-learning definition using knowledge transfer as the umbrella term for both. Another recurring split distinguishes task transferability from in-context transferability: the latter is estimated from how much exemplars from one task improve another task when used as context. Related labels include prompt transferability, skill transfer, ability transfer, cross-task transfer, competence transfer, transfer learning, and knowledge transferability, usually naming the same broad idea while attaching it to different units such as prompts, languages, goals, or domains. Some papers place it alongside neighboring notions, especially generalization and robustness, and one paper frames a trade-off between knowledge transfer and expert specialization.

**Space of measurement.** Papers link knowledge transfer to 8 measurement instruments and 4 behavioral indicators. The named instruments include Arena-Hard, GSM8K, HaluEval, HarmBench, and MT-Bench, plus 3 other instruments, and the operationalization is usually performance after moving across tasks or models, such as evaluating attacks on other target models and HarmBench behaviors, or training on TruthfulQA and then applying a method to HaluEval, Natural Questions, and TriviaQA. Among behavioral indicators, jailbreaking is directly used as a measurement target, while time series forecasting appears as an outcome in one causal claim and catastrophic forgetting and explanation generation are linked in other ways. These operationalizations mostly line up with the dominant definitions of cross-context applicability, though some papers measure narrower variants such as exemplar-based in-context transferability or transferred soft-prompt performance on target models.

**Links.** Several papers connect knowledge transfer to generalization: papers report that generalization is related to knowledge transfer, and one paper claims a causal relationship from knowledge transfer to generalization. In-context learning is also linked in both directions, with one paper treating it as related to knowledge transfer and another claiming a causal relationship from in-context learning to knowledge transfer. Single papers further claim causal relationships from knowledge transfer to time series forecasting and model similarity, and from abstraction, rule-based reasoning, and cross-lingual alignment to knowledge transfer. Other single-paper links report that knowledge transfer is related to robustness, while continual learning, expert specialization, knowledge manipulation, catastrophic forgetting, and explanation generation are related to knowledge transfer; knowledge transfer is also reported to correlate with parametric knowledge, while expressive power is reported to correlate with knowledge transfer.

## Sources

**[AutoDAN: Generating Stealthy Jailbreak Prompts on Aligned Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/f83cb637e159e789f5576ff6848874de-Paper-Conference.pdf) (as "Transferability")**
> The degree to which continuous prompts learned on one language model can be effectively applied to another, reflecting the generalizability of task semantics across model architectures and embedding spaces.

**[TeamLoRA: Boosting Low-Rank Adaptation with Expert Collaboration and Competition](https://aclanthology.org/2025.acl-long.669.pdf)**
> The latent ability of domain-specific experts to share and apply their learned knowledge to relevant downstream tasks within a multi-expert system.

**[Extracting and Combining Abilities For Building Multi-lingual Ability-enhanced Large Language Models](https://aclanthology.org/2025.emnlp-main.887.pdf) (as "Ability transfer")**
> The latent capacity to transfer learned capabilities from one language or domain to another without retraining, preserving the core knowledge while adapting to new linguistic contexts.

**[Training Compute-Optimal Protein Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/8066ae1446b2bbccb5159587cc3b3bcc-Paper-Conference.pdf) (as "Transfer learning")**
> The ability of a model to leverage knowledge gained from training on one task or objective to improve its performance on a different but related task or objective.

**[Iteration Head: A Mechanistic Study of Chain-of-Thought](https://proceedings.neurips.cc/paper_files/paper/2024/file/c50f8180ef34060ec59b75d6e1220f7a-Paper-Conference.pdf) (as "Skill transfer")**
> The degree to which a capability or mechanism learned on one task can be successfully applied or adapted to improve performance on a different task.

**[Time-FFM: Towards LM-Empowered Federated Foundation Model for Time Series Forecasting](https://proceedings.neurips.cc/paper_files/paper/2024/file/abc1943857a42935ceacff03c524bb44-Paper-Conference.pdf) (as "Knowledge transferability")**
> The model's ability to effectively transfer learned patterns and knowledge from source domains to improve performance on different target domains.

**[Building, Reusing, and Generalizing Abstract Representations from Concrete Sequences](https://proceedings.iclr.cc/paper_files/paper/2025/file/e46984e056185b21ddb1e7973c365f14-Paper-Conference.pdf) (as "Transfer")**
> The ability to apply learned knowledge, such as abstract variables, from a training context to a new, related context.

**[Task-Adaptive Pretrained Language Models via Clustered-Importance Sampling](https://proceedings.iclr.cc/paper_files/paper/2025/file/688006b3d1df8be5bb2a2a31a407180c-Paper-Conference.pdf) (as "Task transfer")**
> The ability of a model trained for one task to perform well on a different, unevaluated task.

**[LLaVA-Interleave: Tackling Multi-image, Video, and 3D in Large Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c9f95e9ec39fa5ad3d0a562b993b92aa-Paper-Conference.pdf) (as "Cross-task transfer")**
> The ability to apply knowledge or skills learned from one set of tasks to perform new, untrained tasks, often by composing existing capabilities.

**[BenTo: Benchmark Reduction with In-Context Transferability](https://proceedings.iclr.cc/paper_files/paper/2025/file/4798eef078de031518beaf54f4b5fb5f-Paper-Conference.pdf) (as "In-context transferability")**
> A task-level latent property estimated from how much exemplars from one task improve performance on another task when used as in-context examples.

**[BenTo: Benchmark Reduction with In-Context Transferability](https://proceedings.iclr.cc/paper_files/paper/2025/file/4798eef078de031518beaf54f4b5fb5f-Paper-Conference.pdf) (as "Task transferability")**
> The degree to which knowledge or skill learned from one task improves performance on another task, reflecting overlap or generalization across tasks.

**[LeanAgent: Lifelong Learning for Formal Theorem Proving](https://proceedings.iclr.cc/paper_files/paper/2025/file/b67c77f8db8b991d73d6f2e16f491840-Paper-Conference.pdf) (as "Backward transfer")**
> The extent to which learning new tasks improves performance on previously learned tasks.

**[Adapt-$\infty$: Scalable Continual Multimodal Instruction Tuning via Dynamic Data Selection](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6610efd6c767f63343a4ab28505212e-Paper-Conference.pdf) (as "Forward transfer")**
> The phenomenon where knowledge gained from previous tasks improves the learning of new, subsequent tasks.

**[Efficient and Privacy-Preserving Soft Prompt Transfer for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ds/wang25ds.pdf) (as "Prompt transferability")**
> The latent ability of a soft prompt tuned on one language model to maintain high performance when applied to a different, larger language model.

**[MAGELLAN: Metacognitive predictions of learning progress guide autotelic LLM agents in large goal spaces](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gaven25a/gaven25a.pdf) (as "Competence transfer")**
> The phenomenon where practicing one goal improves performance on other semantically related goals, captured dynamically through learned representations rather than predefined groupings.

## Relationships

### Knowledge transfer →
- **Generalization** (constructs) — *causes*
  > This transfer is crucial as it allows the model to leverage previously acquired knowledge to better generalize to new tasks or domains. (Section 1)
  - [Learn more, but bother less: parameter efficient continual learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/b0bc711f48724237b38823c4d9cee10b-Paper-Conference.pdf)
- **Time series forecasting** (behaviors tasks) — *causes*
  > We attribute the performance gains of TIME-FFM to the valid knowledge transferability across domains. (Section 4.3)
  - [Time-FFM: Towards LM-Empowered Federated Foundation Model for Time Series Forecasting](https://proceedings.neurips.cc/paper_files/paper/2024/file/abc1943857a42935ceacff03c524bb44-Paper-Conference.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > Bulilding on this success we further extended DAMO to LLMs, where is also delivered strong results on benchmarks such as TruthfulQA Lin et al. (2021), FACTOR Muhlgay et al. (2023), and GSM8K Cobbe et al. (2021), indicating that DAMO possesses notable transferability across different tasks and model types. (Section 1)
  - [DAMO: Decoding by Accumulating Activations Momentum for Mitigating Hallucinations in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8f0f23417ce1d00212a7c85c2560c392-Paper-Conference.pdf)
- **GSM8K** (measurements) — *measured_by*
  > Bulilding on this success we further extended DAMO to LLMs, where is also delivered strong results on benchmarks such as TruthfulQA Lin et al. (2021), FACTOR Muhlgay et al. (2023), and GSM8K Cobbe et al. (2021), indicating that DAMO possesses notable transferability across different tasks and model types. (Section 1)
  - [DAMO: Decoding by Accumulating Activations Momentum for Mitigating Hallucinations in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8f0f23417ce1d00212a7c85c2560c392-Paper-Conference.pdf)

### → Knowledge transfer
- **Expressive power** (constructs) — *correlates*
  > We observed in Table 3 that a larger source model (either BERTlarge or RoBERTalarge) has lower transfer performance. This aligns with the intuition in Khashabi et al. (2022) that there could be a large number of similarly performing continuous prompts, residing in a large (and also deep) model’s expressive embedding space... Therefore, the induced prompt may carry model specificity in addition to task semantics, limiting its transferability to other models. (Section 3.3)
  - [Zero-Shot Continuous Prompt Transfer: Generalizing Task Semantics Across Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/05f0734db34deb367fc66f1482528044-Paper-Conference.pdf)
- **Abstraction** (constructs) — *causes*
  > Higher levels of abstraction implies more flexible transfer
  - [Building, Reusing, and Generalizing Abstract Representations from Concrete Sequences](https://proceedings.iclr.cc/paper_files/paper/2025/file/e46984e056185b21ddb1e7973c365f14-Paper-Conference.pdf)
- **Prompt optimization** (behaviors tasks) — *causes*
  > Additionally, GREATER-optimized prompts frequently exhibit better transferability
  - [GReaTer: Gradients Over Reasoning Makes Smaller Language Models Strong Prompt Optimizers](https://proceedings.iclr.cc/paper_files/paper/2025/file/18a42aad2fa8aa871e2ee20d425c208d-Paper-Conference.pdf)
- **Cross-lingual alignment** (constructs) — *causes*
  > A classic assumption in multilingual NLP is that more consistent multilingual representations facilitate easier knowledge transfer (Pan et al., 2021; Tang et al., 2022). (Section 1)
  - [AlignX: Advancing Multilingual Large Language Models with Multilingual Representation Alignment](https://aclanthology.org/2025.emnlp-main.328.pdf)

### Associated with
- **In-context learning** (constructs)
  > Moreover, the absence of the need to update model parameters also allows a good attribution result for ICL to be transferable across different language models. (Introduction)
  - [DETAIL: Task DEmonsTration Attribution for Interpretable In-context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2ceda49041816da6d5a34eb3b612607f-Paper-Conference.pdf)
- **Robustness** (constructs)
  > In this subsection, we aim to evaluate the robustness, especially the generalizability and transferability of our method MoD to various LLMs. (Section 4.5)
  - [Mixture of Demonstrations for In-Context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/a0da098e0031f58269efdcba40eedf47-Paper-Conference.pdf)
- **Catastrophic forgetting** (behaviors tasks)
  > Cross-domain co-training on a large number of datasets only negatively impacts LLaGA. A similar phenomenon can also be observed when LLMs with cross-modality projectors are applied to CV [49], which may be related to catastrophic forgetting. (Section 4.2.1)
  - [Text-space Graph Foundation Models: Comprehensive Benchmarks and New Insights](https://proceedings.neurips.cc/paper_files/paper/2024/file/0e0b39c69663e9c073739adf547ed778-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Knowledge manipulation** (constructs)
  > enhance the knowledge manipulation (e.g., knowledge recall, reasoning, and transfer) ability of LLMs. (Section 1)
  - [Knowledge Graph Finetuning Enhances Knowledge Manipulation in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e44337573fcac83f219c8effa4ebf90d-Paper-Conference.pdf)
- **Expert specialization** (constructs)
  > Thus, there exists a trade-off between the short-term cost savings from knowledge transfer and the long-term convergence efficiency through expert specialization. (Section 1)
  - [Drop-Upcycling: Training Sparse Mixture of Experts with Partial Re-initialization](https://proceedings.iclr.cc/paper_files/paper/2025/file/d24b7366d714b09a977946ef0d9bf3ad-Paper-Conference.pdf)
- **Continual learning** (constructs)
  > Previous CL research posits that an effective CL method should address two primary challenges: 1) Catastrophic Forgetting (CF) ... and 2) Knowledge Transfer (KT), which includes both forward transfer and backward transfer. (Section 2.1).
  - [Exploiting Presentative Feature Distributions for Parameter-Efficient Continual Learning of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25j/cheng25j.pdf)
- **Parametric knowledge** (constructs)
  > Our findings highlight the critical factors contributing to the process of parametric knowledge transfer, underscoring the transferability of model parameters across LLMs of different scales. (Section 1)
  - [Seeking Neural Nuggets: Knowledge Transfer in Large Language Models from a Parametric Perspective](https://proceedings.iclr.cc/paper_files/paper/2024/file/6d6dc5c9ad19816d745535d352dc4295-Paper-Conference.pdf)
- **Rule-based reasoning** (constructs)
  > For rule-based reasoning, once a rule is formed through induction, it should be transferable.
  - [MIRAGE: Evaluating and Explaining Inductive Reasoning Process in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b782a3462ee9d566291cff148333ea9b-Paper-Conference.pdf)
