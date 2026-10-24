# Reasoning
**Type:** Construct  
**Referenced in:** 819 papers  
**Also known as:** Reasoning ability, Reasoning capability, Inference ability, Reasoning capacity, Inferential capabilities, Inferences, General inference capability, Reasoning capabilities, Reasoning skills, Inference capability, Inferential ability, Thinking, Reasoning performance, Comprehensive reasoning, Few-shot reasoning  

## State of the Field

**Definition agreement:** Consensus. Most papers define reasoning as a model's latent ability to carry out logical, often multi-step inference or step-by-step problem solving to derive conclusions from information, evidence, or knowledge, usually contrasted with surface pattern matching. A few papers use the term for neighboring ideas such as recommendation explanations, output selection, or broader concept discovery, but these are minor outliers, so the dominant pattern is consensus.

**Space of definitions.** Across the surveyed work, the prevailing usage treats reasoning as a latent model faculty for multi-step logical inference, deduction, and problem solving: drawing conclusions from given information, decomposing tasks into steps, and going beyond direct pattern matching or memorization. Many definitions place it in settings such as math, commonsense, code, agents, retrieval, or multimodal question answering, but keep the same core idea of structured inference; some also emphasize integration of context, world knowledge, or retrieved evidence. A smaller line narrows the term to domain-specific inference, such as inferring task structure for simulation generation, deducing buzzword meaning from user-generated content, or making situation-specific inferences, and one paper shifts the referent from the model to the explanation output, defining reasoning as user-tailored justification in recommendations. Another minority framing treats it more as an internal process or theory, for example prompt-elicited intermediate thoughts or posterior inference over latent chains of thought, and one definition treats few-shot reasoning as an observable behavior rather than a latent capacity.

**Space of facets.** Most papers use nearby labels such as reasoning ability, capability, capacity, skills, performance, general reasoning, and inference ability for largely the same broad faculty. They often break it into domains or subtypes, especially mathematical, commonsense, logical, causal, visual or multimodal, multi-hop, and retrieval-augmented reasoning, and sometimes into broader variants such as general or comprehensive reasoning, or setting-specific variants such as few-shot reasoning. A recurring contrast is with memorization, surface cues, direct pattern matching, or pure factual recall, and several papers tie reasoning to intermediate rationales, explanations, or chain-of-thought; one paper explicitly says explanation and reasoning are used interchangeably. A separate neighboring construct is thinking, which one paper defines as natural-language planning or self-reflection before the answer, presented as useful for reasoning but not limited to it.

**Space of measurement.** Papers link reasoning to 113 measurement instruments and 52 behavioral indicators. Operationalization is dominated by benchmark accuracy, most often on GSM8K, BIG-Bench Hard, MMLU, MATH, and PIQA, with many other instruments spanning commonsense, multi-hop QA, coding, agent, and multimodal evaluations; a smaller line uses LLM-based judging or other auxiliary metrics. Most measures target tasks that papers describe as requiring multi-step inference, logical deduction, or evidence integration, and chain-of-thought generation is the most common behavioral probe, though some evaluations place reasoning inside broader chat, safety, explanation, or leaderboard-style assessments.

**Links.** Several papers claim causal relationships from chain of thought to reasoning, and some record the reverse direction or a noncausal related link between the two. Smaller lines claim causal relationships from reflective or explanatory behaviors to reasoning, including self-reflection, self-correction, and in-context learning. In the other direction, papers most often claim causal relationships from reasoning to generalization and planning, and some also extend this to interpretability-related or robustness-related outcomes. Related links place reasoning alongside memorization and visual perception, and one paper reports that it correlates with mathematical reasoning and coding ability.

## Sources

**[AgentBench: Evaluating LLMs as Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e9df36b21ff4ee211a8b71ee8b7e9f57-Paper-Conference.pdf)**
> The capacity for multi-hop logical inference and deduction about object interactions, action conditions, or dependencies.

