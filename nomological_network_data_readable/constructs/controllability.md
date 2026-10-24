# Controllability
**Type:** Construct  
**Referenced in:** 69 papers  
**Also known as:** Generation control, Controllable generation, Control, Controlled generation, Controllable context sensitivity, Prompt steerability, Behavioral control, Targeted control, Model steering, Multi-attribute control, Steerability  

## State of the Field

**Definition agreement:** Complementary. Most papers define controllability as the ability to steer a model or system's outputs or behavior toward user-specified constraints, attributes, goals, or intents, usually at inference through prompts or other external signals. A smaller but noticeable set emphasizes different loci or mechanisms of that steering, such as adjustable system parameters, pipeline choices, internal representation edits, or training-time capability regulation, so the definitions are compatible facets of the same general phenomenon rather than identical restatements.

**Space of definitions.** Across the literature, the prevailing usage treats controllability as the ability to steer a model's behavior or outputs toward user-specified requirements, often at inference time. Many papers phrase this as steering by prompts, instructions, or adjustable parameters, for example by choosing and customizing behavior at test time through critique weights or retrieval thresholds, or by making a model adopt desired personas, traits, or target viewpoints. A smaller line of work narrows the construct to controlled generation under syntactic, semantic, length, information-density, validity, or vocabulary-complexity constraints, while another line defines it as intervention on internal representations so a targeted attribute changes without altering others. A few papers specialize the idea further as control over context sensitivity, ethical behavioral correction, targeted execution of design intentions, or simultaneous satisfaction of multiple attributes.

**Space of facets.** Papers use a broad family of near-synonymous labels for overlapping ideas, including steerability, controllable generation, controlled generation, generation control, prompt steerability, behavioral control, targeted control, model steering, controllable context sensitivity, and multi-attribute control. The most common breakdown is by what is being controlled: modality, output attributes such as sentiment, style, emotion and dialog-act, length and information density, persona or demographic alignment, or the balance among multiple alignment objectives. Another recurring divide is where control operates, with some papers treating it as output-level adherence to constraints and others as editing internal representations, selecting text representations in a processing pipeline, or tuning the balance between provided context and prior knowledge.

**Space of measurement.** Papers link controllability to 4 measurement instruments and 4 behavioral indicators. The linked instruments are AlpacaEval and STEER-BENCH, both benchmarks, plus Human evaluation and LLM-as-a-judge; operationalizations include evaluating steering with benchmark instructions, ranking outputs by how well they reflect intended text descriptions, and asking an LLM judge to rate steered outputs on relevant axes. The construct is also linked to 4 behavioral indicators, led by Hallucination and 3 others. These measurements mostly assess whether outputs match the intended control signal, which fits the dominant prompt- and instruction-centered definitions, though some papers define the construct instead around internal representation editing or pipeline control.

**Links.** Beyond measurement, papers link controllability to 6 constructs and 4 behavioral indicators. Several papers place it in a two-way relationship with Interpretability and explainability: some claim a causal relationship from that construct to controllability, one claims the reverse, and another reports them as related. One paper also claims causal relationships from Disentanglement and Self-reflection to controllability. In the other direction, papers claim causal relationships from controllability to Truthfulness, with one reporting a 40% increase when prompted, and to several other outcomes, and they report it as related to In-context learning and several other linked items.

## Sources

