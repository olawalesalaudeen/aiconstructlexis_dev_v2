# Commonsense reasoning
**Type:** Construct  
**Referenced in:** 324 papers  
**Also known as:** Common sense reasoning, Common-sense reasoning, Commonsense inference, Common sense inference, Common sense understanding, Commonsense Inference, Commonsense grounding, Commonsense understanding  

## State of the Field

**Definition agreement:** Consensus. Most papers define commonsense reasoning as the ability to use everyday or real-world knowledge and human-like intuitive assumptions to make plausible inferences, judgments, or predictions about ordinary physical or social situations, often measured through question answering, continuation, or selection tasks. A few papers narrow this to particular settings such as causal text questions, video, spatial, safety, or embodied tasks, but they still treat the same core capability rather than a different phenomenon.

**Space of definitions.** Across papers, the prevailing usage treats commonsense reasoning as a latent ability to use everyday or general world knowledge, intuition, and shared assumptions about ordinary physical or social situations to make plausible inferences, judgments, or predictions, especially when relevant information is not explicit. Many definitions phrase this as making presumptions about the ordinary world, applying broad knowledge to infer likely outcomes, or filling knowledge gaps through informal reasoning. A smaller line of work defines it more narrowly as the observable task of answering benchmark questions, choosing plausible continuations, or doing sentence completion, and a few papers situate it in specific settings such as embodied task structure, video interpretation, spatial filtering, or cause and effect questions in text. The main disagreement is therefore between a broad latent ability and narrower task- or setting-specific formulations.

**Space of facets.** Papers use several nearby labels around the same family of phenomena: commonsense inference typically emphasizes plausible unstated conclusions or relations between concepts and events, commonsense understanding emphasizes answering or following instructions that depend on commonsense knowledge, and commonsense grounding emphasizes interpreting and acting in realistic scenarios. One paper explicitly subdivides commonsense reasoning into explanatory, predictive, and counterfactual sub-skills, while another conceptualization ties it to a default world model of background conditions and assumptions. Across these uses, papers often place it near broader reasoning and world-knowledge abilities, but the labels are not used uniformly.

**Space of measurement.** Operationally, papers link commonsense reasoning to 57 measurement instruments and 9 behavioral indicators. The most recurrent instruments are benchmark datasets, especially HellaSwag, WinoGrande, PIQA, OpenBookQA, and ARC-Challenge; many studies also frame the target behavior as multiple-choice or True/False question answering, sentence completion, or selecting the most plausible continuation, often in zero-shot or few-shot evaluation and sometimes through shared evaluation harnesses or composite benchmark suites. Smaller strands extend measurement to multilingual, multimodal, video, agent, and embodied benchmarks. These operationalizations generally match the task-oriented definitions, but they also narrow broader latent-ability definitions to short-form answer selection or QA accuracy.

**Links.** Beyond measurement, papers most often report commonsense reasoning as related to reasoning more broadly, and some also relate it to world knowledge and other neighboring reasoning notions. Several single-paper claims also record causal relationships from commonsense reasoning to generalization and other downstream capabilities or behaviors, while separate papers claim causal relationships from in-context learning to commonsense reasoning and from refusal to commonsense reasoning. A smaller line of work uses commonsense reasoning itself as a measure of broader abilities.

## Sources

