# BIG-bench
**Type:** Measurement  
**Referenced in:** 42 papers  
**Also known as:** BIG-BENCH, BIG-Bench, Big-Bench, Big-bench, BigBench  

## State of the Field

**What it is.** Across papers, the dominant framing is of BIG-bench as a large, collaboratively built benchmark suite of over 200, often specifically 204, diverse tasks for probing the capabilities and limitations of language models. Papers usually describe broad coverage, often emphasizing reasoning, comprehension, traditional NLP tasks, and novel problems. A recurring variation is that authors work with named subsets or slices, including BIG-BENCH LITE, BBII, UICL categories, Date Understanding, and a verb tense subset, rather than treating it as a single fixed task set.

**What it is claimed to measure.** Papers use BIG-bench to measure 8 constructs and 4 behavioral indicators, so the reported measurement claims are spread across many targets rather than centered on one construct. At the construct level, papers report it as measuring Calibration, Emergent abilities, General ability, Logical reasoning, and Mathematical reasoning, and 3 other constructs. At the behavioral level, papers use tasks from BIG-bench to measure Word sorting, Date inference, and Table question answering, while Object counting is only reported as related to BIG-bench rather than measured by it.

**Space of uses.** In use, papers often position BIG-bench as a broad capability benchmark alongside MMLU, and a smaller line of work uses it as both a seed dataset and an evaluation target. Many studies evaluate selected portions rather than the full suite, especially BIG-BENCH LITE and BBII, or treat Date Understanding as a standalone testbed drawn from BIG-bench. It is linked to 1 other measurement instrument, Date Understanding.

## Sources

