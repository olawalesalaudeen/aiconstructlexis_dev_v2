# Prompt sensitivity
**Type:** Construct  
**Referenced in:** 33 papers  
**Also known as:** Prompt brittleness, Instruction sensitivity, Response consistency, Stylistic self-consistency, Robustness to spurious features, Sensitivity  

## State of the Field

**Definition agreement:** Consensus. Most papers define prompt sensitivity as the instability of an LLM's outputs, predictions, or performance under small, semantically equivalent changes to the prompt, such as rewording, formatting, structure, or example order. A few papers instead use the term for different objects like an evaluation metric or a generic classifier/function's sensitivity to input changes, but these are outliers and the dominant usage is the same core phenomenon.

**Space of definitions.** Across the surveyed work, the prevailing usage treats prompt sensitivity as variation in a model's predictions, performance, or outputs when prompts or instructions are reworded, reformatted, reordered, or otherwise changed in meaning-preserving ways. Definitions repeatedly stress semantically similar or identical prompts, with examples including template choice, prompt formatting, verbalizers, example choice and order, and different instruction styles. The main axis of variation is what part of behavior is tracked: some definitions focus on overall task performance, others on the outputs themselves or predicted class distributions, and one survey narrows it to whether known knowledge can be successfully expressed under some prompt forms but not others. A smaller line uses inverse or stability-oriented language, defining it through robustness to spurious features, response consistency, or stylistic self-consistency across prompt styles.

**Space of facets.** Papers use several neighboring labels for this space. Prompt brittleness emphasizes sensitivity to formatting, verbalizers, example choice, and example order, while instruction sensitivity emphasizes textual phrasing or ordering of instructions; one survey also distinguishes Prompt-Sensitive Known Knowledge, knowledge that resides in the model's parameters but can be verified only with some prompt expressions. Other work names output stability directly as response consistency, defined in structural, lexical, and logical terms, and as stylistic self-consistency, measured through cross-response similarity. The inverse framing is robustness to spurious features under irrelevant or meaning-preserving prompt variations such as formatting.

**Space of measurement.** Prompt sensitivity is linked to 4 measurement instruments and 1 behavioral indicator. The named instruments are PRMBench, DBPedia, LLM-as-a-judge, and TREC, and the behavioral indicator is text classification: PRMBench assesses sensitivity as one of multiple dimensions and divides it into specific aspects, DBPedia and TREC are used through text classification tasks and predicted class distributions over prompt rephrasings, and one paper revisits the issue with LLMs as judges. Other operationalizations include standard deviation under instruction order changes, token-probability and discrete-choice metrics across task formats, normalized entropy of predicted class distributions across rephrasings, and a cross-response similarity measure for stylistic self-consistency. These measurements mostly track change under meaning-preserving prompt variation, though the consistency-oriented line measures stability of structure, wording, logic, or style across instruction styles.

**Links.** Reported construct links are both related links. One paper on faithfulness says faithfulness is closely related to prompt sensitivity, alongside implementation invariance, input invariance, and completeness, and another says sensitivity should be used as a guide to compare the robustness of different LLMs to prompt variations, relating prompt sensitivity to robustness.

## Sources

