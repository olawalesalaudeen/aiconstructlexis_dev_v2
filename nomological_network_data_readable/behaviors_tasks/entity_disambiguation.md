# Entity disambiguation
**Type:** Behavior  
**Referenced in:** 6 papers  
**Also known as:** Named entity disambiguation  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats entity disambiguation as choosing the correct entity when several candidates share a name or surface form. Most definitions describe selecting the right knowledge base entity or identifying which entity a claim refers to when multiple entities have similar names or attributes, while a smaller line of work applies the same idea to customer-transaction references, where the system must resolve the right order or product. Papers differ in how resolution is carried out: some frame a direct selection problem, while others describe using contextual clues and clarifying information, or iteratively interacting with a knowledge base and a claim graph to produce rationales, triplet identifiers, targeted questions, and concise summaries of differences.

**Variants.** Variants are mainly distinguished by setting and name: papers use both entity disambiguation and named entity disambiguation. They study it as knowledge base entity selection, claim-focused factual knowledge tasks, Wikipedia inconsistency detection, CRM disambiguation of customer transactions, and complex claim verification, including an iterative form where the system asks targeted clarifying questions over groups of triplets in a claim graph. Papers link it to two other behavioral indicators, Question answering as a related task and Fact checking via a causal claim that enhanced entity disambiguation leads to gaining in performance.

**Space of elicitation and scores.** Papers link it to one measurement instrument, FEVEROUS. In that usage, entity disambiguation appears as one of the evaluation partitions for claims, alongside multi-hop reasoning and numerical reasoning.

**What it is taken as evidence of.** Construct-level use is narrow. The only linked construct is Chain-of-thought reasoning, and the relationship is described as related rather than as measurement, with one paper stating that the challenge is amplified in multi-step reasoning because entity disambiguation must span the entire verification process.

## Sources

**[Beyond Seen Data: Improving KBQA Generalization Through Schema-Guided Logical Form Generation](https://aclanthology.org/2025.emnlp-main.442.pdf)**
> The task of selecting the correct knowledge base entity from a set of candidates that share the same name or surface form.

**[CRMArena: Understanding the Capacity of LLM Agents to Perform Professional CRM Tasks in Realistic Environments](https://aclanthology.org/2025.naacl-long.194.pdf) (as "Named entity disambiguation")**
> Resolving ambiguous customer-transaction references to the correct order or product mentioned in a query.

## Relationships

### Entity disambiguation →
- **FEVEROUS** (measurements) — *measured_by*
  > For consistency with prior work (Aly et al., 2021), we evaluate FEVEROUS claims on three key partitions: Multi-hop Reasoning, Entity Disambiguation, and Numerical Reasoning. (Section 4.1)
  - [Verify-in-the-Graph: Entity Disambiguation Enhancement for Complex Claim Verification with Interactive Graph Representation](https://aclanthology.org/2025.naacl-long.268.pdf)

### Associated with
- **Chain-of-thought reasoning** (constructs)
  > This challenge is amplified in multi-step reasoning, where entity disambiguation must span the entire verification process. (Section 1)
  - [Verify-in-the-Graph: Entity Disambiguation Enhancement for Complex Claim Verification with Interactive Graph Representation](https://aclanthology.org/2025.naacl-long.268.pdf)
- **Question answering** (behaviors tasks)
  > Entity Identification. This function acts as a question-answering module that extracts a specific entity. (Section 3.2)
  - [Verify-in-the-Graph: Entity Disambiguation Enhancement for Complex Claim Verification with Interactive Graph Representation](https://aclanthology.org/2025.naacl-long.268.pdf)
