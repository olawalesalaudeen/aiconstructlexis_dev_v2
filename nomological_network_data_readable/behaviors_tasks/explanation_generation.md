# Explanation generation
**Type:** Behavior  
**Referenced in:** 114 papers  
**Also known as:** Text explanation, Fallacy explanation, Plausibility explanation, Analogical explanation, Rule violation explanation, Justification generation, Wordplay generation, Justification production, Rationale generation, Reasoning generation, Classification rationale generation, Alert explanation, Anomaly explanation, Anomaly justification, Free-form explanation, Natural language explanation generation, Analysis generation, High-level justification generation, Tailored explanation generation, Label rationalization, Iterative reasoning, Free-text explanation generation, Prediction explanation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is to ask models for natural-language text that justifies an answer, label, or decision. This often appears as a rationale, justification, or reasoning trace, sometimes requested before the final answer and sometimes after prediction; common formulations ask the model to explain why the chosen option is correct and other options are incorrect, to give possible explanations for its prediction, or to explain why something is good or bad for a user. A smaller line of work uses the same behavior for non-decision explanations, such as expanding a surgical keystep, explaining a fallacy or anomaly, clarifying a word sense, or explaining complex subjects by analogy.

**Variants.** Papers also use nearby names such as rationale generation, justification generation, natural language explanation generation, feedback generation, and analysis generation. The settings are diverse, including recommendation, multiple-choice and clinical question answering, rumor and fact-checking, sentiment and narrative revision, and multimodal image, video, audio, and driving tasks. Variants differ in format, from free-form or concise summaries to step-by-step rationales, and some work studies tailored explanations that become more structured, such as bullet points, when the receiving model is known.

**Space of elicitation and scores.** Papers link explanation generation to 3 measurement instruments: Human evaluation, LLM-as-a-judge, and VQA-X. Human evaluation is used to rate explanations or generated rationales with scored judgments and agreement checks, LLM-as-a-judge appears through comparison with GPT-Judge-style evaluation, and VQA-X is used as a benchmark for natural language explanation generation. Together, these instruments cover human scoring, automated judging, and benchmark-based evaluation.

**What it is taken as evidence of.** Papers link explanation generation to 8 constructs, but the dominant themes are Interpretability and explainability, and Reasoning. Several papers claim a causal relationship from explanation generation to Interpretability and explainability, and several claim a causal relationship from explanation generation to Reasoning; one paper also treats explanation and reasoning interchangeably, and another reports explanation generation as related to Interpretability and explainability through readable justifications. Beyond these recurring links, papers report explanation generation as related to Calibration and Knowledge transfer, one paper claims a causal relationship from explanation generation to Knowledge manipulation, Faithfulness is used to evaluate explanation quality, and Memorization and Generation diversity are each claimed to have a causal relationship to explanation generation. Overall, papers do not converge on a single construct it reflects.

## Sources

**[Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf)**
> The observable task of generating natural language text that explains why a particular product is a good or bad match for a user.

