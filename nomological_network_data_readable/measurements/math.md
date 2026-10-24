# MATH
**Type:** Measurement  
**Referenced in:** 342 papers  
**Also known as:** Math, Mathmeticas, Hendrycks-MATH, Hendrycks MATH, MATH dataset  

## State of the Field

**What it is.** Across papers, MATH is most commonly described as a benchmark of challenging high school or competition-level mathematics problems used for evaluation, often traced to AMC 10, AMC 12, AIME, and similar sources. Several definitions add that it contains 12,500 problems, spans subjects such as algebra, geometry, number theory, counting and probability, and related areas, and includes difficulty levels from 1 to 5; some papers also note step-by-step solutions, boxed answers, or exact string and SymPy matching for correctness. A smaller line of work uses specific forms such as the algebra subset, MATH-Algebra-Easy, a multiple-choice version, or names it as Hendrycks-MATH or Hendrycks MATH.

**What it is claimed to measure.** Papers use it to measure a wide spread of targets, with 11 linked constructs and 4 linked behavioral indicators. The dominant convergence is on mathematical reasoning, and many papers also use it for reasoning, generalization, general ability, and mathematical problem solving. Definitions repeatedly frame it as assessing mathematical reasoning and problem solving, and some descriptions add that it spans a range of difficulty levels.

**Space of uses.** The prevailing usage is as a commonly used benchmark in evaluation suites, very often paired with GSM8K and sometimes positioned as the more challenging companion to it. Some papers use it as the main dataset for both training and testing, others adapt representative subsets or repurpose it inside MINT for multi-turn evaluation, and one paper reports using lm-evaluation-harness with 5-shot examples. Its direct instrument links are limited to 3: MATH-500, PutnamBench, and lm-evaluation-harness.

**Concerns raised.** Some papers raise contamination or memorization-related concerns around the benchmark. One paper contrasts PutnamBench with informal benchmarks such as MATH by saying its target output "has never been produced," hence avoiding direct contamination. Another analyzes MATH by separating "hits" and "non-hits" based on a 30-gram overlap between a problem or solution and a training sequence.

## Sources