**[Adapting Large Language Models via Reading Comprehension](https://proceedings.iclr.cc/paper_files/paper/2024/file/d51cd79a85833b022841f7a2383b32d3-Paper-Conference.pdf)**
> The ability to make presumptions about the ordinary world, reflecting a shared understanding of everyday situations.

**[Eureka: Human-Level Reward Design via Coding Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/70c26937fbf3d4600b69a129031b66ec-Paper-Conference.pdf) (as "Common sense reasoning")**
> The ability to make sound practical judgments concerning everyday situations or events, such as identifying which state variables are relevant for a physical task.

**[WizardLM: Empowering Large Pre-Trained Language Models to Follow Complex Instructions](https://proceedings.iclr.cc/paper_files/paper/2024/file/82eec786fdfbbfa53450c5feb7d1ac92-Paper-Conference.pdf) (as "Commonsense inference")**
> The ability to make plausible inferences about everyday situations and concepts that are not explicitly stated.

**[Grounding Language Plans in Demonstrations Through Counterfactual Perturbations](https://proceedings.iclr.cc/paper_files/paper/2024/file/be62c4a943675195ff5a2a98d5b9724f-Paper-Conference.pdf) (as "Common-sense reasoning")**
> The latent ability to infer plausible task structure and physical interactions from language and demonstrations in embodied settings.

**[Magnetic Preference Optimization: Achieving Last-iterate Convergence for Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/5833b4daf5b076dd1cdb362b163dff0c-Paper-Conference.pdf) (as "Commonsense understanding")**
> The latent ability to answer questions and solve problems that depend on everyday physical or social commonsense knowledge.

**[SVBench: A Benchmark with Temporal Multi-Turn Dialogues for Streaming Video Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/693ce820ea7e0f0c70a2a833cbdf7ccc-Paper-Conference.pdf) (as "Common sense inference")**
> The ability to apply general world knowledge to interpret video content and provide a logical framework for understanding events.

**[Understanding and Improving Length Generalization in Recurrent Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/buitrago25a/buitrago25a.pdf) (as "Common sense understanding")**
> The model's ability to comprehend and reason about situations in a way that aligns with general human knowledge and intuition.

**[Benchmarking LLMs via Uncertainty Quantification](https://proceedings.neurips.cc/paper_files/paper/2024/file/1bdcb065d40203a00bd39831153338bb-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Commonsense Inference")**
> Understanding and reasoning about the relationships between concepts and events based on commonsense and background knowledge.

**[AgentBench: Evaluating LLMs as Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e9df36b21ff4ee211a8b71ee8b7e9f57-Paper-Conference.pdf) (as "Commonsense grounding")**
> The latent ability to apply everyday knowledge and intuitive understanding of the physical and social world to interpret and act in realistic scenarios.

## Relationships

### Commonsense reasoning →
- **HellaSwag** (measurements) — *measured_by*
  > We further assess the zero-shot common sense reasoning ability on tasks covering HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), WinoGrande (Sakaguchi et al., 2019), ARC (Clark et al., 2018), BoolQ (Clark et al., 2019), and OpenBookQA (Mihaylov et al., 2018). (Section 4.1)
  - [QA-LoRA: Quantization-Aware Low-Rank Adaptation of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/e6c2e85db1f1039177c4495ccd399ac4-Paper-Conference.pdf)
- **WinoGrande** (measurements) — *measured_by*
  > For the text modality, we compare the zero-shot performance on some common sense reasoning tasks: PIQA (Bisk et al., 2020), ARC-Challenge, ARC-Easy (Clark et al., 2018), StoryCloze (Mostafazadeh et al., 2016), Winograd, and Winogrande (Sakaguchi et al., 2021). (Table 1)
  - [Jointly Training Large Autoregressive Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d564edd2bf015ac07c8031ab3f9839b0-Paper-Conference.pdf)
- **PIQA** (measurements) — *measured_by*
  > For the text modality, we compare the zero-shot performance on some common sense reasoning tasks: PIQA (Bisk et al., 2020), ARC-Challenge, ARC-Easy (Clark et al., 2018), StoryCloze (Mostafazadeh et al., 2016), Winograd, and Winogrande (Sakaguchi et al., 2021). (Table 1)
  - [Jointly Training Large Autoregressive Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d564edd2bf015ac07c8031ab3f9839b0-Paper-Conference.pdf)
- **OpenBookQA** (measurements) — *measured_by*
  > We further assess the zero-shot common sense reasoning ability on tasks covering HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), WinoGrande (Sakaguchi et al., 2019), ARC (Clark et al., 2018), BoolQ (Clark et al., 2019), and OpenBookQA (Mihaylov et al., 2018). (Section 4.1)
  - [QA-LoRA: Quantization-Aware Low-Rank Adaptation of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/e6c2e85db1f1039177c4495ccd399ac4-Paper-Conference.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > For the text modality, we compare the zero-shot performance on some common sense reasoning tasks: PIQA (Bisk et al., 2020), ARC-Challenge, ARC-Easy (Clark et al., 2018), StoryCloze (Mostafazadeh et al., 2016), Winograd, and Winogrande (Sakaguchi et al., 2021). (Table 1)
  - [Jointly Training Large Autoregressive Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d564edd2bf015ac07c8031ab3f9839b0-Paper-Conference.pdf)
- **ARC-Easy** (measurements) — *measured_by*
  > For the text modality, we compare the zero-shot performance on some common sense reasoning tasks: PIQA (Bisk et al., 2020), ARC-Challenge, ARC-Easy (Clark et al., 2018), StoryCloze (Mostafazadeh et al., 2016), Winograd, and Winogrande (Sakaguchi et al., 2021). (Table 1)
  - [Jointly Training Large Autoregressive Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d564edd2bf015ac07c8031ab3f9839b0-Paper-Conference.pdf)
- **CommonsenseQA** (measurements) — *measured_by*
  > For commonsense reasoning, we consider CSQA for multiple-choice questions (Talmor et al., 2019) and StrategyQA for true or false questions (Geva et al., 2021) (Section 4.1).
  - [BadChain: Backdoor Chain-of-Thought Prompting for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/791d3337291b2c574545aeecfa75484c-Paper-Conference.pdf)
- **BoolQ** (measurements) — *measured_by*
  > Specifically, we consider commonsense reasoning: BoolQ (Clark et al., 2019), COPA (Roemmele et al., 2011); (Section 5.1)
  - [Batch Calibration: Rethinking Calibration for In-Context Learning and Prompt Engineering](https://proceedings.iclr.cc/paper_files/paper/2024/file/003e438cf04e3caf0a5c908495e484fe-Paper-Conference.pdf)
- **SIQA** (measurements) — *measured_by*
  > Commonsense Reasoning (0-shot): HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), SIQA (Sap et al., 2019)... (Section 4.2).
  - [Megalodon: Efficient LLM Pretraining and Inference with Unlimited Context Length](https://proceedings.neurips.cc/paper_files/paper/2024/file/840abfadd04c967feaa2a49aba94a32d-Paper-Conference.pdf)
- **StrategyQA** (measurements) — *measured_by*
  > For commonsense reasoning, we consider CSQA for multiple-choice questions (Talmor et al., 2019) and StrategyQA for true or false questions (Geva et al., 2021) (Section 4.1).
  - [BadChain: Backdoor Chain-of-Thought Prompting for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/791d3337291b2c574545aeecfa75484c-Paper-Conference.pdf)
- **ARC** (measurements) — *measured_by*
  > We evaluate SEC in the following tasks and datasets (details in Appendix A.1): ... Commonsense Reasoning: AI2 Reasoning Challenge (ARC) (Clark et al., 2018) (Section 3.1)
  - [Are Human-generated Demonstrations Necessary for In-context Learning?](https://proceedings.iclr.cc/paper_files/paper/2024/file/19914b5bf19ab2b245d2e6ff7299e8f0-Paper-Conference.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > For commonsense reasoning we follow the LM Evaluation Harness [16] implementations of these tasks, evaluating on the test sets of ARC and OpenBookQA and the validation sets of HellaSwag, WinoGrande, BoolQ and PIQA, which brings our evaluations in line with other models. (Section 5.1)
  - [Would I Lie To You? Inference Time Alignment of Language Models using Direct Preference Heads](https://proceedings.neurips.cc/paper_files/paper/2024/file/ad3d0ac42b4b5cc3b5f0ca10107d5c84-Paper-Conference.pdf)
- **SciQ** (measurements) — *measured_by*
  > For common sense and reading comprehension tasks, we report 0-shot accuracy results for SciQ [22], PIQA [23], WinoGrande (Wino.) [24], ARC Easy(ARC-E.) [25], and HellaSwag (HellaS.) [26], alongside 25-shot accuracy for ARC Challenge (ARC-C.) [27]. (Section 5.1)
  - [DHA: Learning Decoupled-Head Attention from Transformer Checkpoints via Adaptive Heads Fusion](https://proceedings.neurips.cc/paper_files/paper/2024/file/518a75257f37b32f711082dff33c2ffc-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > The MMLU [31] can assess a model’s multi-task learning abilities across natural language inference, commonsense reasoning, question answering, etc. (Section 4.1)
  - [Instance-adaptive Zero-shot Chain-of-Thought Prompting](https://proceedings.neurips.cc/paper_files/paper/2024/file/e304e04a6f455dd82f8a85a0a3679493-Paper-Conference.pdf)
- **Commonsense170K** (measurements) — *measured_by*
  > Specifically, we leverage Commonsense170K (Hu et al., 2023), which is a combination of eight commonsense reasoning datasets... for both training and evaluation. (Section 5)
  - [LLM Braces: Straightening Out LLM Predictions with Relevant Sub-Updates](https://aclanthology.org/2025.acl-long.393.pdf)
- **Commonsense reasoning benchmark** (measurements) — *measured_by*
  > “We also evaluate on Commonsense Reasoning benchmarks BoolQ, PIQA, SIQA, HellaSwag, WinoGrande, ARC and OBQA.”
  - [FouRA: Fourier Low-Rank Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/83960718b4d12f799985206f1b1cf00f-Paper-Conference.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > several question-answering datasets for common-sense reasoning: Arc-C [10], HellaSwag [56], TruthfulQA [29] and WinoGrande [45]
  - [Compact Language Models via Pruning and Knowledge Distillation](https://proceedings.neurips.cc/paper_files/paper/2024/file/4822991365c962105b1b95b1107d30e5-Paper-Conference.pdf)
- **XCOPA** (measurements) — *measured_by*
  > For NLI and reasoning, we use XNLI (Conneau et al., 2018) and XCOPA (Ponti et al., 2020) with zero-shot prompting. (Section 5.4)
  - [Adapters for Altering LLM Vocabularies: What Languages Benefit the Most?](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab5492f57995409351cbf1a1cdf5f1a4-Paper-Conference.pdf)
- **LAMBADA** (measurements) — *measured_by*
  > we evaluate the models from Figure 3 on five downstream tasks: ARC-easy, lambada, RACE, PIQA, and BoolQ, which collectively test for common sense reasoning, world knowledge, and reading comprehension. (Section 4.3)
  - [Sparse maximal update parameterization: A holistic approach to sparse training dynamics](https://proceedings.neurips.cc/paper_files/paper/2024/file/3b6aaffec941f98930753fa6d6de7263-Paper-Conference.pdf)
- **COPA** (measurements) — *measured_by*
  > Specifically, we consider commonsense reasoning: BoolQ (Clark et al., 2019), COPA (Roemmele et al., 2011); (Section 5.1)
  - [Batch Calibration: Rethinking Calibration for In-Context Learning and Prompt Engineering](https://proceedings.iclr.cc/paper_files/paper/2024/file/003e438cf04e3caf0a5c908495e484fe-Paper-Conference.pdf)
- **StoryCloze** (measurements) — *measured_by*
  > For the text modality, we compare the zero-shot performance on some common sense reasoning tasks: PIQA (Bisk et al., 2020), ARC-Challenge, ARC-Easy (Clark et al., 2018), StoryCloze (Mostafazadeh et al., 2016), Winograd, and Winogrande (Sakaguchi et al., 2021). (Table 1)
  - [Jointly Training Large Autoregressive Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d564edd2bf015ac07c8031ab3f9839b0-Paper-Conference.pdf)
- **WSC** (measurements) — *measured_by*
  > For the text modality, we compare the zero-shot performance on some common sense reasoning tasks: PIQA (Bisk et al., 2020), ARC-Challenge, ARC-Easy (Clark et al., 2018), StoryCloze (Mostafazadeh et al., 2016), Winograd, and Winogrande (Sakaguchi et al., 2021). (Table 1)
  - [Jointly Training Large Autoregressive Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d564edd2bf015ac07c8031ab3f9839b0-Paper-Conference.pdf)
- **MuSR** (measurements) — *measured_by*
  > “The domains we address here, murder mysteries, object placement, and team assignment, involve commonsense reasoning about physical (Bisk et al., 2020) and social situations (Sap et al., 2019), theory-of-mind, and more.”
  - [MuSR: Testing the Limits of Chain-of-thought with Multistep Soft Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/3f8c7eb848ffec848f3ed2b7ca44915d-Paper-Conference.pdf)
- **RiddleSense** (measurements) — *measured_by*
  > RiddleSense [22] is a benchmark dataset designed for evaluating complex commonsense reasoning within the framework of riddle-style questions. (Section 2)
  - [Weak-eval-Strong: Evaluating and Eliciting Lateral Thinking of LLMs with Situation Puzzles](https://proceedings.neurips.cc/paper_files/paper/2024/file/914b372356d58d9e9357b29332cb8fdc-Paper-Conference.pdf)
- **Creak** (measurements) — *measured_by*
  > We evaluate our UniCoTT over CREAK (Onoe et al., 2021), StrategyQA (Geva et al., 2021) and CSQA2 (Talmor et al., 2021) datasets, which contain a large number of questions about entity knowledge and commonsense reasoning (Section 4.1).
  - [UniCoTT: A Unified Framework for Structural Chain-of-Thought Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ca642f8e1174012d67c05c1c9f969644-Paper-Conference.pdf)
- **CommonsenseQA 2.0** (measurements) — *measured_by*
  > We evaluate our UniCoTT over CREAK (Onoe et al., 2021), StrategyQA (Geva et al., 2021) and CSQA2 (Talmor et al., 2021) datasets, which contain a large number of questions about entity knowledge and commonsense reasoning (Section 4.1).
  - [UniCoTT: A Unified Framework for Structural Chain-of-Thought Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ca642f8e1174012d67c05c1c9f969644-Paper-Conference.pdf)
- **ECQA** (measurements) — *measured_by*
  > ECQA (Aggarwal et al., 2021) for explainable commonsense reasoning (Section 3.1)
  - [Weak to Strong Generalization for Large Language Models with Multi-capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/1ebcb8f051d0c178474619bbfb32b340-Paper-Conference.pdf)
- **CosmosQA** (measurements) — *measured_by*
  > Common sense Q&A (CosmosQA) (Huang et al., 2019): Common sense questions ... to demonstrate how common sense reasoning is affected by writing style.
  - [Persona-Augmented Benchmarking: Evaluating LLMs Across Diverse Writing Styles](https://aclanthology.org/2025.emnlp-main.1155.pdf)
- **MathQA** (measurements) — *measured_by*
  > along with 7 common sense reasoning datasets (OpenbookQA (Mihaylov et al., 2018), WinoGrande (Sakaguchi et al., 2020), HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), MathQA (Amini et al., 2019), ARC-e, and ARC-c (Clark et al., 2018)) (Section 4.1).
  - [MoE-SVD: Structured Mixture-of-Experts LLMs Compression via Singular Value Decomposition](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25az/li25az.pdf)
- **XStoryCloze** (measurements) — *measured_by*
  > We use XStoryCloze (Lin et al., 2021) and MGSM (Shi et al., 2022) to test the model’s commonsense and mathematical reasoning ability in multilingual contexts respectively. (Section 3.3)
  - [Pangea: A Fully Open Multilingual Multimodal LLM for 39 Languages](https://proceedings.iclr.cc/paper_files/paper/2025/file/770b8cf7ef10b4aa7170d09b36b6bb6f-Paper-Conference.pdf)
- **AgentBench** (measurements) — *measured_by*
  > AGENTBENCH thus systematically evaluate an LLM’s core abilities, including following instructions (Ouyang et al., 2022), coding (Chen et al., 2021), knowledge acquisition (Joshi et al., 2017; Talmor et al., 2019), logical reasoning (Srivastava et al., 2023), and commonsense grounding (Shridhar et al., 2020a).
  - [AgentBench: Evaluating LLMs as Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e9df36b21ff4ee211a8b71ee8b7e9f57-Paper-Conference.pdf)
- **OSWorld** (measurements) — *measured_by*
  > It prioritizes a balanced benchmark across eight key applications... highlighting the need for varied operational skills, including commonsense reasoning, software navigation, and precise input control. (Section 3.1)
  - [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d413e48f84dc61244b6be550f1cd8f5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Generalization** (constructs) — *causes*
  > Theoretically, owing to the commonsense reasoning faculties of MLLMs, our model can be generalized to discover any attributes and interrelations across various real-world objects and scenes.
  - [Graph-based Unsupervised Disentangled Representation Learning via Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/bac4d92b3f6decfe47eab9a5893dd1f6-Paper-Conference.pdf)
- **Self-consistency** (measurements) — *measured_by*
  > “We apply self-consistency over diverse reasoning paths (Wang et al., 2023), selecting the most frequent answer in the candidate set, and report results on the SVAMP ... and StrategyQA ... datasets.”
  - [Reranking Laws for Language Generation: A Communication-Theoretic Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/c8b2f897e45770595656a79a9ad91e89-Paper-Conference.pdf)
- **X-CSQA** (measurements) — *measured_by*
  > a challenging multilingual dataset X-CSQA [Lin et al., 2021] in commonsense reasoning task (Section 4.2)
  - [MindMerger: Efficiently Boosting LLM Reasoning in non-English Languages](https://proceedings.neurips.cc/paper_files/paper/2024/file/3bf80b34f731313b8292f4578e820c90-Paper-Conference.pdf)
- **ANLI** (measurements) — *measured_by*
  > For commonsense reasoning, we use ... ANLI [39], a dataset for natural language understanding and reasoning. (Section 5.1)
  - [AutoPSV: Automated Process-Supervised Verifier](https://proceedings.neurips.cc/paper_files/paper/2024/file/9246aa822579d9b29a140ecdac36ad60-Paper-Conference.pdf)
- **MMBench-Video** (measurements) — *measured_by*
  > we further introduce three additional L-2 capabilities specific to MMBench-Video: Hallucination, Commonsense Reasoning, and Temporal Reasoning.
  - [MMBench-Video: A Long-Form Multi-Shot Benchmark for Holistic Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a2326c9715a516c91174132e0170073a-Paper-Datasets_and_Benchmarks_Track.pdf)
- **GSM8K** (measurements) — *measured_by*
  > eight common sense reasoning datasets (six measured by both individual and average accuracy (↑), TruthfulQA measured by BLEU score (↑), and GSM8K measured by Exact Match Accuracy (↑)) (Table 1)
  - [SVD-LLM: Truncation-aware Singular Value Decomposition for Large Language Model Compression](https://proceedings.iclr.cc/paper_files/paper/2025/file/3104e1ab39875cf54fe1eb4473e7c5a1-Paper-Conference.pdf)
- **TextWorld** (measurements) — *measured_by*
  > tasks requiring long-horizon memory and planning, exploration, and commonsense in TextWorld
  - [Intelligent Go-Explore: Standing on the Shoulders of Giant Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/369a30aac2765950865efd318cef7f76-Paper-Conference.pdf)
- **Open LLM Leaderboard** (measurements) — *measured_by*
  > This evaluation suite measures LLM performance across six tasks: commonsense reasoning (Arc (Clark et al., 2018), HellaSwag (Zellers et al., 2019), Winogrande (Sakaguchi et al., 2021)), multi-task language understanding (MMLU (Hendrycks et al., 2020)), mimicking human falsehoods (TruthfulQA (Lin et al., 2021)), and math problem-solving (GSM8K (Cobbe et al., 2021)).
  - [Joint Reward and Policy Learning with Demonstrations and Human Feedback Improves Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/0ad6ebd11593822b8a6d5873ca9c5b0b-Paper-Conference.pdf)
- **Reward function generation** (behaviors tasks) — *causes*
  > In recent works, large language models (LLMs) have been used for reward generation from natural language task descriptions, leveraging their extensive instruction tuning and commonsense understanding of human behavior. (Abstract)
  - [REvolve: Reward Evolution with Large Language Models using Human Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc8ee7c7ab5b5f6b1615045dfb617ed6-Paper-Conference.pdf)
- **Hypothesis generation** (behaviors tasks) — *causes*
  > An LLM leverages common-sense reasoning to generate hypotheses, while a symbolic tool ensures their logical consistency through systematic validation. (Section 3.1)
  - [NeSyC: A Neuro-symbolic Continual Learner For Complex Embodied Tasks in Open Domains](https://proceedings.iclr.cc/paper_files/paper/2025/file/d569e4655e2835e3d38310b67c5ad646-Paper-Conference.pdf)
- **LogiQA** (measurements) — *measured_by*
  > Commonsense Reasoning: HellaSwag (Zellers et al., 2019), SIQA (Sap et al., 2019), Wino- Grande (Sakaguchi et al., 2021), Logiqa (Liu et al., 2020).
  - [Harnessing Diversity for Important Data Selection in Pretraining Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b588d9b67932b459ea66ff6e2804c6b3-Paper-Conference.pdf)
- **LogiQA 2.0** (measurements) — *measured_by*
  > zero-shot downstream performance on 6 common-sense reasoning domains from the language model evaluation harness (Gao et al., 2024): HellaSwag (Zellers et al., 2019), WinoGrande (Sakaguchi et al., 2019), PIQA (Bisk et al., 2019), ARC-E (Clark et al., 2018), SciQ (Welbl et al., 2017), LogiQA2 (Liu et al., 2023) and LAMBADA (Paperno et al., 2016). (Section 4)
  - [Adaptive Data Optimization: Dynamic Sample Selection with Scaling Laws](https://proceedings.iclr.cc/paper_files/paper/2025/file/923285deb805c3e14e1aeebc9854d644-Paper-Conference.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > To evaluate the efficacy of our approach, we use GSM8K (Cobbe et al., 2021), Big-Bench-Hard (BBH) (Suzgun et al., 2022), and FOLIO (Han et al., 2022) benchmark datasets for diverse reasoning tasks in mathematics, commonsense, and logical reasoning. (Section 5.1)
  - [GReaTer: Gradients Over Reasoning Makes Smaller Language Models Strong Prompt Optimizers](https://proceedings.iclr.cc/paper_files/paper/2025/file/18a42aad2fa8aa871e2ee20d425c208d-Paper-Conference.pdf)
- **Date Understanding** (measurements) — *measured_by*
  > Following the previous work, our main evaluation dataset comprises 16,725 samples spanning commonsense reasoning (Date Understanding, CommonsenseQA)... (Section 4.1)
  - [Reasoning Aware Self-Consistency: Leveraging Reasoning Paths for Efficient LLM Sampling](https://aclanthology.org/2025.naacl-long.184.pdf)
- **BABILong** (measurements) — *measured_by*
  > BABILong (Kuratov et al., 2024) is a challenging benchmark which tests both the common sense understanding of a model as well as its ability to capture long range dependencies in text (Section 5.1).
  - [Understanding and Improving Length Generalization in Recurrent Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/buitrago25a/buitrago25a.pdf)
- **MME** (measurements) — *measured_by*
  > “For MME subset evaluations (covering both object-level and attribute-level hallucinations), the results in Figure 2 and Table 8 indicate that MemVR uniformly improves in handling object-level and attribute-level hallucinations, as well as commonsense reasoning.”
  - [Look Twice Before You Answer: Memory-Space Visual Retracing for Hallucination Mitigation in Multimodal Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zou25e/zou25e.pdf)
- **CommonsenseQA-CoT** (measurements) — *measured_by*
  > we fine-tune the models on the ... commonsense reasoning benchmark CommonsenseQA-CoT (Shen et al., 2025). (Section 4.3)
  - [DART: Distilling Autoregressive Reasoning to Silent Thought](https://aclanthology.org/2025.emnlp-main.256.pdf)
- **QASC** (measurements) — *measured_by*
  > we evaluate on eight widely utilized commonsense QA datasets: CommonsenseQA (Talmor et al., 2019), OpenBookQA (Mihaylov et al., 2018), ARC-Easy and ARC-Challenge (Clark et al., 2018), PIQA (Bisk et al., 2020), WinoGrande (Sakaguchi et al., 2020), CommonsenseQA 2.0 (Talmor et al., 2021), and QASC (Khot et al., 2020). (Section 4.2)
  - [Connecting the Knowledge Dots: Retrieval-augmented Knowledge Connection for Commonsense Reasoning](https://aclanthology.org/2025.emnlp-main.1203.pdf)
- **QuaRel** (measurements) — *measured_by*
  > For OOD datasets, we evaluate on eight different commonsense reasoning datasets: Story Cloze Test (Mostafazadeh et al., 2016), HellaSwag (Zellers et al., 2019), NumerSense (Lin et al., 2020), RiddleSense (Lin et al., 2021), QuaRTz (Tafjord et al., 2019b), SciQ (Welbl et al., 2017), WSC (Levesque et al., 2012), and QuaRel (Tafjord et al., 2019a). (Section 4.2)
  - [Connecting the Knowledge Dots: Retrieval-augmented Knowledge Connection for Commonsense Reasoning](https://aclanthology.org/2025.emnlp-main.1203.pdf)
- **GPQA** (measurements) — *measured_by*
  > we assess model capabilities in... commonsense reasoning on Hellaswag (Zellers et al., 2019) and GPQA (Rein et al., 2024). (Section 4.1)
  - [Middo: Model-Informed Dynamic Data Optimization for Enhanced LLM Fine-Tuning via Closed-Loop Learning](https://aclanthology.org/2025.emnlp-main.350.pdf)
- **seqBench** (measurements) — *measured_by*
  > We find that even top-performing models systematically fail on seqBench’s structured reasoning tasks despite minimal search complexity, underscoring key limitations in their commonsense reasoning capabilities. (Abstract)
  - [seqBench: A Tunable Benchmark to Quantify Sequential Reasoning Limits of LLMs](https://aclanthology.org/2025.emnlp-main.1714.pdf)
- **SWAG** (measurements) — *measured_by*
  > “we assess its performance on paraphrase detection using the QQP dev set, natural language inference (NLI) using both the MNLI matched and mismatched dev sets, and commonsense reasoning using the SWAG dev set.”
  - [LLM-Guided Co-Training for Text Classification](https://aclanthology.org/2025.emnlp-main.1583.pdf)

### → Commonsense reasoning
- **In-context learning** (constructs) — *causes*
  > It has been shown that including task demonstrations in the prompt can enhance the capability of language models to apply common sense and logical reasoning [65, 72] and learn patterns from the supplied demonstrations [14], significantly enhancing the flexibility and generality of language models. (Introduction)
  - [DETAIL: Task DEmonsTration Attribution for Interpretable In-context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2ceda49041816da6d5a34eb3b612607f-Paper-Conference.pdf)
- **Refusal** (behaviors tasks) — *causes*
  > The bottom radar maps show that they fall behind in knowledge, information extraction, and commonsense reasoning compared to GPT-4o, partially because of this refusal behavior.
  - [MEGA-Bench: Scaling Multimodal Evaluation to over 500 Real-World Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/461f1fd5f92e5ca95764a88304dc39f7-Paper-Conference.pdf)

### Associated with
- **Reasoning** (constructs)
  > challenging tasks that rely on the reasoning capabilities of LLMs, such as solving arithmetic problems (Hendrycks et al., 2021) and commonsense reasoning (Talmor et al., 2019) (Section 1).
  - [BadChain: Backdoor Chain-of-Thought Prompting for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/791d3337291b2c574545aeecfa75484c-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks)
  > we used the PEFT library (Mangrulkar et al., 2022) for fine-tuning LlaMA2-7B on common-sense reasoning tasks (multiple choice or True/False classification). (Section 5)
  - [Bayesian Low-rank Adaptation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/07c256a163a7559186ec1c71e95b9ec9-Paper-Conference.pdf)
- **World knowledge** (constructs)
  > We define 4 primary abilities which are divided into 12 fine-grained skills for comprehensive language model evaluation: ... Background Knowledge (Factuality, Commonsense Understanding)... (Section 1)
  - [FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf)
- **Complex reasoning** (constructs)
  > Long-chain reasoning task (Wei et al., 2022; Xiong et al., 2024), such as commonsense reasoning and math reasoning, is one of the critical capabilities in large language models (LLMs) (Lai et al., 2024).
  - [TPO: Aligning Large Language Models with Multi-branch & Multi-step Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/42ac0f53b7ffede90aea8275b11b3bb8-Paper-Conference.pdf)
- **Analytical reasoning** (constructs)
  > This involves several reasoning types: numerical reasoning for interpreting data, temporal reasoning for time-related concepts, lexical reasoning for word meanings, domain-specific reasoning for specialized knowledge, and common-sense reasoning for inferences.
  - [TRANSIENTTABLES: Evaluating LLMs' Reasoning on Temporally Evolving Semi-structured Tables](https://aclanthology.org/2025.naacl-long.332.pdf)
- **Commonsense generation** (behaviors tasks)
  > In the task of Generative Commonsense Reasoning (GCR), an NLG model is expected to generate sentences that are both quality-bearing (i.e. logically coherent and commonsense-aware) and diverse (i.e. offering varied perspectives on the same input concepts) (Section 1).
  - [Evaluating the Evaluation of Diversity in Commonsense Generation](https://aclanthology.org/2025.acl-long.1181.pdf)
- **Commonsense question answering** (behaviors tasks)
  > answering commonsense questions correctly requires not only knowledge but also reasoning—even for seemingly simple questions. (Abstract)
  - [Beyond Surface Simplicity: Revealing Hidden Reasoning Attributes for Precise Commonsense Diagnosis](https://aclanthology.org/2025.acl-long.627.pdf)
- **Scientific reasoning** (constructs)
  > commonsense logic captured by popular language datasets (Gao et al., 2020; Weber et al., 2024) largely deviates from scientific reasoning that requires math and physics backgrounds, leading to poor performance (Table 4 and 9). (Section 1)
  - [PDE-Controller: LLMs for Autoformalization and Reasoning of PDEs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/soroco25a/soroco25a.pdf)
- **Multimodal reasoning** (constructs)
  > We also show some multi-modal reasoning examples in Figure 6. Our approach exhibits better object counting, OCR, and commence reasoning performance. (Section 4.2)
  - [LLaMA-Adapter: Efficient Fine-tuning of Large Language Models with Zero-initialized Attention](https://proceedings.iclr.cc/paper_files/paper/2024/file/c196239c5f9481e0db2755f31fe4585f-Paper-Conference.pdf)
- **Multilingual ability** (constructs)
  > We measure the language model’s multilingual capabilities by evaluating its translation and common-sense reasoning performance.
  - [Just Go Parallel: Improving the Multilingual Capabilities of Large Language Models](https://aclanthology.org/2025.acl-long.1602.pdf)
- **Rationality** (constructs)
  > Instead, it...engages in human common-sense reasoning for rationality in this stage. (Section 3.3)
  - [GRADEO: Towards Human-Like Evaluation for Text-to-Video Generation via Multi-Step Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mou25a/mou25a.pdf)
