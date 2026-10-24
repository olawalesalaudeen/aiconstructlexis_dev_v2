# Generalization
**Type:** Construct  
**Referenced in:** 1195 papers  
**Also known as:** Generalizability, Generalization ability, Generalization capability, Generalization performance, Generalisation, Generalisability, Task-agnostic generalizability, Domain-generality, Single-task generalization, Sequence generalization  

## State of the Field

**Definition agreement:** Consensus. Most papers define generalization as a model or method maintaining good performance, or successfully applying learned patterns, on unseen data, tasks, domains, instructions, or distribution shifts beyond the conditions it was trained on, often in contrast to memorization or overfitting. A few papers apply the term to prompts, attacks, edits, or other components, but they still use the same core idea of effectiveness extending to novel cases rather than a different phenomenon.

**Space of definitions.** Across papers, the prevailing usage treats generalization as a model, method, or agent's capacity to maintain useful performance on unseen data, tasks, domains, or conditions, often under distribution shift and often contrasted with memorization or overfitting; one recurring formulation asks whether results reflect "genuine ability or just memorization of the training data." Many papers make this concrete as transfer to new instructions, tools, languages, modalities, environments, users, or harder problems without task-specific retraining. A smaller line uses the same term more narrowly for held-out test performance from the same distribution, for logically or semantically transformed inputs such as reversed relations or rephrased prompts, or for specialized settings like knowledge editing, abstention, attacks, and merged models.

**Space of facets.** Papers use several near-synonyms for the broad transfer notion, including generalizability, generalization ability, generalization capability, generalization performance, and British-spelling variants. They also carve out narrower subtypes such as task-agnostic generalizability, domain-generality, single-task generalization, and sequence generalization. The main contrasts are with memorization, overfitting, shortcut learning, and specialization; in editing work, generalization is also discussed alongside locality and reliability, and in abstention work alongside specificity. A smaller set of papers reserves generality for preserving the union of skills in merged models or for making an edit apply across related inputs.

**Space of measurement.** Operationalization is broad: papers link generalization to 141 measurement instruments and 23 behavioral indicators. The most frequent instruments are MMLU, MT-Bench, ARC-Challenge, GSM8K, and GPQA, and most operationalizations use benchmark performance on unseen tasks, out-of-domain datasets, cross-domain transfers, or seen versus unseen splits. Many papers also use embodied, multimodal, tool-use, retrieval, web, and editing benchmarks, while smaller lines use human evaluation, GPT-4 or other LLM-as-a-judge comparisons, or analytical quantities such as generalization error and bounds. These measurements usually match the dominant definition of transfer beyond training, but some narrower operationalizations target rephrased or neighboring edit queries, abstention on descendant concepts, or ordinary held-out test sets rather than broader distribution shifts.

**Links.** Across linked constructs, papers most often connect generalization to in-context learning, memorization, reasoning, robustness, and overfitting, with many other constructs also appearing. Papers claim causal relationships in both directions between generalization and in-context learning, while memorization is treated as related to generalization, reported to correlate with it in one training study, and also linked by causal claims that memorization can lead to limited or poor generalization. Reasoning is both related to generalization and claimed to causally support it; robustness is both related to it and linked by causal claims in both directions; overfitting is related to generalization, and papers claim causal relationships from overfitting to reduced generalization. A smaller group of papers also reports correlations with additional constructs and relatedness links outside these five.

## Sources

**[$\mathcal{B}$-Coder: Value-Based Deep Reinforcement Learning for Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/7e9c2053258b1bdd32ff2654802cd594-Paper-Conference.pdf)**
> The ability of a model or fusion method to maintain strong performance across different conditions, datasets, or tasks, such as clean vs. noisy speech or audio-visual settings.