**[Large Language Models as Analogical Reasoners](https://proceedings.iclr.cc/paper_files/paper/2024/file/4990dad2c1696224de42573d0222554a-Paper-Conference.pdf) (as "BIG-Bench")**
> Comprehensive evaluation suite containing diverse reasoning tasks such as logical deduction, temporal sequences, and formal fallacies, designed to test a wide range of cognitive abilities in language models.

**[Predicting Emergent Abilities with Infinite Resolution Evaluation](https://proceedings.iclr.cc/paper_files/paper/2024/file/4e6d14709eae0cbc49a1d19d87fb8b21-Paper-Conference.pdf) (as "BigBench")**
> A diverse evaluation suite for large language models that includes a wide range of challenging tasks, used here to study in-context learning and emergent abilities.

**[Evaluating the Zero-shot Robustness of Instruction-tuned Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d3221cdb27e49d9c1cd35ad254feccfe-Paper-Conference.pdf) (as "BIG-BENCH")**
> Beyond the Imitation Game benchmark, a collaboratively built benchmark of 204 diverse tasks from various domains; the paper uses the BIG-BENCH LITE subset focusing on QA, classification, and translation tasks.

**[Large Language Models as Tool Makers](https://proceedings.iclr.cc/paper_files/paper/2024/file/ed91353f700d113e5d848c7e04a858b0-Paper-Conference.pdf) (as "Big-Bench")**
> A benchmark suite containing a wide range of challenging tasks designed to measure the capabilities of large language models, including reasoning and comprehension.

**[PiCO: Peer Review in LLMs based on Consistency Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/39e9c5913c970e3e49c2df629daff636-Paper-Conference.pdf)**
> Beyond the Imitation Game benchmark (BIG-bench) is a collaborative benchmark comprising 204 diverse tasks designed to probe the capabilities and limitations of large language models.

**[Is Your Model Really A Good Math Reasoner? Evaluating Mathematical Reasoning with Checklist](https://proceedings.iclr.cc/paper_files/paper/2025/file/54d2d38a56a74387d5916ee40e462295-Paper-Conference.pdf) (as "Big-bench")**
> A large, collaborative benchmark suite for language models, from which the 'date understanding' task is used as a testbed for commonsense reasoning.

## Relationships

### → BIG-bench
- **Word sorting** (behaviors tasks) — *measured_by*
  > We further evaluate on various reasoning tasks in BIG-Bench (Srivastava et al., 2022; Suzgun et al., 2022): word sorting, logical deduction five objects, temporal sequences, reasoning about colored objects, and formal fallacies. (Section 5.1)
  - [Large Language Models as Analogical Reasoners](https://proceedings.iclr.cc/paper_files/paper/2024/file/4990dad2c1696224de42573d0222554a-Paper-Conference.pdf)
- **Logical reasoning** (constructs) — *measured_by*
  > "We further evaluate on various reasoning tasks in BIG-Bench (Srivastava et al., 2022; Suzgun et al., 2022): word sorting, logical deduction five objects, temporal sequences, reasoning about colored objects, and formal fallacies."
  - [Large Language Models as Analogical Reasoners](https://proceedings.iclr.cc/paper_files/paper/2024/file/4990dad2c1696224de42573d0222554a-Paper-Conference.pdf)
- **Temporal reasoning** (constructs) — *measured_by*
  > "We further evaluate on various reasoning tasks in BIG-Bench (Srivastava et al., 2022; Suzgun et al., 2022): word sorting, logical deduction five objects, temporal sequences, reasoning about colored objects, and formal fallacies."
  - [Large Language Models as Analogical Reasoners](https://proceedings.iclr.cc/paper_files/paper/2024/file/4990dad2c1696224de42573d0222554a-Paper-Conference.pdf)
- **Social bias** (constructs) — *measured_by*
  > Probability-based bias evaluations such as CrowS-Pairs [22] and tasks in the BIG-bench benchmarking suite [48] compare the probabilities of stereotype-related tokens conditional on the presence of identity-related tokens. (Section 2.2)
  - [Cross-Care: Assessing the Healthcare Implications of Pre-training Data on Language Model Bias](https://proceedings.neurips.cc/paper_files/paper/2024/file/2a617efee5815f12b405d40569dea0a5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Table question answering** (behaviors tasks) — *measured_by*
  > Three reasoning tasks directly obtained from the BIG-Bench suite [50]: ... Penguins—where the task is to answer questions about penguins' attributes based on a given table
  - [Buffer of Thoughts: Thought-Augmented Reasoning with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cde328b7bf6358f5ebb91fe9c539745e-Paper-Conference.pdf)
- **Stability** (constructs) — *measured_by*
  > "Extensive experiments on updated MMLU and BIG-Bench demonstrate the stability of the proposed strategies"
  - [Automating Dataset Updates Towards Reliable and Timely Evaluation of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/1e89c12621c0315373f20f0aeabe5dbe-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Calibration** (constructs) — *measured_by*
  > Table 2 shows the performance of the posthoc calibrators on MMLU and BigBench datasets.
  - [QA-Calibration of Language Model Confidence Scores](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd96cb9a239c37b39dbf34f3f5a4c56f-Paper-Conference.pdf)
- **Emergent abilities** (constructs) — *measured_by*
  > Fig. 4 shows U-shaped and inverted-U scaling on 6 datasets exhibiting emergent abilities... Except for MMLU, the other 5 tasks are from Big-Bench.
  - [U-shaped and Inverted-U Scaling behind Emergent Abilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f696200311b445af686c3ebd87ade1d7-Paper-Conference.pdf)
- **Multi-digit multiplication** (behaviors tasks) — *measured_by*
  > "we first consider the multi-digit multiplication task from the BIG-bench benchmark"
  - [Seq-VCR: Preventing  Collapse in Intermediate Transformer Representations for Enhanced Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/b577c062bd4f894b7e05fab6440373ed-Paper-Conference.pdf)

### Associated with
- **Object counting** (behaviors tasks)
  > Adapted from BIG-bench (Bench authors, 2023), this task tests object classification and counting. (Section 4.3)
  - [A Causal Lens for Evaluating Faithfulness Metrics](https://aclanthology.org/2025.emnlp-main.1496.pdf)
- **Date Understanding** (measurements)
  > "We choose the date understanding task in Big-bench (bench authors, 2023) as testbed since it is wildly used to measure commonsense reasoning ability"
  - [Is Your Model Really A Good Math Reasoner? Evaluating Mathematical Reasoning with Checklist](https://proceedings.iclr.cc/paper_files/paper/2025/file/54d2d38a56a74387d5916ee40e462295-Paper-Conference.pdf)
