# GSM8K
**Type:** Measurement  
**Referenced in:** 813 papers  
**Also known as:** GSM8k, Grade School Math 8K, GSM-8k, GSM-8K, GSM, GSM benchmark  

## State of the Field

**What it is.** Across papers, the prevailing description is of GSM8K as a benchmark or dataset of text-only, open-ended grade-school math word problems used for mathematical or arithmetic reasoning, often emphasizing multi-step solutions or step-by-step reasoning. Many definitions say it contains about 8.5K problems, and some specify 7,473 training and 1,319 test examples or the 1.3k official test set, though a few papers instead describe over 8,000, about 8K, or 8.8K problems. Most papers place it at the grade-school level, but a few describe middle-school, elementary-level, or high school-level problems; smaller lines of work mention a multilingual version with English and 9 other high-resource languages, GSM8K-tsn, and text-completion or exact-match style evaluation.

**What it is claimed to measure.** Papers link GSM8K to 25 constructs and 13 behavioral indicators. The dominant use is to measure mathematical reasoning, and recurring work also uses it for reasoning and general ability; at the behavioral level it is used for mathematical problem solving and chain of thought. Beyond this core framing, the recorded links cover many additional constructs and indicators.

**Space of uses.** Papers link it to 7 measurement instruments, most often lm-evaluation-harness and the Open LLM Leaderboard, with smaller connections to FLASK and MR-GSM8K. In use, papers usually position GSM8K as a standard math or reasoning benchmark inside broader evaluation suites, sometimes alongside general-capability evaluations; one paper describes it as a small side experiment, and another repurposes it in MINT for multi-turn evaluation.

**Concerns raised.** Only a few papers state explicit limitations of the benchmark. One contrasts PutnamBench with informal benchmarks such as MATH and GSM8K on the ground that its target outputs have never been produced, which it says avoids direct contamination, and another says representative math word problem benchmarks including GSM8K are characterized by concise descriptions in a few sentences relative to longer problems.

## Sources