**[Are Human-generated Demonstrations Necessary for In-context Learning?](https://proceedings.iclr.cc/paper_files/paper/2024/file/19914b5bf19ab2b245d2e6ff7299e8f0-Paper-Conference.pdf)**
> A dataset of challenging high school mathematical competition problems from sources like AMC 10, AMC 12, and AIME, used to evaluate advanced mathematical reasoning.

**[CorDA: Context-Oriented Decomposition Adaptation of Large Language Models for Task-Aware Parameter-Efficient Fine-tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/83f95bb0ac5046338ea2afe3390e9f4b-Paper-Conference.pdf) (as "Math")**
> A mathematical problem-solving benchmark used to evaluate math performance after fine-tuning.

**[COAT: Compressing Optimizer states and Activations for Memory-Efficient FP8 Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ac807c9b296964409b277369e55621a-Paper-Conference.pdf) (as "Mathmeticas")**
> A benchmark for evaluating mathematical reasoning by testing models on problems from the MATH dataset.

**[Mixture of Parrots: Experts improve memorization more than reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5bc3356e0fa1753fff7e8d6628e71b22-Paper-Conference.pdf) (as "Hendrycks-MATH")**
> Hendrycks-MATH is a mathematical reasoning benchmark covering competition-style math problems.

**[Learning to Plan Before Answering: Self-Teaching LLMs to Learn Abstract Plans for Problem Solving](https://proceedings.iclr.cc/paper_files/paper/2025/file/821a6e5681b072351fd3c21fac44739a-Paper-Conference.pdf) (as "Hendrycks MATH")**
> A benchmark dataset consisting of challenging mathematics problems used to evaluate mathematical reasoning capabilities.

**[Buffer of Thoughts: Thought-Augmented Reasoning with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cde328b7bf6358f5ebb91fe9c539745e-Paper-Conference.pdf) (as "MATH dataset")**
> A dataset used to evaluate mathematical problem solving capabilities, specifically for comparing template quality.

## Relationships

### → MATH
- **Mathematical reasoning** (constructs) — *measured_by*
  > We evaluate DTV on three quantitative reasoning datasets: GSM8K (Cobbe et al., 2021), MATH (Hendrycks et al., 2021) and MultiArith (Roy & Roth, 2016).
  - [Don't Trust: Verify -- Grounding LLM Quantitative Reasoning with Autoformalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/0a79ecda13603817de4cdfc68b417e89-Paper-Conference.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > We evaluate GPT4-Code using CSV on three datasets: MATH (Hendrycks et al., 2021), GSM8K (Cobbe et al., 2021), and MMLU-Math (Hendrycks et al., 2020).
  - [Solving Challenging Math Word Problems Using GPT-4 Code Interpreter with Code-based Self-Verification](https://proceedings.iclr.cc/paper_files/paper/2024/file/12c45a68e8433b21b91cd47731387fa4-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We test SELF-DISCOVER on 25 challenging reasoning tasks including Big Bench-Hard (BBH) (Suzgun et al., 2022), Thinking for Doing (T4D) (Zhou et al., 2023) and MATH (Hendrycks et al., 2021). (Section 1)
  - [SELF-DISCOVER: Large Language Models Self-Compose Reasoning Structures](https://proceedings.neurips.cc/paper_files/paper/2024/file/e41efb03e20ca3c231940a3c6917ef6f-Paper-Conference.pdf)
- **Complex reasoning** (constructs) — *measured_by*
  > Experiments are further carried out on the mathematical competition benchmark, MATH (Hendrycks et al., 2021b), achieving a +6.0 improvement with GPT-4, indicating that FUNCODER can also generalize to complex reasoning. (Introduction)
  - [Divide-and-Conquer Meets Consensus: Unleashing the Power of Functions in Code Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/7bc4f74e35bcfe8cfe43b0a860786d6a-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > We evaluated the general capabilities of the models on benchmarks related to general-domain chat (MT-Bench [83] and Alpaca-Eval [37]), general MCQs (MMLU [34] and GPQA [54]), and mathematical tasks (MATH [22] and GSM8k [12]). (Section 4.1)
  - [UltraMedical: Building Specialized Generalists in Biomedicine](https://proceedings.neurips.cc/paper_files/paper/2024/file/2dfc26ce9039f00eee4aba0c54931e46-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Generalization** (constructs) — *measured_by*
  > To test generalization (Section 4.4), we additionally evaluate on MATH (4-shot) (Hendrycks et al., 2021b), MBPP (3-shot) (Austin et al., 2021), NaturalQuestions (5-shot) (Kwiatkowski et al., 2019), TriviaQA (5-shot) (Joshi et al., 2017), Hellaswag (0-shot) (Zellers et al., 2019), PIQA (0-shot) (Bisk et al., 2020), and TruthfulQA (0-shot) (Lin et al., 2022).
  - [Self-MoE: Towards Compositional Large Language Models with Self-Specialized Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/558a100caa93422df215fadb9e9b1dd7-Paper-Conference.pdf)
- **Short-context ability** (constructs) — *measured_by*
  > We select 8 short-context tasks commonly used for evaluating the general capabilities of models. These include... and MATH... (Section 4.1)
  - [Make Your LLM Fully Utilize the Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/71c3451f6cd6a4f82bb822db25cea4fd-Paper-Conference.pdf)
- **Autoformalization ability** (constructs) — *measured_by*
  > “Our extensive experiments on the MATH and miniF2F datasets demonstrate that our approach significantly enhances autoformalization accuracy”
  - [Autoformalize Mathematical Statements by Symbolic Equivalence and Semantic Consistency](https://proceedings.neurips.cc/paper_files/paper/2024/file/6034a661584af6c28fd97a6f23e56c0a-Paper-Conference.pdf)
- **Instruction fine-tuning** (behaviors tasks) — *measured_by*
  > For LLM fine-tuning, we conduct experiments in math corpus, and evaluate on Mathmeticas (Davies et al., 2021), SVAMP (Patel et al., 2021), NumGLUE (Mishra et al., 2022), and GSM8K (Cobbe et al., 2021). (Section 6.1)
  - [COAT: Compressing Optimizer states and Activations for Memory-Efficient FP8 Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ac807c9b296964409b277369e55621a-Paper-Conference.pdf)
- **Contextual understanding** (constructs) — *measured_by*
  > For evaluation, we selected eight general-purpose benchmarks to assess context awareness, including MMLU (5-shot) (Hendrycks et al., 2020), MMLU-PRO (5-shot) (Wang et al., 2024), GPQA (0-shot) (Rein et al., 2023), BBH (3-shot) (Srivastava et al., 2023), WinoGrande (5-shot) (Sakaguchi et al., 2019), GSM8k (8-shot) (Cobbe et al., 2021), MATH (4-shot) (Lightman et al., 2023), and DROP (3-shot) (Dua et al., 2019). (Section 6)
  - [HoPE: A Novel Positional Encoding Without Long-Term Decay for Enhanced Context Awareness and Extrapolation](https://aclanthology.org/2025.acl-long.1123.pdf)
- **Language modeling** (behaviors tasks) — *measured_by*
  > To validate the performance of different models, we used some benchmarks for the 3B and 19B models that were trained more tokens, including Lambada(Paperno et al., 2016), Winogrande(Sakaguchi et al., 2021), Hellaswag(Zellers et al., 2019), ARC(Clark et al., 2018), CMMLU(Li et al., 2023a), MMLU(Hendrycks et al.), Math(Hendrycks et al., 2021). (Section 4.1)
  - [KV Shifting Attention Enhances Language Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25ac/xu25ac.pdf)
- **Chain-of-thought reasoning** (constructs) — *measured_by*
  > challenging multi-step reasoning tasks such as MATH (Hendrycks et al., 2021) (Section 1)
  - [QSpec: Speculative Decoding with Complementary Quantization Schemes](https://aclanthology.org/2025.emnlp-main.240.pdf)
- **Coherence** (constructs) — *measured_by*
  > preserving coherence, as measured by accuracy on the GSM8K, MATH, HumanEval and MMLU-Pro datasets.
  - [Group-Aware Reinforcement Learning for Output Diversity in Large Language Models](https://aclanthology.org/2025.emnlp-main.1649.pdf)
- **Cross-domain generalization** (constructs) — *measured_by*
  > We find that fine-tuning generalizes perfectly across domains for MATH, which is not very surprising given the near-perfect generalization from few samples to the full distribution in Figure 3. (Section 5.2)
  - [Stress-Testing Capability Elicitation With Password-Locked Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/7ff97417474268e6b5a38bcbfae04944-Paper-Conference.pdf)
- **Easy-to-hard generalization** (constructs) — *measured_by*
  > We evaluate these verifiers on the GSM8K test set as well as their easy-to-hard generalization on much harder MATH dataset (Hendrycks et al., 2021) (Section 4)
  - [Generative Verifiers: Reward Modeling as Next-Token Prediction](https://proceedings.iclr.cc/paper_files/paper/2025/file/214308a2d5e3f83ef9ad2739e1cbc46d-Paper-Conference.pdf)

### Associated with
- **Memorization** (constructs)
  > Table 7: LLEMMA-34b’s accuracy on hits (a 30-gram overlap between a problem or solution and a training sequence) and non-hits by MATH difficulty level. (Table 7)
  - [Llemma: An Open Language Model for Mathematics](https://proceedings.iclr.cc/paper_files/paper/2024/file/b225f5c7cd13615e9558c3931fa4e66f-Paper-Conference.pdf)
- **PutnamBench** (measurements)
  > Our benchmark is unique compared to informal benchmarks such as MATH (Hendrycks et al., 2021) and GSM8K (Cobbe et al., 2021) in the sense that the target output has never been produced, hence avoiding direct contamination.
  - [PutnamBench: Evaluating Neural Theorem-Provers on the Putnam Mathematical Competition](https://proceedings.neurips.cc/paper_files/paper/2024/file/1582eaf9e0cf349e1e5a6ee453100aa1-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MATH-500** (measurements)
  > For evaluation, we use the MATH500 subset of the test set (Lightman et al., 2023). (Section 2.2)
  - [Warm Up Before You Train: Unlocking General Reasoning in Resource-Constrained Settings](https://aclanthology.org/2025.emnlp-main.727.pdf)
- **lm-evaluation-harness** (measurements)
  > “We perform evaluations using lm-evaluation-harness ... For both GSM8k and MATH, we use 5-shot examples”
  - [Can Large Language Models Invent Algorithms to Improve Themselves?: Algorithm Discovery for Recursive Self-Improvement through Reinforcement Learning](https://aclanthology.org/2025.naacl-long.519.pdf)
