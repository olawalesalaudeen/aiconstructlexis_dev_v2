# StrategyQA
**Type:** Measurement  
**Referenced in:** 95 papers  
**Also known as:** STRATEGYQA  

## State of the Field

**What it is.** Across papers, the prevailing framing is a commonsense question-answering benchmark of yes/no or true or false questions that require implicit multi-step or multi-hop reasoning, often by inferring a strategy or decomposing the question. Some authors describe it more specifically as open-domain or fact reasoning; some descriptions also add supporting evidence, explanations, or rationales, and one paper says the dataset provides pieces of evidence from Wikipedia, while another says it involves a curated knowledge base of 10,000 Wikipedia passages. Papers describe different scales as well, mentioning a 687-question test split, 2,780 examples, or 10,824 examples.

**What it is claimed to measure.** Papers use it to measure 9 constructs and 6 behavioral indicators. The dominant claim is that it measures commonsense reasoning, with recurring use for reasoning and factuality; on the behavioral side, papers report it as evaluating question answering and chain of thought. Overall, papers spread its use across many targets rather than tying it to a single outcome.

**Space of uses.** Papers do not link it to any other measurement instrument. Most commonly, they use it as one benchmark within broader evaluation suites, often alongside CommonsenseQA, GSM8K, MuSiQue, QASC, and HotpotQA, and they variously position it as a commonsense reasoning task, a multi-hop question answering benchmark, or a classification-style set for calibration and adversarial attack testing. A smaller line of work also fine-tunes on it or applies chain-of-thought augmentations and 3-shot CoT prompting.

## Sources

**[BadChain: Backdoor Chain-of-Thought Prompting for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/791d3337291b2c574545aeecfa75484c-Paper-Conference.pdf)**
> A benchmark for commonsense question answering used to evaluate commonsense reasoning.