**[Motif: Intrinsic Motivation from Artificial Intelligence Feedback](https://proceedings.iclr.cc/paper_files/paper/2024/file/a8de97fa77a09258b22880c230a83445-Paper-Conference.pdf) (as "Steerability")**
> The extent to which a model can be directed to produce outputs in different modalities (code or natural language) based on the task requirements specified in the input.

**[COLLIE: Systematic Construction of Constrained Text Generation Tasks](https://proceedings.iclr.cc/paper_files/paper/2024/file/a77eadda332b6d4a9ae1e0e4024555f2-Paper-Conference.pdf)**
> The ability to customize a model’s behavior at inference time through adjustable parameters, such as weights on critique signals or retrieval thresholds.

**[GameTraversalBenchmark: Evaluating Planning Abilities Of Large Language Models Through Traversing 2D Game Maps](https://proceedings.neurips.cc/paper_files/paper/2024/file/3852c8254bc6d904c09db9921157f59b-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Generation control")**
> The latent capacity to regulate output generation so that produced actions remain valid, syntactically correct, and constraint-compliant.

**[FlexCap: Describe Anything in Images in Controllable Detail](https://proceedings.neurips.cc/paper_files/paper/2024/file/c91b6f7e0152b7a95ee777e987fe811e-Paper-Conference.pdf) (as "Controllable generation")**
> The ability of a model to modulate its output's characteristics, such as length or information density, based on explicit conditioning.

**[Towards Principled Evaluations of Sparse Autoencoders for Interpretability and Control](https://proceedings.iclr.cc/paper_files/paper/2025/file/53356aebeea8ffd40a8ac3bb66243162-Paper-Conference.pdf) (as "Control")**
> The extent to which internal representations can be edited to change a targeted attribute while leaving other relevant attributes unchanged.

**[Syntactic and Semantic Control of Large Language Models via Sequential Monte Carlo](https://proceedings.iclr.cc/paper_files/paper/2025/file/a2d537e69a6c6638a3630eef835f07de-Paper-Conference.pdf) (as "Controlled generation")**
> The ability of a language model to produce text that is guided by and conforms to a given set of syntactic or semantic constraints.

**[Controllable Context Sensitivity and the Knob Behind It](https://proceedings.iclr.cc/paper_files/paper/2025/file/c9d780d1e2d57d4b70e807608a72501b-Paper-Conference.pdf) (as "Controllable context sensitivity")**
> The ability of a language model to deliberately and controllably trade off its reliance on provided context versus its internal prior knowledge when making predictions.

**[Evaluating the Prompt Steerability of Large Language Models](https://aclanthology.org/2025.naacl-long.400.pdf) (as "Prompt steerability")**
> The latent ability of a model to shift its behavioral distribution from its baseline in response to prompting, reflecting how easily it can be shaped to reflect different personas across dimensions and directions.

**[A Checks-and-Balances Framework for Context-Aware Ethical AI Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chang25a/chang25a.pdf) (as "Behavioral control")**
> The latent ability to guide and correct linguistic behaviors in LLM outputs through structured oversight, ensuring compliance with ethical guardrails without compromising knowledge integrity.

**[Targeted control of fast prototyping through domain-specific interface](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shi25h/shi25h.pdf) (as "Targeted control")**
> The latent ability of a model or system to accurately and precisely implement a user's design intention without under- or over-specification, maintaining alignment between high-level intent and low-level execution.

**[AxBench: Steering LLMs? Even Simple Baselines Outperform Sparse Autoencoders](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25a/wu25a.pdf) (as "Model steering")**
> The latent ability to causally influence a language model's output behavior by intervening on its internal representations to incorporate a specific concept.

**[ECO Decoding: Entropy-Based Control for Controllability and Fluency in Controllable Dialogue Generation](https://aclanthology.org/2025.emnlp-main.1437.pdf) (as "Multi-attribute control")**
> The model's latent capacity to simultaneously satisfy multiple desired attributes in generated responses without interference or degradation in performance.

## Relationships

### Controllability →
- **Human evaluation** (measurements) — *measured_by*
  > To complement this, we conduct a Human Evaluation, where outputs are ranked based on how well they reflect the intended text descriptions. (Section 5.1.3)
  - [BRIDGE: Bootstrapping Text to Control Time-Series Generation via Multi-Agent Iterative Optimization and Diffusion Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25ah/li25ah.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > For the latter, we use an LLM judge to rate steered outputs on three relevant axes (see §3.3).
  - [AxBench: Steering LLMs? Even Simple Baselines Outperform Sparse Autoencoders](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25a/wu25a.pdf)
- **AlpacaEval** (measurements) — *measured_by*
  > For evaluating steering, we use the instructions from the Alpaca-Eval dataset (Li et al., 2023).
  - [AxBench: Steering LLMs? Even Simple Baselines Outperform Sparse Autoencoders](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25a/wu25a.pdf)
- **STEER-BENCH** (measurements) — *measured_by*
  > we introduce STEER-BENCH, a benchmark designed to evaluate population-specific steering in LLMs. (Section 1)
  - [STEER-BENCH: A Benchmark for Evaluating the Steerability of Large Language Models](https://aclanthology.org/2025.emnlp-main.925.pdf)

### → Controllability
- **Interpretability and explainability** (constructs) — *causes*
  > By embedding interpretability directly into the LLMs, we enable greater transparency, steering, and control over their behavior.
  - [Concept Bottleneck Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/de4ce91dfe56b919ee1c228d6a78f866-Paper-Conference.pdf)
- **Self-reflection** (behaviors tasks) — *causes*
  > Generating reflection tokens makes the LM controllable during the inference phase, enabling it to tailor its behavior to diverse task requirements. (ABSTRACT)
  - [Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection](https://proceedings.iclr.cc/paper_files/paper/2024/file/25f7be9694d7b32d5cc670927b8091e1-Paper-Conference.pdf)
- **Disentanglement** (constructs) — *causes*
  > attributes relevant to the task are disentangled in a way that allows precise control over model behavior; (Section 1)
  - [Towards Principled Evaluations of Sparse Autoencoders for Interpretability and Control](https://proceedings.iclr.cc/paper_files/paper/2025/file/53356aebeea8ffd40a8ac3bb66243162-Paper-Conference.pdf)

### Associated with
- **In-context learning** (constructs)
  > The prompt steerability of a model is related to how well a model can learn from in-context examples (Brown, 2020; Wies et al., 2024). (Section 1.1)
  - [Evaluating the Prompt Steerability of Large Language Models](https://aclanthology.org/2025.naacl-long.400.pdf)
- **Role-playing** (behaviors tasks)
  > Prompt steerability of a model’s persona describes the degree to which a model can be made to adopt different personas by prompting alone. (Section 3)
  - [Evaluating the Prompt Steerability of Large Language Models](https://aclanthology.org/2025.naacl-long.400.pdf)
- **Generation diversity** (constructs)
  > Recent advancements in DPO focus on mainly two directions: efficiency i.e., further simplifying the constraints of DPO, and controllability i.e., keeping the balance between alignment and generation diversity. (Section 1. Introduction)
  - [Constrain Alignment with Sparse Autoencoders](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yin25a/yin25a.pdf)
- **Concept detection** (constructs)
  > our results suggest that joint learning of concept detection and steering (as in ReFT-r1) may be the key to advancement.
  - [AxBench: Steering LLMs? Even Simple Baselines Outperform Sparse Autoencoders](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25a/wu25a.pdf)
- **Truthfulness** (constructs)
  > GPT-4o shows a 40% increase in truthfulness when prompted, and this pattern is observed across most models, with the stronger models exhibiting more pronounced shifts toward truthfulness. (Section 5.3)
  - [AI-LieDar : Examine the Trade-off Between Utility and Truthfulness in LLM Agents](https://aclanthology.org/2025.naacl-long.595.pdf)
