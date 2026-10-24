# Domain knowledge
**Type:** Construct  
**Referenced in:** 48 papers  
**Also known as:** Professional knowledge, Domain expertise, Specialized knowledge, Topical knowledge, Component type recognition, Expert knowledge application, Domain-specific knowledge, In-domain knowledge, Domain-specific expertise, Localized domain knowledge, Comprehensive knowledge, Expertise, Subject expertise, Professional expertise  

## State of the Field

**Definition agreement:** Consensus. Most papers define domain knowledge as a model's specialized understanding or factual and conceptual knowledge of a particular field, usually including domain terminology, concepts, and the ability to apply that knowledge to field-specific tasks. A few papers emphasize how that knowledge is acquired, its breadth across multiple domains, or the quality of a response displaying it, but these are variations in emphasis and scope rather than different phenomena.

**Space of definitions.** Across papers, the dominant framing treats domain knowledge as a latent understanding, reservoir, or ability to access and apply specialized concepts, facts, terminology, procedures, or entities for a particular field, task, or environment. This includes formulations tied to interpreting observations and choosing actions, handling specialized statistical language and quantitative reasoning, bringing background knowledge to modeling decisions, or using domain-specific information for translation and review. A smaller line of work broadens the construct to a model's repository of professional or comprehensive knowledge across many subjects, while other papers narrow it to localized Chinese professional knowledge, in-domain knowledge acquired through fine-tuning, or circuit component-type recognition. Another recurring split is between knowledge as an underlying model property and knowledge as demonstrated in task performance, such as diagnosis, qualification tasks, tutoring, or paper review.

**Space of facets.** Papers use many near-synonymous labels, especially professional knowledge, domain-specific knowledge, domain expertise, specialized knowledge, and professional expertise, with other variants treated as narrower cases. The construct is broken into facets such as factual recall, terminology and concept understanding, quantitative reasoning, procedural or modeling knowledge, qualification-aligned job readiness, localized native knowledge, and background knowledge drawn from prior papers; one narrow formulation focuses on recognizing circuit component types, and another describes topical knowledge as an overall "theory" that can be distilled into core factual statements. Papers also position it alongside other capabilities rather than merging them: scientific question answering is described as requiring domain knowledge together with numerical proficiency, long-range context understanding, and cause-and-effect reasoning, and one tutoring paper states that subject expertise does not immediately translate to good teaching.

**Space of measurement.** Operationalization is mostly through 9 linked measurement instruments and 2 linked behavioral indicators. The most common instrument is MMLU, used in papers to represent a "knowledge reservoir" or specialized/comprehensive knowledge across domains; it is followed by DDXPlus, DiscoveryBench, MMAU, and MMLU-STEM, with several other instruments linked as well. These instruments are used to test specialized-subject evaluation, medical diagnosis, hypothesis generation, and expert-like perception and reasoning, and one additional paper mentions a LAMA-like probing method as evidence that a model acquires domain knowledge. Beyond instruments, papers also link the construct to 2 behavioral indicators, machine reading comprehension and scientific question answering. These operationalizations mostly match definitions centered on accessing and applying specialized information, but they are broader than narrower definitions tied to localization, particular environments, or component recognition.

**Links.** Beyond measurement, papers claim several other links. One paper records causal relationships in both directions between domain knowledge and machine reading comprehension; other papers claim causal relationships from domain knowledge to creativity and from domain knowledge to disambiguation ability, with the latter framed as scarce cross-domain knowledge leading to translation ambiguities. A separate paper describes domain knowledge as related to scientific question answering, alongside numerical proficiency, long-range context understanding, and cause-and-effect reasoning. No correlational links are recorded.

## Sources

