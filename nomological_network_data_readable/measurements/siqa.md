# SIQA
**Type:** Measurement  
**Referenced in:** 94 papers  
**Also known as:** SOCIALIQA, Social IQA, Social IQa, SocialIQA, Social-IQa, Social-I-QA  

## State of the Field

**What it is.** Across the surveyed work, the dominant framing is a benchmark or dataset for multiple-choice question answering about social situations, social interactions, and commonsense reasoning. Many definitions describe choosing the most likely answer to questions about people’s actions, feelings, motivations, or social consequences, while some papers frame it more specifically as social reasoning or social and emotional intelligence. Smaller uses repurpose it rather than treating it only as a fixed benchmark, for example by constructing evaluation questions from it for PERSONALITYBENCH, by placing it in a socio-emotional-skills subset, or by using a re-annotated version with Likert-scale plausibility ratings.

**What it is claimed to measure.** Papers use SIQA to measure 8 constructs and 2 behavioral indicators. The prevailing claim is that it measures Commonsense reasoning, and papers also use it for General ability and Reasoning; smaller lines of work report it as measuring Social and emotional intelligence, Social reasoning, Benchmark overfitting, Functional linguistic competence, and Social competence. It is also reported as measuring Question answering and Multiple-choice question answering, so the claims concentrate on commonsense reasoning but extend across several broader and socially framed abilities.

**Space of uses.** Papers usually place SIQA inside larger evaluation batteries rather than on its own, as one of several downstream, commonsense, or question answering tasks. It is linked to 2 other measurement instruments, and papers report that SIQA is measured by OLMES and by the lm-evaluation-harness. Smaller uses repurpose it for held-out out-of-domain evaluation, fine-tuning on social or emotional content, or construction of situational questions for PERSONALITYBENCH.

**Concerns raised.** The clearest concern-oriented uses involve contamination and benchmark overfitting: some papers evaluate the impact of data contamination or forgetting with SIQA, and one paper reports it as measuring Benchmark overfitting. Another paper uses a re-annotated SIQA with Likert-scale ratings to assess label plausibility and variation.

## Sources

**[Polynomial Composition Activations: Unleashing the Dynamics of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/725f5e8036cc08adeba4a7c3bcbc6f2c-Paper-Conference.pdf) (as "SocialIQA")**
> A benchmark dataset used to evaluate the downstream task performance of large language models.

**[Neuron based Personality Trait Induction in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d399b67fa017f0f7670102c88507720c-Paper-Conference.pdf) (as "SOCIALIQA")**
> A multiple-choice question answering benchmark for social commonsense reasoning, used in this paper as a basis for constructing evaluation questions for PERSONALITYBENCH.

**[RegMix: Data Mixture as Regression for Language Model Pre-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/5f67d864aae6115374fed7beddd119e0-Paper-Conference.pdf) (as "Social IQA")**
> A benchmark for commonsense reasoning that involves choosing the most likely answer to questions about social situations.

**[Scaling Diffusion Language Models via Adaptation from Autoregressive Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0fa81c3f0d57f95b8776de3a248ef0ed-Paper-Conference.pdf)**
> The Social Interaction QA (SIQA) benchmark, which tests commonsense reasoning about social situations through multiple-choice questions.