**[Are Human-generated Demonstrations Necessary for In-context Learning?](https://proceedings.iclr.cc/paper_files/paper/2024/file/19914b5bf19ab2b245d2e6ff7299e8f0-Paper-Conference.pdf)**
> A benchmark dataset of grade-school math word problems used to evaluate mathematical reasoning in multiple languages, with accuracy as the metric.

**[CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing](https://proceedings.iclr.cc/paper_files/paper/2024/file/fef126561bbf9d4467dbb8d27334b8fe-Paper-Conference.pdf) (as "GSM8k")**
> Grade school math dataset evaluating mathematical reasoning via chain-of-thought prompting, consisting of arithmetic word problems.

**[$\textit{Trans-LoRA}$: towards data-free Transferable Parameter Efficient Finetuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/708fdc7911f11585ee7161518e509ae6-Paper-Conference.pdf) (as "Grade School Math 8K")**
> A dataset consisting of a large number of grade school math problems used for evaluating mathematical reasoning.

**[Evaluating Large Vision-and-Language Models on Children's Mathematical Olympiads](https://proceedings.neurips.cc/paper_files/paper/2024/file/1cc12fb3d4033ad72d33a51f1d0ab5d0-Paper-Datasets_and_Benchmarks_Track.pdf) (as "GSM-8k")**
> A text-only grade-school math word problem benchmark referenced as a comparison point for mathematical reasoning evaluation.

**[Smaller, Weaker, Yet Better: Training LLM Reasoners via Compute-Optimal Sampling](https://proceedings.iclr.cc/paper_files/paper/2025/file/31421b112e5f7faf4fc577b74e45dab2-Paper-Conference.pdf) (as "GSM-8K")**
> A benchmark dataset (Cobbe et al., 2021) of grade-school math word problems used to evaluate quantitative reasoning.

**[Multiagent Finetuning: Self Improvement with Diverse Reasoning Chains](https://proceedings.iclr.cc/paper_files/paper/2025/file/1d50221b03ced7152d8750c9d1e66cba-Paper-Conference.pdf) (as "GSM")**
> The Grade School Math (GSM8K) dataset, which consists of math word problems that require multi-step reasoning to solve.

**[Adaptable Logical Control for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d15c16cf5619a2b1606da5fc88e3f1a9-Paper-Conference.pdf) (as "GSM benchmark")**
> A grade-school math benchmark used as a proof-of-concept setting for assisting reasoning with constrained generation.

## Relationships

### → GSM8K
- **Mathematical reasoning** (constructs) — *measured_by*
  > We evaluate DTV on three quantitative reasoning datasets: GSM8K (Cobbe et al., 2021), MATH (Hendrycks et al., 2021) and MultiArith (Roy & Roth, 2016).
  - [Don't Trust: Verify -- Grounding LLM Quantitative Reasoning with Autoformalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/0a79ecda13603817de4cdfc68b417e89-Paper-Conference.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > We evaluate on the popular GSM8K dataset with grade school math questions (Cobbe et al., 2021). (Section 6)
  - [DSPy: Compiling Declarative Language Model Calls into State-of-the-Art Pipelines](https://proceedings.iclr.cc/paper_files/paper/2024/file/f1cf02ce09757f57c3b93c0db83181e0-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We leverage the Grade School Math dataset (GSM) (Cobbe et al., 2021) to assess the reasoning proficiency of models. (Section 4.1)
  - [Seeking Neural Nuggets: Knowledge Transfer in Large Language Models from a Parametric Perspective](https://proceedings.iclr.cc/paper_files/paper/2024/file/6d6dc5c9ad19816d745535d352dc4295-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > We evaluated the general capabilities of the models on benchmarks related to general-domain chat (MT-Bench [83] and Alpaca-Eval [37]), general MCQs (MMLU [34] and GPQA [54]), and mathematical tasks (MATH [22] and GSM8k [12]). (Section 4.1)
  - [UltraMedical: Building Specialized Generalists in Biomedicine](https://proceedings.neurips.cc/paper_files/paper/2024/file/2dfc26ce9039f00eee4aba0c54931e46-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Chain of thought** (behaviors tasks) — *measured_by*
  > "tasks involving chain-of-thought (Wei et al., 2022b) reasoning: StrategyQA (Geva et al., 2021) and GSM8K Cobbe et al. (2021)"
  - [DoLa: Decoding by Contrasting Layers Improves Factuality in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/edc36117f795ca52a0cbf6a7b3882859-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > "We conduct experiments on text generation tasks by fine-tuning Phi-3-mini-4k-instruct [1] on the GSM-8K [9] dataset"
  - [PACE: Marrying generalization in PArameter-efficient fine-tuning with Consistency rEgularization](https://proceedings.neurips.cc/paper_files/paper/2024/file/70a06501001e1820fd1eb9ee821302d2-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs) — *measured_by*
  > Two mathematical datasets are considered: (4) GSM8k (Cobbe et al., 2021) and (5) AQuA (Ling et al., 2017), since they require comprehensive understanding of complex problems and powerful abilities like bottom-up composition and multi-step reasoning. (Section 4.1)
  - [Forest for the Trees: Overarching Prompting Evokes High-Level Reasoning in Large Language Models](https://aclanthology.org/2025.naacl-long.66.pdf)
- **Generalization** (constructs) — *measured_by*
  > we access three mainstream benchmarks (MMLU [15], BBH [37], and GSM8K [8]) to evaluate generalization abilities. (Section 3.1)
  - [AlchemistCoder: Harmonizing and Eliciting Code Capability by Hindsight Tuning on Multi-source Data](https://proceedings.neurips.cc/paper_files/paper/2024/file/040c816286b3844fd78f2124eec75f2e-Paper-Conference.pdf)
- **In-context learning** (constructs) — *measured_by*
  > “We quantitatively study how self-reinforced surface patterns lead to both beneﬁcial functions and detrimental effects in ICL. The experiments in this section are conducted over MMLU (Hendrycks et al., 2021) and GSM8K (Cobbe et al., 2021).”
  - [Understanding In-Context Learning from Repetitions](https://proceedings.iclr.cc/paper_files/paper/2024/file/d88f6f81e1aaf606776ffdd06fdf24ef-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > training set is GSM8K (grade school math) and helpfulness is test accuracy on GSM8K. (Section 2)
  - [Keeping LLMs Aligned After Fine-tuning: The Crucial Role of Prompt Templates](https://proceedings.neurips.cc/paper_files/paper/2024/file/d6f034bb216b472fc7d32ec7aff20342-Paper-Conference.pdf)
- **Downstream task performance** (behaviors tasks) — *measured_by*
  > We assess their impact on task performance, diversity of model generations, and computational requirements. Concretely, we compare MLE-based next token prediction and different IRL methods for fine-tuning LLMs on common benchmarks. ... We use the following datasets and subsets for ablation in the following sections: XSUM, GSM8k, TLDR, and WMT22.
  - [Imitating Language via Scalable Inverse Reinforcement Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/a5036c166e44b731f214f41813364d01-Paper-Conference.pdf)
- **Complex reasoning question answering** (behaviors tasks) — *measured_by*
  > Furthermore, G2IS demonstrates significant improvements on complex reasoning tasks like GSM8K and BBH, showcasing the advantages of using a gradient-based graph structure to jointly model instruction tuning data, leading to better performance on complex tasks. (Section 4.2)
  - [Beyond Similarity: A Gradient-based Graph Method for Instruction Tuning Data Selection](https://aclanthology.org/2025.acl-long.1189.pdf)
- **Short-context ability** (constructs) — *measured_by*
  > We select 8 short-context tasks commonly used for evaluating the general capabilities of models. These include... GSM8K... (Section 4.1)
  - [Make Your LLM Fully Utilize the Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/71c3451f6cd6a4f82bb822db25cea4fd-Paper-Conference.pdf)
- **Catastrophic forgetting** (behaviors tasks) — *measured_by*
  > In this section, we explore the forgetting of CultureLLM in two general datasets: BIG-Bench-Hard (BBH) [Suzgun et al., 2022] and GSM8K [Cobbe et al., 2021]. (Section 5.2)
  - [CultureLLM: Incorporating Cultural Differences into Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a16935bf54c4af233e25d998b7f4a2c-Paper-Conference.pdf)
- **Instruction fine-tuning** (behaviors tasks) — *measured_by*
  > For LLM fine-tuning, we conduct experiments in math corpus, and evaluate on Mathmeticas (Davies et al., 2021), SVAMP (Patel et al., 2021), NumGLUE (Mishra et al., 2022), and GSM8K (Cobbe et al., 2021). (Section 6.1)
  - [COAT: Compressing Optimizer states and Activations for Memory-Efficient FP8 Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ac807c9b296964409b277369e55621a-Paper-Conference.pdf)
- **Utility preservation** (constructs) — *measured_by*
  > For evaluating utility, we consider MMLU (Hendrycks et al., 2020), GSM8K (Cobbe et al., 2021), and MBPP (Austin et al., 2021) datasets. (Section 3)
  - [Exploring Safety-Utility Trade-Offs in Personalized Language Models](https://aclanthology.org/2025.naacl-long.565.pdf)
- **Complex reasoning** (constructs) — *measured_by*
  > For complex reasoning, we use the GSM8K dataset (Cobbe et al., 2021), which contains linguistically diverse grade school math world problems with step-by-step solutions.
  - [Generalization v.s. Memorization: Tracing Language Models’ Capabilities Back to Pretraining Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/7cdf000d22c6cda21f3cbd7467aaf26f-Paper-Conference.pdf)
- **Multi-agent debate** (behaviors tasks) — *measured_by*
  > we build multi-agent debate tasks on several mathematical or logical reasoning datasets. ... We evaluate our approach on four datasets. (i) GSM8K (Cobbe et al., 2021) contains high quality grade school math problems. (Section 4.2.1)
  - [Augmenting Multi-Agent Communication with State Delta Trajectory](https://aclanthology.org/2025.emnlp-main.518.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > “We test on the test splits of ... GSM8K (Cobbe et al., 2021), ARC (Clark et al., 2018), HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2019), and WinoGrande (Sakaguchi et al., 2021) for question-answering tasks.”
  - [Radio: Rate–Distortion Optimization for Large Language Model Compression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/young25b/young25b.pdf)
- **Factuality** (constructs) — *measured_by*
  > "Further experiments on chain-of-thought reasoning for StrategyQA (Geva et al., 2021) and GSM8K (Cobbe et al., 2021) also show that it can facilitate more factual reasoning."
  - [DoLa: Decoding by Contrasting Layers Improves Factuality in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/edc36117f795ca52a0cbf6a7b3882859-Paper-Conference.pdf)
- **Logical soundness** (constructs) — *measured_by*
  > Benchmarks that adopt multiple metrics are not scalable since each of them targets different skills, domains, and difficulties such as GSM8K (Cobbe et al., 2021) for logical correctness... (Section 1)
  - [FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf)
- **Prompt optimization** (behaviors tasks) — *measured_by*
  > Our primary evaluation benchmarks for prompt optimization are GSM8K (Cobbe et al., 2021) and Big-Bench Hard (BBH) (Suzgun et al., 2022). (Section 5.1)
  - [Large Language Models as Optimizers](https://proceedings.iclr.cc/paper_files/paper/2024/file/3339f19c5fcee3ad74502947a32be9e6-Paper-Conference.pdf)
- **STEM problem solving** (behaviors tasks) — *measured_by*
  > We evaluate MMLU and GSM8K for STEM tasks. (Section 3.1)
  - [Take a Step Back: Evoking Reasoning via Abstraction in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/592da1445a51e54a3987958b5831948f-Paper-Conference.pdf)
- **Scalability** (constructs) — *measured_by*
  > The results presented in Figure 4 indicate the promising scalability of our method. That is, as the size of data increases, the accuracy of the model consistently improves.
  - [Neuro-Symbolic Data Generation for Math Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/29d319f7c1513c9ecd81d3a6e9632a6e-Paper-Conference.pdf)
- **Open-ended question answering** (behaviors tasks) — *measured_by*
  > On the free-form generation tasks (GSM8K, TriviaQA and NQ), we calculate the exact match (EM) accuracy.
  - [Ensemble Learning for Heterogeneous Large Language Models with Deep Parallel Collaboration](https://proceedings.neurips.cc/paper_files/paper/2024/file/d8a6eb79f8ccaacbe7198a5caf3a0323-Paper-Conference.pdf)
- **Commonsense reasoning** (constructs) — *measured_by*
  > eight common sense reasoning datasets (six measured by both individual and average accuracy (↑), TruthfulQA measured by BLEU score (↑), and GSM8K measured by Exact Match Accuracy (↑)) (Table 1)
  - [SVD-LLM: Truncation-aware Singular Value Decomposition for Large Language Model Compression](https://proceedings.iclr.cc/paper_files/paper/2025/file/3104e1ab39875cf54fe1eb4473e7c5a1-Paper-Conference.pdf)
- **Generative ability** (constructs) — *measured_by*
  > the results on two generation datasets (TruthfulQA, GSM8K) of all three baselines when compression ratios are 60% and above are zero, meaning that the compressed LLMs totally lose their generation ability. (Section 4.1)
  - [SVD-LLM: Truncation-aware Singular Value Decomposition for Large Language Model Compression](https://proceedings.iclr.cc/paper_files/paper/2025/file/3104e1ab39875cf54fe1eb4473e7c5a1-Paper-Conference.pdf)
- **Text continuation** (behaviors tasks) — *measured_by*
  > Choice permutation applies to all benchmarks except GSM8K which is a text-completion benchmark, not a multiple-choice benchmark. (Section 3.1, footnote 7)
  - [metabench - A Sparse Benchmark of Reasoning and Knowledge in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ebc26584810a189ef1e4f173aba4319-Paper-Conference.pdf)
- **In-context reasoning** (constructs) — *measured_by*
  > we verify whether truncating MLPs improves reasoning on the GSM8K benchmark (Cobbe et al., 2021) (Section 4.2).
  - [Distributional Associations vs In-Context Reasoning: A Study of Feed-forward and Attention Layers](https://proceedings.iclr.cc/paper_files/paper/2025/file/533a89d7c2980218d82dbe3ea85f77ae-Paper-Conference.pdf)
- **Knowledge transfer** (constructs) — *measured_by*
  > Bulilding on this success we further extended DAMO to LLMs, where is also delivered strong results on benchmarks such as TruthfulQA Lin et al. (2021), FACTOR Muhlgay et al. (2023), and GSM8K Cobbe et al. (2021), indicating that DAMO possesses notable transferability across different tasks and model types. (Section 1)
  - [DAMO: Decoding by Accumulating Activations Momentum for Mitigating Hallucinations in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8f0f23417ce1d00212a7c85c2560c392-Paper-Conference.pdf)
- **Zero-shot generalization** (constructs) — *measured_by*
  > our method surpasses all the baseline methods, even though it has never seen data from the GSM dataset, indicating the strong zero-shot generalization capability of the proposed method. (Section 4.3)
  - [Multiagent Finetuning: Self Improvement with Diverse Reasoning Chains](https://proceedings.iclr.cc/paper_files/paper/2025/file/1d50221b03ced7152d8750c9d1e66cba-Paper-Conference.pdf)
- **Self-correction ability** (constructs) — *measured_by*
  > We evaluate self-correction capability on both classification and generation tasks, including domains in mathematics, coding, instruction following, common-sense reasoning, and knowledge. To be specific, the dataset we utilized include GSM8k (Cobbe et al., 2021)... (Section 4.1)
  - [Confidence v.s. Critique: A Decomposition of Self-Correction Capability for LLMs](https://aclanthology.org/2025.acl-long.203.pdf)
- **Contextual understanding** (constructs) — *measured_by*
  > For evaluation, we selected eight general-purpose benchmarks to assess context awareness, including MMLU (5-shot) (Hendrycks et al., 2020), MMLU-PRO (5-shot) (Wang et al., 2024), GPQA (0-shot) (Rein et al., 2023), BBH (3-shot) (Srivastava et al., 2023), WinoGrande (5-shot) (Sakaguchi et al., 2019), GSM8k (8-shot) (Cobbe et al., 2021), MATH (4-shot) (Lightman et al., 2023), and DROP (3-shot) (Dua et al., 2019). (Section 6)
  - [HoPE: A Novel Positional Encoding Without Long-Term Decay for Enhanced Context Awareness and Extrapolation](https://aclanthology.org/2025.acl-long.1123.pdf)
- **Self-correction** (behaviors tasks) — *measured_by*
  > GSM8K evaluates the model’s self-correction capabilities... (Section 4.2)
  - [CopySpec: Accelerating LLMs with Speculative Copy-and-Paste](https://aclanthology.org/2025.emnlp-main.1337.pdf)
- **Coherence** (constructs) — *measured_by*
  > preserving coherence, as measured by accuracy on the GSM8K, MATH, HumanEval and MMLU-Pro datasets.
  - [Group-Aware Reinforcement Learning for Output Diversity in Large Language Models](https://aclanthology.org/2025.emnlp-main.1649.pdf)
- **Editing locality** (constructs) — *measured_by*
  > For KE, we also need to consider locality, which ensures edits do not affect unrelated knowledge and abilities. To assess this, we evaluate the model on general benchmarks, including CommonsenseQA (Talmor et al., 2019), BigBench-Hard (Suzgun et al., 2023), MMLU (Hendrycks et al., 2021), and GSM8k (Cobbe et al., 2021) (Section 4.1).
  - [CaKE: Circuit-aware Editing Enables Generalizable Knowledge Learners](https://aclanthology.org/2025.emnlp-main.572.pdf)
- **Out-of-distribution generalization** (constructs) — *measured_by*
  > To rigorously assess the generalization capabilities of merged checkpoints to unseen domains, we evaluated the out-of-domain (OOD) performance of various merging methods. Although merging weights were determined using the C-Eval dataset (in-domain, IND), we tested the merged models on three diverse OOD datasets: CMMLU, MMLU, and GSM8K. (Section 4.2)
  - [Maximizing Intermediate Checkpoint Value in LLM Pretraining with Bayesian Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25bv/liu25bv.pdf)

### Associated with
- **lm-evaluation-harness** (measurements)
  > ...using the EleutherAI LM Harness (Gao et al., 2023), including ... 5-shot GSM8K... (Section 5)
  - [Training-Free Activation Sparsity in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f3f2ff9579ba6deeb89caa2fe1f0b99c-Paper-Conference.pdf)
- **Open LLM Leaderboard** (measurements)
  > We evaluate these LLMs using prompts of varying length, ambiguity, and context, sourced from the test set of ARC (Clark et al., 2018), GSM8K (Cobbe et al., 2021), HellaSwag (Zellers et al., 2019), MMLU (Hendrycks et al., 2021), Truthful QA (Lin et al., 2022), and Winogrande (Sakaguchi et al., 2019). These set the performance benchmarks on the HuggingFace Open LLM Leaderboard (Section 4.2)
  - [Transformer Block Coupling and its Correlation with Generalization in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/3f7f788b479a26348605a9f97c465d22-Paper-Conference.pdf)
- **FLASK** (measurements)
  > We first collect input (instruction) and output (reference answer) pairs from various English NLP datasets, ... and single-task datasets (e.g. GSM8K (Cobbe et al., 2021)). (Section 3.2)
  - [FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf)
- **Self-consistency** (measurements)
  > “In the mathematical reasoning task (GSM8K), we also consider self-consistency (Wang et al., 2022).”
  - [The Consensus Game: Language Model Generation via Equilibrium Search](https://proceedings.iclr.cc/paper_files/paper/2024/file/17a9bfda8be2301e24f232fb32f1e0fa-Paper-Conference.pdf)
- **PutnamBench** (measurements)
  > Our benchmark is unique compared to informal benchmarks such as MATH (Hendrycks et al., 2021) and GSM8K (Cobbe et al., 2021) in the sense that the target output has never been produced, hence avoiding direct contamination.
  - [PutnamBench: Evaluating Neural Theorem-Provers on the Putnam Mathematical Competition](https://proceedings.neurips.cc/paper_files/paper/2024/file/1582eaf9e0cf349e1e5a6ee453100aa1-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MR-GSM8K** (measurements)
  > To prove our point, we applied our paradigm to GSM8K dataset and developed the MR-GSM8K benchmark. (Abstract)
  - [MR-GSM8K: A Meta-Reasoning Benchmark for Large Language Model Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc0b0e6ac2da44d5839b13f90625b357-Paper-Conference.pdf)
- **Open LLM Leaderboard V1** (measurements)
  > “These two benchmarks are arguably the most influential of the 2022-2024 period under study. They are also included in the Hugging-Face (HF) Open LLM Leaderboard v1”
  - [Training on the Test Task Confounds Evaluation and Emergence](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab8c971c2ccd12bac0ab249f75e2c16d-Paper-Conference.pdf)
