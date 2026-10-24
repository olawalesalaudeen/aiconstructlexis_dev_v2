# Confidence estimation
**Type:** Behavior  
**Referenced in:** 49 papers  
**Also known as:** Probability estimation, Confidence Expression, Expressing uncertainty, Confidence score generation, Step correctness prediction, Verbalized confidence, Nuanced uncertainty expression, Linguistic uncertainty expression, Natural language uncertainty expression, Self-knowledge estimation, Uncertainty estimation, Self-evaluation  

## State of the Field

**Space of definitions.** Across the papers, the dominant framing is the assignment of an explicit confidence value, usually a numerical score or probability, to a model output, answer, class, claim, or reasoning step. Most definitions tie that score to correctness or agreement, for example certainty that a judgment matches human preferences, that an answer is factually correct, or that a reasoning step is right; one study describes confidence as an "agreement ratio between the simulations." A smaller line of work uses verbal or linguistic expression instead of only numbers, asking models to state certainty in natural language, hedge with phrases like "I am unsure," or output formats such as "Confidence: 90%." Some papers also treat it as internal self-evaluation, using internal states or signals such as perplexity or token entropy to express confidence without external feedback.

**Variants.** Papers study probability estimation for contextual outcomes, confidence or verbalized confidence at the answer level, uncertainty expression through hedging language, step correctness prediction or self-evaluation for reasoning traces, and self-knowledge estimation for factual correctness. Variants also differ by granularity and setting: token-, sequence-, and claim-level scores, class-wise confidence in vision-language classification, multilingual evergreen question classification, and diagnostic decision scoring from reasoning subgraphs.

**Space of elicitation and scores.** No measurement instrument is linked to it. Even so, papers operationalize it in several ways: prompting for probability scores or class-wise percentages, extracting the probability of a "yes" token when the model verifies its own answer, aggregating token probabilities over a claim span, and using internal signals such as perplexity, token entropy, or internal states for step-rightness classification.

**What it is taken as evidence of.** Papers link it to 8 constructs, with calibration the most recurrent connection. The links are not uniform: some papers treat calibration as related to confidence estimation, while another claims a causal relationship from confidence estimation to calibration; only trustworthiness is explicitly described as being measured by confidence estimation. The remaining links place it in a broader network rather than a single shared measured_by role: confidence estimation is related to overconfidence, knowledge boundary awareness, and reasoning, is reported to correlate with representational stability, and papers claim causal relationships from confidence estimation to robustness and from interpretability and explainability to confidence estimation.

## Sources

