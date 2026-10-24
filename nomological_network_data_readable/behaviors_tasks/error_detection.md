# Error detection
**Type:** Behavior  
**Referenced in:** 25 papers  
**Also known as:** Accounting bug detection, Error awareness, Stepwise error detection, Discrimination, Mistake detection, Error identification  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats error detection as an observable judgment about whether a response, reasoning step, utterance, question, video, or other artifact contains an error. Most definitions cast it as a task, though some describe the same behavior as a model capability to recognize mistakes in responses or reasoning steps. Common success criteria are binary judgments, such as whether errors exist, whether a specified step is correct or incorrect, or whether a question is 'ok' or 'not ok'; a smaller line of work asks for finer outputs, such as identifying an error type, mapping a step to a predefined taxonomy or marking it correct, or assigning sentence-level binary faithfulness labels.

**Variants.** Variants span several domains and names. Papers label it as accounting bug detection in smart contracts, error awareness for natural and AIGC videos, stepwise error detection for checking a specified solution step, and error identification for classifying reasoning steps as mathematically erroneous, logically inconsistent, or accumulation errors. Other formulations target dialogue utterances, chemical molecule descriptions, multiple-choice questions with clarity or answer problems, students' hand-drawn math responses, and sentence-level factual inconsistency in generated text.

**Space of elicitation and scores.** Papers link it to 3 measurement instruments: LexEval, MMLU-Redux, and MOLERR2FIX. In the linked evidence, LexEval situates evaluation in a legal cognitive ability taxonomy that includes Discrimination, MMLU-Redux is described as a benchmark for automatic error detection in NLP datasets, and MOLERR2FIX evaluates detection of chemical errors in molecular descriptions.

**What it is taken as evidence of.** Papers connect error detection to 2 constructs, without converging on a single one. Separate papers claim a causal relationship from Error detection to Error recovery, and report that Error detection is related to Mathematical reasoning. Papers also link it to 4 other behavioral indicators: Backtracking and Self-correction are each claimed to have a causal relationship to Error detection, Error detection is claimed to have a causal relationship to Self-reflection, and it is related to Information retrieval.

## Sources

**[Reflective Multi-Agent Collaboration based on Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fa54b0edce5eef0bb07654e8ee800cb4-Paper-Conference.pdf)**
> The observable process of an agent identifying mistakes or failures in its own or another agent's reasoning or actions.

**[Detecting Bugs with Substantial Monetary Consequences by LLM and Rule-based Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/f1d8400fec75f683c4d823f5836a81bb-Paper-Conference.pdf) (as "Accounting bug detection")**
> Identifying smart-contract statements or code regions that violate domain-specific financial-model constraints.

