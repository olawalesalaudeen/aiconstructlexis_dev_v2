# Confidence expression
**Type:** Behavior  
**Referenced in:** 14 papers  
**Also known as:** Expressing uncertainty, Confidence Expression, Confidence score generation, Verbalized confidence, Nuanced uncertainty expression, Linguistic uncertainty expression, Natural language uncertainty expression, Uncertainty expression  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage treats this behavior as a model making its certainty or uncertainty visible in the answer itself. Most papers describe explicit uncertainty statements or hedges, such as "I am unsure," "I don't know," "maybe," or "I am not sure but..."; several others use the same label for percentage or probability statements and class-wise confidence values, and one definition also includes implicit cues carried by tone, detail, or elaboration. As one study puts it, "LLMs can convey not only an answer to the question, but a level of confidence about the answer being correct" (LACIE: Listener-Aware Finetuning for Calibration in Large Language Models).

**Variants.** Papers study this behavior under several closely related variants. The most common variants center on expressing uncertainty in natural language, including hedging and lack-of-knowledge statements, while other work examines verbalized confidence as outputs like "Confidence: 90%," multimodal self-verification that extracts a confidence signal from the model's answer, and confidence score generation where the response gives a value for each candidate class. Papers variously use labels such as expressing uncertainty, confidence expression, verbalized confidence, linguistic uncertainty expression, and confidence score generation.

**Space of elicitation and scores.** No measurement instrument is linked to it. Papers instead describe elicitation and scoring procedures directly: some prompt models to give probability scores or to provide confidence for each class between 0.00 and 100.00, some append an uncertainty phrase such as "I am unsure" to uncertain answers, and one paper scores the behavior by asking the model to verify its own prediction and extracting the probability of the "yes" token, while also incorporating model confidence into accuracy computation.

**What it is taken as evidence of.** Only Confidence is linked as a construct, and the recorded relation is that Confidence is measured by this behavior. One paper explicitly lists "verbalized confidence" as a type of existing confidence measure (Trust or Escalate: LLM Judges with Provable Guarantees for Human Agreement). The available relation therefore uses confidence expression as an indicator of confidence and does not link it to other constructs.

## Sources

**[LACIE: Listener-Aware Finetuning for Calibration in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b8eaf3bcdc105423a972ed90eb07217-Paper-Conference.pdf)**
> Communicating certainty or uncertainty in an answer using explicit scores, epistemic markers, tone, or elaboration.

**[Forewarned is Forearmed:  Harnessing LLMs for Data Synthesis via Failure-induced Exploration](https://proceedings.iclr.cc/paper_files/paper/2025/file/1cded4f97cf5f01a284c574110b7e3b9-Paper-Conference.pdf) (as "Expressing uncertainty")**
> The observable behavior of a model explicitly stating its lack of confidence or knowledge in its response, such as by outputting phrases like 'I am unsure'.

**[CertainlyUncertain: A Benchmark and Metric for Multimodal Epistemic and Aleatoric Awareness](https://proceedings.iclr.cc/paper_files/paper/2025/file/21b5788d81f886ff81671379b4ff9453-Paper-Conference.pdf) (as "Confidence Expression")**
> Providing probability estimates or confidence levels for predictions, often by verifying if a predicted answer is correct via token probability.

**[Reflexive Guidance: Improving OoDD in Vision-Language Models via Self-Guided Image-Adaptive Concept Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/f8b78c39a262ea563ee51d2f6dba3b04-Paper-Conference.pdf) (as "Confidence score generation")**
> The action of producing numerical confidence values for each potential class in a classification task, expressed within a natural language response.

**[Thinking Out Loud: Do Reasoning Models Know When They're Right?](https://aclanthology.org/2025.emnlp-main.73.pdf) (as "Verbalized confidence")**
> The observable expression of a model's certainty in its answer, typically in the form of a percentage or probability statement.

**[Calibrating Verbal Uncertainty as a Linear Feature to Reduce Hallucinations](https://aclanthology.org/2025.emnlp-main.187.pdf) (as "Nuanced uncertainty expression")**
> The generation of text that qualifies an answer with expressions of doubt or uncertainty, such as "I am not sure but..." or "maybe".

**[MetaFaith: Faithful Natural Language Uncertainty Expression in LLMs](https://aclanthology.org/2025.emnlp-main.1505.pdf) (as "Linguistic uncertainty expression")**
> The observable use of words, phrases, and hedging language to convey a degree of confidence or doubt in a generated response.

**[Unfamiliar Finetuning Examples Control How Language Models Hallucinate](https://aclanthology.org/2025.naacl-long.183.pdf) (as "Uncertainty expression")**
> The observable behavior of a model explicitly stating its lack of knowledge in a response, for example by saying "I don't know".

## Relationships

### Associated with
- **Honesty** (constructs)
  > the expression of uncertainty can serve as a valuable indicator of honesty, and we view calibration from the perspective of model knowledge as a finer-grained handling of knowns
  - [Alignment for Honesty](https://proceedings.neurips.cc/paper_files/paper/2024/file/7428e6db752171d6b832c53b2ed297ab-Paper-Conference.pdf)