**[Procedure-Aware Surgical Video-language Pretraining with Hierarchical Knowledge Augmentation](https://proceedings.neurips.cc/paper_files/paper/2024/file/de0f2a9943b7bd060e5c10c2fb2654f3-Paper-Conference.pdf) (as "Text explanation")**
> Expanding a short surgical keystep into a more descriptive explanation of events, anatomy, and instruments.

**[When LLMs Meet Cunning Texts: A Fallacy Understanding Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cbfbf1a9adbcc29783475d2767f218e8-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Fallacy explanation")**
> The task of generating a natural language explanation that clarifies the fallacy, logical error, or humorous aspect within a given cunning text.

**[Policy Improvement using Language Feedback Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4d4f7cf206bb00f9a38a5b6ae92cf79a-Paper-Conference.pdf) (as "Feedback generation")**
> The generation of explanatory text that not only classifies a behavior but also provides reasons for the classification.

**[NL-Eye: Abductive NLI For Images](https://proceedings.iclr.cc/paper_files/paper/2025/file/d5aed68fde8e934d0ae4aadb57acc6c0-Paper-Conference.pdf) (as "Plausibility explanation")**
> The observable task of generating a free-form text that justifies why a chosen hypothesis image is plausible or more plausible than an alternative.

**[A transfer learning framework for weak to strong generalization](https://proceedings.iclr.cc/paper_files/paper/2025/file/fa47ffc7b2033fd32d8b8734686f6ff4-Paper-Conference.pdf) (as "Analogical explanation")**
> The task of explaining complex subjects by generating responses that use analogies.

**[SPORTU: A Comprehensive Sports Understanding Benchmark for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/49c1879ae366644ce2c17fb39ddea982-Paper-Conference.pdf) (as "Rule violation explanation")**
> The task of generating a textual explanation for why a specific action in a video constitutes a rule violation.

**[A Reasoning-Based Approach to Cryptic Crossword Clue Solving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/andrews25a/andrews25a.pdf) (as "Wordplay generation")**
> The task of creating natural language explanations (wordplay) that justify how a candidate answer can be derived from a cryptic clue.

**[DEFAME: Dynamic Evidence-based FAct-checking with Multimodal Experts](https://raw.githubusercontent.com/mlresearch/v267/main/assets/braun25b/braun25b.pdf) (as "Justification generation")**
> Producing a concise, readable summary that explains the reasoning and critical evidence behind a verdict.

**[The Psychology of Falsehood: A Human-Centric Survey of Misinformation Detection](https://aclanthology.org/2025.emnlp-main.428.pdf) (as "Justification production")**
> The task of generating explanations or justifications for a veracity prediction, often by summarizing or structuring evidence.

**[Two Heads Are Better Than One: Dual-Model Verbal Reflection at Inference-Time](https://aclanthology.org/2025.emnlp-main.155.pdf) (as "Rationale generation")**
> Producing free-form explanations or scoring rationales alongside an assessment decision.

**[Identification of Multiple Logical Interpretations in Counter-Arguments](https://aclanthology.org/2025.emnlp-main.326.pdf) (as "Reasoning generation")**
> The model's observable behavior of producing natural language justifications for its answers to predicate questions, intended to reflect its internal logical analysis.

**[RD-MCSA: A Multi-Class Sentiment Analysis Approach Integrating In-Context Classification Rationales and Demonstrations](https://aclanthology.org/2025.emnlp-main.1100.pdf) (as "Classification rationale generation")**
> Producing detailed, linguistically grounded descriptions of sentiment labels by analyzing representative examples, covering lexical patterns, semantic-pragmatic features, and domain associations.

**[Primus: A Pioneering Collection of Open-Source Datasets for Cybersecurity LLM Training](https://aclanthology.org/2025.emnlp-main.527.pdf) (as "Alert explanation")**
> Explaining detected security alerts in response to an instruction.

**[CAVE : Detecting and Explaining Commonsense Anomalies in Visual Environments](https://aclanthology.org/2025.emnlp-main.1379.pdf) (as "Anomaly explanation")**
> Providing a rationale for why a described situation is considered anomalous, based on underlying commonsense knowledge.

**[CAVE : Detecting and Explaining Commonsense Anomalies in Visual Environments](https://aclanthology.org/2025.emnlp-main.1379.pdf) (as "Anomaly justification")**
> Generating a plausible sequence of events or circumstances that could have led to the observed anomalous situation.

**[Do Large Language Models Understand Word Senses?](https://aclanthology.org/2025.emnlp-main.1720.pdf) (as "Free-form explanation")**
> The task of generating an unconstrained, natural language explanation of a target word's meaning in a given context.

**[Superlatives in Context: Modeling the Implicit Semantics of Superlatives](https://aclanthology.org/2025.naacl-long.160.pdf) (as "Natural language explanation generation")**
> Producing a fluent, natural language summary of SQL execution results to enhance user understanding.

**[RocketEval: Efficient automated LLM evaluation via grading checklist](https://proceedings.iclr.cc/paper_files/paper/2025/file/937defc32e8ad2daba66a0e434177ae9-Paper-Conference.pdf) (as "Analysis generation")**
> The observable act of producing a textual explanation or rationale before providing a final score or judgment.

**[SafeAuto: Knowledge-Enhanced Safe Autonomous Driving with Multimodal Foundation Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cm/zhang25cm.pdf) (as "High-level justification generation")**
> Generating a textual explanation for why a particular driving action was chosen.

**[Agent-to-Agent Theory of Mind: Testing Interlocutor Awareness among Large Language Models](https://aclanthology.org/2025.emnlp-main.1471.pdf) (as "Tailored explanation generation")**
> Producing structured, adapted explanations (e.g., using bullet points or simplified logic) when the identity of the receiving model is known, especially for weaker solvers.

**[Video-STaR: Self-Training Enables Video Instruction Tuning with Any Supervision](https://proceedings.iclr.cc/paper_files/paper/2025/file/e789cfc9389048df4a0a44d4086e0dc2-Paper-Conference.pdf) (as "Label rationalization")**
> The process where a model is given a video, a question, and the correct label, and is prompted to generate a step-by-step explanation for how to arrive at that label.

**[T-MAD: Target-driven Multimodal Alignment for Stance Detection](https://aclanthology.org/2025.emnlp-main.30.pdf) (as "Iterative reasoning")**
> A cognitive-like process of progressively refining an internal representation or prediction over multiple steps to capture more nuanced semantic details and cross-modal relationships.

**[A Necessary Step toward Faithfulness: Measuring and Improving Consistency in Free-Text Explanations](https://aclanthology.org/2025.emnlp-main.797.pdf) (as "Free-text explanation generation")**
> The observable act of a model producing a natural language text that aims to justify or explain a prior prediction.

**[Listen, Think, and Understand](https://proceedings.iclr.cc/paper_files/paper/2024/file/510d0935b543a29d686f93fa52d1c288-Paper-Conference.pdf) (as "Prediction explanation")**
> Providing a justification for a model's output by referencing acoustic features or contextual cues present in the audio.

## Relationships

### Explanation generation →
- **Interpretability and explainability** (constructs) — *causes*
  > ...offering interpretable answers, as LLMs can generate language-based explanations for the decisions. (Abstract)
  - [SocialGPT: Prompting LLMs for Social Relation Reasoning via Greedy Segment Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/047682108c3b053c61ad2da5a6057b4e-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > Large language models (LLMs) can enhance multi-step reasoning abilities by generating intermediate reasoning steps (i.e., rationale) before arriving at an answer (Wei et al., 2022). (Section 1)
  - [Self-Training Meets Consistency: Improving LLMs' Reasoning with Consistency-Driven Rationale Evaluation](https://aclanthology.org/2025.naacl-long.528.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > produces more explanations matching golden explanations but also generates redundant QA pairs, potentially leading to hallucination issues
  - [MEQA: A Benchmark for Multi-hop Event-centric Question Answering with Explanations](https://proceedings.neurips.cc/paper_files/paper/2024/file/e560a0b22e4432003d0dba63ff8dc457-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > For the human evaluation of Task 3, we mainly want to verify the effectiveness of the automatic GPT-4 score we use, therefore, we hire 3 evaluation annotators to rate LLMs’ explanations, with scores ranging from {1, 2, 3, 4, 5}. (Section 2.3)
  - [When LLMs Meet Cunning Texts: A Fallacy Understanding Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cbfbf1a9adbcc29783475d2767f218e8-Paper-Datasets_and_Benchmarks_Track.pdf)
- **VQA-X** (measurements) — *measured_by*
  > Our Rapper achieves new state-of-the-art performance for both VQA-X (Park et al., 2018) and e-SNLI-VE (Kayser et al., 2021) on NLE generation. (Section 1)
  - [RAPPER: Reinforced Rationale-Prompted Paradigm for Natural Language Explanation in Visual Question Answering](https://proceedings.iclr.cc/paper_files/paper/2024/file/b364c8cbb3f229f40d5873e877391bd2-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *correlates*
  > models that exhibit superior performance in the Answer Selection task tend to generate more plausible explanations. (Section 3.2)
  - [When LLMs Meet Cunning Texts: A Fallacy Understanding Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cbfbf1a9adbcc29783475d2767f218e8-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Evaluation** (behaviors tasks) — *causes*
  > Based on its own explanations, the model is asked to give the candidate patch a score of 1 to 10.
  - [Diversity Empowers Intelligence: Integrating Expertise of Software Engineering Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/d7b50b8ac2c781a12f26155f48310d8d-Paper-Conference.pdf)
- **Knowledge manipulation** (constructs) — *causes*
  > The key idea of KG-SFT is to generate high-quality explanations for each Q&A pair via a structured knowledge graph to enhance the knowledge comprehension and manipulation of LLMs.
  - [Knowledge Graph Finetuning Enhances Knowledge Manipulation in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e44337573fcac83f219c8effa4ebf90d-Paper-Conference.pdf)

### Associated with
- **Label prediction** (behaviors tasks)
  > Such domain insensitivity compromises their effectiveness, especially when balancing the dual demands of accurate label prediction and faithful rationale generation, which remains a challenge (Radhakrishnan et al., 2023). (Section 1).
  - [Drift: Enhancing LLM Faithfulness in Rationale Generation via Dual-Reward Probabilistic Inference](https://aclanthology.org/2025.acl-long.340.pdf)
- **Chain of thought** (behaviors tasks)
  > Zelikman et al. (2022) introduced the the Self-Taught Reasoners method, used rationalization to generate chain-of-thought (CoT) reasoning (Sec. 5.2).
  - [Video-STaR: Self-Training Enables Video Instruction Tuning with Any Supervision](https://proceedings.iclr.cc/paper_files/paper/2025/file/e789cfc9389048df4a0a44d4086e0dc2-Paper-Conference.pdf)
- **Tool use** (behaviors tasks)
  > our proposed Tool-integrated Reasoning format interleaves rationales with program-based tool use. (Figure 2)
  - [ToRA: A Tool-Integrated Reasoning Agent for Mathematical Problem Solving](https://proceedings.iclr.cc/paper_files/paper/2024/file/d3cf1559a8795eb1ed2b3ad52409ac7d-Paper-Conference.pdf)
- **Calibration** (constructs)
  > We observe that RG leads to more conservative confidence estimates and lower expected calibration error (2.1 with RG vs. 2.9 without RG), which indicate that it enables more accurate identification of knowledge gaps via reasoning (Section 5.2).
  - [MediQ: Question-Asking LLMs and a Benchmark for Reliable Interactive Clinical Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/32b80425554e081204e5988ab1c97e9a-Paper-Conference.pdf)
- **Self-consistency** (measurements)
  > “we evaluate the self-consistency of VLM decoders in both post-hoc and CoT explanation settings”
  - [Do Vision & Language Decoders use Images and Text equally? How Self-consistent are their Explanations?](https://proceedings.iclr.cc/paper_files/paper/2025/file/37294f033582ac0064bf90fa557c2573-Paper-Conference.pdf)
- **Faithfulness** (constructs)
  > We evaluate the quality of our natural language explanations using two widely recognized metrics in explainable AI: faithfulness and simulatability.
  - [Explaining Differences Between Model Pairs in Natural Language through Sample Learning](https://aclanthology.org/2025.emnlp-main.1462.pdf)
