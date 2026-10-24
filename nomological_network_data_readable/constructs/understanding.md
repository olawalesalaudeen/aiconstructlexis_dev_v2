# Understanding
**Type:** Construct  
**Referenced in:** 33 papers  
**Also known as:** Comprehension, Comprehension ability, General comprehension capability, Understanding capability, Understanding ability  

## State of the Field

**Definition agreement:** Consensus. Most papers define understanding as a model's latent ability to comprehend and correctly interpret the meaning, intent, context, or requirements of inputs or tasks, usually in text or prompts and often framed as supporting correct downstream performance. A few papers specialize this to particular domains or modalities such as cybersecurity text, multimodal prompts, or OS environments, or mention task-based evidence, but these are setting-specific versions of the same core model-level comprehension capacity rather than different phenomena.

**Space of definitions.** Across papers, the prevailing usage treats understanding, often called comprehension, as a latent model ability to comprehend and correctly interpret text, instructions, task requirements, content, or user intent. Most definitions stay at this broad level and vary mainly by setting, for example few-shot prompts, multimodal prompts, cyber threat reports, OS environments, complex claims, multi-hop queries, or counseling scenarios. A smaller line of work defines it more explicitly through performance on discriminative or interrogative tasks and states that it is independent of generative fluency, while a few papers add qualifiers about it being foundational from large-scale text training or being influenced by left-to-right autoregressive processing.

**Space of facets.** Papers often use understanding and comprehension interchangeably, alongside names such as comprehension ability, understanding capability, and general comprehension capability, for a broad latent ability. Several papers place it next to reasoning and generation as a separate capability, and one taxonomy treats Understanding as one of six aspects alongside Memorization, Logic Inference, Discrimination, Generation, and Ethic. In that taxonomy, information extraction, fact checking, and named entity recognition are treated as understanding-level tasks concerned with facts, entities, concepts, and relationships in legal texts.

**Space of measurement.** Papers link understanding to 1 measurement instrument and 3 behavioral indicators. The only explicitly linked instrument is LexEval, a benchmark that includes Understanding as one aspect; its linked indicators are fact checking, information extraction, and named entity recognition, described as tasks that examine comprehension and interpretation of legal texts. Elsewhere, papers describe assessing understanding with discriminative or interrogative tasks, multiple-choice benchmarks for comprehension, and human evaluation of which response is more appropriate for panic scenarios; these operationalizations focus on selecting correct responses or judging content and appropriateness, and one line of work explicitly separates them from generative fluency.

**Links.** Papers report one correlational link, several related links, and several causal links around this construct. One paper reports that generative ability is reported to correlate with understanding, while noting weaker correlation between generation and understanding performance in GPT4 than in humans; papers also claim causal relationships from reasoning to understanding and from representation learning to understanding, and another paper claims a causal relationship from understanding to coherence. Understanding is also related to general ability, and one benchmark paper treats information extraction, fact checking, and named entity recognition as related to it at the understanding level.

## Sources

**[An LLM can Fool Itself: A Prompt-Based Adversarial Attack](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c72285e193ec90dca93258128698cfb-Paper-Conference.pdf) (as "Comprehension ability")**
> The latent capacity of a large language model to understand and correctly interpret complex instructions or tasks, such as those provided in a few-shot prompt.

**[The Generative AI Paradox: “What It Can Create, It May Not Understand”](https://proceedings.iclr.cc/paper_files/paper/2024/file/ce208d95d020b023cba9e64031db2584-Paper-Conference.pdf)**
> The latent ability to correctly identify, interpret, or reason about content, as evidenced by performance on discriminative or interrogative tasks, independent of generative fluency.

**[FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf) (as "Comprehension")**
> The ability to understand the implicit and explicit purpose and requirements of an instruction.

**[Empowering LLM Agents with Zero-Shot Optimal Decision-Making through Q-learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/c25de6a9da675464ebb925e430c58325-Paper-Conference.pdf) (as "General comprehension capability")**
> The foundational ability of a large language model, derived from training on extensive text data, to understand and process information.

**[SmartBench: Is Your LLM Truly a Good Chinese Smartphone Assistant?](https://aclanthology.org/2025.emnlp-main.194.pdf) (as "Understanding capability")**
> The model's latent ability to comprehend and correctly interpret the meaning and intent of input text.

**[FlipAttack: Jailbreak LLMs via Flipping](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25z/liu25z.pdf) (as "Understanding ability")**
> The latent capability of a large language model to comprehend and process textual information, which is influenced by its autoregressive, left-to-right processing nature.

## Relationships

### Understanding →
- **LexEval** (measurements) — *measured_by*
  > to systematically organize various evaluation tasks, we propose a Legal Cognitive Ability Taxonomy (LexAbility Taxonomy), which includes six aspects: Memorization, Understanding, Logic Inference, Discrimination, Generation, and Ethic. (Section 3.1)
  - [LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Coherence** (constructs) — *causes*
  > We conjecture that the instability, or lack of coherence, is a symptom of the model not being able to fully understand a request, i.e., accessing its parametric knowledge necessary for generating a correct answer. (Section 1)
  - [Analyzing and Improving Coherence of Large Language Models in Question Answering](https://aclanthology.org/2025.naacl-long.588.pdf)

### → Understanding
- **Generative ability** (constructs) — *correlates*
  > Our results show that although models can outperform humans in generation, they consistently fall short of human capabilities in measures of understanding, showing weaker correlation between generation and understanding performance... (Section 1)
  - [The Generative AI Paradox: “What It Can Create, It May Not Understand”](https://proceedings.iclr.cc/paper_files/paper/2024/file/ce208d95d020b023cba9e64031db2584-Paper-Conference.pdf)

### Associated with
- **Information extraction** (behaviors tasks)
  > Tasks at the Understanding level examine the ability to comprehend and interpret facts, entities, concepts, and relationships in legal texts, which serves as a foundational requirement for applying knowledge to downstream tasks. We construct five tasks at this level: Legal Element Recognition (2-1)... (Section C.3.2)
  - [LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Fact checking** (behaviors tasks)
  > Tasks at the Understanding level examine the ability to comprehend and interpret facts, entities, concepts, and relationships in legal texts... We construct five tasks at this level: ...Legal Fact Verification (2-2)... (Section C.3.2)
  - [LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Named entity recognition** (behaviors tasks)
  > Tasks at the Understanding level examine the ability to comprehend and interpret facts, entities, concepts, and relationships in legal texts... We construct five tasks at this level: ...Named-entity Recognition (2-5). (Section C.3.2)
  - [LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf)
- **General ability** (constructs)
  > degradation in foundational LLM capabilities such as comprehension, reasoning, and common sense — an effect known as alignment tax (Section 1)
  - [Model Surgery: Modulating LLM's Behavior Via Simple Parameter Editing](https://aclanthology.org/2025.naacl-long.321.pdf)
