# In-context learning
**Type:** Construct  
**Referenced in:** 233 papers  
**Also known as:** In-context learning capability, In-context learning ability, In-Context Learning ability, In-context learnability, In-context causal structure selection, Few-shot capability, Few-shot learning capability, Few-shot adaptation, Multi-modal long-context learning, Distributional alignment  

## State of the Field

**Definition agreement:** Consensus. Most papers define in-context learning as a model or LLM's ability to learn, adapt to, or perform a new task at inference by conditioning on a few examples or demonstrations in the prompt or context, without updating parameters. A few papers broaden this to instructions, unlabeled or other contextual information, or refer to the prompting procedure itself, but the dominant use is still the same core phenomenon rather than a substantial competing definition.

**Space of definitions.** Across papers, the prevailing usage treats it as a model-level ability or capability: adapting at inference time to a new task, function, or query from a few demonstrations in the prompt, usually input-output or input-label pairs, without updating parameters. Many definitions phrase this as few-shot learning from exemplars, sometimes stressing that the model answers a novel query or new task purely from the context it is given. Smaller lines broaden the context to instructions, reference texts, unlabeled inputs, or general prefixes, while a minority use the term more behaviorally, as a prompting procedure or evaluation setup, or more formally, as task-level learnability.

**Space of facets.** Papers mostly use it as a broad umbrella, but they sometimes split it into model ability or capability, near-synonymous few-shot capability or adaptation, and multimodal extensions such as multi-modal long-context learning, where performance is improved by conditioning on many demonstrations. Narrower variants include selecting causal structure from context, and one formalization recasts the question as task learnability rather than model capacity; another mechanism-focused variant emphasizes exploiting statistical correlations inside the context. Explanatory papers also contrast it with learning in the weights and discuss it in meta-learning or retrieval terms, while some use the same label for the prompting procedure itself rather than the latent capacity behind it.

**Space of measurement.** Papers operationalize it with 35 linked measurement instruments and 30 linked behavioral indicators. The most frequent instruments are benchmark-style few-shot evaluations on GSM8K, MMLU, HellaSwag, MetaICL, and BIG-Bench Hard, with prompts often described in 5-shot or 8-shot form, while other behavioral operationalizations test few-shot performance on classification, reasoning, forecasting, associative recall, and multimodal tasks. These measures usually align with the dominant definition of learning from demonstrations without weight updates, though some broaden the test to long-context, multimodal, or general prompt-conditioning settings.

**Links.** Across 40 linked constructs, the recurrent claims are causal relationships from in-context learning to Generalization, Out-of-distribution generalization, and Reasoning, while related links often connect it to In-weights learning and Meta-learning. Papers also claim causal relationships from it to several downstream capabilities and task behaviors, and a smaller set reverses direction by claiming causal relationships from other abilities or training phenomena to in-context learning. Only a few papers report correlations, and the cited examples are specific benchmarks.

## Sources

