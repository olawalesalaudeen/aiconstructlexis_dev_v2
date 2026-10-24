# Specificity
**Type:** Construct  
**Referenced in:** 7 papers  
**Also known as:** Logical specificity  

## State of the Field

**Definition agreement:** Consensus. Most papers define specificity as a property of the model's responses or feedback being concrete, precise, detailed, and tailored to the particular facts or question rather than vague or general. One paper instead uses specificity for how narrowly a refusal targets only the intended concept, but that looks like an outlier rather than a substantial competing usage.

**Space of definitions.** Across the surveyed work, the prevailing usage treats specificity as a response-level quality: answers should be concrete, detailed, precise, and targeted to the question, rather than vague or general. Within that shared framing, some definitions emphasize referring to facts and details, others stress directly addressing the specific issues raised, and the legal variant adds logically structured answers tailored to the relevant facts and rules. A smaller line of work uses the same term differently, defining specificity for abstention as not refusing questions about sibling or ancestor concepts, so the main disagreement is whether specificity concerns answer content or the scope of refusal.

**Space of facets.** One named variant is logical specificity, which narrows the common answer-focused meaning by adding logical structure and legal tailoring. Elsewhere, specificity appears as one evaluation criterion alongside evidence support, comprehensiveness, relevance, and factuality. The clearest terminological split is that the same label, specificity, is used both for detailed targeted responses and for selective non-refusal in abstention settings, and one abstention paper explicitly sets it against generalization through a trade-off.

**Space of measurement.** The recorded measurement links connect specificity to 2 instruments, Human evaluation and LLM-as-a-judge, and to 1 linked behavioral indicator, Abstention. In human evaluation, it is judged by whether a response is directly related to the specific issues in the question and gives clear, targeted answers rather than generalized ones; in LLM-as-a-judge setups, it is one criterion in a multi-perspective evaluation. These operationalizations match the prevailing response-quality definition, while the abstention work operationalizes specificity differently, as the proportion of sibling and ancestor concept questions that are not refused.

**Links.** Recorded links are associative rather than causal. Papers report that Generalization is related to Specificity, with one abstention study describing an inherent trade-off: abstaining from everything yields perfect generalization but no specificity, while not abstaining at all yields perfect specificity but no generalization; the same study relates Abstention to Specificity because questions about ancestor and sibling concepts should not be refused where abstention is undesirable. Legal reasoning is also related to Specificity in legal work, where responses are described as lacking logical specificity and sometimes including hallucinations, and no causal or correlational links are recorded.

## Sources

**[MetaAligner: Towards Generalizable Multi-Objective Alignment of Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d03800841fa1bb2f43ef1750aafcce4-Paper-Conference.pdf)**
> The model's tendency to refer to concrete facts and details rather than making vague or general arguments.

**[Elevating Legal LLM Responses: Harnessing Trainable Logical Structures and Semantic Knowledge with Legal Reasoning](https://aclanthology.org/2025.naacl-long.290.pdf) (as "Logical specificity")**
> The ability of a model to produce detailed, precise, and logically structured answers tailored to the specific facts and rules of a legal question, rather than general statements.

## Relationships

### Specificity →
- **LLM-as-a-judge** (measurements) — *measured_by*
  > The evaluation framework uses multi-perspective criteria by LLM-as-a-judge, such as comprehensiveness, specificity, and relevance. (Section 1)
  - [Multi-perspective Analysis of Large Language Model Domain Specialization: An Experiment in Accounting Audit Procedures Generation](https://aclanthology.org/2025.emnlp-main.891.pdf)

### Associated with
- **Generalization** (constructs)
  > Generalization and specificity are tied together by an inherent trade-off: abstaining from everything achieves perfect generalization but no specificity, and not abstaining at all results in perfect specificity rates but no generalization. (Section 5.1)
  - [Knowledge Graph Guided Evaluation of Abstention Techniques](https://aclanthology.org/2025.naacl-long.353.pdf)
- **Abstention** (behaviors tasks)
  > specificity: whether questions about ancestor and sibling concepts are not refused, where abstention is undesirable. (Section 1)
  - [Knowledge Graph Guided Evaluation of Abstention Techniques](https://aclanthology.org/2025.naacl-long.353.pdf)
