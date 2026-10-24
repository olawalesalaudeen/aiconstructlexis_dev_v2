# Text simplification
**Type:** Behavior  
**Referenced in:** 11 papers  
**Also known as:** Sentence decomposition, Sentence simplification  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage is rewriting complex text into a clearer, easier-to-understand version while preserving the original meaning. Definitions repeatedly frame success as reducing complexity to improve readability or comprehension, often by using simpler words, rephrasing complex syntactic structures, and shortening sentences; as one study puts it, the aim is to "enhance the clarity and comprehensibility of a complex text while preserving its original meaning." A smaller line of work narrows the behavior to sentence-level conversion of complex, compound, or compound-complex inputs into one or more simple sentences. One paper also describes simplification as a tendency that may run against a specialized revision task.

**Variants.** Variants are most commonly distinguished by unit and constraint. Some papers use the names sentence simplification or sentence decomposition for breaking syntactically complex, compound, or compound-complex sentences into simpler forms, sometimes explicitly into one or more simple sentences; one variant additionally requires the output to match a target learner proficiency level while keeping as much level-appropriate vocabulary as possible. Other settings include legal sentence simplification that preserves original legal meaning, rewriting for broader audiences, and simplification used inside translation input rewriting or discussed during patent claim revision.

**Space of elicitation and scores.** No measurement instrument is linked to it. In the linked papers, the behavior is instead elicited as a rewriting or decomposition task, with outputs described in terms of simpler wording, rephrased syntax, shorter sentences, or one or more simple sentences.

**What it is taken as evidence of.** Papers do not use a single shared construct framing here. It is linked to 2 constructs, Readability and Translation quality, and both links are recorded as causal claims from text simplification to those constructs; one paper says simplification "most reliably improves translation quality" and reports that translations from simplified inputs are rated as more fluent and understandable. Separately, Relation extraction is the only linked behavioral indicator, and it also appears in a causal claim from text simplification.

## Sources

**[Patent-CR: A Dataset for Patent Claim Revision](https://aclanthology.org/2025.naacl-long.116.pdf)**
> An observable behavior where a model revises text in a way that reduces its complexity or increases its readability, which may be contrary to the goals of a specialized task like patent revision.

**[Automated Knowledge Graph Construction using Large Language Models and Sentence Complexity Modelling](https://aclanthology.org/2025.emnlp-main.783.pdf) (as "Sentence decomposition")**
> The process of breaking down syntactically complex, compound, or compound-complex sentences into simpler, more easily parsable forms.

**[Automated Knowledge Graph Construction using Large Language Models and Sentence Complexity Modelling](https://aclanthology.org/2025.emnlp-main.783.pdf) (as "Sentence simplification")**
> The task of converting sentences with complex syntactic structures (complex, compound, compound-complex) into one or more simple sentences.

## Relationships

### Text simplification →
- **Translation quality** (constructs) — *causes*
  > simplification most reliably improves translation quality. (Section 1)
  - [Automatic Input Rewriting Improves Translation with Large Language Models](https://aclanthology.org/2025.naacl-long.542.pdf)
- **Readability** (constructs) — *causes*
  > the human evaluation results confirm that translations from simplified inputs are rated as more fluent, understandable, and better at preserving the meaning of the reference translation. (Section 5.3)
  - [Automatic Input Rewriting Improves Translation with Large Language Models](https://aclanthology.org/2025.naacl-long.542.pdf)
- **Relation extraction** (behaviors tasks) — *causes*
  > Ablation studies demonstrate that integrating coreference and decomposition increases recall on rare relations by over 20%. (Abstract)
  - [Automated Knowledge Graph Construction using Large Language Models and Sentence Complexity Modelling](https://aclanthology.org/2025.emnlp-main.783.pdf)