**[Trust or Escalate: LLM Judges with Provable Guarantees for Human Agreement](https://proceedings.iclr.cc/paper_files/paper/2025/file/08dabd5345b37fffcbe335bd578b15a0-Paper-Conference.pdf)**
> The model generates a numerical score representing its certainty that its judgment aligns with human preferences.

**[BIRD: A Trustworthy Bayesian Inference Framework for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/19452e14fe6e0a8ac00410f1eebcbded-Paper-Conference.pdf) (as "Probability estimation")**
> The observable act of assigning a numerical probability or confidence score to a potential outcome given a context.

**[CertainlyUncertain: A Benchmark and Metric for Multimodal Epistemic and Aleatoric Awareness](https://proceedings.iclr.cc/paper_files/paper/2025/file/21b5788d81f886ff81671379b4ff9453-Paper-Conference.pdf) (as "Confidence Expression")**
> Providing probability estimates or confidence levels for predictions, often by verifying if a predicted answer is correct via token probability.

**[Forewarned is Forearmed:  Harnessing LLMs for Data Synthesis via Failure-induced Exploration](https://proceedings.iclr.cc/paper_files/paper/2025/file/1cded4f97cf5f01a284c574110b7e3b9-Paper-Conference.pdf) (as "Expressing uncertainty")**
> The observable behavior of a model explicitly stating its lack of confidence or knowledge in its response, such as by outputting phrases like 'I am unsure'.

**[Reflexive Guidance: Improving OoDD in Vision-Language Models via Self-Guided Image-Adaptive Concept Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/f8b78c39a262ea563ee51d2f6dba3b04-Paper-Conference.pdf) (as "Confidence score generation")**
> The action of producing numerical confidence values for each potential class in a classification task, expressed within a natural language response.

**[Large Language Models Have Intrinsic Meta-Cognition, but Need a Good Lens](https://aclanthology.org/2025.emnlp-main.171.pdf) (as "Step correctness prediction")**
> The observable task of assigning a confidence score to each reasoning step indicating whether it is correct or incorrect, based on internal model states.

**[Large Language Models Have Intrinsic Meta-Cognition, but Need a Good Lens](https://aclanthology.org/2025.emnlp-main.171.pdf) (as "Self-evaluation")**
> The observable behavior of an LLM producing internal confidence signals about its own reasoning steps without external feedback.

**[Thinking Out Loud: Do Reasoning Models Know When They're Right?](https://aclanthology.org/2025.emnlp-main.73.pdf) (as "Verbalized confidence")**
> The observable expression of a model's certainty in its answer, typically in the form of a percentage or probability statement.

**[Calibrating Verbal Uncertainty as a Linear Feature to Reduce Hallucinations](https://aclanthology.org/2025.emnlp-main.187.pdf) (as "Nuanced uncertainty expression")**
> The generation of text that qualifies an answer with expressions of doubt or uncertainty, such as "I am not sure but..." or "maybe".

**[MetaFaith: Faithful Natural Language Uncertainty Expression in LLMs](https://aclanthology.org/2025.emnlp-main.1505.pdf) (as "Linguistic uncertainty expression")**
> The observable use of words, phrases, and hedging language to convey a degree of confidence or doubt in a generated response.

**[Will It Still Be True Tomorrow? Multilingual Evergreen Question Classification to Improve Trustworthy QA](https://aclanthology.org/2025.emnlp-main.434.pdf) (as "Self-knowledge estimation")**
> The observable task of assigning a score to a model's own generated answer that reflects the model's confidence in its factual correctness, framed as a binary classification problem.

**[Will It Still Be True Tomorrow? Multilingual Evergreen Question Classification to Improve Trustworthy QA](https://aclanthology.org/2025.emnlp-main.434.pdf) (as "Uncertainty estimation")**
> The model's generation of confidence or uncertainty signals (e.g., perplexity, token entropy) in response to input questions, used to infer implicit awareness of evergreen-ness.

**[Knowledge-Aware Co-Reasoning for Multidisciplinary Collaboration](https://aclanthology.org/2025.emnlp-main.687.pdf) (as "Confidence scoring")**
> Assigning a numerical confidence level to a diagnostic decision based on factual consistency and evidence from a reasoning subgraph.

## Relationships

### Confidence estimation →
- **Calibration** (constructs) — *causes*
  > Bayesian methods, with their inherent ability to estimate uncertainty, serve as potent tools to mitigate overconfidence and enhance calibration. (Section ABSTRACT)
  - [Bayesian Low-rank Adaptation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/07c256a163a7559186ec1c71e95b9ec9-Paper-Conference.pdf)
- **Trustworthiness** (constructs) — *causes*
  > In this work, we introduce model-internal confidence estimators (MICE), which improve the trustworthiness and safety of language models as tool-calling agents. (Section 8)
  - [MICE for CATs: Model-Internal Confidence Estimation for Calibrating Agents with Tools](https://aclanthology.org/2025.naacl-long.615.pdf)
- **Conformal Prediction** (measurements) — *measured_by*
  > "we quantify the uncertainty in the predictions using Conformal Prediction with a dynamic sliding window"
  - [Can Transformers Do Enumerative Geometry?](https://proceedings.iclr.cc/paper_files/paper/2025/file/aee2f03ecb2b2c1ea55a43946b651cfd-Paper-Conference.pdf)
- **Monte Carlo Dropout** (measurements) — *measured_by*
  > "we introduce a unified Uncertainty Estimation (UE) module using multiple Monte Carlo dropout sampling (Gal and Ghahramani, 2016)."
  - [UnCo: Uncertainty-Driven Collaborative Framework of Large and Small Models for Grounded Multimodal NER](https://aclanthology.org/2025.emnlp-main.388.pdf)
- **Representational stability** (constructs) — *correlates*
  > We hypothesize that an LLM’s confidence correlates with the robustness of its internal states; specifically, the final hidden states that lead to the tokens of a high-confidence answer should exhibit greater stability when subjected to targeted perturbations. (Section 3)
  - [Calibrating LLM Confidence by Probing Perturbed Representation Stability](https://aclanthology.org/2025.emnlp-main.530.pdf)

### Associated with
- **Overconfidence** (constructs)
  > The performance of Med-LVLMs in uncertainty estimation is unsatisfactory, revealing a poor understanding of their medical knowledge limits. Additionally, these models tend to exhibit overconfidence, thereby increasing the risk of misdiagnoses. (Sec 1)
  - [CARES: A Comprehensive Benchmark of Trustworthiness in Medical Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fde7f40f8ced5735006810534dc66b33-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Knowledge boundary awareness** (constructs)
  > While assessing capability-aware solvability of LLMs is underexplored, confidence or uncertainty estimation (Geng et al., 2024; Wen et al., 2024) offers a viable alternative.
  - [Position: LLMs Need a Bayesian Meta-Reasoning Framework for More Robust and Generalizable Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yan25g/yan25g.pdf)
- **Reasoning** (constructs)
  > "we propose a set of training-free, graph-based confidence estimation methods tailored to reasoning tasks."
  - [All Roads Lead to Rome: Graph-Based Confidence Estimation for Large Language Model Reasoning](https://aclanthology.org/2025.emnlp-main.1620.pdf)
