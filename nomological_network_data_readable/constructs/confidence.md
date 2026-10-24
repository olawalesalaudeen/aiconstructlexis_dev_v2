# Confidence
**Type:** Construct  
**Referenced in:** 27 papers  
**Also known as:** Model confidence, Prediction confidence  

## State of the Field

**Definition agreement:** Consensus. Most papers define confidence as the model's own certainty about a prediction, judgment, or generated response, with differences mainly in how that certainty is operationalized, such as token probabilities, output consistency, internal representations, or perplexity-based proxies. A few papers narrow the setting to preference alignment, causal relations, or navigation instructions, but they still refer to the same core phenomenon of model certainty rather than a different construct.

**Space of definitions.** Across papers, the prevailing usage treats confidence as the model's own certainty about an answer, prediction, judgment, or generated response. Most definitions keep that broad framing while varying the target: certainty about providing a correct answer, about a generated instruction, about a reasoning trajectory, or about a correct causal relation, sometimes with decision uses such as whether to answer, ask for more information, or trust a judgment. A smaller line defines confidence against a different reference standard, namely the model's self-assessed likelihood that its judgment will align with human preference, as in Trust or Escalate: LLM Judges with Provable Guarantees for Human Agreement. Only one definition makes the proxy itself central, defining prediction confidence by variance in perplexity across choices.

**Space of facets.** Papers use the labels confidence, model confidence, and prediction confidence for overlapping notions of model certainty. The main axes of variation are the reference target, such as correctness versus expected human agreement, and whether the term denotes internal certainty or a certainty proxy. Several definitions fold the proxy into the construct itself, including repeated affirmation of a correct causal relation, token probabilities over generated tokens, output stability and embedding dynamics, or variance in perplexity.

**Space of measurement.** Operationally, papers link confidence to 1 measurement instrument and 5 behavioral indicators, with no linked constructs. The only named instrument is WikiText, used in one paper to assess prediction confidence. More often, confidence is measured through behavioral indicators and observable proxies: abstention modules that evaluate confidence before deciding whether to answer or ask questions, confidence expression in the form of verbalized confidence, and self-evaluation using a score plus the probability of the response token; other papers quantify it through token-level probabilities, reduced token distribution entropy, output stability or embedding dynamics, the proportion of generations affirming a correct causal relation, or variance in perplexity across choices. In MediQ: Question-Asking LLMs and a Benchmark for Reliable Interactive Clinical Reasoning, the abstention module explicitly evaluates the system's confidence level before a decision.

**Links.** Beyond measurement links, papers record only related links and no causal or correlational claims. Confidence is related to self-reflection in work that prompts a confidence label alongside a prediction, and one paper relates it to hallucination by describing nonfactual responses with unwarranted confidence. Papers also record that confidence is measured by abstention, confidence expression, WikiText, and self-evaluation; one self-evaluation paper records the link in both directions.

## Sources

**[MediQ: Question-Asking LLMs and a Benchmark for Reliable Interactive Clinical Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/32b80425554e081204e5988ab1c97e9a-Paper-Conference.pdf)**
> The model's internal assessment of its certainty in providing a correct answer, used to decide whether to answer or seek more information.

**[Hallucination Detox: Sensitivity Dropout (SenD) for Large Language Model Training](https://aclanthology.org/2025.acl-long.276.pdf) (as "Model confidence")**
> The degree to which a model's internal representations reflect certainty in its predictions, inferred from stability of outputs and embedding dynamics.

**[Streamlining Redundant Layers to Compress Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4b00a351b41358965613c118e87dc28c-Paper-Conference.pdf) (as "Prediction confidence")**
> The degree to which a model is certain about its predictions, operationally measured by the variance in perplexity scores across different choices for a given question.

## Relationships

### Confidence →
- **WikiText** (measurements) — *measured_by*
  > "WikiText (Merity et al., 2022) to assess the model’s prediction confidence" (Section 5.1, Datasets)
  - [SageAttention: Accurate 8-Bit Attention for Plug-and-play Inference Acceleration](https://proceedings.iclr.cc/paper_files/paper/2025/file/b286c344d38e10d2466c0514b78e2f36-Paper-Conference.pdf)
- **Verbalized confidence** (measurements) — *measured_by*
  > We first consider two types of existing confidence measure—... (2) verbalized confidence
  - [Trust or Escalate: LLM Judges with Provable Guarantees for Human Agreement](https://proceedings.iclr.cc/paper_files/paper/2025/file/08dabd5345b37fffcbe335bd578b15a0-Paper-Conference.pdf)

### Associated with
- **Hallucination** (behaviors tasks)
  > generating nonfactual responses with unwarranted confidence. (Section 1)
  - [HaDeMiF: Hallucination Detection and Mitigation in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c98987c5ec4f30920d7190dc699e3daf-Paper-Conference.pdf)
- **Self-consistency** (measurements)
  > Intuitively, the consistency of an answer is a reflection of the model confidence... (Section 6)
  - [Self-Consistency Preference Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/prasad25a/prasad25a.pdf)
- **Abstention** (behaviors tasks)
  > The goal of the Abstention Module is to evaluate the confidence level of the Expert system
  - [MediQ: Question-Asking LLMs and a Benchmark for Reliable Interactive Clinical Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/32b80425554e081204e5988ab1c97e9a-Paper-Conference.pdf)
- **Self-evaluation** (behaviors tasks)
  > We define confidence by utilizing the score and the probability of the token responded by the LLM to self-evaluate.
  - [Enhancing Graph Of Thought: Enhancing Prompts with LLM Rationales and Dynamic Temperature Control](https://proceedings.iclr.cc/paper_files/paper/2025/file/c87245c9e8882bc1b6d4ec343d430e71-Paper-Conference.pdf)
