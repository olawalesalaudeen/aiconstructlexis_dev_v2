# Chain-of-thought prompting
**Type:** Measurement  
**Referenced in:** 60 papers  
**Also known as:** Chain of Thought prompting, Chain-of-Thought prompting, Vanilla CoT prompting, Chain of Thought, CoT prompting, CoT prompt, Zero-shot Chain-of-Thought, Zero-shot CoT, Zero-shot COT, CoT Prompting, Chain-of-Thought, Chain-of-thought, Zero-shot-CoT prompting, Few-shot CoT, Zero-shot-CoT  

## State of the Field

Across the surveyed literature, Chain-of-thought (CoT) prompting is consistently described as an evaluation procedure or prompting method designed to elicit intermediate, step-by-step reasoning from a model before it produces a final answer. The prevailing usage of this technique is to assess or enhance the reasoning abilities of large language models, and it is explicitly used to measure constructs such as `Chain-of-thought reasoning` and `Natural language understanding`, as well as behaviors like `Emotion analysis`. The method is operationalized in several common forms, most frequently as `zero-shot` CoT, which provides no examples and often uses the instruction “Let’s think step-by-step,” and `few-shot` CoT, which includes in-context examples of reasoning. It is applied to a wide variety of tasks, from question answering and code generation to anomaly detection and grammatical error correction. While its primary function is to scaffold a model's own problem-solving, one paper notes that for certain tasks like decision-making, there is "no standard CoT pipeline," indicating some flexibility in its application. A less common framing treats it as a "judging procedure" (`LLM-CoT`) for assessing paraphrase quality. In many studies, CoT prompting serves as a baseline and is directly compared with "direct prompting" to evaluate performance gains on reasoning-heavy tasks.

## Sources

**[Mixture-of-Experts Meets Instruction Tuning: A Winning Combination for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/5222867be1bde4fb2d8ba018c03b3be8-Paper-Conference.pdf)**
> An evaluation procedure where the model is prompted to generate intermediate reasoning steps before providing a final answer, used to assess reasoning abilities.