**[A Benchmark for Learning to Translate a New Language from One Grammar Book](https://proceedings.iclr.cc/paper_files/paper/2024/file/52d63f9e4b81f866bf69fb3c834aad47-Paper-Conference.pdf)**
> The ability of a language model to adapt to a new task by conditioning on a few input-label demonstrations provided in the prompt, without parameter updates.

**[LogiCity: Advancing Neuro-Symbolic AI with Abstract Urban Simulation](https://proceedings.neurips.cc/paper_files/paper/2024/file/8196be81e68289d7a9ece21ed7f5750a-Paper-Datasets_and_Benchmarks_Track.pdf) (as "In-context learning capability")**
> The ability to infer task rules and answer new questions from a small set of demonstrations provided in the prompt.

**[Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf) (as "In-context learning ability")**
> The model's capacity to perform evaluation tasks when conditioned on example input-output pairs in the prompt.

**[Training Nonlinear Transformers for Chain-of-Thought Inference:  A Theoretical Generalization Analysis](https://proceedings.iclr.cc/paper_files/paper/2025/file/b295b3a940706f431076c86b78907757-Paper-Conference.pdf) (as "In-Context Learning ability")**
> The latent capability of a model to perform a task by conditioning on a few input-output examples provided in the prompt, without explicit intermediate reasoning steps.

**[Selective induction Heads: How Transformers Select Causal Structures in Context](https://proceedings.iclr.cc/paper_files/paper/2025/file/d7ed243b13831bdd468f35039936bcef-Paper-Conference.pdf) (as "In-context causal structure selection")**
> The ability of a model to dynamically identify the correct underlying causal relationship between tokens, such as the lag in a Markov chain, from the context and use it for prediction.

**[Chain-of-Thought Provably Enables Learning the (Otherwise) Unlearnable](https://proceedings.iclr.cc/paper_files/paper/2025/file/da535999561b932f56efdd559498282e-Paper-Conference.pdf) (as "In-context learnability")**
> A formal property of a task, indicating whether a model can successfully learn to solve it with high probability given a sufficient number of in-context examples.

**[From News to Forecast: Integrating Event Analysis in LLM-Based Time Series Forecasting with Reflection](https://proceedings.neurips.cc/paper_files/paper/2024/file/6aef8bffb372096ee73d98da30119f89-Paper-Conference.pdf) (as "Few-shot capability")**
> The ability of a pre-trained model to perform tasks effectively with only a small number of examples, without requiring extensive fine-tuning.

**[ORPP: Self-Optimizing Role-playing Prompts to Enhance Language Model Capabilities](https://aclanthology.org/2025.emnlp-main.1453.pdf) (as "Few-shot learning capability")**
> The model's ability to learn and perform a task based on a small number of examples provided within the prompt's context.

**[TAIA: Large Language Models are Out-of-Distribution Data Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/be0a8ecf8b2743a4117557c5eca0fb79-Paper-Conference.pdf) (as "Few-shot adaptation")**
> Learning contextually from demonstrations in a few-shot setting to improve performance on new tasks.

**[Efficient Multi-modal Long Context Learning for Training-free Adaptation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ma25v/ma25v.pdf) (as "Multi-modal long-context learning")**
> The ability of a multi-modal model to improve its performance on a downstream task by conditioning on a long context of many demonstration examples.

**[Fine-grained Analysis of In-context Linear Estimation: Data, Architecture, and Beyond](https://proceedings.neurips.cc/paper_files/paper/2024/file/f9dc462382fef56d58279e75de2438f3-Paper-Conference.pdf) (as "Distributional alignment")**
> The model's capacity to leverage statistical correlations within the in-context data, such as between task and feature vectors or between query and demonstration examples, to improve learning efficiency.

## Relationships

### In-context learning →
- **Generalization** (constructs) — *causes*
  > In-context learning is a key paradigm in large language models (LLMs) that enables them to generalize to new tasks and domains by simply prompting these models with a few exemplars without explicit parameter updates. (Abstract)
  - [Probing the Decision Boundaries of In-context Learning in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb5dd4476448c44e55a759a985b3bbec-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > All stages utilize the in-context learning method with a few examples to maximize the reasoning ability of large language models (LLMs). (Section 4)
  - [EHRCon: Dataset for Checking Consistency between Unstructured Notes and Structured Tables in Electronic Health Records](https://proceedings.neurips.cc/paper_files/paper/2024/file/a291dad965af9bc2e39ffeb2ca1c6dc0-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Out-of-distribution generalization** (constructs) — *causes*
  > We argue that context is environment, and posit that in-context learning holds the key to better domain generalization. (Section 1)
  - [Context is Environment](https://proceedings.iclr.cc/paper_files/paper/2024/file/03645743ea35690f30d795d6bac149a5-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > evaluate the ICL capability of the finetuned models on two benchmarks: MMLU (Hendrycks et al., 2020) and BBH (Suzgun et al., 2022). (Section 5.3)
  - [CausalLM is not optimal for in-context learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/364071531ff2398e0fb8bae31f615b69-Paper-Conference.pdf)
- **GSM8K** (measurements) — *measured_by*
  > “We quantitatively study how self-reinforced surface patterns lead to both beneﬁcial functions and detrimental effects in ICL. The experiments in this section are conducted over MMLU (Hendrycks et al., 2021) and GSM8K (Cobbe et al., 2021).”
  - [Understanding In-Context Learning from Repetitions](https://proceedings.iclr.cc/paper_files/paper/2024/file/d88f6f81e1aaf606776ffdd06fdf24ef-Paper-Conference.pdf)
- **MetaICL** (measurements) — *measured_by*
  > In the section, to validate our methodology, we employ the MetaICL dataset introduced by Min et al. (2022a), designed for in-context learning scenarios. (Section 4.1)
  - [MEND: Meta Demonstration Distillation for Efficient and Effective In-Context Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/7ce1cbededb4b0d6202847ac1b484ee8-Paper-Conference.pdf)
- **Robustness** (constructs) — *causes*
  > we believe that utilizing few-shot settings with example demonstrations could potentially enhance model performance and robustness. (Section 5.1)
  - [Are Multimodal LLMs Robust Against Adversarial Perturbations? RoMMath: A Systematic Evaluation on Multimodal Math Reasoning](https://aclanthology.org/2025.naacl-long.582.pdf)
- **Time series forecasting** (behaviors tasks) — *causes*
  > DICL projects trajectories into a disentangled feature space before performing zero-shot forecasting using a pre-trained LLM and in-context learning.
  - [Zero-shot Model-based Reinforcement Learning using Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5fc1e662bd63c4a70b95088ba5d08cb8-Paper-Conference.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > evaluate the ICL capability of the finetuned models on two benchmarks: MMLU (Hendrycks et al., 2020) and BBH (Suzgun et al., 2022). (Section 5.3)
  - [CausalLM is not optimal for in-context learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/364071531ff2398e0fb8bae31f615b69-Paper-Conference.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > We evaluate APE on three ICL tasks using the LM Evaluation Harness (Gao et al., 2024):: GSM8K (8-shot) (Cobbe et al., 2021a), TriviaQA (5-shot) (Joshi et al., 2017), and MMLU (5-shot) (Hendrycks et al., 2020a). (Section 5.2).
  - [APE: Faster and Longer Context-Augmented Generation via Adaptive Parallel Encoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/ce186a37e63b37638ecd06dee6b9a355-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks) — *causes*
  > “ICL can marginally help to adapt LMMs to follow instructions.”
  - [Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf)
- **Privacy preservation** (constructs) — *causes*
  > We study the problem of in-context learning (ICL) with large language models (LLMs) on private datasets. This scenario poses privacy risks, as LLMs may leak or regurgitate the private examples demonstrated in the prompt. (Section 1)
  - [Privacy-Preserving In-Context Learning with Differentially Private Few-Shot Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/8cb564df771e9eacbfe9d72bd46a24a9-Paper-Conference.pdf)
- **Logical reasoning** (constructs) — *causes*
  > It has been shown that including task demonstrations in the prompt can enhance the capability of language models to apply common sense and logical reasoning [65, 72] and learn patterns from the supplied demonstrations [14], significantly enhancing the flexibility and generality of language models. (Introduction)
  - [DETAIL: Task DEmonsTration Attribution for Interpretable In-context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2ceda49041816da6d5a34eb3b612607f-Paper-Conference.pdf)
- **Calibration** (constructs) — *causes*
  > current exemplar selection strategies, by largely ignoring calibration, risk scenarios where gains in accuracy are achieved at the expense of degradation in calibration (Zhang et al., 2024b).
  - [COM-BOM: Bayesian Exemplar Search for Efficiently Exploring the Accuracy-Calibration Pareto Frontier](https://aclanthology.org/2025.emnlp-main.1027.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > IP = 1 N g PN g j=1 ˆa T e j N , which is the average in-context performance on N g general evaluation tasks... We set N g = 4 general evaluation tasks, covering Hellaswag (Zellers et al., 2019), CommonsenseQA (Talmor et al., 2018), Alpaca (Hendrycks et al., 2020), and BBH-Object-Count (Srivastava et al., 2022) (Section 3)
  - [Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf)
- **Adaptability** (constructs) — *causes*
  > By leveraging in-context information during both pre-training and inference, Zebra dynamically adapts to new tasks by conditioning on input sequences that incorporate context example trajectories. (Abstract)
  - [Zebra: In-Context Generative Pretraining for Solving Parametric PDEs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/serrano25a/serrano25a.pdf)
- **Embodied planning** (behaviors tasks) — *causes*
  > These experiments confirm that the in-context example selecting strategy has a significant impact on the performance of LLM-based task planners (Section 6.1).
  - [LoTa-Bench: Benchmarking Language-oriented Task Planners for Embodied Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e91fb65c6324a984ea9ef39a5b84af04-Paper-Conference.pdf)
- **SST-5** (measurements) — *measured_by*
  > We conduct experiments to investigate the correlation between subset influence and its corresponding in-context learning performance. (Section 4.3.1, Figure 4a on SST-5)
  - [IDEAL: Influence-Driven Selective Annotations Empower In-Context Learners in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/a7f90da65dd41d699d00e95700e6fa1e-Paper-Conference.pdf)
- **MNLI** (measurements) — *measured_by*
  > We conduct experiments to investigate the correlation between subset influence and its corresponding in-context learning performance. (Section 4.3.1, Figure 4b on MNLI)
  - [IDEAL: Influence-Driven Selective Annotations Empower In-Context Learners in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/a7f90da65dd41d699d00e95700e6fa1e-Paper-Conference.pdf)
- **Linear regression** (measurements) — *measured_by*
  > “we investigate the convergence properties of ICL for both prefixLM and causalLM multi-layer LSA-transformers in a linear regression setting”
  - [CausalLM is not optimal for in-context learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/364071531ff2398e0fb8bae31f615b69-Paper-Conference.pdf)
- **Abstention** (behaviors tasks) — *causes*
  > “ICL significantly improves abstention.”
  - [Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks) — *causes*
  > ICL thus helps next-token prediction using information provided solely in the input prompt context. (Section 2)
  - [Linking In-context Learning in Transformers to Human Episodic Memory](https://proceedings.neurips.cc/paper_files/paper/2024/file/0ba385c3ea3bb417ac6d6a33e24411bc-Paper-Conference.pdf)
- **MS-COCO** (measurements) — *measured_by*
  > The models are evaluated on four-shot and eight-shot in-context learning performance on various captioning benchmarks (COCO (Karpathy test) [Lin et al., 2014] and TextCaps (validation) [Sidorov et al., 2020]) and visual question answering datasets (VQAv2 (validation) [Agrawal et al., 2015], OK-VQA (validation) [Marino et al., 2019], TextVQA (validation) [Singh et al., 2019], and VizWiz (validation) [Gurari et al., 2018]). (Section 4.2)
  - [MINT-1T: Scaling Open-Source Multimodal Data by 10x: A Multimodal Dataset with One Trillion Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/40b9196c25fe1d64d87ca3a80a91d0ce-Paper-Datasets_and_Benchmarks_Track.pdf)
- **VQA-v2** (measurements) — *measured_by*
  > The models are evaluated on four-shot and eight-shot in-context learning performance on various captioning benchmarks (COCO (Karpathy test) [Lin et al., 2014] and TextCaps (validation) [Sidorov et al., 2020]) and visual question answering datasets (VQAv2 (validation) [Agrawal et al., 2015], OK-VQA (validation) [Marino et al., 2019], TextVQA (validation) [Singh et al., 2019], and VizWiz (validation) [Gurari et al., 2018]). (Section 4.2)
  - [MINT-1T: Scaling Open-Source Multimodal Data by 10x: A Multimodal Dataset with One Trillion Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/40b9196c25fe1d64d87ca3a80a91d0ce-Paper-Datasets_and_Benchmarks_Track.pdf)
- **OK-VQA** (measurements) — *measured_by*
  > The models are evaluated on four-shot and eight-shot in-context learning performance on various captioning benchmarks (COCO (Karpathy test) [Lin et al., 2014] and TextCaps (validation) [Sidorov et al., 2020]) and visual question answering datasets (VQAv2 (validation) [Agrawal et al., 2015], OK-VQA (validation) [Marino et al., 2019], TextVQA (validation) [Singh et al., 2019], and VizWiz (validation) [Gurari et al., 2018]). (Section 4.2)
  - [MINT-1T: Scaling Open-Source Multimodal Data by 10x: A Multimodal Dataset with One Trillion Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/40b9196c25fe1d64d87ca3a80a91d0ce-Paper-Datasets_and_Benchmarks_Track.pdf)
- **TextVQA** (measurements) — *measured_by*
  > The models are evaluated on four-shot and eight-shot in-context learning performance on various captioning benchmarks (COCO (Karpathy test) [Lin et al., 2014] and TextCaps (validation) [Sidorov et al., 2020]) and visual question answering datasets (VQAv2 (validation) [Agrawal et al., 2015], OK-VQA (validation) [Marino et al., 2019], TextVQA (validation) [Singh et al., 2019], and VizWiz (validation) [Gurari et al., 2018]). (Section 4.2)
  - [MINT-1T: Scaling Open-Source Multimodal Data by 10x: A Multimodal Dataset with One Trillion Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/40b9196c25fe1d64d87ca3a80a91d0ce-Paper-Datasets_and_Benchmarks_Track.pdf)
- **VizWiz** (measurements) — *measured_by*
  > The models are evaluated on four-shot and eight-shot in-context learning performance on various captioning benchmarks (COCO (Karpathy test) [Lin et al., 2014] and TextCaps (validation) [Sidorov et al., 2020]) and visual question answering datasets (VQAv2 (validation) [Agrawal et al., 2015], OK-VQA (validation) [Marino et al., 2019], TextVQA (validation) [Singh et al., 2019], and VizWiz (validation) [Gurari et al., 2018]). (Section 4.2)
  - [MINT-1T: Scaling Open-Source Multimodal Data by 10x: A Multimodal Dataset with One Trillion Tokens](https://proceedings.neurips.cc/paper_files/paper/2024/file/40b9196c25fe1d64d87ca3a80a91d0ce-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Commonsense reasoning** (constructs) — *causes*
  > It has been shown that including task demonstrations in the prompt can enhance the capability of language models to apply common sense and logical reasoning [65, 72] and learn patterns from the supplied demonstrations [14], significantly enhancing the flexibility and generality of language models. (Introduction)
  - [DETAIL: Task DEmonsTration Attribution for Interpretable In-context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2ceda49041816da6d5a34eb3b612607f-Paper-Conference.pdf)
- **Schema matching** (behaviors tasks) — *causes*
  > With in-context learning, off-the-shelf LLM can solve attribute alignment without fine-tuning. (Section 4.1)
  - [Tackling Uncertain Correspondences for Multi-Modal Entity Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/d7ed243b13831bdd468f35039936bcef-Paper-Conference.pdf)
- **Query rewriting** (behaviors tasks) — *causes*
  > we leverage the ICL capability of large language models (LLMs) [23, 30] to generate automatic keyword prompts similar to manually crafted prompts (Section 1).
  - [AP-Adapter: Improving Generalization of Automatic Prompts on Unseen Text-to-Image Diffusion Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b2077e6d66da612fcb701589efa9ce88-Paper-Conference.pdf)
- **CommonsenseQA** (measurements) — *measured_by*
  > IP = 1 N g PN g j=1 ˆa T e j N , which is the average in-context performance on N g general evaluation tasks... We set N g = 4 general evaluation tasks, covering Hellaswag (Zellers et al., 2019), CommonsenseQA (Talmor et al., 2018), Alpaca (Hendrycks et al., 2020), and BBH-Object-Count (Srivastava et al., 2022) (Section 3)
  - [Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf)
- **Alpaca instruction dataset** (measurements) — *measured_by*
  > IP = 1 N g PN g j=1 ˆa T e j N , which is the average in-context performance on N g general evaluation tasks... We set N g = 4 general evaluation tasks, covering Hellaswag (Zellers et al., 2019), CommonsenseQA (Talmor et al., 2018), Alpaca (Hendrycks et al., 2020), and BBH-Object-Count (Srivastava et al., 2022) (Section 3)
  - [Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf)
- **BBH Object Counting** (measurements) — *measured_by*
  > IP = 1 N g PN g j=1 ˆa T e j N , which is the average in-context performance on N g general evaluation tasks... We set N g = 4 general evaluation tasks, covering Hellaswag (Zellers et al., 2019), CommonsenseQA (Talmor et al., 2018), Alpaca (Hendrycks et al., 2020), and BBH-Object-Count (Srivastava et al., 2022) (Section 3)
  - [Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf)
- **DROP** (measurements) — *measured_by*
  > Please note that, among them, BBH, DROP, GSM8K, and MATH are ICL tasks with several independent in-context examples. (Section 3.1)
  - [Block-Attention for Efficient Prefilling](https://proceedings.iclr.cc/paper_files/paper/2025/file/a03037317560b8c5f2fb4b6466d4c439-Paper-Conference.pdf)
- **Compositional generalization** (constructs) — *causes*
  > What is striking is that learning in-context can under some circumstances lead to compositional generalization, that is generalization to unseen combinations of previously observed constituents
  - [Attention as a Hypernetwork](https://proceedings.iclr.cc/paper_files/paper/2025/file/abfa542f546df3c6c35695ec8d5bf4b9-Paper-Conference.pdf)
- **MAWPS** (measurements) — *measured_by*
  > We evaluate DiffuLLaMA’s math reasoning and in-context learning ability by evaluating on MAWPS (Koncel-Kedziorski et al., 2016) (Section 4.2).
  - [Scaling Diffusion Language Models via Adaptation from Autoregressive Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0fa81c3f0d57f95b8776de3a248ef0ed-Paper-Conference.pdf)
- **Planning** (constructs) — *causes*
  > In this work, we explore how to improve the model planning capability through in-context learning (ICL), specifically, what signals can help select the exemplars. (Section Abstract)
  - [Improving Large Language Model Planning with Action Sequence Similarity](https://proceedings.iclr.cc/paper_files/paper/2025/file/b18c6549c77411d92e645027a25838a8-Paper-Conference.pdf)
- **Personalization** (constructs) — *causes*
  > This approach fully harnesses the in-context learning capabilities of MLLMs, allowing them to adapt to new individuals without additional training. (Section 3)
  - [Personalized Visual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/6b69dcf999ee89f48d08c6c9881a4c0d-Paper-Conference.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > "We evaluate APE on three ICL tasks using the LM Evaluation Harness (Gao et al., 2024):: ... TriviaQA (5-shot)"
  - [APE: Faster and Longer Context-Augmented Generation via Adaptive Parallel Encoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/ce186a37e63b37638ecd06dee6b9a355-Paper-Conference.pdf)
- **Text-to-SQL** (behaviors tasks) — *causes*
  > With the demonstrations, our method fully leverages in-context learning capability and generate the target SQL correctly. (Section 3)
  - [DCG-SQL: Enhancing In-Context Learning for Text-to-SQL with Deep Contextual Schema Link Graph](https://aclanthology.org/2025.acl-long.748.pdf)
- **LongBench** (measurements) — *measured_by*
  > “LongBench (in-context learning and code completion)”
  - [LongRoPE2: Near-Lossless LLM Context Window Scaling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shang25a/shang25a.pdf)
- **Scalability** (constructs) — *causes*
  > This approach preserves the inherent structure of the ICL framework and introduces minimal computational and memory costs, ensuring both practical efficiency and methodological scalability.
  - [Iterative Vectors: In-Context Gradient Steering without Backpropagation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25j/liu25j.pdf)
- **Image editing** (behaviors tasks) — *causes*
  > Notably, Orthus exhibits in-context learning capacity by performing image editing successfully when provided with examples rather than explicit instructions, which is not included in the training dataset. (Figure 3)
  - [Orthus: Autoregressive Interleaved Image-Text Generation with Modality-Specific Heads](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kou25a/kou25a.pdf)
- **Hallucination detection** (behaviors tasks) — *causes*
  > These results imply that In-Context Learning can immediately enhance hallucination detection performance for certain models, datasets, and tasks, particularly when balanced examples with pre-/post-negated text and hallucination/no-hallucination cases are included.
  - [The Impact of Negated Text on Hallucination with Large Language Models](https://aclanthology.org/2025.emnlp-main.684.pdf)
- **Knowledge application** (constructs) — *causes*
  > In-Context Learning (ICL) enhances the generalization and knowledge utilization capabilities of Large Language Models (LLMs) (Abstract).
  - [Faster In-Context Learning for LLMs via N-Gram Trie Speculative Decoding](https://aclanthology.org/2025.emnlp-main.911.pdf)
- **Length bias** (constructs) — *causes*
  > This indicates that models can pick up length biases in-context. (Section 4.2)
  - [In-Context Learning (and Unlearning) of Length Biases](https://aclanthology.org/2025.naacl-long.390.pdf)

### → In-context learning
- **Representation learning** (constructs) — *causes*
  > we show that ICL can improve upon the a priori optimal rate when the task class basis resides in a coarser Besov space by learning to encode informative basis representations, emphasizing the importance of pretraining on diverse tasks. (Section 1)
  - [Transformers are Minimax Optimal Nonparametric In-Context Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/c11daad0a48ea5f3c5c6390c7b060720-Paper-Conference.pdf)
- **Chain of thought** (behaviors tasks) — *causes*
  > The foundational method for inducing in-context learning is the chain of thought approach
  - [Chain of Thoughtlessness? An Analysis of CoT in Planning](https://proceedings.neurips.cc/paper_files/paper/2024/file/3365d974ce309623bd8151082d78206c-Paper-Conference.pdf)
- **Catastrophic forgetting** (behaviors tasks) — *causes*
  > We introduce Copain, a new benchmark for in-context learning (ICL), which reveals catastrophic forgetting early on CPT when English is not included. This in turn damages the ability of the model to generalize to downstream prompts in the target language as measured by perplexity...
  - [Emergent Abilities of Large Language Models under Continued Pre-training for Language Adaptation](https://aclanthology.org/2025.acl-long.1547.pdf)
- **Generalization** (constructs) — *causes*
  > Our theoretical results of population loss reveal that model generalization, tightly with ICL abilities, is influenced by model size, optimization iterations, pre-training data and prompt length. This further demonstrates that ICL emerges from the excellent generalization of sequences and topics (Section 4.1 and Section 4.2).
  - [Towards Auto-Regressive Next-Token Prediction: In-context Learning Emerges from Generalization](https://proceedings.iclr.cc/paper_files/paper/2025/file/eedf422d321a20b2bd5e947c57c82e96-Paper-Conference.pdf)
- **Memorization** (constructs) — *causes*
  > we show that fine-tuning an LLM (Gemini Nano v1 Gemini Team, Google, 2023) to memorize certain data can result in a reduction of its ICL ability. (Section 1)
  - [Toward Understanding In-context vs. In-weight Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ae338b3fe6624798efa80b6581924028-Paper-Conference.pdf)

### Associated with
- **In-weights learning** (constructs)
  > In-context learning (ICL) is the ability to predict the response to a query based on illustrative examples presented in the context, without any additional weight updates. This form of learning contrasts with in-weights learning (IWL) of query-response relationships encoded in the weights of the network.
  - [The mechanistic basis of data dependence and abrupt learning in an in-context classification task](https://proceedings.iclr.cc/paper_files/paper/2024/file/540a3bf4863672cdaebfed69fa2ce335-Paper-Conference.pdf)
- **Meta-learning** (constructs)
  > Broadly speaking, current research identifies two main approaches to explain the ICL mechanism (Dong et al., 2024; Li et al., 2024): 1) Meta-learning, 2) Knowledge retrieval.
  - [Learning vs Retrieval: The Role of In-Context Examples in Regression with Large Language Models](https://aclanthology.org/2025.naacl-long.417.pdf)
- **Text classification** (behaviors tasks)
  > We evaluate the in-context learnig ability of ICLM using 32 demonstration examples. We use seven text classification datasets... (Section 3.3.2)
  - [In-Context Pretraining: Language Modeling Beyond Document Boundaries](https://proceedings.iclr.cc/paper_files/paper/2024/file/a1fe2365abdb691332537990a6385909-Paper-Conference.pdf)
- **Few-shot task performance** (behaviors tasks)
  > "Prompting with task-specific demonstrations (i.e., in-context learning (Brown et al., 2020))"
  - [Generative Adapter: Contextualizing Language Models in Parameters with A Single Forward Pass](https://proceedings.iclr.cc/paper_files/paper/2025/file/447708674d7f30492ca5338b36b07d0c-Paper-Conference.pdf)
- **Zero-shot generalization** (constructs)
  > our method randomly samples a varying number of examples during training, endowing the embedding model with in-context learning abilities while maintaining its zero-shot capabilities. (Abstract)
  - [Making Text Embedders Few-Shot Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/5eba8556ce2d1afff57591464d48fbc3-Paper-Conference.pdf)
- **Knowledge transfer** (constructs)
  > Moreover, the absence of the need to update model parameters also allows a good attribution result for ICL to be transferable across different language models. (Introduction)
  - [DETAIL: Task DEmonsTration Attribution for Interpretable In-context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2ceda49041816da6d5a34eb3b612607f-Paper-Conference.pdf)
- **Key-value retrieval** (behaviors tasks)
  > “we evaluate the capacity of various architectures to in-context learn associative recall”
  - [Is attention required for ICL? Exploring the Relationship Between Model Architecture and In-Context Learning Ability](https://proceedings.iclr.cc/paper_files/paper/2024/file/ea6d17af54f827336fc8fed27ca0319d-Paper-Conference.pdf)
- **Consistency** (constructs)
  > Besides confirming the existence of ICL ability, we are particularly interested in ... determining if our trained models demonstrate consistency, i.e., whether their performance converges in probability to some ceiling.
  - [Is attention required for ICL? Exploring the Relationship Between Model Architecture and In-Context Learning Ability](https://proceedings.iclr.cc/paper_files/paper/2024/file/ea6d17af54f827336fc8fed27ca0319d-Paper-Conference.pdf)
- **In-context linear regression** (behaviors tasks)
  > Based on our proposed training algorithm, empirical evidence demonstrates that looped transformer can be trained from scratch to in-context learn data generated from linear functions, sparse linear functions, decision trees, and 2-layer neural networks. (Section 1)
  - [Looped Transformers are Better at Learning Learning Algorithms](https://proceedings.iclr.cc/paper_files/paper/2024/file/b8402301e7f06bdc97a31bfaa653dc32-Paper-Conference.pdf)
- **Analogical reasoning** (constructs)
  > "Explicitly prompting them to recall relevant problems and solutions in the context guides LLMs to perform in-context learning to solve new problems."
  - [Large Language Models as Analogical Reasoners](https://proceedings.iclr.cc/paper_files/paper/2024/file/4990dad2c1696224de42573d0222554a-Paper-Conference.pdf)
- **Selectivity** (constructs)
  > In this paper, we give theoretical grounding to the selectivity mechanism, often linked to in-context learning, using tools from Rough Path Theory.
  - [Theoretical Foundations of Deep Selective State-Space Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/e6231c5f46598cfd09ff1970524e0436-Paper-Conference.pdf)
- **Retrieval-augmented generation** (behaviors tasks)
  > Such in-context learning (ICL) offers a novel and effective alternative to traditional fine-tuning techniques and has become an important feature of LLM with its applications spanning retrieval-augmented generation [Lewis et al., 2020]... (Introduction)
  - [Fine-grained Analysis of In-context Linear Estimation: Data, Architecture, and Beyond](https://proceedings.neurips.cc/paper_files/paper/2024/file/f9dc462382fef56d58279e75de2438f3-Paper-Conference.pdf)
- **Contextual understanding** (constructs)
  > constraining their application in tasks demanding extensive contextual awareness, such as in-context learning [28, 46] (Introduction).
  - [Mixture of In-Context Experts Enhance LLMs' Long Context Awareness](https://proceedings.neurips.cc/paper_files/paper/2024/file/91315fbb83ce353ae5538cba395f70d1-Paper-Conference.pdf)
- **Expressive power** (constructs)
  > We theoretically prove that ICL with transformer is expressive enough to mimic existing meta-learners. (Section 1)
  - [Why In-Context Learning Models are Good Few-Shot Learners?](https://proceedings.iclr.cc/paper_files/paper/2025/file/6c7ca1889f01a9b767c631686fb5fd24-Paper-Conference.pdf)
- **Low-test-error preference** (constructs)
  > We theoretically prove the low-test-error preference of ICL prediction, i.e., the ICL prediction prefers to implement the pretraining function with low test error (Section 5.1).
  - [Can In-context Learning Really Generalize to Out-of-distribution Tasks?](https://proceedings.iclr.cc/paper_files/paper/2025/file/cf7a83a5342befd11d3d65beba1be5b0-Paper-Conference.pdf)
- **Input regurgitation** (behaviors tasks)
  > We attribute this success to foundation models’ ability to perform in-context learning and identify context parroting as a simple mechanism used by these models to capture the long-term behavior of chaotic dynamical systems. (Abstract)
  - [Zero-shot forecasting of chaotic systems](https://proceedings.iclr.cc/paper_files/paper/2025/file/ea4d65c59073e8faf79222654d25fbe2-Paper-Conference.pdf)
- **Image classification** (behaviors tasks)
  > we design a 5-way 1-shot classification scenario to evaluate the performance with in-context learning (Section 4.1)
  - [Bridging Compressed Image Latents and Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/17061a94c3c7fda5fa24bbdd1832fa99-Paper-Conference.pdf)
- **In-context prediction** (behaviors tasks)
  > The ICL class of functions H uses only labels in the context to make a prediction
  - [Toward Understanding In-context vs. In-weight Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ae338b3fe6624798efa80b6581924028-Paper-Conference.pdf)
- **Grammatical error correction** (behaviors tasks)
  > Our work extends the use of LLMs in multilingual GEC through an easy-to-use in-context learning approach. (Section 2.1)
  - [Explanation based In-Context Demonstrations Retrieval for Multilingual Grammatical Error Correction](https://aclanthology.org/2025.naacl-long.251.pdf)
- **Controllability** (constructs)
  > The prompt steerability of a model is related to how well a model can learn from in-context examples (Brown, 2020; Wies et al., 2024). (Section 1.1)
  - [Evaluating the Prompt Steerability of Large Language Models](https://aclanthology.org/2025.naacl-long.400.pdf)
- **Knowledge retrieval** (behaviors tasks)
  > Broadly speaking, current research identifies two main approaches to explain the ICL mechanism (Dong et al., 2024; Li et al., 2024): 1) Meta-learning, 2) Knowledge retrieval.
  - [Learning vs Retrieval: The Role of In-Context Examples in Regression with Large Language Models](https://aclanthology.org/2025.naacl-long.417.pdf)
- **Long-context understanding** (constructs)
  > As LLMs have stronger capabilities and wider applications (Yang et al., 2024), its long-context capability becomes a vital bottleneck for various use cases (e.g. in-context learning, retrieval augmented generation, agent workflow etc.) (Agarwal et al., 2024; Xu et al., 2023; Weng, 2023). (Introduction)
  - [LongLeader: A Comprehensive Leaderboard for Large Language Models in Long-context Scenarios](https://aclanthology.org/2025.naacl-long.439.pdf)
- **Task learning** (constructs)
  > In effective ICL, the model infers the underlying task from the examples provided and refines its predictions based on the inferred task. (Section 2.1)
  - [Beyond Induction Heads: In-Context Meta Learning Induces Multi-Phase Circuit Emergence](https://raw.githubusercontent.com/mlresearch/v267/main/assets/minegishi25a/minegishi25a.pdf)
- **Latent variable inference** (constructs)
  > A plausible hypothesis behind the success of ICL is that since many tasks are based on some low-dimensional latents (e.g., complex games are described completely through their rules, linear regression through its underlying coefficients), Transformers might generalize to novel queries by inferring the task latents from the context
  - [Does learning the right latent variables necessarily improve in-context learning?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mittal25a/mittal25a.pdf)
- **Tabular classification** (behaviors tasks)
  > Leveraging the in-context learning (ICL) capability of Large Language Models (LLMs) for tabular classification has gained significant attention for its training-free adaptability across diverse datasets. (Abstract)
  - [TabFlex: Scaling Tabular Learning to Millions with Linear Attention](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zeng25b/zeng25b.pdf)
- **In-context classification** (behaviors tasks)
  > In this work, we study the training dynamics of a single-layer transformer for both binary and multi-class classification of Gaussian mixtures during ICL, a fundamental problem in machine learning.
  - [On the Training Convergence of Transformers for In-Context Classification of Gaussian Mixtures](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25q/shen25q.pdf)
- **Stability** (constructs)
  > We prove that the reasoning efficacy (measured by empirical prediction loss) can be bounded by an LLM-oriented semantic similarity and an inference stability of demonstrations, which is general for both one-shot and few-shot scenarios. (Abstract)
  - [What Makes In-context Learning Effective for Mathematical Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25ac/liu25ac.pdf)
- **Text summarization** (behaviors tasks)
  > ICL has proven remarkably successful in handling complex tasks, including summarization (Jain et al., 2023; Baek et al., 2024) and reasoning (Wang et al., 2024a; Lee et al., 2024; Chen et al., 2024b). (Section 2)
  - [MAPLE: Many-Shot Adaptive Pseudo-Labeling for In-Context Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25bo/chen25bo.pdf)
- **Question answering** (behaviors tasks)
  > For question-answering (QA) tasks, in-context learning (ICL) enables language models (LMs) to generate responses without modifying their parameters by leveraging examples provided in the input. (Abstract)
  - [Federated In-Context Learning: Iterative Refinement for Improved Answer Quality](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25db/wang25db.pdf)
- **Emergent abilities** (constructs)
  > It significantly outperforms Transformer baselines in language and vision tasks and improves emergent abilities such as in-context learning with minimal overhead. (Section 5).
  - [MUDDFormer: Breaking Residual Bottlenecks in Transformers via Multiway Dynamic Dense Connections](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiao25d/xiao25d.pdf)
- **Factual recall** (behaviors tasks)
  > While fact recall begins to significantly degrade when more than 30% of weights are removed through pruning, in-context learning capabilities show remarkable resilience, maintaining performance even with aggressive pruning of up to 60-70% of weights. (Section 5.1)
  - [Position: Enough of Scaling LLMs! Lets Focus on Downscaling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/goel25c/goel25c.pdf)
- **Previous-token attention** (behaviors tasks)
  > "when Layer 1 acts as previous token heads, the network exhibits ICL"
  - [Strategy Coopetition Explains the Emergence and Transience of In-Context Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/singh25c/singh25c.pdf)
- **Task alignment** (constructs)
  > The alignment refers to the model’s ability to follow task-specific instructions and demonstrations, i.e., its in-context learning ability. (Section 2)
  - [Targeted Distillation for Sentiment Analysis](https://aclanthology.org/2025.emnlp-main.1127.pdf)
- **Text-to-speech synthesis** (behaviors tasks)
  > We conduct experiments to validate the effectiveness of LLM-Codec in an in-context learning setting. ... we evaluate LLM-Codec on various audio understanding and generation tasks, such as speech emotion classification, audio classification, simple text-to-speech, and speech denoising.
  - [UniAudio 1.5: Large Language Model-Driven Audio Codec is A Few-Shot Audio Task Learner](https://proceedings.neurips.cc/paper_files/paper/2024/file/6801fa3fd290229efc490ee0cf1c5687-Paper-Conference.pdf)
- **Zero-shot inference** (behaviors tasks)
  > our unsupervised ICL method improves upon the zero-shot inference by using a few self-generated examples as a context that are labeled by the model itself, thus without requiring any labeled examples. (Section 2)
  - [Large (Vision) Language Models are Unsupervised In-Context Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e887bf77d0ba6db38802e552a0d81d2-Paper-Conference.pdf)
- **Recursive stability** (constructs)
  > 2. Application to Transformers in In-Context Learning: This paper is the first to extend the theoretical framework to transformer models in in-context learning. We prove that transformers in this setting satisfy recursive stability
  - [A Theoretical Perspective: How to Prevent Model Collapse in Self-consuming Training Loops](https://proceedings.iclr.cc/paper_files/paper/2025/file/e92e6d20f7b5db5c2a1b23964d170fe2-Paper-Conference.pdf)
- **LASER** (measurements)
  > "LASER that leverages state-of-the-art LLMs’ in-context learning abilities to learn from prompts with detailed examples."
  - [LASER: An LLM-based ASR Scoring and Evaluation Rubric](https://aclanthology.org/2025.emnlp-main.1257.pdf)
