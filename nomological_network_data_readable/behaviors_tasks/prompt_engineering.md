# Prompt engineering
**Type:** Behavior  
**Referenced in:** 56 papers  
**Also known as:** Question formulation, Prompt generation, Question generation, Task description generation, Prompt inversion, Prompt paraphrasing, Expression rewriting, Query modification, Prompt distillation, Prompt evolution, Hybrid prompt generation, Discrete prompt optimization, Black-box prompt tuning, Soft prompt tuning, Contrastive prompt generation, Chain-of-thought prompting  

## State of the Field

Across the surveyed literature, prompt engineering is predominantly characterized as the observable behavior of either generating new textual inputs or modifying existing ones to guide language models toward desired outcomes. The most common form is the generation of new content, which encompasses a wide range of actions from producing search queries for retrieval and formulating questions to resolve ambiguity, to creating novel mathematical problems or task instructions. For instance, several papers define this as asking clarifying questions to "elicit more information" ("Modeling Future Conversation Turns to Teach LLMs to Ask Clarifying Questions"), while others focus on generating new data for model training. A second, widely discussed aspect involves the modification and optimization of existing prompts. This includes rewriting queries to be more "search-engine-friendly" ("MMSearch: Unveiling the Potential of Large Models as Multi-modal Search Engines"), rephrasing prompts to bypass safety measures, or systematically refining them to improve task performance. The literature describes several distinct optimization methods, such as "soft prompt tuning," which optimizes trainable embedding vectors, and "black-box prompt tuning," which adjusts prompts based only on model outputs. The effectiveness of these behaviors is operationalized and evaluated using benchmarks including MS-COCO, MovieLens, and SQuAD v1.1. Prompt engineering is frequently studied alongside disambiguation and mathematical reasoning, and some work reports that specific techniques can influence model generalization, interpretability, and flexibility.

## Sources

**[InsightBench: Evaluating Business Analytics Agents Through Multi-Step Insight Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/0dfe31d6e703e138d46a7d2fced38b7c-Paper-Conference.pdf) (as "Question formulation")**
> The observable act of generating relevant and specific questions to explore a dataset in pursuit of a high-level goal.

**[Pareto Prompt Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/13b45b44e26c353c64cba9529bf4724f-Paper-Conference.pdf) (as "Prompt generation")**
> Producing textual prompts that are fed to a task-specific language model to elicit desired outputs.

**[OpenMathInstruct-2: Accelerating AI for Math with Massive Open-Source Instruction Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/302ce0673c00aee2cf84bb43d0117553-Paper-Conference.pdf) (as "Question generation")**
> The observable task of creating new mathematical problems, often based on seed examples from an existing dataset.

