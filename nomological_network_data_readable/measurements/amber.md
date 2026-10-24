# AMBER
**Type:** Measurement  
**Referenced in:** 16 papers  

## State of the Field

**What it is.** Across papers, AMBER is most commonly described as a hallucination benchmark that extends POPE beyond existence checks to cover attribute and relation hallucinations as well. Several papers also present it as spanning both discriminative and generative tasks, and one description says it evaluates multimodal hallucinations through 15,220 yes-or-no questions. Smaller descriptions treat it as a dataset for image description tasks, or note implementation details, such as the use of CHAIR as the evaluation metric; one paper further describes it as designed to be evaluated without LLM assistance, with metrics including response-level hallucination and human cognition hallucination.

**What it is claimed to measure.** Papers use AMBER to measure 2 behavioral indicators and 2 constructs. The prevailing use is to measure hallucination, especially hallucination and object hallucination, with papers also using it to measure hallucination resistance and visual recognition. These links are concentrated on hallucination-related targets, while visual recognition appears as a smaller additional use.

**Space of uses.** No measurement instrument is linked to it. Papers usually position AMBER as one benchmark within broader hallucination evaluation suites, often alongside POPE, and some also use it with Object HalBench, MME-Hall, and MMHalBench. Papers also use it as an outcome check for whether a method mitigates hallucinations or reduces hallucination in generated descriptions, and one paper reports that improvement in the overall AMBER score indicates mitigation.

## Sources

**[CertainlyUncertain: A Benchmark and Metric for Multimodal Epistemic and Aleatoric Awareness](https://proceedings.iclr.cc/paper_files/paper/2025/file/21b5788d81f886ff81671379b4ff9453-Paper-Conference.pdf)**
> A benchmark that extends POPE to evaluate not just the existence of objects but also attribute and relation hallucinations, providing a more comprehensive analysis of multimodal model accuracy.

## Relationships

### → AMBER
- **Hallucination** (behaviors tasks) — *measured_by*
  > AMBER (Wang et al., 2023a) was designed to be evaluated without LLM assistance. ... Metrics: ... (c) Response-level hallucination (Hal); (d) Human cognition hallucination (Cog). (Sec. 5.1)
  - [CHiP: Cross-modal Hierarchical Direct Preference Optimization for Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1c73e9595126794186536cfbbed012f-Paper-Conference.pdf)
- **Object hallucination** (behaviors tasks) — *measured_by*
  > To evaluate performance on both generative and discriminative tasks, we use AMBER (Wang et al., 2023b), which measures hallucination using several metrics. For generative tasks, AMBER assesses the frequency of hallucinated objects in image descriptions... (Section 4.1)
  - [Mitigating Object Hallucination in MLLMs via Data-augmented Phrase-level Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/b73228d026ef49bfa49f95b7e330513e-Paper-Conference.pdf)
- **Visual recognition** (constructs) — *measured_by*
  > The models are tested across seven benchmarks: AMBER (visual recognition)... (Section 3)
  - [Visual Description Grounding Reduces Hallucinations and Boosts Reasoning in LVLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6805b5564bd8d813a81c4b5a97e5ca6-Paper-Conference.pdf)
- **Hallucination resistance** (constructs) — *measured_by*
  > Hallucination: AMBER (Wang et al., 2023) provides a discriminative way to evaluate various types of hallucination
  - [From Introspection to Best Practices: Principled Analysis of Demonstrations in Multimodal In-Context Learning](https://aclanthology.org/2025.naacl-long.170.pdf)