**[Adapting Large Language Models via Reading Comprehension](https://proceedings.iclr.cc/paper_files/paper/2024/file/d51cd79a85833b022841f7a2383b32d3-Paper-Conference.pdf)**
> Knowledge of environment-specific concepts and entities needed to interpret observations and choose appropriate actions.

**[Seeking Neural Nuggets: Knowledge Transfer in Large Language Models from a Parametric Perspective](https://proceedings.iclr.cc/paper_files/paper/2024/file/6d6dc5c9ad19816d745535d352dc4295-Paper-Conference.pdf) (as "Professional knowledge")**
> The model's encoded repository of information across a wide spectrum of specialized subjects, ranging from elementary to advanced professional levels.

**[Chain-of-Experts: When LLMs Meet Complex Operations Research Problems](https://proceedings.iclr.cc/paper_files/paper/2024/file/d45ee77826332c100a1e15f7765b99ff-Paper-Conference.pdf) (as "Domain-specific knowledge")**
> The ability to access and apply factual knowledge in specialized domains such as health and science, which require background understanding and quantitative reasoning.

**[CURIE: Evaluating LLMs on Multitask Scientific Long-Context Understanding and Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/1ae4999aefb509d75d8608e07280922c-Paper-Conference.pdf) (as "Domain expertise")**
> The possession of deep, specialized knowledge in a particular scientific field, enabling comprehension and application of complex concepts.

**[MIND: Math Informed syNthetic Dialogues for Pretraining LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/abbbb25cddb2c2cd08714e6bfa2f0634-Paper-Conference.pdf) (as "Specialized knowledge")**
> The latent ability to answer questions requiring domain-specific factual or conceptual knowledge across multiple subjects.

**[From Models to Microtheories: Distilling a Model's Topical Knowledge for Grounded Question-Answering](https://proceedings.iclr.cc/paper_files/paper/2025/file/77d52754ff6b2de5a5d96ee921b6b3cd-Paper-Conference.pdf) (as "Topical knowledge")**
> The latent, overall understanding or "theory" a language model possesses about a specific subject area, which can be distilled into a set of core factual statements.

**[LaMAGIC2: Advanced Circuit Formulations for Language Model-Based Analog Topology Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chang25b/chang25b.pdf) (as "Component type recognition")**
> The model's ability to understand and differentiate between various types of circuit components (e.g., switches, capacitors, inductors) to correctly learn circuit structures.

**[StreamBench: Towards Benchmarking Continuous Improvement of Language Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/c189915371c4474fe9789be3728113fc-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Expert knowledge application")**
> The ability of a model to apply specialized, domain-specific knowledge, such as in making medical diagnoses.

**[UnCo: Uncertainty-Driven Collaborative Framework of Large and Small Models for Grounded Multimodal NER](https://aclanthology.org/2025.emnlp-main.388.pdf) (as "In-domain knowledge")**
> The specialized knowledge a model acquires by being fine-tuned on a specific, narrow dataset, allowing it to capture domain-specific conventions and patterns.

**[AraEval: An Arabic Multi-Task Evaluation Suite for Large Language Models](https://aclanthology.org/2025.emnlp-main.1679.pdf) (as "Domain-specific expertise")**
> The model's proficiency and specialized knowledge within particular professional or academic fields.

**[QualBench: Benchmarking Chinese LLMs with Localized Professional Qualifications for Vertical Domain Evaluation](https://aclanthology.org/2025.emnlp-main.303.pdf) (as "Localized domain knowledge")**
> The latent ability of a model to understand and apply domain-specific knowledge that is grounded in the Chinese sociopolitical, regulatory, and professional context, enabling accurate performance on localized qualification tasks.

**[Model Unlearning via Sparse Autoencoder Subspace Guided Projections](https://aclanthology.org/2025.emnlp-main.1348.pdf) (as "Comprehensive knowledge")**
> The breadth and depth of a model's general knowledge across a wide range of academic and professional subjects.

**[Multi-Domain Explainability of Preferences](https://aclanthology.org/2025.emnlp-main.736.pdf) (as "Expertise")**
> The quality of a response demonstrating specialized knowledge or skill in a particular field.

**[MathTutorBench: A Benchmark for Measuring Open-ended Pedagogical Capabilities of LLM Tutors](https://aclanthology.org/2025.emnlp-main.11.pdf) (as "Subject expertise")**
> The model's underlying knowledge and mastery of the subject matter being taught, in this case, mathematics.

**[Probing and Boosting Large Language Models Capabilities via Attention Heads](https://aclanthology.org/2025.emnlp-main.1450.pdf) (as "Professional expertise")**
> The latent ability to demonstrate domain-specific knowledge and reasoning in specialized fields such as medicine or law.

## Relationships

### Domain knowledge →
- **MMLU** (measurements) — *measured_by*
  > We measure this knowledge reservoir using the Massive Multitask Language Understanding dataset (MMLU) (Hendrycks et al., 2021). (Section 4.1)
  - [Seeking Neural Nuggets: Knowledge Transfer in Large Language Models from a Parametric Perspective](https://proceedings.iclr.cc/paper_files/paper/2024/file/6d6dc5c9ad19816d745535d352dc4295-Paper-Conference.pdf)
- **PubHealth** (measurements) — *measured_by*
  > To investigate this further [how LLMs possess the capability to access domain-specific factual knowledge], we sample claims from PubHealth (Kotonya & Toni, 2020) in the public health domain and SciFact (Wadden et al., 2022) in the science domain. (Section 2.1)
  - [Towards Understanding Factual Knowledge of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/7b7d7985f62284060d65f532ed2ea5fa-Paper-Conference.pdf)
- **SciFact** (measurements) — *measured_by*
  > To investigate this further [how LLMs possess the capability to access domain-specific factual knowledge], we sample claims from PubHealth (Kotonya & Toni, 2020) in the public health domain and SciFact (Wadden et al., 2022) in the science domain. (Section 2.1)
  - [Towards Understanding Factual Knowledge of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/7b7d7985f62284060d65f532ed2ea5fa-Paper-Conference.pdf)
- **Creativity** (constructs) — *causes*
  > By analyzing these enhanced creation cases with perfect reasoning information, we found that some reasoning tasks involving Professional Knowledge influence the next creation tasks. (Section 5.1).
  - [ConvBench: A Multi-Turn Conversation Evaluation Benchmark with Hierarchical Ablation Capability for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b69396afc07a9ca3428d194f4db84c02-Paper-Datasets_and_Benchmarks_Track.pdf)
- **DDXPlus** (measurements) — *measured_by*
  > To assess LLMs’ continuous improvement in applying expert knowledge, we use the DDXPlus [23] dataset, where agents must make a medical diagnosis out of 49 diagnoses based on patient profiles detailing their symptoms. (Section 3.2)
  - [StreamBench: Towards Benchmarking Continuous Improvement of Language Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/c189915371c4474fe9789be3728113fc-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MMLU-STEM** (measurements) — *measured_by*
  > Compared to pretraining just on raw data, a model pretrained on MIND-OWM shows significant boost in mathematical reasoning (GSM8K: +13.42%, MATH: +2.30%), including superior performance in specialized knowledge (MMLU: +4.55%, MMLU-STEM: +4.28%)
  - [MIND: Math Informed syNthetic Dialogues for Pretraining LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/abbbb25cddb2c2cd08714e6bfa2f0634-Paper-Conference.pdf)
- **MMAU** (measurements) — *measured_by*
  > MMAU emphasizes advanced perception and reasoning with domain-specific knowledge, challenging models to tackle tasks akin to those faced by experts. (ABSTRACT)
  - [MMAU: A Massive Multi-Task Audio Understanding and Reasoning Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/d36f208919582785db965fe648b9fe59-Paper-Conference.pdf)
- **DiscoveryBench** (measurements) — *measured_by*
  > “Some of our tasks, for instance, archaeology, require domain knowledge to derive a particular hypothesis.”
  - [DiscoveryBench: Towards Data-Driven Discovery with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d70af566e69f1dfb687791ecf955e28-Paper-Conference.pdf)
- **MathTutorBench** (measurements) — *measured_by*
  > Therefore, MATHTUTORBENCH is divided into three categories: math expertise which evaluates the subject-matter expertise of the tutor... (Section 1)
  - [MathTutorBench: A Benchmark for Measuring Open-ended Pedagogical Capabilities of LLM Tutors](https://aclanthology.org/2025.emnlp-main.11.pdf)
- **Disambiguation ability** (constructs) — *causes*
  > This scarcity limits their translation capabilities and prevents them from effectively acquiring cross-domain knowledge, which leads to translation ambiguities. (Section 1)
  - [DMDTEval: An Evaluation and Analysis of LLMs on Disambiguation in Multi-domain Translation](https://aclanthology.org/2025.emnlp-main.309.pdf)

### → Domain knowledge
- **Machine reading comprehension** (behaviors tasks) — *causes*
  > the utilization of reading comprehension texts provides domain knowledge that enhances performance in domain-specific tasks. (Section 6)
  - [Adapting Large Language Models via Reading Comprehension](https://proceedings.iclr.cc/paper_files/paper/2024/file/d51cd79a85833b022841f7a2383b32d3-Paper-Conference.pdf)

### Associated with
- **Scientific question answering** (behaviors tasks)
  > Task 1: ScienceQ&A Generation (LLMgen) Generates a synthesized summary response A to a research question Q using abstracts from the top N relevant papers. It must demonstrate (1) domain knowledge, (2) numerical proficiency, (3) long-range context understanding, and (4) cause-and-effect reasoning (Wadden et al., 2020). (Section 2)
  - [YESciEval: Robust LLM-as-a-Judge for Scientific Question Answering](https://aclanthology.org/2025.acl-long.675.pdf)