**[At Which Training Stage Does Code Data Help LLMs Reasoning?](https://proceedings.iclr.cc/paper_files/paper/2024/file/9c2aa1e456ea543997f6927295196381-Paper-Conference.pdf) (as "Reasoning capability")**
> The ability to infer task structure, constraints, and implementation details needed to generate coherent new simulation tasks.

**[Building Cooperative Embodied Agents Modularly with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/54b8b4e0b4ba4aad112e84f32e3b5dbb-Paper-Conference.pdf) (as "Reasoning ability")**
> The emergent capability of a large language model to logically process given information and infer conclusions or generate new insights, particularly when guided by well-structured prompts.

**[LLMCBench: Benchmarking Large Language Model Compression for Efficient Deployment](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f4cc62d0632911c63163ea3d9ec19bd-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Inference ability")**
> The capacity of a large language model to reason and draw conclusions based on its existing knowledge.

**[Entity Alignment with Noisy Annotations from Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/1b57aaddf85ab01a2445a79c9edc1f4b-Paper-Conference.pdf) (as "Reasoning capacity")**
> The model's latent ability to infer correct outputs through multi-step or probabilistic inference rather than direct pattern matching.

**[MACM: Utilizing a Multi-Agent System for Condition Mining in Solving Complex Mathematical Problems](https://proceedings.neurips.cc/paper_files/paper/2024/file/5fcedec09977357f32e8e0ec8957073b-Paper-Conference.pdf) (as "Inferential capabilities")**
> The model's underlying ability to make inferences and draw conclusions from given information, which can be enhanced through prompting techniques.

**[Me, Myself, and AI: The Situational Awareness Dataset (SAD) for LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/7537726385a4a6f94321e3adf8bd827e-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Inferences")**
> The ability to make plausible deductions about the model's present situation from cues in the prompt or context.

**[Enhancing Multiple Dimensions of Trustworthiness in LLMs via Sparse Activation Control](https://proceedings.neurips.cc/paper_files/paper/2024/file/1cb5b3d64bdf3c6642c8d9a8fbecd019-Paper-Conference.pdf) (as "General inference capability")**
> The model's broad ability to perform reasoning and apply knowledge across a wide range of general-purpose tasks, as opposed to specific trustworthiness-related behaviors.

**[Preference Optimization for Reasoning with Pseudo Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/31a57804448363bcab777f818f75f5b4-Paper-Conference.pdf) (as "Reasoning capabilities")**
> The broader latent capacity of an LLM to solve reasoning-oriented tasks across domains such as mathematics and programming.

**[DataGen: Unified Synthetic Dataset Generation via Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a01e69aa9c3c61fcb40ea378e71fc780-Paper-Conference.pdf) (as "Reasoning skills")**
> The latent capacity to solve problems that require multi-step inference, especially in math-oriented and other reasoning-heavy settings.

**[SR-LLM: Rethinking the Structured Representation in Large Language Model](https://aclanthology.org/2025.acl-long.172.pdf) (as "Inference capability")**
> The model's ability to generate accurate outputs by leveraging internalized knowledge of structured linguistic information during task execution.

**[Can Large Language Models Understand Internet Buzzwords Through User-Generated Content](https://aclanthology.org/2025.acl-long.632.pdf) (as "Inferential ability")**
> The latent capacity of an LLM to deduce the meaning of a previously unseen buzzword solely from contextual user-generated content, without relying on prior exposure or memorization.

**[Thinking LLMs: General Instruction Following with Thought Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25o/wu25o.pdf) (as "Thinking")**
> The latent ability of an LLM to generate internal reasoning or planning processes in natural language before producing a final response, enabling improved performance on complex tasks through implicit computation and self-reflection.

**[Language Mixing in Reasoning Language Models: Patterns, Impact, and Internal Causes](https://aclanthology.org/2025.emnlp-main.132.pdf) (as "Reasoning performance")**
> The latent capacity of a model to correctly solve complex reasoning tasks, inferred from accuracy across diverse problems and conditions.

**[Wasserstein Distances, Neuronal Entanglement, and Sparsity](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1c1624dd7d9fa75adacd7e93c40e6b2-Paper-Conference.pdf) (as "General reasoning")**
> Performing broad reasoning tasks that require inference across diverse domains rather than a single specialized skill.

**[AlchemistCoder: Harmonizing and Eliciting Code Capability by Hindsight Tuning on Multi-source Data](https://proceedings.neurips.cc/paper_files/paper/2024/file/040c816286b3844fd78f2124eec75f2e-Paper-Conference.pdf) (as "Comprehensive reasoning")**
> The general reasoning capacity reflected in performance on hard benchmark tasks requiring multi-step inference.

**[Dynamic Loss-Based Sample Reweighting for Improved Large Language Model Pretraining](https://proceedings.iclr.cc/paper_files/paper/2025/file/ded26b348d55953a4863d41540b7d5c4-Paper-Conference.pdf) (as "Few-shot reasoning")**
> The observable behavior of performing reasoning tasks when provided with only a small number of examples (e.g., 5-shot) in the prompt.

## Relationships

### Reasoning →
- **GSM8K** (measurements) — *measured_by*
  > We leverage the Grade School Math dataset (GSM) (Cobbe et al., 2021) to assess the reasoning proficiency of models. (Section 4.1)
  - [Seeking Neural Nuggets: Knowledge Transfer in Large Language Models from a Parametric Perspective](https://proceedings.iclr.cc/paper_files/paper/2024/file/6d6dc5c9ad19816d745535d352dc4295-Paper-Conference.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > One such benchmark is Bigbench-hard (Srivastava et al., 2022), which includes multiple reasoning tasks consisting of multiple-choice and direct-generation tasks. (Section 4.3)
  - [Language Model Self-improvement by Reinforcement Learning Contemplation](https://proceedings.iclr.cc/paper_files/paper/2024/file/d5a655b8b373737b4f2aea8f78e5e754-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > We select 24 datasets from MMLU (Hendrycks et al., 2021), Big-Bench-Hard (Suzgun et al., 2022), and MBPP (Austin et al., 2021) to evaluate the knowledge and reasoning abilities of LLMs in diverse domains. (p. 3)
  - [Bias Runs Deep: Implicit Reasoning Biases in Persona-Assigned LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/5e1a87dbb7e954b8d9d6c91f6db771eb-Paper-Conference.pdf)
- **PIQA** (measurements) — *measured_by*
  > For reasoning abilities, we use ARC-Easy, ARC-Challenge [42], SIQA [43], PIQA [44], WinoGrande [45], and QUAC [46] (all 0-shot).
  - [BAM! Just Like That: Simple and Efficient Parameter Upcycling for Mixture of Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/665bb142d4b9f55660cb89bb56a66fe1-Paper-Conference.pdf)
- **MATH** (measurements) — *measured_by*
  > We test SELF-DISCOVER on 25 challenging reasoning tasks including Big Bench-Hard (BBH) (Suzgun et al., 2022), Thinking for Doing (T4D) (Zhou et al., 2023) and MATH (Hendrycks et al., 2021). (Section 1)
  - [SELF-DISCOVER: Large Language Models Self-Compose Reasoning Structures](https://proceedings.neurips.cc/paper_files/paper/2024/file/e41efb03e20ca3c231940a3c6917ef6f-Paper-Conference.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > We evaluate the reasoning performance of quantized models using zero-shot tasks (e.g., ARC [4], HellaSwag [34], and MMLU [8]). (Section 4.2)
  - [Towards Next-Level Post-Training Quantization of Hyper-Scale Transformers](https://proceedings.neurips.cc/paper_files/paper/2024/file/ab6eba9a853087993addff937c8cec87-Paper-Conference.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > For reasoning abilities, we use ARC-Easy, ARC-Challenge [42], SIQA [43], PIQA [44], WinoGrande [45], and QUAC [46] (all 0-shot).
  - [BAM! Just Like That: Simple and Efficient Parameter Upcycling for Mixture of Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/665bb142d4b9f55660cb89bb56a66fe1-Paper-Conference.pdf)
- **WinoGrande** (measurements) — *measured_by*
  > For reasoning abilities, we use ARC-Easy, ARC-Challenge [42], SIQA [43], PIQA [44], WinoGrande [45], and QUAC [46] (all 0-shot).
  - [BAM! Just Like That: Simple and Efficient Parameter Upcycling for Mixture of Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/665bb142d4b9f55660cb89bb56a66fe1-Paper-Conference.pdf)
- **MATH-500** (measurements) — *measured_by*
  > We evaluate across 6 reasoning benchmarks used in the original papers of the above prompting strategies, including GSM8K (Cobbe et al., 2021), GSM-Hard (Gao et al., 2023), MATH-500 (Hendrycks et al., 2021b; Lightman et al., 2024), MMLU-high-school-biology, chemistry and physics (Hendrycks et al., 2021a). (Section 2.3)
  - [Rethinking the Role of Prompting Strategies in LLM Test-Time Scaling: A Perspective of Probability Theory](https://aclanthology.org/2025.acl-long.1356.pdf)
- **ARC** (measurements) — *measured_by*
  > We evaluate the reasoning performance of quantized models using zero-shot tasks (e.g., ARC [4], HellaSwag [34], and MMLU [8]). (Section 4.2)
  - [Towards Next-Level Post-Training Quantization of Hyper-Scale Transformers](https://proceedings.neurips.cc/paper_files/paper/2024/file/ab6eba9a853087993addff937c8cec87-Paper-Conference.pdf)
- **RewardBench** (measurements) — *measured_by*
  > RewardBench, which features a variety of prompts from categories such as Chat, Chat Hard, Safety, and Reasoning.
  - [UltraMedical: Building Specialized Generalists in Biomedicine](https://proceedings.neurips.cc/paper_files/paper/2024/file/2dfc26ce9039f00eee4aba0c54931e46-Paper-Datasets_and_Benchmarks_Track.pdf)
- **ARC-Easy** (measurements) — *measured_by*
  > For reasoning abilities, we use ARC-Easy, ARC-Challenge [42], SIQA [43], PIQA [44], WinoGrande [45], and QUAC [46] (all 0-shot).
  - [BAM! Just Like That: Simple and Efficient Parameter Upcycling for Mixture of Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/665bb142d4b9f55660cb89bb56a66fe1-Paper-Conference.pdf)
- **AIME 2024** (measurements) — *measured_by*
  > We focus on four representative reasoning benchmarks: MATH-500, AIME 2024, TheoremQA (Chen et al., 2023), and MMLU-Pro-1k (Wang et al., 2024a). (Section 2.5)
  - [Demystifying Long Chain-of-Thought Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ae/yang25ae.pdf)
- **GPQA** (measurements) — *measured_by*
  > To rigorously assess the capabilities of models in reasoning abilities across different domains, we utilize several widely used datasets, GSM8K [Cobbe et al., 2021], MATH [Hendrycks et al., 2021b], TheoremQA [Chen et al., 2023b], BIG-Bench Hard (BBH) [Suzgun et al., 2022], ARC-C [Clark et al., 2018], GPQA [Rein et al., 2023], MMLU-STEM [Hendrycks et al., 2021a]. (Section 3.2)
  - [MAmmoTH2: Scaling Instructions from the Web](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4ca07aa108036f80cbb5b82285fd4b1-Paper-Conference.pdf)
- **Generalization** (constructs) — *causes*
  > Few-shot reasoning allows LLMs to generalize their understanding to new tasks by leveraging a small set of similar examples. (Sec. 3.3)
  - [Verified Code Transpilation with LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/48bb60a0c0aebb4142bf314bd1a5c6a0-Paper-Conference.pdf)
- **Code generation** (behaviors tasks) — *causes*
  > A host of prompting techniques have shown how to leverage the In-Context Learning (ICL) abilities of LLMs to enhance a model's reasoning skills, and, as a result, the quality of generated programs.
  - [Generating Code World Models with Large Language Models Guided by Monte Carlo Tree Search](https://proceedings.neurips.cc/paper_files/paper/2024/file/6f479ea488e0908ac8b1b37b27fd134c-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > MT-bench consists of multi-turn conversations across various domains such as writing, reasoning, math, and coding. (Section 2.2)
  - [What Makes Good Data for Alignment? A Comprehensive Study of Automatic Data Selection in Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/6091f2bb355e960600f62566ac0e2862-Paper-Conference.pdf)
- **Interpretability and explainability** (constructs) — *causes*
  > Mindmap [74] provides more transparency on LLMs’ decision-making by enabling comprehension and reasoning over structured KG inputs. (Section 1)
  - [KnowGPT: Knowledge Graph based Prompting for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0b8705a611ed1ce19cdb759031078705-Paper-Conference.pdf)
- **GPQA-Diamond** (measurements) — *measured_by*
  > Reasoning Models, in which we perform SFT with Qwen-2.5 on s1K dataset (Muennighoff et al., 2025) and evaluated on GPQA Diamond (Rein et al., 2023) (Section 5.1).
  - [LIFT the Veil for the Truth: Principal Weights Emerge after Rank Reduction for Reasoning-Focused Supervised Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25ba/liu25ba.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > For our performance evaluation, we use the few-shot tasks from Language Model Evaluation Harness (Gao et al., 2021). We select these tasks such that they can measure various abilities of the models (e.g., reading comprehension, reasoning, etc.) (Sec. 3.1)
  - [ReLU Strikes Back: Exploiting Activation Sparsity in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/6cf669c222ad13f60d503736fb2bd15b-Paper-Conference.pdf)
- **HotpotQA** (measurements) — *measured_by*
  > HotPotQA [49] features natural, multi-hop questions, which challenge an agent’s ability to perform reasoning and utilize search tools.
  - [AGILE: A Novel Reinforcement Learning Framework of LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/097c514162ea7126d40671d23e12f51b-Paper-Conference.pdf)
- **MMMU** (measurements) — *measured_by*
  > For general reasoning, benchmarks like MathVista [31] and MMMU [32] assess models on tasks involving multiple-choice and free-form questions, with a focus on multimodal data.
  - [Benchmarking Generative Models on Computational Thinking Tests in Elementary Visual Programming](https://proceedings.neurips.cc/paper_files/paper/2024/file/6d5e00006b65fcc55c3c1798da821663-Paper-Datasets_and_Benchmarks_Track.pdf)
- **HumanEval** (measurements) — *measured_by*
  > HumanEval ... a coding task that requires complex reasoning and planning ability.
  - [SIRIUS : Contexual Sparisty with Correction for Efficient LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/2ae6b2bdf3a179e3e24129e2c54bd871-Paper-Conference.pdf)
- **BoolQ** (measurements) — *measured_by*
  > We evaluate Spectra Suite models using eight distinct common-sense and reasoning benchmarks consisting of tasks from logical and reasoning questions to grounded and physical commonsense tasks: Arc Easy, Arc Challenge (Clark et al., 2018), BoolQ (Clark et al., 2019), HellaSWAG (Zellers et al., 2019), WinoGrande (Sakaguchi et al., 2021), PIQA (Bisk et al., 2019), LAMBADA (Paperno et al., 2016), LogiQA (Liu et al., 2021), all under zero-shot settings. (Section 5)
  - [Surprising Effectiveness of pretraining Ternary  Language Model at Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/6499f26637f74f7c0fbfb46668434973-Paper-Conference.pdf)
- **OpenBookQA** (measurements) — *measured_by*
  > Seven reasoning datasets used in the experiments include OpenbookQA (Banerjee et al., 2020), WinoGrande (Sakaguchi et al., 2021) HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), MathQA (Amini et al., 2019), ARC-e, ARC-c (Clark et al., 2018). (Section 4.1)
  - [Basis Sharing: Cross-Layer Parameter Sharing for Large Language Model Compression](https://proceedings.iclr.cc/paper_files/paper/2025/file/238c98450b1d9e8055f94d22f303bb57-Paper-Conference.pdf)
- **StrategyQA** (measurements) — *measured_by*
  > We use MMLU Hendrycks et al. (2020), BigBench Hard (BBH) Srivastava et al. (2022), and 4 reasoning benchmarks: GSM8K Cobbe et al. (2021), SVAMP Patel et al. (2021), ASDIV Miao et al. (2020), and StrategyQA Geva et al. (2021) (Section 3.1).
  - [Mixture-of-Experts Meets Instruction Tuning: A Winning Combination for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/5222867be1bde4fb2d8ba018c03b3be8-Paper-Conference.pdf)
- **MathVista** (measurements) — *measured_by*
  > For general reasoning, benchmarks like MathVista [31] and MMMU [32] assess models on tasks involving multiple-choice and free-form questions, with a focus on multimodal data.
  - [Benchmarking Generative Models on Computational Thinking Tests in Elementary Visual Programming](https://proceedings.neurips.cc/paper_files/paper/2024/file/6d5e00006b65fcc55c3c1798da821663-Paper-Datasets_and_Benchmarks_Track.pdf)
- **LogiQA** (measurements) — *measured_by*
  > We evaluate Spectra Suite models using eight distinct common-sense and reasoning benchmarks consisting of tasks from logical and reasoning questions to grounded and physical commonsense tasks: Arc Easy, Arc Challenge (Clark et al., 2018), BoolQ (Clark et al., 2019), HellaSWAG (Zellers et al., 2019), WinoGrande (Sakaguchi et al., 2021), PIQA (Bisk et al., 2019), LAMBADA (Paperno et al., 2016), LogiQA (Liu et al., 2021), all under zero-shot settings. (Section 5)
  - [Surprising Effectiveness of pretraining Ternary  Language Model at Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/6499f26637f74f7c0fbfb46668434973-Paper-Conference.pdf)
- **Game of 24** (measurements) — *measured_by*
  > We study Game of 24 (Yao et al., 2023), a reasoning problem where the transition dynamics and rules are well-defined and readily available.
  - [Learning to Search from Demonstration Sequences](https://proceedings.iclr.cc/paper_files/paper/2025/file/cdf80d651420b47da80f789f2631b1b5-Paper-Conference.pdf)
- **Robustness** (constructs) — *causes*
  > A recent advancement in enhancing robustness is ICL with explanations (X-ICL), which improves prediction reliability by guiding LLMs to understand and articulate the reasoning behind correct labels. (Abstract)
  - [Exploring Explanations Improves the Robustness of In-Context Learning](https://aclanthology.org/2025.acl-long.1155.pdf)
- **ARC-AGI** (measurements) — *measured_by*
  > We demonstrate SOAR’s effectiveness on the Abstraction and Reasoning Corpus (ARC), a program synthesis benchmark specifically designed to challenge AI models’ core reasoning capabilities (Chollet, 2019).
  - [Self-Improving Language Models for Evolutionary Program Synthesis: A Case Study on ARC-AGI](https://raw.githubusercontent.com/mlresearch/v267/main/assets/pourcel25a/pourcel25a.pdf)
- **Planning** (constructs) — *causes*
  > Crucially, the agent needs to perform multi-step reasoning between such information and the current state of the environment to figure out a plan of action
  - [Generating Code World Models with Large Language Models Guided by Monte Carlo Tree Search](https://proceedings.neurips.cc/paper_files/paper/2024/file/6f479ea488e0908ac8b1b37b27fd134c-Paper-Conference.pdf)
- **MBPP** (measurements) — *measured_by*
  > We select 24 datasets from MMLU (Hendrycks et al., 2021), Big-Bench-Hard (Suzgun et al., 2022), and MBPP (Austin et al., 2021) to evaluate the knowledge and reasoning abilities of LLMs in diverse domains. (p. 3)
  - [Bias Runs Deep: Implicit Reasoning Biases in Persona-Assigned LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/5e1a87dbb7e954b8d9d6c91f6db771eb-Paper-Conference.pdf)
- **SVAMP** (measurements) — *measured_by*
  > We use MMLU Hendrycks et al. (2020), BigBench Hard (BBH) Srivastava et al. (2022), and 4 reasoning benchmarks: GSM8K Cobbe et al. (2021), SVAMP Patel et al. (2021), ASDIV Miao et al. (2020), and StrategyQA Geva et al. (2021) (Section 3.1).
  - [Mixture-of-Experts Meets Instruction Tuning: A Winning Combination for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/5222867be1bde4fb2d8ba018c03b3be8-Paper-Conference.pdf)
- **Action selection** (behaviors tasks) — *causes*
  > In the Reasoning module, we utilize the experiences derived from the Memory module and the common-sense knowledge of the LLM to perform decision-making for the current traffic scenario. (Section 3.3)
  - [DiLu: A Knowledge-Driven Approach to Autonomous Driving with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/93c936b9e492def9c00782cab79dbc6d-Paper-Conference.pdf)
- **GSM-Hard** (measurements) — *measured_by*
  > Extensive experiments across five SLMs demonstrate rStar can effectively solve diverse reasoning problems, including GSM8K, GSM-Hard, MATH, SVAMP, and StrategyQA.
  - [Mutual Reasoning Makes Smaller LLMs Stronger Problem-Solver](https://proceedings.iclr.cc/paper_files/paper/2025/file/35514d533cdc278a7780daf0dbe7d0b7-Paper-Conference.pdf)
- **DROP** (measurements) — *measured_by*
  > Moreover, MINIMA achieves superior performance over baselines with respect to ... reasoning (DROP, BBH, GSM8K)...
  - [Towards the Law of Capacity Gap in Distilling Language Models](https://aclanthology.org/2025.acl-long.1097.pdf)
- **MMStar** (measurements) — *measured_by*
  > MMStar and MMBench (Chen et al., 2024a; Liu et al., 2025) provide comprehensive evaluations by categorizing VLM tasks into two primary domains: perception and reasoning. (Section 5.1)
  - [SECOND: Mitigating Perceptual Hallucination in Vision-Language Models via Selective and Contrastive Decoding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/park25c/park25c.pdf)
- **GAIA** (measurements) — *measured_by*
  > GAIA proposes real-world questions that require a set of fundamental abilities such as reasoning, multi-modality handling, web browsing, and generally tool-use proficiency. (ABSTRACT)
  - [GAIA: a benchmark for General AI Assistants](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf)
- **GQA** (measurements) — *measured_by*
  > The GQA dataset does not rely on external knowledge and is used to evaluate the reasoning ability of LVLMs (Section 5.2).
  - [SearchLVLMs: A Plug-and-Play Framework for Augmenting Large Vision-Language Models by Searching Up-to-Date Internet Knowledge](https://proceedings.neurips.cc/paper_files/paper/2024/file/76954b4a44e158e738b4c64494977c6a-Paper-Conference.pdf)
- **MMLU-Pro** (measurements) — *measured_by*
  > In this paper, we introduce MMLU-Pro: a comprehensive benchmark designed for proficient-level multi-discipline language understanding and reasoning. (Section 1).
  - [MMLU-Pro: A More Robust and Challenging Multi-Task Language Understanding Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/ad236edc564f3e3156e1b2feafb99a24-Paper-Datasets_and_Benchmarks_Track.pdf)
- **PrOntoQA** (measurements) — *measured_by*
  > Reasoning tasks: PrOntoQA. PrOntoQA (Saparov and He, 2023) is a synthetic multi-step reasoning dataset where each data point assigns hierarchical relationships among objects and requires the model to determine whether a multi-step reasoning chain is correct. (Section 6)
  - [Initialization is Critical to Whether Transformers Fit Composite Functions by Reasoning or Memorizing](https://proceedings.neurips.cc/paper_files/paper/2024/file/19c145aaad40927c51f4d10eaa339c20-Paper-Conference.pdf)
- **MGSM** (measurements) — *measured_by*
  > To comprehensively understand how LLMs work with different abilities, we employ four kinds of tasks including MGSM (Shi et al., 2022) for reasoning task... (Section 3.2)
  - [How do Large Language Models Handle Multilingualism?](https://proceedings.neurips.cc/paper_files/paper/2024/file/1bd359b32ab8b2a6bbafa1ed2856cf40-Paper-Conference.pdf)
- **CommonsenseQA** (measurements) — *measured_by*
  > Our evaluations on standard reasoning datasets (GSM8K, CSQA, and LLC) with various LLMs and prompts show that TREACLE enables cost savings of up to 85% compared to baselines, while maintaining high accuracy. (Abstract)
  - [Efficient Contextual LLM Cascades through Budget-Constrained Policy Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/a6deba3b2408af45b3f9994c2152b862-Paper-Conference.pdf)
- **TheoremQA** (measurements) — *measured_by*
  > To rigorously assess the capabilities of models in reasoning abilities across different domains, we utilize several widely used datasets, GSM8K [Cobbe et al., 2021], MATH [Hendrycks et al., 2021b], TheoremQA [Chen et al., 2023b], BIG-Bench Hard (BBH) [Suzgun et al., 2022], ARC-C [Clark et al., 2018], GPQA [Rein et al., 2023], MMLU-STEM [Hendrycks et al., 2021a]. (Section 3.2)
  - [MAmmoTH2: Scaling Instructions from the Web](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4ca07aa108036f80cbb5b82285fd4b1-Paper-Conference.pdf)
- **MMLU-STEM** (measurements) — *measured_by*
  > To rigorously assess the capabilities of models in reasoning abilities across different domains, we utilize several widely used datasets, GSM8K [Cobbe et al., 2021], MATH [Hendrycks et al., 2021b], TheoremQA [Chen et al., 2023b], BIG-Bench Hard (BBH) [Suzgun et al., 2022], ARC-C [Clark et al., 2018], GPQA [Rein et al., 2023], MMLU-STEM [Hendrycks et al., 2021a]. (Section 3.2)
  - [MAmmoTH2: Scaling Instructions from the Web](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4ca07aa108036f80cbb5b82285fd4b1-Paper-Conference.pdf)
- **LAMBADA** (measurements) — *measured_by*
  > We evaluate Spectra Suite models using eight distinct common-sense and reasoning benchmarks consisting of tasks from logical and reasoning questions to grounded and physical commonsense tasks: Arc Easy, Arc Challenge (Clark et al., 2018), BoolQ (Clark et al., 2019), HellaSWAG (Zellers et al., 2019), WinoGrande (Sakaguchi et al., 2021), PIQA (Bisk et al., 2019), LAMBADA (Paperno et al., 2016), LogiQA (Liu et al., 2021), all under zero-shot settings. (Section 5)
  - [Surprising Effectiveness of pretraining Ternary  Language Model at Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/6499f26637f74f7c0fbfb46668434973-Paper-Conference.pdf)
- **LiveBench** (measurements) — *measured_by*
  > LiveBench... contains a wide variety of challenging tasks, spanning math, coding, reasoning, language, instruction following, and data analysis.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > For standard contexts, we utilize generation tasks from LM-Eval (Gao et al., 2021), assessing model performance across commonsense and math reasoning on CoQA (Exact Match (EM) Accuracy) (Reddy et al., 2019), TruthfulQA (BLEU score) (Lin et al., 2022), and GSM8K (Exact Match (EM) Accuracy) Cobbe et al. (2021b). (Section 5.1)
  - [$\text{D}_{2}\text{O}$: Dynamic Discriminative Operations for Efficient Long-Context Inference of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d862f7f5445255090de13b825b880d59-Paper-Conference.pdf)
- **MMLU-Redux** (measurements) — *measured_by*
  > Furthermore, we also evaluate all the models on four logical reasoning benchmarks to verify the impact of these alignment methods on model’s reasoning abilities, including: MMLU-redux (Gema et al., 2024) (Language)...
  - [As Simple as Fine-tuning: LLM Alignment via Bidirectional Negative Feedback Loss](https://proceedings.iclr.cc/paper_files/paper/2025/file/4bc4e9ecd5ae4a75048dc216a770cba1-Paper-Conference.pdf)
- **MathQA** (measurements) — *measured_by*
  > Seven reasoning datasets used in the experiments include OpenbookQA (Banerjee et al., 2020), WinoGrande (Sakaguchi et al., 2021) HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), MathQA (Amini et al., 2019), ARC-e, ARC-c (Clark et al., 2018). (Section 4.1)
  - [Basis Sharing: Cross-Layer Parameter Sharing for Large Language Model Compression](https://proceedings.iclr.cc/paper_files/paper/2025/file/238c98450b1d9e8055f94d22f303bb57-Paper-Conference.pdf)
- **MM-Vet** (measurements) — *measured_by*
  > To probe the visual understanding and reasoning ability of our LLaVA-1.5-LLaMA3-8B model, we opt for two comprehensive multi-modal evaluation benchmarks, MMMU (Yue et al., 2024) and MM-Vet (Yu et al., 2024).
  - [What If We Recaption Billions of Web Images with LLaMA-3?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25ch/li25ch.pdf)
- **Tool use** (behaviors tasks) — *causes*
  > The LLM must use reasoning to deduce the suitable tools to address the given tasks. (Section 1)
  - [GTA: A Benchmark for General Tool Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a75ee6d4b2eb0b777f549a32a5a5c28-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Coding ability** (constructs) — *causes*
  > This limitation stems from the restricted reasoning abilities of single LLMs... they struggle to tackle more complex coding tasks.
  - [Self-Evolving Multi-Agent Collaboration Networks for Software Development](https://proceedings.iclr.cc/paper_files/paper/2025/file/39af4f2f9399122a14ccf95e2d2e7122-Paper-Conference.pdf)
- **Expressive power** (constructs) — *causes*
  > We theoretically show that the loss of expressivity of LLMs under constrained decoding arises because the output grammar G is too restrictive to accommodate the intermediate reasoning steps required to compute the answer. (Section 1)
  - [CRANE: Reasoning with constrained LLM generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/banerjee25a/banerjee25a.pdf)
- **OlympiadBench** (measurements) — *measured_by*
  > We evaluate our method on a diverse set of reasoning tasks, including GSM8K (Cobbe et al., 2021b), MATH500 (Hendrycks et al., 2021), MMLU STEM (Hendrycks et al., 2020), OlympiadBench (He et al., 2024), GaoKao-2023-En (Liao et al., 2024), GPQA (Rein et al., 2023), and Minerva Math (Lewkowycz et al., 2022). (Section 3)
  - [Reward-Guided Speculative Decoding for Efficient LLM Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liao25f/liao25f.pdf)
- **Open LLM Leaderboard** (measurements) — *measured_by*
  > Reasoning ability is measured via the Open LLM Leaderboard (Beeching et al., 2023) using the Language Model Evaluation Harness (Gao et al., 2023). (Section 3.2)
  - [MAIN: Mutual Alignment Is Necessary for instruction tuning](https://aclanthology.org/2025.emnlp-main.644.pdf)
- **AIME** (measurements) — *measured_by*
  > We also extend experiments on two more challenging reasoning benchmarks, GPQA (Rein et al., 2024) and AIME (Mathematical Association of America, 2024), further verifying the generality of our findings and methods. (Section 8)
  - [Rethinking the Role of Prompting Strategies in LLM Test-Time Scaling: A Perspective of Probability Theory](https://aclanthology.org/2025.acl-long.1356.pdf)
- **ASDiv** (measurements) — *measured_by*
  > We use MMLU Hendrycks et al. (2020), BigBench Hard (BBH) Srivastava et al. (2022), and 4 reasoning benchmarks: GSM8K Cobbe et al. (2021), SVAMP Patel et al. (2021), ASDIV Miao et al. (2020), and StrategyQA Geva et al. (2021) (Section 3.1).
  - [Mixture-of-Experts Meets Instruction Tuning: A Winning Combination for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/5222867be1bde4fb2d8ba018c03b3be8-Paper-Conference.pdf)
- **SIQA** (measurements) — *measured_by*
  > For reasoning abilities, we use ARC-Easy, ARC-Challenge [42], SIQA [43], PIQA [44], WinoGrande [45], and QUAC [46] (all 0-shot).
  - [BAM! Just Like That: Simple and Efficient Parameter Upcycling for Mixture of Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/665bb142d4b9f55660cb89bb56a66fe1-Paper-Conference.pdf)
- **CMMLU** (measurements) — *measured_by*
  > We use zero-shot or few-shot learning to test the reasoning ability across five benchmarks, including MMLU (Hendrycks et al., 2021), CMMLU (Li et al., 2024a), Truthful-QA (Lin et al., 2021), GSM-PLUS (Li et al., 2024b), and GSM8K (Cobbe et al., 2021). (Section 4.3.1)
  - [Weak-to-Strong Preference Optimization: Stealing Reward from Weak Aligned Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/5beb3a846137dd6524f2da17c97d9426-Paper-Conference.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > The reasoning tasks include MathQA (Amini et al., 2019), Massive Multitask Language Understanding (MMLU) (Hendrycks et al., 2020), Physical Interaction: Question Answering (PIQA) (Bisk et al., 2020), LogiQA (Liu et al., 2020), TriviaQA (Joshi et al., 2017) and GSM8K (Cobbe et al., 2021). (Section 5.3)
  - [Disentangling Biased Knowledge from Reasoning in Large Language Models via Machine Unlearning](https://aclanthology.org/2025.acl-long.305.pdf)
- **Minerva Math** (measurements) — *measured_by*
  > We evaluate our method on a diverse set of reasoning tasks, including GSM8K (Cobbe et al., 2021b), MATH500 (Hendrycks et al., 2021), MMLU STEM (Hendrycks et al., 2020), OlympiadBench (He et al., 2024), GaoKao-2023-En (Liao et al., 2024), GPQA (Rein et al., 2023), and Minerva Math (Lewkowycz et al., 2022). (Section 3)
  - [Reward-Guided Speculative Decoding for Efficient LLM Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liao25f/liao25f.pdf)
- **AgentBench** (measurements) — *measured_by*
  > We present AGENTBENCH, a multi-dimensional benchmark that consists of 8 distinct environments to assess LLM-as-Agent’s reasoning and decision-making abilities.
  - [AgentBench: Evaluating LLMs as Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e9df36b21ff4ee211a8b71ee8b7e9f57-Paper-Conference.pdf)
- **WebQSP** (measurements) — *measured_by*
  > We evaluate the reasoning ability of RoG on two benchmark KGQA datasets: WebQuestionSP (WebQSP) (Yih et al., 2016) and Complex WebQuestions (CWQ) (Talmor & Berant, 2018) (Section 5.1)
  - [Reasoning on Graphs: Faithful and Interpretable Large Language Model Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/3e2aeb66481dd63a32421bf032b70384-Paper-Conference.pdf)
- **CWQ** (measurements) — *measured_by*
  > We evaluate the reasoning ability of RoG on two benchmark KGQA datasets: WebQuestionSP (WebQSP) (Yih et al., 2016) and Complex WebQuestions (CWQ) (Talmor & Berant, 2018) (Section 5.1)
  - [Reasoning on Graphs: Faithful and Interpretable Large Language Model Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/3e2aeb66481dd63a32421bf032b70384-Paper-Conference.pdf)
- **Linear probing** (measurements) — *measured_by*
  > To discern encoded information crucial for reasoning, we utilize linear probing (Alain and Bengio, 2016; Belinkov, 2022) to train classifiers on the activations with respect to the ground truth labels, aiming to differentiate between true and false propositions. (Section 2.2)
  - [Calibrating Reasoning in Language Models with Internal Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/d037fd021c9aace128b8ce25001cdb6c-Paper-Conference.pdf)
- **GTA** (measurements) — *measured_by*
  > Fine-grained metrics are designed for tool use, unveiling tool-augmented LLMs’ reasoning and planning capabilities in real-world scenarios. (Section 1)
  - [GTA: A Benchmark for General Tool Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a75ee6d4b2eb0b777f549a32a5a5c28-Paper-Datasets_and_Benchmarks_Track.pdf)
- **QuAC** (measurements) — *measured_by*
  > For reasoning abilities, we use ARC-Easy, ARC-Challenge [42], SIQA [43], PIQA [44], WinoGrande [45], and QUAC [46] (all 0-shot).
  - [BAM! Just Like That: Simple and Efficient Parameter Upcycling for Mixture of Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/665bb142d4b9f55660cb89bb56a66fe1-Paper-Conference.pdf)
- **Multilingual reasoning** (constructs) — *causes*
  > utilize the built-in reasoning and language understanding capabilities of LLMs... to boost the multilingual reasoning effects.
  - [MindMerger: Efficiently Boosting LLM Reasoning in non-English Languages](https://proceedings.neurips.cc/paper_files/paper/2024/file/3bf80b34f731313b8292f4578e820c90-Paper-Conference.pdf)
- **Attribute generation** (behaviors tasks) — *causes*
  > To extract these attributes, we employ an LLM to reason about the target object’s characteristics. (Section 3.2)
  - [GAMap: Zero-Shot Object Goal Navigation with Multi-Scale Geometric-Affordance Guidance](https://proceedings.neurips.cc/paper_files/paper/2024/file/459d93dad139eb084c365d40a57eada3-Paper-Conference.pdf)
- **MedQA** (measurements) — *measured_by*
  > both MMLU and MedQA are more oriented toward reasoning rather than pure factual recall, which poses bigger challenges for both the retriever and the LM. (Section 4.2)
  - [Scaling Retrieval-Based Language Models with a Trillion-Token Datastore](https://proceedings.neurips.cc/paper_files/paper/2024/file/a5d8aba27dfef4e849e8cb03fb87a954-Paper-Conference.pdf)
- **Last letter concatenation** (measurements) — *measured_by*
  > Our evaluations on standard reasoning datasets (GSM8K, CSQA, and LLC) with various LLMs and prompts show that TREACLE enables cost savings of up to 85% compared to baselines, while maintaining high accuracy. (Abstract)
  - [Efficient Contextual LLM Cascades through Budget-Constrained Policy Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/a6deba3b2408af45b3f9994c2152b862-Paper-Conference.pdf)
- **SEED-Bench** (measurements) — *measured_by*
  > Reasoning is benchmarked using GQA [15], MathVista [29], Mementos [43], SEED-Bench [22], and RealWorldQA [13] in VHELM. (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **RealWorldQA** (measurements) — *measured_by*
  > Reasoning is benchmarked using GQA [15], MathVista [29], Mementos [43], SEED-Bench [22], and RealWorldQA [13] in VHELM. (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **QNLI** (measurements) — *measured_by*
  > For inference ability, we choose six datasets including Hellaswag [48], PIQA [1], WinoGrande [32], QNLI [31], MNLI [44], and WikiText2 [28] for evaluation.
  - [LLMCBench: Benchmarking Large Language Model Compression for Efficient Deployment](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f4cc62d0632911c63163ea3d9ec19bd-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MNLI** (measurements) — *measured_by*
  > For inference ability, we choose six datasets including Hellaswag [48], PIQA [1], WinoGrande [32], QNLI [31], MNLI [44], and WikiText2 [28] for evaluation.
  - [LLMCBench: Benchmarking Large Language Model Compression for Efficient Deployment](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f4cc62d0632911c63163ea3d9ec19bd-Paper-Datasets_and_Benchmarks_Track.pdf)
- **WikiText-2** (measurements) — *measured_by*
  > For inference ability, we choose six datasets including Hellaswag [48], PIQA [1], WinoGrande [32], QNLI [31], MNLI [44], and WikiText2 [28] for evaluation.
  - [LLMCBench: Benchmarking Large Language Model Compression for Efficient Deployment](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f4cc62d0632911c63163ea3d9ec19bd-Paper-Datasets_and_Benchmarks_Track.pdf)
- **2WikiMultiHopQA** (measurements) — *measured_by*
  > “Experiments across three complex question-answering datasets reveal that ASSISTRAG exhibits superior reasoning capabilities” and the datasets include “2WikiMultiHopQA [35]”
  - [Boosting the Potential of Large Language Models with an Intelligent Information Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/28d38c036365420f61ce03300418e44a-Paper-Conference.pdf)
- **Self-improvement** (constructs) — *causes*
  > We believe this result indicates that self-improvement requires a minimal level of instruction following and reasoning capabilities, which is not present in these small models. (Section 4.1)
  - [Mind the Gap: Examining the Self-Improvement Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/63943ee9fe347f3d95892cf87d9a42e6-Paper-Conference.pdf)
- **Trustworthiness** (constructs) — *causes*
  > our framework leverages the reasoning capabilities of LLMs, enhancing the trustworthiness of clinical predictions. (Abstract)
  - [Reasoning-Enhanced Healthcare Predictions with Knowledge Graph Community Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/cb5a3b4589c1a16f14740396625cbfc8-Paper-Conference.pdf)
- **JudgeBench** (measurements) — *measured_by*
  > we introduce JudgeBench, a benchmark designed to evaluate LLM-based judges on difficult response pairs that require advanced reasoning abilities. (Section 1)
  - [JudgeBench: A Benchmark for Evaluating LLM-Based Judges](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e720fce64f91114c49cfd640d821da3-Paper-Conference.pdf)
- **Disambiguation ability** (constructs) — *causes*
  > Reasoning and reflection are crucial for the model to correctly understand ambiguous instructions. (Table 5)
  - [Visual-O1: Understanding Ambiguous Instructions via Multi-modal Multi-turn Chain-of-thoughts Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a3769fddee1b20552d2490c4ff18b136-Paper-Conference.pdf)
- **Action generation** (behaviors tasks) — *causes*
  > For vision-based agents, completing a complex GUI task typically involves several steps, each requiring the model to: (1) Perceive and understand... (2) Reason and plan... (3) Execute: perform the desired action on the target GUI element.
  - [Grounding Multimodal Large Language Model in GUI World](https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf)
- **CoQA** (measurements) — *measured_by*
  > For standard contexts, we utilize generation tasks from LM-Eval (Gao et al., 2021), assessing model performance across commonsense and math reasoning on CoQA (Exact Match (EM) Accuracy) (Reddy et al., 2019)... (Section 5.1)
  - [$\text{D}_{2}\text{O}$: Dynamic Discriminative Operations for Efficient Long-Context Inference of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d862f7f5445255090de13b825b880d59-Paper-Conference.pdf)
- **LogiQA 2.0** (measurements) — *measured_by*
  > To assess generalization beyond the pretraining distribution, we evaluate models on a series of diverse reasoning tasks in a 5-shot setting, including... LogiQA 2... (Section 6.1)
  - [Dynamic Loss-Based Sample Reweighting for Improved Large Language Model Pretraining](https://proceedings.iclr.cc/paper_files/paper/2025/file/ded26b348d55953a4863d41540b7d5c4-Paper-Conference.pdf)
- **SciQ** (measurements) — *measured_by*
  > To assess generalization beyond the pretraining distribution, we evaluate models on a series of diverse reasoning tasks in a 5-shot setting, including... SciQ... (Section 6.1)
  - [Dynamic Loss-Based Sample Reweighting for Improved Large Language Model Pretraining](https://proceedings.iclr.cc/paper_files/paper/2025/file/ded26b348d55953a4863d41540b7d5c4-Paper-Conference.pdf)
- **MME-RealWorld** (measurements) — *measured_by*
  > Our benchmark contains 5 real-world domains, covering 43 perception and reasoning subtasks. (Figure 1)
  - [MME-RealWorld: Could Your Multimodal LLM Challenge High-Resolution Real-World Scenarios that are Difficult for Humans?](https://proceedings.iclr.cc/paper_files/paper/2025/file/df29d63af05cb91d705cf06ba5945b9d-Paper-Conference.pdf)
- **Genetic perturbation experiment design** (behaviors tasks) — *causes*
  > BioDiscoveryAgent utilizes its vast biological knowledge along with the ability to reason over insights from previous experimental results to offer an accessible and interpretable method for designing genetic perturbation experiments.
  - [BioDiscoveryAgent: An AI Agent for Designing Genetic Perturbation Experiments](https://proceedings.iclr.cc/paper_files/paper/2025/file/4252dc94531833029000f85dc5fac792-Paper-Conference.pdf)
- **CRUXEval** (measurements) — *measured_by*
  > Furthermore, we also evaluate all the models on four logical reasoning benchmarks to verify the impact of these alignment methods on model’s reasoning abilities, including: ... CRUX (Gu et al., 2024) (Code)...
  - [As Simple as Fine-tuning: LLM Alignment via Bidirectional Negative Feedback Loss](https://proceedings.iclr.cc/paper_files/paper/2025/file/4bc4e9ecd5ae4a75048dc216a770cba1-Paper-Conference.pdf)
- **FOLIO** (measurements) — *measured_by*
  > we use GSM8K (Cobbe et al., 2021), Big-Bench-Hard (BBH) (Suzgun et al., 2022), and FOLIO (Han et al., 2022) benchmark datasets for diverse reasoning tasks (Section 5.1)
  - [GReaTer: Gradients Over Reasoning Makes Smaller Language Models Strong Prompt Optimizers](https://proceedings.iclr.cc/paper_files/paper/2025/file/18a42aad2fa8aa871e2ee20d425c208d-Paper-Conference.pdf)
- **ARITHMETIC context-sensitivity dataset** (measurements) — *measured_by*
  > We evaluate our method and baselines on three language reasoning tasks. Arithmetic. consists of 1,000 generated arithmetic problems in the form a + b · c + d −e · f. (Section 3.1)
  - [Multiagent Finetuning: Self Improvement with Diverse Reasoning Chains](https://proceedings.iclr.cc/paper_files/paper/2025/file/1d50221b03ced7152d8750c9d1e66cba-Paper-Conference.pdf)
- **Self-consistency** (measurements) — *measured_by*
  > In 'Self-Consistency' ... we use the same prompt but generate 15 responses ... then select the final answer based on majority voting.
  - [ReGenesis: LLMs can Grow into Reasoning Generalists via Self-Improvement](https://proceedings.iclr.cc/paper_files/paper/2025/file/9c77f2ce42151b2c2e26d2cf47f99564-Paper-Conference.pdf)
- **MMAU** (measurements) — *measured_by*
  > “It includes information extraction1 and reasoning 2 questions”
  - [MMAU: A Massive Multi-Task Audio Understanding and Reasoning Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/d36f208919582785db965fe648b9fe59-Paper-Conference.pdf)
- **Video question answering** (behaviors tasks) — *causes*
  > In this work, we introduce ReasVQA (Reasoning-enhanced Video Question Answering), a novel approach that leverages reasoning processes generated by Multimodal Large Language Models (MLLMs) to improve the performance of VideoQA models.
  - [ReasVQA: Advancing VideoQA with Imperfect Reasoning Process](https://aclanthology.org/2025.naacl-long.82.pdf)
- **Video understanding** (constructs) — *causes*
  > The results above demonstrate the effectiveness of our approach, particularly in leveraging reasoning processes to enhance video understanding.
  - [ReasVQA: Advancing VideoQA with Imperfect Reasoning Process](https://aclanthology.org/2025.naacl-long.82.pdf)
- **ToolBench** (measurements) — *measured_by*
  > ToolBench (Qin et al., 2024) specifically evaluates multi-turn reasoning and tool-usage abilities
  - [xLAM: A Family of Large Action Models to Empower AI Agent Systems](https://aclanthology.org/2025.naacl-long.578.pdf)
- **Fact checking** (behaviors tasks) — *causes*
  > The model then performs reasoning over this combined information to predict the label Yp of the claim and generates a human-readable explanation Ye. (Section 3.4)
  - [IMRRF: Integrating Multi-Source Retrieval and Redundancy Filtering for LLM-based Fake News Detection](https://aclanthology.org/2025.naacl-long.461.pdf)
- **Prompt engineering** (behaviors tasks) — *causes*
  > By generating a sequence of reasoning before the final answer, CoT has succeeded in aiding LLMs to solve reasoning-heavy tasks.
  - [KMMLU: Measuring Massive Multitask Language Understanding in Korean](https://aclanthology.org/2025.naacl-long.206.pdf)
- **RACE** (measurements) — *measured_by*
  > We also select several reasoning benchmarks, i.e., PIQA (Bisk et al., 2020), ARC (Clark et al., 2018), HellaSwag (Zellers et al., 2019), Winogrande (Sakaguchi et al., 2021), Race (Lai et al., 2017) and LAMBADA (Paperno et al., 2016), using the open-sourced toolkit lm-evaluation-harness (Gao et al., 2023). (Section 4.1)
  - [PTQ1.61: Push the Real Limit of Extremely Low-Bit Post-Training Quantization Methods for Large Language Models](https://aclanthology.org/2025.acl-long.225.pdf)
- **ReDial** (measurements) — *measured_by*
  > We introduce ReDial (Reasoning with Dialect Queries), the first high-quality, end-to-end human-annotated SE-AAVE parallel dataset for reasoning tasks (Section 2).
  - [Assessing Dialect Fairness and Robustness of Large Language Models in Reasoning Tasks](https://aclanthology.org/2025.acl-long.317.pdf)
- **Chatbot Arena** (measurements) — *measured_by*
  > In contrast, ChatbotArena offers a broader set of real-world LLM use cases spanning diverse topics including language understanding, creative writing, reasoning, logic, and science. (Section 3.1)
  - [SkillVerse : Assessing and Enhancing LLMs with Tree Evaluation](https://aclanthology.org/2025.acl-long.437.pdf)
- **MMBench** (measurements) — *measured_by*
  > MMStar and MMBench (Chen et al., 2024a; Liu et al., 2025) provide comprehensive evaluations by categorizing VLM tasks into two primary domains: perception and reasoning. (Section 5.1)
  - [SECOND: Mitigating Perceptual Hallucination in Vision-Language Models via Selective and Contrastive Decoding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/park25c/park25c.pdf)
- **MixEval** (measurements) — *measured_by*
  > For our analysis, we look at seven datasets spanning instruction-following, reasoning, mathematics, and coding: MT-Bench (Zheng et al., 2023), AlpacaEval 2.0 (Li et al., 2023), Arena Hard Auto (Li et al., 2024b), MixEval (Ni et al., 2024), MixEval-Hard, MATH (Hendrycks et al., 2021), and CodeContests (Li et al., 2022). (Section 3.2)
  - [An Architecture Search Framework for Inference-Time Techniques](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saad-falcon25a/saad-falcon25a.pdf)
- **MixEval-Hard** (measurements) — *measured_by*
  > For our analysis, we look at seven datasets spanning instruction-following, reasoning, mathematics, and coding: MT-Bench (Zheng et al., 2023), AlpacaEval 2.0 (Li et al., 2023), Arena Hard Auto (Li et al., 2024b), MixEval (Ni et al., 2024), MixEval-Hard, MATH (Hendrycks et al., 2021), and CodeContests (Li et al., 2022). (Section 3.2)
  - [An Architecture Search Framework for Inference-Time Techniques](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saad-falcon25a/saad-falcon25a.pdf)
- **ScienceQA** (measurements) — *measured_by*
  > To validate the effectiveness of our proposed method, we conduct extensive experiments across multiple reasoning VQA datasets, including ScienceQA (Lu et al., 2022), MMMU (Yue et al., 2024), and MathV (Wang et al., 2024a). (Section 1)
  - [Re-ranking Reasoning Context with Tree Search Makes Large Vision-Language Models Stronger](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25at/yang25at.pdf)
- **NExT-QA** (measurements) — *measured_by*
  > "video-SALMONN-o1 is also evaluated on Video-MME ... and NExT-QA ... benchmarks with challenging reasoning questions"
  - [video-SALMONN-o1: Reasoning-enhanced Audio-visual Large Language Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25x/sun25x.pdf)
- **GaoKao 2023 En** (measurements) — *measured_by*
  > We evaluate our method on a diverse set of reasoning tasks, including GSM8K (Cobbe et al., 2021b), MATH500 (Hendrycks et al., 2021), MMLU STEM (Hendrycks et al., 2020), OlympiadBench (He et al., 2024), GaoKao-2023-En (Liao et al., 2024), GPQA (Rein et al., 2023), and Minerva Math (Lewkowycz et al., 2022). (Section 3)
  - [Reward-Guided Speculative Decoding for Efficient LLM Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liao25f/liao25f.pdf)
- **T-Eval** (measurements) — *measured_by*
  > We utilize T-Eval (Chen et al., 2023c), which assesses six core competencies: planning, reasoning, retrieval, understanding, instruction following, and reviewing. (Sec. 4.1)
  - [Can Compressed LLMs Truly Act? An Empirical Evaluation of Agentic Capabilities in LLM Compression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25k/dong25k.pdf)
- **NLGraph** (measurements) — *measured_by*
  > reasoning (GSM8k (Cobbe et al., 2021), Knowledge Crosswords (Ding et al., 2024), NLGraph (Wang et al., 2024a; Zhang et al., 2024a)) (Section 3).
  - [Model Swarms: Collaborative Search to Adapt LLM Experts via Swarm Intelligence](https://raw.githubusercontent.com/mlresearch/v267/main/assets/feng25o/feng25o.pdf)
- **BANKING77** (measurements) — *measured_by*
  > This section presents a comprehensive evaluation of the reasoning accuracy of both closed-source and open-source LLMs using a range of prompt engineering and demonstration selection techniques across four benchmark datasets: BANKING77, CLINC150, HWU64, and LIU54. (Section 4.4)
  - [Demonstration Selection for In-Context Learning via Reinforcement Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25dp/wang25dp.pdf)
- **CLINC150** (measurements) — *measured_by*
  > This section presents a comprehensive evaluation of the reasoning accuracy of both closed-source and open-source LLMs using a range of prompt engineering and demonstration selection techniques across four benchmark datasets: BANKING77, CLINC150, HWU64, and LIU54. (Section 4.4)
  - [Demonstration Selection for In-Context Learning via Reinforcement Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25dp/wang25dp.pdf)
- **SST-5** (measurements) — *measured_by*
  > To further assess the generalizability and effectiveness of RDES beyond simple text classification, we conducted additional experiments on more challenging reasoning benchmarks: BigBenchHard (specifically, boolean expressions and web of lies subsets), SST5 and GSM-8K. (Section 4.5)
  - [Demonstration Selection for In-Context Learning via Reinforcement Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25dp/wang25dp.pdf)
- **Mystery Blocksworld** (measurements) — *measured_by*
  > One aims to develop novel reasoning tasks such as mystery blocksworld (Webb et al., 2024), ARCAGI (Chollet et al., 2025), and others (Zhu et al., 2023).
  - [RE-IMAGINE: Symbolic Benchmark Synthesis for Reasoning Evaluation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25n/xu25n.pdf)
- **FrontierMath** (measurements) — *measured_by*
  > Recent advancements in Artificial Intelligence (AI) have sparked increasing interest in the development of reasoning systems. Central to this goal are Large Language Models (LLMs) – models like OpenAI’s o1 (Jaech et al., 2024), o3 (OpenAI, 2024), or DeepSeek-R1 (Team, 2025) show complex problem-solving abilities, and demonstrate unprecedented results on reasoning benchmarks, e.g. FrontierMath (Glazer et al., 2024) and ARC-AGI (Chollet et al., 2024).
  - [RE-IMAGINE: Symbolic Benchmark Synthesis for Reasoning Evaluation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25n/xu25n.pdf)
- **XCOPA** (measurements) — *measured_by*
  > We evaluate our models on five widely adopted multilingual benchmarks in a zero-shot setting, covering a range of tasks: ... reasoning (XCOPA; Ponti et al., 2020)... (Section 3)
  - [From Unaligned to Aligned: Scaling Multilingual LLMs with Multi-Way Parallel Corpora](https://aclanthology.org/2025.emnlp-main.374.pdf)
- **Collaboration** (behaviors tasks) — *causes*
  > We find that reasoning models consistently reduce cooperation and norm enforcement, favoring individual rationality. (Abstract)
  - [Spontaneous Giving and Calculated Greed in Language Models](https://aclanthology.org/2025.emnlp-main.267.pdf)
- **Style transfer** (behaviors tasks) — *correlates*
  > models with stronger reasoning abilities (e.g., o3-mini, Deepseek) according to the benchmark 1, excel at verification and concealing authorial traits but are less effective at faithfully replicating an author’s distinctive style.
  - [Unraveling Interwoven Roles of Large Language Models in Authorship Privacy: Obfuscation, Mimicking, and Verification](https://aclanthology.org/2025.emnlp-main.753.pdf)
- **Waste-Bench** (measurements) — *measured_by*
  > To address these challenges, we propose Waste-Bench, a benchmark designed to evaluate the robustness and reasoning capabilities of VLLMs in the context of waste classification.
  - [Waste-Bench: A Comprehensive Benchmark for Evaluating VLLMs in Cluttered Environments](https://aclanthology.org/2025.emnlp-main.1578.pdf)
- **NoThinking** (measurements) — *measured_by*
  > “(3) QwQ with and without reasoning, denoted as Thinking and NoThinking. This setup facilitates direct comparison of distinct reasoning strategies across LLMs”
  - [Memorization or Reasoning? Exploring the Idiom Understanding of LLMs](https://aclanthology.org/2025.emnlp-main.1099.pdf)
- **AGIEval-Math** (measurements) — *measured_by*
  > Specifically, we choose several tasks that rely on model reasoning abilities, including GPQA (Rein et al., 2023), MMLU-CF (Zhao et al., 2024), MMLU-Pro (Wang et al., 2024e), MATH (Hendrycks et al., 2021), AGIEval-Math (Zhong et al., 2023), and Med QA (Jin et al., 2021). (Section 4.1)
  - [ORPP: Self-Optimizing Role-playing Prompts to Enhance Language Model Capabilities](https://aclanthology.org/2025.emnlp-main.1453.pdf)
- **Linguistic puzzle solving** (behaviors tasks) — *causes*
  > Linguistic puzzles used in linguistic competitions typically require multi-step reasoning over the limited data presented in the puzzle.
  - [Can LLMs Generate and Solve Linguistic Olympiad Puzzles?](https://aclanthology.org/2025.emnlp-main.969.pdf)
- **InfiniBench** (measurements) — *measured_by*
  > InfiniBench skills: covers eight core skills, grouped into grounding-based (MCQ) and reasoning-based (open-ended) categories.
  - [InfiniBench: A Benchmark for Large Multi-Modal Models in Long-Form Movies and TV Shows](https://aclanthology.org/2025.emnlp-main.984.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > Reasoning-based skills are assessed using a GPT-4o mini, assigning a score from 0 to 10.
  - [InfiniBench: A Benchmark for Large Multi-Modal Models in Long-Form Movies and TV Shows](https://aclanthology.org/2025.emnlp-main.984.pdf)
- **AraEval** (measurements) — *measured_by*
  > In this paper, we present AraEval, a pioneering and comprehensive evaluation suite speciﬁcally developed to assess the advanced knowledge, reasoning, truthfulness, and instruction-following capabilities of foundation models in the Arabic context. (Abstract)
  - [AraEval: An Arabic Multi-Task Evaluation Suite for Large Language Models](https://aclanthology.org/2025.emnlp-main.1679.pdf)
- **LiveCodeBench** (measurements) — *measured_by*
  > Extensive evaluations across multiple models and reasoning tasks (AIME-2024, GPQA-Diamond, and LiveCodeBench) demonstrate that STAND reduces inference latency by 60-65% compared to standard autoregressive decoding while maintaining accuracy. (Abstract)
  - [Accelerated Test-Time Scaling with Model-Free Speculative Sampling](https://aclanthology.org/2025.emnlp-main.1558.pdf)
- **BABILong** (measurements) — *measured_by*
  > "BABILong includes a diverse set of 20 reasoning tasks"
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)

### → Reasoning
- **Chain of thought** (behaviors tasks) — *causes*
  > This suggests that reasoning improvements from PPO may be due to increased chain-of-thought abilities. (Section 3.2).
  - [Unpacking DPO and PPO: Disentangling Best Practices for Learning from Preference Feedback](https://proceedings.neurips.cc/paper_files/paper/2024/file/404df2480b6eef0486a1679e371894b0-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs) — *correlates*
  > We find that unsurprisingly, math, coding, and reasoning all correlate with one another.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **Self-reflection** (behaviors tasks) — *causes*
  > ReEvo couples evolutionary search for efficiently exploring heuristic spaces, with self-reflections to boost the reasoning capabilities of LLMs.
  - [ReEvo: Large Language Models as Hyper-Heuristics with Reflective Evolution](https://proceedings.neurips.cc/paper_files/paper/2024/file/4ced59d480e07d290b6f29fc8798f195-Paper-Conference.pdf)
- **In-context learning** (constructs) — *causes*
  > All stages utilize the in-context learning method with a few examples to maximize the reasoning ability of large language models (LLMs). (Section 4)
  - [EHRCon: Dataset for Checking Consistency between Unstructured Notes and Structured Tables in Electronic Health Records](https://proceedings.neurips.cc/paper_files/paper/2024/file/a291dad965af9bc2e39ffeb2ca1c6dc0-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Chain-of-thought reasoning** (constructs) — *causes*
  > Chain-of-Thought (CoT) is an efficient prompting method that enables the reasoning ability of large language models by augmenting the query using multiple examples with multiple intermediate steps. (Abstract)
  - [Training Nonlinear Transformers for Chain-of-Thought Inference:  A Theoretical Generalization Analysis](https://proceedings.iclr.cc/paper_files/paper/2025/file/b295b3a940706f431076c86b78907757-Paper-Conference.pdf)
- **Explanation generation** (behaviors tasks) — *causes*
  > Large language models (LLMs) can enhance multi-step reasoning abilities by generating intermediate reasoning steps (i.e., rationale) before arriving at an answer (Wei et al., 2022). (Section 1)
  - [Self-Training Meets Consistency: Improving LLMs' Reasoning with Consistency-Driven Rationale Evaluation](https://aclanthology.org/2025.naacl-long.528.pdf)
- **Self-correction** (behaviors tasks) — *causes*
  > To the best of our knowledge, we are the first to incorporate a reflection mechanism for self-correction and adaptive KG exploration into KG-augmented LLMs, effectively augmenting the LLM’s reasoning ability. (Section 1)
  - [Plan-on-Graph: Self-Correcting Adaptive Planning of Large Language Model on Knowledge Graphs](https://proceedings.neurips.cc/paper_files/paper/2024/file/4254e856d01a5e7b7ea050477c3ef9b9-Paper-Conference.pdf)
- **Information extraction** (behaviors tasks) — *causes*
  > The tasks of question decomposition, knowledge extraction, and note-taking are interconnected, each contributing towards navigating the reasoning path from a question to its answer.
  - [Boosting the Potential of Large Language Models with an Intelligent Information Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/28d38c036365420f61ce03300418e44a-Paper-Conference.pdf)
- **Tool use** (behaviors tasks) — *causes*
  > Teaching large language models (LLMs) to use tools for solving complex problems can grant them human-like reasoning abilities. (Abstract)
  - [Smurfs: Multi-Agent System using Context-Efficient DFSDT for Tool Planning](https://aclanthology.org/2025.naacl-long.169.pdf)
- **Strategy generation** (behaviors tasks) — *causes*
  > These S+ and S−guide the generation of new strategies to optimize overall performance, enhancing reasoning ability and avoiding redundancy. (Section 3.1.1)
  - [LLM-guided Plan and Retrieval: A Strategic Alignment for Interpretable User Satisfaction Estimation in Dialogue](https://aclanthology.org/2025.naacl-long.523.pdf)
- **Abstraction** (constructs) — *causes*
  > Grounding on the high-level concepts and principles, LLMs can leverage their intrinsic Reasoning capabilities to derive the solution. (Section 7)
  - [Take a Step Back: Evoking Reasoning via Abstraction in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/592da1445a51e54a3987958b5831948f-Paper-Conference.pdf)
- **Self-improvement** (constructs) — *causes*
  > These results consistently demonstrate RISE’s effectiveness in enhancing reasoning capabilities for different models. (Section 1)
  - [Recursive Introspection: Teaching Language Model Agents How to Self-Improve](https://proceedings.neurips.cc/paper_files/paper/2024/file/639d992f819c2b40387d4d5170b8ffd7-Paper-Conference.pdf)
- **Contextual understanding** (constructs) — *causes*
  > This information with logical relationships enables LLMs to deeply understand the contextual content by clearly perceiving these logical relationships, facilitating the quality and reliability of reasoning (Section 3.2.1).
  - [Information Re-Organization Improves Reasoning in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb1a323fa10d4102ff13422476a744ff-Paper-Conference.pdf)
- **Inductive bias** (constructs) — *causes*
  > MIDAS is not only training-efﬁcient but surprisingly also has an inductive bias towards improving downstream tasks, especially tasks that require reasoning abilities like reading comprehension and math problems, despite having similar or slightly worse perplexity compared to baseline training. (Abstract)
  - [On the Inductive Bias of Stacking Towards Improving Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/837bc5db12f3d394d220815a7687340c-Paper-Conference.pdf)
- **Image captioning** (behaviors tasks) — *causes*
  > Much like humans, who often write down their key observations in an image and refer to them while solving complex reasoning tasks, we hypothesize that grounding the LVLM’s responses in a detailed visual description can significantly enhance its reasoning process. (Section 5)
  - [Visual Description Grounding Reduces Hallucinations and Boosts Reasoning in LVLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6805b5564bd8d813a81c4b5a97e5ca6-Paper-Conference.pdf)
- **Multimodal alignment** (constructs) — *causes*
  > As an early model bridging vision and language with an adaptor, LLaVA’s consistent poor performance highlights how such misalignment can impair both perception and reasoning in such tasks. (Section 4.1)
  - [Are Large Vision Language Models Good Game Players?](https://proceedings.iclr.cc/paper_files/paper/2025/file/27881a19f100fdbf57f0ba1c3d499b08-Paper-Conference.pdf)
- **Video question answering** (behaviors tasks) — *causes*
  > Video question answering datasets to enhance TRACE’s reasoning capabilities.
  - [TRACE: Temporal Grounding Video LLM  via Causal Event Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/df027cf11469e746ef94d583f9f5537f-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks) — *causes*
  > TOW views next-word prediction as a core reasoning task and injects fine-grained thoughts explaining what the next word should be and how it is related to the previous contexts in pre-training texts (Abstract).
  - [ToW: Thoughts of Words Improve Reasoning in Large Language Models](https://aclanthology.org/2025.naacl-long.157.pdf)
- **Plausibility** (constructs) — *causes*
  > We also observe that guiding models to focus on explanation signals from our dataset during training improves the plausibility Token F1 score by 3-4%, improving the model’s reasoning. (Abstract)
  - [Main Predicate and Their Arguments as Explanation Signals For Intent Classification](https://aclanthology.org/2025.naacl-long.539.pdf)
- **Critique generation** (behaviors tasks) — *causes*
  > Additionally, these critiques help the policy language model (LM) correct flawed reasoning steps, resulting in improved accuracy in refined responses.
  - [Self-Generated Critiques Boost Reward Modeling for Language Models](https://aclanthology.org/2025.naacl-long.573.pdf)
- **Knowledge acquisition** (constructs) — *causes*
  > In this study, we introduced TinyThinker to enhance reasoning capabilities through effective knowledge internalization. (Section 6)
  - [TinyThinker: Distilling Reasoning through Coarse-to-Fine Knowledge Internalization with Self-Reflection](https://aclanthology.org/2025.naacl-long.309.pdf)
- **Selection bias** (constructs) — *causes*
  > Such bias compromises fairness, reliability, and the true reasoning capabilities of these models. (Section 1).
  - [Addressing Blind Guessing: Calibration of Selection Bias in Multiple-Choice Question Answering by Video Language Models](https://aclanthology.org/2025.acl-long.162.pdf)
- **Critique ability** (constructs) — *causes*
  > Self-critique mechanisms significantly improve the performance of language models in complex reasoning tasks by giving them the ability to correct errors, conduct induction and deduction, and switch thinking insights. (Abstract)
  - [Fixing Distribution Shifts of LLM Self-Critique via On-Policy Self-Play Training](https://aclanthology.org/2025.acl-long.865.pdf)
- **Planning** (constructs) — *causes*
  > This paper presents how language models can be trained for internal and external planning to improve reasoning in sequential decision-making, using board games as an experimental domain. (Section 1)
  - [Mastering Board Games by External and Internal Planning with Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/schultz25a/schultz25a.pdf)
- **Multi-agent debate** (behaviors tasks) — *causes*
  > Various multi-agent debate strategies (Du et al., 2024; Chan et al., 2024; Liang et al., 2023; Chen et al., 2023; Smit et al., 2024; Zhang et al., 2023a; Pham et al., 2023; Li et al., 2023) have been developed to strengthen the reasoning ability of LLMs. (Section 5)
  - [From Debate to Equilibrium: Belief-Driven Multi-Agent LLM Reasoning via Bayesian Nash Equilibrium](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yi25c/yi25c.pdf)
- **Prompt engineering** (behaviors tasks) — *causes*
  > In Appendix E, we explore whether increasing inference-time compute via Chain-of-Thought (CoT) prompting can improve the performance of MoEs on tasks that require more reasoning. (Section 4)
  - [Parameters vs FLOPs: Scaling Laws for Optimal Sparsity for Mixture-of-Experts Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/abnar25a/abnar25a.pdf)
- **Authorship attribution** (behaviors tasks) — *correlates*
  > models with stronger reasoning abilities (e.g., o3-mini, Deepseek) according to the benchmark 1, excel at verification and concealing authorial traits
  - [Unraveling Interwoven Roles of Large Language Models in Authorship Privacy: Obfuscation, Mimicking, and Verification](https://aclanthology.org/2025.emnlp-main.753.pdf)
- **Code generation** (behaviors tasks) — *causes*
  > mixing code-generation data has been suggested to enhance a model’s reasoning and logical abilities (Dong et al., 2024). (Section 2)
  - [Massive Supervised Fine-tuning Experiments Reveal How Data, Layer, and Training Factors Shape LLM Alignment Quality](https://aclanthology.org/2025.emnlp-main.1138.pdf)
- **Language mixing** (behaviors tasks) — *causes*
  > We demonstrate that bilingual chain-of-thought reasoning with language mixing causally enhances performance: unconstrained bilingual outputs significantly outperforming monolingually constrained ones (p<0.05), and probe-guided yields further gains. (Introduction)
  - [The Impact of Language Mixing on Bilingual LLM Reasoning](https://aclanthology.org/2025.emnlp-main.1654.pdf)
- **Instruction following ability** (constructs) — *correlates*
  > we are the first to identify the negative correlation between instruction-following ability and model scale in reasoning tasks: while larger models exhibit stronger reasoning capabilities, their adherence to instructions tends to decline.
  - [DICE: Structured Reasoning in LLMs through SLM-Guided Chain-of-Thought Correction](https://aclanthology.org/2025.emnlp-main.355.pdf)
- **Internal consistency** (constructs) — *causes*
  > we propose a new approach to calibrate reasoning by up-weighting reasoning paths with high internal consistency, resulting in a significant boost in reasoning performance. (Abstract)
  - [Calibrating Reasoning in Language Models with Internal Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/d037fd021c9aace128b8ce25001cdb6c-Paper-Conference.pdf)
- **Representation collapse** (constructs) — *causes*
  > "representation collapse in the model’s intermediate layers as a key factor limiting their reasoning capabilities"
  - [Seq-VCR: Preventing  Collapse in Intermediate Transformer Representations for Enhanced Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/b577c062bd4f894b7e05fab6440373ed-Paper-Conference.pdf)

### Associated with
- **Mathematical problem solving** (behaviors tasks)
  > pipelines that reason about math word problems (Abstract)
  - [DSPy: Compiling Declarative Language Model Calls into State-of-the-Art Pipelines](https://proceedings.iclr.cc/paper_files/paper/2024/file/f1cf02ce09757f57c3b93c0db83181e0-Paper-Conference.pdf)
- **Commonsense reasoning** (constructs)
  > challenging tasks that rely on the reasoning capabilities of LLMs, such as solving arithmetic problems (Hendrycks et al., 2021) and commonsense reasoning (Talmor et al., 2019) (Section 1).
  - [BadChain: Backdoor Chain-of-Thought Prompting for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/791d3337291b2c574545aeecfa75484c-Paper-Conference.pdf)
- **Memorization** (constructs)
  > It may suggest that width is crucial for memorization, while depth is important for reasoning, a similar phenomenon that echos the intuition of [80] (Section 5).
  - [LISA: Layerwise Importance Sampling for Memory-Efficient Large Language Model Fine-Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/687163285b8affc8ee933bdca8e75747-Paper-Conference.pdf)
- **Visual perception** (constructs)
  > these reasoning benchmarks require a foundational perception capability to accurately identify key elements. (Section A.3)
  - [Prism: A Framework for Decoupling and Assessing the Capabilities of VLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/cac9e747a1d480c78312226959566cef-Paper-Conference.pdf)
- **Question answering** (behaviors tasks)
  > Our two Knowledge Transfer tasks – Question Answering and Demo Validation – assess whether a model can perform higher-level reasoning about the properties and correctness of a workflow. (Section 4.2)
  - [WONDERBREAD: A Benchmark for Evaluating Multimodal Foundation Models on Business Process Management Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/d1fa821312040303b089ae529dbf81a6-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Logical reasoning** (constructs)
  > they discuss reasoning tasks including commonsense reasoning, mathematical reasoning, logical reasoning, and causal reasoning. (Section 2.1)
  - [Unveiling Causal Reasoning in Large Language Models: Reality or Mirage?](https://proceedings.neurips.cc/paper_files/paper/2024/file/af2bb2b2280d36f8842e440b4e275152-Paper-Conference.pdf)
- **General ability** (constructs)
  > Finally, the identification of a single common factor underlying all benchmark scores suggests that a general ability for reasoning and knowledge can be effectively measured through a consolidated, sparse benchmark. (Section 4)
  - [metabench - A Sparse Benchmark of Reasoning and Knowledge in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ebc26584810a189ef1e4f173aba4319-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks)
  > Gemma-7B-Instruct performs better in structured tasks like reasoning and coding, where precise instruction-following is crucial (Section 3.1)
  - [Assessing Safety Risks and Quantization-aware Safety Patching for Quantized Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ci/chen25ci.pdf)
- **Intrinsic self-correction** (behaviors tasks)
  > Central to our investigation is the notion of intrinsic self-correction, whereby an LLM attempts to correct its initial responses based solely on its inherent capabilities, without the crutch of external feedback. In the context of reasoning, our research indicates that LLMs struggle to self-correct their responses without external feedback (Section 1).
  - [Large Language Models Cannot Self-Correct Reasoning Yet](https://proceedings.iclr.cc/paper_files/paper/2024/file/8b4add8b0aa8749d80a34ca5d941c355-Paper-Conference.pdf)
- **Perception Test** (measurements)
  > The Perception test [45] focused on skills (memory, abstraction, physics, semantics) and types of reasoning (descriptive, explanatory, predictive, counterfactual) across video, audio, and text modalities. (Section 2)
  - [Animal-Bench: Benchmarking Multimodal Video Models for Animal-centric Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/8fa604a81e5a236e2f38e917109571a3-Paper-Conference.pdf)
- **Sequential decision-making** (constructs)
  > ReAct [23]: This LLM-based planning method integrates reasoning and acting to address sequential decision-making tasks. (Section 4.1.2)
  - [AutoGuide: Automated Generation and Selection of Context-Aware Guidelines for Large Language Model Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/d8efbb5dd415974eb095c3f06bff1f48-Paper-Conference.pdf)
- **Knowledge-based question answering** (behaviors tasks)
  > Given a question, the model is required to make inferences based on necessary reasoning background [14]. (Section 1)
  - [Cost-efficient Knowledge-based Question Answering with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d0aafec03d59db29a92fa683bd783374-Paper-Conference.pdf)
- **Reasoning segmentation** (behaviors tasks)
  > RS has reasoning ability, but only allows single object localization. (Figure 2)
  - [Instruction-Guided Visual Masking](https://proceedings.neurips.cc/paper_files/paper/2024/file/e4165c96702bac5f4962b70f3cf2f136-Paper-Conference.pdf)
- **Catastrophic forgetting** (behaviors tasks)
  > we reveal that the catastrophic forgetting in MLLMs is primarily due to the decline in instruction following rather than reasoning knowledge.
  - [CoIN: A Benchmark of Continual Instruction Tuning for Multimodel Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6a45500d9eda640deed90d8a62742be5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Causal reasoning** (constructs)
  > Reasoning is a cognitive process that involves drawing conclusions, making judgments, or forming inferences based on facts or premises. This process has been explored from various perspectives. ... Causal reasoning [26] focuses on discerning the relationship between a cause and its effect, aiming to understand how certain events can impact other.
  - [Does Reasoning Emerge? Examining the Probabilities of Causation in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d5a1f97d2b922da92e880d13b7d2bf02-Paper-Conference.pdf)
- **Counterfactual reasoning** (constructs)
  > to evaluate the reasoning abilities of the LLM, it is crucial that this consistency is also observed when the queries are framed in a counterfactual manner.
  - [Does Reasoning Emerge? Examining the Probabilities of Causation in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d5a1f97d2b922da92e880d13b7d2bf02-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks)
  > The multiple-choice benchmarks we chose is challenging enough in itself and requires strong reasoning ability from the model; (Section 4.1)
  - [Reference Trustable Decoding: A Training-Free Augmentation Paradigm for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/925869234d3aa2a3aad5f05b643974aa-Paper-Conference.pdf)
- **Length generalization** (constructs)
  > Length generalization (LG) is a challenging problem in learning to reason. (ABSTRACT)
  - [Generalizing Reasoning Problems to Longer Lengths](https://proceedings.iclr.cc/paper_files/paper/2025/file/abcbdf504b621b4d1213aa7a5c489f8a-Paper-Conference.pdf)
- **Question decomposition** (behaviors tasks)
  > WebPlanner first decomposes the user question into sequential or parallel search tasks via reasoning on the graph and determines the next step based on the search feedback (Sec. 2.1).
  - [MindSearch: Mimicking Human Minds Elicits Deep AI Searcher](https://proceedings.iclr.cc/paper_files/paper/2025/file/e01c431bbb83153632c0dcfaf8ccda0a-Paper-Conference.pdf)
- **Human preference alignment** (constructs)
  > With the bidirectional negative feedback, our proposed BNF can naturally prevent the model from over-fitting to preference data, striking a better balance between human values and reasoning ability while minimizing the alignment tax.
  - [As Simple as Fine-tuning: LLM Alignment via Bidirectional Negative Feedback Loss](https://proceedings.iclr.cc/paper_files/paper/2025/file/4bc4e9ecd5ae4a75048dc216a770cba1-Paper-Conference.pdf)
- **Alignment tax** (constructs)
  > Recent studies (Ouyang et al., 2022; Lin et al., 2023) have shown that using preference optimization methods to align LLMs with human values often harms their reasoning ability, referred to as the alignment tax.
  - [As Simple as Fine-tuning: LLM Alignment via Bidirectional Negative Feedback Loss](https://proceedings.iclr.cc/paper_files/paper/2025/file/4bc4e9ecd5ae4a75048dc216a770cba1-Paper-Conference.pdf)
- **Reasoning error** (behaviors tasks)
  > “Reasoning Errors ... account for a significant portion of mistakes... suggesting that even when models correctly perceive the audio, they often fail to apply the necessary complex reasoning.”
  - [MMAU: A Massive Multi-Task Audio Understanding and Reasoning Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/d36f208919582785db965fe648b9fe59-Paper-Conference.pdf)
- **Long-context understanding** (constructs)
  > The research community increasingly recognizes long-context modeling as a crucial capability for next-generation large language models, driven by diverse real-world applications ranging from in-depth reasoning (DeepSeek-AI, 2025; Zelikman et al., 2022)... (Introduction).
  - [Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention](https://aclanthology.org/2025.acl-long.1126.pdf)
- **Abstract reasoning** (constructs)
  > abstract reasoning involves two core processes: abstraction, the extraction of common features from concrete entities (Murphy, 2004), and reasoning, the derivation of new knowledge from existing information (Holyoak & Morrison, 2012).
  - [Benchmarking Abstract and Reasoning Abilities Through A Theoretical Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ma25u/ma25u.pdf)
- **Formal theorem proving** (behaviors tasks)
  > Automated theorem proving with formal languages by LLMs stands at the forefront of reasoning research (Yang et al., 2024a), partly because it allows objective and reliable evaluation... Moreover, it arguably encapsulates the essence of advanced reasoning tasks while abstracting away the ambiguity of natural language, enabling meaningful studies on a relatively smaller scale. (Section 1)
  - [STP: Self-play LLM Theorem Provers with Iterative Conjecturing and Proving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25h/dong25h.pdf)
- **Tool use ability** (constructs)
  > LLMs must first comprehend the user’s query and perform a reasonable analysis and planning, demonstrating the ability of reasoning. Subsequently, it needs to invoke the correct functions with suitable parameters, reflecting the ability of execution.
  - [MoRAgent: Parameter Efficient Agent Tuning with Mixture-of-Roles](https://raw.githubusercontent.com/mlresearch/v267/main/assets/han25j/han25j.pdf)
- **Social intelligence** (constructs)
  > However, it remains unclear whether these reasoning capabilities extend to a form of social intelligence: making effective decisions in cooperative contexts. (Abstract)
  - [Spontaneous Giving and Calculated Greed in Language Models](https://aclanthology.org/2025.emnlp-main.267.pdf)
- **Data contamination** (constructs)
  > prior exposure to semantic BDC lets a model "remember" the answer instead of reasoning.
  - [SSA: Semantic Contamination of LLM-Driven Fake News Detection](https://aclanthology.org/2025.emnlp-main.744.pdf)
- **Confidence estimation** (behaviors tasks)
  > "we propose a set of training-free, graph-based confidence estimation methods tailored to reasoning tasks."
  - [All Roads Lead to Rome: Graph-Based Confidence Estimation for Large Language Model Reasoning](https://aclanthology.org/2025.emnlp-main.1620.pdf)
- **Linguistic puzzle generation** (behaviors tasks)
  > the generated puzzles are designed to challenge students’ genuine reasoning and pattern detection, minimizing reliance on external language knowledge.
  - [Can LLMs Generate and Solve Linguistic Olympiad Puzzles?](https://aclanthology.org/2025.emnlp-main.969.pdf)
- **Reasoning faithfulness** (constructs)
  > This question [Do LRMs actually leverage the reasoning tokens to generate answers?] is closely tied to active research areas including reasoning effectiveness (Ma et al., 2025), reasoning faithfulness (Chen et al., 2025), and model behavior monitoring (Baker et al., 2025). (Section 1)
  - [From Reasoning to Answer: Empirical, Attention-Based and Mechanistic Insights into Distilled DeepSeek R1 Models](https://aclanthology.org/2025.emnlp-main.198.pdf)
- **Natural language inference** (behaviors tasks)
  > notably NLI tasks, which require integrating knowledge and reasoning. (Section 1)
  - [Enhancing Reasoning Capabilities of LLMs via Principled Synthetic Logic Corpus](https://proceedings.neurips.cc/paper_files/paper/2024/file/8678da90126aa58326b2fc0254b33a8c-Paper-Conference.pdf)
- **Multi-hop question answering** (behaviors tasks)
  > we can increase the complexity of a question by making it a multi-hop question [23, 24], which can be used to test whether an LLM can think in multiple steps. (Section 3.3)
  - [ERBench: An Entity-Relationship based Automatically Verifiable Hallucination Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/5ef9853a6cdea40ae3e301a6d8dc32b5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Query rewriting** (behaviors tasks)
  > We find that utilizing the reasoning ability of large language models (LLMs) to rephrase the search query and extend the aesthetic expectations can make up for this shortcoming. (Abstract)
  - [Aligning Vision Models with Human Aesthetics in Retrieval: Benchmarks and Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/9d3faa41886997cfc2128b930077fa49-Paper-Conference.pdf)
- **UltraInteract** (measurements)
  > "We consider fine-tuning Mistral-7B and Mistral-8×7B models on UltraInteract [44], a pairwise alignment dataset specifically designed for complex reasoning tasks."
  - [Noise Contrastive Alignment of Language Models with Explicit Rewards](https://proceedings.neurips.cc/paper_files/paper/2024/file/d5a58d198afa370a3dff0e1ca4fe1802-Paper-Conference.pdf)
- **Knowledge integration** (constructs)
  > According to Chen et al. (2024), the realization of reasoning ability hinges on two core components: (1) possessing extensive general knowledge of the world, and (2) effectively integrating new information into an existing knowledge base. (Section 2)
  - [KOR-Bench: Benchmarking Language Models on Knowledge-Orthogonal Reasoning Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/c6f5851a0d9cb435ed8b50e87bd6a257-Paper-Conference.pdf)
- **Multi-operand addition** (behaviors tasks)
  > The illustrative reasoning tasks we consider are: n-ary addition, p-hop induction head that tests the model’s ability to track back for p steps, and i-GSM which consists of synthetically constructed grade-school math problems (Section 2).
  - [Reasoning with Latent Thoughts: On the Power of Looped Transformers](https://proceedings.iclr.cc/paper_files/paper/2025/file/2676109d49d1eb26d6bc584a8f556305-Paper-Conference.pdf)
- **Synthetic data detection** (behaviors tasks)
  > the task of distinguishing between real and synthetic data effectively tests the perception, knowledge, and reasoning capabilities of LMMs. (ABSTRACT)
  - [LOKI: A Comprehensive Synthetic Data Detection Benchmark using Large Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/afd6374c7f2839cba22f537f15f4f760-Paper-Conference.pdf)
- **Faithfulness** (constructs)
  > Faithfulness serves as a metric for evaluating the degree to which the model’s provided explanation aligns with its actual reasoning. (Section 6.1)
  - [Main Predicate and Their Arguments as Explanation Signals For Intent Classification](https://aclanthology.org/2025.naacl-long.539.pdf)
- **Natural language understanding** (constructs)
  > recent studies indicate that the language understanding offered by these models remains limited and far from human-like performance, particularly in grasping the contextual meanings of words—an essential aspect of reasoning. (Abstract)
  - [SANDWiCH: Semantical Analysis of Neighbours for Disambiguating Words in Context ad Hoc](https://aclanthology.org/2025.naacl-long.358.pdf)
- **Transitive reasoning** (constructs)
  > TI is a fundamental form of reasoning in which, given some premises, a relational conclusion between stimuli can be inferred. For example, if A is greater than B and B is greater than C, then A must, transitively, be greater than C. TI has historically been used to evaluate the reasoning ability of young pre-verbal children (Burt et al., 1911), but has also been well studied throughout the animal kingdom, from rats (Roberts & Phelps, 1994) to wasps (Tibbetts et al., 2019).
  - [Position: Principles of Animal Cognition to Improve LLM Evaluations](https://raw.githubusercontent.com/mlresearch/v267/main/assets/rane25a/rane25a.pdf)
- **Self-verification** (behaviors tasks)
  > “The core idea of ReVISE is to enable LLMs to verify their reasoning processes”
  - [ReVISE: Learning to Refine at Test-Time via Intrinsic Self-Verification](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lee25ab/lee25ab.pdf)
- **Calibration** (constructs)
  > “program-aided reasoning approaches, where LLMs utilize code representation, generally exhibit superior calibration compared to standard text-based reasoning methods that rely on CoT”
  - [Code to Think, Think to Code: A Survey on Code-Enhanced Reasoning and Reasoning-Driven Code Intelligence in LLMs](https://aclanthology.org/2025.emnlp-main.130.pdf)
- **Chart question answering** (behaviors tasks)
  > "Chart question answering (CQA) has become a critical multimodal task for evaluating the reasoning capabilities of vision-language models."
  - [ChartMind: A Comprehensive Benchmark for Complex Real-world Multimodal Chart Question Answering](https://aclanthology.org/2025.emnlp-main.226.pdf)
