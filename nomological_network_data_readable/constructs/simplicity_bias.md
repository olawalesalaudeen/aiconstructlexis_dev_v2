# Simplicity bias
**Type:** Construct  
**Referenced in:** 3 papers  

## State of the Field

**Definition agreement:** Consensus. All papers define simplicity bias as a model's tendency to prefer simpler functions, strategies, or algorithmic solutions when multiple possibilities fit the data or examples. The differences are mainly in setting and explanation, such as early training, Transformers and short RASP-L programs, or in-context learning from pretraining, rather than in the core property being defined.

**Space of definitions.** Across the definitions, the prevailing framing treats simplicity bias as a tendency to favor simpler functions, strategies, or solutions over more complex alternatives. Papers agree on that core idea, but differ on what counts as simple and when the bias appears: one line describes models as favoring simpler functions like SAS earlier in training, even when these compete with more complex but ultimately more effective strategies; another casts it as Transformers learning the shortest RASP-L program consistent with the training set when multiple solutions fit it; another describes a bias toward lower-frequency functions in in-context learning when multiple functions are consistent with the examples. Definitions also differ on source: some describe the bias as the model's implicit inductive bias, while another says Transformers add no extra inductive bias of their own and instead emulate a Bayesian predictor shaped by the pretraining distribution.

**Space of facets.** Papers usually do not break the construct into a formal subtype system. Instead, the same label is applied to several instantiations of simplicity, including simpler learning strategies, lower-frequency components, and short RASP-L programs, and one paper explicitly frames it as competition between features or strategies. The construct is also described alongside breakthrough training dynamics in one paper and as part of the implicit bias of Transformers in others.

**Space of measurement.** No measurement instrument and no behavioral indicator are linked to this construct. Papers instead make it concrete through task-specific illustrations: models favoring simpler functions like SAS earlier in training, a clear bias for lower frequencies at small prompt lengths, and Transformers learning the shortest RASP-L program that fits the training set when one exists. No named benchmark, human evaluation, LLM-as-a-judge procedure, probe, or other measurement instrument is linked to it.

**Links.** One paper claims a causal relationship from simplicity bias to length generalization. In that claim, Transformers tend to learn the shortest RASP-L program that fits the training set, so if the minimal program exists and correctly length-generalizes, the Transformer will too.

## Sources

**[In-Context Learning through the Bayesian Prism](https://proceedings.iclr.cc/paper_files/paper/2024/file/d81cd83e7f6748af351485d73f305483-Paper-Conference.pdf)**
> The tendency of a model to favor simpler functions or learning strategies, especially early in training, which can compete with more complex but ultimately more effective strategies.

## Relationships

### Simplicity bias →
- **Length generalization** (constructs) — *causes*
  > Toy Model (RASP Learning). For symbolic tasks, Transformers tend to learn the shortest RASP-L program which fits the training set, if one exists. Thus, if this minimal program exists and correctly length-generalizes, then so will the Transformer. (Section 1)
  - [What Algorithms can Transformers Learn? A Study in Length Generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/45ed1a72597594c097152ef9cc187762-Paper-Conference.pdf)
