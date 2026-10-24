# BIG-Bench Hard
**Type:** Measurement  
**Referenced in:** 162 papers  
**Also known as:** Big Bench Hard, Big-Bench Hard, Big-Bench-Hard, BigBench-Hard, BIG-Bench-Hard, BIG-Bench-Hard (BBH), BIG-Bench Hard (BBH), Big-bench-hard (BBH), BIG-bench Hard, BBH-Hard, BigBench-Hard (BBH), BigBenchHard, BBH, BBH-COT  

## State of the Field

**What it is.** Across the surveyed work, BIG-Bench Hard is most commonly described as a challenging subset of BIG-Bench used for reasoning-focused evaluation. Most definitions emphasize hard tasks requiring complex or multi-step reasoning, though some also describe it as covering semantic understanding, language understanding, world knowledge, or general language understanding. Papers describe its makeup differently: many refer to 23 tasks, some to 27 tasks or 27 tasks across 23 task types, one to 21 tasks, and one to 23 multiple-choice tasks plus 4 free-form generation tasks. Some studies use only selected BBH tasks or categories, such as DATE, Navigate, Boolean Expression, Dyck Language, or sports_understanding, rather than the full suite.

**What it is claimed to measure.** Papers link BBH to 20 constructs and 12 behavioral indicators. The prevailing use is to measure reasoning, with recurring construct claims around general ability and generalization, while other construct claims are more dispersed. On the behavioral side, the most recurrent named uses are complex reasoning question answering and instruction following, and the remaining 10 indicators are spread across other behaviors. Overall, papers cluster their measurement claims around reasoning but also use BBH for a broader mix of capability claims.

**Space of uses.** Papers often use BBH inside multi-benchmark evaluation suites, commonly alongside MMLU, and they run it in zero-shot, 3-shot, many-shot in-context learning, or chain-of-thought settings, sometimes on selected subtasks and sometimes with exact-match scoring. In the recorded relationship language, Open LLM Leaderboard and BIG-Bench Logical Deduction are measured by BBH, BBH is measured by lm-evaluation-harness, and BBH is related to LiveBench.

**Concerns raised.** Explicit concerns are limited. A single paper treats BBH as only multiple-choice and adds Alpaca to show generalization to open-ended generation tasks, while other papers describe BBH as including free-form generation or mixed multiple-choice and exact-match tasks, so papers do not fully agree on its output format. Another paper relates BBH to LiveBench by describing LiveBench as containing "harder, contamination-limited versions" of tasks from earlier benchmarks such as BBH.

## Sources

**[Knowledge Fusion of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/4fd5cfd2e31bebbccfa5ffa354c04bdc-Paper-Conference.pdf) (as "Big-Bench Hard")**
> Subset of challenging tasks from the Beyond the Imitation Game Benchmark (BIG-Bench) that require complex reasoning, used to assess advanced language model capabilities.

