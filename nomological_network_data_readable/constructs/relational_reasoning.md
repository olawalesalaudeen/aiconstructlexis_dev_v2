# Relational reasoning
**Type:** Construct  
**Referenced in:** 20 papers  
**Also known as:** Relation reasoning, Relational inference, Implicit relation inference  

## State of the Field

**Definition agreement:** Complementary. Most papers define relational reasoning as a model's ability to understand, infer, or manipulate relationships among entities, symbols, or objects, with some emphasizing abstract identity-independent relations and others emphasizing particular settings such as visual scenes, knowledge graphs, databases, shopping concepts, or implicit text relations. These definitions point to the same broad phenomenon in the same kind of thing, but they foreground different aspects such as abstraction, multi-hop structure, compatibility, or counterfactual dependence rather than giving one identical core definition.

**Space of definitions.** Across the surveyed work, the prevailing usage describes relational reasoning as a general ability to understand, infer, or operate on abstract or structured relationships among symbols, stimuli, objects, or entities, often independently of surface identity and sometimes through multi-hop or constraint-based structure. Several papers instantiate this with abstract-symbol tasks that train on strings encoding relations and then test on unseen symbols, or with structured entity relations in knowledge graphs and databases, while another benchmark defines relational tasks as modeling explicit interactions and counterfactual dependencies among entities. A smaller line of work narrows the term to visual or multimodal scene relations, and single papers use still narrower versions for compatibility among shopping concepts or for inferring relations implied by context rather than stated directly.

**Space of facets.** Papers use several adjacent names for overlapping but not identical ideas: relational reasoning is the common label, relation reasoning appears in visual and multimodal work, and relational inference or implicit relation inference name shopping-specific and discourse-level variants. Most papers frame it as an ability, though one benchmark uses it as one of three primary reasoning categories, alongside comparative reasoning and statistical reasoning. Within these uses, the construct is organized around abstract symbol relations, similarity or difference between stimuli, multi-hop reasoning over structured knowledge or databases, visual subject relations and attributes such as object size, explicit multi-entity interactions and counterfactual dependencies, and implicit cross-sentence relations.

**Space of measurement.** Operationalization in the linked papers is through 4 measurement instruments and 3 behavioral indicators. The named instruments are CLUTRR, described as a relational reasoning benchmark built from human-written stories about family relations, GQA, used to test relational reasoning in general visual question answering, MEBench, whose relational tasks probe explicit interactions and counterfactual dependencies among entities, and MMBench, which includes a relation reasoning category. The linked behavioral indicators include visual question answering and 2 other indicators, so the operationalizations span story-based text problems, VQA, and question-based tasks about entity interactions, matching these mixed text, entity-relational, and visual uses of the term.

**Links.** Beyond measurement, one paper claims a causal relationship from representation learning to relational reasoning, stating that explicit similarity scores between text pairs act as a teacher signal to enhance it. One paper also claims a causal relationship from relational reasoning to abstraction and to systematic generalization. Single papers further report it as related to analogical reasoning and to task settings such as visual question answering, plus 2 other related behavioral indicators.

## Sources

**[When can transformers reason with abstract symbols?](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a78459dbbcdc90783d183999e72176c-Paper-Conference.pdf)**
> The ability to understand and operate on abstract relationships between symbols, independent of the specific identity of those symbols.

**[DreamLLM: Synergistic Multimodal Comprehension and Creation](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a7a22152cd21f0ca3c0f8139bb32905-Paper-Conference.pdf) (as "Relation reasoning")**
> The ability to reason about relationships among entities in visual scenes and multimodal contexts.

