# Adaptability
**Type:** Construct  
**Referenced in:** 91 papers  
**Also known as:** Adaptation, Continual learning efficiency, Self-adaptation, Adaptive capabilities, Domain adaptation, Cross-table generalizability, Task adaptivity, Domain knowledge adaptation  

## State of the Field

**Definition agreement:** Conflicting. Many papers define adaptability as a model or agent changing its behavior, strategy, or internal state to fit new tasks, prompts, domains, or environments, often explicitly during inference and without retraining. But another substantial group uses the term for different phenomena such as maintaining performance on unseen distributions, transfer or continual learning, or the ability and payoff of fine-tuning and domain specialization, so these papers would often not be studying the same thing.

**Space of definitions.** Across papers, the prevailing usage treats adaptability as the ability of a model or agent to adjust behavior, performance, strategies, or parameters to downstream tasks, unseen tasks, changing environments, or new data distributions. Many definitions keep this broad, covering alignment to task distributions, dynamic responses to opponents or UI changes, and inference-time updates for novel tasks. Smaller lines of work narrow it to domain-specific adjustment, such as specialized subject matter or multimodal input, while a few papers define it as acquiring new capabilities from limited reference materials rather than relying on pre-existing training data. Another distinct framing is self-adaptation, where the model evaluates and modifies its own behavior without external intervention, and one paper explicitly contrasts learning new tasks with simply surfacing capabilities already learned.

**Space of facets.** Papers use several nearby labels, most often adaptation, self-adaptation, domain adaptation, task adaptivity, and cross-table generalizability, alongside other variants. A prevalent subtype is domain adaptation, which covers adjustment to specialized fields, new client or query distributions, and the shift from text-centric to multimodal understanding; other variants target task-conditioned embeddings, transfer across tables and schemas, or real-time self-modification. The same label is also applied to different objects, including models, agents, routing systems, guardrail systems, and role-played characters. Some papers connect it closely to generalization or generality, whereas character-centered work treats it alongside consistency rather than as the same thing.

**Space of measurement.** Papers link adaptability to 12 measurement instruments and 3 behavioral indicators. Operationalization is mostly benchmark and dataset based, with AndroidWorld, AG News, AitW, ChemProt, and IMDb among the most frequent instruments; the linked instruments cover real-time dynamic OS tasks, downstream tasks across domains, image-domain adaptation, and routing to new LLMs. These measures largely match the dominant framing of adapting to new tasks or distributions, while the recorded operationalizations do not include human evaluation, LLM-as-a-judge, or probe instruments, and the behavioral indicators are linked through causal or related claims rather than direct measurement.

**Links.** Beyond measurement, papers link adaptability to 9 constructs and 3 behavioral indicators, and no correlational claim is recorded. Among the recurring claims are that adaptability is related to generalization, that papers claim a causal relationship from in-context learning to adaptability, and that papers claim a causal relationship from adaptability to compositionality. Papers also record one-paper causal links involving memorization and catastrophic forgetting in both directions, along with additional one-paper related and causal links to other constructs and indicators.

## Sources

