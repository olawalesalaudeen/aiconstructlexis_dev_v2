# Argument generation
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

**Space of definitions.** Across the papers, the prevailing use describes generating a structured, stance-conditioned argument from retrieved evidence: models use retrieved documents to construct coherent and persuasive arguments, often as a set of conclusions followed by premises that justify each conclusion. A related framing asks for a persuasive or explanatory text from a given topic and stance, still structured as a coherent argument. A smaller usage applies the same name to table reasoning, where generating arguments means producing the parameters required for an operation, such as column headers or row indices.

**Variants.** Papers study this behavior in several task settings. One treats it as the second subtask in retrieval-augmented computational argumentation, where retrieved documents are turned into structured conclusions and supporting premises; another elicits it with a topic-and-stance prompt for persuasive or explanatory argument writing; and a separate line uses the label "GenerateArgs" for producing operation arguments in table understanding.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, the available descriptions operationalize it through direct prompting, either by asking for a structured argument based on retrieved documents, by asking the model to generate an argument from a given topic and stance, or by querying the model to generate the required arguments for a selected table operation.

**What it is taken as evidence of.** Papers link it to 2 constructs, but with different relation types rather than a single shared construct framing. One paper claims a causal relationship from Logical reasoning to Argument generation, stating that generating logically coherent arguments requires reliable evidence and effective logical reasoning. One paper also reports that Argument generation is related to Logical soundness, framing coherent argument generation as a logical alignment problem in which responses are aligned to the given topic and stance.

## Sources

**[A Logical Fallacy-Informed Framework for Argument Generation](https://aclanthology.org/2025.naacl-long.374.pdf)**
> Producing a structured, stance-conditioned argument consisting of conclusions and supporting premises based on retrieved evidence.

## Relationships

### → Argument generation
- **Logical reasoning** (constructs) — *causes*
  > generating logically coherent arguments is a challenging task and requires an appropriate combination of reliable evidence and effective logical reasoning (Section 1)
  - [A Logical Fallacy-Informed Framework for Argument Generation](https://aclanthology.org/2025.naacl-long.374.pdf)

### Associated with
- **Logical soundness** (constructs)
  > We view models generating logically coherent arguments as a logical alignment problem, i.e., aligning the model responses (arguments) to the given topic and stance. (Section 1)
  - [A Logical Fallacy-Informed Framework for Argument Generation](https://aclanthology.org/2025.naacl-long.374.pdf)
