# General ability
**Type:** Construct  
**Referenced in:** 155 papers  
**Also known as:** General capabilities, Downstream Performance, Downstream performance, General abilities, General capability, General performance, Generic performance, Model Capability, Model capability, Model performance, General purpose performance, General-purpose ability, General-purpose capabilities, Model utility, Model Utility, Model competence, Effectiveness, General task performance, Downstream benchmark performance, Foundational capabilities, LLM capability, Benign capabilities, Generalist abilities, General problem-solving, Capability, General model utility, Utility, Skill, Ability, Latent abilities, General language model capability, General model capability, Capabilities set, Capabilities, All-round capability, Intrinsic capacity, Policy performance, Relative performance, Benign utility, Competence, Model usefulness, Downstream task performance, General utility, General task-solving ability, Predictive quality, Model quality, Task solving ability, Performance  

## State of the Field

**Definition agreement:** Consensus. Most papers use "general ability" for a model's broad overall capability or proficiency across many standard, non-target tasks or domains, often treating it as a latent trait inferred from benchmark performance and checking whether interventions preserve it. A few papers give narrower or unusual versions, such as ability on a given task or the usefulness of data or hypotheses, but these are clear outliers relative to the dominant shared definition.

**Space of definitions.** Across papers, the prevailing usage treats general ability as broad overall capability, performance, or utility across many tasks and domains, rather than success on a single narrow task. Many papers define it in preservation terms: the broader competence, knowledge, reasoning, question answering, summarization, coding, or instruction-following that should remain intact after editing, unlearning, alignment, steering, continual training, pruning, or quantization. A smaller line of work shifts the construct along two axes, from observable benchmark performance to latent underlying ability, using notions such as a unidimensional trait, a first principal component over benchmark scores, or a capabilities set, and from a model property to the usefulness or correctness of its outputs on legitimate tasks; one paper also uses general abilities for newly enhanced downstream competencies rather than pre-existing broad competence.

**Space of facets.** Papers use many neighboring labels for this broad construct, including general capabilities, general performance, downstream performance, model capability, model utility, foundational capabilities, all-round capability, and generalist abilities. Within that family, some authors reserve narrower variants such as benign capabilities or benign utility for legitimate non-malicious tasks, and foundational or pre-existing capabilities for skills that should survive specialized tuning, while others tie the construct to facets like reasoning, knowledge, comprehension, common sense, chat, mathematics, coding, and instruction following. A smaller group systematizes it more abstractly as a single common factor over benchmarks, a weighted average of metrics, a scope-defining capabilities set, or capability neurons that can be localized.

**Space of measurement.** Operationalization is expansive: papers link general ability to 74 measurement instruments and 4 behavioral indicators. The most frequent instruments are MMLU, GSM8K, HellaSwag, MT-Bench, and lm-evaluation-harness, where the first four are benchmarks and the fifth is an evaluation framework; the rest are mostly other benchmarks, with some evaluation platforms, multimodal test suites, LLM-as-a-judge setups, and perplexity-based checks. In practice, papers operationalize the construct as accuracy, win rate, solve rate, rank, aggregated retain-set performance, or perplexity on general-purpose chat, knowledge, reasoning, math, language understanding, code, long-context, and vision-language evaluations, usually to test whether broader capability is preserved after an intervention; a smaller line instead estimates it through IRT or pairwise ranking models.

**Links.** Papers link general ability to 10 constructs and 4 behavioral indicators. The most recurrent named links are to forget quality, generation diversity, reasoning, adversarial robustness, and commonsense knowledge: forget quality is reported to correlate with it in one paper and is also described as a related trade-off, a small number of papers claim a causal relationship from generation diversity to general ability, reasoning and commonsense knowledge are treated as related to it, and one paper records a causal relationship from general ability to adversarial robustness using the language of emergent vulnerabilities. Other links, each appearing in a small number of papers, connect general ability to safety-oriented constructs and refusal, to understanding and composability, and to causal claims about loss after fine-tuning, instruction data, evaluation ability, and image classification.

## Sources

**[Private Attribute Inference from Images with Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/bb97e9a7c811904c9b01f51fde66edcf-Paper-Conference.pdf) (as "General capabilities")**
> A model's overall proficiency and performance across a wide range of tasks, which is shown to correlate with its performance on specific, potentially harmful tasks like private attribute inference.

**[Everything is Editable: Extend Knowledge Editing to Unstructured Data in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/02763667a5761ff92bb15d8751bcd223-Paper-Conference.pdf)**
> The model's broader performance on unrelated tasks or knowledge after editing, reflecting whether edits degrade overall capability.

**[Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf) (as "General capability")**
> The model's overall performance on a wide range of standard, non-adversarial tasks, such as question answering and instruction following.