**[A Benchmark for Learning to Translate a New Language from One Grammar Book](https://proceedings.iclr.cc/paper_files/paper/2024/file/52d63f9e4b81f866bf69fb3c834aad47-Paper-Conference.pdf) (as "Adaptation")**
> The capacity of a model to acquire new capabilities or knowledge from limited, task-specific reference materials rather than relying on pre-existing training data.

**[DQ-LoRe: Dual Queries with Low Rank Approximation Re-ranking for In-Context Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/b3875605f2e35714fc8a807cadf8a5e8-Paper-Conference.pdf)**
> The ability of a model to adjust its behavior and performance to align with specific downstream tasks based on their distributional characteristics.

**[Large Language Models as Generalizable Policies for Embodied Tasks](https://proceedings.iclr.cc/paper_files/paper/2024/file/8f9461d11e8ce9b0b28b21bfc645d74e-Paper-Conference.pdf) (as "Continual learning efficiency")**
> The ability of a model to rapidly adapt to new downstream tasks beyond its initial training set, indicating how well it builds on existing knowledge for future learning.

**[Transformer-Squared: Self-adaptive LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/244da015b91e64f2d9362703fa2a902b-Paper-Conference.pdf) (as "Self-adaptation")**
> The ability of a large language model to evaluate and modify its own behavior in real-time in response to the specific demands of a given task or prompt, without external intervention.

**[ELICIT: LLM Augmentation Via External In-context Capability](https://proceedings.iclr.cc/paper_files/paper/2025/file/3ffd6024f02b92a52abe8e79a78e9064-Paper-Conference.pdf) (as "Adaptive capabilities")**
> The latent capacity of a language model to flexibly adjust its behavior to new tasks or scenarios without retraining.

**[Chunk-Distilled Language Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d4d9fc36c783fcd31af2fda532e6c33-Paper-Conference.pdf) (as "Domain adaptation")**
> The model's ability to adjust its output distribution to better suit a specific domain, such as medicine or law, without undergoing additional training.

**[Bridging the Semantic Gap Between Text and Table: A Case Study on NL2SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/283f1354f1de1c53a14afe0a6740e889-Paper-Conference.pdf) (as "Cross-table generalizability")**
> The extent to which learned table representations transfer across different tables and schemas rather than overfitting to a specific table or prompt context.

**[Generalization Principles for Inference over Text-Attributed Graphs with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25bq/wang25bq.pdf) (as "Task adaptivity")**
> The capacity of a model to adjust its internal representations or reasoning based on the specific task context, such as class definitions or labeling goals, without fine-tuning.

**[Test-Time Learning for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25z/hu25z.pdf) (as "Domain knowledge adaptation")**
> The latent ability of an LLM to adjust to specialized subject-matter content in vertical domains such as medicine, agriculture, geography, and finance.

## Relationships

### Adaptability →
- **AndroidWorld** (measurements) — *measured_by*
  > On the OSWorld (Xie et al., 2024b) and AndroidWorld (Rawles et al., 2024) benchmarks, OSCAR consistently surpassed other agents... demonstrating superior adaptability across real-time dynamic OS tasks. (Section 1)
  - [OSCAR: Operating System Control via State-Aware Reasoning and Re-Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/b2077e6d66da612fcb701589efa9ce88-Paper-Conference.pdf)
- **ImageNet-1k** (measurements) — *measured_by*
  > For domain adaptation, following [82, 7], we train on ImageNet [11] with a 16-shot setting, use the validation split by [82] for hyperparameter selection and report the results on the official validation set (Section 4).
  - [PACE: Marrying generalization in PArameter-efficient fine-tuning with Consistency rEgularization](https://proceedings.neurips.cc/paper_files/paper/2024/file/70a06501001e1820fd1eb9ee821302d2-Paper-Conference.pdf)
- **ScreenSpot** (measurements) — *measured_by*
  > Our approach demonstrates superior performance in task accuracy and adaptability, as validated by benchmarks such as ScreenSpot, MiniWob, AITW, and Mind2Web.
  - [Grounding Multimodal Large Language Model in GUI World](https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf)
- **MiniWoB++** (measurements) — *measured_by*
  > Our approach demonstrates superior performance in task accuracy and adaptability, as validated by benchmarks such as ScreenSpot, MiniWob, AITW, and Mind2Web.
  - [Grounding Multimodal Large Language Model in GUI World](https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf)
- **AitW** (measurements) — *measured_by*
  > Our approach demonstrates superior performance in task accuracy and adaptability, as validated by benchmarks such as ScreenSpot, MiniWob, AITW, and Mind2Web.
  - [Grounding Multimodal Large Language Model in GUI World](https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf)
- **Mind2Web** (measurements) — *measured_by*
  > Our approach demonstrates superior performance in task accuracy and adaptability, as validated by benchmarks such as ScreenSpot, MiniWob, AITW, and Mind2Web.
  - [Grounding Multimodal Large Language Model in GUI World](https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > to demonstrate the adaptability of our routers to new LLMs, we report in Table 4 the performance of our routers on MT Bench when they are used to route between two new model pairs (Section 5.2)
  - [RouteLLM: Learning to Route LLMs from Preference Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/5503a7c69d48a2f86fc00b3dc09de686-Paper-Conference.pdf)
- **OSWorld** (measurements) — *measured_by*
  > On the OSWorld (Xie et al., 2024b) and AndroidWorld (Rawles et al., 2024) benchmarks, OSCAR consistently surpassed other agents... demonstrating superior adaptability across real-time dynamic OS tasks. (Section 1)
  - [OSCAR: Operating System Control via State-Aware Reasoning and Re-Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/b2077e6d66da612fcb701589efa9ce88-Paper-Conference.pdf)

### → Adaptability
- **In-context learning** (constructs) — *causes*
  > By leveraging in-context information during both pre-training and inference, Zebra dynamically adapts to new tasks by conditioning on input sequences that incorporate context example trajectories. (Abstract)
  - [Zebra: In-Context Generative Pretraining for Solving Parametric PDEs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/serrano25a/serrano25a.pdf)
- **Plan revision** (behaviors tasks) — *causes*
  > To enhance stability and adaptability, OSCAR operates as a state machine, equipped with error-handling mechanisms and task-driven re-planning, allowing it to efficiently adjust to real-time feedback and exceptions. (ABSTRACT)
  - [OSCAR: Operating System Control via State-Aware Reasoning and Re-Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/b2077e6d66da612fcb701589efa9ce88-Paper-Conference.pdf)

### Associated with
- **Catastrophic forgetting** (behaviors tasks)
  > We present DES-MoE, a dynamic framework for multi-domain MoE adaptation that mitigates catastrophic forgetting through adaptive routing and expert-domain correlation mapping. (Section 6)
  - [Dynamic Expert Specialization: Towards Catastrophic Forgetting-Free Multi-Domain MoE Adaptation](https://aclanthology.org/2025.emnlp-main.932.pdf)
- **Generalization** (constructs)
  > Overall, our system integrated with MAS-GPT offers the following key advantages: simplicity, cost-efficiency, and adaptability (generality). (Section 3.3)
  - [MAS-GPT: Training LLMs to Build LLM-based Multi-Agent Systems](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ye25g/ye25g.pdf)
- **Multimodal understanding** (constructs)
  > This strategy is underpinned by the understanding that the evolution from LLMs to MLLMs can be conceptualized as a domain adaptation process, i.e., transitioning from text-centric to multi-modal understanding. (Section 1)
  - [Tuning LayerNorm in Attention: Towards Efficient Multi-Modal LLM Finetuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/7cc16e8635e6f27c295355bd214ef8d8-Paper-Conference.pdf)
- **Masked language modeling** (behaviors tasks)
  > First, we select data to fine-tune a pre-trained bert-base-uncased model (from Huggingface) via Masked Language Modeling (MLM) - following the standard setting of masking 15% tokens for training over the unlabeled domain-specific data. (Section 3.2)
  - [Get more for less: Principled Data Selection for Warming Up Fine-Tuning in LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/b36dc39b319ba6ba2a0fd7601951efb4-Paper-Conference.pdf)
- **Text summarization** (behaviors tasks)
  > Li et al. (2024) investigates the factors that play a role in domain adaptation for text summarization.
  - [DA-Pred: Performance Prediction for Text Summarization under Domain-Shift and Instruct-Tuning](https://aclanthology.org/2025.emnlp-main.387.pdf)
- **General ability** (constructs)
  > How can we preserve and transfer the general capabilities of LLMs while enabling them to adapt to domain-specific knowledge? (Section 1).
  - [Splitting with Importance-aware Updating for Heterogeneous Federated Learning with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liao25c/liao25c.pdf)
- **Compositionality** (constructs)
  > While compositionality and scalability are crucial for effective adaptation, current LLM training methodologies fall short of achieving both these properties simultaneously. (Section 1)
  - [Transformer-Squared: Self-adaptive LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/244da015b91e64f2d9362703fa2a902b-Paper-Conference.pdf)