**[Shopping MMLU: A Massive Multi-Task Online Shopping Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2049d75dd13db049897562bcf7d59da8-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Relational inference")**
> The ability to reason about the compatibility and interactions between different shopping concepts, such as between product categories and attributes.

**[DiscoSG: Towards Discourse-Level Text Scene Graph Parsing through Iterative Graph Refinement](https://aclanthology.org/2025.emnlp-main.398.pdf) (as "Implicit relation inference")**
> Inferring relationships between entities that are not explicitly stated in the text but can be deduced from context, such as deducing (cat, near, window) from 'The cat is on the mat' and 'The mat is under the window'.

## Relationships

### Relational reasoning →
- **GQA** (measurements) — *measured_by*
  > for general VQA tasks, we use ... GQA (Hudson & Manning, 2019) to test ... relational reasoning. (Section 4.1)
  - [LLaVA-MoD: Making LLaVA Tiny via MoE-Knowledge Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/1a2131ebe25bd55e4fc734126ea583ed-Paper-Conference.pdf)
- **CLUTRR** (measurements) — *measured_by*
  > CLUTRR (Sinha et al., 2019) is a relational reasoning benchmark based on human-written stories about family relations. (Section 4.1)
  - [SymBa: Symbolic Backward Chaining for Structured Natural Language Reasoning](https://aclanthology.org/2025.naacl-long.124.pdf)
- **Abstraction** (constructs) — *causes*
  > Relational reasoning is a central component of generally intelligent systems and is believed to underlie human abilities for abstraction and systematic generalization (Section 1).
  - [Disentangling and Integrating Relational and Sensory Information in Transformer Architectures](https://raw.githubusercontent.com/mlresearch/v267/main/assets/altabaa25a/altabaa25a.pdf)
- **Systematic generalization** (constructs) — *causes*
  > Relational reasoning is a central component of generally intelligent systems and is believed to underlie human abilities for abstraction and systematic generalization (Section 1).
  - [Disentangling and Integrating Relational and Sensory Information in Transformer Architectures](https://raw.githubusercontent.com/mlresearch/v267/main/assets/altabaa25a/altabaa25a.pdf)
- **Data efficiency** (constructs) — *causes*
  > Our results demonstrate that integrating explicit relational computational mechanisms into the Transformer architecture leads to significant performance gains in terms of data efficiency and parameter efficiency. (Abstract)
  - [Disentangling and Integrating Relational and Sensory Information in Transformer Architectures](https://raw.githubusercontent.com/mlresearch/v267/main/assets/altabaa25a/altabaa25a.pdf)
- **Parameter efficiency** (constructs) — *causes*
  > Our results demonstrate that integrating explicit relational computational mechanisms into the Transformer architecture leads to significant performance gains in terms of data efficiency and parameter efficiency. (Abstract)
  - [Disentangling and Integrating Relational and Sensory Information in Transformer Architectures](https://raw.githubusercontent.com/mlresearch/v267/main/assets/altabaa25a/altabaa25a.pdf)
- **MEBench** (measurements) — *measured_by*
  > Our benchmark comprises 4,780 questions which are systematically categorized into three primary categories: Comparative Reasoning, Statistical Reasoning and Relational Reasoning, further divided into eight distinct types, ensuring broad coverage of real-world multi-entity reasoning scenarios.
  - [MEBench: Benchmarking Large Language Models for Cross-Document Multi-Entity Question Answering](https://aclanthology.org/2025.emnlp-main.77.pdf)

### Associated with
- **Visual question answering** (behaviors tasks)
  > This question tests the model’s multimodal understanding capabilities, such as visual perception and relational reasoning. (Introduction)
  - [LongVideoBench: A Benchmark for Long-context Interleaved Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/329ad516cf7a6ac306f29882e9c77558-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Document-level relation extraction** (behaviors tasks)
  > Document-level RE poses greater challenges than sentence-level RE counterpart, primarily due to the presence of numerous implicit relations that require relational reasoning for identification. (Section 1. Introduction)
  - [DocKS-RAG: Optimizing Document-Level Relation Extraction through LLM-Enhanced Hybrid Prompt Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25am/xu25am.pdf)
- **Intent classification** (behaviors tasks)
  > Consequently, there is a need for relational reasoning methods concentrating on fine-grained semantics for multimodal intent recognition... (Introduction)
  - [LLM-Guided Semantic Relational Reasoning for Multimodal Intent Recognition](https://aclanthology.org/2025.emnlp-main.1130.pdf)
