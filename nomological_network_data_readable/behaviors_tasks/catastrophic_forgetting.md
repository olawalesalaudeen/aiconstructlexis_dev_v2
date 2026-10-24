# Catastrophic forgetting
**Type:** Behavior  
**Referenced in:** 39 papers  
**Also known as:** Knowledge forgetting, Text-only forgetting, Forgetting  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats catastrophic forgetting as a post-update drop on previously learned tasks, knowledge, or capabilities. Most definitions focus on sequential learning or fine-tuning, where performance on earlier tasks deteriorates after new data is introduced; adjacent work uses the same pattern for sequential editing, judging forgetting by weaker retention of prior edits or old knowledge after many later updates. Smaller lines of work extend the label to unlearning, multimodal expansion, or continued pretraining, where the observable sign is again degradation on retained, text-only, or broadly learned behavior.

**Variants.** Variants are mostly defined by setting. Papers name knowledge forgetting in collaborative or lifelong editing, where older edited facts and previously edited examples become less accurately retained after later editing rounds, and text-only forgetting in multimodal models, where text-only tasks or instructions fall after multimodal instruction tuning or visual modality expansion. Other papers discuss forgetting on generic web or domain data during continual pretraining, during specialization to new tasks, and one paper further divides multimodal continual instruction tuning into superficial forgetting alongside another subtype.

**Space of elicitation and scores.** Papers link catastrophic forgetting to 14 measurement instruments. The most frequently linked are BIG-Bench Hard, GSM8K, MMLU, ARC-Challenge, and HellaSwag, typically used as general-task or out-domain benchmarks for the degree of forgetting or forgetting curves. Other work evaluates it with coding benchmarks, multimodal benchmarks, and broader leaderboard-style task bundles.

**What it is taken as evidence of.** Rather than being treated as evidence of one construct, papers connect catastrophic forgetting to 26 constructs. The most common links are to Continual learning and Generalization, followed by Adaptability, Knowledge retention, and General ability. The relationship types are mixed: papers often describe it as related to continual learning or knowledge retention, while other papers claim causal links from catastrophic forgetting to lower generalization or general ability, and separate papers claim causal links into catastrophic forgetting from continual learning or adaptability-related conditions.

## Sources

**[Learn more, but bother less: parameter efficient continual learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/b0bc711f48724237b38823c4d9cee10b-Paper-Conference.pdf)**
> The observable phenomenon where a model's performance on previously learned tasks significantly deteriorates after it is trained on new data.