**[Combatting Dimensional Collapse in LLM Pre-Training Data via Submodular File Selection](https://proceedings.iclr.cc/paper_files/paper/2025/file/136729ae4b0fee25a0d28077442506da-Paper-Conference.pdf) (as "Generic performance")**
> The overall downstream effectiveness of a pre-trained LLM across diverse evaluation tasks rather than a single target domain.

**[Perturbation-Restrained Sequential Model Editing](https://proceedings.iclr.cc/paper_files/paper/2025/file/2c15b0221da28bc6f4373a7e78b896dd-Paper-Conference.pdf) (as "General abilities")**
> The broad set of capabilities of a large language model, such as reasoning and summarization, that are not directly targeted by a specific model edit but can be negatively affected by it.

**[Monet: Mixture of Monosemantic Experts for Transformers](https://proceedings.iclr.cc/paper_files/paper/2025/file/382c35d1a57c07055dfcba58dd39e012-Paper-Conference.pdf) (as "General performance")**
> The overall capability of a model across a wide range of tasks and domains, as opposed to performance on a specific, narrow task.

**[Diverse Preference Learning for Capabilities and Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/3df1eca840e82b11bbc33f68c773c38e-Paper-Conference.pdf) (as "General-purpose capabilities")**
> Broad task competence of an LLM across heterogeneous chat and reasoning tasks rather than a single narrow domain.

**[Optimized Multi-Token Joint Decoding With Auxiliary Model for LLM Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/438c34f45d7b5d82aef1b6016e695d5a-Paper-Conference.pdf) (as "Downstream Performance")**
> The latent capability of the model to successfully complete tasks, inferred from accuracy or scores on benchmarks.

**[RegMix: Data Mixture as Regression for Language Model Pre-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/5f67d864aae6115374fed7beddd119e0-Paper-Conference.pdf) (as "Downstream performance")**
> The overall capability of a pre-trained model to perform effectively on a wide range of evaluation tasks it was not explicitly trained on.

**[LLM Unlearning via Loss Adjustment with Only Forget Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/6b315c0b736711b56f33cbacfb6d5d67-Paper-Conference.pdf) (as "Model utility")**
> The overall performance and general knowledge of a model on tasks and data that are unaffected by the unlearning process.

**[Model Editing as a Robust and Denoised variant of DPO: A Case Study on Toxicity](https://proceedings.iclr.cc/paper_files/paper/2025/file/acb7ce5aab6e134300a2361dd90a501f-Paper-Conference.pdf) (as "Model Capability")**
> The general ability of the model to perform desired tasks, such as language modeling or question answering, without degradation.

**[Endless Jailbreaks with Bijection Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/b05c1fb3345743dea59f500ec5a0bba0-Paper-Conference.pdf) (as "Model capability")**
> The overall level of a model's general cognitive abilities, such as reasoning and knowledge, which often correlates with its scale and performance on standard benchmarks.

**[Data Mixing Laws: Optimizing Data Mixtures by Predicting Language Modeling Performance](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc84bfabe6389d8883fc2071c848f62a-Paper-Conference.pdf) (as "General-purpose ability")**
> A model's broad capability across a wide range of tasks and domains, as opposed to specialized performance on a narrow domain.

**[Controlling Language and Diffusion Models by Transporting Activations](https://proceedings.iclr.cc/paper_files/paper/2025/file/df4f6e43446b1ee29c5a33d32c279f83-Paper-Conference.pdf) (as "Model Utility")**
> The latent general capability of a model to perform diverse tasks effectively without degradation from interventions.

**[Determine-Then-Ensemble: Necessity of Top-k Union for Large Language Model Ensembling](https://proceedings.iclr.cc/paper_files/paper/2025/file/fbb10d319d44f8c3b4720873e4177c65-Paper-Conference.pdf) (as "Model performance")**
> The overall effectiveness of a model on a given set of tasks, which is a key determinant for successful ensembling.

**[Scaling Long Context Training Data by Long-Distance Referrals](https://proceedings.iclr.cc/paper_files/paper/2025/file/fbf49f35b6dd2bef1ad12768c0509daa-Paper-Conference.pdf) (as "General purpose performance")**
> The overall capability of a model across a wide range of domains and tasks, as opposed to specialized performance in a narrow domain.

**[Scaling Instruction-tuned LLMs to Million-token Contexts via Hierarchical Synthetic Data Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/bb36593e5e438aac5dd07907e757e087-Paper-Conference.pdf) (as "General task performance")**
> The overall capability of the model to perform standard NLP tasks without regression when optimized for specific constraints like long context.

**[TC-MoE: Augmenting Mixture of Experts with Ternary Expert Choice](https://proceedings.iclr.cc/paper_files/paper/2025/file/bda8f7ac4c3ccc494b5206ee3fd92771-Paper-Conference.pdf) (as "Effectiveness")**
> The overall quality or performance of the model in achieving its objectives, as measured by accuracy on evaluation benchmarks, distinct from its computational cost.

**[Data Mixing Laws: Optimizing Data Mixtures by Predicting Language Modeling Performance](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc84bfabe6389d8883fc2071c848f62a-Paper-Conference.pdf) (as "Model competence")**
> The overall capability and effectiveness of a language model that results from its pretraining regimen, which is crucially impacted by data mixture proportions.

**[Improving Pretraining Data Using Perplexity Correlations](https://proceedings.iclr.cc/paper_files/paper/2025/file/2c625366ae28066fcb1827b44517d674-Paper-Conference.pdf) (as "Downstream benchmark performance")**
> The latent capability of a language model that enables it to score highly on a diverse set of evaluation benchmarks.

**[PiCO: Peer Review in LLMs based on Consistency Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/39e9c5913c970e3e49c2df629daff636-Paper-Conference.pdf) (as "LLM capability")**
> The overall latent ability level of a language model across evaluation tasks, inferred from how well it performs and is ranked relative to other models.

**[StringLLM: Understanding the String Processing Capability of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e4013f157410cb7612701b318fb4ac2-Paper-Conference.pdf) (as "Foundational capabilities")**
> The general, pre-existing knowledge and skills of a large language model, which are evaluated to ensure they are not degraded by specialized fine-tuning.

**[HMoRA: Making LLMs More Effective with Hierarchical Mixture of LoRA Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/e43a33994a28f746dcfd53eb51ed3c2d-Paper-Conference.pdf) (as "General problem-solving")**
> A broad capability to handle a variety of tasks and input formats, acquired through training on a diverse multi-task dataset.

**[Self-Play Preference Optimization for Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/e48fa1c4f08fd1ae35d5df8352c3106d-Paper-Conference.pdf) (as "Generalist abilities")**
> The model's capacity to perform well across a wide and diverse range of tasks and domains without task-specific fine-tuning.

**[Tamper-Resistant Safeguards for Open-Weight LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc49a629d33bc2461ed7a715ce44da68-Paper-Conference.pdf) (as "Benign capabilities")**
> The extent to which a safeguarded model retains general-purpose performance on non-target tasks after safety training and tampering.

**[Capability Localization: Capabilities Can be Localized rather than Individual Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/648a5a590ca6f2bb5de53f938e230160-Paper-Conference.pdf) (as "Capability")**
> A general, transferable ability of a model, reflected as a commonality across a dataset, that can be localized to a specific set of neurons and enhances performance on related tasks.

**[Composable Interventions for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7f5f9a88c6516469c83d074c6f2976fb-Paper-Conference.pdf) (as "General model utility")**
> The model's broad task performance across general-purpose evaluations, used here as an overall indicator of whether interventions preserve usefulness.

**[Copyright-Protected Language Generation via Adaptive Model Fusion](https://proceedings.iclr.cc/paper_files/paper/2025/file/01953220e4becc6ac1078c24c1f8d3a7-Paper-Conference.pdf) (as "Utility")**
> The overall quality and usefulness of the model's generated output for a given task, considered as a trade-off against safety measures.

**[Unearthing Skill-level Insights for Understanding Trade-offs of Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5526c73e3ff4f2a34009e13d15f52fcb-Paper-Conference.pdf) (as "Skill")**
> A latent underlying competency that a model must apply to solve an evaluation instance, often spanning multiple benchmarks and surfacing only through solution steps.

**[Low-Rank Adapting Models for Sparse Autoencoders](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25r/chen25r.pdf) (as "General language model capability")**
> The overall proficiency of a model across a wide range of standard language understanding and generation benchmarks.

**[Just Enough Shifts: Mitigating Over-Refusal in Aligned Language Models with Targeted Representation Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dabas25a/dabas25a.pdf) (as "General model capability")**
> The overall performance and competence of a model across a wide range of standard tasks, distinct from its specialized safety behaviors.

**[MAGELLAN: Metacognitive predictions of learning progress guide autotelic LLM agents in large goal spaces](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gaven25a/gaven25a.pdf) (as "Competence")**
> The underlying ability of an agent to successfully achieve a given goal, often operationalized as the probability of success.

**[MERGE$^3$: Efficient Evolutionary Merging on Consumer-grade GPUs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mencattini25a/mencattini25a.pdf) (as "Latent abilities")**
> The underlying, unobservable capabilities of a model, such as problem-solving or linguistic skills, which are estimated using statistical methods rather than being directly measured.

**[Reliable and Efficient Amortized Model-based Evaluation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/truong25c/truong25c.pdf) (as "Ability")**
> The unobservable, unidimensional latent trait of a language model that determines its probability of correctly answering a question, independent of the question's difficulty.

**[Position: Scaling LLM Agents Requires Asymptotic Analysis with LLM Primitives](https://raw.githubusercontent.com/mlresearch/v267/main/assets/meyerson25a/meyerson25a.pdf) (as "Capabilities set")**
> The latent trait representing the scope of tasks an LLM can reliably perform, which determines its suitability for specific agent roles within a system.

**[A StrongREJECT for Empty Jailbreaks](https://proceedings.neurips.cc/paper_files/paper/2024/file/e2e06adf560b0706d3b1ddfca9f29756-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Capabilities")**
> The general ability of a model to perform tasks correctly and generate high-quality, useful, and coherent information.

**[MemoryFormer : Minimize Transformer Computation by Removing Fully-Connected Layers](https://proceedings.neurips.cc/paper_files/paper/2024/file/24143e25a82f856aeed58b2f497d623b-Paper-Conference.pdf) (as "All-round capability")**
> Broad general task competence across diverse benchmark types, including knowledge and reasoning tasks.

**[Instantly Learning Preference Alignment via In-context DPO](https://aclanthology.org/2025.naacl-long.8.pdf) (as "Intrinsic capacity")**
> The underlying, general-purpose capabilities of a base model, independent of specific fine-tuning or prompting techniques, which influences its performance on downstream tasks.

**[AutoEval Done Right: Using Synthetic Data for Model Evaluation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/boyeau25a/boyeau25a.pdf) (as "Relative performance")**
> A model's capability or quality assessed through direct comparison with other models, rather than against an absolute standard.

**[Free Process Rewards without Process Labels](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yuan25c/yuan25c.pdf) (as "Policy performance")**
> The ability of the model to directly solve downstream tasks when used as a policy model rather than as a reward model.

**[Fight Back Against Jailbreaking via Prompt Adversarial Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/759ca99a82e2a9137c6bef4811c8d378-Paper-Conference.pdf) (as "Benign utility")**
> The model's ability to maintain its performance and helpfulness on legitimate, non-malicious tasks and prompts.

**[UNDIAL: Self-Distillation with Adjusted Logits for Robust Unlearning in Large Language Models](https://aclanthology.org/2025.naacl-long.444.pdf) (as "Model usefulness")**
> The latent capacity of a model to maintain general language understanding and generation quality during and after unlearning procedures.

**[Self-calibration for Language Model Quantization and Pruning](https://aclanthology.org/2025.naacl-long.509.pdf) (as "Downstream task performance")**
> The ability of a language model to maintain its effectiveness on a range of evaluation tasks after undergoing compression techniques like quantization or pruning.

**[SudoLM: Learning Access Control of Parametric Knowledge with Authorization Alignment](https://aclanthology.org/2025.acl-long.1318.pdf) (as "General utility")**
> The model's ability to maintain high performance on general tasks and benchmarks regardless of the presence or activation of the SUDO key.

**[An Empirical Study of Many-to-Many Summarization with Large Language Models](https://aclanthology.org/2025.acl-long.555.pdf) (as "General task-solving ability")**
> The model's preserved competence across diverse domains and tasks beyond the specific one it has been fine-tuned on, reflecting robustness and transferability.

**[STAR: Synthesis of Tailored Architectures](https://proceedings.iclr.cc/paper_files/paper/2025/file/dc300c4d75b94b211b149ae4bcbbf2d2-Paper-Conference.pdf) (as "Predictive quality")**
> The latent tendency of a language model to produce better next-token predictions and downstream task performance across evaluation settings.

**[AMQ: Enabling AutoML for Mixed-precision Weight-Only Quantization of Large Language Models](https://aclanthology.org/2025.emnlp-main.1799.pdf) (as "Model quality")**
> The overall performance and effectiveness of a language model, inferred from its accuracy on various downstream tasks and its ability to maintain the output distribution of the original, unquantized model.

**[Beyond Imitation: Leveraging Fine-grained Quality Signals for Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5c8236f62e33b5224634069e64cb271a-Paper-Conference.pdf) (as "Task solving ability")**
> The general capacity of a large language model to successfully complete a wide range of instructed tasks.

**[Quantifying Language Disparities in Multilingual Large Language Models](https://aclanthology.org/2025.emnlp-main.199.pdf) (as "Performance")**
> The abstract capability of a language model on a given task, which is measured and represented by numerical scores.

## Relationships

### General ability →
- **MMLU** (measurements) — *measured_by*
  > General Ability (Gen): We use MMLU [20], which consists of multiple-choice questions from various branches of knowledge. (Section 3.3.2)
  - [RWKU: Benchmarking Real-World Knowledge Unlearning for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b1f78dfc9ca0156498241012aec4efa0-Paper-Datasets_and_Benchmarks_Track.pdf)
- **GSM8K** (measurements) — *measured_by*
  > We evaluated the general capabilities of the models on benchmarks related to general-domain chat (MT-Bench [83] and Alpaca-Eval [37]), general MCQs (MMLU [34] and GPQA [54]), and mathematical tasks (MATH [22] and GSM8k [12]). (Section 4.1)
  - [UltraMedical: Building Specialized Generalists in Biomedicine](https://proceedings.neurips.cc/paper_files/paper/2024/file/2dfc26ce9039f00eee4aba0c54931e46-Paper-Datasets_and_Benchmarks_Track.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > To investigate whether up-weighting context-aware neurons impairs the model’s general abilities, we conducted evaluations of IRCAN on six widely-used benchmarks... including ARC [6], HellaSwag [47], MMLU [15], Winogrande [34], GSM8K [7], and TruthfulQA [24]. (Section 5.4)
  - [IRCAN: Mitigating Knowledge Conflicts in LLM Generation via Identifying and Reweighting Context-Aware Neurons](https://proceedings.neurips.cc/paper_files/paper/2024/file/08a9e28c96d016dd63903ab51cd085b0-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > We evaluated the general capabilities of the models on benchmarks related to general-domain chat (MT-Bench [83] and Alpaca-Eval [37]), general MCQs (MMLU [34] and GPQA [54]), and mathematical tasks (MATH [22] and GSM8k [12]). (Section 4.1)
  - [UltraMedical: Building Specialized Generalists in Biomedicine](https://proceedings.neurips.cc/paper_files/paper/2024/file/2dfc26ce9039f00eee4aba0c54931e46-Paper-Datasets_and_Benchmarks_Track.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > “we evaluate the 12 models in Table 2 on challenging downstream zero- and few-shot benchmarks focusing on language understanding and reasoning. We include results for 0-shot (0S) and 3-shot (3S) evaluation for BIG-Bench Hard tasks [63, 64]”
  - [Fractal Patterns May Illuminate the Success of Next-Token Prediction](https://proceedings.neurips.cc/paper_files/paper/2024/file/cd004fa45fc1fe5c0218b7801d98d036-Paper-Conference.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > the LLM’s generic performance A as the evaluation across different tasks using the Harness framework. (Section 2.1)
  - [Combatting Dimensional Collapse in LLM Pre-Training Data via Submodular File Selection](https://proceedings.iclr.cc/paper_files/paper/2025/file/136729ae4b0fee25a0d28077442506da-Paper-Conference.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > Concurrently, we assess the models’ general capabilities using representative NLP tasks including MMLU (Hendrycks et al., 2020), ARC-Challenge (Clark et al., 2018), and GSM8K (Cobbe et al., 2021), ensuring that safety improvements do not come at the cost of overall performance.
  - [Understanding and Enhancing Safety Mechanisms of LLMs via Safety-Specific Neuron](https://proceedings.iclr.cc/paper_files/paper/2025/file/6d2666e2cf44088cc57204fbc5ef7f34-Paper-Conference.pdf)
- **WinoGrande** (measurements) — *measured_by*
  > To investigate whether up-weighting context-aware neurons impairs the model’s general abilities, we conducted evaluations of IRCAN on six widely-used benchmarks... including ARC [6], HellaSwag [47], MMLU [15], Winogrande [34], GSM8K [7], and TruthfulQA [24]. (Section 5.4)
  - [IRCAN: Mitigating Knowledge Conflicts in LLM Generation via Identifying and Reweighting Context-Aware Neurons](https://proceedings.neurips.cc/paper_files/paper/2024/file/08a9e28c96d016dd63903ab51cd085b0-Paper-Conference.pdf)
- **WikiText** (measurements) — *measured_by*
  > We adopt the Evaluation Harness framework (Gao et al., 2023) for general capability evaluation, including MMLU (5-shot, Hendrycks et al., 2020), ARC-C (Clark et al., 2018) and WIKITEXT (Merity et al., 2016) (Section 4).
  - [Surgical, Cheap, and Flexible: Mitigating False Refusal in Language Models via Single Vector Ablation](https://proceedings.iclr.cc/paper_files/paper/2025/file/53dbd7e34fab703a639964e2d3ee9e84-Paper-Conference.pdf)
- **ARC** (measurements) — *measured_by*
  > To investigate whether up-weighting context-aware neurons impairs the model’s general abilities, we conducted evaluations of IRCAN on six widely-used benchmarks... including ARC [6], HellaSwag [47], MMLU [15], Winogrande [34], GSM8K [7], and TruthfulQA [24]. (Section 5.4)
  - [IRCAN: Mitigating Knowledge Conflicts in LLM Generation via Identifying and Reweighting Context-Aware Neurons](https://proceedings.neurips.cc/paper_files/paper/2024/file/08a9e28c96d016dd63903ab51cd085b0-Paper-Conference.pdf)
- **C-Eval** (measurements) — *measured_by*
  > For the general domain evaluation benchmarks, we select MATH, MBPP, MMLU, and CEVAL from the aforementioned experimental settings. (Section 3.3).
  - [Mix-CPT: A Domain Adaptation Framework via Decoupling Knowledge Learning and Format Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc721384c26c0bdff3ec31a7de31d8d5-Paper-Conference.pdf)
- **RTE** (measurements) — *measured_by*
  > we perform General Capability Tests using six natural language tasks... Specifically, the evaluation tasks include: ... 4. RTE (Recognizing Textual Entailment) (Section 4.3).
  - [AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf)
- **Arena-Hard** (measurements) — *measured_by*
  > Additionally, SPPO exhibits strong generalist abilities across different tasks, including MT-Bench, the Open LLM Leaderboard, and the more recent, more challenging benchmark, Arena-Hard.
  - [Self-Play Preference Optimization for Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/e48fa1c4f08fd1ae35d5df8352c3106d-Paper-Conference.pdf)
- **GPQA** (measurements) — *measured_by*
  > We evaluated the general capabilities of the models on benchmarks related to general-domain chat (MT-Bench [83] and Alpaca-Eval [37]), general MCQs (MMLU [34] and GPQA [54]), and mathematical tasks (MATH [22] and GSM8k [12]). (Section 4.1)
  - [UltraMedical: Building Specialized Generalists in Biomedicine](https://proceedings.neurips.cc/paper_files/paper/2024/file/2dfc26ce9039f00eee4aba0c54931e46-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MMBench** (measurements) — *measured_by*
  > we selected several common comprehensive benchmarks and VQA datasets, such as ... MMBench ... to evaluate the general capabilities of VLMs (Section 5.1).
  - [ETA: Evaluating Then Aligning Safety of Vision Language Models at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/06f9fe2915857be2b1e369419a531ad3-Paper-Conference.pdf)
- **PIQA** (measurements) — *measured_by*
  > The fine-tuned models under MDS are evaluated on the general tasks including MMLU (Hendrycks et al., 2021), GSM8K (Cobbe et al., 2021), and PIQA (Bisk et al., 2020) to measure the catastrophic forgetting of the PEFT approaches.
  - [SLIM: Let LLM Learn More and Forget Less with Soft LoRA and Identity Mixture](https://aclanthology.org/2025.naacl-long.246.pdf)
- **SIQA** (measurements) — *measured_by*
  > Ultimately, we select the following benchmarks as our downstream tasks: Social IQA (Sap et al., 2019), HellaSwag (Zellers et al., 2019), PiQA (Bisk et al., 2020), OpenBookQA (Mihaylov et al., 2018), Lambada (Paperno et al., 2016), SciQ (Welbl et al., 2017), ARC Easy (Clark et al., 2018), COPA (Sarlin et al., 2020), RACE (Lai et al., 2017), LogiQA (Liu et al., 2020), QQP (Wang et al., 2018), WinoGrande (Sakaguchi et al., 2021), and MultiRC (Khashabi et al., 2018). (Section 5)
  - [RegMix: Data Mixture as Regression for Language Model Pre-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/5f67d864aae6115374fed7beddd119e0-Paper-Conference.pdf)
- **CommonsenseQA** (measurements) — *measured_by*
  > We set N g = 4 general evaluation tasks, covering Hellaswag (Zellers et al., 2019), CommonsenseQA (Talmor et al., 2018), Alpaca (Hendrycks et al., 2020), and BBH-Object-Count (Srivastava et al., 2022) (Section 3)
  - [Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf)
- **OpenBookQA** (measurements) — *measured_by*
  > To evaluate LLMs’ general capabilities, we select several widely used benchmark, i.e., HellaSwag (Zellers et al., 2019), Race (Lai et al., 2017), MMLU (Hendrycks et al., 2021), GPQA (Rein et al., 2024), OpenBookQA (Mihaylov et al., 2018), BoolQ (Clark et al., 2019), AG News (Zhang et al., 2015), IMDB (Maas et al., 2011), and Perplexity (Chen et al., 1998). (Section 4.1)
  - [The Tug of War Within: Mitigating the Fairness-Privacy Conflicts in Large Language Models](https://aclanthology.org/2025.acl-long.590.pdf)
- **LongBench** (measurements) — *measured_by*
  > LongBench (Bai et al., 2024): Focused on medium-context tasks (10K tokens), it assesses summarization, QA, and fact-checking across multiple domains, offering a measure of general capabilities.
  - [Scaling Instruction-tuned LLMs to Million-token Contexts via Hierarchical Synthetic Data Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/bb36593e5e438aac5dd07907e757e087-Paper-Conference.pdf)
- **ARC-Easy** (measurements) — *measured_by*
  > “These models are trained further and evaluated on downstream tasks: ... ARC-e (Clark et al., 2018)”
  - [STAR: Synthesis of Tailored Architectures](https://proceedings.iclr.cc/paper_files/paper/2025/file/dc300c4d75b94b211b149ae4bcbbf2d2-Paper-Conference.pdf)
- **MATH** (measurements) — *measured_by*
  > We evaluated the general capabilities of the models on benchmarks related to general-domain chat (MT-Bench [83] and Alpaca-Eval [37]), general MCQs (MMLU [34] and GPQA [54]), and mathematical tasks (MATH [22] and GSM8k [12]). (Section 4.1)
  - [UltraMedical: Building Specialized Generalists in Biomedicine](https://proceedings.neurips.cc/paper_files/paper/2024/file/2dfc26ce9039f00eee4aba0c54931e46-Paper-Datasets_and_Benchmarks_Track.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > To investigate whether up-weighting context-aware neurons impairs the model’s general abilities, we conducted evaluations of IRCAN on six widely-used benchmarks... including ARC [6], HellaSwag [47], MMLU [15], Winogrande [34], GSM8K [7], and TruthfulQA [24]. (Section 5.4)
  - [IRCAN: Mitigating Knowledge Conflicts in LLM Generation via Identifying and Reweighting Context-Aware Neurons](https://proceedings.neurips.cc/paper_files/paper/2024/file/08a9e28c96d016dd63903ab51cd085b0-Paper-Conference.pdf)
- **TextVQA** (measurements) — *measured_by*
  > we further evaluated the performance of our fine-tuned visually-grounded language model (VLM) on additional benchmarks to ensure its robustness across a variety of tasks. In particular, we tested the model on TextVQA [42], POPE [29], and MMVet [51]. (Appendix C.3)
  - [Why are Visually-Grounded Language Models Bad at Image Classification?](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c7024041be305c94d7311cfcc53d93e-Paper-Conference.pdf)
- **OpenCompass** (measurements) — *measured_by*
  > We evaluate seven distinctive capabilities of LLMs in a total of 17 representative NLP datasets based on the OpenCompass platform (Contributors, 2023). (Section 3.1).
  - [Mix-CPT: A Domain Adaptation Framework via Decoupling Knowledge Learning and Format Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc721384c26c0bdff3ec31a7de31d8d5-Paper-Conference.pdf)
- **AlpacaEval** (measurements) — *measured_by*
  > To evaluate the LLM’s general performance in short-text tasks, we measure its WinRate against the text-davinci-003 model using 100 queries from AlpacaEval and 80 queries from VicunaEval. (Section 5.1)
  - [RobustKV: Defending Large Language Models against Jailbreak Attacks via KV Eviction](https://proceedings.iclr.cc/paper_files/paper/2025/file/38bbae17d60940f3ee14dfd1035d7542-Paper-Conference.pdf)
- **MME** (measurements) — *measured_by*
  > we selected several common comprehensive benchmarks and VQA datasets, such as ... MME ... to evaluate the general capabilities of VLMs (Section 5.1).
  - [ETA: Evaluating Then Aligning Safety of Vision Language Models at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/06f9fe2915857be2b1e369419a531ad3-Paper-Conference.pdf)
- **Open LLM Leaderboard** (measurements) — *measured_by*
  > Additionally, SPPO exhibits strong generalist abilities across different tasks, including MT-Bench, the Open LLM Leaderboard, and the more recent, more challenging benchmark, Arena-Hard.
  - [Self-Play Preference Optimization for Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/e48fa1c4f08fd1ae35d5df8352c3106d-Paper-Conference.pdf)
- **GLUE** (measurements) — *measured_by*
  > “To further evaluate the intrinsic knowledge of post-edited LLMs, we perform General Capability Tests using six natural language tasks from the General Language Understanding Evaluation (GLUE) benchmark (Wang et al., 2019).”
  - [AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf)
- **SciQ** (measurements) — *measured_by*
  > “These models are trained further and evaluated on downstream tasks: ... SciQ (Welbl et al., 2017)”
  - [STAR: Synthesis of Tailored Architectures](https://proceedings.iclr.cc/paper_files/paper/2025/file/dc300c4d75b94b211b149ae4bcbbf2d2-Paper-Conference.pdf)
- **CMMLU** (measurements) — *measured_by*
  > our approach can largely improve the performance of Llama-3 (8B), including both the general abilities (+8.81 on C-Eval and +6.31 on CMMLU)
  - [Towards Effective and Efficient Continual Pre-training of Large Language Models](https://aclanthology.org/2025.acl-long.289.pdf)
- **TOFU** (measurements) — *measured_by*
  > Model utility is assessed using three datasets from the TOFU benchmark related to different types of knowledge. (Section 4.2.3)
  - [Balancing Forget Quality and Model Utility: A Reverse KL-Divergence Knowledge Distillation Approach for Better Unlearning in LLMs](https://aclanthology.org/2025.naacl-long.60.pdf)
- **LAMBADA** (measurements) — *measured_by*
  > "We evaluate the pre-trained base models on 17 tasks across different general domains which include: MMLU (Hendrycks et al., 2020), Arc-Easy, Arc-Challenge (Clark et al., 2018), HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), SIQA (Sap et al., 2019), SciQ (Welbl et al., 2017), RTE (Dagan et al., 2005), BBH (Suzgun et al., 2022), LAMBADA"
  - [Predictive Data Selection: The Data That Predicts Is the Data That Teaches](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shum25a/shum25a.pdf)
- **HumanEval** (measurements) — *measured_by*
  > As shown in Appendix E.2, we assessed each iteration’s performance on general benchmarks, including GSM8k (Cobbe et al., 2021), TriviaQA (Joshi et al., 2017), MMLU (Hendrycks et al., 2020), and HumanEval (Chen et al., 2021). (Section 3.3)
  - [SPaR: Self-Play with Tree-Search Refinement to Improve Instruction-Following in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/abe1eb21ceb046209c96a0f5e7544ccc-Paper-Conference.pdf)
- **WikiText-2** (measurements) — *measured_by*
  > "To ensure the desired model capabilities are not impacted by editing, we measure the perplexity of the model on the dev split of WikiText-2"
  - [Model Editing as a Robust and Denoised variant of DPO: A Case Study on Toxicity](https://proceedings.iclr.cc/paper_files/paper/2025/file/acb7ce5aab6e134300a2361dd90a501f-Paper-Conference.pdf)
- **BLEURT** (measurements) — *measured_by*
  > We evaluate our models on six automatic metrics: BLEURT (Sellam et al., 2020), MetricX-XXL (Freitag et al., 2022b), MetricX-23-c (which resembles MetricX-XXL but uses a PaLM-2 backbone; Juraska et al. (2023)), chrF (Popovi´c, 2015), Comet20 (Rei et al., 2020), and Comet22 (Rei et al., 2022). (Section 5.3)
  - [MBR and QE Finetuning: Training-time Distillation of the Best and Most Expensive Decoding Methods](https://proceedings.iclr.cc/paper_files/paper/2024/file/ae817e85f71ef86d5c9566598e185b89-Paper-Conference.pdf)
- **POPE** (measurements) — *measured_by*
  > we further evaluated the performance of our fine-tuned visually-grounded language model (VLM) on additional benchmarks to ensure its robustness across a variety of tasks. In particular, we tested the model on TextVQA [42], POPE [29], and MMVet [51]. (Appendix C.3)
  - [Why are Visually-Grounded Language Models Bad at Image Classification?](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c7024041be305c94d7311cfcc53d93e-Paper-Conference.pdf)
- **MM-Vet** (measurements) — *measured_by*
  > we further evaluated the performance of our fine-tuned visually-grounded language model (VLM) on additional benchmarks to ensure its robustness across a variety of tasks. In particular, we tested the model on TextVQA [42], POPE [29], and MMVet [51]. (Appendix C.3)
  - [Why are Visually-Grounded Language Models Bad at Image Classification?](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c7024041be305c94d7311cfcc53d93e-Paper-Conference.pdf)
- **StrongREJECT** (measurements) — *measured_by*
  > "Therefore, the StrongREJECT evaluator measures both of these dimensions: willingness and capabilities."
  - [A StrongREJECT for Empty Jailbreaks](https://proceedings.neurips.cc/paper_files/paper/2024/file/e2e06adf560b0706d3b1ddfca9f29756-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MBPP** (measurements) — *measured_by*
  > For the general domain evaluation benchmarks, we select MATH, MBPP, MMLU, and CEVAL from the aforementioned experimental settings. (Section 3.3).
  - [Mix-CPT: A Domain Adaptation Framework via Decoupling Knowledge Learning and Format Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc721384c26c0bdff3ec31a7de31d8d5-Paper-Conference.pdf)
- **Alpaca instruction dataset** (measurements) — *measured_by*
  > We set N g = 4 general evaluation tasks, covering Hellaswag (Zellers et al., 2019), CommonsenseQA (Talmor et al., 2018), Alpaca (Hendrycks et al., 2020), and BBH-Object-Count (Srivastava et al., 2022) (Section 3)
  - [Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf)
- **BBH Object Counting** (measurements) — *measured_by*
  > We set N g = 4 general evaluation tasks, covering Hellaswag (Zellers et al., 2019), CommonsenseQA (Talmor et al., 2018), Alpaca (Hendrycks et al., 2020), and BBH-Object-Count (Srivastava et al., 2022) (Section 3)
  - [Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > As shown in Appendix E.2, we assessed each iteration’s performance on general benchmarks, including GSM8k (Cobbe et al., 2021), TriviaQA (Joshi et al., 2017), MMLU (Hendrycks et al., 2020), and HumanEval (Chen et al., 2021). (Section 3.3)
  - [SPaR: Self-Play with Tree-Search Refinement to Improve Instruction-Following in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/abe1eb21ceb046209c96a0f5e7544ccc-Paper-Conference.pdf)
- **SST** (measurements) — *measured_by*
  > we perform General Capability Tests using six natural language tasks... Specifically, the evaluation tasks include: 1. SST (The Stanford Sentiment Treebank) (Section 4.3).
  - [AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf)
- **MRPC** (measurements) — *measured_by*
  > we perform General Capability Tests using six natural language tasks... Specifically, the evaluation tasks include: ... 2. MRPC (Microsoft Research Paraphrase Corpus) (Section 4.3).
  - [AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf)
- **Vicuna-Bench** (measurements) — *measured_by*
  > To evaluate the LLM’s general performance in short-text tasks, we measure its WinRate against the text-davinci-003 model using 100 queries from AlpacaEval and 80 queries from VicunaEval. (Section 5.1)
  - [RobustKV: Defending Large Language Models against Jailbreak Attacks via KV Eviction](https://proceedings.iclr.cc/paper_files/paper/2025/file/38bbae17d60940f3ee14dfd1035d7542-Paper-Conference.pdf)
- **VQA-v2** (measurements) — *measured_by*
  > we selected several common comprehensive benchmarks and VQA datasets, such as ... VQAv2 ... to evaluate the general capabilities of VLMs (Section 5.1).
  - [ETA: Evaluating Then Aligning Safety of Vision Language Models at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/06f9fe2915857be2b1e369419a531ad3-Paper-Conference.pdf)
- **MMMU-Pro** (measurements) — *measured_by*
  > we selected several common comprehensive benchmarks and VQA datasets, such as ... MMMU-Pro to evaluate the general capabilities of VLMs (Section 5.1).
  - [ETA: Evaluating Then Aligning Safety of Vision Language Models at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/06f9fe2915857be2b1e369419a531ad3-Paper-Conference.pdf)
- **Elo rating system** (measurements) — *measured_by*
  > Feng et al. (2024); Wu & Aji (2023) apply the classical Elo rating system (Elo & Sloan, 1978) (see the Appendix B.1 for detailed introduction) by treating the evaluation process as a sequence of model battles in order to derive model scores. (Section 2)
  - [UniCBE: An Uniformity-driven Comparing Based Evaluation Framework with Unified Multi-Objective Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/eafca59fcbabb555fdb5373e2f34385e-Paper-Conference.pdf)
- **Bradley-Terry model** (measurements) — *measured_by*
  > Fageot et al. (2024); Chiang et al. (2024) employ the Bradley-Terry model (Bradley & Terry, 1952) (see Appendix B.2 for detailed introduction) to estimate model scores by maximizing the likelihood of the comparison results between models. (Section 2)
  - [UniCBE: An Uniformity-driven Comparing Based Evaluation Framework with Unified Multi-Objective Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/eafca59fcbabb555fdb5373e2f34385e-Paper-Conference.pdf)
- **MixEval** (measurements) — *measured_by*
  > To evaluate the general capabilities of the self-play fine-tuned models, we employ MixEval (Ni et al., 2024) and Open LLM Leaderboard v2 (Fourrier et al., 2024) for benchmark evaluation. (Section 4.2)
  - [Magnetic Preference Optimization: Achieving Last-iterate Convergence for Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/5833b4daf5b076dd1cdb362b163dff0c-Paper-Conference.pdf)
- **Open LLM Leaderboard v2** (measurements) — *measured_by*
  > To evaluate the general capabilities of the self-play fine-tuned models, we employ MixEval (Ni et al., 2024) and Open LLM Leaderboard v2 (Fourrier et al., 2024) for benchmark evaluation. (Section 4.2)
  - [Magnetic Preference Optimization: Achieving Last-iterate Convergence for Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/5833b4daf5b076dd1cdb362b163dff0c-Paper-Conference.pdf)
- **Adversarial robustness** (constructs) — *causes*
  > increased model capabilities give rise to distinct emergent model vulnerabilities. (Section 1)
  - [Endless Jailbreaks with Bijection Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/b05c1fb3345743dea59f500ec5a0bba0-Paper-Conference.pdf)
- **Spider** (measurements) — *measured_by*
  > To validate that MTJD indeed betters output quality, we test MTJD (k=4) and standard multinomial sampling on Spider, MTBench, and HumanEval using the Llama-3 series models. ... For this process, the higher the scores, the better the downstream performance. (Section 5.1)
  - [Optimized Multi-Token Joint Decoding With Auxiliary Model for LLM Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/438c34f45d7b5d82aef1b6016e695d5a-Paper-Conference.pdf)
- **SAMSum** (measurements) — *measured_by*
  > To explore the side effects of sequential model editing on the general abilities of LLMs, four representative tasks with corresponding datasets were adopted for assessment... including: ... Summarization on the SAMSum (Gliwa et al., 2019)
  - [Perturbation-Restrained Sequential Model Editing](https://proceedings.iclr.cc/paper_files/paper/2025/file/2c15b0221da28bc6f4373a7e78b896dd-Paper-Conference.pdf)
- **The Pile** (measurements) — *measured_by*
  > maintain the general-purpose ability (losses on the Pile) unchanged.
  - [Data Mixing Laws: Optimizing Data Mixtures by Predicting Language Modeling Performance](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc84bfabe6389d8883fc2071c848f62a-Paper-Conference.pdf)
- **Unlearning efficacy** (constructs) — *correlates*
  > this exceptional unlearning performance comes at the cost of a significant decline in retain set accuracy (Section 5.2)
  - [Protecting Privacy in Multimodal Large Language Models with MLLMU-Bench](https://aclanthology.org/2025.naacl-long.207.pdf)
- **TyDi QA** (measurements) — *measured_by*
  > To evaluate the general capabilities, we utilized GSM8K (EM) (Cobbe et al., 2021), BBH (EM) (Cobbe et al., 2021), MMLU (EM) (Hendrycks et al., 2020), TydiQA (F1) (Clark et al., 2020), and WikiText (ppl) (Merity et al., 2016), following Ivison et al. (2023). (Section 4)
  - [Model Surgery: Modulating LLM's Behavior Via Simple Parameter Editing](https://aclanthology.org/2025.naacl-long.321.pdf)
- **MAUVE** (measurements) — *measured_by*
  > "we use the MAUVE metric ... to measure the quality of generated text against the real text"
  - [PoisonedParrot: Subtle Data Poisoning Attacks to Elicit Copyright-Infringing Content from Large Language Models](https://aclanthology.org/2025.naacl-long.415.pdf)
- **AlpacaEval 2.0** (measurements) — *measured_by*
  > Remarkably, on AlpacaEval 2 (Li et al., 2023c) and Arena-Hard (Li et al., 2024b), two LLM general problem-solving ability benchmarks, the model trained on 20K our synthetic instruction-response pairs, consistently outperforms models trained on significantly larger datasets... (Section 1)
  - [Synthesizing Post-Training Data for LLMs through Multi-Agent Simulation](https://aclanthology.org/2025.acl-long.1136.pdf)
- **RACE** (measurements) — *measured_by*
  > To evaluate LLMs’ general capabilities, we select several widely used benchmark, i.e., HellaSwag (Zellers et al., 2019), Race (Lai et al., 2017), MMLU (Hendrycks et al., 2021), GPQA (Rein et al., 2024), OpenBookQA (Mihaylov et al., 2018), BoolQ (Clark et al., 2019), AG News (Zhang et al., 2015), IMDB (Maas et al., 2011), and Perplexity (Chen et al., 1998). (Section 4.1)
  - [The Tug of War Within: Mitigating the Fairness-Privacy Conflicts in Large Language Models](https://aclanthology.org/2025.acl-long.590.pdf)
- **BoolQ** (measurements) — *measured_by*
  > To evaluate LLMs’ general capabilities, we select several widely used benchmark, i.e., HellaSwag (Zellers et al., 2019), Race (Lai et al., 2017), MMLU (Hendrycks et al., 2021), GPQA (Rein et al., 2024), OpenBookQA (Mihaylov et al., 2018), BoolQ (Clark et al., 2019), AG News (Zhang et al., 2015), IMDB (Maas et al., 2011), and Perplexity (Chen et al., 1998). (Section 4.1)
  - [The Tug of War Within: Mitigating the Fairness-Privacy Conflicts in Large Language Models](https://aclanthology.org/2025.acl-long.590.pdf)
- **AG News** (measurements) — *measured_by*
  > To evaluate LLMs’ general capabilities, we select several widely used benchmark, i.e., HellaSwag (Zellers et al., 2019), Race (Lai et al., 2017), MMLU (Hendrycks et al., 2021), GPQA (Rein et al., 2024), OpenBookQA (Mihaylov et al., 2018), BoolQ (Clark et al., 2019), AG News (Zhang et al., 2015), IMDB (Maas et al., 2011), and Perplexity (Chen et al., 1998). (Section 4.1)
  - [The Tug of War Within: Mitigating the Fairness-Privacy Conflicts in Large Language Models](https://aclanthology.org/2025.acl-long.590.pdf)
- **IMDb** (measurements) — *measured_by*
  > To evaluate LLMs’ general capabilities, we select several widely used benchmark, i.e., HellaSwag (Zellers et al., 2019), Race (Lai et al., 2017), MMLU (Hendrycks et al., 2021), GPQA (Rein et al., 2024), OpenBookQA (Mihaylov et al., 2018), BoolQ (Clark et al., 2019), AG News (Zhang et al., 2015), IMDB (Maas et al., 2011), and Perplexity (Chen et al., 1998). (Section 4.1)
  - [The Tug of War Within: Mitigating the Fairness-Privacy Conflicts in Large Language Models](https://aclanthology.org/2025.acl-long.590.pdf)
- **MultiRC** (measurements) — *measured_by*
  > "We evaluate the pre-trained base models on 17 tasks across different general domains which include: MMLU (Hendrycks et al., 2020), Arc-Easy, Arc-Challenge (Clark et al., 2018), HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), SIQA (Sap et al., 2019), SciQ (Welbl et al., 2017), RTE (Dagan et al., 2005), BBH (Suzgun et al., 2022), LAMBADA (Paperno et al., 2016), OpenBookQA (Mihaylov et al., 2018), RACE-Middle, RACE-High (Lai et al., 2017), MultiRC"
  - [Predictive Data Selection: The Data That Predicts Is the Data That Teaches](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shum25a/shum25a.pdf)
- **CoLA** (measurements) — *measured_by*
  > we perform General Capability Tests using six natural language tasks... Specifically, the evaluation tasks include: ... 5. CoLA (Corpus of Linguistic Acceptability) (Section 4.3).
  - [AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf)
- **CCBench** (measurements) — *measured_by*
  > We assess the models’ general ability on three widely used benchmarks: MMBench (Liu et al., 2023c), CCBench (Liu et al., 2023c), and SEEDImage (Li et al., 2023a), to verify that our model’s general capabilities. (Section 5.2)
  - [PerturboLLaVA: Reducing Multimodal Hallucinations with Perturbative Visual Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/9a8eb202c060b7d81f5889631cbcd47e-Paper-Conference.pdf)
- **MMStar** (measurements) — *measured_by*
  > “We adopt MMStar (Chen et al., 2024c), an advanced benchmark of evaluation the comprehensive capabilities of LVLMs, as the primary evaluation metric.” (Section 4.1)
  - [Towards Rationale-Answer Alignment of LVLMs via Self-Rationale Calibration](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25am/wu25am.pdf)

### → General ability
- **Catastrophic forgetting** (behaviors tasks) — *causes*
  > Furthermore, after fine-tuning the downstream tasks, the LLM may lose the general capability, due to catastrophic forgetting. (Section 1)
  - [SLIM: Let LLM Learn More and Forget Less with Soft LoRA and Identity Mixture](https://aclanthology.org/2025.naacl-long.246.pdf)
- **Generation diversity** (constructs) — *causes*
  > Diversity loss can harm both capabilities and representation. (Section 3.1)
  - [Diverse Preference Learning for Capabilities and Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/3df1eca840e82b11bbc33f68c773c38e-Paper-Conference.pdf)
- **Image classification** (behaviors tasks) — *causes*
  > enhanced classification performance of the VLM transfers to its general capabilities
  - [Why are Visually-Grounded Language Models Bad at Image Classification?](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c7024041be305c94d7311cfcc53d93e-Paper-Conference.pdf)
- **Unlearning** (constructs) — *causes*
  > ...the recent unlearning benchmark MUSE (Shi et al., 2024) highlights a major drawback in current methods: applying unlearning to larger corpora leads to a decline in general language usefulness. (Introduction)
  - [UNDIAL: Self-Distillation with Adjusted Logits for Robust Unlearning in Large Language Models](https://aclanthology.org/2025.naacl-long.444.pdf)
- **Evaluation ability** (constructs) — *causes*
  > Furthermore, our training method enhances the general capabilities of the model by constructing complicated judge task... (Abstract)
  - [Improve LLM-as-a-Judge Ability as a General Ability](https://aclanthology.org/2025.emnlp-main.712.pdf)

### Associated with
- **Reasoning** (constructs)
  > Finally, the identification of a single common factor underlying all benchmark scores suggests that a general ability for reasoning and knowledge can be effectively measured through a consolidated, sparse benchmark. (Section 4)
  - [metabench - A Sparse Benchmark of Reasoning and Knowledge in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ebc26584810a189ef1e4f173aba4319-Paper-Conference.pdf)
- **Safety alignment** (constructs)
  > The shape of the LLM capability landscape is drastically different from the one in the LLM safety landscape; these landscapes do not exhibit the same trend, further confirming that the basin shape is indeed unique to the safety of LLM.
  - [Navigating the Safety Landscape: Measuring Risks in Finetuning Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ada93fa6643735f294be51dc31eebbd4-Paper-Conference.pdf)
- **Language model pre-training** (behaviors tasks)
  > A representative mixture optimization target is to maintain the general-purpose ability (losses on the Pile) unchanged (Section 5).
  - [Data Mixing Laws: Optimizing Data Mixtures by Predicting Language Modeling Performance](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc84bfabe6389d8883fc2071c848f62a-Paper-Conference.pdf)
- **Composability** (constructs)
  > The disparity between overall utility and composability metrics underscores the need for more nuanced evaluations explicitly targeting composability as a design criterion. (Section 4.4)
  - [Composable Interventions for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7f5f9a88c6516469c83d074c6f2976fb-Paper-Conference.pdf)
- **Knowledge** (constructs)
  > Finally, the identification of a single common factor underlying all benchmark scores suggests that a general ability for reasoning and knowledge can be effectively measured through a consolidated, sparse benchmark. (Section 4)
  - [metabench - A Sparse Benchmark of Reasoning and Knowledge in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ebc26584810a189ef1e4f173aba4319-Paper-Conference.pdf)
- **Understanding** (constructs)
  > degradation in foundational LLM capabilities such as comprehension, reasoning, and common sense — an effect known as alignment tax (Section 1)
  - [Model Surgery: Modulating LLM's Behavior Via Simple Parameter Editing](https://aclanthology.org/2025.naacl-long.321.pdf)
- **Commonsense knowledge** (constructs)
  > degradation in foundational LLM capabilities such as comprehension, reasoning, and common sense — an effect known as alignment tax (Section 1)
  - [Model Surgery: Modulating LLM's Behavior Via Simple Parameter Editing](https://aclanthology.org/2025.naacl-long.321.pdf)
- **Adaptability** (constructs)
  > How can we preserve and transfer the general capabilities of LLMs while enabling them to adapt to domain-specific knowledge? (Section 1).
  - [Splitting with Importance-aware Updating for Heterogeneous Federated Learning with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liao25c/liao25c.pdf)
- **Natural language inference** (behaviors tasks)
  > we perform General Capability Tests using six natural language tasks... Specifically, the evaluation tasks include: ... 6. NLI (Natural Language Inference) (Section 4.3).
  - [AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf)