**[VF-Eval: Evaluating Multimodal LLMs for Generating Feedback on AIGC Videos](https://aclanthology.org/2025.acl-long.1027.pdf) (as "Error awareness")**
> The observable task of identifying the presence of general errors in a given video, typically evaluated with binary (Yes/No) questions.

**[Improving Rationality in the Reasoning Process of Language Models through Self-playing Game](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25bb/wang25bb.pdf) (as "Stepwise error detection")**
> The observable task of examining a specified step within a given solution to a problem and determining whether that step is correct or incorrect.

**[Gaining Wisdom from Setbacks: Aligning Large Language Models via Mistake Analysis](https://proceedings.iclr.cc/paper_files/paper/2024/file/fe24df54d5ccd95cdf830a309f2bf5c0-Paper-Conference.pdf) (as "Discrimination")**
> The latent ability of a model to identify and analyze potential mistakes, errors, or harmful elements within a given response.

**[Exposing the Achilles' Heel: Evaluating LLMs Ability to Handle Mistakes in Mathematical Reasoning](https://aclanthology.org/2025.acl-long.1313.pdf) (as "Mistake detection")**
> The latent ability to identify incorrect or flawed reasoning steps within a chain of thought, even when the final answer may appear plausible.

**[Premise-Augmented Reasoning Chains Improve Error Identification in Math reasoning with LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mukherjee25a/mukherjee25a.pdf) (as "Error identification")**
> The observable classification of reasoning steps as correct, mathematically erroneous, logically inconsistent, or suffering from accumulation errors.

## Relationships

### Error detection →
- **MMLU-Redux** (measurements) — *measured_by*
  > "MMLU-Redux can also be used as a strong benchmark for automatic error detection in NLP datasets"
  - [Are We Done with MMLU?](https://aclanthology.org/2025.naacl-long.262.pdf)
- **Zero-shot prompting** (measurements) — *measured_by*
  > "We provide the model with a simple instruction to classify questions into “ok” or “not ok” without introducing any demonstrations."
  - [Are We Done with MMLU?](https://aclanthology.org/2025.naacl-long.262.pdf)
- **Few-shot prompting** (measurements) — *measured_by*
  > "We provide the model with two examples for each error type to guide its classification decisions."
  - [Are We Done with MMLU?](https://aclanthology.org/2025.naacl-long.262.pdf)
- **Chain-of-thought prompting** (measurements) — *measured_by*
  > "We encourage the model to generate reasoning steps before producing the final answer"
  - [Are We Done with MMLU?](https://aclanthology.org/2025.naacl-long.262.pdf)
- **Self-reflection** (behaviors tasks) — *causes*
  > The results show that CDG training significantly improves error detection in reasoning, particularly on the more challenging MATH500 dataset, enhancing the model’s self-reflection ability. (Section 4.2)
  - [Improving Rationality in the Reasoning Process of Language Models through Self-playing Game](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25bb/wang25bb.pdf)
- **MOLERR2FIX** (measurements) — *measured_by*
  > We propose MOLERR2FIX, the first benchmark explicitly designed to evaluate LLMs’ ability to detect and recover from chemical errors in molecular descriptions. (Section 1)
  - [MolErr2Fix: Benchmarking LLM Trustworthiness in Chemistry via Modular Error Detection, Localization, Explanation, and Correction](https://aclanthology.org/2025.emnlp-main.977.pdf)
- **Self-correction** (behaviors tasks) — *causes*
  > Without accurate error identifications, self-correction becomes more challenging. (Section 1)
  - [SuperCorrect: Advancing Small LLM Reasoning with Thought Template Distillation and Self-Correction](https://proceedings.iclr.cc/paper_files/paper/2025/file/0967d7c8b171dd81b77c43067c02bebf-Paper-Conference.pdf)

### → Error detection
- **Backtracking** (behaviors tasks) — *causes*
  > BacktrackAgent explicitly incorporates a backtracking mechanism to observe the outcomes of action executions, allowing it to detect and recover from error states effectively. (Section 2)
  - [BacktrackAgent: Enhancing GUI Agent with Error Detection and Backtracking Mechanism](https://aclanthology.org/2025.emnlp-main.212.pdf)

### Associated with
- **Mathematical reasoning** (constructs)
  > However, existing evaluations often focus on final accuracy, neglecting the critical aspect of reasoning capabilities. This work addresses that gap by evaluating LLMs’ abilities to detect and correct reasoning mistakes.
  - [Exposing the Achilles' Heel: Evaluating LLMs Ability to Handle Mistakes in Mathematical Reasoning](https://aclanthology.org/2025.acl-long.1313.pdf)
- **Error recovery** (constructs)
  > If both the Verifier and the Judger confirm that ai t is correct, the agent considers it the final action at time-step t and proceeds to time-step t+1. Otherwise, the agent goes to the Reflector for error recovery. (Section 3.2)
  - [BacktrackAgent: Enhancing GUI Agent with Error Detection and Backtracking Mechanism](https://aclanthology.org/2025.emnlp-main.212.pdf)
- **Instruction fine-tuning** (behaviors tasks)
  > We fine-tune Llama3 8B-Instruct model (Dubey et al., 2024) using curated data and evaluate its performance on MMLU-Redux. (Section 4)
  - [Are We Done with MMLU?](https://aclanthology.org/2025.naacl-long.262.pdf)