**[CollabEdit: Towards Non-destructive Collaborative Knowledge Editing](https://proceedings.iclr.cc/paper_files/paper/2025/file/47eb71e8e778dc9def7780baa7b35687-Paper-Conference.pdf) (as "Knowledge forgetting")**
> Previously edited facts become less accurately retained after many subsequent editing rounds.

**[Wings: Learning Multimodal LLMs without Text-only Forgetting](https://proceedings.neurips.cc/paper_files/paper/2024/file/3852f6d247ba7deb46e4e4be9e702601-Paper-Conference.pdf) (as "Text-only forgetting")**
> A phenomenon where a Multimodal Large Language Model's performance on text-only tasks degrades significantly after being fine-tuned on multimodal instructions.

**[TiC-LM: A Web-Scale Benchmark for Time-Continual LLM Pretraining](https://aclanthology.org/2025.acl-long.1551.pdf) (as "Forgetting")**
> The degradation of a model's performance on previously learned data or tasks after it has been updated with new information.

## Relationships

### Catastrophic forgetting →
- **Generalization** (constructs) — *causes*
  > This in turn damages the ability of the model to generalize to downstream prompts in the target language as measured by perplexity (Section 1)
  - [Emergent Abilities of Large Language Models under Continued Pre-training for Language Adaptation](https://aclanthology.org/2025.acl-long.1547.pdf)
- **General ability** (constructs) — *causes*
  > Furthermore, after fine-tuning the downstream tasks, the LLM may lose the general capability, due to catastrophic forgetting. (Section 1)
  - [SLIM: Let LLM Learn More and Forget Less with Soft LoRA and Identity Mixture](https://aclanthology.org/2025.naacl-long.246.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > In this section, we explore the forgetting of CultureLLM in two general datasets: BIG-Bench-Hard (BBH) [Suzgun et al., 2022] and GSM8K [Cobbe et al., 2021]. (Section 5.2)
  - [CultureLLM: Incorporating Cultural Differences into Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a16935bf54c4af233e25d998b7f4a2c-Paper-Conference.pdf)
- **GSM8K** (measurements) — *measured_by*
  > In this section, we explore the forgetting of CultureLLM in two general datasets: BIG-Bench-Hard (BBH) [Suzgun et al., 2022] and GSM8K [Cobbe et al., 2021]. (Section 5.2)
  - [CultureLLM: Incorporating Cultural Differences into Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a16935bf54c4af233e25d998b7f4a2c-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > “To better illustrate the forgetting issue emerging in the fine-tuning process, we evaluate the MMLU score of different intermediate checkpoints”
  - [Q-Adapter: Customizing Pre-trained LLMs to New Preferences with Forgetting Mitigation](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ebfb4ec1926fc6409df3bcf7ce957e8-Paper-Conference.pdf)
- **In-context learning** (constructs) — *causes*
  > We introduce Copain, a new benchmark for in-context learning (ICL), which reveals catastrophic forgetting early on CPT when English is not included. This in turn damages the ability of the model to generalize to downstream prompts in the target language as measured by perplexity...
  - [Emergent Abilities of Large Language Models under Continued Pre-training for Language Adaptation](https://aclanthology.org/2025.acl-long.1547.pdf)
- **Functional correctness** (constructs) — *causes*
  > This suggests that direct SFT may lead to catastrophic forgetting in vanilla models, diminishing their ability to generate functionally correct code. (Section 4.5)
  - [Mercury: A Code Efficiency Benchmark for Code Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/1df1df43b58845650b8dada00fca9772-Paper-Datasets_and_Benchmarks_Track.pdf)
- **World knowledge** (constructs) — *causes*
  > the fine-tuned model suffers from catastrophic forgetting of the pre-trained world knowledge
  - [CorDA: Context-Oriented Decomposition Adaptation of Large Language Models for Task-Aware Parameter-Efficient Fine-tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/83f95bb0ac5046338ea2afe3390e9f4b-Paper-Conference.pdf)
- **POPE** (measurements) — *measured_by*
  > To evaluate the extent of catastrophic forgetting in Yo’LLaVA, we assessed both the Original LLaVA-1.5-13B [10] and Yo’LLaVA using common benchmarks for multimodal models: POPE [41], MMBench [42], and LLaVA-Wild [2]. (Appendix B)
  - [Yo'LLaVA: Your Personalized Language and Vision Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/48088756ec0ce6ba362bddc7ebeb3915-Paper-Conference.pdf)
- **MMBench** (measurements) — *measured_by*
  > To evaluate the extent of catastrophic forgetting in Yo’LLaVA, we assessed both the Original LLaVA-1.5-13B [10] and Yo’LLaVA using common benchmarks for multimodal models: POPE [41], MMBench [42], and LLaVA-Wild [2]. (Appendix B)
  - [Yo'LLaVA: Your Personalized Language and Vision Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/48088756ec0ce6ba362bddc7ebeb3915-Paper-Conference.pdf)
- **LLaVA-Bench-in-the-Wild** (measurements) — *measured_by*
  > To evaluate the extent of catastrophic forgetting in Yo’LLaVA, we assessed both the Original LLaVA-1.5-13B [10] and Yo’LLaVA using common benchmarks for multimodal models: POPE [41], MMBench [42], and LLaVA-Wild [2]. (Appendix B)
  - [Yo'LLaVA: Your Personalized Language and Vision Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/48088756ec0ce6ba362bddc7ebeb3915-Paper-Conference.pdf)
- **Open LLM Leaderboard** (measurements) — *measured_by*
  > In this section, we show that GEM also helps mitigate forgetting and reduce alignment tax. We evaluate the models across six tasks: ARC, GSM8K, HellaSwag, MMLU, TruthfulQA, and WinoGrande, as listed on the OpenLLM leaderboard. (Section 6.2)
  - [Preserving Diversity in Supervised Fine-Tuning of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a548ef984f30bca3abdc09f43743827f-Paper-Conference.pdf)
- **HumanEval** (measurements) — *measured_by*
  > we evaluated forgetting on coding tasks with HumanEval Chen et al. (2021), observing some degradation. (Section 6)
  - [Aligning Language Models with Demonstrated Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/349a45f211fb1b3850da1ccd829e869e-Paper-Conference.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > Specifically, we calculate prediction accuracies on the following three benchmarks: (1) HellaSwag (Zellers et al., 2019): inference the most plausible continuation for daily events (70K problems); (2) WinoGrande (Sakaguchi et al., 2019): assesses commonsense reasoning (44K problems); (3) ARC-Challenge (Clark et al., 2018): complex reasoning and understanding of scientific concepts (7.8K problems)... to investigate the extent of forgetting
  - [RaSA: Rank-Sharing Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4fd162d3e2d015233486a2e313828a7-Paper-Conference.pdf)
- **WinoGrande** (measurements) — *measured_by*
  > Specifically, we calculate prediction accuracies on the following three benchmarks: (1) HellaSwag (Zellers et al., 2019): inference the most plausible continuation for daily events (70K problems); (2) WinoGrande (Sakaguchi et al., 2019): assesses commonsense reasoning (44K problems); (3) ARC-Challenge (Clark et al., 2018): complex reasoning and understanding of scientific concepts (7.8K problems)... to investigate the extent of forgetting
  - [RaSA: Rank-Sharing Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4fd162d3e2d015233486a2e313828a7-Paper-Conference.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > Specifically, we calculate prediction accuracies on the following three benchmarks: (1) HellaSwag (Zellers et al., 2019): inference the most plausible continuation for daily events (70K problems); (2) WinoGrande (Sakaguchi et al., 2019): assesses commonsense reasoning (44K problems); (3) ARC-Challenge (Clark et al., 2018): complex reasoning and understanding of scientific concepts (7.8K problems)... to investigate the extent of forgetting
  - [RaSA: Rank-Sharing Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4fd162d3e2d015233486a2e313828a7-Paper-Conference.pdf)
- **PIQA** (measurements) — *measured_by*
  > The fine-tuned models under MDS are evaluated on the general tasks including MMLU (Hendrycks et al., 2021), GSM8K (Cobbe et al., 2021), and PIQA (Bisk et al., 2020) to measure the catastrophic forgetting of the PEFT approaches. (Section 4.1)
  - [SLIM: Let LLM Learn More and Forget Less with Soft LoRA and Identity Mixture](https://aclanthology.org/2025.naacl-long.246.pdf)
- **XNLI** (measurements) — *measured_by*
  > To demonstrate a more natural instance of catastrophic forgetting, we consider what happens to a language model after we fine-tune on code. ... To test forgetting, we use the XNLI benchmark (Conneau et al., 2018) (Section 4.2)
  - [Understanding Catastrophic Forgetting in Language Models via Implicit Inference](https://proceedings.iclr.cc/paper_files/paper/2024/file/692ae28fda9bfbde7c01b13bf5a03395-Paper-Conference.pdf)
- **Commonsense reasoning benchmark** (measurements) — *measured_by*
  > we also evaluate on the commonsense reasoning QA task after training on the instruction-following datasets to assess knowledge forgetting. (Section 5.1)
  - [Weights-Rotated Preference Optimization for Large Language Models](https://aclanthology.org/2025.emnlp-main.1329.pdf)

### → Catastrophic forgetting
- **Continual learning** (constructs) — *causes*
  > However, due to the continual learning process with limited data, FCRE models are often biased toward the current task, facing the challenges of overfitting (Hawkins, 2004) and Catastrophic forgetting (Thrun and Mitchell, 1995; Le et al., 2024a; Hai et al., 2024; Van et al., 2022; Phan et al., 2022). (Section 1)
  - [Enhancing Discriminative Representation in Similar Relation Clusters for Few-Shot Continual Relation Extraction](https://aclanthology.org/2025.naacl-long.123.pdf)
- **Instruction fine-tuning** (behaviors tasks) — *causes*
  > However, a notable concern with such continual tuning is 'catastrophic forgetting'
  - [Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks) — *causes*
  > Furthermore, we reveal that the catastrophic forgetting in MLLMs is primarily due to the decline in instruction following rather than reasoning knowledge.
  - [CoIN: A Benchmark of Continual Instruction Tuning for Multimodel Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6a45500d9eda640deed90d8a62742be5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Generation diversity** (constructs) — *causes*
  > preserving output diversity has the added benefit of mitigating forgetting, as maintaining diverse outputs encourages models to retain pre-trained knowledge throughout the training process. (Section 1)
  - [Preserving Diversity in Supervised Fine-Tuning of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a548ef984f30bca3abdc09f43743827f-Paper-Conference.pdf)
- **Parameter sensitivity** (constructs) — *causes*
  > We argue that catastrophic overtraining arises as a result of a progressive increase throughout pre-training of model sensitivity to parameter transformations, leading to greater forgetting of the capabilities acquired during pre-training after fine-tuning (Section 3). (Figure 1)
  - [Overtrained Language Models Are Harder to Fine-Tune](https://raw.githubusercontent.com/mlresearch/v267/main/assets/springer25a/springer25a.pdf)
- **Catastrophic overtraining** (constructs) — *causes*
  > In this work, we show that catastrophic forgetting can become more severe with overtraining. (Section 5)
  - [Overtrained Language Models Are Harder to Fine-Tune](https://raw.githubusercontent.com/mlresearch/v267/main/assets/springer25a/springer25a.pdf)
- **Knowledge editing** (behaviors tasks) — *causes*
  > The model typically encounters catastrophic forgetting during sequential edits, where previously edited examples are forgotten (Wang et al., 2024a; Gupta et al., 2024a). (Section 1)
  - [Towards Lifelong Model Editing via Simulating Ideal Editor](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guo25c/guo25c.pdf)
- **Reward hacking** (behaviors tasks) — *causes*
  > As a result, this leads to overly lengthy generation lacking diversity, as well as catastrophic forgetting of knowledge. (Abstract)
  - [Weights-Rotated Preference Optimization for Large Language Models](https://aclanthology.org/2025.emnlp-main.1329.pdf)

### Associated with
- **Knowledge retention** (constructs)
  > the “catastrophic forgetting” phenomenon, which refers to the potential loss of previously learned information caused by the distribution shift during the fine-tuning process for novel tasks
  - [Scalable Language Model with Generalized Continual Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/79fe2c290c0566f88617e9c5bd593441-Paper-Conference.pdf)
- **Adaptability** (constructs)
  > We present DES-MoE, a dynamic framework for multi-domain MoE adaptation that mitigates catastrophic forgetting through adaptive routing and expert-domain correlation mapping. (Section 6)
  - [Dynamic Expert Specialization: Towards Catastrophic Forgetting-Free Multi-Domain MoE Adaptation](https://aclanthology.org/2025.emnlp-main.932.pdf)
- **Reasoning** (constructs)
  > we reveal that the catastrophic forgetting in MLLMs is primarily due to the decline in instruction following rather than reasoning knowledge.
  - [CoIN: A Benchmark of Continual Instruction Tuning for Multimodel Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6a45500d9eda640deed90d8a62742be5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Personalization** (constructs)
  > First, when personalizing an LMM, we want to ensure that its broad pre-trained knowledge is unaffected (i.e., there is no catastrophic forgetting [15, 16]). (Section 1)
  - [Yo'LLaVA: Your Personalized Language and Vision Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/48088756ec0ce6ba362bddc7ebeb3915-Paper-Conference.pdf)
- **Knowledge transfer** (constructs)
  > Cross-domain co-training on a large number of datasets only negatively impacts LLaGA. A similar phenomenon can also be observed when LLMs with cross-modality projectors are applied to CV [49], which may be related to catastrophic forgetting. (Section 4.2.1)
  - [Text-space Graph Foundation Models: Comprehensive Benchmarks and New Insights](https://proceedings.neurips.cc/paper_files/paper/2024/file/0e0b39c69663e9c073739adf547ed778-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Language model pre-training** (behaviors tasks)
  > applying our data mixing laws to continual pretraining can accurately find the proportion that avoids catastrophic forgetting (Section 5).
  - [Data Mixing Laws: Optimizing Data Mixtures by Predicting Language Modeling Performance](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc84bfabe6389d8883fc2071c848f62a-Paper-Conference.pdf)
- **Knowledge forgetting** (constructs)
  > This observation challenges the conventional understanding of catastrophic forgetting and prompts us to explore whether forgetting genuinely occurs in language models or if it is, in fact, spurious (Section 1).
  - [Spurious Forgetting in Continual Learning of Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf)
- **Task interference** (constructs)
  > Task interference is linked to catastrophic forgetting, as the individual task vectors lose a significant amount of generalization ability to other tasks after fine-tuning and merging them leads to interference among each other (Section 5.2).
  - [LiNeS: Post-training Layer Scaling Prevents Forgetting and Enhances Model Merging](https://proceedings.iclr.cc/paper_files/paper/2025/file/43ae0b566b802b2d00e525b672794b82-Paper-Conference.pdf)
- **Machine unlearning** (constructs)
  > we interpret unlearning as the forgetting of the predictive output token sequences yi ∈Dtr f . (Section 3.2)
  - [Soft Prompting for Unlearning in Large Language Models](https://aclanthology.org/2025.naacl-long.204.pdf)
- **Unlearning** (constructs)
  > The absence of a clear endpoint leads to a delicate balance between unlearning and retaining useful information, making these methods prone to catastrophic forgetting. (Section 3)
  - [UNDIAL: Self-Distillation with Adjusted Logits for Robust Unlearning in Large Language Models](https://aclanthology.org/2025.naacl-long.444.pdf)
- **Hallucination** (behaviors tasks)
  > (Zhai et al., 2023) deem that the hallucination in large models is related to the catastrophic forgetting in continual tuning. (Section 5.4. Analysis of Examples)
  - [Large Continual Instruction Assistant](https://raw.githubusercontent.com/mlresearch/v267/main/assets/qiao25e/qiao25e.pdf)
- **Superficial forgetting** (constructs)
  > This paper provides an in-depth analysis of catastrophic forgetting in MCIT, categorizing it into superficial forgetting and essential forgetting. (Section 6)
  - [SEFE: Superficial and Essential Forgetting Eliminator for Multimodal Continual Instruction Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25n/chen25n.pdf)
- **Instruction following ability** (constructs)
  > While CPT is effective at introducing domain concepts, it often leads to significant forgetting of general concepts and instruction-following capabilities. (Section 3.2.1)
  - [Demystifying Domain-adaptive Post-training for Financial LLMs](https://aclanthology.org/2025.emnlp-main.1579.pdf)
- **Task recognition** (constructs)
  > We find that the catastrophic effects of fine-tuning may be explained as shifting task inference and that transforming prompts further from the fine-tuning data can recover pretrained capabilities. (Section 6)
  - [Understanding Catastrophic Forgetting in Language Models via Implicit Inference](https://proceedings.iclr.cc/paper_files/paper/2024/file/692ae28fda9bfbde7c01b13bf5a03395-Paper-Conference.pdf)
- **Skill retention** (constructs)
  > Random experience replay using 10% data from past datasets significantly improves skills retention over sequential training, bringing down the forgetting rate from 26% to 6.6%.
  - [Adapt-$\infty$: Scalable Continual Multimodal Instruction Tuning via Dynamic Data Selection](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6610efd6c767f63343a4ab28505212e-Paper-Conference.pdf)
