# Preference consistency
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Logical preference consistency, Judgment robustness  

## State of the Field

**Definition agreement:** Complementary. All papers treat preference consistency as stability or self-consistency in an LLM judge's preference judgments, but they define different aspects of that phenomenon: repeated choices on the same pair, invariance when option order is swapped, and a broader latent ability for coherent judgments across decisions. These fit together as compatible facets of the same kind of property rather than one identical definition used by every paper.

**Space of definitions.** Across papers, the prevailing usage treats preference consistency as the stability of a judge's pairwise choices when the same comparison is revisited, either through repeated evaluations of the same response pair or when the response order is swapped. A smaller line of work broadens this into a latent trait, under the label logical preference consistency, as an LLM's ability to make coherent, self-consistent judgments across preference decisions for stable and reliable decision-making. That same line also uses nearby language of judgment robustness, defining stable preference judgments as resistance to perturbations in input formulation or reasoning path. The main disagreement is between a narrow observable-stability framing and a broader latent-ability framing.

**Space of facets.** The available papers distinguish several contexts in which consistency is expected: repeated judging of the same pair, consistency under position switching, and a broader logical version concerned with coherent decisions across preference choices. In this usage, the term is applied both to a concrete evaluation behavior and to a more general property of judgment. One paper further presents logical preference consistency as a useful proxy for preference reliability and describes related properties as indicators of judgment robustness.

**Space of measurement.** No measurement instrument and no behavioral indicator are linked to this construct in papers. The operationalizations that are described are concrete: one paper measures it as "the fraction of majority votes" after prompting the same judge repeatedly on the same response pair, while another treats a preference as consistent when it remains on the same side of 0.5 after position switching. These operationalizations match the narrow stability framing more directly than the broader latent-trait formulation.

**Links.** Papers link preference consistency to three constructs. One paper claims a causal relationship from preference consistency to semantic understanding, stating that it "preserves semantic understanding capability." Separate papers report it is related to reliability, with logical preference consistency described as a useful proxy for preference reliability, and that positional bias is related to preference consistency, with lower consistency in one comparison described as evaluations being driven by position bias rather than output qualities.

## Sources

**[Your Weak LLM is Secretly a Strong Teacher for Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/332b4fbe322e11a71fa39d91c664d8fa-Paper-Conference.pdf)**
> The stability of a judge's choices across repeated evaluations of the same response pair.

**[Aligning with Logic: Measuring, Evaluating and Improving Logical Preference Consistency in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25u/liu25u.pdf) (as "Logical preference consistency")**
> The latent trait reflecting an LLM's ability to make coherent, self-consistent judgments across preference decisions, ensuring stable and reliable decision-making.

**[Aligning with Logic: Measuring, Evaluating and Improving Logical Preference Consistency in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25u/liu25u.pdf) (as "Judgment robustness")**
> The degree to which an LLM's preference judgments are stable and resistant to perturbations in input formulation or reasoning path.

## Relationships

### Preference consistency →
- **Semantic understanding** (constructs) — *causes*
  > While score consistency drives the PRM to optimize for better complete responses, preference consistency preserves semantic understanding capability, thereby yielding high-quality outputs. (Introduction)
  - [From Outcomes to Processes: Guiding PRM Learning from ORM for Inference-Time Alignment](https://aclanthology.org/2025.acl-long.946.pdf)

### Associated with
- **Positional bias** (constructs)
  > Moreover, GPT-3.5-Turbo shows a markedly lower preference consistency than GPT-4-Turbo, indicating that its evaluations are primarily driven by position bias rather than comparing output qualities. (Section 4.3)
  - [Investigating Non-Transitivity in LLM-as-a-Judge](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25w/xu25w.pdf)
- **Reliability** (constructs)
  > logical preference consistency serves as a useful proxy for preference reliability. (Section 1)
  - [Aligning with Logic: Measuring, Evaluating and Improving Logical Preference Consistency in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25u/liu25u.pdf)
