# Robustness
**Type:** Construct  
**Referenced in:** 672 papers  
**Also known as:** Model robustness, Worst-case performance  

## State of the Field

**Definition agreement:** Complementary. Most papers use robustness for the same broad phenomenon: a model or agent maintaining intended performance, reasoning, behavior, or safety when prompts, inputs, environments, data distributions, or other operating conditions are perturbed, shifted, or made more challenging. A few papers instead apply the term to the persistence of things like watermarks, backdoors, jailbreak prompts, or evaluation methods, so the literature is not a strict consensus, but the dominant uses are complementary facets of stability under stress rather than outright contradictions.

**Space of definitions.** Across the surveyed work, the prevailing usage describes robustness as stable model performance or behavior under changes in prompts, inputs, task conditions, environments, or evaluation setup. Many papers apply this broad framing to prompt paraphrases and ordering, noisy or degraded inputs, distribution shifts, adversarial perturbations, new opponents or environments, and other superficial or challenging variations, often contrasting robustness with brittleness to minor changes. Smaller lines of work define it more narrowly as retaining pre-learned general capabilities after task-specific fine-tuning, or as worst-case performance on rare shifted inputs rather than average performance. Another recurring minority usage applies the term to the persistence of an artifact rather than the model, for example a jailbreak prompt, backdoor, or watermark remaining effective or detectable after defenses, fine-tuning, editing, or paraphrasing.

**Space of facets.** Papers most often organize robustness by the source of variation: prompt and instruction changes, input noise or superficial perturbations, out-of-distribution data, adversarial or jailbreak attacks, and deployment across opponents, seeds, or environments. A smaller strand explicitly separates out-of-distribution from adversarial robustness, and some benchmark papers place robustness inside broader Trustworthiness framings or alongside Safety and Consistency. Across linked constructs, robustness is frequently discussed alongside Generalization, while Selection bias is used to describe one recurring failure mode. The same label is also used for distinct objects, model stability, retention after adaptation, and persistence of watermarks or backdoors.

**Space of measurement.** Papers link robustness to 45 measurement instruments and 16 behavioral indicators. The most common instruments are AdvBench, GSM-Hard, MMBench, MMLU-Redux, and SVAMP, plus 40 other instruments; these are mostly benchmarks or dynamic environments that probe performance under adversarial inputs, out-of-domain tests, shuffled answer choices, text perturbations, varying task parameters or seeds, and degraded context, and one paper also uses a judge-based comparison. Among behavioral indicators, links cluster around attack, generation, and agent behaviors. These operationalizations usually match the dominant definition by scoring stability under perturbation or shift, though some operationalize robustness as retention of earlier capabilities after fine-tuning or as watermark and backdoor persistence under attack or overwriting.

**Links.** Across linked constructs, several papers claim causal relationships from Generalization to Robustness, and one paper claims the reverse from Robustness to Generalization. Several papers also claim causal relationships from Reasoning and from In-context learning to Robustness, and one paper separately claims a causal relationship from Out-of-distribution generalization to Robustness and from Robustness to Out-of-distribution generalization. Papers also relate robustness to Generalization non-causally, and one paper reports that robustness correlates with Selection bias.

## Sources

