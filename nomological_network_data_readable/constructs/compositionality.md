# Compositionality
**Type:** Construct  
**Referenced in:** 40 papers  
**Also known as:** Symbolic composition, Skill composition, Compositional capability, Compositional capabilities  

## State of the Field

**Definition agreement:** Consensus. Most papers define compositionality as the ability of a model, or of its learned parts, to combine simpler familiar elements such as concepts, linguistic units, actions, or reasoning steps into more complex structured meanings, plans, or solutions, often with novelty or systematic generalization. A few papers specialize this to particular settings like expert vectors, planning, or drug editing, but these are application-level variants of the same core property rather than different phenomena.

**Space of definitions.** Across the papers, the prevailing usage describes compositionality as a model property or ability to combine simpler elements, subproblems, skills, or attributes into coherent solutions, structures, or meanings for harder or more complex problems. Many definitions stay close to this general combine-parts framing, whether the parts are reasoning steps, multi-hop subquestions, objects and attributes, or pieces of structured output, and one paper explicitly describes a "compositionality gap" in which gains on single-hop questions outpace gains on complex multi-hop ones. A smaller line of work narrows the term to sentence-level meaning being determined by constituents and composition rules, while other papers place it in learned representations or components, such as high-level actions or expert vectors that can be combined in novel or algebraic ways.

**Space of facets.** Papers do not offer a single taxonomy, but they do introduce nearby labels that carve the construct more narrowly. Skill composition is used for combining atomic operations, reasoning steps, or previously learned language skills, symbolic composition for composing multiple distinct concepts using symbolic code, and compositional capability for building complex plans from reusable macro-actions; the same general label is also used for action representations, concept combinations, structured outputs, and algebraically composable model components. Some authors contrast compositionality with bag-of-words behavior, and one paper says models may extend productive syntactic patterns compositionally yet still show "compositional plausibility without conceptual coherence."

**Space of measurement.** Operationalization is linked to 5 instruments and 1 behavioral indicator. The instruments are all benchmarks: ARC, BIG-Bench Hard, CREPE, SugarCrepe, and Winoground. Among direct measured_by links, BIG-Bench Hard is described as evaluating reasoning, compositionality, and generalization, CREPE is used for systematicity and productivity, and SugarCrepe and Winoground are used to assess VLM compositionality; ARC appears as a related evaluation setting where tasks are treated as complex compositions of atomic operations. The only linked behavioral indicator is long-horizon task completion. No human evaluation, LLM-as-a-judge, probe, or analysis instrument is linked, and the benchmark-based operationalizations instantiate compositionality through performance on tasks built from structured combinations of simpler parts.

**Links.** A small set of papers claim causal relationships from compositionality to semantic understanding, out-of-distribution generalization, zero-shot generalization, and long-horizon task completion. Separate papers claim causal relationships from in-context learning, adaptability, and modality gap to compositionality; in the in-context learning paper, the quoted evidence says ICL has almost no effect on atomic foils and that more demonstrations do not increase accuracy on the HN-Atom split, while the modality-gap paper says the modality gap contributes to poor compositionality. Single papers also relate compositionality to inductive reasoning and to ARC tasks, with ARC tasks treated as complex compositions of atomic operations, and no correlation link is reported.

## Sources

**[Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf)**
> The degree to which a model can combine simpler subproblems into correct solutions for more complex problems as difficulty increases.

**[Combining Induction and Transduction for Abstract Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/35ee921eb17e9b4c3e73b6e2ae0d55ba-Paper-Conference.pdf) (as "Symbolic composition")**
> The latent ability to compose multiple distinct concepts together using symbolic code, uniquely equipped in induction models.