**[An interpretable error correction method for enhancing code-to-code translation](https://proceedings.iclr.cc/paper_files/paper/2024/file/5e01f4ef7ffeedf3317a44461d18df9d-Paper-Conference.pdf) (as "Generalizability")**
> The extent to which a model maintains useful performance across diverse domains, entity types, and evaluation settings beyond the specific data it was trained on.

**[KoLA: Carefully Benchmarking World Knowledge of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c26719edf1e6fba8f1ca7d3938e27785-Paper-Conference.pdf) (as "Generalization ability")**
> The model's capacity to perform effectively on new, unseen data and tasks that differ from its training distribution.

**[AffineQuant: Affine Transformation Quantization for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/ddfb58b61e7213dfb9e06c695475b2bd-Paper-Conference.pdf) (as "Generalization capability")**
> The ability of the quantized model to preserve performance across different datasets, model sizes, and evaluation settings.

**[Reflective Multi-Agent Collaboration based on Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fa54b0edce5eef0bb07654e8ee800cb4-Paper-Conference.pdf) (as "Generalization performance")**
> The latent tendency of a trained reflector or system to transfer effectively across different actor models or settings.

**[Model merging with SVD to tie the Knots](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d4f8a5109c5083b5307fcd0bddae7a7-Paper-Conference.pdf) (as "Generality")**
> The ability of a merged model to preserve the union of all skills from its base models and correctly classify inputs from any of the source tasks into a unified label space.

**[Procedural Knowledge in Pretraining Drives Reasoning in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/482847908fd916b5b6b9e82525c773ad-Paper-Conference.pdf) (as "Generalisation")**
> The model's underlying strategy for applying knowledge learned from pretraining data to new, unseen problems.

**[Improving Chain-of-Thought Reasoning via Quasi-Symbolic Abstractions](https://aclanthology.org/2025.acl-long.843.pdf) (as "Generalisability")**
> The ability of a reasoning method to transfer effectively across different tasks, models, and problem domains without significant reconfiguration.

**[Retraining-free Merging of Sparse MoE via Hierarchical Clustering](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25aq/chen25aq.pdf) (as "Task-agnostic generalizability")**
> The capacity of a model or method to maintain performance across diverse tasks without requiring task-specific fine-tuning or retraining.

**[Position: Principles of Animal Cognition to Improve LLM Evaluations](https://raw.githubusercontent.com/mlresearch/v267/main/assets/rane25a/rane25a.pdf) (as "Domain-generality")**
> The capacity to apply a cognitive skill across diverse contexts and stimulus types, rather than relying on narrow, task-specific patterns or priors.

**[Come Together, But Not Right Now: A Progressive Strategy to Boost Low-Rank Adaptation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhuang25c/zhuang25c.pdf) (as "Single-task generalization")**
> The ability of a model to perform well on a single, specific downstream task after parameter-efficient fine-tuning.

**[Towards Auto-Regressive Next-Token Prediction: In-context Learning Emerges from Generalization](https://proceedings.iclr.cc/paper_files/paper/2025/file/eedf422d321a20b2bd5e947c57c82e96-Paper-Conference.pdf) (as "Sequence generalization")**
> The ability to handle new sequences within seen topics after learning from many training sequences.

## Relationships

### Generalization →
- **MMLU** (measurements) — *measured_by*
  > On MMLU tasks (two rightmost plots in Fig. 4), IO even improves validation performance comparable to or better than EO, but the validation improvement does not generalize to the test set.
  - [Teach Better or Show Smarter? On Instructions and Exemplars in Automatic Prompt Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/6b031defd145b02bed031093d8797bb3-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > for evaluating model performance on out-of-distribution (OOD) preference data, we utilize datasets such as HHH-Alignment [44], MT-Bench Human Judgements [45], and RewardBench [46] (Section 4).
  - [Regularizing Hidden States Enables Learning Generalizable Reward Model for LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/71f7154547c748c8041505521ca433ab-Paper-Conference.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > Figure 4 shows the downstream performance on HellaSwag, MMLU Var3, ARC-Challenge, and SciQ. PolyNorm outperforms SwiGLU on all tasks, with notable improvements, demonstrating superior generalization capabilities.
  - [Polynomial Composition Activations: Unleashing the Dynamics of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/725f5e8036cc08adeba4a7c3bcbc6f2c-Paper-Conference.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > To test generalization (Section 4.4), we additionally evaluate on MATH (4-shot) (Hendrycks et al., 2021b), MBPP (3-shot) (Austin et al., 2021), NaturalQuestions (5-shot) (Kwiatkowski et al., 2019), TriviaQA (5-shot) (Joshi et al., 2017), Hellaswag (0-shot) (Zellers et al., 2019), PIQA (0-shot) (Bisk et al., 2020), and TruthfulQA (0-shot) (Lin et al., 2022).
  - [Self-MoE: Towards Compositional Large Language Models with Self-Specialized Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/558a100caa93422df215fadb9e9b1dd7-Paper-Conference.pdf)
- **Robustness** (constructs) — *causes*
  > We attribute our outstanding robustness to the great generalization ability of our distilled thought-templates
  - [Buffer of Thoughts: Thought-Augmented Reasoning with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cde328b7bf6358f5ebb91fe9c539745e-Paper-Conference.pdf)
- **GSM8K** (measurements) — *measured_by*
  > we access three mainstream benchmarks (MMLU [15], BBH [37], and GSM8K [8]) to evaluate generalization abilities. (Section 3.1)
  - [AlchemistCoder: Harmonizing and Eliciting Code Capability by Hindsight Tuning on Multi-source Data](https://proceedings.neurips.cc/paper_files/paper/2024/file/040c816286b3844fd78f2124eec75f2e-Paper-Conference.pdf)
- **GPQA** (measurements) — *measured_by*
  > Additionally, we evaluate the model’s generalization performance across six out-of-domain tasks, including MT-Bench (Zheng et al., 2024), ARC-Challenge (25-shot) (Clark et al., 2018), GSM8K (8-shot) (Cobbe et al., 2021), HellaSwag (8-shot) (Zellers et al., 2019), GPQA (0-shot) (Rein et al., 2023), and MMLU (0-shot) (Hendrycks et al., 2020).
  - [Montessori-Instruct: Generate Influential Training Data Tailored for Student Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ba1d33849b963efc6b5d3082ad68f480-Paper-Conference.pdf)
- **ALFWorld** (measurements) — *measured_by*
  > AlFWorld and ScienceWorld include unseen tasks to evaluate the agent’s generalization ability. (Section 4.1)
  - [Agent Planning with World Knowledge Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/d032263772946dd5026e7f3cd22bce5b-Paper-Conference.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > we access three mainstream benchmarks (MMLU [15], BBH [37], and GSM8K [8]) to evaluate generalization abilities. (Section 3.1)
  - [AlchemistCoder: Harmonizing and Eliciting Code Capability by Hindsight Tuning on Multi-source Data](https://proceedings.neurips.cc/paper_files/paper/2024/file/040c816286b3844fd78f2124eec75f2e-Paper-Conference.pdf)
- **HaluEval** (measurements) — *measured_by*
  > The results in Tab. 6 reveal that our annotation model achieves notable accuracies on both HaluEval and HalluQA... underscoring the generalization capability of ANAH-v2. (Section 4.4)
  - [ANAH-v2: Scaling Analytical Hallucination Annotation of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6e4cdfdd909ea4e34bfc85a12774cba0-Paper-Conference.pdf)
- **OpenBookQA** (measurements) — *measured_by*
  > In this section, we investigate whether our method is generally applicable beyond the medical domain. We use two general domain datasets, CommonsenseQA (CSQA) (Talmor et al., 2018) and OpenbookQA (OBQA) (Mihaylov et al., 2018)... (Section 4.5)
  - [Enhancing Small Medical Learners with Privacy-preserving Contextual Prompting](https://proceedings.iclr.cc/paper_files/paper/2024/file/79322f3668888f8f7fc99bbd98fbbaed-Paper-Conference.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > To test generalization (Section 4.4), we additionally evaluate on MATH (4-shot) (Hendrycks et al., 2021b), MBPP (3-shot) (Austin et al., 2021), NaturalQuestions (5-shot) (Kwiatkowski et al., 2019), TriviaQA (5-shot) (Joshi et al., 2017), Hellaswag (0-shot) (Zellers et al., 2019), PIQA (0-shot) (Bisk et al., 2020), and TruthfulQA (0-shot) (Lin et al., 2022).
  - [Self-MoE: Towards Compositional Large Language Models with Self-Specialized Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/558a100caa93422df215fadb9e9b1dd7-Paper-Conference.pdf)
- **GrailQA** (measurements) — *measured_by*
  > We experiment on GrailQA to compare the performance on different generalization levels (preliminary in Appendix D). (Section 4.3.3)
  - [TARGA: Targeted Synthetic Data Generation for Practical Reasoning over Structured Data](https://aclanthology.org/2025.acl-long.137.pdf)
- **GAIA** (measurements) — *measured_by*
  > Static benchmarks are broken benchmarks in the making, and making GAIA evolve year-by-year through the removal of broken questions and the addition of new ones might be an important component to better assess the generalization and robustness of AI systems. (Section 5)
  - [GAIA: a benchmark for General AI Assistants](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf)
- **Linear probing** (measurements) — *measured_by*
  > "we present a standard linear probe (on top of CLIP’s features), which achieves slightly better accuracy but a vacuous generalization bound"
  - [Understanding prompt engineering may not require rethinking generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/803b9c4a8e4784072fdd791c54d614e2-Paper-Conference.pdf)
- **ScienceWorld** (measurements) — *measured_by*
  > AlFWorld and ScienceWorld include unseen tasks to evaluate the agent’s generalization ability. (Section 4.1)
  - [Agent Planning with World Knowledge Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/d032263772946dd5026e7f3cd22bce5b-Paper-Conference.pdf)
- **GQA** (measurements) — *measured_by*
  > The reason behind selecting GQA, InfoSeek, and A-OKVQA is to evaluate the generalization capability of our framework across datasets that do not necessitate up-to-date knowledge (Section 5.1).
  - [SearchLVLMs: A Plug-and-Play Framework for Augmenting Large Vision-Language Models by Searching Up-to-Date Internet Knowledge](https://proceedings.neurips.cc/paper_files/paper/2024/file/76954b4a44e158e738b4c64494977c6a-Paper-Conference.pdf)
- **MMBench** (measurements) — *measured_by*
  > We empirically analyze the multimodal capacity and generalization ability of MoVA on a wide range of challenging MLLM benchmarks in Table 3. This comprehensive assessment is conducted on MME [82], MMBench [16], QBench [83], MathVista [84], MathVerse [85], and POPE [20]. (Section 4.2)
  - [MoVA: Adapting Mixture of Vision Experts to Multimodal Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/bb0fea29f7aa6ede17e906ac6a225f34-Paper-Conference.pdf)
- **POPE** (measurements) — *measured_by*
  > We empirically analyze the multimodal capacity and generalization ability of MoVA on a wide range of challenging MLLM benchmarks in Table 3. This comprehensive assessment is conducted on MME [82], MMBench [16], QBench [83], MathVista [84], MathVerse [85], and POPE [20]. (Section 4.2)
  - [MoVA: Adapting Mixture of Vision Experts to Multimodal Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/bb0fea29f7aa6ede17e906ac6a225f34-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > “We focus on the GPT-4 evaluation since the reward model will not be accurate for the OOD data.”
  - [Aligning Large Language Models with Representation Editing: A Control Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/41bba7b0f5c81e789a20bb16a370aeeb-Paper-Conference.pdf)
- **MBPP** (measurements) — *measured_by*
  > “We also evaluate the trained router on three out-of-distribution (OOD) tasks: (ii) MBPP [1], which is a code benchmark”
  - [RouterDC: Query-Based Router by Dual Contrastive Learning for Assembling Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/7a641b8ec86162fc875fb9f6456a542f-Paper-Conference.pdf)
- **Functional MATH** (measurements) — *measured_by*
  > To further assess the generalization capabilities of our BoN aware fine-tuned models, we evaluate their performance on two challenging, held-out benchmarks: Functional Math (Srivastava et al., 2024) and MathOdyssey (Fang et al., 2024).
  - [Inference-Aware Fine-Tuning for Best-of-N Sampling in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c40bed606c51c8e827c1ba75aa2da054-Paper-Conference.pdf)
- **WebArena** (measurements) — *measured_by*
  > Furthermore, we evaluate LCoW’s generalization capabilities in WebArena benchmark.
  - [Learning to Contextualize Web Pages for Enhanced Decision Making by LLM Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/c995a913bc20ca39ce2231b8973be90a-Paper-Conference.pdf)
- **miniF2F** (measurements) — *measured_by*
  > The FORMALALIGN model exhibits consistent performance across four diverse datasets, demonstrating its ability to generalize its autoformalization evaluation capabilities. Particularly noteworthy are the model's AS scores of 66.39% and 64.61% on the challenging MiniF2F-Valid and MiniF2F-Test datasets, respectively.
  - [FormalAlign: Automated Alignment Evaluation for Autoformalization](https://proceedings.iclr.cc/paper_files/paper/2025/file/fceedf8c9c0ff51f41b9fe0294ef0070-Paper-Conference.pdf)
- **BEIR** (measurements) — *measured_by*
  > Our main evaluations are conducted on BEIR (Thakur et al., 2021) and MIRACL (Zhang et al., 2023), to assess the generalization of dense retrievers and multilingual retrieval capability. (Section 4.5).
  - [DRAMA: Diverse Augmentation from Large Language Models to Smaller Dense Retrievers](https://aclanthology.org/2025.acl-long.1457.pdf)
- **OSWorld** (measurements) — *measured_by*
  > To further evaluate the generalization capabilities of our model, we tested it on OSWorld, a unified computer environment designed for multimodal agents. (Section 4.3)
  - [Aguvis: Unified Pure Vision Agents for Autonomous GUI Interaction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25ae/xu25ae.pdf)
- **OlympiadBench** (measurements) — *measured_by*
  > To assess generalizability of our models to out-of-distribution problems, we evaluate on two additional benchmarks: MMLU-Pro Math (Wang et al., 2024b) and Olympiad Bench (He et al., 2024). (Section 4.1).
  - [Reinforce LLM Reasoning through Multi-Agent Reflection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yuan25l/yuan25l.pdf)
- **MuSiQue** (measurements) — *measured_by*
  > For out-of-domain evaluation, we introduce three datasets that differ significantly in question style and information distribution: MuSiQue (Trivedi et al., 2022)... These datasets test the model’s generalization ability beyond the training domain. (Section 4.2.1)
  - [DeepResearcher: Scaling Deep Research via Reinforcement Learning in Real-world Environments](https://aclanthology.org/2025.emnlp-main.22.pdf)
- **Natural Questions** (measurements) — *measured_by*
  > To test generalization (Section 4.4), we additionally evaluate on MATH (4-shot) (Hendrycks et al., 2021b), MBPP (3-shot) (Austin et al., 2021), NaturalQuestions (5-shot) (Kwiatkowski et al., 2019), TriviaQA (5-shot) (Joshi et al., 2017), Hellaswag (0-shot) (Zellers et al., 2019), PIQA (0-shot) (Bisk et al., 2020), and TruthfulQA (0-shot) (Lin et al., 2022).
  - [Self-MoE: Towards Compositional Large Language Models with Self-Specialized Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/558a100caa93422df215fadb9e9b1dd7-Paper-Conference.pdf)
- **ARC-AGI** (measurements) — *measured_by*
  > The Abstraction and Reasoning Corpus (ARC-AGI), introduced by Chollet (2019) and designed to assess core knowledge and the ability to generalize in AI, exemplifies this difficulty. (Section 1)
  - [Product of Experts with LLMs: Boosting Performance on ARC Is a Matter of Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/franzen25a/franzen25a.pdf)
- **MATH** (measurements) — *measured_by*
  > To test generalization (Section 4.4), we additionally evaluate on MATH (4-shot) (Hendrycks et al., 2021b), MBPP (3-shot) (Austin et al., 2021), NaturalQuestions (5-shot) (Kwiatkowski et al., 2019), TriviaQA (5-shot) (Joshi et al., 2017), Hellaswag (0-shot) (Zellers et al., 2019), PIQA (0-shot) (Bisk et al., 2020), and TruthfulQA (0-shot) (Lin et al., 2022).
  - [Self-MoE: Towards Compositional Large Language Models with Self-Specialized Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/558a100caa93422df215fadb9e9b1dd7-Paper-Conference.pdf)
- **PIQA** (measurements) — *measured_by*
  > To test generalization (Section 4.4), we additionally evaluate on MATH (4-shot) (Hendrycks et al., 2021b), MBPP (3-shot) (Austin et al., 2021), NaturalQuestions (5-shot) (Kwiatkowski et al., 2019), TriviaQA (5-shot) (Joshi et al., 2017), Hellaswag (0-shot) (Zellers et al., 2019), PIQA (0-shot) (Bisk et al., 2020), and TruthfulQA (0-shot) (Lin et al., 2022).
  - [Self-MoE: Towards Compositional Large Language Models with Self-Specialized Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/558a100caa93422df215fadb9e9b1dd7-Paper-Conference.pdf)
- **VirtualHome** (measurements) — *measured_by*
  > Table 1: Comparison of generalization performance on eight unseen tasks, with episodic returns averaged over 100 episodes. In these tasks, we replace the pancake in the original Food Preparation task with other foods like cheese, hamburger, apple pie and pizza
  - [Reinforcing LLM Agents via Policy Optimization with Action Decomposition](https://proceedings.neurips.cc/paper_files/paper/2024/file/bc09efb501c801ed92e181e26a885c2d-Paper-Conference.pdf)
- **CommonsenseQA** (measurements) — *measured_by*
  > In this section, we investigate whether our method is generally applicable beyond the medical domain. We use two general domain datasets, CommonsenseQA (CSQA) (Talmor et al., 2018) and OpenbookQA (OBQA) (Mihaylov et al., 2018)... (Section 4.5)
  - [Enhancing Small Medical Learners with Privacy-preserving Contextual Prompting](https://proceedings.iclr.cc/paper_files/paper/2024/file/79322f3668888f8f7fc99bbd98fbbaed-Paper-Conference.pdf)
- **SVAMP** (measurements) — *measured_by*
  > “the SVAMP dataset, containing 1,000 problems, is used solely for evaluation purposes to demonstrate the generalizability of our method.”
  - [Recursive Introspection: Teaching Language Model Agents How to Self-Improve](https://proceedings.neurips.cc/paper_files/paper/2024/file/639d992f819c2b40387d4d5170b8ffd7-Paper-Conference.pdf)
- **In-context learning** (constructs) — *causes*
  > Our theoretical results of population loss reveal that model generalization, tightly with ICL abilities, is influenced by model size, optimization iterations, pre-training data and prompt length. This further demonstrates that ICL emerges from the excellent generalization of sequences and topics (Section 4.1 and Section 4.2).
  - [Towards Auto-Regressive Next-Token Prediction: In-context Learning Emerges from Generalization](https://proceedings.iclr.cc/paper_files/paper/2025/file/eedf422d321a20b2bd5e947c57c82e96-Paper-Conference.pdf)
- **FLAN** (measurements) — *measured_by*
  > To demonstrate the generalizability and robustness of our method, we include FLAN (Chung et al., 2024) (a mix of multiple NLP tasks) as reference datasets .
  - [Harnessing Diversity for Important Data Selection in Pretraining Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b588d9b67932b459ea66ff6e2804c6b3-Paper-Conference.pdf)
- **HotpotQA** (measurements) — *measured_by*
  > To evaluate the transferability of our approach, we conducted out-of-domain experiments by training the model on one dataset and testing it on another. We use the 2Wiki (2W), HotpotQA (HQ), and MuSiQue (MQ) datasets. (Section 6.6)
  - [StepER: Step-wise Knowledge Distillation for Enhancing Reasoning Ability in Multi-Step Retrieval-Augmented Language Models](https://aclanthology.org/2025.emnlp-main.1500.pdf)
- **IMDb** (measurements) — *measured_by*
  > We investigate the generalization performance of a host of approximate Bayesian methods... we train a CNN-LSTM model... on the IMDB (Maas et al., 2011)...
  - [Scalable Bayesian Learning with posteriors](https://proceedings.iclr.cc/paper_files/paper/2025/file/1f9f4ff2ebebb298d88e3fe0e10162db-Paper-Conference.pdf)
- **GLUE** (measurements) — *measured_by*
  > SAFE improves the average GLUE score from 84.66 (LoRA) to 84.99 — this is because SAFE induces a regularization effect on less-important adapters improving generalization performance of the model. (Section 5.2.1)
  - [Not All Adapters Matter: Selective Adapter Freezing for Memory-Efficient Fine-Tuning of Language Models](https://aclanthology.org/2025.naacl-long.480.pdf)
- **HumanEval** (measurements) — *measured_by*
  > Among these, AIME-2024, HumanEval, HumanEval+, GPQA, and SciBench are from a totally different distributions compared to training data, serving to verify the generalization capability of MAS-GPT. (Section 4.1)
  - [MAS-GPT: Training LLMs to Build LLM-based Multi-Agent Systems](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ye25g/ye25g.pdf)
- **Minecraft** (measurements) — *measured_by*
  > Minecraft offers a unique challenge in 3D spatial reasoning and generalization within a procedurally generated world.
  - [SmartPlay : A Benchmark for LLMs as Intelligent Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/063d1fadbde557466bf5bcffe814a64e-Paper-Conference.pdf)
- **APIBench** (measurements) — *measured_by*
  > We further extend ToolLLaMA to an OOD dataset APIBench to validate its generalization ability.
  - [ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs](https://proceedings.iclr.cc/paper_files/paper/2024/file/28e50ee5b72e90b50e7196fde8ea260e-Paper-Conference.pdf)
- **Training stability** (constructs) — *correlates*
  > Experimental results indicate that our approach significantly enhances training stability and model generalization. (Section 1)
  - [Improving Generalization of Alignment with Human Preferences through Group Invariant Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2d82a425af4c18a35049899fea5ee82-Paper-Conference.pdf)
- **CIFAR-10** (measurements) — *measured_by*
  > In this section, we evaluate the generalization of discrete prompts generated by Greedy on CIFAR-10, CIFAR-100, ImageNet as well as domain generalization datasets fMoW (Christie et al., 2018) and OfficeHome (Venkateswara et al., 2017) (Section 5)
  - [Understanding prompt engineering may not require rethinking generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/803b9c4a8e4784072fdd791c54d614e2-Paper-Conference.pdf)
- **CIFAR-100** (measurements) — *measured_by*
  > In this section, we evaluate the generalization of discrete prompts generated by Greedy on CIFAR-10, CIFAR-100, ImageNet as well as domain generalization datasets fMoW (Christie et al., 2018) and OfficeHome (Venkateswara et al., 2017) (Section 5)
  - [Understanding prompt engineering may not require rethinking generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/803b9c4a8e4784072fdd791c54d614e2-Paper-Conference.pdf)
- **ImageNet-1k** (measurements) — *measured_by*
  > In this section, we evaluate the generalization of discrete prompts generated by Greedy on CIFAR-10, CIFAR-100, ImageNet as well as domain generalization datasets fMoW (Christie et al., 2018) and OfficeHome (Venkateswara et al., 2017) (Section 5)
  - [Understanding prompt engineering may not require rethinking generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/803b9c4a8e4784072fdd791c54d614e2-Paper-Conference.pdf)
- **fMoW** (measurements) — *measured_by*
  > In this section, we evaluate the generalization of discrete prompts generated by Greedy on CIFAR-10, CIFAR-100, ImageNet as well as domain generalization datasets fMoW (Christie et al., 2018) and OfficeHome (Venkateswara et al., 2017) (Section 5)
  - [Understanding prompt engineering may not require rethinking generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/803b9c4a8e4784072fdd791c54d614e2-Paper-Conference.pdf)
- **AGIEval** (measurements) — *measured_by*
  > Additionally, to verify generalization, we perform all English tasks in AGIEval (Zhong et al., 2023) using zero-shot settings, which presents a collection of human-centric standardized exams.
  - [OpenChat: Advancing Open-source Language Models with Mixed-Quality Data](https://proceedings.iclr.cc/paper_files/paper/2024/file/fc8781fb328fb1fd069584a4519a2709-Paper-Conference.pdf)
- **FLORES-200** (measurements) — *measured_by*
  > “For zero-shot evaluation, we adopt Flores200 (NLLB Team, 2022) and evaluate on {Fr, De, Hindi (Hi), Turkish (Tr), Polish (Po)→Zh} and {Fr, Zh, Hi, Tr, Po→De} for En-Zh and En-De translation respectively.”
  - [When Scaling Meets LLM Finetuning: The Effect of Data, Model and Finetuning Method](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2ad28981782bb62f025d2893791b629-Paper-Conference.pdf)
- **InfoSeek** (measurements) — *measured_by*
  > The reason behind selecting GQA, InfoSeek, and A-OKVQA is to evaluate the generalization capability of our framework across datasets that do not necessitate up-to-date knowledge (Section 5.1).
  - [SearchLVLMs: A Plug-and-Play Framework for Augmenting Large Vision-Language Models by Searching Up-to-Date Internet Knowledge](https://proceedings.neurips.cc/paper_files/paper/2024/file/76954b4a44e158e738b4c64494977c6a-Paper-Conference.pdf)
- **A-OKVQA** (measurements) — *measured_by*
  > The reason behind selecting GQA, InfoSeek, and A-OKVQA is to evaluate the generalization capability of our framework across datasets that do not necessitate up-to-date knowledge (Section 5.1).
  - [SearchLVLMs: A Plug-and-Play Framework for Augmenting Large Vision-Language Models by Searching Up-to-Date Internet Knowledge](https://proceedings.neurips.cc/paper_files/paper/2024/file/76954b4a44e158e738b4c64494977c6a-Paper-Conference.pdf)
- **MME** (measurements) — *measured_by*
  > We empirically analyze the multimodal capacity and generalization ability of MoVA on a wide range of challenging MLLM benchmarks in Table 3. This comprehensive assessment is conducted on MME [82], MMBench [16], QBench [83], MathVista [84], MathVerse [85], and POPE [20]. (Section 4.2)
  - [MoVA: Adapting Mixture of Vision Experts to Multimodal Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/bb0fea29f7aa6ede17e906ac6a225f34-Paper-Conference.pdf)
- **ASDiv** (measurements) — *measured_by*
  > Additionally, we include two mathematical reasoning datasets, i.e., SVAMP [12] and ASDiv [18], to evaluate the out-of-domain generalizability of the models fine-tuned on the data generated from GSM8K and MATH datasets.
  - [Neuro-Symbolic Data Generation for Math Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/29d319f7c1513c9ecd81d3a6e9632a6e-Paper-Conference.pdf)
- **CollegeMath** (measurements) — *measured_by*
  > CollegeMath (Tang et al., 2024): This test set contains 2818 college-level mathematical problems extracted from 9 textbooks across 7 domains such as linear algebra and differential equations, testing generalization on complex mathematical reasoning in diverse domains. (Section 4.1)
  - [DART-Math: Difficulty-Aware Rejection Tuning for Mathematical Problem-Solving](https://proceedings.neurips.cc/paper_files/paper/2024/file/0ef1afa0daa888d695dcd5e9513bafa3-Paper-Conference.pdf)
- **TheoremQA** (measurements) — *measured_by*
  > TheoremQA (Chen et al., 2023): This benchmark contains 800 problems focused on utilizing mathematical theorems to solve challenging problems in fields such as math, physics and engineering, testing generalization on theoretical reasoning in general STEM. (Section 4.1)
  - [DART-Math: Difficulty-Aware Rejection Tuning for Mathematical Problem-Solving](https://proceedings.neurips.cc/paper_files/paper/2024/file/0ef1afa0daa888d695dcd5e9513bafa3-Paper-Conference.pdf)
- **Clotho** (measurements) — *measured_by*
  > Consequently, our model, having been trained solely on AudioSet’s audio excerpts and images, may encounter unfamiliar concepts in Clotho, thereby testing its capacity for generalization. (Section 4)
  - [An eye for an ear: zero-shot audio description leveraging an image captioner with audio-visual token distribution matching](https://proceedings.neurips.cc/paper_files/paper/2024/file/4426af45e987692abf1b80108951ff8a-Paper-Conference.pdf)
- **XSum** (measurements) — *measured_by*
  > We conducted additional experiments to further evaluate the robustness and generalizability of our fine-tuning techniques. These experiments included assessments on the xSum dataset
  - [OpenDebateEvidence: A Massive-Scale Argument Mining and Summarization Dataset](https://proceedings.neurips.cc/paper_files/paper/2024/file/3c630d28df1cff44314d5798f82e02ec-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Expert routing** (behaviors tasks) — *causes*
  > "This coarse-to-fine paradigm effectively leverages representations from experts based on multimodal context and model expertise, further enhancing the generalization ability."
  - [MoVA: Adapting Mixture of Vision Experts to Multimodal Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/bb0fea29f7aa6ede17e906ac6a225f34-Paper-Conference.pdf)
- **LastFM** (measurements) — *measured_by*
  > “To validate the generalization ability of iLoRA, we conducted extensive experiments on three datasets derived from real-world recommendation scenarios: LastFM, MovieLens, and Steam”
  - [Customizing Language Models with Instance-wise LoRA for Sequential Recommendation](https://proceedings.neurips.cc/paper_files/paper/2024/file/cd476d01692c508ddf1cb43c6279a704-Paper-Conference.pdf)
- **FollowBench** (measurements) — *measured_by*
  > FollowBench is a fine-grained constraint-following benchmark with five levels of difficulty. It contains diverse and open-ended instructions requiring evaluation by strong LLMs, such as GPT-4, which can fully examine the generalization of AUTOIF to more general instructions not verifiable by simple code executions. (Section 4).
  - [Self-play with Execution Feedback: Improving Instruction-following Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/62203a74e233e933b160711e791e1a02-Paper-Conference.pdf)
- **MathOdyssey** (measurements) — *measured_by*
  > To further assess the generalization capabilities of our BoN aware fine-tuned models, we evaluate their performance on two challenging, held-out benchmarks: Functional Math (Srivastava et al., 2024) and MathOdyssey (Fang et al., 2024).
  - [Inference-Aware Fine-Tuning for Best-of-N Sampling in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c40bed606c51c8e827c1ba75aa2da054-Paper-Conference.pdf)
- **Multimodal Mind2Web** (measurements) — *measured_by*
  > Second, Multimodal-Mind2Web (Deng et al., 2024; Zheng et al., 2024) extends the Mind2Web benchmark to evaluate generalization across three increasingly challenging settings: cross-task, cross-website, and cross-domain. (Section 3.1)
  - [AgentTrek: Agent Trajectory Synthesis via Guiding Replay with Web Tutorials](https://proceedings.iclr.cc/paper_files/paper/2025/file/c681fb2bf1d785fbc766f3ea14758aab-Paper-Conference.pdf)
- **DynaMath** (measurements) — *measured_by*
  > DYNAMATH allows us to evaluate the generalization ability of VLMs, by assessing their performance under varying input conditions of a seed question. (Abstract)
  - [DynaMath: A Dynamic Visual Benchmark for Evaluating Mathematical Reasoning Robustness of Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/78b248ea6f627431bba5029d92be8a3d-Paper-Conference.pdf)
- **MathVerse** (measurements) — *measured_by*
  > To verify the generalization ability of G-LLaVA, we also conduct evaluation on the newly introduced MathVerse benchmark (Zhang et al., 2024b). (Section 5.1)
  - [G-LLaVA: Solving Geometric Problem with Multi-Modal Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/09afabe33dc7db66530dea6483b22e5d-Paper-Conference.pdf)
- **WebVoyager** (measurements) — *measured_by*
  > To further assess AGENTOCCAM’s generalizabilty, we extend experiments to the real-world web environments, evluated with the tasks and golden answers proposed in WebVoyager (He et al., 2024). (Section 2)
  - [AgentOccam: A Simple Yet Strong Baseline for LLM-Based Web Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/f2c6e459b95694a24ac69c469a4ee746-Paper-Conference.pdf)
- **LogiQA** (measurements) — *measured_by*
  > To assess generalization beyond the pretraining distribution, we evaluate models on a series of diverse reasoning tasks in a 5-shot setting, including LogiQA Liu et al. (2020), LogiQA 2 Liu et al. (2023), SciQ Welbl et al. (2017), and PiQA Bisk et al. (2020). (Section 6.1)
  - [Dynamic Loss-Based Sample Reweighting for Improved Large Language Model Pretraining](https://proceedings.iclr.cc/paper_files/paper/2025/file/ded26b348d55953a4863d41540b7d5c4-Paper-Conference.pdf)
- **LogiQA 2.0** (measurements) — *measured_by*
  > To assess generalization beyond the pretraining distribution, we evaluate models on a series of diverse reasoning tasks in a 5-shot setting, including LogiQA Liu et al. (2020), LogiQA 2 Liu et al. (2023), SciQ Welbl et al. (2017), and PiQA Bisk et al. (2020). (Section 6.1)
  - [Dynamic Loss-Based Sample Reweighting for Improved Large Language Model Pretraining](https://proceedings.iclr.cc/paper_files/paper/2025/file/ded26b348d55953a4863d41540b7d5c4-Paper-Conference.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > To test generalization (Section 4.4), we additionally evaluate on MATH (4-shot) (Hendrycks et al., 2021b), MBPP (3-shot) (Austin et al., 2021), NaturalQuestions (5-shot) (Kwiatkowski et al., 2019), TriviaQA (5-shot) (Joshi et al., 2017), Hellaswag (0-shot) (Zellers et al., 2019), PIQA (0-shot) (Bisk et al., 2020), and TruthfulQA (0-shot) (Lin et al., 2022).
  - [Self-MoE: Towards Compositional Large Language Models with Self-Specialized Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/558a100caa93422df215fadb9e9b1dd7-Paper-Conference.pdf)
- **MMLU-Pro** (measurements) — *measured_by*
  > For the OOD evaluation, we test each approach’s generalization ability on Deepmind Math (Saxton et al., 2019), MMLU-pro (Wang et al., 2024), strategyQA (Geva et al., 2021), and DROP (Dua et al., 2019). (Section 3.1)
  - [DOTS: Learning to Reason Dynamically in LLMs via Optimal Reasoning Trajectories Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e5d6f9ac33ba9349ba7b2be9f21bad9-Paper-Conference.pdf)
- **DROP** (measurements) — *measured_by*
  > For the OOD evaluation, we test each approach’s generalization ability on Deepmind Math (Saxton et al., 2019), MMLU-pro (Wang et al., 2024), strategyQA (Geva et al., 2021), and DROP (Dua et al., 2019). (Section 3.1)
  - [DOTS: Learning to Reason Dynamically in LLMs via Optimal Reasoning Trajectories Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e5d6f9ac33ba9349ba7b2be9f21bad9-Paper-Conference.pdf)
- **SNLI** (measurements) — *measured_by*
  > We then assessed the performance of the merged LoRA on these in-domain tasks as well as on two additional out-of-domain tasks, SNLI and WNLI, to evaluate its adaptability and generalization capabilities.
  - [Merging LoRAs like Playing LEGO: Pushing the Modularity of LoRA to Extremes Through Rank-Wise Clustering](https://proceedings.iclr.cc/paper_files/paper/2025/file/b54e0146a82945f01e69c2e3309ba925-Paper-Conference.pdf)
- **WNLI** (measurements) — *measured_by*
  > We then assessed the performance of the merged LoRA on these in-domain tasks as well as on two additional out-of-domain tasks, SNLI and WNLI, to evaluate its adaptability and generalization capabilities.
  - [Merging LoRAs like Playing LEGO: Pushing the Modularity of LoRA to Extremes Through Rank-Wise Clustering](https://proceedings.iclr.cc/paper_files/paper/2025/file/b54e0146a82945f01e69c2e3309ba925-Paper-Conference.pdf)
- **Formal theorem proving** (behaviors tasks) — *causes*
  > “This emphasizes LeanAgent’s continuous generalizability and improvement, explaining its superior theorem-proving performance.”
  - [LeanAgent: Lifelong Learning for Formal Theorem Proving](https://proceedings.iclr.cc/paper_files/paper/2025/file/b67c77f8db8b991d73d6f2e16f491840-Paper-Conference.pdf)
- **Out-of-distribution evaluation** (measurements) — *measured_by*
  > While the ID performance of finetuned models can exhibit the positive effects of specialized finetuning, OOD performance provides more insights as it demonstrates the generalizability of the finetuned models. (Section 5.1)
  - [Large Language Models Meet Symbolic Provers for Logical Reasoning Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/862819c227b16f9af64dd6ad6cfdf275-Paper-Conference.pdf)
- **LLaVA-Bench-in-the-Wild** (measurements) — *measured_by*
  > LLaVA-Bench, a generalized dataset, ... is used to further evaluate the model’s generalization and robustness. (Section 4.1)
  - [DAMO: Decoding by Accumulating Activations Momentum for Mitigating Hallucinations in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8f0f23417ce1d00212a7c85c2560c392-Paper-Conference.pdf)
- **CoLA** (measurements) — *measured_by*
  > In Table 3, we observe that ELICIT significantly improves model performance on unseen tasks (GLUE-COLA, BBQ Religion, Deepmind (Saxton et al., 2019), MMLU-Psychology, and BBH-Logical-Deduction-Five-objects) not present in its capability library. (Section 4.4).
  - [ELICIT: LLM Augmentation Via External In-context Capability](https://proceedings.iclr.cc/paper_files/paper/2025/file/3ffd6024f02b92a52abe8e79a78e9064-Paper-Conference.pdf)
- **Caltech101** (measurements) — *measured_by*
  > We select four visual classification datasets to investigate the task of balancing personalization, generalization and privacy: Caltech101 (Fei-Fei et al., 2004) (Section 4.1).
  - [Privacy-Preserving Personalized Federated Prompt Learning for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4431224d3762aa655f0aee4eaf04ff16-Paper-Conference.pdf)
- **ContextHub** (measurements) — *measured_by*
  > TypedThinker generalizes well to the unseen domain. We use a new propositional logic benchmark Contexthub (Hua et al., 2024) for evaluation. (Section 4.5)
  - [TypedThinker: Diversify Large Language Model Reasoning with Typed Thinking](https://proceedings.iclr.cc/paper_files/paper/2025/file/494ad6d9b36d9a1528dbf3baeb4e8a72-Paper-Conference.pdf)
- **API-Bank** (measurements) — *measured_by*
  > To evaluate the generality of MTU-LLaMA, we measure its performance on the OOD test split of MTU-Bench and two other OOD tool-use benchmarks, i.e., API-Bank (Li et al., 2023) and ToolTalk (Farn & Shin, 2023). (Section 3.2)
  - [MTU-Bench: A Multi-granularity Tool-Use Benchmark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4d13b2d99519c5415661dad44ab7edcd-Paper-Conference.pdf)
- **HarmBench** (measurements) — *measured_by*
  > we incorporate a subset of Harmbench dataset from JBB-Behaviors (Chao et al., 2024) to evaluate the generalization capability of the trained prompter. (Section 4)
  - [ProAdvPrompter: A Two-Stage Journey to Effective Adversarial Prompting for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/1861027cac475192f2c2cd0ec568fc66-Paper-Conference.pdf)
- **Instruction understanding** (constructs) — *correlates*
  > This is due to the limited capacity of smaller LLMs to understand complex instructions, showing lower generalizability.
  - [ROUTE: Robust Multitask Tuning and Collaboration for Text-to-SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/212b143b5a5d6b88feb0fb1441b9756e-Paper-Conference.pdf)
- **PartNet-Mobility** (measurements) — *measured_by*
  > "we validate the performance of Real2Code on the well-established PartNet-Mobility dataset (Mo et al., 2019), using an extensive test set of unseen objects"
  - [Real2Code: Reconstruct Articulated Objects via Code Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/028fcbcf85435d39a40c4d61b42c99a4-Paper-Conference.pdf)
- **ATIS** (measurements) — *measured_by*
  > ATIS has fine-grained intents, and some classes have a low training and test set size (refer to table 4). This imbalance enables us to evaluate the generalizability and reasoning of the deep learning models when dealing with data scarcity.
  - [Main Predicate and Their Arguments as Explanation Signals For Intent Classification](https://aclanthology.org/2025.naacl-long.539.pdf)
- **AndroidControl** (measurements) — *measured_by*
  > Out of the 833 apps covered by AndroidControl, only 20 have been directly encountered during data synthesis, making this evaluation a test of OS-Genesis ’s out-of-distribution (OOD) performance. (Section 4.3)
  - [OS-Genesis: Automating GUI Agent Trajectory Construction via Reverse Task Synthesis](https://aclanthology.org/2025.acl-long.277.pdf)
- **LEMON** (measurements) — *measured_by*
  > the Lemon dataset serves as a cross-domain dataset for evaluating the generalization capabilities. (Section 5.3)
  - [A Training-free LLM-based Approach to General Chinese Character Error Correction](https://aclanthology.org/2025.acl-long.678.pdf)
- **AIME 2024** (measurements) — *measured_by*
  > Among these, AIME-2024, HumanEval, HumanEval+, GPQA, and SciBench are from a totally different distributions compared to training data, serving to verify the generalization capability of MAS-GPT. (Section 4.1)
  - [MAS-GPT: Training LLMs to Build LLM-based Multi-Agent Systems](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ye25g/ye25g.pdf)
- **MMLU-Pro Math** (measurements) — *measured_by*
  > To assess generalizability of our models to out-of-distribution problems, we evaluate on two additional benchmarks: MMLU-Pro Math (Wang et al., 2024b) and Olympiad Bench (He et al., 2024). (Section 4.1).
  - [Reinforce LLM Reasoning through Multi-Agent Reflection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yuan25l/yuan25l.pdf)
- **Synthetic dataset evaluation** (measurements) — *measured_by*
  > This illustrates that overly strong backdoor signals can harm generalization on clean inputs. (Section 6)
  - [Backdoor Attacks in Token Selection of Attention Mechanism](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25c/wang25c.pdf)
- **CMMLU** (measurements) — *measured_by*
  > To rigorously assess the generalization capabilities of merged checkpoints to unseen domains, we evaluated the out-of-domain (OOD) performance of various merging methods. Although merging weights were determined using the C-Eval dataset (in-domain, IND), we tested the merged models on three diverse OOD datasets: CMMLU, MMLU, and GSM8K. (Section 4.2)
  - [Maximizing Intermediate Checkpoint Value in LLM Pretraining with Bayesian Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25bv/liu25bv.pdf)
- **ConceptARC** (measurements) — *measured_by*
  > To make sure we do not overfit on the original ARC data, we further evaluate our method on ConceptARC (Moskvichev et al., 2023) - an ARC-like dataset containing tasks sorted into specific conceptual categories. (Section 5.5)
  - [Product of Experts with LLMs: Boosting Performance on ARC Is a Matter of Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/franzen25a/franzen25a.pdf)
- **FreshQA** (measurements) — *measured_by*
  > In Table 2, we assess its modularity and generalization by introducing two recent and challenging OOD datasets: FreshQA (FQA) (Vu et al., 2024) and MultiHop-RAG (M-RAG) (Tang & Yang, 2024). (Section 6.3).
  - [C-3PO: Compact Plug-and-Play Proxy Optimization to Achieve Human-like Retrieval-Augmented Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25an/chen25an.pdf)
- **MultiHop-RAG** (measurements) — *measured_by*
  > In Table 2, we assess its modularity and generalization by introducing two recent and challenging OOD datasets: FreshQA (FQA) (Vu et al., 2024) and MultiHop-RAG (M-RAG) (Tang & Yang, 2024). (Section 6.3).
  - [C-3PO: Compact Plug-and-Play Proxy Optimization to Achieve Human-like Retrieval-Augmented Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25an/chen25an.pdf)
- **AlpacaEval 2.0** (measurements) — *measured_by*
  > To understand the effect of α on model generalization, we measure the AE2 performance of various models with changing α. (Section 4.2. Results)
  - [AlphaPO: Reward Shape Matters for LLM Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gupta25d/gupta25d.pdf)
- **OK-VQA** (measurements) — *measured_by*
  > we assess the learned generalization ability on OKVQA (Marino et al., 2019), TextVQA (Singh et al., 2019), GQA (Hudson & Manning, 2019), and OCRVQA (Mishra et al., 2019) (Section 4.1).
  - [Learn from Downstream and Be Yourself in Multimodal Large Language Models Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25q/huang25q.pdf)
- **TextVQA** (measurements) — *measured_by*
  > we assess the learned generalization ability on OKVQA (Marino et al., 2019), TextVQA (Singh et al., 2019), GQA (Hudson & Manning, 2019), and OCRVQA (Mishra et al., 2019) (Section 4.1).
  - [Learn from Downstream and Be Yourself in Multimodal Large Language Models Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25q/huang25q.pdf)
- **OCR-VQA** (measurements) — *measured_by*
  > we assess the learned generalization ability on OKVQA (Marino et al., 2019), TextVQA (Singh et al., 2019), GQA (Hudson & Manning, 2019), and OCRVQA (Mishra et al., 2019) (Section 4.1).
  - [Learn from Downstream and Be Yourself in Multimodal Large Language Models Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25q/huang25q.pdf)
- **PKU-SafeRLHF** (measurements) — *measured_by*
  > In this section, we will evaluate our model, previously trained on the C4 dataset, on various other datasets, including Anthropic HH-RLHF (HH), Synthetic instruction2(Instruct), PKU SafeRLHF (PKU), Reward3, UltraFeedback(UltraF), FineWeb (Penedo et al., 2024) and Pile uncopyrighted(Pile)4 datasets. (Section 4.4)
  - [Robust Multi-bit Text Watermark with LLM-based Paraphrasers](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25k/xu25k.pdf)
- **UltraFeedback** (measurements) — *measured_by*
  > In this section, we will evaluate our model, previously trained on the C4 dataset, on various other datasets, including Anthropic HH-RLHF (HH), Synthetic instruction2(Instruct), PKU SafeRLHF (PKU), Reward3, UltraFeedback(UltraF), FineWeb (Penedo et al., 2024) and Pile uncopyrighted(Pile)4 datasets. (Section 4.4)
  - [Robust Multi-bit Text Watermark with LLM-based Paraphrasers](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25k/xu25k.pdf)
- **FineWeb** (measurements) — *measured_by*
  > In this section, we will evaluate our model, previously trained on the C4 dataset, on various other datasets, including Anthropic HH-RLHF (HH), Synthetic instruction2(Instruct), PKU SafeRLHF (PKU), Reward3, UltraFeedback(UltraF), FineWeb (Penedo et al., 2024) and Pile uncopyrighted(Pile)4 datasets. (Section 4.4)
  - [Robust Multi-bit Text Watermark with LLM-based Paraphrasers](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25k/xu25k.pdf)
- **MineDojo** (measurements) — *measured_by*
  > We validate our method in both MineDojo (Fan et al., 2022) and Mineflayer (PrismarineJS., 2013) environments. The experimental results suggest that our method completes diverse challenging tasks with a single model, indicating its promising generalization. (Section 1)
  - [LARM: Large Auto-Regressive Model for Long-Horizon Embodied Intelligence](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25dj/li25dj.pdf)
- **TopiOCQA** (measurements) — *measured_by*
  > For the evaluation of generalization ability, we trained models on the TopiOCQA training set and evaluated them on the QReCC test set, and vice versa.
  - [ConvSearch-R1: Enhancing Query Reformulation for Conversational Search with Reasoning via Reinforcement Learning](https://aclanthology.org/2025.emnlp-main.1349.pdf)
- **Bamboogle** (measurements) — *measured_by*
  > For out-of-domain evaluation, we introduce three datasets that differ significantly in question style and information distribution: MuSiQue (Trivedi et al., 2022), Bamboogle (Press et al., 2022)... These datasets test the model’s generalization ability beyond the training domain. (Section 4.2.1)
  - [DeepResearcher: Scaling Deep Research via Reinforcement Learning in Real-world Environments](https://aclanthology.org/2025.emnlp-main.22.pdf)
- **GPQA-Diamond** (measurements) — *measured_by*
  > we use GSM8K and MATH500, along with an additional dataset to assess how well our transferring-then-finetuning approach generalizes to the unseen task GPQADiamond (Rein et al., 2024). (Section 5.1).
  - [Efficient Model Development through Fine-tuning Transfer](https://aclanthology.org/2025.emnlp-main.131.pdf)
- **MME-RealWorld** (measurements) — *measured_by*
  > After creating an Error-book based on MME-RealWorld-Lite (Reasoning) subset, we applied it directly to the remaining MME-RealWorld Reasoning subset, excluding the Lite portion to rigorously test generalization (Section 4.1).
  - [Retrieval Enhanced Feedback via In-context Neural Error-book](https://aclanthology.org/2025.emnlp-main.711.pdf)
- **MTEB** (measurements) — *measured_by*
  > To validate the effectiveness and generalization ability of our proposed method, we followed the data selection strategy of e5-mistral-7b-instruct (Wang et al., 2023) and used only a small portion of the MTEB training dataset for zero-shot training. (Section 4.3)
  - [Conan-Embedding-v2: Training an LLM from Scratch for Text Embeddings](https://aclanthology.org/2025.emnlp-main.758.pdf)
- **DynamicNER** (measurements) — *measured_by*
  > To address these limitations, we propose DynamicNER, the first NER dataset designed for LLM-based methods with dynamic categorization, introducing various entity types and entity type lists for the same entity in different context, leveraging the generalization of LLM-based NER better.
  - [DynamicNER: A Dynamic, Multilingual, and Fine-Grained Dataset for LLM-based Named Entity Recognition](https://aclanthology.org/2025.emnlp-main.835.pdf)
- **NLGraph** (measurements) — *measured_by*
  > The simpler tasks in NLGraph evaluate the generalization and robustness of MA-GTS. (Section 5.1)
  - [MA-GTS: A Multi-Agent Framework for Solving Complex Graph Problems in Real-World Applications](https://aclanthology.org/2025.emnlp-main.973.pdf)
- **MGSM** (measurements) — *measured_by*
  > we include (6) MGSM (Shi et al., 2022), a structured math reasoning task where predefined logic may suffice, to evaluate generalization to template-compatible domains. (Section 5.1)
  - [SwarmAgentic: Towards Fully Automated Agentic System Generation via Swarm Intelligence](https://aclanthology.org/2025.emnlp-main.93.pdf)
- **MMMU** (measurements) — *measured_by*
  > MODRWKV attains the highest reported score among peers on the MMMU benchmark, highlighting its generalization ability in challenging multi-modal understanding scenarios (Section 4.2).
  - [ModRWKV: Transformer Multimodality in Linear Time](https://aclanthology.org/2025.emnlp-main.204.pdf)
- **2WikiMultiHopQA** (measurements) — *measured_by*
  > To evaluate the transferability of our approach, we conducted out-of-domain experiments by training the model on one dataset and testing it on another. We use the 2Wiki (2W), HotpotQA (HQ), and MuSiQue (MQ) datasets. (Section 6.6)
  - [StepER: Step-wise Knowledge Distillation for Enhancing Reasoning Ability in Multi-Step Retrieval-Augmented Language Models](https://aclanthology.org/2025.emnlp-main.1500.pdf)
- **MovieLens** (measurements) — *measured_by*
  > “To validate the generalization ability of iLoRA, we conducted extensive experiments on three datasets derived from real-world recommendation scenarios: LastFM, MovieLens, and Steam”
  - [Customizing Language Models with Instance-wise LoRA for Sequential Recommendation](https://proceedings.neurips.cc/paper_files/paper/2024/file/cd476d01692c508ddf1cb43c6279a704-Paper-Conference.pdf)

### → Generalization
- **In-context learning** (constructs) — *causes*
  > In-context learning is a key paradigm in large language models (LLMs) that enables them to generalize to new tasks and domains by simply prompting these models with a few exemplars without explicit parameter updates. (Abstract)
  - [Probing the Decision Boundaries of In-context Learning in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb5dd4476448c44e55a759a985b3bbec-Paper-Conference.pdf)
- **Memorization** (constructs) — *causes*
  > This raises concerns about whether LLMs are merely memorizing and overfitting these benchmarks instead of learning how to solve the tasks [112], which may lead to poor generalization[67, 13, 9]. (Section 1)
  - [DARG: Dynamic Evaluation of Large Language Models via Adaptive Reasoning Graph](https://proceedings.neurips.cc/paper_files/paper/2024/file/f5198bc255e1d5f959edd6d1d1a86fab-Paper-Conference.pdf)
- **Overfitting** (constructs) — *causes*
  > helping to mitigate overfitting, resulting in models that are more robust and generalise better to new data
  - [Instruction Tuning With Loss Over Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/7ffb43adf37b3eeaba559098bc084cc6-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > Few-shot reasoning allows LLMs to generalize their understanding to new tasks by leveraging a small set of similar examples. (Sec. 3.3)
  - [Verified Code Transpilation with LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/48bb60a0c0aebb4142bf314bd1a5c6a0-Paper-Conference.pdf)
- **Catastrophic forgetting** (behaviors tasks) — *causes*
  > This in turn damages the ability of the model to generalize to downstream prompts in the target language as measured by perplexity (Section 1)
  - [Emergent Abilities of Large Language Models under Continued Pre-training for Language Adaptation](https://aclanthology.org/2025.acl-long.1547.pdf)
- **Knowledge transfer** (constructs) — *causes*
  > This transfer is crucial as it allows the model to leverage previously acquired knowledge to better generalize to new tasks or domains. (Section 1)
  - [Learn more, but bother less: parameter efficient continual learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/b0bc711f48724237b38823c4d9cee10b-Paper-Conference.pdf)
- **Inductive reasoning** (constructs) — *causes*
  > The inductive reasoning process enhances generalizability by formulating general problem-solving strategies (Introduction).
  - [StrategyLLM: Large Language Models as Strategy Generators, Executors, Optimizers, and Evaluators for Problem Solving](https://proceedings.neurips.cc/paper_files/paper/2024/file/af7cc9e2366b8f8837a6ef339810277a-Paper-Conference.pdf)
- **Code editing** (behaviors tasks) — *causes*
  > Reasoning over the differences between the two states admits a more local task (as evidenced by our data efficient learning), and this property can aid in generalization. (Appendix B.1)
  - [Learning to Edit Visual Programs with Self-Supervision](https://proceedings.neurips.cc/paper_files/paper/2024/file/c585301e1c4b7c50039de5413ef585b5-Paper-Conference.pdf)
- **Prompt engineering** (behaviors tasks) — *causes*
  > VGD enhances the interpretability, generalization, and flexibility of prompt generation without the need for additional training. (Section 1)
  - [Visually Guided Decoding: Gradient-Free Hard Prompt Inversion with Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd61329e2c14b93a89d617c914140f64-Paper-Conference.pdf)
- **Model collapse** (constructs) — *causes*
  > Consequently, the model’s ability to generalize to real-world data is compromised, as it increasingly relies on the distorted distribution provided by prior AI generations rather than learning accurate representations of the real world. (Section 1)
  - [Strong Model Collapse](https://proceedings.iclr.cc/paper_files/paper/2025/file/284afdc2309f9667d2d4fb9290235b0c-Paper-Conference.pdf)
- **Self-improvement** (constructs) — *causes*
  > efﬁcient exploration to discover better strategies and solutions autonomously, i.e., self-improving, which can allow agents to generalize across the various tasks in the digital world.
  - [Cradle: Empowering Foundation Agents towards General Computer Control](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tan25h/tan25h.pdf)
- **Inductive bias** (constructs) — *causes*
  > This suggests a desirable inductive bias of RAPTR that improves its generalization abilities beyond perplexity. (Section 4)
  - [Efficient stagewise pretraining via progressive subnetworks](https://proceedings.iclr.cc/paper_files/paper/2025/file/b21ae5a5df83632324b61b595ab653b9-Paper-Conference.pdf)
- **Expert specialization** (constructs) — *causes*
  > "improving expert specialization to enhance performance and generalization remains a challenge for MoE"
  - [Mixture-of-Clustered-Experts: Advancing Expert Specialization and Generalization in Instruction Tuning](https://aclanthology.org/2025.emnlp-main.718.pdf)
- **Spatial reasoning** (constructs) — *causes*
  > state-of-the-art VLMs have exhibited strong spatial reasoning and temporal understanding capabilities across various vision tasks (Nag et al., 2022; Chen et al., 2024; Hong et al., 2023; Gao et al., 2024), allowing them to generalize to novel scenarios. (Section 1)
  - [Vision Language Models are In-Context Value Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/54854cf15a24fff9f5134a8641136fe4-Paper-Conference.pdf)
- **Shortcut learning** (constructs) — *causes*
  > Statistical evidence that shortcut learning undermines generalization in argument mining. (Section 1)
  - [Limited Generalizability in Argument Mining: State-Of-The-Art Models Learn Datasets, Not Arguments](https://aclanthology.org/2025.acl-long.1164.pdf)
- **Consistency** (constructs) — *causes*
  > “Besides small finetuning loss on sufficiently many data, a large diversity parameter ν and a small consistency parameter κ will result in a small target error bound.”
  - [Towards Few-Shot Adaptation of Foundation Models via Multitask Finetuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/2d9a0718883f4a2eecee3c69c7213b05-Paper-Conference.pdf)
- **Commonsense reasoning** (constructs) — *causes*
  > Theoretically, owing to the commonsense reasoning faculties of MLLMs, our model can be generalized to discover any attributes and interrelations across various real-world objects and scenes.
  - [Graph-based Unsupervised Disentangled Representation Learning via Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/bac4d92b3f6decfe47eab9a5893dd1f6-Paper-Conference.pdf)
- **Knowledge retention** (constructs) — *causes*
  > aligning the fine-tuned model with the pre-trained one is crucial, as it ensures retention of knowledge obtained from large-scale data, preserving generalization (Section 3.3).
  - [PACE: Marrying generalization in PArameter-efficient fine-tuning with Consistency rEgularization](https://proceedings.neurips.cc/paper_files/paper/2024/file/70a06501001e1820fd1eb9ee821302d2-Paper-Conference.pdf)
- **Commonsense knowledge** (constructs) — *causes*
  > Overall, we show that leveraging detailed keypoint descriptions through comprehensive text, combined with commonsense knowledge from LLMs, effectively enhances generalizable performance in keypoint localization. (Section 4.4)
  - [KptLLM: Unveiling the Power of Large Language Model for Keypoint Comprehension](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe692980c5d9732cf153ce27947653a7-Paper-Conference.pdf)
- **Disentanglement** (constructs) — *causes*
  > “DRL is a major goal of artificial intelligence (AI), acclaimed for its enhancement of model robustness, interpretability, and generalizability.”
  - [Graph-based Unsupervised Disentangled Representation Learning via Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/bac4d92b3f6decfe47eab9a5893dd1f6-Paper-Conference.pdf)
- **Expert routing** (behaviors tasks) — *causes*
  > This coarse-to-fine paradigm effectively leverages representations from experts based on multimodal context and model expertise, further enhancing the generalization ability.
  - [MoVA: Adapting Mixture of Vision Experts to Multimodal Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/bb0fea29f7aa6ede17e906ac6a225f34-Paper-Conference.pdf)
- **Meta-learning** (constructs) — *causes*
  > Using Metalic’s unique combination of in-context meta-learning followed by fine-tuning, we enable the generalization of extensive fine-tuning, while also precluding expensive computation. (Section 3.2)
  - [Metalic: Meta-Learning In-Context with Protein Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/798095a4827e2ce739b16cf23acc876c-Paper-Conference.pdf)
- **Scientific knowledge** (constructs) — *causes*
  > This alignment demonstrates the better generalizability of equations discovered by LLM-SR to unseen data, likely due to the integration of scientific prior knowledge in the equation discovery process.
  - [LLM-SR: Scientific Equation Discovery via Programming with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/28df8e730c054c5331855fd4d5403ba9-Paper-Conference.pdf)
- **Abstraction** (constructs) — *causes*
  > The ability to abstract, which is often seen as a human-specific trait, enables reasoning, generalization, and problem-solving in novel contexts
  - [Building, Reusing, and Generalizing Abstract Representations from Concrete Sequences](https://proceedings.iclr.cc/paper_files/paper/2025/file/e46984e056185b21ddb1e7973c365f14-Paper-Conference.pdf)
- **Recursive stability** (constructs) — *causes*
  > Moreover, we demonstrate that the generalization error converges under the following conditions: (1) the generative model satisfies recursive stability, and (2) the proportion of real data is maintained at a non-negligible constant level, thus preventing model collapse.
  - [A Theoretical Perspective: How to Prevent Model Collapse in Self-consuming Training Loops](https://proceedings.iclr.cc/paper_files/paper/2025/file/e92e6d20f7b5db5c2a1b23964d170fe2-Paper-Conference.pdf)
- **World knowledge** (constructs) — *causes*
  > LLMs are pre-trained on massive datasets, allowing them to accumulate broad world knowledge that enhances their ability to generalize across a wide range of downstream tasks. (Section 2.2)
  - [FakeShield: Explainable Image Forgery Detection and Localization via Multi-modal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4d4e0ab9d8ff180bf5b95c258842d16e-Paper-Conference.pdf)
- **Temporal understanding** (constructs) — *causes*
  > state-of-the-art VLMs have exhibited strong spatial reasoning and temporal understanding capabilities across various vision tasks (Nag et al., 2022; Chen et al., 2024; Hong et al., 2023; Gao et al., 2024), allowing them to generalize to novel scenarios. (Section 1)
  - [Vision Language Models are In-Context Value Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/54854cf15a24fff9f5134a8641136fe4-Paper-Conference.pdf)
- **Privacy preservation** (constructs) — *causes*
  > stringent privacy measures, such as differential privacy, can hinder both personalization and generalization (Abstract).
  - [Privacy-Preserving Personalized Federated Prompt Learning for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4431224d3762aa655f0aee4eaf04ff16-Paper-Conference.pdf)
- **Abstract meta-knowledge** (constructs) — *causes*
  > "fails to capture the high-level abstract meta-knowledge necessary for generalization across similar problems"
  - [Learning to Plan Before Answering: Self-Teaching LLMs to Learn Abstract Plans for Problem Solving](https://proceedings.iclr.cc/paper_files/paper/2025/file/821a6e5681b072351fd3c21fac44739a-Paper-Conference.pdf)
- **Permutation invariance** (constructs) — *causes*
  > This improvement is primarily attributed to its ability to exploit permutation invariance of code, thereby enhancing the model’s generalization capabilities. (Section 5.2)
  - [Beyond Sequences: Two-dimensional Representation and Dependency Encoding for Code Generation](https://aclanthology.org/2025.acl-long.308.pdf)
- **Compositional generalization** (constructs) — *causes*
  > identified CG as one of the main drivers of the generalization observed in multi-task training. (Abstract)
  - [Exploring Compositional Generalization of Multimodal LLMs for Medical Imaging](https://aclanthology.org/2025.acl-long.639.pdf)
- **Long chain-of-thought generation** (behaviors tasks) — *causes*
  > SFT initialization matters: high-quality, emergent long CoT pattern leads to significantly better generalization and RL gains. (Takeaway 3.3)
  - [Demystifying Long Chain-of-Thought Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ae/yang25ae.pdf)
- **Teacher hacking** (constructs) — *causes*
  > The ultimate outcome of both phenomena is similar: the model fails to generalize to the ground truth, but the reasons differ.
  - [On Teacher Hacking in Language Model Distillation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tiapkin25a/tiapkin25a.pdf)
- **Reward overoptimization** (constructs) — *causes*
  > high likelihood of preferred responses and big gaps between the likelihood of preferred and dispreferred responses can lead to reward over-optimization - resulting in a better margin but worse generalization. (Section 3.1. Likelihood displacement)
  - [AlphaPO: Reward Shape Matters for LLM Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gupta25d/gupta25d.pdf)
- **Neural collapse** (constructs) — *causes*
  > A higher degree of neural collapse (lower ∆TCD) leads to stronger generalizability in text classification tasks. (Section 4.1)
  - [Advancing Personalized Learning with Neural Collapse for Long-Tail Challenge](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25f/hu25f.pdf)
- **Pattern matching** (constructs) — *causes*
  > This illustrates how passive pretraining fails to incentivize the learning of generalizable reasoning skills and, instead, reinforces memorization and pattern matching that have limited generalization beyond the training scenarios. (Section 1)
  - [Position: General Intelligence Requires Reward-based Pretraining](https://raw.githubusercontent.com/mlresearch/v267/main/assets/han25n/han25n.pdf)
- **Subspace alignment** (constructs) — *causes*
  > The alignment can be directly achieved at the certain initialization strategy, termed as spectral initialization... which leverages the information of one-step full gradient, leading to the theoretical grounded algorithm, LoRA-One. This algorithm incorporated into several architectures achieves promising performance on natural language processing (NLP), reasoning tasks when compared to LoRA and its variants. (Section 1.1)
  - [LoRA-One: One-Step Full Gradient Could Suffice for Fine-Tuning Large Language Models, Provably and Efficiently](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25ax/zhang25ax.pdf)
- **Flatness** (constructs) — *correlates*
  > We attend to recent studies that have demonstrated that the generalization performance of a model is closely linked to the flatness of the solution landscape (Keskar et al., 2017; Jiang et al., 2020a). (1. Introduction)
  - [SAFE: Finding Sparse and Flat Minima to Improve Pruning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lee25s/lee25s.pdf)

### Associated with
- **Data contamination** (constructs)
  > A growing concern for accurate evaluation of LLMs’ generalization capabilities is the prospect of dataset contamination, which is when evaluation benchmark data has already appeared in LLM training sets. (Section 4.3)
  - [Information-Guided Identification of Training Data Imprint in (Proprietary) Large Language Models](https://aclanthology.org/2025.naacl-long.99.pdf)
- **Specialization** (constructs)
  > These pre-trained TSFMs focus on generalization with a wide domain of time series, where their specialized abilities in medical time series may not be satisfactory. Therefore, we propose a lightweight TSFM personalization scheme to tackle the specialization ability. (Section 2.1).
  - [Efficient Personalized Adaptation for Physiological Signal Foundation Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25ah/wu25ah.pdf)
- **Few-shot task performance** (behaviors tasks)
  > Humans exhibit remarkable few-shot learning capabilities, rapidly generalizing from a single task demonstration to related conditions by integrating the observed behavior with their internal world model.
  - [VLM Agents Generate Their Own Memories: Distilling Experience into Embodied Programs of Thought](https://proceedings.neurips.cc/paper_files/paper/2024/file/8ac50fd0a4eeeb1f077b17bb7c5353c3-Paper-Conference.pdf)
- **Personalization** (constructs)
  > FedPGP (Cui et al., 2024): Incorporate a low-rank adaptation term with an additional contrastive loss to balance generalization and personalization.
  - [Federated Disentangled Tuning with Textual Prior Decoupling and Visual Dynamic Adaptation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25k/yang25k.pdf)
- **Adaptability** (constructs)
  > Overall, our system integrated with MAS-GPT offers the following key advantages: simplicity, cost-efficiency, and adaptability (generality). (Section 3.3)
  - [MAS-GPT: Training LLMs to Build LLM-based Multi-Agent Systems](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ye25g/ye25g.pdf)
- **Reversal curse** (constructs)
  > If a model is trained on a sentence of the form “A is B”, it will not automatically generalize to the reverse direction “B is A”. This is the Reversal Curse.
  - [The Reversal Curse: LLMs trained on “A is B” fail to learn “B is A”](https://proceedings.iclr.cc/paper_files/paper/2024/file/5178b2f2d7c44aa390c0777dc77b3f0c-Paper-Conference.pdf)
- **Reliability** (constructs)
  > we find that it seems to be an impossible triangle—reliability, generalization, and locality can not be realized at the same time in the continual editing settings. (Section 1)
  - [WISE: Rethinking the Knowledge Memory for Lifelong Model Editing of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/60960ad78868fce5c165295fbd895060-Paper-Conference.pdf)
- **Text generation quality** (constructs)
  > the generation quality of GPT4 decreases as the logical constraints become more complex, while the generation quality of Ctrl-G stays relatively consistent across all settings, demonstrating strong generalization performance. (Sec 5.2)
  - [Adaptable Logical Control for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d15c16cf5619a2b1606da5fc88e3f1a9-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks)
  > This lack of proper evaluation can then materialize in persistent issues of deployed systems related to generalization, e.g., hallucination [30], out-of-distribution generalization [39], fairness [6], and generalization to the long-tail [23, 24]. (Section 1).
  - [No Free Delivery Service: Epistemic limits of passive data collection in complex social systems](https://proceedings.neurips.cc/paper_files/paper/2024/file/b97fc02c9e536d68300d82be05c23aa2-Paper-Conference.pdf)
- **Fairness** (constructs)
  > This lack of proper evaluation can then materialize in persistent issues of deployed systems related to generalization, e.g., hallucination [30], out-of-distribution generalization [39], fairness [6], and generalization to the long-tail [23, 24]. (Section 1).
  - [No Free Delivery Service: Epistemic limits of passive data collection in complex social systems](https://proceedings.neurips.cc/paper_files/paper/2024/file/b97fc02c9e536d68300d82be05c23aa2-Paper-Conference.pdf)
- **Image restoration** (behaviors tasks)
  > Image Restoration (IR)... Recently, researchers have increasingly focused on enhancing the generalization ability to diverse degradations in real-world applications
  - [DreamClear: High-Capacity Real-World Image Restoration with Privacy-Safe Dataset Curation](https://proceedings.neurips.cc/paper_files/paper/2024/file/6452474601429509f3035dc81c233226-Paper-Conference.pdf)
- **Factuality** (constructs)
  > The experimental results in previous sections indicate that after factuality alignment with questions from a group of topics, the LLM will become more factually correct when answering questions from another group of topics (Section 4.2).
  - [Mask-DPO: Generalizable Fine-grained Factuality Alignment of LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/6bf82fdcbd92b6a7793b3894422d2437-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks)
  > This trend suggests that lower learning rates enhance the model’s ability to generalize to unseen tasks requiring knowledge, complex reasoning, and instruction following.
  - [Unveiling the Secret Recipe: A Guide For Supervised Fine-Tuning Small LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/b6e2c96bc4702f761d7d108d6e31930f-Paper-Conference.pdf)
- **Synthetic data generation** (behaviors tasks)
  > This analysis serves as a theoretical foundation for synthetic data generation and further highlights its connection with the generalization capability of post-trained models... (Section 1)
  - [Towards a Theoretical Understanding of Synthetic Data in LLM Post-Training: A Reverse-Bottleneck Perspective](https://proceedings.iclr.cc/paper_files/paper/2025/file/1e0bfe8bbaa0e70809f0a8ccd9c2ff3e-Paper-Conference.pdf)
- **Specificity** (constructs)
  > Generalization and specificity are tied together by an inherent trade-off: abstaining from everything achieves perfect generalization but no specificity, and not abstaining at all results in perfect specificity rates but no generalization. (Section 5.1)
  - [Knowledge Graph Guided Evaluation of Abstention Techniques](https://aclanthology.org/2025.naacl-long.353.pdf)
- **Abstention** (behaviors tasks)
  > generalizability: whether abstention extends to concept’s descendants (Section 1)
  - [Knowledge Graph Guided Evaluation of Abstention Techniques](https://aclanthology.org/2025.naacl-long.353.pdf)
- **Scalability** (constructs)
  > This paper aims to evaluate and rethink the generalization capability of the SKP paradigm from four perspectives including Granularity, Transferability, Scalability, and Universality. (Abstract)
  - [Have We Designed Generalizable Structural Knowledge Promptings? Systematic Evaluation and Rethinking](https://aclanthology.org/2025.acl-long.110.pdf)
- **Universality** (constructs)
  > This paper aims to evaluate and rethink the generalization capability of the SKP paradigm from four perspectives including Granularity, Transferability, Scalability, and Universality. (Abstract)
  - [Have We Designed Generalizable Structural Knowledge Promptings? Systematic Evaluation and Rethinking](https://aclanthology.org/2025.acl-long.110.pdf)
- **Text-to-SQL** (behaviors tasks)
  > In the zero-shot setting, the key challenge is to construct a mapping function f without task-specific labeled data. This requires the model to generalize across unseen SQL queries and databases, relying solely on pre-trained knowledge and the provided database schema. (Section 3.1)
  - [Alpha-SQL: Zero-Shot Text-to-SQL using Monte Carlo Tree Search](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25dt/li25dt.pdf)
- **Image editing** (behaviors tasks)
  > To further demonstrate the generalization and applicability of ELM, we evaluate its ability to generate samples from novel classes and perform image editing tasks, with the results in Appendix A.2. (Section 4.4)
  - [Elucidating the design space of language models for image generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25w/liu25w.pdf)
- **Text generation** (behaviors tasks)
  > Two core challenges distinguish open-ended generation from closed-end tasks: (1) Limited generalization across prompt variations... (Introduction)
  - [SAE-SSV: Supervised Steering in Sparse Representation Spaces for Reliable Control of Language Models](https://aclanthology.org/2025.emnlp-main.112.pdf)
- **Image classification** (behaviors tasks)
  > Moreover, we extend our experiments to image classification tasks, aiming to evaluate the model's generalizability across diverse domains.
  - [Orchid: Flexible and Data-Dependent Convolution for Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/8ccc5ec30a8d46793d790e2216efd40d-Paper-Conference.pdf)
- **Harmful content detection** (behaviors tasks)
  > The increasing proliferation of harmful content and its evolving nature require effective and generalizable detection methods. (Section 1)
  - [Fine-Grained Transfer Learning for Harmful Content Detection through Label-Specific Soft Prompt Tuning](https://aclanthology.org/2025.naacl-long.551.pdf)
- **Image captioning** (behaviors tasks)
  > Meanwhile, image captioning is conducted on the unseen BLIP-2 (OPT-2.7b) (Li et al., 2023), to demonstrate the generalization capacity. (Section 4.1)
  - [Privacy-Shielded Image Compression: Defending Against Exploitation from Vision-Language Pretrained Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25k/shen25k.pdf)
- **Grokking** (constructs)
  > “under certain conditions, overparameterized neural networks suddenly transition from pure memorization to near-perfect generalization”
  - [Grokking in the Wild: Data Augmentation for Real-World Multi-Hop Reasoning with Transformers](https://raw.githubusercontent.com/mlresearch/v267/main/assets/abramov25a/abramov25a.pdf)