**[NextCoder: Robust Adaptation of Code LMs to Diverse Code Edits](https://raw.githubusercontent.com/mlresearch/v267/main/assets/aggarwal25b/aggarwal25b.pdf)**
> The degree to which a model retains its pre-learned general capabilities, such as code generation and problem-solving, after fine-tuning on a specialized task like code editing.

**[Buffer of Thoughts: Thought-Augmented Reasoning with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cde328b7bf6358f5ebb91fe9c539745e-Paper-Conference.pdf) (as "Model robustness")**
> The stability of an LLM's reasoning performance across similar problems, tasks, or perturbations in task conditions.

**[Estimating the Probabilities of Rare Outputs in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cdaac2a02c4fdcae77ba083b110efcc3-Paper-Conference.pdf) (as "Worst-case performance")**
> The extent to which a model avoids highly undesirable outputs on rare or adversarially shifted inputs rather than only performing well on average.

## Relationships

### Robustness →
- **GSM-Hard** (measurements) — *measured_by*
  > The drop in performance on GSM-Hard compared to GSM indicates that our models may not be robust to input perturbations, though, they are at par with previous work. (Limitations and Potential Risks)
  - [OpenMathInstruct-1: A 1.8 Million Math Instruction Tuning Dataset](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d5aa9a7ce28cdc710fbd044fd3610f3-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MMBench** (measurements) — *measured_by*
  > MMBench and the CN version evaluate a model’s answer robustness with all-round shuffling on multiple choice answers. (Section 4.1)
  - [Efficient Large Multi-modal Models via Visual Context Compression](https://proceedings.neurips.cc/paper_files/paper/2024/file/871ed095b734818cfba48db6aeb25a62-Paper-Conference.pdf)
- **SVAMP** (measurements) — *measured_by*
  > SVAMP (Patel et al., 2021), a robustness evaluation benchmark. (Section 3.4)
  - [CodePlan: Unlocking Reasoning Potential in Large Language Models by Scaling Code-form Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/c362b360765ed90ae4bd9c6764837e0e-Paper-Conference.pdf)
- **GAIA** (measurements) — *measured_by*
  > Static benchmarks are broken benchmarks in the making, and making GAIA evolve year-by-year through the removal of broken questions and the addition of new ones might be an important component to better assess the generalization and robustness of AI systems. (Section 5)
  - [GAIA: a benchmark for General AI Assistants](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf)
- **OSWorld** (measurements) — *measured_by*
  > We find that current agents are not robust to these superficial changes, which lead to performance drops of 60% and even 80%. (Section 5)
  - [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d413e48f84dc61244b6be550f1cd8f5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Out-of-distribution generalization** (constructs) — *causes*
  > The emergent abilities of LLMs, especially in OOD scenarios, largely depends on the robustness of their representations (Section 3.4)
  - [Tri-Level Navigator: LLM-Empowered Tri-Level Learning for Time Series OOD Generalization](https://proceedings.neurips.cc/paper_files/paper/2024/file/c78d9d035215039ab46e48c281e6a63d-Paper-Conference.pdf)
- **MMBench-CN** (measurements) — *measured_by*
  > MMBench and the CN version evaluate a model’s answer robustness with all-round shuffling on multiple choice answers. (Section 4.1)
  - [Efficient Large Multi-modal Models via Visual Context Compression](https://proceedings.neurips.cc/paper_files/paper/2024/file/871ed095b734818cfba48db6aeb25a62-Paper-Conference.pdf)
- **A-OKVQA** (measurements) — *measured_by*
  > We introduce typos into A-OKVQA [34] and VQAv2 [12] to test the robustness against text perturbations. (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **VQA-v2** (measurements) — *measured_by*
  > We introduce typos into A-OKVQA [34] and VQAv2 [12] to test the robustness against text perturbations. (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **VirtualHome** (measurements) — *measured_by*
  > Finally, we demonstrate superior performance and robustness of ExRAP via intensive experiments with home robots and autonomous driving scenarios in VirtualHome, ALFRED, and CARLA. (Introduction)
  - [Exploratory Retrieval-Augmented Planning For Continual Embodied Instruction Following](https://proceedings.neurips.cc/paper_files/paper/2024/file/7bacd0ebd061d4694583ae0eb69ad15f-Paper-Conference.pdf)
- **ALFRED** (measurements) — *measured_by*
  > Finally, we demonstrate superior performance and robustness of ExRAP via intensive experiments with home robots and autonomous driving scenarios in VirtualHome, ALFRED, and CARLA. (Introduction)
  - [Exploratory Retrieval-Augmented Planning For Continual Embodied Instruction Following](https://proceedings.neurips.cc/paper_files/paper/2024/file/7bacd0ebd061d4694583ae0eb69ad15f-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > Kangaroo shows consistent high performance across different tasks such as QA, Math, and MT Bench, indicating its robustness and versatility. (Section 5.1)
  - [Kangaroo: Lossless Self-Speculative Decoding for Accelerating LLMs via Double Early Exiting](https://proceedings.neurips.cc/paper_files/paper/2024/file/16336d94a5ffca8de019087ab7fe403f-Paper-Conference.pdf)
- **MS MARCO** (measurements) — *measured_by*
  > “To evaluate the model’s robustness in non-Wikipedia scenarios where high-quality text and titles are not available, we conduct experiments on a subset of MS MARCO”
  - [Self-Retrieval: End-to-End Information Retrieval with One Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/741ad162ab0f3da6f9aad60e9e34f5f1-Paper-Conference.pdf)
- **Needle-in-a-Haystack** (measurements) — *measured_by*
  > We design a needle-in-the-haystack experiment which allows us to ... evaluate its robustness w.r.t. the position of the relevant information in the input context. (Section 4.3)
  - [Provence: efficient and robust context pruning for retrieval-augmented generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e956fef0946dc1e39760f94b78045fe-Paper-Conference.pdf)
- **AndroidWorld** (measurements) — *measured_by*
  > To understand agent robustness, we analyze M3A’s performance across different random seeds, which generate different task parameters... (Section 5)
  - [AndroidWorld: A Dynamic Benchmarking Environment for Autonomous Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/01a83bc2f2732a58e6aa731e659e7101-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > GPT-4 comparison for robustness (Figure 5 caption).
  - [Uncertainty and Influence aware Reward Model Refinement for Reinforcement Learning from Human Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/fd7259e22add6de6df8ff0ccc902a34d-Paper-Conference.pdf)
- **FLAN** (measurements) — *measured_by*
  > To demonstrate the generalizability and robustness of our method, we include FLAN (Chung et al., 2024) (a mix of multiple NLP tasks) as reference datasets .
  - [Harnessing Diversity for Important Data Selection in Pretraining Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b588d9b67932b459ea66ff6e2804c6b3-Paper-Conference.pdf)
- **LLaVA-Bench-in-the-Wild** (measurements) — *measured_by*
  > To assess robustness, we tested on the generalized dataset LLaVA-Bench. (Section 4)
  - [DAMO: Decoding by Accumulating Activations Momentum for Mitigating Hallucinations in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8f0f23417ce1d00212a7c85c2560c392-Paper-Conference.pdf)
- **GSM-Plus** (measurements) — *measured_by*
  > GSM-Plus, which tests model robustness. (Section 4.4)
  - [Forewarned is Forearmed:  Harnessing LLMs for Data Synthesis via Failure-induced Exploration](https://proceedings.iclr.cc/paper_files/paper/2025/file/1cded4f97cf5f01a284c574110b7e3b9-Paper-Conference.pdf)
- **SmoothLLM** (measurements) — *measured_by*
  > “We select SmoothLLM (Robey et al., 2023) as our defense mechanism since it employs a perturbation-based approach, which is essential for establishing a robustness score.”
  - [One Model Transfer to All: On Robust Jailbreak Prompts Generation against LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/124cc3a6e8f563555c8bba9f5ded690f-Paper-Conference.pdf)
- **AudioBench** (measurements) — *measured_by*
  > Consequently, to minimize variability and thoroughly test model robustness, we incorporate at least 20 diverse prompt templates into our evaluation framework for the tasks without diverse prompts originally.
  - [AudioBench: A Universal Benchmark for Audio Large Language Models](https://aclanthology.org/2025.naacl-long.218.pdf)
- **Zero-shot prompting** (measurements) — *measured_by*
  > "We investigate the robustness of several LLMs in zero-shot, few-shot, and chain-of-thought prompting."
  - [FactEval: Evaluating the Robustness of Fact Verification Systems in the Era of Large Language Models](https://aclanthology.org/2025.naacl-long.534.pdf)
- **Few-shot prompting** (measurements) — *measured_by*
  > "We investigate the robustness of several LLMs in zero-shot, few-shot, and chain-of-thought prompting."
  - [FactEval: Evaluating the Robustness of Fact Verification Systems in the Era of Large Language Models](https://aclanthology.org/2025.naacl-long.534.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > We create noised versions of HellaSwag and find that BLT outperforms in terms of robustness the Llama 3 BPE model by a large margin (Table 2).
  - [Byte Latent Transformer: Patches Scale Better Than Tokens](https://aclanthology.org/2025.acl-long.453.pdf)
- **GrailQA** (measurements) — *measured_by*
  > Figure 4: Performance under attack setting on 1,000 randomly sampled GrailQA questions. (Figure 4)
  - [TARGA: Targeted Synthetic Data Generation for Practical Reasoning over Structured Data](https://aclanthology.org/2025.acl-long.137.pdf)
- **VoxEval** (measurements) — *measured_by*
  > Our benchmark ... 2) evaluates model robustness across diverse input audio conditions (Abstract)
  - [VoxEval: Benchmarking the Knowledge Understanding Capabilities of End-to-End Spoken Language Models](https://aclanthology.org/2025.acl-long.818.pdf)
- **MMLU-Redux** (measurements) — *measured_by*
  > To assess the robustness of QuaSAR as an ICL strategy, we evaluated two different phenomena: (i) the order swapping of choices in MMLU-Redux... (Section 4.4)
  - [Improving Chain-of-Thought Reasoning via Quasi-Symbolic Abstractions](https://aclanthology.org/2025.acl-long.843.pdf)
- **Copy-paste attack** (measurements) — *measured_by*
  > We assess the robustness of different watermarking methods under various attacks, including the copy-paste attack (Kirchenbauer et al., 2023a), paraphrasing using GPT-3.5, and two configurations of the DIPPER attack (Krishna et al., 2024). (Section 4.4)
  - [Watermarking Large Language Models: An Unbiased and Low-risk Method](https://aclanthology.org/2025.acl-long.391.pdf)
- **SQuAD2.0-Eval** (measurements) — *measured_by*
  > Following Li et al. (2023a), we further simulate complex retrieval scenarios using annotation information from SQuAD2.0 to more effectively evaluate the adherence and robustness of RALMs, resulting in the creation of SQuAD2.0-Eval. (Section 5.1)
  - [Parenting: Optimizing Knowledge Selection of Retrieval-Augmented Language Models with Parameter Decoupling and Tailored Tuning](https://aclanthology.org/2025.acl-long.571.pdf)
- **RM-Bench** (measurements) — *measured_by*
  > RM-Bench is designed to assess the robustness of reward models, based on their sensitivity and resistance to subtle content differences and style biases. (Section 3)
  - [Learning to Plan & Reason for Evaluation with Thinking-LLM-as-a-Judge](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saha25b/saha25b.pdf)
- **MMLU** (measurements) — *measured_by*
  > The evaluation on MMLU shows the generalizability and robustness of our framework. (Abstract)
  - [Quamba2: A Robust and Scalable Post-training Quantization Framework for Selective State Space Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chiang25a/chiang25a.pdf)
- **PWWS** (measurements) — *measured_by*
  > We report the clean accuracy (CA) and the robust accuracy under attack (AUA) with PWWS (PW), TextFooler (TF), and Bert-Attack (BA) (Table 1)
  - [Explaining the role of Intrinsic Dimensionality in Adversarial Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/altinisik25a/altinisik25a.pdf)
- **Alignment** (constructs) — *causes*
  > we compare the plain BT model and BSR on RLHF training and empirically show that robust RMs better align the policy to the gold preference model. (Abstract).
  - [On the Robustness of Reward Models for Language Model Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hong25d/hong25d.pdf)
- **GCG** (measurements) — *measured_by*
  > "robustness is assessed via failure rates against the GCG attack"
  - [Explaining the role of Intrinsic Dimensionality in Adversarial Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/altinisik25a/altinisik25a.pdf)
- **Perplexity** (measurements) — *measured_by*
  > “We systematically compare three widely used value probing methods: token likelihood, sequence perplexity, and text generation. Our results show that all three methods exhibit large variances under non-semantic perturbations” (Abstract).
  - [Revisiting LLM Value Probing Strategies: Are They Robust and Expressive?](https://aclanthology.org/2025.emnlp-main.7.pdf)
- **MultiArith** (measurements) — *measured_by*
  > For mathematical reasoning, we assess model robustness on three out-of-domain (OOD) benchmarks: ... and (3) MultiArith (Section 4.1).
  - [CODI: Compressing Chain-of-Thought into Continuous Space via Self-Distillation](https://aclanthology.org/2025.emnlp-main.36.pdf)
- **FINTRUST** (measurements) — *measured_by*
  > we curate 15, 680 instances to evaluate LLM trustworthiness in the financial domain. We ... incorporate seven core dimensions: Truthfulness, Safety, Fairness, Robustness, Privacy, Transparency, and Knowledge Discovery. (Section 2)
  - [FinTrust: A Comprehensive Benchmark of Trustworthiness Evaluation in Finance Domain](https://aclanthology.org/2025.emnlp-main.512.pdf)
- **Evol-Instruct** (measurements) — *measured_by*
  > When robustness against fine-tuning attacks is evaluated by fine-tuning the watermarked StarCoder2-7B on the code generation dataset Evol-Instruct, the watermark persistence rate improves from 0% to 90% due to adversarial training and the parameter selection algorithm sensitive to the robust watermark. (Introduction)
  - [CLMTracing: Black-box User-level Watermarking for Code Language Model Tracing](https://aclanthology.org/2025.emnlp-main.1475.pdf)
- **ShareGPT** (measurements) — *measured_by*
  > This section assesses the robustness of CLMTracing against fine-tuning, wherein the model is fine-tuned on two clean datasets, ShareGPT and Evol-Instruct, with the goal of overwriting embedded watermarks. (Section 4.2.2)
  - [CLMTracing: Black-box User-level Watermarking for Code Language Model Tracing](https://aclanthology.org/2025.emnlp-main.1475.pdf)

### → Robustness
- **Generalization** (constructs) — *causes*
  > We attribute our outstanding robustness to the great generalization ability of our distilled thought-templates
  - [Buffer of Thoughts: Thought-Augmented Reasoning with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cde328b7bf6358f5ebb91fe9c539745e-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > A recent advancement in enhancing robustness is ICL with explanations (X-ICL), which improves prediction reliability by guiding LLMs to understand and articulate the reasoning behind correct labels. (Abstract)
  - [Exploring Explanations Improves the Robustness of In-Context Learning](https://aclanthology.org/2025.acl-long.1155.pdf)
- **In-context learning** (constructs) — *causes*
  > we believe that utilizing few-shot settings with example demonstrations could potentially enhance model performance and robustness. (Section 5.1)
  - [Are Multimodal LLMs Robust Against Adversarial Perturbations? RoMMath: A Systematic Evaluation on Multimodal Math Reasoning](https://aclanthology.org/2025.naacl-long.582.pdf)
- **Prompt engineering** (behaviors tasks) — *causes*
  > the creator should generate training prompts allowing the solver to perform robustly on target prompt distributions. (Problem 1)
  - [Reward-Guided Prompt Evolving in Reinforcement Learning for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ye25a/ye25a.pdf)
- **Neural collapse** (constructs) — *causes*
  > In this paper, we are the first to apply neural collapse to address the long-tail problem in data-based personalized learning and improve the robustness of large language models during LoRA fine-tuning in personalized learning scenarios. (Section 2)
  - [Advancing Personalized Learning with Neural Collapse for Long-Tail Challenge](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25f/hu25f.pdf)
- **Planning** (constructs) — *causes*
  > Additional experiments on other benchmarks like RM-Bench, JudgeBench, and FollowBenchEval further highlight the utility of both planning and reasoning for building robust LLM-as-a-Judge reasoning models. (Abstract)
  - [Learning to Plan & Reason for Evaluation with Thinking-LLM-as-a-Judge](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saha25b/saha25b.pdf)
- **Selection bias** (constructs) — *causes*
  > LLMs’ poor robustness to option position changes results from their biased behavior: they prefer to select speciﬁc option IDs as answers (like “Option A”), which we term as selection bias.
  - [Large Language Models Are Not Robust Multiple Choice Selectors](https://proceedings.iclr.cc/paper_files/paper/2024/file/54dd9e0cff6d9214e20d97eb2a3bae49-Paper-Conference.pdf)
- **Disentanglement** (constructs) — *causes*
  > “DRL is a major goal of artificial intelligence (AI), acclaimed for its enhancement of model robustness, interpretability, and generalizability.”
  - [Graph-based Unsupervised Disentangled Representation Learning via Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/bac4d92b3f6decfe47eab9a5893dd1f6-Paper-Conference.pdf)
- **Recency bias** (constructs) — *causes*
  > Furthermore, we raise a novel robustness concern regarding SSMs with recency bias: our empirical outcomes show that Mamba is more susceptible to perturbations on local tokens, making it vulnerable to adversarial attack, as these local tokens can be easily manipulated to serve as backdoors. (Section 1)
  - [Understanding and Mitigating Bottlenecks of State Space Models through the Lens of Recency and Over-smoothing](https://proceedings.iclr.cc/paper_files/paper/2025/file/ccdfe117c6729267c1595cdf0a587da8-Paper-Conference.pdf)
- **Self-correction** (behaviors tasks) — *causes*
  > Our analysis shows that self-refinement enables the robustness of agent capability and the diversity of agent environments and thoughts further enhances the performance. (Section 11)
  - [AgentRefine: Enhancing Agent Generalization through Refinement Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a3cc50126338b175e56bb3cad134db0b-Paper-Conference.pdf)
- **Positional bias** (constructs) — *causes*
  > "This bias often leads to unexpected model failures and hurts performance, robustness, and reliability across various applications."
  - [Eliminating Position Bias of Language Models: A Mechanistic Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/e389b15166cf98966ba058965a8c17e3-Paper-Conference.pdf)
- **Causal reasoning** (constructs) — *causes*
  > A better approximation of the underlying causal model generally translates to more robust agents, implying that world models should be causality-aware
  - [Language Agents Meet Causality -- Bridging LLMs and Causal World Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5c5bc3553815adb4d1a8a5b8701e41a9-Paper-Conference.pdf)
- **Epistemic uncertainty** (constructs) — *causes*
  > Overall, we find that the uncertainty-aware variant of MBR proposed in this paper leads to better and more robust language generation. (Section 5)
  - [Uncertainty-Aware Decoding with Minimum Bayes Risk](https://proceedings.iclr.cc/paper_files/paper/2025/file/1588dc2b2ef339d6e4c47d212e36f991-Paper-Conference.pdf)
- **Shortcut learning** (constructs) — *causes*
  > This association can create a spurious correlation between the filmmaker’s names and sentiment, leading LMs to learn shortcuts that can undermine their robustness. (Section 3.1)
  - [Towards Operationalizing Right to Data Protection](https://aclanthology.org/2025.naacl-long.416.pdf)
- **Unlearning** (constructs) — *causes*
  > Our approach leverages self-distillation to adjust logits and selectively reduce the influence of targeted tokens. This technique ensures smooth convergence and avoids catastrophic forgetting, even in challenging unlearning tasks with large datasets and sequential unlearning requests.
  - [UNDIAL: Self-Distillation with Adjusted Logits for Robust Unlearning in Large Language Models](https://aclanthology.org/2025.naacl-long.444.pdf)
- **Task alignment** (constructs) — *causes*
  > Our approach, instead, aims to enforce the task alignment, achieving a better robustness-utility tradeoff. (Section 6)
  - [The Task Shield: Enforcing Task Alignment to Defend Against Indirect Prompt Injection in LLM Agents](https://aclanthology.org/2025.acl-long.1435.pdf)
- **Collective intelligence** (constructs) — *causes*
  > By doing so, DebateCoder effectively leverages the collective intelligence of both models, making the generated code more robust and accurate. (Section 1)
  - [DebateCoder: Towards Collective Intelligence of LLMs via Test Case Driven LLM Debate for Code Generation](https://aclanthology.org/2025.acl-long.589.pdf)
- **Divergent thinking** (constructs) — *causes*
  > This divergent reasoning is also crucial for machines, enhancing their robustness and enabling them to assist humans in many applications such as scientific discovery. (Abstract)
  - [Flow of Reasoning: Training LLMs for Divergent Reasoning with Minimal Examples](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25k/yu25k.pdf)
- **Multimodal reasoning** (constructs) — *causes*
  > MVoT demonstrates comparable performance on MAZE (92.95%) and MINIBEHAVIOR (95.14%), while achieving a higher accuracy of 85.60% on FROZENLAKE compared to both Direct and CoT. This demonstrates better stability and robustness of MVoT than CoT.
  - [Imagine While Reasoning in Space: Multimodal Visualization-of-Thought](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25cz/li25cz.pdf)
- **Code editing** (behaviors tasks) — *causes*
  > With explicit editing rules, EDITLORD significantly improved the baseline in generalization, e.g., by up to 24.87% improvement in length generalization and 58.1% improved robustness against semantics-preserving code transformations. (Section 1)
  - [EditLord: Learning Code Transformation Rules for Code Editing](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25al/li25al.pdf)
- **Discrimination ability** (constructs) — *correlates*
  > Without the need for any external LLM, the model’s robustness and discrimination ability against noisy samples gradually improve as the alternating iterative training proceeds. (Section 1)
  - [ROPO: Robust Preference Optimization for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liang25d/liang25d.pdf)
- **Critique generation** (behaviors tasks) — *causes*
  > This mechanism enhances the model’s robustness in complex and uncertain environments and fosters a dynamic learning phase, facilitating continuous improvement through error identification and rectification. (Section 3.4.1)
  - [CARE: A Disagreement Detection Framework with Concept Alignment and Reasoning Enhancement](https://aclanthology.org/2025.emnlp-main.671.pdf)
- **Backtracking** (behaviors tasks) — *causes*
  > Our method’s ability to backtrack helps resolve contradictions, leading to more stable performance in multi-hop scenarios. (Section 5.2)
  - [ReAgent: Reversible Multi-Agent Reasoning for Knowledge-Enhanced Multi-Hop QA](https://aclanthology.org/2025.emnlp-main.202.pdf)
- **Counterfactual reasoning** (constructs) — *causes*
  > we propose DPCI, a novel Dual-Path Counterfactual Integration framework that enhances model robustness by explicitly modeling counterfactual reasoning in multimodal contexts. (Abstract)
  - [Dual-Path Counterfactual Integration for Multimodal Aspect-Based Sentiment Classification](https://aclanthology.org/2025.emnlp-main.1158.pdf)

### Associated with
- **Overfitting** (constructs)
  > In contrast, mixed-domain models exhibit greater resistance to overfitting, suggesting potential improvements in domain-specific model robustness; (ABSTRACT)
  - [Diagnosing Transformers: Illuminating Feature Spaces for Clinical Decision-Making](https://proceedings.iclr.cc/paper_files/paper/2024/file/fbf1b3765e081251c804da7f508f3b21-Paper-Conference.pdf)
- **Trustworthiness** (constructs)
  > We assess the trustworthiness of Med-LVLMs across five dimensions, including trustfulness, fairness, safety, privacy, and robustness. (Abstract)
  - [CARES: A Comprehensive Benchmark of Trustworthiness in Medical Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fde7f40f8ced5735006810534dc66b33-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Knowledge transfer** (constructs)
  > In this subsection, we aim to evaluate the robustness, especially the generalizability and transferability of our method MoD to various LLMs. (Section 4.5)
  - [Mixture of Demonstrations for In-Context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/a0da098e0031f58269efdcba40eedf47-Paper-Conference.pdf)
- **Safety** (constructs)
  > We assert that robustness is fundamentally insufficient for ensuring safety goals due to inferential threats from dual-intent queries, with current defenses and evaluations failing to account for these risks. (Section 1)
  - [Breach By A Thousand Leaks: Unsafe Information Leakage in 'Safe' AI Responses](https://proceedings.iclr.cc/paper_files/paper/2025/file/801a6708014185e951a95108b8cc8349-Paper-Conference.pdf)
- **Adversarial robustness** (constructs)
  > Following the common practice in the field [132, 147], we consider the out-of-distribution (OOD) and adversarial robustness respectively. (Sec. 2.2.3)
  - [MultiTrust: A Comprehensive Benchmark Towards Trustworthy Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/586640cda3db2dc77349013dcefee456-Paper-Datasets_and_Benchmarks_Track.pdf)
- **System 2 thinking** (constructs)
  > A truly intelligent system should exhibit System 2 thinking [Kahneman, 2011], which implies performing tasks consistently regardless of incidental features. (Section 1)
  - [SETLEXSEM CHALLENGE: Using Set Operations to Evaluate the Lexical and Semantic Robustness of Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/5a12909ffd7145c41139ad66ecf20fc0-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Truthfulness** (constructs)
  > Truthfulness involves a dual consideration of hallucination and robustness. (Section 2.1)
  - [MLLMGuard: A Multi-dimensional Safety Evaluation Suite for Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0d9dcd4ebef57f1839d871fe7d891e91-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Stock movement prediction** (behaviors tasks)
  > “CausalStock outperforms all baselines on ACC as well as MCC across three datasets demonstrating robustness performance for news-driven multi-stock movement prediction task.”
  - [CausalStock: Deep End-to-end Causal Discovery for News-driven Multi-stock Movement Prediction](https://proceedings.neurips.cc/paper_files/paper/2024/file/54d689d58fe54c92aee2d732fc49fca8-Paper-Conference.pdf)
- **Personalization** (constructs)
  > the diversity of names used during training makes the personalization capability more robust and generalizable to new individuals. (Section 6.2.3 IMPACT OF DATA SCALE AND NAME REPETITION)
  - [Personalized Visual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/6b69dcf999ee89f48d08c6c9881a4c0d-Paper-Conference.pdf)
- **Multi-turn dialogue** (behaviors tasks)
  > Our MTU-LLaMA exhibits the most gradual decrease in performance, demonstrating its robustness to higher dialogue turns. (Section 3.2)
  - [MTU-Bench: A Multi-granularity Tool-Use Benchmark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4d13b2d99519c5415661dad44ab7edcd-Paper-Conference.pdf)
- **Generation diversity** (constructs)
  > We posit that a model’s capacity to produce diverse solutions is indicative of its robustness and flexibility in problem-solving. (Section 5.2)
  - [Progress or Regress? Self-Improvement Reversal in Post-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1fa0c4e5a7e189729230d018b229abc7-Paper-Conference.pdf)
- **Consistency** (constructs)
  > Our hope is that sensitivity and consistency will be helpful to guide prompt engineering and obtain LLMs that balance robustness with performance. (Abstract)
  - [What Did I Do Wrong? Quantifying LLMs' Sensitivity and Consistency to Prompt Engineering](https://aclanthology.org/2025.naacl-long.73.pdf)
- **Evaluation** (behaviors tasks)
  > Hence, the critic agent θC will verify if this solution is robust and generalizable to unseen test cases. (Section 3.2)
  - [CodeTree: Agent-guided Tree Search for Code Generation with Large Language Models](https://aclanthology.org/2025.naacl-long.189.pdf)
- **Fact checking** (behaviors tasks)
  > fact verification is one area in which assessing the robustness of models developed for this task is crucial. (Section 1)
  - [FactEval: Evaluating the Robustness of Fact Verification Systems in the Era of Large Language Models](https://aclanthology.org/2025.naacl-long.534.pdf)
- **In-context classification** (behaviors tasks)
  > in the ‘different norms’ setting, the performance of ‘1-layer’ deteriorates more significantly, while transformers with a more complex structure (’3-layer’) show better robustness under this distribution shift.
  - [On the Training Convergence of Transformers for In-Context Classification of Gaussian Mixtures](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25q/shen25q.pdf)
- **Code generation** (behaviors tasks)
  > We... demonstrate robustness by showing retention of code generation and general problem-solving abilities post adaptation. (Section 1)
  - [NextCoder: Robust Adaptation of Code LMs to Diverse Code Edits](https://raw.githubusercontent.com/mlresearch/v267/main/assets/aggarwal25b/aggarwal25b.pdf)
- **Watermark spoofing** (behaviors tasks)
  > Following the settings in (Jovanovi´c et al., 2024), we compare the robustness against watermark spoofing attack by setting up LMmo as LLAMA2-7B and LMatt as MISTRAL-7B (Jiang et al., 2023).
  - [StealthInk: A Multi-bit and Stealthy Watermark for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jiang25j/jiang25j.pdf)
- **Efficiency** (constructs)
  > Assume a LoRA fine-tuning process is stable and efficient (Definitions 3-4) with γ[η] = γ∗. The process is considered robust with respect to the learning rates...
  - [Beyond Zero Initialization: Investigating the Impact of Non-Zero Initialization on LoRA Fine-Tuning Dynamics](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25bm/li25bm.pdf)
- **Compositional generalization** (constructs)
  > our approach considers the interaction between multiple problems, focusing more on the compositional generalization (Xu and Wang, 2024; An et al., 2023; Li et al., 2021) in robustness. (Section 1)
  - [From A and B to A+B: Can Large Language Models Solve Compositional Math Problems?](https://aclanthology.org/2025.emnlp-main.660.pdf)
- **Error propagation** (constructs)
  > This robustness arises from our balanced topology design, which mitigates error propagation through bottleneck structures while promoting rapid consensus via densely connected reliable agents.
  - [Understanding the Information Propagation Effects of Communication Topologies in LLM-based Multi-Agent Systems](https://aclanthology.org/2025.emnlp-main.623.pdf)
- **Fine-grained visual reasoning** (constructs)
  > This work offers new insights into the limitations of LVLMs in MCQA and presents a practical approach to improve their robustness in fine-grained visual reasoning. (Abstract)
  - [Benchmarking and Mitigating MCQA Selection Bias of Large Vision-Language Models](https://aclanthology.org/2025.emnlp-main.1703.pdf)
- **Internal consistency** (constructs)
  > By linking layer consistency to robustness, CROW provides practical and effective protection against backdoor threats. (Section 1)
  - [CROW: Eliminating Backdoors from Large Language Models via Internal Consistency Regularization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/min25b/min25b.pdf)
- **Voice cloning** (behaviors tasks)
  > In zero-shot speech generation, DiTAR achieves state-of-the-art performance in robustness, speaker similarity, and naturalness.
  - [DiTAR: Diffusion Transformer Autoregressive Modeling for Speech Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jia25a/jia25a.pdf)
- **Text generation** (behaviors tasks)
  > “We systematically compare three widely used value probing methods: token likelihood, sequence perplexity, and text generation. Our results show that all three methods exhibit large variances under non-semantic perturbations” (Abstract).
  - [Revisiting LLM Value Probing Strategies: Are They Robust and Expressive?](https://aclanthology.org/2025.emnlp-main.7.pdf)
- **Adversarial attacks** (behaviors tasks)
  > This raises the need to assess the robustness of such solutions, i.e. their ability to deliver correct result even for input manipulated by malicious actors. This is performed by seeking adversarial examples (AEs) (Section 1).
  - [Attacking Misinformation Detection Using Adversarial Examples Generated by Language Models](https://aclanthology.org/2025.emnlp-main.1405.pdf)