**[Understanding LLMs' Fluid Intelligence Deficiency: An Analysis of the ARC Task](https://aclanthology.org/2025.naacl-long.423.pdf) (as "Skill composition")**
> The ability to combine multiple atomic operations or reasoning steps into a coherent solution for a complex task, reflecting compositional generalization in problem-solving.

**[Hierarchical Planning for Complex Tasks with Knowledge Graph-RAG and Symbolic Verification](https://raw.githubusercontent.com/mlresearch/v267/main/assets/petruzzellis25a/petruzzellis25a.pdf) (as "Compositional capability")**
> The ability of a model to construct complex plans by combining simpler, reusable components (e.g., macro actions) in a structured and coherent way, reflecting systematic generalization across tasks.

**[Circuit Complexity Bounds for RoPE-based Transformer Architecture](https://aclanthology.org/2025.emnlp-main.561.pdf) (as "Compositional capabilities")**
> The ability to combine simpler computational or linguistic elements to form more complex structures and meanings.

## Relationships

### Compositionality →
- **CREPE** (measurements) — *measured_by*
  > We evaluate on the CREPE benchmark (Ma et al., 2023) that focuses on systematicity (Fodor & Pylyshyn, 1988) and productivity (von Humboldt et al., 1988; Chomsky, 1956).
  - [Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf)
- **Semantic understanding** (constructs) — *causes*
  > methods that improve compositionality of CLIP such as NegCLIP and CLIP-SVLC also achieve better performance on SUGARCREPE++ compared to CLIP, underscoring the importance of compositionality as a critical component for understanding semantic and lexical differences. (Section 3.1)
  - [SUGARCREPE++ Dataset: Vision-Language Model Sensitivity to Semantic and Lexical Alterations](https://proceedings.neurips.cc/paper_files/paper/2024/file/200661bf8f4993b7828a45a2a90f2ecf-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Out-of-distribution generalization** (constructs) — *causes*
  > Large language models can solve tasks that were not present in the training set. This capability is believed to be due to in-context learning and skill composition. (Abstract)
  - [Learning to grok: Emergence of in-context learning and skill composition in modular arithmetic tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/17d60fef592086d1a5cb136f1946df59-Paper-Conference.pdf)
- **Zero-shot generalization** (constructs) — *causes*
  > “compositionality contributes significantly to zero-shot generalization”
  - [Human-Object Interaction Detection Collaborated with Large Relation-driven Diffusion Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2a54def490213ee10631b991c5acc6b5-Paper-Conference.pdf)
- **Winoground** (measurements) — *measured_by*
  > We use several challenging benchmarks, Winoground (Thrush et al., 2022), NaturalBench (Li et al., 2024), SeeTrue (Yarom et al., 2024), SugarCREPE (Hsieh et al., 2024), for assessing VLMs’ compositionality. (Section 2.1)
  - [Exploring How Generative MLLMs Perceive More Than CLIP with the Same Vision Encoder](https://aclanthology.org/2025.acl-long.499.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > BIG-Bench Hard (BBH; Srivastava et al., 2023; Suzgun et al., 2023) is a benchmark comprising 27 challenging tasks across 23 task types, designed to evaluate large language models on reasoning, compositionality, and generalization. (Section 5.1)
  - [The Surprising Effectiveness of Test-Time Training for Few-Shot Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/akyurek25a/akyurek25a.pdf)

### → Compositionality
- **Modality gap** (constructs) — *causes*
  > The modality gap (Liang et al., 2022) is one of the primary factors contributing to the poor compositionality of contrastive vision-language models... (Section 6.1)
  - [Vision-Free Retrieval: Rethinking Multimodal Search with Textual Scene Descriptions](https://aclanthology.org/2025.emnlp-main.709.pdf)

### Associated with
- **Inductive reasoning** (constructs)
  > Inductive program synthesis excels at precise computations, and at composing multiple concepts (Abstract).
  - [Combining Induction and Transduction for Abstract Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/35ee921eb17e9b4c3e73b6e2ae0d55ba-Paper-Conference.pdf)
- **Adaptability** (constructs)
  > While compositionality and scalability are crucial for effective adaptation, current LLM training methodologies fall short of achieving both these properties simultaneously. (Section 1)
  - [Transformer-Squared: Self-adaptive LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/244da015b91e64f2d9362703fa2a902b-Paper-Conference.pdf)
- **ARC-AGI** (measurements)
  > Therefore, we regard ARC tasks as complex compositions of atomic operations for evaluation. (Section 4.2)
  - [Understanding LLMs' Fluid Intelligence Deficiency: An Analysis of the ARC Task](https://aclanthology.org/2025.naacl-long.423.pdf)
