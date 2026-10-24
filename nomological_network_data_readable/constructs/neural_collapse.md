# Neural collapse
**Type:** Construct  
**Referenced in:** 3 papers  
**Also known as:** Within-class variability collapse  

## State of the Field

**Definition agreement:** Complementary. Most papers define neural collapse as a late-training geometric organization of the final-layer representations, with one broad definition mentioning both last-layer features and classifier weights and another specifying within-class collapse plus simplex ETF structure of class means. A third paper focuses only on the within-class clustering part, so the definitions foreground different parts of the same final-layer geometric phenomenon rather than contradicting each other.

**Space of definitions.** Across the surveyed work, the prevailing usage treats neural collapse as a geometric phenomenon in a model's last or penultimate layer, where same-class representations converge and the learned geometry becomes simplified. Most definitions describe final-layer representations, and sometimes final classifier weights, collapsing into structured forms; one definition further specifies that class features converge to a class center and that the class means form a simplex equiangular tight frame. A narrower formulation focuses only on within-class variability collapse, meaning top-layer representations or embeddings become tightly clustered around their class mean, so the main difference is whether neural collapse names this component alone or the broader joint geometry.

**Space of facets.** The clearest facet named in the papers is within-class variability collapse, labeled NC1 in one paper and described as top-layer representations collapsing to their class means. Elsewhere, the same term is used more broadly for the joint geometric structure of last-layer representations and final classifier weights, and more specifically for within-class convergence together with the arrangement of class means into a simplex equiangular tight frame.

**Space of measurement.** No measurement instrument is linked to neural collapse, and no behavioral indicator is linked to it. Instead, papers describe it through the geometric features named in their definitions: collapse in last-layer or penultimate representations and final classifier weights, tighter within-class clustering around class means, and, in one formulation, class means forming a simplex equiangular tight frame. These descriptions restate the construct directly rather than linking it to a separate named instrument.

**Links.** Papers link neural collapse most often to generalization and robustness, with fairness appearing in a smaller causal strand. One paper reports that generalization correlates with neural collapse and that neural collapse correlates with robustness, describing these behaviors as associated with generalization and robustness under specific conditions. Separate papers claim causal relationships from neural collapse to fairness, to stronger generalization in text classification, and to robustness in personalized learning scenarios during LoRA fine-tuning.

## Sources

**[Collapsed Language Models Promote Fairness](https://proceedings.iclr.cc/paper_files/paper/2025/file/96db0c53484428513ebc537fe48ddb7a-Paper-Conference.pdf)**
> A learning phenomenon in deep neural networks where last-layer representations and classifier weights adopt a specific, simplified geometric structure during the terminal phase of training.

**[Linguistic Collapse: Neural Collapse in (Large) Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/f88cc8930b47a45ec4733123bf3039b9-Paper-Conference.pdf) (as "Within-class variability collapse")**
> The reduction of dispersion among representations belonging to the same class, so that same-class embeddings become tightly clustered around their class mean.

## Relationships

### Neural collapse →
- **Robustness** (constructs) — *causes*
  > In this paper, we are the first to apply neural collapse to address the long-tail problem in data-based personalized learning and improve the robustness of large language models during LoRA fine-tuning in personalized learning scenarios. (Section 2)
  - [Advancing Personalized Learning with Neural Collapse for Long-Tail Challenge](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25f/hu25f.pdf)
- **Fairness** (constructs) — *causes*
  > This observation further inspires us to explicitly enforce neural collapse to promote fairness in pretrained language models. (Section 1)
  - [Collapsed Language Models Promote Fairness](https://proceedings.iclr.cc/paper_files/paper/2025/file/96db0c53484428513ebc537fe48ddb7a-Paper-Conference.pdf)
- **Generalization** (constructs) — *causes*
  > A higher degree of neural collapse (lower ∆TCD) leads to stronger generalizability in text classification tasks. (Section 4.1)
  - [Advancing Personalized Learning with Neural Collapse for Long-Tail Challenge](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25f/hu25f.pdf)
