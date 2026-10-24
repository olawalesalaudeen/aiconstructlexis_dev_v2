# Abstraction
**Type:** Construct  
**Referenced in:** 11 papers  
**Also known as:** Symbolic abstraction, Logical abstraction, Problem abstraction  

## State of the Field

**Definition agreement:** Consensus. Most papers define abstraction as forming or operating on high-level concepts, common features, or core structure while separating them from specific instances or surface details. The few definitions that focus on symbolic or formal representations describe the same core ability in the specific setting of reasoning problems, so the differences are mainly in emphasis and application.

**Space of definitions.** Across the surveyed work, the prevailing usage treats abstraction as identifying, forming, or operating on high-level concepts, principles, patterns, or summaries from specific instances, examples, or detailed information, often apart from surface details. A smaller strand narrows the term to reasoning tasks: symbolic abstraction is framed as representing problems in formal symbolic systems such as first-order logic, logical abstraction as operating on underlying symbolic structure rather than lexical content, and problem abstraction as simplifying and conceptually representing a problem's core components. The main variation is between this broad concept-formation framing and narrower structure-focused framings tied to reasoning problems.

**Space of facets.** Papers split the label into general abstraction, symbolic abstraction, logical abstraction, and problem abstraction. Symbolic abstraction and logical abstraction are used for closely related structure-centered abilities, both focused on separating structural relations from natural-language or lexical form, whereas problem abstraction emphasizes simplification of core components. Elsewhere abstraction is discussed alongside long-text understanding, reasoning, and systematic generalization, and one paper treats Relational reasoning as something that underlies Abstraction rather than as the same construct.

**Space of measurement.** No measurement instrument is linked to Abstraction, and one behavioral indicator is linked: Theorem proving, though the paper treats it as related rather than as a measure. In the source descriptions, papers operationalize abstraction through a puzzle benchmark with obfuscated variants that tests abstraction from lexical content to logical structure, through downstream tasks designed to quantify reasoning, abstraction, and long-term prediction, and through assessments of higher-order reasoning skills such as problem abstraction and simplification. These operationalizations mostly target movement from concrete, detailed, or lexical material to higher-level or structural representations, which matches the dominant definitions.

**Links.** Several papers claim a causal relationship from Abstraction to Reasoning, Knowledge transfer, Generalization, and Interpretability and explainability. The supporting language says that grounding on high-level concepts and principles lets models leverage reasoning, that higher levels of abstraction imply more flexible transfer, and that the ability to abstract enables reasoning and generalization in novel contexts. In the opposite direction, one paper claims a causal relationship from Relational reasoning to Abstraction, and another paper reports that Abstraction is related to the linked behavioral indicator because abstractions can be encapsulated in new definitions, lemmas, and tactics.

## Sources

**[Context-Aware Hierarchical Taxonomy Generation for Scientific Papers via LLM-Guided Multi-Aspect Clustering](https://aclanthology.org/2025.emnlp-main.788.pdf)**
> The capacity to identify and represent general concepts, principles, or high-level summaries from specific instances or detailed information.

**[Enhancing Logical Reasoning in Language Models via Symbolically-Guided Monte Carlo Process Supervision](https://aclanthology.org/2025.emnlp-main.1624.pdf) (as "Symbolic abstraction")**
> The ability to represent reasoning problems using formal symbolic systems (e.g., first-order logic) that capture structural relationships independent of natural language content.

**[Lexical Recall or Logical Reasoning: Probing the Limits of Reasoning Abilities in Large Language Models](https://aclanthology.org/2025.acl-long.664.pdf) (as "Logical abstraction")**
> The ability to identify and operate on the underlying symbolic structure of a problem, separating it from its surface-level lexical representation.

**[GraphArena: Evaluating and Exploring Large Language Models on Graph Computation](https://proceedings.iclr.cc/paper_files/paper/2025/file/77fa8253adfc8b33209639f3e9985741-Paper-Conference.pdf) (as "Problem abstraction")**
> A higher-order reasoning skill involving the simplification and conceptual representation of a problem's core components.

## Relationships

### Abstraction →
- **Reasoning** (constructs) — *causes*
  > Grounding on the high-level concepts and principles, LLMs can leverage their intrinsic Reasoning capabilities to derive the solution. (Section 7)
  - [Take a Step Back: Evoking Reasoning via Abstraction in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/592da1445a51e54a3987958b5831948f-Paper-Conference.pdf)
- **Memory efficiency** (constructs) — *causes*
  > In contrast, many sequence learning models lack the ability to abstract, which leads to memory inefficiency and poor transfer.
  - [Building, Reusing, and Generalizing Abstract Representations from Concrete Sequences](https://proceedings.iclr.cc/paper_files/paper/2025/file/e46984e056185b21ddb1e7973c365f14-Paper-Conference.pdf)
- **Knowledge transfer** (constructs) — *causes*
  > Higher levels of abstraction implies more flexible transfer
  - [Building, Reusing, and Generalizing Abstract Representations from Concrete Sequences](https://proceedings.iclr.cc/paper_files/paper/2025/file/e46984e056185b21ddb1e7973c365f14-Paper-Conference.pdf)
- **Generalization** (constructs) — *causes*
  > The ability to abstract, which is often seen as a human-specific trait, enables reasoning, generalization, and problem-solving in novel contexts
  - [Building, Reusing, and Generalizing Abstract Representations from Concrete Sequences](https://proceedings.iclr.cc/paper_files/paper/2025/file/e46984e056185b21ddb1e7973c365f14-Paper-Conference.pdf)

### → Abstraction
- **Relational reasoning** (constructs) — *causes*
  > Relational reasoning is a central component of generally intelligent systems and is believed to underlie human abilities for abstraction and systematic generalization (Section 1).
  - [Disentangling and Integrating Relational and Sensory Information in Transformer Architectures](https://raw.githubusercontent.com/mlresearch/v267/main/assets/altabaa25a/altabaa25a.pdf)

### Associated with
- **Theorem proving** (behaviors tasks)
  > In interactive theorem proving, abstractions can be encapsulated in new definitions, lemmas, and tactics. (Section 4.2)
  - [Position: Formal Mathematical Reasoning—A New Frontier in AI](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25az/yang25az.pdf)