**[AlpaGasus: Training a Better Alpaca with Fewer Data](https://proceedings.iclr.cc/paper_files/paper/2024/file/9543942c237ded1b39b1fd37259ff88e-Paper-Conference.pdf) (as "BBH")**
> The BIG-Bench Hard benchmark, a subset of challenging tasks from BIG-Bench that were identified as difficult for contemporary language models.

**[Connecting Large Language Models with Evolutionary Algorithms Yields Powerful Prompt Optimizers](https://proceedings.iclr.cc/paper_files/paper/2024/file/9156b0f6dfa9bbd18c79cc459ef5d61c-Paper-Conference.pdf)**
> Subset of the BIG-Bench suite focusing on challenging tasks requiring complex reasoning, including DATE and Navigate for symbolic reasoning.

**[Bias Runs Deep: Implicit Reasoning Biases in Persona-Assigned LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/5e1a87dbb7e954b8d9d6c91f6db771eb-Paper-Conference.pdf) (as "Big-Bench-Hard")**
> A subset of the Beyond the Imitation Game Benchmark (BIG-Bench) containing challenging tasks, used in this study to evaluate the knowledge and reasoning abilities of LLMs.

**[SALMON: Self-Alignment with Instructable Reward Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/dda5cac5272a9bcd4bc73d90bc725ef1-Paper-Conference.pdf) (as "Big Bench Hard")**
> Subset of the Beyond the Imitation Game benchmark focusing on challenging reasoning tasks requiring multi-step logic.

**[$\textit{Trans-LoRA}$: towards data-free Transferable Parameter Efficient Finetuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/708fdc7911f11585ee7161518e509ae6-Paper-Conference.pdf) (as "BigBench-Hard")**
> A collection of 27 reasoning tasks where pre-existing LLMs could not outperform human evaluators, covering formats like multiple-choice and short response.

**[On the Power of Decision Trees in Auto-Regressive Language Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/72176f95680c3fb27a0966f36d5d0c53-Paper-Conference.pdf) (as "BIG-Bench-Hard")**
> A benchmark suite consisting of 23 challenging tasks from the BIG-Bench benchmark that are identified as being difficult for prior language models.

**[CulturePark: Boosting Cross-cultural Understanding in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/77f089cd16dbc36ddd1caeb18446fbdd-Paper-Conference.pdf) (as "BIG-Bench-Hard (BBH)")**
> A benchmark suite comprising 21 challenging tasks designed to assess a model's semantic understanding and logical reasoning capabilities.

**[Self-playing Adversarial Language Game Enhances LLM Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/e4be7e9867ef163563f4a5e90cec478f-Paper-Conference.pdf) (as "BIG-Bench Hard (BBH)")**
> A benchmark consisting of 23 challenging tasks from the BIG-Bench suite that are difficult for current language models.

**[CodePlan: Unlocking Reasoning Potential in Large Language Models by Scaling Code-form Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/c362b360765ed90ae4bd9c6764837e0e-Paper-Conference.pdf) (as "Big-bench-hard (BBH)")**
> A suite of challenging benchmark tasks, from which specific symbolic reasoning tasks like Boolean Expression and Dyck Language are drawn.

**[Ensembles of Low-Rank Expert Adapters](https://proceedings.iclr.cc/paper_files/paper/2025/file/e8711daef520be07cb9852390c673de8-Paper-Conference.pdf) (as "BIG-bench Hard")**
> BIG-bench Hard (BBH), a benchmark used to test general language understanding and reasoning.

**[Advancing LLM Reasoning Generalists with Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e2c12c1a41af7c19c5b38e0837a52d1-Paper-Conference.pdf) (as "BBH-Hard")**
> A subset of the BIG-Bench Hard benchmark used to evaluate a model's logical reasoning capabilities on challenging tasks.

**[Block-Attention for Efficient Prefilling](https://proceedings.iclr.cc/paper_files/paper/2025/file/a03037317560b8c5f2fb4b6466d4c439-Paper-Conference.pdf) (as "BigBench-Hard (BBH)")**
> A general domain benchmark suite used to assess model capabilities on difficult tasks.

**[Demonstration Selection for In-Context Learning via Reinforcement Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25dp/wang25dp.pdf) (as "BigBenchHard")**
> BigBenchHard is a challenging reasoning benchmark suite used here via boolean expressions and web of lies subsets.

**[Decoding-Time Language Model Alignment with Multiple Objectives](https://proceedings.neurips.cc/paper_files/paper/2024/file/57c89126d60c209f48d0e6395c766bb3-Paper-Conference.pdf) (as "BBH-COT")**
> A chain-of-thought reasoning benchmark used to assess reasoning performance on Big-Bench Hard-style tasks.

## Relationships

### → BIG-Bench Hard
- **Reasoning** (constructs) — *measured_by*
  > One such benchmark is Bigbench-hard (Srivastava et al., 2022), which includes multiple reasoning tasks consisting of multiple-choice and direct-generation tasks. (Section 4.3)
  - [Language Model Self-improvement by Reinforcement Learning Contemplation](https://proceedings.iclr.cc/paper_files/paper/2024/file/d5a655b8b373737b4f2aea8f78e5e754-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > “we evaluate the 12 models in Table 2 on challenging downstream zero- and few-shot benchmarks focusing on language understanding and reasoning. We include results for 0-shot (0S) and 3-shot (3S) evaluation for BIG-Bench Hard tasks [63, 64]”
  - [Fractal Patterns May Illuminate the Success of Next-Token Prediction](https://proceedings.neurips.cc/paper_files/paper/2024/file/cd004fa45fc1fe5c0218b7801d98d036-Paper-Conference.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > BBH tasks cover a diverse range of reasoning problems spanning the following 4 categories according to their authors: 1) Algorithmic and Multi-Step Arithmetic Reasoning, 2) Natural Language Understanding, 3) Use of World Knowledge, and 4) Multilingual Knowledge and Reasoning.
  - [SELF-DISCOVER: Large Language Models Self-Compose Reasoning Structures](https://proceedings.neurips.cc/paper_files/paper/2024/file/e41efb03e20ca3c231940a3c6917ef6f-Paper-Conference.pdf)
- **Logical reasoning** (constructs) — *measured_by*
  > BBH contains 21 tasks covering both semantic understanding and logical reasoning tasks. (Section 5.2)
  - [CultureLLM: Incorporating Cultural Differences into Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a16935bf54c4af233e25d998b7f4a2c-Paper-Conference.pdf)
- **Symbolic reasoning** (constructs) — *measured_by*
  > Additionally, we investigate symbolic reasoning tasks from Big-Bench-Hard (bench authors, 2023; Suzgun et al., 2022). (Section 3)
  - [Chain-of-Thought Reasoning Without Prompting](https://proceedings.neurips.cc/paper_files/paper/2024/file/7a8e7fd295aa04eac4b470ae27f8785c-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > World Knowledge: MMLU [28] (5-shot), BBH [29] (3-shot), with the assessment based on the accuracy of multiple-choice answers. (Section 3.1).
  - [Should We Really Edit Language Models? On the Evaluation of Edited Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/370fa2e691f57eb319bc263a07dad4a5-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > we access three mainstream benchmarks (MMLU [15], BBH [37], and GSM8K [8]) to evaluate generalization abilities. (Section 3.1)
  - [AlchemistCoder: Harmonizing and Eliciting Code Capability by Hindsight Tuning on Multi-source Data](https://proceedings.neurips.cc/paper_files/paper/2024/file/040c816286b3844fd78f2124eec75f2e-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs) — *measured_by*
  > To validate our methods on diverse tasks, we apply BBH (Suzgun et al., 2022) including a suite of 23 challenging BIG-Bench tasks requiring multi-step reasoning. (Section 4.4)
  - [Connecting Large Language Models with Evolutionary Algorithms Yields Powerful Prompt Optimizers](https://proceedings.iclr.cc/paper_files/paper/2024/file/9156b0f6dfa9bbd18c79cc459ef5d61c-Paper-Conference.pdf)
- **Complex reasoning** (constructs) — *measured_by*
  > BBH (Suzgun et al., 2023) encompasses 27 arduous tasks to assess whether the model can handle complex reasoning situations.
  - [Data Pruning by Information Maximization](https://proceedings.iclr.cc/paper_files/paper/2025/file/7d848891e365ca623dc8352db9782585-Paper-Conference.pdf)
- **Prompt optimization** (behaviors tasks) — *measured_by*
  > Our primary evaluation benchmarks for prompt optimization are GSM8K (Cobbe et al., 2021) and Big-Bench Hard (BBH) (Suzgun et al., 2022). (Section 5.1)
  - [Large Language Models as Optimizers](https://proceedings.iclr.cc/paper_files/paper/2024/file/3339f19c5fcee3ad74502947a32be9e6-Paper-Conference.pdf)
- **In-context learning** (constructs) — *measured_by*
  > evaluate the ICL capability of the finetuned models on two benchmarks: MMLU (Hendrycks et al., 2020) and BBH (Suzgun et al., 2022). (Section 5.3)
  - [CausalLM is not optimal for in-context learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/364071531ff2398e0fb8bae31f615b69-Paper-Conference.pdf)
- **World knowledge** (constructs) — *measured_by*
  > BBH tasks cover a diverse range of reasoning problems spanning the following 4 categories according to their authors: 1) Algorithmic and Multi-Step Arithmetic Reasoning, 2) Natural Language Understanding, 3) Use of World Knowledge, and 4) Multilingual Knowledge and Reasoning.
  - [SELF-DISCOVER: Large Language Models Self-Compose Reasoning Structures](https://proceedings.neurips.cc/paper_files/paper/2024/file/e41efb03e20ca3c231940a3c6917ef6f-Paper-Conference.pdf)
- **Catastrophic forgetting** (behaviors tasks) — *measured_by*
  > In this section, we explore the forgetting of CultureLLM in two general datasets: BIG-Bench-Hard (BBH) [Suzgun et al., 2022] and GSM8K [Cobbe et al., 2021]. (Section 5.2)
  - [CultureLLM: Incorporating Cultural Differences into Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a16935bf54c4af233e25d998b7f4a2c-Paper-Conference.pdf)
- **General reasoning** (constructs) — *measured_by*
  > Finally, to evaluate general reasoning, we test the model on two benchmarks: ...and a more challenging task, 3-shot Chain-of-Thought (CoT) Big Bench Hard (BBH) (Suzgun et al., 2022). (Section 2.3)
  - [Wasserstein Distances, Neuronal Entanglement, and Sparsity](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1c1624dd7d9fa75adacd7e93c40e6b2-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs) — *measured_by*
  > We evaluate on tasks selected from BIG-Bench Hard (BBH) [43], a collection of diverse tasks considered to be challenging to LLMs ... the tasks include numerical reasoning, commonsense problem-solving, logical deduction, linguistic manipulation, machine translation, and tabular reasoning, among others. (Section 3.1)
  - [Teach Better or Show Smarter? On Instructions and Exemplars in Automatic Prompt Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/6b031defd145b02bed031093d8797bb3-Paper-Conference.pdf)
- **Machine translation** (behaviors tasks) — *measured_by*
  > We evaluate on tasks selected from BIG-Bench Hard (BBH) [43], a collection of diverse tasks considered to be challenging to LLMs ... the tasks include numerical reasoning, commonsense problem-solving, logical deduction, linguistic manipulation, machine translation, and tabular reasoning, among others. (Section 3.1)
  - [Teach Better or Show Smarter? On Instructions and Exemplars in Automatic Prompt Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/6b031defd145b02bed031093d8797bb3-Paper-Conference.pdf)
- **Table reasoning** (constructs) — *measured_by*
  > We evaluate on tasks selected from BIG-Bench Hard (BBH) [43], a collection of diverse tasks considered to be challenging to LLMs ... the tasks include numerical reasoning, commonsense problem-solving, logical deduction, linguistic manipulation, machine translation, and tabular reasoning, among others. (Section 3.1)
  - [Teach Better or Show Smarter? On Instructions and Exemplars in Automatic Prompt Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/6b031defd145b02bed031093d8797bb3-Paper-Conference.pdf)
- **Code generation** (behaviors tasks) — *measured_by*
  > In this experiment, we test Trace’s ability in joint prompt optimization and code generation. ... We use the Big-Bench Hard dataset [21] (15 examples for training, 5 for validation, and the rest for testing). (Section 5.3)
  - [Trace is the Next AutoDiff: Generative Optimization with Rich Feedback, Execution Traces, and LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/83ba7056bce2c3c3c27e17397cf3e1f0-Paper-Conference.pdf)
- **Word sorting** (behaviors tasks) — *measured_by*
  > Three BIG-Bench Hard (BBH) [35] tasks: Geometric Shapes, Multi-Step Arithmetic Two, and Word Sorting
  - [Buffer of Thoughts: Thought-Augmented Reasoning with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cde328b7bf6358f5ebb91fe9c539745e-Paper-Conference.pdf)
- **Multilingual reasoning** (constructs) — *measured_by*
  > BBH tasks cover a diverse range of reasoning problems spanning the following 4 categories according to their authors: 1) Algorithmic and Multi-Step Arithmetic Reasoning, 2) Natural Language Understanding, 3) Use of World Knowledge, and 4) Multilingual Knowledge and Reasoning.
  - [SELF-DISCOVER: Large Language Models Self-Compose Reasoning Structures](https://proceedings.neurips.cc/paper_files/paper/2024/file/e41efb03e20ca3c231940a3c6917ef6f-Paper-Conference.pdf)
- **Algorithmic reasoning** (constructs) — *measured_by*
  > algorithmic reasoning [BBH, 55] (Introduction).
  - [Many-Shot In-Context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/8cb564df771e9eacbfe9d72bd46a24a9-Paper-Conference.pdf)
- **Disambiguation ability** (constructs) — *measured_by*
  > “These benchmarks are quite diverse and include tasks such as logical deduction, arithmetic, translation error detection, disambiguation, as well as general knowledge”
  - [Fractal Patterns May Illuminate the Success of Next-Token Prediction](https://proceedings.neurips.cc/paper_files/paper/2024/file/cd004fa45fc1fe5c0218b7801d98d036-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > To evaluate the efficacy of ACC-Collab we make use of 5 standard benchmark tasks: ... BBH Suzgun et al. (2022) ∼5k mixed-type questions (Section 5)
  - [ACC-Collab: An Actor-Critic Approach to Multi-Agent LLM Collaboration](https://proceedings.iclr.cc/paper_files/paper/2025/file/e187897ed7780a579a0d76fd4a35d107-Paper-Conference.pdf)
- **Commonsense reasoning** (constructs) — *measured_by*
  > To evaluate the efficacy of our approach, we use GSM8K (Cobbe et al., 2021), Big-Bench-Hard (BBH) (Suzgun et al., 2022), and FOLIO (Han et al., 2022) benchmark datasets for diverse reasoning tasks in mathematics, commonsense, and logical reasoning. (Section 5.1)
  - [GReaTer: Gradients Over Reasoning Makes Smaller Language Models Strong Prompt Optimizers](https://proceedings.iclr.cc/paper_files/paper/2025/file/18a42aad2fa8aa871e2ee20d425c208d-Paper-Conference.pdf)
- **Contextual understanding** (constructs) — *measured_by*
  > For evaluation, we selected eight general-purpose benchmarks to assess context awareness, including MMLU (5-shot) (Hendrycks et al., 2020), MMLU-PRO (5-shot) (Wang et al., 2024), GPQA (0-shot) (Rein et al., 2023), BBH (3-shot) (Srivastava et al., 2023), WinoGrande (5-shot) (Sakaguchi et al., 2019), GSM8k (8-shot) (Cobbe et al., 2021), MATH (4-shot) (Lightman et al., 2023), and DROP (3-shot) (Dua et al., 2019). (Section 6)
  - [HoPE: A Novel Positional Encoding Without Long-Term Decay for Enhanced Context Awareness and Extrapolation](https://aclanthology.org/2025.acl-long.1123.pdf)
- **Object counting** (behaviors tasks) — *measured_by*
  > For prompt optimization, we use the Big Bench Hard dataset (Suzgun et al., 2022) for Object Counting... (Section 4)
  - [Revolve: Optimizing AI Systems by Tracking Response Evolution in Textual Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25aj/zhang25aj.pdf)
- **Compositionality** (constructs) — *measured_by*
  > BIG-Bench Hard (BBH; Srivastava et al., 2023; Suzgun et al., 2023) is a benchmark comprising 27 challenging tasks across 23 task types, designed to evaluate large language models on reasoning, compositionality, and generalization. (Section 5.1)
  - [The Surprising Effectiveness of Test-Time Training for Few-Shot Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/akyurek25a/akyurek25a.pdf)
- **Instruction fine-tuning** (behaviors tasks) — *measured_by*
  > “We utilize the same candidate dataset, comprising FLAN V2 (Longpre et al., 2023), COT (Wei et al., 2022), DOLLY (Conover et al., 2023) and OPEN ASSISTANT 1 (K¨opf et al., 2024), with MMLU ... and BBH ... serving as the target tasks for evaluation.”
  - [TAROT: Targeted Data Selection via Optimal Transport](https://raw.githubusercontent.com/mlresearch/v267/main/assets/feng25l/feng25l.pdf)
- **Editing locality** (constructs) — *measured_by*
  > For KE, we also need to consider locality, which ensures edits do not affect unrelated knowledge and abilities. To assess this, we evaluate the model on general benchmarks, including CommonsenseQA (Talmor et al., 2019), BigBench-Hard (Suzgun et al., 2023), MMLU (Hendrycks et al., 2021), and GSM8k (Cobbe et al., 2021) (Section 4.1).
  - [CaKE: Circuit-aware Editing Enables Generalizable Knowledge Learners](https://aclanthology.org/2025.emnlp-main.572.pdf)

### Associated with
- **Open LLM Leaderboard** (measurements)
  > Table 2: Evaluation results on various tasks from the Huggingface Open Leaderboard v1 and v2. ... MMLU-PRO, BBH, MUSR, MATH, GSM8K, ARC
  - [On a Connection Between Imitation Learning and RLHF](https://proceedings.iclr.cc/paper_files/paper/2025/file/acf4a08f67724e9d2de34099f57a9c25-Paper-Conference.pdf)
- **lm-evaluation-harness** (measurements)
  > We use lm-evaluation-harness to report results on ... BigBench-Hard
  - [QERA: an Analytical Framework for Quantization Error Reconstruction](https://proceedings.iclr.cc/paper_files/paper/2025/file/21718991f6acf19a42376b5c7a8668c5-Paper-Conference.pdf)
- **BIG-Bench Logical Deduction** (measurements)
  > We evaluate on tasks selected from BIG-Bench Hard (BBH) [43], a collection of diverse tasks considered to be challenging to LLMs ... the tasks include numerical reasoning, commonsense problem-solving, logical deduction, linguistic manipulation, machine translation, and tabular reasoning, among others. (Section 3.1)
  - [Teach Better or Show Smarter? On Instructions and Exemplars in Automatic Prompt Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/6b031defd145b02bed031093d8797bb3-Paper-Conference.pdf)
- **LiveBench** (measurements)
  > LiveBench... contains harder, contamination-limited versions of tasks from previous benchmarks such as Big-Bench Hard, AMPS, and IFEval.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