**[Divergences between Language Models and Human Brains](https://proceedings.neurips.cc/paper_files/paper/2024/file/f96839fc751b67492e17e70f5c9730e4-Paper-Conference.pdf) (as "Social IQa")**
> A multiple-choice dataset of questions about people’s feelings and social implications, used here for fine-tuning on social/emotional content.

**[How Much Can We Forget about Data Contamination?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bordt25a/bordt25a.pdf) (as "Social-I-QA")**
> Commonsense reasoning benchmark involving social interactions, used to assess model performance under contamination and forgetting conditions.

## Relationships

### → SIQA
- **Commonsense reasoning** (constructs) — *measured_by*
  > Commonsense Reasoning (0-shot): HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), SIQA (Sap et al., 2019)... (Section 4.2).
  - [Megalodon: Efficient LLM Pretraining and Inference with Unlimited Context Length](https://proceedings.neurips.cc/paper_files/paper/2024/file/840abfadd04c967feaa2a49aba94a32d-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > OLMo-30M models trained on various pre-training token budgets are fine-tuned on downstream tasks using fixed hyperparameters: math (GSM8k), code (Starcoder-Python), and QA (SIQA). (Figure 4)
  - [Overtrained Language Models Are Harder to Fine-Tune](https://raw.githubusercontent.com/mlresearch/v267/main/assets/springer25a/springer25a.pdf)
- **General ability** (constructs) — *measured_by*
  > Ultimately, we select the following benchmarks as our downstream tasks: Social IQA (Sap et al., 2019), HellaSwag (Zellers et al., 2019), PiQA (Bisk et al., 2020), OpenBookQA (Mihaylov et al., 2018), Lambada (Paperno et al., 2016), SciQ (Welbl et al., 2017), ARC Easy (Clark et al., 2018), COPA (Sarlin et al., 2020), RACE (Lai et al., 2017), LogiQA (Liu et al., 2020), QQP (Wang et al., 2018), WinoGrande (Sakaguchi et al., 2021), and MultiRC (Khashabi et al., 2018). (Section 5)
  - [RegMix: Data Mixture as Regression for Language Model Pre-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/5f67d864aae6115374fed7beddd119e0-Paper-Conference.pdf)
- **Social and emotional intelligence** (constructs) — *measured_by*
  > We study social and emotional intelligence using the Social IQa dataset [Sap et al., 2019]. (Section 5.1)
  - [Divergences between Language Models and Human Brains](https://proceedings.neurips.cc/paper_files/paper/2024/file/f96839fc751b67492e17e70f5c9730e4-Paper-Conference.pdf)
- **Social reasoning** (constructs) — *measured_by*
  > SIQA (Sap et al., 2019) and PIQA (Bisk et al., 2020) looks for social and physical reasoning, respectively. (Section 4.1)
  - [NoVo: Norm Voting off Hallucinations with Attention Heads in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/db6461eaf0eaeaad1d9c4a70e4818cbd-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > For reasoning abilities, we use ARC-Easy, ARC-Challenge [42], SIQA [43], PIQA [44], WinoGrande [45], and QUAC [46] (all 0-shot).
  - [BAM! Just Like That: Simple and Efficient Parameter Upcycling for Mixture of Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/665bb142d4b9f55660cb89bb56a66fe1-Paper-Conference.pdf)
- **Instruction fine-tuning** (behaviors tasks) — *measured_by*
  > Table 4: Fine-tuning performance of LLaMa2-7B on various downstream tasks.
  - [SPAM: Spike-Aware Adam with Momentum Reset for Stable LLM Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/7a70ad3d9c704fb9b81b5c69eda722dc-Paper-Conference.pdf)
- **Benchmark overfitting** (constructs) — *measured_by*
  > We evaluate the impact of data contamination using a mix of seven different benchmarks: ARC-Easy (Clark et al., 2018), Social-I-QA (Sap et al., 2019), WinoGrande (Sakaguchi et al., 2021), PiQA (Bisk et al., 2020), BoolQ (Clark et al., 2019), MMLU (Hendrycks et al., 2021), and HellaSwag (Zellers et al., 2019). (Section 3.2)
  - [How Much Can We Forget about Data Contamination?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bordt25a/bordt25a.pdf)
- **Functional linguistic competence** (constructs) — *measured_by*
  > To assess this, we use six benchmarks covering... social reasoning (SOCIAL IQA (Sap et al., 2019)) (Section 3.3)
  - [From Language to Cognition: How LLMs Outgrow the Human Language Network](https://aclanthology.org/2025.emnlp-main.1237.pdf)
- **Social intelligence** (constructs) — *measured_by*
  > We evaluated these models on six different benchmarks ... including PIQA (Bisk et al., 2020), hellaswag (Zellers et al., 2019), BoolQ (Clark et al., 2019), ARC (Clark et al., 2018), winogrande (Sakaguchi et al., 2021) and SIQA (Sap et al., 2019). These tasks examine models’ language understanding, logical reasoning, knowledge utilization, and social awareness capabilities.
  - [HMoE: Heterogeneous Mixture of Experts for Language Modeling](https://aclanthology.org/2025.emnlp-main.1115.pdf)

### Associated with
- **OLMES** (measurements)
  > "We use the OLMES suite of 10 multiple choice question answering benchmarks (Gu et al., 2024): ... SocialIQA (Sap et al., 2019), OpenBookQA ..."
  - [DataDecide: How to Predict Best Pretraining Data with Small Experiments](https://raw.githubusercontent.com/mlresearch/v267/main/assets/magnusson25a/magnusson25a.pdf)