**[Bootstrapping Language-Guided Navigation Learning with Self-Refining Data Flywheel](https://proceedings.iclr.cc/paper_files/paper/2025/file/3b00f67a2e03916b26f56b66b38445f7-Paper-Conference.pdf) (as "Instruction generation")**
> The task of producing a natural language instruction that accurately describes a given trajectory through an environment.

**[Visually Guided Decoding: Gradient-Free Hard Prompt Inversion with Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd61329e2c14b93a89d617c914140f64-Paper-Conference.pdf) (as "Prompt inversion")**
> Generating a textual prompt that, when provided to a text-to-image model, reproduces a given target image.

**[OMNI-EPIC: Open-endedness via Models of human Notions of Interestingness with Environments Programmed in Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/d40d7cbe7210f8a13ea0149eeae9c6de-Paper-Conference.pdf) (as "Task description generation")**
> The observable action of producing a novel task description in natural language, intended to be both learnable for an agent and distinct from previously seen tasks.

**[Re-Aligning Language to Visual Objects with an Agentic Workflow](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d9057d84a9fc37523bf826232ea6820-Paper-Conference.pdf) (as "Expression rewriting")**
> The task of modifying an existing language expression to correct inaccuracies and better align it with a target visual object.

**[Rare-to-Frequent: Unlocking Compositional Generation Power of Diffusion Models on Rare Concepts with LLM Guidance](https://proceedings.iclr.cc/paper_files/paper/2025/file/262ba7d20578417435414ce00e69fb12-Paper-Conference.pdf) (as "Prompt paraphrasing")**
> The observable behavior of rewriting a text prompt to make it easier for a model to interpret, while preserving the original meaning.

**[Unified Parameter-Efficient Unlearning for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/8d537430e55a283a97e9b6e682e994a3-Paper-Conference.pdf) (as "Query modification")**
> The observable action of adjusting input tokens in a query, such as removing noisy or correcting erroneous tokens.

**[Visually Guided Decoding: Gradient-Free Hard Prompt Inversion with Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd61329e2c14b93a89d617c914140f64-Paper-Conference.pdf) (as "Prompt distillation")**
> Shortening a long, descriptive text prompt into a more concise version while preserving its core semantic meaning for image generation.

**[GReaTer: Gradients Over Reasoning Makes Smaller Language Models Strong Prompt Optimizers](https://proceedings.iclr.cc/paper_files/paper/2025/file/18a42aad2fa8aa871e2ee20d425c208d-Paper-Conference.pdf) (as "Prompt optimization")**
> Refining a prompt to improve a language model's performance on a target task.

**[FedOne: Query-Efficient Federated Learning for Black-box Discrete Prompt Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ab/wang25ab.pdf) (as "Discrete prompt optimization")**
> The process of adjusting sequences of discrete tokens (prompts) through interaction with a black-box LLM to improve task performance without access to model gradients.

**[FedOne: Query-Efficient Federated Learning for Black-box Discrete Prompt Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ab/wang25ab.pdf) (as "Black-box prompt tuning")**
> Adjusting input prompts to a large language model based solely on its outputs, without access to internal model states or gradients, typically via API queries.

**[Efficient and Privacy-Preserving Soft Prompt Transfer for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ds/wang25ds.pdf) (as "Soft prompt tuning")**
> The process of optimizing trainable embedding vectors prepended to the input of a frozen language model to adapt it to a downstream task.

**[DocKS-RAG: Optimizing Document-Level Relation Extraction through LLM-Enhanced Hybrid Prompt Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25am/xu25am.pdf) (as "Hybrid prompt generation")**
> The process of combining structural knowledge from a document-level knowledge graph and semantic context from retrieved sentences into a unified prompt for LLM input.

**[Reward-Guided Prompt Evolving in Reinforcement Learning for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ye25a/ye25a.pdf) (as "Prompt evolution")**
> Modifying existing prompts through rewriting or transformation to increase their complexity or learning value for the model.

**[CPCF: A Cross-Prompt Contrastive Framework for Referring Multimodal Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhu25h/zhu25h.pdf) (as "Contrastive prompt generation")**
> Producing alternative visual prompts from misleading regions that are used to contrast against the original input prompt during decoding.

**[Localized Zeroth-Order Prompt Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/9cef1316eaef9bd99da46f63334dc031-Paper-Conference.pdf) (as "Chain-of-thought prompting")**
> Generating prompts that encourage step-by-step reasoning before answering a problem.

## Relationships

### Prompt engineering →
- **Generalization** (constructs) — *causes*
  > VGD enhances the interpretability, generalization, and flexibility of prompt generation without the need for additional training. (Section 1)
  - [Visually Guided Decoding: Gradient-Free Hard Prompt Inversion with Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd61329e2c14b93a89d617c914140f64-Paper-Conference.pdf)
- **Chain of thought** (behaviors tasks) — *causes*
  > We proceed further by introducing Chain-of-Thought (CoT) prompting... request for the model to perform the task step-by-step
  - [Limits of Transformer Language Models on Learning to Compose Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/0e797d5139ad94fc2dc2080c09119f29-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *causes*
  > “Then, we use generated SQs in our question prompt, replacing QRS output, to generate an answer.”
  - [Analyzing and Improving Coherence of Large Language Models in Question Answering](https://aclanthology.org/2025.naacl-long.588.pdf)
- **Mathematical reasoning** (constructs) — *causes*
  > As recent works have disclosed that crafting the right questions is crucial for eliciting the reasoning capabilities of LLMs (Yu et al., 2023a; Shah et al., 2024), the core of reasoning data synthesis lies in creating large-scale and novel questions. (Section 1)
  - [Unleashing LLM Reasoning Capability via Scalable Question Synthesis from Scratch](https://aclanthology.org/2025.acl-long.658.pdf)
- **Robustness** (constructs) — *causes*
  > the creator should generate training prompts allowing the solver to perform robustly on target prompt distributions. (Problem 1)
  - [Reward-Guided Prompt Evolving in Reinforcement Learning for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ye25a/ye25a.pdf)
- **Interpretability and explainability** (constructs) — *causes*
  > VGD enhances the interpretability, generalization, and flexibility of prompt generation without the need for additional training. (Section 1)
  - [Visually Guided Decoding: Gradient-Free Hard Prompt Inversion with Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd61329e2c14b93a89d617c914140f64-Paper-Conference.pdf)
- **Flexibility** (constructs) — *causes*
  > VGD enhances the interpretability, generalization, and flexibility of prompt generation without the need for additional training. (Section 1)
  - [Visually Guided Decoding: Gradient-Free Hard Prompt Inversion with Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd61329e2c14b93a89d617c914140f64-Paper-Conference.pdf)
- **Style transfer** (behaviors tasks) — *causes*
  > VGD can also be easily adapted to style transfer. (Section 4.2)
  - [Visually Guided Decoding: Gradient-Free Hard Prompt Inversion with Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd61329e2c14b93a89d617c914140f64-Paper-Conference.pdf)
- **MS-COCO** (measurements) — *measured_by*
  > Following PEZ (Wen et al., 2024), we randomly sample 100 images from each dataset and evaluate prompt inversion methods across 5 runs using different random seeds. (Section 4.1)
  - [Visually Guided Decoding: Gradient-Free Hard Prompt Inversion with Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd61329e2c14b93a89d617c914140f64-Paper-Conference.pdf)
- **FeTaQA** (measurements) — *measured_by*
  > “we incorporate table-language interleaved data from existing benchmarks, including FetaQA (Nan et al., 2022), WikiTableQuestion (Pasupat & Liang, 2015), and ToTTo (Parikh et al., 2020).”
  - [Bridging the Semantic Gap Between Text and Table: A Case Study on NL2SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/283f1354f1de1c53a14afe0a6740e889-Paper-Conference.pdf)
- **WikiTQ** (measurements) — *measured_by*
  > “we incorporate table-language interleaved data from existing benchmarks, including FetaQA (Nan et al., 2022), WikiTableQuestion (Pasupat & Liang, 2015), and ToTTo (Parikh et al., 2020).”
  - [Bridging the Semantic Gap Between Text and Table: A Case Study on NL2SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/283f1354f1de1c53a14afe0a6740e889-Paper-Conference.pdf)
- **ToTTo** (measurements) — *measured_by*
  > “we incorporate table-language interleaved data from existing benchmarks, including FetaQA (Nan et al., 2022), WikiTableQuestion (Pasupat & Liang, 2015), and ToTTo (Parikh et al., 2020).”
  - [Bridging the Semantic Gap Between Text and Table: A Case Study on NL2SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/283f1354f1de1c53a14afe0a6740e889-Paper-Conference.pdf)
- **MovieLens-25M multi-tabular** (measurements) — *measured_by*
  > Experimental results on the QM task, using LLaRA as the LLM4Rec model on the MovieLens and LastFM datasets. (Table 3)
  - [Unified Parameter-Efficient Unlearning for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/8d537430e55a283a97e9b6e682e994a3-Paper-Conference.pdf)
- **LastFM** (measurements) — *measured_by*
  > Experimental results on the QM task, using LLaRA as the LLM4Rec model on the MovieLens and LastFM datasets. (Table 3)
  - [Unified Parameter-Efficient Unlearning for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/8d537430e55a283a97e9b6e682e994a3-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs) — *causes*
  > CoT prompting aims to mitigate issues like hallucinations and enhance multi-step reasoning by encouraging models to generate intermediate reasoning steps.
  - [Limits of Deep Learning: Sequence Modeling through the Lens of Complexity Theory](https://proceedings.iclr.cc/paper_files/paper/2025/file/62868cc2fc1eb5cdf321d05b4b88510c-Paper-Conference.pdf)
- **Expressive power** (constructs) — *causes*
  > “CoT improves the representation power of RNNs”
  - [RNNs are not Transformers (Yet):  The Key Bottleneck on In-Context Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/79dc391a2c1067e9ac2b764e31a60377-Paper-Conference.pdf)
- **Image generation** (behaviors tasks) — *causes*
  > generative models can generate images of objects using a well-crafted prompt
  - [Visually Guided Decoding: Gradient-Free Hard Prompt Inversion with Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd61329e2c14b93a89d617c914140f64-Paper-Conference.pdf)
- **Text-to-SQL** (behaviors tasks) — *causes*
  > The Query Agent QAgent generates a SQL query qij and resulting tables Rij (qij(D) = Rij) to answer the subquestions using the database information and schema: QAgent(sij, Dinfo, Dschema) → qij (Section 4.2).
  - [An LLM-Based Approach for Insight Generation in Data Analysis](https://aclanthology.org/2025.naacl-long.24.pdf)
- **Reasoning** (constructs) — *causes*
  > In Appendix E, we explore whether increasing inference-time compute via Chain-of-Thought (CoT) prompting can improve the performance of MoEs on tasks that require more reasoning. (Section 4)
  - [Parameters vs FLOPs: Scaling Laws for Optimal Sparsity for Mixture-of-Experts Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/abnar25a/abnar25a.pdf)
- **Self-improvement** (constructs) — *causes*
  > “enables LLMs to prioritize and adaptively create useful prompts, for continual RL training and self-improving.”
  - [Reward-Guided Prompt Evolving in Reinforcement Learning for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ye25a/ye25a.pdf)
- **Multi-hop reasoning** (constructs) — *causes*
  > CoT proved most beneficial for reasoning-intensive categories such as multi-hop and analogy questions, yielding accuracy gains of up to 10–15%... (Section 5.6)
  - [DRISHTIKON: A Multimodal Multilingual Benchmark for Testing Language Models' Understanding on Indian Culture](https://aclanthology.org/2025.emnlp-main.68.pdf)
- **Analogical reasoning** (constructs) — *causes*
  > CoT proved most beneficial for reasoning-intensive categories such as multi-hop and analogy questions, yielding accuracy gains of up to 10–15%... (Section 5.6)
  - [DRISHTIKON: A Multimodal Multilingual Benchmark for Testing Language Models' Understanding on Indian Culture](https://aclanthology.org/2025.emnlp-main.68.pdf)
- **SQuAD v1.1** (measurements) — *measured_by*
  > We evaluate PbT on three tasks with five benchmarks: ...and question generation (SQuAD (Rajpurkar et al., 2016)). (Section 4)
  - [Paired by the Teacher: Turning Unpaired Data into High-Fidelity Pairs for Low-Resource Text Generation](https://aclanthology.org/2025.emnlp-main.1030.pdf)

### → Prompt engineering
- **Coding ability** (constructs) — *causes*
  > scaling models in a way that enhances general knowledge (MMLU) and code (HumanEval) leads to greater gaps between CoT and the baseline (Sec. 4.3)
  - [Observational Scaling Laws and the Predictability of Langauge Model Performance](https://proceedings.neurips.cc/paper_files/paper/2024/file/1cded4f97cf5f01a284c574110b7e3b9-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > By generating a sequence of reasoning before the final answer, CoT has succeeded in aiding LLMs to solve reasoning-heavy tasks.
  - [KMMLU: Measuring Massive Multitask Language Understanding in Korean](https://aclanthology.org/2025.naacl-long.206.pdf)
- **Self-improvement** (constructs) — *causes*
  > We design eva, the first method that enables LLMs to prioritize and adaptively create useful prompts, for continual RL training and self-improving. (Introduction)
  - [Reward-Guided Prompt Evolving in Reinforcement Learning for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ye25a/ye25a.pdf)

### Associated with
- **Text generation** (behaviors tasks)
  > eva (Evolving via Asymmetric Self-Play) casts language model training as a game between: (1) a creator, who samples and generates training prompts, and (2) a solver, who generates responses to the prompts. (Figure 1)
  - [Reward-Guided Prompt Evolving in Reinforcement Learning for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ye25a/ye25a.pdf)
- **Mathematical problem solving** (behaviors tasks)
  > We apply two prompting strategies: direct zero-shot prompting (Direct) and two-step chain-of-thought (CoT) prompting.
  - [Can Vision-Language Models Solve Visual Math Equations?](https://aclanthology.org/2025.emnlp-main.547.pdf)