**[Towards Knowledge Checking in Retrieval-augmented Generation: A Representation Perspective](https://aclanthology.org/2025.naacl-long.151.pdf) (as "Chain-of-Thought prompting")**
> A reasoning-enhancing prompting method where the LLM is asked to generate intermediate reasoning steps before answering, used as a baseline for knowledge checking tasks.

**[Are We Done with MMLU?](https://aclanthology.org/2025.naacl-long.262.pdf) (as "Chain of Thought prompting")**
> Evaluation method that prompts models to generate reasoning steps before classifying whether a question contains an error.

**[Thinking Out Loud: Do Reasoning Models Know When They're Right?](https://aclanthology.org/2025.emnlp-main.73.pdf) (as "Vanilla CoT prompting")**
> A prompting strategy that incorporates a single chain-of-thought component to elicit a step-by-step reasoning process from the model before it provides an answer.

**[BeSimulator: A Large Language Model Powered Text-based Behavior Simulator](https://aclanthology.org/2025.emnlp-main.237.pdf) (as "Chain of Thought")**
> A prompting method that instructs LLMs to generate intermediate reasoning steps to analyze behavior planning logic and evaluate its effectiveness.

**[How Do Large Vision-Language Models See Text in Image? Unveiling the Distinctive Role of OCR Heads](https://aclanthology.org/2025.emnlp-main.1032.pdf) (as "CoT prompting")**
> A reasoning evaluation method where models generate intermediate steps before producing a final answer, used to assess the role of OCR and retrieval heads in multimodal reasoning.

**[Correct-Detect: Balancing Performance and Ambiguity Through the Lens of Coreference Resolution in LLMs](https://aclanthology.org/2025.emnlp-main.1527.pdf) (as "CoT prompt")**
> A chain-of-thought prompting procedure that instructs the model to reason step-by-step before answering the coreference question.

**[Are Stereotypes Leading LLMs' Zero-Shot Stance Detection ?](https://aclanthology.org/2025.emnlp-main.1605.pdf) (as "Zero-shot Chain-of-Thought")**
> A prompting method for eliciting stance detection, mentioned as an alternative to the Context Analyze method.

**[Mutual Reasoning Makes Smaller LLMs Stronger Problem-Solver](https://proceedings.iclr.cc/paper_files/paper/2025/file/35514d533cdc278a7780daf0dbe7d0b7-Paper-Conference.pdf) (as "Zero-shot CoT")**
> An evaluation procedure where a model is prompted to generate a step-by-step chain of thought before its final answer, without being provided any examples in the prompt.

**[ReGenesis: LLMs can Grow into Reasoning Generalists via Self-Improvement](https://proceedings.iclr.cc/paper_files/paper/2025/file/9c77f2ce42151b2c2e26d2cf47f99564-Paper-Conference.pdf) (as "CoT Prompting")**
> An evaluation procedure where a model is prompted to generate a series of intermediate reasoning steps before providing a final answer to a problem.

**[Prompting Fairness: Integrating Causality to Debias Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/9f26a2d143a227376dff99a279f93f99-Paper-Conference.pdf) (as "Zero-shot COT")**
> A prompting procedure that asks the model to think step by step before answering, used here as a bias-mitigation evaluation baseline.

**[DeLLMa: Decision Making Under Uncertainty with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6cd3ac24cdb789beeaa9f7145670fcae-Paper-Conference.pdf) (as "Chain-of-Thought")**
> A prompting-based multi-step reasoning procedure that asks for unknown factors, their likelihood, and then a final decision.

**[Execution-guided within-prompt search for programming-by-example](https://proceedings.iclr.cc/paper_files/paper/2025/file/98e967164ae2f6811b975d686dece3eb-Paper-Conference.pdf) (as "Chain-of-thought")**
> An evaluation procedure used as a baseline where the model is prompted to first explain its reasoning process in natural language before generating the final code.

**[ActionReasoningBench: Reasoning about Actions with and without Ramification Constraints](https://proceedings.iclr.cc/paper_files/paper/2025/file/cf42f133f355e0e07a8957b508b26a1b-Paper-Conference.pdf) (as "Zero-shot-CoT prompting")**
> An evaluation protocol where the model is prompted to generate a chain of thought to reason through a problem without being provided with any examples in the prompt.

**[Mutual Reasoning Makes Smaller LLMs Stronger Problem-Solver](https://proceedings.iclr.cc/paper_files/paper/2025/file/35514d533cdc278a7780daf0dbe7d0b7-Paper-Conference.pdf) (as "Few-shot CoT")**
> An evaluation procedure where a model is prompted to generate a step-by-step chain of thought, with a few examples of similar problems with their reasoning steps provided in the prompt.

**[Catch Your Emotion: Sharpening Emotion Perception in Multimodal Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/fang25h/fang25h.pdf) (as "Zero-shot-CoT")**
> Zero-shot evaluation with chain-of-thought prompting, using 'Let’s think step by step' to elicit reasoning before answering.

## Relationships

### → Chain-of-thought prompting
- **Chain-of-thought reasoning** (constructs) — *measured_by*
  > “CoT prompting employs 2-shot examples to instruct the model to solve questions step by step.”
  - [Large Language Models Meet Symbolic Provers for Logical Reasoning Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/862819c227b16f9af64dd6ad6cfdf275-Paper-Conference.pdf)
- **Error detection** (behaviors tasks) — *measured_by*
  > "We encourage the model to generate reasoning steps before producing the final answer"
  - [Are We Done with MMLU?](https://aclanthology.org/2025.naacl-long.262.pdf)
- **Emotion analysis** (behaviors tasks) — *measured_by*
  > "We conduct comparisons on multiple emotion datasets with MLLMs Zero-shot, Zero-shot-CoT (Kojima et al., 2022) and sparseVLM (Zhang et al., 2024c)."
  - [Catch Your Emotion: Sharpening Emotion Perception in Multimodal Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/fang25h/fang25h.pdf)
