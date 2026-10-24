# ARC
**Type:** Measurement  
**Referenced in:** 151 papers  
**Also known as:** Arc, AI2ARC, AI2 Reasoning Challenge, AI2-ARC, ARC-easy/challenge, AI2 Reasoning Challenge (ARC)  

## State of the Field

**What it is.** Across most papers, ARC is treated as the AI2 Reasoning Challenge, a multiple-choice science question benchmark drawn from grade-school or similar school-level exams and used to study knowledge and reasoning. The prevailing description includes ARC-Easy and ARC-Challenge, also written Arc-E and Arc-C, and some papers focus specifically on the challenge split. A smaller line of work uses the same name for the Abstraction and Reasoning Corpus or Challenge, a visual or grid-based benchmark where models infer transformation rules from input-output grids and apply them to a test grid; descriptions also differ on educational level, since most papers say grade-school while one paper describes graduate-school science questions.

**What it is claimed to measure.** Papers link ARC to 15 constructs and 11 behavioral indicators, so its reported measurement claims are spread across many targets. The most common framing is that it measures commonsense reasoning and reasoning, typically through multiple-choice question answering and question answering; papers also link it to 13 other constructs and 9 other behavioral indicators. In smaller lines of work, especially when ARC is used in the visual sense, papers report it as measuring fluid intelligence, and one study says it has become "the de facto standard for measuring machine fluid intelligence" (Understanding LLMs' Fluid Intelligence Deficiency: An Analysis of the ARC Task).

**Space of uses.** Papers most often position ARC as one task inside broader evaluation suites, especially the Open LLM Leaderboard, and they also relate it to lm-evaluation-harness. It is frequently used alongside MMLU, HellaSwag, and TruthfulQA, and papers report both zero-shot and few-shot evaluations, sometimes using only ARC-Challenge and sometimes combining Easy and Challenge. A few papers use it as a validation, generalization, or post-editing check rather than as the main benchmark.

## Sources

**[Are Human-generated Demonstrations Necessary for In-context Learning?](https://proceedings.iclr.cc/paper_files/paper/2024/file/19914b5bf19ab2b245d2e6ff7299e8f0-Paper-Conference.pdf)**
> AI2 Reasoning Challenge, a multiple-choice question answering dataset focused on grade school science questions requiring knowledge and reasoning, split into Easy and Challenge sets.

**[On Speeding Up Language Model Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a38cfba4c717e5a37b200294615e546e-Paper-Conference.pdf) (as "Arc")**
> The AI2 Reasoning Challenge, a dataset of grade-school science questions designed to test reasoning.

**[KV-Latent: Dimensional-level KV Cache Reduction with Frequency-aware Rotary Positional Embedding](https://aclanthology.org/2025.acl-long.77.pdf) (as "AI2ARC")**
> AI2 Reasoning Challenge dataset containing grade-school level science questions requiring multi-step reasoning and comprehension.

**[MIB: A Mechanistic Interpretability Benchmark](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mueller25a/mueller25a.pdf) (as "AI2 Reasoning Challenge")**
> A dataset of grade-school science questions used to evaluate basic scientific reasoning in language models.

**[Interpreting the Repeated Token Phenomenon in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yona25a/yona25a.pdf) (as "AI2-ARC")**
> The AI2 Reasoning Challenge (ARC) is a benchmark consisting of grade-school level, multiple-choice science questions designed to test question answering and reasoning.

**[Anyprefer: An Agentic Framework for Preference Data Synthesis](https://proceedings.iclr.cc/paper_files/paper/2025/file/56fbf5a2109a6c17372209c9fa698857-Paper-Conference.pdf) (as "ARC-easy/challenge")**
> A multiple-choice science question benchmark used here to evaluate commonsense question answering and math reasoning-related performance.

**[Reasons and Solutions for the Decline in Model Performance after Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/7f588e59e9ae6138d3ea9e4fdaa7e040-Paper-Conference.pdf) (as "AI2 Reasoning Challenge (ARC)")**
> A benchmark consisting of science questions used to evaluate a model's reasoning abilities after editing.

## Relationships

### → ARC
- **Commonsense reasoning** (constructs) — *measured_by*
  > We evaluate SEC in the following tasks and datasets (details in Appendix A.1): ... Commonsense Reasoning: AI2 Reasoning Challenge (ARC) (Clark et al., 2018) (Section 3.1)
  - [Are Human-generated Demonstrations Necessary for In-context Learning?](https://proceedings.iclr.cc/paper_files/paper/2024/file/19914b5bf19ab2b245d2e6ff7299e8f0-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > To evaluate the efficacy of ACC-Collab we make use of 5 standard benchmark tasks: ... ARC Chollet (2019) ∼7k multiple-choice reasoning-based questions. (Section 5)
  - [ACC-Collab: An Actor-Critic Approach to Multi-Agent LLM Collaboration](https://proceedings.iclr.cc/paper_files/paper/2025/file/e187897ed7780a579a0d76fd4a35d107-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We evaluate the reasoning performance of quantized models using zero-shot tasks (e.g., ARC [4], HellaSwag [34], and MMLU [8]). (Section 4.2)
  - [Towards Next-Level Post-Training Quantization of Hyper-Scale Transformers](https://proceedings.neurips.cc/paper_files/paper/2024/file/ab6eba9a853087993addff937c8cec87-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > For MCQ answering, we use AI2 Reasoning Challenge (Clark et al., 2018, ARC), Massive Multitask Language Understanding (Hendrycks et al., 2021, MMLU), and Reward Bench Reasoning (Lambert et al., 2024, RWDB-R). (Section 4)
  - [Task-Adaptive Pretrained Language Models via Clustered-Importance Sampling](https://proceedings.iclr.cc/paper_files/paper/2025/file/688006b3d1df8be5bb2a2a31a407180c-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > To investigate whether up-weighting context-aware neurons impairs the model’s general abilities, we conducted evaluations of IRCAN on six widely-used benchmarks... including ARC [6], HellaSwag [47], MMLU [15], Winogrande [34], GSM8K [7], and TruthfulQA [24]. (Section 5.4)
  - [IRCAN: Mitigating Knowledge Conflicts in LLM Generation via Identifying and Reweighting Context-Aware Neurons](https://proceedings.neurips.cc/paper_files/paper/2024/file/08a9e28c96d016dd63903ab51cd085b0-Paper-Conference.pdf)
- **Machine reading comprehension** (behaviors tasks) — *measured_by*
  > Reading comprehension and commonsense reasoning improves. For ARC and HellaSwag, preference optimization methods generally improve performance compared to the SFT checkpoint.
  - [SimPO: Simple Preference Optimization with a Reference-Free Reward](https://proceedings.neurips.cc/paper_files/paper/2024/file/e099c1c9699814af0be873a175361713-Paper-Conference.pdf)
- **Zero-shot question answering** (behaviors tasks) — *measured_by*
  > “accuracies of zero-shot tasks including Winogrande [29], HellaSwag [41], PIQA [4], BoolQ [7], and ARC [8] are also reported.”
  - [OneBit: Towards Extremely Low-bit Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/7a7a3f53faafc0161be0fcb57e5fa078-Paper-Conference.pdf)
- **Zero-shot task performance** (behaviors tasks) — *measured_by*
  > The other is reported by the accuracy metric of zero-shot language tasks (Gao et al. (2021)) on PIQA (Bisk et al. (2020a)), HellaSwag (Clark et al. (2018)), ARC (Clark et al. (2018)), Mutual (Cui et al. (2020)) and Ehics (Hendrycks et al. (2020a)). (Section 5.1)
  - [CBQ: Cross-Block Quantization for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/15212bd2265c4a3ab0dbc1b1982c1b69-Paper-Conference.pdf)
- **Scientific reasoning** (constructs) — *measured_by*
  > We evaluate RATIONALYST across diverse reasoning tasks including ... scientific (ARC (Clark et al., 2018)) (Section 4.2)
  - [RATIONALYST: Pre-training Process-Supervision for Improving Reasoning](https://aclanthology.org/2025.acl-long.1288.pdf)
- **Logical reasoning** (constructs) — *measured_by*
  > Reasoning: The model’s capacity for commonsense and logical reasoning is measured using Winogrande (Sakaguchi et al., 2021) and ARC (easy and challenge subsets) (Clark et al., 2018). (Section 4.1)
  - [Mixture-of-Clustered-Experts: Advancing Expert Specialization and Generalization in Instruction Tuning](https://aclanthology.org/2025.emnlp-main.718.pdf)
- **Knowledge retention** (constructs) — *measured_by*
  > Besides, to verify whether HRA can better retain pre-training knowledge, we fine-tune LLaMA-2 7B on the MATHQA dataset by LoRA and HRA, respectively, and check the degradation of model performance on classic NLP tasks, including typical language tasks in ARC [55], HellaSwag [58], MMLU [17], Winogrande [42], and a coding task in HumanEval [6]. (Section 4.2)
  - [Bridging The Gap between Low-rank and Orthogonal Adaptation via Householder Reflection Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/cdd0640218a27e9e2c0e52e324e25db0-Paper-Conference.pdf)
- **Language model pre-training** (behaviors tasks) — *measured_by*
  > For LLM pertaining, we report the perplexity on Wikitext 103..., and the accuracy on COPA (Gordon et al., 2012), ARC (Clark et al., 2018), SciQ (Welbl et al., 2017), and HellaSwag (Zellers et al., 2019). (Section 6.1)
  - [COAT: Compressing Optimizer states and Activations for Memory-Efficient FP8 Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ac807c9b296964409b277369e55621a-Paper-Conference.pdf)
- **Grounded response generation** (behaviors tasks) — *measured_by*
  > Figure 6: % of test hypotheses fully groundable after adding various microtheories (n-sized Random, Usage, QC, & PC Mts) to a base Corpus. ... ARC Grounding Rate (%) of Test Hypotheses
  - [From Models to Microtheories: Distilling a Model's Topical Knowledge for Grounded Question-Answering](https://proceedings.iclr.cc/paper_files/paper/2025/file/77d52754ff6b2de5a5d96ee921b6b3cd-Paper-Conference.pdf)
- **Knowledge-based question answering** (behaviors tasks) — *measured_by*
  > For knowledge-intensive reasoning, we use datasets that require deep domain understanding. ARC (Clark et al., 2018) tests advanced reasoning with grade-school science questions
  - [OCEAN: Offline Chain-of-thought Evaluation and Alignment in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9e9dbfc971b5f8e74f41e335ff3d658-Paper-Conference.pdf)
- **Scientific question answering** (behaviors tasks) — *measured_by*
  > ARC (AI2 Reasoning Challenge, Clark et al., 2018) was designed to test the reasoning abilities of AI through a series of challenging science questions. (Section 1.1)
  - [metabench - A Sparse Benchmark of Reasoning and Knowledge in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ebc26584810a189ef1e4f173aba4319-Paper-Conference.pdf)
- **Factual recall** (behaviors tasks) — *measured_by*
  > All of the datasets studied, with the partial exception of MMLU (Hendrycks et al., 2021b), are “recall-intensive” in that they largely depend on recalling factual information learned during training; we studied both multiple-choice datasets (MMLU, ARC (Clark et al., 2018)1) and open-ended ones (TriviaQA (Joshi et al., 2017), WebQuestions (Berant et al., 2013), CounterFact (Meng et al., 2022)). (Section 3)
  - [SCIURus: Shared Circuits for Interpretable Uncertainty Representations in Language Models](https://aclanthology.org/2025.naacl-long.618.pdf)
- **Knowledge reasoning** (constructs) — *measured_by*
  > ARC (Clark et al., 2018), a knowledge reasoning dataset consisting of grad-school level science questions in a multiple-choice format. (Section 4.1).
  - [ParaICL: Towards Parallel In-Context Learning](https://aclanthology.org/2025.naacl-long.621.pdf)
- **Language modeling** (behaviors tasks) — *measured_by*
  > To validate the performance of different models, we used some benchmarks for the 3B and 19B models that were trained more tokens, including Lambada(Paperno et al., 2016), Winogrande(Sakaguchi et al., 2021), Hellaswag(Zellers et al., 2019), ARC(Clark et al., 2018), CMMLU(Li et al., 2023a), MMLU(Hendrycks et al.), Math(Hendrycks et al., 2021). (Section 4.1)
  - [KV Shifting Attention Enhances Language Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25ac/xu25ac.pdf)
- **Chain-of-thought reasoning** (constructs) — *measured_by*
  > ARC (AI2 Reasoning Challenge) is a dataset created by the Allen Institute for Artiﬁcial Intelligence (AI2) to evaluate question answering systems’ ability to perform multi-step reasoning.
  - [EncryptedLLM: Privacy-Preserving Large Language Model Inference via GPU-Accelerated Fully Homomorphic Encryption](https://raw.githubusercontent.com/mlresearch/v267/main/assets/de-castro25a/de-castro25a.pdf)

### Associated with
- **Open LLM Leaderboard** (measurements)
  > Table 2: Evaluation results on various tasks from the Huggingface Open Leaderboard v1 and v2. ... MMLU-PRO, BBH, MUSR, MATH, GSM8K, ARC
  - [On a Connection Between Imitation Learning and RLHF](https://proceedings.iclr.cc/paper_files/paper/2025/file/acf4a08f67724e9d2de34099f57a9c25-Paper-Conference.pdf)
- **lm-evaluation-harness** (measurements)
  > “We use EleutherAI’s LM eval harness (Gao et al., 2024) to evaluate models on ARC (Clark et al., 2018), HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), SciQ (Welbl et al., 2017) and Winogrande (Trinh & Le, 2018).”
  - [Ladder-Residual: Parallelism-Aware Architecture for Accelerating Large Model Inference with Communication Overlapping](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bg/zhang25bg.pdf)
