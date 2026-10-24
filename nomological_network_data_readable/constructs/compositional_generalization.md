# Compositional generalization
**Type:** Construct  
**Referenced in:** 33 papers  
**Also known as:** Compositional generalisation  

## State of the Field

**Definition agreement:** Consensus. Most papers define compositional generalization as a model's ability to reuse familiar primitives, components, concepts, or skills in novel combinations that were not seen during training. A few papers state this in specific domains such as language, programs, multimodal tasks, or GUI and API operations, but these are applications of the same core property rather than different phenomena.

**Space of definitions.** Across the papers, the prevailing usage treats the construct as a model capacity to generalize to novel combinations of familiar components that were not seen together during training. Most definitions express the same core idea with different units of composition, including verbs, subjects, and objects, linguistic expressions and targets, primitives or constraints, objects, attributes, and relations, and known subtasks or skills. A smaller line of work states the construct at a higher level as flexibly combining independently learned or foundational skills, or application operations, to solve a novel task, and some authors cast it explicitly as a latent ability while others describe it through success on held-out test cases.

**Space of facets.** When papers break the construct down, they do so by the kind or level of composition being tested. Examples include action composition over verb, subject, and object combinations, word-level composition versus phrase-level structure, and composition over simple motor skills, subtasks, or user requirements built from familiar primitives. Some authors also broaden the label, describing skill-mixing as a particular sort of compositional generalization and placing compositional and conditional reasoning under its umbrella, while another paper notes that success on some partitions may indicate both compositional and length generalization.

**Space of measurement.** Operationally, papers link the construct to 1 measurement instrument and 2 behavioral indicators. GrailQA measures it through validation and test partitions with unseen compositions of KB elements, Sentiment analysis is used as a task for phrase-level structure, and Integer addition is discussed as a related diagnostic of limits in elementary arithmetic. The broader measurement pattern in the snippets is to hold out combinations at test time, for example verb, subject, and object splits, synthetic benchmarks for semantic parsing, skill-mixing and cross-application agent tasks, hate-speech generalisation tests for unseen targets, and recursive addition partitions, which mostly matches the dominant definition of unseen recombinations of known parts.

**Links.** A few papers claim directional links. One paper claims a causal relationship from compositional generalization to safety alignment, saying it supports transfer across templates while preserving safety constraints, and another claims a causal relationship from compositional generalization to generalization in multi-task training. In the opposite direction, one paper claims a causal relationship from in-context learning to compositional generalization. Other papers report it as related to multimodal understanding, abstract reasoning, task generalization, robustness, and Integer addition.

## Sources

**[ExeDec: Execution Decomposition for Compositional Generalization in Neural Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/c43b2989b1ba055aa713a4abbe4a8b05-Paper-Conference.pdf)**
> The model's capacity to generalize its understanding to novel combinations of concepts (like verbs, subjects, and objects) that were not seen during training.

**[Compositional Generalisation for Explainable Hate Speech Detection](https://aclanthology.org/2025.emnlp-main.703.pdf) (as "Compositional generalisation")**
> The latent ability of a model to recognise and correctly interpret novel combinations of known linguistic elements (e.g., targets and hateful expressions) that were not observed together during training.

## Relationships

### Compositional generalization →
- **Safety alignment** (constructs) — *causes*
  > The success of PTST suggests that LLMs have certain abilities of compositional generalization, which enable them to generalize from one template to another while being aware of safety constraints in the new template.
  - [Keeping LLMs Aligned After Fine-tuning: The Crucial Role of Prompt Templates](https://proceedings.neurips.cc/paper_files/paper/2024/file/d6f034bb216b472fc7d32ec7aff20342-Paper-Conference.pdf)
- **Generalization** (constructs) — *causes*
  > identified CG as one of the main drivers of the generalization observed in multi-task training. (Abstract)
  - [Exploring Compositional Generalization of Multimodal LLMs for Medical Imaging](https://aclanthology.org/2025.acl-long.639.pdf)

### → Compositional generalization
- **In-context learning** (constructs) — *causes*
  > What is striking is that learning in-context can under some circumstances lead to compositional generalization, that is generalization to unseen combinations of previously observed constituents
  - [Attention as a Hypernetwork](https://proceedings.iclr.cc/paper_files/paper/2025/file/abfa542f546df3c6c35695ec8d5bf4b9-Paper-Conference.pdf)

### Associated with
- **Multimodal understanding** (constructs)
  > Many of the advanced vision-language capabilities demonstrated by GPT-4 can be understood as compositional skills rooted in two foundational skills: image understanding and language generation. (Section 5)
  - [MiniGPT-4: Enhancing Vision-Language Understanding with Advanced Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/50623630a2372839c078474efa6c0cb8-Paper-Conference.pdf)
- **Task generalization** (constructs)
  > While prior work has largely focused on qualitative insights into compositional generalization, our work takes a quantitative approach: studying how many training tasks are needed to achieve task generalization over an entire function class. (Section 2.1)
  - [Task Generalization with Autoregressive Compositional Structure: Can Learning from $D$ Tasks Generalize to $D^T$ Tasks?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/abedsoltan25a/abedsoltan25a.pdf)
- **Robustness** (constructs)
  > our approach considers the interaction between multiple problems, focusing more on the compositional generalization (Xu and Wang, 2024; An et al., 2023; Li et al., 2021) in robustness. (Section 1)
  - [From A and B to A+B: Can Large Language Models Solve Compositional Math Problems?](https://aclanthology.org/2025.emnlp-main.660.pdf)
- **Integer addition** (behaviors tasks)
  > These findings reveal a core limitation in LLMs’ compositional generalization for elementary arithmetic. (Contributions)
  - [Do Large Language Models Truly Grasp Addition? A Rule-Focused Diagnostic Using Two-Integer Arithmetic](https://aclanthology.org/2025.emnlp-main.681.pdf)
- **Sentiment analysis** (behaviors tasks)
  > Two tasks that assess different aspects of compositional generalisation are used in the paper: Inverse Dictionary Modelling (IDM) for word-level composition and Sentiment Classification (SC) for phrase-level structure. (Section 4.1)
  - [CARMA: Enhanced Compositionality in LLMs via Advanced Regularisation and Mutual Information Alignment](https://aclanthology.org/2025.emnlp-main.822.pdf)