**[Adaptive Chameleon  or Stubborn Sloth: Revealing the Behavior of Large Language Models in Knowledge Conflicts](https://proceedings.iclr.cc/paper_files/paper/2024/file/99261adc8a6356b38bcf999bba9a26dc-Paper-Conference.pdf) (as "STRATEGYQA")**
> An implicit multi-hop question answering benchmark requiring commonsense reasoning and decomposition to answer yes/no questions.

## Relationships

### → StrategyQA
- **Commonsense reasoning** (constructs) — *measured_by*
  > For commonsense reasoning, we consider CSQA for multiple-choice questions (Talmor et al., 2019) and StrategyQA for true or false questions (Geva et al., 2021) (Section 4.1).
  - [BadChain: Backdoor Chain-of-Thought Prompting for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/791d3337291b2c574545aeecfa75484c-Paper-Conference.pdf)
- **Multi-hop reasoning** (constructs) — *measured_by*
  > Multi-Hop Reasoning: We experiment with MuSiQue (Trivedi et al., 2022), a hard multi-hop reasoning dataset created via composable pairs of single-hop questions, and StrategyQA (Geva et al., 2021) with open-domain questions that demand some strategy to solve. (Section 3.1)
  - [Take a Step Back: Evoking Reasoning via Abstraction in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/592da1445a51e54a3987958b5831948f-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > Question Answering For this task, we consider the following datasets: 2WikiMultiHopQA [27], StrategyQA [28], MuSiQue [29], and HotpotQA [30] (Section 4.1).
  - [Information Re-Organization Improves Reasoning in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb1a323fa10d4102ff13422476a744ff-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We use MMLU Hendrycks et al. (2020), BigBench Hard (BBH) Srivastava et al. (2022), and 4 reasoning benchmarks: GSM8K Cobbe et al. (2021), SVAMP Patel et al. (2021), ASDIV Miao et al. (2020), and StrategyQA Geva et al. (2021) (Section 3.1).
  - [Mixture-of-Experts Meets Instruction Tuning: A Winning Combination for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/5222867be1bde4fb2d8ba018c03b3be8-Paper-Conference.pdf)
- **Chain of thought** (behaviors tasks) — *measured_by*
  > "tasks involving chain-of-thought (Wei et al., 2022b) reasoning: StrategyQA (Geva et al., 2021) and GSM8K Cobbe et al. (2021)"
  - [DoLa: Decoding by Contrasting Layers Improves Factuality in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/edc36117f795ca52a0cbf6a7b3882859-Paper-Conference.pdf)
- **Factuality** (constructs) — *measured_by*
  > We evaluated our decoding strategy on StrategyQA and GSM8K, tasks requiring not just factuality but also Chain-of-Thought (CoT) reasoning (Wei et al., 2022b) ability in order to achieve good performance.
  - [DoLa: Decoding by Contrasting Layers Improves Factuality in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/edc36117f795ca52a0cbf6a7b3882859-Paper-Conference.pdf)
- **Multi-hop question answering** (behaviors tasks) — *measured_by*
  > We conduct a comprehensive evaluation across multiple reasoning tasks, including multi-hop QA: StrategyQA (Geva et al., 2021) (Section 1)
  - [Correcting Negative Bias in Large Language Models through Negative Attention Score Alignment](https://aclanthology.org/2025.naacl-long.503.pdf)
- **Calibration** (constructs) — *measured_by*
  > "We evaluate the quality of confidence estimates across five types of reasoning tasks: 1) Commonsense Reasoning on two benchmarks, Sports Understanding (SportUND) ... StrategyQA (Geva et al., 2021)"
  - [Can LLMs Express Their Uncertainty? An Empirical Evaluation of Confidence Elicitation in LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/6733cf15e10e2cd1d59af033c3bb8507-Paper-Conference.pdf)
- **Boolean question answering** (behaviors tasks) — *measured_by*
  > StrategyQA is a yes-no QA dataset (Section 3.1.1)
  - [Correcting Negative Bias in Large Language Models through Negative Attention Score Alignment](https://aclanthology.org/2025.naacl-long.503.pdf)
- **Logical reasoning** (constructs) — *measured_by*
  > And we use StrategyQA [12] for logical reasoning that requires multiple reasoning steps (Section 5.1.1).
  - [Decompose, Analyze and Rethink: Solving Intricate Problems with Human-like Reasoning Cycle](https://proceedings.neurips.cc/paper_files/paper/2024/file/01025a4e79355bb37a10ba39605944b5-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > "For open-ended generation tasks, we adopt TruthfulQA [29] and tasks involving chain-of-thought reasoning [52]: StrategyQA [12] and GSM8K [8]."
  - [SLED: Self Logits Evolution Decoding for Improving Factuality in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0939f13ffce3ff487509d902ddba4571-Paper-Conference.pdf)
- **Adversarial robustness** (constructs) — *measured_by*
  > We conducted our confidence elicitation attacks on Meta-Llama-3-8B-Instruct (Touvron et al., 2023) and Mistral-7B-Instruct-v0.2 (Jiang et al., 2023) while performing classification on two common datasets to evaluate adversarial robustness: SST-2, AG-News and one modern dataset: StrategyQA (Geva et al., 2021). (Section 4)
  - [Confidence Elicitation: A New Attack Vector for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/04bb76a98d9f32226b3beba7bd26a51f-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs) — *measured_by*
  > These datasets test a range of commonsense reasoning skills, with StrategyQA requiring more multi-step reasoning.
  - [RARE: Retrieval-Augmented Reasoning Enhancement for Large Language Models](https://aclanthology.org/2025.acl-long.896.pdf)
- **General reasoning** (constructs) — *measured_by*
  > To demonstrate our method’s generalizability beyond mathematical reasoning, we conduct additional evaluations on the CommonsenseQA and StrategyQA benchmarks, which emphasize general reasoning capabilities.
  - [Enhancing Chain-of-Thought Reasoning via Neuron Activation Differential Analysis](https://aclanthology.org/2025.emnlp-main.817.pdf)
- **Commonsense question answering** (behaviors tasks) — *measured_by*
  > For ReAct, we select a more challenging multi-step commonsense QA dataset StrategyQA which involves a curated knowledge base of 10k passages from Wikipedia5.
  - [AgentPoison: Red-teaming LLM Agents via Poisoning Memory or Knowledge Bases](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb113910e9c3f6242541c1652e30dfd6-Paper-Conference.pdf)
- **Factual reasoning** (constructs) — *measured_by*
  > We conduct experiments across three types of tasks: (1) Factual Reasoning Task. We evaluate our UniCoTT over CREAK (Onoe et al., 2021), StrategyQA (Geva et al., 2021) and CSQA2 (Talmor et al., 2021) datasets (Section 4.1).
  - [UniCoTT: A Unified Framework for Structural Chain-of-Thought Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ca642f8e1174012d67c05c1c9f969644-Paper-Conference.pdf)