**[Batch Calibration: Rethinking Calibration for In-Context Learning and Prompt Engineering](https://proceedings.iclr.cc/paper_files/paper/2024/file/003e438cf04e3caf0a5c908495e484fe-Paper-Conference.pdf) (as "Prompt brittleness")**
> The tendency of model predictions to change substantially under small changes in prompt formatting, verbalizers, example choice, or example order.

**[Motif: Intrinsic Motivation from Artificial Intelligence Feedback](https://proceedings.iclr.cc/paper_files/paper/2024/file/a8de97fa77a09258b22880c230a83445-Paper-Conference.pdf)**
> The tendency for a model's performance and output to vary based on different wordings of a prompt, even when the prompts are semantically similar.

**[What Limits Virtual Agent Application? OmniBench: A Scalable Multi-Dimensional Benchmark for Essential Virtual Agent Capabilities](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bu25b/bu25b.pdf) (as "Instruction sensitivity")**
> The degree to which a model's performance is affected by variations in the textual phrasing or ordering of an instruction, even when the semantic meaning is identical.

**[RCScore: Quantifying Response Consistency in Large Language Models](https://aclanthology.org/2025.emnlp-main.290.pdf) (as "Response consistency")**
> The degree to which a model produces structurally, lexically, and logically stable outputs across different instruction styles for the same underlying task.

**[RCScore: Quantifying Response Consistency in Large Language Models](https://aclanthology.org/2025.emnlp-main.290.pdf) (as "Stylistic self-consistency")**
> A model's ability to generate outputs that are stylistically similar to each other when responding to the same problem presented with varied instructions.

**[Quantifying Language Models' Sensitivity to Spurious Features in Prompt Design or: How I learned to start worrying about prompt formatting](https://proceedings.iclr.cc/paper_files/paper/2024/file/6c0e99d736da621403018ca7b32b1a4d-Paper-Conference.pdf) (as "Robustness to spurious features")**
> The ability of a model to maintain stable performance despite the presence of irrelevant or meaning-preserving variations in the input, such as prompt formatting.

**[What Did I Do Wrong? Quantifying LLMs' Sensitivity and Consistency to Prompt Engineering](https://aclanthology.org/2025.naacl-long.73.pdf) (as "Sensitivity")**
> The degree to which an LLM's predicted class distribution changes across semantically equivalent rephrasings of the prompt, reflecting its instability to input variations independent of ground truth.

## Relationships

### Prompt sensitivity →
- **Prompt optimization** (behaviors tasks) — *causes*
  > However, these models are known to exhibit prompt sensitivity... Consequently, prompt design has emerged as a critical factor... prompting researchers to explore more efficient alternatives.
  - [GReaTer: Gradients Over Reasoning Makes Smaller Language Models Strong Prompt Optimizers](https://proceedings.iclr.cc/paper_files/paper/2025/file/18a42aad2fa8aa871e2ee20d425c208d-Paper-Conference.pdf)
- **TREC** (measurements) — *measured_by*
  > “Figure 2: Predicted class distributions over prompt rephrasings pτ across three samples of the same class Person (TREC dataset, Section 4).”
  - [What Did I Do Wrong? Quantifying LLMs' Sensitivity and Consistency to Prompt Engineering](https://aclanthology.org/2025.naacl-long.73.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > To rigorously assess whether LLMs truly suffer from prompt sensitivity, we revisit this issue using a more robust evaluation strategy: LLMs as judges.
  - [Flaw or Artifact? Rethinking Prompt Sensitivity in Evaluating LLMs](https://aclanthology.org/2025.emnlp-main.1006.pdf)
- **Selection bias** (constructs) — *correlates*
  > This suggests that a model weak on selection bias also tends to change its output for different prompt templates. (Section 7.1)
  - [Revisiting LLM Value Probing Strategies: Are They Robust and Expressive?](https://aclanthology.org/2025.emnlp-main.7.pdf)

### → Prompt sensitivity
- **Language modeling** (behaviors tasks) — *causes*
  > We posit that this sole reliance on the next token may contribute to prompt brittleness, based on the following intuitions... (Section 1)
  - [Beyond the Next Token: Towards Prompt-Robust Zero-Shot Classification via Efficient Multi-Token Prediction](https://aclanthology.org/2025.naacl-long.363.pdf)

### Associated with
- **Prompt robustness** (constructs)
  > The sensitivity should be used, for instance, as a guide to compare the “robustness” of different LLMs to variations of the prompt. (Section 3)
  - [What Did I Do Wrong? Quantifying LLMs' Sensitivity and Consistency to Prompt Engineering](https://aclanthology.org/2025.naacl-long.73.pdf)
